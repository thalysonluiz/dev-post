import { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'expo-image-picker';
//import ImagePicker from 'react-native-image-picker';

import { useAuth } from '@hooks/useAuth';
import { Header } from '@components/Header';
import { Feather } from '@expo/vector-icons';
import {
  Avatar,
  Container,
  Email,
  Name,
  UploadButton,
  UploadText,
  ButtonText,
  Button,
  ButtonBack,
  ModalContainer,
  Input
} from './styles';

export function Profile() {
  const [url, setUrl] = useState(null);
  const [open, setOpen] = useState(false);

  const { signOut, user, storageUser, setUser } = useAuth();
  const [name, setName] = useState(user?.name);

  function handleSignOut() {
    signOut();
  }

  async function updateProfile() {
    if (name === '') {
      return;
    }

    await firestore().collection('users')
      .doc(user.uid).update({
        name: name
      })

    const postDocs = await firestore().collection('posts')
      .where('userId', '==', user.uid).get();

    postDocs.forEach(async doc => {
      await firestore().collection('posts').doc(doc.id).update({
        autor: name
      })
    })

    let data = {
      uid: user.uid,
      name: name,
      email: user.email
    }

    storageUser(data);
    setUser(data);
    setOpen(false);
  }

  // async function pickImageAsync() {

  //   ImagePicker.launchImageLibrary({
  //     mediaType: 'photo'
  //   }, response => {
  //     if (response.didCancel) {
  //       console.log('Cancel')
  //     } else if (response.errorMessage) {
  //       console.log(response.errorMessage)
  //     }
  //     else {
  //       uploadFileFirebase(response);
  //     }
  //   })
  // }


  async function pickImageAsync() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      uploadFileFirebase(result)
        .then(() => {
          updateAvatarPosts()
          loadAvatar();
        })
      //console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  async function uploadFileFirebase(response: ImagePicker.ImagePickerResult) {
    //console.log(response)
    const fileSource = response?.assets![0].uri;
    const storageRef = storage().ref('users').child(user?.uid);
    return await storageRef.putFile(fileSource);
  }

  async function updateAvatarPosts() {
    const response = await storage().ref('users')
      .child(user?.uid).getDownloadURL()
      .then(async image => {
        const postDocs = await firestore().collection('posts')
          .where('userId', '==', user.uid).get();

        postDocs.forEach(async doc => {
          await firestore().collection('posts').doc(doc.id).update({
            avatarUrl: image
          })
        })
      })
      .catch(error => console.log(error))
  }

  async function loadAvatar() {
    try {
      const response = await storage().ref('users')
        .child(user?.uid).getDownloadURL();

      setUrl(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadAvatar();
  }, [])

  return (
    <Container>
      <Header />
      <UploadButton onPress={pickImageAsync}>
        <UploadText>+</UploadText>
        {
          url ? (
            <Avatar
              source={{ uri: url }}
            />
          ) : (
            <Avatar
              source={require('@assets/avatar.png')}
            />
          )
        }
      </UploadButton>
      <Name numberOfLines={1}>{user.name}</Name>
      <Email numberOfLines={1}>{user.email}</Email>

      <Button bg="#428cfd" onPress={() => setOpen(true)} >
        <ButtonText color="#fff">Atualizar Perfil</ButtonText>
      </Button>
      <Button bg="#f1f1f1" onPress={handleSignOut} >
        <ButtonText color="#3b3b3b">Sair</ButtonText>
      </Button>

      <Modal visible={open} animationType="slide" transparent={true}>
        <ModalContainer>
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather
              name='arrow-left'
              size={22}
              color="#121212"
            />
            <ButtonText color="#121212">Voltar</ButtonText>
          </ButtonBack>

          <Input
            placeholder={user?.name}
            value={name}
            onChangeText={setName}
          />
          <Button bg="#428cfd" onPress={updateProfile} >
            <ButtonText color="#fff">Atualizar</ButtonText>
          </Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
}