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
        const pathSegments = currentURL.pathname.split('/');
        const repoName = 'landing-page';  // GitHub 저장소 이름
        const repoIndex = pathSegments.indexOf(repoName);
        
        // 저장소 경로가 없으면 리턴
        if (repoIndex === -1) {
            return;
        }

        // 기본 경로나 index.html로 접근했을 때만 리다이렉트
        const lastSegment = pathSegments[pathSegments.length - 1];
        if (lastSegment !== '' && lastSegment !== 'index.html') {
            return;
        }

        // 모바일 페이지 경로 생성
        pathSegments[pathSegments.length - 1] = 'm.index.html';
        mobilePath = pathSegments.join('/');
    } else {
        // 로컬 환경 경로 처리
        mobilePath = currentURL.pathname === '/' || currentURL.pathname.endsWith('index.html') 
            ? 'm.index.html' 
            : currentURL.pathname.replace('index.html', 'm.index.html');
    }

    // 모바일 페이지로 리다이렉트
    window.location.href = mobilePath;
}

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', detectMobileAndRedirect); 