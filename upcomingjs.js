
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  btnText.style.background = '#f1f1f1';
  btnText.style.color = '#000000';
  

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less"; 
    moreText.style.display = "inline";
  }
}