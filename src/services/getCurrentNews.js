import { API_KEY, API_URL } from "./settings";

export default function getCurrentNews () {
  var now = new Date();
  var time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  var date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}T${time}`;
  console.log(date);
    return fetch(
      `${API_URL}/top-headlines?sources=infobae,google-news-ar,cnn-es,el-mundo,la-gaceta,la-nacion,marca&from=${date}&apiKey=${API_KEY}`
    ).then(res => res.json())
}