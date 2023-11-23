const imageArray = [
"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
"https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/search/classic-watches-datejust-all-models-search_m126233-0039_2107jva_001.jpg"
];

let close = document.getElementById('close')
let pop = document.getElementById('pop-box')
let popimage = document.getElementById('popimg')

for(var i = 1 ; i < imageArray.length; i++){

let container = document.getElementById('container')
let flexbox = document.getElementById('flexbox')
let image = document.createElement('img')
image.src = imageArray[i]
image.addEventListener('click',popUp)
flexbox.appendChild(image)
container.appendChild(flexbox)

}

function popUp(){
popimage.src = this.src,
pop.style.display = 'block'
}

close.addEventListener('click', closepop)
function closepop(){
pop.style.display='none'
}
