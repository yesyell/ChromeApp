// 4. 랜덤 배경 이미지
const backgrounds = [
    'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolor-4116932_1280.png',
    'https://cdn.pixabay.com/photo/2019/04/10/12/40/watercolor-4117017_1280.png',
    'https://cdn.pixabay.com/photo/2019/04/27/23/09/beach-4161593_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/06/25/13/33/landscape-7283516_1280.jpg',
    // Add more URLs here
];
  
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const backgroundImageUrl = `url('${backgrounds[randomIndex]}')`;
    document.getElementById('background').style.backgroundImage = backgroundImageUrl;
}

setRandomBackground();
  