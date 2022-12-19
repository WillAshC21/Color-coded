// Appends the selected color title
let colorTitle = document.createElement("h1");
colorTitle.setAttribute("id", "selected-color-title");
let cName = "Blue";
colorTitle.innerText = cName;

// Appends the selected color subtitle
let colorInfo = document.createElement("h2");
colorInfo.setAttribute("id", "selected-color-subtitle");
let cInfo = "Info";
colorInfo.innerText = cInfo;

// document.body.appendChild(colorTitle);
// document.body.appendChild(colorInfo);

// Title
let title = document.getElementById("color-title");

// Colors
let colors = document.getElementsByClassName("color-choice");

let set = document.getElementsByClassName("colors-set")[0];

//Colors by Id Element
let color_light_blue = colors[0];
let color_light_green = colors[1];
let color_light_yellow = colors[2];
let color_dark_red = colors[3];
let color_dark_orange = colors[4];
let color_pink = colors[5];
let color_gray = colors[6];
let color_black = colors[7];
let color_dark_blue = colors[8];
let color_tomato = colors[9];
let color_light_orange = colors[10];
let color_dark_yellow = colors[11];

color_light_blue.addEventListener("click", selected_light_blue);
color_light_green.addEventListener("click", selected_green);
color_light_yellow.addEventListener("click", selected_light_yellow);
color_dark_red.addEventListener("click", selected_dark_red);
color_dark_orange.addEventListener("click", selected_dark_orange);
color_pink.addEventListener("click", selected_pink);
function selected_light_blue() {
    cName = "Light Blue";
    cInfo = "Peaceful. Trustworthy. Tranquility";
    let display_color = "display-light-blue";
    selector_start(cName, cInfo, display_color);

}
function selected_green() {
    cName = "Green";
    cInfo = "Growth. Harmony. Safety";
    let display_color = "display-green";
    selector_start(cName, cInfo, display_color);

}
function selected_light_yellow() {
    cName = "Light Yellow";
    cInfo = "Joy, Freshness, Newness";
    let display_color = "display-light-yellow";
    colorTitle.style.color = "black";
    colorInfo.style.color = "black";
    selector_start(cName, cInfo, display_color);
}
function selected_dark_red() {
    cName = "Dark Red";
    cInfo = "Willpower, Rage, Leadership";
    let display_color = "display-dark-red";
    selector_start(cName, cInfo, display_color);
}
function selected_dark_orange() {
    cName = "Dark Orange";
    cInfo = "Creativity, Compassion, Warmth";
    let display_color = "display-dark-orange";
    colorTitle.style.fontSize = "140px";
    selector_start(cName, cInfo, display_color);
}
function selected_pink() {
    cName = "Dark Red";
    cInfo = "Nurturing, Playful, Nostalgia";
    let display_color = "display-pink";
    selector_start(cName, cInfo, display_color);
}
function selector_start(cName, cInfo, display_name) {
    title.style.display = "none";
    set.style.display = "none";
    let display = document.createElement("div");
    display.setAttribute("id", display_name);
    colorTitle.innerText = cName;
    display.appendChild(colorTitle);
    colorInfo.innerText = cInfo;
    document.body.appendChild(colorInfo);
    document.body.appendChild(display);
}
// function selected_light_blue() {
//     title.style.display = "none";
//     set.style.display = "none";
//     let light_blue_display = document.createElement("div");
//     light_blue_display.setAttribute("id", "display-light-blue");
//     let cName = "Light Blue";
//     colorTitle.innerText = cName;
//     light_blue_display.appendChild(colorTitle);
//     let cInfo = "Info";
//     colorInfo.innerText = "Peaceful. Trustworthy. Tranquility"
//     document.body.appendChild(colorInfo);
//     document.body.appendChild(light_blue_display);
// }