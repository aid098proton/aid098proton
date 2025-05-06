// 가격을 3,000원 형식으로 표시하는 함수
function formatPrice(price) {
    return price.toLocaleString() + '원';
}

// 메뉴 데이터와 카테고리 아이콘 추가
const menuData = [
    {
        category: "SET MENU",
        icon: "🍽️",
        items: [
            { name: "잉글리쉬머핀 + 아메리카노", price: 4700 },
            { name: "크로크무슈 + 아메리카노", price: 4800 },
            { name: "허니버터브레드 + 아메리카노", price: 5500 }
        ]
    },
    {
        category: "COFFEE",
        icon: "☕",
        items: [
            { name: "에스프레소", priceHot: 1500, priceIce: 1800 },
            { name: "아메리카노", priceHot: 1500, priceIce: 1800 },
            { name: "카페라떼", priceHot: 2500, priceIce: 2800 },
            { name: "카푸치노", priceHot: 2500, priceIce: 2800 },
            { name: "바닐라라떼", priceHot: 2800, priceIce: 3100 },
            { name: "헤이즐넛라떼", priceHot: 2800, priceIce: 3100 },
            { name: "카라멜마끼야또", priceHot: 3000, priceIce: 3300 },
            { name: "카페모카", priceHot: 3000, priceIce: 3300 },
            { name: "차밍라떼", priceHot: 3100, priceIce: 3400 },
            { name: "티라미수라떼", priceHot: 3200, priceIce: 3500 },
            { name: "초코라떼", priceHot: 3000, priceIce: 3300 },
            { name: "그린티라떼", priceHot: 3000, priceIce: 3300 },
            { name: "토피넛라떼", priceHot: 3000, priceIce: 3300 },
            { name: "로얄밀크티", priceHot: 3200, priceIce: 3500 },
            { name: "허니미숫가루", priceHot: 3200, priceIce: 3500, soldOut: true },
            { name: "우유", priceIce: 2200 }
        ]
    },
    {
        category: "ADD",
        icon: "➕",
        items: [
            { name: "샷 추가", priceIce: 500 },
            { name: "휘핑 추가", priceIce: 500 }
        ]
    },
    {
        category: "SMOOTHIE / HEALTHY",
        icon: "🥤",
        items: [
            { name: "에이드 - 레몬", price: 3500 },
            { name: "에이드 - 자몽", price: 3500 },
            { name: "에이드 - 청포도", price: 3500 },
            { name: "에이드 - 제주청귤", price: 3500 },
            { name: "딸기스무디", price: 3700 },
            { name: "블루베리스무디", price: 3700 },
            { name: "요거트스무디 - 플레인", price: 3800 },
            { name: "요거트스무디 - 딸기", price: 3800 },
            { name: "요거트스무디 - 블루베리", price: 3800 },
            { name: "오레오쉐이크", price: 4000 },
            { name: "딸기주스", price: 3800 },
            { name: "바나나주스", price: 3800 },
            { name: "오렌지주스", price: 3800, soldOut: true },
            { name: "딸기 + 바나나 주스", price: 4000 },
            { name: "블루베리 + 바나나 주스", price: 4000 },
            { name: "복숭아 아이스티", price: 2800 }
        ]
    },
    {
        category: "TEA",
        icon: "🍵",
        items: [
            { name: "레몬차", priceHot: 3300, priceIce: 3600 },
            { name: "유자차", priceHot: 3300, priceIce: 3600 },
            { name: "자몽차", priceHot: 3300, priceIce: 3600 },
            { name: "자몽유자차", priceHot: 3500, priceIce: 3800 },
            { name: "제주청귤차", priceHot: 3500, priceIce: 3800 },
            { name: "유기농녹차", priceHot: 2700, priceIce: 3000 },
            { name: "캐모마일", priceHot: 2700, priceIce: 3000 },
            { name: "루이보스", priceHot: 2700, priceIce: 3000 },
            { name: "페퍼민트", priceHot: 2700, priceIce: 3000 },
            { name: "자스민", priceHot: 2700, priceIce: 3000 }
        ]
    },
    {
        category: "SIDE",
        icon: "🥐",
        items: [
            { name: "초코칩머핀", price: 2500 },
            { name: "블루베리머핀", price: 2500 },
            { name: "크림치즈 베이글 - 플레인", price: 3000, soldOut: true },
            { name: "크림치즈 베이글 - 블루베리", price: 3000, soldOut: true },
            { name: "오리지널 핫도그", price: 3500, soldOut: true },
            { name: "잉글리쉬머핀 샌드위치", price: 3700 },
            { name: "크로크무슈 샌드위치", price: 3800 },
            { name: "허니버터 브레드", price: 4500 },
            { name: "수프림 쿠키", price: 1800 }
        ]
    },   
];

// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', function () {
    // 카테고리 네비게이션 생성
    createCategoryNavigation();

    // 메뉴 리스트 렌더링
    renderMenuList();

    // 스크롤 위치 조정 이벤트 등록
    setupScrollEvents();
});

// 카테고리 네비게이션 생성 함수
function createCategoryNavigation() {
    const main = document.querySelector('main');
    const operationHours = document.querySelector('.operation-hours');

    // 네비게이션 컨테이너 생성
    const navContainer = document.createElement('div');
    navContainer.classList.add('category-nav');

    // 각 카테고리에 대한 버튼 생성
    menuData.forEach((category, index) => {
        const button = document.createElement('button');
        button.textContent = `${category.icon} ${category.category}`;
        button.setAttribute('data-category', category.category);

        // 첫 번째 버튼에는 active 클래스 추가
        if (index === 0) {
            button.classList.add('active');
        }

        // 클릭 이벤트 등록
        button.addEventListener('click', function () {
            // 모든 버튼에서 active 클래스 제거
            document.querySelectorAll('.category-nav button').forEach(btn => {
                btn.classList.remove('active');
            });

            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');

            // 해당 카테고리로 스크롤
            const categoryId = `category-${this.getAttribute('data-category')}`;
            const categoryElement = document.getElementById(categoryId);

            if (categoryElement) {
                // 헤더 높이와 네비게이션 높이를 고려한 스크롤 위치 계산
                const headerHeight = document.querySelector('header').offsetHeight;
                const navHeight = navContainer.offsetHeight;
                const offset = categoryElement.offsetTop - headerHeight - navHeight - 10;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });

        navContainer.appendChild(button);
    });

    // 네비게이션을 operation-hours 다음에 삽입
    main.insertBefore(navContainer, operationHours.nextSibling);
}

// 메뉴 리스트 렌더링 함수
function renderMenuList() {
    const menuList = document.getElementById('menu-list');

    menuData.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('menu-category');
        categoryElement.id = `category-${category.category}`;

        const categoryTitle = document.createElement('h2');
        categoryTitle.innerHTML = `<span class="category-icon">${category.icon}</span>${category.category}`;
        categoryElement.appendChild(categoryTitle);

        category.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');

            // 품절 상품은 클래스 추가
            if (item.soldOut) {
                itemElement.classList.add('soldout');
            }

            // 메뉴 내용 컨테이너
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('menu-item-content');

            // 메뉴 이름
            const itemName = document.createElement('h3');
            let menuNameText = item.name;

            // 품절 배지 추가
            if (item.soldOut) {
                menuNameText += ' <span class="soldout-badge">품절</span>';
            }

            itemName.innerHTML = menuNameText;
            contentDiv.appendChild(itemName);

            // 가격 정보
            const priceInfo = document.createElement('div');
            priceInfo.classList.add('price-info');

            let priceHTML = '';

            if (item.price) {
                // 단일 가격
                priceHTML = `<span class="price-tag">${formatPrice(item.price)}</span>`;
            } else {
                // HOT/ICE 가격
                if (item.priceIce) {
                    priceHTML += `<span class="price-ice">ICE <span class="price-tag">${formatPrice(item.priceIce)}</span></span>`;
                }

                if (item.priceHot) {
                    priceHTML += `<span class="price-hot">HOT <span class="price-tag">${formatPrice(item.priceHot)}</span></span>`;
                }
            }

            priceInfo.innerHTML = priceHTML;
            contentDiv.appendChild(priceInfo);

            itemElement.appendChild(contentDiv);
            categoryElement.appendChild(itemElement);
        });

        menuList.appendChild(categoryElement);
    });
}

// 스크롤 이벤트 설정
function setupScrollEvents() {
    // 페이지 스크롤 시 현재 보이는 카테고리에 따라 네비게이션 활성화
    window.addEventListener('scroll', function () {
        const categories = document.querySelectorAll('.menu-category');
        const buttons = document.querySelectorAll('.category-nav button');
        const headerHeight = document.querySelector('header').offsetHeight;
        const navHeight = document.querySelector('.category-nav').offsetHeight;
        const scrollPosition = window.scrollY + headerHeight + navHeight + 50;

        let activeCategory = null;

        // 현재 화면에 보이는 카테고리 확인
        categories.forEach(category => {
            const categoryTop = category.offsetTop;
            const categoryBottom = categoryTop + category.offsetHeight;

            if (scrollPosition >= categoryTop && scrollPosition <= categoryBottom) {
                activeCategory = category.id.replace('category-', '');
            }
        });

        // 활성화된 카테고리가 있으면 해당 버튼에 active 클래스 추가
        if (activeCategory) {
            buttons.forEach(button => {
                const buttonCategory = button.getAttribute('data-category');

                if (buttonCategory === activeCategory) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
    });
}