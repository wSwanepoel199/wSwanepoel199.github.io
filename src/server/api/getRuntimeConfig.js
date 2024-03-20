
export default defineEventHandler(async (event) => {
  const config = Object.entries(process.env)
    .filter(([key, value]) => {
      if (key.startsWith("NUXT_ENV_CONFIG")) {
        return { key: key, value: value };
      }
    }).reduce((acc, [key, value]) => ({ ...acc, [key.substring("NUXT_ENV_CONFIG_".length)]: value }), {});
  return config || {};
});