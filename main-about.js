function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}



$(document).ready(function(){
    $("#lightoff").click(function(){
        $("p").css("color", "white");
    });
  });

  $(document).ready(function(){
    $("#lighton").click(function(){
        $("p").css("color", "orange");
    });
  });

  $(document).ready(function(){
    $("#lightoff").click(function(){
        $("h1").css("color", "white");
    });
  });

  $(document).ready(function(){
    $("#lighton").click(function(){
        $("h1").css("color", "orange");
    });
  });

  $(document).ready(function(){
    $("#lightoff").click(function(){
        $("span").css("color", "orange");
    });
  });

  $(document).ready(function(){
    $("#lighton").click(function(){
        $("span").css("color", "white");
    });
  });



  $(document).ready(function(){
    $("#lightoff").click(function(){
        $("h3").css("color", "black");
    });
  });

  $(document).ready(function(){
    $("#lighton").click(function(){
        $("h3").css("color", "orange");
    });
  });

