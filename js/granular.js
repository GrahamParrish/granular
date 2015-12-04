//Aim: to smooth scroll our page to the correc section when a button is clicked
//$("element").action("what we want to change", "how we want to change it");

//Step 1: Attach a click event listener to the arrow buttons
$(".scroll-to").on("click", function(){

//Step 2: Find the id of the section that we want to scroll to & store it
//var sectionName = "#second-section"

//To make our code dynamic and portable, we need to change the value of our variable sectionName. Ideally we want to grab the href attribute of whichever anchor tag has been clicked on. The href stores the section that we need to scroll to.

//We use jquery's keyword 'this' in order to access the element that has been clicked on.
//To access the elements attributes, we use the .attr action. This takes one value - the name of the attribute we want to access. We're looking for the href, so we add this as a string - "href"
  var sectionName = $(this).attr("href");
  console.log(sectionName);

//Step 3: Using the section id, store how many pixel from the top this is.
//The offset action allows us to retrieve the current position of an element relative to our page - note we need () to complete this action.
//We need to specify where we want to measure from, so we use .top.
//Using these in combination give us a number, which changes depending on the browser height, but always points to the exact location of the section specified.
  var sectionPlacement = $(sectionName).offset().top;
  //console.log prints things out to the console found in our browser
  console.log(sectionPlacement);

//Step 4: Animate or smoothly scroll our page to this section
//First we select our entire page, as we want everything to move downwards to where the section is placed. To do this we add "html, body"
//.animate allows us to animate different properties. It takes the following values, property to animate, duration, easing & completion. We only need to use the first two.
//We need to move the vertical scroll bar to the position of our section. scrollTop allows us to do this. We add this as the first value, as this is what we want to animate. It takes one value, the pixel height that the scroll bar should be set to.
//We use 1000 as the duration for the animation, measured in milliseconds.
  $("html, body").animate({ scrollTop: sectionPlacement }, 1000);

//Step 5: Stop the section from flashing before our animation takes place
//To stop our links from jumping to the section, we use return false.
//This stops the 'I'm done  - carry on with your default behaviour' message being sent back to the anchor tag
  return false;

});
