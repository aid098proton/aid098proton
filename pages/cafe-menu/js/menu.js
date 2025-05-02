// 가격을 3,000원 형식으로 표시하는 함수 추가
function formatPrice(price) {
    return price.toLocaleString() + '원';
}

const menuData = [
    {
        category: "COFFEE",
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
            { name: "허니미숫가루", priceHot: 3200, priceIce: 3500, soldOut: false },
            { name: "우유", priceIce: 2200 }
        ]
    },
    {
        category: "ADD",
        items: [
            { name: "샷 추가", priceIce: 500 },
            { name: "휘핑 추가", priceIce: 500 }
        ]
    },
    {
        category: "SMOOTHIE / HEALTHY",
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
            { name: "오렌지주스", price: 3800, soldOut: false },
            { name: "딸기 + 바나나 주스", price: 4000 },
            { name: "블루베리 + 바나나 주스", price: 4000 },
            { name: "복숭아 아이스티", price: 2800 }
        ]
    },
    {
        category: "TEA",
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
        items: [
            { name: "초코칩머핀", price: 2500 },
            { name: "블루베리머핀", price: 2500 }
        ]
    }
];

// 메뉴 리스트 렌더링
const menuList = document.getElementById('menu-list');

menuData.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('menu-category');

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.category;
    categoryElement.appendChild(categoryTitle);

    category.items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemElement.appendChild(itemName);

        let priceText = '';
        if (item.price) {
            priceText = `가격: ${formatPrice(item.price)}`;
        } else if (item.priceHot && item.priceIce) {
            priceText = `HOT ${formatPrice(item.priceHot)} | ICE ${formatPrice(item.priceIce)}`;
        }

        if (item.soldOut) {
            priceText += ' (품절)';
        }

        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = priceText;
        itemElement.appendChild(itemPrice);

        categoryElement.appendChild(itemElement);
    });

    menuList.appendChild(categoryElement);
});
