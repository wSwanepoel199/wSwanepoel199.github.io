import axios from "axios";

export default defineEventHandler(async (event) => {
  const { data } = await axios.get(process.env.NUXT_ENV_CONFIG_GITHUB_REPOSITORIES_URL);
  return data;
});