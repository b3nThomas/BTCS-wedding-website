//JS

//VARIABLES

var pages = ['#home', '#gallery', '#venue', '#giftList', '#rsvp'];
var navLinks = ['#Ho', '#Ga', '#Ve', '#Gi', '#Rs']
var currentPage ='#home';
var venuePics = ['#sign', '#rear', '#ceremony', '#breakfast', '#night'];

//FUNCTIONS

daysToGo = function(){
  var d = new Date();
  var target = new Date("March 30, 2018 23:59");
  var diff = target.getTime() - d.getTime();
  var days = Math.floor(diff/1000/60/60/24);
  return days.toString();
}

loadPage = function(pageID){
  $(pageID).fadeIn(800);
}

changePage = function(pageID){
  if(pageID != currentPage){
    for(i = 0; i < pages.length; i++){
      $(pages[i].toString()).fadeOut(200);
    }
    currentPage = pageID;
    setTimeout(function(){
      loadPage(pageID)}, 400);
  }
}

changeImage = function(clicked, destination){
  $(clicked).click(function(){
    var newSrc = $(this).attr('src').toString();
    if(newSrc != $(destination).attr('src')){
      $(destination).fadeOut(500, function(){
        $(destination).attr('src', newSrc);
        $(destination).fadeIn(800);
      });
    }
  });
}

hoverClasses = function(target, classes){
  $(target).hover(
    function(){
      $(this).addClass(classes);
    },function(){
      $(this).removeClass(classes);
    }
  );
}

$(function(){ //1-10 Function
    var $select = $(".1-10");
    for (i = 1; i <= 10; i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

//JQUERY
$(document).ready(function(){

//PAGE LOAD


  //Hide all other pages
  for(i = 1; i < pages.length; i++){
    $(pages[i].toString()).hide();
  }
  //Set days to go countdown
  $('#days').text(daysToGo());
  //Hide homepage elements
  $('#birds1').hide();
  $('#welcomeYou').hide();
  $('#dateDiv').hide();
  $('#daysText').hide();

  //FadeIn homepage elements
  $('#navBar').hide().fadeIn(800, function(){
    $('#birds1').fadeIn(800, function(){
      $('#welcomeYou').fadeIn(1000, function(){
        $('#dateDiv').fadeIn(1000, function(){
          $('#daysText').fadeIn(1500);
        });
      });
    });
  });

  //NAV BAR
  $('#Ho').click(function(){
      changePage('#home');
  });

  $('#Ga').click(function(){
      changePage('#gallery');
  });

  $('#Ve').click(function(){
      changePage('#venue');
  });

  $('#Gi').click(function(){
      changePage('#giftList');
  });

  $('#Rs').click(function(){
      changePage('#rsvp');
  });


  $('#navBar li').addClass('navInitial')

  hoverClasses('#navBar li', 'navActive shadow');

  //THE GALLERY
  hoverClasses('#galleryThumbnails li img', 'smallGlow');
  changeImage('#galleryThumbnails li img', '#galleryImage');


  //VENUE
  hoverClasses('#venueThumbnails li img', 'smallGlow');
  changeImage('#venueThumbnails li img', '#venueImage');

  hoverClasses('#map', 'smallGlow')
  hoverClasses('#accommodation', 'smallGlow')

  //RSVP

  $('#partyNo').change(function(){ //Guest No Selection function
    var n = $('#partyNo').val();
    var guests = ""
    $('#guestNames').fadeOut(300, function(){
      for(i = 1; i <= n; i++){
        guests += "<li>Guest " + i + " <br><input class='lucida' type='text' name='guest" + i + "' /></li>";
      }
      $('#guestNames').html(guests);
      $('#guestNames').fadeIn(800);
    });
  });

  /* <p>Party Size: <select name="partyNo" id="partyNo" class="1-10 lucida" ></select></p>

  <ul id="guestNames">
    <li>Guest 1 <br><input type='text' name='guest1' class="lucida" /></li>
  </ul> */


}); //END - LEAVE ALONE




/* JQuery

https://jquery.com/
http://api.jquery.com/
http://jqueryui.com/

"//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"

*/
