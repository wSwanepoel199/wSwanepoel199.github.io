import axios from "axios";

export default defineEventHandler(async (event) => {
  let { data } = await axios.get(process.env.NUXT_ENV_CONFIG_GITHUB_README_URL, {
    onDownloadProgress: progressEvent => {
      // console.log(progressEvent);
      let percentCompleted = Math.floor(progressEvent.loaded / progressEvent.total * 100);
      // console.log(percentCompleted);
    }
  });
  // data = data.replace(/<\!--.*?-->/sg, "");
  return data;
});