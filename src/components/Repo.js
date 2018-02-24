import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const Repo = props => (
    <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    name: {
        fontSize: 18
    }
});

export default Repo;