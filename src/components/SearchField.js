import { StyleSheet, TextInput, View } from 'react-native';

import React from 'react';

const SearchField = props => (
    <View style={styles.container}>
        <TextInput {...props} style={styles.searchField} />
    </View>
);

const styles = StyleSheet.create({
    searchField: {
        height: 50,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        padding: 12,
        margin: 12,
        backgroundColor: '#FFFFFF'
    },
    container: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1
    }
});

export default SearchField;