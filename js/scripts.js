//
// var triangle = function(side1, side2, side3) {
//   return (side1 + side2 + side3)/3;
// }



$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side2 === side1 && side2 === side3) {
      $("#output").text("Equilateral")
    } else if (side2 === side1 || side3 === side1 || side3 === side2) {
      $("#output").text("Isosceles")
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3 && side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
      $("#output").text("Scalene")
    } else {
      $("#output").text("That is not a triangle")
    }


  });
});
