jQuery(document).ready(function ($) {
  const cookiebtn = $(".cookie-btn");
  cookiebtn.on("click", function () {
    $("#cookie-banner").hide(); // 隱藏橫幅
    localStorage.setItem("cookieAccepted", "true"); // 記錄使用者已同意
  });
  // 檢查是否已同意
  if (localStorage.getItem("cookieAccepted")) {
    $("#cookie-banner").hide();
  }
});
