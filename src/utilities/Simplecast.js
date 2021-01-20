export async function getEpisodesFromSimplecast(episodeOffset) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        // authorization: `Bearer ${process.env.REACT_APP_SIMPLECAST_API_KEY}`
    }
    
    let episodes = await fetch(`https://api.simplecast.com/podcasts/f0d82f0c-a282-4a09-9dfd-3085ff7cd1e1/episodes?limit=9&offset=${episodeOffset}`, requestOptions)
        .then(response => response.text())
        .then(result => { return result });
    
    return episodes;
}