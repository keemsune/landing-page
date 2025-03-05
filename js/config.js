// 환경에 따른 기본 경로 설정
const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? ''
    : '/landing-page';

// CSS 변수로 설정
document.documentElement.style.setProperty('--base-url', BASE_URL);

// 전역 변수로 내보내기
window.BASE_URL = BASE_URL;

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 배경 이미지 경로 업데이트
    const updateBackgroundImages = () => {
        const section1 = document.querySelector('.section1-bg');
        const section2 = document.querySelector('.section2-bg');
        const section3 = document.querySelector('.section3-bg');

        if (section1) {
            section1.style.backgroundImage = `url('${BASE_URL}/images/mobile/m-section1-bg.png')`;
        }
        if (section2) {
            section2.style.backgroundImage = `url('${BASE_URL}/images/mobile/m-section2-bg.png')`;
        }
        if (section3) {
            section3.style.backgroundImage = `url('${BASE_URL}/images/mobile/m-section3-bg.png')`;
        }
    };

    // 이미지 src 경로 업데이트
    const updateImageSources = () => {
        const images = document.querySelectorAll('img[src*="/images/"]');
        images.forEach(img => {
            const originalSrc = img.getAttribute('src');
            img.src = `${BASE_URL}${originalSrc}`;
        });
    };

    updateBackgroundImages();
    updateImageSources();
}); 