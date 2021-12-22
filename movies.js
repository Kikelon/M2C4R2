class Movie{
    constructor(title, releaseYear, genre, languaje, plataform, mainCharacterName, image){
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.language = languaje;
        this.plataform = plataform;
        this.mainCharacterName = mainCharacterName;
        this.image=image
    };
};


let peliculas = [];

let movie = new Movie ("Cadena perpetua", 1994, "Drama", "Americana", "Castle Rock Entertainment", "Andy Dufresne", "./images/cadena_perpetua.jpg");
peliculas.push(movie);
movie = new Movie ("El padrino", 1972, "Crimen, Drama", "Inglés", "Paramount Pictures", "Don Vito Corleone", "./images/el_padrino.jpg");
peliculas.push(movie);
movie = new Movie ("El caballero oscuro", 2008, "Acción", "Inglés", "Warner Bros", "Bruce Wayne", "./images/el_caballero_oscuro.jpg");
peliculas.push(movie);
movie = new Movie ("Los siete samuráis", 1954, "Acción", "Japonés", "Kikuchiyo", "Toho Company", "./images/los_siete_samurais.jpg");
peliculas.push(movie);
movie = new Movie ("Ciudad de dios", 2002, "Drama", "Portugues", "Buscapé", "O2 filmes", "./images/ciudad_de_dios.jpg");
peliculas.push(movie);
movie = new Movie ("Verano 1993", 2017, "Drama", "Español", "Frida", "Avalon", "./images/verano_1993.jpg");
peliculas.push(movie);


function loadData(){
    for (let i=0; i<peliculas.length; i++)
    {
        loadMovie(peliculas[i]);
    }
};

function loadMovie(pelicula){
    document.getElementById("movie-show").innerHTML += `<div class="card bg-dark card-container">
                                                         <img src="${pelicula.image}" class="card-img-top" alt="...">
                                                         <div class="card-body">
                                                            <h5 class="card-title">${pelicula.title}</h5>
                                                            <p class="card-text">Año de lanzamiento: ${pelicula.releaseYear}</p>
                                                            <p class="card-text">Genero: ${pelicula.genre}</p>
                                                            <p class="card-text">Idioma: ${pelicula.language}</p>
                                                            <p class="card-text">Plataforma: ${pelicula.plataform}</p>
                                                            <p class="card-text">Personaje principal: ${pelicula.mainCharacterName}</p>
                                                      </div>
                                                     </div>`; 
};

function addMovie(){
    let movie = new Movie (
        document.getElementById("title").value,
        document.getElementById("releaseYear").value,
        document.getElementById("genre").value,
        document.getElementById("language").value,
        document.getElementById("plataform").value,
        document.getElementById("mainCharacterName").value,
        "./images/" + document.getElementById("image").value
    );
peliculas.push(movie);
loadMovie(movie);
}
