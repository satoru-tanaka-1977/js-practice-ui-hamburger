// 1. 必要な要素をHTMLから取得する
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const mask = document.querySelector('.mask');

// 2. ハンバーガーボタンがクリックされたときの処理
hamburgerBtn.addEventListener('click', () => {
    // ボタンとメニューとマスクに 'open' クラスをそれぞれ付け外しする
    navMenu.classList.toggle('open');
    mask.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

// 3. マスクをクリックしたときも、メニューを閉じられるようにする（親切設計！）
mask.addEventListener('click', () => {
    navMenu.classList.remove('open');
    mask.classList.remove('open');
    hamburgerBtn.classList.remove('open');
});