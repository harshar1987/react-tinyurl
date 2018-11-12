import axios from "axios";

const endpoint = "https://harsha-url-shortner.azurewebsites.net/api/ShortUrl/";
// const endpoint = "https://localhost:5001/api/ShortUrl/";
export class UrlShortenService {

    static async getLongUrl(shortUrl) {
        let data = "";
        try {

            const response = await axios.get(`${endpoint}${shortUrl}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });

            data = await response;

        } catch (error) {
            console.error(error);
        }

        return data;
    }

    static async shortenUrl(longUrl) {

        let data = "";

        try {
            const response = await axios.post(endpoint, `"\\"${longUrl.toString()}""`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }
            });

            data = await response.data;
        }
        catch (error) {
            console.error(error);
        }

        return data;
    }
}