window.addEventListener('load', function() {
    // Получаем все ссылки на странице и выводим их в консоль
    console.log("Вывод всех ссылок на странице:");
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        console.log(links[i].href);
    }
    console.log("Вывод всех якорей на странице:");
    // Получаем все якоря на странице и выводим их в консоль
    const anchors = document.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i++) {
        console.log(anchors[i].name);
    }
    // Получаем все изображения на странице и выводим их в консоль
    console.log("Вывод всех изображений на странице:");
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        console.log(images[i].src);
    }
});

// Вычисляем время загрузки страницы
window.addEventListener('load', function() {
    let time = window.performance.timing
    let pageloadtime = time.loadEventStart - time.navigationStart;
    console.log('Страница загружена за ' + pageloadtime + ' мс');
});
      