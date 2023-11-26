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

const onReady = () => {
  const navBtn = document.getElementsByTagName('nav')[0].getElementsByTagName('button')[0];
  navBtn.onclick = () => { toggleMobileNav() };
  
  // Get the modal
  const modal = document.getElementById("imageModal");

  if (modal) {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var imgs = document.querySelectorAll(".expandable");
    var modalImg = imageModal.querySelector(".modal-content");
    var captionText = document.querySelector(".caption");
    imgs.forEach(element => {
        element.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            captionText.style.top = (modalImg.getBoundingClientRect().y + modalImg.height + 10) + "px";
            console.log((modalImg.getBoundingClientRect().y + modalImg.height + 10) + "px")
        }
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }

    modal.onclick = function() { 
        modal.style.display = "none";
    }
  }
}

if (document.readyState == "complete") {
  onReady();
} else {
  window.addEventListener("load", onReady, false); 
}