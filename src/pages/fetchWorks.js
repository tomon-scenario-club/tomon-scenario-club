export async function fetchWorksContents(apiUrl, apiKey) {
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

export async function fetchWorksContentsById(id, apiUrl, apiKey) {
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