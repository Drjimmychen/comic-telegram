// script.js

// 默认语言为英文
let currentLanguage = 'en';

// 切换语言函数
function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageLanguage();
}

// 更新页面语言函数
function updatePageLanguage() {
    fetch(`languages/${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            // 更新导航链接文本
            document.querySelectorAll('nav a[data-lang]').forEach(link => {
                const key = link.getAttribute('data-lang');
                if (data[key]) {
                    link.textContent = data[key];
                }
            });

            // 更新其他需要多语言支持的文本
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (data[key]) {
                    element.textContent = data[key];
                }
            });
        });
}

// 初始加载页面时更新语言
updatePageLanguage();
