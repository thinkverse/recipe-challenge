const api = 'https://recipe-challenge.netlify.app/.netlify/functions'

document.addEventListener("DOMContentLoaded", async event => {
    console.log('🔥 DOM content is loaded.')
    console.log('🎉 Lets fetch our recipe.')

    const recipe = await fetch(`${api}/recipe`)
        .then(response => response.json());

    document.querySelector("#recipe-title").textContent = recipe.title
});