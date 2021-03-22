// This code is disigned to calculate the area of a trapezoid.
let a = 0
let b = 0
let height = 0
let area = 0

document.getElementById('button').addEventListener('click', calculate)

function calculate () {
  a = document.getElementById('baseA').value
  a = parseInt(a)
  b = document.getElementById('baseB').value
  b = parseInt(b)
  height = document.getElementById('height').value
  height = parseInt(height)
  area = ((a + b) / 2) * height
  document.getElementById('answer').innerHTML = area
}
