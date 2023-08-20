import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import firestore from '@react-native-firebase/firestore';

import { AreaInput, Container, Input, List } from './styles';
import { SearchList } from '@components/SearchList';

export function Search() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (search === '' || search === undefined) {
      setUsers([]);
      return;
    }

    const subscriber = firestore().collection('users')
      .where('name', '>=', search)
      .where('name', '<=', search + '\uf8ff')
      .onSnapshot(snapshot => {
        const listUsers = [];

        snapshot.forEach(doc => {
          listUsers.push({
            id: doc.id,
            ...doc.data()
          })
        })

        setUsers(listUsers);
        //console.log(listUsers)
      });

    return () => subscriber();

  }, [search])

  return (
    <Container>
      <AreaInput>
        <Feather name='search' color='#e52246' size={20} />
        <Input
          placeholder='Procurando alguém?'
          placeholderTextColor='#353840'
          value={search}
          onChangeText={setSearch}
        />
      </AreaInput>
      <List
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchList data={item} />}
      />
    </Container>
  );
}