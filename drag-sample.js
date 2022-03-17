// var foo = document.getElementsByClassName("drag-me").item(0),
//     bar = document.getElementsByClassName("drag-me").item(1);

// // Drag foo and create custom element.
// foo.addEventListener("dragstart", function(e) {

//   var elem = document.createElement("div");
//   elem.id = "drag-ghost";
//   elem.textNode = "Dragging";
//   elem.style.position = "absolute";
//   elem.style.top = "-1000px";
//   document.body.appendChild(elem);
//   e.dataTransfer.setDragImage(elem, 0, 0);

// }, false);

// // Drag bar and use foo as ghost image
// bar.addEventListener("dragstart", function(e) {

//   e.dataTransfer.setDragImage(foo, 0, 0);

// }, false);

// // Let's remove the created ghost elem on dragend
// document.addEventListener("dragend", function(e) {

//   var ghost = document.getElementById("drag-ghost");
//   if (ghost.parentNode) {
//     ghost.parentNode.removeChild(ghost);
//   }

// }, false);
// // css
// .drag-me {
//   width: 100px;
//   padding: 30px 0;
//   text-align: center;
//   color: white;
//   display: inline-block;
// }

// .drag-me:nth-child(1) {
//   background-color: green;
// }

// .drag-me:nth-child(2) {
//   background-color: red;
// }

// #drag-ghost {
//   width: 200px;
//   height: 200px;
//   background-color: yellow;
// }
// <div class="drag-me" draggable="true">Drag Me Foo</div>

// <div class="drag-me" draggable="true">Drag Me Bar</div>

// https://github.com/cloneplay/setDragImage-for-IE
