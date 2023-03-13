let body = document.querySelector("body");
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let target1 = document.querySelector("#target1");
let target2 = document.querySelector("#target2");
let target3 = document.querySelector("#target3");
let target4 = document.querySelector("#target4");
let target5 = document.querySelector("#target5");
let target6 = document.querySelector("#target6");
let target7 = document.querySelector("#target7");
let target8 = document.querySelector("#target8");
let target9 = document.querySelector("#target9");
let target10 = document.querySelector("#target10");
let target11 = document.querySelector("#target11");
let target12 = document.querySelector("#target12");
let target13 = document.querySelector("#target13");
let target14 = document.querySelector("#target14");
let target15 = document.querySelector("#target15");
let target16 = document.querySelector("#target16");
let target17 = document.querySelector("#target17");
let target18 = document.querySelector("#target18");
let target19 = document.querySelector("#target19");
let target20 = document.querySelector("#target20");
let target21 = document.querySelector("#target21");
let target22 = document.querySelector("#target22");
let target23 = document.querySelector("#target23");
let target24 = document.querySelector("#target24");
let target25 = document.querySelector("#target25");
let target26 = document.querySelector("#target26");
let target27 = document.querySelector("#target27");
let target28 = document.querySelector("#target28");
let target29 = document.querySelector("#target29");
let target30= document.querySelector("#target30");
let target31= document.querySelector("#target31");
let target32= document.querySelector("#target32");
let target33= document.querySelector("#target33");
let target34= document.querySelector("#target34");
let target35 = document.querySelector("#target35");
let target36 = document.querySelector("#target36");
let target37 = document.querySelector("#target37");
let target38 = document.querySelector("#target38");
let target39 = document.querySelector("#target39");
let target40 = document.querySelector("#target40");
let target41 = document.querySelector("#target41");
let target42 = document.querySelector("#target42");

var audio = document.getElementById("coinSound");
//{} iife to const or let, scope, does not interfere with other parts with same variable name

//each div is a coin and each target is a hole in the grid

div1.offsetTop = 0;
div1.offsetLeft = 0;

div2.offsetTop = 0;
div2.offsetLeft = 0;

div3.offsetTop = 0;
div3.offsetLeft = 0;

div4.offsetTop = 0;
div4.offsetLeft = 0;

div5.offsetTop = 0;
div5.offsetLeft = 0;

div6.offsetTop = 0;
div6.offsetLeft = 0;

div7.offsetTop = 0;
div7.offsetLeft = 0;

div8.offsetTop = 0;
div8.offsetLeft = 0;
div9.offsetTop = 0;
div9.offsetLeft = 0;

div10.offsetTop = 0;
div10.offsetLeft = 0;

div11.offsetTop = 0;
div11.offsetLeft = 0;

div12.offsetTop = 0;
div12.offsetLeft = 0;
div13.offsetTop = 0;
div13.offsetLeft = 0;

div14.offsetTop = 0;
div14.offsetLeft = 0;

div15.offsetTop = 0;
div15.offsetLeft = 0;

div16.offsetTop = 0;
div16.offsetLeft = 0;
div17.offsetTop = 0;
div17.offsetLeft = 0;

div18.offsetTop = 0;
div18.offsetLeft = 0;

div19.offsetTop = 0;
div19.offsetLeft = 0;

div20.offsetTop = 0;
div20.offsetLeft = 0;
div21.offsetTop = 0;
div21.offsetLeft = 0;

div22.offsetTop = 0;
div22.offsetLeft = 0;

div23.offsetTop = 0;
div23.offsetLeft = 0;

div24.offsetTop = 0;
div24.offsetLeft = 0;
div25.offsetTop = 0;
div25.offsetLeft = 0;

div26.offsetTop = 0;
div26.offsetLeft = 0;

div27.offsetTop = 0;
div27.offsetLeft = 0;

div28.offsetTop = 0;
div28.offsetLeft = 0;
div29.offsetTop = 0;
div29.offsetLeft = 0;

div30.offsetTop = 0;
div30.offsetLeft = 0;

div31.offsetTop = 0;
div31.offsetLeft = 0;

div32.offsetTop = 0;
div32.offsetLeft = 0;
div33.offsetTop = 0;
div33.offsetLeft = 0;

div34.offsetTop = 0;
div34.offsetLeft = 0;

div35.offsetTop = 0;
div35.offsetLeft = 0;

div36.offsetTop = 0;
div36.offsetLeft = 0;
div37.offsetTop = 0;
div37.offsetLeft = 0;

div38.offsetTop = 0;
div38.offsetLeft = 0;

div39.offsetTop = 0;
div39.offsetLeft = 0;

div40.offsetTop = 0;
div40.offsetLeft = 0;
div41.offsetTop = 0;
div41.offsetLeft = 0;

div42.offsetTop = 0;
div42.offsetLeft = 0;


let bgaudio = new Audio('bg-music.mp3');
document.addEventListener('mousedown', function() {
  bgaudio.play();
});





//TODO: connect 3 and 4 coin with the target 3 4, connect all coins with all targets
//TODO: put the coins already on the player boxes, 
//disable the player 2 playing when player 1 turn, 
//make the coins go down when at the top

let shiftLeft;
let shiftTop;

// document.addEventListener("mousedown", function(){
//   let audio = new Audio('bg-music.mp3');
//   audio.play();
// })
//isMouseDown allows keyup
let div1isMouseDown = false;
div1.addEventListener("mousedown", function (e) {
  div1.style.cursor = "pointer";
  div1isMouseDown = true;
  e.clientX = div1;
  e.clientY = div1;
  shiftLeft = e.clientX - div1.offsetLeft;
  shiftTop = e.clientY - div1.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div1isMouseDown) return;
    div1.style.top = e.clientY - shiftTop + "px";
    div1.style.left = e.clientX - shiftLeft + "px";
  });

  div1.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div1isMouseDown = false;

    let bTop = div1.offsetTop;
    let bLeft = div1.offsetLeft;
    let bRight = bLeft + div1.offsetWidth;
    let bBottom = bTop + div1.offsetHeight;

    let tTop = target1.offsetTop;
    let tLeft = target1.offsetLeft;
    let tRight = tLeft + target1.offsetWidth;
    let tBottom = tTop + target1.offsetHeight;

    if (bTop > tTop && bBottom < tBottom && bLeft > tLeft && bRight < tRight) {
      target1.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3'); // class in js new
      audio.play();
      div1.style.display = "none";
      
      console.log("blop");
    }
  });
});

let div2isMouseDown = false;
div2.addEventListener("mousedown", function (e) {
  div2.style.cursor = "pointer";
  div2isMouseDown = true;
  e.clientX = div2;
  e.clientY = div2;
  shiftLeft = e.clientX - div2.offsetLeft;
  shiftTop = e.clientY - div2.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div2isMouseDown) return;
    div2.style.top = e.clientY - shiftTop + "px";
    div2.style.left = e.clientX - shiftLeft + "px";
  });

  div2.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div2isMouseDown = false;

    //connect the coin with the target
    let bTop2 = div2.offsetTop;
    let bLeft2 = div2.offsetLeft;
    let bRight2 = bLeft2 + div2.offsetWidth;
    let bBottom2 = bTop2 + div2.offsetHeight;

    let tTop2 = target2.offsetTop;
    let tLeft2 = target2.offsetLeft;
    let tRight2 = tLeft2 + target2.offsetWidth;
    let tBottom2 = tTop2 + target2.offsetHeight;

    if (
      bTop2 > tTop2 &&
      bBottom2 < tBottom2 &&
      bLeft2 > tLeft2 &&
      bRight2 < tRight2
    ) {
      target2.style.backgroundColor = "deeppink";
      div2.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      console.log("blup");
    }

    let bTop = div2.offsetTop;
    let bLeft = div2.offsetLeft;
    let bRight = bLeft + div2.offsetWidth;
    let bBottom = bTop + div2.offsetHeight;

    let tTop = target1.offsetTop;
    let tLeft = target1.offsetLeft;
    let tRight = tLeft + target1.offsetWidth;
    let tBottom = tTop + target1.offsetHeight;

    if (bTop > tTop && bBottom < tBottom && bLeft > tLeft && bRight < tRight) {
      target1.style.backgroundColor = "deeppink";
      div2.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      console.log("blop");
    }

    let bTop3 = div2.offsetTop;
    let bLeft3 = div2.offsetLeft;
    let bRight3 = bLeft3 + div2.offsetWidth;
    let bBottom3 = bTop3 + div2.offsetHeight;

    let tTop3 = target3.offsetTop;
    let tLeft3 = target3.offsetLeft;
    let tRight3 = tLeft3 + target3.offsetWidth;
    let tBottom3 = tTop3 + target3.offsetHeight;

    if (
      bTop3 > tTop3 &&
      bBottom3 < tBottom3 &&
      bLeft3 > tLeft3 &&
      bRight3 < tRight3
    ) {
      target3.style.backgroundColor = "deeppink";
      div2.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      console.log("blup");
    }

    let bTop4 = div2.offsetTop;
    let bLeft4 = div2.offsetLeft;
    let bRight4 = bLeft4 + div2.offsetWidth;
    let bBottom4 = bTop4 + div2.offsetHeight;

    let tTop4 = target4.offsetTop;
    let tLeft4 = target4.offsetLeft;
    let tRight4 = tLeft4 + target4.offsetWidth;
    let tBottom4 = tTop4 + target4.offsetHeight;

    if (
      bTop4 > tTop4 &&
      bBottom4 < tBottom4 &&
      bLeft4 > tLeft4 &&
      bRight4 < tRight4
    ) {
      target4.style.backgroundColor = "deeppink";
      div2.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      console.log("blup");
    }

    let bTop5 = div2.offsetTop;
    let bLeft5 = div2.offsetLeft;
    let bRight5 = bLeft5 + div2.offsetWidth;
    let bBottom5 = bTop5 + div2.offsetHeight;

    let tTop5 = target4.offsetTop;
    let tLeft5 = target4.offsetLeft;
    let tRight5 = tLeft5 + target5.offsetWidth;
    let tBottom5 = tTop5 + target5.offsetHeight;

    if (
      bTop5 > tTop5 &&
      bBottom5 < tBottom5 &&
      bLeft5 > tLeft5 &&
      bRight5 < tRight5
    ) {
      target5.style.backgroundColor = "deeppink";
      div2.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      console.log("blup");
    }

    let bTop6 = div2.offsetTop;
    let bLeft6 = div2.offsetLeft;
    let bRight6 = bLeft6 + div2.offsetWidth;
    let bBottom6 = bTop6 + div2.offsetHeight;

    let tTop6 = target6.offsetTop;
    let tLeft6 = target6.offsetLeft;
    let tRight6 = tLeft6 + target6.offsetWidth;
    let tBottom6 = tTop6 + target6.offsetHeight;

    if (
      bTop6 > tTop6 &&
      bBottom6 < tBottom6 &&
      bLeft6 > tLeft6 &&
      bRight6 < tRight6
    ) {
      target6.style.backgroundColor = "deeppink";
      div2.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      console.log("blup");
    }
  });
});

let div3isMouseDown = false;
div3.addEventListener("mousedown", function (e) {
  div3.style.cursor = "pointer";
  div3isMouseDown = true;
  e.clientX = div3;
  e.clientY = div3;
  shiftLeft = e.clientX - div3.offsetLeft;
  shiftTop = e.clientY - div3.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div3isMouseDown) return;
    div3.style.top = e.clientY - shiftTop + "px";
    div3.style.left = e.clientX - shiftLeft + "px";
  });

  div3.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div3isMouseDown = false;
  });
});

let div4isMouseDown = false;
div4.addEventListener("mousedown", function (e) {
  div4.style.cursor = "pointer";

  div4isMouseDown = true;
  e.clientX = div4;
  e.clientY = div4;
  shiftLeft = e.clientX - div4.offsetLeft;
  shiftTop = e.clientY - div4.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div4isMouseDown) return;
    div4.style.top = e.clientY - shiftTop + "px";
    div4.style.left = e.clientX - shiftLeft + "px";
  });

  div4.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div4isMouseDown = false;
  });
});
let div5isMouseDown = false;
div5.addEventListener("mousedown", function (e) {
  div5.style.cursor = "pointer";
  div5isMouseDown = true;
  e.clientX = div5;
  e.clientY = div5;
  shiftLeft = e.clientX - div5.offsetLeft;
  shiftTop = e.clientY - div5.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div5isMouseDown) return;
    div5.style.top = e.clientY - shiftTop + "px";
    div5.style.left = e.clientX - shiftLeft + "px";
  });

  div5.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div5isMouseDown = false;

    let bTop5 = div5.offsetTop;
    let bLeft5 = div5.offsetLeft;
    let bRight5 = bLeft5 + div5.offsetWidth;
    let bBottom5 = bTop5 + div5.offsetHeight;

    let tTop5 = target5.offsetTop;
    let tLeft5 = target5.offsetLeft;
    let tRight5 = tLeft5 + target5.offsetWidth;
    let tBottom5 = tTop5 + target5.offsetHeight;

    if (bTop5 > tTop5 && bBottom5 < tBottom5 && bLeft5 > tLeft5 && bRight5 < tRight5) {
      target5.style.backgroundColor = "deepskyblue";
      div5.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      //TODO: check if sound works
      console.log("blop");
    }
  });
});
let div6isMouseDown = false;
div6.addEventListener("mousedown", function (e) {
  div6.style.cursor = "pointer";
  div6isMouseDown = true;
  e.clientX = div6;
  e.clientY = div6;
  shiftLeft = e.clientX - div6.offsetLeft;
  shiftTop = e.clientY - div6.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div6isMouseDown) return;
    div6.style.top = e.clientY - shiftTop + "px";
    div6.style.left = e.clientX - shiftLeft + "px";
  });

  div6.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div6isMouseDown = false;

    let bTop6 = div6.offsetTop;
    let bLeft6 = div6.offsetLeft;
    let bRight6 = bLeft6 + div6.offsetWidth;
    let bBottom6 = bTop6 + div6.offsetHeight;

    let tTop6 = target6.offsetTop;
    let tLeft6 = target6.offsetLeft;
    let tRight6 = tLeft6 + target6.offsetWidth;
    let tBottom6 = tTop6 + target6.offsetHeight;

    if (bTop6 > tTop6 && bBottom6 < tBottom6 && bLeft6 > tLeft6 && bRight6 < tRight6) {
      target6.style.backgroundColor = "deepskyblue";
      div6.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      //TODO: check if sound works
      console.log("blop");
    }
  });
});

