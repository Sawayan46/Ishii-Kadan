"use strict";

// スクロールした時のイベントを設定
window.addEventListener("scroll", function () {
	let header = document.getElementById("top_header");

	header.classList.toggle("scroll-nav", window.scrollY > 0);

	let headerLogo = document.getElementById("header-logo");
	let newHeaderLogo = "./src/img/sub-header-logo.png";
	let oldHeaderLogo = "./src/img/top-header-logo.png";

	if (0 < window.scrollY) {
		headerLogo.setAttribute("src", newHeaderLogo);
	} else {
		headerLogo.setAttribute("src", oldHeaderLogo);
	}
});
