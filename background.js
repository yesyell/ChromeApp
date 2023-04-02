// 4. 랜덤 배경 이미지
const backgrounds = [
    'https://source.unsplash.com/random/1920x1080',
    'https://picsum.photos/1920/1080',
    'https://placekitten.com/1920/1080',
    // Add more URLs here
];
  
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const backgroundImageUrl = `url('${backgrounds[randomIndex]}')`;
    document.getElementById('background').style.backgroundImage = backgroundImageUrl;
}

setRandomBackground();
  