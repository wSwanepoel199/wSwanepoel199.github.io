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
      const { event } = progressEvent;
      let completionPercentage;
      if (event.lengthComputable) {
        completionPercentage = event.loaded / event.total * 100;
      }
      completionPercentage = event.timeStamp / event.loaded * 100;
      useLoadingIndicator({
        estimatedProgress: (2 / Math.PI * 100) * Math.atan(completionPercentage / 50)
      });
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