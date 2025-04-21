import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../contexts/AuthContext';
import { Loading } from '../components/Loading';

// Screens
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ServiceDetailsScreen } from '../screens/ServiceDetailsScreen';
import { ServiceListScreen } from '../screens/ServiceListScreen';
import { ChatListScreen } from '../screens/ChatListScreen';
import { ChatRoomScreen } from '../screens/ChatRoomScreen';
import { RatingScreen } from '../screens/RatingScreen';
import { PaymentScreen } from '../screens/PaymentScreen';
import { PaymentSuccessScreen } from '../screens/PaymentSuccessScreen';
import { PaymentErrorScreen } from '../screens/PaymentErrorScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading text="Carregando..." />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        // Rotas autenticadas
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen 
            name="ServiceDetails" 
            component={ServiceDetailsScreen}
            options={{
              headerShown: true,
              title: 'Detalhes do Serviço',
              headerStyle: {
                backgroundColor: '#FFD700',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen 
            name="ServiceList" 
            component={ServiceListScreen}
            options={{
              headerShown: true,
              title: 'Lista de Serviços',
              headerStyle: {
                backgroundColor: '#FFD700',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen 
            name="ChatList" 
            component={ChatListScreen}
            options={{
              headerShown: true,
              title: 'Conversas',
              headerStyle: {
                backgroundColor: '#FFD700',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen 
            name="ChatRoom" 
            component={ChatRoomScreen}
            options={{
              headerShown: true,
              title: 'Chat',
              headerStyle: {
                backgroundColor: '#FFD700',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen 
            name="Rating" 
            component={RatingScreen}
            options={{
              headerShown: true,
              title: 'Avaliar Serviço',
              headerStyle: {
                backgroundColor: '#FFD700',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen 
            name="Payment" 
            component={PaymentScreen}
            options={{
              headerShown: true,
              title: 'Pagamento',
              headerStyle: {
                backgroundColor: '#FFD700',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen 
            name="PaymentSuccess" 
            component={PaymentSuccessScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="PaymentError" 
            component={PaymentErrorScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        // Rotas não autenticadas
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
} 