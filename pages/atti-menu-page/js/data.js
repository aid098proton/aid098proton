const data = {
    menu: [
        {
            category: "식빵 종류",
            items: [
                {
                    name: "쌀 식빵",
                    price: 4300,
                },
                {
                    name: "잡곡 식빵",
                    price: 5500,
                },
                {
                    name: "우유 식빵",
                    price: 4600,
                },
                {
                    name: "밤 식빵",
                    price: 6800,
                }
            ]
        },
        {
            category: "빵 종류",
            items: [
                {
                    name: "쑥 찐빵 (3개입)",
                    price: 3000,
                },
                {
                    name: "팥빵 (2개입)",
                    price: 3900,
                },
                {
                    name: "당뇨에 좋은빵",
                    price: 6000,
                }
            ]
        },
        {
            category: "카스테라 종류",
            items: [
                {
                    name: "옥수수 카스테라",
                    price: 6500,
                }
            ]
        },
        {
            category: "케이크 종류",
            items: [
                {
                    name: "미니 케이크",
                    price: 20000,
                },
                {
                    name: "생크림 케이크 2호",
                    price: 32000,
                },
                {
                    name: "초코 롤 케이크",
                    price: 20000,
                },
                {
                    name: "화이트 롤 케이크",
                    price: 18000,
                },
                {
                    name: "시몬 케이크",
                    price: 5500,
                },
                {
                    name: "초코 파운드 케이크",
                    price: 4800,
                }
            ]
        },

        {
            category: "팥빙수",
            items: [
                {
                    name: "아띠 팥빙수",
                    price: 10000,
                    origin: "팥(국내산), 우유(국내산)",
                    packagingExtra: 6000
                }
            ]
        },
        {
            category: "쿠키/스콘",
            items: [
                {
                    name: "초코칩 쿠키",
                    price: 2200,
                    origin: "밀가루(캐나다), 버터(국내산), 초코칩(벨기에)"
                },
                {
                    name: "크랜베리 스콘",
                    price: 2500,
                    origin: "밀가루(캐나다), 크랜베리(미국), 버터(국내산)"
                }
            ]
        }
    ],
    store: {
        address: "서울 양천구 신월로 300",
        phone: "02-2651-4094",
        direction: "신정네거리역 3번 출구 앞 사거리에서 우회전 후 100m 지점",
        hours: {
            weekdays: "08:00 - 20:00",
            weekend: "09:00 - 18:00",
            closed: "매주 월요일"
        }
    },
    gallery: [
        "images/storefront.jpg",
        "images/bingsu.jpg",
        "images/bread.jpg"
    ],
    events: [
        {
            title: "여름 한정 빙수 할인",
            description: "아띠 팥빙수 포장 시 1,000원 할인!",
            period: "2025년 6월 1일 ~ 2025년 8월 31일"
        },
        {
            title: "리뷰 이벤트",
            description: "리뷰 작성 시 쿠키 1개 증정",
            period: "상시 진행"
        }
    ]
};
