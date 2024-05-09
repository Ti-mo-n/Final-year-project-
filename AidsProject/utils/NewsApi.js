import { newsApiKey } from "./ApiKeys";
import axios from "axios";

// Endpoints 
const apiBaseUrl = "https://newsapi.org/v2";

const breakingNewsUrl = `${apiBaseUrl}/everything?q=aids&apiKey=${newsApiKey}`;
const searchNewsUrl = (query) => `${apiBaseUrl}/everything?q=${query}&apiKey=${newsApiKey}`;

const newsApiCall = async (endpoint, params) => {
    const options = {
        method: "GET",
        url: endpoint,
        params: params ? params : {},
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const fetchBreakingNews = async () => {
    return await newsApiCall(breakingNewsUrl);
}

export const fetchSearchNews = async (query) =>{
    const endpoint = searchNewsUrl(query);
    return await newsApiCall(endpoint);
}