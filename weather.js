class Weather{
    constructor(city,state){
        this.apiKey = '9122e5db944a6602ae67b9d235c587c1';
        this.city = city;
        this.state= state;
    }


    //Fetch weather from api
    async getWeather(){
        const response= await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

        const responseData = await response.json();

        return responseData
    }

    //change weather location
    changeLocation(city, state){
        this.state= state;
        this.city = city;
    }
}