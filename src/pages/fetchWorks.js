const apiUrl = `${import.meta.env.PUBLIC_MICROCMS_API_URL_3}works`;
const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY_3;
export async function fetchWorksContents() {
  try {
    const response = await fetch(`${apiUrl}?limit=100`, {
      headers: {
        'X-API-KEY': apiKey
      },
    });
    const data = await response.json();
    return data.contents;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function fetchWorksContentsById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
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