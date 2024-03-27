import axios from "axios";

export default defineEventHandler(async (event) => {
  const { data } = axios.get(process.env.NUXT_ENV_CONFIG_GITHUB_REPOSITORIES_URL, {
    onDownloadProgress: (progressEvent) => {
      console.log(progressEvent);
      // let percentCompleted = Math.floor(progressEvent.loaded / progressEvent.total * 100);
      // console.log(percentCompleted);
    }
  }).then(res => {
    return res.data;
  });
  return data;
});