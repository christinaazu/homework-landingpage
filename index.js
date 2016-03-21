$(document).ready(function() {
  console.log('Ready!');
});

// If a user clicks "Read More" on the primary column:

// have the text in the <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
// hide the "Read More" link using $.hide()//
$('.hide, #learnmore').hide();

$('.readmore').click(function(event) {
  event.preventDefault();
  var readLink = $(this);
  var currentState = readLink.html();
  //if current state is Read more &gt;, show the paragraph and change the text
  if (currentState ==='Read more &gt;') {
    readLink.html('Read less &gt;');
    readLink.parent().siblings().closest('.hide').slideDown();
  }
  //if current state is Read less &gt;, hide the paragragh and change the text
  else if (currentState === 'Read less &gt;') {
    readLink.html('Read more &gt;');
    readLink.parent().siblings().closest('.hide').slideUp();
  }
});

$('#learnmorelink').click(function(event) {
  console.log(event);
  $('#learnmore').slideDown();
  $(this).hide();
});

$('#endbutton').click(function(event) {
  alert("Coming Soon!");
});