//check if working due to parenthesis
let div7isMouseDown = false;
div7.addEventListener("mousedown", function (e) {
  div7.style.cursor = "pointer";
  //a mettre sur le dernier coin, mousedown
  

  div7isMouseDown = true;
  e.clientX = div7;
  e.clientY = div7;
  shiftLeft = e.clientX - div7.offsetLeft;
  shiftTop = e.clientY - div7.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div7isMouseDown) return;
    div7.style.top = e.clientY - shiftTop + "px";
    div7.style.left = e.clientX - shiftLeft + "px";
  });

  div7.addEventListener("mouseup", function () {
    //    document.onmousemove = null;

    
    div7isMouseDown = false;

    let bTop7 = div7.offsetTop;
    let bLeft7 = div7.offsetLeft;
    let bRight7 = bLeft7 + div7.offsetWidth;
    let bBottom7 = bTop7 + div7.offsetHeight;

    let tTop7 = target7.offsetTop;
    let tLeft7 = target7.offsetLeft;
    let tRight7 = tLeft7 + target7.offsetWidth;
    let tBottom7 = tTop7 + target7.offsetHeight;

    if (bTop7 > tTop7 && bBottom7 < tBottom7 && bLeft7 > tLeft7 && bRight7 < tRight7) {
      target7.style.backgroundColor = "deepskyblue";
      div7.style.display = "none";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      //TODO: check if sound works
      console.log("blop");
    }
  });
});
  let div8isMouseDown = false;
div8.addEventListener("mousedown", function (e) {
  div8.style.cursor = "pointer";
  div8isMouseDown = true;
  e.clientX = div8;
  e.clientY = div8;
  shiftLeft = e.clientX - div8.offsetLeft;
  shiftTop = e.clientY - div8.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div8isMouseDown) return;
    div8.style.top = e.clientY - shiftTop + "px";
    div8.style.left = e.clientX - shiftLeft + "px";
  });

  div8.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div8isMouseDown = false;
  
});
});

let div9isMouseDown = false;
div9.addEventListener("mousedown", function (e) {
  div9.style.cursor = "pointer";
  div9isMouseDown = true;
  e.clientX = div9;
  e.clientY = div9;
  shiftLeft = e.clientX - div9.offsetLeft;
  shiftTop = e.clientY - div9.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div9isMouseDown) return;
    div9.style.top = e.clientY - shiftTop + "px";
    div9.style.left = e.clientX - shiftLeft + "px";
  });

  div9.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div9isMouseDown = false;
  });
});

let div10isMouseDown = false;
div10.addEventListener("mousedown", function (e) {
  div10.style.cursor = "pointer";
  div10isMouseDown = true;
  e.clientX = div10;
  e.clientY = div10;
  shiftLeft = e.clientX - div10.offsetLeft;
  shiftTop = e.clientY - div10.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div10isMouseDown) return;
    div10.style.top = e.clientY - shiftTop + "px";
    div10.style.left = e.clientX - shiftLeft + "px";
  });

  div10.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div10isMouseDown = false;
  });
});

let div11isMouseDown = false;
div11.addEventListener("mousedown", function (e) {
  div11.style.cursor = "pointer";
  div11isMouseDown = true;
  e.clientX = div11;
  e.clientY = div11;
  shiftLeft = e.clientX - div11.offsetLeft;
  shiftTop = e.clientY - div11.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div11isMouseDown) return;
    div11.style.top = e.clientY - shiftTop + "px";
    div11.style.left = e.clientX - shiftLeft + "px";
  });

  div11.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div11isMouseDown = false;
  });
});

let div12isMouseDown = false;
div12.addEventListener("mousedown", function (e) {
  div12.style.cursor = "pointer";
  div12isMouseDown = true;
  e.clientX = div12;
  e.clientY = div12;
  shiftLeft = e.clientX - div12.offsetLeft;
  shiftTop = e.clientY - div12.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div12isMouseDown) return;
    div12.style.top = e.clientY - shiftTop + "px";
    div12.style.left = e.clientX - shiftLeft + "px";
  });

  div12.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div12isMouseDown = false;
  });
});

let div13isMouseDown = false;
div13.addEventListener("mousedown", function (e) {
  div13.style.cursor = "pointer";
  div13isMouseDown = true;
  e.clientX = div13;
  e.clientY = div13;
  shiftLeft = e.clientX - div13.offsetLeft;
  shiftTop = e.clientY - div13.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div13isMouseDown) return;
    div13.style.top = e.clientY - shiftTop + "px";
    div13.style.left = e.clientX - shiftLeft + "px";
  });

  div13.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div13isMouseDown = false;
  });
});

let div14isMouseDown = false;
div14.addEventListener("mousedown", function (e) {
  div14.style.cursor = "pointer";
  div14isMouseDown = true;
  e.clientX = div14;
  e.clientY = div14;
  shiftLeft = e.clientX - div14.offsetLeft;
  shiftTop = e.clientY - div14.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div14isMouseDown) return;
    div14.style.top = e.clientY - shiftTop + "px";
    div14.style.left = e.clientX - shiftLeft + "px";
  });

  div14.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div14isMouseDown = false;
  });
});

let div15isMouseDown = false;
div15.addEventListener("mousedown", function (e) {
  div15.style.cursor = "pointer";
  div15isMouseDown = true;
  e.clientX = div15;
  e.clientY = div15;
  shiftLeft = e.clientX - div15.offsetLeft;
  shiftTop = e.clientY - div15.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div15isMouseDown) return;
    div15.style.top = e.clientY - shiftTop + "px";
    div15.style.left = e.clientX - shiftLeft + "px";
  });

  div15.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div15isMouseDown = false;
  });
});

let div16isMouseDown = false;
div16.addEventListener("mousedown", function (e) {
  div16.style.cursor = "pointer";
  div16isMouseDown = true;
  e.clientX = div16;
  e.clientY = div16;
  shiftLeft = e.clientX - div16.offsetLeft;
  shiftTop = e.clientY - div16.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div16isMouseDown) return;
    div16.style.top = e.clientY - shiftTop + "px";
    div16.style.left = e.clientX - shiftLeft + "px";
  });

  div16.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div16isMouseDown = false;
  });
});

let div17isMouseDown = false;
div17.addEventListener("mousedown", function (e) {
  div17.style.cursor = "pointer";
  div17isMouseDown = true;
  e.clientX = div17;
  e.clientY = div17;
  shiftLeft = e.clientX - div17.offsetLeft;
  shiftTop = e.clientY - div17.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div17isMouseDown) return;
    div17.style.top = e.clientY - shiftTop + "px";
    div17.style.left = e.clientX - shiftLeft + "px";
  });

  div17.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div17isMouseDown = false;
  });
});

let div18isMouseDown = false;
div18.addEventListener("mousedown", function (e) {
  div18.style.cursor = "pointer";
  div18isMouseDown = true;
  e.clientX = div18;
  e.clientY = div18;
  shiftLeft = e.clientX - div18.offsetLeft;
  shiftTop = e.clientY - div18.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div18isMouseDown) return;
    div18.style.top = e.clientY - shiftTop + "px";
    div18.style.left = e.clientX - shiftLeft + "px";
  });

  div18.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div18isMouseDown = false;
  });
});

let div19isMouseDown = false;
div19.addEventListener("mousedown", function (e) {
  div19.style.cursor = "pointer";
  div19isMouseDown = true;
  e.clientX = div19;
  e.clientY = div19;
  shiftLeft = e.clientX - div19.offsetLeft;
  shiftTop = e.clientY - div19.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div19isMouseDown) return;
    div19.style.top = e.clientY - shiftTop + "px";
    div19.style.left = e.clientX - shiftLeft + "px";
  });

  div19.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div19isMouseDown = false;
  });
});

let div20isMouseDown = false;
div20.addEventListener("mousedown", function (e) {
  div20.style.cursor = "pointer";
  div20isMouseDown = true;
  e.clientX = div20;
  e.clientY = div20;
  shiftLeft = e.clientX - div20.offsetLeft;
  shiftTop = e.clientY - div20.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div20isMouseDown) return;
    div20.style.top = e.clientY - shiftTop + "px";
    div20.style.left = e.clientX - shiftLeft + "px";
  });

  div20.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div20isMouseDown = false;
  });
});

let div21isMouseDown = false;
div21.addEventListener("mousedown", function (e) {
  div21.style.cursor = "pointer";
  div21isMouseDown = true;
  e.clientX = div21;
  e.clientY = div21;
  shiftLeft = e.clientX - div21.offsetLeft;
  shiftTop = e.clientY - div21.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div21isMouseDown) return;
    div21.style.top = e.clientY - shiftTop + "px";
    div21.style.left = e.clientX - shiftLeft + "px";
  });

  div21.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div21isMouseDown = false;
  });
});

let div22isMouseDown = false;
div22.addEventListener("mousedown", function (e) {
  div22.style.cursor = "pointer";
  div22isMouseDown = true;
  e.clientX = div22;
  e.clientY = div22;
  shiftLeft = e.clientX - div22.offsetLeft;
  shiftTop = e.clientY - div22.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div22isMouseDown) return;
    div22.style.top = e.clientY - shiftTop + "px";
    div22.style.left = e.clientX - shiftLeft + "px";
  });

  div22.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div22isMouseDown = false;
  });
});

let div23isMouseDown = false;
div23.addEventListener("mousedown", function (e) {
  div23.style.cursor = "pointer";
  div23isMouseDown = true;
  e.clientX = div23;
  e.clientY = div23;
  shiftLeft = e.clientX - div23.offsetLeft;
  shiftTop = e.clientY - div23.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div23isMouseDown) return;
    div23.style.top = e.clientY - shiftTop + "px";
    div23.style.left = e.clientX - shiftLeft + "px";
  });

  div23.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div23isMouseDown = false;
  });
});

let div24isMouseDown = false;
div24.addEventListener("mousedown", function (e) {
  div24.style.cursor = "pointer";
  div24isMouseDown = true;
  e.clientX = div24;
  e.clientY = div24;
  shiftLeft = e.clientX - div24.offsetLeft;
  shiftTop = e.clientY - div24.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div24isMouseDown) return;
    div24.style.top = e.clientY - shiftTop + "px";
    div24.style.left = e.clientX - shiftLeft + "px";
  });

  div24.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div24isMouseDown = false;
  });
});

let div25isMouseDown = false;
div25.addEventListener("mousedown", function (e) {
  div25.style.cursor = "pointer";
  div25isMouseDown = true;
  e.clientX = div25;
  e.clientY = div25;
  shiftLeft = e.clientX - div25.offsetLeft;
  shiftTop = e.clientY - div25.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div25isMouseDown) return;
    div25.style.top = e.clientY - shiftTop + "px";
    div25.style.left = e.clientX - shiftLeft + "px";
  });

  div25.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div25isMouseDown = false;
  });
});

let div26isMouseDown = false;
div26.addEventListener("mousedown", function (e) {
  div26.style.cursor = "pointer";
  div26isMouseDown = true;
  e.clientX = div26;
  e.clientY = div26;
  shiftLeft = e.clientX - div26.offsetLeft;
  shiftTop = e.clientY - div26.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div26isMouseDown) return;
    div26.style.top = e.clientY - shiftTop + "px";
    div26.style.left = e.clientX - shiftLeft + "px";
  });

  div26.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div26isMouseDown = false;
  });
});

let div27isMouseDown = false;
div27.addEventListener("mousedown", function (e) {
  div27.style.cursor = "pointer";
  div27isMouseDown = true;
  e.clientX = div27;
  e.clientY = div27;
  shiftLeft = e.clientX - div27.offsetLeft;
  shiftTop = e.clientY - div27.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div27isMouseDown) return;
    div27.style.top = e.clientY - shiftTop + "px";
    div27.style.left = e.clientX - shiftLeft + "px";
  });

  div27.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div27isMouseDown = false;
  });
});

let div28isMouseDown = false;
div28.addEventListener("mousedown", function (e) {
  div28.style.cursor = "pointer";
  div28isMouseDown = true;
  e.clientX = div28;
  e.clientY = div28;
  shiftLeft = e.clientX - div28.offsetLeft;
  shiftTop = e.clientY - div28.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div28isMouseDown) return;
    div28.style.top = e.clientY - shiftTop + "px";
    div28.style.left = e.clientX - shiftLeft + "px";
  });

  div28.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div28isMouseDown = false;
  });
});

let div29isMouseDown = false;
div29.addEventListener("mousedown", function (e) {
  div29.style.cursor = "pointer";
  div29isMouseDown = true;
  e.clientX = div29;
  e.clientY = div29;
  shiftLeft = e.clientX - div29.offsetLeft;
  shiftTop = e.clientY - div29.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div29isMouseDown) return;
    div29.style.top = e.clientY - shiftTop + "px";
    div29.style.left = e.clientX - shiftLeft + "px";
  });

  div29.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div29isMouseDown = false;
  });
});

let div30isMouseDown = false;
div30.addEventListener("mousedown", function (e) {
  div30.style.cursor = "pointer";
  div30isMouseDown = true;
  e.clientX = div30;
  e.clientY = div30;
  shiftLeft = e.clientX - div30.offsetLeft;
  shiftTop = e.clientY - div30.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div30isMouseDown) return;
    div30.style.top = e.clientY - shiftTop + "px";
    div30.style.left = e.clientX - shiftLeft + "px";
  });

  div30.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div30isMouseDown = false;
  });
});

let div31isMouseDown = false;
div31.addEventListener("mousedown", function (e) {
  div31.style.cursor = "pointer";
  div31isMouseDown = true;
  e.clientX = div31;
  e.clientY = div31;
  shiftLeft = e.clientX - div31.offsetLeft;
  shiftTop = e.clientY - div31.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div31isMouseDown) return;
    div31.style.top = e.clientY - shiftTop + "px";
    div31.style.left = e.clientX - shiftLeft + "px";
  });

  div31.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div31isMouseDown = false;
  });
});

let div32isMouseDown = false;
div32.addEventListener("mousedown", function (e) {
  div32.style.cursor = "pointer";
  div32isMouseDown = true;
  e.clientX = div32;
  e.clientY = div32;
  shiftLeft = e.clientX - div32.offsetLeft;
  shiftTop = e.clientY - div32.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div32isMouseDown) return;
    div32.style.top = e.clientY - shiftTop + "px";
    div32.style.left = e.clientX - shiftLeft + "px";
  });

  div32.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div32isMouseDown = false;
  });
});


