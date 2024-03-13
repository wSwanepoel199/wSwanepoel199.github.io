import axios from "axios";

export default defineEventHandler(async (event) => {
  const { data } = await axios.get('https://raw.githubusercontent.com/wSwanepoel199/wSwanepoel199/main/README.md');
  const sanatizedData = data.indexOf('<!--') > -1 ? data.substring(0, data.indexOf('<!--')) : data;
  return sanatizedData;
});