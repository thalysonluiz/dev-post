import { useState, createContext, ReactNode } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  signIn?: (email: string, password: string) => Promise<void>;
  signUp: (userData: UserData) => Promise<void>;
  signOut?: () => Promise<void>;
  isUserLoading: boolean;
  signed: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(false);

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

  async function storageUser(data: UserProps) {
    await AsyncStorage.setItem('@DevPost_User', JSON.stringify(data));
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      signUp,
      isUserLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}