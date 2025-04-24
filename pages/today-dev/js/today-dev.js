// 실제 개발에서는 아래 클라이언트 ID와 클라이언트 Secret을 사용하지 않습니다. 
// 네이버 개발자 센터에서 발급받은 ID와 Secret을 사용해야 합니다.
// 주의: 클라이언트 ID와 Secret은 1~4주 간격으로 주기적으로 변경해야 합니다.
// API 키가 유출되지 않도록 관리에 유의하고, 변경 시 코드에 반영하는 것을 잊지 마세요.
const clientId = 'Qn7GYYC_k7IbzNHPk1UE';  // 네이버 클라이언트 ID
const clientSecret = '8cjTKYhRYn';  // 네이버 클라이언트 Secret

// 네이버 API를 통해 개발 책 정보를 가져오는 함수
async function fetchBooks() {
    const url = `https://openapi.naver.com/v1/search/book.json?query=개발&display=5`; // '개발'로 검색
    const response = await fetch(url, {
        headers: {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret
        }
    });
    const data = await response.json();
    return data.items;
}

// 네이버 API를 통해 개발 관련 뉴스 정보를 가져오는 함수
async function fetchNews() {
    const url = `https://openapi.naver.com/v1/search/news.json?query=개발&display=5`; // '개발'로 검색
    const response = await fetch(url, {
        headers: {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret
        }
    });
    const data = await response.json();
    return data.items;
}

// 콘텐츠를 새로고침하는 함수
async function getContent() {
    const books = await fetchBooks();
    const news = await fetchNews();

    // 책 정보 표시
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>저자: ${book.author}</p>
            <p>출판사: ${book.publisher}</p>
            <p><a href="${book.link}" target="_blank">자세히 보기</a></p>
        `;
        booksDiv.appendChild(bookDiv);
    });

    // 뉴스 정보 표시
    const newsDiv = document.getElementById('news');
    newsDiv.innerHTML = '';
    news.forEach(article => {
        const newsDivElement = document.createElement('div');
        newsDivElement.classList.add('news');
        newsDivElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <p><a href="${article.link}" target="_blank">자세히 보기</a></p>
        `;
        newsDiv.appendChild(newsDivElement);
    });
}

// 페이지 로드 시 콘텐츠 로드
window.onload = getContent;
