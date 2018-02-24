import { ActivityIndicator, StyleSheet, View } from 'react-native';

import React from 'react';

const Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Loading;