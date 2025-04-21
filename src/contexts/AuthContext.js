import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      let message = 'Erro ao fazer login';
      
      switch (error.code) {
        case 'auth/user-not-found':
          message = 'Usuário não encontrado';
          break;
        case 'auth/wrong-password':
          message = 'Senha incorreta';
          break;
        case 'auth/invalid-email':
          message = 'Email inválido';
          break;
        case 'auth/too-many-requests':
          message = 'Muitas tentativas. Tente novamente mais tarde';
          break;
      }
      
      return { success: false, error: message };
    }
  }

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      let message = 'Erro ao criar conta';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'Email já está em uso';
          break;
        case 'auth/invalid-email':
          message = 'Email inválido';
          break;
        case 'auth/weak-password':
          message = 'Senha muito fraca';
          break;
      }
      
      return { success: false, error: message };
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erro ao fazer logout' };
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      signIn, 
      signUp, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
} 