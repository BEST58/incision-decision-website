window.addEventListener("load", () => {
  scrollFunction();
});

scrollFunction();

function scrollFunction() {
  
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("headerLogo").style.height = "90px";
    document.getElementById("headerLogo").style.width = "90px";
    document.getElementsByClassName("logoText")[0].style.fontSize = "28px";
  } 
    else if (document.documentElement.scrollTop < 20) {
    document.getElementById("headerLogo").style.height = "150px";
    document.getElementById("headerLogo").style.width = "150px";
    document.getElementsByClassName("logoText")[0].style.fontSize = "2rem";
  }
}

function toggleMobileNav() {
  const nav = document.getElementsByTagName('nav')[0];
  nav.classList.toggle('active');
}

const navBtn = document.getElementsByTagName('nav')[0].getElementsByTagName('button')[0];
navBtn.onclick = () => { toggleMobileNav() };