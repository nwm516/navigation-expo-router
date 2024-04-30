import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomePage from './HomePage';

export default function Page() {
    return (
        <View style={styles.container}>
            <HomePage />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
