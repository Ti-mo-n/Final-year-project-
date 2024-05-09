import { ScrollView, View, Text } from 'react-native'
import React, {useState} from 'react'
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import NewsSection from '../components/NewsSection';
import { fetchBreakingNews } from '../../utils/NewsApi';
import { useQuery } from "@tanstack/react-query";
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from "../components/Loading";


export default function AidsNewsScreen() {
    const [breakingNews, setBreakingNews] = useState([]);

    const { isLoading: isBreakingNewsLoading, error } = useQuery({
        queryKey: ["breakingNews"],
        queryFn: fetchBreakingNews,
        onSuccess: (data) => {
          setBreakingNews(data.articles);
        },
        onError: (error) => {
          console.log("Error fetching news:", error);
          // Handle error here, e.g., display an error message
        },
      });
  return (
    <SafeAreaView>
        <View>
        <ScrollView
      contentContainerStyle ={{
        paddlingBottom:hp(80),
      }}
      >
      {isBreakingNewsLoading ? (
        <Loading />
      ) : (
        <NewsSection label="BreakingNews" newsProps={breakingNews}/>
      )}
      </ScrollView>
        </View>
    </SafeAreaView>

  )
}