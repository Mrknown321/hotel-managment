console.log("working");

// //var waypoint = new Waypoint({
//   element: document.getElementById('px-offset-waypoint'),
//   handler: function(direction) {
//     notify('I am 20px from the top of the window')
//   },
//   offset: 20
// })
let bar = document.querySelector("#head-bar");
let cross = document.querySelector("#cross");

$(document).ready(function () {
  //for nav bar

  $("#head").waypoint(
    (direction) => {
      $("#head").addClass("animate__animated animate__slideInDown");
    },
    {
      offset: "0px",
    }
  );

  // for hero imge
  $("#hero").waypoint(
    (direction) => {
      $("#hero").addClass("animate__animated animate__zoomIn");
    },
    {
      offset: "50px",
    }
  );
  // hot back ground
  $(".hot-image").waypoint(
    (direction) => {
      $(".about-hot").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "550px",
    }
  );

  // animating hot image

  $(".hot-image").waypoint(
    (direction) => {
      $(".hot-image").addClass("animate__animated animate__zoomIn");
    },
    {
      offset: "500px",
    }
  );

  $(".hot-image").waypoint(
    (direction) => {
      $(".hot-image2").addClass("animate__animated animate__slideInRight");
    },
    {
      offset: "500px",
    }
  );

  // animating hot Text

  $(".hot-image").waypoint(
    (direction) => {
      $(".hot-text").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "500px",
    }
  );

  // making gallery  animate
  $("#gallery-box").waypoint(
    (direction) => {
      $(".gallery").addClass("animate__animated animate__bounceIn");
    },
    {
      offset: "500px",
    }
  );

  $(".gallery").waypoint(
    (direction) => {
      $("#gallerybtn1").addClass(
        "animate__animated animate__slideInLeft "
      );
    },
    {
      offset: "600px",
    }
  );

  $(".gallery").waypoint(
    (direction) => {
      $("#gallerybtn2").addClass(
        "animate__animated animate__slideInRight "
      );
    },
    {
      offset: "500px",
    }
  );

  // making effect of faclites

  // facalites ground
  $(".facalities").waypoint(
    (direction) => {
      $(".facalities").addClass("animate__animated animate__zoomIn");
    },
    {
      offset: "550px",
    }
  );

  // facalites img

  $(".facalities").waypoint(
    (direction) => {
      $(".facalites-img").addClass("animate__animated animate__rotateInUpLeft");
    },
    {
      offset: "500px",
    }
  );
  // making second facalits animate
  $(".facalites-2").waypoint(
    (direction) => {
      $(".facalites-2-text").addClass("animate__animated animate__slideInLeft");
    },
    {
      offset: "400px",
    }
  );
// animating images

$(".facalites-2").waypoint(
  (direction) => {
    $("#fa-1").addClass("animate__animated animate__bounceInLeft");
  },
  {
    offset: "500px",
  }
);
$(".facalites-2").waypoint(
  (direction) => {
    $("#fa-2").addClass("animate__animated animate__fadeInUpBig");
  },
  {
    offset: "500px",
  }
);
$(".facalites-2").waypoint(
  (direction) => {
    $("#fa-3").addClass("animate__animated animate__rotateIn");
  },
  {
    offset: "500px",
  }
);
$(".facalites-2").waypoint(
  (direction) => {
    $("#fa-4").addClass("animate__animated animate__bounceInRight");
  },
  {
    offset: "500px",
  }
);
// animaking video section 
$(".demo-ve").waypoint(
  (direction) => {
    $(".demo-ve").addClass("animate__animated animate__slideInRight");
  },
  {
    offset: "500px",
  }
);
// animating service setion 
$("#services").waypoint(
  (direction) => {
    $("#services").addClass("animate__animated animate__zoomInUp");
  },
  {
    offset: "500px",
  }
);
// animting event section 

$(".about2").waypoint(
  (direction) => {
    $(".about2").addClass("animate__animated animate__fadeIn");
  },
  {
    offset: "500px",
  }
);

$(".about2").waypoint(
  (direction) => {
    $(" .about-image").addClass("animate__animated animate__rotateInDownLeft");
  },
  {
    offset: "500px",
  }
);

$(".about2").waypoint(
  (direction) => {
    $(".hot-text2").addClass("animate__animated animate__rotateInDownRight");
  },
  {
    offset: "500px",
  }
);
// animating  last image 
$("#last-image").waypoint(
  (direction) => {
    $("#last-image").addClass("animate__animated animate__bounceIn");
  },
  {
    offset: "500px",
  }
);
// animating button 
$(".get-touch button").hover(()=> {
  console.log("wprking");
  $(".get-touch button").addClass("animate__bounce");
}
);
$(".get-touch").waypoint(
  (direction) => {
    $(".get-touch button").addClass("animate__animated animate__zoomInDown");
  },
  {
    offset: "500px",
  }
);



});

// making the gallery scrollable

let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.querySelector("#gallerybtn1");
let nextbtn = document.querySelector("#gallerybtn2");

scrollcontainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
  scrollcontainer.style.scrollBehavior = "smooth";
});

nextbtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += 230;
});
backbtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= 230;
});

// making nav bar for web sie in mobile 

if (bar){
  bar.addEventListener("click", ()=> {
    $(".navbar").addClass("active");
  })
}
if (cross){
  cross.addEventListener("click", ()=> {
    $(".navbar").removeClass("active");
  })
}


