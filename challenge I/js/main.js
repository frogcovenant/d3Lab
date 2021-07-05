/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 900)
    .attr("height", 900);


d3.json("data/buildings.json").then((data)=> {
    buildings = []
    data.forEach((d)=>{
        d.height = +d.height;
        buildings.push(d)

    });
    var rectangles = svg.selectAll("rectangle")
    .data(buildings);

    rectangles.enter()
    .append("rect")
        .attr("x", (d, i)=>{
            console.log("Item" + d + "Index: " + i);
            return (i * 60) + 65;
        })
        .attr("y", (d)=>{return 900-d.height})
        .attr("width", 40)
        .attr("height", (d)=>{return d.height;})
        .attr("position", "absolute")
        .attr("fill", "red");

    console.log(data);

}).catch((error)=>{
    console.log(error);
});

