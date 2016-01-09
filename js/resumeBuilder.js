"use strict";

var bio = {
	"name" : "Chuwei",
	"role" : "Web Learner",
	"contacts": {
		"email" : "123@gmail.com",
		"mobile" : "123-456-7890",
		"github" : "mygithub",
		"twitter" : "mytwitter",
		"location" : "Austin, Texas"
	},
	"welcomeMessage":"Hello this is the second project!",
	"skills" : ["web development", "graphic design","video editing","teaching"],
	"pictureURL" : "images/profilepic.jpg"
}

bio.display_name = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPic);
}

bio.display_contacts = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
}

var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMsg);

bio.display_skills= function() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			console.log(skill);
			$("#header").append(formattedSkill);
		}
	}
}

bio.display_name();
bio.display_contacts();
bio.display_skills();


var work = {
	"jobs" : [
	{
		"employer" : "Employer1",
		"title" : "Title1",
		"location" : "Austin, Texas",
		"dates" : "June, 2014 - present",
		"description" : "Description1"
	},{
		"employer" : "Employer2",
		"title" : "Title2",
		"location" : "Austin, Texas",
		"dates" : "August, 2012 - May, 2014",
		"description" : "Description2"
	}
	]
}


work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

var projects = {
	"projects" : [
	{
		"title" : "Project 1",
		"dates" : "November, 2015",
		"description" : "A website hosting all the Udacity projects",
		"image" : "images/silvia300.jpg"
	},{

		"title" : "Project 2",
		"dates" : "December, 2015",
		"description" : "A resume website",
		"image" : "images/golfy300.jpg"
	}
	]
};

projects.display = function(){
	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
		$(".project-entry:last").append(formattedImage);
	}
}
projects.display();

var education = {
	"schools" : [ 
	{
		"name" : "Name1",
		"location" : "Location1",
		"degree" : "Degree1",
		"major" : "Major1",
		"years" : "Year1-Year2"
	},
	{
		"name" : "Name2",
		"location" : "Location2",
		"degree" : "Degree2",
		"major" : ["Major2","Major3"],
		"years" : "Year3-Year4"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : "November, 2015",
		"URL" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : "December, 2015",
		"URL": "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
}

education.display = function(){
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		// $(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolTitle = formattedName + formattedDegree;
		$(".education-entry:last").append(schoolTitle);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].years);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (var onlinecourse in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
		$(".education-entry:last").append(onlineTitle);

		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);
		$(".education-entry:last").append(onlineDates);

		var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].URL);
		$(".education-entry:last").append(onlineURL);
	}

	$("#education").append("<br>");

}

education.display();


$("#mapDiv").append(googleMap);
