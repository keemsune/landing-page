// 환경에 따른 기본 경로 설정
const BASE_URL = window.location.hostname === 'keemsune.github.io' ? '/landing-page' : '';

// CSS 변수로 설정
document.documentElement.style.setProperty('--base-url', BASE_URL);

// 전역 변수로 내보내기
window.BASE_URL = BASE_URL;

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 현재 환경이 GitHub Pages인 경우 리소스 경로 업데이트
    if (window.location.hostname === 'keemsune.github.io') {
        // CSS와 JS 파일 경로 업데이트
        const cssLink = document.querySelector('link[href^="css/"]');
        const scripts = document.querySelectorAll('script[src^="js/"]');
        
        if (cssLink) {
            cssLink.href = `${BASE_URL}/${cssLink.getAttribute('href')}`;
        }
        
        scripts.forEach(script => {
            script.src = `${BASE_URL}/${script.getAttribute('src')}`;
        });

        // 이미지 src 경로 업데이트
        const images = document.querySelectorAll('img[src^="images/"]');
        images.forEach(img => {
            img.src = `${BASE_URL}/${img.getAttribute('src')}`;
        });
    }

    // 배경 이미지 경로 업데이트
    const updateBackgroundImages = () => {
        const section1 = document.querySelector('.section1-bg');
        const section2 = document.querySelector('.section2-bg');
        const section3 = document.querySelector('.section3-bg');

        const bgPath = window.location.hostname === 'keemsune.github.io' ? `${BASE_URL}/images/mobile/` : 'images/mobile/';

        if (section1) {
            section1.style.backgroundImage = `url('${bgPath}m-section1-bg.png')`;
        }
        if (section2) {
            section2.style.backgroundImage = `url('${bgPath}m-section2-bg.png')`;
        }
        if (section3) {
            section3.style.backgroundImage = `url('${bgPath}m-section3-bg.png')`;
        }
    };

    updateBackgroundImages();
}); 