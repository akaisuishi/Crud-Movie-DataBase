document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
});

let editingMovieId = null;

function fetchMovies() {
    fetch('/api/movies')
        .then(response => response.json())
        .then(data => renderMovies(data))
        .catch(error => console.error('Error fetching movies:', error));
}

function renderMovies(movies) {
    const movieRows = document.getElementById('movie-rows');
    movieRows.innerHTML = '';
    movies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.synopsis}</td>
            <td>${movie.director}</td>
            <td>${movie.releaseDate}</td>
            <td>${movie.rating}</td>
            <td>
                <button onclick="editMovie(${movie.id})">Edit</button>
                <button class="delete-button" onclick="deleteMovie(${movie.id})">Delete</button>
            </td>
        `;
        movieRows.appendChild(row);
    });
}

function createMovie() {
    const movie = {
        title: document.getElementById('title').value,
        synopsis: document.getElementById('synopsis').value,
        director: document.getElementById('director').value,
        releaseDate: document.getElementById('releaseDate').value,
        rating: document.getElementById('rating').value
    };

    fetch('/api/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(response => response.json())
        .then(data => {
            alert('Movie created successfully!');
            fetchMovies();
            document.getElementById('form').reset();
        })
        .catch(error => console.error('Error creating movie:', error));
}

function editMovie(id) {
    fetch(`/api/movies/${id}`)
        .then(response => response.json())
        .then(movie => {
            document.getElementById('title').value = movie.title;
            document.getElementById('synopsis').value = movie.synopsis;
            document.getElementById('director').value = movie.director;
            document.getElementById('releaseDate').value = movie.releaseDate;
            document.getElementById('rating').value = movie.rating;

            editingMovieId = id;

            document.getElementById('form-title').textContent = 'Edit Movie';
            document.getElementById('submit-button').textContent = 'Update Movie';
            document.getElementById('submit-button').onclick = updateMovie;
            document.getElementById('cancel-button').style.display = 'inline';
        })
        .catch(error => console.error('Error fetching movie:', error));
}

function updateMovie() {
    const movie = {
        title: document.getElementById('title').value,
        synopsis: document.getElementById('synopsis').value,
        director: document.getElementById('director').value,
        releaseDate: document.getElementById('releaseDate').value,
        rating: document.getElementById('rating').value
    };

    fetch(`/api/movies/${editingMovieId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(response => response.json())
        .then(data => {
            alert('Movie updated successfully!');
            fetchMovies();
            document.getElementById('form').reset();
            document.getElementById('form-title').textContent = 'New Movie';
            document.getElementById('submit-button').textContent = 'Create Movie';
            document.getElementById('submit-button').onclick = createMovie;
            document.getElementById('cancel-button').style.display = 'none';
            editingMovieId = null;
        })
        .catch(error => console.error('Error updating movie:', error));
}

function cancelEdit() {
    document.getElementById('form').reset();
    document.getElementById('form-title').textContent = 'New Movie';
    document.getElementById('submit-button').textContent = 'Create Movie';
    document.getElementById('submit-button').onclick = createMovie;
    document.getElementById('cancel-button').style.display = 'none';
    editingMovieId = null;
}

function deleteMovie(id) {
    fetch(`/api/movies/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            alert('Movie deleted successfully!');
            fetchMovies();
        })
        .catch(error => console.error('Error deleting movie:', error));
}
