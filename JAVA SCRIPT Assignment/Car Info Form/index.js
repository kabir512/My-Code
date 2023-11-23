function button() {
    // JavaScript function to display car information
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let model = document.getElementById("model").value;
    let milage = document.getElementById("milage").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    let carInfo = document.getElementById("carInfo");

    carInfo.innerHTML =
        " Your Car Information:" + ' ' + "<br />" +
        "Name:" + name + ' ' + "<br />" +
        "Color:" + color + ' ' + "<br />" +
        "Model:" + model + ' ' + "<br />" +
        "Milage:" + milage + ' ' + "Km/Hour" + ' ' + "<br />" +
        "Price:" + price + "/-" + ' ' + "<br />" +
        "image" + image
}