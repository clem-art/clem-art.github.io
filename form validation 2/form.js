// keyup

let radios = document.getElementsByName("gender");
let userGender; // to avoid to be outside the scope
for (let radio of radios) {
  if (radio.checked) {
    userGender = radio.value;
  }
}

let pwdConfirm = document.querySelector("#pwdConfirm");
let pwd = document.querySelector("#pwd");
pwd.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  e.target.style.outline = "none";
  pwdConfirm.style.outline = "none";
  const userPwd = document.querySelector("#pwd").value;
  const validPwd = userPwd.length >= 6 && userPwd.length <= 30 ? true : false;

  if (validPwd) {
    document.querySelector("#pwd").className = "green";
    minimum6.style.display = "none";
  } else {
    document.querySelector("#pwd").className = "red";
    pwdConfirm.className = "red";
  }
});
pwdConfirm.addEventListener("keyup", function () {
  if (pwdConfirm.value == pwd.value) {
    pwdConfirm.className = "green";
    identical.style.display = "none";
  } else {
    pwdConfirm.className = "red";
  }
});

let submit = document.querySelector("#submit");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");
let login = document.querySelector("#login");
let minimum2one = document.querySelector("#minimum2one");
let minimum2two = document.querySelector("#minimum2two");
let minimum4 = document.querySelector("#minimum4");
let minimum6 = document.querySelector("#minimum6");
let between = document.querySelector("#between");
let identical = document.querySelector("#identical");
let select = document.querySelector("select");
let country = document.querySelector("#country");

submit.addEventListener("click", function (e) {
  if (
    firstName.value.length > 2 &&
    lastName.value.length > 2 &&
    age.value >= 5 &&
    age.value <= 140 &&
    login.value.length > 4 &&
    pwd.value.length >= 6 &&
    select.options[select.selectedIndex].value
    // && pwdConfirm.value == pwd.value
  ) {
    alert("You have successfully submitted the form!");
    console.log("submit");
    
  } else {
    e.preventDefault();
    if (firstName.value < 2) {
      minimum2one.style.display = "block";
    }
    if (lastName.value < 2) {
      minimum2two.style.display = "block";
    }
    if (age.value < 5 || age.value > 140) {
      between.style.display = "block";
    }
    if (login.value < 4) {
      minimum4.style.display = "block";
    }
    if (pwd.value < 6) {
      minimum6.style.display = "block";
    }
    if (pwdConfirm.value !== pwd.value) {
      identical.style.display = "block";
    }
    if (select.options[select.selectedIndex].value == "") {
      country.style.display = "block";
    } else {
        country.style.display = "none";
    }
  }
});

lastName.addEventListener("keyup", function (e) {
  e.target.style.outline = "none";
  let  audio = new Audio('bg-sound.mp3');
  audio.play();
  const lastNameValue = lastName.value;
  const validlastName =
    lastNameValue.length >= 2 && lastNameValue.length <= 30 ? true : false;

  if (validlastName) {
    document.querySelector("#lastName").className = "green";
    minimum2one.style.display = "none";
  } else {
    document.querySelector("#lastName").className = "red";
  }
});

firstName.addEventListener("keyup", function (e) {
  e.target.style.outline = "none";

  const firstNameValue = firstName.value;
  const validfirstName =
    firstNameValue.length >= 2 && firstNameValue.length <= 30 ? true : false;

  if (validfirstName) {
    document.querySelector("#firstName").className = "green";
    minimum2two.style.display = "none";
  } else {
    document.querySelector("#firstName").className = "red";
  }
});

age.addEventListener("keyup", function (e) {
  e.target.style.outline = "none";

  const ageValue = age.value;
  const validAge = ageValue >= 5 && ageValue <= 140 ? true : false;

  if (validAge) {
    document.querySelector("#age").className = "green";
    between.style.display = "none";
  } else {
    document.querySelector("#age").className = "red";
  }
});

login.addEventListener("keyup", function (e) {
  e.target.style.outline = "none";

  const loginValue = login.value;
  const validlogin =
    loginValue.length >= 4 && loginValue.length <= 30 ? true : false;

  if (validlogin) {
    document.querySelector("#login").className = "green";
    minimum4.style.display = "none";
  } else {
    document.querySelector("#login").className = "red";
  }
});

select.addEventListener("click", function (e) {
  e.target.style.outline = "none";

  if (select.options[select.selectedIndex].value ==true) {
    document.querySelector("#selectCountry").className = "green";
    country.style.display = "none";
  } else {
    document.querySelector("#selectCountry").className = "red";
  }
});

let newscheckbox = document.querySelector("#Newscheckbox");
newscheckbox.addEventListener("click", function () {
  newscheckbox.classList.remove("hvr-buzz");
});


//to use id only for the js no queryselector, need to name in camel case

//REGULAR EXPRESSIONS REGEX, optional except age
//reset()
//e.prevent.default to block submission
