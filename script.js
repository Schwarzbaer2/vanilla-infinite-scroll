// Unsplash API

const count = 10;
const apiKey = 'MfaorveAMJzltIi5zbl6GtWCCoAsEjOdQ43Ukz7u2c4';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from Unsplash API

async function getPhotos() {
    try {
        const respone = await fetch(apiURL);
        const data = await respone.json();
        console.log(data);
    } catch (error) {
    // Catch error
}
}


// On Load
getPhotos();