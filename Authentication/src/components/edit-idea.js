import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InnerSection from './inner-section';
import { updateIdea, ideaInputChange, deleteIdea } from '../actions';
import { connect } from 'react-redux';
import IdeaPad from './ideapad-form';
import _ from 'lodash';

class EditIdea extends Component {
    componentDidMount() {
        const { params } = this.props.navigation.state;

        _.each(params.idea, (value, field) => {
            this.props.ideaInputChange({field, value});
        })
    }

    updateIdea = () => {
        const { title, idea, navigation } = this.props
        const { id } = navigation.state.params.idea;
        
        this.props.updateIdea({ title, idea, id })
    }

    deleteIdea = () => {
        const { id } = this.props.navigation.state.params.idea;
        this.props.deleteIdea({ id });
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
                <IdeaPad onHandleIdea={this.updateIdea} />
                <InnerSection>
                    <Button 
                    title='Delete' 
                    buttonStyle={{backgroundColor: 'red'}}
                    onPress={this.deleteIdea} />
                </InnerSection>
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

export default connect(mapStateToProps, {ideaInputChange, updateIdea, deleteIdea})(EditIdea);