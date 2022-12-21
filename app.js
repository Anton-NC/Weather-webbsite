


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

    // Initialize and add the map
)

    