const api = 'https://recipe-challenge.netlify.app/.netlify/functions'

window.addEventListener('load', async event => {
    console.log('🤘 All assets are loaded.')
    console.log('🎉 Lets fetch our recipe.')

    const recipe = await fetch(`${api}/recipe`)
        .then(response => response.json());

    document.querySelector("#recipe-title").textContent = recipe.title
});