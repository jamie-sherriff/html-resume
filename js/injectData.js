'use strict';

let titleHtml = document.getElementById("title");
titleHtml.innerHTML = `<h1>${name}</h1><span class="subtitle">${title}</span>`;

let experienceHtml = document.getElementById("experience-block");
experienceHtml.innerHTML = `<h2><i class="fa fa-suitcase"></i>Experiences</h2>`;

let projectHtml = document.getElementById("project-block");
projectHtml.innerHTML = `<h2><i class="fa fa-folder-open"></i>Projects</h2>`;

let educationtHtml = document.getElementById("education-block");
educationtHtml.innerHTML = `<h2><i class="fa fa-graduation-cap"></i>Education</h2>`;


let contactHtml = document.getElementById("contact");
contactHtml.innerHTML = `<h1>Contact Info</h1>`;
let contactList = document.createElement("ul");

let skillsHtml = document.getElementById("skills");
skillsHtml.innerHTML = `<h1>Skills</h1>`;
let skillListUl = document.createElement("ul");

let membershipsHtml = document.getElementById("memberships");
membershipsHtml.innerHTML = `<h1>MemberShips</h1>`;
let membershipsListUl = document.createElement("ul");

let interestsHtml = document.getElementById("interests");
interestsHtml.innerHTML = `<h1>Interests</h1>`;
let interestsListUl = document.createElement("ul");


//Job Experience List
experiencesList.forEach((experience) => {
	let experienceSection = document.createElement("section");
	experienceSection.className = "blocks";
	//Dates
	let dateDiv = document.createElement("div");
	dateDiv.className = "date";
	let dateElement = document.createElement("span");
	let dateElementEnd = document.createElement("span");
	let dateTextStart = document.createTextNode(experience.dateStart);
	let dateTextEnd = document.createTextNode(experience.dateEnd);

	dateElement.appendChild(dateTextStart);
	dateElementEnd.appendChild(dateTextEnd);

	dateDiv.appendChild(dateElement);
	dateDiv.appendChild(dateElementEnd);

	//details
	let detailDiv = document.createElement("div");
	detailDiv.className = "details";
	let detailHeader = document.createElement("header");
	detailHeader.innerHTML = `<h3>${experience.title}</h3><span class=\"place\">${experience.location}</span>`;
	detailDiv.appendChild(detailHeader);


	let detailContentdiv = document.createElement("div");
	let itemUl = document.createElement("ul");
	experience.descriptionItems.forEach((item) => {
		let listItem = document.createElement("li");
		listItem.textContent = item;

		itemUl.appendChild(listItem);
	});

	let decoratorDiv = document.createElement("div");
	decoratorDiv.className = "decorator";
	detailContentdiv.appendChild(itemUl);

	detailDiv.appendChild(detailContentdiv);

	experienceSection.appendChild(dateDiv);
	experienceSection.appendChild(decoratorDiv);
	experienceSection.appendChild(detailDiv);
	experienceHtml.appendChild(experienceSection);

});


projectsList.forEach((project) => {
	let projectSection = document.createElement("section");
	projectSection.className = "blocks";
	//Dates
	let dateDiv = document.createElement("div");
	dateDiv.className = "date";
	let dateElement = document.createElement("span");
	let dateElementEnd = document.createElement("span");
	let dateTextStart = document.createTextNode(project.dateStart);
	let dateTextEnd = document.createTextNode(project.dateEnd);
	dateElement.appendChild(dateTextStart);
	dateElementEnd.appendChild(dateTextEnd);
	dateDiv.appendChild(dateElement);
	dateDiv.appendChild(dateElementEnd);

	//details
	let detailDiv = document.createElement("div");
	detailDiv.className = "details";
	let detailHeader = document.createElement("header");
	detailHeader.innerHTML = `<h3>${project.title}</h3><span class=\"place\">${project.location}</span>`;
	detailDiv.appendChild(detailHeader);


	let detailContentdiv = document.createElement("div");
	let itemUl = document.createElement("ul");
	project.descriptionItems.forEach((item) => {
		let listItem = document.createElement("li");
		listItem.textContent = item;
		itemUl.appendChild(listItem);
	});

	let decoratorDiv = document.createElement("div");
	decoratorDiv.className = "decorator";
	detailContentdiv.appendChild(itemUl);
	detailDiv.appendChild(detailContentdiv);
	projectSection.appendChild(dateDiv);
	projectSection.appendChild(decoratorDiv);
	projectSection.appendChild(detailDiv);
	projectHtml.appendChild(projectSection);

});


