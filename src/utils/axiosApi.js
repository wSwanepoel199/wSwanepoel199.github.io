import axios from "axios";


export const GET = (args) => {
  const { start, finish, isLoading } = useLoadingIndicator();
  let progress = 0;
  start();
  const data = axios({
    url: args.url,
    method: "GET",
    headers: args.headers,
    onDownloadProgress(progressEvent) {
      console.log(progressEvent);
      // progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      console.log(progressEvent.event);
      progressEvent.event.currentTarget.onprogress = (event) => {
        console.log(event);
      };
      progressEvent.event.currentTarget.onload = (event) => {
        finish();
        return event.currentTarget.response;
      };
      progress = progressEvent.loaded;
    }
  }).then(res => {
    return res.data;
  });

  return data;
};