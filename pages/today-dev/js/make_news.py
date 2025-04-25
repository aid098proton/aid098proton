import requests
import json
from datetime import datetime

# // 실제 개발에서는 아래 클라이언트 ID와 클라이언트 Secret을 사용하지 않습니다. 
# // 네이버 개발자 센터에서 발급받은 ID와 Secret을 사용해야 합니다.
# // 주의: 클라이언트 ID와 Secret은 1~4주 간격으로 주기적으로 변경해야 합니다.
# // API 키가 유출되지 않도록 관리에 유의하고, 변경 시 코드에 반영하는 것을 잊지 마세요.

# ✅ 네이버 API 정보
client_id = "Qn7GYYC_k7IbzNHPk1UE"  # 네이버 클라이언트 ID
client_secret = "8cjTKYhRYn"  # 네이버 클라이언트 Secret
query = "개발"
display = 7

# ✅ 요청 URL
url = f"https://openapi.naver.com/v1/search/news.json?query={query}&display={display}&sort=date"

headers = {
    "X-Naver-Client-Id": client_id,
    "X-Naver-Client-Secret": client_secret,
}

# ✅ API 요청
response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    
    # ✅ 파일 이름: 오늘 날짜 기준
    today = datetime.now().strftime("%Y%m%d")
    filename = f"2025/202504/{today}_news.json"

    # ✅ 디렉터리 먼저 만들기
    import os
    os.makedirs(os.path.dirname(filename), exist_ok=True)

    # ✅ JSON 저장
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"뉴스 저장 완료: {filename}")
else:
    print("API 요청 실패:", response.status_code, response.text)