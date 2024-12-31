export async function fetchEventsContents() {
  const apiUrl = `${import.meta.env.PUBLIC_MICROCMS_API_URL_2}events?limit=100&orders=publishedAt`;
  const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY_2;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-API-KEY': apiKey
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}