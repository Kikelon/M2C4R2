class Professional 
{

    constructor(name, age, genre, nationality, oscarsNumbers, profession, image)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.nationality = nationality;
        this.oscarsNumbers = oscarsNumbers;
        this.profession = profession;
        this.image = image;        
    }
}
let profesionales = [];

let professional = new Professional ("Mario Casas", 35, "Masculino", "Español", 0, "Actor", "./images/mario_casas.jpg");
profesionales.push(professional);
professional = new Professional ("Jason Statham", 54, "Masculino", "Británico", 0, "Actor, Productor", "./images/jason_statham.jpg");
profesionales.push(professional);
professional = new Professional ("Sasha Grey", 33, "Femenino", "Americana", 0, "Actriz", "./images/sasha_grey.jpg");
profesionales.push(professional);
professional = new Professional ("Caludia Salas", 27, "Femenino", "Española", 0, "Actriz", "./images/claudia_salas.jpg");
profesionales.push(professional);
professional = new Professional ("Keanu Reeves", 57, "Masculino", "Americano", 5, "Actor, Productor", "./images/keanu_reeves.jpg");
profesionales.push(professional);
professional = new Professional ("Jennifer Lawrence", 38, "Femenino", "italiana", 0, "Actriz, Productora", "./images/jennifer_lawrence.jpg");
profesionales.push(professional);


function loadData(){
    for (let i=0; i<profesionales.length; i++)
    {
        loadProfessional(profesionales[i]);
    }
};

function loadProfessional(profesional){
    document.getElementById("professional-show").innerHTML += `<div class="card bg-dark card-container">
                                                         <img src="${profesional.image}" class="card-img-top" alt="...">
                                                         <div class="card-body">
                                                            <h5 class="card-title">${profesional.name}</h5>
                                                            <p class="card-text">Edad: ${profesional.age}</p>
                                                            <p class="card-text">Genero: ${profesional.genre}</p>
                                                            <p class="card-text">Nacionalidad: ${profesional.nationality}</p>
                                                            <p class="card-text">Oscars: ${profesional.oscarsNumbers}</p>
                                                            <p class="card-text">Profesion: ${profesional.profession}</p>
                                                      </div>
                                                     </div>`; 
};

function addProfessional(){
    let professional = new Professional (
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("genre").value,
        document.getElementById("nationality").value,
        document.getElementById("oscarsNumbers").value,
        document.getElementById("profession").value,
        "./images/" + document.getElementById("image").value
    );
profesionales.push(professional);
loadProfessional(professional);
}
