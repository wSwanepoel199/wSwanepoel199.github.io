import axios from "axios";

export default defineEventHandler(async (event) => {
  let { data } = await axios.get('https://raw.githubusercontent.com/wSwanepoel199/wSwanepoel199/main/README.md');
  // data = data.replace(/<\!--.*?-->/sg, "");
  return data;
});