let div33isMouseDown = false;
div33.addEventListener("mousedown", function (e) {
  div33.style.cursor = "pointer";
  div33isMouseDown = true;
  e.clientX = div33;
  e.clientY = div33;
  shiftLeft = e.clientX - div33.offsetLeft;
  shiftTop = e.clientY - div33.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div33isMouseDown) return;
    div33.style.top = e.clientY - shiftTop + "px";
    div33.style.left = e.clientX - shiftLeft + "px";
  });

  div33.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div33isMouseDown = false;
  });
});

let div34isMouseDown = false;
div34.addEventListener("mousedown", function (e) {
  div34.style.cursor = "pointer";
  div34isMouseDown = true;
  e.clientX = div34;
  e.clientY = div34;
  shiftLeft = e.clientX - div34.offsetLeft;
  shiftTop = e.clientY - div34.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div34isMouseDown) return;
    div34.style.top = e.clientY - shiftTop + "px";
    div34.style.left = e.clientX - shiftLeft + "px";
  });

  div34.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div34isMouseDown = false;
  });
});

let div35isMouseDown = false;
div35.addEventListener("mousedown", function (e) {
  div35.style.cursor = "pointer";
  div35isMouseDown = true;
  e.clientX = div35;
  e.clientY = div35;
  shiftLeft = e.clientX - div35.offsetLeft;
  shiftTop = e.clientY - div35.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div35isMouseDown) return;
    div35.style.top = e.clientY - shiftTop + "px";
    div35.style.left = e.clientX - shiftLeft + "px";
  });

  div35.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div35isMouseDown = false;
  });
});

let div36isMouseDown = false;
div36.addEventListener("mousedown", function (e) {
  div36.style.cursor = "pointer";
  div36isMouseDown = true;
  e.clientX = div36;
  e.clientY = div36;
  shiftLeft = e.clientX - div36.offsetLeft;
  shiftTop = e.clientY - div36.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div36isMouseDown) return;
    div36.style.top = e.clientY - shiftTop + "px";
    div36.style.left = e.clientX - shiftLeft + "px";
  });

  div36.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div36isMouseDown = false;
  });
});

let div37isMouseDown = false;
div37.addEventListener("mousedown", function (e) {
  div37.style.cursor = "pointer";
  div37isMouseDown = true;
  e.clientX = div37;
  e.clientY = div37;
  shiftLeft = e.clientX - div37.offsetLeft;
  shiftTop = e.clientY - div37.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div37isMouseDown) return;
    div37.style.top = e.clientY - shiftTop + "px";
    div37.style.left = e.clientX - shiftLeft + "px";
  });

  div37.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div37isMouseDown = false;
  });
});

