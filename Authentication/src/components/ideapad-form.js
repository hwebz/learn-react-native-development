import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FormValidationMessage } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, clearIdeaMessage } from '../actions';
import { connect } from 'react-redux';

class IdeaPad extends Component {
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
                title='Submit' 
                buttonStyle={{backgroundColor: 'green'}}
                onPress={this.props.onHandleIdea} />
        )
    }

    componentWillUnmount() {
        this.props.clearIdeaMessage();
    }

    render() {
        return (
            <View>
                <InnerSection>
                    <Input 
                        label="Title"
                        placeholder="Title" 
                        value={this.props.title}
                        onChangeText={text => this.props.ideaInputChange({field: 'title', value: text})} />
                </InnerSection>
                <InnerSection>
                    <Input 
                        label="Idea"
                        placeholder="Jot down your idea here..." 
                        secureTextEntry={true} 
                        value={this.props.idea}
                        errorMessage={this.props.error}
                        errorStyle={{fontSize: 16}}
                        multiline={true}
                        textAlignVertical="top"
                        inputStyle={{height: 200}}
                        inputContainerStyle={this.props.error ? {borderColor: 'red'} : {}}
                        onChangeText={text => this.props.ideaInputChange({field: 'idea', value: text})} />
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
        title: state.idea.title,
        idea: state.idea.idea,
        loading: state.idea.loading
    }
}

export default connect(mapStateToProps, {ideaInputChange, clearIdeaMessage})(IdeaPad);