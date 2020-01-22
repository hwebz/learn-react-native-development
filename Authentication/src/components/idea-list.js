import React, { Component } from 'react'
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView, ActivityIndicator, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { getIdeas } from '../actions';
import _ from 'lodash';

class IdeaList extends Component {

    componentDidMount() {
        this.props.getIdeas();
    }

    renderList = () => {
        return this.props.ideas.map((idea) => {
            return (
                <TouchableHighlight onPress={() => this.props.navigation.navigate('EditIdea', { idea })}>
                    <ListItem 
                        key={idea.id}
                        title={idea.title} 
                        subtitle={idea.idea}
                        leftIcon={{name: 'lightbulb-outline'}}
                        bottomDivider />
                </TouchableHighlight>
            )
        })
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={'small'} />
                    {this.props.message !== '' && (
                        <Text style={{fontSize: 16}}>{this.props.message}</Text>
                    )}
                </View>
            )
        }
        return (
            <ScrollView style={{marginTop: 0}}>
                {this.renderList()}
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const ideas = _.map(state.ideas.ideas, (val, id) => {
        val['id'] = id;
        return val;
    })
    return {
        ideas,
        loading: state.ideas.loading,
        message: state.ideas.message
    }
}

export default connect(mapStateToProps, { getIdeas })(IdeaList);