//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Favorite Foods
    </h1>
    <div>
      <img
        class="foodImg"
        src="https://www.halfbakedharvest.com/wp-content/uploads/2019/10/Better-Than-Takeout-Dan-Dan-Noodles-1-1.jpg"
      />
      <img src="" />
    </div>
  </div>,
  document.getElementById("root")
);
