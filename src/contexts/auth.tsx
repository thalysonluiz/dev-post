import { useState, createContext, ReactNode, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export interface UserProps {
  uid: string;
  name: string;
  email: string;
}

interface UserData {
  name: string,
  email: string,
  password: string
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (userData: UserData) => Promise<void>;
  signOut: () => Promise<void>;
  isUserLoading: boolean;
  signed: boolean;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@DevPost_User');

      if (storageUser) {
        setUser(JSON.parse(storageUser))
      }

      setLoading(false);
    }

    loadStorage();
  }, [])

  async function signIn(email: string, password: string) {
    setIsUserLoading(true);

    await auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        const userProfile = await firestore().collection('users')
          .doc(uid).get();

        const data = {
          uid,
          name: userProfile.data().name,
          email
        }

        setUser(data);
        storageUser(data);

      })
      .catch((error) => {
        Alert.alert('Email/Senha Inválido(s)')
        console.log(error)
      })
      .finally(() => setIsUserLoading(false))
  }

  async function signUp({ name, email, password }: UserData) {
    setIsUserLoading(true);

    await auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firestore().collection('users')
          .doc(uid).set({
            name,
            email
          })
          .then(() => {
            const data = {
              uid,
              name,
              email
            }

            setUser(data);
            storageUser(data);

          })
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setIsUserLoading(false))
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.removeItem('@DevPost_User')
      .then(() => setUser(null))
  }

  async function storageUser(data: UserProps) {
    await AsyncStorage.setItem('@DevPost_User', JSON.stringify(data));
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      signUp,
      signIn,
      signOut,
      isUserLoading,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
}