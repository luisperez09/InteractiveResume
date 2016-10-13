/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* $("#main").append("");

var awesomeThoughts = "I am Luis and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome", "fun");

$("#main").append(funThoughts);*/

var formattedName = HTMLheaderName.replace("%data%", "Luis Pérez");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);