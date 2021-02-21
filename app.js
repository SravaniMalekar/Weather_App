//init storage
const storage = new Storage();
//get stored loaction data
const weatherLocation = storage.getLocationData();

// Init weatger object
const weather = new Weather(weatherLocation.city,weatherLocation.state);

//init ui
const ui = new UI();
//get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city,state);

    //set local storage
    storage.setLocationData(city,state);
    //get and display weather
    getWeather();

    //close modal;
    // $('#locModal').modal('hide')
})


function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
