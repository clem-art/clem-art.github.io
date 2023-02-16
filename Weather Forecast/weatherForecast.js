
var input = document.querySelector("input");
input.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {

        let inputValue = input.value;
        //make ajax request here


        //change bg picture per city
        if (input.value == "paris") {
            let body = document.querySelector("body");
            body.style.backgroundImage = "url('paris.png')";
        }
        if (input.value == "bordeaux") {
            let body = document.querySelector("body");
            body.style.backgroundImage = "url('bordeaux.png')";
        }
        if (input.value == "tokyo") {
            let body = document.querySelector("body");
            body.style.backgroundImage = "url('tokyo.png')";
        }
        if (input.value == "new york") {
            let body = document.querySelector("body");
            body.style.backgroundImage = "url('new.png')";
        } 
        if (input.value == "seoul") {
            let body = document.querySelector("body");
            body.style.backgroundImage = "url('seoul.png')";
        } 
        // if (input.value !== "paris" || input.value !== "bordeaux"|| input.value !== "tokyo" ||input.value !== "new york" || input.value !== "seoul"){
        //     let body = document.querySelector("body");
        //     body.style.backgroundImage = "url('Untitled_design__2_-removebg-pre.png')";
        // }
        //AJAX request to read API
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=42f31002a9e81edcd1aa8cd52b456cc9&units=metric&lang=fr`);
        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState === xhr.DONE) {
                let deepcodedata = JSON.parse(xhr.responseText);
                console.log(deepcodedata);

                //TODO: change cursor to sun/rain/snow/wind depending on the API data

                //loop to have the data of several days
                for (let i = 0, j = 0; i < deepcodedata.list.length; i += 8, j++) {
                    // 8 because data is in 3 hour increments
                    // 8*3 = 24hours to get the next day

                    let div1 = document.querySelector(`.div${j + 1}`);

                    if (i == 0) {
                        let p = document.createElement("p");
                        div1.appendChild(p);
                        p.textContent = deepcodedata.city.name;
                        div1.innerHTML = ""; //to erase content when input changes
                        let div2 = document.querySelector(".div2");
                        div2.innerHTML = "";
                        let div3 = document.querySelector(".div3");
                        div3.innerHTML = "";
                    }
                    //days of the week function
                    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


                    let dt = deepcodedata.list[i].dt;
                    let d = new Date(dt * 1000);
                    let day = days[d.getDay()];
                    let p5 = document.createElement("p");
                    div1.appendChild(p5);
                    p5.textContent = day;
                    let currentWeather = deepcodedata.list[i];

                    //code to generate the weather icons from the API ids
                    let iconimg = document.createElement("img");
                    div1.appendChild(iconimg);
                    let iconid = currentWeather.weather[0].icon;
                    iconimg.setAttribute('src', `http://openweathermap.org/img/wn/${iconid}@2x.png`);


                    let p3 = document.createElement("p");
                    div1.appendChild(p3);
                    p3.textContent = currentWeather.weather[0].description;

                    //TODO: toFix() or Math.round() to get rid of unecessary decimals
                    let p4 = document.createElement("p");
                    div1.appendChild(p4);
                    p4.textContent = "température: " + currentWeather.main.temp + "°C";



                    //event to see the details of the weather
                    //TODO: come back to the first content

                    div1.addEventListener("click", function () {
                        div1.innerHTML = "";
                        let p2 = document.createElement("p");
                        div1.appendChild(p2);
                        // p2.textContent = deepcodedata.city.country;
                        p2.textContent = "humidité: " + currentWeather.main.humidity;
                        p2.style.fontSize = "20px";


                        let p6 = document.createElement("p");
                        div1.appendChild(p6);
                        p6.textContent = "vitesse du vent: " + currentWeather.wind.speed;
                        p6.style.fontSize = "20px";

                        let p7 = document.createElement("p");
                        div1.appendChild(p7);
                        p7.textContent = "température ressentie: " + currentWeather.main.feels_like + "°C";
                        p7.style.fontSize = "20px";

                        let p8 = document.createElement("p");
                        div1.appendChild(p8)
                        p8.textContent = "pression: " + currentWeather.main.pressure + " hPa";
                        p8.style.fontSize = "20px";

                        let p9 = document.createElement("p");
                        div1.appendChild(p9)
                        p9.textContent = "niveau de la mer: " + currentWeather.main.sea_level;
                        p9.style.fontSize = "20px";
                    });


                }








                // div1.addEventListener("keyup", function (event) {
                //     if(event.key === "Enter"){
                //     let p = document.createElement("p");

                //     let div1 = document.querySelector(".div1");
                //     div1.innerHTML = ""; //to erase content when input changes
                //     let div2 = document.querySelector(".div2");
                //     div2.innerHTML = "";
                //     let div3 = document.querySelector(".div3");
                //     div3.innerHTML = "";
                //     div1.appendChild(p);

                //     p.textContent = deepcodedata.city.name;
                //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


                //     let dt = deepcodedata.list[0].dt;
                //     let d = new Date(dt * 1000);
                //     let day = days[d.getDay()];
                //     let p5 = document.createElement("p");
                //     div1.appendChild(p5);
                //     p5.textContent = day;
                //     let currentWeather = deepcodedata.list[0];

                //     let iconimg = document.createElement("img");
                //     div1.appendChild(iconimg);
                //     let iconid = currentWeather.weather[0].icon;
                //     iconimg.setAttribute('src', `http://openweathermap.org/img/wn/${iconid}@2x.png`);


                //     let p3 = document.createElement("p");
                //     div1.appendChild(p3);
                //     p3.textContent = currentWeather.weather[0].description;


                //     let p4 = document.createElement("p");
                //     div1.appendChild(p4);
                //     p4.textContent = "température: " + currentWeather.main.temp + "°C";
                //     }
                // });

                // let values = deepcodedata.list.values();
                // for (let value of values) {
                //     p3.textContent = value;
                //   }

                // console.log(deepcodedata.cod);
                // console.log(JSON.stringify(deepcodedata.cod));
            }
        })

        xhr.send(null);
    }
})



//my key 83a2b7b47ef21d8d910b855afb9938d9
// scott key 42f31002a9e81edcd1aa8cd52b456cc9


//.value     for user input to connect api