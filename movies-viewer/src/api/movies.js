

export async function loadMovies(take, skip = null) {
    let query = `?take=${take}`;
    if (skip) query += '&skip=' + skip;

    let response = await fetch('http://localhost:5000/api/movies' + query, {
        method: 'GET'
    });

    var data = response.json();

    return data;
}

export async function loadMovie(id) {
    let response = await fetch('http://localhost:5000/api/movies/' + id, {
        method: 'GET'
    });

    var data = response.json();

    return data;
}