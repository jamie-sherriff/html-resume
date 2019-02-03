let generateList = (fn, listLength) =>{
	let list = new Array(listLength);
	for(let i = 0; i < list.length; i++){
		list[i] = fn.apply();
	}
	return list;
};

let chance = new Chance();
name = chance.name();
title = chance.profession();

interestList = generateList( chance.animal.bind(chance), 4);
membershipList = generateList( chance.company.bind(chance), 2);
skillsList = generateList( chance.profession.bind(chance), 6);

contactInfoList = [
	{itemName: "website", value: `https://${name}`, private: false, "iconClassValue": "fa fa-globe"},
	{itemName: "github", value: `github.com/${name}`, private: false, iconClassValue: "fab fa-github"},
	{itemName: "linkedin", value: `linkedin.com/in/${name}`, private: false, iconClassValue: "fab fa-linkedin"},
	{itemName: "email", value: chance.email(), private: true, iconClassValue: "fa fa-envelope"},
	{itemName: "phone", value: chance.phone(), private: true, iconClassValue: "fa fa-phone"},
];

experiencesList = [
	{
		dateStart: "2018",
		dateEnd: "Present",

		title: chance.profession(),
		location: chance.city(),
		descriptionItems: [
			chance.sentence(),
			chance.sentence(),
			chance.sentence()
		]
	},
	{
		dateStart: "2017",
		dateEnd: "2018",

		title: chance.profession(),
		location: chance.city(),
		descriptionItems: [
			chance.sentence(),
			chance.sentence(),
			chance.sentence()
		]
	},
	{
		dateStart: "2012",
		dateEnd: "2017",

		title: chance.profession(),
		location: chance.city(),
		descriptionItems: [
			chance.sentence(),
			chance.sentence(),
			chance.sentence()
		]
	},
];

projectsList = [
	{
		dateStart: "2014",
		dateEnd: "Present",
		title: chance.sentence({ words: 2 }),
		location: chance.province(),
		descriptionItems: [
			chance.sentence(),
			chance.sentence()
		]
	},
	{
		dateStart: "2017",
		dateEnd: "Present",
		title: chance.sentence({ words: 2 }),
		location: chance.province(),
		descriptionItems: [
			chance.sentence(),
			chance.sentence()
		]
	},
	{
		dateStart: "2014",
		dateEnd: "2016",
		title: chance.sentence({ words: 2 }),
		location: chance.province(),
		descriptionItems: [
			chance.sentence(),
			chance.sentence()
		]
	}
];

educationList = [
	{
		dateStart: "2018",
		title: chance.profession(),
		location: chance.country(),
		description: chance.sentence()
	},
	{
		dateStart: "2014",
		dateEnd: "2018",
		title: chance.profession(),
		location: chance.country(),
		description: chance.sentence()
	},
	{
		dateStart: "2009",
		title: chance.profession(),
		location: chance.country(),
		description: chance.sentence()
	},
];

addtionalTrainingList = [
	chance.word(),
	chance.word(),
	chance.word(),
	chance.word()
];