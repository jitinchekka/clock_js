setInterval(() => {
  let a = new Date();
  let time;
  let date;
  date = a.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
  document.getElementById("utc").innerHTML = a.toLocaleTimeString("en-US", {
    timeZone: "UTC",
  });
}, 1000);

let img = document.getElementById("myImage");
function changeImage() {
  if (img.src == "https://www.linkpicture.com/q/dark-mode.png") //if light mode
  {
    img.src = "https://www.linkpicture.com/q/light-mode.png";
    document.body.className = "dark-mode";
    console.log("test if\n");
    console.log(img.src);
  } else if (img.src == "https://www.linkpicture.com/q/light-mode.png") //if dark mode
  {
    img.src = "https://www.linkpicture.com/q/dark-mode.png";
    document.body.className = "light-mode";
    console.log("test else\n");
    console.log(img.src);
  }
}

/* // 	Arrow functions
//one parameter, one statement
(num) => ++num;
//Multiple parameter, one statement
(num1, num2) => num1 * num2;
//one parameter, many statements
(num) => {
  let a = num + 1;
  return a;
};
//many parameter, many statements
(num1, num2) => {
  let a = num1 * num2;
  return a;
};
//Named functions
let multiply = (num1, num2) => {
  let a = num1 * num2;
  return a;
};
let c = multiply(10, 20);
console.log(c); */
