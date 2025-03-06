// 환경에 따른 기본 경로 설정
const isGitHubPages = window.location.hostname === 'keemsune.github.io';
const BASE_URL = isGitHubPages ? '/landing-page' : '';

// CSS 변수로 설정
document.documentElement.style.setProperty('--base-url', BASE_URL);

// 전역 변수로 내보내기
window.BASE_URL = BASE_URL;

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // base 태그 처리
    const baseTag = document.querySelector('base');
    if (baseTag) {
        if (!isGitHubPages) {
            baseTag.remove();
        }
    }

    // 리소스 경로 업데이트 함수
    const updateResourcePaths = () => {
        // CSS와 JS 파일 경로 업데이트
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
        const scripts = document.querySelectorAll('script[src]');
        
        if (isGitHubPages) {
            cssLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith(BASE_URL)) {
                    link.href = `${BASE_URL}/${href}`;
                }
            });
            
            scripts.forEach(script => {
                const src = script.getAttribute('src');
                if (src && !src.startsWith(BASE_URL)) {
                    script.src = `${BASE_URL}/${src}`;
                }
            });
        }
    };

    // 배경 이미지 업데이트
    const updateBackgroundImages = () => {
        const section1 = document.querySelector('.section1-bg');
        const section2 = document.querySelector('.section2-bg');
        const section3 = document.querySelector('.section3-bg');

        if (isGitHubPages) {
            const bgPath = `${BASE_URL}/images/mobile/`;
            
            if (section1) {
                section1.style.backgroundImage = `url('${bgPath}m-section1-bg.png')`;
            }
            if (section2) {
                section2.style.backgroundImage = `url('${bgPath}m-section2-bg.png')`;
            }
            if (section3) {
                section3.style.backgroundImage = `url('${bgPath}m-section3-bg.png')`;
            }
        } else {
            const bgPath = 'images/mobile/';
            
            if (section1) {
                section1.style.backgroundImage = `url('${bgPath}m-section1-bg.png')`;
            }
            if (section2) {
                section2.style.backgroundImage = `url('${bgPath}m-section2-bg.png')`;
            }
            if (section3) {
                section3.style.backgroundImage = `url('${bgPath}m-section3-bg.png')`;
            }
        }
    };

    // 이미지 src 경로 업데이트
    const updateImageSources = () => {
        if (isGitHubPages) {
            const images = document.querySelectorAll('img[src]');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src && !src.startsWith(BASE_URL)) {
                    img.src = `${BASE_URL}/${src}`;
                }
            });
        }
    };

    // 모든 업데이트 함수 실행
    updateResourcePaths();
    updateBackgroundImages();
    updateImageSources();
}); 