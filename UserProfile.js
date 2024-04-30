import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function UserProfile() {
    return (
        <View style={styles.container}>
            <Link href={{ pathname: "user/[id]", params: { id: '334' } }} style={styles.link}>
                View User 334
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: 'purple', // You can change the color here
        fontSize: 18,
    },
});
