/*
*    main.js
*/

var margin = {top: 10, right: 10, bottom: 100, left:100};

var width = 600;

var height = 400;


var g = d3.select("body")

	.append("svg")

		.attr("width", width + margin.right + margin.left)

		.attr("height", height + margin.top + margin.bottom)

	.append("g")

		.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

d3.json("data/buildings.json").then((data)=> {
    names = []
    data.forEach((d)=>{
        d.height = +d.height;
        names.push(d.name);

    });

    var names = data.map((d)=>{return d.name});
    var max = d3.max(data, (d)=>{return d.height});

    var color = d3.scaleOrdinal()

	.domain(names)

	.range(d3.schemeSet3);

    var x = d3.scaleBand()

	.domain(names)

	.range([0, 400])

	.paddingInner(0.3)

	.paddingOuter(0.3);

    var y = d3.scaleLinear()

	.domain([0, max])

	.range([0,400]);


    var rectangles = g.selectAll("rectangle")
    .data(data);

    rectangles.enter()
    .append("rect")
        .attr("width", x.bandwidth())
        .attr("x", (d, i)=>{
            console.log("Item" + d + "Index: " + i);
            return x(d.name);
        })
        .attr("y", (d)=>{return y(d.height);})
        
        .attr("height", (d)=>{return y(d.height);})
        .attr("fill", (d)=>{return color(d.name);});
    

    console.log(data);


}).catch((error)=>{
    console.log(error);
});
