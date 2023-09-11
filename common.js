window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("headerLogo").style.height = "90px";
  } else {
    document.getElementById("headerLogo").style.height = "110px";
  }
}