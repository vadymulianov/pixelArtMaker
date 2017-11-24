$(function makeGrid() {
  // Variables
  var gridHeight;
  var gridWidth;
  var colorPickerValue;

  // Getting input value from Grid Height input field
  $("#input_height").bind("keyup keydown mouseup mousedown", function() {
      gridHeight = Number($("#input_height").val());
  });

  // Getting input value from Grid Width input field
  $("#input_width").bind("keyup keydown mouseup mousedown", function() {
    gridWidth = Number($("#input_width").val());
  });

  // Submitting the form and creating the table based on provided values
  $("input[name='create']").click(function(e) {

    e.preventDefault();

    for (var i = 0; i < gridHeight; i++) {
      var tempString = "";
    for (var j = 0; j < gridWidth; j++) {
      tempString += "<td>*</td>";
      }
      $("#pixel_canvas").append("<tr>" + tempString + "</tr>");
    }
    $("input[name='create']").off("click");
  });

  // Refresh page
  $("input[name='refresh']").click(function() {
      location.reload(true);
  })

  // Getting Color Picker Value Function
  $("#colorPicker").on("change", function() {
    colorPickerValue = $("#colorPicker").val();
    console.log("colorPickerValue:", colorPickerValue);
  });

  // Converting hex value of colorPickerValue to rgb value
  function rgba(hex, opacity) {
  var colours = hex.regex(/#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i).map(function(val) {
    return Math.range(0, parseInt(val, 16), 255);
  }).join(",");
  if (opacity === undefined) {
    return "rgb(" + colours + ")";
  }
  return "rgba(" + colours + "," + opacity + ")";
  }

  // Converted colorPickerValue
  var colorPickerValueConverted = rgba(colorPickerValueConverted);
  console.log("colorPickerValueConverted:", colorPickerValueConverted);

  // Pixel drawning Function
  $("#pixel_canvas").on("click", "td", function() {
    if ($(this).css("background-color") == "rgba(0, 0, 0, 0)") {
      $(this).css("background-color", colorPickerValue);
    } else {
      $(this).css("background-color", "rgba(0,0,0,0)");
    }
  });

});
