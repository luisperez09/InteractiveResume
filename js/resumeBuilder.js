var work = {
	"jobs" : [
		{
			"employer" : "employer_1",
			"title" : "title_1",
			"location" : "Ciudad de México, México",
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
			"location" : "Bogotá, Colombia",
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
			"location" : "Maracaibo, Venezuela",
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
			"dates" : "2012",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images" : [
				"project/img/url_1",
				"project/img/url_2",
				"project/img/url_3"
			]	
		},		
		{
			"title" : "project_title_2",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
		"location" : "Ciudad Ojeda, Venezuela"
	},
	"skills" : [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	]	
};
var education = {
	"schools" : [
		{
			"name" : "Uniojeda",
			"location" : "Ciudad Ojeda, Venezuela",
			"degree" : "Engineer",
			"degreeDate" : "2013",
			"major" : "Computación"
		},
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title" : "Intro to CS",
			"school" : "Udacity",
			"date" : "2016",
			"url" : "https://www.udacity.com/course/intro-to-computer-science--cs101"
		}
	]
};

var name = "Luis Pérez";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedImage);

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

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

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

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.displaySchools = function () {
	if (education.schools.length > 0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedDegree);
			var formattedDegreeDate = HTMLschoolDates.replace("%data%", education.schools[school].degreeDate);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedDegreeDate + formattedSchoolLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry").append(formattedMajor);
		}
	}
}

education.displaySchools();

education.displayOnlineCourses = function () {
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineURL);
			
		}
	}
	
}

education.displayOnlineCourses();

$("#mapDiv").append(googleMap);