import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FormValidationMessage } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InnerSection from './inner-section';
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';
import IdeaPad from './ideapad-form';
import _ from 'lodash';

class LoginForm extends Component {
    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.user)) {
            this.props.navigation.navigate('Ideas');
        }
    }

    login = () => {
        this.props.login({
            email: this.props.email,
            password: this.props.password
        })
    }

    showButton() {
        if (this.props.loading) {
            return (
                <View>
                    <ActivityIndicator size={'small'} />
                </View>
            )
        }
        return (
            <Button 
                title='Login' 
                buttonStyle={{backgroundColor: 'blue'}}
                onPress={this.login} />
        )
    }

    render() {
        // if (this.props.user) {
        //     return (
        //         <IdeaPad />
        //     )
        // }
        return (
            <View>
                <InnerSection>
                    <Input 
                        label="Email"
                        placeholder="Email" 
                        value={this.props.email}
                        onChangeText={text => this.props.authInputChange({field: 'email', value: text})} />
                </InnerSection>
                <InnerSection>
                    <Input 
                        label="Password"
                        placeholder="Pasword" 
                        secureTextEntry={true} 
                        value={this.props.password}
                        errorMessage={this.props.error}
                        errorStyle={{fontSize: 16}}
                        inputContainerStyle={this.props.error ? {borderColor: 'red'} : {}}
                        onChangeText={text => this.props.authInputChange({field: 'password', value: text})} />
                </InnerSection>
                <InnerSection>
                    {this.showButton()}
                </InnerSection>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, {authInputChange, login})(LoginForm);