import axios from "axios";

export default defineEventHandler(async (event) => {
  const { data } = await axios.get(`https://api.github.com/users/wSwanepoel199/repos`);
  return data;
});