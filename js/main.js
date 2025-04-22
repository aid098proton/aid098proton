const quotes = [
    "코딩은 생각을 현실로 만드는 마법이다.",
    "작은 코드라도 큰 변화를 만들 수 있다.",
    "배움에는 끝이 없다.",
    "실패는 성공의 어머니다.",
    "오늘의 작은 노력이 내일의 큰 성공이 된다."
];

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').textContent = quotes[randomIndex];
}

// 페이지 로드 시 첫 번째 명언 표시
document.addEventListener('DOMContentLoaded', showQuote); 