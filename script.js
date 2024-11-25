var typed = new Typed(".typing-effect", {
  strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
  typeSpeed: 50,
  loop: true,
});

const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', ()=>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector("header");
  const barBox = document.querySelector(".bar-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barBox.classList.remove("active");
  setTimeout(() => {
    barBox.classList.add("active");
  }, 1100);

  sections.forEach(sec => {
    sec.classList.remove("active");
  });

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");

      setTimeout( ()=>{
        sections[idx].classList.add("active");
      },1100);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");

    setTimeout( ()=>{
      sections[0].classList.add("active");
    },1100);
  }
});
// navLinks.forEach((link,idx)=>{

//   link.addEventListener('click', ()=> {
//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//     });
//     link.classList.add("active");
//   })
// });

let eduBtn = document.querySelectorAll(".education-btn");

eduBtn.forEach((btn, idx) => {
  let eduDetails = document.querySelectorAll(".education-detail");

  btn.addEventListener("click", () => {
    eduBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    eduDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    eduDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = ()=>{
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-details');
  
 imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

 portfolioDetails.forEach(detail=>{
   detail.classList.remove('active');
 });
 portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', ()=>{
  if(index < 4){
    index++;
    arrowLeft.classList.remove('disabled');
  }else{
    index = 5;
    arrowRight.classList.add('disabled');
  }
  activePortfolio();
});
arrowLeft.addEventListener('click', ()=>{
  if(index > 4){
    index--;
    arrowRight.classList.remove('disabled');
  }else{
    index = 0;
    arrowLeft.classList.add('disabled');
  }
  activePortfolio();
});

