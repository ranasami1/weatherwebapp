const url = "https://api.openweathermap.org/data/2.5/weather?";
const apikey = "1744634f7035519f9b3524d09e426ff0";
const main = document.querySelector('.main');
const find = document.getElementById('find');
const icon = document.getElementById('icon');
const input = document.getElementById('city');

console.log(find);
function clicking(){
    const city = document.querySelector('#city').value;
    console.log(city);
    fetch(`${url}q=${city}&units=metric&appid=${apikey}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp);
        
        if(data.weather[0].main == "Clouds"){
            icon.src = "cloud.png";
         }else if(data.weather[0].main == "Rain"){
            icon.src = "umbrella.png"
         }
         else if(data.weather[0].main == "Sunny"){
            icon.src = "sunny.png"
         } else if(data.weather[0].main == "Stormy"){
            icon.src = "stormy.png"
         }
         else if(data.weather[0].main == "Clear"){
            icon.src = "flowers.png"
         }
         else if(data.weather[0].main == "Drizzle"){
            icon.src = "haze.png"

    }

    
        main.innerHTML =`
        <div class="search">
            <input onclick="reloaded()" autofocus id=city type="text" placeholder="Search">
            <img id=search src="search.png" height="30px" width="30px">
        </div>
        <div class="grid1">
            <div class="square">
                <div>
                    <h2 class="temp">${data.main.temp}<span>°</span>C</h2>
                </div>    
                <div>
                    <h3>${data.name}</h3>
                    <h3 class="status">${data.weather[0].main}</h3>
                </div>
            </div>
            <img id=icon src=${icon.src}>
        </div>
            <div class="grid2">
                <h3>Feels Like ---> ${data.main.feels_like} <span>°C</span></h3>
                <div>
                    <h3>Humidity ---> ${data.main.humidity} <span>%</span></h3>
                   
                </div>
                <div>
                    <h3>Wind Speed ---> ${data.wind.speed}<span> Km/h</span></h3>
                   </div>
                <h3>Clouds ---> ${data.clouds.all}</h3>
            </div>  `
        })
    .catch(() => {
    main.innerHTML =`<h3 class="error">Couldn't Find </h3>`;
    })
};
function reloaded(){
        location.reload();
    };
