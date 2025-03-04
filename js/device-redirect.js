// 모바일 디바이스 감지 및 리다이렉트 처리
function detectMobileAndRedirect() {
    // 모바일 디바이스 체크를 위한 정규식
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    
    // 현재 페이지가 모바일 페이지가 아니고, 모바일 디바이스로 접속한 경우
    if (mobileRegex.test(navigator.userAgent) && !window.location.pathname.includes('m.index.html')) {
        // 현재 URL을 기반으로 모바일 페이지 URL 생성
        const currentPath = window.location.pathname;
        const mobilePath = currentPath.replace('index.html', 'm.index.html');
        
        // 모바일 페이지로 리다이렉트
        window.location.href = mobilePath;
    }
}

// 페이지 로드 시 실행
window.addEventListener('load', detectMobileAndRedirect); 