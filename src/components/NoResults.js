import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const NoResults = () => (
    <View style={styles.wrapper}>
        <Text>There are no results for your search</Text>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        padding: 12
    }
});

export default NoResults;