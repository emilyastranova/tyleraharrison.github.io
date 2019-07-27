window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	exportEnabled: false,
	animationEnabled: true,
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>",
		showInLegend: "false",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label}",
		dataPoints: [
			{ y: 51.08, label: "Java" },
			{ y: 27.34, label: "Python" },
			{ y: 10.62, label: "HTML" },
			{ y: 5.02, label: "CSS" },
			{ y: 5.73, label: "JS" }
		]
	}]
});
chart.render();
}
