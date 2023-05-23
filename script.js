//your JS code here. If required.
let div = document.querySelector("#line");
div.style.animation = "spin 1s linear infinite"
let style = document.createElement("style");
style.innerHTML = `@keyframes spin{
			0%{transform : rotate(0deg)}
			100%{transform : rotate(360deg)}
	   }`
document.body.append(style);