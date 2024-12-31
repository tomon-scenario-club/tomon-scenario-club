export async function fetchNewsContents() {
  const apiUrl = `${import.meta.env.PUBLIC_MICROCMS_API_URL}news?orders=-date`;
  const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-API-KEY': apiKey
      },
    });
    const data = await response.json();
    return data.contents;
  } catch (error) {
    console.error(error);
    return
  }
}
