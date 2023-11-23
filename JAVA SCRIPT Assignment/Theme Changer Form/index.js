var isWhiteTheme = true;

function changeTheme() {
    var heading = document.getElementById("themeColor");
    var button = document.getElementById("themeButton");

    if (isWhiteTheme) {
        document.body.style.backgroundColor = "white";
        heading.style.color = "black";
        button.className = "black-theme";
        button.textContent = "Unable dark Theme";
    } else {
        document.body.style.backgroundColor = "black";
        heading.style.color = "white";
        button.className = "white-theme";
        button.textContent = "Unable light Theme";
    }

    isWhiteTheme = !isWhiteTheme;
}

var themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", changeTheme);



