export async function fetchInstagramPosts() {
  const apiUrl = `${import.meta.env.PUBLIC_MICROCMS_API_URL}instagram_posts`;
  const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-API-KEY': apiKey
      }
    });
    const data = await response.json();
    const postContainer = document.querySelector('.ig-container');

    if (data.embedHtml) {
      postContainer.innerHTML += data.embedHtml;
    }

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  document.addEventListener('DOMContentLoaded', fetchInstagramPosts);
}