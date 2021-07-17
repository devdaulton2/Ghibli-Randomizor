let baseURL = ("https://ghibliapi.herokuapp.com/films");

const cardBody = document.querySelector('.card-body');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');
const directorName = document.querySelector('#director');
const producerName = document.querySelector('#producer');
const released = document.querySelector('#releaseDate');
const movieLength = document.querySelector('#runTime');
const img = document.querySelector('.card-img-top');
// const cardHeader = document.querySelector('.card-header');
const trueTitle = document.querySelector('.card-subtitle');
const anotherBtn = document.querySelector('.btn btn-primary');

fetch(`${baseURL}`).then(response => response.json())
.then(json => displayMovie(json));

function displayMovie(movieList) {
    console.log(movieList);
    let randomMovie = movieList[Math.floor(Math.random() * movieList.length)];
    console.log(randomMovie)
        
        let title = document.createElement('h3');
        let descript = document.createElement('p');
        let moviePoster = document.createElement('img');
        let howToPronounce = document.createElement('p');
        let director = document.createElement('p');
        let producer = document.createElement('p');
        let releaseDate = document.createElement('p');
        let runningTime = document.createElement('p');
        let japaneseTitle = document.createElement('h4');

        
        title.innerText = randomMovie.title;
        descript.innerText = randomMovie.description;
        img.src = displayImage(randomMovie.title.toLowerCase().replaceAll(' ', '').replaceAll("'", ""));
        howToPronounce.innerText = randomMovie.original_title_romanised.toLowerCase();
        director.innerText = randomMovie.director;
        producer.innerText = randomMovie.producer;
        releaseDate.innerText = randomMovie.release_date;   //add(" minutes");
        runningTime.innerText = randomMovie.running_time;
        japaneseTitle.innerText = randomMovie.original_title;

        runningTime.insertAdjacentText("beforeend", ' minutes');
        runningTime.insertAdjacentHTML("afterbegin", "<strong>Run Time: </strong>")
        producer.insertAdjacentHTML("afterbegin", "<strong>Produced by: </strong>");
        director.insertAdjacentHTML("afterbegin", "<strong>Directed by: </strong>");
        released.insertAdjacentHTML("afterbegin", "<strong>Released in: </strong>");
        howToPronounce.insertAdjacentHTML("afterbegin", '<strong>Pronounced:</strong> "')
        howToPronounce.insertAdjacentHTML("beforeend", '"');

        cardTitle.appendChild(title);
        cardText.appendChild(descript);
        img.appendChild(moviePoster);
        // cardHeader.appendChild(howToPronounce);
        directorName.appendChild(director);
        producerName.appendChild(producer);
        released.appendChild(releaseDate);
        movieLength.appendChild(runningTime);
        trueTitle.appendChild(japaneseTitle);
    }

function displayImage(movieTitle) {
    let movieImage = {
        castleinthesky: "https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png",
        graveofthefireflies: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
        myneighbortotoro: "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
        kikisdeliveryservice: "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg",
        onlyyesterday: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/OYpost.jpg/220px-OYpost.jpg",
        porcorosso: "https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg",
        pompoko: "https://upload.wikimedia.org/wikipedia/en/6/68/Pompokoposter.jpg",
        whispeoftheheart: "https://upload.wikimedia.org/wikipedia/en/9/93/Whisper_of_the_Heart_%28Movie_Poster%29.jpg",
        princessmononoke: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Princess_Mononoke_Japanese_poster.png/220px-Princess_Mononoke_Japanese_poster.png",
        myneighborstheyamadas: "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Neighbors_the_Yamadas_%281999%29.jpg",
        spiritedaway: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png",
        thecatreturns: "https://upload.wikimedia.org/wikipedia/en/8/8e/Cat_Returns.jpg",
        howlsmovingcastle: "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
        talesfromearthsea: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Gedo6sn.jpg/220px-Gedo6sn.jpg",
        ponyo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Ponyo_%282008%29.png/220px-Ponyo_%282008%29.png",
        arrietty: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Karigurashi_no_Arrietty_poster.png/220px-Karigurashi_no_Arrietty_poster.png",
        fromuponpoppyhill: "https://upload.wikimedia.org/wikipedia/en/c/c9/From_Up_on_Poppy_Hill.png",
        thewindrises: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg",
        thetaleoftheprincesskaguya: "https://upload.wikimedia.org/wikipedia/en/6/68/The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg",
        whenmarniewasthere:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/When_Marnie_Was_There.png/220px-When_Marnie_Was_There.png",
        theredturtle: "https://upload.wikimedia.org/wikipedia/en/d/d5/Earwig_and_the_Witch.png"
    }
    return movieImage[movieTitle];
}
