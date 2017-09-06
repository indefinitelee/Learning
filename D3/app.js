// from https://github.com/OneCent01/D3-Gentle-Intro

/*INTRODUCTION*/

/*
On the spectrum of how opinionated a library is, d3's classification
lands somewhere in the middle. While it has been stated that d3 makes
an attempt at being unopinionated, it is near impossible to do so with
the nature of its purpose: data representation. However, it has gained
massive popularity and, while on the decline today, is still present
not only as a primary dependency in many legacy applications, but it utilized
as a dependency of more popular libraries today.
see its use through time: https://db-engines.com/en/ranking_trend/system/D3
note: the graph on this link was created using Highcharts, a library which
may be more suited to your needs if you want more structure/greater abstraction
*/

/*SVG DRAWING*/
//Scalable Vector Graphics are like canvases implemented in XML,
//allowing for us to create spaces to draw and interact.
//the three main methods for manupulating DOM elements are: enter, update, and exit

//below are three varibles representing the selection of the DOM element on which we
//will be drawing, instantiation of the SVG board, and drawing of the shape.
//read through the below code and formulate a hypothesis as to what will
//happen when the code is run
//^^answer:

d3.select("body").append("h2").text("Time to draw!");
 var bodySelection = d3.select("body");

 var svgSelection = bodySelection.append("svg")
                                 .attr("width", 200)
                                 .attr("height", 50);

var circleSelection = svgSelection.append("circle")
                                  .attr("cx", 50)
                                  .attr("cy", 25)
                                  .attr("r", 25)
                                  .style("fill", "green");

//alright, moving forward. lets have some fun!
//uncomment and study the code below from lines 73-95, making a
//prediction about what the result will render on the page:
//^^answer:

var circleRadii = [80, 40, 20, 10]

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 600)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(circleRadii)
                          .enter()
                          .append("circle")

 var colors = ["Navy ", "yellow", "RebeccaPurple", "PaleVioletRed"];

 var count = 0;

var circleAttributes = circles
                       .attr("cx", (d, i) => d)
                       .attr("cy", 100)
                       .attr("r", d => d)
                       .style("fill", d => {
                         count === colors.length ? count = 0 : count;
                         return colors[count++];
                       });

/*SPATIAL PLACEMENT LOGIC*/

//At the heart of D3 is the question of how data can be represented
//in space: color, size, relative location, shape, and structure,
//and with others, all influence the constructed meaning the visual
//element conveys.
//What lines of code below create the variable space arrangement of
//circles on the page?
//^^answer:

d3.select("body").append("h2").text("Lets think about space");

 var spaceCircles = [30, 70, 110];

 var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 400)
                                    .attr("height", 500);

var circles = svgContainer.selectAll("circle")
                          .data(spaceCircles)
                          .enter()
                          .append("circle")
                          .attr("cx", d => d)
	                      .attr("cy", (d, i) => d + (i * 30))
	                      .style("fill", "red")
	                      .attr("r", 20);


//still confused about how data is being used?
//check out this great article by Scott Murray:
/* http://alignedleft.com/tutorials/d3/the-power-of-data */
