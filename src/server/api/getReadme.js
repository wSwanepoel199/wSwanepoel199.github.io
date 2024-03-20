import axios from "axios";

export default defineEventHandler(async (event) => {
  let { data } = await axios.get(process.env.NUXT_ENV_CONFIG_GITHUB_README_URL);
  // data = data.replace(/<\!--.*?-->/sg, "");
  return data;
});