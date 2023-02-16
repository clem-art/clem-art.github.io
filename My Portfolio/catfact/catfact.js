const btn = document.querySelector("button");
btn.addEventListener ("click", loadData);


function loadData(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://meowfacts.herokuapp.com/');
    xhr.addEventListener("readystatechange", function(){
if (xhr.readyState === xhr.DONE){
    let catdata = JSON.parse(xhr.responseText);
    //JSON.stringify();
    console.log(catdata);
    let h2 = document.createElement("h2");
    let body=document.querySelector("body");
    body.appendChild(h2);
    h2.textContent = catdata.data;

   
//     formatData(whateverdata);
}
    })

    xhr.send(null); 
}