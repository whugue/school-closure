
//JavaScript Code for Interactive School Closure Map

var width = 960,
    height = 650;

var rateById = d3.map(), schoolById = d3.map(), closeById = d3.map(), nameById = d3.map() //add addition maps for d3 tip

var quantile = d3.scale.quantile()
    .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

var projection = d3.geo.albersUsa()
    .scale(1280)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

//Define Mouseover Tip
tip = d3.tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .direction("n")
  .html(function(d) { return nameById.get(d.id) +
    "<br/>Schools:      " + schoolById.get(d.id) +
    "<br/>Closures:     " + (closeById.get(d.id)*1).toFixed(0) + 
    "<br/>Closure Rate: " + (rateById.get(d.id)*100).toFixed(0) + "%"
  });

svg.call(tip);

//Read in Data & Bind to Map
queue()
    .defer(d3.json, "us.json")
    .defer(d3.tsv, "closures.tsv", function(d) {
      nameById.set(d.id, d.county_name);
      schoolById.set(d.id, d.schools);
      closeById.set(d.id, d.closures);
      rateById.set(d.id, +d.close_rate); })
    .await(ready);

function ready(error, us) {
  if (error) throw error;

  quantile.domain(rateById.values());

  svg.append("g")
      .attr("class", "counties")
    .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
    .enter().append("path")
      .attr("class", function(d) { return quantile(rateById.get(d.id)); })
      .attr("id", function(d) {return d.id})
      .attr("d", path)
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide)

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "states")
      .attr("d", path);
}

d3.select(self.frameElement).style("height", height + "px");