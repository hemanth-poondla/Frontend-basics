
"use strict";
<!-- when strict is used w ehave define variables using var else it will throw error-->
var box = document.getElementById("box");
var clickCount = document.getElementById("click-count");
count = 0;
box.addEventListener('click',function(){
count++;
console.log(count);
clickCount.innerText = count+" ";
});