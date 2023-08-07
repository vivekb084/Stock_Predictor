import { EnvVar } from "../config";

const axios = require('axios');

export const getQuotes = async (method: String , url: string) => {
	const options = {
		method,
		url,
		headers: {
			'X-RapidAPI-Key' : EnvVar.X_RapidAPI_Key,
			'X-RapidAPI-Host': EnvVar.X_RapidAPI_Host,
		},
	};
	try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
        return error
    }
}