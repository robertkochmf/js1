document.onload = stickyNotes();

function stickyNotes() {

  var form = document.querySelector("#add-sticky");
  var dropdown = form.colour;
  var noteField = form.message;
  var count = 1;

  function colorSelector() {
    var cssColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

    cssColors.forEach(function(el, index) {
      dropdown[index] = new Option(el,el,false,false);
    });

    dropdown.options[0] = new Option('Choose a sticky note colour', '', true, true);
    dropdown.options[0].disabled = true;
  }

  colorSelector();

  dropdown.addEventListener("change", function() {
    var background = dropdown.value;
    dropdown.style.backgroundColor = background;
  });

  form.addEventListener("submit", function(event) {

    event.preventDefault();

    var colour = dropdown.value;
    var message = noteField.value;

    function addNote () {
      // Set up box
      var box = document.createElement("div");
      box.className = "box";
      box.style.backgroundColor = colour;
      box.innerHTML = "<span>" + count + '. ' + message + "</span>";
      // Add box to DOM
      var container = document.querySelector(".container");
      container.appendChild(box); //does this need to have document or the querySelector has already set that context?
    }

    addNote();
    count ++;
    form.reset();
    form[0].focus();
    dropdown.style.backgroundColor = 'White';

  });

}
