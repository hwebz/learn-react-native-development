import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InnerSection = props => {
    return <View style={styles.container}>{props.children}</View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10
    }
})

export default InnerSection;