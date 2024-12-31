export async function fecthLineImage() {
  const apiUrl = import.meta.env.PUBLIC_MICROCMS_API_URL_3;
  const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY_3;
  try {
    const response = await fetch(`${apiUrl}join`, {
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