             alert("Why hello there! I'm a wee bit of JavaScript.");
              var animatePoints = function() {
 
                 var points = document.getElementsByClassName('point');
                  
                 var revealPoint = function(diffPoints) {
                     points[diffPoints].style.opacity = 1;
                     points[diffPoints].style.transform = "scaleX(1) translateY(0)";
                     points[diffPoints].style.msTransform = "scaleX(1) translateY(0)";
                     points[diffPoints].style.WebkitTransform = "scaleX(1) translateY(0)";
                 
                for(var i = 0; i < points.length; i++){
                    revealPoint(i)
                }
                 }

          
        