
const ApiUrl = process.env.VUE_APP_API_MOVIES_URL;

export async function loadMovies(take, skip = null) {
    let query = `?take=${take}`;
    if (skip) query += '&skip=' + skip;

    let response = await fetch(ApiUrl + 'api/movies' + query, {
        method: 'GET'
    });

    var data = response.json();

    return data;
}

export async function loadMovie(id) {
    let response = await fetch(ApiUrl + 'api/movies/' + id, {
        method: 'GET'
    });

    var data = response.json();

    return data;
}