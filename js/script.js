"use strict";

// クリックしたら予約モーダルを開く
$(function () {
	$(".reserve").click(function () {
		$("#modalArea").fadeIn();
	});
	$("#modalClose, #modalBg").click(function () {
		$("#modalArea").fadeOut();
	});

	// クリックしたタブのメニューを開く
	// 参考URL : https://www.flatflag.nir87.com/tab-1960#i-3
	$(".news-index li").click(function () {
		// クリックされたタブの順番を変数に格納
		let index = $(".news-index li").index(this);
		// クリック済みタブのデザインを設定したcssのクラスを一旦削除
		$(".news-index li").removeClass("active");
		// クリックされたタブにクリック済みデザインを適用する
		$(this).addClass("active");
		// コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
		$(".news-items").removeClass("is-show").eq(index).addClass("is-show");
	});

	// $('.news-items[id != "tab1"]').hide();

	// $(".news-index li a").click(function () {
	// 	$(".news-items").hide();

	// 	$($(this).attr("href")).show();

	// 	$(".news-index li a").removeClass("active");

	// 	$(this).addClass("active");

	// 	return false;
	// });
});

// 🍔 ハンバーガーメニュー
function navFunc() {
	document.querySelector("html").classList.toggle("open");
}
