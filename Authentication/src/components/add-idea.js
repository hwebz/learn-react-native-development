import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InnerSection from './inner-section';
import { createIdea } from '../actions';
import { connect } from 'react-redux';
import IdeaPad from './ideapad-form';

class AddIdea extends Component {

    createIdea = () => {
        this.props.createIdea({
            title: this.props.title,
            idea: this.props.idea
        })
    }

    render() {
        if (this.props.message) {
            Alert.alert(
                'Idea Information',
                this.props.message,
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate('Ideas')},
                ],
                {cancelable: false},
            );
        }
        return (
            <View>
                <IdeaPad onHandleIdea={this.createIdea} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.idea.title,
        idea: state.idea.idea,
        message: state.idea.message
    }
}

export default connect(mapStateToProps, {createIdea})(AddIdea);