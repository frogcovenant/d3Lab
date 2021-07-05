/*
*    main.js
*/
var data = [25, 20, 15, 10, 5];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var rectangles = svg.selectAll("rectangle")
    .data(data);

rectangles.enter()
    .append("rect")
        .attr("x", 50)
        .attr("y", (d, i)=>{
            console.log("Item" + d + "Index: " + i);
            return (i * 60) + 65;
        })
        .attr("width", 40)
        .attr("height", (d)=>{return d;})
        .attr("position", "absolute")
        .attr("bottom", "-50px")
        .attr("fill", "red");

