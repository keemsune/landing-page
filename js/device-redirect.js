// 모바일 디바이스 감지 및 리다이렉트 처리
function detectMobileAndRedirect() {
    // 모바일 디바이스 체크를 위한 정규식
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    
    // 모바일이 아니면 리턴
    if (!mobileRegex.test(navigator.userAgent)) {
        return;
    }

    // 현재 URL 가져오기
    const currentURL = new URL(window.location.href);
    
    // 이미 모바일 페이지면 리턴
    if (currentURL.pathname.endsWith('m.index.html')) {
        return;
    }

    // GitHub Pages인 경우와 로컬 환경 구분
    const isGitHubPages = window.location.hostname === 'keemsune.github.io';
    let mobilePath;

    if (isGitHubPages) {
        // GitHub Pages 경로 처리
        mobilePath = '/landing-page/m.index.html';
    } else {
        // 로컬 환경 경로 처리
        const baseDir = currentURL.pathname.substring(0, currentURL.pathname.lastIndexOf('/') + 1);
        mobilePath = baseDir + 'm.index.html';
    }

    // search와 hash 파라미터 유지
    const fullPath = mobilePath + currentURL.search + currentURL.hash;

    // 모바일 페이지로 리다이렉트
    window.location.href = fullPath;
}

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', detectMobileAndRedirect); 