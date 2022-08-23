const btn = document.querySelector('#btn');
const showDetails = document.querySelector('#showDetails');

function handleButton() {
    // evt.preventDefault();
   console.log("button clicked");

    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(response =>{
        console.log(response.data);

        if(response.data && response.data.results && response.data.results.length && response.data.results[0].residents) {
            console.log(response.data.results[0].residents)

            for(let i=0; i<response.data.results[0].residents.length; i++){
                console.log(i, "---", response.data.results[0].residents[i])
                
                axios.get(response.data.results[0].residents[i])
                .then(people =>{
                    console.log(people.data.name); 
                    showDetails.innerHTML += `<h2>${people.data.name}</h2>`;
                })
            }
        }
    })
    
}


btn.addEventListener("click", handleButton);