let div38isMouseDown = false;
div38.addEventListener("mousedown", function (e) {
  div38.style.cursor = "pointer";
  div38isMouseDown = true;
  e.clientX = div38;
  e.clientY = div38;
  shiftLeft = e.clientX - div38.offsetLeft;
  shiftTop = e.clientY - div38.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div38isMouseDown) return;
    div38.style.top = e.clientY - shiftTop + "px";
    div38.style.left = e.clientX - shiftLeft + "px";
  });

  div38.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div38isMouseDown = false;

    let bTop = div38.offsetTop;
    let bLeft = div38.offsetLeft;
    let bRight = bLeft + div38.offsetWidth;
    let bBottom = bTop + div38.offsetHeight;

    let tTop = target1.offsetTop;
    let tLeft = target1.offsetLeft;
    let tRight = tLeft + target1.offsetWidth;
    let tBottom = tTop + target1.offsetHeight;

    if (
      bTop > tTop &&
      bBottom < tBottom &&
      bLeft > tLeft &&
      bRight < tRight
    ) {
      target1.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }

    let tTop2 = target2.offsetTop;
    let tLeft2 = target2.offsetLeft;
    let tRight2 = tLeft2 + target2.offsetWidth;
    let tBottom2 = tTop2 + target2.offsetHeight;

    if (
      bTop > tTop2 &&
      bBottom < tBottom2 &&
      bLeft > tLeft2 &&
      bRight < tRight2
    ) {
      target2.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop3 = target3.offsetTop;
    let tLeft3 = target3.offsetLeft;
    let tRight3 = tLeft3 + target3.offsetWidth;
    let tBottom3 = tTop3 + target3.offsetHeight;

    if (
      bTop > tTop3 &&
      bBottom < tBottom3 &&
      bLeft > tLeft3 &&
      bRight < tRight3
    ) {
      target3.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop4 = target4.offsetTop;
    let tLeft4 = target4.offsetLeft;
    let tRight4 = tLeft4 + target4.offsetWidth;
    let tBottom4 = tTop4 + target4.offsetHeight;

    if (
      bTop > tTop4 &&
      bBottom < tBottom4 &&
      bLeft > tLeft4 &&
      bRight < tRight4
    ) {
      target4.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop5 = target5.offsetTop;
    let tLeft5 = target5.offsetLeft;
    let tRight5 = tLeft5 + target5.offsetWidth;
    let tBottom5 = tTop5 + target5.offsetHeight;

    if (
      bTop > tTop5 &&
      bBottom < tBottom5 &&
      bLeft > tLeft5 &&
      bRight < tRight5
    ) {
      target5.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop6 = target6.offsetTop;
    let tLeft6 = target6.offsetLeft;
    let tRight6 = tLeft6 + target6.offsetWidth;
    let tBottom6 = tTop6 + target6.offsetHeight;

    if (
      bTop > tTop6 &&
      bBottom < tBottom6 &&
      bLeft > tLeft6 &&
      bRight < tRight6
    ) {
      target6.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop7 = target7.offsetTop;
    let tLeft7 = target7.offsetLeft;
    let tRight7 = tLeft7 + target7.offsetWidth;
    let tBottom7 = tTop7 + target7.offsetHeight;

    if (
      bTop > tTop7 &&
      bBottom < tBottom7 &&
      bLeft > tLeft7 &&
      bRight < tRight7
    ) {
      target7.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop8 = target8.offsetTop;
    let tLeft8 = target8.offsetLeft;
    let tRight8 = tLeft8 + target8.offsetWidth;
    let tBottom8 = tTop8 + target8.offsetHeight;

    if (
      bTop > tTop8 &&
      bBottom < tBottom8 &&
      bLeft > tLeft8 &&
      bRight < tRight8
    ) {
      target8.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop9 = target9.offsetTop;
    let tLeft9 = target9.offsetLeft;
    let tRight9 = tLeft9 + target9.offsetWidth;
    let tBottom9 = tTop9 + target9.offsetHeight;

    if (
      bTop > tTop9 &&
      bBottom < tBottom9 &&
      bLeft > tLeft9 &&
      bRight < tRight9
    ) {
      target9.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop10 = target10.offsetTop;
    let tLeft10 = target10.offsetLeft;
    let tRight10 = tLeft10 + target10.offsetWidth;
    let tBottom10 = tTop10 + target10.offsetHeight;

    if (
      bTop > tTop10 &&
      bBottom < tBottom10 &&
      bLeft > tLeft10 &&
      bRight < tRight10
    ) {
      target10.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }

    let tTop11 = target11.offsetTop;
    let tLeft11 = target11.offsetLeft;
    let tRight11 = tLeft11 + target11.offsetWidth;
    let tBottom11 = tTop11 + target11.offsetHeight;

    if (
      bTop > tTop11 &&
      bBottom < tBottom11 &&
      bLeft > tLeft11 &&
      bRight < tRight11
    ) {
      target11.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop12 = target12.offsetTop;
    let tLeft12 = target12.offsetLeft;
    let tRight12 = tLeft12 + target12.offsetWidth;
    let tBottom12 = tTop12 + target12.offsetHeight;

    if (
      bTop > tTop12 &&
      bBottom < tBottom12 &&
      bLeft > tLeft12 &&
      bRight < tRight12
    ) {
      target12.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop13 = target13.offsetTop;
    let tLeft13 = target13.offsetLeft;
    let tRight13 = tLeft13 + target13.offsetWidth;
    let tBottom13 = tTop13 + target13.offsetHeight;

    if (
      bTop > tTop13 &&
      bBottom < tBottom13 &&
      bLeft > tLeft13 &&
      bRight < tRight13
    ) {
      target13.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop14 = target14.offsetTop;
    let tLeft14 = target14.offsetLeft;
    let tRight14 = tLeft14 + target14.offsetWidth;
    let tBottom14 = tTop14 + target14.offsetHeight;

    if (
      bTop > tTop14 &&
      bBottom < tBottom14 &&
      bLeft > tLeft14 &&
      bRight < tRight14
    ) {
      target14.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop15 = target15.offsetTop;
    let tLeft15 = target15.offsetLeft;
    let tRight15 = tLeft15 + target15.offsetWidth;
    let tBottom15 = tTop15 + target15.offsetHeight;

    if (
      bTop > tTop15 &&
      bBottom < tBottom15 &&
      bLeft > tLeft15 &&
      bRight < tRight15
    ) {
      target15.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    
    let tTop16 = target16.offsetTop;
    let tLeft16 = target16.offsetLeft;
    let tRight16 = tLeft16 + target16.offsetWidth;
    let tBottom16 = tTop16 + target16.offsetHeight;

    if (
      bTop > tTop16 &&
      bBottom < tBottom16 &&
      bLeft > tLeft16 &&
      bRight < tRight16
    ) {
      target16.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    
    let tTop17 = target17.offsetTop;
    let tLeft17 = target17.offsetLeft;
    let tRight17 = tLeft17 + target17.offsetWidth;
    let tBottom17 = tTop17 + target17.offsetHeight;

    if (
      bTop > tTop17 &&
      bBottom < tBottom17 &&
      bLeft > tLeft17 &&
      bRight < tRight17
    ) {
      target17.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop18 = target18.offsetTop;
    let tLeft18 = target18.offsetLeft;
    let tRight18 = tLeft18 + target18.offsetWidth;
    let tBottom18 = tTop18 + target18.offsetHeight;

    if (
      bTop > tTop18 &&
      bBottom < tBottom18 &&
      bLeft > tLeft18 &&
      bRight < tRight18
    ) {
      target18.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop19 = target19.offsetTop;
    let tLeft19 = target19.offsetLeft;
    let tRight19 = tLeft19 + target19.offsetWidth;
    let tBottom19 = tTop10 + target19.offsetHeight;

    if (
      bTop > tTop19 &&
      bBottom < tBottom19 &&
      bLeft > tLeft19 &&
      bRight < tRight19
    ) {
      target19.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop20 = target20.offsetTop;
    let tLeft20 = target20.offsetLeft;
    let tRight20 = tLeft20 + target20.offsetWidth;
    let tBottom20 = tTop20 + target20.offsetHeight;

    if (
      bTop > tTop20 &&
      bBottom < tBottom20 &&
      bLeft > tLeft20 &&
      bRight < tRight20
    ) {
      target20.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop21 = target21.offsetTop;
    let tLeft21 = target21.offsetLeft;
    let tRight21 = tLeft21 + target21.offsetWidth;
    let tBottom21 = tTop21 + target21.offsetHeight;

    if (
      bTop > tTop21 &&
      bBottom < tBottom21 &&
      bLeft > tLeft21 &&
      bRight < tRight21
    ) {
      target21.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop22 = target22.offsetTop;
    let tLeft22 = target22.offsetLeft;
    let tRight22 = tLeft22 + target22.offsetWidth;
    let tBottom22 = tTop22 + target22.offsetHeight;

    if (
      bTop > tTop22 &&
      bBottom < tBottom22 &&
      bLeft > tLeft22 &&
      bRight < tRight22
    ) {
      target22.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop23 = target23.offsetTop;
    let tLeft23 = target23.offsetLeft;
    let tRight23 = tLeft23 + target23.offsetWidth;
    let tBottom23 = tTop23 + target23.offsetHeight;

    if (
      bTop > tTop23 &&
      bBottom < tBottom23 &&
      bLeft > tLeft23 &&
      bRight < tRight23
    ) {
      target23.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop24 = target24.offsetTop;
    let tLeft24 = target24.offsetLeft;
    let tRight24 = tLeft24 + target24.offsetWidth;
    let tBottom24 = tTop24 + target24.offsetHeight;

    if (
      bTop > tTop24 &&
      bBottom < tBottom24 &&
      bLeft > tLeft24 &&
      bRight < tRight24
    ) {
      target24.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop25 = target25.offsetTop;
    let tLeft25 = target25.offsetLeft;
    let tRight25 = tLeft25 + target25.offsetWidth;
    let tBottom25 = tTop25 + target25.offsetHeight;

    if (
      bTop > tTop25 &&
      bBottom < tBottom25 &&
      bLeft > tLeft25 &&
      bRight < tRight25
    ) {
      target25.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop26 = target26.offsetTop;
    let tLeft26 = target26.offsetLeft;
    let tRight26 = tLeft26 + target26.offsetWidth;
    let tBottom26 = tTop26 + target26.offsetHeight;

    if (
      bTop > tTop26 &&
      bBottom < tBottom26 &&
      bLeft > tLeft26 &&
      bRight < tRight26
    ) {
      target26.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop27 = target27.offsetTop;
    let tLeft27 = target27.offsetLeft;
    let tRight27 = tLeft27 + target27.offsetWidth;
    let tBottom27 = tTop27 + target27.offsetHeight;

    if (
      bTop > tTop27 &&
      bBottom < tBottom27 &&
      bLeft > tLeft27 &&
      bRight < tRight27
    ) {
      target27.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop28 = target28.offsetTop;
    let tLeft28 = target28.offsetLeft;
    let tRight28 = tLeft28 + target28.offsetWidth;
    let tBottom28 = tTop28 + target28.offsetHeight;

    if (
      bTop > tTop28 &&
      bBottom < tBottom28 &&
      bLeft > tLeft28 &&
      bRight < tRight28
    ) {
      target28.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop29 = target29.offsetTop;
    let tLeft29 = target29.offsetLeft;
    let tRight29 = tLeft29 + target29.offsetWidth;
    let tBottom29 = tTop29 + target29.offsetHeight;

    if (
      bTop > tTop29 &&
      bBottom < tBottom29 &&
      bLeft > tLeft29 &&
      bRight < tRight29
    ) {
      target29.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop30 = target30.offsetTop;
    let tLeft30 = target30.offsetLeft;
    let tRight30 = tLeft30 + target30.offsetWidth;
    let tBottom30 = tTop30 + target30.offsetHeight;

    if (
      bTop > tTop30 &&
      bBottom < tBottom30 &&
      bLeft > tLeft30 &&
      bRight < tRight30
    ) {
      target30.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop31 = target31.offsetTop;
    let tLeft31 = target31.offsetLeft;
    let tRight31 = tLeft31 + target31.offsetWidth;
    let tBottom31 = tTop31 + target31.offsetHeight;

    if (
      bTop > tTop31 &&
      bBottom < tBottom31 &&
      bLeft > tLeft31 &&
      bRight < tRight31
    ) {
      target31.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop32 = target32.offsetTop;
    let tLeft32 = target32.offsetLeft;
    let tRight32 = tLeft32 + target32.offsetWidth;
    let tBottom32 = tTop32 + target32.offsetHeight;

    if (
      bTop > tTop32 &&
      bBottom < tBottom32 &&
      bLeft > tLeft32 &&
      bRight < tRight32
    ) {
      target32.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop33 = target33.offsetTop;
    let tLeft33 = target33.offsetLeft;
    let tRight33 = tLeft33 + target33.offsetWidth;
    let tBottom33 = tTop33 + target33.offsetHeight;

    if (
      bTop > tTop33 &&
      bBottom < tBottom33 &&
      bLeft > tLeft33 &&
      bRight < tRight33
    ) {
      target33.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop34 = target34.offsetTop;
    let tLeft34 = target34.offsetLeft;
    let tRight34 = tLeft34 + target34.offsetWidth;
    let tBottom34 = tTop34 + target34.offsetHeight;

    if (
      bTop > tTop34 &&
      bBottom < tBottom34 &&
      bLeft > tLeft34 &&
      bRight < tRight34
    ) {
      target34.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop35 = target35.offsetTop;
    let tLeft35 = target35.offsetLeft;
    let tRight35 = tLeft35 + target35.offsetWidth;
    let tBottom35 = tTop35 + target35.offsetHeight;

    if (
      bTop > tTop35 &&
      bBottom < tBottom35 &&
      bLeft > tLeft35 &&
      bRight < tRight35
    ) {
      target35.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop36 = target36.offsetTop;
    let tLeft36 = target36.offsetLeft;
    let tRight36 = tLeft36 + target36.offsetWidth;
    let tBottom36 = tTop36 + target36.offsetHeight;

    if (
      bTop > tTop36 &&
      bBottom < tBottom36 &&
      bLeft > tLeft36 &&
      bRight < tRight36
    ) {
      target36.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop37 = target37.offsetTop;
    let tLeft37 = target37.offsetLeft;
    let tRight37 = tLeft37 + target37.offsetWidth;
    let tBottom37 = tTop37 + target37.offsetHeight;

    if (
      bTop > tTop37 &&
      bBottom < tBottom37 &&
      bLeft > tLeft37 &&
      bRight < tRight37
    ) {
      target37.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop38 = target38.offsetTop;
    let tLeft38 = target38.offsetLeft;
    let tRight38 = tLeft38 + target38.offsetWidth;
    let tBottom38 = tTop38 + target38.offsetHeight;

    if (
      bTop > tTop38 &&
      bBottom < tBottom38 &&
      bLeft > tLeft38 &&
      bRight < tRight38
    ) {
      target38.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop39 = target39.offsetTop;
    let tLeft39 = target39.offsetLeft;
    let tRight39 = tLeft39 + target39.offsetWidth;
    let tBottom39 = tTop39 + target39.offsetHeight;

    if (
      bTop > tTop39 &&
      bBottom < tBottom39 &&
      bLeft > tLeft39 &&
      bRight < tRight39
    ) {
      target39.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop40 = target40.offsetTop;
    let tLeft40 = target40.offsetLeft;
    let tRight40 = tLeft40 + target40.offsetWidth;
    let tBottom40 = tTop40 + target40.offsetHeight;

    if (
      bTop > tTop40 &&
      bBottom < tBottom40 &&
      bLeft > tLeft40 &&
      bRight < tRight40
    ) {
      target40.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop41 = target41.offsetTop;
    let tLeft41 = target41.offsetLeft;
    let tRight41 = tLeft41 + target41.offsetWidth;
    let tBottom41 = tTop41 + target41.offsetHeight;

    if (
      bTop > tTop41 &&
      bBottom < tBottom41 &&
      bLeft > tLeft41 &&
      bRight < tRight41
    ) {
      target41.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
    let tTop42 = target42.offsetTop;
    let tLeft42 = target42.offsetLeft;
    let tRight42 = tLeft42 + target42.offsetWidth;
    let tBottom42 = tTop42 + target42.offsetHeight;

    if (
      bTop > tTop42 &&
      bBottom < tBottom42 &&
      bLeft > tLeft42 &&
      bRight < tRight42
    ) {
      target42.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div38.style.display = "none";
      console.log("blup");
    }
  });
});

let div39isMouseDown = false;
div39.addEventListener("mousedown", function (e) {
  div39.style.cursor = "pointer";
  div39isMouseDown = true;
  e.clientX = div39;
  e.clientY = div39;
  shiftLeft = e.clientX - div39.offsetLeft;
  shiftTop = e.clientY - div39.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div39isMouseDown) return;
    div39.style.top = e.clientY - shiftTop + "px";
    div39.style.left = e.clientX - shiftLeft + "px";
  });

  div39.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div39isMouseDown = false;

    let bTop = div39.offsetTop;
    let bLeft = div39.offsetLeft;
    let bRight = bLeft + div39.offsetWidth;
    let bBottom = bTop + div39.offsetHeight;

    let tTop = target1.offsetTop;
    let tLeft = target1.offsetLeft;
    let tRight = tLeft + target1.offsetWidth;
    let tBottom = tTop + target1.offsetHeight;

    if (
      bTop > tTop &&
      bBottom < tBottom &&
      bLeft > tLeft &&
      bRight < tRight
    ) {
      target1.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }

    let tTop2 = target2.offsetTop;
    let tLeft2 = target2.offsetLeft;
    let tRight2 = tLeft2 + target2.offsetWidth;
    let tBottom2 = tTop2 + target2.offsetHeight;

    if (
      bTop > tTop2 &&
      bBottom < tBottom2 &&
      bLeft > tLeft2 &&
      bRight < tRight2
    ) {
      target2.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop3 = target3.offsetTop;
    let tLeft3 = target3.offsetLeft;
    let tRight3 = tLeft3 + target3.offsetWidth;
    let tBottom3 = tTop3 + target3.offsetHeight;

    if (
      bTop > tTop3 &&
      bBottom < tBottom3 &&
      bLeft > tLeft3 &&
      bRight < tRight3
    ) {
      target3.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop4 = target4.offsetTop;
    let tLeft4 = target4.offsetLeft;
    let tRight4 = tLeft4 + target4.offsetWidth;
    let tBottom4 = tTop4 + target4.offsetHeight;

    if (
      bTop > tTop4 &&
      bBottom < tBottom4 &&
      bLeft > tLeft4 &&
      bRight < tRight4
    ) {
      target4.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop5 = target5.offsetTop;
    let tLeft5 = target5.offsetLeft;
    let tRight5 = tLeft5 + target5.offsetWidth;
    let tBottom5 = tTop5 + target5.offsetHeight;

    if (
      bTop > tTop5 &&
      bBottom < tBottom5 &&
      bLeft > tLeft5 &&
      bRight < tRight5
    ) {
      target5.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop6 = target6.offsetTop;
    let tLeft6 = target6.offsetLeft;
    let tRight6 = tLeft6 + target6.offsetWidth;
    let tBottom6 = tTop6 + target6.offsetHeight;

    if (
      bTop > tTop6 &&
      bBottom < tBottom6 &&
      bLeft > tLeft6 &&
      bRight < tRight6
    ) {
      target6.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop7 = target7.offsetTop;
    let tLeft7 = target7.offsetLeft;
    let tRight7 = tLeft7 + target7.offsetWidth;
    let tBottom7 = tTop7 + target7.offsetHeight;

    if (
      bTop > tTop7 &&
      bBottom < tBottom7 &&
      bLeft > tLeft7 &&
      bRight < tRight7
    ) {
      target7.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop8 = target8.offsetTop;
    let tLeft8 = target8.offsetLeft;
    let tRight8 = tLeft8 + target8.offsetWidth;
    let tBottom8 = tTop8 + target8.offsetHeight;

    if (
      bTop > tTop8 &&
      bBottom < tBottom8 &&
      bLeft > tLeft8 &&
      bRight < tRight8
    ) {
      target8.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop9 = target9.offsetTop;
    let tLeft9 = target9.offsetLeft;
    let tRight9 = tLeft9 + target9.offsetWidth;
    let tBottom9 = tTop9 + target9.offsetHeight;

    if (
      bTop > tTop9 &&
      bBottom < tBottom9 &&
      bLeft > tLeft9 &&
      bRight < tRight9
    ) {
      target9.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop10 = target10.offsetTop;
    let tLeft10 = target10.offsetLeft;
    let tRight10 = tLeft10 + target10.offsetWidth;
    let tBottom10 = tTop10 + target10.offsetHeight;

    if (
      bTop > tTop10 &&
      bBottom < tBottom10 &&
      bLeft > tLeft10 &&
      bRight < tRight10
    ) {
      target10.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }

    let tTop11 = target11.offsetTop;
    let tLeft11 = target11.offsetLeft;
    let tRight11 = tLeft11 + target11.offsetWidth;
    let tBottom11 = tTop11 + target11.offsetHeight;

    if (
      bTop > tTop11 &&
      bBottom < tBottom11 &&
      bLeft > tLeft11 &&
      bRight < tRight11
    ) {
      target11.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop12 = target12.offsetTop;
    let tLeft12 = target12.offsetLeft;
    let tRight12 = tLeft12 + target12.offsetWidth;
    let tBottom12 = tTop12 + target12.offsetHeight;

    if (
      bTop > tTop12 &&
      bBottom < tBottom12 &&
      bLeft > tLeft12 &&
      bRight < tRight12
    ) {
      target12.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop13 = target13.offsetTop;
    let tLeft13 = target13.offsetLeft;
    let tRight13 = tLeft13 + target13.offsetWidth;
    let tBottom13 = tTop13 + target13.offsetHeight;

    if (
      bTop > tTop13 &&
      bBottom < tBottom13 &&
      bLeft > tLeft13 &&
      bRight < tRight13
    ) {
      target13.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop14 = target14.offsetTop;
    let tLeft14 = target14.offsetLeft;
    let tRight14 = tLeft14 + target14.offsetWidth;
    let tBottom14 = tTop14 + target14.offsetHeight;

    if (
      bTop > tTop14 &&
      bBottom < tBottom14 &&
      bLeft > tLeft14 &&
      bRight < tRight14
    ) {
      target14.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop15 = target15.offsetTop;
    let tLeft15 = target15.offsetLeft;
    let tRight15 = tLeft15 + target15.offsetWidth;
    let tBottom15 = tTop15 + target15.offsetHeight;

    if (
      bTop > tTop15 &&
      bBottom < tBottom15 &&
      bLeft > tLeft15 &&
      bRight < tRight15
    ) {
      target15.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    
    let tTop16 = target16.offsetTop;
    let tLeft16 = target16.offsetLeft;
    let tRight16 = tLeft16 + target16.offsetWidth;
    let tBottom16 = tTop16 + target16.offsetHeight;

    if (
      bTop > tTop16 &&
      bBottom < tBottom16 &&
      bLeft > tLeft16 &&
      bRight < tRight16
    ) {
      target16.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    
    let tTop17 = target17.offsetTop;
    let tLeft17 = target17.offsetLeft;
    let tRight17 = tLeft17 + target17.offsetWidth;
    let tBottom17 = tTop17 + target17.offsetHeight;

    if (
      bTop > tTop17 &&
      bBottom < tBottom17 &&
      bLeft > tLeft17 &&
      bRight < tRight17
    ) {
      target17.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop18 = target18.offsetTop;
    let tLeft18 = target18.offsetLeft;
    let tRight18 = tLeft18 + target18.offsetWidth;
    let tBottom18 = tTop18 + target18.offsetHeight;

    if (
      bTop > tTop18 &&
      bBottom < tBottom18 &&
      bLeft > tLeft18 &&
      bRight < tRight18
    ) {
      target18.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop19 = target19.offsetTop;
    let tLeft19 = target19.offsetLeft;
    let tRight19 = tLeft19 + target19.offsetWidth;
    let tBottom19 = tTop10 + target19.offsetHeight;

    if (
      bTop > tTop19 &&
      bBottom < tBottom19 &&
      bLeft > tLeft19 &&
      bRight < tRight19
    ) {
      target19.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop20 = target20.offsetTop;
    let tLeft20 = target20.offsetLeft;
    let tRight20 = tLeft20 + target20.offsetWidth;
    let tBottom20 = tTop20 + target20.offsetHeight;

    if (
      bTop > tTop20 &&
      bBottom < tBottom20 &&
      bLeft > tLeft20 &&
      bRight < tRight20
    ) {
      target20.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop21 = target21.offsetTop;
    let tLeft21 = target21.offsetLeft;
    let tRight21 = tLeft21 + target21.offsetWidth;
    let tBottom21 = tTop21 + target21.offsetHeight;

    if (
      bTop > tTop21 &&
      bBottom < tBottom21 &&
      bLeft > tLeft21 &&
      bRight < tRight21
    ) {
      target21.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop22 = target22.offsetTop;
    let tLeft22 = target22.offsetLeft;
    let tRight22 = tLeft22 + target22.offsetWidth;
    let tBottom22 = tTop22 + target22.offsetHeight;

    if (
      bTop > tTop22 &&
      bBottom < tBottom22 &&
      bLeft > tLeft22 &&
      bRight < tRight22
    ) {
      target22.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop23 = target23.offsetTop;
    let tLeft23 = target23.offsetLeft;
    let tRight23 = tLeft23 + target23.offsetWidth;
    let tBottom23 = tTop23 + target23.offsetHeight;

    if (
      bTop > tTop23 &&
      bBottom < tBottom23 &&
      bLeft > tLeft23 &&
      bRight < tRight23
    ) {
      target23.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop24 = target24.offsetTop;
    let tLeft24 = target24.offsetLeft;
    let tRight24 = tLeft24 + target24.offsetWidth;
    let tBottom24 = tTop24 + target24.offsetHeight;

    if (
      bTop > tTop24 &&
      bBottom < tBottom24 &&
      bLeft > tLeft24 &&
      bRight < tRight24
    ) {
      target24.style.backgroundColor = "deepskyblue";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop25 = target25.offsetTop;
    let tLeft25 = target25.offsetLeft;
    let tRight25 = tLeft25 + target25.offsetWidth;
    let tBottom25 = tTop25 + target25.offsetHeight;

    if (
      bTop > tTop25 &&
      bBottom < tBottom25 &&
      bLeft > tLeft25 &&
      bRight < tRight25
    ) {
      target25.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop26 = target26.offsetTop;
    let tLeft26 = target26.offsetLeft;
    let tRight26 = tLeft26 + target26.offsetWidth;
    let tBottom26 = tTop26 + target26.offsetHeight;

    if (
      bTop > tTop26 &&
      bBottom < tBottom26 &&
      bLeft > tLeft26 &&
      bRight < tRight26
    ) {
      target26.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop27 = target27.offsetTop;
    let tLeft27 = target27.offsetLeft;
    let tRight27 = tLeft27 + target27.offsetWidth;
    let tBottom27 = tTop27 + target27.offsetHeight;

    if (
      bTop > tTop27 &&
      bBottom < tBottom27 &&
      bLeft > tLeft27 &&
      bRight < tRight27
    ) {
      target27.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop28 = target28.offsetTop;
    let tLeft28 = target28.offsetLeft;
    let tRight28 = tLeft28 + target28.offsetWidth;
    let tBottom28 = tTop28 + target28.offsetHeight;

    if (
      bTop > tTop28 &&
      bBottom < tBottom28 &&
      bLeft > tLeft28 &&
      bRight < tRight28
    ) {
      target28.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop29 = target29.offsetTop;
    let tLeft29 = target29.offsetLeft;
    let tRight29 = tLeft29 + target29.offsetWidth;
    let tBottom29 = tTop29 + target29.offsetHeight;

    if (
      bTop > tTop29 &&
      bBottom < tBottom29 &&
      bLeft > tLeft29 &&
      bRight < tRight29
    ) {
      target29.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop30 = target30.offsetTop;
    let tLeft30 = target30.offsetLeft;
    let tRight30 = tLeft30 + target30.offsetWidth;
    let tBottom30 = tTop30 + target30.offsetHeight;

    if (
      bTop > tTop30 &&
      bBottom < tBottom30 &&
      bLeft > tLeft30 &&
      bRight < tRight30
    ) {
      target30.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop31 = target31.offsetTop;
    let tLeft31 = target31.offsetLeft;
    let tRight31 = tLeft31 + target31.offsetWidth;
    let tBottom31 = tTop31 + target31.offsetHeight;

    if (
      bTop > tTop31 &&
      bBottom < tBottom31 &&
      bLeft > tLeft31 &&
      bRight < tRight31
    ) {
      target31.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop32 = target32.offsetTop;
    let tLeft32 = target32.offsetLeft;
    let tRight32 = tLeft32 + target32.offsetWidth;
    let tBottom32 = tTop32 + target32.offsetHeight;

    if (
      bTop > tTop32 &&
      bBottom < tBottom32 &&
      bLeft > tLeft32 &&
      bRight < tRight32
    ) {
      target32.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop33 = target33.offsetTop;
    let tLeft33 = target33.offsetLeft;
    let tRight33 = tLeft33 + target33.offsetWidth;
    let tBottom33 = tTop33 + target33.offsetHeight;

    if (
      bTop > tTop33 &&
      bBottom < tBottom33 &&
      bLeft > tLeft33 &&
      bRight < tRight33
    ) {
      target33.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop34 = target34.offsetTop;
    let tLeft34 = target34.offsetLeft;
    let tRight34 = tLeft34 + target34.offsetWidth;
    let tBottom34 = tTop34 + target34.offsetHeight;

    if (
      bTop > tTop34 &&
      bBottom < tBottom34 &&
      bLeft > tLeft34 &&
      bRight < tRight34
    ) {
      target34.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop35 = target35.offsetTop;
    let tLeft35 = target35.offsetLeft;
    let tRight35 = tLeft35 + target35.offsetWidth;
    let tBottom35 = tTop35 + target35.offsetHeight;

    if (
      bTop > tTop35 &&
      bBottom < tBottom35 &&
      bLeft > tLeft35 &&
      bRight < tRight35
    ) {
      target35.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop36 = target36.offsetTop;
    let tLeft36 = target36.offsetLeft;
    let tRight36 = tLeft36 + target36.offsetWidth;
    let tBottom36 = tTop36 + target36.offsetHeight;

    if (
      bTop > tTop36 &&
      bBottom < tBottom36 &&
      bLeft > tLeft36 &&
      bRight < tRight36
    ) {
      target36.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop37 = target37.offsetTop;
    let tLeft37 = target37.offsetLeft;
    let tRight37 = tLeft37 + target37.offsetWidth;
    let tBottom37 = tTop37 + target37.offsetHeight;

    if (
      bTop > tTop37 &&
      bBottom < tBottom37 &&
      bLeft > tLeft37 &&
      bRight < tRight37
    ) {
      target37.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop38 = target38.offsetTop;
    let tLeft38 = target38.offsetLeft;
    let tRight38 = tLeft38 + target38.offsetWidth;
    let tBottom38 = tTop38 + target38.offsetHeight;

    if (
      bTop > tTop38 &&
      bBottom < tBottom38 &&
      bLeft > tLeft38 &&
      bRight < tRight38
    ) {
      target38.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop39 = target39.offsetTop;
    let tLeft39 = target39.offsetLeft;
    let tRight39 = tLeft39 + target39.offsetWidth;
    let tBottom39 = tTop39 + target39.offsetHeight;

    if (
      bTop > tTop39 &&
      bBottom < tBottom39 &&
      bLeft > tLeft39 &&
      bRight < tRight39
    ) {
      target39.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop40 = target40.offsetTop;
    let tLeft40 = target40.offsetLeft;
    let tRight40 = tLeft40 + target40.offsetWidth;
    let tBottom40 = tTop40 + target40.offsetHeight;

    if (
      bTop > tTop40 &&
      bBottom < tBottom40 &&
      bLeft > tLeft40 &&
      bRight < tRight40
    ) {
      target40.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop41 = target41.offsetTop;
    let tLeft41 = target41.offsetLeft;
    let tRight41 = tLeft41 + target41.offsetWidth;
    let tBottom41 = tTop41 + target41.offsetHeight;

    if (
      bTop > tTop41 &&
      bBottom < tBottom41 &&
      bLeft > tLeft41 &&
      bRight < tRight41
    ) {
      target41.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
    let tTop42 = target42.offsetTop;
    let tLeft42 = target42.offsetLeft;
    let tRight42 = tLeft42 + target42.offsetWidth;
    let tBottom42 = tTop42 + target42.offsetHeight;

    if (
      bTop > tTop42 &&
      bBottom < tBottom42 &&
      bLeft > tLeft42 &&
      bRight < tRight42
    ) {
      target42.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div39.style.display = "none";
      console.log("blup");
    }
  });
});

//note, only one onclick but several addEventListener, so not good to add eventlistener inside other 

let div40isMouseDown = false;
div40.addEventListener("mousedown", function (e) {
  div40.style.cursor = "pointer";
  div40isMouseDown = true;
  e.clientX = div40;
  e.clientY = div40;
  shiftLeft = e.clientX - div40.offsetLeft;
  shiftTop = e.clientY - div40.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div40isMouseDown) return;
    div40.style.top = e.clientY - shiftTop + "px";
    div40.style.left = e.clientX - shiftLeft + "px";
  });

  div40.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div40isMouseDown = false;

    let bTop = div40.offsetTop;
    let bLeft = div40.offsetLeft;
    let bRight = bLeft + div40.offsetWidth;
    let bBottom = bTop + div40.offsetHeight;

    let tTop = target1.offsetTop;
    let tLeft = target1.offsetLeft;
    let tRight = tLeft + target1.offsetWidth;
    let tBottom = tTop + target1.offsetHeight;

    if (
      bTop > tTop &&
      bBottom < tBottom &&
      bLeft > tLeft &&
      bRight < tRight
    ) {
      target1.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }

    let tTop2 = target2.offsetTop;
    let tLeft2 = target2.offsetLeft;
    let tRight2 = tLeft2 + target2.offsetWidth;
    let tBottom2 = tTop2 + target2.offsetHeight;

    if (
      bTop > tTop2 &&
      bBottom < tBottom2 &&
      bLeft > tLeft2 &&
      bRight < tRight2
    ) {
      target2.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop3 = target3.offsetTop;
    let tLeft3 = target3.offsetLeft;
    let tRight3 = tLeft3 + target3.offsetWidth;
    let tBottom3 = tTop3 + target3.offsetHeight;

    if (
      bTop > tTop3 &&
      bBottom < tBottom3 &&
      bLeft > tLeft3 &&
      bRight < tRight3
    ) {
      target3.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop4 = target4.offsetTop;
    let tLeft4 = target4.offsetLeft;
    let tRight4 = tLeft4 + target4.offsetWidth;
    let tBottom4 = tTop4 + target4.offsetHeight;

    if (
      bTop > tTop4 &&
      bBottom < tBottom4 &&
      bLeft > tLeft4 &&
      bRight < tRight4
    ) {
      target4.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop5 = target5.offsetTop;
    let tLeft5 = target5.offsetLeft;
    let tRight5 = tLeft5 + target5.offsetWidth;
    let tBottom5 = tTop5 + target5.offsetHeight;

    if (
      bTop > tTop5 &&
      bBottom < tBottom5 &&
      bLeft > tLeft5 &&
      bRight < tRight5
    ) {
      target5.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop6 = target6.offsetTop;
    let tLeft6 = target6.offsetLeft;
    let tRight6 = tLeft6 + target6.offsetWidth;
    let tBottom6 = tTop6 + target6.offsetHeight;

    if (
      bTop > tTop6 &&
      bBottom < tBottom6 &&
      bLeft > tLeft6 &&
      bRight < tRight6
    ) {
      target6.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop7 = target7.offsetTop;
    let tLeft7 = target7.offsetLeft;
    let tRight7 = tLeft7 + target7.offsetWidth;
    let tBottom7 = tTop7 + target7.offsetHeight;

    if (
      bTop > tTop7 &&
      bBottom < tBottom7 &&
      bLeft > tLeft7 &&
      bRight < tRight7
    ) {
      target7.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop8 = target8.offsetTop;
    let tLeft8 = target8.offsetLeft;
    let tRight8 = tLeft8 + target8.offsetWidth;
    let tBottom8 = tTop8 + target8.offsetHeight;

    if (
      bTop > tTop8 &&
      bBottom < tBottom8 &&
      bLeft > tLeft8 &&
      bRight < tRight8
    ) {
      target8.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop9 = target9.offsetTop;
    let tLeft9 = target9.offsetLeft;
    let tRight9 = tLeft9 + target9.offsetWidth;
    let tBottom9 = tTop9 + target9.offsetHeight;

    if (
      bTop > tTop9 &&
      bBottom < tBottom9 &&
      bLeft > tLeft9 &&
      bRight < tRight9
    ) {
      target9.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop10 = target10.offsetTop;
    let tLeft10 = target10.offsetLeft;
    let tRight10 = tLeft10 + target10.offsetWidth;
    let tBottom10 = tTop10 + target10.offsetHeight;

    if (
      bTop > tTop10 &&
      bBottom < tBottom10 &&
      bLeft > tLeft10 &&
      bRight < tRight10
    ) {
      target10.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }

    let tTop11 = target11.offsetTop;
    let tLeft11 = target11.offsetLeft;
    let tRight11 = tLeft11 + target11.offsetWidth;
    let tBottom11 = tTop11 + target11.offsetHeight;

    if (
      bTop > tTop11 &&
      bBottom < tBottom11 &&
      bLeft > tLeft11 &&
      bRight < tRight11
    ) {
      target11.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop12 = target12.offsetTop;
    let tLeft12 = target12.offsetLeft;
    let tRight12 = tLeft12 + target12.offsetWidth;
    let tBottom12 = tTop12 + target12.offsetHeight;

    if (
      bTop > tTop12 &&
      bBottom < tBottom12 &&
      bLeft > tLeft12 &&
      bRight < tRight12
    ) {
      target12.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop13 = target13.offsetTop;
    let tLeft13 = target13.offsetLeft;
    let tRight13 = tLeft13 + target13.offsetWidth;
    let tBottom13 = tTop13 + target13.offsetHeight;

    if (
      bTop > tTop13 &&
      bBottom < tBottom13 &&
      bLeft > tLeft13 &&
      bRight < tRight13
    ) {
      target13.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop14 = target14.offsetTop;
    let tLeft14 = target14.offsetLeft;
    let tRight14 = tLeft14 + target14.offsetWidth;
    let tBottom14 = tTop14 + target14.offsetHeight;

    if (
      bTop > tTop14 &&
      bBottom < tBottom14 &&
      bLeft > tLeft14 &&
      bRight < tRight14
    ) {
      target14.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop15 = target15.offsetTop;
    let tLeft15 = target15.offsetLeft;
    let tRight15 = tLeft15 + target15.offsetWidth;
    let tBottom15 = tTop15 + target15.offsetHeight;

    if (
      bTop > tTop15 &&
      bBottom < tBottom15 &&
      bLeft > tLeft15 &&
      bRight < tRight15
    ) {
      target15.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    
    let tTop16 = target16.offsetTop;
    let tLeft16 = target16.offsetLeft;
    let tRight16 = tLeft16 + target16.offsetWidth;
    let tBottom16 = tTop16 + target16.offsetHeight;

    if (
      bTop > tTop16 &&
      bBottom < tBottom16 &&
      bLeft > tLeft16 &&
      bRight < tRight16
    ) {
      target16.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    
    let tTop17 = target17.offsetTop;
    let tLeft17 = target17.offsetLeft;
    let tRight17 = tLeft17 + target17.offsetWidth;
    let tBottom17 = tTop17 + target17.offsetHeight;

    if (
      bTop > tTop17 &&
      bBottom < tBottom17 &&
      bLeft > tLeft17 &&
      bRight < tRight17
    ) {
      target17.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop18 = target18.offsetTop;
    let tLeft18 = target18.offsetLeft;
    let tRight18 = tLeft18 + target18.offsetWidth;
    let tBottom18 = tTop18 + target18.offsetHeight;

    if (
      bTop > tTop18 &&
      bBottom < tBottom18 &&
      bLeft > tLeft18 &&
      bRight < tRight18
    ) {
      target18.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop19 = target19.offsetTop;
    let tLeft19 = target19.offsetLeft;
    let tRight19 = tLeft19 + target19.offsetWidth;
    let tBottom19 = tTop10 + target19.offsetHeight;

    if (
      bTop > tTop19 &&
      bBottom < tBottom19 &&
      bLeft > tLeft19 &&
      bRight < tRight19
    ) {
      target19.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop20 = target20.offsetTop;
    let tLeft20 = target20.offsetLeft;
    let tRight20 = tLeft20 + target20.offsetWidth;
    let tBottom20 = tTop20 + target20.offsetHeight;

    if (
      bTop > tTop20 &&
      bBottom < tBottom20 &&
      bLeft > tLeft20 &&
      bRight < tRight20
    ) {
      target20.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop21 = target21.offsetTop;
    let tLeft21 = target21.offsetLeft;
    let tRight21 = tLeft21 + target21.offsetWidth;
    let tBottom21 = tTop21 + target21.offsetHeight;

    if (
      bTop > tTop21 &&
      bBottom < tBottom21 &&
      bLeft > tLeft21 &&
      bRight < tRight21
    ) {
      target21.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop22 = target22.offsetTop;
    let tLeft22 = target22.offsetLeft;
    let tRight22 = tLeft22 + target22.offsetWidth;
    let tBottom22 = tTop22 + target22.offsetHeight;

    if (
      bTop > tTop22 &&
      bBottom < tBottom22 &&
      bLeft > tLeft22 &&
      bRight < tRight22
    ) {
      target22.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop23 = target23.offsetTop;
    let tLeft23 = target23.offsetLeft;
    let tRight23 = tLeft23 + target23.offsetWidth;
    let tBottom23 = tTop23 + target23.offsetHeight;

    if (
      bTop > tTop23 &&
      bBottom < tBottom23 &&
      bLeft > tLeft23 &&
      bRight < tRight23
    ) {
      target23.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop24 = target24.offsetTop;
    let tLeft24 = target24.offsetLeft;
    let tRight24 = tLeft24 + target24.offsetWidth;
    let tBottom24 = tTop24 + target24.offsetHeight;

    if (
      bTop > tTop24 &&
      bBottom < tBottom24 &&
      bLeft > tLeft24 &&
      bRight < tRight24
    ) {
      target24.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop25 = target25.offsetTop;
    let tLeft25 = target25.offsetLeft;
    let tRight25 = tLeft25 + target25.offsetWidth;
    let tBottom25 = tTop25 + target25.offsetHeight;

    if (
      bTop > tTop25 &&
      bBottom < tBottom25 &&
      bLeft > tLeft25 &&
      bRight < tRight25
    ) {
      target25.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop26 = target26.offsetTop;
    let tLeft26 = target26.offsetLeft;
    let tRight26 = tLeft26 + target26.offsetWidth;
    let tBottom26 = tTop26 + target26.offsetHeight;

    if (
      bTop > tTop26 &&
      bBottom < tBottom26 &&
      bLeft > tLeft26 &&
      bRight < tRight26
    ) {
      target26.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop27 = target27.offsetTop;
    let tLeft27 = target27.offsetLeft;
    let tRight27 = tLeft27 + target27.offsetWidth;
    let tBottom27 = tTop27 + target27.offsetHeight;

    if (
      bTop > tTop27 &&
      bBottom < tBottom27 &&
      bLeft > tLeft27 &&
      bRight < tRight27
    ) {
      target27.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop28 = target28.offsetTop;
    let tLeft28 = target28.offsetLeft;
    let tRight28 = tLeft28 + target28.offsetWidth;
    let tBottom28 = tTop28 + target28.offsetHeight;

    if (
      bTop > tTop28 &&
      bBottom < tBottom28 &&
      bLeft > tLeft28 &&
      bRight < tRight28
    ) {
      target28.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop29 = target29.offsetTop;
    let tLeft29 = target29.offsetLeft;
    let tRight29 = tLeft29 + target29.offsetWidth;
    let tBottom29 = tTop29 + target29.offsetHeight;

    if (
      bTop > tTop29 &&
      bBottom < tBottom29 &&
      bLeft > tLeft29 &&
      bRight < tRight29
    ) {
      target29.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop30 = target30.offsetTop;
    let tLeft30 = target30.offsetLeft;
    let tRight30 = tLeft30 + target30.offsetWidth;
    let tBottom30 = tTop30 + target30.offsetHeight;

    if (
      bTop > tTop30 &&
      bBottom < tBottom30 &&
      bLeft > tLeft30 &&
      bRight < tRight30
    ) {
      target30.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop31 = target31.offsetTop;
    let tLeft31 = target31.offsetLeft;
    let tRight31 = tLeft31 + target31.offsetWidth;
    let tBottom31 = tTop31 + target31.offsetHeight;

    if (
      bTop > tTop31 &&
      bBottom < tBottom31 &&
      bLeft > tLeft31 &&
      bRight < tRight31
    ) {
      target31.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop32 = target32.offsetTop;
    let tLeft32 = target32.offsetLeft;
    let tRight32 = tLeft32 + target32.offsetWidth;
    let tBottom32 = tTop32 + target32.offsetHeight;

    if (
      bTop > tTop32 &&
      bBottom < tBottom32 &&
      bLeft > tLeft32 &&
      bRight < tRight32
    ) {
      target32.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop33 = target33.offsetTop;
    let tLeft33 = target33.offsetLeft;
    let tRight33 = tLeft33 + target33.offsetWidth;
    let tBottom33 = tTop33 + target33.offsetHeight;

    if (
      bTop > tTop33 &&
      bBottom < tBottom33 &&
      bLeft > tLeft33 &&
      bRight < tRight33
    ) {
      target33.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop34 = target34.offsetTop;
    let tLeft34 = target34.offsetLeft;
    let tRight34 = tLeft34 + target34.offsetWidth;
    let tBottom34 = tTop34 + target34.offsetHeight;

    if (
      bTop > tTop34 &&
      bBottom < tBottom34 &&
      bLeft > tLeft34 &&
      bRight < tRight34
    ) {
      target34.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop35 = target35.offsetTop;
    let tLeft35 = target35.offsetLeft;
    let tRight35 = tLeft35 + target35.offsetWidth;
    let tBottom35 = tTop35 + target35.offsetHeight;

    if (
      bTop > tTop35 &&
      bBottom < tBottom35 &&
      bLeft > tLeft35 &&
      bRight < tRight35
    ) {
      target35.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop36 = target36.offsetTop;
    let tLeft36 = target36.offsetLeft;
    let tRight36 = tLeft36 + target36.offsetWidth;
    let tBottom36 = tTop36 + target36.offsetHeight;

    if (
      bTop > tTop36 &&
      bBottom < tBottom36 &&
      bLeft > tLeft36 &&
      bRight < tRight36
    ) {
      target36.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop37 = target37.offsetTop;
    let tLeft37 = target37.offsetLeft;
    let tRight37 = tLeft37 + target37.offsetWidth;
    let tBottom37 = tTop37 + target37.offsetHeight;

    if (
      bTop > tTop37 &&
      bBottom < tBottom37 &&
      bLeft > tLeft37 &&
      bRight < tRight37
    ) {
      target37.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop38 = target38.offsetTop;
    let tLeft38 = target38.offsetLeft;
    let tRight38 = tLeft38 + target38.offsetWidth;
    let tBottom38 = tTop38 + target38.offsetHeight;

    if (
      bTop > tTop38 &&
      bBottom < tBottom38 &&
      bLeft > tLeft38 &&
      bRight < tRight38
    ) {
      target38.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop39 = target39.offsetTop;
    let tLeft39 = target39.offsetLeft;
    let tRight39 = tLeft39 + target39.offsetWidth;
    let tBottom39 = tTop39 + target39.offsetHeight;

    if (
      bTop > tTop39 &&
      bBottom < tBottom39 &&
      bLeft > tLeft39 &&
      bRight < tRight39
    ) {
      target39.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop40 = target40.offsetTop;
    let tLeft40 = target40.offsetLeft;
    let tRight40 = tLeft40 + target40.offsetWidth;
    let tBottom40 = tTop40 + target40.offsetHeight;

    if (
      bTop > tTop40 &&
      bBottom < tBottom40 &&
      bLeft > tLeft40 &&
      bRight < tRight40
    ) {
      target40.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop41 = target41.offsetTop;
    let tLeft41 = target41.offsetLeft;
    let tRight41 = tLeft41 + target41.offsetWidth;
    let tBottom41 = tTop41 + target41.offsetHeight;

    if (
      bTop > tTop41 &&
      bBottom < tBottom41 &&
      bLeft > tLeft41 &&
      bRight < tRight41
    ) {
      target41.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
    let tTop42 = target42.offsetTop;
    let tLeft42 = target42.offsetLeft;
    let tRight42 = tLeft42 + target42.offsetWidth;
    let tBottom42 = tTop42 + target42.offsetHeight;

    if (
      bTop > tTop42 &&
      bBottom < tBottom42 &&
      bLeft > tLeft42 &&
      bRight < tRight42
    ) {
      target42.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div40.style.display = "none";
      console.log("blup");
    }
  });
});

let div41isMouseDown = false;
div41.addEventListener("mousedown", function (e) {
  div41.style.cursor = "pointer";
  div41isMouseDown = true;
  e.clientX = div41;
  e.clientY = div41;
  shiftLeft = e.clientX - div41.offsetLeft;
  shiftTop = e.clientY - div41.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div41isMouseDown) return;
    div41.style.top = e.clientY - shiftTop + "px";
    div41.style.left = e.clientX - shiftLeft + "px";
  });

  div41.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div41isMouseDown = false;

    let bTop = div41.offsetTop;
    let bLeft = div41.offsetLeft;
    let bRight = bLeft + div41.offsetWidth;
    let bBottom = bTop + div41.offsetHeight;

    let tTop = target1.offsetTop;
    let tLeft = target1.offsetLeft;
    let tRight = tLeft + target1.offsetWidth;
    let tBottom = tTop + target1.offsetHeight;

    if (
      bTop > tTop &&
      bBottom < tBottom &&
      bLeft > tLeft &&
      bRight < tRight
    ) {
      target1.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }

    let tTop2 = target2.offsetTop;
    let tLeft2 = target2.offsetLeft;
    let tRight2 = tLeft2 + target2.offsetWidth;
    let tBottom2 = tTop2 + target2.offsetHeight;

    if (
      bTop > tTop2 &&
      bBottom < tBottom2 &&
      bLeft > tLeft2 &&
      bRight < tRight2
    ) {
      target2.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop3 = target3.offsetTop;
    let tLeft3 = target3.offsetLeft;
    let tRight3 = tLeft3 + target3.offsetWidth;
    let tBottom3 = tTop3 + target3.offsetHeight;

    if (
      bTop > tTop3 &&
      bBottom < tBottom3 &&
      bLeft > tLeft3 &&
      bRight < tRight3
    ) {
      target3.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop4 = target4.offsetTop;
    let tLeft4 = target4.offsetLeft;
    let tRight4 = tLeft4 + target4.offsetWidth;
    let tBottom4 = tTop4 + target4.offsetHeight;

    if (
      bTop > tTop4 &&
      bBottom < tBottom4 &&
      bLeft > tLeft4 &&
      bRight < tRight4
    ) {
      target4.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop5 = target5.offsetTop;
    let tLeft5 = target5.offsetLeft;
    let tRight5 = tLeft5 + target5.offsetWidth;
    let tBottom5 = tTop5 + target5.offsetHeight;

    if (
      bTop > tTop5 &&
      bBottom < tBottom5 &&
      bLeft > tLeft5 &&
      bRight < tRight5
    ) {
      target5.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop6 = target6.offsetTop;
    let tLeft6 = target6.offsetLeft;
    let tRight6 = tLeft6 + target6.offsetWidth;
    let tBottom6 = tTop6 + target6.offsetHeight;

    if (
      bTop > tTop6 &&
      bBottom < tBottom6 &&
      bLeft > tLeft6 &&
      bRight < tRight6
    ) {
      target6.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop7 = target7.offsetTop;
    let tLeft7 = target7.offsetLeft;
    let tRight7 = tLeft7 + target7.offsetWidth;
    let tBottom7 = tTop7 + target7.offsetHeight;

    if (
      bTop > tTop7 &&
      bBottom < tBottom7 &&
      bLeft > tLeft7 &&
      bRight < tRight7
    ) {
      target7.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop8 = target8.offsetTop;
    let tLeft8 = target8.offsetLeft;
    let tRight8 = tLeft8 + target8.offsetWidth;
    let tBottom8 = tTop8 + target8.offsetHeight;

    if (
      bTop > tTop8 &&
      bBottom < tBottom8 &&
      bLeft > tLeft8 &&
      bRight < tRight8
    ) {
      target8.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop9 = target9.offsetTop;
    let tLeft9 = target9.offsetLeft;
    let tRight9 = tLeft9 + target9.offsetWidth;
    let tBottom9 = tTop9 + target9.offsetHeight;

    if (
      bTop > tTop9 &&
      bBottom < tBottom9 &&
      bLeft > tLeft9 &&
      bRight < tRight9
    ) {
      target9.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop10 = target10.offsetTop;
    let tLeft10 = target10.offsetLeft;
    let tRight10 = tLeft10 + target10.offsetWidth;
    let tBottom10 = tTop10 + target10.offsetHeight;

    if (
      bTop > tTop10 &&
      bBottom < tBottom10 &&
      bLeft > tLeft10 &&
      bRight < tRight10
    ) {
      target10.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }

    let tTop11 = target11.offsetTop;
    let tLeft11 = target11.offsetLeft;
    let tRight11 = tLeft11 + target11.offsetWidth;
    let tBottom11 = tTop11 + target11.offsetHeight;

    if (
      bTop > tTop11 &&
      bBottom < tBottom11 &&
      bLeft > tLeft11 &&
      bRight < tRight11
    ) {
      target11.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop12 = target12.offsetTop;
    let tLeft12 = target12.offsetLeft;
    let tRight12 = tLeft12 + target12.offsetWidth;
    let tBottom12 = tTop12 + target12.offsetHeight;

    if (
      bTop > tTop12 &&
      bBottom < tBottom12 &&
      bLeft > tLeft12 &&
      bRight < tRight12
    ) {
      target12.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop13 = target13.offsetTop;
    let tLeft13 = target13.offsetLeft;
    let tRight13 = tLeft13 + target13.offsetWidth;
    let tBottom13 = tTop13 + target13.offsetHeight;

    if (
      bTop > tTop13 &&
      bBottom < tBottom13 &&
      bLeft > tLeft13 &&
      bRight < tRight13
    ) {
      target13.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop14 = target14.offsetTop;
    let tLeft14 = target14.offsetLeft;
    let tRight14 = tLeft14 + target14.offsetWidth;
    let tBottom14 = tTop14 + target14.offsetHeight;

    if (
      bTop > tTop14 &&
      bBottom < tBottom14 &&
      bLeft > tLeft14 &&
      bRight < tRight14
    ) {
      target14.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop15 = target15.offsetTop;
    let tLeft15 = target15.offsetLeft;
    let tRight15 = tLeft15 + target15.offsetWidth;
    let tBottom15 = tTop15 + target15.offsetHeight;

    if (
      bTop > tTop15 &&
      bBottom < tBottom15 &&
      bLeft > tLeft15 &&
      bRight < tRight15
    ) {
      target15.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    
    let tTop16 = target16.offsetTop;
    let tLeft16 = target16.offsetLeft;
    let tRight16 = tLeft16 + target16.offsetWidth;
    let tBottom16 = tTop16 + target16.offsetHeight;

    if (
      bTop > tTop16 &&
      bBottom < tBottom16 &&
      bLeft > tLeft16 &&
      bRight < tRight16
    ) {
      target16.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    
    let tTop17 = target17.offsetTop;
    let tLeft17 = target17.offsetLeft;
    let tRight17 = tLeft17 + target17.offsetWidth;
    let tBottom17 = tTop17 + target17.offsetHeight;

    if (
      bTop > tTop17 &&
      bBottom < tBottom17 &&
      bLeft > tLeft17 &&
      bRight < tRight17
    ) {
      target17.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop18 = target18.offsetTop;
    let tLeft18 = target18.offsetLeft;
    let tRight18 = tLeft18 + target18.offsetWidth;
    let tBottom18 = tTop18 + target18.offsetHeight;

    if (
      bTop > tTop18 &&
      bBottom < tBottom18 &&
      bLeft > tLeft18 &&
      bRight < tRight18
    ) {
      target18.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop19 = target19.offsetTop;
    let tLeft19 = target19.offsetLeft;
    let tRight19 = tLeft19 + target19.offsetWidth;
    let tBottom19 = tTop10 + target19.offsetHeight;

    if (
      bTop > tTop19 &&
      bBottom < tBottom19 &&
      bLeft > tLeft19 &&
      bRight < tRight19
    ) {
      target19.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop20 = target20.offsetTop;
    let tLeft20 = target20.offsetLeft;
    let tRight20 = tLeft20 + target20.offsetWidth;
    let tBottom20 = tTop20 + target20.offsetHeight;

    if (
      bTop > tTop20 &&
      bBottom < tBottom20 &&
      bLeft > tLeft20 &&
      bRight < tRight20
    ) {
      target20.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop21 = target21.offsetTop;
    let tLeft21 = target21.offsetLeft;
    let tRight21 = tLeft21 + target21.offsetWidth;
    let tBottom21 = tTop21 + target21.offsetHeight;

    if (
      bTop > tTop21 &&
      bBottom < tBottom21 &&
      bLeft > tLeft21 &&
      bRight < tRight21
    ) {
      target21.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop22 = target22.offsetTop;
    let tLeft22 = target22.offsetLeft;
    let tRight22 = tLeft22 + target22.offsetWidth;
    let tBottom22 = tTop22 + target22.offsetHeight;

    if (
      bTop > tTop22 &&
      bBottom < tBottom22 &&
      bLeft > tLeft22 &&
      bRight < tRight22
    ) {
      target22.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop23 = target23.offsetTop;
    let tLeft23 = target23.offsetLeft;
    let tRight23 = tLeft23 + target23.offsetWidth;
    let tBottom23 = tTop23 + target23.offsetHeight;

    if (
      bTop > tTop23 &&
      bBottom < tBottom23 &&
      bLeft > tLeft23 &&
      bRight < tRight23
    ) {
      target23.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop24 = target24.offsetTop;
    let tLeft24 = target24.offsetLeft;
    let tRight24 = tLeft24 + target24.offsetWidth;
    let tBottom24 = tTop24 + target24.offsetHeight;

    if (
      bTop > tTop24 &&
      bBottom < tBottom24 &&
      bLeft > tLeft24 &&
      bRight < tRight24
    ) {
      target24.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop25 = target25.offsetTop;
    let tLeft25 = target25.offsetLeft;
    let tRight25 = tLeft25 + target25.offsetWidth;
    let tBottom25 = tTop25 + target25.offsetHeight;

    if (
      bTop > tTop25 &&
      bBottom < tBottom25 &&
      bLeft > tLeft25 &&
      bRight < tRight25
    ) {
      target25.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop26 = target26.offsetTop;
    let tLeft26 = target26.offsetLeft;
    let tRight26 = tLeft26 + target26.offsetWidth;
    let tBottom26 = tTop26 + target26.offsetHeight;

    if (
      bTop > tTop26 &&
      bBottom < tBottom26 &&
      bLeft > tLeft26 &&
      bRight < tRight26
    ) {
      target26.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop27 = target27.offsetTop;
    let tLeft27 = target27.offsetLeft;
    let tRight27 = tLeft27 + target27.offsetWidth;
    let tBottom27 = tTop27 + target27.offsetHeight;

    if (
      bTop > tTop27 &&
      bBottom < tBottom27 &&
      bLeft > tLeft27 &&
      bRight < tRight27
    ) {
      target27.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop28 = target28.offsetTop;
    let tLeft28 = target28.offsetLeft;
    let tRight28 = tLeft28 + target28.offsetWidth;
    let tBottom28 = tTop28 + target28.offsetHeight;

    if (
      bTop > tTop28 &&
      bBottom < tBottom28 &&
      bLeft > tLeft28 &&
      bRight < tRight28
    ) {
      target28.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop29 = target29.offsetTop;
    let tLeft29 = target29.offsetLeft;
    let tRight29 = tLeft29 + target29.offsetWidth;
    let tBottom29 = tTop29 + target29.offsetHeight;

    if (
      bTop > tTop29 &&
      bBottom < tBottom29 &&
      bLeft > tLeft29 &&
      bRight < tRight29
    ) {
      target29.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop30 = target30.offsetTop;
    let tLeft30 = target30.offsetLeft;
    let tRight30 = tLeft30 + target30.offsetWidth;
    let tBottom30 = tTop30 + target30.offsetHeight;

    if (
      bTop > tTop30 &&
      bBottom < tBottom30 &&
      bLeft > tLeft30 &&
      bRight < tRight30
    ) {
      target30.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop31 = target31.offsetTop;
    let tLeft31 = target31.offsetLeft;
    let tRight31 = tLeft31 + target31.offsetWidth;
    let tBottom31 = tTop31 + target31.offsetHeight;

    if (
      bTop > tTop31 &&
      bBottom < tBottom31 &&
      bLeft > tLeft31 &&
      bRight < tRight31
    ) {
      target31.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop32 = target32.offsetTop;
    let tLeft32 = target32.offsetLeft;
    let tRight32 = tLeft32 + target32.offsetWidth;
    let tBottom32 = tTop32 + target32.offsetHeight;

    if (
      bTop > tTop32 &&
      bBottom < tBottom32 &&
      bLeft > tLeft32 &&
      bRight < tRight32
    ) {
      target32.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop33 = target33.offsetTop;
    let tLeft33 = target33.offsetLeft;
    let tRight33 = tLeft33 + target33.offsetWidth;
    let tBottom33 = tTop33 + target33.offsetHeight;

    if (
      bTop > tTop33 &&
      bBottom < tBottom33 &&
      bLeft > tLeft33 &&
      bRight < tRight33
    ) {
      target33.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop34 = target34.offsetTop;
    let tLeft34 = target34.offsetLeft;
    let tRight34 = tLeft34 + target34.offsetWidth;
    let tBottom34 = tTop34 + target34.offsetHeight;

    if (
      bTop > tTop34 &&
      bBottom < tBottom34 &&
      bLeft > tLeft34 &&
      bRight < tRight34
    ) {
      target34.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop35 = target35.offsetTop;
    let tLeft35 = target35.offsetLeft;
    let tRight35 = tLeft35 + target35.offsetWidth;
    let tBottom35 = tTop35 + target35.offsetHeight;

    if (
      bTop > tTop35 &&
      bBottom < tBottom35 &&
      bLeft > tLeft35 &&
      bRight < tRight35
    ) {
      target35.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop36 = target36.offsetTop;
    let tLeft36 = target36.offsetLeft;
    let tRight36 = tLeft36 + target36.offsetWidth;
    let tBottom36 = tTop36 + target36.offsetHeight;

    if (
      bTop > tTop36 &&
      bBottom < tBottom36 &&
      bLeft > tLeft36 &&
      bRight < tRight36
    ) {
      target36.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop37 = target37.offsetTop;
    let tLeft37 = target37.offsetLeft;
    let tRight37 = tLeft37 + target37.offsetWidth;
    let tBottom37 = tTop37 + target37.offsetHeight;

    if (
      bTop > tTop37 &&
      bBottom < tBottom37 &&
      bLeft > tLeft37 &&
      bRight < tRight37
    ) {
      target37.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop38 = target38.offsetTop;
    let tLeft38 = target38.offsetLeft;
    let tRight38 = tLeft38 + target38.offsetWidth;
    let tBottom38 = tTop38 + target38.offsetHeight;

    if (
      bTop > tTop38 &&
      bBottom < tBottom38 &&
      bLeft > tLeft38 &&
      bRight < tRight38
    ) {
      target38.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop39 = target39.offsetTop;
    let tLeft39 = target39.offsetLeft;
    let tRight39 = tLeft39 + target39.offsetWidth;
    let tBottom39 = tTop39 + target39.offsetHeight;

    if (
      bTop > tTop39 &&
      bBottom < tBottom39 &&
      bLeft > tLeft39 &&
      bRight < tRight39
    ) {
      target39.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop40 = target40.offsetTop;
    let tLeft40 = target40.offsetLeft;
    let tRight40 = tLeft40 + target40.offsetWidth;
    let tBottom40 = tTop40 + target40.offsetHeight;

    if (
      bTop > tTop40 &&
      bBottom < tBottom40 &&
      bLeft > tLeft40 &&
      bRight < tRight40
    ) {
      target40.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop41 = target41.offsetTop;
    let tLeft41 = target41.offsetLeft;
    let tRight41 = tLeft41 + target41.offsetWidth;
    let tBottom41 = tTop41 + target41.offsetHeight;

    if (
      bTop > tTop41 &&
      bBottom < tBottom41 &&
      bLeft > tLeft41 &&
      bRight < tRight41
    ) {
      target41.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
    let tTop42 = target42.offsetTop;
    let tLeft42 = target42.offsetLeft;
    let tRight42 = tLeft42 + target42.offsetWidth;
    let tBottom42 = tTop42 + target42.offsetHeight;

    if (
      bTop > tTop42 &&
      bBottom < tBottom42 &&
      bLeft > tLeft42 &&
      bRight < tRight42
    ) {
      target42.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div41.style.display = "none";
      console.log("blup");
    }
  });
});

let div42isMouseDown = false;
div42.addEventListener("mousedown", function (e) {
  div42.style.cursor = "pointer";
  

  //TODO: add a variable to start when mousedown and stop when mouseup 
  // let audio = new Audio('bg-music.mp3');
  //   audio.play();
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let img = document.querySelector("img");
  let player1Box = document.getElementById("player1Box");
  let player2Box = document.getElementById("player2Box");
  h1.style.display = "none";
  h2.style.display = "none";
  img.style.filter = "blur(0px)";
  player1Box.style.filter = "blur(0px)";
  player2Box.style.filter = "blur(0px)";

  div42isMouseDown = true;
  e.clientX = div42;
  e.clientY = div42;
  shiftLeft = e.clientX - div42.offsetLeft;
  shiftTop = e.clientY - div42.offsetTop;

  document.addEventListener("mousemove", function (e) {
    if (!div42isMouseDown) return;
    div42.style.top = e.clientY - shiftTop + "px";
    div42.style.left = e.clientX - shiftLeft + "px";
  });

  div42.addEventListener("mouseup", function () {
    //    document.onmousemove = null;
    div42isMouseDown = false;

    let bTop = div42.offsetTop;
    let bLeft = div42.offsetLeft;
    let bRight = bLeft + div42.offsetWidth;
    let bBottom = bTop + div42.offsetHeight;

    let tTop = target1.offsetTop;
    let tLeft = target1.offsetLeft;
    let tRight = tLeft + target1.offsetWidth;
    let tBottom = tTop + target1.offsetHeight;

    if (
      bTop > tTop &&
      bBottom < tBottom &&
      bLeft > tLeft &&
      bRight < tRight
    ) {
      target1.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }

    let tTop2 = target2.offsetTop;
    let tLeft2 = target2.offsetLeft;
    let tRight2 = tLeft2 + target2.offsetWidth;
    let tBottom2 = tTop2 + target2.offsetHeight;

    if (
      bTop > tTop2 &&
      bBottom < tBottom2 &&
      bLeft > tLeft2 &&
      bRight < tRight2
    ) {
      target2.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop3 = target3.offsetTop;
    let tLeft3 = target3.offsetLeft;
    let tRight3 = tLeft3 + target3.offsetWidth;
    let tBottom3 = tTop3 + target3.offsetHeight;

    if (
      bTop > tTop3 &&
      bBottom < tBottom3 &&
      bLeft > tLeft3 &&
      bRight < tRight3
    ) {
      target3.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop4 = target4.offsetTop;
    let tLeft4 = target4.offsetLeft;
    let tRight4 = tLeft4 + target4.offsetWidth;
    let tBottom4 = tTop4 + target4.offsetHeight;

    if (
      bTop > tTop4 &&
      bBottom < tBottom4 &&
      bLeft > tLeft4 &&
      bRight < tRight4
    ) {
      target4.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop5 = target5.offsetTop;
    let tLeft5 = target5.offsetLeft;
    let tRight5 = tLeft5 + target5.offsetWidth;
    let tBottom5 = tTop5 + target5.offsetHeight;

    if (
      bTop > tTop5 &&
      bBottom < tBottom5 &&
      bLeft > tLeft5 &&
      bRight < tRight5
    ) {
      target5.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop6 = target6.offsetTop;
    let tLeft6 = target6.offsetLeft;
    let tRight6 = tLeft6 + target6.offsetWidth;
    let tBottom6 = tTop6 + target6.offsetHeight;

    if (
      bTop > tTop6 &&
      bBottom < tBottom6 &&
      bLeft > tLeft6 &&
      bRight < tRight6
    ) {
      target6.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop7 = target7.offsetTop;
    let tLeft7 = target7.offsetLeft;
    let tRight7 = tLeft7 + target7.offsetWidth;
    let tBottom7 = tTop7 + target7.offsetHeight;

    if (
      bTop > tTop7 &&
      bBottom < tBottom7 &&
      bLeft > tLeft7 &&
      bRight < tRight7
    ) {
      target7.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop8 = target8.offsetTop;
    let tLeft8 = target8.offsetLeft;
    let tRight8 = tLeft8 + target8.offsetWidth;
    let tBottom8 = tTop8 + target8.offsetHeight;

    if (
      bTop > tTop8 &&
      bBottom < tBottom8 &&
      bLeft > tLeft8 &&
      bRight < tRight8
    ) {
      target8.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop9 = target9.offsetTop;
    let tLeft9 = target9.offsetLeft;
    let tRight9 = tLeft9 + target9.offsetWidth;
    let tBottom9 = tTop9 + target9.offsetHeight;

    if (
      bTop > tTop9 &&
      bBottom < tBottom9 &&
      bLeft > tLeft9 &&
      bRight < tRight9
    ) {
      target9.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop10 = target10.offsetTop;
    let tLeft10 = target10.offsetLeft;
    let tRight10 = tLeft10 + target10.offsetWidth;
    let tBottom10 = tTop10 + target10.offsetHeight;

    if (
      bTop > tTop10 &&
      bBottom < tBottom10 &&
      bLeft > tLeft10 &&
      bRight < tRight10
    ) {
      target10.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }

    let tTop11 = target11.offsetTop;
    let tLeft11 = target11.offsetLeft;
    let tRight11 = tLeft11 + target11.offsetWidth;
    let tBottom11 = tTop11 + target11.offsetHeight;

    if (
      bTop > tTop11 &&
      bBottom < tBottom11 &&
      bLeft > tLeft11 &&
      bRight < tRight11
    ) {
      target11.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop12 = target12.offsetTop;
    let tLeft12 = target12.offsetLeft;
    let tRight12 = tLeft12 + target12.offsetWidth;
    let tBottom12 = tTop12 + target12.offsetHeight;

    if (
      bTop > tTop12 &&
      bBottom < tBottom12 &&
      bLeft > tLeft12 &&
      bRight < tRight12
    ) {
      target12.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop13 = target13.offsetTop;
    let tLeft13 = target13.offsetLeft;
    let tRight13 = tLeft13 + target13.offsetWidth;
    let tBottom13 = tTop13 + target13.offsetHeight;

    if (
      bTop > tTop13 &&
      bBottom < tBottom13 &&
      bLeft > tLeft13 &&
      bRight < tRight13
    ) {
      target13.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop14 = target14.offsetTop;
    let tLeft14 = target14.offsetLeft;
    let tRight14 = tLeft14 + target14.offsetWidth;
    let tBottom14 = tTop14 + target14.offsetHeight;

    if (
      bTop > tTop14 &&
      bBottom < tBottom14 &&
      bLeft > tLeft14 &&
      bRight < tRight14
    ) {
      target14.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop15 = target15.offsetTop;
    let tLeft15 = target15.offsetLeft;
    let tRight15 = tLeft15 + target15.offsetWidth;
    let tBottom15 = tTop15 + target15.offsetHeight;

    if (
      bTop > tTop15 &&
      bBottom < tBottom15 &&
      bLeft > tLeft15 &&
      bRight < tRight15
    ) {
      target15.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    
    let tTop16 = target16.offsetTop;
    let tLeft16 = target16.offsetLeft;
    let tRight16 = tLeft16 + target16.offsetWidth;
    let tBottom16 = tTop16 + target16.offsetHeight;

    if (
      bTop > tTop16 &&
      bBottom < tBottom16 &&
      bLeft > tLeft16 &&
      bRight < tRight16
    ) {
      target16.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    
    let tTop17 = target17.offsetTop;
    let tLeft17 = target17.offsetLeft;
    let tRight17 = tLeft17 + target17.offsetWidth;
    let tBottom17 = tTop17 + target17.offsetHeight;

    if (
      bTop > tTop17 &&
      bBottom < tBottom17 &&
      bLeft > tLeft17 &&
      bRight < tRight17
    ) {
      target17.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop18 = target18.offsetTop;
    let tLeft18 = target18.offsetLeft;
    let tRight18 = tLeft18 + target18.offsetWidth;
    let tBottom18 = tTop18 + target18.offsetHeight;

    if (
      bTop > tTop18 &&
      bBottom < tBottom18 &&
      bLeft > tLeft18 &&
      bRight < tRight18
    ) {
      target18.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop19 = target19.offsetTop;
    let tLeft19 = target19.offsetLeft;
    let tRight19 = tLeft19 + target19.offsetWidth;
    let tBottom19 = tTop10 + target19.offsetHeight;

    if (
      bTop > tTop19 &&
      bBottom < tBottom19 &&
      bLeft > tLeft19 &&
      bRight < tRight19
    ) {
      target19.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop20 = target20.offsetTop;
    let tLeft20 = target20.offsetLeft;
    let tRight20 = tLeft20 + target20.offsetWidth;
    let tBottom20 = tTop20 + target20.offsetHeight;

    if (
      bTop > tTop20 &&
      bBottom < tBottom20 &&
      bLeft > tLeft20 &&
      bRight < tRight20
    ) {
      target20.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop21 = target21.offsetTop;
    let tLeft21 = target21.offsetLeft;
    let tRight21 = tLeft21 + target21.offsetWidth;
    let tBottom21 = tTop21 + target21.offsetHeight;

    if (
      bTop > tTop21 &&
      bBottom < tBottom21 &&
      bLeft > tLeft21 &&
      bRight < tRight21
    ) {
      target21.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop22 = target22.offsetTop;
    let tLeft22 = target22.offsetLeft;
    let tRight22 = tLeft22 + target22.offsetWidth;
    let tBottom22 = tTop22 + target22.offsetHeight;

    if (
      bTop > tTop22 &&
      bBottom < tBottom22 &&
      bLeft > tLeft22 &&
      bRight < tRight22
    ) {
      target22.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop23 = target23.offsetTop;
    let tLeft23 = target23.offsetLeft;
    let tRight23 = tLeft23 + target23.offsetWidth;
    let tBottom23 = tTop23 + target23.offsetHeight;

    if (
      bTop > tTop23 &&
      bBottom < tBottom23 &&
      bLeft > tLeft23 &&
      bRight < tRight23
    ) {
      target23.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop24 = target24.offsetTop;
    let tLeft24 = target24.offsetLeft;
    let tRight24 = tLeft24 + target24.offsetWidth;
    let tBottom24 = tTop24 + target24.offsetHeight;

    if (
      bTop > tTop24 &&
      bBottom < tBottom24 &&
      bLeft > tLeft24 &&
      bRight < tRight24
    ) {
      target24.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop25 = target25.offsetTop;
    let tLeft25 = target25.offsetLeft;
    let tRight25 = tLeft25 + target25.offsetWidth;
    let tBottom25 = tTop25 + target25.offsetHeight;

    if (
      bTop > tTop25 &&
      bBottom < tBottom25 &&
      bLeft > tLeft25 &&
      bRight < tRight25
    ) {
      target25.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop26 = target26.offsetTop;
    let tLeft26 = target26.offsetLeft;
    let tRight26 = tLeft26 + target26.offsetWidth;
    let tBottom26 = tTop26 + target26.offsetHeight;

    if (
      bTop > tTop26 &&
      bBottom < tBottom26 &&
      bLeft > tLeft26 &&
      bRight < tRight26
    ) {
      target26.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop27 = target27.offsetTop;
    let tLeft27 = target27.offsetLeft;
    let tRight27 = tLeft27 + target27.offsetWidth;
    let tBottom27 = tTop27 + target27.offsetHeight;

    if (
      bTop > tTop27 &&
      bBottom < tBottom27 &&
      bLeft > tLeft27 &&
      bRight < tRight27
    ) {
      target27.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop28 = target28.offsetTop;
    let tLeft28 = target28.offsetLeft;
    let tRight28 = tLeft28 + target28.offsetWidth;
    let tBottom28 = tTop28 + target28.offsetHeight;

    if (
      bTop > tTop28 &&
      bBottom < tBottom28 &&
      bLeft > tLeft28 &&
      bRight < tRight28
    ) {
      target28.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop29 = target29.offsetTop;
    let tLeft29 = target29.offsetLeft;
    let tRight29 = tLeft29 + target29.offsetWidth;
    let tBottom29 = tTop29 + target29.offsetHeight;

    if (
      bTop > tTop29 &&
      bBottom < tBottom29 &&
      bLeft > tLeft29 &&
      bRight < tRight29
    ) {
      target29.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop30 = target30.offsetTop;
    let tLeft30 = target30.offsetLeft;
    let tRight30 = tLeft30 + target30.offsetWidth;
    let tBottom30 = tTop30 + target30.offsetHeight;

    if (
      bTop > tTop30 &&
      bBottom < tBottom30 &&
      bLeft > tLeft30 &&
      bRight < tRight30
    ) {
      target30.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop31 = target31.offsetTop;
    let tLeft31 = target31.offsetLeft;
    let tRight31 = tLeft31 + target31.offsetWidth;
    let tBottom31 = tTop31 + target31.offsetHeight;

    if (
      bTop > tTop31 &&
      bBottom < tBottom31 &&
      bLeft > tLeft31 &&
      bRight < tRight31
    ) {
      target31.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop32 = target32.offsetTop;
    let tLeft32 = target32.offsetLeft;
    let tRight32 = tLeft32 + target32.offsetWidth;
    let tBottom32 = tTop32 + target32.offsetHeight;

    if (
      bTop > tTop32 &&
      bBottom < tBottom32 &&
      bLeft > tLeft32 &&
      bRight < tRight32
    ) {
      target32.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop33 = target33.offsetTop;
    let tLeft33 = target33.offsetLeft;
    let tRight33 = tLeft33 + target33.offsetWidth;
    let tBottom33 = tTop33 + target33.offsetHeight;

    if (
      bTop > tTop33 &&
      bBottom < tBottom33 &&
      bLeft > tLeft33 &&
      bRight < tRight33
    ) {
      target33.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop34 = target34.offsetTop;
    let tLeft34 = target34.offsetLeft;
    let tRight34 = tLeft34 + target34.offsetWidth;
    let tBottom34 = tTop34 + target34.offsetHeight;

    if (
      bTop > tTop34 &&
      bBottom < tBottom34 &&
      bLeft > tLeft34 &&
      bRight < tRight34
    ) {
      target34.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop35 = target35.offsetTop;
    let tLeft35 = target35.offsetLeft;
    let tRight35 = tLeft35 + target35.offsetWidth;
    let tBottom35 = tTop35 + target35.offsetHeight;

    if (
      bTop > tTop35 &&
      bBottom < tBottom35 &&
      bLeft > tLeft35 &&
      bRight < tRight35
    ) {
      target35.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop36 = target36.offsetTop;
    let tLeft36 = target36.offsetLeft;
    let tRight36 = tLeft36 + target36.offsetWidth;
    let tBottom36 = tTop36 + target36.offsetHeight;

    if (
      bTop > tTop36 &&
      bBottom < tBottom36 &&
      bLeft > tLeft36 &&
      bRight < tRight36
    ) {
      target36.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop37 = target37.offsetTop;
    let tLeft37 = target37.offsetLeft;
    let tRight37 = tLeft37 + target37.offsetWidth;
    let tBottom37 = tTop37 + target37.offsetHeight;

    if (
      bTop > tTop37 &&
      bBottom < tBottom37 &&
      bLeft > tLeft37 &&
      bRight < tRight37
    ) {
      target37.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop38 = target38.offsetTop;
    let tLeft38 = target38.offsetLeft;
    let tRight38 = tLeft38 + target38.offsetWidth;
    let tBottom38 = tTop38 + target38.offsetHeight;

    if (
      bTop > tTop38 &&
      bBottom < tBottom38 &&
      bLeft > tLeft38 &&
      bRight < tRight38
    ) {
      target38.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop39 = target39.offsetTop;
    let tLeft39 = target39.offsetLeft;
    let tRight39 = tLeft39 + target39.offsetWidth;
    let tBottom39 = tTop39 + target39.offsetHeight;

    if (
      bTop > tTop39 &&
      bBottom < tBottom39 &&
      bLeft > tLeft39 &&
      bRight < tRight39
    ) {
      target39.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop40 = target40.offsetTop;
    let tLeft40 = target40.offsetLeft;
    let tRight40 = tLeft40 + target40.offsetWidth;
    let tBottom40 = tTop40 + target40.offsetHeight;

    if (
      bTop > tTop40 &&
      bBottom < tBottom40 &&
      bLeft > tLeft40 &&
      bRight < tRight40
    ) {
      target40.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop41 = target41.offsetTop;
    let tLeft41 = target41.offsetLeft;
    let tRight41 = tLeft41 + target41.offsetWidth;
    let tBottom41 = tTop41 + target41.offsetHeight;

    if (
      bTop > tTop41 &&
      bBottom < tBottom41 &&
      bLeft > tLeft41 &&
      bRight < tRight41
    ) {
      target41.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
    let tTop42 = target42.offsetTop;
    let tLeft42 = target42.offsetLeft;
    let tRight42 = tLeft42 + target42.offsetWidth;
    let tBottom42 = tTop42 + target42.offsetHeight;

    if (
      bTop > tTop42 &&
      bBottom < tBottom42 &&
      bLeft > tLeft42 &&
      bRight < tRight42
    ) {
      target42.style.backgroundColor = "deeppink";
      var audio = new Audio('coinsound.mp3');
      audio.play();
      div42.style.display = "none";
      console.log("blup");
    }
  });
});


// TODO: add 39 divs for the missing jetons
// TODO: connect all coins with all targets so that the player can place them anywhere
// TODO: add boxes so that players can drag their coins there
// TODO: add the tic tac toe code for combinations
// TODO: change blur and delete text on mousedown last coin
//TODO: change the bg color of target to match the color of the coin