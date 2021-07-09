/*
*    main.js
*/
var margin = {top: 10, right: 10, bottom: 100, left:100};
var width = 600;
var height = 400;


var g = d3.select("#chart-area")

    .append("svg")
    
        .attr("width", width + margin.right + margin.left)
    
        .attr("height", height + margin.top + margin.bottom)
    
    .append("g")
    
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");


var max = 0;
d3.json("data/revenues.json").then((data)=> {
    data.forEach((d)=>{
        d.revenue = +d.revenue;
        if (d.revenue > max){
            max = d.revenue;
        }

    });
    var months = data.map((d)=>{return d.month})
    var revenues = data.map((d)=>{return d.revenue});

    var color = d3.scaleOrdinal()

	.domain(months)

	.range(d3.schemeSet3);

    var x = d3.scaleBand()

	.domain(months)

	.range([0, width])

	.paddingInner(0.3)

	.paddingOuter(0.2);

    var y = d3.scaleLinear()

	.domain([max, 0])

	.range([0,height]);


    var rectangles = g.selectAll("rectangle")
    .data(data);

    var leftAxis = d3.axisLeft(y).ticks(5).tickFormat((d) => { return "$" + d/1000 + "k"; });
    g.append("g")
    .attr("class", "left axis")
    .call(leftAxis);


    var bottomAxis = d3.axisBottom(x);

    g.append("g")

        .attr("class", "x axis")

        .attr("transform", "translate(0, " + height + ")")

        .call(bottomAxis)

    g.append("text")
        .attr("class", "y axis-label")
        .attr("x", - (height / 2 ))
        .attr("y", -60)
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .style("fill","black").
        text("Revenue (dlls.)");  

        g.append("text")
        .attr("class", "y axis-label")
        .attr("x", width / 2)
        .attr("y", height + margin.top)
        .attr("transform", "translate(0, " + (40) + ")")
        .attr("font-size", "20px")
        .attr("text-anchor", "middle")
        .style("fill","black")
        .text("Month");

    rectangles.enter()
    .append("rect")
        .attr("width", x.bandwidth())
        .attr("x", (d)=>{return x(d.month);})
        .attr("y", (d)=>{return y(d.revenue);})
        
        .attr("height", (d)=>{return height - y(d.revenue);})
        .attr("fill", (d)=>{return color(d.month);});
    

    console.log(data);


}).catch((error)=>{
    console.log(error);
});

