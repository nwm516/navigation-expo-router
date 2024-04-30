import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutPage() {
    return (
        <View style={styles.container}>
            <Link href="/HomePage" style={styles.link}>Head back to Home Page with Push</Link>
            <Link replace href="/HomePage" style={styles.link}>Head back to Home Page with Replace</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: 'red', // You can change the color here
        fontSize: 18,
    },
});
