export async function fetchInstagramPosts() {
  const apiUrl = 'https://tomon-scenario-club.microcms.io/api/v1/instagram_posts';
  const apiKey = 'DEKFxXeuBqVkz26B8swYBEePfaGTrji9Bf53';
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