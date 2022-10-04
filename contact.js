


  $(document).ready(function(){
    $("#lightoff").click(function(){
        $("h3").css("color", "white");
    });
  });

  $(document).ready(function(){
    $("#lighton").click(function(){
        $("h3").css("color", "orange");
    });
  });

  $(document).ready(function(){
    $("#lightoff").click(function(){
        $("#form").css("background-color", "#f2f2f2");
    });
  });

  $(document).ready(function(){
    $("#lighton").click(function(){
        $("#form").css("background-color", "black");
    });
  });


  $(document).ready(function(){
    $("#lightoff").click(function(){
        $("label").css("color", "#black");
    });
  });

  $(document).ready(function(){
    $("#lighton").click(function(){
        $("label").css("color", "orange");
    });
  });


function myFunction(x) {
  x.style.background = "lightgreen";
}

function myAlert()  {
    alert("Did all boxes get filled correctly?");
  }

