//deklarerar id för javascripten för att linka htmlen
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')



//Kelving till celsius ungefär -273f för att få det till celsius

function convertion(val){
    return (val - 273).toFixed(2)
}
//får in informationen genom fetch
    btn.addEventListener('click', function(){

// från api länken får vi informationen
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value +'&appid=85423b7b041d4bf759ac00d1684704b4')
        .then(res => res.json())
        .then(data => {
    //förvarar värderna

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

    // använder innerHTML för att få in datan in på webbsidan
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

        })

    //error mess om du typar in fel namn och om du trycker på knappen utan att skriva något.
        .catch(err => alert('You entered Wrong city name'))
    }
)

//vill ha användarens lokations data för att visa lokala positionen

//checka om api:ns geolocation finns
if(navigator.geolocation) {
    //om det stämmer
    alert("Location");
} else {
    alert('geolocation NOT available');
}
//callback
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos){
        var geoLat = pos.coords.latitude.toFixed(5);
        var geoLng = pos.coords.longitude.toFixed(5);
        var geoAcc = pos.coords.accuracy.toFixed(1);

    });
}
//Getcurrentposition error returneras
function getPosErr(err) {
    switch (err.code){
        case err.PERMISSION_DENIED:
            alert("User have denied the geolocation")
            break;
        case err.POSITION_UNAVAILABLE:
            alert("Location information is unavailable")
            break;
        case err.TIMEOUT:
            alert("Location timed out");
            break;
            default:
                alert("Unknown error");
    }
}








