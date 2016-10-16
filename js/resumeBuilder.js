var work = {
	"jobs" : [
		{
			"employer" : "employer_1",
			"title" : "title_1",
			"location" : "location_1",
			"dates" : "2011 - 2013",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"path/to/img_1",
				"path/to/img_2",
				"path/to/img_3"
			]
		},
		{
			"employer" : "employer_2",
			"title" : "title_2",
			"location" : "location_2",
			"dates" : "2013 - 2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"path/to/img_4",
				"path/to/img_5",
				"path/to/img_6"
			]
		},
		{
			"employer" : "employer_3",
			"title" : "title_3",
			"location" : "location_3",
			"dates" : "2015 - present",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"path/to/img_7",
				"path/to/img_8",
				"path/to/img_9"
			]
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "project_title_1",
			"dates" : "project_dates_1",
			"description" : "project_description_1",
			"images" : [
				"project/img/url_1",
				"project/img/url_2",
				"project/img/url_3"
			]	
		},		
		{
			"title" : "project_title_2",
			"dates" : "project_dates_2",
			"description" : "project_description_2",
			"images" : [
				"project/img/url_4",
				"project/img/url_5",
				"project/img/url_6"
			]	
		}		
	]
};

var bio = {
	"name" : "Luis Pérez",
	"role" : "Web Developer",
	"welcomeMessage" : "lorem ipsum dolor sit amet",
	"bioPic" : "images/fry.jpg",
	"contacts": {
		"mobile" : "0426-7243363",
		"email" : "lperez.1092@gmail.com",
		"github" : "luisperez09",
		"twitter" : "@medicenhueso",
		"location" : "Narnia"
	},
	"skills" : [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	]	
};
var education = {
	"schools" : [
		{
			"name" : "Uniojeda",
			"location" : "Narnia",
			"degreeDate" : "2013",
			"majors" : ["CS"]
		},
		{
			"name" : "school_2",
			"location" : "city_2",
			"degreeDate" : "3521",
			"majors" : ["french"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "udacity",
			"date" : "date_1",
			"url" : "online_course_url_1"
		},
		{
			"title" : "Intro to CS",
			"school" : "Udacity",
			"date" : "date_2",
			"url" : "online_course_url_2"
		}
	]
};

var name = "Luis Pérez";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
  	$('#header').append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]); 
    	$("#skills").append(formattedSkill);
  };
}

function displayWork () {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});