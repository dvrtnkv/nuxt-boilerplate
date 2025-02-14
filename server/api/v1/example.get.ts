export default defineEventHandler(async (event) => {
  const res = await $fetch.raw(`${getApiUrl()}/user/profile`, {
    headers: {
      "X-Api-Key": getApiKey(),
    },
    credentials: "same-origin",
  });
  return res._data;
});
