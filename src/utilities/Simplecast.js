export async function getEpisodesFromSimplecast() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    
    fetch('https://api.simplecast.com/podcasts/f0d82f0c-a282-4a09-9dfd-3085ff7cd1e1')
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error: ', error));
}