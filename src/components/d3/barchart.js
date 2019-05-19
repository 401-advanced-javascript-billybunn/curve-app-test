import React, { useEffect } from "react"
import * as d3 from "d3"

export default function BarChart(props) {
  useEffect(() => {
    console.log("useEffect")
    // data to create bar chart
    var dataset = [200, 100, 56, 120, 180, 30, 40, 120, 160]
    // var dataset = [1, 2, 3, 4, 5]

    // width and height of svg container
    var svgWidth = 500,
      svgHeight = 300,
      barPadding = 5 // padding between bars

    // width of each bar
    var barWidth = svgWidth / dataset.length

    var svg = d3
      .select(".bar-chart")
      .attr("width", svgWidth)
      .attr("height", svgHeight)

    // var xScale = d3
    //   .scaleLinear()
    //   .domain([0, d3.max(dataset)])
    //   .range([0, svgWidth])

    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, svgHeight - 15]) // -15 to make room for text label

    var barChart = svg
      .selectAll("rect") // no rectangles to select, so creates an empty selection
      .data(dataset) // binds dataset with selection elements, takes dataset into the waiting state
      .enter() // takes dataset from the waiting state to perform further operations.
      /* 
    enter() calls all the methods below for each items in the dataset.
    for each item, we're appening a rectangle, then giving that rectangle 4 attributes:
    - y - calculated by subtracting the data value from the svg's height
    - height - return the data value from the callback function
    - width - calculated by subtracting the barPadding from the barWidth (defined above)
    - transform - use the index of each item in the dataset to calculate the translation (since we don't want each bar to start in the same place)
    
    */
      .append("rect")
      .attr("y", function(d) {
        return svgHeight - yScale(d)
      })
      .attr("height", function(d) {
        return yScale(d)
      })
      .attr("width", barWidth - barPadding)
      .attr("transform", function(d, i) {
        var translate = [barWidth * i, 0]
        return "translate(" + translate + ")"
      })

    var text = svg
      .selectAll("text") // returns an empty selection
      .data(dataset) // introduce the dataset
      .enter() // bring in data items one-by-one
      .append("text") // append text for each data item
      .text(function(d) {
        // gets data's value and returns it
        return d
      })
      .attr("y", function(d, i) {
        return svgHeight - yScale(d) - 5 // puts text slightly higher than the bar
      })
      .attr("x", function(d, i) {
        return barWidth * i // starting point of each rectangle
      })
      .attr("fill", "black") //
  })
  return (
    <div style={{ backgroundColor: "lightblue", padding: 10 }}>
      <h2>Bar Chart</h2>
      <svg className="bar-chart" />
    </div>
  )
}
