// For a pie chart

var programmingData = {
	datasets: [{
		backgroundColor: [
			'rgb(70, 191, 189)',
			'rgb(252, 180, 92)',
			'rgb(247, 70, 74)',
			'rgb(148, 159, 177)',
			'rgb(101, 63, 100)',
			'rgb(77, 83, 96)',
			'rgb(180, 142, 173)',
			'rgb(150, 181, 180)',
			'rgb(235, 203, 138)',
		],
		data: [4, 3, 2, 1,1]
	}],

	// These labels appear in the legend and in the tooltips when hovering different arcs
	labels: [
		'JavaScript/TS',
		'Python',
		'C#',
		'C',
		'Java'
	]
};

var skillData = {
	datasets: [{
		backgroundColor: [
			'rgb(70, 191, 189)',
			'rgb(252, 180, 92)',
			'rgb(247, 70, 74)',
			'rgb(148, 159, 177)',
			'rgb(101, 63, 100)',
			'rgb(77, 83, 96)',
			'rgb(180, 142, 173)',
			'rgb(150, 181, 180)',
			'rgb(235, 203, 138)',
		],
		data: [4, 4, 2, 1]
	}],

	// These labels appear in the legend and in the tooltips when hovering different arcs
	labels: [
		'Testing',
		'Development',
		'SysAdmin',
		'Embedded'
	]
};

var options = {
	responsive: true,
	layout: {
		padding: {
			left: 0,
			right: 0,
			top: 10,
			bottom: 0
		}
	},
	legend: {
		labels: {
			padding: 4,
			fontSize: 10,
			boxWidth: 20

		}
	}
	// plugins: {
	// 	labels: {
	// 		fontStyle: 'bold',
	// 		precision: 0,
	// 		render: 'label',
	// 		fontColor: '#000',
	// 		position: 'border',
	// 		fontSize: 10,
	//
	//
	// 	}
	// }
}

var ctx = document.getElementById("programmingChart");
var ctx2 = document.getElementById("skillsChart");

new Chart(ctx, {
	type: "doughnut",
	data: programmingData,
	options
});

new Chart(ctx2, {
	type: "doughnut",
	data: skillData,
	options
});