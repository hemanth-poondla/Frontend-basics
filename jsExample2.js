var innerDiv = document.getElementById("inner");
innerDiv.addEventListener("click", innerClick);

var outerDiv = document.getElementById("outer");
outerDiv.addEventListener("click", outerClick);

var doc = document;
doc.addEventListener("click", docClick);


function innerClick(event){
console.log("inner");
event.stopPropagation();
}

function outerClick(){
console.log("outer");
}

function docClick(){
console.log("doc");
}

<!-- check the behavior of outer click and inner click in chrome console and undersrtand the usecase of stoppropagation -->