educationList.forEach((education) => {
	let section = document.createElement("section");
	section.className = "blocks";
	//Dates
	let dateDiv = document.createElement("div");
	dateDiv.className = "date";
	let dateElement = document.createElement("span");
	let dateTextStart = document.createTextNode(education.dateStart);
	if (education.dateEnd) {
		let dateElementEnd = document.createElement("span");
		let dateTextEnd = document.createTextNode(education.dateEnd);
		dateElementEnd.appendChild(dateTextEnd);
		dateDiv.appendChild(dateElementEnd);
	}

	dateElement.appendChild(dateTextStart);
	dateDiv.appendChild(dateElement);

	//details
	let detailDiv = document.createElement("div");
	detailDiv.className = "details";
	let detailHeader = document.createElement("header");
	let detailDescription = document.createElement("div");
	detailHeader.innerHTML = `<h3>${education.title}</h3><span class=\"place\">${education.location}</span>`;
	let detailDescriptionText = document.createTextNode(education.description);
	detailDescription.appendChild(detailDescriptionText);
	detailDiv.appendChild(detailHeader);
	detailDiv.appendChild(detailDescription);


	let decoratorDiv = document.createElement("div");
	decoratorDiv.className = "decorator";
	section.appendChild(dateDiv);
	section.appendChild(decoratorDiv);
	section.appendChild(detailDiv);
	educationtHtml.appendChild(section);
});
let additionalTrainingSection = document.createElement("section");
additionalTrainingSection.className = "blocks";
let additionalTrainingDecoratorDiv = document.createElement("div");
additionalTrainingDecoratorDiv.className = "decorator";
let additionalTrainingDetailDiv = document.createElement("div");
additionalTrainingDetailDiv.className = "details";
let addtionalTrainingDetailHeader = document.createElement("header");
addtionalTrainingDetailHeader.innerHTML = `<h3>Additional Training</h3>`;
let additionalTrainingDateDiv = document.createElement("div");
additionalTrainingDateDiv.className = "date";

let additionalTrainingListDiv = document.createElement("div");
additionalTrainingListDiv.className = "concise";
let itemUl = document.createElement("ul");
addtionalTrainingList.forEach((item) => {
	let listItem = document.createElement("li");
	listItem.textContent = item;
	itemUl.appendChild(listItem);
});

additionalTrainingListDiv.appendChild(itemUl);

additionalTrainingDetailDiv.appendChild(addtionalTrainingDetailHeader);
additionalTrainingDetailDiv.appendChild(additionalTrainingListDiv);

additionalTrainingSection.appendChild(additionalTrainingDateDiv);
additionalTrainingSection.appendChild(additionalTrainingDecoratorDiv);
additionalTrainingSection.appendChild(additionalTrainingDetailDiv);

educationtHtml.appendChild(additionalTrainingSection);


contactInfoList.forEach((contactItem) => {
	let showPrivateContactData = (typeof SHOW_PRIVATE_CONTACT_DATA === 'undefined') ? true : SHOW_PRIVATE_CONTACT_DATA;
	if (contactItem.private === false || showPrivateContactData === true) {
		let contactListItem = document.createElement("li");
		let contactTextItem = document.createElement("i");
		contactTextItem.className = contactItem.iconClassValue;
		contactListItem.appendChild(contactTextItem);
		let itemValue = document.createTextNode(" " + contactItem.value);
		contactListItem.appendChild(itemValue);
		contactList.appendChild(contactListItem);
	}
});

skillsList.forEach((skill) => {
	let skillListItem = document.createElement("li");
	skillListItem.innerText = skill;
	skillListUl.appendChild(skillListItem);
});

interestList.forEach((interest) => {
	let listItem = document.createElement("li");
	listItem.innerText = interest;
	interestsListUl.appendChild(listItem);
});

membershipList.forEach((membership) => {
	let listItem = document.createElement("li");
	listItem.innerText = membership;
	membershipsListUl.appendChild(listItem);
});


contactHtml.appendChild(contactList);
skillsHtml.appendChild(skillListUl);
interestsHtml.appendChild(interestsListUl);
membershipsHtml.appendChild(membershipsListUl);