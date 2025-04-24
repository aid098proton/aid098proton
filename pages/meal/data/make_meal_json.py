import re
import os
import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime

# 1. 초기 설정
# 식단 데이터를 저장할 디렉토리 생성
output_dir = "." 	# "pages/meal/data"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# 강서폴리텍 식단 페이지 URL과 요일 정보
url = "https://www.kopo.ac.kr/kangseo/content.do?menu=262"
weekdays = ["월요일", "화요일", "수요일", "목요일", "금요일"]

# 2. 웹 스크래핑
# 웹페이지에서 식단표 데이터 가져오기
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    response.encoding = "utf-8"
    soup = BeautifulSoup(response.text, "html.parser")
except Exception as e:
    print(f"❌ 웹사이트 요청 실패: {e}")
    exit()

# 식단 테이블 찾기
table = soup.select_one(".tbl_table")
if not table:
    print("❌ 식단 테이블을 찾을 수 없습니다.")
    exit()

# 3. 데이터 처리
rows = table.select("tbody tr")
print(f"총 {len(rows)}개의 행 발견")

# 요일별 메뉴 저장
weekly_meals = []
for idx, row in enumerate(rows):
    columns = row.select("td")
    if len(columns) < 3:  # 날짜, 조식, 중식 컬럼이 있어야 함
        continue

    # 날짜 및 요일 추출
    date_cell = columns[0].get_text(separator=" ").strip()
    
    # 날짜 형식(YYYY-MM-DD)과 요일 추출
    date_match = re.search(r"(\d{4}\-\d{2}\-\d{2})", str(columns[0].get_attribute_list))
    weekday_match = re.search(r"(월요일|화요일|수요일|목요일|금요일)", date_cell)

    if not weekday_match:
        continue

    # 날짜 형식 변환 (2025.04.14 → 25.04.14)
    date = date_match.group(1).replace("2025", "25")
    weekday = weekday_match.group(1)
    
    if weekday not in weekdays:
        continue

    # 중식 메뉴 추출 및 처리
    menu_span = columns[2].find("span")
    if not menu_span:
        continue
        
    menu_text = menu_span.get_text(strip=True)
    if not menu_text:
        continue

    # 알레르기 정보 제거
    if "알레르기유발:" in menu_text:
        menu_text = menu_text.split("알레르기유발:")[0]

    # 메뉴 텍스트 정제
    # 1. 공백 제거
    # 2. 괄호 내용 제거 (예: (돈육))
    # 3. 콤마로 구분하여 리스트로 변환
    menu_text = "".join(menu_text.split())
    menu_text = re.sub(r"\([^)]*\)", "", menu_text)
    dishes = [item.strip() for item in menu_text.split(",") if item.strip()]
    
    if not dishes:
        continue

    # 처리된 메뉴 정보 저장
    weekly_meals.append({
        "date": date,
        "day": weekday,
        "menu": dishes
    })

# 4. JSON 파일로 저장
try:
    output_file = os.path.join(output_dir, "meal.json")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(weekly_meals, f, ensure_ascii=False, indent=2)
    print("✅ meal.json 파일이 생성되었습니다!")
except Exception as e:
    print(f"❌ JSON 파일 저장 실패: {e}")