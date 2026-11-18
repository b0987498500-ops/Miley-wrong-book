v475_entry = """## [v4.75] - 2026-11-18 (自動收錄國中地理 112 會考美國眾議院席次人口稀少成因 Q485 與美國主要大城工商業分佈考題組 Q486～Q490：洛杉磯好萊塢、紐約華爾街、芝加哥農牧期貨、休士頓NASA、西雅圖微軟波音／高畫質純白地圖圖表／嚴格遵守社會科 50 字以內極簡解析／題庫總量達到 594 題！升級數據庫至 v477，快取升級 v4.45)
- **類型**：錯題自動收錄 / 國中社會（地理科、世界地理、美國人口與眾議院席次分配、美國主要都會區與產業聚落、極簡條列解析）
- **主要變更**：
  1. **完整收錄 112 會考美國人口與城市產業核心考題組（Q485～Q490，歸入 2026-11-16 最新週次）**：
     - **Q485** `q_soc_geo_usa_house_seats_sparse_states_112cap_485`（112會考美國各州眾議院席次）：
       - **題幹**：根據《美國憲法》，眾議院的435席議員席次是按照各州人口數分配... 影響美國各州人口多寡的因素眾多且不相同，觀察附圖中2020年眾議院席次僅有1席的州，下列何者與這些州人口少的原因較無關聯？〔112會考〕
       - **正解**：**(D) 深受殖民地式經濟影響**
       - **極簡解析（44 字）**：人口僅1席的州多因高緯寒冷、地形崎嶇或缺乏工業機會，與殖民地式經濟無關。選 (D)。
       - **圖表精緻處理**：`assets/questions/q_soc_geo_usa_house_seats_sparse_states_112cap_485.png`，保留 2000、2010、2020 三年席次變化比較地圖與圖例。
     - **Q486** `q_soc_geo_usa_city_los_angeles_hollywood_entertainment_486`（洛杉磯好萊塢）：
       - **題幹**：美國電視、電影等流行產業中心（好萊塢所在地）為圖中何處？
       - **正解**：**(B) 乙**（加州洛杉磯）
       - **極簡解析（35 字）**：乙為加州洛杉磯，陽光充足，為好萊塢電視與電影流行文化產業中心。選 (B)。
     - **Q487** `q_soc_geo_usa_city_new_york_wall_street_finance_487`（紐約華爾街）：
       - **題幹**：全球金融中心、華爾街所在地為圖中何處？
       - **正解**：**(D) 丁**（東大西洋岸紐約）
       - **極簡解析（39 字）**：丁為東大西洋岸紐約，擁有華爾街與證券交易所，為全球最大金融經濟中心。選 (D)。
     - **Q488** `q_soc_geo_usa_city_chicago_midwest_agriculture_trading_488`（芝加哥農牧交易）：
       - **題幹**：美國中西部農、牧產品交易中心與水陸交通樞紐為圖中何處？
       - **正解**：**(C) 丙**（五大湖畔芝加哥）
       - **極簡解析（40 字）**：丙為五大湖畔芝加哥，鄰近玉米帶與乳酪帶，為中西部農牧產品集散期貨中心。選 (C)。
     - **Q489** `q_soc_geo_usa_city_houston_nasa_aerospace_petrochemical_489`（休士頓NASA航太）：
       - **題幹**：美國 NASA 的研究中心，航太與石化工業發達為圖中何處？
       - **正解**：**(E) 戊**（德州墨西哥灣岸休士頓）
       - **極簡解析（37 字）**：戊為德州墨西哥灣岸休士頓，設有詹森太空中心，航太及石化工業鼎盛。選 (E)。
     - **Q490** `q_soc_geo_usa_city_seattle_microsoft_boeing_aerospace_it_490`（西雅圖微軟波音）：
       - **題幹**：航空與資訊工業鼎盛，微軟（Microsoft）與波音在此設總部或重要工廠為圖中何處？
       - **正解**：**(A) 甲**（西北部西雅圖）
       - **極簡解析（41 字）**：甲為西北部西雅圖，水源木材豐富且水電充沛，為波音航空與微軟資訊工業重鎮。選 (A)。
       - **圖表精緻處理**：Q486～Q490 共享 `assets/questions/q_soc_geo_usa_major_cities_distribution_map_486.png` 高清美國主要大城分佈圖。
  2. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v477`（`miley_wrong_questions_v477`），題庫總量達到 **594 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.45`，腳本版本標籤升級 `js/data.js?v=477`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.74]"
assert target in content, "Target ## [v4.74] not found in Checkpoints.md!"

new_content = content.replace(target, v475_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.75!")

