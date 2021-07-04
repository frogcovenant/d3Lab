/*
*    main.js
*/

var svg = d3.select("#chart-area")
    .append("svg")

    .attr("width", 400)

    .attr("height", 400);

var circle = svg.append("circle")

	.attr("cx", 95)

	.attr("cy", 250)

	.attr("r", 85)

	.attr("fill", "orange");

var rect = svg.append("rect")

	.attr("x", 210)

	.attr("y", 20)

	.attr("width", 200)

	.attr("height", 130)

	.attr("fill","blue");



