
var name = "Chuwei";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Web Learner";
var formattedRole = HTMLheaderRole.replace("%data%", role);
// HTMLheaderName.replace("%data%",formattedName);
// HTMLheaderRole.replace("%data%",formattedRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Chuwei",
	"role" : "Web Learner",
	"welcomeMessage":"Hello this is the second project!",
	"contacts": {
		"email" : "123@gmail.com",
		"mobile" : "123-456-7890",
		"location" : "Austin"
	}, 
	"skills" : ["web development", "graphic design","video editing","teaching","3D modeling"],
	"picture" : "../images/profilepic.jpg"
}

var education = {
	"schools" : [ 
	{
		"name" : "UT Austin",
		"location" : "Austin",
		"degree" : "Master of Education",
		"major" : "Curriculum and Instruction",
		"years" : "2011-2013"
	},
	{
		"name" : "NTU",
		"location" : "Taiwan",
		"degree" : "Bachelor of Arts",
		"major" : ["Languages and Literature","Political Science"],
		"years" : "2007-2011"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"date" : "November, 2015"
	},
	{	
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"date" : "December, 2015"
	}
	]
}

var work = {
	"jobs" : [
	{
		"employer" : "CWM",
		"title" : "teacher",
		"location" : "Austin",
		"date" : "June, 2014 - present",
		"description" : "teach children aged 2-6 Mandarin Chinese and design and maintain school websites"
	},{
		"employer" : "Austin Chinese School",
		"title" : "teacher",
		"location" : "Austin",
		"date" : "August, 2012 - May, 2014",
		"description" : "teach pre-K and K classes, prepare lesson plans and design class materials"
	}
	]
}
function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").appned(
			formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);9


	}
}
displayWork();
// var education = {};
// education["name"] = "UT Austin";
// education["years"] = "2011-2013";
// education["city"] = "Austin";

// var education = {
// 	"ut" : {
// 		"name" : "UT Austin",
// 		"major" : "Education",
// 		"years" : "2011-2013"
// 	},
// 	"ntu" : {
// 		"name" : "NTU",
// 		"major" : "Languages and Literature",
// 		"years" : "2007-2011"
// 	},
// 	"udacity" : {
// 		"name" : "Udacity",
// 		"major" : "Front End Nano Degree Program",
// 		"years" :"2015"
// 	}
// } 



var projects = {
	"project" : [
	{
		"title" : "Project 1",
		"location" : "Austin",
		"date" : "November, 2015",
		"description" : "A website hosting all the Udacity projects",
		"image" : ["images/197x148.gif", "images/197x148.gif"]
	},{

		"title" : "Project 2",
		"location" : "Austin",
		"date" : "December, 2015",
		"description" : "A resume website",
		"image" : ["images/197x148.gif", "images/197x148.gif"]
	}
	]
}
// $("#main").append(work["position"]);
// $("#main").prepend(education["schools"][0].name);
// $("#main").append(projects.project[1].image);
// $("#topContacts").append(bio["contacts"][0]);
// $("#header").append(bio["skills"]);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);


}