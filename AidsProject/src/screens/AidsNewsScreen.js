// AidsNewsScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Card from '../components/Card';

export default function AidsNewsScreen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=hiv&apiKey=0a4ff84e17044c0b8525a5e03c82dd7e');
                const jsonData = await response.json();
                setData(jsonData.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <Card item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
