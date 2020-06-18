import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Routes
import MainPage from './MainPage'

const Stack = createStackNavigator()

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={MainPage} name='MainPage' options={{ title : 'Listagem dos produtos' }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App