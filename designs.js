$(function makeGrid() {
  // Variables
  var gridHeight;
  var gridWidth;
  var table = $("#pixel_canvas");
  var createGridButton = $("input[name='create']");
  var refreshButton = $("input[name='refresh']")
  var colorPicker = $("#colorPicker");
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
  createGridButton.click(function(e) {

    e.preventDefault();

    for (var i = 0; i < gridHeight; i++) {
      var tempString = "";
    for (var j = 0; j < gridWidth; j++) {
      tempString += "<td>*</td>";
      }
      table.append("<tr>" + tempString + "</tr>");
    }
    createGridButton.off("click");
  });

  // Refresh page
  refreshButton.click(function() {
      location.reload(true);
  })

  // Getting Color Picker Value Function
  colorPicker.on("change", function() {
    colorPickerValue = colorPicker.val();
  });

  // Pixel drawning Function
  table.on("click", "td", function() {
      $(this).css("background-color", colorPickerValue);
  });

  // Pixel removing function on doubleClick
  table.on("dblclick", "td", function() {
    $(this).css("background-color", "white");
  });

});
