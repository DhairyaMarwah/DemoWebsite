const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	// myslide[counter - 1].style.display = "block";
	// dot[counter - 1].className += " active";
}







// window.addEventListener('scroll',function(){
// 	const parallax=this.document.querySelector('.parallax-img')
// 	let scrollPosition=window.pageYOffset;
// 	parallax.style.transform='translateY('+scrollPosition*.5+'px'
// })
// window.addEventListener('scroll',function(){
// 	const parallax=this.document.querySelector('.parallax-text-part')
// 	let scrollPosition=window.pageYOffset;
// 	parallax.style.transform='translateY('+scrollPosition*.2+'px'
// })

const hamburger=document.getElementById('menu-btn-id');
const navwrap=document.getElementById('nav-links-id');
hamburger.addEventListener('click',()=>{
  console.log("hello");
  navwrap.classList.toggle('show');
});

const shareButton = document.querySelectorAll("button.shareButton")
for(i=1;i<shareButton.length;i++){

	shareButton[0].addEventListener("click", (e) => {
		for( let i=0; i < shareButton.length; i++ ) {
			shareButton[i].classList.toggle("open")
			shareButton[0].classList.remove("sent")
		}
	})
}

for( let i=1; i < shareButton.length; i++ ) {
   
   shareButton[i].addEventListener("click", (e) => {
      
   for( let i=0; i < shareButton.length; i++ ) {
      shareButton[i].classList.toggle("open")
   }
   shareButton[0].classList.toggle("sent")
   })
}

