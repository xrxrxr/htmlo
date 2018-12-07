
//sur le js

 function changecss() {
   //alert('hello');
   document.querySelectorAll('h1, h2, h3,h4').forEach(tag =>
   tag.style.cssText = `
     color: green;
     fontFamily: Comic Sans, cursive;
   `
 )
 document.querySelectorAll('p').forEach(tag =>
 tag.style.cssText = `
   color: blue;
   fontFamily: papyrus, Fantasy;
 `
)
document.querySelectorAll('body').forEach(tag =>
tag.style.cssText = `
  background-color: magenta;
`
)

   }
document.getElementById('button').button.onclick = changecss();
//document.getElementById('button').button.onclick = false;

 // document.getElementById("myH2").style.color = "#ff0000";
// document.getElementById("myP").style.color = "magenta";
// document.getElementById("myP2").style.color = "blue";
// document.getElementById("myDiv").style.color = "lightblue";



  // $(document).ready(function(){

      // $('button').css("color","blue");
      // $('h1').css("font-size","25px");
       //$('p').css("margin-left","15px");
       //$('h1').css("font-family","Comic Sans");
       //$('h1').css("color","green");
       //$('h2').css("color","green");
       //$('h3').css("color","green");
       //$('body').css("background-color","magenta");
       //$('p').css("color","blue");
       //$('p').css("font-family","papyrus");
       //$('h1').css("font-family","Comic Sans");
       //$('h2').css("font-family","comic-sans");
       //$('h3').css("font-family","comic-sans");
  // });



//font-family: "Comic Sans MS", "Comic Sans", cursive;
