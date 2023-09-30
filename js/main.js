// メニューのトグルボタンのクリックイベントを処理
const menuToggle = document.querySelector('.hamburger');
const footermenuToggle=document.querySelector('.footer-ham')
const menu = document.querySelector('.menu');
const footerMenu = document.querySelector('.footer-menu');

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
footermenuToggle.addEventListener("click", () => {
    footerMenu.classList.toggle("active");
});
