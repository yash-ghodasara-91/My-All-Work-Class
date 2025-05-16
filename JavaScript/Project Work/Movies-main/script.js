// --- API Configuration ---
const API_KEY = "ec332d19e6fed067df0160ce34067cc4";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;

// --- HTML Elements ---
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const tagsEl = document.getElementById("tags");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");

// --- Variables ---
let selectedGenre = [];
let currentPage = 1;
let lastUrl = "";
let totalPages = 100;

// --- Genre List ---
const genres = [
	{ id: 28, name: "Action" },
	{ id: 12, name: "Adventure" },
	{ id: 16, name: "Animation" },
	{ id: 35, name: "Comedy" },
	{ id: 80, name: "Crime" },
	{ id: 18, name: "Drama" },
	{ id: 10751, name: "Family" },
	{ id: 10402,name: "Music"},
	{ id: 27, name: "Horror" },
	{ id: 10749, name: "Romance" },
	{ id: 878, name: "Sci-Fi" },
];

// --- Page Load ---
window.onload = () => {
	document.querySelector(".loader").style.display = "none";
	setGenre();
	getMovies(API_URL);
};

// --- Genre Filter Setup ---
function setGenre() {
	tagsEl.innerHTML = "";
	genres.forEach((g) => {
		const tag = document.createElement("div");
		tag.classList.add("tag");
		tag.innerText = g.name;
		tag.onclick = () => toggleGenre(g.id);
		tag.id = g.id;
		tagsEl.appendChild(tag);
	});
}

function toggleGenre(id) {
	if (selectedGenre.includes(id)) {
		selectedGenre = selectedGenre.filter((g) => g !== id);
	} else {
		selectedGenre.push(id);
	}
	getMovies(API_URL + "&with_genres=" + selectedGenre.join(","));
	highlightGenres();
	addClearBtn();
}

function highlightGenres() {
	document.querySelectorAll(".tag").forEach((tag) => {
		tag.classList.remove("highlight");
		if (selectedGenre.includes(parseInt(tag.id))) {
			tag.classList.add("highlight");
		}
	});
}

function addClearBtn() {
	if (!document.getElementById("clear") && selectedGenre.length > 0) {
		const clear = document.createElement("div");
		clear.classList.add("tag", "highlight");
		clear.id = "clear";
		clear.innerText = "Clear x";
		clear.onclick = () => {
			selectedGenre = [];
			setGenre();
			getMovies(API_URL);
		};
		tagsEl.appendChild(clear);
	}
}

// --- Get & Show Movies ---
function getMovies(url) {
	lastUrl = url;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			if (data.results.length > 0) {
				showMovies(data.results);
				currentPage = data.page;
				totalPages = data.total_pages;
				updatePagination();
			} else {
				main.innerHTML = "<h1>No Results Found</h1>";
			}
		});
}

function showMovies(movies) {
	main.innerHTML = "";
	movies.forEach((movie) => {
		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");
		movieEl.innerHTML = `
      <img src="${movie.poster_path ? IMAGE_URL + movie.poster_path : "https://via.placeholder.com/200"}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
        <button class="know-more" onclick="openNav(${movie.id}, '${movie.title.replace(/'/g, "")}')">Know More</button>
      </div>
    `;
		main.appendChild(movieEl);
	});
}

// --- Get Color by Rating ---
function getColor(vote) {
	return vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
}

// --- Search ---
form.onsubmit = (e) => {
	e.preventDefault();
	const term = search.value.trim();
	selectedGenre = [];
	setGenre();
	if (term) {
		getMovies(SEARCH_URL + "&query=" + term);
	} else {
		getMovies(API_URL);
	}
};

// --- Pagination ---
prev.onclick = () => {
	if (currentPage > 1) changePage(currentPage - 1);
};
next.onclick = () => {
	if (currentPage < totalPages) changePage(currentPage + 1);
};

function updatePagination() {
	current.innerText = currentPage;
	prev.classList.toggle("disabled", currentPage === 1);
	next.classList.toggle("disabled", currentPage === totalPages);
}

function changePage(page) {
	let url = new URL(lastUrl);
	url.searchParams.set("page", page);
	getMovies(url.toString());
}

// --- Video Preview Overlay ---
function openNav(id, title) {
	fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
		.then((res) => res.json())
		.then((data) => {
			document.getElementById("myNav").style.width = "100%";
			const overlay = document.getElementById("overlay-content");
			if (data.results.length > 0) {
				const video = data.results.find(v => v.site === "YouTube");
				overlay.innerHTML = `
          <h1>${title}</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.key}" frameborder="0" allowfullscreen></iframe>
        `;
			} else {
				overlay.innerHTML = "<h1>No Trailer Found</h1>";
			}
		});
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}
