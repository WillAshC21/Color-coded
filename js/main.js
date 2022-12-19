// Appends the selected color title
let colorTitle = document.createElement("h1");
colorTitle.setAttribute("id", "selected-color-title");
let cName = "";

// Appends the selected color subtitle
let colorInfo = document.createElement("h2");
colorInfo.setAttribute("id", "selected-color-subtitle");
let cInfo = "Info";
colorInfo.innerText = cInfo;

// Title
let title = document.getElementById("color-title");

// Colors
let colors = document.getElementsByClassName("color-choice");

// Colors Display
let set = document.getElementsByClassName("colors-set")[0];

//Colors by Id Element
let color_white = colors[0];
let color_pink = colors[1];
let color_red = colors[2];
let color_orange = colors[3];
let color_yellow = colors[4];
let color_gold = colors[5];
let color_green = colors[6];
let color_aqua = colors[7];
let color_blue = colors[8];
let color_violet = colors[9];
let color_purple = colors[10];
let color_black = colors[11];

// Buttons for each of the selected colors
color_white.addEventListener("click", selected_white);
color_pink.addEventListener("click", selected_pink);
color_red.addEventListener("click", selected_red);
color_orange.addEventListener("click", selected_orange);
color_yellow.addEventListener("click", selected_yellow);
color_gold.addEventListener("click", selected_gold);
color_green.addEventListener("click", selected_green);
color_aqua.addEventListener("click", selected_aqua);
color_blue.addEventListener("click", selected_blue);
color_violet.addEventListener("click", selected_violet);
color_purple.addEventListener("click", selected_purple);
color_black.addEventListener("click", selected_black);


// Displays color background, name, and descriptions for selected color
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

// Function for selected button
function selected_white() {
    cName = "White";
    cInfo = "Purity. Simplicity. Cleanliness";
    let display_color = "display-white";
    colorTitle.style.color = "black";
    colorInfo.style.color = "black";
    selector_start(cName, cInfo, display_color);

}
function selected_pink() {
    cName = "Pink";
    cInfo = "Nurturing. Playful. Nostalgia.";
    let display_color = "display-pink";
    selector_start(cName, cInfo, display_color);

} 
function selected_red() {
    cName = "Red";
    cInfo = "Violence. Aggression. Anger.";
    let display_color = "display-red";
    selector_start(cName, cInfo, display_color);
}
function selected_orange() {
    cName = "Orange";
    cInfo = "Creativity. Compassion. Warmth.";
    let display_color = "display-orange";
    colorTitle.style.fontSize = "140px";
    selector_start(cName, cInfo, display_color);
}
function selected_yellow() {
    cName = "Yellow";
    cInfo = "Happy. Hope. Spontaneous.";
    let display_color = "display-yellow";
    colorTitle.style.color = "black";
    colorInfo.style.color = "black";
    selector_start(cName, cInfo, display_color);
}
function selected_gold() {
    cName = "Gold";
    cInfo = "Success. Achievement. Triumph";
    let display_color = "display-gold";
    selector_start(cName, cInfo, display_color);
}
function selected_green() {
    cName = "Green";
    cInfo = "Growth. Harmony. Safety";
    let display_color = "display-green";
    selector_start(cName, cInfo, display_color);
}
function selected_aqua() {
    cName = "Aqua";
    cInfo = "Revitalization. Youth. and Dreams.";
    let display_color = "display-aqua";
    selector_start(cName, cInfo, display_color);
}
function selected_blue() {
    cName = "Blue";
    cInfo = "Freedom. Inspiration. Intuition";
    let display_color = "display-blue";
    selector_start(cName, cInfo, display_color);
}
function selected_violet() {
    cName = "Violet";
    cInfo = "Freedom. Inspiration. Intuition";
    let display_color = "display-violet";
    selector_start(cName, cInfo, display_color);
}
function selected_purple() {
    cName = "Purple";
    cInfo = "Power. Ambition. Nobility.";
    let display_color = "display-purple";
    selector_start(cName, cInfo, display_color);
}
function selected_black() {
    cName = "Black";
    cInfo = "Mystery. Sophistication. Elegance.";
    let display_color = "display-black";
    selector_start(cName, cInfo, display_color);
}