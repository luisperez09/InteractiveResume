/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* $("#main").append("");

var awesomeThoughts = "I am Luis and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome", "fun");

$("#main").append(funThoughts);*/

var name = "Luis Pérez";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);