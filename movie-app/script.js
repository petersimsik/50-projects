const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0e1b9af834ccb1f01f0eabe0958b041d&page=1&language=sk-SK';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=0e1b9af834ccb1f01f0eabe0958b041d&language=sk-SK&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

const main = document.getElementById('main');

// get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            
                <img src="${IMAGE_PATH + movie.poster_path}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Obsah</h3>
                    ${movie.overview}
                </div>
            
            `;
        main.appendChild(movieElement);
    });
}

function getClassByRate(vote) {
    if (vote >= 8)
        return 'green'
    else if (vote >= 5)
        return 'orange'
    else 
        return 'red'        
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm && searchTerm != '') {
        getMovies(SEARCH_URL + searchTerm );

        search.value = '';
    } else {
        window.location.reload();
    }

});