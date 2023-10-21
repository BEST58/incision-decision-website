window.addEventListener("scroll", () => {
  scrollFunction();
});

scrollFunction();

function scrollFunction() {
  const headerLogo = document.getElementById("headerLogo");
  if (!headerLogo) return;
  
  if (document.documentElement.scrollTop > 80) {
    headerLogo.style.height = "90px";
    headerLogo.style.width = "90px";
    document.getElementsByClassName("logoText")[0].style.fontSize = "28px";
  } 
    else if (document.documentElement.scrollTop < 20) {
    headerLogo.style.height = "150px";
    headerLogo.style.width = "150px";
    document.getElementsByClassName("logoText")[0].style.fontSize = "2rem";
  }
}

function toggleMobileNav() {
  const nav = document.getElementsByTagName('nav')[0];
  nav.classList.toggle('active');
}

if (document.readyState == "complete") {
  const navBtn = document.getElementsByTagName('nav')[0].getElementsByTagName('button')[0];
  navBtn.onclick = () => { toggleMobileNav() };
} else {
  window.addEventListener("load", function() {
    const navBtn = document.getElementsByTagName('nav')[0].getElementsByTagName('button')[0];
    navBtn.onclick = () => { toggleMobileNav() };
}, false); 
}