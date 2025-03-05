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

    // index.html이나 / 로 끝나는 경우에만 리다이렉션
    if (!currentURL.pathname.endsWith('index.html') && !currentURL.pathname.endsWith('/')) {
        return;
    }

    // GitHub Pages의 경우 baseURL 처리
    const baseURL = currentURL.pathname.substring(0, currentURL.pathname.lastIndexOf('/') + 1);
    
    // 리다이렉트 쿠키 설정 (1시간 유효)
    const date = new Date();
    date.setTime(date.getTime() + (60 * 60 * 1000));
    document.cookie = "redirected=true; expires=" + date.toUTCString() + "; path=/";

    // 모바일 페이지로 리다이렉트
    window.location.href = baseURL + 'm.index.html';
}

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', detectMobileAndRedirect); 