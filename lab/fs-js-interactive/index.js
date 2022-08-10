console.log("hello world");

//step 1: define what you are getting
const inputField = document.querySelector("input");
const inputBtn = document.querySelector("button");

const formElement = document.querySelector("form")
const biggerlist = document.querySelector("ul");
const message = document.querySelector("#message")


//step 2: write out your callback function

function addMovie(event){
    event.preventDefault();
    const movie = document.createElement("li");
const movieTitle =document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click",crossOffMovie)
movie.appendChild(movieTitle);
const deleteBtn = document.createElement("button");
deleteBtn.textContent = 'x';
deleteBtn.addEventListener("click",deleteMovie)
movie.appendChild(deleteBtn);


biggerlist.appendChild(movie);

inputField.value = "";

}

function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
}

function crossOffMovie(event) {
    event.target.classList.toggle(['checked'])
if (event.target.classList.contains('checked')){
    message.textContent='Movie watched!'
}else{
    message.textContent='Movie added back!'
}

}

//changing the element
inputBtn.addEventListener("click",addMovie);

