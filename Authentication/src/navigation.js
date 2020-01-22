import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginForm from './components/login-form';
import IdeaList from './components/idea-list';
import AddIdea from './components/add-idea';
import EditIdea from './components/edit-idea';
import { Icon } from 'react-native-elements'

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login'
        }
    }
})

const AppStack = createStackNavigator({
    Ideas: {
        screen: IdeaList,
        navigationOptions: ({navigation}) => {
            return {
                title: 'Your ideas',
                headerRight: (
                    <Icon type="evilicon" name="plus" size={30} onPress={() => navigation.navigate('AddIdea')} />
                )
            }
        }
    },
    AddIdea: {
        screen: AddIdea,
        navigationOptions: {
            headerTitle: 'Add your idea'
        }
    },
    EditIdea: {
        screen: EditIdea,
        navigationOptions: {
            headerTitle: 'Edit your idea'
        }
    }
})

const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,
        Home: AppStack
    },
    {
        initialRouteName: 'Auth',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator);