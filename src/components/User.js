import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const User = props => (
    <View style={styles.container}>
        <Image style={styles.avatar} source={{
            uri: props.avatar_url
        }} />
        <View style={styles.info}>
            <Text style={styles.name}>{props.login}</Text>
            <Text style={styles.score}>{props.score}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        padding: 12,
        backgroundColor: '#EEEEEE',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 7
    },
    info: {
        
    },
    name: {
        fontSize: 24
    },
    score: {
        fontSize: 32
    }
})

export default User;