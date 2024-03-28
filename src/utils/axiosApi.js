import axios from "axios";


export const GET = (args) => {
  const { start, finish, isLoading } = useLoadingIndicator();
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
      progressEvent.event.currentTarget.onload = (event) => {
        finish();
        return event.currentTarget.response;
      };
    }
  }).then(res => {
    return res.data;
  });

  return data;
};