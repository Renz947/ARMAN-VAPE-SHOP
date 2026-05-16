
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slider = document.querySelector('.slider');

let current = 0;

function updateSlider(){

slides.forEach((slide,index)=>{

slide.classList.remove('active','left','right','hidden');

if(index === current){
slide.classList.add('active');
}

else if(index === (current - 1 + slides.length) % slides.length){
slide.classList.add('left');
}

else if(index === (current + 1) % slides.length){
slide.classList.add('right');
}

else{
slide.classList.add('hidden');
}

});

}

nextBtn.addEventListener('click',()=>{
current = (current + 1) % slides.length;
updateSlider();
});

prevBtn.addEventListener('click',()=>{
current = (current - 1 + slides.length) % slides.length;
updateSlider();
});

setInterval(()=>{
current = (current + 1) % slides.length;
updateSlider();
},3500);

document.addEventListener('mousemove',(e)=>{

const x = (window.innerWidth / 2 - e.pageX) / 45;
const y = (window.innerHeight / 2 - e.pageY) / 45;

slider.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

});

updateSlider();
