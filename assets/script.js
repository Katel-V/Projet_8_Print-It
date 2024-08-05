const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//les variables
let position = 0; 
const numberOfSlide = slides.length;

createCaroussel(position);
createDots();
updateDot();
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');



// gestion des flèches
left.addEventListener("click", function () {
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
    console.log(left);
    createCaroussel(position);
});

right.addEventListener("click", function () {
    if (position == numberOfSlide - 1) {
        position = 0;
    } else {
            position++;
    }
    console.log(right);
    createCaroussel(position);

});

// création des dots
function createDots(){
	const dots = document.querySelector(".dots");	
	for (let index = 0; index < slides.length; index++) {
		// Pour chaque element dans la boucle je vais créer un dot
		const dot= document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	} 
}

// mise à jour des dots
function updateDot() {
  const listPoints = document.querySelectorAll(".dot");	
   for (let index = 0; index < listPoints.length; index++) {
   
    	const dot = listPoints[index];
		if (index == position) {dot.classList.add('dot_selected');}
  		else {dot.classList.remove('dot_selected');} 
	}  
}

//création du carousel 
function createCaroussel(position){
	
  	const element = slides[position];
		console.log(element);
		const img = document.querySelector(".banner-img");
		img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);

		const p = document.querySelector(".banner-text");
		p.innerHTML= element.tagLine;

    updateDot();
}

