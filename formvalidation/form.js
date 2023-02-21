document.querySelector("#pwd").addEventListener('keyup', function (e) {
    console.log(e.target.value);
    const userPwd = document.querySelector("#pwd").value;
    const validPwd = (userPwd.length >= 6 && userPwd.length <= 30) ? true : false;

    if (validPwd) {
        document.querySelector("#pwd").className = "green";
    } else {
        document.querySelector("#pwd").className = "red";
    }
});


document.querySelector("#male").addEventListener('click', function (e) {
    console.log(e.target.value);
});

document.querySelector("#female").addEventListener('click', function (e) {
    console.log(e.target.value);
});

let submit = document.querySelector("input[type='submit']");
submit.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT!");

    //validate name field
    const userName = document.querySelector("#name").value;
    const nameRegex = /^[a-z\- ]{2,30}$/i; //beginning and end of the string to get rid of numbers
    const validName = nameRegex.test(userName);
    console.log("validName:", validName);
    //validate pwd field
    const userPwd = document.querySelector("#pwd").value;
    const validPwd = (userPwd.length >= 6 && userPwd.length <= 30) ? true : false;

    console.log("validPwd:", validPwd);
    //validate gender 
    let radios = document.getElementsByName("gender");
    console.log(radios);
    let userGender; // to avoid to be outside the scope
    for (let radio of radios) {
        if (radio.checked) {
            userGender = radio.value;
        }
    }
    let validGender = true;
    if (userGender !== "m" && userGender !== "f") {
        console.log("INVALID!");
        validGender = false;

    }
    //validate country 
    const countryList = ["USA", "FRANCE", "KOREA"];
    const country = document.querySelector('select');
    const userCountry = country.options[country.selectedIndex].value;
    console.log("userCountry:", userCountry);
    let validCountry = countryList.includes(userCountry);
    console.log("validCountry:", validCountry);
    //validate checboxes 
    const validTerms = document.querySelector('#terms').checked;
    const validPrivacy = document.querySelector('#privacy').checked;

    if (validName && validPwd && validGender && validCountry && validTerms && validPrivacy) {
        console.log("SUBMIT");
    } else {
        e.preventDefault();
    }
}