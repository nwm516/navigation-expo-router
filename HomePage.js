import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
            <Link href="/AboutPage" style={styles.link}>Go to About Page</Link>
            <Link href="/UserProfile" style={styles.link}>Go to User Profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue', // You can change the color here
        marginBottom: 20,
    },
    link: {
        color: 'green', // You can change the color here
        fontSize: 18,
    },
});