var work = {
	"jobs" : [
		{
			"employer" : "employer_1",
			"title" : "title_1",
			"location" : "location_1",
			"dates" : "dates_1",
			"description" : "description_1",
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
			"dates" : "dates_2",
			"description" : "description_2",
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
			"dates" : "dates_3",
			"description" : "description_3",
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