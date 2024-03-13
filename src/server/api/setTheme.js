

export default defineEventHandler(async (e) => {
  console.log(e.node.req.body);
  const cookie = useCookie(e, 'theme');
  cookie.value = 'liveterm';
  return 'ok';
});