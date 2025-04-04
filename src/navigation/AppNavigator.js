import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'WYN Mobile',
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
            title: 'Serviços',
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen 
          name="ServiceDetails" 
          component={ServiceDetailsScreen}
          options={{
            title: 'Detalhes do Serviço',
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
          options={({ route }) => ({
            title: route.params?.provider || 'Chat',
            headerStyle: {
              backgroundColor: '#FFD700',
            },
            headerTintColor: '#000',
          })}
        />
        <Stack.Screen 
          name="Rating" 
          component={RatingScreen}
          options={{
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
      </Stack.Navigator>
    </NavigationContainer>
  );
} 