import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';

export default function App() {
   
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen 
           name='login'
           component={Login}
           options={{
             headerShown:false
           }}
        />

        <Stack.Screen 
           name='home'
           component={Home}
           options={{
            headerLeft:null
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
   
  );
}

