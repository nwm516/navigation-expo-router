import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const User334 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>User Profile ID# 334</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange', // You can change the color here
    },
});

export default User334;
