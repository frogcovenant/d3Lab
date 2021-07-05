/*
*    main.js
*/

// loading CSV file
/*
d3.csv("data/ages.csv").then((data)=> {

	console.log(data);

});
*/

// loading TSV file
/*
d3.tsv("data/ages.tsv").then((data)=> {

	console.log(data);

});
*/

// loading JSON file
/*
d3.json("data/ages.json").then((data)=> {

	console.log(data);

});
*/

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

d3.json("data/ages.json").then((data)=> {
    ages = []
    data.forEach((d)=>{
		d.age = +d.age;
        ages.push(d.age)

	});
    var circles = svg.selectAll("circle")
    .data(ages);

    circles.enter()
    .append("circle")
        .attr("cx", (d, i)=>{
            return (i * 50) + 25
        })
        .attr("cy", 50)
        .attr("r", (d)=>{return d*2})
        .attr("fill", (d)=>{
            if (d > 10){
                return "blue"
            }else{
                return "red"
            }
        })

	console.log(data);

}).catch((error)=>{
    console.log(error);
});






