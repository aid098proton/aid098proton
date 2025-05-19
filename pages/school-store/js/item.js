// 상품 데이터
const storeItems = [
    {
        id: 1,
        category: "chocolate",
        image: "imgs/store002.webp",
        items: [
            { name: "하리보, 트롤리", price: 2200 },
            { name: "크런키", price: 1500 },
            { name: "가나 초코바", price: 1500 },
            { name: "가나 마일드", price: 1500 },
            { name: "자유시간", price: 1500 },
            { name: "자유시간 쿠키앤크림", price: 1500 }
        ]
    },
    {
        id: 2,
        category: "chocolate",
        image: "imgs/store003.webp",
        items: [
            { name: "하리보, 트롤리", price: 2200 },
            { name: "숏다리", price: 2200 },
            { name: "목캔디(믹스베리)", price: 1300 },
            { name: "목캔디(허브민트)", price: 1300 },
            { name: "왓따! 청포도", price: 1000 },
            { name: "왓따! 복숭아", price: 1000 },
            { name: "후라보노", price: 1000 },
            { name: "자일리톨", price: 1200 },
            { name: "프링글스", price: 3000 }
        ]
    },
    {
        id: 3,
        category: "chocolate",
        image: "imgs/store004.webp",
        items: [
            { name: "크런키 쿠키 앤 크림", price: 1500 },
            { name: "크런키", price: 1500 },
            { name: "빼빼로", price: 1900 },
            { name: "고래밥", price: 1200 }
        ]
    },
    {
        id: 4,
        category: "snack",
        image: "imgs/store005.webp",
        items: [
            { name: "아몬드 초코볼", price: 1900 },
            { name: "핫브레이크", price: 1500 },
            { name: "단백질 바", price: 1500 },
            { name: "닥터유 에너지 바", price: 1500 }
        ]
    },
    {
        id: 5,
        category: "chocolate",
        image: "imgs/store006.webp",
        items: [
            { name: "스키틀즈", price: 1500 },
            { name: "몰티저스 밀크", price: 1500 },
            { name: "해태 초코픽", price: 2100 },
            { name: "다이제 초코", price: 2500 },
            { name: "다이제 통밀", price: 2000 }
        ]
    },
    {
        id: 6,
        category: "snack",
        image: "imgs/store007.webp",
        items: [
            { name: "다이제 씬", price: 1500 },
            { name: "화이트하임", price: 1600 },
            { name: "쿠쿠다스", price: 1600 },
            { name: "칸초", price: 1600 }
        ]
    },
    {
        id: 7,
        category: "snack",
        image: "imgs/store008.webp",
        items: [
            { name: "칙촉", price: 2500 },
            { name: "초코칩 쿠키", price: 1800 },
            { name: "오레오", price: 2000 }
        ]
    },
    {
        id: 8,
        category: "snack",
        image: "imgs/store009.webp",
        items: [
            { name: "아이셔", price: 1400 },
            { name: "마이쮸", price: 1200 },
            { name: "밀크카라멜", price: 1200 },
            { name: "연양갱", price: 1300 },
            { name: "피넛칩", price: 1800 }
        ]
    },
    {
        id: 9,
        category: "snack",
        image: "imgs/store010.webp",
        items: [
            { name: "오징어 버터구이", price: 1700 },
            { name: "쫄병스낵", price: 1400 }
        ]
    },
    {
        id: 10,
        category: "snack",
        image: "imgs/store011.webp",
        items: [
            { name: "치토스 바베큐맛", price: 1800 },
            { name: "치토스 매운맛", price: 1800 }
        ]
    },
    {
        id: 11,
        category: "snack",
        image: "imgs/store012.webp",
        items: [
            { name: "양파링", price: 1900 },
            { name: "알새우칩", price: 1800 }
        ]
    },
    {
        id: 12,
        category: "snack",
        image: "imgs/store013.webp",
        items: [
            { name: "콘치 크림치즈맛", price: 1600 },
            { name: "카라멜 메이플콘", price: 1600 },
            { name: "새우깡", price: 1500 }
        ]
    },
    {
        id: 13,
        category: "snack",
        image: "imgs/store014.webp",
        items: [
            { name: "야채타임", price: 1700 },
            { name: "도리토스 나쵸치즈", price: 1800 },
            { name: "콘초", price: 1600 }
        ]
    },
    {
        id: 14,
        category: "snack",
        image: "imgs/store015.webp",
        items: [
            { name: "허니버터칩", price: 1800 },
            { name: "군옥수수꼬깔콘", price: 1800 },
            { name: "못말리는 신짱", price: 1600 }
        ]
    },
    {
        id: 15,
        category: "snack",
        image: "imgs/store016.webp",
        items: [
            { name: "포카칩", price: 1800 },
            { name: "맛동산", price: 2100 },
            { name: "꽃게랑 불짬뽕", price: 1700 }
        ]
    },
    {
        id: 16,
        category: "snack",
        image: "imgs/store017.webp",
        items: [
            { name: "오감자", price: 2400 },
            { name: "벌집핏자", price: 1800 },
            { name: "콘칩", price: 1600 }
        ]
    },
    {
        id: 17,
        category: "snack",
        image: "imgs/store018.webp",
        items: [
            { name: "터보라이터", price: 1300 },
            { name: "과트로 치즈", price: 1600 },
            { name: "천하장사 소세지", price: 1300 }
        ]
    },
    {
        id: 18,
        category: "icecream",
        image: "imgs/store019.webp",
        items: [
            { name: "옥수수, 와일드바디, 죠스, 옥동자, 스크류, 쌍쌍, 비비빅, 보석바, 바밤바, 돼지바, 샤인머스캣 청포도, 복숭아, 망고, 누가바", price: 1200 },
            { name: "왕포도알, 탱크보이, 더위사냥, 빠삐코", price: 1500 },
            { name: "빵빠레, 구구콘, 월드콘, 부라보콘, 슈퍼콘", price: 1900 },
            { name: "빵빠레 샌드, 와, 설레임, 군고구마, 국화빵, 붕어싸만코, 찰떡아이스", price: 2000 },
            { name: "바종류", price: 1200 },
            { name: "콘종류", price: 1900 }
        ]
    },
    {
        id: 19,
        category: "icecream",
        image: "imgs/store020.webp",
        items: [{ name: "준비 중", price: 0 }]
    },
    {
        id: 20,
        category: "icecream",
        image: "imgs/store021.webp",
        items: [{ name: "준비 중", price: 0 }]
    },
    {
        id: 21,
        category: "icecream",
        image: "imgs/store022.webp",
        items: [{ name: "준비 중", price: 0 }]
    },
    {
        id: 22,
        category: "ramen",
        image: "imgs/store023.webp",
        items: [
            { name: "짜파구리", price: 1900 },
            { name: "짜파게티 큰사발", price: 1600 },
            { name: "튀김우동 큰사발", price: 1900 }
        ]
    },
    {
        id: 23,
        category: "ramen",
        image: "imgs/store024.webp",
        items: [
            { name: "불닭볶음면", price: 1800 },
            { name: "삼양컵라면", price: 1500 },
            { name: "신라면투움바", price: 1900 }
        ]
    },
    {
        id: 24,
        category: "ramen",
        image: "imgs/store025.webp",
        items: [
            { name: "진짬뽕", price: 2000 },
            { name: "신라면 큰사발", price: 1600 },
            { name: "무파마", price: 1800 }
        ]
    },
    {
        id: 25,
        category: "ramen",
        image: "imgs/store026.webp",
        items: [
            { name: "간짬뽕", price: 1700 },
            { name: "너구리", price: 1800 },
            { name: "참깨라면", price: 1800 }
        ]
    },
    {
        id: 26,
        category: "ramen",
        image: "imgs/store027.webp",
        items: [
            { name: "육계장", price: 1300 },
            { name: "새우탕", price: 1600 },
            { name: "사리곰탕", price: 1600 }
        ]
    },
    {
        id: 27,
        category: "ramen",
        image: "imgs/store028.webp",
        items: [
            { name: "볶음진짬뽕", price: 2000 },
            { name: "진라면 매운앗", price: 1500 },
            { name: "진라면 순한맛", price: 1500 }
        ]
    },
    {
        id: 28,
        category: "ramen",
        image: "imgs/store029.webp",
        items: [
            { name: "김치 왕뚜껑", price: 1600 },
            { name: "짬뽕 왕뚜껑", price: 1600 }
        ]
    },
    {
        id: 29,
        category: "ramen",
        image: "imgs/store030.webp",
        items: [{ name: "왕뚜껑", price: 1600 }]
    },
    {
        id: 30,
        category: "bread",
        image: "imgs/store031.webp",
        items: [
            { name: "빵종류", price: 1700 },
            { name: "초코소라빵", price: 2000 }
        ]
    },
    {
        id: 31,
        category: "bread",
        image: "imgs/store032.webp",
        items: [
            { name: "빵종류", price: 3600 },
            { name: "촉촉카스테라", price: 6000 }
        ]
    },
    {
        id: 32,
        category: "ramen",
        image: "imgs/store033.webp",
        items: [
            { name: "치즈불닭볶음면", price: 1900 },
            { name: "까르보불닭볶음면", price: 1800 },
            { name: "라면볶이", price: 1800 }
        ]
    },
    {
        id: 33,
        category: "ramen",
        image: "imgs/store034.webp",
        items: [
            { name: "치즈볶이", price: 1800 },
            { name: "스파게티", price: 1800 },
            { name: "스낵면", price: 1700 }
        ]
    },
    {
        id: 34,
        category: "ramen",
        image: "imgs/store035.webp",
        items: [{ name: "김치맛 쌀국수", price: 1700 }]
    },
    {
        id: 35,
        category: "ramen",
        image: "imgs/store036.webp",
        items: [
            { name: "얼큰한 쌀국수", price: 1700 },
            { name: "멸치맛 쌀국수", price: 1700 }
        ]
    },
    {
        id: 36,
        category: "drink",
        image: "imgs/store037.webp",
        items: [
            { name: "블랙 아메리카노", price: 1700 },
            { name: "헤이즐넛 아메리카노", price: 1700 }
        ]
    },
    {
        id: 37,
        category: "others",
        image: "imgs/store038.webp",
        items: [{ name: "물티슈", price: 1700 }]
    },
    {
        id: 38,
        category: "others",
        image: "imgs/store039.webp",
        items: [{ name: "준비 중", price: 0 }]
    },
    {
        id: 39,
        category: "drink",
        image: "imgs/store040.webp",
        items: [
            { name: "칠성사이다355ml", price: 1700 },
            { name: "밀키스340ml", price: 1600 },
            { name: "펩시콜라355ml", price: 1600 },
            { name: "마운틴듀355ml", price: 1700 }
        ]
    },
    {
        id: 40,
        category: "drink",
        image: "imgs/store041.webp",
        items: [
            { name: "더킹355ml", price: 2200 },
            { name: "더킹500ml", price: 2800 },
            { name: "칸타타 frown275ml", price: 2400 }
        ]
    },
    {
        id: 41,
        category: "drink",
        image: "imgs/store042.webp",
        items: [
            { name: "칠성사이다500ml", price: 2200 },
            { name: "펩시500ml", price: 2200 },
            { name: "트레비500ml", price: 1700 },
            { name: "탐스355ml", price: 1600 }
        ]
    },
    {
        id: 42,
        category: "drink",
        image: "imgs/store043.webp",
        items: [
            { name: "아이시스500ml", price: 1000 },
            { name: "밀키스500ml", price: 2000 },
            { name: "립튼복숭아500ml", price: 2000 },
            { name: "2프로500ml", price: 2000 },
            { name: "레몬워터500ml", price: 2000 },
            { name: "콘드라베이스500ml", price: 2700 },
            { name: "레스비500ml", price: 2500 }
        ]
    },
    {
        id: 43,
        category: "drink",
        image: "imgs/store044.webp",
        items: [
            { name: "칠성사이다1.5L", price: 4000 },
            { name: "펩시1.5L", price: 3900 },
            { name: "밀키스1.5L", price: 3900 }
        ]
    },
    {
        id: 44,
        category: "drink",
        image: "imgs/store046.webp",
        items: [
            { name: "코카콜라250ml", price: 1600 },
            { name: "몬스터500ml", price: 3000 }
        ]
    },
    {
        id: 45,
        category: "drink",
        image: "imgs/store047.webp",
        items: [{ name: "몬스터355ml", price: 2300 }]
    },
    {
        id: 46,
        category: "drink",
        image: "imgs/store048.webp",
        items: [
            { name: "코카콜라500ml", price: 2300 },
            { name: "파워에이드500ml", price: 2200 }
        ]
    },
    {
        id: 47,
        category: "drink",
        image: "imgs/store049.webp",
        items: [
            { name: "스프라이트500ml", price: 2200 },
            { name: "암바사500ml", price: 2000 },
            { name: "환타600ml", price: 2200 }
        ]
    },
    {
        id: 48,
        category: "drink",
        image: "imgs/store050.webp",
        items: [
            { name: "코카콜라1.5L", price: 4200 },
            { name: "스프라이트1.5L", price: 3700 }
        ]
    },
    {
        id: 49,
        category: "drink",
        image: "imgs/store052.webp",
        items: [
            { name: "조지아470ml", price: 2700 },
            { name: "조지아240ml", price: 1400 },
            { name: "레쓰비175ml", price: 1200 }
        ]
    },
    {
        id: 50,
        category: "drink",
        image: "imgs/store053.webp",
        items: [
            { name: "환타350ml", price: 1700 },
            { name: "오라떼240ml", price: 1400 },
            { name: "컨피던스캔", price: 1500 }
        ]
    },
    {
        id: 51,
        category: "drink",
        image: "imgs/store054.webp",
        items: [
            { name: "코카콜라350ml", price: 1900 },
            { name: "파워에이드340ml", price: 1700 },
            { name: "토레타340ml", price: 1600 },
            { name: "스프라이트350ml", price: 1700 },
            { name: "닥터페퍼355ml", price: 1700 }
        ]
    },
    {
        id: 52,
        category: "drink",
        image: "imgs/store055.webp",
        items: [
            { name: "미닛메이드350ml", price: 2100 },
            { name: "태양마테차500ml", price: 1700 },
            { name: "토레타500ml", price: 2000 }
        ]
    },
    {
        id: 53,
        category: "drink",
        image: "imgs/store057.webp",
        items: [
            { name: "파워에이드1.5L", price: 4200 },
            { name: "토레타1.5L", price: 3900 },
            { name: "환타1.5L", price: 3900 },
            { name: "컨피던스병", price: 1700 }
        ]
    },
    {
        id: 54,
        category: "drink",
        image: "imgs/store059.webp",
        items: [
            { name: "바카스F", price: 1100 },
            { name: "오로나민C", price: 1200 },
            { name: "구론산", price: 1300 },
            { name: "나랑드사이다제로", price: 1400 }
        ]
    },
    {
        id: 55,
        category: "drink",
        image: "imgs/store060.webp",
        items: [
            { name: "포카리스웨트250ml", price: 1600 },
            { name: "데미소다250ml", price: 1400 },
            { name: "오란씨250ml", price: 1400 }
        ]
    },
    {
        id: 56,
        category: "drink",
        image: "imgs/store062.webp",
        items: [
            { name: "포카리스웨트500ml", price: 2400 },
            { name: "이온워터500ml", price: 2400 },
            { name: "오란씨파인500ml", price: 2000 },
            { name: "나랑드사이다500ml", price: 2000 }
        ]
    },
    {
        id: 57,
        category: "drink",
        image: "imgs/store063.webp",
        items: [
            { name: "옥수수 수염차", price: 1800 },
            { name: "황금보리", price: 1800 },
            { name: "아침헛개", price: 1800 },
            { name: "게토레이", price: 2200 },
            { name: "갈아만든 배", price: 2000 },
            { name: "아침에 사과", price: 2000 },
            { name: "마신다", price: 1000 }
        ]
    },
    {
        id: 58,
        category: "drink",
        image: "imgs/store064.webp",
        items: [
            { name: "포카리1.5L", price: 4200 },
            { name: "나랑드사이다1.5L", price: 3700 },
            { name: "오란씨1.5L", price: 3600 },
            { name: "마신다2L", price: 1500 }
        ]
    },
    {
        id: 59,
        category: "drink",
        image: "imgs/store066.webp",
        items: [
            { name: "스타벅스 모카", price: 3500 },
            { name: "스페셜티", price: 3000 }
        ]
    },
    {
        id: 60,
        category: "drink",
        image: "imgs/store067.webp",
        items: [
            { name: "준비 중", price: 0 }
        ]
    },
    {
        id: 61,
        category: "drink",
        image: "imgs/store068.webp",
        items: [
            { name: "쿨피스에이드", price: 1900 },
            { name: "감동란", price: 2400 }
        ]
    },
    {
        id: 62,
        category: "drink",
        image: "imgs/store069.webp",
        items: [
            { name: "더:단백20g", price: 3000 },
            { name: "테이크얼라이브", price: 1700 },
            { name: "아몬드브리지", price: 1500 },
            { name: "아몬드브리지 프로틴", price: 1600 }
        ]
    },
    {
        id: 63,
        category: "drink",
        image: "imgs/store071.webp",
        items: [
            { name: "연세두유", price: 1200 },
            { name: "빙그레 딸기타임", price: 1200 },
            { name: "빙그레 초코타임", price: 1200 },
            { name: "서울우유200ml", price: 1200 },
            { name: "바나나우유240g", price: 1800 }
        ]
    },
    {
        id: 64,
        category: "others",
        image: "imgs/store073.webp",
        items: [
            { name: "새콤치즈 핫도그", price: 2700 },
            { name: "새우야", price: 2700 },
            { name: "바삭바삭 치킨립", price: 2700 }
        ]
    },
    {
        id: 65,
        category: "others",
        image: "imgs/store074.webp",
        items: [
            { name: "새우버거", price: 3000 },
            { name: "더블디럭스버거", price: 3200 },
            { name: "우다치버거", price: 3200 },
            { name: "치즈벅", price: 2700 },
            { name: "치킨버거", price: 3200 }
        ]
    },
    {
        id: 66,
        category: "others",
        image: "imgs/store077.webp",
        items: [
            { name: "누텔라초코", price: 2400 }
        ]
    },
    {
        id: 67,
        category: "others",
        image: "imgs/store078.webp",
        items: [
            { name: "준비 중", price: 0 }
        ]
    },
    {
        id: 68,
        category: "others",
        image: "imgs/store079.webp",
        items: [
            { name: "어묵떡뽁이", price: 4300 },
            { name: "가쓰오우동", price: 4000 },
            { name: "라면쏘옥치즈", price: 1500 },
            { name: "닭가슴살통살구이", price: 4000 },
            { name: "닭가슴살스테이크", price: 4000 }
        ]
    }
];

// 카테고리 한글 매핑
const categoryNames = {
    snack: "과자/스낵",
    chocolate: "초콜릿/사탕",
    ramen: "라면/컵라면",
    drink: "음료/생수",
    bread: "빵/베이커리",
    icecream: "아이스크림",
    others: "기타"
};