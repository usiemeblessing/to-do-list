/** @format */

// document.querySelector("#btn").onclick = function () {
// 	if (document.querySelector("#new-task input").value.length == 0) {
// 		alert("Please enter a task");
// 	} else {
// 		document.querySelector("#new-task input").value.innerHTML += `
// 	<div class="tasks">
// 	<span id = "taskname">
// 	${document.querySelector("#new-task input").value}
// 	</span>

// 	<button class="delete">🗑</button>
// </div>
// 		`;
// 	}
// };

let addButton = document.querySelector("#btn");
addButton.addEventListener("click", () => {
	if (document.querySelector("#new-task input").value.length == 0) {
		alert("Please add a Task");
	} else {
		document.querySelector("#tasks").innerHTML += `
	<div class="task">
	<span id = "taskname">
	${document.querySelector("#new-task input").value}
	</span>
	<button class="edit">📝</button>
	<button class="delete">🗑</button>
</div>
		`;
	}
});
