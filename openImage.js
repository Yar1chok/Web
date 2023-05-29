// Получаем ссылки на элементы карусели
const image = document.getElementById("image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Задаем массив с путями к изображениям
const images = ['bg-sirus1.jpg', 'bg-sirus2.jpg', 'bg-sirus3.jpg'];

// Устанавливаем начальный индекс изображения
let currentImageIndex = 0;

// Регистрируем события для кнопок
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

// Функция для отображения предыдущего изображения
function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateImage();
}

// Функция для отображения следующего изображения
function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateImage();
}

// Функция для обновления отображаемого изображения
function updateImage() {
  const imageUrl = images[currentImageIndex];
  image.setAttribute("src", imageUrl);
}
