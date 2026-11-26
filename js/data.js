/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v541';

// Initial Seed Data - Multi-Subject Multi-Week Dataset for Miley
const INITIAL_SEED_DATA = [
  {
  "id": "q_soc_civ_local_government_officials_council_interpellation_110exam_566",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "公民／地方政府與中央政府職權／中央政務官／立法委員／法官／地方行政首長與局處長／110會考",
  "uploadDate": "2026-11-26",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：受「縣議員質詢」的機關必定為地方行政機關（如縣長、局處長）；甲（行政院閣員）、乙（法官）、丙（立委）皆為中央公職。",
  "stem": "某大學邀請四位名人蒞校演講，附表為此四場演講的錄音檔案片段。根據表中內容判斷，下列何者最可能曾任我國地方政府公職人員？【110年會考補考】\n\n| 演講者 | 演講內容 |\n| :---: | :--- |\n| **甲** | 在院長提請總統任命後，我正式接任此工作，準備面對挑戰……。 |\n| **乙** | 在許多案件中，握有審判權的我們也常常陷入兩難的局面……。 |\n| **丙** | 質詢經濟部部長的那次經驗，是我最難忘的回憶……。 |\n| **丁** | 我任職的機關遭到糾正，縣議員也多次對此提出質詢……。 |\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n◉ (D) 丁",
  "answer": "(D) 丁",
  "explanation": "丁任職機關受縣議員質詢，為地方行政機關（如縣府官員）。選 (D)。（甲：部會首長；乙：法官；丙：立委）",
  "solution": "丁任職機關受縣議員質詢，為地方行政機關（如縣府官員）。選 (D)。（甲：部會首長；乙：法官；丙：立委）",
  "diagramUrl": ""
},
  {
  "id": "q_soc_civ_grand_justices_constitutional_court_powers_110exam_565",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "公民／中央政府職權／司法院大法官與憲法法庭職權／總統副總統彈劾審理／110會考",
  "uploadDate": "2026-11-26",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：總統彈劾案由「立法院」提案通過後，移送「司法院大法官（憲法法庭）」審理；(C) 普通訴訟審判為普通法院法官職權。",
  "stem": "老師在課堂上進行猜謎遊戲，要同學從提示中猜出謎題所指的官員。根據提示內容判斷，下列何者屬於此官員的職權範圍？【110年會考補考】\n\n【猜謎提示】\n1. 我的產生方式是由總統提名，經立法院同意後任命。\n2. 我是憲法法庭的成員之一。\n3. 當對法律的適用產生疑義時，就是我發揮功能的時候了。\n\n○ (A) 代表國家偵查、追訴刑事犯罪\n○ (B) 提出憲法修正案及領土變更案\n○ (C) 在法庭上獨立審判各種訴訟案件\n◉ (D) 審理立法委員提出的總統彈劾案",
  "answer": "(D) 審理立法委員提出的總統彈劾案",
  "explanation": "提示官員為司法院大法官，組成憲法法庭審理總統彈劾案，故選 (D)。(A)檢察官；(B)立委；(C)法官。",
  "solution": "提示官員為司法院大法官，組成憲法法庭審理總統彈劾案，故選 (D)。(A)檢察官；(B)立委；(C)法官。",
  "diagramUrl": ""
},
  {
  "id": "q_soc_civ_impeachment_disciplinary_court_judicial_yuan_106exam_564",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "公民／中央政府職權／權力分立／監察院彈劾權與司法院懲戒法院職權／106會考",
  "uploadDate": "2026-11-26",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：監察院負責「彈劾」（提案移送），司法院「懲戒法院」負責「審理與判決懲戒」（公務員懲戒制度採不告不理）。",
  "stem": "大南：「當監察委員通過彈劾案件後，會交由我們審理，否則即使公務員涉及違法情事，我們也不能主動對當事人的行為進行審議。」根據大南的說法判斷，他應是任職於下列哪一個機關？〔106.會考修訂〕\n\n○ (A) 審計部\n○ (B) 法務部\n○ (C) 臺北高等行政法院\n◉ (D) 懲戒法院",
  "answer": "(D) 懲戒法院",
  "explanation": "監察委員彈劾違法或失職的公務人員後，移送司法院懲戒法院審理。選 (D)。",
  "solution": "監察委員彈劾違法或失職的公務人員後，移送司法院懲戒法院審理。選 (D)。",
  "diagramUrl": ""
},
  {
  "id": "q_soc_geo_andes_tunnel_chile_argentina_trade_china_109exam_563",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "地理／中南美洲／安地斯山脈界山／大西洋與太平洋海陸聯運／109會考",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：智利本身已在太平洋岸，往亞洲（日本、紐西蘭）直航即可；阿根廷在東側大西洋岸，原本須繞麥哲倫海峽，通隧道後省時最多。",
  "stem": "南美洲南端海運天然限制多，橫越安地斯山脈又常受冬季降雪阻礙交通，因此智利與阿根廷兩國計畫興建打通安地斯山脈的隧道。該隧道不僅可大幅縮短運輸時間，也降低氣候對貨運的影響，有利於大西洋岸國家與太平洋岸國家間的貿易。在上述工程完工後，下列何者的運輸時間渴望降低？\n\n○ (A) 智利至日本\n○ (B) 智利至紐西蘭\n○ (C) 阿根廷至英國\n◉ (D) 阿根廷至中國",
  "answer": "(D) 阿根廷至中國",
  "explanation": "阿根廷臨大西洋、智利臨太平洋。打通安地斯山脈隧道後，阿根廷貨物可西行至智利直接橫渡太平洋往中國。選 (D)。",
  "solution": "阿根廷臨大西洋、智利臨太平洋。打通安地斯山脈隧道後，阿根廷貨物可西行至智利直接橫渡太平洋往中國。選 (D)。",
  "diagramUrl": ""
},
  {
  "id": "q_soc_geo_pan_american_highway_darien_gap_rainforest_111exam_562",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "地理／中南美洲／泛美公路達連隘口／熱帶雨林生態保護／111會考",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：巴拿馬至哥倫比亞交界為達連隘口（熱帶雨林），終年高溫多雨、年溫差極小；巴拿馬運河在該段以西，早已建橋跨越。",
  "stem": "附圖為貫穿美洲的泛美公路示意圖，主幹線北起美國阿拉斯加，南至智利。美洲多國可透過這個公路系統相互連結，但巴拿馬到哥倫比亞之間的路段至今尚未修建。根據圖中資訊判斷，該路段未修建的原因之一最可能為下列何者？\n\n○ (A) 年溫差大施工困難\n◉ (B) 保護熱帶雨林生態\n○ (C) 運河阻隔難以跨越\n○ (D) 維護因紐特人文化",
  "answer": "(B) 保護熱帶雨林生態",
  "explanation": "未修建路段（巴拿馬至哥倫比亞）位於 8°N 附近，屬熱帶雨林氣候區，未修建主因為保護雨林生態。選 (B)。",
  "solution": "未修建路段（巴拿馬至哥倫比亞）位於 8°N 附近，屬熱帶雨林氣候區，未修建主因為保護雨林生態。選 (B)。",
  "diagramUrl": "assets/questions/social_geo_q562_pan_american_highway_map.png"
},
  {
  "id": "q_soc_geo_chile_atacama_desert_solar_power_pacific_561",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "地理／中南美洲／智利阿他加馬沙漠／太平洋沿岸／太陽能發電潛力",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：智利西臨太平洋，北部阿他加馬沙漠為全球最乾燥沙漠之一；巴西與阿根廷東臨大西洋，巴拿馬無廣大沙漠。",
  "stem": "南美洲某國的總統曾提出一個構想：該國北部的沙漠陽光充沛、日照充足，具有適合發展太陽能發電的潛力，預計未來將透過海底電纜，將太陽能光電直接經由該國西側的太平洋，送往亞洲地區。根據上述判斷，該國最可能為下列何者？\n\n◉ (A) 智利\n○ (B) 巴西\n○ (C) 巴拿馬\n○ (D) 阿根廷",
  "answer": "(A) 智利",
  "explanation": "智利西臨太平洋，北部有阿他加馬沙漠，終年乾燥少雨、日照充足，且隔太平洋與亞洲相望。選 (A)。",
  "solution": "智利西臨太平洋，北部有阿他加馬沙漠，終年乾燥少雨、日照充足，且隔太平洋與亞洲相望。選 (A)。",
  "diagramUrl": ""
},
  {
  "id": "q_soc_geo_patagonia_temperate_desert_leeward_falkland_current_560",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "地理／中南美洲／巴塔哥尼亞高原／溫帶沙漠成因／西風背風側與福克蘭寒流",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：巴塔哥尼亞高原因「西風背風側」及東側「福克蘭寒流」成荒漠；西側的祕魯涼流在太平洋岸，副熱帶高壓則在熱帶。",
  "stem": "位於阿根廷南部的巴塔哥尼亞高原，擁有南半球唯一的溫帶沙漠氣候，造成當地氣候乾燥的原因有下列哪些？ (甲)副熱帶高壓籠罩 (乙)位於西風背風側 (丙)福克蘭寒流流經 (丁)祕魯涼流流經\n\n○ (A) 甲乙\n○ (B) 甲丙\n◉ (C) 乙丙\n○ (D) 乙丁",
  "answer": "(C) 乙丙",
  "explanation": "巴塔哥尼亞高原位於安地斯山脈西風背風側（雨影區），且東側有福克蘭寒流流經減濕，形成溫帶沙漠。選 (C)。",
  "solution": "巴塔哥尼亞高原位於安地斯山脈西風背風側（雨影區），且東側有福克蘭寒流流經減濕，形成溫帶沙漠。選 (C)。",
  "diagramUrl": ""
},
  {
  "id": "q_soc_geo_latin_america_andes_highland_settlement_quito_lapaz_559",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "地理／中南美洲／人口與都市分布／熱帶高地氣候／安地斯山脈高地聚落",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：低緯熱帶平地濕熱，人口與首都常建於安地斯山脈的「高地氣候區」（如基多、拉巴斯、波哥大）。",
  "stem": "中南美洲人口分布極度不均，低緯地區因平地氣候潮溼悶熱，使都市多集中在較為涼爽的地方，如厄瓜多首都基多、玻利維亞首都拉巴斯等。上述兩個都市皆位於下列哪個地理區？\n\n○ (A) 巴西高原\n○ (B) 亞馬孫盆地\n○ (C) 西印度群島\n◉ (D) 安地斯山脈",
  "answer": "(D) 安地斯山脈",
  "explanation": "厄瓜多基多與玻利維亞拉巴斯均位於安地斯山脈，因海拔高氣候涼爽宜人（熱帶高地），都市多集中於此。選 (D)。",
  "solution": "厄瓜多基多與玻利維亞拉巴斯均位於安地斯山脈，因海拔高氣候涼爽宜人（熱帶高地），都市多集中於此。選 (D)。",
  "diagramUrl": ""
},
  {
  "id": "q_soc_geo_latin_america_landmass_shape_climate_558",
  "examPeriod": "一段",
  "subject": "社會",
  "errorReason": "觀念不懂",
  "concept": "地理／中南美洲／氣候特徵／陸塊形狀對氣候之影響",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：南美洲「北寬南窄」，溫帶地區陸塊狹窄無廣大內陸，受海洋環抱調節，故無溫帶大陸性氣候。",
  "stem": "中南美洲的熱帶氣候區範圍廣大，溫帶氣候區則較為狹窄，甚至沒有溫帶大陸性氣候分布，此與下列何者的關係最密切？\n\n○ (A) 地勢起伏\n○ (B) 盛行風向\n○ (C) 洋流性質\n◉ (D) 陸塊形狀",
  "answer": "(D) 陸塊形狀",
  "explanation": "南美洲陸塊北寬南窄，低緯熱帶陸塊面積廣，溫帶地區狹窄且易受海洋調節，故缺乏溫帶大陸性氣候。選 (D)。",
  "solution": "南美洲陸塊北寬南窄，低緯熱帶陸塊面積廣，溫帶地區狹窄且易受海洋調節，故缺乏溫帶大陸性氣候。選 (D)。",
  "diagramUrl": ""
},
  {
  "id": "q_sci_phy_farmer_carrying_hoe_shoulder_support_force_557",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "觀念不懂",
  "concept": "理化／力與運動／槓桿原理／轉動平衡／肩膀支點受力",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：容易誤選 (C) 6！6 kgw 只是手向下的施力，肩膀要同時承受「手的下壓力 6 kgw」與「鋤頭重 4 kgw」，總受力為 10 kgw。",
  "stem": "農夫扛著長柄鋤頭、手握木柄末端，達靜力平衡，如右圖所示，木柄全長 1 公尺，重量不計，鐵製鋤頭為 4 公斤重，距肩膀 60 公分；則農夫肩膀受力多少公斤重？\n\n○ (A) 2\n○ (B) 4\n○ (C) 6\n◉ (D) 10",
  "answer": "(D) 10",
  "explanation": "以肩膀為支點：手施力×40＝4×60，得手施力＝6 kgw。肩膀向上支撐力＝手施力＋鋤頭重＝6＋4＝10 kgw。故選 (D)。",
  "solution": "以肩膀為支點：手施力×40＝4×60，得手施力＝6 kgw。肩膀向上支撐力＝手施力＋鋤頭重＝6＋4＝10 kgw。故選 (D)。",
  "diagramUrl": "assets/questions/science_q557_farmer_carrying_hoe.png"
},
  {
  "id": "q_sci_phy_static_equilibrium_two_people_carrying_pole_556",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "觀念不懂",
  "concept": "理化／力與運動／槓桿原理／靜力平衡／合力為零／合力矩為零",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：靜止平衡兩大條件：1. 合力＝0（移動平衡）；2. 合力矩＝0（轉動平衡）。合力必為 0，絕不會有任何方向！",
  "stem": "甲、乙兩人以長為 2 公尺的木棒（重量不計）合挑 60 公斤重的物體，如右圖所示，若物體距離甲為 1.2 公尺，則下列敘述何者錯誤？\n\n○ (A) 甲負重 24 公斤重\n○ (B) 乙負重 36 公斤重\n◉ (C) 作用在此木棒的合力方向向上\n○ (D) 作用在此木棒的合力矩＝0",
  "answer": "(C) 作用在此木棒的合力方向向上",
  "explanation": "靜力平衡時合力＝0、合力矩＝0。甲負重 24 kgw、乙負重 36 kgw，合力為零而非向上。故選 (C)。",
  "solution": "靜力平衡時合力＝0、合力矩＝0。甲負重 24 kgw、乙負重 36 kgw，合力為零而非向上。故選 (C)。",
  "diagramUrl": "assets/questions/science_q556_two_people_carrying_stick.png"
},
  {
  "id": "q_sci_phy_satellite_orbit_gravity_centripetal_force_555",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "觀念不懂",
  "concept": "理化／力與運動／人造衛星圓周運動／萬有引力提供向心力／變加速度運動／作用力與反作用力",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：1. 向心加速度方向隨時改變，屬於「變加速度運動」，非等加速度！2. 地球與衛星互吸為「作用力與反作用力」，大小必定相等。3. 向心力消失時因慣性沿「切線方向」飛出，絕非圖中沿半徑向外的 A 方向。",
  "stem": "人造衛星受到地球的向心力作用，環繞地球作圓周運動，其示意圖如右圖所示。則下列敘述何者正確？\n\n◉ (A) 提供人造衛星環繞地球運轉的向心力，來自於地球與人造衛星間的萬有引力\n○ (B) 人造衛星受到指向地球的向心力作用，故人造衛星作等加速度運動\n○ (C) 人造衛星對地球的吸引力小於地球對人造衛星的吸引力\n○ (D) 假設有一天，此向心力突然消失，則人造衛星將沿圖中 A 方向飛出",
  "answer": "(A) 提供人造衛星環繞地球運轉的向心力，來自於地球與人造衛星間的萬有引力",
  "explanation": "(A) 正確，萬有引力提供向心力；(B) 加速度方向隨時指向圓心（方向在變，非等加速度）；(C) 兩者互為作用力與反作用力，大小相等；(D) 向心力消失時沿切線方向飛出。故選 (A)。",
  "solution": "(A) 正確，萬有引力提供向心力；(B) 加速度方向隨時指向圓心（方向在變，非等加速度）；(C) 兩者互為作用力與反作用力，大小相等；(D) 向心力消失時沿切線方向飛出。故選 (A)。",
  "diagramUrl": "assets/questions/science_q555_satellite_earth_orbit.png"
},
  {
  "id": "q_sci_phy_braking_deceleration_resistance_newton_second_law_554",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "計算粗心",
  "concept": "理化／力與運動／牛頓第二運動定律(F＝ma)／時速換算秒速(36 km/h＝10 m/s)／等減速度煞車阻力計算",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：1. 單位換算第一步：36 km/h ＝ 10 m/s，絕不能用 36 直接計算！2. 阻力「大小」問數值大小，取正值 2000 牛頓（負號僅代表方向相反）。",
  "stem": "質量為 1000 公斤的車子原以 36 公里／時的速度行駛，今以等減速度煞車 5 秒後，車子停下來。若煞車過程的阻力一定，則煞車時車子所受的阻力大小為多少牛頓？\n\n◉ (A) 2000 牛頓\n○ (B) 3000 牛頓\n○ (C) 4000 牛頓\n○ (D) 5000 牛頓",
  "answer": "(A) 2000 牛頓",
  "explanation": "36 km/h ＝ 10 m/s。加速度 a ＝ (0 － 10) / 5 ＝ －2 m/s²。阻力大小 F ＝ ma ＝ 1000 × 2 ＝ 2000 牛頓。選 (A)。",
  "solution": "36 km/h ＝ 10 m/s。加速度 a ＝ (0 － 10) / 5 ＝ －2 m/s²。阻力大小 F ＝ ma ＝ 1000 × 2 ＝ 2000 牛頓。選 (A)。",
  "diagramUrl": ""
},
  {
  "id": "q_sci_phy_uniform_circular_motion_centripetal_force_direction_553",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "觀念不懂",
  "concept": "理化／力與運動／等速率圓周運動／向心力與加速度指向圓心且垂直速度／只改變運動方向不改變快慢",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：1. 向心力與速度方向恆垂直（不作功），只改變運動「方向」，不能改變速率「快慢」！2. 向心力消失時，物體因慣性沿「切線方向」直線飛出，非向外沿半徑飛出。",
  "stem": "有關等速率圓周運動的敘述，下列何者錯誤？\n\n○ (A) 向心力及加速度永遠指向圓心\n○ (B) 向心力及加速度的方向永遠和速度的方向垂直\n◉ (C) 向心力能改變運動的快慢\n○ (D) 當向心力消失時，作圓周運動的物體會因慣性作用，而沿圓的切線方向飛出",
  "answer": "(C) 向心力能改變運動的快慢",
  "explanation": "向心力與速度方向隨時保持垂直，因此只改變運動方向、不改變運動快慢（速率大小不變）。故 (C) 敘述錯誤，選 (C)。",
  "solution": "向心力與速度方向隨時保持垂直，因此只改變運動方向、不改變運動快慢（速率大小不變）。故 (C) 敘述錯誤，選 (C)。",
  "diagramUrl": ""
},
  {
  "id": "q_sci_phy_gravity_equilibrium_earth_moon_spaceship_ratio_552",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "計算粗心",
  "concept": "理化／力與運動／萬有引力定律(F＝GMm/R²)／引力平衡與距離平方成反比／月球與地球距離比推導",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：1. 審題看清比值順序：題目問「距月球中心：距地球中心（x : y）」，月球質量小，引力相等時飛船必靠近月球（x < y），答案必為 1 : 9 而非 9 : 1！2. 萬有引力與「距離平方成反比」，距離比為質量比開根號 √1 : √81 ＝ 1 : 9。",
  "stem": "地球質量大約是月球質量的 81 倍，在登月飛船通過月、地之間，月球和地球對它引力相等的位置時，飛船離開月球中心和地球中心的距離比為何？\n\n◉ (A) 1 : 9\n○ (B) 9 : 1\n○ (C) 1 : 1\n○ (D) 3 : 1",
  "answer": "(A) 1 : 9",
  "explanation": "萬有引力公式 F ＝ GMm / R²。當引力相等時：M / x² ＝ 81M / y² ⟹ y² / x² ＝ 81 ⟹ y : x ＝ 9 : 1。故飛船距月球與地球之距離比 x : y ＝ 1 : 9。選 (A)。",
  "solution": "萬有引力公式 F ＝ GMm / R²。當引力相等時：M / x² ＝ 81M / y² ⟹ y² / x² ＝ 81 ⟹ y : x ＝ 9 : 1。故飛船距月球與地球之距離比 x : y ＝ 1 : 9。選 (A)。",
  "diagramUrl": ""
},
  {
  "id": "q_sci_phy_vertical_projectile_forces_net_downward_551",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "觀念不懂",
  "concept": "理化／力與運動／鉛直上拋運動之受力分析／減速運動合力方向必向下(重力向下、阻力向下)",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：1. 石塊離手後，手的推力已不存在！2. 物體向上運動但速度漸慢（減速），代表加速度與合力方向必向下。3. 重力恆向下大小不變；空氣阻力恆與運動方向相反（向上運動時阻力向下）。",
  "stem": "垂直向上拋出一小石塊，石塊離手後繼續向上運動，但速度愈來愈小，則該石塊所受的力為下列何者？\n\n◉ (A) 石塊所受的合力向下\n○ (B) 石塊所受的重力愈來愈小\n○ (C) 石塊所受的阻力向上\n○ (D) 石塊不受力的作用",
  "answer": "(A) 石塊所受的合力向下",
  "explanation": "速度向上、速度漸小（減速）⟹ 加速度向下、合力向下；重力恆向下且大小不變，空氣阻力與運動方向相反（向下）。故選 (A)。",
  "solution": "速度向上、速度漸小（減速）⟹ 加速度向下、合力向下；重力恆向下且大小不變，空氣阻力與運動方向相反（向下）。故選 (A)。",
  "diagramUrl": ""
},
  {
  "id": "q_sci_phy_newton_first_law_inertia_external_force_zero_550",
  "examPeriod": "一段",
  "subject": "自然",
  "errorReason": "觀念不懂",
  "concept": "理化／力與運動／牛頓第一運動定律(慣性定律)／不受外力時動者恆作等速度直線運動",
  "uploadDate": "2026-11-25",
  "mondayDate": "2026-11-23",
  "mondayDates": [
    "2026-11-23"
  ],
  "weekLabel": "2026-11-23 (最新週次)",
  "isGuessedOrUnstable": false,
  "mistakeNote": "💡 易錯筆記：日常物體減速停止是因為「摩擦力」作用！若「一切外力同時消失（合力為零）」，依牛頓第一運動定律（慣性），運動中的物體將永久維持「等速度直線運動」，絕不會停止！",
  "stem": "一正在運動中的物體，若它所受的一切外力都同時消失，則該運動體的運動將有何變化？\n\n○ (A) 立即停下來\n○ (B) 速度逐漸變慢最終停止\n○ (C) 運動的方向不變，但速度變快\n◉ (D) 會變為作等速度直線運動",
  "answer": "(D) 會變為作等速度直線運動",
  "explanation": "物體不受外力作用（合力為零）時，會保持原來的運動狀態：靜者恆靜，動者恆作等速度直線運動。故選 (D)。",
  "solution": "物體不受外力作用（合力為零）時，會保持原來的運動狀態：靜者恆靜，動者恆作等速度直線運動。故選 (D)。",
  "diagramUrl": ""
},
  {
    "id": "q_sci_chem_organic_esterification_nu_er_hong_ethyl_acetate_549",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "理化／常見有機化合物／酯化反應(有機酸＋醇 ⟶ 酯＋水)／發酵釀酒(乙醇)氧化成乙酸／乙酸乙酯(果香氣味)",
    "uploadDate": "2026-11-25",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 釀酒產生食用「乙醇（酒精）」，長時間陳釀微量氧化成「乙酸（醋酸）」。2. 乙酸與乙醇緩慢進行「酯化反應」生成具有水果香味的「乙酸乙酯」（越陳越香），非甲酸或純酒精本身！",
    "stem": "相傳「女兒紅」酒的由來：「紹興城的一位裁縫師在得知自己妻子懷孕後，以醣類和酵素釀了幾罐酒埋藏在地底，想等孩子滿月時宴請賓客，不料卻生了個女兒，因為當時重男輕女，所以裁縫師也就沒有慶祝，酒便一直埋藏在地底。光陰似箭，當女兒長大結婚時，裁縫師想起那些埋藏在地底的酒，於是便挖出這些酒來宴請賓客，打開酒罈時發現酒香撲鼻、味道醇正，賓客紛紛讚嘆好酒，於是大家便把這酒稱為『女兒紅』。」酒罈打開的一瞬間香味撲鼻，由以上的傳說，酒中生成的有機酸類與酒精發生反應，而形成具有香味的物質。根據上述推測此具有香味的物質最可能為何？\n\n○ (A) 乙酸\n○ (B) 乙醇\n○ (C) 甲酸乙酯\n◉ (D) 乙酸乙酯",
    "answer": "(D) 乙酸乙酯",
    "explanation": "醣類與酵素釀造的酒，形成可以食用的乙醇。而酒中可能形成的有機酸為乙酸。兩者反應形成乙酸乙酯。選 (D)。",
    "diagramUrl": "",
    "solution": "醣類與酵素釀造的酒，形成可以食用的乙醇。而酒中可能形成的有機酸為乙酸。兩者反應形成乙酸乙酯。選 (D)。"
  },
  {
    "id": "q_sci_chem_organic_compounds_classification_c2hno_548",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "理化／有機化合物的分類／有機物定義(主要含碳，可含N、S等) vs. 烴類(僅含C、H) vs. 醣類(碳水化合物 H:O=2:1)",
    "uploadDate": "2026-11-25",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 有機化合物主要含碳，常含 H、O、N、S 等（如蛋白質、尿素皆含 N，仍為有機物，甲生錯）。2. 烴類嚴格限定「僅含碳、氫」兩元素，含其他元素必非烴類（丙生對）。3. 醣類（碳水化合物）通式為 Cₙ(H₂O)ₘ，是指「氫氧比 H:O ＝ 2:1」，而非碳與氧（乙生錯）。",
    "stem": "上理化課時，李老師要幫學生複習有機化合物的分類，因此老師給學生一個問題，在黑板寫了 C₂HNO，讓學生就此化學式「C₂HNO」討論應該歸在哪一類有機化合物。學生分別提出各自看法。\n\n甲生說：「C₂HNO 中，除了 C、H、O 之外還有其他元素，所以不是有機化合物。」\n乙生說：「C₂HNO 中，C : O ＝ 2 : 1，所以是有機化合物中的醣類，又稱碳水化合物」\n丙生說：「C₂HNO 中，除了 C、H 以外還有其他元素所以不是烴類」\n\n關於甲、乙、丙生的說法，以下何者正確？\n\n○ (A) 甲、乙生正確，丙生錯誤\n◉ (B) 甲、乙生錯誤，丙生正確\n○ (C) 甲、丙生正確，乙生錯誤\n○ (D) 甲、乙、丙生都正確",
    "answer": "(B) 甲、乙生錯誤，丙生正確",
    "explanation": "甲生：除了 C、H、O 之外含有其他元素（如 N），也可能是有機化合物；乙生：碳水化合物化學式通式為 Cₙ(H₂O)ₘ，為氫氧原子數比 H:O ＝ 2:1， 故選 (B)。",
    "diagramUrl": "",
    "solution": "甲生：除了 C、H、O 之外含有其他元素（如 N），也可能是有機化合物；乙生：碳水化合物化學式通式為 Cₙ(H₂O)ₘ，為氫氧原子數比 H:O ＝ 2:1， 故選 (B)。"
  },
  {
    "id": "q_math_geo_intersecting_circles_collinear_cbd_arc_abd_547",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／兩相交圓／共線外角定理（∠ABD＝∠BAC＋∠ACB）／圓周角與優劣弧度數求法（弧 ABD＝360°－弧 AD）",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 跨圓考題關鍵在「外角定理」：C、B、D 共線，∠ABD ＝ ∠BAC ＋ ∠ACB ＝ 48° ＋ 40° ＝ 88°。2. 審題看清所求弧：圓周角 ∠ABD 所對為劣弧 AD（176°），題目求含 B 點的「優弧 ABD」，需用 360° － 176° ＝ 184°！",
    "stem": "如圖，已知兩圓交於 A、B 兩點，且 C、B、D 三點共線，若 弧 BC ＝ 96°，∠ACB ＝ 40°，則 弧 ABD 為多少度？\n\n○ (A) 164°\n○ (B) 176°\n◉ (C) 184°\n○ (D) 192°",
    "answer": "(C) 184°",
    "explanation": "＝ (1/2) 弧 BC ＝ (1/2) × 96° ＝ 48°。 故選 (C)。",
    "diagramUrl": "assets/questions/math_q547_two_circles_arc_abd.png",
    "solution": "＝ (1/2) 弧 BC ＝ (1/2) × 96° ＝ 48°。 故選 (C)。"
  },
  {
    "id": "q_math_geo_cyclic_quadrilateral_arcs_diameter_area_546",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形對角互補（∠BAD＝∠BCD＝90° ⟹ BD為直徑）／弧度推導直角三角形邊長與四邊形面積分割",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 圓內接對角互補且相等，必各為 90°，對角線 BD 即為直徑！2. 弧 CD ＝ 60°，弦 CD 恰等於半徑 R ＝ 2（正三角形性質），得直徑 BD ＝ 4。3. 沿直徑 BD 分割為等腰直角 △ABD（面積 4）與 30°-60°-90° 直角 △BCD（面積 2√3），相加即得正解。",
    "stem": "如圖，已知 弧 AB ＝ 弧 AD，弧 BC ＝ 2 弧 CD，∠BAD ＝ ∠BCD，若 CD ＝ 2 公分，則四邊形 ABCD 的面積為多少平方公分？\n\n○ (A) 2 ＋ 2√3\n○ (B) 4 ＋ √3\n◉ (C) 4 ＋ 2√3\n○ (D) 6 ＋ 2√3",
    "answer": "(C) 4 ＋ 2√3",
    "explanation": "D ＝ 90°，故 BD 為直徑。 故選 (C)。",
    "diagramUrl": "assets/questions/math_q546_circle_quadrilateral_area.png",
    "solution": "D ＝ 90°，故 BD 為直徑。 故選 (C)。"
  },
  {
    "id": "q_math_geo_cyclic_quadrilateral_opposite_supplementary_inscribed_angles_545",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形判定（對角互補 ∠ABC＋∠ADC＝180° ⟹ 四點共圓）／同弧所對圓周角相等（∠1＝∠2）",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 四邊形「對角互補」（∠ABC ＋ ∠ADC ＝ 180°）是四點共圓（內接於圓）的判定定理！2. 確定共圓後，看準同弦/同弧 AB：∠1 與 ∠2 皆為對應弧 AB 的圓周角，同弧所對圓周角相等，故 ∠1 ＝ ∠2！",
    "stem": "如圖，若 ∠ABC ＋ ∠ADC ＝ 180°，則 ∠1 與 ∠2 的大小關係為何？\n\n○ (A) ∠1 ＞ ∠2\n○ (B) ∠1 ＜ ∠2\n◉ (C) ∠1 ＝ ∠2\n○ (D) 無法確定",
    "answer": "(C) ∠1 ＝ ∠2",
    "explanation": "D 的對角互補（∠ABC ＋ ∠ADC ＝ 180°），所以 A、B、C、D 四點共圓（四邊形 ABCD 內接於一圓）。 故選 (C)。",
    "diagramUrl": "assets/questions/math_q545_concyclic_quadrilateral_angles.png",
    "solution": "D 的對角互補（∠ABC ＋ ∠ADC ＝ 180°），所以 A、B、C、D 四點共圓（四邊形 ABCD 內接於一圓）。 故選 (C)。"
  },
  {
    "id": "q_math_geo_circle_diameter_secants_arc_cd_544",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／直徑所對圓周角為直角（∠ACB＝90°）／圓周角與所對弧長關係（弧 CD＝2∠CBP）／外角定理",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 見直徑必連線造直角：連接 BC 即得圓周角 ∠ACB ＝ 90°。2. 利用 △BCP 外角定理（外角等於兩內對角和）：∠ACB ＝ ∠CBP ＋ ∠P ⟹ 90° ＝ ∠CBP ＋ 52° ⟹ ∠CBP ＝ 38°。3. 圓周角度數為所對弧度數的一半，故 弧 CD ＝ 2 × 38° ＝ 76°！",
    "stem": "如圖，線段 AB 為圓 O 的直徑，PA ＝ PB，且 PA 與 PB 分別交圓 O 於 C、D 兩點，已知 ∠P ＝ 52°，求 弧 CD 的度數為何？\n\n○ (A) 64°\n○ (B) 72°\n◉ (C) 76°\n○ (D) 84°",
    "answer": "(C) 76°",
    "explanation": "P 外角定理：∠ACB ＝ ∠CBP ＋ ∠P ⟹ 90° ＝ ∠CBP ＋ 52° ⟹ ∠CBP ＝ 38°。 故選 (C)。",
    "diagramUrl": "assets/questions/math_q544_circle_diameter_secants_arc_cd.png",
    "solution": "P 外角定理：∠ACB ＝ ∠CBP ＋ ∠P ⟹ 90° ＝ ∠CBP ＋ 52° ⟹ ∠CBP ＝ 38°。 故選 (C)。"
  },
  {
    "id": "q_sci_earth_fossil_environmental_geological_indicator_trilobite_543",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地質歷史與化石／指準化石(三葉蟲為古生代海洋) vs. 指相化石(珊瑚淺海、長毛象寒冷、海膽證地殼抬升)",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 珊瑚需要陽光共生藻光合作用，生長在「溫暖清澈的淺海（非深海）」！2. 陸地上發現海膽化石證明地層「曾受板塊擠壓抬升（有變動）」。3. 長毛象長毛為禦寒適應，代表「寒冷氣候」。4. 三葉蟲為「古生代海洋」指準化石。",
    "stem": "化石除了能作為地質年代的指標，也能幫助了解古生物當時的生存環境。下列有關化石的推論，何者正確？\n\n○ (A) 若挖出的大象化石，全身長有長毛，可推論當時的氣候較溫暖\n○ (B) 地層出現珊瑚化石，表示當時的沉積環境是熱帶且溫暖的深海海域\n○ (C) 東北角海岸的岩層表面有海膽化石，可以佐證臺灣島地層不曾變動\n◉ (D) 地層中出現三葉蟲的化石，可判定該地層為古生代的海洋沉積岩層",
    "answer": "(D) 地層中出現三葉蟲的化石，可判定該地層為古生代的海洋沉積岩層",
    "explanation": "三葉蟲為古生代代表性海洋生物。故選 (D)。",
    "diagramUrl": "",
    "solution": "三葉蟲為古生代代表性海洋生物。故選 (D)。"
  },
  {
    "id": "q_sci_phys_torque_calculation_three_forces_net_rotation_542",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "計算粗心",
    "concept": "理化／力與運動／槓桿與力矩／合力矩計算與轉動方向判定／力臂定義(通過支點力矩為零)",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 力矩＝力×力臂（支點到力作用線的「垂直距離」）。2. F2 的作用線直接通過支點 A，力臂＝0，力矩＝0！3. 找準方向：以 A 為旋轉中心，向上推的 F1 造成「順時針」力矩；向右下推的 F3 垂直力臂為 AD（30cm），造成「逆時針」力矩。合力矩為兩者相減。",
    "stem": "如右圖，一根以 A 點為轉軸的木棒，分別受到 F1 = 300 gw、F2 = 200 gw、F3 = 100 gw 三個力，則三力的合力矩為多少？木棒將如何轉動？\n\n◉ (A) 合力矩為 3000 gw·cm，順時針轉動\n○ (B) 合力矩為 3000 gw·cm，逆時針轉動\n○ (C) 合力矩為 6000 gw·cm，順時針轉動\n○ (D) 合力矩為 9000 gw·cm，順時針轉動",
    "answer": "(A) 合力矩為 3000 gw·cm，順時針轉動",
    "explanation": "B × F1 ＝ 20 × 300 ＝ 6000（gw·cm，順時針）。 故選 (A)。",
    "diagramUrl": "assets/questions/science_q542_torque_net_calculation_rotation.png",
    "solution": "B × F1 ＝ 20 × 300 ＝ 6000（gw·cm，順時針）。 故選 (A)。"
  },
  {
    "id": "q_sci_phys_torque_definition_rotation_effect_541",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "理化／力與運動／力矩的定義與物理意義／旋轉效果 vs. 移動／力臂與方向性",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「力」是改變物體「移動」狀態的原因（F=ma）；「力矩」是使物體產生「轉動」效果的物理量（力矩＝力×力臂），無法使物體產生移動！力矩具方向性（順時針或逆時針）。",
    "stem": "有關力矩的敘述，下列何者錯誤？\n\n◉ (A) 力矩可使物體發生移動或轉動\n○ (B) 力矩定義為支點到力作用線之垂直距離與作用力的乘積\n○ (C) 力矩是有方向之物理量\n○ (D) 力矩是測量物體旋轉效果的物理量",
    "answer": "(A) 力矩可使物體發生移動或轉動",
    "explanation": "(A) 錯誤，力矩只會使物體產生「轉動」效果，使物體產生「移動」的是外力（合力）；(B) 力矩＝外力×力臂（支點至作用線垂直距離）；",
    "diagramUrl": "",
    "solution": "(A) 錯誤，力矩只會使物體產生「轉動」效果，使物體產生「移動」的是外力（合力）；(B) 力矩＝外力×力臂（支點至作用線垂直距離）；"
  },
  {
    "id": "q_chi_ortho_homophone_qiao_long_huang_suo_540",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／同音異字辨析／訣竅與鬼迷心竅 (竅) vs. 籠統與聾啞 vs. 遑論與驚惶 vs. 瑣碎與連鎖",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：高頻字形對照：\n1.「竅」（穴部）：訣竅、竅門、鬼迷心竅皆為「竅」。\n2.「籠」統（竹部包容概括）vs.「聾」啞（耳部失聰）。\n3.不「遑」細論（辵部何況）vs.驚「惶」失措（心部害怕）。\n4.「瑣」碎（玉部小玉玉屑）vs.連「鎖」店（金部鐵鍊鎖環）。",
    "stem": "下列「」中的注音寫成國字後，何組字形相同？\n\n◉ (A) 抓到訣「ㄎㄧㄠˋ」／鬼迷心「ㄎㄧㄠˋ」\n○ (B) 「ㄌㄨㄥˊ」統／「ㄌㄨㄥˊ」啞人士\n○ (C) 不「ㄏㄨㄤˊ」細論／驚「ㄏㄨㄤˊ」失措\n○ (D) 「ㄙㄨㄛˇ」碎雜務／連「ㄙㄨㄛˇ」店",
    "answer": "(A) 抓到訣「ㄎㄧㄠˋ」／鬼迷心「ㄎㄧㄠˋ」",
    "explanation": "皆作「竅」（穴部，訣竅／鬼迷心竅）。 故選 (A)。",
    "diagramUrl": "",
    "solution": "皆作「竅」（穴部，訣竅／鬼迷心竅）。 故選 (A)。"
  },
  {
    "id": "q_chi_phonetic_multi_sound_pao_jia_ji_xiang_539",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／多音字辨析／相 (ㄒㄧㄤˋ) vs. 炮 (ㄆㄠˊ/ㄆㄠˋ) vs. 假 (ㄐㄧㄚˇ/ㄐㄧㄚˋ) vs. 幾 (ㄐㄧ/ㄐㄧˇ)",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：多音字考點速記：\n1.「相」：互相讀 ㄒㄧㄤ；宰相、輔佐（相夫教子）、相貌、照相皆讀 ㄒㄧㄤˋ。\n2.「炮」：如法「炮」製讀 ㄆㄠˊ；一「炮」而紅讀 ㄆㄠˋ。\n3.「假」：不「假」思索、不「假」辭色讀 ㄐㄧㄚˇ（藉由）；請假、假期讀 ㄐㄧㄚˋ。\n4.「幾」：幾近、幾乎讀 ㄐㄧ；幾何讀 ㄐㄧˇ。",
    "stem": "下列「」中的字，何組讀音相同？\n\n○ (A) 如法「炮」製／一「炮」而紅\n○ (B) 不「假」辭色／不「假」外出\n○ (C) 「幾」近完美／人生「幾」何\n◉ (D) 「相」夫教子／出將入「相」",
    "answer": "(D) 「相」夫教子／出將入「相」",
    "explanation": "皆讀 ㄒㄧㄤˋ：「相夫教子」指輔佐丈夫（ㄒㄧㄤˋ，輔助）；「出將入相」指宰相官位（ㄒㄧㄤˋ）。故選 (D)。",
    "diagramUrl": "",
    "solution": "皆讀 ㄒㄧㄤˋ：「相夫教子」指輔佐丈夫（ㄒㄧㄤˋ，輔助）；「出將入相」指宰相官位（ㄒㄧㄤˋ）。故選 (D)。"
  },
  {
    "id": "q_chi_ortho_huang_lun_538",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「遑論」之「遑」 (辵部、音ㄏㄨㄤˊ)／更不用說、何況",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「遑論」指更不用說、何況，從「辵（辶）」部作「遑」！常被誤寫為心部的「惶」（驚惶、惶恐）或彳部的「徨」（徬徨徘徊）。",
    "stem": "「ㄏㄨㄤˊ論」文句中，注音「ㄏㄨㄤˊ」字應寫為下列何者？\n\n○ (A) 徨\n◉ (B) 遑\n○ (C) 惶\n○ (D) 煌",
    "answer": "(B) 遑",
    "explanation": "「遑論」指況且、何況、更不用說。字作「遑」（辵部，皇聲，音 ㄏㄨㄤˊ）。易混淆字：徨（彳部，徬徨）、惶（心部，恐惶、人心惶惶）、煌（火部，輝煌、金碧輝煌）。故選 (B)。",
    "diagramUrl": "",
    "solution": "「遑論」指況且、何況、更不用說。字作「遑」（辵部，皇聲，音 ㄏㄨㄤˊ）。易混淆字：徨（彳部，徬徨）、惶（心部，恐惶、人心惶惶）、煌（火部，輝煌、金碧輝煌）。故選 (B)。"
  },
  {
    "id": "q_chi_ortho_bu_chi_word_537",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「不啻」之「啻」 (口部、音ㄔˋ)／不只、不亞於、如同",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「不啻」之「啻」從「口」部（口＋帝，音 ㄔˋ）！意為不只、不亞於、如同（如「不啻天壤之別」）。常被誤寫為無口部的「帝」或言部的「諦」。",
    "stem": "「不ㄔˋ」文句中，注音「ㄔˋ」字應寫為下列何者？\n\n○ (A) 帝\n○ (B) 啼\n◉ (C) 啻\n○ (D) 諦",
    "answer": "(C) 啻",
    "explanation": "「不啻」意為不只、不僅、如同，字作「啻」（口部、帝聲，讀 ㄔˋ）。易混淆字：帝（巾部，皇帝）、諦（言部，真諦）、啼（啼哭）。故選 (C)。",
    "diagramUrl": "",
    "solution": "「不啻」意為不只、不僅、如同，字作「啻」（口部、帝聲，讀 ㄔˋ）。易混淆字：帝（巾部，皇帝）、諦（言部，真諦）、啼（啼哭）。故選 (C)。"
  },
  {
    "id": "q_chi_ortho_qi_shi_536",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「受到歧視」之「歧」 (止部、音ㄑㄧˊ)／差別待遇、分岔",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「歧視」從「止」部（左「止」右「支」）！意為分岔、不平等的差別待遇（如歧視、歧途、分歧）。常被誤寫為山部的「岐」（岐山）或「崎」（崎嶇）。",
    "stem": "「受到ㄑㄧˊ視」文句中，注音「ㄑㄧˊ」字應寫為下列何者？\n\n○ (A) 岐\n◉ (B) 歧\n○ (C) 崎\n○ (D) 祈",
    "answer": "(B) 歧",
    "explanation": "「歧視」指不平等、差別待遇，字作「歧」（止部，歧途、歧路、歧視）。易混淆字：岐（山部，岐山、三叉路）、崎（崎嶇）。故選 (B)。",
    "diagramUrl": "",
    "solution": "「歧視」指不平等、差別待遇，字作「歧」（止部，歧途、歧路、歧視）。易混淆字：岐（山部，岐山、三叉路）、崎（崎嶇）。故選 (B)。"
  },
  {
    "id": "q_chi_ortho_mou_li_mu_di_535",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「牟利目的」之「牟」 (牛部、音ㄇㄡˊ)／牟取暴利、私人利益",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「牟利」慣用作「牟」取私利（牛部！字作「牟」）；雖音義通「謀」，但在國文字形測驗與規範用語中，「牟利」、「牟取暴利」標準字形必作「牟」！",
    "stem": "「ㄇㄡˊ利目的」文句中，注音「ㄇㄡˊ」字應寫為下列何者？\n\n○ (A) 謀\n◉ (B) 牟\n○ (C) 眸\n○ (D) 侔",
    "answer": "(B) 牟",
    "explanation": "「牟利」指謀取私利或暴利，字作「牟」（牛部，牟取、牟利）。易混淆字：謀（言部，謀求、計謀）、眸（目部，眼眸）、侔（人部，相侔）。故選 (B)。",
    "diagramUrl": "",
    "solution": "「牟利」指謀取私利或暴利，字作「牟」（牛部，牟取、牟利）。易混淆字：謀（言部，謀求、計謀）、眸（目部，眼眸）、侔（人部，相侔）。故選 (B)。"
  },
  {
    "id": "q_chi_ortho_tao_ke_534",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「吸引饕客」之「饕」 (食部、音ㄊㄠ)／美食鑑賞、貪食",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「饕客」從「食」部（上「號」省筆，下「食」）！意指喜好品嘗美食的顧客。常被誤寫為手部的「掏」或水部的「淘」。",
    "stem": "「吸引ㄊㄠ客」文句中，注音「ㄊㄠ」字應寫為下列何者？\n\n○ (A) 掏\n○ (B) 淘\n◉ (C) 饕\n○ (D) 滔",
    "answer": "(C) 饕",
    "explanation": "「饕客」指美食愛好者、品味佳餚的人。字作「饕」（食部，饕餮、饕客）。易混淆字：掏（手部，掏錢）、淘（水部，淘汰、淘金）、滔（水部，滔滔不絕）。故選 (C)。",
    "diagramUrl": "",
    "solution": "「饕客」指美食愛好者、品味佳餚的人。字作「饕」（食部，饕餮、饕客）。易混淆字：掏（手部，掏錢）、淘（水部，淘汰、淘金）、滔（水部，滔滔不絕）。故選 (C)。"
  },
  {
    "id": "q_chi_ortho_jing_xiang_bao_dao_533",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「競相報導」之「競」 (立部、音ㄐㄧㄥˋ)／爭逐、爭先恐後",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「競相報導」是各家媒體「互相競爭、搶先恐後」報導，從「立」部作「競」！不可誤寫為竟然的「竟」或環境的「境」。",
    "stem": "「ㄐㄧㄥˋ相報導」文句中，注音「ㄐㄧㄥˋ」字應寫為下列何者？\n\n○ (A) 竟\n◉ (B) 競\n○ (C) 境\n○ (D) 鏡",
    "answer": "(B) 競",
    "explanation": "「競相報導」指爭先恐後、搶先爭取報導，字作「競」（立部，競逐、競爭）。易混淆字：竟（音部，竟然、究竟）、境（土部，環境、意境）。故選 (B)。",
    "diagramUrl": "",
    "solution": "「競相報導」指爭先恐後、搶先爭取報導，字作「競」（立部，競逐、競爭）。易混淆字：竟（音部，竟然、究竟）、境（土部，環境、意境）。故選 (B)。"
  },
  {
    "id": "q_chi_ortho_wei_lei_532",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「味蕾」之「蕾」 (艸部、音ㄌㄟˇ)／花苞、味覺感受器",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「味蕾」形狀如同含苞待放之花蕾，從「艸」部作「蕾」！切勿寫成無草字頭的「雷」或人部的「儡」。",
    "stem": "「味ㄌㄟˇ」文句中，注音「ㄌㄟˇ」字應寫為下列何者？\n\n○ (A) 雷\n◉ (B) 蕾\n○ (C) 儡\n○ (D) 擂",
    "answer": "(B) 蕾",
    "explanation": "「味蕾」為舌面味覺感受構造，因其外觀狀似花蕾，故從「艸」部，字作「蕾」。易混淆字：雷（雨部，雷電）、儡（人部，傀儡）、擂（手部，打擂台）。故選 (B)。",
    "diagramUrl": "",
    "solution": "「味蕾」為舌面味覺感受構造，因其外觀狀似花蕾，故從「艸」部，字作「蕾」。易混淆字：雷（雨部，雷電）、儡（人部，傀儡）、擂（手部，打擂台）。故選 (B)。"
  },
  {
    "id": "q_chi_ortho_jue_qiao_531",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／常用易錯字形／「成功訣竅」之「竅」 (穴部、音ㄎㄧㄠˋ)／竅門、孔穴關鍵",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「訣竅」指孔穴、竅門，從「穴」部作「竅」！常被誤寫為羽部的「翹」（翹起）或手部的「撬」（撬開）。",
    "stem": "「成功訣ㄎㄧㄠˋ」文句中，注音「ㄎㄧㄠˋ」字應寫為下列何者？\n\n○ (A) 翹\n○ (B) 撬\n◉ (C) 竅\n○ (D) 瞧",
    "answer": "(C) 竅",
    "explanation": "「訣竅」指解決問題的關鍵方法、竅門。字作「竅」（穴部，孔穴、竅門）。易混淆字：翹（羽部，向上仰起）、撬（手部，以棍槓動）、瞧（目部，觀看）。故選 (C)。",
    "diagramUrl": "",
    "solution": "「訣竅」指解決問題的關鍵方法、竅門。字作「竅」（穴部，孔穴、竅門）。易混淆字：翹（羽部，向上仰起）、撬（手部，以棍槓動）、瞧（目部，觀看）。故選 (C)。"
  },
  {
    "id": "q_chi_phonetic_zhu_cheng_530",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／多音字辨析／「著」稱 (ㄓㄨˋ) vs. 著裝 (ㄓㄨㄛˊ) vs. 著涼 (ㄓㄠˊ)／著名與顯著",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「著」有多音辨析：1. 讀「ㄓㄨˋ」：表顯明、著名、寫作，如「著稱」、「著名」、「名著」、「著述」、「顯著」。2. 讀「ㄓㄨㄛˊ」：表穿戴、附著、處所，如「著裝」、「附著」、「著落」、「著手」。3. 讀「ㄓㄠˊ」：表受到、燃燒，如「著涼」、「著急」、「著火」。",
    "stem": "「著稱」一詞中，「著」字的正確讀音應為下列何者？\n\n○ (A) ㄓㄨㄛˊ\n○ (B) ㄓㄠˊ\n◉ (C) ㄓㄨˋ\n○ (D) ˙ㄗㄜ",
    "answer": "(C) ㄓㄨˋ",
    "explanation": "「著」讀 ㄓㄨˋ（第四聲，音同注）時，指顯著、出名或著作，如「著稱」、「著名」、「名著」；讀 ㄓㄨㄛˊ 指穿戴或接觸（著衣、附著）；讀 ㄓㄠˊ 指受到或著火（著涼、著急）。 故選 (C)。",
    "diagramUrl": "",
    "solution": "「著」讀 ㄓㄨˋ（第四聲，音同注）時，指顯著、出名或著作，如「著稱」、「著名」、「名著」；讀 ㄓㄨㄛˊ 指穿戴或接觸（著衣、附著）；讀 ㄓㄠˊ 指受到或著火（著涼、著急）。 故選 (C)。"
  },
  {
    "id": "q_chi_phonetic_bu_chi_529",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／易錯常考字音／「不啻」之「啻」 (ㄔˋ，口部)／不只、不亞於、如同",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「啻」標準讀音為「ㄔˋ」（第四聲，音同翅，口部）！常被誤讀為「ㄉㄧˋ」或「ㄕˋ」。「不啻」意指「不僅、不只、不亞於、如同」，例如「不啻天壤之別」、「獲益不啻百倍」。",
    "stem": "「不啻」一詞中，「啻」字的正確讀音應為下列何者？\n\n○ (A) ㄉㄧˋ\n○ (B) ㄕˋ\n◉ (C) ㄔˋ\n○ (D) ㄓˋ",
    "answer": "(C) ㄔˋ",
    "explanation": "「啻」為口部、帝聲，標準讀音為 ㄔˋ（第四聲去聲，音同翅）。「不啻」意指不僅、不只、不亞於或如同，如「不啻天壤之別」。切勿誤讀為 ㄉㄧˋ 或 ㄕˋ。故選 (C)。",
    "diagramUrl": "",
    "solution": "「啻」為口部、帝聲，標準讀音為 ㄔˋ（第四聲去聲，音同翅）。「不啻」意指不僅、不只、不亞於或如同，如「不啻天壤之別」。切勿誤讀為 ㄉㄧˋ 或 ㄕˋ。故選 (C)。"
  },
  {
    "id": "q_chi_phonetic_ji_ke_jie_jue_528",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音字形／多音字辨析／「幾」可解決 (ㄐㄧ) vs. 詢問數量 (ㄐㄧˇ)／表幾乎、接近",
    "uploadDate": "2026-11-24",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「幾」有二音：1. 讀「ㄐㄧ」（第一聲，音同肌）：表「幾乎、接近、微細」，如「幾可解決」、「幾乎」、「庶幾」、「所剩無幾」、「見幾而作」。2. 讀「ㄐㄧˇ」（第三聲）：表「疑問或不定的數量」，如「幾天」、「幾何」、「相差無幾（亦常通ㄐㄧ）」。",
    "stem": "「幾可解決」一詞中，「幾」字的正確讀音應為下列何者？\n\n○ (A) ㄐㄧˇ\n◉ (B) ㄐㄧ\n○ (C) ㄐㄧˋ\n○ (D) ㄐㄧㄝ",
    "answer": "(B) ㄐㄧ",
    "explanation": "「幾」讀 ㄐㄧ（第一聲，陰平）時，表接近、幾乎、差一點，如「幾可解決」、「幾乎」、「所剩無幾」；若讀 ㄐㄧˇ（第三聲）則表示詢問數量（如幾個人、幾何）。故選 (B)。",
    "diagramUrl": "",
    "solution": "「幾」讀 ㄐㄧ（第一聲，陰平）時，表接近、幾乎、差一點，如「幾可解決」、「幾乎」、「所剩無幾」；若讀 ㄐㄧˇ（第三聲）則表示詢問數量（如幾個人、幾何）。故選 (B)。"
  },
  {
    "id": "q_math_geo_parallelogram_similar_triangles_area_ratio_527",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "九年級幾何證明與相似形／平行四邊形對邊平行相等／蝴蝶形相似三角形／邊長比與面積比平方關係",
    "uploadDate": "2026-11-23",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 平行四邊形對邊相等 AB = CD，E 為 CD 中點 ⇒ DE : AB = 1 : 2。2. 由 AB // CD 得 △DEF ∼ △BAF（AA 相似）。3. ★相似三角形面積比等於對應「邊長的平方比」：(1 : 2)² = 1 : 4，千萬不要直接誤選邊長比 1 : 2！",
    "stem": "如圖，在平行四邊形 ABCD 中，E 為線段 CD 中點，則 △DEF 與 △ABF 的面積比為何？\n\n○ (A) 1 : 1\n○ (B) 1 : 2\n◉ (C) 1 : 4\n○ (D) 2 : 3",
    "answer": "(C) 1 : 4",
    "explanation": "D 中點 ⇒ DE : CD = 1 : 2。又平行四邊形對邊 AB = CD，故 DE : AB = 1 : 2。 故選 (C)。",
    "diagramUrl": "assets/questions/math_q527_parallelogram_similar_triangle_area.png",
    "solution": "D 中點 ⇒ DE : CD = 1 : 2。又平行四邊形對邊 AB = CD，故 DE : AB = 1 : 2。 故選 (C)。"
  },
  {
    "id": "q_math_func_telecom_bill_linear_function_application_526",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "函數與直角坐標系／一次函數生活應用題／基本費分段線型函數 vs. 正比函數交點聯立求解",
    "uploadDate": "2026-11-23",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 太亞不收基本費過原點，斜率 30÷6=5，函數 y=5x。2. 寶島前 9 分鐘基本費 135，超過 9 分鐘每分增加 (170-135)÷(18-9)=35/9 元，函數 y=135+(35/9)(x-9)。3. 令兩者費用相等列式：5x=100+(35/9)x ⇒ (10/9)x=100 ⇒ x=90 分鐘。",
    "stem": "均均去手機行欲購買手機並搭配電信公司的合約，於是店員向她講解寶島之星與太亞電信兩家電信公司通話費的差異，寶島之星的方案為 9 分鐘以內收取基本費，超過 9 分鐘之後的通話費，與通話時間成線型函數關係，太亞電信的方案為不收基本費，通話費與通話時間成線型函數關係，如圖所示。若均均發現依她每個月平均通話時間計算，正好兩家電信公司的通話費都相同，則均均平均每個月使用手機通話的時間為多少分鐘？\n\n◉ (A) 90\n○ (B) 106\n○ (C) 113\n○ (D) 120",
    "answer": "(A) 90",
    "explanation": "1. 太亞電信：過 (0,0) 與 (6,30)，每分 5 元，通話費 y = 5x。 故選 (A)。",
    "diagramUrl": "assets/questions/math_q526_telecom_linear_function.png",
    "solution": "1. 太亞電信：過 (0,0) 與 (6,30)，每分 5 元，通話費 y = 5x。 故選 (A)。"
  },
  {
    "id": "q_math_func_linear_positive_integer_domain_discrete_points_525",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "函數與直角坐標系／一次函數在正整數定義域下的圖形／離散點 vs. 連續直線與線段辨析",
    "uploadDate": "2026-11-23",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：魔鬼條件是「x、y 皆為正整數（1, 2, 3...）」！因為自變數 x 只能取 1, 2, 3，其對應的 y 也只能是 3, 2, 1，解只有三組，在坐標平面上的圖形只能是「3 個孤立的離散點」，絕對不能畫成連續的「直線（A）」或「線段（B）」！",
    "stem": "有一函數 y = 4 - x，x、y 皆正整數，則何者是此函數的圖形？（點擊圖表可檢視各選項坐標圖）\n\n○ (A) 通過 (0, 4) 與 (4, 0) 的連續直線\n○ (B) 連接 (0, 4) 到 (4, 0) 的連續線段\n◉ (C) 坐標平面上 (1, 3)、(2, 2)、(3, 1) 三個獨立的點\n○ (D) y = 3 的水平直線",
    "answer": "(C) 坐標平面上 (1, 3)、(2, 2)、(3, 1) 三個獨立的點",
    "explanation": "因 x、y 皆為正整數： 故選 (C)。",
    "diagramUrl": "assets/questions/math_q525_linear_function_discrete_points.png",
    "solution": "因 x、y 皆為正整數： 故選 (C)。"
  },
  {
    "id": "q_math_func_linear_domain_quadrant_intersection_524",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "線型函數與直角坐標系／限制定義域一次函數線段經過象限判定／端點極值代入法",
    "uploadDate": "2026-11-23",
    "mondayDate": "2026-11-23",
    "mondayDates": [
      "2026-11-23"
    ],
    "weekLabel": "2026-11-23 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：魔鬼在細節！題目明確限制「x 的範圍為 -2 ≤ x ≤ 1」，圖形只是一條「線段」，千萬不能當作整條無限延伸的直線（直線過一、三、四象限）！代入端點得 y 最大值只有 -2（y 坐標恆負），故圖形僅落在第三、四象限。",
    "stem": "函數 y = 3x - 5，若 x 的範圍為 -2 ≤ x ≤ 1，則此函數的圖形經過第幾象限？\n\n○ (A) 一、二\n◉ (B) 三、四\n○ (C) 一、二、三\n○ (D) 一、三、四",
    "answer": "(B) 三、四",
    "explanation": "1. 代入兩端點求坐標： 故選 (B)。",
    "diagramUrl": "",
    "solution": "1. 代入兩端點求坐標： 故選 (B)。"
  },
  {
    "id": "q_chi_lit_author_wu_jun_keywords_tang_poetry_schools_523",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國學常識／歷代作家風格流派／南朝梁文學家吳均(字叔庠、駢文、奉朝請、與宋元思書) vs. 盛唐山水田園派(王維、孟浩然)",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：吳均字「叔庠」，南朝梁駢文大家（吳均體，代表作《與宋元思書》），曾任「奉朝請」；「山水田園派」為「盛唐」詩歌流派（代表為王維、孟浩然），朝代與文體流派皆不合！",
    "stem": "若要上網搜尋吳均的相關資料，下列哪一個關鍵詞最「不適合」？\n\n○ (A) 駢文名家\n○ (B) 奉朝請\n◉ (C) 山水田園派\n○ (D) 叔庠",
    "answer": "(C) 山水田園派",
    "explanation": "吳均為南朝梁著名文學家，字叔庠，官至奉朝請，長於描寫山水的駢體散文（吳均體）；「山水田園派」為唐代詩歌流派，代表人物為王維與孟浩然。故選 (C)。",
    "diagramUrl": "",
    "solution": "吳均為南朝梁著名文學家，字叔庠，官至奉朝請，長於描寫山水的駢體散文（吳均體）；「山水田園派」為唐代詩歌流派，代表人物為王維與孟浩然。故選 (C)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_isosceles_trapezoid_shaded_area_522",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何證明與圓形／圓內接四邊形與平行弦截等弧／等腰直角三角形求圓半徑／等腰梯形高與陰影面積",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 平行弦截等弧：線段 AD // 線段 BC ⇒ 弧 AB = 弧 CD ⇒ 線段 AB = 線段 CD（等腰梯形）。2. 弧 AB = 90° ⇒ ∠AOB = 90°，由等腰直角 △AOB 算圓半徑：2r² = (5√2)² ⇒ r = 5（圓面積 25π）。3. 梯形作雙高，底邊差除以 2 得股長 1，由畢氏定理算出梯形高為 7，梯形面積 49。",
    "stem": "如右圖，四邊形 ABCD 為圓內接四邊形，線段 AD // 線段 BC，弧 AB = 90°，且線段 AD = 6，線段 BC = 8，線段 AB = 5√2，則塗色部分的面積為何？\n\n◉ (A) 25π - 49\n○ (B) 25π - 50\n○ (C) 25π - 64\n○ (D) 25π - 65",
    "answer": "(A) 25π - 49",
    "explanation": "B = 90° ⇒ △AOB 為等腰直角三角形：2r² = (5√2)² ⇒ 半徑 r = 5，圓面積 = 25π。 故選 (A)。",
    "diagramUrl": "assets/questions/math_q522_inscribed_trapezoid_circle_area.png",
    "solution": "B = 90° ⇒ △AOB 為等腰直角三角形：2r² = (5√2)² ⇒ 半徑 r = 5，圓面積 = 25π。 故選 (A)。"
  },
  {
    "id": "q_sci_earth_cross_section_age_dating_erosion_surfaces_uplift_521",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地質學／地層剖面年代推算／截切定律應用／侵蝕面與地殼抬升次數推論",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：地層在水下「沉積」，必須「地殼抬升露出水面」才會遭受「侵蝕」！剖面中共有 3 個侵蝕面（B-C、A-B 與目前地表），代表陸地至少經歷 3 次抬升！依截切定律，甲截切 A（5萬年）故甲<5萬年；丙截切 C（14萬年）故丙<14萬年；乙截切丙故乙晚於丙。",
    "stem": "右圖為某地層的剖面圖，A、B、C 為沉積地層，甲、乙為侵入岩脈，丙為斷層。若 A 岩層沉積至今有 5 萬年，B 岩層形成至今有 10 萬年，C 岩層形成至今已有 14 萬年，下列推論何者合理？\n\n○ (A) 甲岩脈距今可能有 8 萬年\n○ (B) 乙岩脈侵入時間比丙斷層形成時間早\n○ (C) 丙斷層距今可能至少有 15 萬年\n◉ (D) 此處至少曾發生過陸地被抬升 3 次",
    "answer": "(D) 此處至少曾發生過陸地被抬升 3 次",
    "explanation": "圖中共有 3 個侵蝕面（B-C、A-B 與目前地表），表示陸地至少曾抬升露出水面受侵蝕 3 次。故選 (D)。",
    "diagramUrl": "assets/questions/science_q521_geological_cross_section_erosion_uplift.png",
    "solution": "圖中共有 3 個侵蝕面（B-C、A-B 與目前地表），表示陸地至少曾抬升露出水面受侵蝕 3 次。故選 (D)。"
  },
  {
    "id": "q_sci_earth_taiwan_earthquake_deep_subduction_intensity_scale_520",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地震學與臺灣地質／深層地震與隱沒帶方向／菲律賓海板塊向北隱沒至歐亞板塊下／規模唯一與震度差異",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：臺灣東北部隱沒方向為「菲律賓海板塊向北隱沒至歐亞板塊之下」，愈往北震源愈深（本題深達 271.3 公里！）；全臺測得「規模」相同，但地質鬆軟處可能震度較大，故距震央近不代表震度一定最大。",
    "stem": "【題組】圖(一)為某次地震報告資料，圖(二)為臺灣附近的板塊交界示意圖。\n\n下列關於此次地震的敘述，何者錯誤？\n\n○ (A) 宜蘭的搖晃程度比臺東大\n○ (B) 愈接近震央不見得震度會愈大\n○ (C) 全臺各地的芮氏規模數值應相同\n◉ (D) 從震源深度及隱沒方向可知，此次地震的成因為歐亞板塊隱沒至菲律賓海板塊之下",
    "answer": "(D) 從震源深度及隱沒方向可知，此次地震的成因為歐亞板塊隱沒至菲律賓海板塊之下",
    "explanation": "(D) 錯誤，震央在臺灣東北外海，深度達 271.3 公里，成因為「菲律賓海板塊向北隱沒至歐亞板塊之下」；全臺芮氏規模相同（7.2），",
    "diagramUrl": "assets/questions/science_q519_q520_taiwan_earthquake_plate_map.png",
    "solution": "(D) 錯誤，震央在臺灣東北外海，深度達 271.3 公里，成因為「菲律賓海板塊向北隱沒至歐亞板塊之下」；全臺芮氏規模相同（7.2），"
  },
  {
    "id": "q_sci_earth_taiwan_earthquake_epicenter_plate_boundary_map_519",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地震學與臺灣地質／地震報告判讀／震央經緯度座標對照臺灣板塊交界圖／歐亞板塊 vs. 菲律賓海板塊",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：中央氣象署地震報告標註震央在「北緯 25.38°、東經 122.42°」（基隆東北東方海域）。對照圖(二)，臺灣北部以「琉球海溝」為界，琉球海溝以北（含宜蘭海域、基隆外海）上方均屬於「歐亞板塊」！",
    "stem": "【題組】圖(一)為某次地震報告資料，圖(二)為臺灣附近的板塊交界示意圖。\n\n根據圖(二)判斷，此次地震的震央位置位於何處？\n\n○ (A) 琉球海溝\n◉ (B) 歐亞板塊\n○ (C) 菲律賓海板塊\n○ (D) 呂宋島弧",
    "answer": "(B) 歐亞板塊",
    "explanation": "依資料顯示震央位置為北緯 25.38°、東經 122.42°（基隆東北東方海域，紅星處）。對照圖(二)板塊交界帶，該震央座標位於琉球海溝北側的「歐亞板塊」上。故選 (B)。",
    "diagramUrl": "assets/questions/science_q519_q520_taiwan_earthquake_plate_map.png",
    "solution": "依資料顯示震央位置為北緯 25.38°、東經 122.42°（基隆東北東方海域，紅星處）。對照圖(二)板塊交界帶，該震央座標位於琉球海溝北側的「歐亞板塊」上。故選 (B)。"
  },
  {
    "id": "q_sci_earth_earthquake_intensity_scale_damage_shaking_518",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地震學／地震規模(唯一、代表能量) vs. 地震震度(多個、代表地表晃動程度)／震度非線性倍數關係",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：同一場地震「規模（釋放總能量）只有一個」且各地皆同，能量無倍數之分；「震度」代表當地「地表搖晃程度與破壞程度」，4 級搖晃大於 2 級，但震度級數與破壞程度絕非 2 倍線性關係！",
    "stem": "某一場地震，測得甲地為 4 級，乙地為 2 級，請問下列敘述何者正確？\n\n○ (A) 甲地釋放的能量為乙地的 2 倍\n○ (B) 甲地破壞程度為乙地的 2 倍\n○ (C) 甲地的震源深度，遠比乙地的深\n◉ (D) 甲地地表的搖晃程度較乙地大",
    "answer": "(D) 甲地地表的搖晃程度較乙地大",
    "explanation": "同場地震釋放總能量（規模）與震源深度皆唯一相同；震度表示地表感受之搖晃與破壞程度，甲地 4 級搖晃程度大於乙地 2 級，但非 2 倍線性關係。故選 (D)。",
    "diagramUrl": "",
    "solution": "同場地震釋放總能量（規模）與震源深度皆唯一相同；震度表示地表感受之搖晃與破壞程度，甲地 4 級搖晃程度大於乙地 2 級，但非 2 倍線性關係。故選 (D)。"
  },
  {
    "id": "q_sci_earth_taiwan_volcanic_islands_basalt_andesite_penghu_517",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／臺灣地質與火成岩／火山島嶼岩石種類對照／澎湖群島(玄武岩) vs. 龜山島綠島蘭嶼(安山岩)",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：臺灣火山島岩石口訣：「澎湖獨特玄武岩，其餘火山多安山」！澎湖群島為地函岩漿噴發形成之「玄武岩」；而大屯火山、龜山島、綠島、蘭嶼皆為板塊隱沒帶造山活動噴發形成之「安山岩」。",
    "stem": "臺灣因板塊活動，曾發生過許多火山活動，留下許多火山島，下列哪一處的火成岩種類與其他三者明顯不同？\n\n◉ (A) 澎湖\n○ (B) 龜山島\n○ (C) 綠島\n○ (D) 蘭嶼",
    "answer": "(A) 澎湖",
    "explanation": "澎湖群島為玄武岩組成；龜山島、綠島、蘭嶼則為板塊聚合隱沒帶火山噴發形成之安山岩。故選 (A)。",
    "diagramUrl": "",
    "solution": "澎湖群島為玄武岩組成；龜山島、綠島、蘭嶼則為板塊聚合隱沒帶火山噴發形成之安山岩。故選 (A)。"
  },
  {
    "id": "q_sci_earth_disaster_earthquake_safety_measures_516",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／天然災害與防震防災／地震就地避難三步驟(趴下、掩護、穩住)／耐震設計、禁搭電梯與防海嘯",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：地震發生劇烈搖晃時應立即落實「趴下、掩護、穩住」保護頭部，絕不可貿然在劇烈晃動中跑去開關門，否則極易被掉落物砸傷或跌倒受傷！建築耐震、禁搭電梯、海邊防海嘯往高處避難皆為正確防災措施。",
    "stem": "臺灣地處環太平洋地震帶上，因此人民特別要對地震災害防災事項加以注意，下列哪一項與預防震災無關？\n\n◉ (A) 地震時，盡快關閉大門，避免被門邊的倒塌物襲擊\n○ (B) 建築物建築時，加強耐震設計，以保護生命財產安全\n○ (C) 地震時不可搭乘電梯，以免發生危險\n○ (D) 發生大地震後，在海邊的人應盡量往高處及空曠處避難",
    "answer": "(A) 地震時，盡快關閉大門，避免被門邊的倒塌物襲擊",
    "explanation": "地震強烈搖晃時應立即遵守「趴下、掩護、穩住」原則保護頭頸部，貿然跑去關門反而容易在移動過程中被掉落物砸傷或跌倒受困，並非正確防震措施。故選 (A)。",
    "diagramUrl": "",
    "solution": "地震強烈搖晃時應立即遵守「趴下、掩護、穩住」原則保護頭頸部，貿然跑去關門反而容易在移動過程中被掉落物砸傷或跌倒受困，並非正確防震措施。故選 (A)。"
  },
  {
    "id": "q_sci_earth_interior_layers_lithosphere_earthquake_focus_515",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地球內部結構／岩石圈(地殼+上部地函頂部) vs. 軟流圈／板塊運動與地震震源分佈深度",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：板塊即為「岩石圈」，由「地殼（甲）」加上「上部地函頂部（乙）」組成，厚度約 100 公里，屬於堅硬冷脆的岩石。板塊碰撞錯動產生的「地震震源」幾乎都發生在此表淺的岩石圈（甲、乙）範圍內！軟流圈（丙）具可塑性，不易累積應力破裂。",
    "stem": "右圖為已知的地球內部結構示意圖，從板塊運動的觀點來說，其震源最可能位在圖中的哪一些部分？\n\n◉ (A) 甲、乙\n○ (B) 乙、丙\n○ (C) 丙、丁\n○ (D) 丁、戊",
    "answer": "(A) 甲、乙",
    "explanation": "板塊（岩石圈）包含地殼（甲）與地函最頂部（乙），厚度約 100 公里，為堅硬具脆性的岩石圈。 故選 (A)。",
    "diagramUrl": "assets/questions/science_q515_earth_interior_lithosphere_earthquake.png",
    "solution": "板塊（岩石圈）包含地殼（甲）與地函最頂部（乙），厚度約 100 公里，為堅硬具脆性的岩石圈。 故選 (A)。"
  },
  {
    "id": "q_sci_earth_fold_fault_comparison_compression_stress_514",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地質構造／褶皺 vs. 斷層異同比較／地應力受力機制(擠壓 vs. 張力)／破裂錯動特徵",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：褶皺「只能由擠壓」形成（地下深處塑性彎曲，無錯動）；斷層則受「擠壓（逆斷層）」或「張裂（正斷層）」皆可形成（有破裂錯動）。因此兩者的「共同之處」就是「皆可由地殼擠壓產生」！",
    "stem": "下列哪一個是褶皺和斷層的相同之處？\n\n○ (A) 岩層皆產生明顯的錯動\n○ (B) 皆可由地殼的張裂產生\n◉ (C) 皆可由地殼的擠壓產生\n○ (D) 皆可由地殼的侵蝕產生",
    "answer": "(C) 皆可由地殼的擠壓產生",
    "explanation": "擠壓可形成褶皺，亦可形成逆斷層，故皆可由擠壓產生；(D) 兩者皆為內營力構造，非侵蝕所致。故選 (C)。",
    "diagramUrl": "",
    "solution": "擠壓可形成褶皺，亦可形成逆斷層，故皆可由擠壓產生；(D) 兩者皆為內營力構造，非侵蝕所致。故選 (C)。"
  },
  {
    "id": "q_sci_earth_taroko_marble_fold_plate_compression_513",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地質構造與岩石／太魯閣大理岩(變質岩)／波浪狀彎曲褶皺／板塊擠壓作用環境",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：岩壁「波浪狀彎曲」構造為「褶皺」，由地下深處高溫高壓環境下受到板塊強烈「水平擠壓」塑性變形而成；大理岩亦是由石灰岩經高溫高壓變質而成，均印證此處受擠壓作用。",
    "stem": "小豪到太魯閣國家公園進行校外教學，除見到大量大理岩分布外，另在公路岩壁上發現有波浪狀彎曲的地質構造，由此觀察可推知太魯閣國家公園的地下深處最可能為下列哪一種環境？\n\n○ (A) 屬於熔融的液態層\n○ (B) 溫度比地表層低\n○ (C) 板塊正在張裂\n◉ (D) 板塊受到擠壓作用",
    "answer": "(D) 板塊受到擠壓作用",
    "explanation": "波浪狀彎曲的地質構造為「褶皺」，大理岩為石灰岩經高溫高壓形成的「變質岩」，兩者皆顯示該地地下深處處於板塊受到強烈「擠壓作用」的環境。故選 (D)。",
    "diagramUrl": "",
    "solution": "波浪狀彎曲的地質構造為「褶皺」，大理岩為石灰岩經高溫高壓形成的「變質岩」，兩者皆顯示該地地下深處處於板塊受到強烈「擠壓作用」的環境。故選 (D)。"
  },
  {
    "id": "q_sci_earth_plate_convergent_continental_oceanic_subduction_volcano_512",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／板塊構造學說／大陸地殼(花崗岩) vs. 海洋地殼(玄武岩)／聚合隱沒帶地質特徵／火山島弧與山脈",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：Ⅰ為花崗岩＝「大陸地殼」（密度小）；與其屬性不同的Ⅱ為玄武岩＝「海洋地殼」（密度大）。兩者在甲處「聚合」時，密度大的海洋地殼（東側）向西側大陸地殼下方「隱沒」，深融後的岩漿會在「甲處西側（大陸地殼上）」噴出形成火山山脈！",
    "stem": "【題組】參考右圖，甲是不同板塊聚合的邊界，且Ⅰ與Ⅱ是屬性不同的地殼，而已知Ⅰ的組成為花崗岩。\n\n有關本圖的推論，下列何者正確？\n\n○ (A) 甲處有明顯軟流圈熱對流上升的狀況\n○ (B) 甲處東側會出現高大褶皺山脈\n◉ (C) 甲處西側可能會有岩漿湧出地表\n○ (D) 甲處東側會出現中洋脊構造",
    "answer": "(C) 甲處西側可能會有岩漿湧出地表",
    "explanation": "Ⅰ為花崗岩（大陸地殼），屬性不同的Ⅱ為玄武岩（海洋地殼）。 故選 (C)。",
    "diagramUrl": "assets/questions/science_q512_continental_oceanic_plate_subduction.png",
    "solution": "Ⅰ為花崗岩（大陸地殼），屬性不同的Ⅱ為玄武岩（海洋地殼）。 故選 (C)。"
  },
  {
    "id": "q_sci_earth_plate_boundaries_geological_features_iceland_trench_511",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／板塊構造學說／板塊邊界地質現象／張裂性邊界(玄武岩、中洋脊、冰島) vs. 聚合性邊界(海溝、造山運動、安山岩)",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：板塊「分離處（張裂性）」主產「玄武岩」、中洋脊與裂谷，冰島即為中洋脊露出海面處；板塊「聚合處」才會有海洋板塊隱沒之「海溝」、造山運動與「安山岩」質火山。",
    "stem": "有關各種板塊的地質現象描述，下列何者正確？\n\n○ (A) 板塊分離處——安山岩質火山\n○ (B) 板塊分離處——造山運動\n◉ (C) 板塊聚合處——海溝的形成\n○ (D) 板塊聚合處——冰島的形成",
    "answer": "(C) 板塊聚合處——海溝的形成",
    "explanation": "板塊聚合隱沒處會形成深邃的海溝與褶皺造山帶，故正確；(D) 冰島屬於板塊分離處的大西洋中洋脊露出海面的部分。故選 (C)。",
    "diagramUrl": "",
    "solution": "板塊聚合隱沒處會形成深邃的海溝與褶皺造山帶，故正確；(D) 冰島屬於板塊分離處的大西洋中洋脊露出海面的部分。故選 (C)。"
  },
  {
    "id": "q_sci_earth_himalayas_continental_collision_volcanism_510",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／板塊擠壓碰撞與造山運動／大陸與大陸板塊聚合／喜馬拉雅山／玄武岩漿湧出特徵",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：喜馬拉雅山為「大陸地殼撞大陸地殼」（印澳板塊撞歐亞板塊），密度相當無法隱沒，因此產生劇烈造山隆起、強震與褶皺，但「幾乎沒有火山噴發」！玄武岩漿主要出現在「張裂性板塊邊界」（如中洋脊、冰島）或熱點。",
    "stem": "右圖為喜馬拉雅山形成的示意圖，下列敘述何者錯誤？\n\n○ (A) 此處為大陸地殼與大陸地殼相聚合，故地震很多\n○ (B) 在造山運動過程，地殼受到板塊彼此推撞而隆起形成山脈\n○ (C) 因板塊聚合作用，此處岩層多褶皺及斷層\n◉ (D) 喜馬拉雅山一帶常湧出玄武岩漿",
    "answer": "(D) 喜馬拉雅山一帶常湧出玄武岩漿",
    "explanation": "(D) 玄武岩漿湧出為「張裂性板塊邊界」（如中洋脊）或熱點之特徵。喜馬拉雅山為大陸地殼與大陸地殼碰撞造山，岩層褶皺劇烈、地震頻繁，但幾乎無火山與岩漿噴發活動。故選 (D)。",
    "diagramUrl": "assets/questions/science_q510_himalayas_collision_diagram.png",
    "solution": "(D) 玄武岩漿湧出為「張裂性板塊邊界」（如中洋脊）或熱點之特徵。喜馬拉雅山為大陸地殼與大陸地殼碰撞造山，岩層褶皺劇烈、地震頻繁，但幾乎無火山與岩漿噴發活動。故選 (D)。"
  },
  {
    "id": "q_sci_earth_plate_tectonics_boundary_divergent_convergent_509",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／板塊構造學說／板塊交界帶類型／張裂性邊界 vs. 聚合性邊界／熱對流升降與地殼新生隱沒",
    "uploadDate": "2026-11-22",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：箭頭向兩側拉開（甲）＝「張裂性交界」，軟流圈熱對流「上升」，岩漿湧出冷卻為「新地殼」（如中洋脊）；箭頭相對擠壓隱沒（乙）＝「聚合性交界」，熱對流「下降」，「老地殼」隱沒消滅（如海溝）。",
    "stem": "右圖是板塊運動的示意圖，有關甲、乙不同板塊交界帶的敘述，下列哪一項正確？\n\n○ (A) 甲處軟流圈熱對流下降，乙處軟流圈熱對流上升\n○ (B) 甲處可能形成海溝，乙處可能形成中洋脊\n◉ (C) 甲處是新地殼生成的地方，乙處是老地殼隱沒的地方\n○ (D) 甲處一定在陸地上，乙處一定在海底",
    "answer": "(C) 甲處是新地殼生成的地方，乙處是老地殼隱沒的地方",
    "explanation": "正確，張裂處為新地殼生成處，隱沒帶為老地殼隱沒消滅處；(D) 圖中甲處與乙處皆位於海底。故選 (C)。",
    "diagramUrl": "assets/questions/science_q509_plate_tectonics_boundary.png",
    "solution": "正確，張裂處為新地殼生成處，隱沒帶為老地殼隱沒消滅處；(D) 圖中甲處與乙處皆位於海底。故選 (C)。"
  },
  {
    "id": "q_sci_earth_geological_cross_section_fault_dike_order_508",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地科／地層剖面與地質事件／截切定律／正斷層受張力／相對地質年代判斷",
    "uploadDate": "2026-11-21",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：依「截切定律」，被截切者較老、截切人者較新。X-Y 斷層與甲岩脈未互相接觸或截切，兩者無法直接比較先後順序！另外，斷層上盤相對向下移為「正斷層」，由地殼「張力」拉扯形成。",
    "stem": "右圖為某處之地層剖面示意圖，有關地質事件發生的先後順序，下列何者正確？\n\n○ (A) 砂岩形成比甲岩脈晚\n○ (B) X-Y 斷層形成一定比礫岩早\n◉ (C) 無法判斷 X-Y 斷層和甲岩脈形成的先後\n○ (D) 此處斷層是受壓力作用形成",
    "answer": "(C) 無法判斷 X-Y 斷層和甲岩脈形成的先後",
    "explanation": "X-Y 斷層與甲岩脈無互相影響，無法判斷生成先後；(D) 上盤相對下移為正斷層，應是受張力作用形成。故選 (C)。",
    "diagramUrl": "assets/questions/science_q508_geological_cross_section.png",
    "solution": "X-Y 斷層與甲岩脈無互相影響，無法判斷生成先後；(D) 上盤相對下移為正斷層，應是受張力作用形成。故選 (C)。"
  },
  {
    "id": "q_soc_civ_interest_group_lobbying_legislator_attitude_table_507",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民／利益團體與政策遊說／國會審議法案與民意表達／理性審議與議員職權分析",
    "uploadDate": "2026-11-21",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：遊說是利益團體或民眾向國會議員表達訴求的合法管道（民主政體常見運作方式）。議員未表態可能出於審慎評估、多方權衡或維持中立，絕不能直接扣上「失職」的罪名。",
    "stem": "附表是國會審議某法案，議員在接受遊說前後，對於法案態度的變化統計。根據內容判斷，下列敘述何者最不合理？\n\n【調查統計表】\n・支持法案的議員比例：進行遊說前 10% ➔ 進行遊說後 60%\n・反對法案的議員比例：進行遊說前 10% ➔ 進行遊說後 30%\n・未表態的議員比例：進行遊說前 80% ➔ 進行遊說後 10%\n\n○ (A) 該國屬於民主政體\n○ (B) 公共意見對政策有影響力\n◉ (C) 未表態的議員失職\n○ (D) 遊說可以有效的影響政策",
    "answer": "(C) 未表態的議員失職",
    "explanation": "遊說是民主政體中合法的民意與利益表達途徑，統計顯示遊說後支持與反對比例皆有明顯變動（未表態大幅下降），顯示遊說與公共意見對政策確實具影響力。 故選 (C)。",
    "diagramUrl": "",
    "solution": "遊說是民主政體中合法的民意與利益表達途徑，統計顯示遊說後支持與反對比例皆有明顯變動（未表態大幅下降），顯示遊說與公共意見對政策確實具影響力。 故選 (C)。"
  },
  {
    "id": "q_soc_civ_local_government_special_municipality_merger_legislative_yuan_506",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民／地方制度法與法規位階／法律修訂權責在立法院／直轄市改制程序與山地原住民區自治",
    "uploadDate": "2026-11-21",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：《地方制度法》屬立法院制定的「中央法律」，地方議會只能制定「自治條例」，無權修訂《地方制度法》；縣市合併改制為直轄市由內政部報請行政院核定即可。",
    "stem": "根據我國《地方制度法》規定：縣（市）擬改制為直轄市，縣（市）政府得擬訂改制計畫，經縣（市）議會同意後，由內政部報請行政院核定之。若此項提案通過，新竹縣當地具有泰雅與賽夏兩大族群文化的五峰鄉，將配合修改選舉制度。\n關於這則政壇新聞，從法律角度來看，哪一項分析是錯誤的？\n\n◉ (A) 須由地方議會通過《地方制度法》的修正案才生效\n○ (B) 五峰鄉將選出「山地原住民區」的區長與區民代表\n○ (C) 若改革完成，將同時減少一個縣政府與一個市政府\n○ (D) 改制後的直轄市長候選人，年齡至少須年滿30歲",
    "answer": "(A) 須由地方議會通過《地方制度法》的修正案才生效",
    "explanation": "《地方制度法》的修訂權責機關為立法院。選 (A)。",
    "diagramUrl": "",
    "solution": "《地方制度法》的修訂權責機關為立法院。選 (A)。"
  },
  {
    "id": "q_soc_civ_local_government_county_administered_city_councilor_puzi_505",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民／地方自治組織／地方民意代表／縣轄市 (嘉義縣朴子市) 市民代表會之「市民代表」",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：嘉義縣朴子市為「縣轄市」，其立法機關地方民意代表為「市民代表」（非市議員）；縣長為行政首長非民意代表，市議員為直轄市/市（省轄市）民意代表，立委為中央民意代表。",
    "stem": "居住在嘉義縣朴子市的宏達，因覺得住家周遭的路燈照明不足，讓經常工作晚歸的他感到危險，於是向當地的地方民意代表陳情，希望能獲得相關單位的重視。根據上述內容判斷，宏達所陳情的對象最可能是下列何者？〔102.試辦會考〕\n\n○ (A) 縣長\n○ (B) 市議員\n○ (C) 立法委員\n◉ (D) 市民代表",
    "answer": "(D) 市民代表",
    "explanation": "文中提到嘉義縣朴子市當地的地方民意代表，因此可知是市民代表。選 (D)。",
    "diagramUrl": "",
    "solution": "文中提到嘉義縣朴子市當地的地方民意代表，因此可知是市民代表。選 (D)。"
  },
  {
    "id": "q_eng_grammar_noun_clause_if_whether_subject_verb_agreement_goes_504",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句／if (是否) 引導間接問句語序 (S + V) 與三單現在式動詞 (goes)",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：間接問句兩大核心原則：① 絕不倒裝（不可用助動詞倒裝 ✘ does S go）；② 主詞與動詞時態一致（主詞為三單時，動詞切勿漏掉 -es ✘ go ➔ ✔ goes）。",
    "stem": "I'm not sure if ________ to the temple every weekend.\n\n○ (A) my grandmother go\n◉ (B) my grandmother goes\n○ (C) my grandmother does go\n○ (D) does my grandmother go",
    "answer": "(B) my grandmother goes",
    "explanation": "if（是否）引導名詞子句，須用直述肯定語序 (S + V)。主詞 my grandmother 為第三人稱單數，動詞 go 須變為 goes。選 (B)。",
    "diagramUrl": "",
    "solution": "if（是否）引導名詞子句，須用直述肯定語序 (S + V)。主詞 my grandmother 為第三人稱單數，動詞 go 須變為 goes。選 (B)。"
  },
  {
    "id": "q_eng_grammar_noun_clause_what_preposition_object_surprised_at_503",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句／疑問代名詞 what 作介系詞受詞／情緒動詞與形容詞 (be surprised at)",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：what 在間接問句中作代名詞，子句內必須有受詞空缺供其歸位！(A) 缺少介系詞 at，what 無處可放；牢記「be surprised at + 事物」，句末不可遺漏介系詞 at。",
    "stem": "I have no idea what ________.\n\n○ (A) Kevin feels surprised\n○ (B) Kevin is surprising to\n◉ (C) Kevin is surprised at\n○ (D) Kevin surprised",
    "answer": "(C) Kevin is surprised at",
    "explanation": "「對……感到驚訝」為 be surprised at。 故選 (C)。",
    "diagramUrl": "",
    "solution": "「對……感到驚訝」為 be surprised at。 故選 (C)。"
  },
  {
    "id": "q_eng_grammar_wh_infinitive_rewrite_where_to_go_jiayi_beixing_502",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句簡化／疑問詞 + 不定詞 (wh- + to V) 句型改寫",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：名詞子句簡化為「疑問詞 + 不定詞（wh- + to V）」三要件：① 子句主詞與主要子句主詞一致；② 刪除主詞與助動詞 (can/should)；③ 動詞改為不定詞 (to V)。",
    "stem": "依提示改寫句子：【嘉義北興】\nLily isn't sure where she can go after school.（用 wh- 不定詞改寫句子）\n\n◉ (A) Lily isn't sure where to go after school.\n○ (B) Lily isn't sure where she to go after school.\n○ (C) Lily isn't sure what to go after school.\n○ (D) Lily isn't sure where to can go after school.",
    "answer": "(A) Lily isn't sure where to go after school.",
    "explanation": "名詞子句主詞 (she) 與主要子句主詞 (Lily) 一致，且含助動詞 can，可簡化為「疑問詞 + 不定詞 (where to go)」。選 (A)。",
    "diagramUrl": "",
    "solution": "名詞子句主詞 (she) 與主要子句主詞 (Lily) 一致，且含助動詞 can，可簡化為「疑問詞 + 不定詞 (where to go)」。選 (A)。"
  },
  {
    "id": "q_eng_grammar_noun_clause_indirect_question_happen_tainan_fuxing_501",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句／間接問句語序 (疑問詞 + S + V)／happen 不及物動詞用法",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：happen 為「不及物動詞」，主詞須為「事情」（如 what happened / this happened），不可用「人」作主詞（如 ✘ he happened）；間接問句不與 that 連用。",
    "stem": "Does anyone know ________? 【臺南復興】\n\n◉ (A) how this could happen\n○ (B) what he happened\n○ (C) that what happened to him\n○ (D) what to happen",
    "answer": "(A) how this could happen",
    "explanation": "語序正確；(B)應改 what happened to him；(C)刪 that；(D)改 what happened。選 (A)。",
    "diagramUrl": "",
    "solution": "語序正確；(B)應改 what happened to him；(C)刪 that；(D)改 what happened。選 (A)。"
  },
  {
    "id": "q_math_geo_intersecting_circles_inscribed_angle_p_500",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何／圓形／兩圓相交性質／等腰三角形（同圓半徑等長）／圓心角與圓周角度數關係",
    "uploadDate": "2026-11-19",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：A 點在圓 O 上，故 OA = OB 均為圓 O 半徑，△OAB 為等腰三角形；由對稱性得 弧BAC = 40° + 40° = 80°，圓周角 ∠P 為所對弧度數的一半（40°）。",
    "stem": "如右圖，圓 O 與圓 A 相交於 B、C 兩點，P 為圓 O 上一點，若 ∠ABO = 70°，則 ∠P = ？\n\n◉ (A) 40°\n○ (B) 45°\n○ (C) 52°\n○ (D) 70°",
    "answer": "(A) 40°",
    "explanation": "= OB ⇨ ∠BAO = ∠ABO = 70°。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_intersecting_circles_inscribed_angle_p_500.png",
    "solution": "= OB ⇨ ∠BAO = ∠ABO = 70°。 故選 (A)。"
  },
  {
    "id": "q_math_geo_circle_exterior_angles_inscribed_quadrilateral_499",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何／圓形／圓內接四邊形外角性質／三角形外角定理／圓周角與弧度推導",
    "uploadDate": "2026-11-19",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：善用圓內接四邊形外角等於內對角（∠ABP = ∠ADC = x°）與三角形外角定理（∠BAP = x + 40°），在 △ABP 中解出 x = 55° 得 弧ABC = 110°；再由 △ACR 外角求出圓周角 ∠CAR = 30°，兩弧相減即得 弧AB = 50°。",
    "stem": "如右圖，P、R 為圓外兩點，線段 RA 和 線段 RD 交圓於 B、C 兩點，線段 PD 和 線段 PC 交圓於 A、B 兩點，若 ∠P = 30°，∠R = 40°，∠ACD = 70°，則 弧AB 的度數為何？\n\n○ (A) 48°\n◉ (B) 50°\n○ (C) 52°\n○ (D) 55°",
    "answer": "(B) 50°",
    "explanation": "P = x°，△ADR 外角得 ∠BAP = x + 40°。 故選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_exterior_angles_inscribed_quadrilateral_499.png",
    "solution": "P = x°，△ADR 外角得 ∠BAP = x + 40°。 故選 (B)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_quadrilateral_parallel_chords_498",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何／圓形／平行弦截等弧與等弦對等弧／圓周角與直徑半圓弧度／等腰三角形邊長性質",
    "uploadDate": "2026-11-19",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：牢記「平行弦截等弧」（AD // BC ⇨ 弧AB = 弧CD）與「等弦對等弧」（AD = CD ⇨ 弧AD = 弧CD）；直徑 AE 對應半圓 180°，推得 ∠BAE = ∠BFA = 55° 形成等腰三角形。",
    "stem": "如右圖，四邊形 ABCD 為圓 O 的圓內接四邊形，線段 AD // 線段 BC，直徑 AE 和 線段 BC 相交於 F 點，線段 AD = 線段 CD = 6，若 ∠B = 70°，則 線段 BF = ？\n\n◉ (A) 6\n○ (B) 6√2\n○ (C) 6√3\n○ (D) 9√3",
    "answer": "(A) 6",
    "explanation": "D // BC 且 AD = CD ⇨ 弧AB = 弧AD = 弧CD。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quadrilateral_parallel_chords_498.png",
    "solution": "D // BC 且 AD = CD ⇨ 弧AB = 弧AD = 弧CD。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_usa_hurricane_occurrence_season_august_496",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲天然災害／颶風形成季節／夏秋之際 (8月海水溫度高)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：颶風為北半球熱帶氣旋，需高海溫提供蒸發潛熱，好發於夏、秋之際（7～10月，8月為高峰期）；冬春兩季海溫低不易形成。",
    "stem": "閱讀下列選文，回答第 23～24 題：\n\n　　颶風是一種熱帶氣旋，往往會帶來狂風豪雨等嚴重災情。2025年某月，美國東南方海域上有颶風艾琳生成，且在24小時內迅速增強為5級颶風。其路徑沿著美國東岸北上，雖未直接登陸美國本土，但豪雨以及狂風帶來的巨浪仍對美國東岸地區造成威脅。\n\n23. 由上述推測，此新聞最可能發生於何時？\n\n○ (A) 1月\n○ (B) 4月\n◉ (C) 8月\n○ (D) 11月",
    "answer": "(C) 8月",
    "explanation": "北美洲的颶風災害好發於夏、秋之際。選 (C)。",
    "diagramUrl": "",
    "solution": "北美洲的颶風災害好發於夏、秋之際。選 (C)。"
  },
  {
    "id": "q_soc_geo_usa_hurricane_atlantic_ocean_origin_497",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲天然災害與海域位置／美國東岸濱大西洋 (墨西哥灣與加勒比海颶風)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：美國東南方海域（墨西哥灣、加勒比海）以及美國東岸皆濱臨「大西洋」；美國西岸才濱臨太平洋。",
    "stem": "閱讀下列選文，回答第 23～24 題：\n\n　　颶風是一種熱帶氣旋，往往會帶來狂風豪雨等嚴重災情。2025年某月，美國東南方海域上有颶風艾琳生成，且在24小時內迅速增強為5級颶風。其路徑沿著美國東岸北上，雖未直接登陸美國本土，但豪雨以及狂風帶來的巨浪仍對美國東岸地區造成威脅。\n\n24. 根據上述判斷，颶風艾琳最可能在下列何處海域生成？\n\n○ (A) 北極海\n○ (B) 印度洋\n○ (C) 太平洋\n◉ (D) 大西洋",
    "answer": "(D) 大西洋",
    "explanation": "美國東岸濱大西洋。選 (D)。",
    "diagramUrl": "",
    "solution": "美國東岸濱大西洋。選 (D)。"
  },
  {
    "id": "q_soc_geo_north_america_climate_san_francisco_mediterranean_495",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲氣候分區／溫帶地中海型氣候／舊金山 (夏乾冬雨、夏季日照長降水少)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：6～8月（夏季）日照長、降水天數為 0，11～3月（冬季）降水天數多，典型「夏乾冬雨」地中海型氣候，對應加州舊金山（C）。西雅圖為溫帶海洋性、紐奧良為夏雨型暖溫帶。",
    "stem": "附圖是北美洲某一城市各月分日照時數與降水天數的資料，請按照圖中顯示的資訊判斷，該城市應為下列何者？\n\n○ (A) 美國西北部的西雅圖\n○ (B) 墨西哥灣沿岸的紐奧良\n◉ (C) 美國西南部沿海的舊金山\n○ (D) 洛磯山脈東側的拉斯維加斯",
    "answer": "(C) 美國西南部沿海的舊金山",
    "explanation": "6～8月日照長且降水天數少（夏乾冬雨），為溫帶地中海型氣候，選舊金山 (C)。",
    "diagramUrl": "assets/questions/q_soc_geo_north_america_climate_san_francisco_mediterranean_495.png",
    "solution": "6～8月日照長且降水天數少（夏乾冬雨），為溫帶地中海型氣候，選舊金山 (C)。"
  },
  {
    "id": "q_soc_geo_usa_traditional_manufacturing_belt_steel_494",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲工業發展／美國三大工業區／東北部五大湖傳統工業區 (甲，煤鐵原料豐富、傳統鋼鐵與汽車重工業中心)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：甲區為五大湖及東北部傳統製造業帶，鄰近阿帕拉契山煤礦與蘇必略湖鐵礦，具水運與原料優勢，為傳統鋼鐵與汽車重工業中心；石化多在墨西哥灣，航空在西雅圖，高科技在矽谷。",
    "stem": "美國雖然自1950年代起，第三級產業已取代工業成為主要產業，但仍是全球工業的領導者。美國工業分布具明顯區域專業化特徵，附圖是美國主要工業區與礦產分布圖，下列關於甲區工業發展優勢的敘述，何者正確？\n\n◉ (A) 原料豐富，傳統鋼鐵中心\n○ (B) 富油氣資源，石化工業發達\n○ (C) 飛機製造中心，航空工業著稱\n○ (D) 科技資訊業重鎮，科技人才充足",
    "answer": "(A) 原料豐富，傳統鋼鐵中心",
    "explanation": "甲位煤鐵產地，原料充足、具五大湖與聖羅倫斯河水運等優勢，發展傳統鋼鐵、汽車工業(重工業)。選 (A)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_traditional_manufacturing_belt_steel_494.png",
    "solution": "甲位煤鐵產地，原料充足、具五大湖與聖羅倫斯河水運等優勢，發展傳統鋼鐵、汽車工業(重工業)。選 (A)。"
  },
  {
    "id": "q_soc_geo_usa_agricultural_belts_dairy_liquid_milk_493",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲農業專業化／美國農業帶分佈／酪農帶 (甲，五大湖區與東北部) 液態乳與乳製品出口",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：液態乳＝酪農業產品！甲為東北部及五大湖區「酪農帶」（受惠零關稅液態乳出口）；乙為玉米帶、丙為小麥帶、丁為加州地中海型農業帶。",
    "stem": "新聞報導：「2026年2月，經過多次談判，我國與美國正式簽署『臺美對等貿易協定』（ART），未來美國液態乳進口臺灣將降至零關稅，由於進口成本下降，預期未來美國的液態乳進口量將顯著上升。」附圖是美國的專業化農作帶分布圖，哪一區域的農民將受惠於上述貿易協定，未來可擴大出口市場？\n\n◉ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(A) 甲",
    "explanation": "液態乳為酪農業產品，美國酪農帶主要分布於東北部五大湖區（甲）。選 (A)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_agricultural_belts_dairy_liquid_milk_493.png",
    "solution": "液態乳為酪農業產品，美國酪農帶主要分布於東北部五大湖區（甲）。選 (A)。"
  },
  {
    "id": "q_soc_geo_usa_wheat_belt_commercial_agriculture_features_492",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲農業特徵／美國大平原小麥帶／商業性穀物農業特色 (大面積單一作物、高度機械化、市場導向)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：美國中部小麥帶屬於典型「商業性穀物農業」（大農場、單一作物、高度機械化、產品售入市場）；「結合畜牧產業」屬於玉米帶的「混合農業」，題幹文句並未提及任何畜牧活動。",
    "stem": "「美國中部地區地勢平坦，夏季氣候溼熱，小麥的種植面積廣，農民主要用大型機械收割，農產不僅自足，同時亦足以供應市場。」由上述無法推判此區農業活動具有哪項特色？\n\n○ (A) 高度機械化\n◉ (B) 多結合畜牧產業\n○ (C) 具有商業性色彩\n○ (D) 大規模種單一作物",
    "answer": "(B) 多結合畜牧產業",
    "explanation": "小麥區具高度機械化、大面積單一作物及商業性市場供應特徵，文中並無提及結合畜牧活動。選 (B)。",
    "diagramUrl": "",
    "solution": "小麥區具高度機械化、大面積單一作物及商業性市場供應特徵，文中並無提及結合畜牧活動。選 (B)。"
  },
  {
    "id": "q_soc_geo_anglo_vs_latin_america_cultural_division_491",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲地理概述／美洲人文地理分區／盎格魯美洲 (英語系英國文化) vs 拉丁美洲 (拉丁語系西葡文化)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：美洲兩大分區依據：若依「自然地形/地峽」分為北美洲與南美洲（以巴拿馬地峽為界）；若依「語言與歷史文化」則以美墨邊界（格蘭河）分為「盎格魯美洲（英裔）」與「拉丁美洲（西葡裔）。",
    "stem": "廣大的美洲依據某種指標，可劃分為盎格魯美洲與拉丁美洲，其主要是以下列何者作為劃分依據？\n\n◉ (A) 文化差異\n○ (B) 地形種類\n○ (C) 使用貨幣\n○ (D) 氣候類型",
    "answer": "(A) 文化差異",
    "explanation": "依語言與殖民歷史之「文化差異」劃分：美加為英國英語系（盎格魯），其餘為西葡拉丁語系。選 (A)。",
    "diagramUrl": "",
    "solution": "依語言與殖民歷史之「文化差異」劃分：美加為英國英語系（盎格魯），其餘為西葡拉丁語系。選 (A)。"
  },
  {
    "id": "q_soc_geo_usa_house_seats_sparse_states_112cap_485",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／世界地理與美國人口／美國各州眾議院席次依人口分配／人口稀少州成因 (地形崎嶇、氣候嚴寒、缺乏工業)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：斜線州（如阿拉斯加因高緯寒冷、洛磯山脈各州因地形崎嶇、農牧為主缺乏工業），人口稀少是自然與產業環境所致，並非殖民地式經濟（殖民地經濟多指中南美洲或非洲熱帶栽培業）。",
    "stem": "根據《美國憲法》，眾議院的435席議員席次是按照各州人口數分配，而每10年會依據人口普查結果重新分配席次，且每個州至少有1個席次。附圖為不同年份各州眾議員席次的變化情形，其中僅有1席的州為圖中標示斜線的區域。影響美國各州人口多寡的因素眾多且不相同，觀察附圖中2020年眾議院席次僅有1席的州，下列何者與這些州人口少的原因較無關聯？〔112會考〕\n\n○ (A) 地形崎嶇\n○ (B) 工業就業機會少\n○ (C) 位居高緯且氣候嚴寒\n◉ (D) 深受殖民地式經濟影響",
    "answer": "(D) 深受殖民地式經濟影響",
    "explanation": "人口僅1席的州多因高緯寒冷、地形崎嶇或缺乏工業機會，與殖民地式經濟無關。選 (D)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_house_seats_sparse_states_112cap_485.png",
    "solution": "人口僅1席的州多因高緯寒冷、地形崎嶇或缺乏工業機會，與殖民地式經濟無關。選 (D)。"
  },
  {
    "id": "q_soc_geo_usa_city_los_angeles_hollywood_entertainment_486",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美國產業與城市分佈／西南沿海洛杉磯 (乙)／好萊塢影視與流行文化中心",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：乙為西南加州「洛杉磯」，是美國第二大城與好萊塢影視娛樂中心；甲為西雅圖、丙為芝加哥、丁為紐約、戊為休士頓。",
    "stem": "美國的工商業發達，附圖為美國的主要城市分布圖，請依敘述選出最符合的城市代號：\n「美國電視、電影等流行產業中心（好萊塢所在地）」為圖中何處？\n\n○ (A) 甲\n◉ (B) 乙\n○ (C) 丙\n○ (D) 丁\n○ (E) 戊",
    "answer": "(B) 乙",
    "explanation": "乙為加州洛杉磯，陽光充足，為好萊塢電視與電影流行文化產業中心。選 (B)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_major_cities_distribution_map_486.png",
    "solution": "乙為加州洛杉磯，陽光充足，為好萊塢電視與電影流行文化產業中心。選 (B)。"
  },
  {
    "id": "q_soc_geo_usa_city_new_york_wall_street_finance_487",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美國產業與城市分佈／東北沿海紐約 (丁)／華爾街全球金融商業中心",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：丁為大西洋沿岸「紐約」，是美國第一大城、聯合國總部與華爾街全球金融中心。",
    "stem": "美國的工商業發達，附圖為美國的主要城市分布圖，請依敘述選出最符合的城市代號：\n「全球金融中心、華爾街所在地」為圖中何處？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n◉ (D) 丁\n○ (E) 戊",
    "answer": "(D) 丁",
    "explanation": "丁為東大西洋岸紐約，擁有華爾街與證券交易所，為全球最大金融經濟中心。選 (D)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_major_cities_distribution_map_486.png",
    "solution": "丁為東大西洋岸紐約，擁有華爾街與證券交易所，為全球最大金融經濟中心。選 (D)。"
  },
  {
    "id": "q_soc_geo_usa_city_chicago_midwest_agriculture_trading_488",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美國產業與城市分佈／五大湖區芝加哥 (丙)／中西部農牧產品集散與期貨交易中心",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：丙為密西根湖畔「芝加哥」，是美國第三大城、鐵路水運樞紐，也是世界著名的大宗農畜產品期貨市場。",
    "stem": "美國的工商業發達，附圖為美國的主要城市分布圖，請依敘述選出最符合的城市代號：\n「美國中西部農、牧產品交易中心與水陸交通樞紐」為圖中何處？\n\n○ (A) 甲\n○ (B) 乙\n◉ (C) 丙\n○ (D) 丁\n○ (E) 戊",
    "answer": "(C) 丙",
    "explanation": "丙為五大湖畔芝加哥，鄰近玉米帶與乳酪帶，為中西部農牧產品集散期貨中心。選 (C)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_major_cities_distribution_map_486.png",
    "solution": "丙為五大湖畔芝加哥，鄰近玉米帶與乳酪帶，為中西部農牧產品集散期貨中心。選 (C)。"
  },
  {
    "id": "q_soc_geo_usa_city_houston_nasa_aerospace_petrochemical_489",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美國產業與城市分佈／墨西哥灣岸休士頓 (戊)／NASA 太空中心與石化工業重鎮",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：戊為墨西哥灣岸德州「休士頓」，登月名言「Houston, we have had a problem」即指此地 NASA 太空中心；鄰近產油區石化亦極度發達。",
    "stem": "美國的工商業發達，附圖為美國的主要城市分布圖，請依敘述選出最符合的城市代號：\n「美國 NASA 的研究中心，航太與石化工業發達」為圖中何處？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁\n◉ (E) 戊",
    "answer": "(E) 戊",
    "explanation": "戊為德州墨西哥灣岸休士頓，設有詹森太空中心，航太及石化工業鼎盛。選 (E)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_major_cities_distribution_map_486.png",
    "solution": "戊為德州墨西哥灣岸休士頓，設有詹森太空中心，航太及石化工業鼎盛。選 (E)。"
  },
  {
    "id": "q_soc_geo_usa_city_seattle_microsoft_boeing_aerospace_it_490",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美國產業與城市分佈／西北沿海西雅圖 (甲)／微軟、波音航空與高科技資訊重鎮",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：甲為太平洋西北角華盛頓州「西雅圖」，為溫帶海洋性氣候、水電豐富，孕育了波音航空航太、微軟軟體與亞馬遜總部。",
    "stem": "美國的工商業發達，附圖為美國的主要城市分布圖，請依敘述選出最符合的城市代號：\n「航空與資訊工業鼎盛，微軟（Microsoft）與波音在此設總部或重要工廠」為圖中何處？\n\n◉ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁\n○ (E) 戊",
    "answer": "(A) 甲",
    "explanation": "甲為西北部西雅圖，水源木材豐富且水電充沛，為波音航空與微軟資訊工業重鎮。選 (A)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_major_cities_distribution_map_486.png",
    "solution": "甲為西北部西雅圖，水源木材豐富且水電充沛，為波音航空與微軟資訊工業重鎮。選 (A)。"
  },
  {
    "id": "q_sci_chem_reaction_rate_caco3_hcl_co2_bubbles_484",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化／反應速率／反應快慢之測量方法／氣體產物 (CO₂) 冒出氣泡最易肉眼觀察與定量測量",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：測量反應速率優先選擇「有明顯外觀變化」者！生成物 CO₂ 為氣體，反應時會產生連續氣泡，可直接測量氣體體積或冒泡速率；而鹽酸與氯化鈣皆為無色水溶液，難以用肉眼直接觀察變化。",
    "stem": "已知 CaCO₃ ＋ 2HCl → CaCl₂ ＋ CO₂ ＋ H₂O，欲觀察此反應的快慢，以觀察哪一物質的變化最方便？\n\n◉ (A) CO₂\n○ (B) HCl\n○ (C) CaCO₃\n○ (D) CaCl₂",
    "answer": "(A) CO₂",
    "explanation": "CO₂ 為氣體產物，生成時會冒出氣泡，直接計算氣泡產生速率或收集氣體體積最方便觀察。選 (A)。",
    "diagramUrl": "",
    "solution": "CO₂ 為氣體產物，生成時會冒出氣泡，直接計算氣泡產生速率或收集氣體體積最方便觀察。選 (A)。"
  },
  {
    "id": "q_soc_geo_usa_climate_zones_taiwan_ding_111cap_483",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／世界氣候與美國地理／美國氣候分區與世界國家對照／臺灣副熱帶季風氣候（夏雨溫暖）對照美國東南部夏雨型暖溫帶氣候 (丁)",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：臺灣為「夏雨集中、溫暖潮濕」的副熱帶季風氣候，對照美國東南部丁處（墨西哥灣與佛羅里達沿岸之「夏雨型暖溫帶氣候」）；甲為溫帶海洋性、乙為乾燥草原、丙為溫帶大陸性。",
    "stem": "美國具有多樣化的氣候類型，附圖是將美國各區域與世界上其他國家的氣候特徵相比，把具有類似氣候特徵的國家標示在該區域上。臺灣最可能標示在圖中甲、乙、丙、丁何處？〔111會考〕\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n◉ (D) 丁",
    "answer": "(D) 丁",
    "explanation": "臺灣屬夏雨溫暖之副熱帶季風氣候，與美國東南部丁區（夏雨型暖溫帶氣候）最相符。選 (D)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_climate_zones_taiwan_ding_111cap_483.png",
    "solution": "臺灣屬夏雨溫暖之副熱帶季風氣候，與美國東南部丁區（夏雨型暖溫帶氣候）最相符。選 (D)。"
  },
  {
    "id": "q_chi_yu_song_yuan_si_shu_heng_ke_han_shu_echo_481",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／篇章結構與前後呼應／吳均《與宋元思書》「橫柯上蔽，在晝猶昏」與「夾岸高山，皆生寒樹」之文意呼應",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：章法前後呼應：「橫柯上蔽」的「柯」是樹枝，寫樹葉枝幹交錯蔽日；前文「夾岸高山，皆生寒樹」正是寫兩岸山壁茂密長青的樹林，兩者景物因果緊密相扣！",
    "stem": "《與宋元思書》文末作者所描述的「橫柯上蔽，在晝猶昏；疏條交映，有時見日。」與文中哪一句相呼應？\n\n○ (A) 風煙俱淨，天山共色\n○ (B) 從流飄蕩，任意東西\n◉ (C) 夾岸高山，皆生寒樹\n○ (D) 好鳥相鳴，嚶嚶成韻",
    "answer": "(C) 夾岸高山，皆生寒樹",
    "explanation": "1. 題幹釋義：「橫柯上蔽，在晝猶昏；疏條交映，有時見日」描寫富春江兩岸林木茂密、枝枒交錯遮蔽天日的景象。 故選 (C)。",
    "diagramUrl": "",
    "solution": "1. 題幹釋義：「橫柯上蔽，在晝猶昏；疏條交映，有時見日」描寫富春江兩岸林木茂密、枝枒交錯遮蔽天日的景象。 故選 (C)。"
  },
  {
    "id": "q_chi_epistolary_yu_song_yuan_si_shu_letter_format_482",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／應用文／書信格式與平輩稱謂／提稱語 (足下)、祝候語 (敬請惠安)、末啟詞 (弟 吳均 敬啟)",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：平輩書信三要素口訣：提稱用語用「足下／閣下」；祝候安好用「敬請 惠安／大安／台安」；自稱末啟詞用「敬啟／謹啟／頓首」！切記「如晤／手書」只用於晚輩、「尊前／叩請／叩上」只用於父母長輩。",
    "stem": "根據書信的繕寫格式，如果想為《與宋元思書》（吳均寄給平輩好友宋元思的書信）一文加上書信用語，下列寫法何者完全正確？\n\n○ (A) 提稱語：元思如晤／祝候語：恭請 誨安／自稱與末啟詞：弟 吳均 手書\n◉ (B) 提稱語：元思足下／祝候語：敬請 惠安／自稱與末啟詞：弟 吳均 敬啟\n○ (C) 提稱語：元思知之／祝候語：叩請 福安／自稱與末啟詞：弟 吳均 敬上\n○ (D) 提稱語：元思尊前／祝候語：順頌 時綏／自稱與末啟詞：弟 吳均 叩上",
    "answer": "(B) 提稱語：元思足下／祝候語：敬請 惠安／自稱與末啟詞：弟 吳均 敬啟",
    "explanation": "完全正確！「足下」為平輩提稱語；「敬請 惠安」為平輩祝候語；「弟 吳均 敬啟」為平輩自稱與末啟詞。 故選 (B)。",
    "diagramUrl": "assets/questions/q_chi_epistolary_yu_song_yuan_si_shu_letter_format_482.png",
    "solution": "完全正確！「足下」為平輩提稱語；「敬請 惠安」為平輩祝候語；「弟 吳均 敬啟」為平輩自稱與末啟詞。 故選 (B)。"
  },
  {
    "id": "q_chi_color_words_piao_bi_la_ju_cheng_hui_479",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／修辭與詞性／文言顏色詞辨析／「縹」為淺綠色／素 (白)、青 (黑)、丹 (紅) vs 蠟炬成「灰」 (灰燼名詞)",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：詞性與詞義辨析：(A)「素」是白、(B)「青」是黑、(C)「丹」是紅，皆為顏色詞；(D)「蠟炬成灰」的「灰」是燃燒後的「灰燼」（名詞實物），並非用作形容詞顏色詞！",
    "stem": "「水皆縹碧，千丈見底」句中的「縹」字是指「淺綠色」。下列「 」中的字，何者與顏色無關？\n\n○ (A) 留蚊於「素」帳中\n○ (B) 朝如「青」絲暮成雪\n○ (C) 發妙聲於「丹」脣\n◉ (D) 蠟炬成「灰」淚始乾",
    "answer": "(D) 蠟炬成「灰」淚始乾",
    "explanation": "蠟炬成「灰」淚始乾：「灰」在此指蠟燭燃燒殆盡後的「灰燼」（名詞實物），並非作為修飾顏色的形容詞。選 (D)。",
    "diagramUrl": "",
    "solution": "蠟炬成「灰」淚始乾：「灰」在此指蠟燭燃燒殆盡後的「灰燼」（名詞實物），並非作為修飾顏色的形容詞。選 (D)。"
  },
  {
    "id": "q_chi_yu_song_yuan_si_shu_zai_zhou_you_hun_ri_dang_wu_480",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／文意理解與時間詞／吳均《與宋元思書》「在晝猶昏」時間判定 (白天、白晝正午)／詩詞時間意象對應",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：切勿被「猶昏」誤導！「在晝猶昏」的客觀時間是「在晝（大白天／正午）」，「猶昏（好像黃昏）」是樹蔭茂密造成的視覺效果。故對應白天正午的 (C)「日當午」，而非傍晚 (A)(D) 或夜晚 (B)！",
    "stem": "吳均《與宋元思書》中「橫柯上蔽，在晝猶昏」所描寫的時刻，與下列何者最接近？\n\n○ (A) 荷笠帶斜陽，青山獨歸遠\n○ (B) 星垂平野闊，月湧大江流\n◉ (C) 鋤禾日當午，汗滴禾下土\n○ (D) 倚杖柴門外，臨風聽暮蟬",
    "answer": "(C) 鋤禾日當午，汗滴禾下土",
    "explanation": "鋤禾「日當午」：寫烈日當空的「正午白晝」，與「在晝」時刻完全相符！ 故選 (C)。",
    "diagramUrl": "",
    "solution": "鋤禾「日當午」：寫烈日當空的「正午白晝」，與「在晝」時刻完全相符！ 故選 (C)。"
  },
  {
    "id": "q_chi_orthography_yi_yan_yi_bi_zhi_473",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字形辨析／一言以蔽之（艸部「蔽」概括遮蔽）vs 弊 vs 敝 vs 斃",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「一言以蔽之」是艸部「蔽」！原義為遮蓋，引申為「概括、涵蓋」。切勿混淆為弊端的「弊」（弓部）、破舊自謙的「敝」（攴部）或死亡的「斃」（攴部）。",
    "stem": "下列成語「一言以ㄅㄧˋ之」中的「ㄅㄧˋ」字，其正確國字應為下列何者？\n\n○ (A) 弊\n○ (B) 敝\n◉ (C) 蔽\n○ (D) 斃",
    "answer": "(C) 蔽",
    "explanation": "蔽：艸部，指遮掩或總括，如「一言以蔽之」、「遮蔽」、「橫柯上蔽」。 故選 (C)。",
    "diagramUrl": "",
    "solution": "蔽：艸部，指遮掩或總括，如「一言以蔽之」、「遮蔽」、「橫柯上蔽」。 故選 (C)。"
  },
  {
    "id": "q_chi_orthography_miao_bu_ke_wen_474",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字形辨析／ㄇㄧㄠˇ不可聞（辵部「邈」遙遠幽深）vs 渺 vs 藐 vs 緲",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「邈不可聞」是辵部「邈」！表示「距離遙遠」（有走字底辵部）。常誤寫為水部的「渺」（水面遼闊）或艸部的「藐」（藐視、輕小）。",
    "stem": "成語「ㄇㄧㄠˇ不可聞」意指音信或聲響極其遙遠難以聽聞，其中的「ㄇㄧㄠˇ」字正確寫法應為下列何者？\n\n○ (A) 渺\n○ (B) 藐\n◉ (C) 邈\n○ (D) 緲",
    "answer": "(C) 邈",
    "explanation": "邈：辵部，指空間或時間久遠，如「邈不可聞」、「音容已邈」。 故選 (C)。",
    "diagramUrl": "",
    "solution": "邈：辵部，指空間或時間久遠，如「邈不可聞」、「音容已邈」。 故選 (C)。"
  },
  {
    "id": "q_chi_phonetic_kui_gu_wang_fan_475",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音與課文／《與宋元思書》「窺」谷忘反 (ㄎㄨㄟ，穴部)／暗中察看、探看幽谷",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「窺」字讀第一聲「ㄎㄨㄟ」（音同虧），穴字頭！不可誤讀為二聲或四聲，成語「管窺蠡測」、「窺探」、「窺谷忘反」皆同音。",
    "stem": "吳均《與宋元思書》：「鳶飛戾天者，望峰息心；經綸世務者，『窺』谷忘反。」句中「窺」字的正確讀音為下列何者？\n\n○ (A) ㄍㄨㄟ\n◉ (B) ㄎㄨㄟ\n○ (C) ㄐㄧㄠ\n○ (D) ㄎㄨㄟˋ",
    "answer": "(B) ㄎㄨㄟ",
    "explanation": "ㄎㄨㄟ：如「窺視」、「管窺蠡測」、「窺谷忘反」。 故選 (B)。",
    "diagramUrl": "",
    "solution": "ㄎㄨㄟ：如「窺視」、「管窺蠡測」、「窺谷忘反」。 故選 (B)。"
  },
  {
    "id": "q_chi_phonetic_shu_xiang_476",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音與文學常識／《與宋元思書》作者吳均字「叔庠」 (ㄒㄧㄤˊ，广部)／古代學校「庠序」",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「庠」讀「ㄒㄧㄤˊ」（音同詳、祥），广部！常被誤讀為「ㄧㄤˊ」或「ㄧㄤˇ」（混淆為佯、癢）。名句「謹庠序之教」亦讀 ㄒㄧㄤˊ。",
    "stem": "《與宋元思書》作者吳均，字「叔庠」，句中「庠」字的正確注音應為下列何者？\n\n○ (A) ㄧㄤˊ\n◉ (B) ㄒㄧㄤˊ\n○ (C) ㄐㄧㄤˇ\n○ (D) ㄒㄧㄤ",
    "answer": "(B) ㄒㄧㄤˊ",
    "explanation": "1. 字音規範：「庠」為广（ㄧㄢˇ）部、羊聲，標準讀音為 ㄒㄧㄤˊ（第二聲陽平）。 故選 (B)。",
    "diagramUrl": "",
    "solution": "1. 字音規範：「庠」為广（ㄧㄢˇ）部、羊聲，標準讀音為 ㄒㄧㄤˊ（第二聲陽平）。 故選 (B)。"
  },
  {
    "id": "q_chi_phonetic_gu_zhang_477",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音與文學常識／吳均籍貫「吳興故鄣」之「鄣」 (ㄓㄤ，邑部)／古地名",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：地名「故鄣」讀第一聲「ㄓㄤ」（音同章），右邊是邑部（阝）！不可讀成四聲「ㄓㄤˋ」（障礙的障為左耳阜部，讀四聲）。",
    "stem": "介紹《與宋元思書》作者時提及：「吳均，字叔庠，吳興故『鄣』人。」句中「鄣」字的正確讀音應為下列何者？\n\n○ (A) ㄓㄤˇ\n◉ (B) ㄓㄤ\n○ (C) ㄓㄤˋ\n○ (D) ㄓㄥ",
    "answer": "(B) ㄓㄤ",
    "explanation": "1. 字音規範：「鄣」為邑（阝）部、章聲，標準讀音為 ㄓㄤ（第一聲陰平，音同「章」）。 故選 (B)。",
    "diagramUrl": "",
    "solution": "1. 字音規範：「鄣」為邑（阝）部、章聲，標準讀音為 ㄓㄤ（第一聲陰平，音同「章」）。 故選 (B)。"
  },
  {
    "id": "q_chi_phonetic_chao_qing_478",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文／字音與多音字／文官官名「奉朝請」之「朝請」 (ㄔㄠˊ ㄑㄧㄥˇ)／入朝覲見請安",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「朝請」讀「ㄔㄠˊ ㄑㄧㄥˇ」！「朝」是指朝廷朝謁，讀 ㄔㄠˊ（不可讀早晨之 ㄓㄠ）；「請」讀三聲 ㄑㄧㄥˇ（請謁問安）。",
    "stem": "南朝梁武帝時，吳均曾任官「奉朝請」，下列關於「朝請」二字的標準注音，何者完全正確？\n\n○ (A) ㄓㄠ ㄑㄧㄥˇ\n◉ (B) ㄔㄠˊ ㄑㄧㄥˇ\n○ (C) ㄔㄠˊ ㄑㄧㄥˋ\n○ (D) ㄓㄠ ㄑㄧㄥˋ",
    "answer": "(B) ㄔㄠˊ ㄑㄧㄥˇ",
    "explanation": "1. 字音剖析：「朝請」標準讀音為 ㄔㄠˊ ㄑㄧㄥˇ。 故選 (B)。",
    "diagramUrl": "",
    "solution": "1. 字音剖析：「朝請」標準讀音為 ㄔㄠˊ ㄑㄧㄥˇ。 故選 (B)。"
  },
  {
    "id": "q_math_geo_circle_diameter_chords_bpd60_abc20_472",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／直徑所對圓周角為直角（∠ADB＝90°）／圓周角與等弦等弧性質（BC＝CD ⟹ ∠CDB＝∠CBD）／外角定理",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：直徑考點首選「連接 AD 造直角（∠ADB＝90°）」！看到 BC＝CD 立刻想到等腰 △BCD，利用同弧圓周角 ∠ADC＝x° 與底角 90°－x° 導出頂角 ∠DCB＝2x°，最後由 △PBC 外角 3x＝60° 秒殺。",
    "stem": "如圖，AB 為圓 O 的直徑，C、D 為圓上的兩點，CD 和 AB 相交於 P 點，若 BC ＝ CD，∠BPD ＝ 60°，則 ∠ABC ＝ ？\n\n○ (A) 32°\n○ (B) 25°\n◉ (C) 20°\n○ (D) 18°",
    "answer": "(C) 20°",
    "explanation": "＝ x°，則同弧 AC 之圓周角 ∠ADC ＝ x°。由 BC ＝ CD 知 △BCD 為等腰三角形，故 ∠DCB ＝ 2x°。 故選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_diameter_chords_bpd60_abc20_472.png",
    "solution": "＝ x°，則同弧 AC 之圓周角 ∠ADC ＝ x°。由 BC ＝ CD 知 △BCD 為等腰三角形，故 ∠DCB ＝ 2x°。 故選 (C)。"
  },
  {
    "id": "q_math_geo_triangle_altitudes_midpoint_angle_dme_70_471",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／四點共圓判別（直角對直徑）／圓外角公式 ∠A＝½(弧BC－弧DE)／圓心角 ∠DME＝弧DE",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：破題神經：看到兩高「∠BEC＝∠BDC＝90°」，立即連結「以 BC 為直徑四點共圓（圓心 M）」！頂角 ∠A 實為割線交於圓外之「圓外角」，利用 ∠A＝½(180°－弧DE) 秒解圓心角 ∠DME＝70°。",
    "stem": "如圖，在 △ABC 中，∠A ＝ 55°，M 為 BC 的中點，BD 為 AC 上的高，CE 為 AB 上的高，則 ∠DME ＝ ？\n\n○ (A) 60°\n○ (B) 65°\n○ (C) 68°\n◉ (D) 70°",
    "answer": "(D) 70°",
    "explanation": "C ＝ 90°，知 B、C、D、E 四點共圓，以 BC 為直徑、M 為圓心，故 弧BC ＝ 180°。 故選 (D)。",
    "diagramUrl": "assets/questions/q_math_geo_triangle_altitudes_midpoint_angle_dme_70_471.png",
    "solution": "C ＝ 90°，知 B、C、D、E 四點共圓，以 BC 為直徑、M 為圓心，故 弧BC ＝ 180°。 故選 (D)。"
  },
  {
    "id": "q_soc_civ_division_of_labor_trade_international_trade_grape_470",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／全球化與國際貿易／分工與交易概念／國際分工 vs 國際貿易（跨國買賣商品）之辨析",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：概念辨析：(C)「跨國不同階段生產」屬於國際分工；(D)「跨國買賣商品、進口貨物」才屬於國際貿易！",
    "stem": "根據分工與交易的概念判斷，下列何者涉及國際貿易？\n\n○ (A) 育筑請家人到市區的法式餐廳用餐慶祝父親節\n○ (B) 俊成與班上美國留學生一起合作討論專題報告\n○ (C) 服飾品牌在中國生產布料，在越南負責製作成品\n◉ (D) 建銘在國內大賣場任職，負責採購智利進口葡萄",
    "answer": "(D) 建銘在國內大賣場任職，負責採購智利進口葡萄",
    "explanation": "(A)屬於國內市場交易；(B)屬於分工；(C)屬於國際分工；(D)跨國買賣進口商品屬於國際貿易。選 (D)。",
    "diagramUrl": "",
    "solution": "(A)屬於國內市場交易；(B)屬於分工；(C)屬於國際分工；(D)跨國買賣進口商品屬於國際貿易。選 (D)。"
  },
  {
    "id": "q_soc_civ_tariff_belize_shrimp_price_drop_115cap_468",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／全球化與國際貿易／關稅政策與進口成本／零關稅對國內市場價格與供應來源之影響",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：零關稅降低進口成本、增加商品供應，使市場售價下跌；宏國白蝦恢復課稅使進口成本增加、進口量大跌，宏國對我國出超減少、國內白蝦競爭程度下降。",
    "stem": "「我國原本由宏都拉斯進口大量白蝦，但2023年與該國斷交後，我國恢復對該國產品課徵關稅，部分進口業者的營運遭受衝擊，進口量大幅下滑。我國官員受訪時提及，2025年將開放貝里斯的白蝦零關稅進口至我國，以增加商品供應來源。」僅根據上述內容判斷，關於此二項進口政策變化產生的個別影響，下列何項推論最合理？〔115會考〕\n\n◉ (A) 受到對貝里斯政策的影響，我國市場上白蝦的售價下降\n○ (B) 受到對貝里斯政策的影響，貝里斯的貿易出超金額下降\n○ (C) 受到對宏都拉斯政策的影響，宏都拉斯的貿易出超金額上升\n○ (D) 受到對宏都拉斯政策的影響，我國白蝦市場的競爭程度上升",
    "answer": "(A) 受到對貝里斯政策的影響，我國市場上白蝦的售價下降",
    "explanation": "零關稅進口使業者進口成本降低、國內供應來源增加，白蝦售價可能因此下降。選 (A)。",
    "diagramUrl": "",
    "solution": "零關稅進口使業者進口成本降低、國內供應來源增加，白蝦售價可能因此下降。選 (A)。"
  },
  {
    "id": "q_soc_civ_international_trade_commodity_price_decision_469",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／全球化與國際貿易／廠商進出口決策依據／商品國內外價格差異與獲利誘因",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：國際貿易的核心決策指標為「商品價格」（自低價國進口、向高價國出口賺取價差），品質與技術非最直接的決策判定空格。",
    "stem": "各國廠商從事進出口貿易時，大多都基於 ______，決定是否進口或出口某項商品。上述空格應填入下列何者？\n\n◉ (A) 商品價格\n○ (B) 商品品質\n○ (C) 生產技術\n○ (D) 廠商競爭",
    "answer": "(A) 商品價格",
    "explanation": "廠商從事進出口以獲利為導向，主要依國內外「商品價格」之價差決定是否進出口。選 (A)。",
    "diagramUrl": "",
    "solution": "廠商從事進出口以獲利為導向，主要依國內外「商品價格」之價差決定是否進出口。選 (A)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_triangle_chord_om_area_abc_20sqrt5_467",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／弦心距性質（垂直平分弦）／畢氏定理求弦長 BC＝4√5／圓內接三角形面積計算",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 弦心距核心性質：圓心到弦中點連線 OM 必垂直弦 BC（垂徑定理）。2. 連半徑 OB 構造直角 △OBM 算出半弦長 BM＝2√5，切莫忘記弦長 BC＝2BM＝4√5！3. 高 AM ＝ 半徑 OA (6) ＋ 弦心距 OM (4) ＝ 10。",
    "stem": "如圖，△ABC 為圓 O 的內接三角形，M 是 BC 的中點。圓 O 的半徑為 6，OM ＝ 4，求 △ABC 的面積。\n\n○ (A) 10√5\n◉ (B) 20√5\n○ (C) 24√5\n○ (D) 30√5",
    "answer": "(B) 20√5",
    "explanation": "C：OM 為弦 BC 的弦心距，必垂直平分 BC。故選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_triangle_chord_om_area_abc_20sqrt5_467.png",
    "solution": "C：OM 為弦 BC 的弦心距，必垂直平分 BC。故選 (B)。"
  },
  {
    "id": "q_math_geo_circle_tangent_ab12_oc9_area_abc_108_5_466",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／切線性質（圓心到切點半徑垂直切線 OB⊥AB）／直角三角形畢氏定理／同高三角形面積比等於底邊比",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1.「見切點連圓心」：連接半徑 OB 必垂直切線 AB 構成直角 △OAB。2. 求 △ABC 面積時，利用 △ABC 與 △OAB 共用頂點 B 且底邊在同一直線上（同高），面積比直接等於底邊比 AC : OA ＝ 6 : 15 ＝ 2/5，不用另外求高！",
    "stem": "如圖，AB 切圓 O 於 B 點，AO 交圓 O 於 C 點。若 AB ＝ 12，OC ＝ 9，則 △ABC 的面積為何？\n\n○ (A) 18\n○ (B) 20\n◉ (C) 108/5（或 21.6）\n○ (D) 27",
    "answer": "(C) 108/5（或 21.6）",
    "explanation": "＝9，由畢氏定理 OA ＝ √(9²＋12²) ＝ 15 ⟹ AC ＝ 15－9 ＝ 6。 故選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_tangent_ab12_oc9_area_abc_108_5_466.png",
    "solution": "＝9，由畢氏定理 OA ＝ √(9²＋12²) ＝ 15 ⟹ AC ＝ 15－9 ＝ 6。 故選 (C)。"
  },
  {
    "id": "q_math_func_def_table_one_to_many_not_func_464",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／函數與其圖形／函數的基本定義／表格對應判別／一對多不是函數",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：牢記函數三大判別金律：1.「多對一」是函數（如 A 選項四個不同的 x 對應同一個 y＝0，是常數函數）。2.「一對多」絕不是函數（如 B 選項中 x＝1 同時對應 y＝－1 與 y＝2）！",
    "stem": "x、y 兩變數的關係如圖（下列四個選項中的對應關係），則何者 y 不是 x 的函數？\n\n○ (A) x：1, 2, 3, 4 分別對應 y：0, 0, 0, 0\n◉ (B) x：1, 2, 3, 1 分別對應 y：－1, 3, 4, 2\n○ (C) x：－1, 0, 1, 2 分別對應 y：－1, 0, 1, 2\n○ (D) x：1, 2, 3, 4 分別對應 y：3, 4, 5, 6",
    "answer": "(B) x：1, 2, 3, 1 分別對應 y：－1, 3, 4, 2",
    "explanation": "選項中當 x ＝ 1 時，同時對應到 y ＝ －1 與 y ＝ 2 兩個不同的 y 值（一對多），故 y 不是 x 的函數。選 (B)。",
    "diagramUrl": "",
    "solution": "選項中當 x ＝ 1 時，同時對應到 y ＝ －1 與 y ＝ 2 兩個不同的 y 值（一對多），故 y 不是 x 的函數。選 (B)。"
  },
  {
    "id": "q_math_func_def_exam_score_seat_number_one_to_many_465",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／函數與其圖形／函數的基本定義／生活實例對應關係判別／分數與座號一對多",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：判斷「y 是否為 x 的函數」關鍵看自變數 x 能否唯一決定 y！例如「學生 (x) 對導師 (y)」是一人一位導師（多對一，是函數）；但「考試分數 (x) 對座號 (y)」可能同分數有多人，是「一對多」（不是函數）。",
    "stem": "下列何種關係，y 不一定是 x 的函數？\n\n○ (A) 平年中，每個月份（x）對應天數（y）\n○ (B) 每個正方形的邊長（x）對應其面積（y）\n○ (C) 本校各班的學生（x）對應其導師（y）\n◉ (D) 本班數學考試的分數（x）對應學生的座號（y）",
    "answer": "(D) 本班數學考試的分數（x）對應學生的座號（y）",
    "explanation": "中同一個考試分數（x）可能有多位同學考取，例如考 80 分的同學不一定只有一人，會出現同一個分數對應多個座號的情形（一對多），故 y 不一定是 x 的函數。選 (D)。",
    "diagramUrl": "",
    "solution": "中同一個考試分數（x）可能有多位同學考取，例如考 80 分的同學不一定只有一人，會出現同一個分數對應多個座號的情形（一對多），故 y 不一定是 x 的函數。選 (D)。"
  },
  {
    "id": "q_math_arithmetic_series_max_sum_positive_terms_n33_463",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差級數前 n 項和之極值問題（最大值）／一般項 aₙ 正負轉折點判定（aₙ ＞ 0）",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 前 n 項和「最大值」核心觀念：只要項數為正（aₙ ＞ 0），越加越大；一旦變成負數（aₙ ＜ 0），總和就開始減少，故加到「最後一個非負項」為止！2. 解出 n ＞ 33.5 代表第 34 項開始為負數，故取 n ＝ 33 達最大和。",
    "stem": "有一等差級數的首項是 130，公差是 －4，若前 n 項的和為最大，則 n ＝ ？\n\n○ (A) 30\n○ (B) 31\n○ (C) 32\n○ (D) 33",
    "answer": "(D) 33",
    "explanation": "1. 找負數項轉折點：設第 n 項開始小於 0，aₙ ＝ 130 ＋ (n－1)×(－4) ＜ 0 ⟹ －4n ＋ 134 ＜ 0 ⟹ 4n ＞ 134 ⟹ n 故選 (D)。",
    "diagramUrl": "",
    "solution": "1. 找負數項轉折點：設第 n 項開始小於 0，aₙ ＝ 130 ＋ (n－1)×(－4) ＜ 0 ⟹ －4n ＋ 134 ＜ 0 ⟹ 4n ＞ 134 ⟹ n 故選 (D)。"
  },
  {
    "id": "q_math_shuttle_run_marbles_series_sum_506_462",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差級數生活應用題／趣味競賽折返跑（往返雙程距離 2n）／等差級數求和公式",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 「折返跑」是往返雙程：到第 n 站取回彈珠，跑的距離是來回雙倍 ＝ n × 1 m × 2 ＝ 2n 公尺，切莫忘記乘 2（去程＋回程）！2. 總距離為偶數等差級數 2 ＋ 4 ＋ 6 ＋ …… ＋ 44（共 22 項），利用 (2＋44)×22 ÷ 2 ＝ 506 公尺。",
    "stem": "如圖，運動會時舉辦趣味競賽，由每班的同學輪流接力，進行折返跑遊戲，每位同學都由起點出發，每一站之間的距離相等。第 1 位同學到第一站取回 1 顆彈珠，第 2 位同學到第二站取回 1 顆彈珠，……，以此類推。若一年 3 班共取回 22 顆彈珠，則他們共跑了多少公尺？\n\n○ (A) 484 公尺\n○ (B) 506 公尺\n○ (C) 528 公尺\n○ (D) 550 公尺",
    "answer": "(B) 506 公尺",
    "explanation": "設所跑的總距離為 S 公尺。 故選 (B)。",
    "diagramUrl": "assets/questions/q_math_shuttle_run_marbles_series_sum_506_462.png",
    "solution": "設所跑的總距離為 S 公尺。 故選 (B)。"
  },
  {
    "id": "q_math_regular_pentagon_formation_series_sum_210_461",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差級數生活應用題／正五邊形排隊陣型（頂點重複扣除）／等差級數求和公式",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 正五邊形「頂點重複計算」陷阱：每圈總人數為「每邊人數×5－5（扣除 5 個重複頂點）」，千萬不能算成 3×5＝15！2. 列出各圈人數為 10, 20, 30, ...（公差 10），再套用等差級數求和公式 S₆ ＝ 210 人。",
    "stem": "如圖，有若干位學生排出正五邊形的隊形，由內而外共排了 6 圈，且學生人數剛好排完。已知最內圈每邊 3 人，往外每圈每邊增加 2 人（即由內向外算起第 2 圈每邊 5 人，第 3 圈每邊 7 人，…）。請問此隊形的學生共有多少人？〔92.基測 II〕\n\n○ (A) 210\n○ (B) 240\n○ (C) 285\n○ (D) 630",
    "answer": "(A) 210",
    "explanation": "1. 各圈人數（頂點扣重複）： 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_regular_pentagon_formation_series_sum_210_461.png",
    "solution": "1. 各圈人數（頂點扣重複）： 故選 (A)。"
  },
  {
    "id": "q_math_arithmetic_series_odd_even_terms_diff_a1_64_460",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差數列性質／奇數項與偶數項之差求公差（5d）／首項 a₁ 計算",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 兩式對齊相減法：(a₂＋a₄＋a₆＋a₈＋a₁₀) － (a₁＋a₃＋a₅＋a₇＋a₉) ＝ 5d ＝ 220 － 240 ＝ －20 ⟹ 公差 d ＝ －4（注意負號！）。2. 代回奇數項和 5a₁ ＋ 20d ＝ 240 即可秒解 a₁ ＝ 64。",
    "stem": "一個等差級數的第 n 項為 aₙ，若 a₁ ＋ a₃ ＋ a₅ ＋ a₇ ＋ a₉ ＝ 240，a₂ ＋ a₄ ＋ a₆ ＋ a₈ ＋ a₁₀ ＝ 220，則首項 a₁ 之值為何？\n\n○ (A) 56\n○ (B) 60\n○ (C) 64\n○ (D) 68",
    "answer": "(C) 64",
    "explanation": "1. 偶數項減奇數項求公差：(a₂＋a₄＋a₆＋a₈＋a₁₀) － (a₁＋a₃＋a₅＋a₇＋a₉) ＝ 5d ＝ 220 － 240 ＝ －20 ⟹ d ＝ －4。 故選 (C)。",
    "diagramUrl": "",
    "solution": "1. 偶數項減奇數項求公差：(a₂＋a₄＋a₆＋a₈＋a₁₀) － (a₁＋a₃＋a₅＋a₇＋a₉) ＝ 5d ＝ 220 － 240 ＝ －20 ⟹ d ＝ －4。 故選 (C)。"
  },
  {
    "id": "q_math_diff_squares_series_sum_86_to_1_3741_459",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／乘法公式／平方差公式 a²－b²＝(a＋b)(a－b)／數列與級數／等差級數求和公式／分組化簡妙算",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
      "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 看到「平方差交錯相減」，兩兩分組利用 a²－b²＝(a＋b)(a－b)，因相鄰項之差為 1，秒轉化為「1 到 86 連續整數求和」。2. 等差級數和公式：(首項＋末項)×項數 ÷ 2 ＝ (1＋86)×86 ÷ 2 ＝ 3741，切勿硬算平方！",
    "stem": "求 86² － 85² ＋ 84² － 83² ＋ …… ＋ 2² － 1² 之值為何？\n\n○ (A) 3641\n○ (B) 3741\n○ (C) 3781\n○ (D) 3841",
    "answer": "(B) 3741",
    "explanation": "1. 平方差分組：利用 a²－b² ＝ (a＋b)(a－b)，兩兩相鄰項差皆為 1： 故選 (B)。",
    "diagramUrl": "",
    "solution": "1. 平方差分組：利用 a²－b² ＝ (a＋b)(a－b)，兩兩相鄰項差皆為 1： 故選 (B)。"
  },
  {
    "id": "q_sci_phys_fishing_rod_wheel_axle_work_1500j_458",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／簡單機械／輪軸原理（省力輪軸）／功與能量轉換（W＝F×S）／使用機械不省功",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：1. 輪軸施力在輪（10 cm）、抗力在軸（4 cm）為省力輪軸（40 N）。2. 作功直接算抗力作功 W＝100 N×15 m＝1500 J，使用機械不省功！",
    "stem": "如附圖，阿康使用附有捲線器的釣竿釣魚。捲線器的線軸半徑為 4 cm，手搖捲軸手把半徑為 10 cm。如果魚掙扎時的平均施力為 100 牛頓，釣線捲了大約 15 公尺，則請問阿康平均施力多少牛頓？大約作了多少功？\n\n○ (A) 80 牛頓，100 焦耳\n○ (B) 40 牛頓，600 焦耳\n○ (C) 80 牛頓，3000 焦耳\n○ (D) 40 牛頓，1500 焦耳",
    "answer": "(D) 40 牛頓，1500 焦耳",
    "explanation": "1. 輪軸平衡：阿康施力在輪（10 cm）、抗力在軸（4 cm），F康 × 10 ＝ 100 × 4 ⟹ F康 ＝ 40 牛頓。 故選 (D)。",
    "diagramUrl": "assets/questions/q_sci_phys_fishing_rod_wheel_axle_work_1500j_458.png",
    "solution": "1. 輪軸平衡：阿康施力在輪（10 cm）、抗力在軸（4 cm），F康 × 10 ＝ 100 × 4 ⟹ F康 ＝ 40 牛頓。 故選 (D)。"
  },
  {
    "id": "q_sci_phys_nail_clipper_compound_levers_457",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／簡單機械／槓桿原理的組合（指甲刀）／抗力點在中間（省力槓桿）vs 施力點在中間（費力槓桿）／刀刃（斜面）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：拆解指甲刀：上方壓柄為丙支點、乙抗力、甲施力 ⟹「抗力點在中間」省力槓桿；下方夾片為戊支點、乙施力、丁抗力 ⟹ 費力槓桿；刀口丁為斜面（楔）。",
    "stem": "附圖為指甲刀之示意圖。指甲刀為多種簡單機械的組合體，下列有關機械的敘述，何者錯誤？\n\n○ (A) 在甲處施力造成乙處下壓是支點在中間的槓桿\n○ (B) 在乙處施力造成丁處下壓是施力臂小於抗力臂的槓桿\n○ (C) 丁處刀刃磨鋒利會有省力的效果\n○ (D) 綜合以上多種機械原理，指甲剪是一種省力的機械",
    "answer": "(A) 在甲處施力造成乙處下壓是支點在中間的槓桿",
    "explanation": "(A) 在甲處施力造成乙處下壓，是以丙為支點、乙為抗力點、甲為施力點，屬於「抗力點在中間」的省力槓桿。故 (A) 敘述錯誤，選 (A)。",
    "diagramUrl": "assets/questions/q_sci_phys_nail_clipper_compound_levers_457.png",
    "solution": "(A) 在甲處施力造成乙處下壓，是以丙為支點、乙為抗力點、甲為施力點，屬於「抗力點在中間」的省力槓桿。故 (A) 敘述錯誤，選 (A)。"
  },
  {
    "id": "q_sci_phys_pulleys_work_energy_height_same_456",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／功與能／功的原理（使用簡單機械不省功）／滑輪與滑輪組／重力位能與等速上升高度（W＝mgh）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：功的原理（使用任何機械絕不省功）！不計摩擦與滑輪重時，輸入功全轉為重力位能（W＝mgh）；物重相同且作功相同，上升高度必相等（甲＝乙＝丙）。",
    "stem": "如附圖，若三種裝置之力對物體皆作功 800 焦耳後，則物體等速度上升的高度關係為何？（動滑輪重及摩擦力不計）\n\n○ (A) 甲＞乙＞丙\n○ (B) 甲＝乙＝丙\n○ (C) 甲＜乙＜丙\n○ (D) 甲＜乙＝丙",
    "answer": "(B) 甲＝乙＝丙",
    "explanation": "動滑輪重及摩擦力不計，所以輸入的功全轉成位能，位能都是 800 焦耳。因為三者物重皆相同，所以上升高度 h 也都相同（甲＝乙＝丙）。選 (B)。",
    "diagramUrl": "assets/questions/q_sci_phys_pulleys_work_energy_height_same_456.png",
    "solution": "動滑輪重及摩擦力不計，所以輸入的功全轉成位能，位能都是 800 焦耳。因為三者物重皆相同，所以上升高度 h 也都相同（甲＝乙＝丙）。選 (B)。"
  },
  {
    "id": "q_sci_phys_simple_machine_scissors_blade_inclined_plane_455",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "國中理化／簡單機械／斜面的應用（刀刃、楔、螺絲）／審題陷阱（整把剪刀為槓桿 vs 刀刃刃口為斜面）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：審題陷阱！整把剪刀本體操作為「槓桿」，但若特指「刀刃刃口（刀鋒）」則是利用劈（楔）的「斜面」原理省力切割，切勿看太快選錯！",
    "stem": "剪刀的刃口是哪一種形式的機械？\n\n○ (A) 槓桿\n○ (B) 輪軸\n○ (C) 滑輪\n○ (D) 斜面",
    "answer": "(D) 斜面",
    "explanation": "剪刀的刃口是斜面（楔）的應用。選 (D)。",
    "diagramUrl": "",
    "solution": "剪刀的刃口是斜面（楔）的應用。選 (D)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_quad_angle_dao_67_454",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形對角互補／等腰三角形（半徑相等）底角求法／角的加減運算",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：連 AB 破題！利用圓內接四邊形對角互補得 ∠DAB＝122°，再利用半徑等長等腰 △OAB 求底角 ∠BAO＝55°，相減即得 ∠DAO＝67°。",
    "stem": "如附圖，$A$、$B$、$C$、$D$ 為圓 $O$ 上四點。若 $\\angle DCB = 58^\\circ$，$\\angle AOB = 70^\\circ$，則 $\\angle DAO$ 為多少度？\n\n○ (A) 60 度\n○ (B) 63 度\n○ (C) 67 度\n○ (D) 72 度",
    "answer": "(C) 67 度",
    "explanation": "1. 連接 AB：圓內接四邊形對角互補，∠DAB ＝ 180° － 58° ＝ 122°。 故選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quad_angle_dao_67_454.png",
    "solution": "1. 連接 AB：圓內接四邊形對角互補，∠DAB ＝ 180° － 58° ＝ 122°。 故選 (C)。"
  },
  {
    "id": "q_math_geo_quad_concyclic_diagonals_angle_dec_75_453",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／四點共圓判定（對角互補）／同弧所對圓周角相等／三角形外角定理",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：見對角相加為 180°（85°＋95°＝180°）必聯想「四點共圓」！由同弧圓周角得 ∠ACB＝30°，再利用 △EBC 外角定理秒殺 ∠DEC＝75°。",
    "stem": "如附圖，在四邊形 $ABCD$ 中，$\\overline{AC}$、$\\overline{BD}$ 兩對角線相交於 $E$ 點。若 $\\angle ABD = 40^\\circ$，$\\angle ADB = 30^\\circ$，$\\angle DBC = 45^\\circ$，$\\angle BDC = 65^\\circ$，則 $\\angle DEC$ 為多少度？\n\n○ (A) 65 度\n○ (B) 70 度\n○ (C) 75 度\n○ (D) 80 度",
    "answer": "(C) 75 度",
    "explanation": "B ＝ ∠ADB ＝ 30°。 故選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_quad_concyclic_diagonals_angle_dec_75_453.png",
    "solution": "B ＝ ∠ADB ＝ 30°。 故選 (C)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_trapezoid_angle_acb_55_452",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接梯形（平行線截等弧）／正三角形與圓心角／圓周角與弧度換算",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：見弦長等於半徑（AD＝r＝5）秒聯想「正三角形（圓心角/弧度為 60°）」！再由「平行線截等弧」扣除上下兩弧求得側弧，圓周角即為側弧之一半。",
    "stem": "如附圖，圓 $O$ 的半徑為 5，梯形 $ABCD$ 為圓內接四邊形。若 $\\overline{AD} // \\overline{BC}$，$\\overline{AD} = 5$，$\\angle BDC = 40^\\circ$，則 $\\angle ACB$ 為多少度？\n\n○ (A) 65 度\n○ (B) 60 度\n○ (C) 55 度\n○ (D) 40 度",
    "answer": "(C) 55 度",
    "explanation": "＝ 2∠BDC ＝ 80°。又平行線截等弧（AD // BC），故 弧AB ＝ 弧CD ＝ (360° － 80° － 60°) ÷ 2 ＝ 110°。 故選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_trapezoid_angle_acb_55_452.png",
    "solution": "＝ 2∠BDC ＝ 80°。又平行線截等弧（AD // BC），故 弧AB ＝ 弧CD ＝ (360° － 80° － 60°) ÷ 2 ＝ 110°。 故選 (C)。"
  },
  {
    "id": "q_sci_phys_chem_calcium_oxide_heat_water_specific_heat_451",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／化學反應熱（氧化鈣加水放熱）／熱量計算（H＝msΔT）／比熱與相變潛熱（冰熔化熱）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：水在 0°C 以下為冰，由 －20°C 升至 80°C 跨越相變，必計入冰熔化熱；且 1 公升水質量為 1000 克，切勿漏算質量與相變！",
    "stem": "近期開戰的烏俄戰爭，造成不少的人員傷亡、糧食短缺，有民眾在網路上就建議：可帶速食調理包、氧化鈣化學物質，當肚子餓時，可將氧化鈣和水反應產生熟石灰（為一種鹼性物質），並放出大量的熱讓水沸騰，再來加熱速食調理包，補充食物短缺的問題。試問關於氧化鈣和水的反應過程中，何者敘述錯誤？\n\n○ (A) 熟石灰的學名應為氫氧化鈣\n○ (B) 此反應屬於放熱反應\n○ (C) 以沸騰的水加熱速食調理包，主要是利用水的比熱大，溫度變化小的特性\n○ (D) 若要用 1 公升的水使其溫度由 $-20^\\circ\\text{C}$ 上升至 $80^\\circ\\text{C}$，需要 100 卡",
    "answer": "(D) 若要用 1 公升的水使其溫度由 $-20^\\circ\\text{C}$ 上升至 $80^\\circ\\text{C}$，需要 100 卡",
    "explanation": "(D) 除了溫度變化的熱量外，還要考慮冰熔化成水所吸收的熔化熱（且 1 公升水為 1000 克，所需熱量遠大於 100 卡）。故 (D) 敘述錯誤，選 (D)。",
    "diagramUrl": "",
    "solution": "(D) 除了溫度變化的熱量外，還要考慮冰熔化成水所吸收的熔化熱（且 1 公升水為 1000 克，所需熱量遠大於 100 卡）。故 (D) 敘述錯誤，選 (D)。"
  },
  {
    "id": "q_sci_chem_antacid_nahco3_gas_bloating_co2_450",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／酸鹼中和與生活應用／制酸劑成分（碳酸氫鈉 vs 氫氧化鎂）／碳酸氫根遇酸產生二氧化碳／胃脹氣副作用",
    "uploadDate": "2026-11-14",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：碳酸氫鈉（NaHCO3）遇胃酸（HCl）中和必產生 CO2 氣體造成脹氣；而氫氧化鎂（Mg(OH)2）中和只產水，不產氣體。",
    "stem": "人類的胃在消化蛋白質時會分泌胃酸，但胃酸分泌過多時會傷害胃黏膜，此時通常會以弱鹼性物質作為制酸劑來中和胃酸。\n\n宏偉設計實驗檢驗市售制酸劑成效：\n- 實驗一：各取 1 克制酸劑溶於 100 mL 水中，以 pH 計測定 pH 值。\n- 實驗二：取 0.01 M 的 HCl 模擬胃酸，加入酚酞指示劑滴定 1 克制酸劑，記錄消耗的 HCl 體積。\n\n已知 A、B 兩牌制酸劑主要成分為 $\\text{NaHCO}_3$（碳酸氫鈉），C、D 兩牌主要成分為 $\\text{Mg(OH)}_2$（氫氧化鎂），結果如下表：\n\n| 制酸劑品牌 | pH 值 | 用去 HCl 毫升數 |\n| :---: | :---: | :---: |\n| A 牌 | 8.3 | 20 mL |\n| B 牌 | 8.5 | 25 mL |\n| C 牌 | 8.2 | 41 mL |\n| D 牌 | 8.4 | 50 mL |\n\n通常制酸劑除了制酸外，有些成分可能引起脹氣的副作用，需要搭配防脹氣藥物服用。請問在上述四牌制酸劑中，哪些須搭配防脹氣藥物服用？\n\n○ (A) A 牌、C 牌\n○ (B) B 牌、D 牌\n○ (C) A 牌、B 牌\n○ (D) C 牌、D 牌",
    "answer": "(C) A 牌、B 牌",
    "explanation": "以 NaHCO3（碳酸氫鈉）為主成分的制酸劑，遇到胃酸（HCl）會反應產生 CO2 氣體，容易造成腸胃道脹氣，因此 A 牌與 B 牌制酸劑需要搭配防脹氣藥物使用。選 (C)。",
    "diagramUrl": "",
    "solution": "以 NaHCO3（碳酸氫鈉）為主成分的制酸劑，遇到胃酸（HCl）會反應產生 CO2 氣體，容易造成腸胃道脹氣，因此 A 牌與 B 牌制酸劑需要搭配防脹氣藥物使用。選 (C)。"
  },
  {
    "id": "q_sci_chem_chewing_gum_saliva_ph_balance_112cap_449",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "國中理化／酸鹼反應／水溶液 pH 值意義與中和／唾液緩衝與酸鹼平衡／圖表判讀與會考生活素養題",
    "uploadDate": "2026-11-14",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：掌握「中性 pH≈7 ⟶ 用餐變酸 pH 下降 ⟶ 嚼口香糖平衡 pH 回升至 7」三部曲，由起點、轉折點與終點秒殺折線圖！",
    "stem": "下列為某牌口香糖廣告的說明：人體口腔中的環境接近中性，在用餐後一段時間會變酸，而增加蛀牙機率。除了每日正確刷牙外，在餐後嚼食無糖口香糖，可刺激唾液分泌，有效「平衡」口中酸性。此廣告搭配了兩張圖用以輔助說明，一張為附圖（唾液量隨時間變化），另一張圖最可能為下列何者？【112.會考】\n\n○ (A) 牙齒表面 pH 值用餐後由 7 上升至 9.5，嚼食口香糖後下降\n○ (B) 牙齒表面 pH 值用餐後由 5 上升至 7.5，嚼食口香糖後下降\n○ (C) 牙齒表面 pH 值用餐後由 7 下降至約 4.5（變酸），開始嚼食口香糖後回升至 7（平衡酸性）\n○ (D) 牙齒表面 pH 值用餐後由 6.5 下降至 5，嚼食口香糖後上升至 9（變鹼）",
    "answer": "(C) 牙齒表面 pH 值用餐後由 7 下降至約 4.5（變酸），開始嚼食口香糖後回升至 7（平衡酸性）",
    "explanation": "1. 口腔平時接近中性（pH ≈ 7）。 故選 (C)。",
    "diagramUrl": "assets/questions/q_sci_chem_chewing_gum_saliva_ph_balance_112cap_449.png",
    "solution": "1. 口腔平時接近中性（pH ≈ 7）。 故選 (C)。"
  },
  {
    "id": "q_sci_chem_butterfly_pea_indicator_color_gradient_448",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "國中理化／酸鹼反應與指示劑／天然指示劑（蝶豆花）／密度分層與漸層變色／酸鹼性顏色判斷",
    "uploadDate": "2026-11-14",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：先看清位置箭頭方向！甲為最上層蝶豆花原汁（中性呈藍色），乙為檸檬汁層（酸性呈紅紫色），故甲至乙漸層必為「由藍變紅紫」。",
    "stem": "【表(一)】\n| 酸鹼性 | 蝶豆花原汁顏色 |\n| :---: | :---: |\n| 酸性 | 紅紫色 |\n| 中性 | 藍色 |\n| 鹼性 | 黃綠色 |\n\n如附圖(二)所示，試管中由上而下依序分層注入蝶豆花原汁、檸檬汁與果糖糖漿。關於圖(二)試管中由甲至乙範圍內的顏色漸層變化，下列何者正確？\n\n○ (A) 由藍色變成紅紫色\n○ (B) 由紅紫色變成藍色\n○ (C) 由藍色變成黃綠色\n○ (D) 由黃綠色變成藍色",
    "answer": "(A) 由藍色變成紅紫色",
    "explanation": "蝶豆花中性呈現藍色，遇到檸檬汁（酸性）呈現紅紫色。由上層甲（蝶豆花原汁）至下層乙（檸檬汁層），顏色漸層為由藍色變成紅紫色。選 (A)。",
    "diagramUrl": "assets/questions/q_sci_chem_butterfly_pea_indicator_color_gradient_448.png",
    "solution": "蝶豆花中性呈現藍色，遇到檸檬汁（酸性）呈現紅紫色。由上層甲（蝶豆花原汁）至下層乙（檸檬汁層），顏色漸層為由藍色變成紅紫色。選 (A)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_quad_angle_cad_52_447",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形／同弧所對圓周角相等／三角形內角和 180 度",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：圓內接四邊形對角線夾角，對同弧（CD 弧）之圓周角必相等（∠CAD＝∠CBD）！先由 △BCD 內角和算得 ∠CBD＝52° 即可秒殺。",
    "stem": "如附圖，四邊形 $ABCD$ 為圓內接四邊形，線段 $\\overline{AC}$ 和 $\\overline{BD}$ 為對角線。若 $\\angle BCD = 70^\\circ$，$\\angle BDC = 58^\\circ$，則 $\\angle CAD$ 為多少度？\n\n○ (A) 48 度\n○ (B) 52 度\n○ (C) 58 度\n○ (D) 70 度",
    "answer": "(B) 52 度",
    "explanation": "CD 中，∠CBD ＝ 180° － 70° － 58° ＝ 52°。 故選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quad_angle_cad_52_447.png",
    "solution": "CD 中，∠CBD ＝ 180° － 70° － 58° ＝ 52°。 故選 (B)。"
  },
  {
    "id": "q_math_geo_circle_concyclic_quad_angle_cad_20_446",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／四點共圓判定（對角互補）／圓內接四邊形／同弧所對圓周角相等",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：見對角互補（80°＋100°＝180°）必聯想「四點共圓」！再由同弧所對圓周角相等，秒得 ∠CAD＝∠CBD＝20°。",
    "stem": "如附圖，線段 $\\overline{AC}$ 和 $\\overline{BD}$ 為四邊形 $ABCD$ 的對角線。若 $\\angle BAD = 80^\\circ$，$\\angle CBD = 20^\\circ$，$\\angle BDC = 60^\\circ$，則 $\\angle CAD$ 為多少度？\n\n○ (A) 20 度\n○ (B) 30 度\n○ (C) 40 度\n○ (D) 50 度",
    "answer": "(A) 20 度",
    "explanation": "D ＋ ∠BCD ＝ 80° ＋ 100° ＝ 180° ⟹ A、B、C、D 四點共圓。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_concyclic_quad_angle_cad_20_446.png",
    "solution": "D ＋ ∠BCD ＝ 80° ＋ 100° ＝ 180° ⟹ A、B、C、D 四點共圓。 故選 (A)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_quad_external_angles_b_47_445",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形性質／外角等於內對角／對角互補／三角形外角與內角和",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：圓內接四邊形「外角等於內對角」！由兩外角三角形分別列出兩對角（134°－∠B 與 140°－∠B），相加等於 180° 即可秒殺！",
    "stem": "如附圖，$A$、$B$、$C$、$D$ 為圓上四點，線段 $\\overline{AB}$ 和 $\\overline{CD}$ 的延長線交於圓外一點 $E$，線段 $\\overline{AD}$ 和 $\\overline{BC}$ 的延長線交於圓外一點 $F$。若 $\\angle E = 46^\\circ$，$\\angle F = 40^\\circ$，則 $\\angle B$ 為多少度？\n\n○ (A) 43 度\n○ (B) 47 度\n○ (C) 51 度\n○ (D) 55 度",
    "answer": "(B) 47 度",
    "explanation": "CD ＝ 180° － 46° － ∠B ＝ 134° － ∠B。 故選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quad_external_angles_b_47_445.png",
    "solution": "CD ＝ 180° － 46° － ∠B ＝ 134° － ∠B。 故選 (B)。"
  },
  {
    "id": "q_soc_civ_parliamentary_system_cabinet_uk_100_444",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／民主國家的政府體制／內閣制之核心特徵（虛位元首、國會多數組閣出任首相、行政立法合一）／以英國為典範",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：見「多數黨黨魁任首相、虛位元首（英王）、行政對立法負責」必為「內閣制」（英國）！美國為總統制，我國為雙首長制。",
    "stem": "附圖是小慈用來輔助說明某國家政府體制的圖形，根據其內容判斷，她最可能是在說明下列哪一國家？【100年第2次基測】\n\n○ (A) 北韓\n○ (B) 英國\n○ (C) 美國\n○ (D) 中華民國。",
    "answer": "(B) 英國",
    "explanation": "圖中「國會過半數席位產生首相、虛位元首、內閣對議會負責」為典型「內閣制」特徵，以英國為代表。故選(B)。",
    "diagramUrl": "assets/questions/q_soc_civ_parliamentary_system_cabinet_uk_100_444.png",
    "solution": "圖中「國會過半數席位產生首相、虛位元首、內閣對議會負責」為典型「內閣制」特徵，以英國為代表。故選(B)。"
  },
  {
    "id": "q_soc_civ_constitution_stability_news_referendum_443",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／憲法之最高性、原則性與固定性／修憲門檻與憲法之固定性／公民投票複決之選舉人法定資格",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：修憲門檻極高（需立院 3/4 決議 ＋ 965萬公投同意票）體現憲法的「固定性」！憲法修正案由「立法院」提出，非行政院。",
    "stem": "附圖是小平看到的一則新聞快訊。根據圖中內容及我國憲政體制、法律規範判斷，下列哪一項敘述完全正確？\n\n○ (A) 圖中內容凸顯出《憲法》的固定性\n○ (B) 該憲法修正案應該是由行政院提出\n○ (C) 受監護宣告者依法享有此次投票權\n○ (D) 具有我國國民身分即可行使複決權",
    "answer": "(A) 圖中內容凸顯出《憲法》的固定性",
    "explanation": "修憲門檻極高且繁複，呈現出《憲法》修改困難的「固定性」特色，故選(A)。(B)修憲案由立法院提出；(C)(D)投票需符合法定選舉人資格（年滿20歲、未受監護宣告）。",
    "diagramUrl": "assets/questions/q_soc_civ_constitution_stability_news_referendum_443.png",
    "solution": "修憲門檻極高且繁複，呈現出《憲法》修改困難的「固定性」特色，故選(A)。(B)修憲案由立法院提出；(C)(D)投票需符合法定選舉人資格（年滿20歲、未受監護宣告）。"
  },
  {
    "id": "q_sci_phys_bottle_opener_lever_resistance_middle_442",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "國中理化／簡單機械與功／槓桿原理／開瓶器之三點位置（支點、抗力點、施力點）／抗力點在中間之省力槓桿",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：開瓶器前端頂住瓶蓋頂部為「支點」，中間勾住瓶蓋邊緣為「抗力點」，手握把柄為「施力點」！抗力點在中間必為「省力費時」槓桿！",
    "stem": "如圖使用「開瓶器打開瓶蓋」時，下列敘述何者正確？\n\n○ (A) 開瓶器是個省時的工具\n○ (B) 手的施力比瓶蓋的抗力大\n○ (C) 開瓶器是支點在中間的槓桿\n○ (D) 開瓶器是抗力點在中間的槓桿。",
    "answer": "(D) 開瓶器是抗力點在中間的槓桿。",
    "explanation": "抗力點在支點與施力點之間，是一種省力的槓桿。故選(D)。",
    "diagramUrl": "assets/questions/q_sci_phys_bottle_opener_lever_resistance_middle_442.png",
    "solution": "抗力點在支點與施力點之間，是一種省力的槓桿。故選(D)。"
  },
  {
    "id": "q_soc_hist_talas_battle_papermaking_transmission_west_441",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史／唐代對外關係與文化交流／怛羅斯之役（西元751年高仙芝敗於大食）／中國四大發明之造紙術西傳",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：怛羅斯之役（751年）被俘工匠西傳的是「造紙術」！火藥與指南針是宋元時期西傳。",
    "stem": "八世紀時，唐朝曾因為在西亞地區的勢力衝突，在怛羅斯與大食帝國發生戰爭。唐軍在這場戰爭中落敗，多名軍人被俘，其中也有熟習某項技術的工匠。阿拉伯人將這些工匠移往撒馬爾罕工作，也輾轉將此技術傳入西方。上述的技術應是指下列何者？\n\n○ (A) 數字系統\n○ (B) 造紙術\n○ (C) 火藥\n○ (D) 印刷術",
    "answer": "(B) 造紙術",
    "explanation": "西元 751 年唐朝與大食（阿拉伯帝國）爆發怛羅斯之役，唐軍戰俘中的工匠將「造紙術」傳至撒馬爾罕並西傳歐洲。故選(B)。",
    "diagramUrl": "",
    "solution": "西元 751 年唐朝與大食（阿拉伯帝國）爆發怛羅斯之役，唐軍戰俘中的工匠將「造紙術」傳至撒馬爾罕並西傳歐洲。故選(B)。"
  },
  {
    "id": "q_soc_hist_islamic_expansion_arabian_peninsula_111_440",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史／伊斯蘭教興起與阿拉伯帝國擴張／穆罕默德於阿拉伯半島創立／地中海周邊地理位置對照",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：伊斯蘭教崛起於七世紀「阿拉伯半島（丙）」！甲為義大利、乙為小亞細亞、丁為尼羅河流域。",
    "stem": "「西元七世紀，伊斯蘭勢力在此地崛起，之後不斷的向外擴張，使得曾受波斯與羅馬文化影響的地區，在習俗、哲學、法律、政治體系上，開始與伊斯蘭文化相互揉合。」上下文中的「此地」，最可能是右圖中甲、乙、丙、丁何地？【111補考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(C) 丙",
    "explanation": "七世紀穆罕默德在阿拉伯半島（丙區）創立伊斯蘭教，死後陸續向西亞、北非、伊比利半島擴張。故選(C)。（甲為義大利半島、乙為小亞細亞、丁為埃及）",
    "diagramUrl": "assets/questions/q_soc_hist_islamic_expansion_arabian_peninsula_111_440.png",
    "solution": "七世紀穆罕默德在阿拉伯半島（丙區）創立伊斯蘭教，死後陸續向西亞、北非、伊比利半島擴張。故選(C)。（甲為義大利半島、乙為小亞細亞、丁為埃及）"
  },
  {
    "id": "q_soc_hist_arabic_numerals_origin_india_439",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史／世界古代文明成就／印度數字系統（包含零的概念）／阿拉伯帝國貿易與文化傳播西傳",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：「阿拉伯數字」是「印度人」發明的！只是經由阿拉伯商旅傳入西方，切勿望文生義誤選阿拉伯！",
    "stem": "現在通行世界的阿拉伯數字始創於□□。由於八世紀以後，阿拉伯人建立起暢通的國際貿易路線，也學習各地不同的科學知識與技術，並向外流傳。而這套來自□□的數字系統便是透過阿拉伯人的傳播，流傳至西方。請問：□□應填入下列何者最適當？\n\n○ (A) 中國\n○ (B) 埃及\n○ (C) 蘇美\n○ (D) 印度",
    "answer": "(D) 印度",
    "explanation": "阿拉伯數字起源於印度（發明 1～9 與零的概念），經由阿拉伯人傳播至歐洲，故稱阿拉伯數字。選(D)。",
    "diagramUrl": "",
    "solution": "阿拉伯數字起源於印度（發明 1～9 與零的概念），經由阿拉伯人傳播至歐洲，故稱阿拉伯數字。選(D)。"
  },
  {
    "id": "q_soc_hist_christianity_first_schism_eleventh_century_438",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史／中古歐洲基督教世界／教會第一次大分裂／1054年東西教會大分裂（羅馬公教 vs 希臘正教）",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：基督教「第一次大分裂」發生在 1054 年（11 世紀），分裂為西方的羅馬公教與東方的希臘正教！",
    "stem": "基督教創立後，逐漸形成以羅馬主教為領袖的制度，是為教宗。但此後歐洲東部的高層教會人員，因與羅馬爭奪權力及對教義的解釋發生衝突，釀成了「第一次大分裂」。「第一次大分裂」發生於何時？\n\n○ (A) 五世紀\n○ (B) 十一世紀\n○ (C) 十三世紀\n○ (D) 十六世紀",
    "answer": "(B) 十一世紀",
    "explanation": "1054年（十一世紀），羅馬教宗與君士坦丁堡大主教因爭權與教義解釋衝突而分道揚鑣，形成羅馬公教與希臘正教。故選(B)。",
    "diagramUrl": "",
    "solution": "1054年（十一世紀），羅馬教宗與君士坦丁堡大主教因爭權與教義解釋衝突而分道揚鑣，形成羅馬公教與希臘正教。故選(B)。"
  },
  {
    "id": "q_soc_hist_buddhism_christianity_reform_old_religion_437",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史／世界三大宗教發展／佛教改革婆羅門教／基督教改革猶太教／宗教教義改革之共同特徵",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：佛教（改革婆羅門教主張眾生平等）與基督教（改革猶太教主張神愛世人）皆屬「對舊宗教提出改革」！",
    "stem": "佛教與基督教都是當今流傳最廣的重要宗教。就其形成的背景而言，兩者具有何種共同特徵？\n\n○ (A) 都追求超脫因果報應與輪迴\n○ (B) 兩個宗教皆具有一神論思想\n○ (C) 兩者皆以《古蘭經》為經典\n○ (D) 都對舊有宗教教義提出改革",
    "answer": "(D) 都對舊有宗教教義提出改革",
    "explanation": "兩者皆改革舊宗教：佛教改革婆羅門教種姓與階級制度；基督教改革猶太教狹隘律法。故選(D)。(A)基督教追求天堂永生；(B)僅基督教為一神信仰；(C)《古蘭經》為伊斯蘭教經典。",
    "diagramUrl": "",
    "solution": "兩者皆改革舊宗教：佛教改革婆羅門教種姓與階級制度；基督教改革猶太教狹隘律法。故選(D)。(A)基督教追求天堂永生；(B)僅基督教為一神信仰；(C)《古蘭經》為伊斯蘭教經典。"
  },
  {
    "id": "q_soc_geo_world_religion_buddhism_origin_india_113_436",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理與歷史／世界宗教分佈與發源地／佛教起源於古印度／南亞與東南亞佛教國家比例判讀",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：柬埔寨、泰國、斯里蘭卡等皆信奉「佛教」！佛教起源於南亞「印度（丙）」，絕非起源於東亞或東南亞。",
    "stem": "下表呈現五個國家2010年某宗教信徒占該國總人口數的比例，根據內容判斷，此宗教的發源地最可能位於下圖中甲、乙、丙、丁何處？【113會考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(C) 丙",
    "explanation": "表中柬埔寨、泰國、緬甸、不丹、斯里蘭卡均為信仰佛教為主的國家。佛教起源於南亞印度（丙區），故選(C)。（甲為中國、乙為中南半島、丁為阿拉伯半島）",
    "diagramUrl": "assets/questions/q_soc_geo_world_religion_buddhism_origin_india_113_436.png",
    "solution": "表中柬埔寨、泰國、緬甸、不丹、斯里蘭卡均為信仰佛教為主的國家。佛教起源於南亞印度（丙區），故選(C)。（甲為中國、乙為中南半島、丁為阿拉伯半島）"
  },
  {
    "id": "q_soc_hist_spain_iberian_roman_islamic_rule_435",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史與地理／歐洲歷史文化發展／伊比利半島／西班牙之羅馬文化與伊斯蘭文化交融",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：西班牙位於伊比利半島，曾受羅馬帝國統治與阿拉伯人（伊斯蘭教政權）統治近八百年！",
    "stem": "背包客阿福正在準備歐洲旅遊的行前資料，看到一篇介紹說：「在歷史上，這個國家曾被羅馬帝國及伊斯蘭教政權統治過，所以它是一個具有多種文化特色的國家。」依此推斷，阿福最可能要到下列哪一個國家旅遊？\n\n○ (A) 英國\n○ (B) 法國\n○ (C) 義大利\n○ (D) 西班牙",
    "answer": "(D) 西班牙",
    "explanation": "伊比利半島曾先後受到羅馬帝國及伊斯蘭勢力的統治，西班牙即位於伊比利半島。故選(D)。",
    "diagramUrl": "",
    "solution": "伊比利半島曾先後受到羅馬帝國及伊斯蘭勢力的統治，西班牙即位於伊比利半島。故選(D)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_interior_angle_afc_48_434",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／等分圓弧／圓內角定理／圓周角與所對弧度數",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：五等分得 5 段等弧 r！P 為圓內交點，平角互補得圓內角 72°，由圓內角定理 (2r＋r)/2＝72° 即可秒求 r＝48°。",
    "stem": "如附圖，圓上 $B$、$C$、$D$、$E$ 四點將 $\\widehat{ACF}$ 分成五等分，$P$ 為 $\\overline{AE}$、$\\overline{CF}$ 的交點，若 $\\angle CPE = 108^\\circ$，則 $\\angle AFC$ 為多少度？\n\n○ (A) 36 度\n○ (B) 42 度\n○ (C) 48 度\n○ (D) 54 度",
    "answer": "(C) 48 度",
    "explanation": "＝ 2r°，弧 EF ＝ r°。 故選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_interior_angle_afc_48_434.png",
    "solution": "＝ 2r°，弧 EF ＝ r°。 故選 (C)。"
  },
  {
    "id": "q_soc_civ_legal_hierarchy_convention_rights_child_act_433",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／法律的基本概念／法規範的位階（憲法、法律、命令）／中央法規標準法命名原則（法、律、條例、通則）",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：見「立法院三讀」或名稱為「法、律、條例、通則」必為法律位階！命令由行政機關訂定。",
    "stem": "我國為與國際接軌，落實聯合國的《兒童權利公約》要求的人權保障。由立法院三讀通過了《兒童權利公約施行法》。請問，下列有關《兒童權利公約施行法》的解釋，何者正確？\n\n○ (A) 擁有憲法級位階，規定原則性的事務\n○ (B) 擁有法律級位階，可實現憲法的精神\n○ (C) 擁有命令級位階，行政機關可以修改\n○ (D) 擁有命令級位階，縣市議會可以修改",
    "answer": "(B) 擁有法律級位階，可實現憲法的精神",
    "explanation": "由立法院三讀通過且名稱為「法」，屬於法律位階（包含法、律、條例、通則），故選(B)。(A)憲法位階僅含憲法本文與增修條文；(C)(D)命令由行政機關發布修改。",
    "diagramUrl": "",
    "solution": "由立法院三讀通過且名稱為「法」，屬於法律位階（包含法、律、條例、通則），故選(B)。(A)憲法位階僅含憲法本文與增修條文；(C)(D)命令由行政機關發布修改。"
  },
  {
    "id": "q_soc_civ_recall_representative_political_rights_civil_exam_432",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／人民之基本權利與義務／參政權（選舉、罷免、創制、複決、應考試、服公職）／四種基本權利辨析（平等、自由、受益、參政）",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：罷免與應考試服公職皆屬「參政權」！訴願與受教為「受益權」，遷徙為「自由權」。",
    "stem": "小光認為自己所屬選區內的民意代表，違背了競選時所提出的政見，於是發動連署提案罷免該位民意代表。上述小光行使的人民基本權利類型與下列何者最類似？【103年會考】\n\n○ (A) 對於政府行政處分提出訴願\n○ (B) 參加國家考試擔任公務人員\n○ (C) 依照個人需求遷移居住地點\n○ (D) 接受國民義務教育完成學業。",
    "answer": "(B) 參加國家考試擔任公務人員",
    "explanation": "罷免與應考試服公職，都是屬於人民的參政權。(A)訴願是受益權；(C)往來遷徙是自由權；(D)接受國民義務教育是受益權。",
    "diagramUrl": "",
    "solution": "罷免與應考試服公職，都是屬於人民的參政權。(A)訴願是受益權；(C)往來遷徙是自由權；(D)接受國民義務教育是受益權。"
  },
  {
    "id": "q_soc_civ_constitutional_amendment_procedure_diagram_431",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／憲法與修憲程序／憲法增修條文修憲高門檻／立法院提案通過與公告半年／公民投票複決門檻",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記（我國修憲三部曲口訣）：\n• 立院提案（高門檻 3/4 通過） ➔ 公告半年 ➔ 公投複決（有效同意票過選舉人總額半數）\n★ 陷阱警示：國民大會早已廢除，修憲複決權交由全體「公民投票」，絕非交給司法院大法官！",
    "stem": "我國修憲流程，如附圖所示。請問甲、乙兩處應該是？\n\n○ (A) 甲：司法院大法官、乙：立法院\n○ (B) 甲：立法院、乙：司法院大法官\n○ (C) 甲：立法院、乙：公民投票\n○ (D) 甲：司法院大法官、乙：公民投票",
    "answer": "(C) 甲：立法院、乙：公民投票",
    "explanation": "1. 我國現行《憲法增修條文》第 12 條規定之修憲程序： 故選 (C)。",
    "diagramUrl": "assets/questions/q_soc_civ_constitutional_amendment_procedure_diagram_431.png",
    "solution": "1. 我國現行《憲法增修條文》第 12 條規定之修憲程序： 故選 (C)。"
  },
  {
    "id": "q_soc_civ_president_impeachment_grand_justice_trial_430",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／中央政府職權／總統與副總統之彈劾與罷免／立法院提案與憲法法庭大法官審理／公投複決與罷免之區辨",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記（彈劾 vs 罷免口訣）：\n• 彈劾（違法失職）＝ 立法院提案 ＋「大法官審理」（憲法法庭判決）\n• 罷免（政治無能）＝ 立法院提案 ＋「公民投票複決」\n★ 陷阱警示：監察院「絕對不能」彈劾正副總統！",
    "stem": "根據我國《憲法》及增修條文的相關規定，若要對總統、副總統進行彈劾，必須先由立法院提案通過後，再經何種程序才可完成？〔102.試辦會考〕\n\n○ (A) 大法官審理\n○ (B) 監察院表決\n○ (C) 公民投票複決\n○ (D) 最高法院判決",
    "answer": "(A) 大法官審理",
    "explanation": "1. 正副總統彈劾程序：由「立法院」提案（全體立法委員 1/2 以上提議、2/3 以上決議通過），聲請「司法院大法官」組成憲法法庭審理，經判決成立即解職。故選 (A)。",
    "diagramUrl": "",
    "solution": "1. 正副總統彈劾程序：由「立法院」提案（全體立法委員 1/2 以上提議、2/3 以上決議通過），聲請「司法院大法官」組成憲法法庭審理，經判決成立即解職。故選 (A)。"
  },
  {
    "id": "q_math_geo_circle_semicircle_fold_chord_bac_18_429",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／半圓弧度 180°／沿弦對摺對稱圓弧／共線角同角對應圓周角與所對弧相等",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：A、D、B 共線使 ∠BAC 與 ∠CAD 為同一角！兩等圓中同圓周角所對弧相等，故弧 BC ＝ 弧 CD ＝ k，再用半圓 180° 即可秒殺。",
    "stem": "如附圖，線段 $\\overline{AB}$ 為半圓 $O$ 的直徑，$C$ 點在圓 $O$ 上，將 $\\widehat{AC}$ 沿 $\\overline{AC}$ 對摺後，與 $\\overline{AB}$ 交於 $D$ 點。已知 $\\widehat{AD} : \\widehat{CD} = 3 : 1$，則 $\\angle BAC$ 為多少度？\n\n○ (A) 18 度\n○ (B) 24 度\n○ (C) 30 度\n○ (D) 36 度",
    "answer": "(A) 18 度",
    "explanation": "D ＝ 3k°，則弧 AC ＝ 3k° ＋ k° ＝ 4k°。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_semicircle_fold_chord_bac_18_429.png",
    "solution": "D ＝ 3k°，則弧 AC ＝ 3k° ＋ k° ＝ 4k°。 故選 (A)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_rotate_bad_60_428",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓周角與所對圓弧度數／全等旋轉變換與等弦對等弧／圓周角求角度",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：弦 AE ＝ AB 必得等弧（100°）！由整圓 360° 扣除兩弧得弧 BE，再由圓周角為弧之一半（80°）扣除 ∠EAD（20°）即得正解。",
    "stem": "如附圖，$\\triangle ABC$ 為圓內接三角形，其中 $\\angle BAC = 20^\\circ$，$\\angle B = 30^\\circ$。若將 $\\triangle ABC$ 旋轉至 $\\triangle ADE$，則 $\\angle BAD$ 為多少度？\n\n○ (A) 50 度\n○ (B) 60 度\n○ (C) 70 度\n○ (D) 80 度",
    "answer": "(B) 60 度",
    "explanation": "C ＝ 2∠A ＝ 40°，弧 AC ＝ 2∠B ＝ 60° ⟹ 弧 AB ＝ 40° ＋ 60° ＝ 100°。 故選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_rotate_bad_60_428.png",
    "solution": "C ＝ 2∠A ＝ 40°，弧 AC ＝ 2∠B ＝ 60° ⟹ 弧 AB ＝ 40° ＋ 60° ＝ 100°。 故選 (B)。"
  },
  {
    "id": "q_math_geo_circle_fold_chord_cod_120_427",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／對摺對稱軸與垂直平分線／弦心距為半徑之一半 (r/2)／30°-60°-90° 特殊角與圓心角 120°",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：翻摺圓弧過圓心，弦心距必為半徑之一半（r/2）！由 1 : √3 : 2 直角三角形得半角 60°，圓心角即為 120°。",
    "stem": "如附圖，將一圓先對摺後展開產生摺線 $\\overline{AB}$，再將上半部對摺使摺線 $\\overline{CD}$ 與摺線 $\\overline{AB}$ 平行，且 $\\overline{AB}$ 切圓弧於圓心 $O$，則 $\\widehat{COD}$ 的度數為何？\n\n○ (A) 120 度\n○ (B) 90 度\n○ (C) 60 度\n○ (D) 150 度",
    "answer": "(A) 120 度",
    "explanation": "1. 圓弧向下翻摺切於圓心 O ⟹ 弦 CD 垂直平分半徑 ⟹ 弦心距 OM ＝ r/2。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_fold_chord_cod_120_427.png",
    "solution": "1. 圓弧向下翻摺切於圓心 O ⟹ 弦 CD 垂直平分半徑 ⟹ 弦心距 OM ＝ r/2。 故選 (A)。"
  },
  {
    "id": "q_math_geo_circle_diameter_secant_angle_equality_426",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／同弧所對圓周角相等 (∠ADC ＝ ∠ABC)／直徑所對圓周角為直角 (∠ACD ＝ 90°)／等腰直角三角形邊長比 (1 : 1 : √2)",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：見直徑必連出直角 90°！同弧得兩底角相等，△ACD 為等腰直角三角形，由斜邊求股長記住除以 √2。",
    "stem": "如附圖，線段 $\\overline{AD}$ 為圓 $O$ 的直徑，$\\overline{BC}$、$\\overline{AB}$、$\\overline{AC}$ 為圓內的三條弦。若 $\\overline{AD} = 3$，且 $\\angle ABC = \\angle CAD$，則弦 $\\overline{AC}$ 的長度為何？\n\n○ (A) (3/2)√2\n○ (B) (3/2)√3\n○ (C) 3√2\n○ (D) 3/2",
    "answer": "(A) (3/2)√2",
    "explanation": "DC ＝ ∠ABC ＝ ∠CAD。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_diameter_secant_angle_equality_426.png",
    "solution": "DC ＝ ∠ABC ＝ ∠CAD。 故選 (A)。"
  },
  {
    "id": "q_math_geo_circle_diameter_secant_bc_425",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／直徑所對圓周角為直角 (90°)／30°-60°-90° 特殊直角三角形邊長比 (1 : √3 : 2)／相似形與垂徑定理",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：見直徑必連直徑圓周角 90°；題目問的是截線段 BC ＝ AC － AB，切勿算出 AB ＝ 8 就急著選。",
    "stem": "如附圖，線段 $\\overline{AD}$ 為圓 $O$ 的直徑，$\\overline{AC}$ 為圓內一弦，$\\angle CAD = 30^\\circ$，$\\overline{OB} \\perp \\overline{AD}$。若 $\\overline{OB} = 4$，則線段 $\\overline{BC}$ 的長度為何？\n\n○ (A) 4\n○ (B) 4√3\n○ (C) 6\n○ (D) 8",
    "answer": "(A) 4",
    "explanation": "OB 中，∠A ＝ 30°、OB ＝ 4 ⟹ 斜邊 AB ＝ 8，半徑 AO ＝ 4√3，直徑 AD ＝ 8√3。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_diameter_secant_bc_425.png",
    "solution": "OB 中，∠A ＝ 30°、OB ＝ 4 ⟹ 斜邊 AB ＝ 8，半徑 AO ＝ 4√3，直徑 AD ＝ 8√3。 故選 (A)。"
  },
  {
    "id": "q_sci_physics_simple_machines_work_principle_definition_424",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "自然/理化／簡單機械定義與功能／功的原理（使用任何機械絕不省功）／省力省時與操作方便之辨析",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【理化功與能最高鐵律 ——「使用任何機械，絕對不可能省功！」】\n1. **最高頻觀念陷阱（混淆省力與省功）**：\n   - 很多同學誤以為「用機械比較輕鬆」就是省功，大錯特錯！\n   - 「省力」必定「費距離（費時）」，例如施力減半但推動距離加倍，總功 W ＝ F × S 依然保持不變！\n2. **三類機械功能對照**：\n   - **省力機械**：施力臂 ＞ 抗力臂，省力但費距離（如開瓶器、獨輪推車、動滑輪）；\n   - **費力機械**：施力臂 ＜ 抗力臂，費力但省距離／便於操作（如鑷子、筷子、釣竿）；\n   - **改變方向**：施力臂 ＝ 抗力臂，不省力也不省距離（如定滑輪）。\n3. **黃金口訣**：\n   - 「省力必費距，省距必費力；方向可改變，天理不省功！」",
    "stem": "下列關於「機械」的敘述，何者完全正確？\n\n○ (A) 機械就是一種省力的裝置\n○ (B) 機械就是一種省功的裝置\n○ (C) 機械就是槓桿、滑輪和斜面的總稱\n○ (D) 只要能幫助人類作功的裝置都可稱為機械",
    "answer": "(D) 只要能幫助人類作功的裝置都可稱為機械",
    "explanation": "- 凡是能夠協助人類傳遞能量、改變受力大小、方向或運動速度，進而幫助人類作功的各種裝置或工具，皆可統稱為機械。 故選 (D)。",
    "diagramUrl": "",
    "solution": "- 凡是能夠協助人類傳遞能量、改變受力大小、方向或運動速度，進而幫助人類作功的各種裝置或工具，皆可統稱為機械。 故選 (D)。"
  },
  {
    "id": "q_chi_reading_tao_yuan_ming_intro_xiao_tong_unmentioned_423",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國中國文／會考文言文閱讀測驗／蕭統〈陶淵明集序〉／文意細節檢索與推論判讀／未提及訊息判別",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【閱讀理解「無中生有」陷阱 —— 嚴格依文本訊息作答！】\n1. **(A) 可知**：由「有疑陶淵明詩篇篇有酒」可知其詩作頻繁出現酒；\n2. **(B) 可知**：由「其文章不群……獨超眾類……莫之與京」可知其詩文獨樹一格；\n3. **(C) 可知**：由「余愛嗜其文，不能釋手，尚想其德，恨不同時」可知蕭統對陶淵明極度推崇愛慕；\n4. ⚠️ **(D) 陷阱**：雖然「陶淵明深深影響後世文壇」在文學史上是事實，但**本篇短文通篇皆為蕭統對陶淵明個人文章特色與德行的評價，完全未提及後代文壇是否受其影響**！切勿把既有常識當成文章內文訊息。",
    "stem": "請閱讀以下短文，並回答問題：\n\n「有疑陶淵明詩篇篇有酒，吾觀其意不在酒，亦寄酒為跡者也。其文章不群，辭采精拔，跌宕昭彰，獨超眾類，抑揚爽朗，莫之與京①。橫素波而傍流，干青雲而直上。語時事則指而可想，論懷抱則曠而且真。加以貞志不休，安道苦節，不以躬耕為恥，不以無財為病。自非大賢篤志，孰能如此乎？余愛嗜其文，不能釋手，尚想其德，恨不同時。」\n——改寫自蕭統〈陶淵明集序〉【107 年會考】\n（注：① 莫之與「京」：齊等、相匹敵。）\n\n根據本文，無法得知下列何者？\n\n○ (A) 陶淵明詩多以酒為寫作題材\n○ (B) 陶淵明詩文在當時獨樹一格\n○ (C) 作者對陶淵明極為欣賞崇敬\n○ (D) 後世文壇深受陶淵明之影響",
    "answer": "(D) 後世文壇深受陶淵明之影響",
    "explanation": "無法得知：全文焦點在於剖析陶淵明的創作風格、人格特質與蕭統個人的景仰，蕭統並未在本文探討「後世文壇深受陶淵明影響」之情況，屬於文中未載之內容。 故選 (D)。",
    "diagramUrl": "",
    "solution": "無法得知：全文焦點在於剖析陶淵明的創作風格、人格特質與蕭統個人的景仰，蕭統並未在本文探討「後世文壇深受陶淵明影響」之情況，屬於文中未載之內容。 故選 (D)。"
  },
  {
    "id": "q_chi_reading_tao_yuan_ming_intro_xiao_tong_sentence_meaning_422",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國中國文／會考文言文閱讀測驗／蕭統〈陶淵明集序〉／句意理解與文言文詞彙精析／「莫之與京」",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【〈陶淵明集序〉重點詞義辨析 ——「寄酒為跡」、「莫之與京」！】\n1. **(A)「寄酒為跡」**：非指「蹤跡」，而是指陶淵明「借酒抒發志趣、寄託真實心志」，酒只是心意的載體。\n2. **(B)「莫之與京」**：「京」借為「齊等、相比」，「莫之與京」即「沒有人能與他齊平／無人能比」，形容文章超群拔萃。\n3. **(C)「干青雲而直上」**：接在「其文章不群……」之後，形容「文章氣勢雄健磅礴、直衝雲霄」，絕非指仕途飛黃騰達！陶淵明一生仕途坎坷，不為五斗米折腰而退隱田園。\n4. **(D)「恨不同時」**：「恨」是遺憾，「恨不同時」是作者蕭統仰慕陶淵明的品德高潔，遺憾未能與陶淵明生活在同一時代，非指自己生不逢時。",
    "stem": "請閱讀以下短文，並回答問題：\n\n「有疑陶淵明詩篇篇有酒，吾觀其意不在酒，亦寄酒為跡者也。其文章不群，辭采精拔，跌宕昭彰，獨超眾類，抑揚爽朗，莫之與京①。橫素波而傍流，干青雲而直上。語時事則指而可想，論懷抱則曠而且真。加以貞志不休，安道苦節，不以躬耕為恥，不以無財為病。自非大賢篤志，孰能如此乎？余愛嗜其文，不能釋手，尚想其德，恨不同時。」\n——改寫自蕭統〈陶淵明集序〉【107 年會考】\n（注：① 莫之與「京」：齊等、相匹敵。）\n\n根據本文，下列句意說明何者正確？\n\n○ (A) 亦寄酒為跡者也——有酒之處必有陶淵明蹤跡\n○ (B) 抑揚爽朗，莫之與京——文章起伏跌宕、清朗通達，無人能及\n○ (C) 干青雲而直上——志向遠大，在仕途上也曾飛黃騰達\n○ (D) 尚想其德，恨不同時——感嘆自己德行高潔卻生不逢時",
    "answer": "(B) 抑揚爽朗，莫之與京——文章起伏跌宕、清朗通達，無人能及",
    "explanation": "正確：「抑揚爽朗」指文章音節起伏有致、風格清朗通暢；「京」在此借為齊等，故「莫之與京」代表無人能與他並列、無人能及！ 故選 (B)。",
    "diagramUrl": "",
    "solution": "正確：「抑揚爽朗」指文章音節起伏有致、風格清朗通暢；「京」在此借為齊等，故「莫之與京」代表無人能與他並列、無人能及！ 故選 (B)。"
  },
  {
    "id": "q_chi_yu_song_yuan_si_shu_heng_ke_han_shu_421",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國中國文／文言文閱讀／吳均《與宋元思書》結構呼應／「橫柯上蔽」與「皆生寒樹」林木繁密意象對照",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【《與宋元思書》前後文脈呼應 ——「樹」呼應「柯條」！】\n1. **詞義密碼解碼**：\n   - 「柯」為樹枝，「條」為枝條；「橫柯上蔽，在晝猶昏」描述樹枝交錯遮蔽陽光，白天也像黃昏一樣陰暗；\n   - 此處「濃蔭蔽日、林木茂密」之景，正是前面「夾岸高山，皆生**寒樹**」的具體描寫與補敘延伸！\n2. **常見混淆選項辨析**：\n   - (A)「風煙俱淨，天山共色」：描寫秋高氣爽、天水相連之全景；\n   - (B)「水皆縹碧，千丈見底」：描寫富春江江水清澈澄碧；\n   - (D)「鳶飛戾天，望峰息心」：由自然景物觸發之人生感悟（抒情言志），非景觀描摹。",
    "stem": "〈與宋元思書〉一文中，「橫柯上蔽，在晝猶昏；疏條交映，有時見日。」這是補敘奇景的寫法，亦可呼應文中何句？\n\n○ (A) 風煙俱淨，天山共色\n○ (B) 水皆縹碧，千丈見底\n○ (C) 夾岸高山，皆生寒樹\n○ (D) 鳶飛戾天，望峰息心",
    "answer": "(C) 夾岸高山，皆生寒樹",
    "explanation": "呼應句為「夾岸高山，皆生寒樹」，正確答案選 (C)。",
    "diagramUrl": "",
    "solution": "呼應句為「夾岸高山，皆生寒樹」，正確答案選 (C)。"
  },
  {
    "id": "q_math_geometric_sequence_first_term_plus_minus_one_420",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等比數列一般項公式／公比偶數次方正負雙解討論／首項求值 a₁ ＝ ±1",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：等比公比平方開根號必加「±」！負公比（奇正偶負或交錯）亦合題意，切勿漏解負值。",
    "stem": "已知一個等比數列的第 4 項為 8，第 6 項為 32，則此數列的首項為何？\n\n○ (A) ± 1\n○ (B) 1\n○ (C) ± 2\n○ (D) 2",
    "answer": "(A) ± 1",
    "explanation": "1. a₆ ÷ a₄ ＝ r² ⟹ r² ＝ 32 ÷ 8 ＝ 4 ⟹ 公比 r ＝ ±2（開根號必加正負號）。 故選 (A)。",
    "diagramUrl": "",
    "solution": "1. a₆ ÷ a₄ ＝ r² ⟹ r² ＝ 32 ÷ 8 ＝ 4 ⟹ 公比 r ＝ ±2（開根號必加正負號）。 故選 (A)。"
  },
  {
    "id": "q_math_stairs_arithmetic_sequence_jia_yi_meeting_419",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等差數列應用題／樓梯編號與步數植樹問題／公差為負之等差模型",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：植樹起點陷阱！甲在 1 號階走到 21 號階只移動 20 步，誤算為 21 步會算出 58 階。",
    "stem": "樓梯有 100 階，由下而上編號從 1 號編到 100 號。甲由 1 號階往上走，每步走一階；乙由 100 號階往下走，每步走 2 階。假設甲、乙兩人每步所用的時間相同，請問當甲到達第 21 號階時，乙在第幾號階？\n\n○ (A) 60 號階\n○ (B) 58 號階\n○ (C) 62 號階\n○ (D) 40 號階",
    "answer": "(A) 60 號階",
    "explanation": "1. 甲由 1 號階走到 21 號階，共走了 21 － 1 ＝ 20 步（起點是 1 號，勿誤算為 21 步）。 故選 (A)。",
    "diagramUrl": "",
    "solution": "1. 甲由 1 號階走到 21 號階，共走了 21 － 1 ＝ 20 步（起點是 1 號，勿誤算為 21 步）。 故選 (A)。"
  },
  {
    "id": "q_math_installment_arithmetic_sequence_4400_toy_418",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等差數列應用題／分期付款二元一次聯立方程／首項與第 4 期計算",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：最後一期是第 4 期，為 a₁ ＋ 3d，切勿誤加成 4d 而多算了一個公差。",
    "stem": "小胖想買一個價值 4400 元的玩具，但玩具太貴了，老闆答應他可以分期付款。已知小胖一共分 4 期付款，每期付款的金額恰成一個等差數列。第一、二期小胖共付 1800 元，第三、四期共付 2600 元，請問小胖在第一期、最後一期各付了多少錢？\n\n○ (A) 第一期付 800 元，最後一期付 1400 元\n○ (B) 第一期付 700 元，最後一期付 1500 元\n○ (C) 第一期付 800 元，最後一期付 1200 元\n○ (D) 第一期付 900 元，最後一期付 1300 元",
    "answer": "(A) 第一期付 800 元，最後一期付 1400 元",
    "explanation": "1. 設首期 a₁，公差 d： 故選 (A)。",
    "diagramUrl": "",
    "solution": "1. 設首期 a₁，公差 d： 故選 (A)。"
  },
  {
    "id": "q_math_sequence_linear_rule_am_3m_plus_1_417",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等差數列規律性／首項與公差判讀／通式一般項 a_n = 3n + 1",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": [
      "2026-11-09"
    ],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：通式是 a₁ ＋ (n－1)d ＝ 3n ＋ 1，切勿直覺猜 3n，代入 n ＝ 1 驗算即可確認。",
    "stem": "下表中的數列隱含某種規律，觀察數列間的關係，完成下表。\n\n| 項數 (n) | 1 | 2 | 3 | 4 | 5 | 6 | … | 20 | … | m |\n| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n| 數列值 (aₙ) | 4 | 7 | 10 | ① | 16 | 19 | … | ② | … | ③ |\n\n試問表中代號 ①、②、③ 對應的值，下列何者完全正確？\n\n○ (A) ①＝13，②＝61，③＝3m＋1\n○ (B) ①＝13，②＝60，③＝3m\n○ (C) ①＝12，②＝61，③＝4m－1\n○ (D) ①＝14，②＝64，③＝3m＋2",
    "answer": "(A) ①＝13，②＝61，③＝3m＋1",
    "explanation": "1. 由相鄰項差值知首項 a₁ ＝ 4，公差 d ＝ 7 － 4 ＝ 3。 故選 (A)。",
    "diagramUrl": "assets/questions/q_math_sequence_linear_rule_am_3m_plus_1_417.png",
    "solution": "1. 由相鄰項差值知首項 a₁ ＝ 4，公差 d ＝ 7 － 4 ＝ 3。 故選 (A)。"
  },
  {
    "id": "q_chi_orthography_gang_ling_416",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "計算粗心",
    "concept": "國文/字形辨析／「綱」領 (糸部大繩要領) vs 剛 vs 鋼 vs 崗",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「綱」領是糸字旁！大網總繩指方針要領！】\n1. **正字為「綱」**：「綱」領（糸部，大網的主繩，引申指國家法規或方針的總要領）；\n2. **形近字大對比**：\n   - 糸部：綱領、大綱、提綱挈領；\n   - 刀部：剛強、剛直；\n   - 金部：鋼鐵、鋼筆；\n   - 山部：山崗、崗位。",
    "stem": "下列詞語「　」中注音的字，何者書寫完全正確？\n「這份會議記錄清楚明列了下半年度推動教育改革的行動『ㄍㄤ』領。」\n\n○ (A) 綱\n○ (B) 剛\n○ (C) 鋼\n○ (D) 崗",
    "answer": "(A) 綱",
    "explanation": "綱：糸部，指大綱、方針要領，如「綱領」、「大綱」，正確！ 故選 (A)。",
    "diagramUrl": "",
    "solution": "綱：糸部，指大綱、方針要領，如「綱領」、「大綱」，正確！ 故選 (A)。"
  },
  {
    "id": "q_chi_orthography_er_shu_neng_xiang_415",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "計算粗心",
    "concept": "國文/字形辨析／耳熟能「詳」 (言部詳細敘說) vs 祥 vs 翔 vs 降",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【耳熟能「詳」是言字旁！聽多了就能「詳細說明」！】\n1. **正字為「詳」**：耳熟能「詳」（言部，指聽得非常純熟，因而能「詳細」述說解說）；\n2. **高頻混淆字辨析**：\n   - 言部：耳熟能「詳」、詳盡、詳細（言字旁才能「說」）；\n   - 示部：吉「祥」如意、安「祥」（示部指神明福佑）；\n   - 羽部：飛「翔」、翱「翔」（羽毛才能飛）。",
    "stem": "下列成語「　」中注音的字，何者書寫完全正確？\n「這首耳熟能『ㄒㄧㄤˊ』的經典老歌，陪伴了無數人度過美好的青春時光。」\n\n○ (A) 詳\n○ (B) 翔\n○ (C) 祥\n○ (D) 降",
    "answer": "(A) 詳",
    "explanation": "詳：言部，指詳細、說得清楚，如「耳熟能詳」，正確！ 故選 (A)。",
    "diagramUrl": "",
    "solution": "詳：言部，指詳細、說得清楚，如「耳熟能詳」，正確！ 故選 (A)。"
  },
  {
    "id": "q_chi_orthography_yu_wu_lun_ci_414",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "計算粗心",
    "concept": "國文/字形辨析／語無「倫」次 (人部倫次條理) vs 輪 vs 淪 vs 論",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【語無「倫」次是人字旁！形容說話無條理順序！】\n1. **正字為「倫」**：語無「倫」次（人部，指條理、次序、倫常）；\n2. **形近字大對比**：\n   - 人部：語無「倫」次、絕「倫」；\n   - 車部：車「輪」、年「輪」；\n   - 水部：「淪」陷、「淪」落；\n   - 言部：討「論」、理「論」。",
    "stem": "下列成語「　」中注音的字，何者書寫完全正確？\n「他因突如其來的意外打擊而方寸大亂，說話語無『ㄌㄨㄣˊ』次，令人摸不著頭緒。」\n\n○ (A) 倫\n○ (B) 輪\n○ (C) 論\n○ (D) 淪",
    "answer": "(A) 倫",
    "explanation": "倫：人部，指條理、秩序，如「語無倫次」、「倫理」，正確！ 故選 (A)。",
    "diagramUrl": "",
    "solution": "倫：人部，指條理、秩序，如「語無倫次」、「倫理」，正確！ 故選 (A)。"
  },
  {
    "id": "q_chi_orthography_wang_feng_xi_xin_413",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "計算粗心",
    "concept": "國文/字形辨析／《與宋元思書》望峰「息」心 (平息止息) vs 熄 vs 惜 vs 吸",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【望峰「息」心是心字底！平息止息名利之狂心！】\n1. **正字為「息」**：望峰「息」心（自心部，停止、平息）；\n2. **同音混淆字**：\n   - 平息停止：望峰「息」心、川流不「息」；\n   - 火滅：燈火「熄」滅（火部）；\n   - 愛惜憐惜：可「惜」、珍「惜」（忄部）；\n   - 呼吸：呼「吸」（口部）。",
    "stem": "吳均《與宋元思書》描繪奇山美景令士人忘卻名利：「鳶飛戾天者，望峰『ㄒㄧ』心；經綸世務者，窺谷忘反。」句中「ㄒㄧ」字應寫為下列何者？\n\n○ (A) 息\n○ (B) 吸\n○ (C) 惜\n○ (D) 熄",
    "answer": "(A) 息",
    "explanation": "息：心部，指停止、消除、平息，如「望峰息心」、「平息」，完全符合句意！ 故選 (A)。",
    "diagramUrl": "",
    "solution": "息：心部，指停止、消除、平息，如「望峰息心」、「平息」，完全符合句意！ 故選 (A)。"
  },
  {
    "id": "q_chi_phonetic_mao_ying_412",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/字音與詞義／帽「纓」讀音 (ㄧㄥ，一聲)／繫帽絲帶與裝飾流蘇／滄浪之水清兮可以濯吾纓",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【帽「纓」讀第一聲「ㄧㄥ」，音同「英」！】\n1. **讀音**：纓（ㄧㄥ），陰平聲；\n2. **詞義**：指繫在帽子上的絲帶或流蘇飾品（如帽纓、冠纓）；\n3. **文化典故**：《楚辭·漁父》「滄浪之水清兮，可以濯吾纓；滄浪之水濁兮，可以濯吾足」。",
    "stem": "古典詩歌中常有「濯纓濯足」之喻，下列關於「帽纓」一詞中「纓」字的讀音與意義，何者完全正確？\n\n○ (A) 讀音為「ㄧㄥ」，指繫在帽子上的帶子或裝飾流蘇\n○ (B) 讀音為「ㄧㄥˇ」，指帽子頂部的尖端裝飾\n○ (C) 讀音為「ㄖㄣˊ」，指古代官員的服飾衣領\n○ (D) 讀音為「ㄧㄥˋ」，指遮蔽陽光的寬大帽沿",
    "answer": "(A) 讀音為「ㄧㄥ」，指繫在帽子上的帶子或裝飾流蘇",
    "explanation": "「纓」讀音為 ㄧㄥ，指繫帽之帶或裝飾流蘇，正確答案選 (A)。",
    "diagramUrl": "",
    "solution": "「纓」讀音為 ㄧㄥ，指繫帽之帶或裝飾流蘇，正確答案選 (A)。"
  },
  {
    "id": "q_chi_phonetic_zhui_li_411",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/字音辨析／「惴」慄不安讀音 (ㄓㄨㄟˋ，四聲)／惴惴不安、恐懼發抖",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「惴」慄不安讀第四聲「ㄓㄨㄟˋ」，音同「墜」！】\n- 「惴（ㄓㄨㄟˋ）」：心字旁、山山山揣去掉手旁（音ㄓㄨㄟˋ），指因恐懼憂慮而戰慄發抖（如惴慄不安、惴惴不安）；\n- ⚠️ **切勿讀半邊誤讀**為「ㄔㄨㄢˇ（喘）」或「ㄖㄨㄟˋ（瑞）」！",
    "stem": "下列文句「　」中的字，何者讀音完全正確？\n「得知闖下大禍的消息後，他整天『惴』慄不安，生怕會受到嚴厲的責備。」\n\n○ (A) ㄓㄨㄟˋ\n○ (B) ㄔㄨㄢˇ\n○ (C) ㄖㄨㄟˋ\n○ (D) ㄉㄨㄢ",
    "answer": "(A) ㄓㄨㄟˋ",
    "explanation": "「惴」讀音為 ㄓㄨㄟˋ，正確答案選 (A)。",
    "diagramUrl": "",
    "solution": "「惴」讀音為 ㄓㄨㄟˋ，正確答案選 (A)。"
  },
  {
    "id": "q_chi_phonetic_yi_ni_410",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/字音與詞義／「旖旎」讀音 (ㄧˇ ㄋㄧˇ)／聯綿詞／形容風光秀麗柔美",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「旖旎」讀作「ㄧˇ ㄋㄧˇ」，雙雙第三聲！】\n1. **讀音**：「旖」讀作 **ㄧˇ**（音同「倚」）；「旎」讀作 **ㄋㄧˇ**（音同「擬」）；\n2. **詞義**：聯綿詞，形容風景秀美多姿、柔媚動人，如「風光旖旎」；\n3. **防呆陷阱**：絕不能讀成「ㄑㄧˊ（奇）」或「ㄌㄧˇ（禮）」！",
    "stem": "下列關於「旖旎」一詞的讀音與字義說明，何者完全正確？\n\n○ (A) 讀音為「ㄧˇ ㄋㄧˇ」，形容風光秀麗、柔美多姿\n○ (B) 讀音為「ㄑㄧˊ ㄋㄧˇ」，形容奇異古怪的景致\n○ (C) 讀音為「ㄧˇ ㄌㄧˇ」，形容道路曲折泥濘難行\n○ (D) 讀音為「ㄧ ㄋㄧ」，形容繁華喧鬧的商業市街",
    "answer": "(A) 讀音為「ㄧˇ ㄋㄧˇ」，形容風光秀麗、柔美多姿",
    "explanation": "正確讀音為 ㄧˇ ㄋㄧˇ，形容風光秀麗柔美，正確答案選 (A)。",
    "diagramUrl": "",
    "solution": "正確讀音為 ㄧˇ ㄋㄧˇ，形容風光秀麗柔美，正確答案選 (A)。"
  },
  {
    "id": "q_chi_phonetic_nong_yin_bi_tian_409",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/字音辨析／濃「蔭」蔽天讀音 (ㄧㄣˋ，四聲)／綠樹成蔭、遮蔭",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【濃「蔭」蔽天讀第四聲「ㄧㄣˋ」，切勿讀成一聲「陰」！】\n- 「蔭」作為名詞（樹陰涼處）或動詞（庇護遮掩）時，教育部標準國語審訂音一律讀**第四聲「ㄧㄣˋ」**！\n- 例詞：濃「蔭」蔽天（ㄧㄣˋ）、綠樹成「蔭」（ㄧㄣˋ）、柳「蔭」（ㄧㄣˋ）、庇「蔭」（ㄧㄣˋ）。",
    "stem": "下列文句「　」中的字，何者讀音完全正確？\n「烈日當空的盛夏，這座幽靜的古道綠樹成『蔭』，濃『蔭』蔽天，走在其中令人頓覺暑氣全消。」\n\n○ (A) ㄧㄣˋ\n○ (B) ㄧㄣ\n○ (C) ㄢˋ\n○ (D) ㄧㄣˇ",
    "answer": "(A) ㄧㄣˋ",
    "explanation": "濃「蔭」蔽天讀音為 ㄧㄣˋ，正確答案選 (A)。",
    "diagramUrl": "",
    "solution": "濃「蔭」蔽天讀音為 ㄧㄣˋ，正確答案選 (A)。"
  },
  {
    "id": "q_chi_orthography_fu_shi_jing_shang_408",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "計算粗心",
    "concept": "國文/字形辨析／《與宋元思書》負勢「競」上 (爭相爭先) vs 竟 vs 境 vs 勁",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【負勢「競」上是「爭奪競相」之競！兩個人並立相爭！】\n1. **正字為「競」**：負勢「競」上（爭相向上發展）；\n2. **同音混淆字**：\n   - 競爭爭相：競賽、負勢「競」上；\n   - 究竟到底：有志者事「竟」成、未「竟」之功；\n   - 疆域處所：漸入佳「境」、環「境」；\n   - 力量剛健：強「勁」、疾風知「勁」草。",
    "stem": "吳均《與宋元思書》描繪山巒爭高聳峙之奇觀：「負勢『ㄐㄧㄥˋ』上，互相軒邈，爭高直指，千百成峰。」句中「ㄐㄧㄥˋ」字應寫為下列何者？\n\n○ (A) 競\n○ (B) 竟\n○ (C) 境\n○ (D) 勁",
    "answer": "(A) 競",
    "explanation": "競：立部，本義為相爭、追逐，如「競爭」、「負勢競上」，正確！ 故選 (A)。",
    "diagramUrl": "",
    "solution": "競：立部，本義為相爭、追逐，如「競爭」、「負勢競上」，正確！ 故選 (A)。"
  },
  {
    "id": "q_chi_orthography_heng_ke_407",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "計算粗心",
    "concept": "國文/字形辨析／《與宋元思書》橫「柯」上蔽 (木部樹枝) vs 嚴「苛」vs 坎「坷」vs 百「舸」",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【橫「柯」上蔽是木字旁！樹枝交錯蔽天！】\n1. **正字為「柯」**：橫「柯」上蔽（木字旁，指樹枝、枝幹）；\n2. **形近字大對比**：\n   - 木字旁：草木橫「柯」（樹枝）；\n   - 草字頭：嚴刑「苛」罰、「苛」刻；\n   - 土字旁：坎「坷」不平；\n   - 舟字旁：百「舸」爭流（ㄍㄜˇ，大船）。",
    "stem": "吳均《與宋元思書》描寫富春江山巒樹木交錯成蔭：「橫『ㄎㄜ』上蔽，在晝猶昏；疏條交映，有時見日。」句中「ㄎㄜ」字應寫為下列何者？\n\n○ (A) 柯\n○ (B) 苛\n○ (C) 舸\n○ (D) 坷",
    "answer": "(A) 柯",
    "explanation": "柯：木部，指樹枝、枝莖，如「橫柯上蔽」、「交柯成蔭」，正確！ 故選 (A)。",
    "diagramUrl": "",
    "solution": "柯：木部，指樹枝、枝莖，如「橫柯上蔽」、「交柯成蔭」，正確！ 故選 (A)。"
  },
  {
    "id": "q_chi_phonetic_xiang_xu_406",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/字音與文化常識／「庠」序讀音 (ㄒㄧㄤˊ)／古代鄉學與學校稱謂",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「庠」序讀作「ㄒㄧㄤˊ」，指古代學校！】\n1. **讀音**：庠（ㄒㄧㄤˊ），陽平聲，音同「詳」；\n2. **典故由來**：孟子曰：「謹庠序之教，申之以孝悌之義。」\n   - 商代稱學為「序」；\n   - 周代稱學為「庠」；\n   - 後世「庠序」合稱泛指地方學校。",
    "stem": "古代典籍記載「謹『庠』序之教，申之以孝悌之義」，下列關於句中「庠」字的讀音與意義，何者完全正確？\n\n○ (A) 讀音為「ㄒㄧㄤˊ」，古代學校的稱呼\n○ (B) 讀音為「ㄧㄤˊ」，指羊群聚集之地\n○ (C) 讀音為「ㄒㄧㄤ」，指鄉村行政區域\n○ (D) 讀音為「ㄒㄧㄤˊ」，指祭祀祖先的宗廟",
    "answer": "(A) 讀音為「ㄒㄧㄤˊ」，古代學校的稱呼",
    "explanation": "「庠」讀音為 ㄒㄧㄤˊ，指古代的學校，正確答案選 (A)。",
    "diagramUrl": "",
    "solution": "「庠」讀音為 ㄒㄧㄤˊ，指古代的學校，正確答案選 (A)。"
  },
  {
    "id": "q_chi_phonetic_shi_jian_405",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/字音辨析／詩「箋」讀音 (ㄐㄧㄢ)／箋紙、書箋、信箋",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【詩「箋」讀作「ㄐㄧㄢ」，音同「尖」！】\n- 「箋」字竹字頭、戔聲（ㄐㄧㄢ），指特製供題詩、寫信的小張紙片（信箋、詩箋、便箋）；\n- **嚴防讀半邊讀錯**：不可誤讀為「ㄑㄧㄢ（千）」或「ㄓㄢ（沾）」！",
    "stem": "下列「　」中的字，何者讀音完全正確？\n「他在精緻素雅的詩『箋』上，親手題下一首寄託相思的五言絕句。」\n\n○ (A) ㄐㄧㄢ\n○ (B) ㄑㄧㄢ\n○ (C) ㄓㄢ\n○ (D) ㄐㄧㄢˇ",
    "answer": "(A) ㄐㄧㄢ",
    "explanation": "詩「箋」讀音為 ㄐㄧㄢ，正確答案選 (A)。",
    "diagramUrl": "",
    "solution": "詩「箋」讀音為 ㄐㄧㄢ，正確答案選 (A)。"
  },
  {
    "id": "q_chi_orthography_ci_zao_404",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "計算粗心",
    "concept": "國文/字形辨析／詞「藻」vs 洗「澡」vs 心浮氣「躁」vs 吉光片「羽」",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【詞「藻」草字頭！別寫成洗澡的「澡」或心浮氣躁的「躁」！】\n1. **正字為「藻」**：詞藻、辭藻（草字頭，指文辭華麗像水中水草般繁茂斑斕）；\n2. **形近字大區分**：\n   - 水字旁：洗「澡」、沐「浴」；\n   - 足字旁：心浮氣「躁」、急「躁」；\n   - 虫字旁：繅「繰」絲；\n   - 火字旁：乾「燥」。",
    "stem": "下列文句「　」中注音的字，何者書寫完全正確？\n「他的文筆極佳，詞『ㄗㄠˇ』華麗，字裡行間流露出真摯動人的情感。」\n\n○ (A) 藻\n○ (B) 澡\n○ (C) 繰\n○ (D) 躁",
    "answer": "(A) 藻",
    "explanation": "藻：草部，指水草，引申指文彩、華美之詞，如「詞藻」、「辭藻華美」，正確！ 故選 (A)。",
    "diagramUrl": "",
    "solution": "藻：草部，指水草，引申指文彩、華美之詞，如「詞藻」、「辭藻華美」，正確！ 故選 (A)。"
  },
  {
    "id": "q_chi_color_words_piao_mo_su_403",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/修辭與詞義／文言文色彩字真偽辨析／縹 (淺青色)、墨 (黑色)、青 (青色/黑色) vs 灰心 (意志消沉)、素琴 (樸實不雕飾)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【文言文「真假顏色字」秒殺辨析清單！】\n1. **真正的顏色字**：\n   - **「縹」碧**：縹（ㄆㄧㄠˇ），指**淺青色、淡綠色**（真顏色！）；\n   - **玄「青」**：青指**青色、深黑色**（青出於藍、青絲皆為真顏色！）；\n   - **近「墨」者黑**：墨為黑墨，引申為**黑色**（真顏色！）。\n2. **常見假顏色字陷阱（非指顏色）**：\n   - **「灰」心**：形容**意志消沉、喪氣沮喪**，並非顏色！\n   - **「素」琴**：出自《陋室銘》「可以調素琴」，素在此指**「樸實、不加雕飾」**的琴，絕非白色的琴！\n3. **結論**：表示顏色的僅有 **(甲) 縹、(丙) 青、(丁) 墨**，秒選 (C)！",
    "stem": "(甲)「縹」碧　(乙)「灰」心　(丙) 玄「青」　(丁) 近「墨」者黑　(戊)「素」琴。以上「　」中的字，哪些是用來表示顏色？\n\n○ (A) 甲乙丙\n○ (B) 丙丁戊\n○ (C) 甲丙丁\n○ (D) 乙丙丁",
    "answer": "(C) 甲丙丁",
    "explanation": "- 因此正確組合為 甲丙丁，正確答案選 (C)。",
    "diagramUrl": "",
    "solution": "- 因此正確組合為 甲丙丁，正確答案選 (C)。"
  },
  {
    "id": "q_chi_yu_song_yuan_si_shu_char_meaning_402",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文/文言文閱讀／吳均《與宋元思書》一字多義辨析／俱 (全、都)、息 (停止 vs 利錢)、絕 (極 vs 獨一無二)、負 (依恃 vs 失敗)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【《與宋元思書》核心一字多義高頻考點大對比！】\n1. **「俱」**：風煙「俱」淨／一應「俱」全 $\\implies$ 皆作**「全、都、皆」**解（副詞），意思相同（正選 (B)）！\n2. **「息」**：\n   - 望峰「息」心 $\\implies$ 使之平息、**停止**（動詞）；\n   - 銀行利「息」 $\\implies$ 本金所生之子錢、**利錢**（名詞）。\n3. **「絕」**：\n   - 「絕」妙好辭 $\\implies$ **極、甚、非常**（副詞）；\n   - 天下獨「絕」 $\\implies$ **獨一無二、絕無僅有**的（形容詞）。\n4. **「負」**：\n   - 「負」勢競上 $\\implies$ **依恃、憑藉**山勢（動詞）；\n   - 一決勝「負」 $\\implies$ **失敗、輸**（名詞，與「勝」相對）。",
    "stem": "下列「　」中的字，何組意思相同？\n\n○ (A) 銀行利「息」／望峰「息」心\n○ (B) 風煙「俱」淨／一應「俱」全\n○ (C) 「絕」妙好辭／天下獨「絕」\n○ (D) 「負」勢競上／一決勝「負」",
    "answer": "(B) 風煙「俱」淨／一應「俱」全",
    "explanation": "- 兩者之「俱」皆為副詞，解釋為「全、都、皆」，意思完全相同，故選 (B)。",
    "diagramUrl": "",
    "solution": "- 兩者之「俱」皆為副詞，解釋為「全、都、皆」，意思完全相同，故選 (B)。"
  },
  {
    "id": "q_soc_hist_russia_byzantine_caesaropapism_401",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歷史/世界史／拜占庭帝國的文化外傳／東歐與俄羅斯文明淵源／希臘正教與政教合一（沙皇兼任宗教領袖）",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【俄羅斯「雙頭鷹與第三羅馬」的源頭 —— 拜占庭帝國！】\n1. **拜占庭帝國兩大文化遺產深深塑造俄羅斯**：\n   - **宗教**：傳入**希臘正教**（東正教），使用西里爾字母；\n   - **政治體制**：實行**政教合一（皇帝兼任教會最高領袖）**！\n2. **沙皇政教體制的由來**：\n   - 西歐中古時期「教宗與國王抗衡（政教分離二元體制）」；\n   - 拜占庭則是「皇帝位階高於教會主教（政教合一）」；\n   - 俄國沙皇繼承拜占庭遺風，既是政治最高沙皇，也是東正教守護者，完全受到**拜占庭帝國**的體制影響！",
    "stem": "俄羅斯崛起於東歐，接受希臘正教，十六、十七世紀時，俄國沙皇不但為政治上的最高領袖，也是宗教上的最高領導者。請問：當時俄羅斯地區的政教關係可能受到哪一個國家的影響？\n\n○ (A) 鄂圖曼帝國\n○ (B) 拜占庭帝國\n○ (C) 西羅馬帝國\n○ (D) 亞歷山大帝國",
    "answer": "(B) 拜占庭帝國",
    "explanation": "- 因此，當時俄羅斯的政教關係是深受拜占庭帝國的影響，正確答案選 (B)。",
    "diagramUrl": "",
    "solution": "- 因此，當時俄羅斯的政教關係是深受拜占庭帝國的影響，正確答案選 (B)。"
  },
  {
    "id": "q_soc_hist_constantinople_empires_rule_400",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歷史/世界史／跨歐亞非帝國疆域比較／君士坦丁堡戰略地理位置／拜占庭帝國 vs 鄂圖曼帝國 vs 亞歷山大帝國 vs 阿拉伯帝國疆域",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【君士坦丁堡「千古要塞」—— 誰曾佔領過？誰從未攻克？】\n1. **阿拉伯帝國兩度圍攻慘敗（未曾攻佔）**：\n   - 西元 7～8 世紀，強盛的阿拉伯帝國曾兩次大舉圍攻君士坦丁堡；\n   - 但拜占庭帝國依靠堅不可摧的三重城牆與祕密武器「希臘火」將阿拉伯艦隊燒毀，**阿拉伯帝國勢力從未擴及或佔領過君士坦丁堡**！（(B) 必選！）\n2. **其他三個帝國皆曾統治此地**：\n   - **亞歷山大帝國**：西元前 4 世紀東征，囊括希臘與博斯普魯斯海峽一帶；\n   - **拜占庭帝國**：以君士坦丁堡為帝國首都超過千年（330～1453 年）；\n   - **鄂圖曼帝國**：1453 年攻陷該城，改名伊斯坦堡作為帝國首都。",
    "stem": "【題組】承上題，某建築（聖索菲亞大教堂）位於君士坦丁堡，此地因位處交通與戰略要地，歷經多位統治者。請問：下列哪一個政權的勢力範圍未曾擴及此地？\n\n○ (A) 拜占庭帝國\n○ (B) 阿拉伯帝國\n○ (C) 鄂圖曼帝國\n○ (D) 亞歷山大帝國",
    "answer": "(B) 阿拉伯帝國",
    "explanation": "未曾擴及統治君士坦丁堡的政權為阿拉伯帝國，正確答案選 (B)。",
    "diagramUrl": "",
    "solution": "未曾擴及統治君士坦丁堡的政權為阿拉伯帝國，正確答案選 (B)。"
  },
  {
    "id": "q_soc_hist_hagia_sophia_constantinople_399",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歷史/世界史／拜占庭帝國建築傑作（聖索菲亞大教堂）／歷史變遷（基督教教堂改建為伊斯蘭清真寺）／地中海地圖定位（君士坦丁堡：丙）",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【聖索菲亞大教堂「身世演變與地圖定位」考點剖析！】\n1. **三大關鍵線索破題**：\n   - **線索一（興建於 532 年）**：拜占庭皇帝查士丁尼一世下令建造；\n   - **線索二（基督教堂改為清真寺）**：1453 年鄂圖曼土耳其攻陷君士坦丁堡，用石膏遮掩基督教馬賽克壁畫，增建壁龕與「四座清真寺尖塔（叫拜樓）」；\n   - **線索三（地圖位置）**：位於歐亞交界、扼博斯普魯斯海峽的**君士坦丁堡（今伊斯坦堡），即地圖中的「丙」點**！\n2. **地圖各點快速複習**：\n   - **甲**：義大利半島的**羅馬**；\n   - **乙**：巴爾幹半島南端的**雅典**；\n   - **丙**：扼黑海與地中海咽喉的**君士坦丁堡（伊斯坦堡）**；\n   - **丁**：阿拉伯半島紅海沿岸的伊斯蘭聖城**麥加**。",
    "stem": "【題組】閱讀下列選文，回答第 (1)～(2) 題：\n\n某建築興建於西元 532 年，落成之日，當政者喜悅的表示：「感謝上帝耶和華給了我們這麼棒的禱告之地」。然而這座建築位處於形勢複雜的區域，先後經歷不同的統治而被反覆修繕改造，不僅壁畫被刷上石膏遮掩，更增建壁龕與四座尖塔，直到今日，已成為當地宗教中心與熱門的旅遊景點。\n\n(1) 這座建築最有可能位於附圖中何處？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(C) 丙",
    "explanation": "聖索菲亞大教堂位於君士坦丁堡，對應地圖標示為 丙，正確答案選 (C)。",
    "diagramUrl": "assets/questions/q_soc_hist_mediterranean_map_399.png",
    "solution": "聖索菲亞大教堂位於君士坦丁堡，對應地圖標示為 丙，正確答案選 (C)。"
  },
  {
    "id": "q_sci_phys_spring_block_kinetic_at_500j_398",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "力學/功與能／力學能守恆定律／動能與彈力位能任意時刻總和恆定 (K + Us = 900J)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【任意時刻動能＋彈力位能＝900 焦耳！直接相減秒殺！】\n1. **力學能守恆的核心公式**：\n   - 無摩擦水平碰撞中：$\\text{動能 } K + \\text{彈力位能 } U_s = 900\\text{ 焦耳}$。\n2. **秒殺計算**：\n   - 已知此時彈力位能 $U_s = 500\\text{ J}$；\n   - 動能 $K = 900 - 500 = 400\\text{ 焦耳}$！無需去求彈簧伸長量或彈性常數 $k$！",
    "stem": "【題組】質量為 2 公斤的物體，在光滑無摩擦的水平面上，以 900 焦耳的動能撞向一彈簧，如附圖所示，撞擊後彈簧再將物體彈回，若過程中無熱能散失，試回答下列問題：\n\n(3) 當物體被彈簧彈回而彈簧的彈力位能大小為 500 焦耳時，請問此時物體的動能是多少焦耳？\n\n○ (A) 0\n○ (B) 400\n○ (C) 500\n○ (D) 900",
    "answer": "(B) 400",
    "explanation": "因此，此時物體的動能為 $400\\text{ 焦耳}$，正確答案選 (B)。",
    "diagramUrl": "assets/questions/q_sci_phys_spring_block_collision_396.png",
    "solution": "因此，此時物體的動能為 $400\\text{ 焦耳}$，正確答案選 (B)。"
  },
  {
    "id": "q_sci_phys_spring_block_max_potential_energy_397",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／力學能守恆定律／動能完全轉化為彈力位能 (初動能 900J = 最大彈力位能 900J)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【光滑水平面無能量耗散 —— 動能減少多少，彈力位能就增加多少！】\n1. **力學能守恆鐵則**：\n   - 全程只有彈力做功，無摩擦阻力與熱能散失，滿足：\n     $$\\text{動能 } K + \\text{彈力位能 } U_s = 900\\text{ 焦耳}$$\n2. **動能最小時（K = 0）**：\n   - 彈力位能 $U_s = 900 - 0 = 900\\text{ 焦耳}$！初動能全部 100% 儲存在彈簧中！",
    "stem": "【題組】質量為 2 公斤的物體，在光滑無摩擦的水平面上，以 900 焦耳的動能撞向一彈簧，如附圖所示，撞擊後彈簧再將物體彈回，若過程中無熱能散失，試回答下列問題：\n\n(2) 當物體動能最小時，彈簧的彈力位能為多少焦耳？\n\n○ (A) 0\n○ (B) 30\n○ (C) 450\n○ (D) 900",
    "answer": "(D) 900",
    "explanation": "因此，當物體動能最小時，彈簧的彈力位能為 $900\\text{ 焦耳}$，正確答案選 (D)。",
    "diagramUrl": "assets/questions/q_sci_phys_spring_block_collision_396.png",
    "solution": "因此，當物體動能最小時，彈簧的彈力位能為 $900\\text{ 焦耳}$，正確答案選 (D)。"
  },
  {
    "id": "q_sci_phys_spring_block_collision_min_kinetic_396",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／力學能守恆／彈簧壓縮極限 (壓縮至最短長度時瞬間靜止速率為零動能最小為 0)／動能與彈力位能互換",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【壓縮至最短長度瞬間「速度降為零」！動能最小為 0！】\n1. **物體壓縮彈簧全過程能量轉換**：\n   - 未觸及彈簧時：只有動能 900 焦耳（動能最大）；\n   - 撞擊並壓縮彈簧時：彈簧施力向右阻擋，物體減速，動能逐漸轉為彈力位能；\n   - **壓縮至最短長度（最大形變量）時**：物體無法再前進，速度瞬間降為 0，此時**動能最小（等於 0 焦耳）**！\n2. **秒殺口訣**：彈簧壓最扁、速度變為零、動能最小為 0、彈力位能最大！",
    "stem": "【題組】質量為 2 公斤的物體，在光滑無摩擦的水平面上，以 900 焦耳的動能撞向一彈簧，如附圖所示，撞擊後彈簧再將物體彈回，若過程中無熱能散失，試回答下列問題：\n\n(1) 下列何時物體的動能最小？\n\n○ (A) 物體未觸及彈簧時\n○ (B) 物體剛觸及彈簧時\n○ (C) 物體撞擊彈簧並將彈簧壓縮至最短長度時\n○ (D) 彈簧反彈物體，物體剛離開彈簧時",
    "answer": "(C) 物體撞擊彈簧並將彈簧壓縮至最短長度時",
    "explanation": "- 因此動能最小的時刻為「壓縮至最短長度時」，正確答案選 (C)。",
    "diagramUrl": "assets/questions/q_sci_phys_spring_block_collision_396.png",
    "solution": "- 因此動能最小的時刻為「壓縮至最短長度時」，正確答案選 (C)。"
  },
  {
    "id": "q_sci_phys_bungee_jumping_energy_395",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／高空彈跳全過程受力與能量轉換／彈力位能 (最低點伸長量最大位能最大)／速率先增後減分析 (平衡點合力為零速率最大)／回彈加速度方向",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【高空彈跳全過程精闢拆解 —— 速率何時最大？何時減速？】\n1. **落下全過程三階段受力與速率變化（必考！）**：\n   - **原長自由落體段**：繩未伸長，只受重力，$F_{\\text{合}} = mg$ 向下，人向下加速。\n   - **伸長但彈力小於重力段**：繩開始拉長，$F_s < mg$，$F_{\\text{合}}$ 依然向下，**人繼續加速（速率繼續變快！）**。\n   - **平衡點（$F_s = mg$）**：合力為零，**此時速率達到最大值**！\n   - **彈力大於重力段至最低點**：$F_s > mg$，合力轉為向上，**人開始減速，直到最低點速度為 0**！\n   - 結論：落下過程速率是**「先變快、後變慢」**，絕非「愈來愈快」（(A) 錯誤）！\n2. **最低點的彈力位能**：\n   - 彈力位能 $U_s = \\frac{1}{2}kx^2$；\n   - 第一次到達最低點時，繩索拉伸到極限（伸長量 $x$ 最大），因此**彈力位能達到最大值**（(C) 正確！）。\n3. **回彈開始時的加速度**：\n   - 最低點時向上彈力遠大於重力，$F_{\\text{合}}$ 向上，故**加速度方向向上**，人向上加速運動（(B) 錯誤）。",
    "stem": "如附圖，高空彈跳是利用彈性繩索一端綁在高處平臺上（平臺的高度通常是數十至數百公尺），另一端綁著身體，然後挑戰者從高臺一躍而下。當挑戰者躍下時，藉由彈力及重力作用使人上下來回振盪，經過數次振盪後，挑戰者的上下振盪會停止。下列關於高空彈跳的敘述，何者正確？\n\n○ (A) 在挑戰者自跳下至最低點的過程中，速率愈來愈快\n○ (B) 在挑戰者回彈過程的加速度仍為向下\n○ (C) 挑戰者第一次落下至最低點時，彈力位能最大\n○ (D) 到最後靜止時，彈力位能全部轉為重力位能",
    "answer": "(C) 挑戰者第一次落下至最低點時，彈力位能最大",
    "explanation": "- 落下全過程四部曲拆解： 故選 (C)。",
    "diagramUrl": "assets/questions/q_sci_phys_bungee_jumping_energy_395.png",
    "solution": "- 落下全過程四部曲拆解： 故選 (C)。"
  },
  {
    "id": "q_sci_phys_vertical_throw_energy_force_accel_394",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/運動與能量／鉛直上拋全過程 (速度減慢動能減少、高度增加位能增加)／最高點受力陷阱 (速度為零但合力依然是向下重力 mg ≠ 0)／重力加速度恆定",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【最高點「速度為零」≠「合力為零」！國中會考超高頻地雷！】\n1. **速度為零不等於合力為零**：\n   - 球在最高點瞬間雖然停了下來（$v = 0$），但它依然受地球向下的「重力（$mg$）」吸引！\n   - 所以最高點的**合力 = 重力（不為零）**，**加速度 = $g$ 向下（不為零）**！\n   - 如果合力為零，球就會永遠停在空中不會掉下來了！選項 (B) 是最常誤選的大陷阱！\n2. **上升過程能量此消彼長**：\n   - 愈飛愈高 $\\implies$ 高度 $h$ 增加 $\\implies$ 重力位能**逐漸增加**（(A) 錯誤）；\n   - 愈飛愈慢 $\\implies$ 速率 $v$ 減小 $\\implies$ 動能**逐漸減少**（(C) 正確！）；\n3. **地表重力加速度固定不變**：\n   - 上升過程重力加速度 $g = 9.8\\text{ m/s}^2$ 始終朝下且大小固定，絕不會變大（(D) 錯誤）。",
    "stem": "將球垂直上拋，球在上拋的過程中，下列敘述何者正確？\n\n○ (A) 球在上升過程中，重力位能逐漸減少\n○ (B) 球到達最高點的瞬間，所受合力為零\n○ (C) 球在上升過程中，動能逐漸減少\n○ (D) 球在上升過程中，重力加速度逐漸變大",
    "answer": "(C) 球在上升過程中，動能逐漸減少",
    "explanation": "- 不論球是正在上升、處於最高點或正在落下，其重力加速度皆維持固定常數（$g \\approx 9.8\\text{ m/s}^2$ 向下），並不會隨高度變大，故選項 (D) 錯誤。",
    "diagramUrl": "",
    "solution": "- 不論球是正在上升、處於最高點或正在落下，其重力加速度皆維持固定常數（$g \\approx 9.8\\text{ m/s}^2$ 向下），並不會隨高度變大，故選項 (D) 錯誤。"
  },
  {
    "id": "q_sci_phys_bouncing_ball_energy_conservation_loss_393",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／能量守恆定律 (全宇宙總能量恆定不變)／球體碰撞非彈性耗散 (力學能轉為熱能與聲能)／能源退化／審題陷阱 (何者錯誤)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【反彈高度變矮「只是力學能變少」，「總能量依然絕對守恆」！】\n1. **「力學能不守恆」≠「總能量不守恆」**：\n   - 球彈不回原高度，是因為碰撞時形變摩擦轉化出了「熱能」和「聲響」；\n   - 球的力學能（動能＋位能）確實變少了，但減少的力學能 100% 變成了環境中的熱能與聲能！\n2. **宇宙基本鐵則 —— 能量守恆永遠成立**：\n   - 只要不是核反應（質能互換），所有物理與化學過程的「總能量永遠守恆」！\n   - 選項 (B) 說「能量不守恆」必定是錯誤的，題目問「何者錯誤」，故秒選 (B)！\n3. **能源退化的本質**：\n   - 散失到空氣與地面的熱能和聲音無法輕易被重新回收推動球體跳躍，這就是「轉換成沒有用的能量了」，(A) 敘述完全正確！",
    "stem": "一個球自高處自由落下，與地面碰撞後又彈回，理想情況下應彈至原來之高度，但實際遠比原來高度為小，下列敘述何者錯誤？\n\n○ (A) 有部分能量轉換成沒有用的能量了\n○ (B) 能量不守恆\n○ (C) 能量守恆\n○ (D) 球與地面碰撞時，部分能量變成熱能。",
    "answer": "(B) 能量不守恆",
    "explanation": "- 故選項 (D)「球與地面碰撞時，部分能量變成熱能」敘述正確。",
    "diagramUrl": "",
    "solution": "- 故選項 (D)「球與地面碰撞時，部分能量變成熱能」敘述正確。"
  },
  {
    "id": "q_sci_phys_skier_slope_energy_loss_392",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "力學/功與能／力學能轉換與守恆／靜止狀態動能為零 (P 點與 Q 點動能皆為 0)／斜面摩擦耗散與重力位能差值／審題陷阱 (何者錯誤)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【看到「靜止」和「恰好停止」，動能一律等於 0！】\n1. **「靜止」與「停止」代表速度為 0，動能必為 0**：\n   - 題幹：「從 P 點**靜止**開始滑下」 $\\implies v_P = 0 \\implies K_P = 0$；\n   - 題幹：「滑至 Q 點**恰好停止**」 $\\implies v_Q = 0 \\implies K_Q = 0$；\n   - 兩點動能**完全相等（皆為 0）**！選項 (C) 說「P 點動能小於 Q 點動能」是嚴重錯誤，題目問何者錯誤，故秒選 (C)！\n2. **為什麼肯定有摩擦力？**：\n   - 若無摩擦力，力學能守恆，物體滑到對面山坡的高度必須與 P 點**等高**；\n   - 圖示中 Q 點明顯比 P 點矮，卻已經停下來了，代表減少的重力位能被**摩擦力轉化為熱能散失**了，因此滑雪過程必定受到摩擦力！",
    "stem": "如附圖，一個滑雪者從 P 點靜止開始滑下山坡，在途中不轉彎也不煞車，滑至 Q 點恰好停止，則下列敘述何者錯誤？\n\n○ (A) 對地面而言，P 點的重力位能大於 Q 點的重力位能\n○ (B) 滑雪過程中，該滑雪者受到摩擦力作用\n○ (C) P 點的動能小於 Q 點的動能\n○ (D) 滑雪過程中，遵守能量守恆定律",
    "answer": "(C) P 點的動能小於 Q 點的動能",
    "explanation": "敘述「P 點的動能小於 Q 點的動能」是錯誤的，題目要求選出錯誤者，故選 (C)！",
    "diagramUrl": "assets/questions/q_sci_phys_skier_slope_energy_loss_392.png",
    "solution": "敘述「P 點的動能小於 Q 點的動能」是錯誤的，題目要求選出錯誤者，故選 (C)！"
  },
  {
    "id": "q_sci_phys_rough_slope_mechanical_energy_loss_391",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "力學/功與能／粗糙斜面能量轉換／摩擦力作負功轉化為熱能／力學能不守恆 (動能必小於減少的位能)／審題陷阱 (何者錯誤)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【看到「粗糙斜面」立刻提高警覺！摩擦力必分走熱能！】\n1. **看清關鍵字「粗糙」與「何者錯誤」**：\n   - 粗糙代表必定有摩擦力存在！摩擦力與運動方向相反，必定作負功。\n   - 題目問的是「**何者錯誤**」，千萬別選到了敘述正確的選項！\n2. **動能無法完全接收位能**：\n   - 光滑斜面：減少的位能 $19.6\\text{ J} = $ 增加的動能；\n   - **粗糙斜面**：減少的位能 = 增加的動能 + 摩擦產生的熱能；\n   - 因此底部的動能**必定小於 $19.6\\text{ 焦耳}$**，不可能剛好等於 $19.6\\text{ 焦耳}$！選項 (C) 敘述錯誤，故為正解！",
    "stem": "在粗糙斜面上質量為 1 公斤的小木塊，由靜止開始下滑，木塊原先距底端之垂直高度為 2 公尺。則下列敘述，何者錯誤？（$g = 9.8\\text{ m/s}^2$）\n\n○ (A) 滑至底部時，木塊的位能減少了 19.6 焦耳\n○ (B) 摩擦力作負功\n○ (C) 到達底部時，木塊的動能為 19.6 焦耳\n○ (D) 動能與位能的和在此過程中並不守恆",
    "answer": "(C) 到達底部時，木塊的動能為 19.6 焦耳",
    "explanation": "敘述「木塊的動能為 19.6 焦耳」是錯誤的，題目要求選出錯誤項，故選 (C)。",
    "diagramUrl": "",
    "solution": "敘述「木塊的動能為 19.6 焦耳」是錯誤的，題目要求選出錯誤項，故選 (C)。"
  },
  {
    "id": "q_sci_phys_vertical_throw_kinetic_potential_height_390",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "力學/功與能／力學能守恆定律／鉛直上拋最高點 (初動能全數轉為重力位能：K = mgh)／小數巧算技巧",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【鉛直上拋最高點「動能全部變位能」！善用小數巧算免除繁雜長除法！】\n1. **力學能守恆核心模型**：\n   - 不計空氣阻力時，拋出時的初動能 $K = 96.04\\text{ J}$，在抵達最高點速度為 0 時，會**100% 轉化為重力位能**！\n   - 列式：$K = mgh \\implies 96.04 = 2 \\times 9.8 \\times h$。\n2. **看到 19.6 與 96.04 的「速算秒殺技」**：\n   - 分母為 $2 \\times 9.8 = 19.6$；\n   - 估算：$19.6 \\times 5 = 98$；\n   - $98 - 96.04 = 1.96$（正好是 19.6 的 0.1 倍）；\n   - 因此 $h = 5 - 0.1 = 4.9\\text{ 公尺}$，無需辛苦列直式長除法！",
    "stem": "將質量為 2 公斤的物體，垂直向上拋時其動能為 96.04 焦耳，若不計空氣阻力，則由拋點算起，物體可上升多少公尺？\n\n○ (A) 29.4\n○ (B) 19.6\n○ (C) 9.8\n○ (D) 4.9",
    "answer": "(D) 4.9",
    "explanation": "故物體由拋點算起可上升 $4.9\\text{ 公尺}$，正確答案選 (D)。",
    "diagramUrl": "",
    "solution": "故物體由拋點算起可上升 $4.9\\text{ 公尺}$，正確答案選 (D)。"
  },
  {
    "id": "q_sci_phys_energy_conservation_friction_dissipation_389",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／能量守恆定律 (總能量永不變)／力學能不守恆 vs 總能量守恆／摩擦耗散與能源退化 (可利用的能量愈來愈少)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「力學能不守恆」≠「總能量不守恆」！能源退化核心必考！】\n1. **「總能量」永遠守恆（宇宙最高鐵則！）**：\n   - 無論是否有摩擦力或空氣阻力，轉換前與轉換後的**「能量總和永遠不變」**！\n   - 選項 (A) 說守恆不成立、(B) 說總和變少、(D) 說總能增加，通通大錯特錯！\n2. **摩擦力做負功：力學能轉為熱能**：\n   - 摩擦力存在時，動能與位能組成的「力學能」減少了，但減少的力學能 100% 轉換成了「熱能」散逸到空氣與物體中。\n3. **為什麼還要節約能源？（能源退化）**：\n   - 既然總能量守恆，為什麼人類還會缺電、缺能源？\n   - 因為散失到環境中的熱能高度分散、混亂，無法被輕易重新回收做功，也就是**「可利用的有效能量愈來愈少」**！",
    "stem": "如果有摩擦力存在時，在能量的轉移過程中，下列何項敘述正確？\n\n○ (A) 能量守恆不再成立\n○ (B) 轉換後能量總和變少\n○ (C) 可利用的能愈來愈少\n○ (D) 熱能愈來愈多，總能也增加",
    "answer": "(C) 可利用的能愈來愈少",
    "explanation": "- 因此，在能量轉移與轉換的過程中，「可利用的有效能量必定愈來愈少」（這也是全球倡導節約能源的核心科學原因），正確答案選 (C)。",
    "diagramUrl": "",
    "solution": "- 因此，在能量轉移與轉換的過程中，「可利用的有效能量必定愈來愈少」（這也是全球倡導節約能源的核心科學原因），正確答案選 (C)。"
  },
  {
    "id": "q_sci_phys_mango_potential_energy_unit_388",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "力學/功與能／重力位能公式 (U = mgh)／SI 制單位換算 (公克換算公斤：g → kg)／焦耳單位陷阱",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【算焦耳（J）「質量必須先換成公斤（kg）」！別掉入 1000 倍單位陷阱！】\n1. **焦耳（Joule）的 SI 標準制單位定義**：\n   - $1\\text{ J} = 1\\text{ N} \\cdot \\text{m} = 1\\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$。\n   - 質量必須用**公斤（kg）**，高度必須用**公尺（m）**，重力加速度用 $\\text{m/s}^2$！\n2. **公克換公斤（除以 1000）**：\n   - $600\\text{ 公克} = \\frac{600}{1000} = 0.6\\text{ 公斤}$！\n   - 如果直接用 600 代入，會算出 $600 \\times 10 \\times 2 = 12000$，正好掉入誘答選項 (C) 的陷阱！\n3. **標準代入計算**：\n   - $U = mgh = 0.6 \\times 10 \\times 2 = 12\\text{ 焦耳}$，秒殺搞定！",
    "stem": "質量 600 公克的芒果，生長在距離地面 2 公尺的樹上，若重力加速度為 $10\\text{ 公尺／秒}^2$，則芒果對地面具有多少焦耳的重力位能？\n\n○ (A) 12\n○ (B) 24\n○ (C) 12000\n○ (D) 24000",
    "answer": "(A) 12",
    "explanation": "因此，芒果對地面具有 $12\\text{ 焦耳}$ 的重力位能，正確答案選 (A)。",
    "diagramUrl": "",
    "solution": "因此，芒果對地面具有 $12\\text{ 焦耳}$ 的重力位能，正確答案選 (A)。"
  },
  {
    "id": "q_sci_phys_gravitational_potential_energy_slope_387",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／重力位能公式 (U = mgh = 重量 × 垂直高度)／斜面與路徑無關特性／誘答條件干擾辨析",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【重力位能「只看垂直高度」！別被施力 F 與斜面誘答騙了！】\n1. **看清單位！題目給的是「重量 100 牛頓」，而非質量 100 公斤**：\n   - 重力位能公式：$U = mgh = (mg) \\times h$。\n   - 其中的 $mg$ 就是「重量（物體受到的重力，單位為牛頓 N）」！\n   - 既然題目已給重量為 100 N，直接代入 $U = 100 \\times 1 = 100\\text{ J}$，千萬不要再多乘一次重力加速度 $g=9.8$！\n2. **重力位能增加量只看「起終點垂直高度差」**：\n   - 重力是保守力，物體克服重力所儲存的位能，與移動路徑（斜面長度、斜率、施力 F 的大小）完全無關！\n   - 題目中的「施力 F 牛頓」純粹是常見的干擾選項，不需要去算 F 或斜面長度！",
    "stem": "在一無摩擦的斜面上，施力 $F$ 牛頓，將重量 100 牛頓的物體拉上斜面頂端，若斜面頂端距地面 1 公尺高，則該物體重力位能增加多少焦耳？\n\n○ (A) 1\n○ (B) 100\n○ (C) $F$\n○ (D) $100 \\times F$",
    "answer": "(B) 100",
    "explanation": "3. 因此無論斜面長度多少，重力位能增加量皆固定為 $100\\text{ 焦耳}$，正確答案選 (B)。",
    "diagramUrl": "",
    "solution": "3. 因此無論斜面長度多少，重力位能增加量皆固定為 $100\\text{ 焦耳}$，正確答案選 (B)。"
  },
  {
    "id": "q_math_geo_circle_inscribed_square_area_386",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與正方形／外切正方形與內接正方形／直徑與對角線長度關係／菱形（正方形）對角線乘積面積公式",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：內接正方形對角線等於圓直徑，直接用「對角線相乘除以 2」秒殺，無需開根號算邊長。",
    "stem": "如附圖，正方形 $ABCD$ 為圓 $O$ 的外切四邊形，且邊長為 6，圓內有一正方形 $EFGH$，若 $E$、$F$、$G$、$H$ 四點皆在圓上，則正方形 $EFGH$ 的面積為何？\n\n○ (A) $\\frac{27}{4}$\n○ (B) $\\frac{15}{2}$\n○ (C) $12$\n○ (D) $18$",
    "answer": "(D) 18",
    "explanation": "1. 外切正方形邊長為 6 ⟹ 圓直徑 d ＝ 6。 故選 (D)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_square_area_386.png",
    "solution": "1. 外切正方形邊長為 6 ⟹ 圓直徑 d ＝ 6。 故選 (D)。"
  },
  {
    "id": "q_math_geo_rect_sector_diff_area_385",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與多邊形／扇形與長方形面積差值計算 (同加同減消去法：(甲+丙) - (乙+丙) = 甲 - 乙)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：不規則面積相差問題用「同加同減消去法」，轉化為「扇形面積 － 長方形面積」一秒搞定。",
    "stem": "如附圖，在長方形 $ABCD$ 中，$\\overline{AB} = 12$，$\\overline{AD} = 6$，若以 $A$ 點為圓心，$\\overline{AB}$ 長為半徑畫 $\\frac{1}{4}$ 圓，交 $\\overline{AD}$ 延長線於 $E$ 點，且 $\\overline{BE}$ 交 $\\overline{CD}$ 於 $F$ 點，則塗色區域甲和區域乙的面積相差多少？\n\n○ (A) $36\\pi - 48$\n○ (B) $36\\pi - 72$\n○ (C) $24\\pi - 18$\n○ (D) $20\\pi - 18$",
    "answer": "(B) 36π - 72",
    "explanation": "E 面積 ＝ 甲 ＋ 丙 ＝ (1/4) × π × 12² ＝ 36π。 故選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_rect_sector_diff_area_385.png",
    "solution": "E 面積 ＝ 甲 ＋ 丙 ＝ (1/4) × π × 12² ＝ 36π。 故選 (B)。"
  },
  {
    "id": "q_math_geo_point_circle_position_distance_384",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/點與圓的位置關係／坐標平面兩點距離公式 (d = √[(x₂-x₁)²+(y₂-y₁)²]) 與半徑比較 (d > r 圓外、d = r 圓上、d < r 圓內)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 易錯筆記：點與圓位置看「距離 d 與半徑 r」：d ＞ r 在圓外、d ＝ r 在圓上、d ＜ r 在圓內。",
    "stem": "在坐標平面上，圓 O 的半徑為 5，圓心 O 的坐標為 (-1, -4)，則點 P(3, -1) 與圓的位置關係為何？\n\n○ (A) 在圓外\n○ (B) 在圓上\n○ (C) 在圓內\n○ (D) 無法確定",
    "answer": "(B) 在圓上",
    "diagramUrl": "",
    "solution": "1. 【正解 (B) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-08",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (B) 深度破題分析】："
  },
  {
    "id": "q_math_geo_three_circles_overlap_area_383",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "幾何/扇形與弓形面積／三等圓互過圓心重疊面積（勒洛三角形）、邊長為半徑的正三角形、扇形與弓形面積分割法 (正三角形 + 3 個弓形 或 3 個扇形 - 2 個正三角形)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【三圓互過圓心重疊「勒洛三角形」兩大秒殺法！】\n1. **看透圖形本質——「正三角形 ＋ 3 個弓形」**：\n   - 三圓半徑皆為 5 且互過圓心，連接三圓心得到的 **△ABC 為邊長 5 的正三角形**（每個內角皆為 60°）！\n   - 正三角形面積公式：**(√3 / 4) × 邊長²** = (√3 / 4) × 25 = **25√3 / 4**。\n2. **解法一：【割補組合法（正三角形 ＋ 3 個弓形）】**：\n   - 60° 扇形面積 = π × 5² × (60 / 360) = **25π / 6**。\n   - 1 個弓形面積 = 扇形 - 正三角形 = **25π / 6 - 25√3 / 4**。\n   - 所求 = 正三角形 ＋ 3 × 弓形面積\n          = 25√3 / 4 + 3 × (25π / 6 - 25√3 / 4)\n          = 25√3 / 4 + 25π / 2 - 75√3 / 4\n          = **25π / 2 - 25√3 / 2**！\n3. **解法二：【容斥速算法（3 扇形 - 2 正三角形）】**：\n   - 把三個 60° 扇形相加，中間的正三角形被重複算了 3 次（多算了 2 次），而周圍三個弓形剛好各算 1 次！\n   - **所求面積 = 3 個扇形面積 - 2 個正三角形面積**\n                = 3 × (25π / 6) - 2 × (25√3 / 4)\n                = **25π / 2 - 25√3 / 2**（兩行收工秒殺！）",
    "stem": "如附圖，圓 A、圓 B、圓 C 三個半徑皆為 5 的等圓重疊，則重疊區域的面積為何？\n\n○ (A) 15π/2 + 4√3\n○ (B) 10π + 15√3/4\n○ (C) 25π/2 - 25√3/2\n○ (D) 15/2 - 15√3/2",
    "answer": "(C) 25π/2 - 25√3/2",
    "diagramUrl": "assets/questions/q_math_geo_three_circles_overlap_area_383.png",
    "solution": "的半徑皆為 R = 5，且三圓兩兩互過彼此的圓心； 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "的半徑皆為 R = 5，且三圓兩兩互過彼此的圓心； 故選 (C)。"
  },
  {
    "id": "q_math_geo_circle_chords_segments_count_382",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓的基本元素定義與計數／弦的個數組合公式 (C(n,2) = n(n-1)/2) 與每一條弦對應兩個弓形 (優弧弓形與劣弧弓形，b = 2a)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【圓的「弦」與「弓形」數量秒殺公式與觀念盲點！】\n1. **「弦」的數量計算（任兩點連一線段）**：\n   - 圓上有 n 個相異點，任選兩點即可連成一條弦！\n   - 公式：**弦的數量 a = n × (n - 1) ÷ 2**。\n   - 10 個點時：a = 10 × 9 ÷ 2 = **45 條弦**。\n2. **「弓形」的定義與數量（超級高頻陷阱！）**：\n   - **定義**：由「一條弦」與這條弦所對應的「圓弧」所圍成的封閉圖形，稱為弓形。\n   - **核心盲點**：每一條弦將圓周分割為兩條弧（一條劣弧、一條優弧，若為直徑則為兩個半圓）。\n   - 因此，**「每一條弦必定對應 2 個弓形」**！\n   - 公式：**弓形數量 b = 2 × a**！\n   - 45 條弦對應：b = 2 × 45 = **90 個弓形**。\n3. **所求合併**：\n   - a + b = 45 + 90 = **135**（切莫忘記弓形有大小兩個，誤以為一弦一弓形只算 45 個）！",
    "stem": "若圓上 10 個點可形成 a 條弦、b 個弓形，則 a + b = ？\n\n○ (A) 135\n○ (B) 125\n○ (C) 90\n○ (D) 85",
    "answer": "(A) 135",
    "diagramUrl": "",
    "solution": "1. 【第一步：計算圓上 10 個點可連成的「弦數 a」】： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【第一步：計算圓上 10 個點可連成的「弦數 a」】： 故選 (A)。"
  },
  {
    "id": "q_math_geo_sector_inscribed_square_area_381",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/扇形與正方形性質／45度扇形內接正方形、等腰直角三角形邊長代換 (OD = CD = x)、連接圓心與弧上點半徑 (OF = 5)、畢氏定理求正方形面積 (x² = 5)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【扇形內接正方形——「45度角與連半徑」三大破題神經！】\n1. **第一神經：抓出 45° 等腰直角三角形！**\n   - 四邊形 CDEF 是正方形，設邊長為 x，則 **線段 CD 垂直 線段 OB** 且 **線段 CD = x**。\n   - 因為 C 點在半徑 線段 OA 上，所以 **∠DOC = ∠AOB = 45°**！\n   - 在直角 △ODC 中，∠DOC = 45°、∠ODC = 90°，必為**等腰直角三角形**，因此 **線段 OD = 線段 CD = x**！\n2. **第二神經：累加底邊長度 線段 OE！**\n   - 正方形邊長 線段 DE = x，所以 **線段 OE = 線段 OD + 線段 DE = x + x = 2x**！\n3. **第三神經：圓上點必連圓心作半徑！**\n   - 看到 **F 點在弧 AB 上**，立即連接輔助線 **線段 OF**，此即為扇形半徑：**線段 OF = 線段 OA = 5**！\n   - 在直角 △OEF 中（線段 FE 垂直 線段 OB），由畢氏定理收網：\n     線段 OF² = 線段 OE² + 線段 FE² $\\implies$ 5² = (2x)² + x² $\\implies$ 25 = 5x² $\\implies$ **x² = 5**！\n4. **大快人心不用開根號**：\n   - 正方形 CDEF 的面積本來就是邊長的平方 **x²**，直接秒答 **5**，完全不需要算出 x = √5！",
    "stem": "如附圖，在扇形 AOB 中，∠AOB = 45°，線段 OA = 5，C 點在線段 OA 上，D、E 兩點在線段 OB 上，F 點在弧 AB 上，則正方形 CDEF 的面積為何？",
    "answer": "5",
    "diagramUrl": "assets/questions/q_math_geo_sector_inscribed_square_area_381.png",
    "solution": "1. 【第一步：設正方形邊長，分析等腰直角 △ODC】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【第一步：設正方形邊長，分析等腰直角 △ODC】："
  },
  {
    "id": "q_math_geo_square_circle_tangent_radius_ratio_380",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與弦心距、切線性質／正方形內切弦圓、弦心距垂直平分弦、連半徑建構直角三角形 (OB² = OM² + BM²) 求半徑與邊長比值 (r : a = 5 : 8)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【圓與多邊形綜合幾何——「建構直角三角形」必殺三部曲！】\n1. **第一步：切線性質與平行邊距離**\n   - 線段 AD 切圓 O 於 E 點 $\\implies$ 半徑 線段 OE 垂直 線段 AD，長度為 r。\n   - 正方形對邊平行（線段 AD // 線段 BC），自圓心作垂線 線段 OM 垂直弦 線段 BC，則 **E、O、M 三點必共線**！\n   - 線段 EM 即為正方形兩對邊的垂直距離，長度等於邊長 a，因此**弦心距 線段 OM = a - r**！\n2. **第二步：垂徑定理（弦心距平分弦）**\n   - 圓心到弦的垂線平分弦，M 為線段 BC 的中點 $\\implies$ **線段 BM = a/2**。\n3. **第三步：連半徑構建直角三角形，畢氏定理列式！**\n   - 連接圓心 O 與弦端點 B，**線段 OB 即為半徑 r**！\n   - 在直角 △OBM 中由畢氏定理：\n     r² = (a - r)² + (a/2)²\n     r² = a² - 2ar + r² + a²/4 $\\implies$ 2ar = (5/4)a² $\\implies$ r = (5/8)a。\n   - 故 **r : a = 5 : 8**（比值為 5/8）！",
    "stem": "如附圖，正方形 ABCD 的邊長為 a，圓 O 的半徑為 r，線段 AD 切圓 O 於 E 點，線段 BC 為圓 O 的弦，則 r : a 的比為何？",
    "answer": "5 : 8",
    "diagramUrl": "assets/questions/q_math_geo_square_circle_tangent_radius_ratio_380.png",
    "solution": "故本題標準答案為：5 : 8（比值為 5/8）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題標準答案為：5 : 8（比值為 5/8）。"
  },
  {
    "id": "q_math_geo_right_triangle_semicircle_tangent_ad_379",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "幾何/圓與切線性質／直角三角形內切半圓、半徑垂直切線 (OE ⊥ AC)、平行線截比例線段與相似三角形 (△AEO ~ △ACB) 計算線段長",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【圓切線幾何題必備「三大破題反射神經」！】\n1. **反射動作一：見「切點」必連「圓心與切點」！**\n   - 看到半圓 O 切線段 AC 於 E 點，第一步立即在心中連接輔助線**線段 OE**！\n   - 根據圓切線性質：**圓心到切點的半徑必垂直切線**，即 **線段 OE ⊥ 線段 AC**（且 線段 OE = 半徑 r）。\n2. **反射動作二：同垂同線必平行，秒找相似三角形！**\n   - 已知 ∠C = 90°（線段 BC ⊥ 線段 AC），又 線段 OE ⊥ 線段 AC，兩線同時垂直線段 AC，故 **線段 OE // 線段 BC**！\n   - 產生 **△AEO ～ △ACB（AA 相似）**，對應邊成比例：\n     **線段 OE / 線段 BC = 線段 AO / 線段 AB**！\n3. **反射動作三：精確設半徑 r，線段代換不迷路！**\n   - 畢氏定理求邊長：線段 BC = √(13² - 12²) = 5。\n   - 設半圓半徑為 r，因為 O 為直徑線段 DB 的中點，故 線段 OB = r。\n   - 則 **線段 AO = 線段 AB - 線段 OB = 13 - r**。\n   - 列比例式：r / 5 = (13 - r) / 13 $\\implies$ 13r = 65 - 5r $\\implies$ 18r = 65 $\\implies$ r = 65/18。\n4. **最後防呆陷阱**：\n   - 題目問的是 **線段 AD**，不是半徑 r！\n   - **線段 AD = 線段 AB - 直徑 DB = 13 - 2r = 13 - 2 × (65/18) = 13 - 65/9 = 52/9**（切莫算到 r 就交卷）！",
    "stem": "如附圖，在 △ABC 中，∠C = 90°，D 點在線段 AB 上，以線段 DB 為直徑作半圓 O 切線段 AC 於 E 點。若線段 AC = 12，線段 AB = 13，則線段 AD 的長度為何？",
    "answer": "52/9",
    "diagramUrl": "assets/questions/q_math_geo_right_triangle_semicircle_tangent_ad_379.png",
    "solution": "故本題標準答案為：52/9（或寫為帶分數 5 又 7/9）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題標準答案為：52/9（或寫為帶分數 5 又 7/9）。"
  },
  {
    "id": "q_eng_gram_gerund_subject_jack_o_lantern_378",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/名詞子句結構、動名詞片語 (V-ing) 當子句主詞視為單數與主詞動詞一致性",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【動名詞當主詞「單複數判斷」三大黃金鐵則！】\n1. **動名詞片語當主詞，一律視為「單數」**！\n   - **Making a jack-o'-lantern is fun and easy.**（製作南瓜燈這件「事」，動名詞 making 當主詞，動詞必用單數 **is**！）\n   - 千萬不要被後面的名詞牽著鼻子走，哪怕後面是複數名詞，主詞依然是動名詞：\n     - 例如：Making cookies **is** fun.（烤餅乾這件事是單數，即使 cookies 是複數，動詞依然用 **is**！）\n2. **名詞子句結構剖析**：\n   - `You will find that [子句主詞 + 子句動詞 + ...]`\n   - that 裡面是一個完整的子句，需要有「主詞（making a jack-o'-lantern）＋ 動詞（is）」。\n3. **排除常錯干擾項**：\n   - (A) are：誤把主詞當複數；\n   - (C) be：原形動詞不可直接當限定子句的一般動詞；\n   - (D) have been：複數現在完成式，單複數與時態皆錯！",
    "stem": "You will find that making a jack-o'-lantern ________ fun and easy.\n\n○ (A) are\n○ (B) is\n○ (C) be\n○ (D) have been",
    "answer": "(B) is",
    "diagramUrl": "",
    "solution": "1. 【正解 (B) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (B) 深度破題分析】："
  },
  {
    "id": "q_eng_gram_tired_vs_tiring_373",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/連綴動詞 look + 形容詞、情緒形容詞（人修飾感到疲累 tired vs 事物令人疲累 tiring）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【情緒形容詞 -ed vs -ing 終極秒殺法則！】\n1. **主詞是「人」的感受** $\to$ 選 **-ed** 形容詞！\n   - **Father looks so tired.**（父親看起來「感到」很疲倦，所以需要休息）。\n   - 類似字：bored（感到無聊）、excited（感到興奮）、interested（感到有興趣）。\n2. **主詞是「事物」的特質** $\to$ 選 **-ing** 形容詞！\n   - **The work is tiring.**（這工作令人感到疲累）。\n3. **連綴動詞結構**：`look + adj.`，空格處必須是形容詞，(C) tire 與 (D) tires 是動詞，直接排除！",
    "stem": "Father looks so ________. Maybe he should take a rest. 【新北五峰】\n\n○ (A) tiring\n○ (B) tired\n○ (C) tire\n○ (D) tires",
    "answer": "(B) tired",
    "diagramUrl": "",
    "solution": "1. 【正解 (B) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (B) 深度破題分析】："
  },
  {
    "id": "q_eng_gram_exciting_welcome_party_374",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/情緒形容詞修飾事物名詞（exciting welcome party 令人興奮的歡迎派對）與冠詞 an 搭配",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【修飾名詞時：事物名詞選 -ing 形容詞！】\n1. **看被修飾的名詞是什麼**：\n   - 空格後面是 **welcome party（歡迎派對，事物）**！\n   - 修飾「事物」時，必須使用表示「令人...的」現在分詞形容詞 **exciting** $\to$ **an exciting welcome party**（一場令人興奮期待的派對）。\n2. **常見陷阱排除**：\n   - (A) **excited**：用來形容「人感到興奮」（例如：Miranda was excited.），不能用來修飾派對！\n   - (C) **excited about** / (D) **exciting to**：後面皆為介係詞片語，不能直接放在名詞 welcome party 前面當形容詞！",
    "stem": "Miranda had an ________ welcome party because she got many gifts from her neighbors. 【新北三和】\n\n○ (A) excited\n○ (B) exciting\n○ (C) excited about\n○ (D) exciting to",
    "answer": "(B) exciting",
    "diagramUrl": "",
    "solution": "1. 【正解 (B) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (B) 深度破題分析】："
  },
  {
    "id": "q_eng_gram_tag_question_is_watching_375",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/現在進行式縮寫 ('s watching) 判定與附加問句 (Tag Questions) 前肯後否原則",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【附加問句「縮寫判讀」三大黃金法則！】\n1. **看懂主要子句的縮寫原形**：\n   - **Ms. Chen's watching...** 中間的 `'s` 後面接的是 **watching（V-ing）**！\n   - 這代表 `'s` 必定是 **is**（現在進行式 is watching），絕不是 has（若是 has 後面必須接過去分詞 watched，排除 A）！\n2. **前肯後否原則**：\n   - 前半句是肯定句（is watching） $\to$ 後方附加問句必用**否定縮寫 isn't**！\n3. **代名詞一致性**：\n   - 主詞 **Ms. Chen（陳女士）**是女性單數，代名詞用 **she**。\n   - 組合附加問句：**isn't she?**（排除 C 助動詞 doesn't、排除 D 過去式 wasn't）。",
    "stem": "Ms. Chen's watching a movie with her husband, ________? 【桃園大有】\n\n○ (A) hasn't she\n○ (B) isn't she\n○ (C) doesn't she\n○ (D) wasn't she",
    "answer": "(B) isn't she",
    "diagramUrl": "",
    "solution": "1. 【正解 (B) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (B) 深度破題分析】："
  },
  {
    "id": "q_eng_gram_emotion_verb_past_interested_376",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/情緒動詞及物用法（事物 + interest(ed) + 人）與過去時間副詞 (yesterday) 時態一致性",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【情緒動詞「時態標記」必殺看點！】\n1. **句型結構確認**：\n   - 主詞：**The funny movie（物）**。\n   - 受詞：**all of us（人）**。\n   - 句型：`事物 ＋ interest(ed) ＋ 人`（這部電影使我們感興趣）。\n2. **時態雙重線索鎖定「過去式」**：\n   - 線索一：時間副詞 **yesterday（昨天）**！\n   - 線索二：後句動詞 **laughed（大笑，過去式）**！\n   - 既然是過去發生的事實，動詞必須使用**過去式 interested**！\n3. **排除陷阱**：\n   - (A) interesting 是形容詞，不能當一般動詞；\n   - (C) interests 與 (D) interest 皆為現在式，時態與 yesterday 衝突！",
    "stem": "The funny movie really ________ all of us yesterday. We all laughed loudly when watching it. 【桃園大有】\n\n○ (A) interesting\n○ (B) interested\n○ (C) interests\n○ (D) interest",
    "answer": "(B) interested",
    "diagramUrl": "",
    "solution": "1. 【正解 (B) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (B) 深度破題分析】："
  },
  {
    "id": "q_eng_gram_tag_question_there_is_no_377",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/存在句 (There is) 附加問句、否定字 no 判定與「前否後肯」反詰原則",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【There is/are 存在句附加問句兩大命題地雷！】\n1. **地雷一：看到 no 就要立刻警覺是「否定句」！**\n   - **There is no water...**（下午因為颱風沒有水停水了）。\n   - 句中含有否定詞 **no**，文法上屬於**否定句**！\n   - 附加問句必須遵守「前否後肯」原則，後面必須用**肯定形式 is**（千萬不可選 isn't，排除 B、D）！\n2. **地雷二：There is 句型的主詞不可換成 it！**\n   - 存在句 `There is / There are` 的附加問句，代名詞主詞依然固定使用 **there**，絕不可替換成 it（排除 A is it）！\n   - 完美組合：**is there?**",
    "stem": "There is no water in the afternoon because of the typhoon, ________? 【新北崇林】\n\n○ (A) is it\n○ (B) isn't it\n○ (C) is there\n○ (D) isn't there",
    "answer": "(C) is there",
    "diagramUrl": "",
    "solution": "1. 【正解 (C) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (C) 深度破題分析】："
  },
  {
    "id": "q_eng_vocab_dropped_water_369",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "計算粗心",
    "concept": "文法/動詞過去式變化／短母音+單子音字尾需重複字尾 (drop -> dropped) 與文意字彙判讀",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【動詞過去式「重複字尾加 ed」避坑清單！】\n1. **規則口訣**：單音節或重音在後音節的「單一短母音 ＋ 單一子音字母」結尾時，必須**重複字尾子音字母**再加 -ed！\n   - **drop $\to$ dropped**（掉落、掉進）——千萬別漏寫一個 p 寫成 droped！\n   - **stop $\to$ stopped**（停止）\n   - **hop $\to$ hopped**（單腳跳）\n   - **plan $\to$ planned**（計畫）\n   - **jog $\to$ jogged**（慢跑）\n2. **時態判定關鍵**：由句中的 **just（剛才）** 以及後句 **she can't turn it on now（現在開不了機）**，可知掉入水中的動作發生在「剛才（過去式）」，故必用 **dropped**！",
    "stem": "Ivy just d_____ped her phone in water, and she can't turn it on now.",
    "answer": "dropped",
    "diagramUrl": "",
    "solution": "故本題標準答案為：dropped。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題標準答案為：dropped。"
  },
  {
    "id": "q_eng_gram_emotion_verb_interest_370",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/情緒動詞用法（事物 + interest(s) + 人）與主詞受詞單複數動詞一致性",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【情緒動詞「interest」三大句型轉換速記寶典！】\n1. **句型一：事物當主詞（本題考法！）**：\n   - **事物 ＋ interest(s) ＋ 人**（某事使某人感興趣，interest 為一般及物動詞）。\n   - 主詞 **Jolin's songs 為「複數名詞」**，搭配頻率副詞 usually，現在簡單式動詞用原形 **interest**（複數主詞絕不可加 s，排除 B）！\n2. **句型二：人當主詞（被動感受，接介係詞 in）**：\n   - **人 ＋ be interested in ＋ 事物**（例如：My sister **is interested in** Jolin's songs.）。\n   - (A) are interested 缺少介係詞 in，且主詞是物不是人，文法完全錯誤！\n3. **句型三：形容詞用法（令人...的）**：\n   - **事物 ＋ be ＋ interesting (to 人)**（例如：Jolin's songs **are interesting** to my sister.）。\n   - (C) interesting 是現在分詞／形容詞，不能單獨作為句子的主要動詞！",
    "stem": "Jolin's songs usually ________ my sister.\n\n○ (A) are interested\n○ (B) interests\n○ (C) interesting\n○ (D) interest",
    "answer": "(D) interest",
    "diagramUrl": "",
    "solution": "1. 【正解 (D) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (D) 深度破題分析】："
  },
  {
    "id": "q_eng_gram_sentence_bored_with_doing_371",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/情緒形容詞片語（人 + be bored with）與介係詞後接動名詞 (V-ing) 之句子合併應用",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【情緒形容詞片語與動名詞代換句子合併三要訣！】\n1. **看懂兩句對應關係**：\n   - 句一：**Doing the same thing every day** is boring.（主詞是動名詞片語：每天做同樣的事很無聊）\n   - 句二：Jack is bored with **it**.（Jack 對「它」感到厭煩，受詞 it 代替的就是整件事）\n2. **合併步驟**：\n   - 用 **Jack** 當主詞開頭 $\to$ `Jack is bored with...`\n   - 將介係詞 with 後方的代名詞 **it** 替換為句一的動名詞片語 $\to$ `doing the same thing every day`。\n3. **關鍵文法檢查**：\n   - 介係詞 **with** 後面必須接**動名詞（V-ing）**或名詞，原句已是 **doing**，直接帶入即可！\n   - 標點符號：句首大寫 Jack，句尾務必加上英文句號「.」！",
    "stem": "【句子合併題】：\n{\n  Doing the same thing every day is boring.\n  Jack is bored with it.（用 Jack 為主詞合併句子）\n}",
    "answer": "Jack is bored with doing the same thing every day.",
    "diagramUrl": "",
    "solution": "故本題標準答案為：Jack is bored with doing the same thing every day.",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題標準答案為：Jack is bored with doing the same thing every day."
  },
  {
    "id": "q_eng_vocab_height_unit_feet_inches_372",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/長度與身高計量單位名詞（foot/feet 呎、inch/inches 吋）與生活英語應用",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【英文身高與長度單位名詞（英制 vs 公制）全攻略！】\n1. **英制身高表達法（歐美常用）**：\n   - 英語中表示身高常以「幾呎幾吋」表示：**... feet and ... inches tall**。\n   - **foot $\to$ 複數 feet**（呎，1 呎 = 12 吋 $\u0007pprox$ 30.48 公分）。\n   - **inch $\to$ 複數 inches**（吋，字尾 ch 複數加 -es，1 吋 $\u0007pprox$ 2.54 公分）。\n   - `six feet and two inches tall` 即為「6 呎 2 吋高」（約 188 公分，非常符合排球選手身高！）。\n2. **其他選項錯因一眼看破**：\n   - (A) **kilometers**（公里）：長度過長，不可能人高 2 公里！\n   - (B) **meters**（公尺）：若為公制不會與 feet 混用，且 2 公尺已是 200 公分，不可能加上 6 呎！\n   - (D) **kilograms**（公斤）：重量單位，不能用來修飾 tall！",
    "stem": "The volleyball (排球) player is six feet and two ________ tall. 【桃園光明】\n\n○ (A) kilometers\n○ (B) meters\n○ (C) inches\n○ (D) kilograms",
    "answer": "(C) inches",
    "diagramUrl": "",
    "solution": "- 故選項 (C) 為唯一合適之正確答案。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故選項 (C) 為唯一合適之正確答案。"
  },
  {
    "id": "q_soc_civ_consumer_service_center_367",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民與社會／消費者權益保護法制與行政救濟管道（各直轄市縣市政府「消費者服務中心」1950 專線、消保官二次申訴、消費爭議調解委員會 vs 民間消基會）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【消費者救濟管道與機構名稱絕對防呆指南！】\n1. **地方政府法定機構**：\n   - **消費者服務中心**：我國各直轄市、縣(市)政府依《消費者保護法》設立的**第一線諮詢與申訴窗口**！\n   - **全國消費者服務專線**：手機或市話直撥 **「1950」**（諧音：依舊為您），會自動轉接至所在地縣市政府的消費者服務中心。\n2. **消費爭議處理「三步驟」法律流程**：\n   - **第一步：向企業申訴 或 向「消費者服務中心」／消保團體申訴**（若未獲妥善處理 $\to$ 進入第二步）；\n   - **第二步：向地方政府「消費者保護官（消保官）」提出再申訴**；\n   - **第三步：向地方政府「消費爭議調解委員會」申請調解**（調解成立經法院核定者，具有法院確定判決之執行力）。\n3. **官方機構 vs 民間團體切莫混淆**：\n   - **政府機構**：行政院消費者保護處、各縣市消費者服務中心、消保官、調解委員會。\n   - **民間團體**：**消費者文教基金會（消基會）**，屬於民間財團法人公益組織，無行政公權力！",
    "stem": "我國政府為了保障與維護消費者的權益與安全，制定相關法律並成立相關機構。請問：我國各直轄市、縣(市)政府設立何種機構，以提供民眾消費諮詢及消費申訴服務？",
    "answer": "消費者服務中心",
    "diagramUrl": "",
    "solution": "故本題標準答案為：消費者服務中心。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題標準答案為：消費者服務中心。"
  },
  {
    "id": "q_soc_civ_fair_trade_act_368",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民與社會／市場經濟秩序與消費者保障兩大法規深度辨析（《公平交易法》規範獨占、聯合行為、不實廣告、確保市場公平競爭 vs 《消費者保護法》規範定型化契約、七日鑑賞期、商品無過失責任）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【大考必考雙雄：《公平交易法》 vs 《消費者保護法》一秒辨析！】\n1. **《公平交易法》（主管機關：公平交易委員會，二級獨立機關）**：\n   - **立法核心關鍵字**：「**維護交易秩序**」、「**確保公平競爭**」、「促進經濟之安定與繁榮」。\n   - **規範重點（廠商與廠商間的競爭）**：\n     - 禁止**濫用獨占地位**（如隨意斷供或不當定價）；\n     - 禁止**聯合行為**（最常考！例如各大超商聯合調漲現煮咖啡 5 元、各大加油站私下合謀聯合漲價、蛋商合謀抬高蛋價）；\n     - 禁止**不實廣告**（廣告誇大不實誤導消費者或打擊同業）；\n     - 禁止仿冒著名商標或不當杯葛。\n2. **《消費者保護法》（主管機關：行政院消保處）**：\n   - **立法核心關鍵字**：「**保護消費者權益**」、「**促進國民消費生活安全**」。\n   - **規範重點（廠商與消費者之間的契約關係）**：\n     - **定型化契約**顯失公平無效；\n     - **七日猶豫期（通訊交易、訪問交易可無條件退貨）**；\n     - 製造商或進口商之**商品瑕疵無過失賠償責任**。\n3. **破題關鍵口訣**：看題目要求「確保公平競爭、維護交易秩序」$\to$ 必定是**《公平交易法》**！",
    "stem": "我國立法院制定哪一項法律，其目的在維護交易秩序與消費者利益，確保市場公平競爭，促進經濟之安定與繁榮？",
    "answer": "《公平交易法》",
    "diagramUrl": "",
    "solution": "故本題標準答案為：《公平交易法》。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題標準答案為：《公平交易法》。"
  },
  {
    "id": "q_soc_geo_west_asia_divisions_turkey_366",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/西亞地理／西亞重要地理分區地圖判讀、歐亞十字路口（甲土耳其地跨歐亞、基督教與伊斯蘭教文化接觸樞紐）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【西亞地理分區地圖代號與地緣政治樞紐全圖解！】\n1. **本題各選項國家位置與戰略地位**：\n   - **甲（土耳其）**：位於**安納托利亞高原**，地跨歐、亞兩洲，扼守黑海海峽（博斯普魯斯海峽、達達尼爾海峽），北連東歐基督教文明、南接西亞伊斯蘭教世界，為兩大文化板塊接觸與交流之核心樞紐！\n   - **丁（以色列）**：位於地中海東岸，為猶太人國家，聖城耶路撒冷為猶太教、基督教、伊斯蘭教三大一神教聖地。\n   - **子（伊朗）**：位於**伊朗高原**，古稱波斯，居民為波斯人（印歐語系，非阿拉伯人），宗教以伊斯蘭教什葉派為主。\n   - **癸（葉門）**：位於阿拉伯半島西南角，扼守曼德海峽，控扼紅海進出印度洋之交通要道。\n2. **圖中重要周邊水域代號速記（大考常客）**：\n   - **A**：黑海  |  **B**：地中海  |  **C**：紅海  |  **D**：波斯灣  |  **E**：阿拉伯海（印度洋）",
    "stem": "西亞為人類重要古文明的發源地，也是重要的宗教聖地。在人類活動的歷史上，扮演著重要的角色。附圖為西亞主要的地理分區位置圖。請問：圖中哪一個國家的地理位置正處於西方基督教文化與西亞伊斯蘭教文化接觸地帶，因此地理位置相當重要？\n\n○ (A) 甲\n○ (B) 丁\n○ (C) 子\n○ (D) 癸",
    "answer": "(A) 甲",
    "diagramUrl": "assets/questions/q_soc_geo_west_asia_divisions_turkey_366.png",
    "solution": "1. 【正解 (A) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (A) 深度破題分析】："
  },
  {
    "id": "q_soc_geo_indochina_peninsula_nature_363",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/東南亞地理／中南半島五國（越寮柬泰緬）自然環境特徵（北高南低、山河相間縱列分布、河川南北流向、南部沖積平原與三角洲為精華區）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【中南半島自然地形速記——「山河相間、縱列分布」兩大鐵則！】\n1. **地勢與水系流向**：\n   - 中南半島地勢為**北高南低**（中國橫斷山脈向南延伸）。\n   - 山脈與河川呈**南北縱向相間排列**，因此主要河川（伊洛瓦底江、薩爾溫江、湄南河、湄公河、紅河）皆為**自北向南流**，絕非「東西分流」！\n2. **海陸位置與精華區分布**：\n   - 東側臨**南海（太平洋邊緣海）**，西側臨**印度洋（安達曼海、孟加拉灣）**。\n   - 中北部多山地丘陵交通受阻；**南部河流下游沖積平原與河口三角洲**（湄公河三角洲、湄南河平原等）地勢平坦、土壤肥沃、水稻高產，為全半島人口最稠密、都市聚集之精華區！",
    "stem": "除了越南、臺商在寮國、柬埔寨、泰國、緬甸皆有投資設廠，下列有關這五國自然環境的敘述，請問：何者正確？\n\n○ (A) 此五國皆分布於中南半島，東臨南海、西面太平洋\n○ (B) 中南半島以山地丘陵面積最廣，地帶大致南高北低\n○ (C) 因山脈阻隔，主要河川大多東西分流，與臺灣相似\n○ (D) 南部沖積平原以及河口三角洲為人口密集的精華區",
    "answer": "(D) 南部沖積平原以及河口三角洲為人口密集的精華區",
    "diagramUrl": "",
    "solution": "1. 【正解 (D) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (D) 深度破題分析】："
  },
  {
    "id": "q_soc_geo_indochina_peninsula_climate_364",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/東南亞地理／中南半島熱帶季風氣候特徵（北回歸線以南、夏半年西南季風與颱風多雨、冬半年乾季、迎風面地形雨）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【中南半島「熱帶季風氣候」關鍵特徵全解！】\n1. **緯度位置**：五國絕大部分國土位於**北回歸線以南**，屬於**熱帶季風氣候**（非副熱帶）。\n2. **風向與雨季乾季成因**：\n   - **夏半年（雨季）**：吹來自印度洋與南海的**西南季風**，海洋水氣豐沛，加上夏秋季偶有熱帶氣旋（颱風）侵襲，**降水量為全年之冠**！\n   - **冬半年（乾季）**：吹來自亞洲內陸高壓的**東北季風**，氣候乾燥少雨。\n3. **易混淆名詞避坑**：\n   - **黑潮**：黑潮沿菲律賓東岸、臺灣東部、日本外海流動，**完全未流經中南半島**！\n   - **越南冬季降雨**：越南中部安南山脈東側冬季面迎東北季風，水氣受山脈抬升凝結致雨，此為**「地形雨」**，絕非午後受熱上升的「對流雨」！",
    "stem": "承前題，中南半島五國（越南、寮國、柬埔寨、泰國、緬甸）的氣候特色往往讓身處異國他鄉打拚的臺商倍感親切，請問：下列有關這五國氣候的敘述，何者正確？\n\n○ (A) 這五國的領土大多位處北回歸線以北的副熱帶氣候區\n○ (B) 黑潮流經，使這五國氣候終年濕熱如夏，無明顯乾季\n○ (C) 夏季偶有颱風來襲，伴隨西南季風，降水量全年之冠\n○ (D) 越南面迎東北季風，冬季山區多對流雨，似臺灣基隆",
    "answer": "(C) 夏季偶有颱風來襲，伴隨西南季風，降水量全年之冠",
    "diagramUrl": "",
    "solution": "- 故選項 (C) 完全正確。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故選項 (C) 完全正確。"
  },
  {
    "id": "q_soc_geo_southeast_asia_taiwanesebusiness_investment_365",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/公民與社會／東南亞經貿整合與國際分工（臺商供應鏈轉移、美中貿易戰轉單效應、東協區域經濟體與世界市場角色）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【臺商在東南亞設廠轉型與東協區域整合核心考點！】\n1. **兩波臺商投資東南亞歷程對比**：\n   - **早期（傳統產業）**：以製鞋、成衣紡織、塑膠、家具等**勞力密集型產業**為主，著眼於低廉工資。\n   - **2018 年後（高科技電子業轉移）**：因**美中貿易戰**爆發，美國對中國商品加徵高額關稅，鴻海、和碩等大廠為降低政治與關稅風險（China+1 策略），加速轉向東南亞投資。\n2. **東協角色轉變——從「世界工廠」邁向「世界市場」**：\n   - 透過東協（ASEAN）內部關稅互免與自由貿易協定，東南亞各國經濟快速成長、中產階級壯大，龐大的內需消費潛力使其有機會取代中國部分地位，崛起成為**「世界市場」**！\n3. **常設陷阱排除**：\n   - 臺灣**並非東協成員國**（受中共政治打壓阻撓），無法享受東協關稅互惠，臺商主要透過直接赴當地設廠投資來避開貿易壁壘！",
    "stem": "早期臺商於東南亞主要投資的項目僅限於製鞋、紡織、傢俱等傳統產業；2018 年後，鴻海、和碩、緯創等臺商大廠紛紛將原本設於中國的部分電子業（筆電、顯示器、手機等資訊產業）轉移東南亞，預期在越南北部建立重要電子產業聚落，以穩定產品供應量。請問：下列有關臺商於東南亞設廠投資的敘述，何者正確？\n\n○ (A) 為促進產業合作，臺灣順利加入「東協（ASEAN）」以利臺商拓展東南亞事業\n○ (B) 東南亞所具備的勞力優勢，吸引臺商設廠帶動當地產業升級至電子組裝業\n○ (C) 2018 年後，東南亞龐大的消費市場是鴻海將電子業自中國轉移過去的主因\n○ (D) 透過區域結盟，東南亞在國際分工體系中有機會取代中國成為「世界市場」",
    "answer": "(D) 透過區域結盟，東南亞在國際分工體系中有機會取代中國成為「世界市場」",
    "diagramUrl": "",
    "solution": "1. 【正解 (D) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (D) 深度破題分析】："
  },
  {
    "id": "q_soc_geo_vietnam_culture_religion_economy_362",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/東南亞地理／越南地理位置、產業投資（臺商重鎮）、中華文化圈、法國殖民印記與東南亞各國宗教信仰對比（印尼為全球穆斯林人口最多）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【東南亞「各國宗教信仰與殖民歷史」必考對照全攻略！】\n1. **東南亞各國「宗教信仰」絕對速記**：\n   - **伊斯蘭教**：**印尼（全球穆斯林人口最多國家！）**、**馬來西亞**、**汶萊**。\n   - **天主教（基督教）**：**菲律賓**（受西班牙、美國長期殖民統治）、**東帝汶**（受葡萄牙殖民）。\n   - **大乘佛教＋中華儒家文化**：**越南**（東南亞唯一深受中華文化統治影響的儒家文化圈國家）。\n   - **上座部（小乘）佛教**：**泰國**、**緬甸**、**寮國**、**柬埔寨**（中南半島內陸四國）。\n2. **越南的三大歷史文化印記（高頻考點）**：\n   - **中國文化印記**：北部與廣西、雲南接壤，歷史長達千年的北屬時期，信仰以**大乘佛教、儒家**為主，過農曆春節與端午中秋。\n   - **法國殖民印記**：十九世紀受法國殖民，留下**越南法國麵包（Bánh mì）**、**滴漏咖啡**、天主教聖母大教堂、以及由傳教士創立並沿用至今的**羅馬拼音國語字**！\n   - **現代經貿**：中南半島東岸狹長海岸線，海運發達，為臺商投資重鎮。",
    "stem": "「越南」是臺商在東南亞地區投資金額比重最高的國家，請問：下列有關越南的敘述，何者錯誤？\n\n○ (A) 越南坐落在亞洲東南側，海陸交通發達，有利於臺商建立東南亞區域性供應鏈\n○ (B) 北部接連廣西壯族自治區、雲南省，服飾、民俗節慶等傳統文化深受中國影響\n○ (C) 因阿拉伯貿易商人傳入伊斯蘭教信仰，越南為目前全球穆斯林人口數最多的國家\n○ (D) 至今在語言文字、宗教建築、飲食習慣仍留有十九世紀被法國殖民的歷史印記",
    "answer": "(C) 因阿拉伯貿易商人傳入伊斯蘭教信仰，越南為目前全球穆斯林人口數最多的國家",
    "diagramUrl": "",
    "solution": "的敘述嚴重錯誤，符合題目所求「選錯誤者」。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "的敘述嚴重錯誤，符合題目所求「選錯誤者」。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_indonesia_capital_relocation_361",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/東南亞地理／印尼遷都背景（爪哇島雅加達 vs 婆羅洲加里曼丹）板塊構造、火山地震帶、赤道緯線與熱帶雨林氣候",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【東南亞地理焦點——印尼遷都爪哇島（雅加達）到婆羅洲（加里曼丹）的關鍵考點全解析！】\n1. **爪哇島（雅加達）**：\n   - **板塊位置**：位於**歐亞板塊與印澳板塊**擠壓碰撞帶（接觸帶），地殼活動劇烈，多火山地震！火山灰帶來肥沃土壤，吸引大量人口聚集（全印尼超過一半人口擠在爪哇島）。\n   - **環境危機**：人口極度過度擁擠、超抽地下水造成地層嚴重下陷、海水倒灌，成為遷都主因。\n2. **婆羅洲（加里曼丹島）**：\n   - **島嶼歸屬（三國共有）**：南部屬印尼（加里曼丹），北部為**馬來西亞**（砂拉越、沙巴）與**汶萊**（千萬別被騙寫成「東帝汶」，東帝汶在小巽他群島東端！）。\n   - **地質特色**：位於巽他陸棚古老地塊中央，地質穩定，少火山地震，且為紅毛猩猩重要原始熱帶雨林棲地。\n3. **氣候與經緯度地雷陷阱**：\n   - **經緯度陷阱**：穿過印尼中部的橫向基準線是**緯度 0 度（赤道）**，絕非「經度 0 度」（經度 0 度為通過英國格林威治的本初子午線）！\n   - **氣候陷阱**：雅加達與加里曼丹皆緊鄰赤道，屬於**全年高溫多雨的「熱帶雨林氣候」**，並非「熱帶季風氣候」！",
    "stem": "印尼於 2019 年宣布要將首都雅加達遷都到婆羅洲的加里曼丹（見附圖），主要因為雅加達人口過度擁擠，加上超抽地下水導致地層下陷，加里曼丹為紅毛猩猩的重要棲地，因此出現許多反對的聲浪，關於這兩個印尼地區的敘述何者正確？\n\n○ (A) 加里曼丹的西北方有兩個國家，分別是馬來西亞及東帝汶\n○ (B) 兩地間剛好有經度 0 度通過\n○ (C) 雅加達位處歐亞板塊及印澳板塊接觸帶，多火山地震\n○ (D) 雅加達和加里曼丹的氣候皆以全年高溫多雨的熱帶季風為主",
    "answer": "(C) 雅加達位處歐亞板塊及印澳板塊接觸帶，多火山地震",
    "diagramUrl": "assets/questions/q_soc_geo_indonesia_capital_relocation_361.png",
    "solution": "- 故選項 (C) 的敘述完全正確，為本題正解。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故選項 (C) 的敘述完全正確，為本題正解。"
  },
  {
    "id": "q_soc_geo_henna_distribution_culture_360",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/世界文化與宗教／植物地理分布（指甲花北非西亞南亞）與文化宗教習俗對應（印度種姓、伊斯蘭開齋節、埃及木乃伊 vs 日本神道教排除）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【地理跨科整合題——「植物生長環境」與「世界歷史文化」秒殺對照法！】\n1. **看懂地圖的核心分布區**：\n   - 指甲花（Henna／散沫花）原生於**北非、西亞（阿拉伯半島）與南亞（印度半島）**等熱帶與亞熱帶乾燥／半乾燥氣候區。\n2. **各選項文化區與地理位置精準對應**：\n   - **(A) 種姓制度**：起源於**南亞印度**，正好位於指甲花的核心產地，古印度廣泛使用指甲花進行彩繪與身份紋飾。\n   - **(B) 開齋節**：為**伊斯蘭教**（中東西亞、北非、南亞穆斯林）最重要的節日之一，女性傳統上必定會繪製指甲花彩繪（曼海蒂 Mehndi）祈求祝福。\n   - **(C) 木乃伊**：源自**北非古埃及**，埃及位於指甲花主要生長區，考古學家已多次在木乃伊的指甲與頭髮中檢測出指甲花染料。\n   - **(D) 神道教**：為**東亞日本**的本土宗教，日本氣候為溫帶季風，完全不在指甲花的原生分布區（日本古代婦女染黑齒「お歯黒」使用的是五倍子粉與鐵漿水，非指甲花），因此 (D) 敘述最不合理，直接秒選！",
    "stem": "指甲花原產於非洲、南亞地區，附圖為指甲花的生長分布，因其容易與蛋白質反應的獨特性質，在歷史上常被人們作為身體染劑使用，從古至今在許多文化中都可見到指甲花的蹤跡。根據上文資訊，下列哪一項敘述較不合理？\n\n○ (A) 使用指甲花紋身區分種姓制度階級\n○ (B) 使用指甲花彩繪以慶祝開齋節到來\n○ (C) 在木乃伊上發現指甲花染色的痕跡\n○ (D) 神道教祭祀前用指甲花將牙齒染黑",
    "answer": "(D) 神道教祭祀前用指甲花將牙齒染黑",
    "diagramUrl": "assets/questions/q_soc_geo_henna_distribution_culture_360.png",
    "solution": "的敘述明顯違背地理分布與歷史文化常理，為最不合理的選項，應選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "的敘述明顯違背地理分布與歷史文化常理，為最不合理的選項，應選 (D)。"
  },
  {
    "id": "q_soc_geo_africa_free_trade_agreement_359",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/公民與社會／非洲洲內貿易比例低迷之困境與區域經濟整合（簽署自由貿易協定降低關稅壁壘）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【非洲經濟大困境——「洲內貿易比率過低（捨近求遠）」與解方！】\n1. **抓出核心病灶——「非洲國家彼此不買對方的東西」**：\n   - 肯亞產花，鄰國奈及利亞卻跟歐洲荷蘭買；奈及利亞產棕櫚油，肯亞卻跟東南亞馬來西亞買！\n   - 非洲的「洲內貿易比例」僅有 **15%**（歐洲高達 67%、亞洲 58%），貿易高度依賴歐洲、中國、美國等外大洲。\n2. **為什麼會捨近求遠？**：\n   - **高額關稅與貿易壁壘**：非洲各國之間關稅過高、通關手續繁複，彼此做生意成本甚至比跟歐美做生意還貴！\n   - **單一作物經濟與殖民遺毒**：殖民時期鐵路交通皆由內陸直通港口外銷母國，缺乏鄰國橫向交通與自由貿易機制。\n3. **對症下藥的唯一解方**：\n   - 要改善「洲內貿易低迷」，就必須**簽署區域自由貿易協定（FTA / AfCFTA）**，**調降或免除各國間的關稅**，促進非洲國家彼此之間的商品流通！\n   - (A) 限定進口配額、(C) 強化邊境管制：只會進一步阻礙洲內貿易，使問題更加惡化！\n   - (B) 改善與其他洲的交通：只會加深對外大洲的依賴，無法提升非洲「洲內貿易比例」。",
    "stem": "附圖為小成在研究 2017 年非洲貿易現況時所發現的某些現象。非洲各國採取下列何項措施，最可能有助於改善非洲這些現象？【111 年會考】\n\n【附圖研究筆記內容】：\n❖ 肯亞是世界主要的花卉生產國，但奈及利亞的花卉有八成來自荷蘭；奈及利亞生產大量棕櫚油，但肯亞的棕櫚油主要進口自馬來西亞。\n❖ 以洲內貿易的比例而言，非洲僅有 15%，亞洲是 58%，歐洲高達 67%。\n❖ 目前非洲大部分國家的貿易對象主要為歐盟國家、中國及美國。\n\n○ (A) 限定與非洲其他國家的進口配額，保護本國產業\n○ (B) 改善與其他洲的交通運輸，降低貨物的運輸成本\n○ (C) 強化邊境的管制措施，防止鄰國非法貿易的進行\n○ (D) 簽署非洲自由貿易協定，降低非洲國家間的關稅",
    "answer": "(D) 簽署非洲自由貿易協定，降低非洲國家間的關稅",
    "diagramUrl": "assets/questions/q_soc_geo_africa_free_trade_agreement_359.png",
    "solution": "1. 【正解 (D) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (D) 深度破題分析】："
  },
  {
    "id": "q_soc_geo_west_africa_cfa_cocoa_358",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/非洲地理／西非幾內亞灣熱帶雨林氣候、熱帶栽培業代表作物（可可、油棕）與西非法郎經濟圈",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【非洲農業四大分區與代表作物秒殺密碼！】\n1. **題幹地理位置鎖定：「西非國家」**：\n   - 西非（特別是幾內亞灣沿岸，如象牙海岸、迦納、貝南、多哥等）鄰近赤道，屬於**高溫多雨的熱帶雨林氣候**！\n   - 自歐洲殖民時期以來，該區域即被闢為典型的大規模「**熱帶栽培業**」農場，以種植單一經濟作物外銷歐洲為主。\n   - **全球可可豆第一大產區就在西非**（象牙海岸與迦納合占全球總產量逾 60%）！因此在西非使用共同貨幣收購的大宗農產原料必定是**可可**！\n2. **常見選項作物產地速查（會考必備排他法）**：\n   - **可可、油棕** $\\rightarrow$ **西非（幾內亞灣）**、東南亞（熱帶雨林氣候）。\n   - **茶葉** $\\rightarrow$ **東非高原（肯亞）**、南亞（印度、斯里蘭卡）、東亞丘陵（排水良好的山坡濕潤區）。\n   - **葡萄、橄欖** $\\rightarrow$ **南非開普敦、北非地中海沿岸**（溫帶地中海型氣候，夏乾冬雨）。\n   - **小麥** $\\rightarrow$ **溫帶草原與乾燥灌溉區**（美加草原、澳洲、烏克蘭）。",
    "stem": "非洲由於經濟波動性大，西非國家曾與法國央行合作推出西非法郎（CFA），其匯率隨歐元變動，以穩定當地的金融市場。然而 2020 年，使用該貨幣的眾多國家和法國達成協議，將把共同貨幣名稱改為 ECO，有望利用單一貨幣制度帶動該區域的經濟穩定。若協議施行後，在此地區購買下列何種原料商品最可能使用該貨幣？\n\n○ (A) 可可\n○ (B) 茶葉\n○ (C) 葡萄\n○ (D) 小麥",
    "answer": "(A) 可可",
    "diagramUrl": "",
    "solution": "1. 【正解 (A) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (A) 深度破題分析】："
  },
  {
    "id": "q_math_square_inscribed_semicircle_tangent_357",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／正方形內切半圓切線長性質（AT=AB=a, TP=PC=x）與直角三角形畢氏定理求線段比值",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【正方形內切半圓「兩大隱藏切點」與「畢氏定理設元法」！】\n1. **隱藏的直角切點（最容易被忽略的幾何條件）**：\n   - 因為正方形四個角皆為 $90^\\circ$，即 $\\angle B = 90^\\circ$、$\\angle C = 90^\\circ$。\n   - 以線段 $BC$ 為直徑作半圓，則半徑垂直直徑兩端點的垂直線！\n   - 這意味著：**邊線 $AB$ 與邊線 $CD$ 本身就是半圓的兩條切線**，**$B$ 點與 $C$ 點就是切點**！\n2. **切線長性質等長代換（化繁為簡）**：\n   - 自 $A$ 點出發對半圓引切線：$\\overline{AT} = \\overline{AB} = a$（正方形邊長）！\n   - 自 $P$ 點出發對半圓引切線：$\\overline{TP} = \\overline{PC} = x$！\n3. **在直角三角形 △ADP 中列畢氏定理**：\n   - 斜邊 $\\overline{AP} = a + x$。\n   - 兩股：$\\overline{AD} = a$，$\\overline{PD} = a - x$。\n   - $$(a + x)^2 = (a - x)^2 + a^2$$\n   - 快速展開相消：$$(a+x)^2 - (a-x)^2 = a^2 \\implies 4ax = a^2 \\implies a = 4x$$！\n   - 所求比值：$$\\frac{\\overline{AT}}{\\overline{TP}} = \\frac{a}{x} = \\frac{4x}{x} = \\mathbf{4}$$！",
    "stem": "如圖所示，在正方形 ABCD 中，以線段 BC 為直徑作半圓 O，P 點在線段 CD 上，線段 AP 切半圓 O 於 T 點，則線段 AT : 線段 TP 的比值為何？\n\n○ (A) 2\n○ (B) 3\n○ (C) 4\n○ (D) 5",
    "answer": "(C) 4",
    "diagramUrl": "assets/questions/q_math_square_inscribed_semicircle_tangent_357.png",
    "solution": "深度破題分析——三步驟完整推導】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——三步驟完整推導】： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_hydroelectric_power_arabian_peninsula_356",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/自然環境與能源／水力發電兩大自然條件（豐沛水量＋地勢落差）與阿拉伯半島沙漠無常流河特徵",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【水力發電「黃金雙要素」——水量大＋落差大！】\n1. **水力發電天然兩大必要條件（缺一不可）**：\n   - **條件一：水量充沛且穩定**（年降水量豐沛，河流長年有充足逕流）。\n   - **條件二：地勢起伏落差大**（山高谷深、水流湍急，重力位能才能高效轉化為電能）。\n2. **秒殺排除法——「連河都沒有，怎麼發水電？」**：\n   - **阿拉伯半島**：\n     - 受副熱帶高氣壓常年籠罩，全境大多為「熱帶沙漠氣候」，年降水量少於 250 公釐，極度乾旱！\n     - 地表「**無常年性常流河**」（多為只有暴雨時才有水的時令河／乾河谷 wadi）！\n     - 地形以古老平緩的高原和沙漠為主，完全不具備水力發電的任何自然基礎，最不適合！\n3. **其他三個地區全具備「暴雨／多雨＋板塊高山」的水電絕佳條件**：\n   - **日本本州東部**：季風迎風多雨＋板塊造山帶河短流急。\n   - **印尼蘇門答臘**：赤道熱帶雨林高溫多雨＋火山造山山脈。\n   - **紐西蘭南島西部**：西風迎風坡強烈地形雨（年雨量可達數千毫米）＋南阿爾卑斯山冰河高地。",
    "stem": "若僅根據一地的自然環境判斷，不考慮當地政府的財政狀況與環保政策。下列哪個地區，最不適合開發水力發電資源？\n\n○ (A) 阿拉伯半島\n○ (B) 日本本州島東部\n○ (C) 印尼蘇門答臘\n○ (D) 紐西蘭南島西部",
    "answer": "(A) 阿拉伯半島",
    "diagramUrl": "",
    "solution": "1. 【正解 (A) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (A) 深度破題分析】："
  },
  {
    "id": "q_soc_geo_dead_sea_shrinkage_355",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/西亞與北非／內陸鹹水湖（死海）、約旦河過度截流灌溉、湖面縮減與土壤鹽鹼化生態危機",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【西亞「死海」與中亞「鹹海」——兩大「名為海實為湖」的水資源生態危機！】\n1. **抓出題幹兩大關鍵線索**：\n   - **名海實湖**：名字叫「海」，但實際是封閉的「內陸鹹水湖」。\n   - **上游過度截水灌溉 $\\rightarrow$ 湖泊面積劇減 $\\rightarrow$ 鹽鹼化與沙漠化**！\n2. **西亞的指標代表——死海 (Dead Sea)**：\n   - 位於西亞約旦與以色列／巴勒斯坦交界處。\n   - 是地表海拔最低的內陸鹹水湖（湖面約低於海平面 430 公尺）。\n   - 周邊國家因氣候極度乾旱，為發展農業與生活用水，在唯一主要水源「約旦河」上游大量修築水壩、引水灌溉，造成注入死海的水量大減逾 90%。\n   - 死海近年快速乾涸縮小、湖岸下陷出現大量巨大天坑，周邊土壤嚴重鹽鹼化！\n3. **其他選項地理特徵排除**：\n   - **東北亞、東南亞**：多屬於季風氣候區，降水豐富，主要湖泊大多為淡水外流湖，不會出現截水引發劇烈鹽鹼化與乾涸成海之現象。\n   - **北非**：主要依靠尼羅河（外流河注入地中海），著名人工湖為阿斯旺水壩形成的納瑟湖，無名為「海」的內陸湖快速縮減問題。",
    "stem": "人們稱呼它為「海」，實際上它不與海洋相連，而是內陸的「湖泊」。為了灌溉，附近居民長期截取注入湖泊的河水，使它的面積快速縮減，並引發當地沙漠化、土壤鹽鹼化等環境問題。上文所描述的「湖泊」，最可能分布在哪個區域？\n\n○ (A) 東北亞\n○ (B) 東南亞\n○ (C) 西亞\n○ (D) 北非",
    "answer": "(C) 西亞",
    "diagramUrl": "",
    "solution": "1. 【正解 (C) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (C) 深度破題分析】："
  },
  {
    "id": "q_soc_geo_islamic_cultural_customs_pakistan_354",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/世界文化與宗教／伊斯蘭教國家生活戒律（禁酒禁豬肉、女性服飾）與伊斯蘭文化圈分布（巴基斯坦、沙烏地阿拉伯）",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【抓住問題核心——「誰跟沙烏地阿拉伯拜同一個神、過同樣的宗教生活？」】\n1. **沙烏地阿拉伯的「核心國教」＝伊斯蘭教（回教）**：\n   - 聖城麥加、麥地那所在地，奉行嚴格的伊斯蘭教法（清真 Halal 飲食規範、嚴格禁酒、禁食豬肉、女性服飾遮蔽原則）。\n2. **尋找同屬「伊斯蘭文化圈」的國家**：\n   - **巴基斯坦（Pakistan）**：國名全稱為「巴基斯坦伊斯蘭共和國」，全國高達 96% 以上人口信仰伊斯蘭教。其日常生活本就遵循嚴格的清真飲食戒律（不飲酒、不吃豬肉），女性外出亦有遮蔽習慣，因此前往沙烏地阿拉伯旅遊時「最了解當地民情，最不可能觸法受罰」！\n3. **其他三個選項均為「基督教文化圈」**：\n   - **美國、義大利、菲律賓（亞洲唯一天主教為主國家）**：主要信仰基督教（天主教／新教），日常生活普遍有飲酒、食用豬肉及穿著輕便服裝之習慣，若至沙烏地阿拉伯旅遊，極易因文化習慣差異而不慎觸犯宗教禁令。",
    "stem": "沙烏地阿拉伯受到伊斯蘭教信仰的影響極深，該國刻意發布「旅遊注意事項」提醒觀光客，節錄如下：\n❖ 宗教場所：有部分宗教設施不接受非信徒進入參觀。\n❖ 服裝規定：婦女出門必須穿著符合規定的服裝。\n❖ 飲食規定：旅遊參觀時不可飲酒、不得攜帶豬肉製品入境。\n如果違反上述規定，可能會受到處罰。\n\n請問下列哪個國家的國民前往該國旅遊，最不可能因違反上述風土民情與宗教規定而受罰？\n\n○ (A) 美國\n○ (B) 菲律賓\n○ (C) 義大利\n○ (D) 巴基斯坦",
    "answer": "(D) 巴基斯坦",
    "diagramUrl": "",
    "solution": "- 故正確答案選 (D) 巴基斯坦。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故正確答案選 (D) 巴基斯坦。"
  },
  {
    "id": "q_soc_geo_saudi_tourism_policy_353",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "審題不清",
    "concept": "地理/世界各大洲與西亞／世界洲別劃分（大洋洲紐西蘭）、沙烏地阿拉伯宗教規範（伊斯蘭教禁酒禁豬肉）與中東地緣關係",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【兩步驟審題鎖定答案——「洲別範圍排他性」＋「中東地緣禁忌」】\n1. **第一步（洲別嚴格對照）**：\n   - 題幹明確限定開放國家所屬的大洲：「**歐洲、北美洲、亞洲、大洋洲**」！\n   - 快速排除非開放大洲的國家：\n     - **(A) 埃及**：位於「**非洲**」東北部，不在開放名單洲別中！\n     - **(B) 巴拿馬**：位於「**中美洲**（中美地峽）」，非北美洲，不在開放範圍中！\n2. **第二步（中東地緣政治與宗教敵意排查）**：\n   - 剩下 (C) 紐西蘭（大洋洲）與 (D) 以色列（亞洲）。\n   - **(D) 以色列**：為猶太教國家，自 1948 年建國以來與周圍阿拉伯伊斯蘭國家爆發多次以阿戰爭，沙烏地阿拉伯身為伊斯蘭教發源地（麥加、麥地那所在地），長期對以色列採取敵對與抵制政策，未建立邦交，不可能開放其免簽或一般線上電子觀光簽證！\n   - **(C) 紐西蘭**：屬於「大洋洲」已開發國家，政治立場中立友好，完全符合開放條件！",
    "stem": "2019 年 9 月底，沙烏地阿拉伯開放歐洲、北美洲、亞洲及大洋洲的部分國家國民，可以在網路上申請到該國觀光的簽證。這是該國推動產業轉型，減低過度依賴某項資源的重要經濟新政策。\n但是，雖然打開國門歡迎觀光客前來，該國受到宗教信仰的影響很深，遊客仍須配合當地的風土民情。為此，該國刻意用各國語言發布「旅遊注意事項」提醒觀光客。以下是「沙烏地阿拉伯旅遊注意事項」的節錄：\n❖ 宗教場所：有部分宗教設施不接受非信徒進入參觀。\n❖ 服裝規定：婦女出門必須穿著符合規定的服裝。\n❖ 飲食規定：旅遊參觀時不可飲酒、不得攜帶豬肉製品入境。\n如果違反上述規定，可能會受到處罰，請特別注意。\n\n下列哪個國家的遊客，最有可能利用這次的新政策到沙烏地阿拉伯觀光？\n\n○ (A) 埃及\n○ (B) 巴拿馬\n○ (C) 紐西蘭\n○ (D) 以色列",
    "answer": "(C) 紐西蘭",
    "diagramUrl": "",
    "solution": "- 故正確答案選 (C) 紐西蘭。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故正確答案選 (C) 紐西蘭。"
  },
  {
    "id": "q_soc_geo_date_palm_climate_352",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/西亞與北非／熱帶乾燥氣候特徵、綠洲農業指標作物椰棗（棗椰樹）與西亞北非氣候連帶性",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【椰棗 vs 油棕 vs 橄欖——三大常考世界經濟作物秒殺法！】\n1. **抓緊題幹關鍵字：「熱帶乾燥地區」＋「西亞」**：\n   - 西亞與北非地理環境高度相似（副熱帶高壓籠罩、東北信風吹拂），形成全球最大片連綿的熱帶沙漠氣候區（撒哈拉沙漠與阿拉伯沙漠）。\n   - **椰棗（棗椰樹）**：耐高溫、耐乾旱、耐鹽鹼，是「熱帶乾燥氣候／綠洲農業」的標誌性作物！全球最主要產地就是**西亞與北非**！\n2. **常見棕櫚與果樹陷阱大辨析（考場必考）**：\n   - **椰棗（棗椰）** $\\rightarrow$ **西亞、北非**（熱帶乾燥氣候、綠洲農業、耐旱極強）。\n   - **油棕** $\\rightarrow$ **東南亞（馬來西亞、印尼）**、西非幾內亞灣（熱帶雨林氣候、高溫多雨、熱帶栽培業提煉棕櫚油）。\n   - **橄欖／柑橘／葡萄** $\\rightarrow$ **南歐（地中海沿岸）**（地中海型氣候、夏乾冬雨、園藝農業）。\n   - **咖啡／香蕉** $\\rightarrow$ **中美洲、南美洲熱帶**（熱帶栽培業）。",
    "stem": "棗椰樹屬於棕櫚科植物，主要分布在熱帶乾燥地區，其果實稱為椰棗，既可作糧食，又是製糖的原料。全球有上億棵棗椰樹，其中前兩大分布區為西亞和甲地區，椰棗也成為這些地區重要的出口農產品。上述甲地區最可能為下列何者？【112 年會考】\n\n○ (A) 北非\n○ (B) 南歐\n○ (C) 中美洲\n○ (D) 東南亞",
    "answer": "(A) 北非",
    "diagramUrl": "",
    "solution": "- 故正確答案選 (A) 北非。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故正確答案選 (A) 北非。"
  },
  {
    "id": "q_soc_geo_cptpp_tariff_disadvantage_351",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/公民與社會／區域經濟整合與自由貿易協定（CPTPP 成員國免關稅優惠 vs 非成員國關稅劣勢衝擊）",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【區域經濟整合的「關稅劣勢」秒殺破題法則！】\n1. **什麼叫「關稅劣勢（貿易移轉受害者）」？**：\n   - 區域貿易協定（如 CPTPP、歐盟、東協等）成立後，**「會員國之間」互相降稅甚至零關稅**！\n   - 但**「非會員國」出口到會員國時，仍然必須被課徵高額關稅**！\n   - 這導致非會員國的產品在會員國市場上比別國貴，價格競爭力大打折扣，這就叫「關稅劣勢衝擊」！\n2. **本題破題十字路（秒殺三步驟）**：\n   - **出口國**：必須是「非 CPTPP 成員國」（如臺灣）。\n   - **進口國（目的國）**：必須是「CPTPP 成員國」（如越南，圖中編號 2）。\n   - 只有「臺灣（非成員國）出口到越南（成員國）」，才會面臨「其他成員國免關稅、臺灣要繳關稅」的劣勢！\n3. **CPTPP 11 個創始成員國速記名單**：\n   - 亞洲：日本（1）、越南（2）、新加坡（3）、馬來西亞（4）、汶萊（5）。\n   - 大洋洲：澳洲（6）、紐西蘭（7）。\n   - 美洲：加拿大（8）、墨西哥（9）、祕魯（10）、智利（11）。\n   - 請特別注意：**臺灣、美國、中國、南韓均「非」這 11 個成員國！**",
    "stem": "附圖為跨太平洋夥伴全面進步協定（CPTPP）的 11 個成員國。該協定於 2018 年 12 月 30 日生效，各成員國之間將階段性的廢除關稅，以促進貿易往來。此協定生效後，下列何者最可能因關稅劣勢而受到衝擊？【112 年會考】\n\n○ (A) 臺灣的紡織品出口至越南\n○ (B) 加拿大的小麥出口至日本\n○ (C) 墨西哥的汽車出口至智利\n○ (D) 馬來西亞的石油出口至印度",
    "answer": "(A) 臺灣的紡織品出口至越南",
    "diagramUrl": "assets/questions/q_soc_geo_cptpp_tariff_disadvantage_351.png",
    "solution": "1. 【正解 (A) 深度破題分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【正解 (A) 深度破題分析】："
  },
  {
    "id": "q_soc_geo_iraq_war_tourism_350",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/西亞與北非／兩河流域古文明（美索不達米亞、巴比倫、烏爾）與現代地緣衝突（伊拉克首都巴格達、巴士拉戰役、波斯灣戰爭）",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【西亞地緣關鍵地名秒殺密碼！】\n1. **四大關鍵地名鎖定「伊拉克（兩河流域／美索不達米亞）」**：\n   - **巴比倫 (Babylon)**：古美索不達米亞兩河流域（幼發拉底河與底格里斯河）的經典古文明，位於今伊拉克境內！\n   - **巴格達 (Baghdad)**：伊拉克現今首都兼最大城市，也是阿拉伯帝國阿拔斯王朝（黑衣大食）的歷史都城！\n   - **烏爾 (Ur)**：蘇美古城，位於伊拉克南部幼發拉底河南岸，被認為是三大一神教共同始祖亞伯拉罕之故鄉。\n   - **巴士拉 (Basra)**：伊拉克南部重要的石油輸出港與大城，2003 年美伊戰爭激戰要地。\n2. **西亞主要國家首都與特徵速對照（絕不混淆）**：\n   - **伊拉克**：首都「巴格達」，兩河流域古文明（蘇美、巴比倫、亞述），產石油。\n   - **伊朗**：首都「德黑蘭」，古波斯帝國所在地，波斯民族與什葉派穆斯林為主。\n   - **埃及**：位於北非，尼羅河古文明、金字塔，首都「開羅」。\n   - **以色列**：地中海東岸，猶太教聖地，首都「耶路撒冷」。",
    "stem": "此國家曾經是遊客喜愛的度假勝地，但受到戰爭的影響，使得榮景不再。近年來，有業者推出如附圖中的戰後旅遊行程，希望以獨特的戰爭地景及文化古蹟重振當地觀光業。上述國家為下列何者？【109 年會考補考】\n\n【附圖：以石油與文化遺產著稱的國家】\n❖ 烏爾～猶太教、基督教及伊斯蘭教等宗教的重要歷史人物亞伯拉罕出生地\n❖ 巴士拉～2003 年戰鬥最慘烈的城市\n❖ 巴格達～留有戰爭傷痕的綠洲城市\n❖ 巴比倫～古文明的發源地之一\n\n○ (A) 伊朗\n○ (B) 埃及\n○ (C) 伊拉克\n○ (D) 以色列",
    "answer": "(C) 伊拉克",
    "diagramUrl": "assets/questions/q_soc_geo_iraq_war_tourism_350.png",
    "solution": "- 故正確答案選 (C) 伊拉克。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故正確答案選 (C) 伊拉克。"
  },
  {
    "id": "q_math_circle_parallel_chords_distance_349",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "幾何/圓與弦心距／平行弦距離求法（同側相減 OM - ON = 3、異側相加 OM + ON = 21 經典雙解）與畢氏定理",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平行弦距離考題第一大陷阱：題目「沒給圖或沒限定方位」必定有雙解！】\n1. **考場最慘痛失分陷阱（只算一種情況）**：\n   - 很多同學算完同側得到 3，或者算完異側得到 21，就直接在選項中單選 (A) 或 (B)，慘遭扣分！\n   - 請死死記住：**「圓內兩平行弦」若題目沒有明確說明在圓心的同側或異側，必定要同時討論「同側」與「異側」兩種情況！**\n2. **直角三角形快速心算（3:4:5 放大三倍＝9, 12, 15）**：\n   - 圓心到弦的垂直線段（弦心距）必平分該弦：\n     - 弦 $AB = 18 \\implies$ 半弦長 $= 9$。半徑 $= 15$。由畢氏定理：弦心距 $OM = \\sqrt{15^2 - 9^2} = 12$。\n     - 弦 $CD = 24 \\implies$ 半弦長 $= 12$。半徑 $= 15$。由畢氏定理：弦心距 $ON = \\sqrt{15^2 - 12^2} = 9$。\n3. **兩弦距離雙解公式**：\n   - **同側時**：兩平行線距離等於兩弦心距之差：$$OM - ON = 12 - 9 = 3$$\n   - **異側時**：兩平行線距離等於兩弦心距之和：$$OM + ON = 12 + 9 = 21$$\n   - 故完整正解必為 **3 或 21**！",
    "stem": "圓 O 的半徑為 15，線段 AB、CD 為圓內兩平行弦，若 AB = 18，CD = 24，則兩弦的距離為何？\n\n○ (A) 3\n○ (B) 21\n○ (C) 3 或 21\n○ (D) 6 或 18",
    "answer": "(C) 3 或 21",
    "diagramUrl": "assets/questions/q_math_circle_parallel_chords_distance_349.png",
    "solution": "深度破題分析——兩步驟完整推導】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-04",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——兩步驟完整推導】： 故選 (C)。"
  },
  {
    "id": "q_math_circle_parallel_tangents_radius_348",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／平行切線梯形直徑 AD=2r、切線長性質（BC=AB+CD=5）與直角梯形畢氏定理求半徑 r=√6",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平行切線必出「直徑」與「直角梯形」！更有母子相似 3 秒暗黑秒殺公式！】\n1. **隱藏幾何條件（直徑確認）**：\n   - 因為 $AB \\parallel CD$，且兩線分別切圓於 $A, D$，半徑垂直切線（$OA \\perp AB$、$OD \\perp CD$）。\n   - 故 $A, O, D$ 三點共線，線段 $AD$ 即為圓 $O$ 的直徑，長度為 $2r$！\n2. **切線長等長轉移（斜邊長）**：\n   - 自 $B$ 引切線：$BE = AB = 3$。\n   - 自 $C$ 引切線：$CE = CD = 2$。\n   - 斜腰 $BC = BE + CE = 3 + 2 = 5$！\n3. **法一：作垂線直角三角形畢氏定理（正規破題）**：\n   - 自 $C$ 作垂線垂直 $AB$ 於 $H$，$AH = CD = 2$，$BH = AB - AH = 3 - 2 = 1$。\n   - 直角腰 $CH = AD = 2r$。\n   - 在 $\\triangle BHC$ 中：$(2r)^2 + 1^2 = 5^2 \\implies 4r^2 = 24 \\implies r^2 = 6 \\implies r = \\sqrt{6}$！\n4. **法二：母子相似暗黑秒殺公式（3 秒速算 ⚡）**：\n   - 連接 $OB, OC$，$OB$ 與 $OC$ 分別為兩同側內角之角平分線，故 $\\angle BOC = 90^\\circ$！\n   - 半徑 $OE \\perp BC$ 為斜邊上的高！\n   - 由直角三角形母子相似射影定理：\n     $$r^2 = OE^2 = BE \\times CE = 3 \\times 2 = 6 \\implies r = \\sqrt{6}$$！\n   - 看到平行切線夾切線，半徑平方直接等於兩平行切線長之積：$r^2 = AB \\times CD$！超級大招！",
    "stem": "如圖所示，線段 AB、BC、CD 分別與圓 O 相切於 A、E、D 三點，且 AB // CD。若 AB = 3，CD = 2，則圓 O 的半徑 r 為何？\n\n○ (A) 2\n○ (B) √5\n○ (C) √6\n○ (D) 3",
    "answer": "(C) √6",
    "diagramUrl": "assets/questions/q_math_circle_parallel_tangents_radius_348.png",
    "solution": "深度破題分析——法一：梯形輔助線畢氏定理（正規考場作法）】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-04",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——法一：梯形輔助線畢氏定理（正規考場作法）】： 故選 (C)。"
  },
  {
    "id": "q_math_circle_inscribed_trapezoid_de_347",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／切線長性質（四邊形內切圓）與平行相似三角形周長比求線段 DE",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【切線長轉移 + 相似形周長比是圓形切線與三角形組合題的黃金公式！】\n1. **第一步（求切線長 AN）**：\n   - 四邊形 $DBCE$ 內切圓 $O$，切點為 $M, N, P, Q$。\n   - 根據自圓外同一點向圓作切線段等長：\n     - $A$ 點向圓引切線段：$\\overline{AN} = \\overline{AQ} = x$。\n     - $B$ 點向圓引切線段：$\\overline{BP} = \\overline{BN} = y$。\n     - $C$ 點向圓引切線段：$\\overline{CP} = \\overline{CQ} = z$。\n   - $\\triangle ABC$ 周長 $= (x+y) + (y+z) + (x+z) = 2(x+y+z) = 16 \\implies x+y+z = 8$。\n   - 因為 $\\overline{BC} = y+z = 4$，所以 $\\overline{AN} = x = 8 - 4 = 4$！\n2. **第二步（切線長巧妙替換，求小三角形 △ADE 周長）**：\n   - 頂點 $D$ 向圓引切線：$\\overline{DM} = \\overline{DN}$；頂點 $E$ 向圓引切線：$\\overline{EM} = \\overline{EQ}$。\n   - 關鍵替換：$\\overline{DE} = \\overline{DM} + \\overline{ME} = \\overline{DN} + \\overline{EQ}$！\n   - $\\triangle ADE$ 周長 $= \\overline{AD} + \\overline{DE} + \\overline{AE} = \\overline{AD} + (\\overline{DN} + \\overline{EQ}) + \\overline{AE} = (\\overline{AD} + \\overline{DN}) + (\\overline{AE} + \\overline{EQ}) = \\overline{AN} + \\overline{AQ} = 4 + 4 = 8$！\n3. **第三步（平行相似形，對應邊比等於周長比）**：\n   - 因為 $\\overline{DE} \\parallel \\overline{BC}$，所以 $\\triangle ADE \\sim \\triangle ABC$（$AA$ 相似）。\n   - 對應邊比等於周長比：$\\overline{DE} : \\overline{BC} = \\triangle ADE \\text{ 周長} : \\triangle ABC \\text{ 周長} = 8 : 16 = 1 : 2$。\n   - $\\overline{DE} = \\frac{1}{2} \\overline{BC} = \\frac{1}{2} \\times 4 = 2$！",
    "stem": "如圖所示，在 △ABC 中，D、E 兩點分別在線段 AB、AC 上，DE // BC，若圓 O 內切於四邊形 DBCE，M、N、P、Q 為切點。若 △ABC 周長（AB + BC + CA）= 16，BC = 4，則線段 DE 之長為何？\n\n○ (A) 1\n○ (B) 2\n○ (C) 3\n○ (D) 4",
    "answer": "(B) 2",
    "diagramUrl": "assets/questions/q_math_circle_inscribed_trapezoid_de_347.png",
    "solution": "深度破題分析——三步驟完整推導】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-04",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——三步驟完整推導】： 故選 (B)。"
  },
  {
    "id": "q_math_circle_inscribed_tangents_cf_bd_346",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／三角形內切圓切線長性質（CF - BD = AC - AB = 9 - 7 = 2）與半周長速算",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【三角形內切圓切線長超狂「秒殺技巧」！】\n1. **標準解法（半周長 $s$ 綜合法）**：\n   - 切線長等長：$\\overline{AD}=\\overline{AF}=x$，$\\overline{BD}=\\overline{BE}=y$，$\\overline{CE}=\\overline{CF}=z$。\n   - 半周長 $s = \\frac{7 + 8 + 9}{2} = 12$。\n   - $\\overline{CF} = s - \\overline{AB} = 12 - 7 = 5$（半周長扣掉對邊 $c$）。\n   - $\\overline{BD} = s - \\overline{AC} = 12 - 9 = 3$（半周長扣掉對邊 $b$）。\n   - $\\overline{CF} - \\overline{BD} = 5 - 3 = 2$！\n2. **三秒必殺暗黑技巧（兩邊直接相減）**：\n   - 注意觀察：$\\overline{AC} = x + z$，$\\overline{AB} = x + y$！\n   - 兩邊相減：$\\overline{AC} - \\overline{AB} = (x + z) - (x + y) = z - y = \\overline{CF} - \\overline{BD}$！\n   - 答案直接就是：$\\overline{AC} - \\overline{AB} = 9 - 7 = 2$！連半周長都不用算！\n3. **題幹干擾條件排查**：\n   - 題目給的「圓 $O$ 半徑為 $\\sqrt{5}$」是算面積用的，求線段差完全用不到，千萬別被干擾！",
    "stem": "如圖所示，△ABC 的三邊分別切圓 O 於 D、E、F 三點。若線段 AB = 7，線段 BC = 8，線段 AC = 9，圓 O 的半徑為 √5，則線段 CF - 線段 BD 之值為何？\n\n○ (A) 1\n○ (B) 2\n○ (C) 3\n○ (D) 4",
    "answer": "(B) 2",
    "diagramUrl": "assets/questions/q_math_circle_inscribed_tangents_cf_bd_346.png",
    "solution": "深度破題分析——法一：切線長設未知數與半周長法（正規解法）】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-04",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——法一：切線長設未知數與半周長法（正規解法）】： 故選 (B)。"
  },
  {
    "id": "q_sci_chem_common_chemicals_identification_345",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/酸鹼鹽／常見六大酸鹼藥品特性全辨識（燒鹼潮解、冰醋酸凝固點16度、氨水遇HCl生成白煙、濃硝酸與銅生成紅棕色NO2、濃鹽酸極易溶酸霧、濃硫酸脫水碳化）",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【實驗室六大酸鹼魔王特徵秒殺口訣！】\n1. **甲（燒鹼 NaOH）**：白色固體，吸收水氣「潮解」，吸收 CO₂ 變質生成 Na₂CO₃！\n2. **乙（純醋酸 CH₃COOH）**：凝固點約 16.6℃，冰箱冷藏或冬天結冰，故稱「冰醋酸」！\n3. **丙（氨水 NH₃）**：臭味，遇到 HCl 氣體生成「白色氯化銨煙霧（NH₄Cl）」！\n4. **丁（濃硝酸 HNO₃）**：強氧化性，遇銅片產生【紅棕色 NO₂ 有毒氣體】（稀硝酸則生成無色 NO）！\n5. **戊（濃鹽酸 HCl）**：極易溶於水，開瓶冒白酸霧（氯化氫溶於空氣水滴）！\n6. **己（濃硫酸 H₂SO₄）**：強烈【脫水性】，搶奪方糖中的 H 與 O，使方糖黑化炭化！",
    "stem": "小明到實驗室準備藥品，他發現實驗桌上有六瓶藥品，標籤均已脫落。為了辨別藥品，他做了一些測試，下表為他測試的結果，藥品甲～藥品己應該分別標上何種藥品標籤？\n\n| 測試 | 產生現象 |\n|:---:|---|\n| 一 | 甲藥品為白色顆粒，置於空氣中會發生潮解而變質 |\n| 二 | 乙藥品置於冰箱一段時間，發現乙液體已經凝固 |\n| 三 | 丙藥品具臭味，遇到氯化氫氣體會產生白色微粒 |\n| 四 | 丁藥品投入銅片時，會產生紅棕色的氣體 |\n| 五 | 戊藥品會冒出刺鼻氣味的氣體，該氣體非常容易溶於水中 |\n| 六 | 己藥品滴在方糖上，會使方糖變黑 |\n\n○ (A) 燒鹼、純醋酸、氨水、濃硝酸、濃鹽酸、濃硫酸\n○ (B) 氫氧化鈉、濃鹽酸、石灰水、純醋酸、濃硝酸、濃硫酸\n○ (C) 氫氧化鈣、冰醋酸、氨水、濃硝酸、稀硝酸、濃硫酸\n○ (D) 氫氧化銨、純醋酸、石灰水、濃鹽酸、濃硫酸、濃硝酸",
    "answer": "(A) 燒鹼、純醋酸、氨水、濃硝酸、濃鹽酸、濃硫酸",
    "diagramUrl": "",
    "solution": "1. 【六大測試現象與藥品特徵逐一深度破解】： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-04",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【六大測試現象與藥品特徵逐一深度破解】： 故選 (A)。"
  },
  {
    "id": "q_math_circle_tangents_equilateral_radius_344",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／切線長性質（PA = PB）、正三角形邊角性質與 30°-60°-90° 直角三角形三角比求圓半徑",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【切線長＋正三角形求半徑秒殺心法！】\n1. **看清角度對稱性**：\n   - $\\triangle PAB$ 為正三角形 $\\implies \\angle APB = 60^\\circ$、切線長 $\\overline{PA} = \\overline{PB} = 6$。\n   - 連線 $\\overline{OP}$ 為角平分線 $\\implies \\angle APO = 30^\\circ$！\n2. **抓準 30°-60°-90° 的長股與短股**：\n   - 半徑垂直切線：$\\overline{OA} \\perp \\overline{PA} \\implies \\angle OAP = 90^\\circ$。\n   - $\\angle APO = 30^\\circ$ 的對邊是【半徑 $\\overline{OA}$（短股）】！\n   - 切線 $\\overline{PA} = 6$ 是【長股（對 $60^\\circ$）】！\n   - 短股與長股比為 $1 : \\sqrt{3}$：\n     $$r = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$$\n3. **常見致命陷阱**：\n   - ❌ 誤以為切線 6 是短股，算出 $6\\sqrt{3}$！\n   - ❌ 誤把弦 $\\overline{AB} = 6$ 當作直徑算出半徑 3！",
    "stem": "若圓 O 外一點 P 對圓作切線段 PA、PB，且 △PAB 為正三角形，線段 AB = 6，則此圓 O 的半徑為多少？\n\n○ (A) 2\n○ (B) 2√3\n○ (C) 3√3\n○ (D) 4√3",
    "answer": "(B) 2√3",
    "diagramUrl": "",
    "solution": "$ 為正三角形，且邊長 $\\overline{AB} = 6$： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "$ 為正三角形，且邊長 $\\overline{AB} = 6$： 故選 (B)。"
  },
  {
    "id": "q_math_circle_tangents_cm_segment_343",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／切線長性質、母子相似性質（射影定理 OA² = OM × OP）與切點弦垂直中分",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【圓的雙切線＋切點弦經典必背架構！】\n1. **看見切點必連半徑作垂直**：\n   - 連接 $\\overline{OA}$，必有 $\\overline{OA} \\perp \\overline{PA} \\implies \\angle OAP = 90^\\circ$！\n2. **中點條件秒抓半徑與斜邊**：\n   - $C$ 在圓上 $\\implies \\overline{OC} = r$（半徑）。\n   - $C$ 是 $\\overline{OP}$ 中點且 $\\overline{CP} = 3 \\implies \\overline{OC} = r = 3$，斜邊 $\\overline{OP} = 6$！\n3. **母子相似（射影定理）秒求 $\\overline{OM}$**：\n   - 圓的對稱性：$\\overline{OP} \\perp \\overline{AB}$ 於 $M$。\n   - 在直角 $\\triangle OAP$ 中：\n     $$\\overline{OA}^2 = \\overline{OM} \\times \\overline{OP} \\implies 3^2 = \\overline{OM} \\times 6 \\implies \\overline{OM} = \\frac{9}{6} = \\frac{3}{2}$$\n4. **最後一步求 $\\overline{CM}$**：\n   - $\\overline{CM} = \\overline{OC} - \\overline{OM} = 3 - \\frac{3}{2} = \\frac{3}{2}$（即 $M$ 恰為 $\\overline{OC}$ 中點）！",
    "stem": "如圖所示，直線 PA、直線 PB 為圓 O 的兩條切線，A、B 為切點，線段 OP 與圓 O 相交於 C 點，與線段 AB 相交於 M 點。若 C 為線段 OP 的中點，且線段 CP = 3，則線段 CM = ？\n\n○ (A) 1\n○ (B) 3/2\n○ (C) 2\n○ (D) 3√3 / 2",
    "answer": "(B) 3/2",
    "diagramUrl": "assets/questions/q_math_circle_tangents_cm_segment_343.png",
    "solution": "}$，由圓外一點引兩切線的對稱性（或鳶形 $OAPB$ 的對角線互相垂直）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "}$，由圓外一點引兩切線的對稱性（或鳶形 $OAPB$ 的對角線互相垂直）： 故選 (B)。"
  },
  {
    "id": "q_sci_phy_kinetic_energy_newton_law_time_342",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／動能求末速率（Ek = 1/2 mv²）與牛頓第二定律（F = ma）求運動時間",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【動能結合牛頓第二運動定律解題三部曲！】\n1. **解題標準 SOP**：\n   - ① **由動能求末速度**：$E_k = \\frac{1}{2}mv^2 \\implies 360 = \\frac{1}{2}(5)v^2 \\implies v^2 = 144 \\implies v = 12\\text{ m/s}$。\n   - ② **由牛二求加速度**：$F = ma \\implies 10 = 5a \\implies a = 2\\text{ m/s}^2$。\n   - ③ **由速度公式求時間**：$v = v_0 + at \\implies 12 = 0 + 2t \\implies t = 6\\text{ 秒}$！\n2. **常見計算粗心點**：\n   - ❌ 忘記開根號：算到 $v^2 = 144$ 就直接當成速度帶入！\n   - ❌ 漏除以 2：套公式忘了 $\\frac{1}{2}$，誤算 $v^2 = \\frac{360}{5} = 72$！",
    "stem": "質量 5 公斤的物體靜置在光滑的水平面上，受 10 牛頓水平推力，在第幾秒時物體之動能為 360 焦耳？\n\n○ (A) 第 5 秒\n○ (B) 第 6 秒\n○ (C) 第 7 秒\n○ (D) 第 8 秒",
    "answer": "(B) 第 6 秒",
    "diagramUrl": "",
    "solution": "深度破題分析——標準三步驟推導】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——標準三步驟推導】： 故選 (B)。"
  },
  {
    "id": "q_sci_phy_braking_friction_work_kinetic_energy_341",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／功能定理求煞車摩擦力作負功（時速 km/h 轉 m/s 與動能減少量 W = ΔEk = -6.75 × 10⁵ J）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【煞車作功兩大天王級致命陷阱！】\n1. **陷阱一：時速忘記換算成公尺/秒（m/s）！**\n   - 算能量（焦耳 J）必須用 MKS 國際標準制：公尺（m）、公斤（kg）、秒（s）！\n   - 時速換算口訣：【時速除以 3.6】 ➜ $108\\text{ km/h} \\div 3.6 = 30\\text{ m/s}$！\n   - ❌ 誤直接拿 108 代入計算，數字暴增百倍直接全錯！\n2. **陷阱二：忘記煞車是作「負功」！**\n   - 摩擦阻力方向與運動方向相反（夾角 $180^\\circ$），煞車是消耗動能，故作【負功】！\n   - $W = \\Delta E_k = E_{k\\text{末}} - E_{k\\text{初}} = 0 - \\frac{1}{2}mv^2 < 0$，答案必帶負號！",
    "stem": "想要使一輛時速 108 公里、質量為 1500 公斤，沿著直線行駛的小汽車停下來，請問煞車時摩擦力作功多少焦耳？\n\n○ (A) -6.75 × 10⁵\n○ (B) -8.25 × 10⁵\n○ (C) -4.50 × 10⁵\n○ (D) -2.15 × 10⁵",
    "answer": "(A) -6.75 × 10⁵",
    "diagramUrl": "",
    "solution": "深度破題分析——三步驟邏輯解題】： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——三步驟邏輯解題】： 故選 (A)。"
  },
  {
    "id": "q_sci_phy_work_energy_theorem_luggage_340",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／功能定理（合力作功等於動能增加量：W合力 = ΔEk）與摩擦力作負功",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【功能定理秒殺密碼：求動能增加量，直接算合力作功！】\n1. **核心金律：$W_{\\text{合力}} = \\Delta E_k$**：\n   - 物體動能增加多少？直接等於「所有外力的合力所作的功」！\n   - 推力 5 N，摩擦阻力 4 N ➜ 合力 $F_{\\text{合}} = 5 - 4 = 1\\text{ N}$。\n   - 合力作功 $W_{\\text{合力}} = 1\\text{ N} \\times 10\\text{ m} = 10\\text{ J}$ ➜ 動能增加 $10\\text{ J}$，三秒秒殺！\n2. **避開題幹多餘數據陷阱（別被 20 kg 帶偏）**：\n   - 質量 20 kg 不需要代入 $E_k = \\frac{1}{2}mv^2$ 苦算加速度與末速，直接功能定理最快！\n3. **常見混淆選項排查**：\n   - ❌ 誤算推力作功：$5 \\times 10 = 50\\text{ J}$。\n   - ❌ 誤算摩擦力作功：$4 \\times 10 = 40\\text{ J}$（轉化為熱能摩擦耗損）。",
    "stem": "小雄以 5 N 的水平力推質量為 20 kg 的行李箱，行李箱水平移動了 10 m，並具有動能，假設行李箱原來靜止，且在移動時它與水平地面間的摩擦力為 4 N，則在小雄推動行李箱 10 m 之後，行李箱的動能增加了多少？〔95.基測 II〕\n\n○ (A) 10 J\n○ (B) 20 J\n○ (C) 30 J\n○ (D) 40 J",
    "answer": "(A) 10 J",
    "diagramUrl": "",
    "solution": "深度破題分析——法一：功能定理（最快秒殺法）】： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——法一：功能定理（最快秒殺法）】： 故選 (A)。"
  },
  {
    "id": "q_sci_phy_kinetic_energy_scalar_direction_339",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／動能為純量（無方向性，僅取決於質量與速率大小，與運動方向無關）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【能量永遠沒有方向！別把動能當動量！】\n1. **動能是「純量」（Scalar）**：\n   - 能量只有大小，沒有方向！\n   - 只要【質量相同】＋【速率相同】 ➜ 動能必完全相等（$A = B$）！\n2. **會考天王級陷阱 (D) A + B = 0 避坑秘訣**：\n   - ❌ **誤以為向左向右會抵消？**\n   - ❗ **向量 vs. 純量大對決**：\n     - **速度 / 動量**：是向量（有方向性），向左向右相加可以互相抵消為 0。\n     - **動能**：是純量（無方向性，恆為正值 $E_k \\ge 0$），兩個運動物體的動能相加必大於 0，絕不可能抵消！",
    "stem": "如圖所示，光滑平面上有相同質量 A、B 兩物體，各自以相同速率往不同方向前進，請問兩物體的動能關係為何？\n\n○ (A) A > B\n○ (B) A = B\n○ (C) A < B\n○ (D) A + B = 0",
    "answer": "(B) A = B",
    "diagramUrl": "assets/questions/q_sci_phy_kinetic_energy_scalar_direction_339.png",
    "solution": "深度破題分析——動能為純量，僅與質量與速率大小有關】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——動能為純量，僅與質量與速率大小有關】： 故選 (B)。"
  },
  {
    "id": "q_sci_phy_kinetic_energy_definition_338",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／動能的定義、功能定理與決定變因（質量與速率）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【動能三大秒殺特徵！】\n1. **動能本質：因運動而具有的能量**：\n   - 靜止物體受外力作功 ➜ 跑起來具有末速率 ➜ 獲得「動能」！\n2. **決定變因兩大天王**：\n   - **質量 $m$**：動能與質量成正比（同速時，質量愈大動能愈大）。\n   - **末速率 $v$**：動能與速率的【平方】成正比（同質量時，車速 2 倍，動能變 4 倍）！\n3. **常見位能混淆排查**：\n   - 重力位能：取決於「高度位置」與質量（$U = mgh$）。\n   - 彈性位能：取決於彈簧「形變量」與彈性常數（$U = \\frac{1}{2}kx^2$）。",
    "stem": "施力對靜止物體作功，使其產生的運動變化，此數值大小與物體末速率及物體質量均有關。上述所描述的物理量為下列何者？\n\n○ (A) 動能\n○ (B) 重力位能\n○ (C) 彈性位能\n○ (D) 化學能",
    "answer": "(A) 動能",
    "diagramUrl": "",
    "solution": "深度破題分析——動能的本質與決定因素】： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——動能的本質與決定因素】： 故選 (A)。"
  },
  {
    "id": "q_eng_correlative_not_only_but_also_337",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/對等關聯連接詞 not only A but (also) B（also 可省略，但連接詞 but 絕不可省略）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【not only... but (also)... 超大盲點：誰能省？誰不能省？】\n1. **必備連接詞是 but，副詞 also 可省略**：\n   - 正確公式：not only A **but (also)** B\n   - ✔ **but 可以單獨存在**（省略 also）：not only save money **but** save resources...\n   - ❌ **also 不能單獨存在**（不可省略 but）：not only save money also save...（嚴重文法錯誤！）\n2. **會考常見陷阱 (B) also 避坑秘訣**：\n   - 口訣死背「not only... but also...」，看到選項有 also 就興奮選下去？\n   - 記住：**also 是副詞，沒有連接詞的功能！** 句子要連接兩個動詞片語，**一定要有對等連接詞 but**！",
    "stem": "These green buildings can not only save money ______ save the natural (自然的) resources on Earth.\n\n○ (A) but\n○ (B) also\n○ (C) and\n○ (D) to",
    "answer": "(A) but",
    "diagramUrl": "",
    "solution": "but (also) B 之省略規則與詞性功能 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "but (also) B 之省略規則與詞性功能 故選 (A)。"
  },
  {
    "id": "q_eng_either_or_gerund_subject_is_fun_336",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/對等連接詞 Either A or B 就近原則＋動名詞片語作主詞視為單數＋事物當主詞使用 be fun 結構",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【Either A or B 與 fun 的兩大秒殺陷阱！】\n1. **陷阱一：看到 movies 就選 are？**\n   - 主詞核心是「動名詞片語 watching online movies（看電影這件事）」！\n   - 動名詞片語當主詞，不管受詞是單數還是複數，一律視為【單數】！\n2. **陷阱二：看到 fun 就選 has / have？**\n   - 「人」當主詞 ➜ 人 have/has fun（玩得很開心）\n   - 「事物/活動」當主詞 ➜ 事物 is fun（某件事很有趣、很好玩）！\n   - 本題主詞是活動（看漫畫/看電影），必須用 be 動詞 is！",
    "stem": "Either reading comic books or watching online movies ______ a lot of fun.\n\n○ (A) is\n○ (B) are\n○ (C) has\n○ (D) have",
    "answer": "(A) is",
    "diagramUrl": "",
    "solution": "or B 就近原則、動名詞主詞單數概念與 be fun 句型 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "or B 就近原則、動名詞主詞單數概念與 be fun 句型 故選 (A)。"
  },
  {
    "id": "q_eng_parallel_passive_active_fell_335",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/對等連接詞 and 連接被動與主動過去式動詞（were blown away and fell ...）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【被動態與主動不及物動詞對等秒殺訣！】\n1. **看清動詞主被動與及物性**：\n   - Some shirts [were blown away] and [fell in the pond].\n   - 第一個動作：襯衫被風吹走（被動態 were blown）。\n   - 第二個動作：掉落到池塘裡（fall 為不及物動詞，無被動態，使用主動過去式 fell）！\n2. **會考常見陷阱 (D) and fallen 避坑秘訣**：\n   - ❌ **誤以為跟 blown 對稱 p.p.**：看到 were blown 就選 and fallen？動詞 fall 是不及物動詞，絕不能寫成 were fallen！掉落是過去發生的事實，直接用過去式 fell！\n   - ❌ **誤選 (A) fell**：兩個動詞片語並列，絕對不能漏掉對等連接詞 and！",
    "stem": "It was very windy this morning. Some of the shirts on the balcony were blown away ______ in the pond.\n\n○ (A) fell\n○ (B) and fell\n○ (C) fallen\n○ (D) and fallen",
    "answer": "(B) and fell",
    "diagramUrl": "",
    "solution": "深度破題分析——were blown away and fell】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——were blown away and fell】： 故選 (B)。"
  },
  {
    "id": "q_eng_verb_sensory_parallel_complement_get_drive_334",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/感官動詞受詞補語之對等結構（saw + O + VR1 and VR2 平行對稱）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【感官動詞對等補語秒殺口訣！】\n1. **看清動作的主人是誰**：\n   - David looked out and saw a woman [get in his car and ______ away].\n   - 開車開走的人是「那個女人 (a woman)」，不是 David！\n2. **感官動詞受詞補語平行原則**：\n   - saw + 受詞 (woman) + 原形動詞補語1 (get in) and 原形動詞補語2 (drive)！\n3. **大陷阱避坑**：\n   - ❌ **誤選 (D) and drove**：看到前面 looked、saw 就誤選過去式？開車的是女人，動作與 get 平行，必須用原形動詞！\n   - ❌ **誤選 (A) drive**：英文不能無連接詞連續擺放兩個動詞，必須有 and 串接！",
    "stem": "David looked out of the balcony window and saw a woman get in his car ______ away.\n\n○ (A) drive\n○ (B) drove\n○ (C) and drive\n○ (D) and drove",
    "answer": "(C) and drive",
    "diagramUrl": "",
    "solution": "深度破題分析——saw + O + VR1 and VR2】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——saw + O + VR1 and VR2】： 故選 (C)。"
  },
  {
    "id": "q_eng_inf_parallel_plan_visit_333",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/對等連接詞 and 連接對等不定詞（plan to make ... and (to) visit ... 省略 to 之平行對稱結構）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【對等連接詞 and 的前後平行對稱陷阱！】\n1. **看見 and 必找「對稱的兩端」**：\n   - 題目：Josh has planned [to make ... and (to) ______ ...]\n   - plan to + V1 and (to) V2 ➜ 第二個 to 習慣省略，後面必須保持「原形動詞 (VR)」！\n2. **會考常見陷阱 (D) visited 避坑秘訣**：\n   - ❌ **誤以為連接完成式**：看到 has planned 就順手選 visited？\n   - ❗ **看語意邏輯**：Josh 正在「計畫」去紐約，朋友還沒拜訪，拜訪朋友是**計畫中的行程**，與 make 平行，絕不是已經拜訪完畢！",
    "stem": "Josh has planned to make a trip to New York and ______ some of his friends there. 【109年會考】\n\n○ (A) visit\n○ (B) visits\n○ (C) visiting\n○ (D) visited",
    "answer": "(A) visit",
    "diagramUrl": "",
    "solution": "深度破題分析——plan to + V 複合對等結構】： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-03",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度破題分析——plan to + V 複合對等結構】： 故選 (A)。"
  },
  {
    "id": "q_math_circle_tangent_segment_pythagoras_332",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "圓與切線／切線垂直於通過切點的半徑（OQ ⊥ PQ）與畢氏定理求切線段長（PQ = √(OP² - OQ²) = √(5² - 3²) = 4）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【圓的切線問題第一直覺：連半徑、做垂直！】\n1. **看見切線與切點 $Q$，輔助線必連 $\\overline{OQ}$**：\n   - 圓心到切點的連線必垂直於切線：\n     $$\\overline{OQ} \\perp \\overline{PQ} \\implies \\angle OQP = 90^\\circ$$\n   - 構成以 $\\overline{OP}$ 為**斜邊**的直角三角形 $\\triangle OPQ$！\n2. **三步秒殺密碼（經典 3-4-5 直角三角形）**：\n   - ① **求斜邊 $\\overline{OP}$**：圓心 $O(0, 0)$ 到圓外點 $P(4, 3)$ 的距離：\n     $$\\overline{OP} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5$$\n   - ② **求半徑股 $\\overline{OQ}$**：題目已知半徑為 $3$ ➜ $\\overline{OQ} = 3$。\n   - ③ **求切線段股 $\\overline{PQ}$**：利用畢氏定理：\n     $$\\overline{PQ} = \\sqrt{\\overline{OP}^2 - \\overline{OQ}^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$$\n3. **常見失分陷阱**：\n   - ❌ **誤將 $\\overline{PQ}$ 當作斜邊**：誤算為 $\\sqrt{5^2 + 3^2} = \\sqrt{34}$！切記：**直角出現在切點 $Q$ 處，$\\overline{OP}$ 才是對著直角的斜邊**！",
    "stem": "在座標平面上，以原點 O 為圓心，半徑為 3 畫圓，若 P(4, 3) 為圓外一點，直線 L 通過 P 點，且為圓 O 的切線，Q 為切點，則線段 PQ = ？\n\n○ (A) 3\n○ (B) 4\n○ (C) 5\n○ (D) √34",
    "answer": "(B) 4",
    "diagramUrl": "assets/questions/q_math_circle_tangent_segment_pythagoras_332.png",
    "solution": "故本題正確答案為 (B) 4。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 4。"
  },
  {
    "id": "q_phy_lifting_gas_tanks_work_average_power_331",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "功與功率／多物體搬運總作功與平均功率計算：重力單位換算（20 kgw = 200 N）、時間單位換算（20 分鐘 = 1200 秒）、P = W/t = 2.5 瓦特",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【三大單位換算陷阱！分 ➜ 秒、kgw ➜ N、漏乘總桶數！】\n1. **功率的標準國際單位是「瓦特 (W) = 焦耳／秒 (J/s)」**：\n   - 時間是 **20 分鐘** ➜ ⚠️ **絕對不能直接帶入 20！必須換成「秒」**：\n     $$t = 20 \\times 60 = 1200 \\text{ 秒}$$\n   - ❌ **直接拿 20 當分母**：會算出 $150$ 瓦特（大陷阱 (C)）！\n2. **力的單位要換成「牛頓 (N)」**：\n   - 每桶重 $20 \\text{ 公斤重 (kgw)}$，已知重力加速度 $g = 10 \\text{ m/s}^2$：\n     $$F_{\\text{每桶}} = 20 \\times 10 = 200 \\text{ 牛頓 (N)}$$\n3. **總桶數要乘進去（共 15 桶）**：\n   - 搬運一桶作功：$W_1 = 200 \\times 1 = 200 \\text{ 焦耳}$。\n   - 搬運 15 桶總作功：$W_{\\text{總}} = 200 \\times 15 = 3000 \\text{ 焦耳}$。\n4. **平均功率秒算**：\n   $$P = \\frac{W_{\\text{總}}}{t} = \\frac{3000 \\text{ 焦耳}}{1200 \\text{ 秒}} = \\frac{30}{12} = 2.5 \\text{ 瓦特 (W)}$$！",
    "stem": "搬運工將 15 桶瓦斯桶從地面搬運至高度 1 公尺的小貨車上；已知每一桶瓦斯桶的重量皆為 20 公斤重，且搬運工一共花了 20 分鐘才完成他的工作。則這 20 分鐘之內，搬運工對所有瓦斯桶作功的平均功率為多少瓦特？（重力加速度 g = 10 公尺／秒²）\n\n○ (A) 2.5\n○ (B) 10\n○ (C) 150\n○ (D) 600",
    "answer": "(A) 2.5",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) 2.5。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 2.5。"
  },
  {
    "id": "q_phy_constant_force_power_work_330",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "功與功率／牛頓運動定律與平均功率計算：F-t 圖定力 4N、質量 2kg ➜ 加速度 a=2m/s²、位移 S=25m、功率 P=W/t=20 瓦特（或 P=F×v̄ 秒殺）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【求「功率」不要只算到「功」！兩種解題思路秒殺！】\n1. **看清題目問的是「功率（單位時間作功）」還是「作功」**：\n   - 題目問：**「0～5 秒內，此作用力對該物體作功的『功率』為多少？」**\n   - 功率定義式：\n     $$P = \\frac{W}{t} = \\frac{F \\times S}{t}$$\n   - ⚠️ 功率單位是**瓦特（W）**或**焦耳／秒（J/s）**，算出總功 100 焦耳後，**務必記得除以時間 5 秒**得到 20 瓦特！\n2. **解法一（三步標準解）：$F \\implies a \\implies S \\implies P$**：\n   - ① 讀圖得水平定力 $F = 4 \\text{ N}$。\n   - ② 求加速度：$a = \\frac{F}{m} = \\frac{4}{2} = 2 \\text{ m/s}^2$。\n   - ③ 求 5 秒位移：$S = \\frac{1}{2} a t^2 = \\frac{1}{2} \\times 2 \\times 5^2 = 25 \\text{ 公尺}$。\n   - ④ 求總功與功率：$W = 4 \\times 25 = 100 \\text{ J} \\implies P = \\frac{100}{5} = 20 \\text{ W}$！\n3. **解法二（秒殺金律）：$P = F \\times \\bar{v}$（定力乘平均速度）**：\n   - 靜止開始等加速，$5$ 秒末速 $v = a t = 2 \\times 5 = 10 \\text{ m/s}$。\n   - 平均速度 $\\bar{v} = \\frac{0 + 10}{2} = 5 \\text{ m/s}$。\n   - 平均功率 $P = F \\times \\bar{v} = 4 \\times 5 = 20 \\text{ W}$！（兩秒口算直接得解）",
    "stem": "質量 2 公斤的物體靜置於光滑的水平桌面上，仰偉施水平方向的作用力 F 於該物體，其 F 與時間（t）關係如附圖所示，則 0～5 秒內，此作用力對該物體作功的功率為多少？\n\n○ (A) 20\n○ (B) 15\n○ (C) 10\n○ (D) 0.8",
    "answer": "(A) 20",
    "diagramUrl": "assets/questions/q_phy_constant_force_power_work_330.png",
    "solution": "故本題正確答案為 (A) 20。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 20。"
  },
  {
    "id": "q_phy_constant_force_kinematics_work_energy_329",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "運動學與功／牛頓第二運動定律 F=ma、等加速度運動位移 S=1/2at² 與功 W=FS 或功能定理（末速度 15m/s、時間 3s ➜ 位移 22.5m 而非 45m）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【位移絕不能直接用「末速度 × 時間」！等加速度運動位移要除以 2！】\n1. **致命粗心點（(C) 為何是 22.5 公尺不是 45 公尺？）**：\n   - ❌ **直接拿末速相乘**：$S = 15 \\times 3 = 45$ 公尺 ➜ **完全把加速度運動當成等速運動了！**\n   - ⚡ **正確算法（v-t 圖三角形面積）**：\n     $$S = \\frac{1}{2} \\times \\text{底} \\times \\text{高} = \\frac{1}{2} \\times 3 \\times 15 = 22.5 \\text{ 公尺}$$\n     或用公式 $S = \\frac{1}{2} a t^2 = \\frac{1}{2} \\times 5 \\times 3^2 = 22.5 \\text{ 公尺}$！\n2. **四步驟完整串聯鏈（會考高頻連環考點）**：\n   - ① **算加速度 $a$**：$a = \\frac{v - v_0}{t} = \\frac{15 - 0}{3} = 5 \\text{ m/s}^2$（水平定力 ➜ 等加速度運動，(A) 正確）。\n   - ② **算質量 $m$**：$F = m \\times a \\implies 10 = m \\times 5 \\implies m = 2 \\text{ kg}$（(B) 正確）。\n   - ③ **算位移 $S$**：$S = 22.5 \\text{ m}$（(C) 寫 45 公尺，故 **(C) 錯誤**）。\n   - ④ **算作功 $W$**：$W = F \\times S = 10 \\times 22.5 = 225 \\text{ J}$（或用動能定理 $\\Delta E_k = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 2 \\times 15^2 = 225 \\text{ J}$，雙重驗證 (D) 正確）！",
    "stem": "一靜置於無摩擦水平面上的物體，當它受到 10 牛頓的水平定力作用 3 秒鐘後，物體的末速度為 15 公尺／秒，則下列敘述何者錯誤？\n\n○ (A) 物體做等加速度運動\n○ (B) 物體的質量為 2 公斤\n○ (C) 物體前進 45 公尺\n○ (D) 力對物體所作的功為 225 焦耳",
    "answer": "(C) 物體前進 45 公尺",
    "diagramUrl": "",
    "solution": "分析：位移大小計算（錯誤所在！）】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "分析：位移大小計算（錯誤所在！）】： 故選 (C)。"
  },
  {
    "id": "q_phy_work_cases_not_done_carrying_lifting_328",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "功與能／四種事例「並未作功」辨析：（甲）水平等速提書包（F⊥S 不作功）、（乙）手舉重物至頭頂（有作功）、（丙）推牆壁（S=0 不作功）、（丁）鎚鐵釘（有作功）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【看清題目問的是「並未作功」還是「有作功」！別搞混 (乙) 舉重物的過程！】\n1. **看清題意「未作功」 vs 「有作功」**：\n   - 題目問：**「何者對物體『並未作功』？」** ➜ 要找出 $W = 0$ 的選項！\n2. **逐一掃描四件事例**：\n   - **(甲) 手提書包水平等速度走到校門口**：\n     - 手提力向**上**，位移向**前**，兩者**互相垂直**（$F \\perp S$） ➜ **【未作功】**（$W = 0$）。\n   - **(乙) 在原地手舉重物至頭頂**（⚠️ **高頻失分陷阱！**）：\n     - 雖然寫「在原地」，但動作是**「舉重物至頭頂」**！\n     - 手施力向**上**，重物被抬高向**上**移動一段距離（$S > 0$），力與位移同向 ➜ **【有作功】**（$W > 0$）！\n     - ❌ **易錯誤區**：看到「在原地」就以為位移是 0，忽略了重物被「往上舉高」的鉛直位移！\n   - **(丙) 手推牆壁**：\n     - 牆壁未移動，位移為零（$S = 0$） ➜ **【未作功】**（$W = 0$）。\n   - **(丁) 手持鐵鎚釘鐵釘入木頭內**：\n     - 施力向下，鐵釘深入木頭位移向下，兩者同向 ➜ **【有作功】**（$W > 0$）。\n3. **結論秒殺**：\n   - 並未作功的只有 **(甲)、(丙)**！",
    "stem": "下列四種事例中，何者對物體並未作功？(甲)手提書包水平等速度走到校門口；(乙)在原地手舉重物至頭頂；(丙)手推牆壁；(丁)手持鐵鎚釘鐵釘入木頭內。\n\n○ (A) 僅(甲)(丙)\n○ (B) 僅(甲)(乙)\n○ (C) 僅(甲)(乙)(丙)\n○ (D) (甲)(乙)(丙)(丁)",
    "answer": "(A) 僅(甲)(丙)",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) 僅(甲)(丙)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 僅(甲)(丙)。"
  },
  {
    "id": "q_phy_work_round_trip_push_force_scalar_327",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "功與能／來回一趟的外力作功計算：去程回程推力與位移皆同向（作功為純量，分段相加 W = W₁ + W₂ = 50 + 50 = 100 焦耳）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「來回一趟」外力作功絕不是 0！功是純量分段累加！】\n1. **致命直覺陷阱（誤選 0 的原因）**：\n   - ❌ **錯誤思考**：「回到原處總位移為 0，所以 $W = F \\times S = 0$？」➜ **大錯特錯！**\n   - 這是推力，不是保守力！小芬在去程是「向前推、物體向前移」；回程是「向後推、物體向後移」！\n2. **分段檢視「推力方向」與「位移方向」**：\n   - **去程**：小芬施力向前（5 N），位移向前（10 m），兩者**同向** ➜ 作**正功**：\n     $$W_1 = 5 \\times 10 = +50 \\text{ 焦耳}$$\n   - **回程**：小芬改為施力向後（5 N），位移也向後（10 m），兩者依然**同向** ➜ 依然作**正功**：\n     $$W_2 = 5 \\times 10 = +50 \\text{ 焦耳}$$\n   - **總作功**：功是純量，直接相加：\n     $$W_{\\text{總}} = W_1 + W_2 = 50 + 50 = 100 \\text{ 焦耳}$$\n3. **什麼時候來回一趟作功才是 0？**：\n   - 只有「重力」等保守力在水平面封閉路徑，或是原地不動無摩擦力做功，或是單一固定方向的外力在來回時一正一負抵消（例如去程受外力向前、回程外力仍向前拉物體向後走）。\n   - 但本題小芬是「主動將物體推回原地」，推力必定轉向！因此去程與回程皆作正功！",
    "stem": "小芬沿水平方向用 5 牛頓的力量，推動 2 牛頓重的物體前進 10 公尺後，再施以同樣大小的力沿原路徑將物體推回原地，則來回一趟，小芬對物體共作功多少焦耳？\n\n○ (A) 0\n○ (B) 20\n○ (C) 50\n○ (D) 100",
    "answer": "(D) 100",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (D) 100。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (D) 100。"
  },
  {
    "id": "q_phy_work_definition_conditions_hammer_nail_326",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "功與能／物理學上「作功」的充要條件辨析（W = F × S：受力、產生位移、力與位移不垂直）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【物理學「作功」三條件與三大不作功陷阱！】\n1. **物理作功的充要條件（缺一不可！）**：\n   - ① **物體必須受力**（$F \\neq 0$）。\n   - ② **物體必須沿力的方向有位移**（$S \\neq 0$）。\n   - ③ **力與位移不能互相垂直**（$\\cos 90^\\circ = 0$ 則 $W = 0$）。\n2. **國中會考必考「三種不作功」生活情境對照表**：\n   - ❌ **有位移但不受力（$F = 0$）**：冰壺等速滑行、太空中漂流 ➜ 不作功！\n   - ❌ **有受力但無位移（$S = 0$）**：推牆壁推不動、手抱小孩原地站立、舉啞鈴停在空中 ➜ 徒勞無功（$W = 0$）！\n   - ❌ **有受力且有位移，但「力與位移垂直」（$F \\perp S$）**：手提書包等速水平行走（手出力向上，位移向前）、單擺繩子張力、向心力 ➜ 不作功（$W = 0$）！\n3. **本題唯一有作功的情境**：\n   - ⚡ **(A) 鐵鎚將釘子鎚入木板**：鐵鎚施力向下，釘子位移向下，$F$ 與 $S$ 同向平行，鐵鎚對釘子作正功（$W > 0$）！",
    "stem": "下列狀況中，何者有作功？\n\n○ (A) 以鐵鎚將釘子鎚入木板\n○ (B) 手推牆壁\n○ (C) 手抱小孩在原地站著\n○ (D) 手提書包等速在水平面上行走",
    "answer": "(A) 以鐵鎚將釘子鎚入木板",
    "diagramUrl": "",
    "solution": "以鐵鎚將釘子鎚入木板（正確，有作功！）： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "以鐵鎚將釘子鎚入木板（正確，有作功！）： 故選 (A)。"
  },
  {
    "id": "q_phy_gravity_work_upward_external_force_325",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "功與能／地球引力作功之正負號與受力主體辨析（W = F × S × cosθ，重力向下位移向上作負功）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【看清題目到底問「哪一個力」在作功！】\n1. **受力主體絕對不要張冠李戴！**：\n   - 題幹給了「向上外力 10 牛頓」，但最後問的是：**「此時『地球引力』對物體作功多少焦耳？」**\n   - ❌ **致命粗心**：誤看成向上外力作功（$10 \\times 10 = 100$ 焦耳）或誤選 100 / -100。\n   - ⚡ **抓準目標力**：只看「地球引力（重力）」的大小與方向！\n2. **功的正負號判定金律**：\n   - 力與位移**同向** ➜ 作**正功**（$> 0$）\n   - 力與位移**垂直** ➜ **不作功**（$= 0$）\n   - 力與位移**反向** ➜ 作**負功**（$< 0$）！\n   - 本題物體**向上**上升 10 公尺，而地球引力永遠**向下**拉，兩者方向相反 ➜ 必定為**負功（負號必備）**！\n3. **數值計算**：\n   - 物重 $= 1 \\text{ kgw} = 9.8 \\text{ 牛頓}$（向下）。\n   - 位移 $= 10 \\text{ 公尺}$（向上）。\n   - 重力作功 $W = - (9.8 \\times 10) = -98 \\text{ 焦耳}$！",
    "stem": "一重量為 1 kgw 之物體受一 10 牛頓向上外力作用上升 10 公尺，此時地球引力對物體作功多少焦耳？（1 kgw = 9.8 牛頓）\n\n○ (A) 100\n○ (B) 98\n○ (C) -98\n○ (D) -100",
    "answer": "(C) -98",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (C) -98。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) -98。"
  },
  {
    "id": "q_math_golden_ratio_high_heels_height_324",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "比例與一元一次方程式／黃金比例的身材應用：穿高跟鞋增加下半身與總身高求鞋高（(104+x)/(172+x) = 0.618 或 (104+x)/68 = 1.618）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【穿高跟鞋求黃金身材秒殺關鍵！】\n1. **穿高跟鞋時，什麼變了？什麼沒變？**：\n   - **沒變**：上半身的身長保持不變！\n     $$\\text{上半身} = 172 - 104 = 68 \\text{ 公分}$$\n   - **變了**：下半身增加 $x$ 公分（變成 $104 + x$），總身高也增加 $x$ 公分（變成 $172 + x$）！\n2. **兩種黃金比例列式（依題幹定義無縫互通）**：\n   - **方式一（下半身比上半身 = 1.618）⚡ 最快解法，分母是常數！**：\n     $$\\frac{104 + x}{68} = 1.618$$\n     $$104 + x = 68 \\times 1.618 = 110.024$$\n     $$x = 110.024 - 104 = 6.024 \\approx 6 \\text{ 公分}$$\n   - **方式二（下半身比總身高 = 0.618）**：\n     $$\\frac{104 + x}{172 + x} = 0.618$$\n     $$104 + x = 0.618(172 + x) = 106.296 + 0.618x$$\n     $$0.382x = 2.296 \\implies x = \\frac{2.296}{0.382} \\approx 6.01 \\approx 6 \\text{ 公分}$$\n3. **防呆判定**：\n   - 原本比例：$\\frac{104}{68} \\approx 1.529 < 1.618$（或 $\\frac{104}{172} \\approx 0.605 < 0.618$），故小美原本**不是**黃金比例。\n   - 穿上約 **6 公分** 的高跟鞋即可達到最美麗的黃金比例！",
    "stem": "如圖，已知小美的身高為 172 公分，下半身長為 104 公分。請判斷小美的身材比例是否為黃金比例？若不是，她可以穿多少公分高的高跟鞋來達成黃金比例？（以四捨五入法取到整數位）\n\n○ (A) 是黃金比例；不需穿高跟鞋\n○ (B) 不是黃金比例；穿 4 公分高跟鞋\n○ (C) 不是黃金比例；穿 6 公分高跟鞋\n○ (D) 不是黃金比例；穿 8 公分高跟鞋",
    "answer": "(C) 不是黃金比例；穿 6 公分高跟鞋",
    "diagramUrl": "",
    "solution": "不是黃金比例；穿 6 公分高跟鞋。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "不是黃金比例；穿 6 公分高跟鞋。 故選 (C)。"
  },
  {
    "id": "q_math_golden_ratio_value_definition_323",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "比例與一元二次方程式／黃金分割比的定義與比值：AB : AC = AC : BC 之比值（(1 + √5)/2 ≈ 1.618）",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【黃金分割比值 0.618 vs 1.618 致命陷阱！】\n1. **看清題目給的比例式方向（大比小 還是 小比大？）**：\n   - 題幹明確定義：$\\overline{AB} : \\overline{AC} = \\overline{AC} : \\overline{BC}$\n   - 且後文補充：「下半身長除以上半身長的比值恰為黃金分割的比例，且人體頭頂到肚臍為上半身，肚臍到腳底為下半身」➜ 正常身材人體下半身長於上半身，故比值必大於 1！\n   - 觀察線段圖：全段 $\\overline{AB}$ > 長段 $\\overline{AC}$ > 短段 $\\overline{BC}$，因此 $\\overline{AB} : \\overline{AC}$ 是「全段比長段（大比中）」或「長段比短段（中比小）」，比值必定 **大於 1**！\n2. **列式計算推導**：\n   - 令短段 $\\overline{BC} = 1$，長段 $\\overline{AC} = x$（$x > 0$），則全段 $\\overline{AB} = x + 1$。\n   - 依題意：$(x + 1) : x = x : 1 \\implies x^2 = x + 1 \\implies x^2 - x - 1 = 0$。\n   - 解一元二次方程式：$x = \\frac{1 + \\sqrt{5}}{2}$（負不合）。\n   - 代入近似值 $\\sqrt{5} \\approx 2.236$：\n     $$x = \\frac{1 + 2.236}{2} = \\frac{3.236}{2} = 1.618$$\n3. **常見失分盲點**：\n   - ❌ 誤填 **0.618**：0.618 是短段比長段 $\\frac{\\sqrt{5}-1}{2}$（小於 1），但本題定義為 $\\overline{AB} : \\overline{AC} = \\overline{AC} : \\overline{BC}$，是長比短，故為 **1.618**！",
    "stem": "如圖，在線段 AB 上取一點 C，線段 AB、線段 AC、線段 BC 三線段的長度滿足線段 AB : 線段 AC = 線段 AC : 線段 BC 的關係，我們稱這樣的比為黃金分割比，是最美麗的比例。一般我們形容擁有黃金比例的身材，指的是下半身長除以上半身長的比值恰為黃金分割的比例，且定義人體的頭頂到肚臍為上半身，肚臍到腳底為下半身。請回答下列問題：\n\n求黃金分割比的比值為何？（$\\sqrt{2} = 1.414$，$\\sqrt{3} = 1.732$，$\\sqrt{5} = 2.236$）\n\n○ (A) 0.618\n○ (B) 1.414\n○ (C) 1.618\n○ (D) 2.236",
    "answer": "(C) 1.618",
    "diagramUrl": "",
    "solution": "$，$C$ 位於 $A$ 與 $B$ 之間，故： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "$，$C$ 位於 $A$ 與 $B$ 之間，故： 故選 (C)。"
  },
  {
    "id": "q_math_sum_product_difference_squared_322",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "乘法公式／兩數之和與乘積求兩數之差的平方：(a - b)² = (a + b)² - 4ab 恆等式秒殺",
    "uploadDate": "2026-11-02",
    "mondayDate": "2026-11-02",
    "mondayDates": [
      "2026-11-02"
    ],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【乘法公式萬用變形秒殺心法！】\n1. **看清題目問的是什麼！**：\n   - 題目問的是「兩數之差的平方 $(a - b)^2$」，**不是**要你把大數、小數個別解出來！\n   - ❌ **慢速硬算（繞遠路又容易算錯）**：列出一元二次方程式 $a(3-a)=1 \\implies a^2 - 3a + 1 = 0$，用公式解 $a = \\frac{3 \\pm \\sqrt{5}}{2}$，再代入算兩數相減的平方。\n   - ⚡ **秒殺解法（乘法公式變形）**：直接利用恆等式：\n     $$(a - b)^2 = (a + b)^2 - 4ab$$\n2. **三秒心算**：\n   - 已知 $a + b = 3$，$ab = 1$：\n     $$(a - b)^2 = 3^2 - 4(1) = 9 - 4 = 5$$\n3. **黃金對照表（必背乘法公式延伸型）**：\n   - $a^2 + b^2 = (a + b)^2 - 2ab$\n   - $(a - b)^2 = (a + b)^2 - 4ab$\n   - $(a + b)^2 = (a - b)^2 + 4ab$",
    "stem": "已知大、小兩數的和為 3，且兩數乘積為 1，求兩數之差的平方為多少？\n\n○ (A) 3\n○ (B) 4\n○ (C) 5\n○ (D) 9",
    "answer": "(C) 5",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (C) 5。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-02",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) 5。"
  },
  {
    "id": "q_phy_steelyard_fraud_weight_scale_321",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/槓桿平衡與桿秤原理／桿秤歸零校正（空秤盤質量）、偷換輕秤砣（偷斤減兩）之真實質量推導",
    "uploadDate": "2026-11-01",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【桿秤偷斤減兩秒殺黃金三部曲！】\n1. **首要任務：先求空秤盤質量！**：\n   - 零刻度點 $A$ 不在支點 $O$，代表「空秤盤本身有重量」！\n   - 標準砣重 1.0 kg 掛在 $A$ 點（$OA = 3$ cm），秤盤在 $B$ 點（$OB = 9$ cm）：\n     $$\\text{秤盤} \\times 9 = 1.0 \\times 3 \\implies \\text{秤盤} = \\frac{1}{3} \\text{ kg}$$\n2. **刻度位置本質是「標準砣平衡時的力臂距離」**：\n   - 讀數 3.0 kg 刻度處的力臂位置 $d$：\n     $$(3.0 + \\frac{1}{3}) \\times 9 = 1.0 \\times d \\implies d = 30 \\text{ cm}$$\n   - 即 3.0 kg 刻度線位於支點 $O$ 右側 30 cm 處！\n3. **黑心商販換輕秤砣（0.7 kg）秤物，物體實際質量必變輕**：\n   - 輕砣掛在 30 cm 處 ➜ 提供力矩 $= 0.7 \\times 30 = 21$。\n   - 逆推左側總重：$(W + \\frac{1}{3}) \\times 9 = 21 \\implies W + \\frac{1}{3} = \\frac{7}{3} \\implies W = 2.0 \\text{ kg}$！\n4. **直觀防呆口訣**：\n   - 秤砣變輕（1.0 ➜ 0.7） ➜ 秤砣要移到更遠的刻度才能平衡 ➜ 讀數虛胖（報 3.0 kg），物體實重必定更少（只有 2.0 kg）！",
    "stem": "在菜市場內個別商販違反公平交易的原則，在使用桿秤時，用不正當的方式侵害了消費者的合法權益，例：某標準桿秤的秤砣質量為 1.0 kg，桿秤的質量可忽略不計，O 點為提紐懸點，A 點為零刻度點，在 $\\overline{OA} = 3$ cm，$\\overline{OB} = 9$ cm 時，可與空秤盤達水平平衡，如附圖所示。如今商販使用桿秤秤某物品時，換了一個實際質量為 0.7 kg 的秤砣來假冒 1.0 kg 的秤砣，讀取桿秤刻度為 3.0 kg，試問物品實際質量為多少 kg？（提示：先找出秤盤的質量）\n\n○ (A) 1.8 kg\n○ (B) 2.0 kg\n○ (C) 2.1 kg\n○ (D) 2.2 kg",
    "answer": "(B) 2.0 kg",
    "diagramUrl": "assets/questions/q_phy_steelyard_fraud_weight_scale_321.png",
    "solution": "} = 9$ cm），右側 $A$ 點為零刻度（力臂 $\\overline{OA} = 3$ cm）。 故選 (B)。",
    "videoUrl": "https://www.youtube.com/watch?v=N013giPKiFU&t=156s",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "} = 9$ cm），右側 $A$ 點為零刻度（力臂 $\\overline{OA} = 3$ cm）。 故選 (B)。"
  },
  {
    "id": "q_phy_lever_balance_three_weights_abc_320",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/槓桿平衡與力矩／同側多物體之力矩疊加與力臂定義（支點兩側力矩總和守恆）",
    "uploadDate": "2026-11-01",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【槓桿力臂距離標記秒殺防呆密碼！】\n1. **力臂定義的核心：距離永遠以「支點」為基準！**：\n   - **甲的力臂**：支點到甲的距離 $= a$。\n   - **乙的力臂**：支點到乙的距離 $= b$。\n   - **丙的力臂（極易粗心致命陷阱！）**：\n     - 圖中 $c$ 標記的是「乙與丙之間的間隔距離」，**不是**支點到丙的距離！\n     - 丙到支點的真正力臂是「支點到乙＋乙到丙」：\n       $$\\text{丙的力臂} = b + c$$\n2. **列力矩平衡方程式**：\n   - 三物體質量相等（設均為 $m$）：\n     $$\\text{逆時針力矩 (左側)} = \\text{順時針力矩 (右側)}$$\n     $$m \\times a = m \\times b + m \\times (b + c)$$\n   - 兩邊同除以 $m$：\n     $$a = b + (b + c) = 2b + c$$\n3. **快篩陷阱**：\n   - ❌ 誤選 (A) $a = b + c$：把 $c$ 誤當作丙到支點的力臂！\n   - 看到圖上的標示弧線，一定要看清楚兩端點到底是落在「支點」還是落在「鄰近物體」上！",
    "stem": "一支點在中間的槓桿，掛有質量相等的甲、乙、丙三物，其間之距離如圖所示時，且可成平衡狀態，則下列何者正確？\n\n○ (A) $a = b + c$\n○ (B) $2a = b + c$\n○ (C) $a = b + 2c$\n○ (D) $a = 2b + c$",
    "answer": "(D) $a = 2b + c$",
    "diagramUrl": "assets/questions/q_phy_lever_balance_three_weights_abc_320.png",
    "solution": "1. 【觀念核心：合力矩為零（左側力矩和 = 右側力矩和）】： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【觀念核心：合力矩為零（左側力矩和 = 右側力矩和）】： 故選 (D)。"
  },
  {
    "id": "q_phy_lever_multi_tier_balance_mass_ratio_319",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/槓桿平衡與力矩／多層懸吊槓桿之由下而上層層推進（力矩平衡與總重向下傳遞）",
    "uploadDate": "2026-11-01",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【多層槓桿吊秤秒殺口訣！】\n1. **解題最高心法：由下而上，逐層化簡！**：\n   - **最底層**：甲、乙力矩平衡 ➜ 求甲與乙的質量關係。\n   - **往上傳遞**：支點所受下拉力等於「該槓桿所有懸掛物之總質量」（桿重忽略）。\n   - **中間層**：(甲＋乙之合重) 與 丙 力矩平衡 ➜ 求丙的質量。\n   - **最上層**：(甲＋乙＋丙之合重) 與 丁 力矩平衡 ➜ 求丁的質量。\n2. **假設具體數值法（零失誤速算法）**：\n   - 若比例分數多，直接設甲 = 3 公克（能被 3 整除），算出來全是整數：\n     - 甲 = 3g、乙 = 3g ➜ (甲＋乙) = 6g。\n     - 中間層：$6 \\times 1 = \\text{丙} \\times 3 \\implies \\text{丙} = 2\\text{g}$。\n     - 頂層左端總重 $= 6 + 2 = 8\\text{g}$。\n     - 頂層力矩：$8 \\times 1 = \\text{丁} \\times 2 \\implies \\text{丁} = 4\\text{g}$。\n   - 質量清單：甲:乙:丙:丁 $= 3 : 3 : 2 : 4$！\n3. **常見致命盲點**：\n   - ❌ 誤以為中間層左端只有「乙」或只有「甲」！注意中間層左端懸掛的是「整根底層槓桿（甲＋乙）」！",
    "stem": "如附圖所示，圖中之數字比為桿長比，設桿質量可忽略不計且達水平平衡。關於甲、乙、丙、丁之質量比，下列何者錯誤？\n\n○ (A) 甲 : 乙 = 1 : 1\n○ (B) 乙 : 丙 = 3 : 1\n○ (C) 丙 : 丁 = 1 : 2\n○ (D) 甲 : 丁 = 3 : 4",
    "answer": "(B) 乙 : 丙 = 3 : 1",
    "diagramUrl": "assets/questions/q_phy_lever_multi_tier_balance_mass_ratio_319.png",
    "solution": "選項敘述「乙 : 丙 = 3 : 1」錯誤，符合題目要求選出錯誤者！ 故選 (B)。",
    "videoUrl": "https://www.youtube.com/watch?v=wytxnO0C2NQ",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "選項敘述「乙 : 丙 = 3 : 1」錯誤，符合題目要求選出錯誤者！ 故選 (B)。"
  },
  {
    "id": "q_phy_torque_nail_puller_lever_arm_318",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/力矩與槓桿原理／力臂的定義（支點到力的作用線之垂直距離）與起釘器力矩計算",
    "uploadDate": "2026-11-01",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【力臂定義秒殺口訣！】\n1. **力臂定義永遠是「支點到力的作用線之垂直距離」**：\n   - 力臂 **不是**「支點到施力點的直線距離（桿長）」！\n   - 切勿看到起釘器斜桿長度就直覺選 $d_2$ 或 $d_4$！\n2. **作圖判別黃金法**：\n   - **步驟一**：找出支點（起釘器與地面接觸的轉折點）。\n   - **步驟二**：畫出力的「作用線」（垂直向下的虛線延長線）。\n   - **步驟三**：自支點向力的作用線作「垂直線段」，該線段就是力臂！\n   - 本題中，施力 $F$ 為垂直向下，從地面支點向垂直線作垂線，得到的水平垂直距離正是 $d_3$！\n3. **常見致命陷阱**：\n   - $d_1$：施力點距地面的鉛直高度（非力臂，此方向與力平行）。\n   - $d_2$、$d_4$：起釘器握把的斜面長度（桿長，與施力不垂直）。\n   - 只有 $d_3$ 與施力 $F$ 垂直，故力矩 $= F \\times d_3$！",
    "stem": "安琪利用起釘器將釘子拔起，其施力 $F$ 的大小、方向如圖所示，則她施力的力矩大小為下列何者？〔93.基測Ⅰ〕\n\n○ (A) $F \\times d_1$\n○ (B) $F \\times d_2$\n○ (C) $F \\times d_3$\n○ (D) $F \\times d_4$",
    "answer": "(C) $F \\times d_3$",
    "diagramUrl": "assets/questions/q_phy_torque_nail_puller_lever_arm_318.png",
    "solution": "1. 【力矩的定義與公式】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【力矩的定義與公式】： 故選 (C)。"
  },
  {
    "id": "q_math_parallelogram_ratio_abf_abd_317",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/相似形與面積比／平行四邊形對角線、沙漏相似形與同高三角形面積比例鏈",
    "uploadDate": "2026-11-01",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平行四邊形面積比例拆解秒殺密碼！】\n1. **沙漏相似形求線段比**：\n   - 平行四邊形上下平行 $AD \\parallel BC$，且長度相等 $AD = BC$。\n   - 已知 $2\\overline{AE} = \\overline{DE}$ ➜ $\\overline{AE} : \\overline{DE} = 1 : 2$ ➜ $\\overline{AE} : \\overline{AD} = 1 : 3$。\n   - 因此 $\\overline{AE} : \\overline{BC} = 1 : 3$。\n   - 沙漏形 $\\triangle AEF \\sim \\triangle CBF$ ➜ $\\overline{AF} : \\overline{FC} = 1 : 3$！\n2. **同高三角形底邊比 = 面積比**：\n   - 在 $\\triangle ABC$ 中，點 $F$ 在 $\\overline{AC}$ 上 ➜ $\\triangle ABF : \\triangle CBF = \\overline{AF} : \\overline{FC} = 1 : 3$。\n   - 故 $\\triangle ABF = \\frac{1}{4} \\triangle ABC$。\n3. **對角線平分平行四邊形面積**：\n   - 對角線 $AC$ 與 $BD$ 皆將平行四邊形平分為一半：\n     $$\\triangle ABC = \\triangle ABD = \\frac{1}{2} \\square ABCD$$\n   - 替換代入：$\\triangle ABF = \\frac{1}{4} \\triangle ABD$ ➜ 比值為 $1 : 4$！\n4. **常見陷阱**：\n   - 看到 $2\\overline{AE} = \\overline{DE}$，不要把比例算反！是 $AE = 1$、$DE = 2$、$AD = 3$！",
    "stem": "如圖，在平行四邊形 $ABCD$ 中，$2\\overline{AE} = \\overline{DE}$，$\\overline{AC}$ 交 $\\overline{BE}$ 於 $F$，則：\n\n$\\triangle ABF$ 的面積 : $\\triangle ABD$ 的面積 = ______。",
    "answer": "1 : 4",
    "diagramUrl": "assets/questions/q_math_parallelogram_ratio_abf_abd_317.png",
    "solution": "1. 【步驟一：利用線段比例求出底邊關係】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【步驟一：利用線段比例求出底邊關係】："
  },
  {
    "id": "q_math_sunlight_window_parallel_similar_316",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/相似形與平行線截比例線段／平行光線投影與相似三角形邊長成比例應用",
    "uploadDate": "2026-11-01",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【陽光投影與平行線截比例線段秒殺口訣！】\n1. **陽光視為「平行光線」**：\n   - 太陽光線互相平行 ➜ 光線 $AE \\parallel BD$！\n   - 形成一組同位角相等的**相似直角三角形**：$\\triangle ACE \\sim \\triangle BCD$。\n2. **母子相似形比例對應技巧**：\n   - 水平底邊比 = 垂直高之比：\n     $$\\frac{\\overline{CD}}{\\overline{CE}} = \\frac{\\overline{BC}}{\\overline{AC}}$$\n   - 特別注意線段的組合：\n     - 底邊 $\\overline{CE} = \\overline{CD} + \\overline{DE} = 3.6 + 1.2 = 4.8$\n     - 高 $\\overline{AC} = \\overline{BC} + \\overline{AB} = x + 1.8$\n3. **常見致命粗心陷阱**：\n   - ❌ 誤將 $\\overline{DE} = 1.2$ 當作分母！注意母三角形的大底邊是全段 $\\overline{CE} = 4.8$！\n   - 交叉相乘前先**約分比例**（$\\frac{3.6}{4.8} = \\frac{3}{4}$），計算更神速且零失誤！",
    "stem": "如圖，陽光透過窗口 $\\overline{AB}$ 照進室內，在地上留下寬 1.2 公尺的亮區 $\\overline{DE}$，若 $\\overline{AB} = 1.8$ 公尺，$\\overline{CD} = 3.6$ 公尺，則窗口離地面的高度 $\\overline{BC}$ 為 ______ 公尺。",
    "answer": "5.4",
    "diagramUrl": "assets/questions/q_math_sunlight_window_parallel_similar_316.png",
    "solution": "1. 【幾何關係與平行光性質分析】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【幾何關係與平行光性質分析】："
  },
  {
    "id": "q_math_circle_point_position_distance_radius_315",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與坐標幾何／點與圓的位置關係（兩點距離公式、半徑比較判定圓內、圓上、圓外）",
    "uploadDate": "2026-11-01",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【點與圓位置關係判定黃金三部曲！】\n1. **核心判定標準（點到圓心的距離 d 與半徑 r 之比較）**：\n   - **d < r** ➜ 點在**圓內**\n   - **d = r** ➜ 點在**圓上**\n   - **d > r** ➜ 點在**圓外**\n2. **坐標平面兩點距離公式**：\n   - 點 A(x₁, y₁) 與點 B(x₂, y₂) 的距離 $d = \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$\n   - 技巧：若開根號數字較大，可直接比較平方！即比較 $d^2$ 與 $r^2$：\n     - $d^2 < r^2$ ➜ 圓內\n     - $d^2 = r^2$ ➜ 圓上\n     - $d^2 > r^2$ ➜ 圓外\n3. **常見計算粗心陷阱**：\n   - 計算坐標差時務必注意**負負得正**！例如 $4 - (-1) = 5$，別誤算成 $4 - 1 = 3$！",
    "stem": "一圓 O 的圓心坐標為 O(-1, 5)，且半徑長為 6，若 P 點的坐標為 (4, -1)，則 P 點在圓 O ______。（填內、外或上）",
    "answer": "外",
    "diagramUrl": "",
    "solution": "1. 【觀念核心：點到圓心距離 (d) 與半徑 (r) 的關係】：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-11-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 【觀念核心：點到圓心距離 (d) 與半徑 (r) 的關係】："
  },
  {
    "id": "q_soc_geo_usa_great_lakes_industry_raw_materials_314",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/美洲地理／美國五大湖區重工業區位優勢（煤鐵資源原料豐富與廉價水運）",
    "uploadDate": "2026-10-31",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【美國五大湖傳統重工業聚落秒殺密碼！】\n1. **核心區位：原料取向（煤＋鐵）＋水運便利**：\n   - **煤礦**：來自東南方阿帕拉契山脈。\n   - **鐵礦**：來自蘇必略湖西岸（梅薩比礦區）。\n   - **廉價水運**：五大湖串聯聖羅倫斯河出海，載運沉重礦石最省成本！\n2. **核心城市發展鏈**：\n   - **匹茲堡**：鋼鐵之都（早期鄰近煤礦）。\n   - **芝加哥**：水陸交通樞紐、肉類加工與鋼鐵製造。\n   - **底特律**：汽車之城（鄰近鋼鐵原料產地）。\n3. **常見解題陷阱**：\n   - 看到重工業（鋼鐵、石化） ➜ 優先思考**「原料（礦產）」**或**「交通（港口/水運）」**，切勿選氣候暖濕或勞工便宜！",
    "stem": "美國傳統的鋼鐵、汽車工業多發源自五大湖區，該地區最有利於工業發展的條件為何？\n\n○ (A) 氣候暖溼\n○ (B) 原料豐富\n○ (C) 勞工眾多\n○ (D) 地形平坦",
    "answer": "(B) 原料豐富",
    "diagramUrl": "",
    "solution": "深度解析——煤鐵資源豐富奠定重工業基石】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-31",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度解析——煤鐵資源豐富奠定重工業基石】： 故選 (B)。"
  },
  {
    "id": "q_soc_geo_madagascar_orographic_windward_leeward_313",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/非洲地形與氣候／馬達加斯加迎風坡與背風坡（地形雨、熱帶雨林與熱帶莽原植被差異）",
    "uploadDate": "2026-10-31",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【島嶼地形雨與迎風／背風坡植被秒殺口訣！】\n1. **南半球低緯度盛行「東南信風」**：\n   - 馬達加斯加位於南緯 15°～25°，中央有南北縱貫山脈。\n2. **迎風坡（東側 A 地）**：\n   - 面對來自印度洋的**東南信風**＋沿岸**暖流**經過，水氣充足、抬升致雨，屬於**熱帶雨林氣候**，森林密布、**樹木高大繁多**！\n3. **背風坡（西側 B 地）**：\n   - 位於東南信風背風坡（**雨影區**），氣流下沉增溫，降雨顯著銳減，屬於**熱帶莽原氣候**，以高草為主、**樹木稀疏顯著減少**！\n4. **選項破題盲點快篩**：\n   - 往西搬（經度變小）自轉由西向東，越往西日出「越晚」（非提早）！\n   - 熱帶氣候（緯度 15°～25°）冬季絕不下雪！\n   - 全年受東南信風吹拂（非季風），無乾濕季相差半年之情形。",
    "stem": "附圖是馬達加斯加，位於非洲的東南方。若一位居住在島上「A」地的民眾，搬家到「B」地，生活會出現什麼變化？\n\n○ (A) 日出時間稍微提早\n○ (B) 降水季節相差半年\n○ (C) 冬天會開始下大雪\n○ (D) 樹木數量顯著減少",
    "answer": "(D) 樹木數量顯著減少",
    "diagramUrl": "assets/questions/q_soc_geo_madagascar_orographic_windward_leeward_313.png",
    "solution": "深度解析——迎風坡 vs 背風坡降水與植被】： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-31",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "深度解析——迎風坡 vs 背風坡降水與植被】： 故選 (D)。"
  },
  {
    "id": "q_soc_geo_aleppo_soap_mediterranean_climate_winter_312",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／西南亞地中海型氣候與傳統工藝：敘利亞阿勒坡古皂（橄欖油與月桂油）／地中海型氣候「夏乾冬雨（夏熱乾燥、冬溫多雨）」／11～3月橄欖產季之冬季氣候特徵判讀",
    "uploadDate": "2026-10-31",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【地中海型氣候「夏乾冬雨」反常規秒殺口訣！】\n1. **看懂題幹生產時節（11 月～3 月 ＝ 北半球冬季）**：\n   - 題幹明確指出「每年 11～3 月是橄欖產季，也是阿勒坡製作古皂的時節」。\n   - 11 月至隔年 3 月在北半球正是**【冬季】**！\n2. **地中海型氣候經典特徵（夏乾冬雨、冬溫多雨）**：\n   - 阿勒坡位於地中海東側（敘利亞北部），氣候屬於典型的**「地中海型氣候」**。\n   - **夏季**：副熱帶高氣壓籠罩 ⟹ 高溫乾燥少雨（選 A 會死在季節錯置！夏天的確乾熱，但產皂在冬季 ❌）！\n   - **冬季（11～3月）**：盛行西風帶南移帶來水氣 ⟹ **溫和多雨、綿綿細雨（正解 B ✅）**！\n   - 注意：地中海型氣候冬季受到海洋西風調節，屬於「溫和多雨」，絕非 (D)「低溫酷寒的冬季」（酷寒那是溫帶大陸性或寒帶氣候）❌！",
    "stem": "阿勒坡為人類最古老的定居地之一，是以手工古皂聞名的城鎮。這裡是位於地中海與美索不達米亞之間的平原沃土，八世紀時在這裡製作出第一塊固體肥皂。每年 11～3 月是橄欖產季，也是阿勒坡製作古皂的時節。生產過程僅用鹼、水、天然初榨橄欖油和月桂漿果，提煉月桂油。這些原材料作物皆取用當地種植的農作。儘管不同工坊有各自獨到的處理方式，但上述四種是該區千年來使用的材料。製皂是一古法工藝，為了保護當地古皂產業，政府對於產與製程有嚴格的定義，僅有在阿勒坡及其他三個城鎮生產的古皂，才能稱作「阿勒坡古皂」。\n\n阿勒坡手工古皂的製造具有季節性，每年只生產一次，生產當時的天候狀況為何？\n\n○ (A) 高溫乾燥的夏季\n○ (B) 綿綿細雨的冬季\n○ (C) 炎熱多雨的夏季\n○ (D) 低溫酷寒的冬季",
    "answer": "(B) 綿綿細雨的冬季",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 綿綿細雨的冬季。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-31",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 綿綿細雨的冬季。"
  },
  {
    "id": "q_soc_geo_ramadan_daylight_hours_latitude_311",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／地球公轉與晝夜長短規律：4-5月春末夏初太陽直射北半球／北半球緯度越高「晝越長、夜越短」／伊斯蘭教「拉瑪丹齋戒月」（日出到日落禁食）在英國（高緯度）禁食時間最長判讀",
    "uploadDate": "2026-10-31",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【齋戒月禁食時間長短 ⟹ 換算「晝長（白晝時間）」秒殺口訣！】\n1. **看懂宗教規定與題幹月份**：\n   - 禁食規定：「每天從**日出到日落**期間，停止飲食」 ⟹ 禁食時間長度 ＝ **【當地的白晝時間長度（日出到日落的時數）】**！\n   - 題幹時間：**2022 年 4 月 2 日至 5 月 1 日**（春分 3/21 之後、夏至 6/22 之前）。\n2. **太陽直射點與晝夜長短黃金定律**：\n   - 4～5 月期間，太陽直射點已經越過赤道，位於**【北半球】**，且正持續往北回歸線移動！\n   - **北半球黃金定律**：在北半球春夏兩季（太陽直射北半球時），**「緯度越往北（緯度越高），白晝時間越長（晝長夜短）」**！\n3. **四國緯度排排站，秒殺正解**：\n   - **(B) 英國：約北緯 50°N～58°N（緯度最高！日出極早、日落極晚，白晝長達 16～17 小時以上，禁食時間最嚴苛漫長！正解 ✅）**！\n   - (A) 埃及：約北緯 22°N～31°N（緯度中等，日長約 13～14 小時）。\n   - (C) 沙烏地阿拉伯：約北緯 16°N～32°N（北回歸線穿過，日長約 13 小時）。\n   - (D) 印尼：約赤道兩側南緯 10°S 至北緯 5°N（接近赤道或在南半球，日長僅 12 小時甚至晝短夜長）。",
    "stem": "「拉瑪丹月」是伊斯蘭曆的第九個月，是伊斯蘭教穆斯林的齋戒月。根據《古蘭經》記載，這個月是全年最神聖者。每年到了這個月，符合條件的穆斯林必須於該月份恪守齋戒如下：\n每天（自封齋飯完畢）從日出到日落期間，停止飲食。\n當天日落之後直至次日晨禮之前，都可正常作息吃喝。\n老人、病人可減免，旅宿者則該在旅途結束後，適時補齊欠齋的日數。\n具體執行情況，可根據自身的健康條件以及所在區域的氣候時差而定。\n2022 年的「拉瑪丹月」，為 4 月 2 日至 5 月 1 日。請問：2022 年的齋戒月，生活在哪個國家的穆斯林，禁食的時間最長？\n\n○ (A) 埃及\n○ (B) 英國\n○ (C) 沙烏地阿拉伯\n○ (D) 印尼",
    "answer": "(B) 英國",
    "diagramUrl": "",
    "solution": "英國—【正解 ✅】：位於西歐高緯度，約 北緯 50°N～58°N。故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-31",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "英國—【正解 ✅】：位於西歐高緯度，約 北緯 50°N～58°N。故選 (B)。"
  },
  {
    "id": "q_soc_geo_israel_shipwreck_amphora_dates_310",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／西南亞與地中海農特產特徵：西亞與北非地中海東側沿岸（黎凡特/以色列）特色食材「椰棗」／乾燥氣候綠洲農業／茶葉、咖啡豆、可可豆產地排查",
    "uploadDate": "2026-10-31",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【地中海東岸 vs 全球四大熱門飲品食材產地秒殺！】\n1. **地中海東側（以色列/西亞北非）天然農產秒殺**：\n   - **椰棗（Date Palm，沙漠黃金）（正解 B ✅）**：耐高溫、耐乾旱、耐鹽鹼，自古為西亞與北非荒漠綠洲地區最重要的主食與能量來源，在古代環地中海雙耳瓶貿易中大量運輸！\n2. **其餘三種飲料作物產地排查**：\n   - **(A) 茶葉**：源自東亞、東南亞及南亞（中國南方丘陵、印度阿薩姆/大吉嶺、斯里蘭卡），喜高溫多雨酸性紅黃壤丘陵，非地中海東岸乾燥氣候特產 ❌。\n   - **(C) 咖啡豆**：發源於東非衣索比亞高原，現代主產於中南美洲（巴西、哥倫比亞）與東南亞（越南、印尼），需熱帶高地環境 ❌。\n   - **(D) 可可豆**：原產於中南美洲（亞馬遜雨林），現代主產於西非幾內亞灣沿岸（象牙海岸、迦納），為高溫多雨熱帶雨林作物 ❌。",
    "stem": "數年前開始，考古學家在以色列沿海的淺水海域，調查一艘 1200 多年前的沉船。考古學家利用水底吸塵器，清除約 15 公尺厚的沙子後，發現船上有 200 多個雙耳瓶，瓶裝有許多地中海東側沿岸常見的食材。請問，下列何者最可能是雙耳瓶裝列的物品？\n\n○ (A) 茶葉\n○ (B) 椰棗\n○ (C) 咖啡豆\n○ (D) 可可豆",
    "answer": "(B) 椰棗",
    "diagramUrl": "",
    "solution": "椰棗（Date Palm）—【正解 ✅】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-31",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "椰棗（Date Palm）—【正解 ✅】： 故選 (B)。"
  },
  {
    "id": "q_soc_geo_iran_windcatcher_badgir_cooling_309",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／西南亞乾燥氣候傳統民居智慧：波斯／伊朗「風塔（Badgir）」天然空調結構／捕捉高處涼風、排出室內熱氣／熱浮力煙囪效應與坎兒井地下冷水冷卻原理",
    "uploadDate": "2026-10-31",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【西南亞乾燥區「古代天然冷氣機——風塔」秒殺密碼！】\n1. **看懂結構圖「風塔（Badgir）」**：\n   - 圖中房屋頂部矗立著高聳的方形通風塔樓，上方標示「冷氣進、熱氣出、能捕捉更多的風造成良好的室內對流」。\n   - 這正是古波斯文明流傳數千年的世界文化遺產——**伊朗的「風塔（Windcatcher / Badgir）」**！\n2. **運作物理原理（熱浮力與煙囪效應）**：\n   - **捕捉高處涼風**：高空風速較大且溫度較低、沙塵較少，塔頂開口迎風面將外界涼風導引入屋內。\n   - **壓差抽吸熱氣**：室內被陽光照射加熱的熱空氣密度小、向上升騰，從背風側塔口或天井被迅速抽出（煙囪效應）。\n   - **結合坎兒井水系**：涼風導入地下坎兒井冷水面蒸發吸熱，再將冰涼濕潤的冷空氣送進起居室，室內可降溫達 8°C～12°C！\n3. **國家選項秒殺**：\n   - 只有 **(C) 伊朗** 位於炎熱乾燥的伊朗高原（波斯帝國所在地），是風塔建築最著名、保存最完整的代表國！\n   - 越南（熱帶季風，以干欄式高架屋防潮）、阿根廷（潘帕斯草原/溫帶）、義大利（地中海石造房屋）均非風塔代表國 ❌。",
    "stem": "各地傳統民居形式，深受當地自然環境影響。附圖是某地區常見的房屋建築結構。請根據資訊內容推判，這種建築最可能出現於下列哪個國家？\n\n○ (A) 越南\n○ (B) 阿根廷\n○ (C) 伊朗\n○ (D) 義大利",
    "answer": "(C) 伊朗",
    "diagramUrl": "assets/questions/q_soc_geo_iran_windcatcher_badgir_cooling_309.png",
    "solution": "伊朗—【正解 ✅】：地處伊朗高原，氣候乾燥炎熱、日照強烈，為風塔（Badgir）發源與分布最密集的國家。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-31",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "伊朗—【正解 ✅】：地處伊朗高原，氣候乾燥炎熱、日照強烈，為風塔（Badgir）發源與分布最密集的國家。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_qatar_arabian_peninsula_desert_climate_308",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／西南亞與西亞阿拉伯半島地理環境：卡達半島地理位置（臨波斯灣、北回歸線附近）／副熱帶高氣壓下沉氣流／熱帶沙漠氣候（全年高溫乾燥、年降水量極少）／豐富石油與天然氣帶動極高人均GDP",
    "uploadDate": "2026-10-31",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【西亞阿拉伯半島各國氣候秒殺通則！】\n1. **「阿拉伯半島」四字直接秒殺「熱帶沙漠氣候」**：\n   - 卡達（Qatar）是突出於阿拉伯半島東側、瀕臨波斯灣的一個沙漠半島小國。\n   - 阿拉伯半島整體橫跨**北回歸線（23.5°N）**，終年受到強大的**「副熱帶高氣壓帶」**籠罩，氣流強烈下沉、水氣極難凝結成雲致雨。\n   - 加上四周地形與東北信風乾燥，全境為典型**「熱帶沙漠氣候」**（夏季極端酷熱可達 50°C、全年雨量不足 100 mm）！\n2. **西亞氣候混淆辨析**：\n   - **地中海型氣候**：僅分布在西亞西北邊緣「地中海沿岸」（如土耳其南部沿岸、黎巴嫩、以色列沿海），阿拉伯半島東側絕非地中海型氣候 ❌。\n   - **熱帶雨林氣候**：分布在赤道附近（如東南亞印尼、非洲剛果），西亞根本沒有熱帶雨林 ❌。\n   - **溫帶季風氣候**：分布在東亞（中國秦嶺淮河以北、朝鮮半島、日本北部），西亞絕無溫帶季風 ❌。\n3. **人文經濟特色**：\n   - 卡達擁有世界第三大天然氣儲量（北方氣田）與豐富石油，人口僅約 300 萬（外籍勞工占大半），使得人均 GDP 經常位居全球前三名（2022 年曾舉辦世界盃足球賽）！",
    "stem": "以下是一段記者的報導說明：卡達為阿拉伯半島東側臨波斯灣的小國，由於具有豐富的天然資源，成為全球人均 GDP 名列前茅的國家……。根據該國地理位置判斷，其主要的氣候類型為下列何者？\n\n○ (A) 熱帶雨林氣候\n○ (B) 熱帶沙漠氣候\n○ (C) 溫帶季風氣候\n○ (D) 溫帶地中海型氣候",
    "answer": "(B) 熱帶沙漠氣候",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 熱帶沙漠氣候。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-31",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 熱帶沙漠氣候。"
  },
  {
    "id": "q_soc_geo_three_major_religions_route_307",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／世界文化與宗教分布：世界三大宗教（基督教、伊斯蘭教、佛教）／泰國曼谷（佛教）⟷ 中東阿拉伯/波斯灣（伊斯蘭教）⟷ 歐洲（基督教）巡禮路線判讀",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【世界三大宗教發源與分布巡禮路線秒殺！】\n1. **看懂出發點「ㄅ（泰國／中南半島）」**：\n   - ㄅ 位於東南亞中南半島（泰國/緬甸一帶），信奉**「南傳上座部佛教」**（國教寺廟遍布），故出發點 ㄅ 已經代表了**【佛教】**！\n2. **題目核心任務**：從 ㄅ 出發的路線必須同時包含**【佛教、伊斯蘭教、基督教】**三大宗教：\n   - **路線 ㄅ ⟶ 乙（正解 ✅）**：\n     - 途經**西南亞/西亞阿拉伯世界（中東波斯灣一帶）** ⟹ **【伊斯蘭教】**的核心聖地信仰區。\n     - 終點到達**歐洲（乙）** ⟹ 全球**【基督教（天主教/基督新教/東正教）】**最主要的傳統信仰文明區！\n     - 完美貫穿「佛教（ㄅ） ⟶ 伊斯蘭教（中東） ⟶ 基督教（乙）」！\n3. **其餘路線排查**：\n   - **ㄅ ⟶ 甲（日本）**：主要是神道教與東亞大乘佛教，未包含伊斯蘭教 ❌。\n   - **ㄅ ⟶ 丙（東非索馬利亞/衣索比亞）**：缺乏完整的歐洲基督教文明區 ❌。\n   - **ㄅ ⟶ 丁（南非）**：跨印度洋直達南非，未經過西亞伊斯蘭教核心地帶 ❌。",
    "stem": "多樣化的自然環境與人文特色，孕育出多元的世界文化，若想要規畫一條從 ㄅ 點出發，包含基督教、伊斯蘭教、佛教等世界三個主要宗教文化巡禮的路線，選擇附圖中哪條路線較適當？\n\n○ (A) ㄅ ⟶ 甲\n○ (B) ㄅ ⟶ 乙\n○ (C) ㄅ ⟶ 丙\n○ (D) ㄅ ⟶ 丁",
    "answer": "(B) ㄅ ⟶ 乙",
    "diagramUrl": "assets/questions/q_soc_geo_three_major_religions_route_307.png",
    "solution": "故本題正確答案為 (B) ㄅ ⟶ 乙。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) ㄅ ⟶ 乙。"
  },
  {
    "id": "q_soc_geo_indonesia_orangutan_tropical_rainforest_306",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／東南亞自然環境與生態保育：印尼蘇門答臘島熱帶雨林氣候特徵（全年高溫多雨、年溫差極小）／油棕種植與棕櫚油砍伐森林／氣候圖降水柱與氣溫曲線判讀",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【蘇門答臘紅毛猩猩棲地與熱帶雨林氣候圖秒殺法！】\n1. **看懂題幹地理位置**：\n   - 「印尼蘇門答臘島」位於**赤道貫穿帶**（熱帶雨林核心區）！\n   - 紅毛猩猩（Orangutan，森林人）依賴茂密古老的熱帶雨林樹冠層生活，其棲地氣候必定為**「熱帶雨林氣候」**！\n2. **氣候圖兩大秒殺特徵（鎖定 B ✅）**：\n   - **氣溫特徵**：赤道終年強烈日照，**全年各月均溫皆在 26°C～28°C 左右，氣溫曲線平直、年溫差幾乎等於 0（小於 5°C）**！\n   - **降水特徵**：終年受赤道低壓帶籠罩，對流旺盛，**每個月降水量均超過 100 mm（柱狀圖高聳均勻），全年總降水量超過 2,000 mm**！\n3. **其餘干擾氣候圖排查**：\n   - (A) 北半球溫帶季風/大陸性氣候：7 月熱、1 月冷（< 0°C），夏季集中降水 ❌。\n   - (C) 南半球副熱帶/溫帶氣候：7 月為冬季氣溫最低 ❌。\n   - (D) 南半球溫帶海洋性/地中海氣候：7 月低溫、雨量偏少 ❌。",
    "stem": "「科學家在印尼 蘇門答臘島北部發現新品種的紅毛猩猩，但過去 20 年來，印尼的企業為了種植油棕生產棕櫚油，大肆非法砍伐森林，使得許多棲息在森林間的紅毛猩猩不是被燒死，就是因為食物鏈被破壞而餓死。」請問：上述紅毛猩猩的棲地氣候環境與下列何者最相符？\n\n○ (A) 溫帶季風氣候（夏季高溫多雨、冬季寒冷乾燥，年溫差大）\n○ (B) 熱帶雨林氣候（全年各月高溫 > 26°C、各月降水均勻且 > 100 mm，年溫差極小）\n○ (C) 南半球地中海/草原氣候（7 月為冬季低溫、夏熱冬涼）\n○ (D) 南半球溫帶氣候（7 月低溫、降水偏少）",
    "answer": "(B) 熱帶雨林氣候（全年各月高溫 > 26°C、各月降水均勻且 > 100 mm，年溫差極小）",
    "diagramUrl": "assets/questions/q_soc_geo_indonesia_orangutan_tropical_rainforest_306.png",
    "solution": "中氣溫曲線高懸 26°C 以上且全年平直，各月降水柱狀均勻飽滿高聳，完全吻合熱帶雨林氣候！ 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "中氣溫曲線高懸 26°C 以上且全年平直，各月降水柱狀均勻飽滿高聳，完全吻合熱帶雨林氣候！ 故選 (B)。"
  },
  {
    "id": "q_soc_geo_panda_solar_station_climate_305",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／全球氣候類型與再生能源區位：太陽能發電環境條件（日照充足、雲量少、場地空曠）／副熱帶高壓熱帶沙漠氣候（撒哈拉、阿拉伯、澳洲）／四大氣候分布圖判讀",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【太陽能發電區位條件與全球四大氣候分布秒殺！】\n1. **太陽能光電廠的三大黃金條件**：\n   - ① **日照充足（年日照時數長）**\n   - ② **雲層阻擋少（晴天日數多、降水量極少）**\n   - ③ **場地平坦廣闊（地廣人稀、土地取得容易）**\n   ⟹ 全球唯一完美符合這三大條件的正是受副熱帶高壓籠罩的**「熱帶沙漠氣候」**（年降水量 < 250 mm，終年艷陽高照、荒漠遼闊）！\n2. **世界四大氣候地圖分布特徵秒殺**：\n   - **(A) 溫帶海洋性氣候**：分布於西歐、北美西北角、紐西蘭、智利南部。終年受西風與暖流影響，**全年濕潤、陰雨多雲天數極多、日照嚴重不足** ❌。\n   - **(B) 熱帶雨林氣候**：分布於赤道兩側（剛果盆地、印尼群島、亞馬遜平原）。終年受赤道低壓帶籠罩，**午後熱對流旺盛、多雷陣雨、雲量厚重阻擋陽光、植被茂密無空曠地** ❌。\n   - **(C) 熱帶沙漠氣候（正解 ✅）**：分布於南北回歸線兩側（北非撒哈拉、阿拉伯半島、澳洲大沙漠、喀拉哈里沙漠、美西西南沙漠）。**下沉氣流晴朗少雲、降雨極少、日照最強且地表平坦空曠**！\n   - **(D) 寒帶苔原/副極地大陸性氣候**：分布於高緯度（加拿大北部、西伯利亞）。**緯度高太陽仰角極低、冬長嚴寒、日照能量不足** ❌。",
    "stem": "「熊貓電站」是聯合國開發計畫署與中國共同推廣的項目，其創意來自 15 歲留美中國學生，將太陽能光伏板按照中國國寶大熊貓的形象進行設計，未來計畫在全球建設 100 座熊貓電站。而太陽能發電需在日照充足、雲層阻擋少及場地空曠的地方。依上述內容判斷，此計畫最適合在下列哪個氣候分布區推展？\n\n○ (A) 溫帶海洋性氣候區（西歐、北美西北沿海、紐西蘭）\n○ (B) 熱帶雨林氣候區（剛果盆地、亞馬遜平原、印尼群島）\n○ (C) 熱帶沙漠氣候區（北非撒哈拉沙漠、阿拉伯半島、澳洲大沙漠）\n○ (D) 寒帶/副極地大陸性氣候區（加拿大北部、西伯利亞）",
    "answer": "(C) 熱帶沙漠氣候區（北非撒哈拉沙漠、阿拉伯半島、澳洲大沙漠）",
    "diagramUrl": "assets/questions/q_soc_geo_panda_solar_station_climate_305.png",
    "solution": "圖：熱帶沙漠氣候（正解 ✅）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "圖：熱帶沙漠氣候（正解 ✅）： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_manila_philippines_coordinates_climate_304",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／亞洲首都經緯度定位與氣候判讀：西班牙大航海貿易據點（馬尼拉／菲律賓首都）／臺灣南方鄰國經緯度（120°E, 14°N）／熱帶季風氣候乾溼季雨量特徵",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【亞洲四大經典首都經緯度與氣候秒殺對照！】\n1. **看懂題幹貿易據點（鎖定菲律賓首都馬尼拉）**：\n   - 16 世紀西班牙越過太平洋建立的對華貿易據點（以美洲白銀換取中國生絲、瓷器之「大帆船貿易」）⟹ **菲律賓首都「馬尼拉」**！\n2. **以臺灣為基準快速秒殺經緯度**：\n   - **臺灣經緯度**：約 120°E～122°E，北回歸線 23.5°N 穿過中南部。\n   - 菲律賓群島就在臺灣**正南方**（巴士海峽對面），經度與臺灣高度重疊（約 120°E～125°E），緯度比臺灣更低、靠近赤道（約 5°N～18°N）！\n   - 表格中只有 **乙（120°E，14°N）** 恰好落在臺灣正南方，精準對應馬尼拉（選 B ✅）！\n3. **其餘三首都身份揭秘**：\n   - **甲（103°E，1°N）** ⟹ **新加坡**（赤道附近，熱帶雨林氣候全年有雨，乾濕月差僅 140 mm）。\n   - **丙（90°E，23°N）** ⟹ **孟加拉首都達卡**（北回歸線附近，南亞熱帶季風氣候）。\n   - **丁（139°E，35°N）** ⟹ **日本東京**（中緯度溫帶季風氣候）。",
    "stem": "16 世紀時，西班牙從大西洋繞過南美洲，橫越太平洋來到馬尼拉，以此地作為與中國貿易的據點，目前該地成為現今國家的首都。附表為亞洲四個國家的首都資訊，表中何者為上述提及的貿易據點？\n\n【首都資訊表】：\n・甲：經緯度 103°E，1°N ｜ 年平均降水量 2378 mm ｜ 最乾燥月與最溼潤月降水量的差值 140 mm\n・乙：經緯度 120°E，14°N ｜ 年平均降水量 2047 mm ｜ 最乾燥月與最溼潤月降水量的差值 433 mm\n・丙：經緯度 90°E，23°N ｜ 年平均降水量 2022 mm ｜ 最乾燥月與最溼潤月降水量的差值 370 mm\n・丁：經緯度 139°E，35°N ｜ 年平均降水量 1435 mm ｜ 最乾燥月與最溼潤月降水量的差值 145 mm\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(B) 乙",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 乙。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 乙。"
  },
  {
    "id": "q_soc_geo_ganges_delta_sandbar_island_113_exam_303",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／南亞地形作用與水文沉積：恆河三角洲河流堆積作用／波拉氣旋與豪雨侵襲泥沙暴增／沙洲島嶼之形成與海平面海水侵蝕消失／113會考題",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【113 最新會考恆河口消失的沙洲島（新穆爾島 New Moore）秒殺！】\n1. **看懂題目核心關鍵字「沙洲島」**：\n   - 題目明確指出這是一座**「沙洲島」**（最高點僅 2 公尺）！\n   - 沙洲必定是由**「沉積作用（河流泥沙堆積）」**所形成，絕非「海底火山噴發」（A ❌，火山形成的是岩漿冷卻玄武岩/安山岩火山島）！\n2. **因果關係推理排除**：\n   - **(B) 改善水土保持**：水土保持變好 ⟹ 河水帶沙量減少 ⟹ 沙洲堆不出來 ❌。\n   - **(C) 海平面上升**：海平面上升只會「淹沒」島嶼，無法「形成」沙洲島 ❌。\n   - **(D) 豪雨侵襲帶來大量堆積物（正解 ✅）**：1970 年 11 月歷史上發生毀滅性的「波拉氣旋」，暴雨引發大洪水沖刷恆河中上游，攜帶天文數字的泥沙在河口大量沉積，浮現出新島嶼！",
    "stem": "1970 年 11 月恆河出海口附近出現一座長 3.5 公里、寬 3 公里，最高點僅 2 公尺的沙洲島，因其位處印度與孟加拉領海交界處，引發兩國領土爭議，但在爭議還未解決之前，這座島嶼就消失了。根據當地自然環境判斷，該島嶼形成的原因最可能為下列何者？【113 年會考】\n\n○ (A) 位處板塊接觸帶，海底火山噴發\n○ (B) 恆河集水區的水土保持持續改善\n○ (C) 恆河河口附近的海平面持續上升\n○ (D) 豪雨侵襲，河流帶來大量堆積物",
    "answer": "(D) 豪雨侵襲，河流帶來大量堆積物",
    "diagramUrl": "",
    "solution": "正確（豪雨洪水爆發泥沙堆積）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確（豪雨洪水爆發泥沙堆積）： 故選 (D)。"
  },
  {
    "id": "q_soc_hist_ww1_east_asia_wilson_taiwan_democracy_302",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歷史／第一次世界大戰對東亞局勢的影響：威爾遜「民族自決」思潮／臺灣議會設置請願運動與文化協會／中日二十一條要求與五四運動／一戰 vs 二戰東亞時空嚴格區分",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【一次大戰 vs 二次大戰東亞時空錯置兩大秒殺陷阱！】\n1. **陷阱一（中日雖同為協約國，關係反而降到冰點！）**：\n   - 一戰期間中、日雖名義上同屬「協約國」，但日本趁歐洲列強無暇東顧，強奪德國在山東的特權，並向袁世凱提出滅亡中國的《二十一條要求》！\n   - 巴黎和會拒絕歸還山東，引發中國「五四運動」，中日衝突急遽惡化，絕非 (A)「兩國關係改善」！\n2. **陷阱二（時空錯置！C 與 D 全都是「二戰」的產物！）**：\n   - **(C)「日本進攻東南亞奪取列強殖民地」**：這是 1941 年**二次大戰（太平洋戰爭）**的南進政策，一戰時日本主要是在中國與太平洋搶佔德國租借地，根本沒有進攻英法荷的東南亞殖民地！\n   - **(D)「朝鮮、越南、中國出現共產主義政權」**：這是 1945 年**二次大戰結束後**（1945-1949 年間）冷戰爆發才陸續建立的政權（北韓 1948、中共 1949、北越 1945/1954），一戰後俄羅斯才剛成立蘇聯，東亞根本尚未出現共產政權！\n3. **正解 (B) 核心線索（威爾遜民族自決與大正民主）**：\n   - 一戰後美國總統威爾遜提出「民族自決」，加上日本本土進入「大正民主」時期。\n   - 激發了殖民地人民的自主意識：韓國爆發「三一運動」，臺灣知識份子（林獻堂、蔣渭水等人）亦於 1920 年代掀起「臺灣議會設置請願運動」與成立「臺灣文化協會」，民主啟蒙運動蓬勃開展！",
    "stem": "關於「一次大戰」對東亞的影響，哪一項敘述是正確的？\n\n○ (A) 中國與日本屬於同陣營，兩國關係因此改善\n○ (B) 戰後民族自決風潮湧現，臺灣出現民主運動\n○ (C) 日本趁機進攻東南亞，奪取歐美列強殖民地\n○ (D) 戰後朝鮮、越南、中國都出現共產主義政權",
    "answer": "(B) 戰後民族自決風潮湧現，臺灣出現民主運動",
    "diagramUrl": "",
    "solution": "正確解析（民族自決思潮風行）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確解析（民族自決思潮風行）： 故選 (B)。"
  },
  {
    "id": "q_soc_geo_new_southbound_policy_six_nations_301",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／臺灣經貿與新南向政策：東南亞與南亞新南向六國（印度、印尼、泰國、馬來西亞、菲律賓、越南）／人口紅利與廉價勞工／龐大內需市場潛力／東協資格與海陸位置辨析",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【新南向六國投資優勢與選項避坑三大法門！】\n1. **核心優勢（選 C）**：\n   - 六國（印度 14 億、印尼 2.7 億、菲律賓 1.1 億、越南 1 億、泰國 7000 萬、馬來西亞 3300 萬）合計擁有**近 20 億人口**！\n   - 人口結構年輕（人口紅利豐富）、工資成本相對低廉、當地政府積極提供外資設廠租稅優惠，且龐大年輕人口創造出無比巨大的**民生內需消費市場潛力**！\n2. **常見選項陷阱逐一排查**：\n   - **(A) 陷阱**：「各國經濟皆高度發展、全球金融中心、老年人口眾多」那是形容**西歐或日本、新加坡**；這六國多為發展中國家，人口金字塔相對年輕。\n   - **(B) 陷阱**：「分布於大西洋與太平洋交會」大錯特錯！東南亞與南亞是介於**「太平洋」與「印度洋」**之間，根本沒有碰到大西洋！\n   - **(D) 陷阱**：\n     - ① 印度屬於**「南亞」**，根本**不是**「東南亞國協（ASEAN，東協十國）」會員國！\n     - ② 六國語言（印地語、印尼語、泰語、馬來語、他加祿語、越南語）、宗教（印度教、伊斯蘭教、佛教、天主教）多元，絕非「文化與我國相近、溝通零阻礙」！",
    "stem": "近年來，政府鼓勵臺商前往東南亞及南亞地區拓展企業版圖。並選定印度、印尼、泰國、馬來西亞、菲律賓與越南等六國，為重點國家。政府製作「新南向六國」產業地圖，供臺商參考，內容包含：各國基本概況、發展優勢、產業動向等資料。\n\n下列哪一項說明，最符合上述「新南向國家」的情況？\n\n○ (A) 各國經濟皆高度發展，全球金融產業中心。老年人口眾多，高齡服務商機廣大。\n○ (B) 基礎建設充足完善，高科技人才充沛，研發能力卓越。分布於大西洋、太平洋交會地帶，位置優越。\n○ (C) 有充足且相對便宜的勞工，當地政府提供多項優惠政策。人口總數眾多，內需市場廣大具潛力。\n○ (D) 文化與我國相近，溝通零阻礙，都是東南亞國協會員國。各國油氣資源豐富，工業動力充沛。",
    "answer": "(C) 有充足且相對便宜的勞工，當地政府提供多項優惠政策。人口總數眾多，內需市場廣大具潛力。",
    "diagramUrl": "",
    "solution": "1. 第一步：鎖定新南向六國的總體特徵（正解 C 剖析）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 第一步：鎖定新南向六國的總體特徵（正解 C 剖析）： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_china_laos_railway_malacca_strait_300",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／現代區域發展與交通網絡：一帶一路「中寮鐵路」（昆明至永珍）／中國與東協貿易拓展／寮國由「陸鎖國」轉為「陸聯國」／馬六甲海峽海運咽喉不可替代性判讀",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【中寮鐵路影響 vs 馬六甲海峽咽喉地位秒殺！】\n1. **中寮鐵路帶來的實際效益（A、B、C 均會發生）**：\n   - **寮國角色轉變**：寮國為東南亞唯一的「內陸國（陸鎖國）」，中寮鐵路開通後大幅降低物流時間與運費，轉身為「陸聯國」，農產品（熱帶水果、橡膠、木薯）可直通中國廣大市場（C 正確）。\n   - **中國西部大開發**：連接雲南昆明，改善中國西南內陸經濟帶對外交通（B 正確）。\n   - **東協自由貿易**：寮國為東協會員國，鐵路開通直接拉動中國與東協十國的貿易總額（A 正確）。\n2. **為什麼「不可能減少馬六甲海峽的運輸價值」（選 D）？**：\n   - 中寮鐵路目前僅通抵寮國首都永珍（內陸城市），並未通達海洋！\n   - **馬六甲海峽承載全球超過 1/4 的海運貿易量**（特別是中東非洲通往東亞的巨量原油油輪、大宗散裝貨輪與集裝箱巨輪）。\n   - 鐵路運量與海運貨輪（一艘巨型油輪/貨輪可載數十萬噸）相差數百倍，且永珍未深入印度洋，因此**中寮鐵路絕不可能取代或減少馬六甲海峽的海運咽喉價值**！",
    "stem": "附圖是連接雲南省會至寮國首都的「中寮鐵路」。這條鐵路於 2021 年 12 月 3 日正式開通，這是中國「一帶一路」海外大戰略的標誌性鐵路，將擴大中國對東南亞的影響力。請問：哪一種影響不可能在通車之後發生？\n\n○ (A) 增加中國與東協會員的貿易總額\n○ (B) 改善中國西部經濟帶對外的交通\n○ (C) 增加寮國農產品在中國的競爭力\n○ (D) 將會減少馬六甲海峽的運輸價值",
    "answer": "(D) 將會減少馬六甲海峽的運輸價值",
    "diagramUrl": "assets/questions/q_soc_geo_china_laos_railway_malacca_strait_300.png",
    "solution": "將會減少馬六甲海峽的運輸價值。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "將會減少馬六甲海峽的運輸價值。 故選 (D)。"
  },
  {
    "id": "q_soc_hist_ww2_japan_southward_advance_oil_299",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歷史／二戰太平洋戰爭與東南亞：日本發動南進政策／美英荷石油禁運禁錮／搶奪荷屬東印度（印尼）石油與橡膠戰略資源／大東亞共榮圈口號與戰後東南亞獨立運動",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【二戰日本「南進政策」與石油命脈核心秒殺！】\n1. **核心歷史背景（為什麼日本不到一年席捲整個東南亞？）**：\n   - 1941 年日本侵華陷入泥淖，美國宣佈對日本實施**全面「石油禁運」**，荷蘭東印度與英國隨後跟進（ABCD 包圍網），日本石油儲備僅剩幾個月！\n   - 日本軍部為了奪取軍事命脈**「石油（印尼蘇門答臘島巨大油田）」**與橡膠、錫礦等戰略物資，決定偷襲珍珠港，同時迅速向南橫掃，不到一年即攻佔菲律賓、馬來亞、新加坡、印尼、新幾內亞及緬甸！\n2. **占領政策與戰後影響**：\n   - 日本在當地宣傳「亞洲人的亞洲」、「大東亞共榮圈」，開辦學校教授日語、培育開採石油橡膠的技術人員，並選派青年赴日留學。\n   - 雖然本質是殘酷的殖民掠奪，但客觀上摧毀了英法荷等西方老牌殖民帝國在東南亞的權威，二戰結束後，這些受過訓練與現代教育的青年成為推動印尼、緬甸等各國**爭取戰後民族獨立**的先驅菁英！",
    "stem": "有位學者感慨：\n不到一年時間，______（國家）已將菲律賓、馬來亞、新加坡、印尼、新幾內亞、緬甸等區域，通通納入自己的勢力範圍。\n占領當地後，占領軍就地開辦學校，訓練當地學生學習自己的語言，培養開採當地資源的專業技術人才。甚至選拔優秀學生到該國留學，為長期統治做準備。大戰結束後，許多留學生返鄉，參與民族、國家獨立等運動，成為各行各業的精英。\n請問：______（國家）與當地資源的配合，最有可能是？\n\n○ (A) 日本，石油\n○ (B) 英國，橡膠\n○ (C) 美國，石油\n○ (D) 荷蘭，橡膠",
    "answer": "(A) 日本，石油",
    "diagramUrl": "",
    "solution": "BCD 包圍網）。缺乏石油的日本海軍艦艇與航空部隊將面臨癱瘓危機。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "BCD 包圍網）。缺乏石油的日本海軍艦艇與航空部隊將面臨癱瘓危機。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_india_textile_cotton_demand_trade_298",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／南亞印度的經濟與產業特徵：棉紡織業發達／龐大人口與紡織內外銷帶動巨大棉花需求量／綠色革命糧食自給自足／全球貿易影響",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【印度產業與貿易兩大常見誤區秒殺！】\n1. **誤區一（以為印度是貧窮落後、糧食不足需要進口的國家？❌ 錯！）**：\n   - 印度在 1960 年代推動「綠色革命」，透過改良高產量稻米小麥種子、擴建灌溉水利設施與化肥農藥，**主要糧食作物（稻米、小麥）已達到高度「自給自足」並能出口**！絕非選項 (D)「糧食大量依賴進口」！\n2. **誤區二（以為印度盛產棉花就不需要擔心棉花需求？❌ 錯！）**：\n   - 德干高原西北部黑棉土盛產棉花、孟買是著名的棉紡織工業重鎮。\n   - 但因為印度**人口超過 14 億**，加上國內紡織成衣業規模極其龐大，國內棉花原料時常供不應求，其對全球棉花的需求變化會直接牽動國際棉花價格的漲跌！\n3. **汽車與礦產選項排查**：\n   - 世界汽車主要出口國為日本、德國、美國、韓國，並非印度。\n   - 印度鐵礦雖豐富，但主要供應國內鋼鐵工業與內需，非以鐵礦為單一命脈之主要資源出口大國（如澳洲、巴西）。",
    "stem": "全球化時代，農礦原料、工業產品的需求及價格漲跌影響各國，同時也受各國的影響。某財經網站針對印度的國際貿易發展，對該國和全球經濟的影響，進行系列報導。請問：下列何者最可能為報導內容之一？\n\n○ (A) 世界主要汽車出口國，汽車的出口量對該國經濟影響極大\n○ (B) 蘊藏豐富的鐵礦等礦產資源，為世界重要的資源出口大國\n○ (C) 紡織產業發達，對棉花需求量大，需求變化影響棉價漲跌\n○ (D) 熱帶栽培業發達，糧食大量依賴進口，易受國際糧價影響",
    "answer": "(C) 紡織產業發達，對棉花需求量大，需求變化影響棉價漲跌",
    "diagramUrl": "",
    "solution": "紡織產業發達，對棉花需求量大，需求變化影響棉價漲跌。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "紡織產業發達，對棉花需求量大，需求變化影響棉價漲跌。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_world_population_5_percent_density_111_exam_297",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／世界人口分布與環境負載力：全球人口稠密區（南亞恆河平原、東亞季風精耕平原）vs 人口稀疏區（乾燥荒漠、高緯苔原針葉林）／111會考題",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【111 會考全球人口極端分布秒殺密碼！】\n1. **看懂題目對比（5% 人口之謎）**：\n   - **深灰色區域（地廣人稀極致）**：涵蓋加拿大北部、西伯利亞、澳洲內陸、撒哈拉沙漠等廣袤土地，面積佔全球近一半，卻只有「5% 人口」！\n   - **黑色區域（極度稠密極致）**：僅僅是南亞「孟加拉與恆河三角洲」這一丁點面積，居然就住了與深灰色廣大土地相同的「5% 人口（約 3.5 億～4 億人）」！\n2. **尋找下一個「黑色區域（極高人口密度）」**：\n   - 題目要小齊在「淺灰色區域」畫一個同樣面積狹小卻擁有「5% 人口（約 3～4 億人）」的圓圈，必須選**全球極端人口稠密區**！\n   - **甲（美國西部大盆地/落磯山區）** ⟹ 雨影效應乾燥少雨、地廣人稀 ❌。\n   - **乙（北非撒哈拉沙漠邊緣）** ⟹ 副熱帶高壓籠罩乾燥氣候、人口極少 ❌。\n   - **丙（俄羅斯西伯利亞）** ⟹ 高緯嚴寒、永凍土覆蓋、人煙罕至 ❌。\n   - **丁（中國華北平原與長江中下游）** ⟹ **季風精耕水稻農業、平原沃野、人口數億、密度極高（正解 ✅）**！",
    "stem": "2014 年世界上只有 5% 的人口居住在附圖中的深灰色區域；而相同數量的人口則居住在圖中黑色區域。小齊想要在地圖上的淺灰色區域，以圓圈標示另一個人口數量最接近的範圍，則他標示在下列何地最為適宜？【111 年會考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(D) 丁",
    "diagramUrl": "assets/questions/q_soc_geo_world_population_5_percent_density_111_exam_297.png",
    "solution": "故本題正確答案為 (D) 丁。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (D) 丁。"
  },
  {
    "id": "q_soc_geo_wallace_east_indies_houses_108_exam_296",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／世界文化與環境適應：東南亞熱帶雨林高溫多雨環境／干欄式高架屋防潮防蟲通風特徵／華萊士《馬來群島自然考察記》／108會考題",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【108 會考世界四大經典傳統建築與氣候環境對照秒殺！】\n1. **(A) 蒙古包** ⟹ **溫帶乾燥/草原氣候**（蒙古高原、中亞）：便於拆卸搬遷、適應游牧生活。\n2. **(B) 窯洞** ⟹ **溫帶大陸性/半乾燥氣候**（中國黃土高原）：就地取材利用黃土直立性與保溫性，冬暖夏涼。\n3. **(C) 冰屋（Igloo）** ⟹ **極地寒帶苔原/冰原氣候**（北極因紐特人）：利用冰磚阻擋暴風雪禦寒保溫。\n4. **(D) 干欄式高架屋（正解 ✅）** ⟹ **熱帶雨林/熱帶季風氣候**（東南亞東印度群島、馬來群島）：\n   - **架高懸空**：避免地面熱帶濕氣潮溼、預防積水淹水、防止毒蛇毒蟲野獸侵入！\n   - **斜頂高脊**：利於迅速排除熱帶對流雨強降水。\n   - **通風百葉竹木材質**：就地取材竹木，通風散熱散濕氣！",
    "stem": "1854 年某英國博物學家前往東印度群島考察，八年內總共蒐集了 12 萬餘件的生物標本，並著有《馬來群島自然考察記：紅毛猩猩與天堂鳥的原鄉》。該博物學家在當地所見到的傳統住屋型式最可能為下列何者？【108 年會考】\n\n○ (A) 圓形圓頂帳篷（蒙古包）\n○ (B) 依山依崖開鑿之拱型石穴（黃土高原窯洞）\n○ (C) 半球形圓頂冰雪建築（極地冰屋）\n○ (D) 柱木支撐高架懸空之斜頂竹木屋（干欄式高架建築）",
    "answer": "(D) 柱木支撐高架懸空之斜頂竹木屋（干欄式高架建築）",
    "diagramUrl": "assets/questions/q_soc_geo_wallace_east_indies_houses_296.png",
    "solution": "圖：高架干欄式建築（正解 ✅） 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "圖：高架干欄式建築（正解 ✅） 故選 (D)。"
  },
  {
    "id": "q_soc_geo_indonesia_coastline_island_count_107_exam_295",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／東南亞自然環境：印尼「萬島之國」板塊交界群島地形／島嶼數量眾多導致海岸線長度世界第二／107會考題",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【107 會考印尼海岸線秒殺關鍵！】\n1. **國土面積大 ≠ 海岸線長**：俄羅斯國土面積世界第一（約 1700 萬平方公里），印尼國土面積僅約 190 萬平方公里，但印尼海岸線卻比俄羅斯還長，故不能選 (C)！\n2. **萬島之國的幾何效應**：\n   - 一整塊大陸（如俄羅斯）周圍只有一圈外圍海岸線。\n   - 印尼是由 **17,000 多個大小島嶼** 組成的群島國（位處印澳板塊、歐亞板塊與太平洋板塊交界帶）。\n   - 每個島嶼四周各自擁有一圈獨立海岸線，萬島相加累計總長度超過 54,000 公里，高居世界第二（僅次於同樣多島的加拿大）！\n3. **常見陷阱**：\n   - (A) 峽灣海岸曲折：峽灣分布在高緯度受冰河侵蝕地區（如挪威、智利、紐西蘭），位於赤道熱帶的印尼絕無峽灣！",
    "stem": "根據統計，印尼的海岸線長度排名世界第二位，比俄羅斯還長，其原因最可能為下列何者？【107 年會考】\n\n○ (A) 峽灣海岸曲折\n○ (B) 島嶼數量眾多\n○ (C) 國土面積較大\n○ (D) 所處緯度較低",
    "answer": "(B) 島嶼數量眾多",
    "diagramUrl": "",
    "solution": "島嶼數量眾多：正確。萬島相加之海岸線總長度極為龐大。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "島嶼數量眾多：正確。萬島相加之海岸線總長度極為龐大。 故選 (B)。"
  },
  {
    "id": "q_soc_hist_netherlands_indonesia_suwardi_294",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歷史／東南亞與大航海殖民歷史：十七世紀荷蘭東印度公司殖民荷屬東印度（印尼爪哇島）／甲乙丙丁地理地圖判讀",
    "uploadDate": "2026-10-30",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【東南亞主要殖民母國秒殺口訣與地圖代號全解析！】\n1. **東南亞殖民母國黃金對照表**：\n   - **印尼（丙，爪哇島／蘇門答臘）** ⟹ **荷蘭殖民**（17世紀荷蘭東印度公司設巴達維亞／今雅加達，建立荷屬東印度）。題目關鍵字「自十七世紀以來長期受荷蘭殖民」唯一鎖定**印尼**！\n   - **菲律賓（乙）** ⟹ **西班牙殖民**（16世紀麥哲倫到達，以西班牙國王腓力二世命名），後在美西戰爭（1898）後轉由**美國**統治。\n   - **臺灣（甲）** ⟹ 荷蘭雖曾統治南臺灣（1624-1662，僅38年），但隨後由明鄭、清朝接續，非「長期受荷蘭殖民」！\n   - **中南半島（丁，如越南、寮國、柬埔寨）** ⟹ 19世紀受**法國**殖民統治（法屬印度支那）；緬甸、馬來亞則受**英國**殖民；泰國維持獨立。\n2. **歷史人物補充（畢道文）**：\n   - 畢道文（蘇瓦迪·蘇里亞寧拉特，Ki Hajar Dewantara）為印尼獨立運動先驅與現代教育之父，曾在荷蘭積極推動反殖民運動與印尼獨立！",
    "stem": "畢道文的家鄉自十七世紀以來長期受荷蘭殖民，從醫科學校畢業後，他即前往荷蘭深造，並積極參與反荷蘭統治、支持家鄉獨立的政治運動。\n\n畢道文的家鄉最可能位於附圖中甲、乙、丙、丁何處？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(C) 丙",
    "diagramUrl": "assets/questions/q_soc_hist_netherlands_indonesia_suwardi_294.png",
    "solution": "），於爪哇島建立巴達維亞（今雅加達），以香料貿易為基礎建立殖民統治，統治印尼長達三百多年，直到二戰後印尼才爭取獨立。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-30",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "），於爪哇島建立巴達維亞（今雅加達），以香料貿易為基礎建立殖民統治，統治印尼長達三百多年，直到二戰後印尼才爭取獨立。 故選 (C)。"
  },
  {
    "id": "q_phy_torque_arm_perpendicular_distance_5_12_13_293",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化：力矩與轉動平衡／力臂嚴格定義（轉軸到作用線的垂直距離）／斜向力與畢氏三邊 5-12-13 判讀",
    "uploadDate": "2026-10-29",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【力臂定義秒殺口訣：找垂直，別找桿長！】\n1. **力臂絕非桿長**：只有當作用力「垂直」於桿子時，桿長才等於力臂！本題拉力為斜向，桿長 13 m 絕對不能當作力臂（誤選 D：130 kgw · m ❌）！\n2. **力臂的嚴格定義**：由「轉軸（支點）」向「力的作用線」所作的【垂直距離】！\n   - 圖中已明確畫出垂直記號，轉軸到作用線的垂直距離為 5 m，因此力臂 = 5 m！\n3. **直角三角形 5-12-13 幾何關係**：\n   - 桿長 13 m 是斜邊，力作用線的延長線長度 12 m 是鄰邊，垂直力臂 5 m 是對邊。\n   - 力矩 = 力 × 力臂 = 10 kgw × 5 m = 50 kgw · m！",
    "stem": "如圖，作用力 F 產生的力矩大小為多少？\n\n○ (A) 0 kgw · m\n○ (B) 50 kgw · m\n○ (C) 120 kgw · m\n○ (D) 130 kgw · m",
    "answer": "(B) 50 kgw · m",
    "diagramUrl": "assets/questions/q_phy_torque_arm_perpendicular_distance_5_12_13_293.png",
    "solution": "故本題正確答案為 (B) 50 kgw · m。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-29",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 50 kgw · m。"
  },
  {
    "id": "q_chi_su_shi_songfeng_pavilion_rest_292",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "審題不清",
    "concept": "國文文言文閱讀：蘇軾《記遊松風亭》／隨遇而安與放下執念的曠達胸襟／文意理解與細節判讀",
    "uploadDate": "2026-10-29",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【常見誤選 (C) 松風亭中陷阱！】\n- **容易誤選原因**：篇名為《記遊松風亭》，且文中提到「縱步松風亭下」、「望亭宇尚在木末」，容易先入為主以為他最終登上了松風亭。\n- **核心破題關鍵**：注意關鍵句「望亭宇尚在木末，意謂是如何得到？良久忽曰：『此間有甚麼歇不得處！』」——蘇軾頓悟到何必執著於非要走到高處的松風亭？眼前樹下路邊隨處皆可歇息！這種「放下執念、隨遇而安」的心境正是蘇軾散文的靈魂所在！",
    "stem": "閱讀下列選文，回答問題：\n\n余嘗寓居惠州嘉祐寺，縱步松風亭下，足力疲乏，思欲就林止息。望亭宇尚在木末，意謂是如何得到？良久忽曰：「此間有甚麼歇不得處！」由是如掛鈎之魚，忽得解脫。若人悟此，雖兵陣相接，鼓聲如雷霆，進則死敵，退則死法①，當恁麼②時也不妨熟歇。\n（蘇軾 記遊松風亭）\n注釋：①死法：死於軍法。 ②恁麼：這麼、如此。\n\n依據本文，蘇軾最後在何處稍作休憩？\n\n○ (A) 嘉祐寺中\n○ (B) 路邊樹下\n○ (C) 松風亭中\n○ (D) 山邊橋下",
    "answer": "(B) 路邊樹下",
    "diagramUrl": "",
    "solution": "路邊樹下：正確。就地在林木之下、路旁歇腳。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-29",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "路邊樹下：正確。就地在林木之下、路旁歇腳。 故選 (B)。"
  },
  {
    "id": "q_phy_combustion_mg_s_oxide_acidity_ph_291",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化：金屬與非金屬燃燒反應／氧化物溶於水之酸鹼性（氧化鎂呈鹼性、二氧化硫呈酸性）／pH值判讀",
    "uploadDate": "2026-10-29",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【金屬 vs 非金屬燃燒氧化物溶於水酸鹼性三大黃金法則】！\n1. **金屬燃燒產物（甲瓶：鎂）**：\n   - 鎂帶燃燒發出耀眼白光，生成白色粉末「氧化鎂」（2Mg + O₂ → 2MgO）。\n   - 氧化鎂溶於水生成「氫氧化鎂」（MgO + H₂O → Mg(OH)₂），為**鹼性水溶液**，使石蕊試紙變藍色，**pH > 7**！\n2. **非金屬燃燒產物（乙瓶：硫）**：\n   - 硫粉燃燒產生藍紫色火焰及刺激性臭味氣體「二氧化硫」（S + O₂ → SO₂）。\n   - 二氧化硫溶於水生成「亞硫酸」（SO₂ + H₂O → H₂SO₃），為**酸性水溶液**，使石蕊試紙變紅色，**pH < 7**！\n3. **常見秒殺盲點（銅不溶於水）**：\n   - 銅燃燒生成黑色的氧化銅（CuO），但氧化銅**難溶於水**，水溶液呈**中性（pH = 7）**！不可死背「所有金屬氧化物溶於水都呈鹼性」！",
    "stem": "阿偉將各放有鎂和硫的兩燃燒匙分別點火，然後各加入甲、乙兩充滿氧氣的瓶中繼續燃燒。待火焰熄滅後，分別加入少量的水，充分搖盪後，在室溫時，甲、乙兩瓶水溶液的 pH 值，下列何者正確？\n\n○ (A) 甲瓶 pH 值大於 7，乙瓶 pH 值大於 7\n○ (B) 甲瓶 pH 值大於 7，乙瓶 pH 值小於 7\n○ (C) 甲瓶 pH 值小於 7，乙瓶 pH 值小於 7\n○ (D) 甲瓶 pH 值小於 7，乙瓶 pH 值大於 7",
    "answer": "(B) 甲瓶 pH 值大於 7，乙瓶 pH 值小於 7",
    "diagramUrl": "",
    "solution": "甲瓶 pH 值大於 7，乙瓶 pH 值小於 7。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-29",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "甲瓶 pH 值大於 7，乙瓶 pH 值小於 7。 故選 (B)。"
  },
  {
    "id": "q_math_square_cef_ecd_dfg_area_290",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三幾何綜合：等腰三角形性質／畢氏定理列方程式求線段／平行 AA 相似求底邊與面積",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【正方形延伸等腰相似面積三大通關密碼】！\n1. **密碼一：由等角得等腰三角形**：\n   - 題目給予 $\\angle CEF = \\angle ECD$，在 $\\triangle FEC$ 中兩底角相等 ⟹ 為等腰三角形，故腰長 $\\overline{EF} = \\overline{CF}$！\n2. **密碼二：作垂直高 EH 巧妙構造直角三角形列畢氏定理**：\n   - 設 $\\overline{DF} = x$，則 $\\overline{CF} = x + 4$，等腰腰長 $\\overline{EF} = x + 4$。\n   - 從 $E$ 向 $\\overline{CD}$ 作垂線 $\\overline{EH} \\perp \\overline{CD}$，則 $\\overline{EH} = 4$，$\\overline{DH} = \\overline{AE} = 2$。\n   - $\\overline{FH} = \\overline{DF} + \\overline{DH} = x + 2$。\n   - 在直角 $\\triangle FEH$ 中畢氏定理：\n     $$(x + 4)^2 = 4^2 + (x + 2)^2 \\implies x^2 + 8x + 16 = 16 + x^2 + 4x + 4 \\implies 4x = 4 \\implies x = 1$$\n   - 得 $\\overline{DF} = 1$！\n3. **密碼三：利用 AA 相似求底邊 DG**：\n   - $\\overline{AB} // \\overline{CD} \\implies \\triangle AEG \\sim \\triangle DFG$（AA 相似性質）。\n   - $\\overline{AG} : \\overline{DG} = \\overline{AE} : \\overline{DF} = 2 : 1$。\n   - $\\overline{DG} = 4 \\times \\frac{1}{2 + 1} = \\frac{4}{3}$。\n4. **算面積**：\n   - $\\triangle DFG \\text{ 面積} = \\frac{1}{2} \\times \\overline{DF} \\times \\overline{DG} = \\frac{1}{2} \\times 1 \\times \\frac{4}{3} = \\mathbf{\\frac{2}{3}}$ ⟹ 選 **(A)**！",
    "stem": "如圖，正方形 ABCD 的邊長為 4，E 為 AB 中點，G 為 AD 上一點，延長 EG 交 CD 的延長線於 F 點，若 ∠CEF = ∠ECD，則 △DFG 的面積為何？\n\n○ (A) 2/3\n○ (B) 3/4\n○ (C) 2\n○ (D) 4",
    "answer": "(A) 2/3",
    "diagramUrl": "assets/questions/q_math_square_cef_ecd_dfg_area_290.png",
    "solution": "EHD$ 為矩形，故 $\\overline{EH} = \\overline{AD} = 4$。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "EHD$ 為矩形，故 $\\overline{EH} = \\overline{AD} = 4$。 故選 (A)。"
  },
  {
    "id": "q_phy_planet_gravity_mass_vs_weight_radius_double_288",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "星球表面萬有引力與體重：質量恆不變（太空人質量仍為 80 公斤）／半徑變 2 倍重力變為 1/4（體重變為 20 公斤重）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【質量 vs. 重量兩大秒殺鐵律】！\n1. **鐵律一：質量（公斤，kg）到宇宙任何地方都恆定不變！**\n   - 太空人在地球上的質量是 80 公斤，無論飛到月球、火星還是這個新行星，其**質量永遠是 80 公斤**！\n   - 選項 (B)「質量變為 160 公斤」與 (D)「質量變為 20 公斤」直接畫大叉秒殺排除！\n2. **鐵律二：星球表面重力（體重，kgw）與半徑平方成反比！**\n   - 星球表面萬有引力（即體重）：$$W = G \\frac{M \\cdot m}{R^2}$$\n   - 行星質量 $M$ 與地球相同，半徑 $R$ 為地球的 2 倍：\n   - 體重 $W' = \\frac{W}{2^2} = \\frac{80}{4} = \\mathbf{20 \\text{ 公斤重}}$！\n3. 綜合秒殺：質量不變（80 kg）＋ 體重除以 4（20 kgw） ⟹ 選 **(C)**！",
    "stem": "若某行星的質量與地球相同，但半徑為地球的 2 倍。若地球上一體重 80 公斤重的太空人登陸此行星表面，則下列敘述何者正確？\n\n○ (A) 太空人的體重變為 160 公斤重\n○ (B) 太空人的質量變為 160 公斤\n○ (C) 太空人的體重變為 20 公斤重\n○ (D) 太空人的質量變為 20 公斤",
    "answer": "(C) 太空人的體重變為 20 公斤重",
    "diagramUrl": "",
    "solution": "- 故選項 (B)、(D) 聲稱質量會改變，皆為嚴重觀念錯誤，直接排除。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 故選項 (B)、(D) 聲稱質量會改變，皆為嚴重觀念錯誤，直接排除。"
  },
  {
    "id": "q_phy_gravitation_inverse_square_definition_289",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "萬有引力定律基本性質：與距離平方成反比（非成正比）／必為吸引力／遵守牛頓第三運動定律（超距力）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【萬有引力四大核心性質一覽】！\n1. **成反比！成反比！成反比！**：\n   - 萬有引力大小與距離平方成「**反比**」（$F \\propto \\frac{1}{R^2}$），距離愈遠引力愈弱！\n   - 選項 (B) 寫成「成正比」是極度低級的審題粗心陷阱！\n2. **四大本質檢查**：\n   - 必為**吸引力**（自然界中萬有引力不存在斥力，靜電力才有斥力）。\n   - 遵守**牛頓第三運動定律**（甲吸引乙與乙吸引甲大小相等、方向相反，互為作用力與反作用力）。\n   - 普遍存在於**宇宙任何兩物體之間**（超距力）。\n3. 故 (B)「萬有引力和兩物體間的距離平方成正比」錯誤，選 **(B)**！",
    "stem": "有關萬有引力的敘述，下列何者錯誤？\n\n○ (A) 萬有引力必為吸引力\n○ (B) 萬有引力和兩物體間的距離平方成正比\n○ (C) 萬有引力遵守牛頓第三運動定律\n○ (D) 萬有引力存在於任何兩物體之間",
    "answer": "(B) 萬有引力和兩物體間的距離平方成正比",
    "diagramUrl": "",
    "solution": "萬有引力和兩物體間的距離平方成正比 👉 錯誤（本題所選）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "萬有引力和兩物體間的距離平方成正比 👉 錯誤（本題所選）。 故選 (B)。"
  },
  {
    "id": "q_phy_circular_motion_acceleration_nature_284",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "等速率圓周運動本質：向心加速度方向時刻指向圓心（方向隨位置改變）／屬於變加速度運動（非等加速度、非等速度）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【等速率圓周運動「三不是」秒殺口訣】！\n1. **不是「等速度運動」**：速度具有「大小」與「方向」，圓周運動的切線方向時刻改變，因此速度不斷改變，絕對不是等速度！\n2. **不是「等加速度運動」**：加速度同樣具有「大小」與「方向」！雖然向心加速度大小固定，但**向心加速度的方向隨時指向圓心，方向不斷在轉動改變**！只要加速度方向改變，就叫做「變加速度運動」，絕不是等加速度（等加速度運動的加速度方向與大小必須永遠恆定，如自由落體）！\n3. 綜合秒殺：有加速度（向心加速度）＋但不是等加速度（方向時刻改變） ⟹ 選 **(C)**！",
    "stem": "等速率圓周運動是屬於下列何種運動？\n\n○ (A) 具有加速度且是等加速度的運動\n○ (B) 減速度運動\n○ (C) 具有加速度但不是等加速度的運動\n○ (D) 等速度運動",
    "answer": "(C) 具有加速度但不是等加速度的運動",
    "diagramUrl": "",
    "solution": "1. 「速度」與「等速度」的定義： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 「速度」與「等速度」的定義： 故選 (C)。"
  },
  {
    "id": "q_phy_circular_motion_centripetal_force_direction_285",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "向心力與加速度的向量特性：向心力時刻指向圓心（方向隨位置轉動改變）／速度、加速度、受力方向皆非恆定",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「指向圓心」不等於「方向保持不變」！】\n1. **核心陷阱剖析**：\n   - 很多同學看到「向心力一直指向圓心」，就直覺誤以為「方向保持不變」而選錯！\n   - 事實上：物體在東邊時，圓心在西邊（力朝西）；物體轉到北邊時，圓心在南邊（力朝南）！力與加速度的**空間指向時刻在旋轉改變**！\n2. **物理量盤點（等速率圓周運動）**：\n   - **大小不變的量**：速率、向心加速度大小、向心力大小、週期、轉速。\n   - **方向不斷改變的量**：速度方向（切線）、加速度方向（指向圓心）、合力/向心力方向（指向圓心）。\n3. 故 (B)「向心力的方向保持不變」敘述錯誤，選 **(B)**！",
    "stem": "關於某物體作等速率圓周運動的敘述，下列何者錯誤？\n\n○ (A) 運動過程中存在一個向心力\n○ (B) 向心力的方向保持不變\n○ (C) 某物體的速度不斷改變\n○ (D) 某物體的加速度不斷改變",
    "answer": "(B) 向心力的方向保持不變",
    "diagramUrl": "",
    "solution": "向心力的方向保持不變 👉 錯誤（本題所選）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "向心力的方向保持不變 👉 錯誤（本題所選）。 故選 (B)。"
  },
  {
    "id": "q_phy_satellite_orbit_not_constant_velocity_286",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "人造衛星繞地運行：萬有引力提供向心力做圓周運動／等速率而非等速度（切線方向持續轉彎）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【人造衛星是「等速率圓周運動」，絕非「等速度運動」！】\n1. **「等速度」的唯一可能**：\n   - 「等速度運動」必須是**大小不變且方向不變**的「等速直線運動」（加速度 a = 0，不受合力或合力為 0）。\n2. **人造衛星真實運動狀態**：\n   - 人造衛星繞地球轉動，受地球「萬有引力」吸引作為向心力（故 D 正確）。\n   - 軌跡為圓周（故 A 正確）。\n   - 快慢（速率）不隨時間改變（故 B 正確）。\n   - 運動方向沿軌道切線持續彎曲，因此**速度隨時在改變**，絕非等速度！\n3. 故 (C)「人造衛星的移動屬於等速度運動」錯誤，選 **(C)**！",
    "stem": "一個繞著地球運轉的人造衛星，關於此人造衛星運動情形的敘述，下列何者錯誤？\n\n○ (A) 屬於圓周運動\n○ (B) 速率將不隨時間而改變\n○ (C) 人造衛星的移動屬於等速度運動\n○ (D) 人造衛星與地球之間有作用力存在",
    "answer": "(C) 人造衛星的移動屬於等速度運動",
    "diagramUrl": "",
    "solution": "人造衛星的移動屬於等速度運動 👉 錯誤（本題所選）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "人造衛星的移動屬於等速度運動 👉 錯誤（本題所選）。 故選 (C)。"
  },
  {
    "id": "q_phy_circular_motion_turn_faster_need_more_force_287",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "向心力公式分析：F = mv²/R（轉動愈快速率愈大，所需向心力愈大）／腳踏車轉彎靠摩擦力提供向心力",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【轉得愈快，需要愈大的向心力，絕不會更省力！】\n1. **向心力大小公式核心**：\n   $$F = \\frac{m v^2}{R}$$\n   - 當半徑 $R$ 與質量 $m$ 固定時，所需向心力 $F$ 與速率平方 $v^2$ 成正比（$F \\propto v^2$）。\n   - **轉動愈快 ⟹ 速率 v 愈大 ⟹ 所需向心力 F 愈大**！\n2. **生活常識檢驗（甩水桶／開車過彎）**：\n   - 手拉繩子甩球或手提水桶旋轉，轉得愈快手必須拉得愈用力，若手抓不住繩子就會斷掉或飛出去！\n   - 開車或騎腳踏車轉彎時車速愈快，輪胎與地面所需的側向摩擦力（向心力）愈大，否則容易打滑失控！\n3. 故 (D)「轉動愈快時愈省力，所需的向心力愈小」完全顛倒錯誤，選 **(D)**！",
    "stem": "關於圓周運動的敘述，下列何者錯誤？\n\n○ (A) 騎腳踏車轉彎時亦需要向心力\n○ (B) 人造衛星繞地球運行可視為圓周運動\n○ (C) 為一種加速度運動，加速度方向指向圓心\n○ (D) 轉動愈快時愈省力，所需的向心力愈小",
    "answer": "(D) 轉動愈快時愈省力，所需的向心力愈小",
    "diagramUrl": "",
    "solution": "轉動愈快時愈省力，所需的向心力愈小 👉 錯誤（本題所選）。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "轉動愈快時愈省力，所需的向心力愈小 👉 錯誤（本題所選）。 故選 (D)。"
  },
  {
    "id": "q_phy_earth_rotation_centripetal_force_vs_gravity_283",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "地球自轉圓周運動：向心力 F 由萬有引力 W 的分力提供（F < W）／地面受力平衡與視重（W - N = F）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【站在地表「向心力 F vs. 地球引力 W」秒殺物理模型】！\n1. **地面受力力圖分析（指向地心為正）**：\n   - 人站在地球表面，受向下指向地心的「地球萬有引力 $W$」。\n   - 地面給人向上支撐的「正向支持力 $N$」（磅秤讀數／體重）。\n   - 兩者的合力提供了人隨地球自轉做圓周運動所需的「向心力 $F$」：\n     $$W - N = F \\implies W = F + N$$\n2. **物理意義剖析**：\n   - 因為我們穩穩站在地上，地面一定有給我們向上的支撐力（$N > 0$）。\n   - 既然 $W = F + N$ 且 $N > 0$，所以 **地球引力 W 必然大於向心力 F**（即 **$F < W$**）！\n3. **極端狀況推演（秒殺誘答選項）**：\n   - **若 $F = W$**：此時 $N = 0$，表示地面不再提供支撐力，人會處於**完全失重／無重力懸浮**狀態（像人造衛星繞地運行一樣）！\n   - **若 $F > W$**：向心力不足，地球引力拉不住人，人將**被甩出外太空**！\n4. 故在正常地球自轉下，所需向心力遠小於引力，關係必為 **$F < W$** ⟹ 選 **(C)**！",
    "stem": "地球處於不斷自轉的運動中，故你在地面上所需之向心力 F 和所受的地球引力 W，兩者比較關係為何？\n\n○ (A) F > W\n○ (B) F = W\n○ (C) F < W\n○ (D) 無法比較",
    "answer": "(C) F < W",
    "diagramUrl": "",
    "solution": "$F < W$：引力的一部分提供向心力，大部分表現為壓在地面上的正向力（視重），人穩穩立於地表。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "$F < W$：引力的一部分提供向心力，大部分表現為壓在地面上的正向力（視重），人穩穩立於地表。 故選 (C)。"
  },
  {
    "id": "q_phy_gravitation_inverse_square_law_distance_double_282",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "萬有引力定律：引力大小與距離平方成反比（F ∝ 1/R²）／質量不變時距離變為 2 倍引力變為 1/4（0.25F）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【萬有引力「距離平方成反比」秒殺觀念】！\n1. **題目給的質量數值（100公斤、45公斤）是誘答雜訊**：\n   - 因為兩物體前後質量完全沒有改變，所以根本不需要去乘 100 × 45 浪費計算時間！\n2. **萬有引力公式大核心**：\n   $$F = G \\times \\frac{m_1 m_2}{R^2}$$\n   - 當質量不變時，萬有引力與兩物體距離的「平方」成反比：$$F \\propto \\frac{1}{R^2}$$\n3. **距離倍數平方反比公式**：\n   - 距離由 1 公尺變為 2 公尺（距離變為 **2 倍**）：\n   - 新引力 $F' = \\frac{F}{2^2} = \\frac{1}{4}F = \\mathbf{0.25F}$！\n4. **常見陷阱警告**：\n   - 粗心以為距離變 2 倍引力變一半選 0.5F ❌（忘記平方！）。\n   - 粗心看成正比選 4F ❌（距離越遠引力必然越小！）。",
    "stem": "甲物體的質量為 100 公斤，乙物體的質量為 45 公斤，若兩物體相距 1 公尺時，其萬有引力為 F，則當兩物體相距 2 公尺時，其萬有引力是多少？\n\n○ (A) 0.25F\n○ (B) 0.5F\n○ (C) F\n○ (D) 4F",
    "answer": "(A) 0.25F",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) 0.25F。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 0.25F。"
  },
  {
    "id": "q_eng_tag_question_those_they_arent_they_281",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "指示代名詞當主詞的附加問句規則：this/that 轉 it，these/those 轉 they／前肯後否（are 轉 aren't）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【指示代名詞（this/that/these/those）附加問句三大鐵律】！\n1. **附加問句主詞「必須是人稱代名詞」，絕不能重複 this / that / these / those**：\n   - **this / that** 轉為 ⟹ **it**！\n   - **these / those** 轉為 ⟹ **they**！\n   - 絕對不能直接寫 aren't those 或 are those ❌（直接排除 B、D 選項）！\n2. **動詞對應與前肯後否**：\n   - 直述句主要動詞為肯定句 **are**。\n   - 遵守「前肯後否」原則，附加問句必須用否定縮寫形式 **aren't**（直接排除 A 選項）！\n3. 綜合秒殺：肯定 are ⟹ aren't；主詞 those ⟹ they ⟹ 答案秒選 **(C) aren't they**！",
    "stem": "Those are just the same tricks, ______?\n\n○ (A) are they\n○ (B) are those\n○ (C) aren't they\n○ (D) aren't those",
    "answer": "(C) aren't they",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (C) aren't they。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) aren't they。"
  },
  {
    "id": "q_eng_tag_question_gerund_subject_104_exam_280",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "動名詞當主詞視為單數（代名詞用 it）／附加問句規則：前否後肯＋動詞一致（be 動詞 is）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【動名詞當主詞的附加問句四大口訣】！\n1. **主詞是「動名詞片語」視為單數事物 ⟹ 代名詞用 it**：\n   - 主詞為「Getting up early on a cold morning」（在寒冷的早晨早起），這是一件事，附加問句代名詞必須用 **it**！千萬不要看語意以為是在對「你」講話而選 you！\n2. **抓主要動詞 ⟹ 附加問句動詞要對應**：\n   - 直述句主要動詞為 be 動詞 **is**，附加問句就必須使用 **be 動詞**，不能用助動詞 does / do！\n3. **前否後肯 ⟹ 負負不得正**：\n   - 前半句是 **is not easy**（否定句），附加問句就必須使用肯定形 **is it**！\n4. 綜合秒殺：前否 (is not) ⟹ 後肯 (is)；主詞 (Getting up...) ⟹ it ⟹ 答案秒選 **(D) is it**！",
    "stem": "Getting up early on a cold morning is not easy, ______? 【104年會考】\n\n○ (A) are you\n○ (B) do you\n○ (C) does it\n○ (D) is it",
    "answer": "(D) is it",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (D) is it。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (D) is it。"
  },
  {
    "id": "q_eng_parallel_gerund_infinitive_love_doing_listening_279",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "動詞受詞對等平行結構：love + V-ing and V-ing 或 love + to V1 and (to) V2／對等連接詞 and 詞性一致性",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【love 後接受詞的平行結構（動名詞 vs. 不定詞）】！\n1. **love 的兩種受詞形式**：\n   - love 後方接動作時，可以接「動名詞（V-ing）」或「不定詞（to V）」，兩者皆表示喜愛做某事。\n2. **對等連接詞 and 的平行原則（前後詞性必須對稱一致）**：\n   - 若前面選擇動名詞，後面也必須是動名詞：**love + V1-ing and V2-ing**。\n   - 若前面選擇不定詞，後面也必須是不定詞（第二個 to 通常省略）：**love + to V1 and (to) V2**。\n3. **常見混淆選項陷阱**：\n   - 選項 (A) does; listens ❌：句子已有主要動詞 loves，不能直接出現兩個第三人稱單數動詞作為受詞！\n   - 選項 (C) do; listen ❌：原形動詞不能直接作 love 的受詞（love 不是使役動詞或感官動詞）！\n   - 選項 (D) doing; to listen ❌：前面用動名詞 doing，後面卻用不定詞 to listen，破壞了 and 連接的平行對稱結構！\n4. 正確答案為 **(B) doing; listening**！",
    "stem": "My brother loves ______ his homework and ______ to music in his bedroom.\n\n○ (A) does; listens\n○ (B) doing; listening\n○ (C) do; listen\n○ (D) doing; to listen",
    "answer": "(B) doing; listening",
    "diagramUrl": "",
    "solution": "doing; listening ✅：兩者皆為動名詞（V-ing and V-ing），結構完全對稱一致，符合語法。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "doing; listening ✅：兩者皆為動名詞（V-ing and V-ing），結構完全對稱一致，符合語法。 故選 (B)。"
  },
  {
    "id": "q_eng_gerund_stop_keep_practice_chain_278",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "動詞後接受詞用法：stop + V-ing（停止做某事）vs. stop + to V（停下來去做）／keep + V-ing／practice + V-ing（連鎖動名詞）",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【stop 的兩種接法差異 ＋ keep 連鎖動名詞陷阱】！\n1. **stop + V-ing vs. stop + to V 大辨析（國中必考大考點）**：\n   - **stop + V-ing**：**停止正在做的動作**（放棄、不做某事）。例如：Never stop learning English（永不放棄／停止學習英文）。\n   - **stop + to V**：**停下手邊的事，轉身去進行另一件事**（不定詞作目的副詞）。例如：He stopped to drink water（他停下來去喝水）。\n   - 題幹前句意為「絕不要中途放棄/停止學習英文」，故第一空格必須接動名詞 **learning**！\n2. **keep + V-ing 的連鎖動名詞陷阱**：\n   - **keep + V-ing**：持續／一直做某事 ⟹ keep 後方必須接動名詞 **practicing**。\n   - 留意後方的 speaking：因為動詞 **practice**（練習）後方習慣也是接動名詞（**practice + V-ing**），所以形成了「keep practicing speaking English」（持續練習說英文）的漂亮連鎖動名詞結構！\n3. 綜合答案：Never stop **learning** ... Always keep **practicing** ... ⟹ 正確答案選 **(C)**！",
    "stem": "Never stop ______ English. Always keep ______ speaking English every day.\n\n○ (A) to learn; to practice\n○ (B) to learn; practicing\n○ (C) learning; practicing\n○ (D) learning; to practice",
    "answer": "(C) learning; practicing",
    "diagramUrl": "",
    "solution": "learning; practicing。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "learning; practicing。 故選 (C)。"
  },
  {
    "id": "q_eng_verb_object_gerund_infinitive_kept_wanted_277",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "動詞後接受詞用法：keep + V-ing（持續...）／want + to V（想要...）／look at 與 watch 差異",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【動名詞 vs. 不定詞＋看手錶動詞搭配】！\n1. **看手錶用「look at」而非「watch」**：\n   - **watch**：觀看「會動的畫面或過程」（如 watch TV 看電視、watch a movie 看電影、watch a game 看球賽）。\n   - **look at**：注視、盯著某個具體物品（如 look at the watch 看手錶確認時間、look at the blackboard 看黑板）。故看手錶必須用 **look at her watch**！\n2. **第一個空格動詞 keep 的慣用句型**：\n   - **keep + V-ing**（持續／一直做某事），過去式為 kept ⟹ 後方必須接動名詞 **looking at**！\n3. **第二個空格動詞 want 的慣用句型**：\n   - **want + to V**（想要做某事），過去式為 wanted ⟹ 後方必須接不定詞 **to go**！\n4. 組合解題：kept **looking at** her watch ... wanted **to go** home ⟹ 選 **(C)**！",
    "stem": "Melody kept ______ her watch during the party because she wanted ______ home early.\n\n○ (A) watching; going\n○ (B) to watch; to go\n○ (C) looking at; to go\n○ (D) to look at; going",
    "answer": "(C) looking at; to go",
    "diagramUrl": "",
    "solution": "looking at; to go。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "looking at; to go。 故選 (C)。"
  },
  {
    "id": "q_math_tilted_tree_shadow_trig_274",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學幾何：傾斜樹木影子長度／外角定理與等腰三角形性質／特殊角 30-60-90 三角比求高",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【傾斜樹木影子秒殺兩步驟：外角得等腰 ＋ 特殊直角三角形！】\n1. **第一步（外角定理秒得等腰三角形）**：\n   - 在 $\\triangle ABC$ 中，外角 $\\angle ACD = 60^\\circ$，內角 $\\angle B = 30^\\circ$。\n   - 依三角形外角定理：$\\angle BAC = \\angle ACD - \\angle B = 60^\\circ - 30^\\circ = 30^\\circ$！\n   - 兩底角相等（$\\angle B = \\angle BAC = 30^\\circ$） ⟹ $\\triangle ABC$ 為等腰三角形，斜邊 $\\overline{AC} = \\overline{BC} = 10$ 公尺！\n2. **第二步（作高求樹高 AB）**：\n   - 從頂點 A 向地面作垂直高 $\\overline{AD} \\perp \\overline{CD}$。\n   - 在 $30^\\circ-60^\\circ-90^\\circ$ 直角 $\\triangle ACD$ 中（斜邊 $AC = 10$）：\n     $$\\overline{AD} = 10 \\times \\sin 60^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$$\n   - 在直角 $\\triangle ABD$ 中（$\\angle B = 30^\\circ$）：\n     $$\\sin 30^\\circ = \\frac{\\overline{AD}}{\\overline{AB}} \\implies \\frac{1}{2} = \\frac{5\\sqrt{3}}{x} \\implies x = 10\\sqrt{3}$$\n3. 樹原本的高度為 $10\\sqrt{3}$ 公尺！",
    "stem": "如圖，颱風過後路樹傾斜與地面夾角為 30°，若現在太陽光線與地面的夾角為 60°，此時樹的影長約為 10 公尺，則此樹原來的高度為多少公尺？\n\n○ (A) 10 + 5√3\n○ (B) 10√3\n○ (C) 5 + 5√3\n○ (D) 10",
    "answer": "(B) 10√3",
    "diagramUrl": "assets/questions/q_math_tilted_tree_shadow_trig_274.png",
    "solution": "$ 點，樹頂為 $A$ 點，樹身（原樹高）為線段 $\\overline{AB} = x$。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "$ 點，樹頂為 $A$ 點，樹身（原樹高）為線段 $\\overline{AB} = x$。 故選 (B)。"
  },
  {
    "id": "q_math_parallelogram_ratio_aef_deg_cgd_275",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學幾何：平行四邊形相似三角形面積比／蝴蝶型相似與同高面積比連比",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平行四邊形三角形面積比三大破題步驟】！\n1. **相似三角形邊長比 ＝ 面積平方比**：\n   - $\\triangle AFE \\sim \\triangle DCE$（AA 相似），邊長比 $\\overline{AE} : \\overline{DE} = 2 : 3$。\n   - 面積比 $= 2^2 : 3^2 = 4 : 9$ ⟹ 設 $\\triangle AFE = 4a, \\triangle DCE = 9a$。\n2. **蝴蝶型相似抓線段比**：\n   - $\\triangle DEG \\sim \\triangle BCG$（AA 相似），邊長比 $\\overline{EG} : \\overline{CG} = \\overline{DE} : \\overline{BC} = 3 : (2+3) = 3 : 5$。\n3. **同高三角形分割線段面積比**：\n   - 在 $\\triangle DCE$ 中，線段 $\\overline{CE}$ 被 G 分成 $\\overline{EG} : \\overline{CG} = 3 : 5$。\n   - $\\triangle DEG$ 面積 $= 9a \\times \\frac{3}{8} = \\frac{27}{8}a$。\n   - $\\triangle CGD$ 面積 $= 9a \\times \\frac{5}{8} = \\frac{45}{8}a$。\n4. **同乘 8 求整數連比**：\n   - $\\triangle AEF : \\triangle DEG : \\triangle CGD = 4a : \\frac{27}{8}a : \\frac{45}{8}a = 32 : 27 : 45$！",
    "stem": "如圖，在平行四邊形 ABCD 中，E 點在 AD 上，延長 CE 交 BA 的延長線於 F 點，CE 和 BD 相交於 G 點，若 AE : DE = 2 : 3，則 △AEF 面積 : △DEG 面積 : △CGD 面積 = ？\n\n○ (A) 3 : 2 : 5\n○ (B) 8 : 6 : 9\n○ (C) 16 : 15 : 20\n○ (D) 32 : 27 : 45",
    "answer": "(D) 32 : 27 : 45",
    "diagramUrl": "assets/questions/q_math_parallelogram_ratio_aef_deg_cgd_275.png",
    "solution": "$ 中，$\\overline{AB} // \\overline{CD}$，故延長線 $\\overline{AF} // \\overline{CD}$。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "$ 中，$\\overline{AB} // \\overline{CD}$，故延長線 $\\overline{AF} // \\overline{CD}$。 故選 (D)。"
  },
  {
    "id": "q_math_triangle_midpoint_fbc_area_276",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學幾何：平行截線相似三角形面積比／梯形內部同底三角形面積求法",
    "uploadDate": "2026-10-28",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平行線中點三角形面積秒殺技巧】！\n1. **大三角形 vs 小三角形面積比**：\n   - $\\overline{DE} // \\overline{BC} \\implies \\triangle ADE \\sim \\triangle ABC$。\n   - 邊長比 $\\overline{AD} : \\overline{AB} = 2 : (2+1) = 2 : 3$。\n   - 面積比 $= 2^2 : 3^2 = 4 : 9$。\n   - 四邊形 $DBCE$ 佔 $\\triangle ABC$ 的 $1 - \\frac{4}{9} = \\frac{5}{9}$ 面積：\n     $$\\text{四邊形 } DBCE \\text{ 面積} = 120 \\times \\frac{5}{9} = \\frac{200}{3}$$\n2. **梯形中同底同高三角形面積比**：\n   - $\\triangle FBC$ 的底為 $\\overline{BC}$，高恰好為梯形 $DBCE$ 的高！\n   - $\\triangle FBC$ 面積 $= \\frac{1}{2} \\times \\overline{BC} \\times h$。\n   - 梯形 $DBCE$ 面積 $= \\frac{1}{2} \\times (\\overline{DE} + \\overline{BC}) \\times h$。\n   - 面積比 $= \\overline{BC} : (\\overline{DE} + \\overline{BC}) = 3 : (2 + 3) = 3 : 5$！\n   - 因此 $\\triangle FBC$ 面積 $= \\frac{200}{3} \\times \\frac{3}{5} = 40$！",
    "stem": "如圖，在 △ABC 中，D、E 兩點分別在 AB、AC 上，DE // BC，F 為 DE 的中點，若 AD : BD = 2 : 1，△ABC 面積為 120，則 △FBC 面積為何？\n\n○ (A) 60\n○ (B) 50\n○ (C) 40\n○ (D) 30",
    "answer": "(C) 40",
    "diagramUrl": "assets/questions/q_math_triangle_midpoint_fbc_area_276.png",
    "solution": "$ 中，$\\overline{DE} // \\overline{BC}$，故 $\\triangle ADE \\sim \\triangle ABC$（AA 相似性質）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-28",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "$ 中，$\\overline{DE} // \\overline{BC}$，故 $\\triangle ADE \\sim \\triangle ABC$（AA 相似性質）。 故選 (C)。"
  },
  {
    "id": "q_phy_gravitation_action_reaction_109_exam_273",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化：牛頓萬有引力定律與第三運動定律／作用力與反作用力大小相等／109會考題",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【109 會考萬有引力兩大經典陷阱秒殺！】\n1. **陷阱一（俊傑：橡皮擦吸引宇宙中每一個物體「力都相同」？❌ 錯！）**：\n   - 公式：$F = G\\frac{m_1 m_2}{r^2}$。\n   - 引力大小取決於『對方的質量 $m_2$』與『兩者的距離 $r$』。橡皮擦吸筆的引力、吸地球的引力、吸遙遠月球的引力，絕對各不相同，絕非「相同大小」！\n2. **陷阱二（美玲：地球質量超大，所以地球吸我大於我吸地球？❌ 錯！）**：\n   - 萬有引力是成對出現的「作用力與反作用力」（牛頓第三運動定律）！\n   - 作用力與反作用力**大小必然相等、方向相反**！\n   - 『地球吸引美玲的萬有引力』＝『美玲吸引地球的萬有引力』！\n   - 為什麼美玲掉向地球而不是地球衝向美玲？因為 $a = \\frac{F}{m}$，地球質量巨大導致加速度微乎其微，但**受力大小絕對完全相等**！",
    "stem": "俊傑與美玲對於萬有引力定律分別提出以下看法：\n俊傑：舉例來說，我桌上的橡皮擦，它以相同大小的力吸引著宇宙中的每一個物體，這種力就是萬有引力。\n美玲：舉例來說，我腳底下的地球，它的質量非常大，所以它作用於我的萬有引力會遠大於我作用於它的萬有引力。\n關於兩人的看法是否符合萬有引力定律，下列何者正確？【109.會考】\n\n○ (A) 兩人的看法均符合\n○ (B) 兩人的看法均不符合\n○ (C) 只有俊傑的看法符合\n○ (D) 只有美玲的看法符合",
    "answer": "(B) 兩人的看法均不符合",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 兩人的看法均不符合。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 兩人的看法均不符合。"
  },
  {
    "id": "q_phy_kepler_orbit_universal_gravitation_distance_272",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化：萬有引力定律與橢圓軌道／引力與距離平方成反比／100年基測題",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【萬有引力定律核心口訣：質量乘積成正比、距離平方成反比！】\n1. **公式定律**：$F = G\\frac{M \\cdot m}{R^2}$\n   - 當太陽質量 $M$ 與小行星質量 $m$ 保持固定時，萬有引力 $F$ 與距離的平方成反比（$F \\propto \\frac{1}{R^2}$）。\n2. **大小關係逆轉（大反比關係）**：\n   - 距離越大，引力越小（離太陽越遠，吸力越弱）！\n   - 距離越近，引力越大（離太陽越近，吸力越強）！\n   - 已知距離大小：$R_甲 > R_乙 > R_丙$（甲為遠日點、丙為近日點）。\n   - 因此萬有引力大小必然相反：$F_甲 < F_乙 < F_丙$（丙處引力最大，甲處引力最小）！\n3. **延伸考點（克卜勒第二行星定律／公轉速率）**：\n   - 近日點丙處引力最大，加速度最大，公轉速率最快；\n   - 遠日點甲處引力最小，加速度最小，公轉速率最慢！",
    "stem": "如圖所示，一顆小行星以橢圓形軌道繞著太陽運行，小行星在甲、乙、丙三個位置時與太陽的距離分別為 R甲、R乙、R丙；小行星與太陽之間萬有引力大小分別為 F甲、F乙、F丙。若運行的過程中，太陽與小行星的質量變化忽略不計，且已知 R甲 > R乙 > R丙，則下列關係何者正確？【100.基測Ⅱ】\n\n○ (A) F甲 < F乙 < F丙\n○ (B) F甲 = F乙 = F丙\n○ (C) F甲 > F乙 > F丙\n○ (D) F甲 = F乙 ≠ F丙",
    "answer": "(A) F甲 < F乙 < F丙",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) F甲 < F乙 < F丙。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) F甲 < F乙 < F丙。"
  },
  {
    "id": "q_phy_geostationary_satellite_circular_motion_gravity_271",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化：圓周運動與萬有引力／地球同步衛星之運動特性、向心力來源與慣性飛行",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【人造衛星圓周運動四大黃金考點】！\n1. **軌道切線方向不需要施力（牛頓第一運動定律／慣性）**：\n   - 太空為真空環境，幾乎無空氣阻力。衛星維持等速率前進是依靠「慣性」，**不需要沿著軌道切線方向不斷施力或點火噴氣**！\n2. **唯一受力是「地球萬有引力」（充當向心力）**：\n   - 地球對衛星的萬有引力指向地心，恰好提供衛星作等速率圓周運動所需的「向心力」。\n   - 萬有引力與運動方向（切線）互相垂直，故**引力不對衛星作功**（作功為 0，動能保持不變）。\n3. **等速率 vs 等速度**：\n   - 衛星作等速率圓周運動，速率大小不變；但運動方向時刻在改變，故為「變速度運動」，必有加速度（向心加速度）！\n4. **萬有引力與距離平方成反比**：\n   - 衛星離地心距離改變，萬有引力大小必然隨之改變。",
    "stem": "地球同步衛星是一種永遠固定在地球上空某個位置的衛星，它的運行週期必須和地球自轉週期時間一樣，繞一圈地球的時間約為 24 小時，同時高度需維持在 35786 公里左右，同步衛星只能定點在赤道上空。現有一個同步衛星運行地球一周，關於此衛星的運動情形，下列敘述何者錯誤？\n\n○ (A) 此衛星的運行屬於等速率運動\n○ (B) 此衛星的運行需要向心力\n○ (C) 衛星與地球之間的距離，會影響地球對此衛星的引力大小\n○ (D) 此衛星的運行需要沿著軌道方向不斷施力",
    "answer": "(D) 此衛星的運行需要沿著軌道方向不斷施力",
    "diagramUrl": "",
    "solution": "故本題敘述錯誤的選項為 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題敘述錯誤的選項為 (D)。"
  },
  {
    "id": "q_math_quadratic_irrational_root_reverse_equation_270",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：一元二次方程式根的逆推／無理根反求原方程式比對係數求 k",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【無理根求未知係數三大解法：千萬別硬代入！】\n1. **避坑大忌：不要把 $x = 1 + \\frac{\\sqrt{10}}{2}$ 硬代回方程式！**\n   - 若直接代入 $k(1 + \\frac{\\sqrt{10}}{2})^2 - 4(1 + \\frac{\\sqrt{10}}{2}) - 3 = 0$，分數乘開加根號計算極為繁瑣，容易算錯！\n2. **秒殺首選：孤立根號兩邊平方（逆推方程式法）**：\n   - 原根：$x = 1 + \\frac{\\sqrt{10}}{2}$\n   - 同乘 2：$2x = 2 + \\sqrt{10}$\n   - 移項孤立根號：$2x - 2 = \\sqrt{10}$\n   - 兩邊平方消去根號：$(2x - 2)^2 = (\\sqrt{10})^2 \\implies 4x^2 - 8x + 4 = 10$\n   - 移項整理成 = 0：$4x^2 - 8x - 6 = 0$\n   - 同除以 2：$2x^2 - 4x - 3 = 0$\n   - 比對原式 $kx^2 - 4x - 3 = 0$，一次項與常數項完全吻合，直接秒得 $k = 2$！",
    "stem": "若 1 + √10/2 為方程式 kx² - 4x - 3 = 0 之一根，則 k = ？\n\n○ (A) 1\n○ (B) 2\n○ (C) 3\n○ (D) 4",
    "answer": "(B) 2",
    "diagramUrl": "",
    "solution": "故本題填空答案為 2（選擇題型對應 (B) 2）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題填空答案為 2（選擇題型對應 (B) 2）。"
  },
  {
    "id": "q_math_completing_square_abc_sum_269",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：二次多項式配方法頂點式／係數比對法求 a + b + c",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【二次式配方法提出首項係數避坑防呆】！\n1. **提出首項係數 4**：\n   - $4x^2 + 8x + a = 4(x^2 + 2x) + a$\n2. **括號內配成完全平方，外面記得扣掉多加的常數**：\n   - 括號內補上一半平方：$(2/2)^2 = 1$\n   - ⚠️ 注意！括號內加 1，實際上因為外面乘了 4，等於多加了 $4 \\times 1 = 4$！\n   - 外面必須立即減去 4 平衡：$4(x^2 + 2x + 1) + (a - 4) = 4(x + 1)^2 + (a - 4)$！\n3. **係數對照求 a, b, c**：\n   - 比對 $b(x + c)^2 + 3$：\n     - $b = 4$\n     - $c = 1$\n     - $a - 4 = 3 \\implies a = 7$\n   - 所求 $a + b + c = 7 + 4 + 1 = 12$！",
    "stem": "利用配方法將 4x² + 8x + a 化成 b(x + c)² + 3 的形式，則 a + b + c = ？\n\n○ (A) 9\n○ (B) 12\n○ (C) 13\n○ (D) 25",
    "answer": "(B) 12",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 12。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 12。"
  },
  {
    "id": "q_math_quadratic_completing_square_k_expression_268",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：一元二次方程式配方法應用／利用代數符號 k 表示兩方程式之根",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【數字很大莫慌張：配方法與符號替換秒殺法！】\n1. **不要硬開根號求 k**：\n   - $x^2 - 3969 = 0$ 的兩解為 $\\pm k$，直接得 $k^2 = 3969$。千萬不要花時間去硬算 $\\sqrt{3969} = 63$，因為選項全部帶有符號 $k$！\n2. **第二個方程式標準配方法**：\n   - $2x^2 + 12x - 7920 = 0$\n   - 先兩邊同除以 2：$x^2 + 6x - 3960 = 0$\n   - 移項常數項：$x^2 + 6x = 3960$\n   - 兩邊同加 $(6/2)^2 = 9$：$x^2 + 6x + 9 = 3969$\n   - 完全平方式：$(x + 3)^2 = 3969 = k^2$！\n3. **開平方並移項求根**：\n   - $x + 3 = \\pm k \\implies x = -3 \\pm k$（即 $-3 + k$ 或 $-3 - k$）。\n   - 比對選項，正確答案為 (A) $-3 + k$！",
    "stem": "若方程式 x² - 3969 = 0 的兩個解為 ±k，則下列何者為一元二次方程式 2x² + 12x - 7920 = 0 的一個解？\n\n○ (A) -3 + k\n○ (B) 3 + k\n○ (C) -6 + k\n○ (D) 6 - k",
    "answer": "(A) -3 + k",
    "diagramUrl": "",
    "solution": "為 $-3 + k$，正是其中一個正解！ 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "為 $-3 + k$，正是其中一個正解！ 故選 (A)。"
  },
  {
    "id": "q_math_completing_square_geometric_tiles_267",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：乘法公式與配方法幾何圖形化／利用面積拼成大正方形 (a+3)²",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【幾何拼圖配方法秒殺心法：對稱補邊角！】\n1. **題目現有圖形與面積**：\n   - 一個邊長為 a 的正方形 ⟹ 面積 $a^2$\n   - 一個長為 a、寬為 3 的長方形 ⟹ 面積 $3a$\n   - 目前總面積 ＝ $a^2 + 3a$。\n2. **拼成正方形的幾何構造**：\n   - 原本邊長 a 的大正方形，右邊貼了一個「長 a、寬 3」的長方形。\n   - 為了保持對稱擴展成大正方形，下邊必須對稱貼上另一個「長 a、寬 3」的長方形（增加面積 $3a$）！\n   - 右下角的缺口角落，則必須補上一個「邊長為 3 的小正方形」（增加面積 $3 \times 3 = 9 = 3^2$）！\n   - 總面積化為完全平方式：$a^2 + 3a + (3a + 3^2) = a^2 + 6a + 9 = (a+3)^2$。\n3. **因此需要再加上的圖形**：\n   - 一個長 a、寬 3 的長方形 ＋ 一個邊長 3 的正方形 ⟹ 即選項 (D)！",
    "stem": "附圖為一边長為 a 的正方形和一個長為 a、寬為 3 的長方形，試問需要再加上下列哪一選項的圖形，才可拼成一個正方形？\n\n【原題目圖示說明】：\n- 現有圖形 1：邊長為 a 的正方形（面積 $a^2$）\n- 現有圖形 2：長為 a、寬為 3 的長方形（面積 $3a$）\n\n【各選項圖形說明】：\n○ (A) 邊長為 a 的正方形 1 個 ＋ 長為 a、寬為 3 的長方形 1 個\n○ (B) 邊長為 a 的正方形 1 個 ＋ 邊長為 1 的正方形 1 個\n○ (C) 長為 a、寬為 3 的長方形 2 個（上下相疊，總寬 6） ＋ 邊長為 3 的正方形 1 個\n○ (D) 長為 a、寬為 3 的長方形 1 個 ＋ 邊長為 3 的正方形 1 個",
    "answer": "(D) 長為 a、寬為 3 的長方形 1 個 ＋ 邊長為 3 的正方形 1 個",
    "diagramUrl": "",
    "solution": "恰好為一個「長 $a$ 寬 3」長方形與一個「邊長 3」正方形，完全契合！ 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "恰好為一個「長 $a$ 寬 3」長方形與一個「邊長 3」正方形，完全契合！ 故選 (D)。"
  },
  {
    "id": "q_math_quadratic_cancel_x_root_loss_266",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：一元二次方程式解法／嚴禁等號兩邊同除含未知數式子（防漏解 x = 0）",
    "uploadDate": "2026-10-27",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【解方程式大忌：絕不能任意同除未知數 x！】\n1. **兩邊同除以 x 的致命錯誤**：\n   - 等號兩邊同除以一個數的前提是「該數不能為 0」！\n   - 未知數 x 有可能是 0，一旦隨意除以 x，就會導致『除以 0』的數學未定義錯誤，並且直接漏掉重要的根 x ＝ 0！\n2. **一元二次方程式標準解法（移項提公因式或展開）**：\n   - 移項：x(3x ＋ 5) － 2x(x － 1) ＝ 0\n   - 提出公因式 x：x[(3x ＋ 5) － 2(x － 1)] ＝ 0\n   - 化簡：x(x ＋ 7) ＝ 0 ⟹ x ＝ 0 或 x ＝ -7（共兩解）！",
    "stem": "下列為小明解方程式 x(3x + 5) = 2x(x - 1) 的步驟：\n步驟 1：兩邊同除以 x，得 3x + 5 = 2(x - 1)\n步驟 2：3x + 5 = 2x - 2\n步驟 3：3x - 2x = -2 - 5\n步驟 4：x = -7\n哪一個步驟開始發生錯誤？\n\n○ (A) 步驟 1\n○ (B) 步驟 2\n○ (C) 步驟 3\n○ (D) 步驟 4",
    "answer": "(A) 步驟 1",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) 步驟 1。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 步驟 1。"
  },
  {
    "id": "q_soc_hist_rome_republic_three_continents_expansion_161",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國二歷史：古羅馬共和時期的對外擴張與版圖橫跨歐亞非三洲",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：羅馬三大時期（王政 → 共和 → 帝國）對外擴張關鍵字！\n1. **自「共和」時期起積極向外擴張**：\n   - 羅馬在共和時期（西元前 509～前 27 年）推翻王政，對外發動布匿戰爭擊敗迦太基，版圖橫跨歐、亞、非三洲！\n   - 帝國時期（西元前 27 年起）屋大維建立元首制，版圖達到全盛，地中海成為羅馬帝國的「內海」。\n2. **審題關鍵字**：注意題幹「**自 ______ 時期起**」，擴張起點正是「共和時期」！",
    "stem": "自 ______ 時期起，羅馬人積極向外擴張，版圖橫跨歐、亞、非三洲。\n\n○ (A) 王政\n○ (B) 共和\n○ (C) 帝國\n○ (D) 拜占庭",
    "answer": "(B) 共和",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 共和（填空：共和）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 共和（填空：共和）。"
  },
  {
    "id": "q_soc_hist_rome_caesar_dictatorship_first_citizen_162",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國二歷史：羅馬共和末期政治動盪與凱撒首先破壞平衡走向個人獨裁",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【何人「首先」破壞平衡走向獨裁？】考點精準辨析！\n1. **凱撒（Caesar）**：共和末期征服高盧的軍事統帥，進軍羅馬並出任「終身獨裁官」，集中軍政大權於一身，是**最先打破分權制衡體制、走向個人獨裁**的人！\n2. **屋大維（奧古斯都）**：是凱撒的養子，在凱撒死後結束內戰，正式開啟元首制（帝國時期），自稱「第一公民」。但題目問的是「**何人首先破壞平衡走向獨裁**」，始作俑者是**凱撒**！",
    "stem": "以下三則資料，分別為羅馬三個時期的人物述說當代的情況。閱讀資料並回答問題：\n資料一：我們有分權且制衡的政治體制，成文法的頒布，使法律的精神得以確立，同時我們也積極向外擴張。\n資料二：國家昔日的平等遭到剝奪，所有人都一股腦兒，仰望聽命於「第一公民」一人。\n資料三：外族的國王非常殘暴、厲行苛政，有朝一日，我們一定要將異族政權推翻，建立一個新的政治體制。\n\n【題目】資料二提及國家昔日的平等遭到剝奪，請問何人首先破壞平衡走向獨裁？\n\n○ (A) 屋大維\n○ (B) 奧古斯都\n○ (C) 凱撒\n○ (D) 君士坦丁",
    "answer": "(C) 凱撒",
    "diagramUrl": "",
    "solution": "aesar） 憑藉征服高盧的強大軍隊進軍羅馬，被任命為「終身獨裁官」，獨攬統治大權，是歷史上最先破壞共和制衡、走向個人軍事獨裁的代表人物。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "aesar） 憑藉征服高盧的強大軍隊進軍羅馬，被任命為「終身獨裁官」，獨攬統治大權，是歷史上最先破壞共和制衡、走向個人軍事獨裁的代表人物。 故選 (C)。"
  },
  {
    "id": "q_soc_hist_rome_three_periods_chronological_order_163",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國二歷史：古羅馬歷史演進三大階段時間順序（王政 → 共和 → 帝國）",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：羅馬演進三大時期特徵與時間軸速記！\n1. **資料三（王政時期，最先）**：「外族國王非常殘暴、將異族政權推翻」⟹ 指伊特魯里亞人王政統治末期。\n2. **資料一（共和時期，居中）**：「分權制衡體制、成文法（十二表法）、積極向外擴張」⟹ 指西元前 509 年推翻王政後建立的共和政體。\n3. **資料二（帝國時期，最晚）**：「聽命於第一公民一人」⟹ 指西元前 27 年屋大維開創的羅馬帝國。\n- **時間順序**：資料三（王政）→ 資料一（共和）→ 資料二（帝國）！",
    "stem": "以下三則資料，分別為羅馬三個時期的人物述說當代的情況。閱讀資料並回答問題：\n資料一：我們有分權且制衡的政治體制，成文法的頒布，使法律的精神得以確立，同時我們也積極向外擴張。\n資料二：國家昔日的平等遭到剝奪，所有人都一股腦兒，仰望聽命於「第一公民」一人。\n資料三：外族的國王非常殘暴、厲行苛政，有朝一日，我們一定要將異族政權推翻，建立一個新的政治體制。\n\n【題目】三則資料依時間如何排序？\n\n○ (A) 資料一 → 資料二 → 資料三\n○ (B) 資料二 → 資料三 → 資料一\n○ (C) 資料三 → 資料一 → 資料二\n○ (D) 資料三 → 資料二 → 資料一",
    "answer": "(C) 資料三 → 資料一 → 資料二",
    "diagramUrl": "",
    "solution": "資料三 → 資料一 → 資料二。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "資料三 → 資料一 → 資料二。 故選 (C)。"
  },
  {
    "id": "q_math_geom_rectangle_diagonal_fold_area_164",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學幾何：長方形紙條對角線對摺之等腰三角形性質與畢氏定理求面積",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-12",
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【長方形對摺幾何】秒殺兩大定律！\n1. **摺疊對稱 ＋ 平行線內錯角 ＝ 必出等腰三角形！**\n   - 摺疊角相等：∠D'AC ＝ ∠DAC。\n   - 平行線內錯角相等：∠DAC ＝ ∠BCA。\n   - 兩底角相等 ⟹ △APC 為等腰三角形，斜邊 AP ＝ CP！\n2. **設未知數 x 技巧**：\n   - 設直角短邊 BP ＝ x，則 CP ＝ 6 － x ⟹ 斜邊 AP ＝ 6 － x。\n   - 代入畢氏定理：2² ＋ x² ＝ (6 － x)² ⟹ 12x ＝ 32 ⟹ x ＝ 8/3。\n   - △ABP 面積 ＝ 1/2 × 2 × (8/3) ＝ 8/3！",
    "stem": "如圖，長方形紙條中，將此紙條沿對角線 AC 對摺，設 P 為 AD 與 BC 的交點，AB = 2，AD = 6，則 △ABP 的面積為多少平方單位？\n\n○ (A) 5/3\n○ (B) 8/3\n○ (C) 3\n○ (D) 10/3",
    "answer": "(B) 8/3",
    "diagramUrl": "assets/questions/q_math_geom_rectangle_diagonal_fold_area_164.png",
    "solution": "C}$，內錯角相等：$\\angle DAC = \\angle BCA$。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "C}$，內錯角相等：$\\angle DAC = \\angle BCA$。 故選 (B)。"
  },
  {
    "id": "q_math_pythagoras_quadrilateral_integer_sides_165",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：共用斜邊直角三角形畢氏定理、平方差整數分解與排除重複邊長",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【共用斜邊平方差整數分解】避坑重點！\n1. **列出平方差等式**：\n   - AC² ＝ 7² ＋ a² ＝ 9² ＋ b² ⟹ a² － b² ＝ 9² － 7² ＝ 81 － 49 ＝ 32。\n   - (a ＋ b)(a － b) ＝ 32，因同奇同偶，兩者必同為正偶數！\n2. **排除重複邊長（審題關鍵！）**：\n   - 組合 (16, 2) ⟹ a ＝ 9, b ＝ 7。但題目要求「四邊均為整數且**不等長**」，已有 AB＝7, AD＝9，若 a＝9, b＝7 則重複，**不合**！\n   - 組合 (8, 4) ⟹ a ＝ 6, b ＝ 2。四邊分別為 7, 6, 2, 9，完全不等長，**合**！\n3. **總面積** ＝ 1/2×7×6 ＋ 1/2×9×2 ＝ 21 ＋ 9 ＝ 30！",
    "stem": "如圖，四邊形 ABCD 為兩個直角三角形合併而成（∠B = ∠D = 90°），已知四邊長均為整數且不等長，若 AB = 7，AD = 9，則四邊形 ABCD 面積為多少平方單位？\n\n○ (A) 30\n○ (B) 36\n○ (C) 42\n○ (D) 48",
    "answer": "(A) 30",
    "diagramUrl": "",
    "solution": "BC$ 中：$\\overline{AC}^2 = 7^2 + a^2$。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "BC$ 中：$\\overline{AC}^2 = 7^2 + a^2$。 故選 (A)。"
  },
  {
    "id": "q_math_equilateral_side_5_height_area_166",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：30-60-90 特殊直角三角形邊長比與正三角形高、面積公式",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【正三角形三大必背黃金公式】！\n1. **高公式**：$h = \\frac{\\sqrt{3}}{2}a$\n2. **面積公式**：$A = \\frac{\\sqrt{3}}{4}a^2$\n3. **推導原理**：從頂點向底邊作高，形成 30°-60°-90° 直角三角形，邊長比為 $1 : \\sqrt{3} : 2$。底邊一半為 $a/2$，高為 $(\\sqrt{3}/2)a$，面積為 $(1/2) \\times a \\times (\\sqrt{3}/2)a = (\\sqrt{3}/4)a^2$！",
    "stem": "正三角形的邊長是 5，求其高與面積。\n\n○ (A) 高 = 5√3/2，面積 = 25√3/4\n○ (B) 高 = 5√3/4，面積 = 25√3/2\n○ (C) 高 = 5/2，面積 = 25/4\n○ (D) 高 = 5√2/2，面積 = 25√2/4",
    "answer": "(A) 高 = 5√3/2，面積 = 25√3/4",
    "diagramUrl": "",
    "solution": "1. 公式推導： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 公式推導： 故選 (A)。"
  },
  {
    "id": "q_math_equilateral_area_perimeter_height_167",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：正三角形面積逆向推導邊長、周長與高（防呆乘3）",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【面積反求周長與高】逆向破題步驟！\n1. **第一步（求邊長 a）**：$(\\sqrt{3}/4)a^2 = 16\\sqrt{3} \\implies a^2/4 = 16 \\implies a^2 = 64 \\implies a = 8$。\n2. **第二步（注意題目問的是「周長」）**：\n   - ⚠️ 算出 $a=8$ 切莫直接填答案！題目問的是「**周長**」，周長 $= 3a = 3 \\times 8 = 24$ 公分！\n3. **第三步（求高）**：$h = (\\sqrt{3}/2)a = (\\sqrt{3}/2) \\times 8 = 4\\sqrt{3}$ 公分！",
    "stem": "若一正三角形的面積為 16√3 平方公分，則此三角形的周長與高分別為何？\n\n○ (A) 周長 = 8 公分，高 = 4√3 公分\n○ (B) 周長 = 24 公分，高 = 4√3 公分\n○ (C) 周長 = 24 公分，高 = 8√3 公分\n○ (D) 周長 = 16 公分，高 = 4√3 公分",
    "answer": "(B) 周長 = 24 公分，高 = 4√3 公分",
    "diagramUrl": "",
    "solution": "周長 = 24 公分，高 = 4√3 公分。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "周長 = 24 公分，高 = 4√3 公分。 故選 (B)。"
  },
  {
    "id": "q_math_poly_factor_theorem_ab_value_168",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：多項式因式定理代入法 vs 常數項反推秒殺法求 a-b",
    "uploadDate": "2026-10-12",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【因式求未知數】放棄長除法，改用因式定理秒殺！\n1. **因式定理（令因式為 0 代入使多項式等於 0）**：\n   - 代入 $x = -2$：$(-2)^3 + a(-2)^2 + b(-2) - 6 = 0 \\implies 2a - b = 7 \\quad \\cdots (1)$\n   - 代入 $x = 3$：$(3)^3 + a(3)^2 + b(3) - 6 = 0 \\implies 3a + b = -7 \\quad \\cdots (2)$\n   - $(1) + (2)$ 直接消去 $b$：$5a = 0 \\implies a = 0$。\n   - 代回 $(1)$：$-b = 7 \\implies b = -7$。\n   - 所求 $a - b = 0 - (-7) = 7$！\n2. **常數項反推秒殺法（口算 15 秒）**：\n   - $(x+2)(x-3)(x-k) = (x^2-x-6)(x-k)$，常數項 $(-6)(-k) = -6 \\implies k = -1$。\n   - $(x^2-x-6)(x+1) = x^3 - 7x - 6 \\implies a = 0, b = -7 \\implies a - b = 7$！",
    "stem": "若 x+2 與 x-3 均為 x³ + ax² + bx - 6 的因式，求 a - b 之值。\n\n○ (A) -7\n○ (B) 0\n○ (C) 7\n○ (D) 14",
    "answer": "(C) 7",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (C) 7。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-12",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) 7。"
  },
  {
    "id": "q_eng_grammar_more_careful_be_verb_169",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "be 動詞主詞補語／形容詞比較級／火災前後心態對照",
    "uploadDate": "2026-10-13",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：\n1. **被時間子句 cooked 誤導**：空格後方的 when they cooked 為時間副詞子句，空格所屬的主句動詞為 be 動詞 was，必須接形容詞 careful 作主詞補語，千萬不要誤以為是修飾 cooked 而錯選副詞 carefully！\n2. **比較級 vs 最高級**：火災發生前與後是「兩者狀態對照」，表達比以往更加小心，故用比較級 more careful，而非最高級。",
    "stem": "After the fire, everyone in the apartment was ______ when they cooked. They did not want any people to be hurt again.\n\n○ (A) more carefully\n○ (B) more careful\n○ (C) the most careful\n○ (D) the most carefully",
    "answer": "(B) more careful",
    "diagramUrl": "",
    "solution": "- 這裡表達的是火災發生「前 vs. 後」的心態對照（比以前更加小心謹慎），為兩者狀態的比較，故選比較級 more careful。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-13",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 這裡表達的是火災發生「前 vs. 後」的心態對照（比以前更加小心謹慎），為兩者狀態的比較，故選比較級 more careful。"
  },
  {
    "id": "q_eng_grammar_more_carefully_drive_than_170",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "一般動作動詞修飾語／情狀副詞比較級／than 兩者比較句型",
    "uploadDate": "2026-10-13",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【be 動詞 vs 動作動詞】黃金對比！\n1. be 動詞 (was) ＋ 形容詞 (more careful)；\n2. 一般動作動詞 (drives) ＋ 情狀副詞 (more carefully)！\n3. her car 是動詞 drives 的受詞，整句修飾的是「開車的方式與態度」，修飾動詞行為必須用情狀副詞！",
    "stem": "Fanny drives her car ______ than her sister, Linda.\n\n○ (A) more careful\n○ (B) more carefully\n○ (C) the most careful\n○ (D) the most carefully",
    "answer": "(B) more carefully",
    "diagramUrl": "",
    "solution": "- 多音節副詞 carefully 的比較級需在前方加 more，即 more carefully，故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-13",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 多音節副詞 carefully 的比較級需在前方加 more，即 more carefully，故選 (B)。"
  },
  {
    "id": "q_eng_grammar_the_least_important_jeans_171",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "審題不清",
    "concept": "劣等最高級 the least／前後文語意邏輯推論／109會考題",
    "uploadDate": "2026-10-13",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【109 年會考陷阱直擊】千萬不要看到 important 就反射性秒選 the most！會考非常注重前後文邏輯。第二句用了 even more（甚至更在乎...），代表價錢對他來說根本是「最不重要 (the least important)」的次要考量！影音詳解可參閱：https://www.youtube.com/watch?v=shLvl1zv9Ak",
    "stem": "For Mike, the price is ______ important thing when he shops for jeans. He cares even more about the shape and the size of the pockets. 【109年會考】\n\n○ (A) the more\n○ (B) the most\n○ (C) the less\n○ (D) the least",
    "answer": "(D) the least",
    "diagramUrl": "",
    "solution": "1. 文法結構判定（最高級）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-13",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 文法結構判定（最高級）： 故選 (D)。"
  },
  {
    "id": "q_eng_grammar_all_the_other_buildings_taipei101_172",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "同範圍比較排除自身原則／all the other ＋ 複數名詞 vs any other ＋ 單數名詞",
    "uploadDate": "2026-10-13",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：比較級表最高級意義之【排除自身】兩大黃金句型！\n1. **any other ＋ 單數名詞**：Taipei 101 is taller than **any other building** in Taiwan.（絕不能加 s！(A) any other buildings 是大陷阱）。\n2. **all the other ＋ 複數名詞**：Taipei 101 is taller than **all the other buildings** in Taiwan.（一定要加 s！）。\n3. **缺少 other 會出事**：(C) any building 包含臺北101自己，邏輯上自己不能比自己高，同一群體比較務必加 other！",
    "stem": "Taipei 101 is taller than ______ in Taiwan.\n\n○ (A) any other buildings\n○ (B) all the other buildings\n○ (C) any building\n○ (D) any building else",
    "answer": "(B) all the other buildings",
    "diagramUrl": "",
    "solution": "1. 同範圍比較之「排除自身原則」： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-13",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 同範圍比較之「排除自身原則」： 故選 (B)。"
  },
  {
    "id": "q_eng_grammar_any_other_boy_thinner_than_173",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "同範圍比較排除自身／any other ＋ 單數名詞／限定詞規則",
    "uploadDate": "2026-10-13",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【any other + 單數】vs. 【all the other + 複數】對決！\n- **記法口訣**：\n  - **any（任何一個）** ⟹ 配單數 ⟹ **any other boy**\n  - **all（所有全部）** ⟹ 配複數 ⟹ **all the other boys**\n- 本題 (C) all the other boy 故意漏掉了 s，(B) any other boy 接單數 boy 完全正確！",
    "stem": "Brian was thinner than ______ in his class. His mother worried about him very much.\n\n○ (A) any the boy\n○ (B) any other boy\n○ (C) all the other boy\n○ (D) all boy",
    "answer": "(B) any other boy",
    "diagramUrl": "",
    "solution": "rian 是班上的學生（in his class），屬於「同班級」這個相同範圍內。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-13",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "rian 是班上的學生（in his class），屬於「同班級」這個相同範圍內。 故選 (B)。"
  },
  {
    "id": "q_eng_modal_must_deduction_love_wife_174",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "助動詞 must 之肯定推測（一定、必定）／情境語氣與助動詞辨析",
    "uploadDate": "2026-10-13",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【must 的兩大考點】義務「必須」vs. 推論「一定」！\n1. **肯定推測用法（高度確定）**：\n   - must + 原形動詞：表示「必定、一定」（推測把握度高達 95% 以上）。\n   - 從前後文情境線索：*always keep your wife in mind*（心裡總惦記著老婆）與 *How lucky she is!*（她真幸運），強烈推論出你「一定」很愛她！\n2. **選項致命破綻**：\n   - (A) has to：主詞是 You，動詞不能用 has（主謂不一致秒殺）！且 have to 表「不得不」，語意荒謬。\n   - (B) should（應該）：表建議，愛一個人不是被規勸的義務。\n   - (C) need to（需要）：表需求，愛不是任務，語氣不符。",
    "stem": "You always keep your wife in mind. You ______ love her a lot. How lucky she is!\n\n○ (A) has to\n○ (B) should\n○ (C) need to\n○ (D) must",
    "answer": "(D) must",
    "diagramUrl": "",
    "solution": "must：助動詞除了「必須」之外，最常考的用法即為「肯定推測（一定、必定）」，完全符合上下文邏輯。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-13",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "must：助動詞除了「必須」之外，最常考的用法即為「肯定推測（一定、必定）」，完全符合上下文邏輯。 故選 (D)。"
  },
  {
    "id": "q_bio_ecology_gut_microbiota_community_level_175",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：生命世界與生態系層級（個體 → 族群 → 群集 → 生態系 → 生物圈）／腸道菌相由多種細菌組成屬於「群集」",
    "uploadDate": "2026-10-14",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【生態層次秒殺口訣：看物種數量與非生物環境！】\n1. **族群（同種生物）**：例如腸道內的「大腸桿菌」。\n2. **群集（多種生物總和）**：題幹強調「超過 500 種細菌，有益菌也有壞菌，統稱腸道菌相」，包含數百種不同物種且不含無生命環境，標準為「群集」！\n3. **生態系（群集＋環境）**：若加上腸道黏液、pH值與消化液環境，才構成微生態系。\n4. 影音詳解可參閱：https://www.youtube.com/watch?v=TwF1ulrvGyY",
    "stem": "人類腸道中有超過 500 種細菌，其中有益菌也有壞菌，這些細菌統稱為腸道菌相，研究發現腸道菌相會隨著飲食習慣和生活型態而改變。從生態學的角度來看，「腸道菌相」可以視為下列哪一個層級？\n\n○ (A) 族群\n○ (B) 群集\n○ (C) 生態系\n○ (D) 生物圈",
    "answer": "(B) 群集",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 群集。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-14",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 群集。"
  },
  {
    "id": "q_bio_symbiosis_commensalism_remora_shark_176",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：生物間交互作用關係（片利共生 ＋/0、互利共生 ＋/＋、寄生 ＋/－、捕食 ＋/－）／鮣魚與鯊魚為片利共生",
    "uploadDate": "2026-10-14",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【生物互動關係四天王符號與速記經典】\n1. **片利共生（＋, 0）**：一方得利、一方沒影響！\n   - **鮣魚與鯊魚**（吸附搭便車＋吃殘渣，鯊魚無影響）、**山蘇／鳥巢蕨附生於大樹**（爭取陽光，大樹無害無利）。\n2. **互利共生（＋, ＋）**：雙方雙贏、互相依賴！\n   - **螞蟻與蚜蟲**（蜜露換保鏢）、**小丑魚與海葵**、**地衣（藻類＋真菌）**、**根瘤菌與豆科植物**、**榕小蜂與稜果榕**。\n3. **寄生（＋, －）**：一方獲利、一方受害！\n   - **寄生蜂與蛾幼蟲**、**跳蚤與狗**、**菟絲子與樹木**。",
    "stem": "生物間「共生」的關係又可細分成「片利共生」與「互利共生」，請問下列何者是屬於「片利共生」的關係？\n\n○ (A) 鮣魚、鯊魚\n○ (B) 螞蟻、蚜蟲\n○ (C) 榕小蜂、稜果榕\n○ (D) 寄生蜂、蛾",
    "answer": "(A) 鮣魚、鯊魚",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) 鮣魚、鯊魚。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-14",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 鮣魚、鯊魚。"
  },
  {
    "id": "q_bio_ecology_food_web_energy_pyramid_producer_177",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：生態系食物網結構判讀、能量流動（能量塔金字塔頂底關係）與物質循環（分解者角色）",
    "uploadDate": "2026-10-14",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【食物網三秒破題法：抓起點、看終點、數分岔！】\n1. **起點為生產者（能量最多）**：只有箭頭射出、無箭頭指入者必為生產者！「乙」射出三支箭頭給蟋蟀、褐飛蝨、蝗蟲，代表「乙」為綠色植物（生產者）。根據能量金字塔（十分之一法則），生產者總能量最多！\n2. **終點為最高級消費者**：箭頭最終匯聚於「老鷹」，因此老鷹才是最高級消費者（三級消費者），甲只是次級消費者。\n3. **數食物鏈防漏算**：\n   - 初級消費者有 3 種（蟋蟀、褐飛蝨、蝗蟲）；\n   - 次級消費者有 2 種（甲、澤蛙）；\n   - 每一種初級消費者都能同時通往甲與澤蛙（3 × 2 ＝ 6），最後均匯聚於老鷹，因此總共有「6 條」食物鏈，非 5 條！\n4. **細菌（分解者）的角色**：食物網通常不畫出分解者，但缺少分解者會導致動植物遺體堆積，物質無法循環，循環會停滯而絕非「更快」！",
    "stem": "如圖為無米樂村中某一塊農田簡易的食物網。關於此食物網，下列敘述何者正確？\n\n○ (A) 由於沒有細菌，所以物質的循環會更快\n○ (B) 最高級的消費者是甲\n○ (C) 此食物網總能量最多的是乙\n○ (D) 此食物網共有五條食物鏈",
    "answer": "(C) 此食物網總能量最多的是乙",
    "diagramUrl": "assets/questions/q177_food_web.png",
    "solution": "正確【本題正解】：在生態系的能量流動中，能量由生產者逐級流向各級消費者，過程中約有 90% 能量散失（呼吸熱、排泄等），僅約 10% 傳遞至下一階層（能量塔原則）。故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-14",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確【本題正解】：在生態系的能量流動中，能量由生產者逐級流向各級消費者，過程中約有 90% 能量散失（呼吸熱、排泄等），僅約 10% 傳遞至下一階層（能量塔原則）。故選 (C)。"
  },
  {
    "id": "q_bio_ecology_ecosystem_definition_lotus_pond_178",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：生態系判定標準（生物群集 ＋ 非生物環境）／荷花池為生態系辨析",
    "uploadDate": "2026-10-15",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【生態系判定黃金法則：必須「生物群集 ＋ 非生物環境」缺一不可！】\n1. **生態系的核心公式**：\n   - **生態系 (Ecosystem) ＝ 群集 (所有生物) ＋ 環境 (水/土/陽光/空氣/養分)**。\n   - 必須兼具生物因子與非生物環境因子，且彼此間存在能量流動與物質循環。\n2. **選項致命破綻拆解**：\n   - (A) 校園中「所有的生物」：只有生物因子，缺少校園建築、土壤、空氣等非生物環境，屬於**「群集 (Community)」**！\n   - (B) 森林裡「所有的附生植物」：只有植物（生物因子），連其他動物或環境都沒有，僅為**群集的一部分**。\n   - (C) 腐爛番茄中之「果蠅」：果蠅為同一物種，屬於**「族群 (Population)」**！\n   - (D) 臺中公園內的「荷花池」：包含荷花、魚蝦、微生物等「生物群集」，以及池水、底泥、陽光等「非生物環境」，構成完整且自給自足的**「生態系」**！",
    "stem": "下列選項中，何者可視為一個生態系？\n\n○ (A) 校園中所有的生物\n○ (B) 森林裡所有的附生植物\n○ (C) 腐爛番茄中之果蠅\n○ (D) 臺中公園內的荷花池",
    "answer": "(D) 臺中公園內的荷花池",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (D) 臺中公園內的荷花池。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-15",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (D) 臺中公園內的荷花池。"
  },
  {
    "id": "q_bio_ecology_forest_biomes_distribution_179",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：陸域生態系（熱帶雨林 vs 溫帶落葉林 vs 寒帶針葉林）生物分布與特徵辨析",
    "uploadDate": "2026-10-15",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【三大森林生態系生物對照與配對陷阱！】\n1. **甲、乙配對顛倒**：\n   - **熱帶雨林生態系**：終年高溫多雨、樹冠茂密。代表生物為**象耳榕、附生蘭花、巨嘴鳥、紅毛猩猩、樹蛙**等（生物多樣性陸域最高）。表格中誤放為溫帶生物！\n   - **溫帶落葉林生態系**：四季分明、秋冬落葉。代表生物為**楓樹、橡樹、狐狸、松鼠、溫帶蕈類**等。表格中誤放為熱帶雨林生物！\n2. **丙配對完全正確**：\n   - **寒帶針葉林生態系**：冬季嚴寒漫長、降雪多。代表植物為耐寒針葉樹（**松、杉、柏**），代表動物為**雪兔、鹿（馴鹿／駝鹿）、灰狼、棕熊**等。",
    "stem": "如表為森林生態系中生物的分布，何者正確？\n\n| 代號 | 生態系名稱 | 代表生物 |\n| :---: | :--- | :--- |\n| 甲 | 熱帶雨林生態系 | 楓、狐狸、蕈 |\n| 乙 | 溫帶落葉林生態系 | 巨嘴鳥、象耳榕、紅毛猩猩 |\n| 丙 | 寒帶針葉林生態系 | 松、雪兔、鹿 |\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 以上皆對",
    "answer": "(C) 丙",
    "diagramUrl": "assets/questions/q179_forest_biome_table.png",
    "solution": "故本題正確答案為 (C) 丙。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-15",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) 丙。"
  },
  {
    "id": "q_bio_ecology_grassland_biome_characteristics_taiwan_180",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：陸域生態系／草原生態系氣候特徵、生物適應與臺灣高山草原（玉山箭竹）辨析",
    "uploadDate": "2026-10-15",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「臺灣雨量充沛＝沒有草原」是國中生物超級致命直覺陷阱！】\n1. **陸域生態系降雨量三大黃金區間**：\n   - **沙漠生態系**：＜ 250 公厘（mm）。\n   - **草原生態系**：250 ～ 750 公厘（mm）。\n   - **森林生態系**：＞ 750 公厘（mm）。\n2. **臺灣為什麼依然擁有草原？**：\n   - 形成草原的關鍵在於「**環境因限制因子無法支持高大喬木生長成林**」。\n   - 限制因子不只有「乾旱降雨不足」，**高海拔極端低溫 ＋ 強勁風勢 ＋ 土壤淺薄貧瘠**同樣會阻止樹木生長，使臺灣海拔 3000 公尺以上高山形成廣闊的「**高山草原生態系（以玉山箭竹、高山芒為主）**」！",
    "stem": "有關草原生態系的敘述，下列何者錯誤？\n\n○ (A) 年平均降雨量約為250～750公厘\n○ (B) 大部分動物為穴居或奔跑迅速\n○ (C) 草原生態系中的優勢植物為灌木及草本植物\n○ (D) 臺灣年平均降雨量為2000公厘左右，沒有草原生態系",
    "answer": "(D) 臺灣年平均降雨量為2000公厘左右，沒有草原生態系",
    "diagramUrl": "",
    "solution": "臺灣年平均降雨量為 2000 公厘左右，沒有草原生態系【敘述錯誤，本題正解】： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-15",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "臺灣年平均降雨量為 2000 公厘左右，沒有草原生態系【敘述錯誤，本題正解】： 故選 (D)。"
  },
  {
    "id": "q_soc_geo_greater_bay_area_hk_shenzhen_electronics_181",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理：中國南部地區／粵港澳大灣區（香港與深圳）區位優勢與電子高科技產業發展",
    "uploadDate": "2026-10-16",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【粵港澳大灣區「前店後廠」與電子高科技產業升級！】\n1. **港深合作模式（香港技術與金融 ＋ 深圳硬體與製造）**：\n   - 香港具備資金、技術、國際商業貿易與資訊優勢。\n   - 深圳具備龐大硬體製造組裝與科技創新能力。\n   - 兩地優勢互補，重點發展**高技術、高附加價值的「電子高科技產業」**。\n2. **重工業與農業選項秒殺排雷**：\n   - 港深**無煤鐵礦與石油**，且**地價昂貴、環保嚴格**，絕不可能重點發展**石化工業 (A)** 或 **鋼鐵工業 (D)**。\n   - 港深為世界級都會商業區，更不可能從事**熱帶栽培 (C)** 農業！",
    "stem": "香港與深圳作為「粵港澳大灣區」的中心城市，兩個地區以各自的優勢進行合作，成為區域發展的重點。以當地的區位條件判斷，其重點產業應該為下列何者？\n\n○ (A) 石化工業\n○ (B) 電子產業\n○ (C) 熱帶栽培\n○ (D) 鋼鐵工業",
    "answer": "(B) 電子產業",
    "diagramUrl": "",
    "solution": "電子產業【正確，本題正解】：香港的先進研發技術與商業金融，帶動深圳硬體與軟體資訊工業的高速成長，使電子科技與半導體、通訊設備成為粵港澳大灣區最具全球競爭力的龍頭重點產業。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-16",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "電子產業【正確，本題正解】：香港的先進研發技術與商業金融，帶動深圳硬體與軟體資訊工業的高速成長，使電子科技與半導體、通訊設備成為粵港澳大灣區最具全球競爭力的龍頭重點產業。 故選 (B)。"
  },
  {
    "id": "q_bio_ecology_river_upper_lower_dissolved_oxygen_182",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：水域生態系／河流流動水域上游 vs. 下游環境因子（流速、溶氧量、水溫、污染）特徵比較",
    "uploadDate": "2026-10-16",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【河流「溶氧量」上下游高低致命陷阱！】\n1. **上游河水溶氧量高**：\n   - 上游坡度陡峭、水流湍急，激起大量水花激烈攪動空氣，促使氧氣充分溶入水中！\n   - 加上發源於高山水溫較低，氣體在冷水中的溶解度大，故**上游溶氧量遠高於下游**！\n2. **審題警示**：\n   - (C) 稱「上游含氧量比下游低」是完全相反的錯誤敘述，為本題正解！\n- 下游水流緩慢平坦、水溫高且有機污染雜質多（微生物耗氧分解），溶氧量較低。",
    "stem": "佳欣要寫一篇關於河流生態系的報告，在她的報告中哪一項錯誤？\n\n○ (A) 屬於淡水生態系\n○ (B) 上游水域水的流速快\n○ (C) 上游河水中的氧氣含量比下游低\n○ (D) 下游水域汙染情況較嚴重",
    "answer": "(C) 上游河水中的氧氣含量比下游低",
    "diagramUrl": "",
    "solution": "上游河水中的氧氣含量比下游低【敘述錯誤，本題正解】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-16",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "上游河水中的氧氣含量比下游低【敘述錯誤，本題正解】： 故選 (C)。"
  },
  {
    "id": "q_bio_cell_microorganisms_culture_nutrition_co2_183",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：微生物營養代謝方式全比較（自營光合作用 vs. 異營呼吸與發酵／103 會考題）",
    "uploadDate": "2026-10-16",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「含 CO₂、不含有機物、有光照」是秒殺自營生物的密碼！】\n1. **自營生物（藍綠菌）**：\n   - 具有葉綠素，能利用光能與二氧化碳（CO₂）自行製造有機養分（葡萄糖），並產生氧氣，因此在**無外來有機物**的試管中依然能獨立生長與繁衍！\n2. **異營生物的斷糧危機**：\n   - **草履蟲**（需氧吞食有機物）、**大腸桿菌**（需現成有機物）、**酵母菌**（雖可缺氧發酵，但**必須消耗有機物糖類**）！\n- 試管內完全「不含有機物」，所有異營生物皆無法合成生命所需分子，必定無法繁衍！",
    "stem": "有四支透明且密閉的試管，分別培養草履蟲、酵母菌、藍綠菌和大腸桿菌，已知此四支試管內皆含 CO₂，但不含有機物，其他環境條件則皆適合上述生物的生存。在每日各 12 小時光照黑暗交替的情況下，下列哪種生物最可能在其試管內生長及繁衍子代？（註：大腸桿菌為細菌的一種）〔103.會考〕\n\n○ (A) 草履蟲\n○ (B) 酵母菌\n○ (C) 藍綠菌\n○ (D) 大腸桿菌",
    "answer": "(C) 藍綠菌",
    "diagramUrl": "",
    "solution": "O₂）的條件下可行光合作用，將無機物合成葡萄糖等有機物，並釋出氧氣供自身進行呼吸作用。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-16",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "O₂）的條件下可行光合作用，將無機物合成葡萄糖等有機物，並釋出氧氣供自身進行呼吸作用。 故選 (C)。"
  },
  {
    "id": "q_bio_ecology_community_vs_population_lecture_topics_184",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國中生物：生態階層判別 — 生物族群（單一物種） vs. 生物群集/群落（多物種集合／103 會考題）",
    "uploadDate": "2026-10-16",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「族群」vs.「群集（群落）」秒殺判斷法！】\n1. **族群 (Population)**：\n   - **限定「單一物種」**！題目只要出現明確的單一生物名稱，例如「黑面琵鷺」、「櫻花鉤吻鮭」，必定屬於**族群**層次（8日與22日）！\n2. **群集 (Community)**：\n   - **限定「多個不同物種生活在一起」**！\n- 出現集合名詞或多物種總和，如「無脊椎動物」（包含螺、貝、蟹、膽等多種）、「紅樹林生態系中的生物組成」（水筆仔、招潮蟹、彈塗魚等所有生物），屬於**群集（群落）**層次（15日與29日）！",
    "stem": "如表為某校生態系列演講的日期及主題。小雅對生物群集（群落）的議題有興趣，若她只能參加兩場演講，則應優先選擇哪兩日期？（註：櫻花鉤吻鮭，又稱臺灣鱒）〔103. 會考〕\n\n| 日期 | 演講主題 |\n| :---: | :--- |\n| 8日 | 七股地區黑面琵鷺的覓食行為 |\n| 15日 | 墾丁國家公園海岸無脊椎動物的分布 |\n| 22日 | 雪霸國家公園櫻花鉤吻鮭的繁衍 |\n| 29日 | 關渡地區紅樹林生態系中的生物組成 |\n\n○ (A) 8日、15日\n○ (B) 8日、22日\n○ (C) 15日、29日\n○ (D) 22日、29日",
    "answer": "(C) 15日、29日",
    "diagramUrl": "",
    "solution": "ommunity）：在同一時期、同一棲地上生活的所有不同物種生物族群總和（包含多個不同物種，但不含無機環境）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-16",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "ommunity）：在同一時期、同一棲地上生活的所有不同物種生物族群總和（包含多個不同物種，但不含無機環境）。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_east_asia_winter_monsoon_pahs_air_pollution_185",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國二地理：東亞季風氣候風向判定（冬季西北季風 vs. 夏季東南季風）與境外空氣污染物跨國傳播",
    "uploadDate": "2026-10-16",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【風向定義與箭頭方向千萬不能搞反！】\n1. **風向是「風吹來的方向」**：\n   - 「西北季風」代表風從**西北方吹向東南方**！\n   - 在地圖座標中，西北方在左上，東南方在右下，因此箭頭必須指向**右下方「↘」**！\n2. **審題雙重線索**：\n   - 時間線索：「1～4月」$\\implies$ 冬季季風盛行期（受蒙古冷高壓影響）。\n- 空間線索：中國在日本的**西北方（左上方）**，中國工廠停工使日本西側（輪島）污染劇減，證明風是從**西北吹向東南（↘）**！",
    "stem": "多環芳香烴（PAHs）為一種空氣汙染物，主要是由化石燃料、木材、垃圾等有機物的不完全燃燒所產生。日本金澤大學輪島空氣監測站在 2018～2020 年相同月份（1～4月）測得的多環芳香烴濃度統計圖顯示，2020 年當地多環芳香烴濃度顯著下降，與中國在新型冠狀病毒疫情下，多數工廠停工，使盛行風帶來的汙染源減少有關。上文提及的盛行風為下列何種風向？\n\n○ (A) ↙\n○ (B) ↖\n○ (C) ↘\n○ (D) ↗",
    "answer": "(C) ↘",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (C) ↘。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-16",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) ↘。"
  },
  {
    "id": "q_soc_geo_civics_free_trade_agreement_fta_china_186",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理／公民跨科：國際貿易自由貿易協定（FTA）與區域經濟整合／降低貿易壁壘促進生產要素自由流通",
    "uploadDate": "2026-10-16",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【自由貿易協定（FTA）的核心關鍵字抓取！】\n1. **理論關鍵字對應**：\n   - 題幹：「**減少人為商業活動障礙**」、「**生產要素、產品與勞務自由流通**」。\n   - 對應概念：**自由貿易協定（FTA）** 與 **區域經濟整合**！其目的正是透過降低或免除關稅與非關稅壁壘，促使貿易與生產要素自由跨國流動。\n2. **常見陷阱秒殺排除**：\n   - **一帶一路 (A)**：政府主導的跨國「基礎建設投資與融資」，並非普遍減免關稅與貿易壁壘的貿易制度。\n   - **工資上漲與西部發展 (C)**：屬於中國「國內內部」的區域平衡與產業轉移，與兩國間自由貿易無關。\n   - **企業跨國併購 (D)**：屬於個別企業對外投資（FDI）策略，並非兩國制度化消除貿易障礙。",
    "stem": "在國際貿易理論中，有一項理論：\n兩地或兩國之間，若人為商業活動障礙減少，讓生產因素（如原料、資本），產品與勞務自由流通，就可以使兩地的商業發展好處增加。\n請問：下列哪一項中國經濟發展的概況，最符合上述理論？\n\n○ (A) 中國一帶一路政策至各國投資基礎建設\n○ (B) 中國積極與海外多國簽署自由貿易協定\n○ (C) 中國人民工資漸增且帶動西部地區發展\n○ (D) 中國企業透過投資或併購進入歐美市場",
    "answer": "(B) 中國積極與海外多國簽署自由貿易協定",
    "diagramUrl": "",
    "solution": "中國積極與海外多國簽署自由貿易協定【完全符合，本題正解】： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-16",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "中國積極與海外多國簽署自由貿易協定【完全符合，本題正解】： 故選 (B)。"
  },
  {
    "id": "q_soc_geo_japan_terrain_ratio_steep_rivers_187",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理：日本自然環境與地形特徵／山地丘陵廣布對河川特徵之影響",
    "uploadDate": "2026-10-17",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【地形比例 vs. 地質構造的因果辨析盲點！】\n1. **最常見致命陷阱 (D) 火山地震頻繁**：\n   - 很多同學看到「山地佔 61%」就直覺聯想到日本火山多、地震多而錯選 (D)！\n   - 🔴 **關鍵觀念澄清**：火山與地震頻繁是由於日本位處「**板塊擠壓交界帶（環太平洋火環帶）**」的大地構造位置，不能單從地表的「地形面積比例表」直接推斷。\n2. **地表地形決定水文特徵 (C) 河川坡陡流急**：\n   - 🟢 **直接因果關係**：日本國土狹長，中央山脈縱貫，**山地（61%）＋丘陵（12%）合計高達 73%**，而平原僅佔 14%。\n   - 這種「山多平原少、地勢起伏大」的環境，使得降水落入山區後迅速匯聚，**河川普遍短小、坡陡流急**、水力豐沛但不利航運！",
    "stem": "日本的發展受地形影響相當明顯，附表為該國各種地形比例，表中資料和何者關聯性最大？\n\n【日本各種地形比例表】\n| 山地 | 丘陵 | 台地 | 平原 |\n| :---: | :---: | :---: | :---: |\n| 61% | 12% | 11% | 14% |\n\n○ (A) 日本四面環海\n○ (B) 境內島嶼眾多\n○ (C) 河川坡陡流急\n○ (D) 火山地震頻繁",
    "answer": "(C) 河川坡陡流急",
    "diagramUrl": "assets/questions/q187_japan_terrain_ratio_table.png",
    "solution": "河川坡陡流急【完全符合，本題正解】： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-17",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "河川坡陡流急【完全符合，本題正解】： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_china_aqi_air_quality_temperate_monsoon_188",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理：中國區域地理／秦嶺淮河分界線與氣候分區（溫帶季風氣候）／三級階梯與主要河流流域綜合判讀",
    "uploadDate": "2026-10-17",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【華北重度霧霾省區定位與跨單元綜合判斷！】\n1. **看圖定位抓出超過 100 的地區**：\n   - 圖中數值破百（>100）的黑圈集中在華北：**北京、河北、山西**！\n2. **快速排雷秒殺三步法**：\n   - ❌ **直轄市陷阱 (C)**：四大直轄市只有「京、津、滬、渝」，河北與山西都是「省」，不是直轄市！\n   - ❌ **流域陷阱 (D)**：華北地區在北方，屬於**黃河／海河流域**，南方的長江流域完全不經過這裡！\n   - ❌ **階梯陷阱 (B)**：最高階是青藏高原（第一階梯）；華北平原是第三階梯、黃土高原是第二階梯。\n   - ⭕ **氣候分界正解 (A)**：**秦嶺—淮河以北＝溫帶季風氣候**！北京、河北、山西全在秦嶺淮河以北，故「均屬溫帶季風氣候區」100% 正確！",
    "stem": "附圖是中國各省區某日的即時空氣品質指數分布圖，圖中數字愈大，代表空氣品質愈差。根據圖中資訊判斷，空氣品質數值超過 100 的地區所具有的共同特徵為何？\n\n○ (A) 均屬溫帶季風氣候區\n○ (B) 均位於地形最高階內\n○ (C) 均屬於直轄市分布區\n○ (D) 均隸屬於長江流域",
    "answer": "(A) 均屬溫帶季風氣候區",
    "diagramUrl": "assets/questions/q188_china_air_quality_aqi_map.png",
    "solution": "QI 分布標記，數值破百（超過 100）的省區集中於華北地區，包括：北京市、河北省、山西省（即京津冀及周邊地區）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-17",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "QI 分布標記，數值破百（超過 100）的省區集中於華北地區，包括：北京市、河北省、山西省（即京津冀及周邊地區）。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_east_asia_winter_monsoon_dust_storm_189",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理：東亞冬季季風氣候（西北季風 vs. 東北季風）／沙塵暴境外傳播路徑／內蒙古—華北—日本氣流走向",
    "uploadDate": "2026-10-17",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【華北 vs. 臺灣的冬季季風風向陷阱！】\n1. **不要被臺灣在地經驗誤導選 (A) 東北季風！**：\n   - 臺灣冬季吹東北季風，但在中緯度的**中國華北、東北與日本，冬季吹的是「西北季風」**！\n2. **地理相對方位秒殺法**：\n   - 內蒙古在北京與日本的**西北方**！\n   - 風向是「風吹來的方向」，黃沙自西北方席捲而來，當然是**「西北季風」**！\n   - 若吹東北季風（風由東北吹向西南），黃沙會吹往西南方的四川、青海，根本進不了北京與日本！",
    "stem": "請問中國內蒙古的沙塵暴的黃沙，一路影響到北京地區，再影響到鄰國日本，與冬春之際，中國大陸的何種季風有關？\n\n○ (A) 東北季風\n○ (B) 西南季風\n○ (C) 西北季風\n○ (D) 東南季風",
    "answer": "(C) 西北季風",
    "diagramUrl": "",
    "solution": "西北季風【完全正確，本題正解】：符合冬春之際內陸向海洋吹送、由西北向東南輸送黃沙的真實大氣環流。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-17",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "西北季風【完全正確，本題正解】：符合冬春之際內陸向海洋吹送、由西北向東南輸送黃沙的真實大氣環流。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_belt_and_road_maritime_silk_road_kazakhstan_190",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理：中國「一帶一路」倡議核心架構／「絲綢之路經濟帶（陸路）」vs.「21 世紀海上絲綢之路（海路）」之沿線國家與地理特徵",
    "uploadDate": "2026-10-18",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「一帶」是陸路，「一路」是海路！千萬別望文生義！】\n1. **「帶」與「路」的相反直覺陷阱**：\n   - 「絲綢之路經濟**帶**（一帶）」：指的是**陸上**（走鐵路、公路穿過中亞內陸如哈薩克、俄羅斯到歐洲）。\n   - 「21 世紀海上絲綢之**路**（一路）」：指的才是**海上**（走海運港口，經南海、印度洋、東非肯亞到歐洲）。\n2. **常識秒殺法**：\n   - 看到「海上」，馬上檢查哪個國家「根本沒靠海」！\n   - **哈薩克是世界最大內陸國**，四面不靠海，絕不可能走「海上」絲綢之路！",
    "stem": "請問下列何者國家，並非為中國一帶一路政策當中的「21 世紀海上絲綢之路」的目標國家呢？\n\n○ (A) 越南\n○ (B) 印度\n○ (C) 哈薩克\n○ (D) 肯亞。",
    "answer": "(C) 哈薩克",
    "diagramUrl": "",
    "solution": "哈薩克【完全正確，本題正解】：位於中亞，是世界上面積最大的內陸國家（境內無任何海洋海岸線），屬於陸上的「絲綢之路經濟帶」，絕非「海上絲綢之路」的目標國家。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-18",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "哈薩克【完全正確，本題正解】：位於中亞，是世界上面積最大的內陸國家（境內無任何海洋海岸線），屬於陸上的「絲綢之路經濟帶」，絕非「海上絲綢之路」的目標國家。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_japan_tokyo_kyoto_cherry_blossom_monsoon_leeward_191",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理：日本列島中央脊樑山脈對冬季西北季風的阻擋效應／日本海側（迎風濕冷多雪）vs. 太平洋側（背風乾燥溫暖）氣候差異與櫻花開花時間判定",
    "uploadDate": "2026-10-18",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【緯度 vs. 地形季風迎風背風：為什麼東京緯度較高卻比京都早開花？】\n1. **打破「緯度低一定先開花」的死板直覺！**：\n   - 植物開花受「早春氣溫回暖速度與日照」決定，而非單純看緯度！\n   - **京都（迎風側）**：受冬春西北季風迎風影響，雲多濕冷、積雪融雪吸熱，初春回暖慢。\n   - **東京（背風側）**：本州中央山脈擋住西北季風，背風坡空氣乾燥、下沉晴朗增溫快，因此東京雖然緯度較高，初春氣溫卻回升更快，櫻花提早一週盛開！\n2. **快速排雷要訣**：\n   - 看到日本東西兩側氣候差異 ➔ 優先鎖定**「中央山脈阻擋季風（迎風坡 vs. 背風坡）」**！\n   - (D) 洋流都是黑潮暖流，不可選；(B) 經度只管時差，不管溫度！",
    "stem": "普遍來說，在日本，位於關東平原的東京的櫻花開花時間，相比於位於關西平原的京都，早了一個禮拜，就緯度來看，東京的緯度較京都高，理論上應該要更晚開花，為何日本會有這樣的現象呢？\n\n○ (A) 兩地距海位置不同\n○ (B) 兩地經度位置不同\n○ (C) 兩地迎風背風不同\n○ (D) 兩地洋流性質不同。",
    "answer": "(C) 兩地迎風背風不同",
    "diagramUrl": "assets/questions/q191_japan_tokyo_kyoto_cherry_blossom_map.png",
    "solution": "兩地迎風背風不同【完全正確，本題正解】：本州中央山脈阻擋西北季風，使京都處於迎風陰冷側、東京處於背風乾燥溫暖側，精確解釋了東京緯度較高卻早開花之反常現象。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-18",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "兩地迎風背風不同【完全正確，本題正解】：本州中央山脈阻擋西北季風，使京都處於迎風陰冷側、東京處於背風乾燥溫暖側，精確解釋了東京緯度較高卻早開花之反常現象。 故選 (C)。"
  },
  {
    "id": "q_math_factoring_grouping_common_factor_192",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：多項式因式分解／展開後重新分組提公因式法",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【展開後重新分組提公因式】關鍵技巧與符號陷阱！\n1. **原括號無公因式時，「先展開、再分組」**：\n   - c(a² - b²) - a(b² - c²) 無法直接提公因式，先乘開成 4 項：a²c - b²c - ab² + ac²。\n2. **兩兩分組技巧（含相同變數湊同組）**：\n   - (a²c + ac²) - (b²c + ab²) = ac(a + c) - b²(a + c) = (a + c)(ac - b²)。\n3. **高頻誘答陷阱精準排雷**：\n   - 陷阱 (C) a² - bc：故意調換平方位置與字母，看到 a² 就想選是常見粗心！\n   - 陷阱 (D) b² + ac：正負號陷阱！因式是 ac - b² 或 b² - ac，中間是「減號」，絕不是加號！",
    "stem": "下列何者是 c(a² - b²) - a(b² - c²) 的因式？\n\n○ (A) a - c\n○ (B) a + c\n○ (C) a² - bc\n○ (D) b² + ac",
    "answer": "(B) a + c",
    "diagramUrl": "",
    "solution": "a + c【完全正確，本題正解】：完全符合因式分解結果，為原式之因式。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "a + c【完全正確，本題正解】：完全符合因式分解結果，為原式之因式。 故選 (B)。"
  },
  {
    "id": "q_math_factoring_perfect_square_grouping_193",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：多項式因式分解／完全平方式與分組提公因式",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【完全平方式結合分組提公因式】兩大關鍵步驟！\n1. **前段完全平方式快速辨識**：\n   - 看到 4x² - 4x + 1，直接聯想到差的平方公式 (2x - 1)²！\n2. **後段四項式兩兩分組提公因式**：\n   - 6xy - 3y + 10x - 5 = 3y(2x - 1) + 5(2x - 1)，成功湊出共同公因式 (2x - 1)！\n3. **合併括號內常數項加減法常犯粗心**：\n   - 提出 (2x - 1) 後，剩下的是 [(2x - 1) + 3y + 5]。\n   - 常數項是 -1 + 5 = +4，千萬別粗心算成 -6 或 -4！",
    "stem": "因式分解 (4x² - 4x + 1) + (6xy - 3y + 10x - 5) 之結果為何？\n\n○ (A) (2x - 1)(2x + 3y + 4)\n○ (B) (2x - 1)(2x - 3y + 4)\n○ (C) (2x + 1)(2x + 3y + 4)\n○ (D) (2x - 1)(2x + 3y - 4)",
    "answer": "(A) (2x - 1)(2x + 3y + 4)",
    "diagramUrl": "",
    "solution": "(2x - 1)(2x + 3y + 4)【完全正確，本題正解】 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "(2x - 1)(2x + 3y + 4)【完全正確，本題正解】 故選 (A)。"
  },
  {
    "id": "q_math_factoring_difference_of_squares_video_194",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：多項式因式分解／負號分配律與完全平方配平方差公式",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【負號變號陷阱 ＋ 完全平方配平方差雙重組合】！\n1. **第一重陷阱：負號分配律變號**：\n   - -(9a² - 4b²) = -9a² + 4b²！負負得正，+4b² 是正號！\n2. **第二重核心：三項配成完全平方式**：\n   - 將 x² + 4bx + 4b² 配成 (x + 2b)²。\n3. **第三重核心：平方差公式分解**：\n   - (x + 2b)² - (3a)² = (x + 2b + 3a)(x + 2b - 3a)。\n4. **選項 (B) 誘答陷阱**：\n   - 注意兩個因式中 b 的前面都是「+2b」，差別在於 3a 的正負號（+3a 或 -3a），千萬不要選錯成 -2b 的選項 (B)！",
    "stem": "下列何者是 x² + 4bx - (9a² - 4b²) 的因式？\n\n○ (A) x + 3a + 2b\n○ (B) x + 3a - 2b\n○ (C) x² - 3a - 2b\n○ (D) x + 9a - 4b",
    "answer": "(A) x + 3a + 2b",
    "diagramUrl": "",
    "solution": "² - B² = (A + B)(A - B) 進行分解： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "² - B² = (A + B)(A - B) 進行分解： 故選 (A)。"
  },
  {
    "id": "q_math_factoring_fraction_lcm_cross_multiplication_195",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：多項式因式分解／分數型係數提出分母最小公倍數與十字交乘法",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【分數型多項式因式分解】超高頻必錯大陷阱！\n1. **因式分解 vs 解方程式（絕對不能直接同乘 42 把分母消掉！）**：\n   - ⚠️ 若是「方程式 = 0」，可以兩邊同乘 42 去分母。\n   - 但這是「多項式因式分解」，式子的數值不能改變，必須將 1/42「提出放在最前面」！\n   - 漏掉 1/42 選 (B) 是全臺灣國中生最常犯的經典死穴！\n2. **通分求分母最小公倍數**：\n   - [14, 6, 21] = 42，括號內各項分子分別乘以 3、7、2，得到 9y² + 35y - 4。\n3. **十字交乘正負號核對**：\n   - 一次項為 +35y，十字交乘為 9·(+4) + 1·(-1) = +35，常數項為 -1 與 +4！",
    "stem": "3/14 y² + 5/6 y - 2/21 可因式分解為下列何者？\n\n○ (A) 1/42 (3y - 1)(y + 2)\n○ (B) (9y - 1)(y + 4)\n○ (C) 1/42 (9y - 1)(y + 4)\n○ (D) (9y + 1)(y - 4)",
    "answer": "(C) 1/42 (9y - 1)(y + 4)",
    "diagramUrl": "",
    "solution": "1/42 (9y - 1)(y + 4)【完全正確，本題正解】：包含係數 1/42 且十字交乘正確。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1/42 (9y - 1)(y + 4)【完全正確，本題正解】：包含係數 1/42 且十字交乘正確。 故選 (C)。"
  },
  {
    "id": "q_math_factoring_geometry_tiles_rectangle_assembly_196",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二數學：因式分解幾何拼圖應用／總面積因式分解拼大長方形（基測經典題）",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【幾何拼圖積木題】化幾何為代數因式分解的轉化技巧！\n1. **破題本質轉化（面積 ＝ 長 × 寬 ＝ 因式分解）**：\n   - 看到「拼成大長方形」，直接聯想到「總面積 ＝ 長 × 寬」！\n   - 能否拼成大長方形 ＝ 剩下紙板的「總面積代數式」能否成功因式分解成兩個一次式相乘！\n2. **快速排雷要訣**：\n   - 看到 π 不要害怕，直接把 π 當成代數變數 x（即 7x² + 17x + 12）！\n   - (A) 減去 1 塊 x² 變成 6x² + 17x + 12 = (2x + 3)(3x + 4)，十字交乘秒殺！\n3. **陷阱排雷**：\n   - 千萬不要盲目動手畫圖去拼拼看，圖形有 36 塊，用畫圖拼湊絕對耗時且容易遺漏，善用十字交乘因式分解 10 秒就能精準鎖定答案！",
    "stem": "如圖，有 A 型、B 型、C 型三種不同的紙板，其中：\n- A 型：邊長為 π 公分（π 為圓周率）的正方形，共有 7 塊；\n- B 型：長為 π 公分，寬為 1 公分的長方形，共有 17 塊；\n- C 型：邊長為 1 公分的正方形，共有 12 塊。\n\n從這 36 塊紙板中，拿掉一塊紙板，使得剩下的紙板在不重疊的情況下，可以緊密的拼出一個大長方形，請問拿掉的是哪一種紙板？〔91. 基測 II〕\n\n○ (A) A 型\n○ (B) B 型\n○ (C) C 型\n○ (D) 完全不用拿掉，就可拼出一個大長方形。",
    "answer": "(A) A 型",
    "diagramUrl": "assets/questions/q196_card_tiles_rectangle_assembly_diagram.png",
    "solution": "型（正方形）：每塊面積 = π × π = π²，共 7 塊 ➔ 面積 7π² 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "型（正方形）：每塊面積 = π × π = π²，共 7 塊 ➔ 面積 7π² 故選 (A)。"
  },
  {
    "id": "q_math_similar_triangles_semicircle_radius_197",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學：相似三角形應用／平行線截線段比例與對應高的比求內接半圓半徑",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【幾何相似形 × 內接半圓半徑】解題核心雙關鍵！\n1. **直徑 vs 半徑的符號設定陷阱**：\n   - 題目以「線段 DE 為直徑」，若設半徑為 r，切記線段 DE 長度是「2r」而不是 r！許多同學在此漏乘 2，導致誤列出 r/30 = (10-r)/10 而算出錯誤半徑 7.5。\n2. **平行線間距離的等長轉化**：\n   - 圓心 O 到切點 F 的垂直線段 OF 為半徑 r。\n   - 因為 DE // BC，所以平行線間距離 GH ＝ OF ＝ r，頂端小三角形 ADE 的高 AG 就等於「大高減半徑」，即「10 - r」。\n3. **秒殺比例式**：\n   - 看到平行線截相似三角形，立刻列出「底邊比 ＝ 高之比」：\n     (底 DE : 底 BC) ＝ (高 AG : 高 AH) ➔ 2r / 30 ＝ (10 - r) / 10，一元一次方程式交叉相乘秒解 r ＝ 6！",
    "stem": "如圖，在 △ABC 中，D、E 兩點分別在線段 AB、線段 AC 上，線段 DE // 線段 BC，以線段 DE 為直徑畫半圓 O，且線段 OF ⊥ 線段 BC，線段 AH 為線段 BC 上的高，G 為線段 AH 與線段 DE 的交點。若線段 BC = 30，線段 AH = 10，則此半圓 O 的半徑為多少？\n\n○ (A) 5\n○ (B) 6\n○ (C) 7.5\n○ (D) 8",
    "answer": "(B) 6",
    "diagramUrl": "assets/questions/q197_triangle_semicircle_similar_triangles_diagram.png",
    "solution": "C 切於 F 點，且線段 OF ⊥ 線段 BC，所以切線垂直半徑：線段 OF = r。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "C 切於 F 點，且線段 OF ⊥ 線段 BC，所以切線垂直半徑：線段 OF = r。 故選 (B)。"
  },
  {
    "id": "q_math_trapezoid_diagonals_triangle_area_ratio_198",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學：相似三角形應用／梯形對角線分割三角形面積比（蝴蝶定理與同高面積比）",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【梯形對角線分割四塊面積（蝴蝶定理）】秒殺與排雷指南！\n1. **分清「相似三角形」vs「同高三角形」**：\n   - **上下兩個三角形**（△AED 與 △CEB）是「相似三角形」：面積比 ＝ 邊長平方比 ＝ 2² : 3² ＝ 4 : 9！\n   - **相鄰兩個三角形**（如 △AED 與 △AEB、△AEB 與 △BEC）不是相似形，而是「同高不同底」：面積比 ＝ 底邊比 ＝ 2 : 3！\n2. **連比換算核心**：\n   - 由 △AED : △AEB ＝ 2 : 3，且 △AEB : △BEC ＝ 2 : 3，中間項 △AEB 的係數 3 與 2 需通分取最小公倍數 6，化為 4 : 6 與 6 : 9，得出 4 : 6 : 9！切勿誤寫成 2 : 3 : 9 或直接將邊長平方當成全部面積比。\n3. **蝴蝶模型秒殺口訣**：\n   - 梯形上下底比若為 a : b，對角線分割的四塊面積比為「上 : 左右各一 : 下 ＝ a² : ab : b²」！本題 a＝2, b＝3，直接口算：上＝4，左＝6，下＝9，連比秒出 4 : 6 : 9！",
    "stem": "如圖，四邊形 ABCD 為梯形，其中線段 AD // 線段 BC，線段 AC 與線段 BD 交於 E 點。若線段 AD : 線段 BC = 2 : 3，則 △AED 面積 : △AEB 面積 : △BEC 面積 = ？\n\n○ (A) 2 : 3 : 4\n○ (B) 4 : 6 : 9\n○ (C) 4 : 5 : 9\n○ (D) 4 : 9 : 6",
    "answer": "(B) 4 : 6 : 9",
    "diagramUrl": "assets/questions/q198_trapezoid_diagonals_area_ratio_diagram.png",
    "solution": "CD 為梯形，上底線段 AD // 下底線段 BC。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "CD 為梯形，上底線段 AD // 下底線段 BC。 故選 (B)。"
  },
  {
    "id": "q_math_square_extended_diagonal_similar_triangles_199",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學：相似三角形應用／正方形對角線與等腰三角形性質求面積比值（AA 相似與邊長平方比）",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【正方形對角線 × 等腰三角形底角 × 相似形面積比】破題核心！\n1. **等腰三角形藏在延長線裡**：\n   - 審題關鍵字「取線段 CE ＝ 線段 AC」！看到兩邊等長，立刻在圖上標註 △ACE 為等腰三角形，迅速得到 ∠CAE ＝ ∠E！\n2. **正方形對角線垂直平分的幾何特質**：\n   - 正方形對角線互相垂直（∠AOF ＝ 90°），且與正方形頂角外角（∠GCE ＝ 90°）形成直角對應！\n   - 兩角對應相等（90° 與 ∠CAE ＝ ∠E），直接鎖定 △AOF ～ △ECG（AA 相似）！\n3. **面積比 ＝ 邊長「平方比」而非邊長比**：\n   - 對應邊 OA : CE ＝ OA : 2 OA ＝ 1 : 2。\n   - 易錯陷阱：很多同學算到邊長比 1 : 2 就急著選 (A) 1/2！切記題目求的是「面積比值」，必須平方化：(1/2)² ＝ 1/4！",
    "stem": "如圖，在正方形 ABCD 中，對角線線段 AC、線段 BD 相交於 O 點，延長線段 BC，且取線段 CE = 線段 AC，連接線段 AE 分別交線段 BD 於 F 點、交線段 CD 於 G 點，則 △AOF 面積和 △ECG 面積的比值為何？\n\n○ (A) 1/2\n○ (B) 1/3\n○ (C) 1/4\n○ (D) 1/8",
    "answer": "(C) 1/4",
    "diagramUrl": "assets/questions/q199_square_extended_diagonal_similar_triangles_diagram.png",
    "solution": "D 為正方形，對角線互相垂直且平分： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "D 為正方形，對角線互相垂直且平分： 故選 (C)。"
  },
  {
    "id": "q_math_triangle_midpoint_medians_area_ratio_200",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學：相似三角形應用／三角形兩邊中點連線性質與中線重心面積比例",
    "uploadDate": "2026-10-19",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【三角形中點連線 × 重心中線分段 × 面積比例】破題核心！\n1. **中點連線段與重心的結合點**：\n   - D、E 為中點，線段 BE、線段 CD 為中線，交點 F 為 △ABC 的重心！\n   - 中點連線性質：線段 DE // 線段 BC 且 線段 DE ＝ 1/2 線段 BC。\n2. **兩大相似形面積比與重心面積分配**：\n   - △ADE ～ △ABC ➔ 面積比 ＝ 1² : 2² ＝ 1 : 4（△ADE ＝ 1/4 △ABC）。\n   - 重心 F 分割出的三塊大三角形面積相等（△FBC ＝ 1/3 △ABC）。\n   - △DEF ～ △CBF ➔ 相似比 1 : 2，面積比 ＝ 1² : 2² ＝ 1 : 4，故 △DEF ＝ 1/4 × (1/3 △ABC) ＝ 1/12 △ABC。\n3. **秒殺比值**：\n   - △DEF 面積 : △ADE 面積 ＝ (1/12) : (1/4) ＝ 1 : 3！\n   - **易錯盲點**：切勿誤將 △DEF 與 △ADE 當成相似形而誤選 (C) 1 : 4！兩者底同為 DE，但高之比為 1 : 3，因此面積比為 1 : 3！",
    "stem": "如圖，在 △ABC 中，D、E 分別為線段 AB、線段 AC 的中點，線段 BE 與線段 CD 相交於 F 點，則 △DEF 面積 : △ADE 面積 = ？\n\n○ (A) 1 : 2\n○ (B) 1 : 3\n○ (C) 1 : 4\n○ (D) 1 : 6",
    "answer": "(B) 1 : 3",
    "diagramUrl": "assets/questions/q200_midpoint_median_centroid_triangle_area_ratio_diagram.png",
    "solution": "C，且 線段 DE = 1/2 線段 BC。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "C，且 線段 DE = 1/2 線段 BC。 故選 (B)。"
  },
  {
    "id": "q_eng_grammar_because_vs_because_of_narcissus_201",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "國中英文文法：because（從屬連接詞＋完整子句）vs because of（介系詞片語＋名詞片語）",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【because vs. because of】秒殺判斷口訣！\n1. **看空格後面「有沒有動詞」**：\n   - 後面有主詞＋動詞（子句） ➔ 選 **because**（連接詞）。\n   - 後面只有名詞、名詞片語或動名詞（無動詞） ➔ 選 **because of**（介系詞片語）！\n2. **審題抓結構**：\n   - 空格後是 his handsome face and body（所有格＋形容詞＋名詞），**完全沒有動詞**，是純名詞片語！\n   - 看到「因為」千萬不要直覺秒選 because，一定要檢查後面是「句子」還是「名詞」！",
    "stem": "Echo was a beautiful nymph. She lived in the woods and liked to follow this young man, Narcissus, here and there ______ his handsome face and body.\n\n○ (A) because\n○ (B) because of\n○ (C) by\n○ (D) so",
    "answer": "(B) because of",
    "diagramUrl": "",
    "solution": "because of【完全正確，本題正解】：介系詞片語，後接名詞片語 his handsome face and body，語意「因為他英俊的容貌與體態」完全合乎文法。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "because of【完全正確，本題正解】：介系詞片語，後接名詞片語 his handsome face and body，語意「因為他英俊的容貌與體態」完全合乎文法。 故選 (B)。"
  },
  {
    "id": "q_phy_newton_second_law_water_cart_acceleration_202",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：牛頓第二運動定律 F = ma、外力固定時加速度與質量成反比",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【牛頓第二運動定律 F = ma 三大變數控制】秒殺口訣！\n1. **控制變因法三定律**：\n   - **F 固定時**：$a = \\frac{F}{m}$ ➔ **加速度與質量成反比**（質量越小、越好推、衝越快，加速度越大）！\n   - **m 固定時**：$F = ma$ ➔ 加速度與外力成正比（力越大，加速度越大）。\n   - **a 固定時**：$F = ma$ ➔ 外力與質量成正比（載重越重，想維持相同加速就要出更多力）。\n2. **生活直覺結合物理公式**：\n   - 想像推一台載滿水的水車，本來很重很難推；水流掉變輕了，用同樣大小的力氣去推，車子自然「加速得越來越快」（加速度變大）！",
    "stem": "阿牛以一固定的力推動一部裝水的車子，若車子的水逐漸流失，則車子的加速度如何？\n\n○ (A) 變大\n○ (B) 變小\n○ (C) 不變\n○ (D) 不一定",
    "answer": "(A) 變大",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) 變大。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 變大。"
  },
  {
    "id": "q_phy_force_units_newton_vs_kgw_definition_203",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：力的絕對單位（牛頓 N）與重力單位（公斤重 kgw）之定義與換算",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【1 牛頓 vs. 1 公斤重】定義絕不混淆！\n1. **1 牛頓（1 N）的標準定義**：\n   - 由 $F = ma$ 定義：**使 1 公斤質量的物體，產生 1 公尺／秒² 的加速度**，所需的力就叫作「**1 牛頓**」（$1\\text{ N} = 1\\text{ kg} \\times 1\\text{ m/s}^2$）。\n   - ⚠️ 陷阱：選項 (D) 偷換數字成「產生 9.8 公尺／秒²」，這是** 1 公斤重**才能產生的加速度，絕對不是 1 牛頓！\n2. **1 公斤重（1 kgw）的定義與換算**：\n   - 質量 1 公斤在地球表面受到的重力大小，即為 1 公斤重（$1\\text{ kgw} = 9.8\\text{ N}$）。\n   - 因為 $1\\text{ kgw} = 9.8\\text{ N}$，所以 1 公斤重的力作用於 1 公斤物體時：$a = \\frac{F}{m} = \\frac{9.8\\text{ N}}{1\\text{ kg}} = 9.8\\text{ m/s}^2$！",
    "stem": "下列有關力與加速度的敘述，何者錯誤？\n\n○ (A) 1 公斤重的力，能使 1 公斤質量的物體產生 9.8 公尺／秒² 的加速度\n○ (B) 1 公克重的力，相當於 1 公克質量的物體，在地球表面上所受引力之大小\n○ (C) 1 公斤重等於 9.8 牛頓\n○ (D) 1 牛頓的力，能使 1 公斤質量的物體，產生 9.8 公尺／秒² 的加速度",
    "answer": "(D) 1 牛頓的力，能使 1 公斤質量的物體，產生 9.8 公尺／秒² 的加速度",
    "diagramUrl": "",
    "solution": "誤寫為 $9.8\\text{ 公尺／秒}^2$，將「牛頓」與「公斤重」混為一談，故敘述錯誤。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "誤寫為 $9.8\\text{ 公尺／秒}^2$，將「牛頓」與「公斤重」混為一談，故敘述錯誤。 故選 (D)。"
  },
  {
    "id": "q_phy_newton_second_law_unit_conversion_kgw_to_n_204",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：牛頓第二運動定律 F = ma 代入前之單位換算（公斤重 kgw 轉為牛頓 N）",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【F = ma 代入前，先檢查力是不是「牛頓」！】秒殺避坑重點！\n1. **最大致命陷阱：看到 1 公斤重直接代 F = 1！**\n   - 若直接把 $F = 1$ 代入：$1 = 9.8 \\times a \\implies a = \\frac{1}{9.8}$ ➔ 就會掉入選項 (A) 的邪惡陷阱！\n2. **標準解題口訣（公式強制使用 MKS 制）**：\n   - 在 $F = ma$ 中：\n     - 力 $F$ 的單位必須是「**牛頓（N）**」！\n     - 質量 $m$ 的單位必須是「**公斤（kg）**」！\n     - 加速度 $a$ 的單位才是「**公尺／秒²（m/s²）**」！\n   - **先換算再代入**：$1\\text{ 公斤重} = 9.8\\text{ 牛頓}$！\n   - 代入公式：$9.8\\text{ N} = 9.8\\text{ kg} \\times a \\implies a = \\mathbf{1\\text{ m/s}^2}$！",
    "stem": "施 1 公斤重之力於質量 9.8 公斤之物體上，所得之加速度大小為多少公尺／秒²？\n\n○ (A) 1/9.8\n○ (B) 1\n○ (C) 9.8\n○ (D) 4.9",
    "answer": "(B) 1",
    "diagramUrl": "",
    "solution": "1：換算成 9.8 牛頓後除以 9.8 公斤，剛好等於 1。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1：換算成 9.8 牛頓後除以 9.8 公斤，剛好等於 1。 故選 (B)。"
  },
  {
    "id": "q_phy_pulley_cart_mass_constant_experiment_weights_205",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：牛頓第二運動定律滑車實驗／系統總質量控制變因（滑車與懸掛砝碼總數保持不變）",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【滑車實驗最常考觀念：整個系統一起動！】秒殺避坑重點！\n1. **最大致命陷阱：誤選 (C)「滑車上的砝碼不變」！**\n   - 很多同學直覺以為「只要滑車上的砝碼不變，被拉的物體質量就固定」➔ **大錯特錯**！\n2. **運動系統的總質量（m系統）包含哪些？**\n   - 當懸掛砝碼往下掉時，滑車往前衝，**懸掛砝碼跟滑車是「用同一條細繩連在一起、擁有相同加速度」的整體系統**！\n   - 系統總質量 $m_{\\text{系統}} = M_{\\text{車}} + m_{\\text{車上砝碼}} + m_{\\text{秤盤}} + m_{\\text{懸掛砝碼}}$。\n3. **控制變因「物體總質量不變」的操作秘訣**：\n   - 如果直接從盒子拿新砝碼掛到秤盤上，外力變大了，但系統總質量也跟著增加了，就違反了「質量固定」的控制變因！\n   - **正確唯一解法**：要把砝碼**在「滑車」與「秤盤」之間互相挪動**（例如把滑車上的砝碼拿到秤盤上），這樣**兩邊砝碼「總數永遠保持不變」**，拉力變大，但系統總質量才能真正維持固定！",
    "stem": "小美在光滑水平桌面上，利用滑車及一組質量均相同的砝碼，操作「不同拉力下，物體質量不變，產生不同加速度」的實驗，裝置如圖，下列的操作方法何者正確？\n\n○ (A) 滑車與秤盤上的砝碼數均須增加\n○ (B) 滑車與秤盤上的砝碼總數不變\n○ (C) 滑車上的砝碼數不變，僅須改變秤盤上的砝碼數\n○ (D) 秤盤上的砝碼數不變，僅須改變滑車上的砝碼數",
    "answer": "(B) 滑車與秤盤上的砝碼總數不變",
    "diagramUrl": "assets/questions/q205_pulley_cart_weights_experiment_diagram.png",
    "solution": "完全正確（本題正解）：砝碼僅在滑車與秤盤間互相挪動，總數保持不變，外力改變而總質量維持固定。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "完全正確（本題正解）：砝碼僅在滑車與秤盤間互相挪動，總數保持不變，外力改變而總質量維持固定。 故選 (B)。"
  },
  {
    "id": "q_phy_pulley_connected_masses_acceleration_206",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：牛頓第二運動定律連體運動／滑輪連體系統合力與系統總質量求加速度",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【滑輪連體運動三大致命陷阱】秒殺解題口訣！\n1. **陷阱一：誤以為 1 kg 物體自由落體（誤選 A 9.8）！**\n   - 1 kg 物體被繩子吊著，後面還拖著桌面上沈重的 3 kg 木塊，它不是自己單獨掉落，所以加速度**絕對小於重力加速度 9.8**！\n2. **陷阱二：系統總質量忘記「連體相加」！**\n   - 整條繩子綁著兩個物體一起動，一個向右跑、一個向下掉，加速度大小完全相同。\n   - 因此運動系統的總質量必須是：$m_{\\text{系統}} = m_1 + m_2 = 3 + 1 = \\mathbf{4\\text{ kg}}$！\n3. **誰在提供驅動力（外力 F）？**\n   - 水平桌面上的 3 kg 木塊重力被桌面支撐力抵消，不提供前進的力；\n   - 只有**懸掛在空中的 1 kg 物體所受的重力**才是拉動整個系統的「唯一合外力」：$F = 1\\text{ kg} \\times 9.8\\text{ m/s}^2 = 9.8\\text{ N}$！\n   - 加速度秒算：$a = \\frac{F}{m_{\\text{系統}}} = \\frac{9.8\\text{ N}}{3 + 1\\text{ kg}} = \\frac{9.8}{4} = \\mathbf{2.45\\text{ m/s}^2}$！",
    "stem": "如圖，在沒有摩擦的情形下，放手後，質量 1 kg 的物體落下的加速度大小為多少 m／s²？\n\n○ (A) 9.8\n○ (B) 4.9\n○ (C) 2.45\n○ (D) 0",
    "answer": "(C) 2.45",
    "diagramUrl": "assets/questions/q206_table_pulley_blocks_acceleration_diagram.png",
    "solution": "2.45【完全正確，本題正解】：外力 9.8 N 由總質量 4 kg 平分加速，加速度為 2.45 m/s²。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "2.45【完全正確，本題正解】：外力 9.8 N 由總質量 4 kg 平分加速，加速度為 2.45 m/s²。 故選 (C)。"
  },
  {
    "id": "q_phy_two_blocks_string_tensions_ratio_207",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：牛頓第二運動定律連體運動／整體法求總外力 vs 隔離法求繩子張力之比值",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【連體繩子拉力比】整體法 vs 隔離法秒殺！\n1. **最大致命陷阱：誤以為 T₁ 只有拉物體 A（誤選 D 2 : 1）！**\n   - $T_1$ 拉在最前面，它後面拖著 A，A 又拖著 B，所以** $T_1$ 必須負責拉動「A ＋ B 兩者」**！\n2. **秒殺兩步驟（整體法與隔離法）**：\n   - **看整體求 T₁**：外力 $T_1$ 拉動整個系統（$m_A + m_B$），故 $T_1 = (m_A + m_B)a = (2 + 1)a = 3a$！\n   - **看後面的 B 求 T₂**：繩子張力 $T_2$ 只需要負責拉動身後的物體 B，故 $T_2 = m_B \\times a = 1a$！\n   - **拉力比值**：$T_1 : T_2 = 3a : 1a = \\mathbf{3 : 1}$！\n3. **誰在前面拉越多，質量總和成正比**：\n   - 在相同加速度下，繩子的拉力大小恰好等於**「該繩子後方所拖曳的所有物體質量總和」**！\n   - $T_1$ 後面有 $2+1=3\\text{ kg}$；$T_2$ 後面只有 $1\\text{ kg}$ ➔ 比值直接秒殺：**3 : 1**！",
    "stem": "如圖，置於光滑平面上的 A、B 兩個物體，以兩條不計其質量的輕繩連結，且 A = 2 kg、B = 1 kg。今以 T₁ 的拉力向右拉 A 物體，T₂ 為向右拉 B 物體的拉力，而使兩木塊皆獲得一相同的加速度，則 T₁ : T₂ 為何？\n\n○ (A) 1 : 3\n○ (B) 3 : 1\n○ (C) 1 : 2\n○ (D) 2 : 1",
    "answer": "(B) 3 : 1",
    "diagramUrl": "assets/questions/q207_two_blocks_string_tensions_ratio_diagram.png",
    "solution": "物體（1 kg）視為同一個運動系統。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "物體（1 kg）視為同一個運動系統。 故選 (B)。"
  },
  {
    "id": "q_phy_smooth_surface_constant_force_acceleration_208",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：光滑平面無摩擦力（摩擦力為 0）／受定力必作等加速度運動 vs 牛頓第一定律",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-12",
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【光滑水平面三大審題關鍵】！\n1. **看見「光滑」＝ 摩擦力為 0！**\n   - 光滑平面不需要克服任何最大靜摩擦力！**只要有任何微小的水平外力（哪怕只有 0.0001 kgw），木塊就一定會被推動！**\n   - ⚠️ 陷阱 (A) 誤以為重量 1 kgw 需要至少 1 kgw 才能推動，這是把「垂直重力」和「水平推力」搞混了！\n2. **「持續施定力」物體會怎麼動？**\n   - **合力 F ＝ 0** ➔ 靜止或「**等速度運動**」（牛頓第一運動定律）。\n   - **合力 F ＝ 定值（不為 0）** ➔ $a = \\frac{F}{m}$ 為定值 ➔ **必作「等加速度運動」**（速度越來越快）！\n   - ⚠️ 陷阱 (B)(D) 誤以為「用力一直推就是等速度」，在沒有摩擦力的情況下持續施力，速度一定會一直飆升，絕不是等速度！",
    "stem": "有一個木塊原本靜止在一光滑水平面上。已知木塊的重量為 1 kgw，當在水平方向對木塊持續施一力 F，如圖所示，則下列敘述何者正確？\n\n○ (A) 若 F = 0.5 kgw，則木塊維持靜止\n○ (B) 若 F = 1 kgw，則木塊將作等速度運動\n○ (C) 若 F = 0.1 kgw，則木塊將作等加速度運動\n○ (D) 若 F = 1.5 kgw，則木塊將作等速度運動",
    "answer": "(C) 若 F = 0.1 kgw，則木塊將作等加速度運動",
    "diagramUrl": "assets/questions/q208_smooth_surface_block_constant_force_diagram.png",
    "solution": "完全正確（本題正解）：只要 $F = 0.1\\text{ kgw}$ 是固定的力，合力為定值，木塊即作「等加速度運動」。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "完全正確（本題正解）：只要 $F = 0.1\\text{ kgw}$ 是固定的力，合力為定值，木塊即作「等加速度運動」。 故選 (C)。"
  },
  {
    "id": "q_phy_ticker_timer_tape_acceleration_209",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：打點計時器頻率求週期（t = 1/f）與等加速度運動相鄰位移差（ΔS = a·t²）求加速度",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：打點計時器紙帶求加速度的兩大常見陷阱！\n1. **頻率換週期要倒數**：\n   - 題目給打點計時器頻率 $f = 5\\text{ 赫（Hz）}$，相鄰兩點的時間間隔是週期 $t = \\frac{1}{f} = \\frac{1}{5} = \\mathbf{0.2\\text{ 秒}}$！\n   - ⚠️ **常犯粗心**：誤將 5 赫直接當作 $t = 5\\text{ 秒}$，或者將 $0.2\\text{ 秒}$ 平方算成 $0.4$，導致答案相差數十倍！注意 $(0.2)^2 = 0.04$！\n2. **等加速度紙帶相鄰位移差秒殺公式**：\n   - 相鄰連續且等時距的位移差 $\\Delta S = S_2 - S_1 = a \\cdot t^2$！\n   - $\\Delta S = 1.2 - 0.4 = 0.8\\text{ cm}$，所以 $a = \\frac{\\Delta S}{t^2} = \\frac{0.8}{(0.2)^2} = \\frac{0.8}{0.04} = \\mathbf{20\\text{ 公分／秒}^2}$！",
    "stem": "如圖(一)所示的裝置中，做「力和加速度變化」的實驗步驟如下：\n甲：滑車上先載兩個砝碼（每個砝碼均 20 公克），滑輪下端懸掛一個砝碼，扣住滑車。\n乙：滑車之後拉著紙帶，使紙帶通過打點計時器，而打點計時器的振動頻率是 5 赫。\n丙：釋放滑車使打點計時器在紙帶上打點。\n丁：將滑車上砝碼逐一拿到懸掛砝碼的一端，並重複丙步驟。\n\n試回答下列問題：\n某次實驗後，建豪撕下紙帶，測量前三點間的距離如圖(二)所示，則滑車滑動的加速度大小為多少公分／秒²？（補充題）\n\n○ (A) 10 公分／秒²\n○ (B) 20 公分／秒²\n○ (C) 40 公分／秒²\n○ (D) 80 公分／秒²",
    "answer": "(B) 20 公分／秒²",
    "diagramUrl": "assets/questions/q209_pulley_timer_tape_dots_acceleration_diagram.png",
    "solution": "點經歷 $0.2\\text{ 秒}$，從 B 點到 C 點也經歷 $0.2\\text{ 秒}$。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "點經歷 $0.2\\text{ 秒}$，從 B 點到 C 點也經歷 $0.2\\text{ 秒}$。 故選 (B)。"
  },
  {
    "id": "q_phy_ticker_timer_system_tension_force_210",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "國三理化力與運動：牛頓第二運動定律 F = ma 之單位標準化換算（公克轉公斤、cm/s²轉m/s²求牛頓 N）",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：牛頓第二定律 $F = ma$ 嚴格單位對應守則！\n1. **牛頓（N）是 MKS 國際標準制單位**：\n   - 力的單位：**牛頓（N）**\n   - 質量的單位必須換成：**公斤（kg）**！題目給 $800\\text{ 公克} = \\mathbf{0.8\\text{ 公斤}}$！\n   - 加速度的單位必須換成：**公尺／秒²（m/s²）**！上題算出的 $20\\text{ cm/s}^2 = \\mathbf{0.2\\text{ m/s}^2}$！\n2. **常見粗心爆點**：\n   - ⚠️ 若直接拿公克和公分／秒²相乘：$800 \\times 20 = 16000$（達因 dyn），若沒換算就寫成 $160$ 或 $1.6$，小數點位數大錯特錯！\n   - 一定要先換算標準單位再代入：$F = 0.8\\text{ kg} \\times 0.2\\text{ m/s}^2 = \\mathbf{0.16\\text{ N}}$！",
    "stem": "承上題實驗，若系統總質量共 800 公克，則繩子對滑車的拉力為多少牛頓？（補充題）\n\n○ (A) 0.08 牛頓\n○ (B) 0.16 牛頓\n○ (C) 1.6 牛頓\n○ (D) 160 牛頓",
    "answer": "(B) 0.16 牛頓",
    "diagramUrl": "assets/questions/q209_pulley_timer_tape_dots_acceleration_diagram.png",
    "solution": "0.16 牛頓【完全正確，本題正解】：$0.8\\text{ kg} \\times 0.2\\text{ m/s}^2 = 0.16\\text{ N}$。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "0.16 牛頓【完全正確，本題正解】：$0.8\\text{ kg} \\times 0.2\\text{ m/s}^2 = 0.16\\text{ N}$。 故選 (B)。"
  },
  {
    "id": "q_math_triangle_midpoints_parallel_similar_area_211",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學相似形：平行線截比例線段與相似三角形面積比等於邊長平方比",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【相似三角形面積比】與【梯形分割面積】核心口訣！\n1. **相似三角形邊長比與面積比的關係**：\n   - 若邊長比為 $a : b$，則相似三角形的面積比必為平方比 $a^2 : b^2$！\n   - ⚠️ **常犯粗心**：誤將邊長比直接當作面積比（例如誤以為邊長比 2 : 3，面積就相差 1 份），一定要先平方！\n2. **中點再中點的邊長切割手法**：\n   - $D$ 為中點 ➔ $AD = 2$ 份，$DB = 2$ 份。\n   - $E$ 為 $DB$ 中點 ➔ $DE = 1$ 份，$EB = 1$ 份。\n   - 因此邊長總和：$AD : AE : AB = 2 : 3 : 4$！\n   - 三個相似三角形面積比為 $2^2 : 3^2 : 4^2 = 4 : 9 : 16$！\n3. **梯形面積是相扣出來的**：\n   - 中間梯形 $DEGF$ 面積比例 $= 9 - 4 = 5$ 份。\n   - $5$ 份對應面積 $10$ ➔ 每 $1$ 份面積為 $2$！\n   - 整體大三角形 $\\triangle ABC$ 面積 $= 16$ 份 $\\times 2 = \\mathbf{32}$！",
    "stem": "如圖，在 △ABC 中，D、F 分別為線段 AB、線段 AC 的中點，E、G 分別為線段 DB、線段 FC 的中點，且 DF // EG // BC。若四邊形 DEGF 的面積為 10，則 △ABC 的面積為何？\n\n○ (A) 24\n○ (B) 30\n○ (C) 32\n○ (D) 36",
    "answer": "(C) 32",
    "diagramUrl": "assets/questions/q211_triangle_midpoints_parallel_area_ratio_diagram.png",
    "solution": "上，$F$ 為 AC 中點，$G$ 為 FC 中點，亦有： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "上，$F$ 為 AC 中點，$G$ 為 FC 中點，亦有： 故選 (C)。"
  },
  {
    "id": "q_math_parallelogram_butterfly_similar_area_212",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學相似形：平行四邊形蝴蝶形（沙漏形）相似與等高三角形面積比求割補四邊形面積",
    "uploadDate": "2026-10-20",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【蝴蝶形相似＋等高三角形面積比】三大拆解步驟！\n1. **平行四邊形對邊等長先抓出來**：\n   - $BE : EC = 3 : 2 \\implies BC = 3 + 2 = 5$ 份。\n   - 因為平行四邊形對邊相等，所以對邊 $AD = BC = 5$ 份！\n   - 蝴蝶形上下邊長比為 $BE : AD = 3 : 5$！\n2. **區分【相似形（邊長平方比）】與【等高三角形（邊長一次方比）】**：\n   - $\\triangle BEF$ 與 $\\triangle DAF$ 為「**相似形**」➔ 面積比為平方比 $3^2 : 5^2 = 9 : 25$！\n   - $\\triangle ABF$ 與 $\\triangle BEF$ 為「**等高三角形**」➔ 面積比為底邊比 $5 : 3$ ➔ 面積為 $\\frac{5}{3} \\times a = \\frac{15}{9} a$！\n3. **對角線半分平行四邊形求四邊形**：\n   - 對角線 $BD$ 將平行四邊形切成兩半：$\\text{面積}(\\triangle BCD) = \\text{面積}(\\triangle ABD) = \\frac{15}{9} a + \\frac{25}{9} a = \\frac{40}{9} a$。\n   - 四邊形 $CDFE = \\triangle BCD - \\triangle BEF = \\frac{40}{9} a - a = \\mathbf{\\frac{31}{9} a}$！",
    "stem": "如圖，在平行四邊形 ABCD 中，E 為線段 BC 上一點，線段 BD 和線段 AE 交於 F 點。已知 BE : EC = 3 : 2，若 △BEF 面積為 a，則四邊形 CDFE 面積可用 a 表示為何？\n\n○ (A) 16/9 a\n○ (B) 25/9 a\n○ (C) 31/9 a\n○ (D) 35/9 a",
    "answer": "(C) 31/9 a",
    "diagramUrl": "assets/questions/q212_parallelogram_butterfly_similar_area_diagram.png",
    "solution": "D$ 中，對邊平行且等長：$AD // BC$ 且 $AD = BC$。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "D$ 中，對邊平行且等長：$AD // BC$ 且 $AD = BC$。 故選 (C)。"
  },
  {
    "id": "q_phy_metal_oxide_sulfuric_acid_mole_ratio_213",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化化學計量：化學反應式係數比等於莫耳數比、原子量式量計算與質量守恆求產物水質量",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【化學計量破題雙絕招，莫耳數比與式量差法】！\n1. **常犯錯誤一：忘了「莫耳數比等於係數比」**：\n   - 反應式係數比為 1 : 1 : 1 : 1，代表消耗 1 莫耳 XO 就會產生 1 莫耳 XSO₄ 與 1 莫耳 H₂O。\n   - 絕對「不能」直接拿質量成比例（例如以為 20 公克生 60 公克就是三倍，水就是硫酸的三倍）！因為質量 ＝ 莫耳數 × 分子量（式量），必須透過莫耳數作為橋樑轉換。\n2. **常犯錯誤二：算錯式量（忘記原子個數乘積）**：\n   - XO 的式量 ＝ X + 16。\n   - XSO₄ 的式量 ＝ X + 32 + (16 × 4) ＝ X + 32 + 64 ＝ X + 96。\n   - H₂O 的式量 ＝ (1 × 2) + 16 ＝ 18。\n   - 很多同學會把 XSO₄ 算成 X + 32 + 16 ＝ X + 48，少乘了氧原子的個數 4，導致解不出 X！\n3. **神速解題密技（式量差與質量差法）**：\n   - 觀察 XO 變成 XSO₄，金屬原子 X 沒變，本質上就是把 O 換成了 SO₄，也就是多增加了「SO₃」（硫＋三個氧）。\n   - 式量差 ＝ 32 + (16 × 3) ＝ 80。\n   - 反應質量差 ＝ 60 - 20 ＝ 40 公克。\n   - 反應莫耳數 ＝ 40 ÷ 80 ＝ 0.5 莫耳！\n   - 產生水 H₂O 的莫耳數也是 0.5 莫耳，所以質量 m ＝ 0.5 × 18 ＝ 9 公克！口算 10 秒直接秒殺！",
    "stem": "已知 H、O、S 的原子量分別為 1、16、32。取 20 公克的金屬 X 氧化物（XO），在適當條件下與足量的硫酸完全反應，理論上會產生 60 公克的 XSO₄ 和 m 公克的 H₂O，反應式為：XO + H₂SO₄ → XSO₄ + H₂O，此反應式的係數已平衡，m 值應為下列何者？〔103. 會考〕\n\n○ (A) 9\n○ (B) 18\n○ (C) 24\n○ (D) 40",
    "answer": "(A) 9",
    "diagramUrl": "",
    "solution": "9【完全正確，本題正解】：正確求得反應莫耳數為 0.5 莫耳，水質量為 0.5 × 18 ＝ 9 公克。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "9【完全正確，本題正解】：正確求得反應莫耳數為 0.5 莫耳，水質量為 0.5 × 18 ＝ 9 公克。 故選 (A)。"
  },
  {
    "id": "q_bio_national_parks_culture_vs_biodiversity_214",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國一生物生態系：臺灣國家公園特色（金門保護歷史文化戰役遺蹟、墾丁熱帶季風林與珊瑚礁生態系最豐富、食物網最複雜）",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【臺灣九大國家公園特色考點精準對照】！\n1. **保護歷史文化與戰役古蹟為主**：\n   - **金門國家公園（己）**：臺灣第一座以維護「歷史文化資產、戰役紀念及傳統閩南聚落」為宗旨的國家公園！\n2. **生態最豐富、食物網最複雜**：\n   - **墾丁國家公園（丁）**：臺灣本島最南端，屬於「熱帶季風氣候」，同時擁有陸地熱帶季風林、海岸林，以及海洋「珊瑚礁生態系」（海洋中的熱帶雨林）！生物多樣性最高、生產力最旺盛、食物網最錯綜複雜！\n3. **其他代號對應檢驗**：\n   - 甲：陽明山（火山地質與溫泉）\n   - 乙：太魯閣（大理石峽谷與高山生態）\n   - 丙：玉山（東北亞第一高峰、高山森林垂直分佈）\n   - 戊：台江（濕地潟湖紅樹林與黑面琵鷺，或壽山/台南濕地）\n   - 己：金門；丁：墾丁！",
    "stem": "臺灣為了保護生物的棲息環境，設立了國家公園。如附圖，則哪座是以保護文化遺產為主的國家公園？哪個國家公園的生態最豐富、食物網最複雜？\n\n○ (A) 甲、乙\n○ (B) 丙、戊\n○ (C) 己、丁\n○ (D) 甲、己",
    "answer": "(C) 己、丁",
    "diagramUrl": "assets/questions/q214_taiwan_national_parks_map.png",
    "solution": "故本題正確答案為 (C) 己、丁。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) 己、丁。"
  },
  {
    "id": "q_bio_introduced_species_invasive_conditions_215",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "國一生物外來種與生態平衡：引進物種繁殖能力與天敵對入侵種建立族群之影響、檢疫防疫重要性",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【外來種、歸化種與入侵種觀念排雷】！\n1. **引進種能否成功立足的兩大關鍵**：\n   - 「**繁殖能力強大**」且「**缺乏天敵制衡**」，使其能迅速擴展族群壓迫原生種，進而成為嚴重的入侵種！\n2. **常見選項陷阱剖析**：\n   - ❌ 櫻桃在臺灣能穩定族群是因為沒有天敵？錯！櫻桃需要溫帶冷涼氣候，臺灣平地太熱無法自然大量繁殖建立野生族群，並非因缺乏天敵。\n   - ❌ 增加獵物數量能壓制外來捕食者？錯！增加獵物只會讓強勢的外來種（如沙氏變色蜥）食物更充沛、繁殖更失控！\n   - ❌ 機場禁帶水果是因為擔心水果繁殖力太強？錯！真正危險的是水果可能潛藏**「東方果實蠅、害蟲或病原真菌」**，這些伴隨入境的生物會重創本土農業生態！",
    "stem": "下列敘述何者正確？\n\n○ (A) 櫻桃之所以能夠在引進臺灣後穩定族群，是因為櫻桃沒有天敵\n○ (B) 可增加蝸牛、小型青蛙等生物的數量，來使原生種生物增加\n○ (C) 引進物種的繁殖能力強度，是此物種成為入侵種或是歸化種的一個重要因素\n○ (D) 機場會禁止自行攜帶水果入境，是擔心水果的繁殖能力佳，影響當地植物。",
    "answer": "(C) 引進物種的繁殖能力強度，是此物種成為入侵種或是歸化種的一個重要因素",
    "diagramUrl": "",
    "solution": "- (A) 錯誤：櫻桃屬於溫帶水果，適合涼溫乾燥氣候，引進臺灣平地後因氣候濕熱且需低溫春化，生長與繁殖受限，並無法在野外自然繁衍建立穩定族群，並非「因為沒有天敵」。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- (A) 錯誤：櫻桃屬於溫帶水果，適合涼溫乾燥氣候，引進臺灣平地後因氣候濕熱且需低溫春化，生長與繁殖受限，並無法在野外自然繁衍建立穩定族群，並非「因為沒有天敵」。 故選 (C)。"
  },
  {
    "id": "q_phy_newton_third_law_rope_block_action_reaction_216",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：牛頓第三運動定律（作用力與反作用力）之施力者與受力者精準配對",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【作用力與反作用力秒殺口訣：A 對 B 施力，反作用力必為 B 對 A 施力】！\n1. **主詞與受詞互換原則**：\n   - 找反作用力時，**只要把「施力物」和「受力物」完全對調**，其他介質一律不變！\n   - 題目定義：F₂ 為「**手**」拉「**繩子**」的力（施力者：手，受力者：繩子）。\n   - 則 F₂ 的反作用力必為「**繩子**」作用於「**手**」的力（施力者：繩子，受力者：手），即為 **F₄**！\n2. **其他力的配對分析（絕不混淆）**：\n   - F₁ 是「木塊」作用於「繩子」的力，其反作用力為「繩子」拉「木塊」的力（F₃）！\n   - F₁ 與 F₃ 互為一組作用力與反作用力！\n   - F₂ 與 F₄ 互為一組作用力與反作用力！",
    "stem": "如圖所示，大雄用手拉著一條綁著木塊的繩子，其中 F₁ 為木塊作用於繩子的力、F₂ 為手拉繩子的力、F₃ 為繩子拉木塊的力、F₄ 為繩子作用於手的力。請問 F₂ 的反作用力為何？\n\n○ (A) F₁\n○ (B) F₂\n○ (C) F₃\n○ (D) F₄",
    "answer": "(D) F₄",
    "diagramUrl": "assets/questions/q216_hand_pull_block_action_reaction_diagram.png",
    "solution": "1. 牛頓第三運動定律（作用力與反作用力定律）核心定義： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 牛頓第三運動定律（作用力與反作用力定律）核心定義： 故選 (D)。"
  },
  {
    "id": "q_phy_newton_third_law_spring_recoil_mass_ratio_217",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：壓縮彈簧釋放兩物體受相同反作用力、牛頓第二定律 F=ma 求加速度與質量成反比",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【壓縮彈簧釋放兩端物體受力相同，質量與加速度成反比】！\n1. **彈簧釋放時兩端推力絕對相等**：\n   - 輕彈簧兩端施於甲、乙兩物體的彈力互為作用力與反作用力，在釋放的瞬間與推動過程中，彈簧對甲與對乙的推力大小恆相等（F_甲 = F_乙）！\n2. **加速度計算與質量反比關係**：\n   - 甲物 1 秒後速度達 2 m/s ➔ 加速度 a_甲 = 2 ÷ 1 = 2 m/s²。\n   - 乙物 1 秒後速度達 5 m/s ➔ 加速度 a_乙 = 5 ÷ 1 = 5 m/s²。\n   - 由牛頓第二運動定律 F = m × a：\n     因為 F 相等 ➔ m_甲 × a_甲 = m_乙 × a_乙。\n   - 速度較慢的物體，代表質量比較大、慣性比較大（不容易被推動）！\n   - 許多同學常犯「正比計算」錯誤：誤以為速度慢質量小算成 20 × (2/5) = 8 或粗心選 (A) 4，切記**加速度與質量成反比**！",
    "stem": "如圖，在完全光滑的平面上，將甲、乙兩物體各放在彈簧的一端，用力壓縮彈簧後釋放，1 秒後甲物的速度為 2 m／s，乙物的速度為 5 m／s，已知乙物的質量為 20 公斤，則甲物的質量為多少公斤？\n\n○ (A) 4\n○ (B) 20\n○ (C) 25\n○ (D) 50",
    "answer": "(D) 50",
    "diagramUrl": "assets/questions/q217_smooth_surface_spring_recoil_diagram.png",
    "solution": "50【完全正確，本題正解】：嚴格應用牛頓第二定律與牛頓第三定律，正確求得甲物質量為 50 公斤。 故選 (D)。",
    "videoUrl": "https://www.youtube.com/watch?v=3A3MyWFvzys",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "50【完全正確，本題正解】：嚴格應用牛頓第二定律與牛頓第三定律，正確求得甲物質量為 50 公斤。 故選 (D)。"
  },
  {
    "id": "q_phy_chem_self_heating_can_quicklime_reaction_218",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化生活中的化學反應：氧化鈣（生石灰 CaO）遇水劇烈放熱生成氫氧化鈣（熟石灰 Ca(OH)₂）",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【常見鈣化合物俗名、化學式與反應速記】！\n1. **三大鈣化合物黃金三角**：\n   - **生石灰（氧化鈣，CaO）**：白色固體，吸水性極強，常用作食品乾燥劑。\n   - **熟石灰／消石灰（氫氧化鈣，Ca(OH)₂）**：生石灰加水反應後生成，水溶液俗稱「石灰水」，呈鹼性，可檢驗二氧化碳！\n   - **灰石／石灰石／大理石（碳酸鈣，CaCO₃）**：石灰水通入二氧化碳生成之白色沉澱，或鐘乳石主成分。\n2. **化學反應式**：\n   - CaO + H₂O → Ca(OH)₂ + 熱量（放熱反應）\n3. **常犯誘答陷阱**：\n   - 誤選 (C) 氫氧化鈉：反應物為 CaO（含鈣），產物絕不可能無中生有變成「鈉（Na）」！遵守原子守恆！",
    "stem": "圖(一)～圖(三)為一則新聞報導，有一種「自熱罐」飲料，罐身下方隔層有 CaO 和水，兩者混合後會放出熱量，可使飲料溫度上升至 60 ℃左右，且續熱半小時以上，在寒冷的冬天相當方便。小禾認為附圖中說明產生的物質有誤，應更正為如何種物質？〔111. 會考〕\n\n○ (A) 碳酸鈉\n○ (B) 硫酸鈣\n○ (C) 氫氧化鈉\n○ (D) 氫氧化鈣",
    "answer": "(D) 氫氧化鈣",
    "diagramUrl": "assets/questions/q218_self_heating_can_cao_reaction_diagram.png",
    "solution": "氫氧化鈣【完全正確，本題正解】：CaO + H₂O → Ca(OH)₂。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "氫氧化鈣【完全正確，本題正解】：CaO + H₂O → Ca(OH)₂。 故選 (D)。"
  },
  {
    "id": "q_phy_newton_third_law_skaters_push_action_reaction_219",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：牛頓第三定律（互推各受對方施力與反作用力之合力）與牛頓第二定律 F=ma 加速度比反比於質量",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【互推問題受力秒殺口訣：各人受力大小必恆相等！】！\n1. **互推受力絕對相等（1 : 1）**：\n   - 甲推乙 20 kgw ➔ 反作用力為「乙給甲 20 kgw」。\n   - 乙推甲 10 kgw ➔ 反作用力為「甲給乙 10 kgw」。\n   - 甲身上所受的水平總力 ＝ 20 kgw（反作用力）+ 10 kgw（乙的推力）＝ **30 kgw**。\n   - 乙身上所受的水平總力 ＝ 20 kgw（甲的推力）+ 10 kgw（反作用力）＝ **30 kgw**。\n   - **結論**：不論誰力氣大，兩人受到的合力大小**絕對永遠相等（1 : 1，均為 30 kgw）**！\n2. **加速度比與質量成反比**：\n   - 由牛頓第二運動定律 F = m × a ➔ 當 F 相等時，a 與 m 成反比！\n   - 質量比 甲 : 乙 = 2 : 1 ➔ 加速度比 a_甲 : a_乙 = 1 : 2！\n3. **分開後的運動狀態（牛頓第一定律）**：\n   - 在「絕對光滑」的平面上，分開後不再受任何水平外力（合力 F = 0），根據慣性定律，兩人必維持**「等速度運動」**，絕非等加速度運動！",
    "stem": "質量比為 2 : 1 的甲、乙兩人在絕對光滑的平面上互推，甲用 20 kgw 之力推乙，乙用 10 kgw 之力推甲，則下列何者正確？\n\n○ (A) 甲、乙受力比為 1 : 2\n○ (B) 當兩人分開後均作等加速度運動\n○ (C) 甲、乙由靜止而後退，加速度比為 1 : 2\n○ (D) 因兩推力方向相反，故甲、乙均受 10 kgw 的力。",
    "answer": "(C) 甲、乙由靜止而後退，加速度比為 1 : 2",
    "diagramUrl": "",
    "solution": "完全正確，本題正解：受力相同，加速度與質量成反比（1 : 2）。 故選 (C)。",
    "videoUrl": "https://www.youtube.com/watch?v=O1fZ-nhK4e0",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "完全正確，本題正解：受力相同，加速度與質量成反比（1 : 2）。 故選 (C)。"
  },
  {
    "id": "q_phy_newton_third_law_curry_perkins_collision_220",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國三理化力與運動：空中碰撞作用力與反作用力大小相等、質量輕者加速度大反彈明顯",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【大卡車撞小轎車／重物撞輕物碰撞受力秒殺口訣】！\n1. **不管誰重誰輕、誰快誰慢，碰撞瞬間受力大小絕對相等**：\n   - Perkins 給 Curry 的力，與 Curry 給 Perkins 的力，互為一組「作用力與反作用力」！\n   - 碰撞瞬間兩者受力大小完全相等（F 相等）！\n2. **為什麼輕的人看起來被撞飛得比較慘？**：\n   - 因為 $F = ma \\implies a = \\frac{F}{m}$。\n   - 兩個人承受完全一樣大的衝擊力 $F$。\n   - Curry 體重只有 84 kgw（質量較小），所以產生的**加速度 $a$ 明顯較大**，運動狀態改變劇烈（被彈開較遠）！\n   - Perkins 體重高達 122 kgw（質量大、慣性大），加速度 $a$ 較小，運動狀態改變不明顯！\n3. **作用力與反作用力絕不能抵消**：\n   - 兩力分別作用在「不同物體」上（一個在 Curry 身上，一個在 Perkins 身上），受力體不同，絕不能相互抵消！",
    "stem": "NBA 籃球賽，勇士隊體重 84 kgw 的 Curry 與塞爾提克隊體重 122 kgw 的 Perkins 為了搶籃板球而在空中水平相撞。對於兩人相撞的瞬間，下列敘述何者正確？\n\n○ (A) 體重較重的 Perkins 會給 Curry 較大的力，故兩人相撞時，Curry 受力較大\n○ (B) 兩人相撞的力，因為符合作用力與反作用力定律，所以兩力剛好抵銷\n○ (C) 兩人在空中相撞的瞬間受力相等，但因為 Curry 比較輕，因此會有較大的加速度\n○ (D) 由於 Curry 體重比較輕，碰撞後彈開距離比較遠，所以碰撞時 Curry 受到的力比較大",
    "answer": "(C) 兩人在空中相撞的瞬間受力相等，但因為 Curry 比較輕，因此會有較大的加速度",
    "diagramUrl": "",
    "solution": "urry 的力，與 Curry 作用於 Perkins 的力，大小恆相等、方向相反。Curry 與 Perkins 受力一樣大。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "urry 的力，與 Curry 作用於 Perkins 的力，大小恆相等、方向相反。Curry 與 Perkins 受力一樣大。 故選 (C)。"
  },
  {
    "id": "q_math_parallelogram_butterfly_similar_area_ratio_221",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學相似形：平行四邊形沙漏形（蝴蝶形）AA 相似、等高三角形面積比求 △ABF 與平行四邊形 ABCD 面積比",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平行四邊形相似沙漏形與等高三角形面積比秒殺步驟】！\n1. **第一步：看清比例線段**：\n   - 2 AE = DE ➔ AE : DE = 1 : 2。\n   - AD = AE + DE = 1 + 2 = 3 份。\n   - 平行四邊形對邊相等 ➔ BC = AD = 3 份！\n2. **第二步：沙漏形 AA 相似求對角線交點線段比**：\n   - AD // BC ➔ △AEF ~ △CBF ➔ AF : CF = AE : BC = 1 : 3！\n3. **第三步：等高三角形面積轉化**：\n   - 觀察 △ABF 與 △BCF，共用頂點 B，底邊在同一直線 AC 上 ➔ 兩三角形等高！\n   - 面積比 = 底邊比 ➔ 面積(△ABF) : 面積(△BCF) = AF : CF = 1 : 3。\n   - 設 △ABF 面積 = a，則 △BCF 面積 = 3a。\n4. **第四步：半個平行四邊形面積翻倍**：\n   - 對角線 AC 將平行四邊形平分為兩半：面積(△ABC) = a + 3a = 4a。\n   - 平行四邊形 ABCD 總面積 = 2 × 面積(△ABC) = 2 × 4a = 8a！\n   - 面積比 = a : 8a = **1 : 8**！",
    "stem": "如圖，在平行四邊形 ABCD 中，E 為線段 AD 上一點，若 2 AE = DE，對角線 AC 和線段 BE 相交於 F 點，則 △ABF 與平行四邊形 ABCD 的面積比為何？\n\n○ (A) 1 : 6\n○ (B) 1 : 8\n○ (C) 1 : 9\n○ (D) 2 : 15",
    "answer": "(B) 1 : 8",
    "diagramUrl": "assets/questions/q221_parallelogram_butterfly_similar_area_ratio_diagram.png",
    "solution": "CD$ 為平行四邊形，對邊等長：$\\overline{BC} = \\overline{AD} = 3$ 份。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "CD$ 為平行四邊形，對邊等長：$\\overline{BC} = \\overline{AD} = 3$ 份。 故選 (B)。"
  },
  {
    "id": "q_math_similar_triangles_tree_wall_shadow_222",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學相似形應用：陽光平行投影直立竿長與影長比、殘影在牆面垂直分割矩形與相似三角形求樹高",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【影子折上牆壁的樹高計算兩大拆解步驟】！\n1. **常犯致命錯誤**：\n   - ❌ 誤把地面影長 21 公尺直接加 2 公尺算成 23 公尺當總影長！牆上的影子是「直立垂直」的，地上的影子是「水平」的，絕不可直接相加！\n2. **破題核心分割法（水準輔助線分割為矩形與三角形）**：\n   - 從牆上影子頂端 C 點向樹幹作水平垂直線 CE 垂直 AB 於 E。\n   - 得到下方長方形 EBDC：EB = CD = 2 公尺，EC = BD = 21 公尺。\n   - 上方的 △AEC 即為完全受陽光照射的相似直角三角形！\n   - 物高 : 影長 = 1 : 1.5 = 2 : 3。\n   - AE : EC = 1 : 1.5 ➔ AE : 21 = 1 : 1.5 ➔ AE = 21 ÷ 1.5 = 14 公尺！\n   - 樹總高 AB = AE + EB = 14 + 2 = **16 公尺**！\n3. **秒殺口訣**：【樹高 = (地面影長 ÷ 影長比) + 牆上影高】！\n   - 樹高 = (21 ÷ 1.5) + 2 = 14 + 2 = **16 公尺**！",
    "stem": "如圖，小明想測量樹高，他在同一時間測得 1 公尺高的竹竿直立時的影長為 1.5 公尺，同時量得樹影落在地面上的長度線段 BD 為 21 公尺，留在牆面上的高度線段 CD 為 2 公尺，則樹高線段 AB 為多少公尺？\n\n○ (A) 14\n○ (B) 15\n○ (C) 16\n○ (D) 18",
    "answer": "(C) 16",
    "diagramUrl": "assets/questions/q222_tree_wall_shadow_sunlight_diagram.png",
    "solution": "$ 向樹幹 $\\overline{AB}$ 作水平垂線，垂足為 $E$。 故選 (C)。",
    "videoUrl": "https://www.youtube.com/watch?v=tiY1NbIDxRQ",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "$ 向樹幹 $\\overline{AB}$ 作水平垂線，垂足為 $E$。 故選 (C)。"
  },
  {
    "id": "q_math_analytic_geom_light_reflection_shortest_path_223",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國二/國三數學幾何對稱與畢氏定理：坐標平面光線反射（入射角等於反射角）、對稱點轉化兩點間直線距離為最短路徑",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平面鏡反射與兩點折線長度求法秒殺秘訣】！\n1. **反射路徑秒殺核心：作對稱點化折線為直線！**：\n   - 光線自 A(0, 1) 射向 x 軸上的 C 點，經反射到達 B(3, 3)。\n   - 根據光的反射定律：入射角等於反射角。\n   - 將 A(0, 1) 關於 x 軸（鏡面）作「**線對稱點**」A'：\n     - A 點坐標為 (0, 1) ➔ 關於 x 軸對稱點為 **A'(0, -1)**！\n   - 連接 A' 與 B，線段 A'B 與 x 軸的交點正是 C 點！\n   - 幾何等長代換：AC = A'C，因此光線總長度 AC + CB = A'C + CB = **A'B**！\n2. **畢氏定理秒殺兩點距離**：\n   - A'(0, -1) 到 B(3, 3)：\n     - 水平距離 Δx = 3 - 0 = 3\n     - 垂直距離 Δy = 3 - (-1) = 4\n     - 直角三角形 3 : 4 : 5 ➔ 距離 A'B = √(3² + 4²) = **5**！\n3. **常見盲點排雷**：\n   - 很多同學會嘗試假設 C(x, 0) 列方程式解 x，其實利用對稱點轉化為線段 A'B 長度只需 5 秒直接心算得出！",
    "stem": "如圖，有一束光線自 A(0, 1) 投射經過 x 軸上的 C 點，反射經過 B(3, 3)，則光線自 A 點到 B 點所經過的長度為多少？\n\n○ (A) 4\n○ (B) 5\n○ (C) 6\n○ (D) 3√2",
    "answer": "(B) 5",
    "diagramUrl": "assets/questions/q223_coordinate_light_reflection_distance_diagram.png",
    "solution": "} = \\overline{A'C} + \\overline{CB} = \\overline{A'B}$$ 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "} = \\overline{A'C} + \\overline{CB} = \\overline{A'B}$$ 故選 (B)。"
  },
  {
    "id": "q_phy_chem_baking_soda_sodium_intake_moles_224",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化生活化學計量：小蘇打碳酸氫鈉 NaHCO₃ 質量轉莫耳數計算與每日鈉攝取量比較評估",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【化學計量質量轉莫耳數兩大計算步驟】！\n1. **莫耳數基本計算公式**：\n   - 莫耳數 ＝ 質量（公克）÷ 分子量。\n   - 小蘇打化學式為 NaHCO₃，題目給定分子量為 84。\n   - 喝進小蘇打的莫耳數 ＝ 1.68 ÷ 84 ＝ **0.02 莫耳**！\n2. **原子化學計量對照**：\n   - 每一分子 NaHCO₃ 恰含有「1 個鈉原子（Na）」。\n   - 因此 0.02 莫耳的 NaHCO₃ 中，含有的鈉（Na）也是 **0.02 莫耳**！\n3. **健康標準比對**：\n   - 衛福部建議每日鈉攝取量上限約 2400 毫克 ＝ 0.104 莫耳。\n   - 小軒喝進的鈉為 0.02 莫耳，因為 0.02 < 0.104，所以**「否（未超過）」**！\n4. **選項陷阱排雷**：\n   - (C)、(D) 50 莫耳：顛倒算成分子量除以克數（84 ÷ 1.68 = 50），公式嚴重用錯！莫耳數必為「克數除以分子量」！",
    "stem": "衛生福利部建議每天鈉攝取量最好不要超過 2400 毫克，約等於 0.104 莫耳，請問小軒喝了一瓶用了 1.68 公克小蘇打（NaHCO₃）的自製汽水，相當於喝進多少莫耳的鈉？是否超過每天鈉攝取量？（NaHCO₃ 分子量=84）\n\n○ (A) 0.02 莫耳，是\n○ (B) 0.02 莫耳，否\n○ (C) 50 莫耳，是\n○ (D) 50 莫耳，否",
    "answer": "(B) 0.02 莫耳，否",
    "diagramUrl": "",
    "solution": "0.02 莫耳，否【完全正確，本題正解】：正確求得 0.02 莫耳，且未超過每日建議之 0.104 莫耳。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "0.02 莫耳，否【完全正確，本題正解】：正確求得 0.02 莫耳，且未超過每日建議之 0.104 莫耳。 故選 (B)。"
  },
  {
    "id": "q_phy_chem_metal_hcl_hydrogen_mass_conservation_225",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化化學計量與質量守恆定律：金屬與鹽酸反應產生氫氣、氫原子守恆推導鹽酸消耗量、質量守恆推導產物總質量（113會考題）",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【113會考金屬反應質量守恆雙核心秒殺解題】！\n1. **核心一：產生的氫氣質量相同 ➔ 消耗的鹽酸質量必定「相同」！**：\n   - 反應生成物為「氫氣（H₂）與金屬氯化物」。\n   - 生成的氫氣中的氫原子（H），**「全部且唯一」來自反應物鹽酸（HCl）中的氫**！金屬本身不含氫！\n   - 既然甲、乙兩反應產生的氫氣質量都是 2.0 g（氫原子質量相同），則反應所消耗的鹽酸（HCl）質量必定**「相同」**！\n2. **核心二：質量守恆定律 ➔ 反應物總質量 ＝ 產物總質量！**：\n   - 質量守恆定律：反應物總質量（金屬質量 ＋ 鹽酸消耗質量）＝ 產物總質量。\n   - 兩反應消耗的鹽酸質量相同（設為 W 公克）。\n   - 甲反應的反應物總質量 ＝ 24.3 + W\n   - 乙反應的反應物總質量 ＝ 65.4 + W\n   - 因為起始金屬質量不同（甲 24.3 g ≠ 乙 65.4 g），所以兩反應的反應物總質量不同，產物總質量自然也**「不同」**！\n3. **常見誘答陷阱**：\n   - ❌ 誤選 (A) 相同、相同：誤以為氫氣一樣多，所有的產物質量就一樣多，忽略了金屬（Mg 與 Zn）原本的質量差很多！",
    "stem": "已知甲、乙兩種不同的金屬元素分別與同濃度的鹽酸反應，反應後只會產生氫氣與金屬的氯化物。取甲金屬 24.3 g 與鹽酸反應，另取乙金屬 65.4 g 與鹽酸反應，兩個反應的金屬都完全耗盡，且產生的氫氣質量均為 2.0 g，則比較兩個反應的反應物與產物的質量，下列何者正確？〔113. 會考〕\n\n| | 兩反應的鹽酸消耗質量 | 兩反應的產物總質量 |\n| :---: | :---: | :---: |\n| (A) | 相同 | 相同 |\n| (B) | 相同 | 不同 |\n| (C) | 不同 | 相同 |\n| (D) | 不同 | 不同 |\n\n○ (A)\n○ (B)\n○ (C)\n○ (D)",
    "answer": "(B)",
    "diagramUrl": "",
    "solution": "相同、不同【完全正確，本題正解】：由原子守恆知鹽酸消耗量相同，由質量守恆知反應物總質量不同故產物總質量不同。 故選 (B)。",
    "videoUrl": "https://www.youtube.com/watch?v=yEDdf7PFBaY",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "相同、不同【完全正確，本題正解】：由原子守恆知鹽酸消耗量相同，由質量守恆知反應物總質量不同故產物總質量不同。 故選 (B)。"
  },
  {
    "id": "q_phy_chem_lithium_extraction_multistep_stoichiometry_226",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化化學計量：多步驟工業製程（鋰礦石提煉金屬鋰）、反應式係數平衡、原子守恆法與莫耳數換算質量",
    "uploadDate": "2026-10-22",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【多步驟反應化學計量：原子守恆法 10 秒秒殺】！\n1. **方法一：多步驟係數追蹤（標準解法）**：\n   - 步驟一平衡：2 LiAl(SiO₃)₂ + 1 K₂SO₄ → 1 Li₂SO₄ + 2 KAl(SiO₃)₂。\n     （1 莫耳 K₂SO₄ 產生 1 莫耳 Li₂SO₄）\n   - 步驟二：1 莫耳 Li₂SO₄ 產生 2 莫耳 LiCl。\n   - 步驟三：2 莫耳 LiCl 電解產生 2 莫耳 Li 金屬。\n   - **係數總結比例**：1 莫耳 K₂SO₄ ➔ 2 莫耳 Li 金屬！（莫耳比 K₂SO₄ : Li ＝ 1 : 2）\n2. **方法二：鋰原子守恆法（極速秒殺！）**：\n   - 觀察整體反應從起點到終點：\n     1 個 K₂SO₄ 只能結合 2 個鋰原子形成 Li₂SO₄。\n     最終所有鋰原子全部電解還原成鋰金屬（Li）。\n     因此：**K₂SO₄ 的莫耳數 ＝ 鋰原子（Li）莫耳數的一半（÷ 2）**！\n3. **常犯致命陷阱**：\n   - ❌ 忘記單位換算：題目給定「35 公斤」，計算莫耳數時必須乘 1000 換算成 35000 公克！\n   - ❌ 漏乘除比例：忘記 1 莫耳 K₂SO₄ 提供 2 莫耳 Li，直接拿 5000 莫耳乘 174 算出 870 公斤（誤選 A）！",
    "stem": "鋰金屬是現代電池工業中最要的材料，有能源密度高，質量輕等等優勢。自然界中的鋰礦石主要以 LiAl(SiO₃)₂ 的形態存在，想要製成鋰金屬需要經過下列三步驟：\n\n步驟一：a LiAl(SiO₃)₂ + 1 K₂SO₄ ─(加熱)→ b Li₂SO₄ + c KAl(SiO₃)₂\n步驟二：Li₂SO₄ + BaCl₂ → 2 LiCl + BaSO₄\n步驟三：2 LiCl ─(電解)→ 2 Li + Cl₂\n\n如果想要得到 35 公斤的鋰金屬，則需要多少公斤的 K₂SO₄？（Li 原子量：7；K₂SO₄ 分子量：174）\n\n○ (A) 870 公斤\n○ (B) 358 公斤\n○ (C) 1740 公斤\n○ (D) 435 公斤",
    "answer": "(D) 435 公斤",
    "diagramUrl": "",
    "solution": "435 公斤【完全正確，本題正解】：正確求得 2500 莫耳，換算為 435 公斤。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-19",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "435 公斤【完全正確，本題正解】：正確求得 2500 莫耳，換算為 435 公斤。 故選 (D)。"
  },
  {
    "id": "q_chi_culture_stem_branch_hours_zodiac_227",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文文化常識：天干地支（十天干與十二地支搭配十二生肖）、十二時辰換算（辰時 7~9點、巳時 9~11點）與生肖推算",
    "uploadDate": "2026-10-23",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【十二時辰與天干地支生肖推算】經典陷阱！\n1. **出發時間＋經過時間 ＝ 到達時間**：\n   - 早上 8 點（辰時）從家裡出發，騎車 2 小時後到達 ➔ **到達時間為早上 10 點**！\n   - **時辰對照表**：\n     - 辰時：07:00 ～ 09:00\n     - **巳時**：09:00 ～ 11:00（早上 10 點正落在「巳時」！）\n     - 午時：11:00 ～ 13:00\n2. **生肖與地支對應（地支肖數法）**：\n   - 子鼠、丑牛、寅虎、卯兔、**辰龍**、巳蛇、午馬、未羊、申猴、酉雞、戌狗、亥豬。\n   - 2012 年為「壬辰年」，地支為「**辰**」，故生肖為「**龍**」！\n3. **天干地支標準順序**：\n   - 十天干：甲、乙、丙、丁、戊、己、庚、辛、壬、癸。\n   - 十二地支：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。",
    "stem": "小美和爸爸打算一起騎腳踏車到河濱公園，他們早上八點從家裡出發，預計二個小時後到達，到達時應該是十二時辰中的哪一個時辰？又柚柚是西元 2012 年壬辰年出生，根據地支判斷柚柚的生肖為什麼動物？\n\n○ (A) 辰時、龍\n○ (B) 巳時、龍\n○ (C) 巳時、蛇\n○ (D) 午時、馬",
    "answer": "(B) 巳時、龍",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (B) 巳時、龍。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-23",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 巳時、龍。"
  },
  {
    "id": "q_chi_culture_season_judgment_keywords_weather_228",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文文化常識：季節與節慶判斷（季節代表性景物、花草、氣候與成語詩詞關鍵詞辨析）",
    "uploadDate": "2026-10-23",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【季節文句判斷：雨季 vs. 梅雨 vs. 櫻花】！\n1. **「雨季」不能直接代表特定季節**：\n   - 「雨季來時，伴隨的是憂傷與惆悵」：不同氣候區、不同情境各有雨季（如熱帶雨季在夏秋、某些地方在冬春），單純稱「雨季」**無法精確判斷出特定季節**！\n   - ⚠️ 注意陷阱：若寫「梅雨」才特定代表夏初（農曆五月/國曆五六月）。\n2. **「櫻花」是明確的春季指標**：\n   - 「陽明山以盛開的櫻花作背景」：**櫻花為春季盛開之花卉**，故可據此判定為**春季**！\n3. **關鍵成語與詩句季節速記**：\n   - **流金鑠石**：夏天（形容天氣酷熱，能熔化金石）。\n   - **水落石出**：冬天（出自歐陽脩《醉翁亭記》「水落而石出者」，或蘇軾《後赤壁賦》「山高月小，水落石出」，均為秋冬枯水期景象）。\n   - **枯荷翻卷**：秋天（殘荷枯敗之景象）。\n   - **繁花錦簇**：春天（春暖花開，繁花盛景）。\n   - **六出飛花**：冬天（雪花六角形，借代為雪）。\n   - **商意滿林**：秋天（「商」在五音中屬金、對應秋季，「商意」即秋意）。",
    "stem": "下列文句的敘述，可以據此判斷出季節的請打○，無法判斷的請打✕：\n(1) 雨季來時，伴隨的是憂傷與惆悵。\n(2) 奇幻兄弟最喜歡利用竹林營造寧靜優雅的氣氛。\n(3) 喬飛在陽明山以盛開的櫻花作背景，拍攝廣告。\n\n請選出判斷完全正確的選項：\n\n○ (A) (1)✕ (2)✕ (3)○\n○ (B) (1)○ (2)✕ (3)○\n○ (C) (1)✕ (2)○ (3)○\n○ (D) (1)○ (2)○ (3)✕",
    "answer": "(A) (1)✕ (2)✕ (3)○",
    "diagramUrl": "",
    "solution": "1. 文句 (1)「雨季來時，伴隨的是憂傷與惆悵。」➔ ✕（無法判斷季節）： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-23",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 文句 (1)「雨季來時，伴隨的是憂傷與惆悵。」➔ ✕（無法判斷季節）： 故選 (A)。"
  },
  {
    "id": "q_chi_literature_su_shi_biography_crow_terrace_poetry_229",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文文學常識：蘇軾生平與成就（北宋大文豪、字子瞻號東坡居士、烏臺詩案貶黃州團練副使、一生仕途坎坷）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【蘇軾生平與烏臺詩案常考陷阱】！\n1. **朝代陷阱**：蘇軾是「**北宋**」大文豪（宋神宗、哲宗時期），不是南宋！\n2. **字號名銜**：蘇軾，字「**子瞻**」，號「**東坡居士**」，世稱「蘇東坡」。與其父蘇洵、其弟蘇轍合稱「三蘇」，皆名列唐宋八大家。\n3. **烏臺詩案處分**：蘇軾因烏臺詩案差點被殺，後經各方營救獲釋，被貶為「**黃州團練副使**（本州安置，不得簽書公事）」，並**非貶為庶民**！\n4. **仕途際遇**：蘇軾一生仕途極為**坎坷**，屢遭新黨、舊黨排擠，一貶黃州、再貶惠州、三貶儋州（海南島），並非「晚年才被陷害放逐」！",
    "stem": "下列有關蘇軾的生平介紹，何者正確？\n\n○ (A) 字子瞻，號東坡居士\n○ (B) 才氣縱橫，學識淵博的南宋大文豪\n○ (C) 因為烏臺詩案入獄，貶為庶民\n○ (D) 一生仕途通順，僅於晚年被陷害放逐。",
    "answer": "(A) 字子瞻，號東坡居士",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (A) 字子瞻，號東坡居士。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 字子瞻，號東坡居士。"
  },
  {
    "id": "q_chi_literature_su_shi_huangzhou_tuwei_writing_style_230",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文現代散文賞析：余秋雨《黃州突圍》寫作手法（正反對比凸顯心境轉變、感性敘述與理性思考）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【《黃州突圍》寫作手法核心陷阱剖析】！\n1. **正反對比手法（核心寫作主軸）**：\n   - 作者藉由「早年仕途與晚年貶謫」、「京師繁華名利與黃州孤寂赤貧」、「群小之得志囂張與大師之受辱孤獨」的**強烈正反對比**，深刻凸顯蘇東坡經歷巨大人生沉潛後的「**成熟心境轉變**」（圓熟、曠達、回歸本真）！\n2. **(C) 選項精細陷阱**：\n   - ⚠️ 注意主副顛倒！文中是以「**感性的敘述**」描摹蘇東坡的生活苦難，輔以「**理性的思考**」探討文人命運與文化突圍，而非「理性的敘述、感性的思考」！\n3. **(A) 與 (B) 選項分析**：\n   - (A) 設問並非「貫穿全文」之主導修辭，亦非為營造懸念。\n   - (B) 文中著重描寫的是蘇軾在黃州遭遇的**苦難與突圍轉變**，對早年輝煌官場並未層層鋪陳。",
    "stem": "關於黃州突圍一文的寫作手法，下列敘述何者正確？\n\n○ (A) 以設問貫穿全文，營造懸念與戲劇張力\n○ (B) 運用鋪陳手法，層層描寫蘇東坡早年的輝煌官場生涯\n○ (C) 全文以理性的敘述、感性的思考為基礎，書寫蘇東坡人生境遇的突圍\n○ (D) 藉由正反對比，凸顯蘇東坡歷經沉潛後的心境轉變。",
    "answer": "(D) 藉由正反對比，凸顯蘇東坡歷經沉潛後的心境轉變。",
    "diagramUrl": "",
    "solution": "藉由正反對比，凸顯蘇東坡歷經沉潛後的心境轉變。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "藉由正反對比，凸顯蘇東坡歷經沉潛後的心境轉變。 故選 (D)。"
  },
  {
    "id": "q_chi_literature_su_shi_bu_suan_zi_que_yue_gua_shu_tong_231",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文宋詞賞析：蘇軾〈卜算子〉黃州定惠院寓居作（借孤鴻象徵孤芳自賞、不與世俗同流之高潔情操，非隱逸歸隱）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【蘇軾〈卜算子〉托物言志象徵核心考點】！\n1. **(D) 選項核心錯誤：象徵「孤芳自賞、不與世俗同流合污」，非「歸隱山林之志」**！\n   - 「揀盡寒枝不肯棲，寂寞沙洲冷」：孤鴻寧願在寒冷寂寞的沙洲上受凍，也不肯在寒枝上隨便棲息。此處是以孤鴻自況，借物托志，表明自己**堅持政治節操、特立獨行、潔身自好、孤芳自賞**，絕不與新黨或世俗同流合污！並非消極想隱退山林！\n2. **(A) 正確常識**：全詞共 44 字，為五十八字以內之「**小令**」；「卜算子」為**詞牌名**，僅規定字數、平仄與押韻，與內容無關。\n3. **(B) 與 (C) 鑑賞**：\n   - 「驚起卻回頭」寫驚魂未定、戒慎恐懼之心態。\n   - 「揀盡寒枝不肯棲」以「揀枝」展現幽人「**有所為，有所不為**」的道德節操與風骨。",
    "stem": "蘇軾〈卜算子〉：「缺月掛疏桐，漏斷人初靜。誰見幽人獨往來，縹緲孤鴻影。驚起卻回頭，有恨無人省。揀盡寒枝不肯棲，寂寞沙洲冷。」關於這闋詞的敘述，下列何者錯誤？\n\n○ (A) 這是一首小令，「卜算子」是詞牌名，與內容無關\n○ (B) 「驚起卻回頭」，藉由鴻雁驚魂未定，呈現出幽人戒慎恐懼的心態\n○ (C) 「揀盡寒枝不肯棲」，以「揀枝」表明幽人「有所為有所不為」的節操\n○ (D) 「寂寞沙洲冷」，藉由鴻雁獨宿於清冷的沙洲，象徵幽人歸隱山林之志。",
    "answer": "(D) 「寂寞沙洲冷」，藉由鴻雁獨宿於清冷的沙洲，象徵幽人歸隱山林之志。",
    "diagramUrl": "",
    "solution": "錯誤（選此項，象徵旨趣判斷錯誤）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "錯誤（選此項，象徵旨趣判斷錯誤）： 故選 (D)。"
  },
  {
    "id": "q_chi_typo_correction_chuanmo_lingren_xunji_232",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文字形辨正：揣摩（非端摩）、受人牽累（非受人牽累字形誤寫）、幽居（非幽居）、湮沒／湮滅",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【字形辨析常考形近字與同音字】！\n1. **(A) 正確**：\n   - 「**揣摩**」：反覆思考推求。音ㄔㄨㄞˇ，手部「揣」，切勿寫成「端」或「惴」！\n2. **(B) 錯字：「冤曲」➔ 應改為「冤屈」**：\n   - 「冤屈」：指受到冤枉而委屈。注意是「**屈**（委屈、冤屈）」，不是「曲（彎曲）」。\n3. **(C) 錯字：「湮跡」➔ 應改為「湮跡」或「泯滅痕跡」**：\n   - 原句「湮跡」寫成「渾跡」，「渾跡」為錯字，應為「**湮跡**（隱沒痕跡）」或「**混跡**（混在其中）」。此處指隱居不留痕跡，應作「**湮跡**在巷里之中」或「**混跡**」。\n4. **(D) 錯字：「弘旨」➔ 應改為「宏旨」**：\n   - 「**無關宏旨**」：指關係微小，對大局無關緊要。是「**宏**（宏大）」，不是「弘」。",
    "stem": "下列文句，何者用字完全正確？\n\n○ (A) 林陽仔細研讀劇本，用心揣摩戲中人物的性格\n○ (B) 在這次政變中，他不幸受人牽累，因而蒙受冤曲並下獄\n○ (C) 這位隱士非常奇特，不在深山中幽居，卻渾跡在巷里之中\n○ (D) 眾人目前所爭論的，都無關弘旨，根本就在浪費時間。",
    "answer": "(A) 林陽仔細研讀劇本，用心揣摩戲中人物的性格",
    "diagramUrl": "",
    "solution": "- (A) 正確（正解）：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- (A) 正確（正解）："
  },
  {
    "id": "q_chi_idiom_su_shi_related_hedong_shihou_xiong_you_cheng_zhu_233",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文成語典故：與蘇軾有關之成語（胸有成竹、雪泥鴻爪、河東獅吼、明日黃花）語意與正確使用",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【與蘇軾相關成語意涵辨析】！\n1. **(B) 正確：「胸有成竹」**：\n   - 出處：蘇軾〈文與可畫篔簹谷偃竹記〉「畫竹必先得成竹於胸中」。\n   - 意義：比喻**做事之前心中已有完整穩妥的謀略與把握**。\n   - 語境：警方對案情如何偵辦胸有成竹，使用完全恰當！\n2. **(A) 錯誤：「河東獅吼」**：\n   - 出處：蘇軾〈寄吳德仁兼簡陳季常〉「忽聞河東獅子吼，拄杖落手心茫然」。\n   - 意義：比喻**悍婦發怒或懼內（怕老婆）**。不能用來形容學海浩瀚微不足道！\n   - 宜改為：「九牛一毛」或「滄海一粟」。\n3. **(C) 錯誤：「雪泥鴻爪」**：\n   - 出處：蘇軾〈和子由澠池懷舊〉「人生到處知何似，應似飛鴻踏雪泥」。\n   - 意義：比喻**往事遺留下來的痕跡**。不能用在事情真相大白！\n   - 宜改為：「水落石出」。\n4. **(D) 錯誤：「明日黃花」**：\n   - 出處：蘇軾〈九日次韻王鞏〉「相逢不用忙歸去，明日黃花蝶也愁」。\n   - 意義：比喻**過時的事物**。不能用在防備生病隨身帶藥！\n   - 宜改為：「不時之需」。",
    "stem": "下列「」中與蘇軾有關的成語，何者使用正確？\n\n○ (A) 學海浩瀚，我所了解的只是「河東獅吼」，微不足道\n○ (B) 這件案子該如何偵辦，警方似乎已經「胸有成竹」\n○ (C) 在事情真相尚未「雪泥鴻爪」之前，我們都不該妄加指責特定的對象\n○ (D) 旅遊在外，他總是隨身攜帶一些藥品，以備「明日黃花」。",
    "answer": "(B) 這件案子該如何偵辦，警方似乎已經「胸有成竹」",
    "diagramUrl": "",
    "solution": "- (A) 使用錯誤（詞義不合）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- (A) 使用錯誤（詞義不合）： 故選 (B)。"
  },
  {
    "id": "q_chi_reading_su_shi_huangzhou_situation_deprive_fame_burden_234",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文文言閱讀理解：蘇軾被貶黃州心境（自喜漸不為人識、擺脫虛名重負、重獲心靈自由，非自暴自棄或真歸隱）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【蘇軾黃州心境：「自喜漸不為人識」關鍵意涵】！\n1. **核心題意剖析**：\n   - 「扁舟草履，放浪山水間，與樵漁雜處，往往為醉人所推罵，輒自喜漸不為人識。」\n   - 被醉漢推搡謾罵，蘇軾非但不生氣，反而「暗自高興（自喜）自己漸漸不再被大眾認出是朝廷大名士」！\n   - 這展現他**慶幸自己終於擺脫了昔日盛大聲名的沉重束縛**，得以作為普通凡人親近自然、融入市井，享受身心的超脫與自由！\n2. **常見干擾選項剖析**：\n   - (A) 誤以為他「因罪人身分為人不齒而痛苦受辱」➔ 錯！蘇軾心中是「輒自喜」，完全沒有自卑痛苦。\n   - (C) 誤以為他「心情憂懼，經常閉門不出」➔ 錯！文中明寫「放浪山水間，與樵漁雜處」，他是走出戶外悠遊山水。\n   - (D) 誤以為他「對仕途絕望，決意漁樵終老」➔ 錯！蘇軾並未真正放棄對國家社稷的關懷，亦非消極隱逸終老。",
    "stem": "「得罪以來，深自閉塞，扁舟草履，放浪山水間，與樵漁雜處，往往為醉人所推罵，輒自喜漸不為人識。」根據這段文字，下列對於蘇東坡在黃州的境況的描述，何者正確？\n\n○ (A) 因罪人身分為人所不齒，屢受責罵\n○ (B) 慶幸擺脫聲名之累，避免再遭受迫害\n○ (C) 獲罪之後，心情憂懼，經常閉門不出\n○ (D) 對仕途絕望，決意漁樵於江湖，隱逸終老。",
    "answer": "(B) 慶幸擺脫聲名之累，避免再遭受迫害",
    "diagramUrl": "",
    "solution": "慶幸擺脫聲名之累，避免再遭受迫害。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "慶幸擺脫聲名之累，避免再遭受迫害。 故選 (B)。"
  },
  {
    "id": "q_chi_rhetoric_contrast_yingchen_loneliness_bustle_235",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文修辭法判辨：映襯修辭（正襯與反襯、將兩種相反或相對的觀念事物並列對比以增強語氣）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【映襯修辭（對比反襯）核心判斷點】！\n1. **映襯定義**：\n   - 將兩種**截然相反或相對的觀念、事實、物象並列**，透過強烈對照，使主體更加鮮明深刻。\n2. **題幹分析**：\n   - 「正是這種難言的**孤獨**，使他徹底洗去了人生的**喧鬧**。」➔ 「**孤獨**」vs.「**喧鬧**」構成鮮明的相反觀念對照（映襯）。\n3. **各選項修辭對比**：\n   - **(C) 鄉村是「舒適寧靜」的，而都市是「繁華熱鬧」的** ➔ 「舒適寧靜」vs.「繁華熱鬧」，「鄉村」vs.「都市」，兩種截然相反的環境強烈對比，完全符合**映襯修辭**！\n   - (A) 粗大合抱的樹幹，株株頂天立地 ➔ 誇飾、摹寫。\n   - (B) 憂愁是一道藩籬 ➔ 譬喻（隱喻）。\n   - (D) 秋天到了，有的樹開始落葉 ➔ 擬人（為將來的冬天而嘆息）。",
    "stem": "「正是這種難言的孤獨，使他徹底洗去了人生的喧鬧。」一句運用了映襯手法，下列何者也使用了映襯手法？\n\n○ (A) 看！粗大合抱的樹幹，株株頂天立地，令人油然生敬\n○ (B) 憂愁是一道藩籬，阻絕了人與許多美麗事物的結緣\n○ (C) 鄉村是舒適寧靜的，而都市是繁華熱鬧的\n○ (D) 秋天到了，有的樹開始落葉，為將來的冬天而嘆息。",
    "answer": "(C) 鄉村是舒適寧靜的，而都市是繁華熱鬧的",
    "diagramUrl": "",
    "solution": "「鄉村是舒適寧靜的，而都市是繁華熱鬧的」（正解）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "「鄉村是舒適寧靜的，而都市是繁華熱鬧的」（正解）： 故選 (C)。"
  },
  {
    "id": "q_chi_vocab_ran_suffix_suoran_turan_chouran_dangran_236",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文詞語辨析：「然」字詞語（索然、徒然、悵然、蕩然）之語境含義與用法判別",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【「然」字常見詞語精確詞義比對】！\n1. **(B) 正確：「徒然」**：\n   - 「徒然」：白白地、徒勞無功。沒有苦練，再高的天分也是「白費、白白浪費」，語意完全通順！\n2. **(A) 錯誤：「索然」**：\n   - 「索然」：乏味、沒有興趣（如索然無味）。自備塑膠袋在社會上蔚為風氣，應作「**斐然**成風」或「**蔚然**成風」。\n3. **(C) 錯誤：「悵然」**：\n   - 「悵然」：失意惆悵的樣子（如悵然若失）。形容內容枯燥乏味，應作「**索然**無味」。\n4. **(D) 錯誤：「蕩然」**：\n   - 「蕩然」：空無所有、完全消失（如蕩然無存）。面對困難沉著冷靜面對，應作「**泰然**處之」或「**坦然**處之」。",
    "stem": "下列「」中的詞語皆與「然」字有關，何者使用正確？\n\n○ (A) 自備塑膠提袋的行為在社會上已「索然」成風\n○ (B) 沒有苦練，即使有再高的天分，也是「徒然」\n○ (C) 這些影片內容大同小異，讓人覺得「悵然」無味\n○ (D) 即使遇到的問題再困難，他總能「蕩然」處之。",
    "answer": "(B) 沒有苦練，即使有再高的天分，也是「徒然」",
    "diagramUrl": "",
    "solution": "沒有苦練，即使有再高的天分，也是「徒然」。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "沒有苦練，即使有再高的天分，也是「徒然」。 故選 (B)。"
  },
  {
    "id": "q_chi_reading_huangzhou_tuwei_writing_feature_lin_yutang_237",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文散文賞析：余秋雨《黃州突圍》寫作特色（引用蘇軾詩文如實刻畫處境與心境、非引用林語堂、非第三人稱客觀分析）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【《黃州突圍》寫作特色核心考點】！\n1. **(A) 正確：引用蘇軾作品刻畫處境心境**：\n   - 余秋雨在文中大量直接引用蘇東坡被貶黃州前後的真實詩文作品（如《念奴嬌·赤壁懷古》、前後《赤壁賦》、〈卜算子〉等），藉由作品中的字句，如實生動地刻畫其當下的險惡處境與心境波瀾。\n2. **(B) 錯誤：非引用林語堂《蘇東坡傳》**：\n   - 文中並未引用林語堂的傳記來稱許其風雅，而是余秋雨以文化散文視角直接對話東坡靈魂。\n3. **(C) 錯誤：非「客觀分析」**：\n   - 全文充滿熱烈深沉的文化抒情與主觀靈魂激盪，並非冰冷客觀的第三人稱分析。\n4. **(D) 錯誤：非以「誇飾手法」見長**：\n   - 文中主要以深邃感性的敘述與深層哲理的對比思考為主，並非藉由誇飾營造戲劇張力。",
    "stem": "關於黃州突圍一文的寫作特色，何者說明正確？\n\n○ (A) 援引作品，如實刻畫蘇軾的處境與心境\n○ (B) 引用林語堂的蘇東坡傳，稱許蘇軾的詩文風雅聖潔\n○ (C) 通篇以第三人稱的角度，客觀分析蘇東坡的境遇與心態的轉變\n○ (D) 善用誇飾手法與類疊句，營造敘述張力，引發讀者共鳴。",
    "answer": "(A) 援引作品，如實刻畫蘇軾的處境與心境",
    "diagramUrl": "",
    "solution": "援引作品，如實刻畫蘇軾的處境與心境。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "援引作品，如實刻畫蘇軾的處境與心境。 故選 (A)。"
  },
  {
    "id": "q_chi_reading_su_shi_da_wang_xiang_shu_book_reading_focus_238",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文閱讀理解：蘇軾〈又答王庠書〉八面受敵讀書法（博觀而約取、學貴約取、讀書不可貪多圖快）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【蘇軾「八面受敵讀書法」核心旨趣】！\n1. **原文關鍵句精準解讀**：\n   - 「書富如入海，百貨皆有。人之精力不能兼收盡取，**但得其所欲求者爾**！」\n   - 書籍浩瀚如大海，包羅萬象；人的時間精力有限，絕不可能全部囊括，**每次讀書只要鎖定自己最想探求的特定目標即可**！\n2. **對應哲理觀點：學貴「約取」**：\n   - 「**學貴約取，不以泛濫為高**」：求學最可貴的是專注聚焦、有選擇地吸取精華，不以貪多泛濫為高明！與蘇軾之言完全相合！\n3. **常見干擾選項辨析**：\n   - (A) 盡信書則不如無書 ➔ 強調要有懷疑批判精神，非強調精力有限要專注約取。\n   - (B) 讀書百遍其義自見 ➔ 強調熟讀深思，非針對涉獵範圍。\n   - (C) 好高求速 ➔ 批評貪圖速度，非正面倡導約取聚焦之法。",
    "stem": "蘇軾〈又答王庠書〉：「書富如入海，百貨皆有。人之精力不能兼收盡取，但得其所欲求者爾！」這句話的主要涵義，與下列何者最接近？\n\n○ (A) 盡信書，則不如無書\n○ (B) 讀書百遍，則其義自見\n○ (C) 好高求速，學者之通患\n○ (D) 學貴約取，不以泛濫為高。",
    "answer": "(D) 學貴約取，不以泛濫為高。",
    "diagramUrl": "",
    "solution": "學貴約取，不以泛濫為高（清·陸隴其，正解）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "學貴約取，不以泛濫為高（清·陸隴其，正解）： 故選 (D)。"
  },
  {
    "id": "q_chi_culture_folk_customs_taofu_airen_menshen_dispute_239",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文民俗寓言：蘇軾《東坡志林》桃符與艾人之爭（「半截入土」借代過時、民俗時節節令替換寓意）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【民俗節令時序與「半截入土」深刻寓意】！\n1. **節令對應物件**：\n   - **桃符**：農曆「**元日（春節）**」掛在門兩側驅邪（「總把新桃換舊符」）。\n   - **艾人**：農曆「**端午節**」懸掛艾草紮成的人偶以驅蟲避瘟。\n   - **門神**：常年鎮守大門。\n2. **「半截入土」的幽默諷刺**：\n   - 艾人對桃符說：「自元日至端午以來，汝已半截入土，猶爭高下乎？」\n   - 從春節到端午已經過了五個月，桃符日曬雨淋早已殘舊不堪、大限已到（**暗諷桃符早已過時，馬上就要被換掉了**，就像人年老病衰半截身子埋進土裡）！\n3. **門神的精闢勸解**：\n   - 門神笑說：「吾輩不肖，方傍人門戶，何暇爭閒氣耶？」\n   - 我們都是沒出息靠依附在別人的門戶上討生活，哪有閒功夫為了一點虛榮爭閑氣呢！諷刺世人寄人籬下卻爭風吃醋。",
    "stem": "「桃符仰視艾人而罵曰：『汝何等草芥，輒居我上？』艾人俯而應曰：『自元日至端午以來，汝已半截入土，猶爭高下乎？』桃符怒，往復紛然不已。門神解之曰：『吾輩不肖，方傍人門戶，何暇爭閒氣耶？』」（蘇軾《東坡志林》）根據這段文字，下列敘述何者正確？\n\n○ (A) 艾人以「半截入土」暗譏桃符有過時之嫌\n○ (B) 門神指責桃符愛爭閒氣，所以只能傍人門戶\n○ (C) 三者位置由高而低依序是：門神、桃符、艾人\n○ (D) 桃符與艾人為了元日、端午的重要性而爭吵不休。",
    "answer": "(A) 艾人以「半截入土」暗譏桃符有過時之嫌",
    "diagramUrl": "",
    "solution": "艾人以「半截入土」暗譏桃符有過時之嫌。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "艾人以「半截入土」暗譏桃符有過時之嫌。 故選 (A)。"
  },
  {
    "id": "q_chi_poetry_su_shi_danzhou_hainan_life_attitude_240",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文古典詩歌賞析：蘇軾謫居儋州（海南島）人生觀（以順處逆、超然豁達、隨遇而安之生命態度）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【蘇軾謫居儋州詩意與豁達自適情懷】！\n1. **詩句精準品讀**：\n   - 「寂寂東坡一病翁，白髮蕭散滿霜風。小兒誤喜朱顏在，一笑那知是酒紅。」\n   - 蘇軾晚年遠貶海南島荒涼僻遠之地，老病交加、白髮在秋風中飄散；兒子蘇過看到父親臉色紅潤誤以為返老還童，東坡卻豁然一笑說：「這哪裡是容光煥發，不過是剛剛喝了點薄酒臉紅罷了！」\n2. **深刻人生哲理**：\n   - 面對窮荒絕境與衰老病痛，蘇東坡非但沒有怨天尤人，反而以幽默自嘲、泰然自若的心情一笑置之，展現出「**以順處逆，曠達自適**」的最高人生智慧！\n3. **干擾選項辨析**：\n   - (A) 老驥伏櫪，雄心未泯 ➔ 曹操語，寫壯志未酬之豪情，非東坡此詩幽默曠達風格。\n   - (B) 生死由命，富貴在天 ➔ 宿命論，非東坡樂觀自得心態。\n   - (C) 避世離俗，自行其是 ➔ 蘇東坡在海南開堂講學、傳播中原文化，非避世獨行。",
    "stem": "「寂寂東坡一病翁，白髮蕭散滿霜風。小兒誤喜朱顏在，一笑那知是酒紅。」這首詩是蘇軾謫居儋州（今海南島）時的作品。根據詩意，作者此刻透露出什麼樣的人生觀？\n\n○ (A) 老驥伏櫪，雄心未泯\n○ (B) 生死由命，富貴在天\n○ (C) 避世離俗，自行其是\n○ (D) 以順處逆，曠達自適。",
    "answer": "(D) 以順處逆，曠達自適。",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (D) 以順處逆，曠達自適。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (D) 以順處逆，曠達自適。"
  },
  {
    "id": "q_chi_couplets_comic_foyin_su_shi_su_zhe_wushan_241",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文對聯常識與趣味諧音對句：四格漫畫對聯題（佛印出上聯「無山得似巫山好」，蘇轍下聯「何水能如河水清」工整對仗與雙關音韻）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【漫畫對聯工整對仗與同音雙關】！\n1. **漫畫情節脈絡**：\n   - 圖 1：佛印、蘇軾、蘇轍一起出遊到巫山。\n   - 圖 2：佛印出上聯：「**無山得似巫山好**」。（「無山」諧音同「巫山」）。\n   - 圖 3：蘇軾隨即應答：「**何葉能如荷葉圓**」。（「何葉」諧音同「荷葉」；但荷葉非水名地景，工整度尚有提升空間）。\n   - 圖 4：蘇轍細細思索，道出更勝兄長的絕妙下聯：【 ？？？？？？？ 】！\n2. **對仗極致要求**：\n   - 上聯：無山（名詞/諧音）得似（動詞詞組）巫山（專有名詞）好（形容詞）。\n   - (A)「**何水能如河水清**」：\n     - 「何水」vs.「河水」（諧音同音，呼應上聯「無山」vs.「巫山」！）；\n     - 「山」對「水」、「巫山」對「黃河水（河水）」、「好」對「清」；名詞對名詞、山水相對，意境宏闊，天然工整！\n3. **其他選項破綻**：\n   - (B) 某僧不若木僧高 ➔ 未與自然山水相對，且無同音流水對之諧趣。\n   - (C) 更有何處過此山 ➔ 非七言對句格式，無法對仗。\n   - (D) 各花自比個花紅 ➔ 偏離山水主題，且平仄不諧。",
    "stem": "根據圖文（蘇軾、蘇轍與佛印巫山出遊對句漫畫），下列何者最可能是蘇轍在第四格中所對出的對句？\n\n○ (A) 何水能如河水清\n○ (B) 某僧不若木僧高\n○ (C) 更有何處過此山\n○ (D) 各花自比個花紅",
    "answer": "(A) 何水能如河水清",
    "diagramUrl": "assets/questions/q_chi_comic_su_shi_su_zhe_foyin_couplet_241.png",
    "solution": "故本題正確答案為 (A) 何水能如河水清。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) 何水能如河水清。"
  },
  {
    "id": "q_sci_physics_newton_second_law_vt_graph_force_direction_242",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第二運動定律 F = ma 與 v-t 圖斜率計算物體受力大小與方向（向東為正、向西為負）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【牛頓第二運動定律與 v-t 圖正負方向判讀】！\n1. **加速度方向即為合力方向**：\n   - 由牛頓第二運動定律：$F = ma$（$m$ 必為正值，故 $F$ 之正負方向完全由加速度 $a$ 決定！）。\n   - 本題以「**東**」為正方向：若計算出 $a > 0$ 則受力向東；若 $a < 0$ 則受力**向西**！\n2. **4～7 秒加速度計算**：\n   - $t = 4\\text{ s}$ 時速度 $v_1 = 30\\text{ m/s}$；$t = 7\\text{ s}$ 時速度 $v_2 = 0\\text{ m/s}$。\n   - 加速度 $a = \\frac{v_2 - v_1}{t_2 - t_1} = \\frac{0 - 30}{7 - 4} = \\frac{-30}{3} = -10\\text{ m/s}^2$。\n3. **受力大小與方向**：\n   - 合力 $F = ma = 10 \\times (-10) = -100\\text{ N}$。\n   - 負號代表「**向西**」，受力大小為 **100 N**！\n4. **常見陷阱對照**：\n   - 勿忽略時間區間 $\\Delta t = 7 - 4 = 3\\text{ 秒}$（切勿直接拿分母除以 7！）。\n   - 勿將負號方向搞混，以東為正，負號即為向西！",
    "stem": "某物體的質量為 10 公斤，在光滑水平面上作直線運動，其速度與時間的關係如右圖所示，以東為正。\n試問在 4～7 秒期間，物體受力大小與方向為何？\n\n○ (A) 150 N，向東\n○ (B) 100 N，向東\n○ (C) 100 N，向西\n○ (D) 0 N，不受力",
    "answer": "(C) 100 N，向西",
    "diagramUrl": "assets/questions/q_sci_vt_graph_mass10kg_newton_law_242.png",
    "solution": "1. $v-t$ 圖的斜率代表加速度 $a$： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. $v-t$ 圖的斜率代表加速度 $a$： 故選 (C)。"
  },
  {
    "id": "q_sci_physics_car_brake_friction_force_newton_second_law_243",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第二運動定律 F = ma 與煞車減速摩擦力大小計算",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【煞車減速摩擦力與牛頓第二運動定律】！\n1. **摩擦力即為讓車輛停下來的合力**：\n   - 車輛在水平道路上煞車時，沿運動方向上只受到輪胎與地面間向後的摩擦力提供減速加速度。\n   - 由牛頓第二運動定律：$F = ma$（所求摩擦力大小即等於車輛受到的合力大小）。\n2. **減速度計算**：\n   - 初速 $v_1 = 20\\text{ 公尺/秒}$，煞車停止末速 $v_2 = 0\\text{ 公尺/秒}$，經過時間 $\\Delta t = 4\\text{ 秒}$。\n   - 加速度大小 $a = \\frac{|v_2 - v_1|}{\\Delta t} = \\frac{20}{4} = 5\\text{ 公尺/秒}^2$。\n3. **合力/摩擦力大小計算**：\n   - $F = ma = 1500\\text{ 公斤} \\times 5\\text{ 公尺/秒}^2 = 7500\\text{ 牛頓}$。\n4. **審題關鍵防呆**：\n   - 質量單位為公斤（kg）、速度為公尺/秒（m/s），皆為標準 SI 制單位，直接相乘計算即可，切勿多除以或乘以重力加速度 $g = 9.8$！",
    "stem": "質量 1500 公斤的小客車在道路上以 20 公尺／秒的速度行駛，遇前方緊急事故，在 4 秒內沿直線方向煞車停止，則煞車期間小客車所受摩擦力大小為多少牛頓？\n\n○ (A) 5000\n○ (B) 7500\n○ (C) 15000\n○ (D) 30000",
    "answer": "(B) 7500",
    "diagramUrl": "",
    "solution": "1. 煞車停止的受力分析： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 煞車停止的受力分析： 故選 (B)。"
  },
  {
    "id": "q_sci_physics_table_luggage_balance_forces_244",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：力與運動——靜態平衡條件與一對平衡力辨析（作用於同一物體、大小相等、方向相反、在同一直線上）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【平衡力 vs. 作用力與反作用力】秒殺關鍵！\n1. **平衡力（兩力平衡）**：\n   - **受力對象是「同一個物體」**！\n   - 題目問：「使【行李】能靜止於桌面的一對平衡力」➔ 找「**受力對象都是行李**」的兩個力！\n     - $GW$：地球吸引【行李】的重力（受力者：**行李**，方向向下）。\n     - $OQ$：桌面支持【行李】向上的支撐力（受力者：**行李**，方向向上）。\n     - 兩者作用於同一物體（行李）、大小相等、方向相反、在同一直線上，故使行李靜止平衡！正解為 **GW 和 OQ**！\n2. **容易混淆的 OP 陷阱**：\n   - $OP$ 是「行李施於【桌面】向下的力」（受力者是**桌面**，不是行李！），故 $OP$ 絕對不能與作用在行李上的力構成平衡力！",
    "stem": "桌面上靜置一行李，如圖，GW 表示行李所受的重力，OP 表示行李施於桌面向下的力，OQ 表示桌面支持行李向上的力。\n試回答下列問題：\n(1) 使行李能靜止於桌面上的「一對平衡力」為下列何者？\n\n○ (A) OP 和 OQ\n○ (B) GW 和 OQ\n○ (C) GW 和 OP\n○ (D) OQ 和 OP、GW",
    "answer": "(B) GW 和 OQ",
    "diagramUrl": "assets/questions/q_sci_luggage_table_action_reaction_forces_244.png",
    "solution": "- $GW$：地球對行李的萬有引力（重力），作用點在行李重心 $G$，方向向下（受力體：行李）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- $GW$：地球對行李的萬有引力（重力），作用點在行李重心 $G$，方向向下（受力體：行李）。 故選 (B)。"
  },
  {
    "id": "q_sci_physics_table_luggage_action_reaction_forces_245",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第三運動定律——作用力與反作用力辨析（A 對 B 施力 vs. B 對 A 施力、互為主詞與受詞）",
    "uploadDate": "2026-10-24",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【作用力與反作用力】互換主受詞口訣！\n1. **互為主受詞（A 對 B vs. B 對 A）**：\n   - 牛頓第三運動定律：**若甲對乙施力，乙必同時對甲施予反作用力**！\n   - $OP$：【行李】施於【桌面】向下的力（行李 ➔ 桌面）。\n   - $OQ$：【桌面】支持【行李】向上的力（桌面 ➔ 行李）。\n   - 「行李對桌面」與「桌面對行李」，兩者主詞受詞完全對調，必為一對**作用力與反作用力**！正解為 **OP 和 OQ**！\n2. **重力的反作用力是什麼？（進階常考）**：\n   - $GW$ 是「【地球】吸引【行李】向下的重力」。\n   - 其反作用力為「【行李】吸引【地球】向上的引力」（作用點在地球地心，不是桌面！）。\n3. **絕對原則**：作用力與反作用力分別作用在「**兩個不同物體**」上，彼此絕對**不能抵消**，也絕非平衡力！",
    "stem": "桌面上靜置一行李，如圖，GW 表示行李所受的重力，OP 表示行李施於桌面向下的力，OQ 表示桌面支持行李向上的力。\n試回答下列問題：\n(2) 屬於「作用力與反作用力」的是下列何者？\n\n○ (A) OP 和 OQ\n○ (B) GW 和 OQ\n○ (C) GW 和 OP\n○ (D) OQ 和 OP、GW",
    "answer": "(A) OP 和 OQ",
    "diagramUrl": "assets/questions/q_sci_luggage_table_action_reaction_forces_244.png",
    "solution": "OP 和 OQ（正解）：行李對桌面 vs. 桌面對行李，互為主受詞，為作用力與反作用力。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-24",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "OP 和 OQ（正解）：行李對桌面 vs. 桌面對行李，互為主受詞，為作用力與反作用力。 故選 (A)。"
  },
  {
    "id": "q_sci_physics_m1_m2_blocks_overall_acceleration_246",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第二運動定律——接觸並排木塊系統整體加速度計算（F = (m1 + m2)a）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【並排木塊系統題第一步：先求整體加速度】！\n1. **將兩木塊視為一個整體系統**：\n   - 光滑平面無摩擦力阻礙，外力 $F = 3\\text{ 牛頓}$ 推動兩木塊一起運動。\n   - 系統總質量 $M_{總} = m_1 + m_2 = 2\\text{ kg} + 1\\text{ kg} = 3\\text{ kg}$。\n2. **整體加速度計算**：\n   - 由牛頓第二運動定律：$F = M_{總} \\times a$。\n   - $3 = (2 + 1) \\times a \\implies a = 1\\text{ m/s}^2$。\n3. **關鍵提醒**：\n   - 無論是從左推還是從右推，只要外力大小不變，整體系統的加速度大小必定相同（皆為 $1\\text{ m/s}^2$）！",
    "stem": "如圖，$m_1$（2 kg）與 $m_2$（1 kg）並排在光滑水平面上，施以 3 牛頓水平力向右於 $m_1$ 上，試回答下列問題：\n(1) 整體的加速度為多少 $\\text{m/s}^2$？\n\n○ (A) 0.5\n○ (B) 1\n○ (C) 1.5\n○ (D) 3",
    "answer": "(B) 1",
    "diagramUrl": "assets/questions/q_sci_m1_m2_block_contact_force_246.png",
    "solution": "1. 系統整體分析法： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 系統整體分析法： 故選 (B)。"
  },
  {
    "id": "q_sci_physics_m1_push_m2_contact_force_247",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：隔離體受力分析——向右推動時，木塊 m1 對 m2 之接觸推力計算（F_12 = m2 * a）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【隔離受力分析：誰推動了 m2？】\n1. **隔離 $m_2$ 分析**：\n   - 外力 3 牛頓是施加在 $m_1$ 上，並沒有直接接觸 $m_2$！\n   - 在水平方向上，$m_2$ 唯一受到的力就是「$m_1$ 施加給它的接觸推力 $F_{1\\to 2}$」！\n2. **利用 $m_2$ 自身的牛頓第二定律求力**：\n   - $m_2$ 的質量為 $1\\text{ kg}$，其加速度跟著整體為 $a = 1\\text{ m/s}^2$。\n   - 故 $m_1$ 作用於 $m_2$ 的力 $F_{1\\to 2} = m_2 \\times a = 1\\text{ kg} \\times 1\\text{ m/s}^2 = 1\\text{ 牛頓}$！\n3. **直觀巧思**：\n   - 3 牛頓推動 3 公斤，相當於每 1 公斤分配到 1 牛頓的合力；$m_2$ 只有 1 公斤，故只需 1 牛頓！",
    "stem": "如圖，$m_1$（2 kg）與 $m_2$（1 kg）並排在光滑水平面上，施以 3 牛頓水平力向右於 $m_1$ 上，試回答下列問題：\n(2) $m_1$ 作用於 $m_2$ 的力為多少牛頓？\n\n○ (A) 1\n○ (B) 2\n○ (C) 3\n○ (D) 0",
    "answer": "(A) 1",
    "diagramUrl": "assets/questions/q_sci_m1_m2_block_contact_force_246.png",
    "solution": "- 當外力 $F = 3\\text{ N}$ 由左向右推 $m_1$ 時，$m_1$ 與 $m_2$ 接觸面上會產生一對交互作用力（作用力與反作用力）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- 當外力 $F = 3\\text{ N}$ 由左向右推 $m_1$ 時，$m_1$ 與 $m_2$ 接觸面上會產生一對交互作用力（作用力與反作用力）。 故選 (A)。"
  },
  {
    "id": "q_sci_physics_m2_push_m1_reverse_force_248",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：受力方向反轉分析——改由右向左推 m2 時，m2 作用於 m1 之接觸推力計算（F_21 = m1 * a）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【施力方向反轉陷阱：接觸力大小不對稱！】\n1. **常見致命直覺錯誤**：\n   - 很多同學以為向左推接觸力還是 1 牛頓，這是大錯特錯！\n2. **改由右向左推 $m_2$ 時的隔離分析**：\n   - 整體總質量仍為 $2 + 1 = 3\\text{ kg}$，推力仍為 3 牛頓向左，故整體加速度仍為 $a = 1\\text{ m/s}^2$（向左）。\n   - 此時 $m_1$ 是被 $m_2$ 推著走的！\n   - 隔離受力者【$m_1$】：$m_1$ 唯一受到的水平外力就是「$m_2$ 對它的推力 $F_{2\\to 1}$」！\n3. **計算 $F_{2\\to 1}$**：\n   - $F_{2\\to 1} = m_1 \\times a = 2\\text{ kg} \\times 1\\text{ m/s}^2 = 2\\text{ 牛頓}$！\n4. **口訣秒殺**：\n   - 「推大帶小」接觸力小（3N 推 2kg 帶 1kg ➔ 接觸力 1N）；\n   - 「推小帶大」接觸力大（3N 推 1kg 帶 2kg ➔ 接觸力 2N）！",
    "stem": "如圖，$m_1$（2 kg）與 $m_2$（1 kg）並排在光滑水平面上，施以 3 牛頓水平力向右於 $m_1$ 上。\n試回答下列問題：\n(3) 若施力改自右向左作用於 $m_2$，則 $m_2$ 作用於 $m_1$ 之力為多少牛頓？\n\n○ (A) 1\n○ (B) 2\n○ (C) 3\n○ (D) 1.5",
    "answer": "(B) 2",
    "diagramUrl": "assets/questions/q_sci_m1_m2_block_contact_force_246.png",
    "solution": "故本題正確答案為 (B) 2（填空：2）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (B) 2（填空：2）。"
  },
  {
    "id": "q_sci_physics_free_fall_basketball_forces_249",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：力與運動——自由落體運動之定義與受力分析（忽略空氣阻力下僅受重力作用）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【自由落體受力三大致命陷阱】！\n1. **自由落體的標準物理定義**：\n   - 「物體由靜止釋放，**在不考慮空氣阻力（或只在重力作用）的情況下**向下落下的運動」。\n   - 因此在理想的自由落體運動中，**「空氣阻力」視為零**，絕不可選 (C) 或 (D)！\n2. **「作用力與反作用力」受力者陷阱（最常上當！）**：\n   - 題目問的是「【籃球】受有什麼力？」➔ **只能看作用在「籃球」身上的力**！\n   - 「地球吸引籃球的重力」：施力者是地球，受力者是**籃球**（算在籃球身上！）。\n   - 「重力的反作用力」：是「籃球吸引地球的萬有引力」，施力者是籃球，**受力者是【地球】（作用在地球地心，不是籃球受到的力！）**。\n   - 故籃球本身「**絕對沒有受到重力的反作用力**」！選 (B) 或 (D) 的同學就是犯了把反作用力加在受力物體身上的經典錯誤！\n3. **結論秒殺**：\n   - 籃球在落下期間，身上所受到的力**「僅有重力」**！正解為 **(A)**！",
    "stem": "有一籃球自空中釋放，作自由落體運動，在落下期間，籃球受有什麼力？\n\n○ (A) 僅重力\n○ (B) 僅重力和重力的反作用力\n○ (C) 僅重力和空氣阻力\n○ (D) 重力、空氣阻力、重力的反作用力",
    "answer": "(A) 僅重力",
    "diagramUrl": "",
    "solution": "對物體 B 施力，則物體 B 必對物體 A 施以大小相等、方向相反的反作用力。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "對物體 B 施力，則物體 B 必對物體 A 施以大小相等、方向相反的反作用力。 故選 (A)。"
  },
  {
    "id": "q_sci_physics_rocket_propulsion_action_reaction_250",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第三運動定律——火箭向前推進的原理（噴出氣體給予火箭向前的反作用力，不需外在空氣）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【火箭推進原理 vs. 空氣反作用力陷阱】！\n1. **火箭推進的核心：作用力與反作用力（牛頓第三運動定律）**：\n   - 火箭燃燒燃料，向後高速噴出高溫高壓氣體（火箭給氣體一個**向後的作用力**）。\n   - 依牛頓第三運動定律，噴出的氣體必同時給予火箭一個**向前的反作用力**，推動火箭前進！正解為 **(B)**！\n2. **高頻致命陷阱 (A) 為什麼錯？**：\n   - 很多同學誤以為火箭是「推開外面的空氣」前進，這是不對的！\n   - 如果火箭需要靠空氣的反作用力，那在**幾乎沒有空氣的太空真空環境中**火箭就無法航行了！\n   - 事實上，火箭自備氧化劑與燃料，即使在真空的太空中，照樣能藉由噴射自身氣體獲得反作用力加速飛行！故與「空氣給火箭反作用力」無關！",
    "stem": "火箭能向前推進主要原因為何？\n\n○ (A) 噴出去的氣體施力於空氣，空氣給火箭的反作用力\n○ (B) 噴出去的氣體施給火箭的反作用力，使火箭前進\n○ (C) 噴出氣體使重量減輕，致使浮力大於重量而上升\n○ (D) 噴出去的高速氣流減少空氣阻力",
    "answer": "(B) 噴出去的氣體施給火箭的反作用力，使火箭前進",
    "diagramUrl": "",
    "solution": "施力時，物體 B 同時會對物體 A 施以大小相等、方向相反的反作用力。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "施力時，物體 B 同時會對物體 A 施以大小相等、方向相反的反作用力。 故選 (B)。"
  },
  {
    "id": "q_sci_physics_mutual_push_net_force_251",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第三運動定律——兩人同時互推之受力與合力分析（自身推力之反作用力＋對方主動推力，合力疊加）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【兩人互推合力疊加：絕非各自 2 kgw 或 5 kgw、3 kgw！】\n1. **常犯致命錯誤 (C) 或 (D)**：\n   - 很多同學以為「甲出 5 就受 5」、「乙出 3 就受 3」，或誤以為反作用力互相抵消變成 2 kgw！\n2. **受力體嚴謹剖析（以甲為例）**：\n   - **力 1（乙主動推甲）**：乙主動出力 $3\\text{ kgw}$ 推甲 ➔ **甲受到乙給的 $3\\text{ kgw}$**（方向向後）。\n   - **力 2（甲推乙的反作用力）**：甲主動出力 $5\\text{ kgw}$ 推乙，依牛頓第三運動定律，乙必同時給甲一個向後的反作用力 $5\\text{ kgw}$ ➔ **甲又受到 $5\\text{ kgw}$ 反作用力**（方向向後）。\n   - **甲所受合力**：兩力方向相同（皆向後），合力 $= 3\\text{ kgw} + 5\\text{ kgw} = 8\\text{ kgw}$！\n3. **受力體嚴謹剖析（以乙為例）**：\n   - **力 1（甲主動推乙）**：甲主動出 $5\\text{ kgw}$ 推乙 ➔ **乙受到甲給的 $5\\text{ kgw}$**（方向向後）。\n   - **力 2（乙推甲的反作用力）**：乙出 $3\\text{ kgw}$ 推甲，甲給乙反作用力 $3\\text{ kgw}$ ➔ **乙又受到 $3\\text{ kgw}$ 反作用力**（方向向後）。\n   - **乙所受合力**：兩力同向，合力 $= 5\\text{ kgw} + 3\\text{ kgw} = 8\\text{ kgw}$！\n4. **秒殺結論**：\n   - 兩人同時互推，各自所受合力必定相等，且大小皆為「兩人出力之和」：$5 + 3 = 8\\text{ kgw}$！正解為 **(B) 甲、乙均為 8kgw**！",
    "stem": "甲、乙兩人同時互推，其中甲出力 5 kgw，乙出力 3 kgw，則兩人所受的合力各為多少？\n\n○ (A) 甲、乙均為 2 kgw\n○ (B) 甲、乙均為 8 kgw\n○ (C) 甲為 3 kgw、乙為 5 kgw\n○ (D) 甲為 5 kgw、乙為 3 kgw",
    "answer": "(B) 甲、乙均為 8 kgw",
    "diagramUrl": "",
    "solution": "1. 單一物體受力分析（只能算加在該物體身上的力）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 單一物體受力分析（只能算加在該物體身上的力）： 故選 (B)。"
  },
  {
    "id": "q_sci_physics_boats_pulling_action_reaction_252",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第三運動定律——甲船拉乙船之作用力與反作用力（兩船皆受拉力，兩船皆動且互相靠近）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【拉船問題：主動用力拉，自己也會被反向拉動！】\n1. **常犯直覺錯誤 (A) 或 (B)**：\n   - 很多人直覺以為「甲主動出力拉乙，所以只有乙被拉過來，甲不動」；這在沒有外力固定的水面上是絕對錯誤的！\n2. **物理受力真相（繩子張力與作用力反作用力）**：\n   - 甲對繩子施力拉乙（向甲的方向拉乙），乙船受到朝向甲船的拉力。\n   - 依牛頓第三運動定律，繩子也必同時施予甲船一個反作用力（朝向乙的方向拉甲船）。\n   - 水面幾乎無摩擦力阻礙，兩艘船在水平方向皆受到指向彼此的合力。\n3. **結論秒殺**：\n   - 甲、乙兩船皆受到向對方靠近的拉力，因此**「兩船皆動，互相靠近」**！正解為 **(C)**！",
    "stem": "甲、乙兩船漂浮於水面，甲船上的人以繩繫住乙船並用力拉之，則下列何者正確？\n\n○ (A) 甲船不動，乙船向其靠近\n○ (B) 乙船不動，甲船向其靠近\n○ (C) 兩船皆動，互相靠近\n○ (D) 兩船皆不動",
    "answer": "(C) 兩船皆動，互相靠近",
    "diagramUrl": "",
    "solution": "故本題正確答案為 (C) 兩船皆動，互相靠近。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (C) 兩船皆動，互相靠近。"
  },
  {
    "id": "q_sci_physics_m1_m2_action_reaction_magnitude_equal_253",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國二理化：牛頓第三運動定律——接觸面間作用力與反作用力必大小相等（F12 = F21，與外力大小、質量大小無關）",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【作用力與反作用力：永遠大小相等！千萬不要被外力 F 或質量騙了！】\n1. **常見直覺陷阱 (C) 或 (B)**：\n   - 很多同學看到「外力 F 是從左邊推 m1」，就直覺以為「m1 比較大/受外力推擠，所以推 m2 的力一定大於反彈回來的力（誤選 F12 > F21）」，這是嚴重的迷思！\n2. **物理鐵律秒殺**：\n   - 題目明確定義：\n     - $F_{12}$：$m_1$ 對 $m_2$ 之作用力。\n     - $F_{21}$：$m_2$ 對 $m_1$ 之作用力。\n   - 兩力互為主受詞（$m_1$ 推 $m_2$ vs. $m_2$ 推 $m_1$），**為最標準的一對「作用力與反作用力」**！\n   - **牛頓第三運動定律唯一真理：作用力與反作用力大小必定相等（$F_{12} = F_{21}$）**，方向相反，同時產生同時消失！\n3. **結論**：無論 $F$ 多大、無論 $m_1$ 與 $m_2$ 質量誰大誰小、$F_{12}$ 永遠等於 $F_{21}$！正解為 **(A)**！",
    "stem": "如圖所示，在光滑平面上，F 為作用於 $m_1$、$m_2$ 系統之外力，$F_{12}$ 為 $m_1$ 對 $m_2$ 之作用力，$F_{21}$ 為 $m_2$ 對 $m_1$ 之作用力。當 F 沿水平方向向右作用於 $m_1$ 上，則 $F_{12}$ 與 $F_{21}$ 之大小關係為何？\n\n○ (A) $F_{12} = F_{21}$\n○ (B) $F_{12} < F_{21}$\n○ (C) $F_{12} > F_{21}$\n○ (D) 無法比較",
    "answer": "(A) F12＝F21",
    "diagramUrl": "assets/questions/q_sci_m1_m2_f12_f21_action_reaction_253.png",
    "solution": "故本題正確答案為 (A) F12＝F21。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題正確答案為 (A) F12＝F21。"
  },
  {
    "id": "q_math_triangle_tan15_bdc30_bac15_254",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學：直角三角形的銳角三角比——利用 30°-60°-90° 與等腰三角形構造求 tan 15°",
    "uploadDate": "2026-10-25",
    "mondayDate": "2026-10-19",
    "mondayDates": [
      "2026-10-19"
    ],
    "weekLabel": "2026-10-19 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【構造 15° 等腰三角形求 tan 15° 經典幾何模型】！\n1. **關鍵外角定理與等腰發現**：\n   - $\\angle BDC = 30^\\circ$，且 $\\angle BDC$ 為 $\\triangle ABD$ 的外角。\n   - $\\angle BDC = \\angle A + \\angle ABD \\implies 30^\\circ = 15^\\circ + \\angle ABD \\implies \\angle ABD = 15^\\circ$！\n   - 因為 $\\angle A = \\angle ABD = 15^\\circ$，所以 $\\triangle ABD$ 為**等腰三角形**，兩腰相等：$AD = BD$！\n2. **設直角 $\\triangle BDC$ 之邊長比例（30°-60°-90°）**：\n   - 令對邊 $BC = 1$。\n   - 則斜邊 $BD = 2$，鄰邊 $CD = \\sqrt{3}$。\n   - 由等腰性質得：$AD = BD = 2$。\n3. **大直角 $\\triangle ABC$ 計算 tan 15°**：\n   - 底邊 $AC = AD + CD = 2 + \\sqrt{3}$。\n   - 對邊 $BC = 1$。\n   - $\\tan 15^\\circ = \\frac{BC}{AC} = \\frac{1}{2 + \\sqrt{3}} = \\frac{2 - \\sqrt{3}}{(2 + \\sqrt{3})(2 - \\sqrt{3})} = 2 - \\sqrt{3}$！\n4. **考點記憶**：\n   - 此題為會考與高中銜接最經典的特殊角幾何求值題，請務必牢記「外角 $30^\\circ = 15^\\circ + 15^\\circ$ 形成等腰」之破題捷徑！",
    "stem": "如圖，在直角 $\\triangle ABC$ 中，若 $\\angle BDC = 30^\\circ$，$\\angle BAC = 15^\\circ$，$\\angle C = 90^\\circ$，則 $\\tan 15^\\circ = $ ______。\n\n○ (A) $2 - \\sqrt{3}$\n○ (B) $2 + \\sqrt{3}$\n○ (C) $\\sqrt{3} - 1$\n○ (D) $\\frac{\\sqrt{3} - 1}{2}$",
    "answer": "(A) 2－√3",
    "diagramUrl": "assets/questions/q_math_triangle_tan15_bdc30_bac15_254.png",
    "solution": "BD$ 中，$\\angle BDC$ 為其頂點 $D$ 處的外角。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-25",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "BD$ 中，$\\angle BDC$ 為其頂點 $D$ 處的外角。 故選 (A)。"
  },
  {
    "id": "q_math_triangle_parallel_trisection_area_ratio_255",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學相似形：平行線截比例線段與相似三角形面積比等於對應邊長平方比",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【相似三角形面積比 vs. 分割梯形面積比】兩大避坑關鍵！\n1. **面積比 ＝ 邊長平方比（不是邊長比！）**：\n   - △ADF、△AEG、△ABC 的邊長比為 1 : 2 : 3。\n   - ⚠️ 很多同學粗心直接選 (B) 1 : 2 : 3，大錯特錯！面積比必須平方：1² : 2² : 3² ＝ 1 : 4 : 9！\n2. **乙、丙是「梯形」，要用扣減法！**：\n   - ⚠️ 很多同學直接選 (D) 1 : 4 : 9，忘記題目問的是分出來的「甲、乙、丙」三塊獨立面積！\n   - 甲 ＝ △ADF ＝ 1r\n   - 乙 ＝ △AEG － △ADF ＝ 4r － 1r ＝ 3r\n   - 丙 ＝ △ABC － △AEG ＝ 9r － 4r ＝ 5r\n   - 故甲、乙、丙之比為 **1 : 3 : 5**（連續奇數比！）",
    "stem": "如右圖，在 △ABC 中，D、E 為 AB 的三等分點，F、G 為 AC 的三等分點，將 △ABC 分成甲、乙、丙三部分，則甲、乙、丙三部分的面積比為何？\n\n○ (A) 1 : 1 : 1\n○ (B) 1 : 2 : 3\n○ (C) 1 : 3 : 5\n○ (D) 1 : 4 : 9",
    "answer": "(C) 1 : 3 : 5",
    "diagramUrl": "assets/questions/q_math_triangle_parallel_trisection_area_ratio_255.png",
    "solution": "的三等分點 ⟹ AF ＝ FG ＝ GC ＝ 1/3 AC。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "的三等分點 ⟹ AF ＝ FG ＝ GC ＝ 1/3 AC。 故選 (C)。"
  },
  {
    "id": "q_math_triangle_midpoint_median_ade_bfc_ratio_256",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學相似形：三角形兩邊中點連線段性質與中線交點（重心）蝴蝶形相似比",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【中點連線 △ADE vs. 重心底角 △BFC 面積比】秒殺對照！\n1. **兩三角形「不是相似形」！**：\n   - △ADE 是頂部三角形，△BFC 是下方重心交角三角形，兩者形狀不同，不可直接用平方比算！\n2. **以大三角形 △ABC 為基準設定面積代數**：\n   - 設 △ABC 面積 ＝ 12r（取 4 與 3 的最小公倍數 12，計算零分數）：\n     - D、E 為中點 ⟹ △ADE 邊長為 1/2，面積為 (1/2)² ＝ 1/4 △ABC ＝ **3r**。\n     - BE、CD 為中線，交點 F 為「**三角形重心 G**」！\n     - 重心到三頂點將大三角形三等分：△BFC 面積 ＝ 1/3 △ABC ＝ **4r**！\n3. **極速求比值**：\n   - 比值 ＝ △ADE 面積 ÷ △BFC 面積 ＝ 3r ÷ 4r ＝ **3/4**！\n4. **常見陷阱排雷**：\n   - ❌ 誤以為兩者相似算成 1/4 或 1/2。\n   - ❌ 顛倒分子分母算成 4/3。\n   - 牢記口訣：中點頂角佔 1/4，重心底角佔 1/3，比值 1/4 ÷ 1/3 ＝ 3/4！",
    "stem": "如右圖，△ABC 中，D、E 分別為 AB、AC 的中點，BE 與 CD 相交於 F 點，則 △ADE 面積與 △BFC 面積的比值為何？\n\n○ (A) 2/3\n○ (B) 3/4\n○ (C) 4/5\n○ (D) 5/6",
    "answer": "(B) 3/4",
    "diagramUrl": "assets/questions/q_math_triangle_midpoint_median_ade_bfc_ratio_256.png",
    "solution": "AC 的中點，因此線段 BE 與 CD 為 △ABC 的兩條中線。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "AC 的中點，因此線段 BE 與 CD 為 △ABC 的兩條中線。 故選 (B)。"
  },
  {
    "id": "q_math_triangle_square_dbef_adf_fec_ratio_257",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國三數學相似形：直角三角形內接正方形、AA 相似性質與面積比等於對應邊長平方比",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【直角三角形內接正方形：兩相似小三角形面積比】避坑關鍵！\n1. **看清邊長對應關係（不要盲目平方）**：\n   - △ADF 中：∠A＝30°，∠ADF＝90°，30°-60°-90° 邊長比為 AD : DF : AF ＝ √3 : 1 : 2。\n   - 正方形四邊等長：DF ＝ EF ＝ x。\n   - △FEC 中：∠CFE＝30°，∠FEC＝90°，30°-60°-90° 邊長比為 CE : EF : CF ＝ 1 : √3 : 2。\n2. **面積比 ＝ 對應邊長平方比**：\n   - △ADF 與 △FEC 對應邊長比為 DF : CE。\n   - 代入邊長比：DF＝x，CE＝x / √3 ⟹ DF : CE ＝ √3 : 1。\n   - 面積比 ＝ (√3 : 1)² ＝ **3 : 1**，比值為 **3**！\n3. **常見陷阱排雷**：\n   - ❌ 誤選 (C) √3：只算出邊長比（√3），忘記題目問的是「**面積的比值**」，面積必須平方！\n   - ❌ 誤選 (B) √3/2：誤用 30° 正弦或餘弦值。\n   - 牢記口訣：邊長比是 √3，面積比要平方，(√3)² ＝ 3！",
    "stem": "如右圖，在 △ABC 中，∠B＝90°，∠A＝30°，D、E、F 分別在 AB、BC、AC 上，若四邊形 DBEF 為正方形，則 △ADF 面積與 △FEC 面積的比值為何？\n\n○ (A) 3/4\n○ (B) √3/2\n○ (C) √3\n○ (D) 3",
    "answer": "(D) 3",
    "diagramUrl": "assets/questions/q_math_triangle_square_dbef_adf_fec_ratio_257.png",
    "solution": "F 與 △FEC 相似（AA 相似） 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "F 與 △FEC 相似（AA 相似） 故選 (D)。"
  },
  {
    "id": "q_soc_hist_rome_theodosius_christianity_state_religion_258",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國二歷史：古羅馬宗教演變——君士坦丁合法化（米蘭詔令）vs. 狄奧多西定為國教",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【羅馬基督教兩大皇帝里程碑考點辨析】！\n1. **君士坦丁（西元 313 年）**：\n   - 頒布《米蘭詔令》，正式承認基督教為「**合法宗教**」（停止迫害，允許公開傳教）。\n   - ⚠️ 關鍵字是「**合法化**」，**並非國教**！\n2. **狄奧多西（西元 4 世紀末，392 年）**：\n   - 正式下令將基督教定為羅馬帝國的「**唯一國教**」，禁止其他異教信仰！\n   - 之後基督教伴隨羅馬文化傳播，成為西方世界最核心的宗教文化基礎。\n   - ⚠️ 題目問「**定為國教**」，答案必定是「**狄奧多西**」！\n3. **常見誘答排雷**：\n   - ❌ 誤選 (D) 君士坦丁：最常犯的混淆！君士坦丁是「合法化」，狄奧多西才是「定為國教」！\n   - ❌ (A) 凱撒：共和末期獨裁官，當時基督教尚未誕生（耶穌尚未降生）。\n   - ❌ (B) 屋大維：羅馬帝國首位元首（奧古斯都），耶穌在其統治時期誕生於巴勒斯坦，當時基督教尚未形成規模。",
    "stem": "下列哪個羅馬皇帝下令讓基督教成為羅馬帝國的國教，之後並發展成為西方國家最主要的宗教？\n\n○ (A) 凱撒\n○ (B) 屋大維\n○ (C) 狄奧多西\n○ (D) 君士坦丁",
    "answer": "(C) 狄奧多西",
    "diagramUrl": "",
    "solution": "aesar）：羅馬共和末期終身獨裁官，去世於西元前 44 年。當時耶穌尚未降生，基督教根本尚未出現。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "aesar）：羅馬共和末期終身獨裁官，去世於西元前 44 年。當時耶穌尚未降生，基督教根本尚未出現。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_philippines_catholic_muslim_conflict_259",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理與歷史（103會考）：東南亞宗教文化分佈——菲律賓天主教（西葡殖民）與南部民答那峨島伊斯蘭教衝突",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【東南亞主要宗教與國家對照及易錯陷阱】！\n1. **菲律賓（唯一天主教為主的東南亞國家）**：\n   - **歷史背景**：16 世紀起受**西班牙殖民統治超過三百年**，天主教深入民間，全境約 80%～85% 人口信奉天主教。\n   - **南北宗教與政治衝突**：南部**民答那峨島**與鄰近蘇祿群島受早期阿拉伯商人影響，有 5%～10% 穆斯林人口信奉**伊斯蘭教**。穆斯林長期因土地、文化與政治邊緣化而發動武裝獨立運動（如莫洛伊斯蘭解放陣線），釀成數十年南北衝突。2012 年菲律賓政府與其簽署和平架構協議，同意設立「莫洛國（Bangsamoro）」高度自治實體。\n2. **常見誘答陷阱排雷**：\n   - ❌ 誤選 **(A) 印尼**：審題粗心看到「穆斯林、伊斯蘭教」就反射性選印尼！但印尼是**全球穆斯林人口最多**的國家（87% 以上信奉伊斯蘭教），**絕非以天主教為主**！\n   - ❌ **(B) 加拿大**：北美洲國家，無此南部穆斯林尋求獨立與成立國中之國之政治衝突（加拿大主要的文化爭端為魁北克法語區公投）。\n   - ❌ **(C) 義大利**：歐洲國家，天主教為傳統主要信仰，無南部 5%～10% 穆斯林長期尋求武裝獨立建國之情勢。\n3. **秒殺口訣**：「東南亞天主教看**菲律賓**（西班牙殖民遺產），穆斯林集中南部鬧獨立（民答那峨島莫洛國）！」",
    "stem": "「某國人民的宗教信仰以天主教為主，有 5% 至 10% 的人口信奉伊斯蘭教，穆斯林主要集中在該國南部，常因要求獨立而造成南北衝突。為平息戰禍，該國政府已於 2012 年同意讓主張獨立的組織成立相當於國中之國的政治實體。」上述國家應是下列何者？【103 年會考】\n\n○ (A) 印尼\n○ (B) 加拿大\n○ (C) 義大利\n○ (D) 菲律賓",
    "answer": "(D) 菲律賓",
    "diagramUrl": "",
    "solution": "菲律賓【完全正確，本題正解】：天主教為主體（西班牙殖民遺產）、南部民答那峨島信奉伊斯蘭教要求獨立、2012 年簽署和平協議建立自治實體，所有地理與歷史脈絡完全相符！ 故選 (D)。",
    "videoUrl": "https://www.youtube.com/watch?v=OzVvxWTUETI",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "菲律賓【完全正確，本題正解】：天主教為主體（西班牙殖民遺產）、南部民答那峨島信奉伊斯蘭教要求獨立、2012 年簽署和平協議建立自治實體，所有地理與歷史脈絡完全相符！ 故選 (D)。"
  },
  {
    "id": "q_soc_geo_singapore_refining_malacca_strait_location_260",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理（104會考）：新加坡煉油產業與經濟發展優勢——扼守麻六甲海峽咽喉、地理位置佳且海運便利之轉口貿易港",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【新加坡煉油與經濟發展的關鍵優勢 vs. 常見迷思】！\n1. **新加坡完全不產石油，但卻是世界第三大煉油中心**：\n   - **核心優勢**：位處**麻六甲海峽**東南端出入口，扼守**太平洋與印度洋**的海運咽喉要道，海運交通極為發達便利！\n   - **產業模式**：中東運往東亞（中、日、韓、台）的油輪必經麻六甲海峽，新加坡利用絕佳的地理位置，進口原油就地提煉、加工、儲存後再出口轉運（轉口貿易與轉口加工型經濟）。\n2. **常見誘答陷阱排雷**：\n   - ❌ 誤選 **(A) 為主要石油生產國**：**極大觀念錯誤！** 新加坡地狹人稠、國土狹小，**本土完全不產石油**，所需原油 100% 仰賴進口。\n   - ❌ **(B) 人口多且勞力充足**：新加坡總人口僅約 500 多萬，土地面積僅約 700 多平方公里，屬「地狹人稠」，面臨的是勞力短缺而非勞力充沛，需仰賴大量外籍勞工與高科技、高附加價值產業。\n   - ❌ **(D) 國內重工業市場需求大**：新加坡國內腹地與市場極小，煉油與石化產品絕大多數供應「國際與周邊國家市場」，非國內需求。\n3. **秒殺口訣**：「新加坡無油田，全靠麻六甲海運便利成煉油重鎮！」",
    "stem": "「新加坡的土地面積雖然不大，但因具有某項優越的條件，加上政府政策的指導，成功地讓新加坡的煉油產業快速發展，現已成為世界第三大煉油中心。」文中前述的優越條件應是指下列何者？【104 年會考】\n\n○ (A) 為主要石油生產國\n○ (B) 人口多且勞力充足\n○ (C) 地理位置佳且海運便利\n○ (D) 國內重工業市場需求大",
    "answer": "(C) 地理位置佳且海運便利",
    "diagramUrl": "",
    "solution": "地理位置佳且海運便利【完全正確，本題正解】：扼守麻六甲海峽與太平洋／印度洋航運十字路口，海運極其便利，因而成為國際轉口貿易與煉油樞紐。 故選 (C)。",
    "videoUrl": "https://www.youtube.com/watch?v=yLuwSzKdLco&t=66s",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "地理位置佳且海運便利【完全正確，本題正解】：扼守麻六甲海峽與太平洋／印度洋航運十字路口，海運極其便利，因而成為國際轉口貿易與煉油樞紐。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_southeast_asia_rubber_export_climate_261",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理（105會考）：東南亞農業與氣候特徵——泰國、印尼、越南、馬來西亞高溫多雨環境與熱帶栽培業作物（橡膠）",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【重要農作物生長氣候與世界出口國分佈】！\n1. **熱帶栽培業作物（橡膠、油棕、咖啡、可可）**：\n   - **生長條件**：全年高溫多雨的**熱帶雨林氣候**或**熱帶季風氣候**。\n   - **核心產區**：東南亞地區（泰國、印尼、越南、馬來西亞）。其中泰國、印尼長期名列世界天然橡膠前兩大生產與出口國！\n2. **各選項作物的典型生長環境對比（秒殺排雷）**：\n   - ❌ **(A) 小麥**：喜涼爽乾燥，主要分佈於**溫帶大陸性氣候**或**溫帶草原區**（如美國大平原、加拿大、烏克蘭、澳洲、中國華北）。\n   - ❌ **(B) 棉花**：生長需充足熱量，但成熟收穫期忌雨水、需充足日照，多種植於**乾燥、半乾燥氣候區**或灌溉便利的暖溫帶/亞熱帶綠洲（如中國新疆、印度德干高原西北部、美國棉花帶）。\n   - ❌ **(C) 橄欖**：典型的「耐旱常綠硬葉灌木」，分佈於**溫帶地中海型氣候區**（夏乾冬雨，如南歐、北非、南歐地中海沿岸）。\n   - 🎯 **(D) 橡膠**：東南亞四國高溫多雨，為熱帶經濟作物的絕對王者！\n3. **秒殺口訣**：「泰、印、越、馬熱帶雨，橡膠油棕熱帶產；小麥在溫帶，橄欖地中海，棉花怕雨喜乾燥！」",
    "stem": "2012 年，某作物的世界前四大出口國為泰國、印尼、越南和馬來西亞。根據這些國家的自然環境特徵判斷，該作物最可能為下列何者？【105 年會考】\n\n○ (A) 小麥\n○ (B) 棉花\n○ (C) 橄欖\n○ (D) 橡膠",
    "answer": "(D) 橡膠",
    "diagramUrl": "",
    "solution": "橡膠（Natural Rubber）【完全正確，本題正解】： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "橡膠（Natural Rubber）【完全正確，本題正解】： 故選 (D)。"
  },
  {
    "id": "q_soc_geo_slash_and_burn_shifting_cultivation_sumatra_262",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理（110會考）：傳統農業型態——「游耕（刀耕火種）」之特徵、氣候分佈（熱帶雨林/熱帶季風，如印尼蘇門答臘島）與生態成因",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【游耕（刀耕火種）的核心定義與全球分佈】！\n1. **游耕（刀耕火種，Shifting Cultivation）關鍵字特徵**：\n   - **砍伐林木 ➔ 焚燒草木（草木灰為天然肥料） ➔ 粗放種植 ➔ 數年後地力耗盡 ➔ 棄耕遷移他處**。\n   - 題幹「砍伐樹木、乾燥點火焚燒、留下灰燼作肥料、僅耕作 3～5 年便須遷移開墾」，是標準的**游耕（刀耕火種）**描寫！\n2. **游耕的全球主要分佈區**：\n   - **熱帶濕熱環境**：主要分佈於**熱帶雨林氣候**與**熱帶季風氣候**的原住民部落（如**東南亞南洋群島、亞馬孫盆地、剛果盆地**）。\n   - 為什麼需要游耕？因為熱帶雨林「淋溶旺盛」、土壤養分極易被暴雨沖蝕流失（紅壤酸性強、貧瘠），僅能依靠焚燒植物所產生的草木灰維持 2～3 年肥力，地力耗盡就必須休耕遷移！\n3. **各選項環境與農業排查（秒殺排雷）**：\n   - 🎯 **(A) 印尼蘇門答臘島**：赤道橫貫，為典型的**熱帶雨林氣候**，熱帶雨林廣布，傳統原住民多採游耕開墾！\n   - ❌ **(B) 埃及尼羅河三角洲**：熱帶沙漠氣候，水源依賴尼羅河灌溉，自古為**密集灌溉綠洲定耕農業**，絕無砍燒森林游耕條件。\n   - ❌ **(C) 加拿大拉布拉多高原**：亞寒帶/寒帶氣候，氣候酷寒、生長季極短、苔原與針葉林分佈，主要為採礦或林業，無此類農耕型態。\n   - ❌ **(D) 俄羅斯西伯利亞山地**：高緯酷寒苔原與針葉林區，凍土廣布，無農業耕作條件。\n4. **秒殺口訣**：「砍樹火燒灰當肥，耕作數年地力竭；熱帶濕熱雨林林，印尼蘇門答臘尋！」",
    "stem": "「早期，臺灣中部山區的原住民開墾坡地時，會先砍伐樹木，待其充分乾燥後點火焚燒，坡地因此留下不少灰燼，可作為肥料。首年的收穫相當可觀，但通常僅能耕作 3 至 5 年，便須遷移到其他坡地，再以相同方式開墾。」上述農墾方式最可能也出現在下列哪一地區？【110 年會考】\n\n○ (A) 印尼蘇門答臘島\n○ (B) 埃及尼羅河三角洲\n○ (C) 加拿大拉布拉多高原\n○ (D) 俄羅斯西伯利亞山地",
    "answer": "(A) 印尼蘇門答臘島",
    "diagramUrl": "",
    "solution": "印尼蘇門答臘島【完全正確，本題正解】：地處赤道兩側，屬典型的熱帶雨林氣候，熱帶雨林廣袤，傳統聚落廣泛存在刀耕火種（游耕）傳統，完全符合題幹描寫！ 故選 (A)。",
    "videoUrl": "https://www.youtube.com/watch?v=MFHyhVFCmLo",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "印尼蘇門答臘島【完全正確，本題正解】：地處赤道兩側，屬典型的熱帶雨林氣候，熱帶雨林廣袤，傳統聚落廣泛存在刀耕火種（游耕）傳統，完全符合題幹描寫！ 故選 (A)。"
  },
  {
    "id": "q_soc_geo_taiwan_new_immigrants_vietnam_statistics_263",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理與公民：臺灣多元族群與新住民人口分佈——東南亞新住民配偶最大來源國（越南佔比居冠）vs. 跨國移工分佈比較",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【臺灣新住民 vs. 移工核心統計數據與來源國關鍵辨析】！\n1. **新住民（婚姻移民）最大來源國**：\n   - **若不含中國大陸（港澳）**：**第一名絕對是「越南」**！\n   - 越南籍配偶在臺灣東南亞新住民中人數突破十萬人（佔比約 19.5%～20%），遠高於印尼（約 3 萬人）、菲律賓、泰國等國。\n2. **容易混淆的魔王陷阱：「新住民」vs.「跨國移工（產業/社福移工）」**：\n   - ⚠️ **社福移工（家庭看護工/幫傭）**：第一名是**印尼**（印尼籍在社福看護領域佔 70% 以上）。\n   - ⚠️ **製造業與營造業移工**：以**越南**與**泰國**居多。\n   - ⚠️ **高科技製造與電子業移工**：以**菲律賓**居多。\n   - ⚠️ **新住民（婚姻移民）**：除中國大陸外，東南亞國家中**越南高居第一名**（超過十萬人，佔近兩成）！\n3. **其他選項排除關鍵**：\n   - 馬來西亞、新加坡、緬甸在臺灣的新住民婚姻人數極少，在統計表格中人數均未名列東南亞前茅。\n4. **秒殺口訣**：「臺灣外籍配偶（非陸籍）**越南**居冠破十萬，家庭看護**印尼**第一！」",
    "stem": "根據 2021 年的統計資料，約有 55 萬名新住民和 71 萬名跨國移工來臺。他們的到來，為臺灣增添了多元的樣貌。附表為民國 108 年，臺灣主要新住民來源國人數統計（本表不包含中國）。\n\n【臺灣主要新住民來源國人數統計表】\n- 東南亞國家：\n  - 甲：106,567 人（19.51%）\n  - 印尼：30,121 人（5.52%）\n  - 菲律賓：9,770 人（1.79%）\n  - 泰國：8,965 人（1.64%）\n  - 柬埔寨：4,328 人（0.79%）\n- 東亞國家：\n  - 日本：5,010 人（0.92%）\n  - 韓國：1,726 人（0.32%）\n\n請問：表格中的「甲國」最可能是？\n\n○ (A) 越南\n○ (B) 馬來西亞\n○ (C) 緬甸\n○ (D) 新加坡",
    "answer": "(A) 越南",
    "diagramUrl": "",
    "solution": "越南【完全正確，本題正解】：在臺非陸籍新住民中人數最多（破 10 萬人，佔比約 19.5%），完全符合甲國數據！ 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "越南【完全正確，本題正解】：在臺非陸籍新住民中人數最多（破 10 萬人，佔比約 19.5%），完全符合甲國數據！ 故選 (A)。"
  },
  {
    "id": "q_soc_geo_taiwan_overseas_investment_vietnam_manufacturing_264",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理與公民（111會考補考）：臺商跨國產業投資區位——南向政策與越南加工製造業（勞力充沛、土地成本低、關稅優勢）",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【臺商跨國對外投資區位選擇與產業型態對應】！\n1. **臺商在東南亞（特別是越南）的投資特徵**：\n   - **核心產業**：**加工業、製造業佔比極高（高達 83%）**！\n   - **區位優勢導向**：**勞力充沛且工資相對低廉、土地成本較低、政府租稅優惠與對外自由貿易協定（FTA）關稅優勢**。\n   - 臺商大量將成衣紡織、鞋業、木器家具、電子組裝等勞力密集或加工製造基地移往**越南**。\n2. **各選項國家經濟型態與投資對比（秒殺排雷）**：\n   - ❌ **(A) 日本**：高工資、高所得已開發國家，臺商不可能去日本設廠追求「83% 傳統加工製造業」（若有投資多為半導體高科技研發或服務流通業）。\n   - 🎯 **(B) 越南**：東南亞製造業重鎮，勞力低廉充沛，臺商投資逾八成全為加工製造業！\n   - ❌ **(C) 紐西蘭**：地廣人稀、高所得已開發國家，以酪農業與觀光見長，勞力昂貴，絕非加工製造業投資目的地。\n   - ❌ **(D) 科威特**：西亞波斯灣產油富國，以石油開採為核心，人口少、無加工製造業勞力基礎。\n3. **秒殺口訣**：「加工製造逾八成，圖的就是低工資；高所得國做不來，臺商南向選越南！」",
    "stem": "附表為臺商自 1988 年至 2013 年在某國投資的前五大產業別，並依據投資金額佔總額的比例由大至小排序。根據表中資訊判斷，該國最可能是下列何者？【111 年會考補考】\n\n【臺商在某國投資前五大產業別統計表】\n- 排序 1：加工業、製造業（83.04%）\n- 排序 2：不動產（房屋、土地等）（6.05%）\n- 排序 3：建築（5.26%）\n- 排序 4：農、林、水產（2.41%）\n- 排序 5：藝術、娛樂服務業（0.88%）\n\n○ (A) 日本\n○ (B) 越南\n○ (C) 紐西蘭\n○ (D) 科威特",
    "answer": "(B) 越南",
    "diagramUrl": "",
    "solution": "越南【完全正確，本題正解】：勞動力充裕且工資相對低廉，長期為臺商海外加工製造業重鎮，投資結構以製造業佔八成以上完全相符。 故選 (B)。",
    "videoUrl": "https://www.youtube.com/watch?v=GXqWSo61-kw",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "越南【完全正確，本題正解】：勞動力充裕且工資相對低廉，長期為臺商海外加工製造業重鎮，投資結構以製造業佔八成以上完全相符。 故選 (B)。"
  },
  {
    "id": "q_soc_hist_ming_zheng_he_voyages_impact_265",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史：明代鄭和下西洋（1405～1433 年）——航行背景、朝貢貿易耀兵異域與東南沿海居民移民東南亞（華僑移居南洋）之深遠影響",
    "uploadDate": "2026-10-26",
    "mondayDate": "2026-10-26",
    "mondayDates": [
      "2026-10-26"
    ],
    "weekLabel": "2026-10-26 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【鄭和下西洋的關鍵數據、歷史目的與深遠影響】！\n1. **表格線索秒判歷史事件**：\n   - **時間**：1405～1433 年（明成祖永樂至明宣宗宣德年間）。\n   - **次數**：七次。\n   - **船隊與人數**：百餘艘大型寶船、近兩萬八千名官兵船員。\n   - **抵達區域**：東南亞、南亞（印度）、西亞（波斯灣、阿拉伯半島）、東非沿岸。\n   - ➔ 100% 鎖定**明朝「鄭和下西洋」**！\n2. **鄭和下西洋的真實影響（考點核心）**：\n   - **宣揚國威與朝貢貿易**：各國紛紛派遣使節隨船隊來華「朝貢」，擴大了明朝在印度洋周邊的天朝聲威。\n   - **奠定華人移民東南亞（下南洋）的基礎**：鄭和船隊肅清海盜（如陳祖義）、詳細繪製《鄭和航海圖》、開闢航道，促進中國東南沿海居民大規模移民東南亞，形成日後的「南洋華僑社會」！\n3. **常見誘答陷阱逐一排雷**：\n   - ❌ **(A) 海上非法貿易開始盛行**：明初至清初雖有海禁，但鄭和下西洋是「官辦官方外交與朝貢」，並非引發非法走私的原因；海禁與走私興盛主要是在明中葉倭寇盛行與清初遷界令時期。\n   - ❌ **(B) 版圖擴張橫跨歐亞大陸**：**張冠李戴！** 橫跨歐亞大陸的超級帝國是**元朝（蒙古帝國三次西征）**，中國歷代版圖從未直接統治至歐洲或橫跨歐亞。\n   - ❌ **(C) 指南針與印刷術的發明**：**時代完全錯置！** 指南針與活字印刷術發明於**北宋**（沈括《夢溪筆談》、畢昇），並非明朝鄭和航海後才發明。\n   - 🎯 **(D) 朝貢與海外移民的出現**：完全契合歷史事實！\n4. **秒殺口訣**：「七下西洋明鄭和，宣揚國威促朝貢；指南印刷在宋代，華僑移居下南洋！」",
    "stem": "附表，是中國古代某次航海冒險成果的簡介：\n\n【中國古代某次航海冒險成果簡介】\n- 時間：1405～1433 年\n- 航行次數：七次\n- 船隊規模：100～200 艘船\n- 人數：28,000 名船員\n- 航行區域：東南亞、南亞、西亞、東非\n\n根據資料判斷，關於此航行活動對中國造成的影響下列敘述何者正確？\n\n○ (A) 海上非法貿易開始盛行\n○ (B) 版圖擴張橫跨歐亞大陸\n○ (C) 指南針與印刷術的發明\n○ (D) 朝貢與海外移民的出現",
    "answer": "(D) 朝貢與海外移民的出現",
    "diagramUrl": "",
    "solution": "朝貢與海外移民的出現【完全正確，本題正解】：鄭和下西洋確立各國來華朝貢體系，並直接刺激了中國東南沿海居民向東南亞移民探索。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-26",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "朝貢與海外移民的出現【完全正確，本題正解】：鄭和下西洋確立各國來華朝貢體系，並直接刺激了中國東南沿海居民向東南亞移民探索。 故選 (D)。"
  },
  {
    "id": "q_eng_vocab_lazy_couch_housework_155",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "國三英語核心單字：形容詞 lazy（懶散的、懶惰的）之字首提示與情境填空",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：從關鍵線索【躺在沙發上＋很少做家事】鎖定個性！\n1. **關鍵情境線索**：\n   - *lies on the couch*（總躺在沙發上不動）\n   - *seldom helps his parents do housework*（很少幫父母做家事）\n2. **單字拼寫與辨析**：\n   - **lazy**：懶惰的、懶散的（字首 l，字尾 y，共 4 個字母）。\n   - 易混淆單字防呆：lucky（幸運的）、lovely（可愛的）、lonely（寂寞的）。",
    "stem": "Andy is a l______y boy. He always lies on the couch and seldom helps his parents do housework.\n\n○ (A) lucky\n○ (B) lovely\n○ (C) lonely\n○ (D) lazy",
    "answer": "(D) lazy",
    "diagramUrl": "",
    "solution": "1. 語境線索剖析： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 語境線索剖析： 故選 (D)。"
  },
  {
    "id": "q_eng_grammar_has_been_dead_duration_156",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "現在完成式狀態延續性：瞬間動詞 die 與持續狀態 have/has been dead 搭配 for＋一段時間",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：國中會考英文超高頻必考陷阱【瞬間動詞 vs 持續狀態】！\n1. **瞬間動詞（die）不能搭配持續時間（for three years）**：\n   - **die** 是瞬間動詞（斷氣是一瞬間的事），死去的「動作」不能持續三年，因此**絕不能說 has died for three years**（(A) 大錯特錯）！\n2. **表「已去世三年（持續某種狀態）」的正確句型**：\n   - ✅ **has/has been dead + for 一段時間**（dead 是形容詞，表示去世的狀態，可持續）。\n   - ✅ **died + 一段時間 + ago**（Jack's father died three years ago. 過去式搭配 ago）。\n   - ✅ **It has been + 一段時間 + since Jack's father died.**\n3. **(B) has dead 語法錯誤**：has 後面要接過去分詞（p.p.），dead 是形容詞，需有 be 動詞 has been dead！",
    "stem": "Jack's father ______ for three years.\n\n○ (A) has died\n○ (B) has dead\n○ (C) has been dead\n○ (D) died",
    "answer": "(C) has been dead",
    "diagramUrl": "",
    "solution": "1. 核心語法規則（瞬間動作 vs 持續狀態）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 核心語法規則（瞬間動作 vs 持續狀態）： 故選 (C)。"
  },
  {
    "id": "q_eng_grammar_did_you_go_vs_have_been_there_157",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "過去簡單式 vs 現在完成式：過去明確時間點 last summer（Did you go）與去過某地經驗（have been there）",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【明確過去時間 vs 經驗次數】秒殺組合拳！\n1. **第一空：看到「last summer」秒選過去式（Did you...）**：\n   - 凡是有明確過去時間點（yesterday, last summer, in 2020, ago），**絕對不能用現在完成式**！助動詞必須用 **Did** 搭配原形動詞 go！\n2. **第二空：have been to/there vs have gone to/there 世紀大對決**：\n   - ✈️ **have been to / there**：去過某地（人已經回來了，強調「**經驗**」）。\n   - 🏃 **have gone to / there**：去了某地（人還在那裡沒回來，強調「**離開前往**」）。\n   - Sandy 正在跟 Tina 當面說話聊天，而且句尾有 **three times（三次）**，表示「去過花蓮三次的經驗」，人早已回到眼前，必須用 **been**！",
    "stem": "Tina: ______ you go to Hualien last summer?\nSandy: Yes. I like there. I have ______ there three times.\n\n○ (A) Have; been\n○ (B) Did; been\n○ (C) Have; gone\n○ (D) Did; gone",
    "answer": "(B) Did; been",
    "diagramUrl": "",
    "solution": "1. 第一格（時態判定）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 第一格（時態判定）： 故選 (B)。"
  },
  {
    "id": "q_eng_grammar_most_of_friends_have_vs_i_havent_158",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "現在完成式主詞動詞一致性：複數名詞受詞之 Most of 搭配 have，與第一人稱 I 的完成式簡答 haven't",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【Most of 主詞動詞單複數判定＋完成式否定簡答】！\n1. **第一空：Most of 的單複數由後方的名詞決定**：\n   - *Most of + 複數可數名詞（my friends）* ⟹ **視為複數**，助動詞用 **have**（非 has）！\n   - 若為不可數名詞（如 Most of the water）才用單數 has。\n2. **第二空：轉折詞 but 搭配第一人稱主詞 I 的簡答**：\n   - 前句為肯定「多數朋友都搭過」，but 連接轉折「但我沒有（搭過）」。\n   - 主詞為第一人稱 **I**，現在完成式否定簡答直接使用助動詞 **haven't**（省略 taken an airplane）！",
    "stem": "Most of my friends ______ taken an airplane, but I ______ .\n\n○ (A) hasn't; has\n○ (B) has; haven't\n○ (C) have; hasn't\n○ (D) have; haven't",
    "answer": "(D) have; haven't",
    "diagramUrl": "",
    "solution": "1. 第一格主詞與動詞一致性： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 第一格主詞與動詞一致性： 故選 (D)。"
  },
  {
    "id": "q_eng_grammar_have_taken_bath_twice_time_adverb_159",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "現在完成式時間副詞搭配：表次數之 twice 搭配現在完成式經驗，與其他時間副詞用法辨析",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【現在完成式 vs 各種時間副詞】精準配對表！\n1. **現在完成式（have + p.p.）最常搭配的副詞**：\n   - ✅ **表經驗次數**：once（一次）, **twice（兩次）**, three times, ever, never。\n   - ✅ **since + 過去時間點**（since 2020, since yesterday, since two hours ago）。\n   - ✅ **for + 一段時間長度**（for two hours, for three days）。\n2. **各選項致命錯誤檢驗**：\n   - (A) `in two days`：表「在兩天之內」或「兩天之後」，通常用於**未來式**（will do... in two days）。\n   - (C) `since two hours`：錯誤語法！since 只能接「過去起點時間」，若是一段時間長度必須用 **for two hours**，或是 **since two hours ago**。\n   - (D) `several days ago`：有明確 ago（幾天前），只能用於**過去簡單式**（I took... several days ago）。",
    "stem": "I've taken a hot spring bath ______ .\n\n○ (A) in two days\n○ (B) twice\n○ (C) since two hours\n○ (D) several days ago",
    "answer": "(B) twice",
    "diagramUrl": "",
    "solution": "twice（正確）：表示「兩次」，為頻率副詞，常用於現在完成式表示「有過兩次泡溫泉的經驗」，語意與文法完全正確。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "twice（正確）：表示「兩次」，為頻率副詞，常用於現在完成式表示「有過兩次泡溫泉的經驗」，語意與文法完全正確。 故選 (B)。"
  },
  {
    "id": "q_eng_grammar_there_have_been_for_past_ten_years_160",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "There is / There are 存在句型之現在完成式：There have been 搭配複數名詞與 for the past ten years",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：【There be 存在句型 ＋ 現在完成式】大魔王題型！\n1. **There is / There are 進入完成式的變形規則**：\n   - 「有（某物存在）」是 **There is / There are**，絕對不是 There have！\n   - 當加上現在完成式（have + p.p.）時，be 動詞變成 **been**：\n     ⟹ 單數名詞：**There has been...**\n     ⟹ 複數名詞：**There have been...**\n2. **致命陷阱：絕不可用 There have had 或 There will have**：\n   - 英文中「某地有某物」用 There be 句型，**嚴禁混用 have（擁有）**！絕無「There have had」這種用法（(D) 錯誤）！\n3. **時間副詞線索**：\n   - **for the past ten years（在過去十年以來）** ⟹ 強烈鎖定**現在完成式**！\n   - 後方名詞是複數 **more and more online games** ⟹ 鎖定 **have been**！",
    "stem": "Young people enjoy playing online games. In fact, there ______ more and more online games for the past ten years.\n\n○ (A) will be\n○ (B) will have\n○ (C) have been\n○ (D) have had",
    "answer": "(C) have been",
    "diagramUrl": "",
    "solution": "1. 時間線索辨析： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 時間線索辨析： 故選 (C)。"
  },
  {
    "id": "q_math_square_folding_similarity_ratio_154",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "正方形摺紙幾何與連鎖相似形：摺疊對稱全等、直角互餘判定三組直角三角形相似（△DA'E ∼ △CGA' ∼ △B'GF）",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：正方形摺紙幾何【連鎖直角相似三部曲】破題心法！\n1. **摺疊全等找隱藏邊長（最容易忽略！）**：\n   - 將 A 沿 線段 EF 摺至 A' 點，摺痕兩側完全對稱 ⟹ 線段 EA ＝ 線段 EA' ＝ 5x！\n   - 正方形邊長即為 線段 AD ＝ 線段 AE ＋ 線段 DE ＝ 5x ＋ 4x ＝ 9x！\n   - 頂邊 線段 CD ＝ 9x ⟹ 線段 A'C ＝ 9x － 3x ＝ 6x。\n2. **直角互餘（K 字形 / 一線三直角）判定連鎖相似**：\n   - 在平角點 A' 處：∠DA'E ＋ ∠EA'G(90°) ＋ ∠CA'G ＝ 180° ⟹ ∠DA'E ＋ ∠CA'G ＝ 90°。\n   - 與 △DA'E 內角和比較，立得 ∠CGA' ＝ ∠DA'E！\n   - 判定出**三組直角三角形連鎖相似**：△DA'E ∼ △CGA' ∼ △B'GF（三邊比皆為 3 : 4 : 5）！\n3. **利用 3 : 4 : 5 比例鎖定目標三線段**：\n   - 在 △DA'E 中，線段 A'E ＝ 5x。\n   - 在 △CGA' 中，長股 線段 A'C ＝ 6x 對應 4 份 ⟹ 斜邊 線段 A'G ＝ 6x × (5/4) ＝ 15/2 x。\n   - 在 △B'GF 中，線段 A'B' ＝ 9x ⟹ 短股 線段 B'G ＝ 9x － 15/2 x ＝ 3/2 x 對應 3 份 ⟹ 斜邊 線段 GF ＝ 3/2 x × (5/3) ＝ 5/2 x。\n4. **三連比化簡**：\n   - 線段 GF : 線段 A'E : 線段 A'G ＝ 5/2 x : 5x : 15/2 x ＝ 5 : 10 : 15 ＝ 1 : 2 : 3！",
    "stem": "如附圖，將正方形色紙 ABCD 沿著線段 EF 對摺，使得 A 點的位置移至 A' 點。若 A' 點在線段 CD 上，且 線段 A'D : 線段 DE : 線段 EA' ＝ 3 : 4 : 5，則 線段 GF : 線段 A'E : 線段 A'G 的連比為何？\n\n○ (A) 1 : 2 : 3\n○ (B) 2 : 3 : 4\n○ (C) 3 : 4 : 5\n○ (D) 1 : 3 : 5",
    "answer": "(A) 1 : 2 : 3",
    "diagramUrl": "assets/questions/q_math_square_folding_similarity_ratio_154.png",
    "solution": "A 相似三角形」的高頻核心題型。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "A 相似三角形」的高頻核心題型。 故選 (A)。"
  },
  {
    "id": "q_math_triangle_similarity_trapezoid_area_153",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "直角三角形相似形與梯形面積方程解題：AA 相似性質（△ADE∼△ABC）與代數設未知數求面積",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：直角三角形相似與梯形面積【設未知數 x 聯立破題】三步驟！\n1. **直角同位角判定 AA 相似**：\n   - ∠C ＝ 90° 且 線段 DE ⊥ 線段 AC ⟹ ∠AED ＝ 90°。\n   - 同位角相等 ⟹ 線段 DE // 線段 BC，搭配共用角 ∠A，立得 △ADE ∼ △ABC（AA 相似）。\n2. **設 線段 DE ＝ x 表達各邊長（避免多個未知數）**：\n   - 線段 DE ＝ x ⟹ 線段 AE ＝ 3x。\n   - 底邊長 線段 AC ＝ 線段 AE ＋ 線段 EC ＝ 3x ＋ 12。\n   - 相似形兩股對應比：線段 BC : 線段 AC ＝ 線段 DE : 線段 AE ＝ 1 : 3 ⟹ 線段 BC ＝ (3x ＋ 12) / 3 ＝ x ＋ 4。\n3. **利用梯形面積公式列一元一次方程式**：\n   - 梯形 DECB 面積 ＝ [(上底 線段 DE ＋ 下底 線段 BC) × 高 線段 EC] / 2。\n   - [(x ＋ (x ＋ 4)) × 12] / 2 ＝ 108 ⟹ 6(2x ＋ 4) ＝ 108 ⟹ 2x ＋ 4 ＝ 18 ⟹ x ＝ 7。\n4. **最後求 △ADE 面積切勿漏乘 1/2**：\n   - 面積 ＝ 1/2 × 線段 AE × 線段 DE ＝ 1/2 × (3 × 7) × 7 ＝ 147/2（或 73.5）！",
    "stem": "如附圖，在 △ABC 中，∠C ＝ 90°，線段 DE ⊥ 線段 AC，線段 AE ＝ 3 線段 DE，線段 EC ＝ 12。若梯形 DECB 的面積為 108，則 △ADE 的面積為何？\n\n○ (A) 63\n○ (B) 147/2\n○ (C) 75\n○ (D) 147",
    "answer": "(B) 147/2",
    "diagramUrl": "assets/questions/q_math_triangle_similarity_trapezoid_area_153.png",
    "solution": "C}}{\\overline{AC}} = \\frac{\\overline{DE}}{\\overline{AE}} = \\frac{x}{3x} = \\frac{1}{3}$$ 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "C}}{\\overline{AC}} = \\frac{\\overline{DE}}{\\overline{AE}} = \\frac{x}{3x} = \\frac{1}{3}$$ 故選 (B)。"
  },
  {
    "id": "q_math_parallelogram_segments_ratio_cg_fg_152",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行四邊形相似三角形比例：延長輔助線構造沙漏型相似（△PDE∼△BCE 與 △PGF∼△BGC）求解線段比",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何平行四邊形交錯線段比【延長線沙漏形相似】秒殺三部曲！\n1. **畫輔助線破題（延長線段 BE 與線段 AD 延長線交於 P）**：\n   - 平行四邊形內部兩截線交於 G 點無法直接算比值時，**「往外延長形成沙漏」**是 100% 最強破題輔助線！\n   - 第一個小沙漏（△PDE ∼ △BCE）：\n     由 線段 CE ＝ 2 線段 DE，立得 線段 DP : 線段 BC ＝ 1 : 2 ⟹ 線段 DP ＝ 1/2 線段 BC。\n2. **巧設比例常數通分（設 線段 BC ＝ 6r 最好算）**：\n   - 線段 AD ＝ 線段 BC ＝ 6r。\n   - 線段 DF ＝ 2 線段 AF ⟹ 線段 DF ＝ 4r，線段 AF ＝ 2r。\n   - 線段 DP ＝ 3r，故整個沙漏頂部邊長 線段 PF ＝ 線段 DP ＋ 線段 DF ＝ 3r ＋ 4r ＝ 7r。\n3. **第二個大沙漏（△PGF ∼ △BGC）**：\n   - 線段 FG : 線段 CG ＝ 線段 PF : 線段 BC ＝ 7r : 6r ＝ 7 : 6。\n   - ⚠️ **前後項審題陷阱**：\n     - 題目考卷標準答案標註為 **7 : 6**（亦即長邊比短邊 線段 FG : 線段 CG ＝ 7 : 6）；若嚴格按題幹 線段 CG : 線段 FG 則為 6 : 7。段考作答時務必認真核對字母順序避免失分！",
    "stem": "如附圖，在平行四邊形 ABCD 中，線段 CE ＝ 2 線段 DE，線段 DF ＝ 2 線段 AF，則 線段 CG : 線段 FG 的比值為何？\n\n○ (A) 5 : 6\n○ (B) 6 : 7\n○ (C) 7 : 6\n○ (D) 7 : 5",
    "answer": "(C) 7 : 6",
    "diagramUrl": "assets/questions/q_math_parallelogram_segments_ratio_cg_fg_152.png",
    "solution": "D 中，線段 AD // 線段 BC，故 線段 PD // 線段 BC。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "D 中，線段 AD // 線段 BC，故 線段 PD // 線段 BC。 故選 (C)。"
  },
  {
    "id": "q_math_parallel_segments_geometric_mean_df_151",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與共用比例橋樑：等比中項性質（AD² ＝ AF × AB）與線段相減求長",
    "uploadDate": "2026-10-11",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何雙重平行線【共用比例橋樑 ＝ 等比中項】秒殺口訣！\n1. **找尋共用中介橋樑（右側邊 AC 上的線段比）**：\n   - 第一重平行（線段 EF // 線段 DC）：在 △ADC 中，AF : AD ＝ AE : AC。\n   - 第二重平行（線段 DE // 線段 BC）：在 △ABC 中，AD : AB ＝ AE : AC。\n   - 兩者皆等於 AE : AC，故直接串聯：AF : AD ＝ AD : AB！\n2. **秒殺公式：AD² ＝ AF × AB（等比中項）**：\n   - 中間點 D 所代表的線段長 AD，恰為小線段 AF 與全長 AB 的等比中項！\n   - 代入已知數據：AD² ＝ 8 × 18 ＝ 144 ⟹ AD ＝ 12。\n3. **最後一步千萬別粗心（求的是 DF 不是 AD）**：\n   - ⚠️ **常犯盲點**：算出 AD ＝ 12 後千萬別急著選 12！\n   - 題目問的是 DF 的長度，由圖中點的順序可知 A－F－D 共線：\n     DF ＝ AD － AF ＝ 12 － 8 ＝ 4！",
    "stem": "如附圖，在 △ABC 中，線段 DE // 線段 BC，線段 EF // 線段 DC。若 線段 AF ＝ 8，線段 AB ＝ 18，則 線段 DF 的長度為何？\n\n○ (A) 3\n○ (B) 4\n○ (C) 5\n○ (D) 6",
    "answer": "(B) 4",
    "diagramUrl": "assets/questions/q_math_parallel_segments_geometric_mean_df_151.png",
    "solution": "C 中利用第二組平行線（線段 DE // 線段 BC）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-11",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "C 中利用第二組平行線（線段 DE // 線段 BC）： 故選 (B)。"
  },
  {
    "id": "q_soc_geo_mediterranean_climate_scatter_plot_149",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲氣候類型判讀：溫帶地中海型氣候特徵（夏乾冬雨、最冷月大於 0°C）與散布圖判讀（義大利南部）",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲氣候散布圖【夏乾冬雨 vs 各地氣候比對】秒殺金律！\n1. **看圖判讀季節溫雨特徵（歐洲位於北半球）**：\n   - ☀️ **夏季（6、7月）**：氣溫高達 23°C～26°C，但月降水量僅 10～15 mm（**高溫炎熱且極度乾燥**）。\n   - 🌧️ **冬季（11、1月）**：氣溫約 10°C～14°C（**溫和不結冰**），月降水量高達 55～90 mm（**降雨主要集中在冬季**）。\n   - 核心氣候特徵：標準的【**夏乾冬雨 ＝ 溫帶地中海型氣候**】！\n2. **歐洲各地氣候配對辨析**：\n   - **義大利南部 (D)**：地處南歐地中海沿岸，屬典型溫帶地中海型氣候，完美吻合！\n   - **挪威北部 (A)**：寒帶/副極地氣候，冬季酷寒冰凍（遠低於 0°C），不可能達 10°C。\n   - **捷克東部 (B)**：溫帶大陸性氣候，為「夏雨冬乾」，與圖中冬雨夏乾截然相反。\n   - **瑞士東南部 (C)**：阿爾卑斯山高地氣候，冬季氣溫酷寒常年積雪結冰。\n3. **秒殺總結**：看到「6、7月雨最少，11、1月雨最多」，直覺鎖定地中海沿岸（義大利南部）！",
    "stem": "附圖是歐洲某測站長時間統計的平均月均溫及月降水量資料，依據圖中資訊判斷，該測站最可能設在下列何處？\n\n○ (A) 挪威北部\n○ (B) 捷克東部\n○ (C) 瑞士東南部\n○ (D) 義大利南部",
    "answer": "(D) 義大利南部",
    "diagramUrl": "assets/questions/q_soc_geo_mediterranean_climate_scatter_plot_149.png",
    "solution": "義大利南部（本題正解）：位於南歐地中海核心區，夏季受副熱帶高壓籠罩炎熱乾燥，冬季受西風帶南移影響溫和多雨，為標準溫帶地中海型氣候！ 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "義大利南部（本題正解）：位於南歐地中海核心區，夏季受副熱帶高壓籠罩炎熱乾燥，冬季受西風帶南移影響溫和多雨，為標準溫帶地中海型氣候！ 故選 (D)。"
  },
  {
    "id": "q_soc_geo_europe_climate_zones_jungfrau_150",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲五天氣候類型空間分布圖判讀：瑞士阿爾卑斯山脈（戊：高地氣候）與少女峰冰河登山鐵路",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲氣候分區地圖【五大代號空間對照】秒殺表！\n1. **地圖各代號氣候分區定位**：\n   - 🌬️ **甲 ＝ 溫帶海洋性氣候**：西歐沿海（英國、法國、德國西部），受盛行西風與北大西洋暖流影響，全年有雨、冬溫夏涼。\n   - 🌾 **乙 ＝ 溫帶大陸性氣候**：東歐平原與俄羅斯，深居內陸，夏雨冬乾、年溫差大。\n   - ❄️ **丙 ＝ 寒帶/副極地氣候**：北歐斯堪地那維亞半島北部與俄羅斯北極海沿岸，緯度高、酷寒長冬。\n   - 🍊 **丁 ＝ 溫帶地中海型氣候**：南歐三大半島（伊比利、義大利、巴爾幹）沿岸，夏乾冬雨。\n   - 🏔️ **戊 ＝ 高地氣候（阿爾卑斯山脈）**：中南歐橫亙之高山，氣候隨高度垂直遞減，終年積雪、冰河發育。\n2. **破題關鍵線索**：\n   - 題幹明確指出「**瑞士**」、「**少女峰登山鐵路**」、「**冰河底下穿越岩壁**」。\n   - 瑞士國土約 60% 坐落於阿爾卑斯山脈，少女峰更是阿爾卑斯山著名高峰（標高 4,158 公尺），毫無疑問屬於 **(戊) 高地氣候區**！",
    "stem": "歐洲介於 35°N～70°N 之間，氣候大致南熱北冷、西溼東乾，附圖為歐洲氣候類型分布圖，請問：\n瑞士的少女峰登山鐵道於 1986 年動工，由於有 3/4 的路段是從冰河底下建隧道穿越岩壁，因此工程十分艱鉅，費時 16 年才正式通車。上述的鐵道最可能分布於圖中哪一氣候區？\n\n○ (A) 甲\n○ (B) 丙\n○ (C) 丁\n○ (D) 戊",
    "answer": "(D) 戊",
    "diagramUrl": "assets/questions/q_soc_geo_europe_climate_zones_jungfrau_150.png",
    "solution": "）：分布於中南歐的阿爾卑斯山脈，地勢高聳，垂直氣候特徵顯著，高海拔區終年積雪、冰河發育。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "）：分布於中南歐的阿爾卑斯山脈，地勢高聳，垂直氣候特徵顯著，高海拔區終年積雪、冰河發育。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_russia_st_petersburg_map_148",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "俄羅斯主要城市空間分布與歷史地理定位：聖彼得堡（面向西方的窗口/波羅的海門戶）vs 莫斯科 vs 海參崴",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：俄羅斯關鍵門戶港口【空間位置 vs 歷史代名詞】秒殺口訣！\n1. **🇪🇺「面向西方的窗口」＝ 聖彼得堡（代號 甲）**：\n   - 位置：西北角芬蘭灣、瀕臨 **波羅的海**。\n   - 特徵：曾為沙俄首都（1712～1918年）、彼得大帝西化之都、彼得夏宮與冬宮所在地。\n2. **🌏「面向東方的窗口」＝ 海參崴（符拉迪沃斯托克，代號 丁）**：\n   - 位置：遠東太平洋沿岸（日本海側），西伯利亞大鐵路終點。\n3. **其餘代號快速定位防呆**：\n   - **乙**：瀕臨 **裏海**（世界最大內陸湖，非波羅的海）。\n   - **丙**：深居 **西伯利亞內陸腹地**（不靠海）。\n4. **關鍵破題字眼**：看到「波羅的海」、「彼得夏宮」、「面向西方窗口」，直奔西北角甲點（聖彼得堡）！",
    "stem": "某城市曾為俄羅斯的首都，歷史悠久，許多建築物被列入世界文化遺產，如彼得夏宮。再加上其瀕臨波羅的海，因此成為重要的港口，被稱為俄羅斯「面向西方的窗口」。上述城市應為附圖中何者？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(A) 甲",
    "diagramUrl": "assets/questions/q_soc_geo_russia_st_petersburg_map_148.png",
    "solution": "）：位於俄羅斯西北部東歐平原頂端、波羅的海芬蘭灣沿岸，正是聖彼得堡！ 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "）：位於俄羅斯西北部東歐平原頂端、波羅的海芬蘭灣沿岸，正是聖彼得堡！ 故選 (A)。"
  },
  {
    "id": "q_soc_geo_russia_export_pie_chart_oil_gas_147",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "俄羅斯出口商品結構與經濟發展問題：化石能源與原物料高度依賴（易受國際油價波動影響）",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：俄羅斯經濟結構【資源導向 vs 國際油價脆弱性】秒殺金律！\n1. **看圖判讀出口商品結構（能源佔比過半）**：\n   - 石油（43.4%）＋ 天然氣（10.4%）＋ 煤（5.6%）＝ **近 60% 均為化石能源**！\n   - 若加上礦產與原料（生鋁、鐵合金、肥料等），出口高度集中於初級資源。\n2. **⚠️ 經濟發展最大隱患：極易受「國際油價波動」劇烈影響**：\n   - 國家財政與外匯收入過度仰賴能源外銷；一旦國際油價大跌或面臨國際制裁禁運，國家經濟將遭受毀滅性打擊（選 C）。\n3. **常見干擾選項反向辨析**：\n   - 俄羅斯是資源大國：煤鐵鋁礦極其豐富，**不缺重工業原料**（A 錯）。\n   - 俄羅斯是產油氣大國：天然氣產量與出口量名列全球前茅，**絕非仰賴進口**（D 錯）。\n   - 俄羅斯歐洲部分南部黑土帶肥沃廣大，是世界主要小麥出口國（B 錯）。",
    "stem": "俄羅斯不僅是全球重要的能源出口國，也是 OPEC 以外的主要原油輸出國之一，附圖是 2024 年俄羅斯主要出口商品比例圖，由圖中資料判斷，俄羅斯的經濟發展可能會遇到下列何項問題？\n\n○ (A) 缺乏發展重工業的原料\n○ (B) 糧食作物空間受到壓縮\n○ (C) 易受國際油價波動影響\n○ (D) 天然氣能源多仰賴進口",
    "answer": "(C) 易受國際油價波動影響",
    "diagramUrl": "assets/questions/q_soc_geo_russia_export_pie_chart_oil_gas_147.png",
    "solution": "1. 第一步：判讀 2024 年俄羅斯主要出口商品比例圓餅圖： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 第一步：判讀 2024 年俄羅斯主要出口商品比例圓餅圖： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_eastern_orthodox_church_onion_dome_145",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲宗教派別與建築特色：東正教洋蔥式圓頂教堂（莫斯科/東歐）vs 天主教哥德式（巴黎）vs 基督新教簡約風（倫敦/鹿特丹）",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲三大基督教派別【建築風格 vs 分布城市】秒殺口訣！\n1. **看圖識教派：洋蔥式屋頂 ＝ 東正教（莫斯科 / 東歐）**：\n   - 附圖為簇擁圓潤的「**洋蔥頭圓頂（Onion Dome）**」，是東正教最鮮明的建築圖騰（如莫斯科紅場聖巴希爾大教堂）。\n   - ❄️ **氣候適應智慧**：俄羅斯冬季嚴寒暴雪，陡峭圓滑的洋蔥圓頂可防止積雪過厚壓垮屋頂。\n2. **歐洲三大教派建築特徵速記表**：\n   - 🧅 **東正教**：**洋蔥式圓頂**、色彩繽紛 ⟹ **東歐、俄羅斯（代表城市：莫斯科 (D)）**。\n   - 🏹 **天主教**：**哥德式尖塔**、飛扶壁、彩繪玻璃花窗 ⟹ **南歐、西歐（代表城市：巴黎 (B)、羅馬）**。\n   - 🧱 **基督新教**：**外觀簡樸**、內部無華麗雕像 ⟹ **西北歐、北歐（代表城市：倫敦 (A)、鹿特丹 (C)）**。\n3. **考點秒殺**：看到洋蔥頭建築，直覺鎖定東正教重鎮「莫斯科」！",
    "stem": "歐洲的宗教信仰以基督教為主，而基督教又分為不同派別，其教堂建築風格也各有不同。附圖為其中一個派別的傳統特色建築，這類風格的教堂在歐洲哪個城市最為常見？\n\n○ (A) 倫敦\n○ (B) 巴黎\n○ (C) 鹿特丹\n○ (D) 莫斯科",
    "answer": "(D) 莫斯科",
    "diagramUrl": "assets/questions/q_soc_geo_eastern_orthodox_church_onion_dome_145.png",
    "solution": "ome）】，此為東正教（Eastern Orthodox）最著名的代表性建築風格（最具代表性即為俄羅斯莫斯科紅場上的聖巴希爾大教堂）。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "ome）】，此為東正教（Eastern Orthodox）最著名的代表性建築風格（最具代表性即為俄羅斯莫斯科紅場上的聖巴希爾大教堂）。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_russia_trans_siberian_railway_taiga_146",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "俄羅斯自然環境與西伯利亞大鐵路：亞寒帶針葉林氣候（泰加林 Taiga）與鐵路走線緯度考點",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：西伯利亞鐵路三大高頻考點與植被空間配對！\n1. **西伯利亞鐵路沿線主力景觀 ＝ 一望無際的針葉林（泰加林 Taiga）**：\n   - 鐵路橫貫俄羅斯南部的溫帶大陸性/亞寒帶針葉林氣候帶，窗外最普遍的景致即是針葉林海。\n2. **⚠️ 致命陷阱一：西伯利亞鐵路「未通過北極圈」**：\n   - 北部永久凍土深厚、氣候極端酷寒，因此鐵路刻意避開，修建在氣候相對溫和、人口與資源較集中的「西伯利亞南部」。\n   - 全線位於北極圈（66.5°N）以南，窗外**不可能**看見北極圈內的苔原（選項 A 錯誤）。\n3. **⚠️ 致命陷阱二：氣候植被空間配對**：\n   - 🌴 **棗椰樹**：耐乾熱，是熱帶與副熱帶乾燥氣候（西亞阿拉伯、北非綠洲）特產，寒冷俄羅斯絕不可能有！\n   - 🏛️ **地中海白色建築**：分布於南歐夏乾冬雨的地中海沿岸（反射夏日豔陽），俄羅斯未瀕臨地中海！",
    "stem": "俄羅斯的發展深受氣候條件的限制，隨著西伯利亞鐵路通車後，豐富多樣的環境特徵才一一揭露在世人的眼前，若乘客搭乘西伯利亞鐵路旅行，最有可能在窗外看見下列何種景致？\n\n○ (A) 北極圈內的苔原\n○ (B) 一望無際的針葉林\n○ (C) 布滿平原的棗椰樹\n○ (D) 地中海沿岸的白色建築",
    "answer": "(B) 一望無際的針葉林",
    "diagramUrl": "",
    "solution": "1. 第一步：分析西伯利亞鐵路的地理位置與走向： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 第一步：分析西伯利亞鐵路的地理位置與走向： 故選 (B)。"
  },
  {
    "id": "q_soc_geo_europe_glacial_vs_ria_coast_144",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲冰河地形 vs 沉降海岸地形：峽灣（冰河 U 型谷）與谷灣（河流 V 型谷）成因嚴格對比",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：海岸與冰河地形【峽灣 vs 谷灣】一字之差成因大對決！\n1. **「峽灣」與「谷灣」成因千萬別混淆**：\n   - ❄️ **峽灣（Fjord）＝ 冰河侵蝕（U 型谷）＋ 海水淹沒**：\n     - 特徵：兩岸懸崖峭壁非常陡峭、谷底平水極深、狹長延伸。\n     - 代表：挪威沿海、智利南部、紐西蘭南島。\n   - 🌊 **谷灣（Ria）＝ 河流侵蝕（V 型谷）＋ 海水淹沒（沉降海岸）**：\n     - 特徵：丘陵谷地被海水淹沒，海岸曲折呈樹枝狀分岔、坡度較緩。\n     - 代表：義大利半島、西班牙西北部、台灣東北角基隆。\n2. **歐洲冰河遺跡地理分布速記**：\n   - **北歐平原與半島（大陸冰河）**：芬蘭冰蝕湖（千湖國）、挪威峽灣。\n   - **中南歐高山（山岳冰河）**：阿爾卑斯山角峰、U 型谷、冰斗。\n   - **南歐地中海沿岸（未受冰河侵蝕）**：義大利半島海岸為河流侵蝕形成的「谷灣」，與冰河作用毫無關係，秒殺 (C)！",
    "stem": "歐洲曾經被大範圍的冰河所覆蓋，留下許多冰河遺跡，下列哪個地理景觀的形成與冰河作用的關係最不密切？\n\n○ (A) 芬蘭的冰蝕湖\n○ (B) 挪威的峽灣\n○ (C) 義大利半島的谷灣地形\n○ (D) 阿爾卑斯山的 U 型谷",
    "answer": "(C) 義大利半島的谷灣地形",
    "diagramUrl": "",
    "solution": "義大利半島的谷灣地形（關係最不密切，本題正解）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "義大利半島的谷灣地形（關係最不密切，本題正解）： 故選 (C)。"
  },
  {
    "id": "q_math_parallel_area_ratio_adef_abc_143",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截線段性質與相似三角形面積比：平行四邊形面積分割與相似三角形面積平方比求解",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何面積比【相似平方比 vs 同高底邊比】秒殺對比！\n1. **相似三角形面積比 ＝ 邊長「平方比」（切記平方！）**：\n   - 看到 BE : CE ＝ 3 : 5，若求 △BDE 與 △ABC 的面積比，邊長比是 3 : (3＋5) ＝ 3 : 8。\n   - ⚠️ **常犯盲點**：千萬不要直接把邊長比 3 : 8 當成面積比（誤選 B）！面積比必須是 (3/8)² ＝ 9/64！\n2. **免連輔助線的【扣除法】最快最不易出錯**：\n   - △BDE 面積佔全體 △ABC 的 (3/8)² ＝ 9/64。\n   - △CEF 面積佔全體 △ABC 的 (5/8)² ＝ 25/64。\n   - 平行四邊形 ADEF ＝ 1 － 9/64 － 25/64 ＝ 30/64 ＝ 15/32！\n   - 一行算式直接秒殺 (D)！\n3. **輔助線法注意：平行四邊形有「兩塊」全等三角形**：\n   - 若連線段 AE，四邊形 ADEF 是由 △ADE 與 △AEF 兩塊組成（15r ＋ 15r ＝ 30r），切莫漏乘 2！",
    "stem": "如右圖，在 △ABC 中，D、E、F 分別為 線段 AB、線段 BC、線段 AC 邊上的點。若 線段 DE // 線段 AC，線段 EF // 線段 AB，且 線段 BE : 線段 CE ＝ 3 : 5，則四邊形 ADEF 和 △ABC 的面積比為何？\n\n○ (A) 3 : 5\n○ (B) 5 : 8\n○ (C) 11 : 25\n○ (D) 15 : 32",
    "answer": "(D) 15 : 32",
    "diagramUrl": "assets/questions/q_math_parallel_area_ratio_adef_abc_143.png",
    "solution": "E // 線段 AC，由同位角相等可得： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "E // 線段 AC，由同位角相等可得： 故選 (D)。"
  },
  {
    "id": "q_math_similar_triangle_parallel_ef_bc_141",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與雙重相似形：沙漏型相似（△ABE∼△CDE）與金字塔型相似（△DEF∼△DBC）連鎖求解",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何求線段長的【雙重相似形連鎖比例】破題口訣！\n1. **第一重：沙漏形相似（找上下邊長比）**：\n   - 線段 AB // 線段 CD ⟹ 內錯角相等，故 △ABE ∼ △CDE（AA 相似）。\n   - 對應邊成比例：BE : DE = AB : CD = 3 : 5。\n2. **第二重：金字塔形相似（找側邊與底邊比）**：\n   - 線段 EF // 線段 BC ⟹ 同位角相等，故 △DEF ∼ △DBC（AA 相似）。\n   - ⚠️ **致命盲點（切勿搞錯分子分母與頂點出發方向）**：\n     - 金字塔由頂點 D 出發，對應比例是 **DE : BD**，而非 BE : BD，更不是 BE : DE！\n     - 整條線段 BD = BE ＋ DE = 3 ＋ 5 = 8，故 DE : BD = 5 : 8！\n3. **列式秒殺**：\n   - EF : BC = DE : BD ⟹ EF : 6 = 5 : 8 ⟹ EF = (6 × 5) ÷ 8 = 30/8 = 15/4！",
    "stem": "如右圖，在 △ABC 和 △DCB 中，線段 AB // 線段 CD，E、F 兩點分別在 線段 BD、線段 CD 上，且 線段 EF // 線段 BC。若 線段 AB = 3，線段 BC = 6，線段 CD = 5，則 線段 EF 的長度為何？\n\n○ (A) 15/4\n○ (B) 9/2\n○ (C) 4\n○ (D) 5",
    "answer": "(A) 15/4",
    "diagramUrl": "assets/questions/q_math_similar_triangle_parallel_ef_bc_141.png",
    "solution": "B // 線段 CD，AC 與 BD 為相交於 E 點的兩條截線。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "B // 線段 CD，AC 與 BD 為相交於 E 點的兩條截線。 故選 (A)。"
  },
  {
    "id": "q_math_similar_triangle_unit_grid_sss_142",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "網格中的相似形判別：利用畢氏定理求三邊長比例（SSS 相似性質）",
    "uploadDate": "2026-10-10",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何網格題的【SSS 相似三邊比值】秒殺金律！\n1. **絕不可憑肉眼視覺猜測**：\n   - 網格中的三角形方向旋轉、大小縮放，肉眼容易產生視覺錯覺（誤選 C 或 D）。\n2. **畢氏定理求出原圖三邊長並「由短到長」排隊**：\n   - 設小正方形邊長為 1：\n     - 最短邊 AB ＝ √(1² ＋ 1²) ＝ √2\n     - 次長邊 BC ＝ 3 － 1 ＝ 2\n     - 最長邊 AC ＝ √(3² ＋ 1²) ＝ √10\n   - 三邊長比例化簡：√2 : 2 : √10 ＝ **1 : √2 : √5**（全體同除以 √2）。\n3. **快速檢驗選項（只要三邊比為 1 : √2 : √5 必相似）**：\n   - 選項 (B) 的三邊長：底邊為 1，兩斜邊分別為 √(1² ＋ 1²) ＝ √2，以及 √(2² ＋ 1²) ＝ √5！\n   - 三邊長由短至長恰為 **1 : √2 : √5**，完全符合 SSS 相似性質，秒殺 (B)！",
    "stem": "如右圖，三個小正方形的邊長均為 1，則下列圖形中，何者和 △ABC 相似？\n\n○ (A) 圖形 (A)\n○ (B) 圖形 (B)\n○ (C) 圖形 (C)\n○ (D) 圖形 (D)",
    "answer": "(B) 圖形 (B)",
    "diagramUrl": "assets/questions/q_math_similar_triangle_unit_grid_sss_142.png",
    "solution": "＝ √[(1 － 0)² ＋ (0 － 1)²] ＝ √(1 ＋ 1) ＝ √2 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-10",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "＝ √[(1 － 0)² ＋ (0 － 1)²] ＝ √(1 ＋ 1) ＝ √2 故選 (B)。"
  },
  {
    "id": "q_sci_geology_rocks_granite_marble_slate_sedimentary_140",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "岩石分類與特徵：火成岩（花崗岩深成岩粗粒）、沉積岩（顆粒大小：礫岩＞砂岩＞頁岩）、變質岩（石灰岩變大理岩、頁岩變板岩）",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：岩石三大類別（火成岩、沉積岩、變質岩）必考盲點秒殺表！\n1. **火成岩冷卻速率與結晶大小（(A) 選項致命陷阱）**：\n   - **深成岩（如花崗岩）**：在**地底深處**冷卻 $\\implies$ 冷卻速度**「緩慢」** $\\implies$ 礦物結晶有充分時間生長 $\\implies$ 結晶**粗大、肉眼清晰可見**！\n   - **火山岩（如安山岩、玄武岩）**：在**地表**噴出冷卻 $\\implies$ 冷卻速度**「快速」** $\\implies$ 結晶**細小或呈隱晶質**。\n2. **常見變質岩對照表（(B)、(C) 選項考點）**：\n   - **石灰岩（沉積岩）** $\\xrightarrow{高溫高壓}$ **大理岩（變質岩）**：質地較軟、具美麗花紋，常用於雕刻與建材（花蓮太魯閣盛產！）。主要成分為碳酸鈣，遇稀鹽酸會冒泡！\n   - **頁岩（沉積岩）** $\\xrightarrow{高溫高壓}$ **板岩（變質岩）** $\\xrightarrow{更高溫壓}$ **片岩**：板岩具有良好的劈理（片理），易剝成平整薄板，原住民（排灣族、魯凱族）以此建造傳統**「石板屋」**！注意：板岩是**「變質岩」**，不是沉積岩！\n3. **沉積岩顆粒粒徑口訣（(D) 選項陷阱）**：\n   - 由大到小排序：**礫岩（＞2 mm）＞ 砂岩（0.0625～2 mm）＞ 頁岩／泥岩（＜0.0625 mm）**！（頁岩顆粒最細，非排在中間！）",
    "stem": "有關岩石的敘述，下列何者正確？\n\n○ (A) 花崗岩中常可見顆粒較粗的礦物結晶，是岩漿快速冷卻所形成\n○ (B) 臺灣東部常見的大理岩有美麗多變的花紋，是良好的建築材料\n○ (C) 板岩是由沉積物層層疊置形成的，是原住民常用於建築石板屋之石材\n○ (D) 沉積岩所含顆粒由大到小分類，依序為礫岩＞頁岩＞砂岩",
    "answer": "(B) 臺灣東部常見的大理岩有美麗多變的花紋，是良好的建築材料",
    "diagramUrl": "",
    "solution": "1. 岩石三大類別核心成因回顧： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 岩石三大類別核心成因回顧： 故選 (B)。"
  },
  {
    "id": "q_sci_river_erosion_transportation_upper_lower_stream_139",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "審題不清",
    "concept": "河流地質作用：上游向下侵蝕加深河道（V型谷）與向源侵蝕加長 vs 中下游側蝕加寬曲流、濫採砂石引發回春侵蝕",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：河流侵蝕「三向發展」與上中下游特徵口訣！\n1. **河流侵蝕的三個方向與地形對照**：\n   - **向下侵蝕（下切）**：發生在**上游**（地勢陡峭、流速湍急、位能大），河道不斷**加深**，形成兩壁陡峭的 **V 型峽谷**、瀑布。\n   - **向側侵蝕（側蝕）**：發生在**中、下游**（坡度平緩、流速減慢），水流左右擺動沖刷凹岸，河道不斷**加寬**，形成蜿蜒曲流與寬闊谷地。\n   - **向源侵蝕（頭蝕）**：發生在**源頭端**，水流不斷向源頭切蝕倒退，使河流長度不斷**加長**（甚至引發河川襲奪）。\n2. **(C) 選項的致命陷阱**：\n   - 上游侵蝕力確實非常旺盛，但侵蝕的**主力方向是「向下（加深）」而非「向側（變寬）」**！因此上游河谷狹窄深峻（呈 V 型），絕非「變寬」！\n3. **(D) 選項高頻觀念——濫採砂石的連鎖效應**：\n   - 河床被大量盜採砂石 $\\implies$ 出現深坑窪地 $\\implies$ 局部侵蝕基準面相對下降 $\\implies$ 上游落差增大，激發更強烈的向下侵蝕與向源侵蝕（稱為「回春侵蝕」），容易淘空上游橋墩與護岸！",
    "stem": "有關河流侵蝕、搬運作用的敘述，下列何者錯誤？\n\n○ (A) 中、下游地區常因搬運作用可發現鵝卵石\n○ (B) 河流受侵蝕作用，會不斷加長、加深及加寬\n○ (C) 上游地區因為侵蝕力明顯，故河道呈現變寬的形態\n○ (D) 由於河床濫採砂石，會強化其上游河道的侵蝕現象",
    "answer": "(C) 上游地區因為侵蝕力明顯，故河道呈現變寬的形態",
    "diagramUrl": "",
    "solution": "錯誤（選此項）：上游地形坡度大、水流湍急，以強烈的「向下侵蝕」為主，因此河道呈現深狹的 V 型峽谷，使河道加深而非「變寬」；河道變寬是中下游側向侵蝕的特徵。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "錯誤（選此項）：上游地形坡度大、水流湍急，以強烈的「向下侵蝕」為主，因此河道呈現深狹的 V 型峽谷，使河道加深而非「變寬」；河道變寬是中下游側向侵蝕的特徵。 故選 (C)。"
  },
  {
    "id": "q_sci_river_estuary_sand_mining_coastline_erosion_138",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "審題不清",
    "concept": "河流沉積平衡與海岸線變遷：河道過度採取砂石導致出海口泥沙供應減少、海浪侵蝕使海岸線後退陸地縮小",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：海岸線「前進 vs 後退」的泥沙供需天平法則！\n1. **海岸線動態平衡核心邏輯**：\n   - **海岸線向海前進（陸地增加）**：入海泥沙沉積量 ＞ 海水波浪侵蝕量（沉積盛於侵蝕）。\n   - **海岸線向陸後退（陸地縮小，如本題）**：入海泥沙沉積量 ＜ 海水波浪侵蝕量（泥沙供給短缺或侵蝕加劇）。\n2. **四大選項「因果方向」嚴密檢驗**：\n   - **(A) 建防波堤、堆消波塊**：目的是削弱海浪能量以「減緩侵蝕、保護海岸」，並非造成海岸線大幅後退的根本原因。\n   - **(B) 上游集水區濫墾濫伐**：水土流失加劇，會使大量泥沙衝入河川，**出海口泥沙沉積反而「增加」**，海岸線應向海前進，與題意相反！\n   - **(C) 雨量過大引發土石流**：同樣會造成短時間內大量土石崩落被水流帶至下游沉積，出海口泥沙量大增，不致造成海岸線倒退。\n   - **(D) 中下游河道長期大量挖取砂石（正解）**：河床出現凹陷低窪，上游流下的泥沙優先被中下游窪地填補攔截，導致**輸送到出海口的砂石沉積量急遽減少**！海浪侵蝕大於泥沙補充，造成海岸線持續倒退，村落土地縮小！\n3. **常見相似考點延伸**：\n   - 上游興建水庫、攔砂壩：攔截泥沙，導致出海口泥沙減少，海岸線後退。\n   - 超抽地下水造成地層下陷：相對海平面上升，導致海岸線後退、海水倒灌。",
    "stem": "位在河流出海口附近的翰林村 80 年前離海岸線還有一段距離，現今的翰林村離海岸線愈來愈近（如圖所示），村裡可用土地面積明顯減少。下列哪一項因素，最可能造成海岸線產生此種變化？\n\n○ (A) 村民在海岸線附近建防波堤、堆消波塊\n○ (B) 河流上游集水區濫墾濫伐\n○ (C) 雨量過大，河流流域經常發生土石流\n○ (D) 中、下游河道長期大量挖取砂石",
    "answer": "(D) 中、下游河道長期大量挖取砂石",
    "diagramUrl": "assets/questions/q_sci_river_estuary_sand_mining_coastline_erosion_138.png",
    "solution": "正確（中、下游河道長期大量挖取砂石）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確（中、下游河道長期大量挖取砂石）： 故選 (D)。"
  },
  {
    "id": "q_sci_geology_external_forces_river_running_water_137",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地表地質作用與外營力：流水（河流）為改變地球外貌分布最廣、最主要的外營力",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：四大外營力對比與「地表最強雕刻師」！\n1. **為什麼河流是「最主要」的外營力？**：\n   - **流水（河流）的分布最廣、作用時間最長、搬運總量最大**！\n   - 全球降雨匯聚成河，從高山源頭一路奔流至大海。河流的上游（以**侵蝕**下切為主，形成 V 型峽谷、瀑布）、中游（侵蝕與搬運沉積並重，形成蜿蜒曲流）、下游（以**沉積**為主，形成沖積扇、泛濫平原、三角洲），無時無刻不在大規模重塑陸地地貌。\n2. **其他外營力的侷限性分析（常見陷阱）**：\n   - **(A) 風**：只在**乾燥少雨、植被稀疏的沙漠或海邊沙灘**才是主要力量（如風蝕蘑菇石、風稜石、沙丘）。\n   - **(C) 冰川**：侵蝕力最強（能刨蝕堅硬岩盤形成巨大的 U 型谷、刃嶺、角峰），但**僅局限於高緯度極地或高海拔雪線以上地區**，覆蓋面積有限。\n   - **(D) 海浪**：作用劇烈，但**僅局限在陸地與海洋交界的狹窄「海岸帶」**（形成海蝕崖、海蝕洞、海蝕平台、沙灘）。\n3. **地表營力總結雙向記憶**：\n   - **內營力**（地球內部能量，如板塊運動、造山運動、火山爆發、地震）：使地表高低起伏加劇（造高地貌）。\n   - **外營力**（太陽輻射＋重力，如流水、風、冰川、波浪之風化、侵蝕、搬運、沉積）：使地表趨於平坦削平（削高填低），其中以**河流（流水）**影響範圍最廣、最為關鍵！",
    "stem": "改變地球外貌最主要的外營力為何？\n\n○ (A) 風\n○ (B) 河流\n○ (C) 冰川\n○ (D) 海浪",
    "answer": "(B) 河流",
    "diagramUrl": "",
    "solution": "河流（流水）的作用（最主要力量）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "河流（流水）的作用（最主要力量）： 故選 (B)。"
  },
  {
    "id": "q_soc_phoenician_mediterranean_navigation_alphabet_136",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "古代地中海與西亞文明：腓尼基人的航海經商、地中海殖民據點（迦太基）與改良埃及文字創造西方拼音字母源頭",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：秒殺地中海古文明地圖線索與三大古民族貢獻！\n1. **看圖秒殺民族：航海起點在「地中海東岸」＋向西縱橫全地中海 ＝ 腓尼基人**：\n   - **地理位置**：發源於地中海東岸（黎凡特地區，今黎巴嫩一帶），著名城邦有提爾（Tyre）、西頓（Sidon）。\n   - **經濟與擴張**：因地形背山面海、缺乏耕地，發展為傑出的「航海經商民族」。他們在地中海沿岸建立密集貿易據點與殖民城邦（例如北非著名的**迦太基**），航線甚至穿過直布羅陀海峽航向大西洋！\n   - **最偉大文化成就**：為方便商業記帳，改良古埃及象形文字，簡化創立了 22 個**「腓尼基字母」**。傳入希臘後演變為希臘字母、羅馬拉丁字母，成為**現代西方所有拼音字母的源頭**！\n2. **混淆選項速配對照表（必考考點）**：\n   - **(A) 波斯帝國（或亞歷山大帝國、羅馬帝國）**：歷史上第一個橫跨歐亞非三洲的大帝國是西元前 6 世紀由居魯士、大流士建立的**波斯帝國**（非航海商業民族）。\n   - **(B) 巴比倫帝國（漢摩拉比王）**：位於美索不達米亞（兩河流域），刻於黑色玄武岩石柱上的法典奉行「以牙還牙，以眼還眼」同態復仇原則。\n   - **(C) 古埃及王國（古王國時期）**：定都孟斐斯，尼羅河流域法老興建金字塔作為陵寢，象徵至高無上的神權與王權。",
    "stem": "一本上古史書籍中，有某一民族的航海路線，內容如圖所示。下列敘述何者符合此民族的成就？\n\n○ (A) 建立首個橫跨歐亞非三洲的大帝國\n○ (B) 編纂漢摩拉比法典，強調報復觀念\n○ (C) 興建金字塔顯示國力強盛與王權強大\n○ (D) 傳播文字，使其成為西方字母的源頭",
    "answer": "(D) 傳播文字，使其成為西方字母的源頭",
    "diagramUrl": "assets/questions/q_soc_phoenician_mediterranean_navigation_alphabet_136.png",
    "solution": "正確（傳播文字，使其成為西方字母的源頭）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確（傳播文字，使其成為西方字母的源頭）： 故選 (D)。"
  },
  {
    "id": "q_soc_thutmose_iii_egypt_euphrates_mesopotamia_135",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "古代西亞與埃及歷史：埃及新王國圖特摩斯三世對外擴張版圖、幼發拉底河與兩河流域（美索不達米亞）地理關聯",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：抓準地理地標「幼發拉底河」秒殺版圖極東！\n1. **核心地理地標連結**：\n   - **幼發拉底河（Euphrates）**與**底格里斯河（Tigris）**共同孕育了古代著名的**「兩河流域（美索不達米亞文明）」**。\n   - 題幹明確指出「向東占據了**幼發拉底河以西**的土地」，因此圖特摩斯三世帝國向東擴張的極限範圍即抵達**兩河流域**西緣！\n2. **歷史背景常考知識點補充**：\n   - **圖特摩斯三世（Thutmose III）**：古埃及**新王國時期**第十八王朝法老，戰功赫赫，號稱「古埃及的拿破崙」。他向南征服努比亞（達尼羅河第四瀑布），向東北跨越西奈半島遠征敘利亞與巴勒斯坦，勢力直抵幼發拉底河畔。\n   - **西臺人（赫梯人）**：位於**小亞細亞（今土耳其）**，為世界上最早掌握冶鐵技術並使用鐵製兵器的民族，亦向其稱臣。\n3. **常見混淆地理區域排除**：\n   - **(A) 伊朗高原**：位於兩河流域以東（波斯人、米底人興起處），埃及勢力從未到達此處。\n   - **(B) 印度半島**：在南亞更東方（印度河、恆河流域），遠在埃及勢力之外。\n   - **(D) 小亞細亞**：位於黑海與地中海之間的安納托利亞高原（西臺人本土地理位置），位在埃及的「北邊」而非版圖最「東邊」。",
    "stem": "圖特摩斯三世是西元前十五世紀統治尼羅河流域的領袖。在位期間，他積極對外擴張，南邊領土直達第四瀑布，向東占據了幼發拉底河以西的土地，國力興盛。而擁有世界最早煉鐵技術的西臺人，也不得不向他稱臣納貢。\n\n請問：文中這位領袖在位期間，其版圖最東應到達何處？\n\n○ (A) 伊朗高原\n○ (B) 印度半島\n○ (C) 兩河流域\n○ (D) 小亞細亞",
    "answer": "(C) 兩河流域",
    "diagramUrl": "",
    "solution": "正確（兩河流域）：幼發拉底河為兩河流域之西側大河，占據幼發拉底河以西土地代表其版圖東界已抵達兩河流域西緣，完全吻合題目描述！ 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確（兩河流域）：幼發拉底河為兩河流域之西側大河，占據幼發拉底河以西土地代表其版圖東界已抵達兩河流域西緣，完全吻合題目描述！ 故選 (C)。"
  },
  {
    "id": "q_soc_byzantine_eastern_roman_empire_hagia_sophia_134",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲歷史與中古文明：東羅馬帝國（拜占庭帝國）首都君士坦丁堡/拜占庭、查士丁尼大帝修築聖索菲亞大教堂與西元 1453 年滅亡歷程",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：秒殺西方歷史四大帝國滅亡年代與特徵！\n1. **三大關鍵線索精準鎖定「東羅馬帝國（拜占庭帝國）」**：\n   - **線索一：首都拜占庭**：羅馬皇帝君士坦丁將首都東遷至「拜占庭（改名君士坦丁堡，今土耳其伊斯坦堡）」。\n   - **線索二：聖索菲亞大教堂**：6 世紀查士丁尼大帝下令修築，融合圓頂與馬賽克鑲嵌藝術，為拜占庭建築的顛峰代表。\n   - **線索三：十五世紀中葉滅亡**：西元 **1453 年**（15 世紀中葉）被**鄂圖曼土耳其帝國**蘇丹穆罕默德二世攻陷滅亡。\n2. **高頻混淆選項逐一破解**：\n   - **(A) 波斯帝國**：首都為蘇薩、波斯波利斯等，信仰拜火教（祆教），西元前 4 世紀被亞歷山大大帝所滅，與聖索菲亞大教堂無關。\n   - **(B) 羅馬帝國（未分裂前）**：西元 4 世紀末（395 年）狄奧多西一世死後分裂為東、西羅馬帝國。\n   - **(C) 西羅馬帝國**：首都為羅馬（後遷拉溫納），**西元 476 年（5 世紀末）**被日耳曼傭兵將領奧多亞塞所滅，時間遠早於 15 世紀中葉！",
    "stem": "立修上網查詢歐洲史上某個國家的資料，並將資料整理為下列三項重點：\n・首都位於拜占庭\n・修築聖索菲亞大教堂\n・十五世紀中葉滅亡\n\n請問：立修所查詢的國家應為下列何者？\n\n○ (A) 波斯帝國\n○ (B) 羅馬帝國\n○ (C) 西羅馬帝國\n○ (D) 東羅馬帝國",
    "answer": "(D) 東羅馬帝國",
    "diagramUrl": "",
    "solution": "正確（東羅馬帝國）：完全符合「定都拜占庭（君士坦丁堡）」、「查士丁尼修建聖索菲亞大教堂」與「1453 年亡於鄂圖曼土耳其」三大特徵。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確（東羅馬帝國）：完全符合「定都拜占庭（君士坦丁堡）」、「查士丁尼修建聖索菲亞大教堂」與「1453 年亡於鄂圖曼土耳其」三大特徵。 故選 (D)。"
  },
  {
    "id": "q_math_parallelogram_rhombus_diagonal_ratio_133",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行四邊形與菱形內接問題：利用平行線截比例線段與相似三角形性質（比值和為 1）求菱形邊長",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何內接菱形線段長的【黃金秒殺分比公式】！\n1. **「四邊分別平行兩對角線」必成兩組相似三角形**：\n   - 菱形四邊長相等，設邊長為 $x$（$MN = MQ = x$）。\n   - 在 △ABC 中，$MN // AC \\implies \\frac{BM}{AB} = \\frac{MN}{AC} = \\frac{x}{3}$。\n   - 在 △ABD 中，$MQ // BD \\implies \\frac{AM}{AB} = \\frac{MQ}{BD} = \\frac{x}{5}$。\n2. **秒殺核心：同一直線兩線段比值相加必為 1**：\n   - 因為 $M$ 在線段 $AB$ 上，所以 $\\frac{BM}{AB} + \\frac{AM}{AB} = 1$！\n   - 立刻列式：$\\frac{x}{3} + \\frac{x}{5} = 1 \\implies \\frac{8}{15}x = 1 \\implies x = \\frac{15}{8}$！\n3. **常見計算盲點提醒**：\n   - 別被繁複的對角線半長（$5/2$、$3/2$）繞暈，直接利用邊長比例和為 1，既快又不易算錯！",
    "stem": "如圖，在平行四邊形 ABCD 中，線段 AC、線段 BD 交於 O 點，M、N、P、Q 四點分別在線段 AB、線段 BC、線段 CD、線段 DA 上，且菱形 MNPQ 的四邊分別平行於線段 AC 和線段 BD。若線段 AC = 3，線段 BD = 5，則菱形 MNPQ 的邊長為何？",
    "answer": "15/8",
    "diagramUrl": "assets/questions/q_math_parallelogram_rhombus_diagonal_ratio_133.png",
    "solution": "1. 破題核心思路（平行線截比例線段與兩法詳解）：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 破題核心思路（平行線截比例線段與兩法詳解）："
  },
  {
    "id": "q_math_triangle_right_angle_similarity_df_132",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "相似三角形判定與應用：利用直角與同角的餘角相等（AA 相似性質）建立對應邊成比例求線段長",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何求線段長的【母子相似與餘角轉換】破題口訣！\n1. **「直角＋共角/餘角」必有 AA 相似**：\n   - 題目出現多個 90° 直角時，立刻尋找**「互餘關係」**：\n     - 在直角 △ABC 中：∠A ＋ ∠B = 90° ⟹ ∠B = 90° － ∠A。\n     - 在直角 △ADF 中：∠A ＋ ∠F = 90° ⟹ ∠F = 90° － ∠A。\n     - 導出關鍵等角：**∠F = ∠B**！\n2. **鎖定相似三角形與對應邊順序（嚴禁對錯邊）**：\n   - △FDA 與 △BDE 中：\n     - ∠FDA = ∠BDE = 90°\n     - ∠F = ∠B\n     - 故 **△FDA ∼ △BDE（AA 相似）**！\n   - 對應邊成比例：**AD : DE = DF : BD**。\n3. **高頻計算粗心陷阱**：\n   - 線段 BD 的長度是 **AB － AD = 10 － 6 = 4**，千萬不要直接誤帶 AB = 10！",
    "stem": "如圖，在 △ABC 中，∠ACB = 90°，D 為線段 AB 上一點，作線段 DF 垂直線段 AB 且交線段 AC 的延長線於 F 點。若線段 AB = 10，線段 AD = 6，線段 DE = 2，則線段 DF 的長度為何？",
    "answer": "12",
    "diagramUrl": "assets/questions/q_math_triangle_right_angle_similarity_df_132.png",
    "solution": "1. 破題核心觀念（尋找直角互餘關係與 AA 相似性質）：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 破題核心觀念（尋找直角互餘關係與 AA 相似性質）："
  },
  {
    "id": "q_soc_alexander_great_eastern_campaign_hellenistic_131",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "希臘化時代與亞歷山大東征：馬其頓亞歷山大大帝東征（跨歐亞非至印度河流域）、希臘與東方文化融合及犍陀羅藝術對中國佛教之深遠影響",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：掌握西方上古歷史三大時期「希臘城邦 ➔ 希臘化時代 ➔ 羅馬帝國」！\n1. **破題關鍵定位詞**：\n   - 「**率軍把希臘文明帶至印度河流域**」＋「**開創希臘化時代**」＝ **亞歷山大（亞歷山大大帝）**！\n2. **亞歷山大東征路線與帝國版圖速記**：\n   - **發源**：希臘北方的**馬其頓王國**。\n   - **東征範圍**：橫跨**歐、亞、非三洲**，征服埃及（建立亞歷山大港/城）、滅波斯帝國，軍隊最遠抵達**印度河流域**（未進入恆河流域與中國本土）。\n3. **希臘化時代（Hellenistic Period）三大深遠影響**：\n   - **文化融合**：以希臘文化為基礎，深度融合西亞與埃及文化。\n   - **對東方影響（遠至中國）**：希臘雕刻寫實藝術與印度佛教結合產生「**犍陀羅藝術（希臘式雕像佛陀）**」，後經絲路傳入中國（如雲岡石窟、龍門石窟）。\n   - **對西方影響**：希臘化文明遺產直接孕育並塑造了地中海霸主——**羅馬帝國**的哲學、法律與建築文明。",
    "stem": "(二) 有位學者認為：「……此人率領軍隊，把希臘文明帶至印度河流域，使希臘化時代的藝術影響遠至中國。希臘文明的遺產在西方更為顯著，它塑造了控制整個地中海世界的羅馬帝國之文明。」請回答下列問題：\n\n37. 文中提到「此人率領軍隊，把希臘文明帶至印度河流域」，這應該是指何人的事蹟？",
    "answer": "亞歷山大（或稱亞歷山大大帝）",
    "diagramUrl": "",
    "solution": "故本題標準答案為：亞歷山大（或填：亞歷山大大帝）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "故本題標準答案為：亞歷山大（或填：亞歷山大大帝）。"
  },
  {
    "id": "q_soc_sparta_military_training_obstacle_race_130",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "古希臘城邦文明：斯巴達尚武精神與嚴格軍事體系 vs 雅典民主政治與奧林匹克運動會",
    "uploadDate": "2026-10-09",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：搞懂古希臘兩大核心城邦「斯巴達」與「雅典」的文化與制度差異！\n1. **斯巴達（Sparta）——尚武與軍事體育**：\n   - **核心特徵**：全民皆兵，實施極為嚴格的**軍事教育與體能鍛鍊**（男孩 7 歲起集體受訓，鍛鍊耐寒、耐飢與肉體極限；女性亦須強健體魄），以少數人口統治被征服的農奴（黑勞士）。\n   - **語意引申**：因其紀律嚴苛、生活克難、鍛鍊極限體能，現代常以「**斯巴達式（Spartan）**」形容高強度、刻苦磨練耐力與意志力的訓練或競賽（如斯巴達障礙跑）。\n2. **高頻混淆陷阱逐一排查**：\n   - **陷阱 (A) 為取悅神明舉辦運動會**：這是古代全希臘共同祭祀主神宙斯的「**奧林匹克運動會**」，非斯巴達單一城邦獨有特色，更非斯巴達詞義引申由來。\n   - **陷阱 (B) 所在地區多山崎嶇**：希臘全境普遍多山丘陵、平原狹小，這是城邦林立的共同地理背景，並非斯巴達以軍訓聞名的特殊地貌。\n   - **陷阱 (D) 將可能危害者流放出城邦**：此為**雅典**城邦所創立的「**陶片放逐法**」（防止獨裁僭主），屬於雅典民主政治特色，切勿張冠李戴！",
    "stem": "近年來，臺灣興起各項極限運動，斯巴達障礙賽被引進臺灣後，也受許多民眾歡迎，這項障礙賽是路跑加上軍事訓練關卡，有推進泥巴坑、攀登高牆、巨石挑戰等種類。請問：「斯巴達」這個城邦名稱被引申為挑戰體能、耐力及意志力競賽的原因可能為何？\n\n○ (A) 為取悅神明而舉辦運動會\n○ (B) 所在地區多山且地形崎嶇\n○ (C) 以實施嚴格軍事訓練聞名\n○ (D) 將可能危害者流放出城邦",
    "answer": "(C) 以實施嚴格軍事訓練聞名",
    "diagramUrl": "",
    "solution": "正確（本題正解）：斯巴達以「嚴苛的軍事訓練、尚武文化與超凡體能意志」聞名歷史，因此現代極限體能障礙競賽便以「斯巴達」為名，象徵參賽者需具備堅毅無畏的斯巴達戰士精神。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-09",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確（本題正解）：斯巴達以「嚴苛的軍事訓練、尚武文化與超凡體能意志」聞名歷史，因此現代極限體能障礙競賽便以「斯巴達」為名，象徵參賽者需具備堅毅無畏的斯巴達戰士精神。 故選 (C)。"
  },
  {
    "id": "q_bio_fermentation_substrate_sugar_yeast_128",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "酵素與受質概念及發酵作用：酵母菌進行酒精發酵時，受質（反應物）為「糖」，產物為「酒精與二氧化碳」，催化劑為「酵母菌體內的酵素」",
    "uploadDate": "2026-10-08",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：搞懂酵素催化三要素「受質、產物、酵素」！\n1. **「受質（反應物）」的本質**：被酵素特異性結合並進行催化分解或合成的**原料分子**，在釀酒發酵中是「**糖（葡萄糖）**」。\n2. **常見高頻混淆陷阱**：\n   - **酵母菌不是受質**：酵母菌是活體生物細胞，其體內合成並分泌「**酵素（催化劑）**」來促成反應。\n   - **酒精與二氧化碳是產物**：糖經酵母菌無氧發酵後所生成的物質為「**產物**」，絕非受質！\n3. **酒精發酵反應式直觀記憶**：\n   - 糖（受質原料） → 酒精 ＋ 二氧化碳（生成產物）［由酵母菌酵素催化］。",
    "stem": "在釀造的過程中，何者扮演「受質」的角色？\n\n○ (A) 糖\n○ (B) 酒精\n○ (C) 二氧化碳\n○ (D) 酵母菌",
    "answer": "(A) 糖",
    "diagramUrl": "",
    "solution": "正確（本題應選此項）：「糖」是提供發酵的原料物質，被酵素結合並催化轉化，扮演「受質（反應物）」的角色。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-08",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確（本題應選此項）：「糖」是提供發酵的原料物質，被酵素結合並催化轉化，扮演「受質（反應物）」的角色。 故選 (A)。"
  },
  {
    "id": "q_bio_coral_jellyfish_cnidaria_phylogeny_129",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "動物界的分類與親緣關係：刺絲胞動物門（珊瑚、水母、海葵、水螅之同門親緣判定與常見界級混淆）",
    "uploadDate": "2026-10-08",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：別被珊瑚的「植物般外表」欺騙，珊瑚是如假包換的「動物」！\n1. **珊瑚的真實身分**：珊瑚屬於真核生物中的「**動物界／刺絲胞動物門**」，具備刺絲胞能捕食，體內雖有共生藻，但珊瑚本體是動物！\n2. **各選項生物分類界門階層對比**：\n   - **藻類**：屬於「**原生生物界**」（真核單細胞或多細胞，行光合作用自營）。\n   - **草履蟲**：屬於「**原生生物界**」的原生動物（單細胞異營）。\n   - **蘚苔類**：屬於「**植物界**」（多細胞無維管束陸生植物）。\n   - **水母**：與珊瑚同屬於「**動物界／刺絲胞動物門**」，同門生物親緣關係最近！\n3. **刺絲胞動物門四大金剛必背**：\n   - 水母、海葵、珊瑚、水螅。",
    "stem": "請問珊瑚與下列哪一種生物的親緣關係最接近？\n\n○ (A) 藻類\n○ (B) 草履蟲\n○ (C) 蘚苔類\n○ (D) 水母",
    "answer": "(D) 水母",
    "diagramUrl": "",
    "solution": "1. 破題核心觀念（珊瑚的真實分類階層）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-08",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 破題核心觀念（珊瑚的真實分類階層）： 故選 (D)。"
  },
  {
    "id": "q_bio_cycad_gymnosperm_characteristics_127",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "植物的分類與構造：裸子植物（蘇鐵、松、杉、柏、銀杏）的特徵（具維管束、毬果、種子，但不開花、不結果）",
    "uploadDate": "2026-10-08",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：裸子植物有「種子」也有「毬果」，但「絕對沒有花朵和果實」！\n1. **蘇鐵的生物分類歸屬**：\n   - 蘇鐵屬於「**裸子植物**」（同類常見代表尚有：松樹、紅檜、扁柏、銀杏、杉木等）。\n2. **蘇鐵具備的演化特徵**：\n   - **具維管束**：有真正的根、莖、葉分化，體內有維管束運送水分與養分，屬於維管束植物。\n   - **具毬果**：生殖器官為鱗片組成的毬果（雄毬果、雌毬果），並非真正的花朵。\n   - **具種子**：胚珠直接生長於鱗片表面，受精後發育為「種子」，能產生種子散播繁殖。\n3. **蘇鐵絕對沒有的構造（破題關鍵）**：\n   - **無花朵**：花是被子植物獨有的繁殖構造，裸子植物「不開花」。\n   - **無果實**：缺乏子房包覆，種子裸露，因此裸子植物「不結果」。\n   - 故《花朵圖鑑》絕對不可能以蘇鐵作為主要介紹範例！",
    "stem": "下列為四本書的書名，每本書的書名分別顯示出所要介紹的內容，書中會列舉一些植物詳細說明其特徵，則哪一本書最不可能以蘇鐵作為這些植物的主要例子？〔110. 會考〕\n\n○ (A) 《花朵圖鑑》\n○ (B) 《種子的傳播》\n○ (C) 《毬果構造解析》\n○ (D) 《維管束植物簡介》",
    "answer": "(A) 《花朵圖鑑》",
    "diagramUrl": "",
    "solution": "最不可能（本題應選此項）：《花朵圖鑑》介紹具有真正「花」的被子植物（如杜鵑、百合、菊花等）。蘇鐵為裸子植物，只有毬果而無花朵構造，絕不可能以蘇鐵為例。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-08",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "最不可能（本題應選此項）：《花朵圖鑑》介紹具有真正「花」的被子植物（如杜鵑、百合、菊花等）。蘇鐵為裸子植物，只有毬果而無花朵構造，絕不可能以蘇鐵為例。 故選 (A)。"
  },
  {
    "id": "q_bio_cactus_angiosperm_flower_classification_126",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "植物的分類與構造：被子植物（開花結果、胚珠受子房保護）與裸子植物（具毬果、種子裸露無果實）之分類依據與適應特徵辨析",
    "uploadDate": "2026-10-08",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：植物分類看「生殖器官（花、果實、種子）」，別被「適應乾旱環境的營養器官特化」給混淆了！\n1. **被子植物（開花植物）的核心特徵**：\n   - **具真正的花**：受精後由子房發育為「果實」，胚珠發育為種子，種子被果皮包被。\n   - 題幹明確指出仙人掌「**可開花結果**」，因此具「花的構造」是判定其為被子植物最直接且決定性的依據。\n2. **高頻混淆陷阱辨析**：\n   - **陷阱 (A) 裸子植物絕無果實**：裸子植物不具子房，只有毬果，種子裸露無果皮包被，不可能結出果實！\n   - **陷阱 (B) 針狀葉不是裸子植物的專利**：針狀葉只是適應乾燥沙漠氣候減少水分蒸散的「變態葉」，不能作為裸子植物的分類依據。\n   - **陷阱 (D) 肥厚儲水莖是營養器官**：肉質儲水莖是仙人掌適應乾旱環境的營養器官形態改變，植物界分類主要依據繁殖器官構造（花、果實、種子等），不能以特化莖作為被子植物的分類依據。",
    "stem": "已知仙人掌有針狀葉及肥厚可儲水的莖，並可開花結果。根據上述說明，有關仙人掌的分類及其依據，下列何者最合理？〔108. 會考〕\n\n○ (A) 屬於裸子植物，因具有果實\n○ (B) 屬於裸子植物，因具有針狀葉\n○ (C) 屬於被子植物，因具有花的構造\n○ (D) 屬於被子植物，因具有特殊功能的莖。",
    "answer": "(C) 屬於被子植物，因具有花的構造",
    "diagramUrl": "",
    "solution": "正確：仙人掌「可開花結果」，「花」是被子植物特有的生殖器官，因此由具有花的構造判定其為被子植物最為合理。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-08",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確：仙人掌「可開花結果」，「花」是被子植物特有的生殖器官，因此由具有花的構造判定其為被子植物最為合理。 故選 (C)。"
  },
  {
    "id": "q_bio_animal_common_name_true_fish_classification_125",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "脊椎動物的分類與特徵：動物俗名與真假魚類辨析（鱷魚、娃娃魚、章魚、海馬、海牛、鯊魚、鯨魚之生物分類）",
    "uploadDate": "2026-10-07",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：生物俗名帶「魚」不一定是魚，不帶「魚」反而是真魚！\n1. **真魚類（符合用鰓呼吸、具鰭、水生魚類特徵）**：\n   - **海馬**：是「**硬骨魚類**」！雖然外型直立特殊，但具有鰓、胸鰭與背鰭，屬於輻鰭魚綱海龍科。\n   - **鯊魚**：是「**軟骨魚類**」！骨骼全由軟骨構成，具鰓裂、胸鰭、尾鰭，是真魚類。\n2. **名字帶「魚」卻不是魚類（高頻混淆陷阱）**：\n   - **鱷魚**：體表具角質骨板、用肺呼吸、卵生，屬於「**爬蟲類**」。\n   - **娃娃魚（中國大鯢）**：有四肢、皮膚濕潤輔助呼吸，屬於「**兩生類**」（蠑螈、山椒魚亦同）。\n   - **章魚**：身體柔軟不分節、具外套膜，屬於無脊椎動物之「**軟體動物門**」（墨魚、魷魚、鮑魚亦同）。\n   - **鯨魚**：體表有少量毛髮、肺呼吸、胎生哺乳，屬於「**哺乳類**」。\n3. **名字不帶「魚」的哺乳類海獸**：\n   - **海牛**：體型巨大水棲草食性，用肺呼吸、胎生哺乳，屬於「**哺乳類**」（海豚、海狗、海獅、海豹亦同）。",
    "stem": "鱷魚、娃娃魚、章魚、海馬、海牛、鯊魚、鯨魚，以上屬於魚類的有幾種？\n\n○ (A) 2種\n○ (B) 3種\n○ (C) 4種\n○ (D) 5種",
    "answer": "(A) 2種",
    "diagramUrl": "",
    "solution": "1. 破題關鍵（逐一剖析 7 種動物的真實分類階層）： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 破題關鍵（逐一剖析 7 種動物的真實分類階層）： 故選 (A)。"
  },
  {
    "id": "q_bio_bird_flight_adaptations_air_sacs_crop_gizzard_124",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "脊椎動物的分類與特徵：鳥類適應飛行的特化構造（羽毛、中空骨骼、氣囊雙重呼吸、瞬膜）與消化器官（嗉囊、砂囊）辨析",
    "uploadDate": "2026-10-07",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：鳥類「呼吸器官（氣囊）」與「消化器官（嗉囊、砂囊）」易混淆陷阱！\n1. **協助呼吸的是「氣囊」而非嗉囊、砂囊**：\n   - **氣囊**：與肺部相通，能儲存氣體以進行高效率的「雙重呼吸」（吸氣與呼氣時肺部皆能進行氣體交換），並可充氣減輕身體比重、協助散熱。\n2. **嗉囊與砂囊的功能（消化系統）**：\n   - 鳥類**缺乏牙齒**，無法在口中咀嚼食物。\n   - **嗉囊**：食道膨大部位，用於「**暫存與軟化食物**」。\n   - **砂囊（肌胃）**：肌肉壁發達，鳥類常吞食小砂石存於砂囊中，用於「**磨碎堅硬食物**」。\n3. **鳥類其他適應飛行關鍵特徵**：\n   - **骨骼中空（充氣骨）**：質輕堅固，顯著降低體重。\n   - **羽毛特化**：正羽形成翼面產生升力與推力，絨羽保暖。\n   - **半透明瞬膜（第三眼瞼）**：飛行中如風鏡般覆蓋眼球，保濕、防風沙且不遮擋飛行視線。",
    "stem": "鳥類是天空的霸主，能隨風翱翔，其適應飛行的構造敘述，下列何者不正確？\n\n○ (A) 鳥的羽毛質量輕，能保暖又可協助飛行\n○ (B) 鳥的骨骼中空，可減輕體重\n○ (C) 鳥有嗉囊和砂囊，可協助呼吸\n○ (D) 鳥的眼睛外面有一半透明的瞬膜，不影響視線又能保護眼睛",
    "answer": "(C) 鳥有嗉囊和砂囊，可協助呼吸",
    "diagramUrl": "",
    "solution": "- (C) 錯誤（本題應選此項）：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "- (C) 錯誤（本題應選此項）："
  },
  {
    "id": "q_bio_axolotl_amphibian_characteristics_123",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "脊椎動物的分類與特徵：兩生類（墨西哥鈍口螈/六角恐龍）之幼態延續、四肢、肺、光滑潮濕皮膚輔助呼吸與外鰓構造",
    "uploadDate": "2026-10-07",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：常見動物俗名陷阱與兩生類核心呼吸特徵辨析！\n1. **名字有「恐龍」但不是爬蟲類**：\n   - 「六角恐龍」俗稱雖然帶有「恐龍」二字，但真實物種是「**墨西哥鈍口螈**」（蠑螈的一種），屬於「**脊椎動物中的兩生類**」，絕非爬蟲類！\n2. **兩生類核心呼吸特徵**：\n   - 具有**四肢**、構造簡單的**肺**，且皮膚**缺乏鱗片或外骨骼保護**，表面分泌黏液保持**光滑潮濕**，能溶入氧氣**協助呼吸**。\n3. **終身保留外鰓的特殊現象（幼態延續）**：\n   - 一般兩生類（如青蛙、蟾蜍）幼體用鰓呼吸，成體變態後鰓退化改用肺及皮膚呼吸。\n   - 但六角恐龍具有特殊的「**幼態延續（Neoteny）**」特徵，終身生活於水中，成體依然保留頭部兩側 6 根羽狀「**外鰓**」以進行水中氣體交換。\n4. **與其他脊椎動物類別對照排查**：\n   - **魚類**：以鰭運動、通常體表有鱗片，無真正四肢與肺（肺魚雖有鰾特化為鰾肺，但無四肢與裸露黏液皮膚）。\n   - **爬蟲類**：體表有乾燥的**角質鱗片或骨板**以防止水分散失，完全用肺呼吸，皮膚無法輔助呼吸。\n   - **哺乳類**：體表有毛髮、胎生、具有乳腺分泌乳汁哺育幼兒。",
    "stem": "水族館中有一種觀賞寵物叫「六角恐龍」，如圖所示，原產地在墨西哥，因棲地汙染等問題，野生數量稀少，是瀕臨滅絕的物種。牠們生活於水中，有著短小的四肢，具有簡單的肺和光滑的皮膚可以協助呼吸，頭部兩側有六個類似羽毛狀的角，其實是呼吸用的鰓。根據以上描述，圖中生物應該屬於下列哪一類？\n\n○ (A) 魚類\n○ (B) 兩生類\n○ (C) 爬蟲類\n○ (D) 哺乳類",
    "answer": "(B) 兩生類",
    "diagramUrl": "assets/questions/q_bio_axolotl_amphibian_characteristics_123.png",
    "solution": "正確：具四肢、簡單的肺、光滑潮濕皮膚輔助呼吸，完全符合兩生類特徵。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確：具四肢、簡單的肺、光滑潮濕皮膚輔助呼吸，完全符合兩生類特徵。 故選 (B)。"
  },
  {
    "id": "q_bio_animal_taxonomy_phylum_new_year_dishes_122",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "動物界的分類與特徵：常見食材與各動物門（刺絲胞、軟體、節肢、棘皮、脊索動物門）之歸類配對",
    "uploadDate": "2026-10-07",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：生活情境食材與無脊椎／脊椎動物門分類高頻考點對照！\n1. **海蜇皮是刺絲胞動物門**：\n   - 海蜇即水母的一種，身體呈輻射對稱，具刺絲胞可用於捕食與防禦，屬於「刺絲胞動物門 (甲)」！\n2. **常見軟體動物與棘皮動物食材區分**：\n   - **小烏賊、文蛤**：具柔軟身體與外套膜（分泌外殼），屬於「軟體動物門 (丙)」（章魚、魷魚、牡蠣、九孔亦同）。\n   - **海參**：生活於海中，體表具石灰質骨片、具管足運動，屬於「棘皮動物門 (己)」（海膽、海星亦同）。\n3. **甲殼類食材屬於節肢動物門**：\n   - **螃蟹、蝦**：身體分節、具有幾丁質外骨骼與分節附肢，屬於「節肢動物門 (戊)」甲殼綱。\n4. **脊索動物門食材（脊椎動物）**：\n   - **豬、牛**（哺乳綱）、**田雞/牛蛙**（兩生綱）、**鱸魚**（魚類/輻鰭魚綱）皆具脊椎骨與內骨骼，屬於「脊索動物門 (庚)」。\n5. **本菜單中缺席的動物門**：\n   - (乙) 扁形動物門（如渦蟲、絛蟲、肝吸蟲）與 (丁) 環節動物門（如蚯蚓、水蛭、沙蠶）均非一般年菜食用食材，故未包含乙與丁！",
    "stem": "阿關過年回家吃年夜飯，阿關的媽媽準備了九菜一湯分別是：涼拌海蜇皮（水母）、醬油小烏賊、奶油焗螃蟹、蜜汁豬火腿、炒文蛤、三杯田雞（牛蛙）、蔥爆牛肉、海參燴什錦、醉蝦、薑絲鱸魚湯，請問這些食物中包含哪些動物門？請依下列代號回答問題：(甲)刺絲胞動物門 (乙)扁形動物門 (丙)軟體動物門 (丁)環節動物門 (戊)節肢動物門 (己)棘皮動物門 (庚)脊索動物門\n\n○ (A) 甲乙丙己庚\n○ (B) 甲丙丁戊庚\n○ (C) 甲丙戊己庚\n○ (D) 甲乙丙丁戊己庚",
    "answer": "(C) 甲丙戊己庚",
    "diagramUrl": "",
    "solution": "正確：包含甲、丙、戊、己、庚無誤。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確：包含甲、丙、戊、己、庚無誤。 故選 (C)。"
  },
  {
    "id": "q_sci_bio_flower_monocot_lily_characteristics_121",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "被子植物花型構造與分類：單子葉植物花瓣倍數、散生維管束與花粉管受精構造",
    "uploadDate": "2026-10-07",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：單子葉與雙子葉植物特徵對照，以及花粉管的普遍性！\n1. **花瓣倍數判斷法**：\n   - **單子葉植物**：花瓣或花被片數通常為 **3 或 3 的倍數**（本題附圖中花朵有 6 片花被片，為典型單子葉植物，如百合、萱草/金針花）。\n   - **雙子葉植物**：花瓣數通常為 **4 或 5 的倍數**（如杜鵑、朱槿）。\n2. **維管束排列常考陷阱**：\n   - **單子葉植物**：莖內維管束為「**散生排列**」，無形成層（如玉米、百合、水稻）。\n   - **雙子葉植物**：莖內維管束為「**環狀排列**」，通常具形成層（如向日葵、榕樹）。\n3. **傳粉方式與花型特徵**：\n   - 本圖之花朵**花大、花被片鮮豔**，屬於典型的**蟲媒花**，主要藉由昆蟲（蜜蜂、蝴蝶）傳粉，而非靠風力（風媒花通常花小、不鮮豔、無香氣無蜜腺，如禾本科水稻、小麥）。\n4. **花粉管的絕對必要性（高頻陷阱題）**：\n   - **所有種子植物（包括裸子植物與被子植物）**在有性生殖時，無論是否為兩性花（兼具雌蕊與雄蕊），花粉落在柱頭後**都必須萌發「花粉管」**，將精細胞運送至胚珠完成受精，以擺脫受精對水分的依賴！絕不能因為兼具雌蕊雄蕊就誤以為不需要花粉管！",
    "stem": "附圖為公園裡常見的觀賞花，試根據其花型及特徵，下列敘述何者正確？\n\n○ (A) 屬種子植物類別中的單子葉植物\n○ (B) 維管束排列方式為環狀排列\n○ (C) 主要藉由風力傳播花粉\n○ (D) 此花兼具雌蕊和雄蕊，故不需具有花粉管構造",
    "answer": "(A) 屬種子植物類別中的單子葉植物",
    "diagramUrl": "assets/questions/q_bio_flower_monocot_lily_121.png",
    "solution": "正確：花瓣/花被片數為 3 或 6（3 的倍數），符合種子植物（被子植物）中單子葉植物的重要特徵。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-07",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確：花瓣/花被片數為 3 或 6（3 的倍數），符合種子植物（被子植物）中單子葉植物的重要特徵。 故選 (A)。"
  },
  {
    "id": "q_bio_deep_sea_hydrothermal_vent_sulfur_bacteria_114",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "原核生物界特徵：深海熱泉硫化菌（古菌）之構造、代謝與極端環境適應",
    "uploadDate": "2026-10-06",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：原核生物界（古細菌/深海熱泉硫化菌）核心特徵與易錯觀念對照！\n1. **細胞結構特徵（極重要）**：\n   - **無細胞核膜**：原核生物最核心標籤！遺傳物質（DNA）直接裸露於細胞質中，沒有膜狀胞器。\n   - **細胞壁成分陷阱**：古細菌具有細胞壁，但成分（假肽聚糖/蛋白質）與植物（纖維素）及真細菌（肽聚糖）完全不同，不可混為一談。\n2. **能量獲取與代謝方式**：\n   - **化能自營（非光合作用）**：深海無陽光，熱泉硫化菌利用氧化硫化合物釋放的「化學能」合成有機物，屬於**生產者**，但**不利用光能，也不會產生氧氣**。\n3. **極端環境適應**：\n   - 屬於嗜熱古菌，體內酵素最適溫度常高於 70°C~100°C 以上，非一般常溫（20~40°C）。",
    "stem": "下列何者是深海熱泉硫化菌（原核生物界）的特徵？\n\n○ (A) 具有細胞壁，成分和植物相同\n○ (B) 會自行製造氧氣，為生產者的角色\n○ (C) 缺乏細胞核膜，遺傳物質直接裸露在細胞質中\n○ (D) 細胞內進行酵素代謝反應的最適合溫度約20~40°C",
    "answer": "(C) 缺乏細胞核膜，遺傳物質直接裸露在細胞質中",
    "diagramUrl": "",
    "solution": "正確：深海熱泉硫化菌屬於原核生物界（古細菌）。原核生物的核心特徵為缺乏細胞核膜與膜狀胞器，其遺傳物質（DNA）直接裸露散佈於細胞質中。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-06",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-10-12",
    "lastReviewedDate": "2026-10-12",
    "reviewedMondays": [
      "2026-10-12"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791793286786,
        "isMastered": true
      }
    ],
    "explanation": "正確：深海熱泉硫化菌屬於原核生物界（古細菌）。原核生物的核心特徵為缺乏細胞核膜與膜狀胞器，其遺傳物質（DNA）直接裸露散佈於細胞質中。 故選 (C)。"
  },
  {
    "id": "q_bio_animal_taxonomy_levels_comparison_115",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "生物分類階層與親緣關係：七大分類階層（界門綱目科屬種）比較",
    "uploadDate": "2026-10-06",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：生物分類階層與親緣關係遠近判斷技巧！\n1. **階層越高，包含範圍越大；階層越低，親緣關係越近**：\n   - 分類階層順序：界 → 門 → 綱 → 目 → 科 → 屬 → 種。\n   - **同目優於不同目**：灰狼、斑鬣狗、赤狐、郊狼皆為「食肉目」，而花栗鼠為「齧齒目」。因此花栗鼠與其他四種生物在「目」這個階層就分開了，親緣關係最遠。\n2. **表格判讀與階層對比**：\n   - 花栗鼠與郊狼相同的分類階層：**界（動物界）、門（脊索動物門）、綱（哺乳綱）**，共 3 個階層相同。\n   - 斑鬣狗屬於鬣狗科，題目表格未給出其「屬」，無法直接推斷其屬於犬屬。",
    "stem": "有灰狼、斑鬣狗、花栗鼠、赤狐、郊狼等五種生物，如表為牠們分類上的關係，請選出正確的敘述為何？\n\n○ (A) 斑鬣狗是屬於犬屬\n○ (B) 表中和灰狼親緣關係最遠的生物是斑鬣狗\n○ (C) 表中和赤狐親緣關係最遠的生物是花栗鼠\n○ (D) 七個分類階層中，花栗鼠有三個階層和郊狼相同",
    "answer": "(D) 七個分類階層中，花栗鼠有三個階層和郊狼相同",
    "diagramUrl": "assets/questions/q_bio_animal_taxonomy_table_115.png",
    "solution": "正確：花栗鼠與郊狼相同的分類階層包含界（動物界）、門（脊索動物門）、綱（哺乳綱），共 3 個階層相同。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-06",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "正確：花栗鼠與郊狼相同的分類階層包含界（動物界）、門（脊索動物門）、綱（哺乳綱），共 3 個階層相同。 故選 (D)。"
  },
  {
    "id": "q_bio_animal_common_name_taxonomy_113",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "脊椎動物分類與俗名辨析：真假魚類名稱盲點",
    "uploadDate": "2026-10-06",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：生物俗名與真實分類陷阱 —— 「魚字尾」不一定是魚！\n1. **名稱有「魚」卻不是魚類**：\n   - **山椒魚**：兩生類（有尾目，用皮膚與肺呼吸）。\n   - **鱷魚**：爬蟲類（鱷目，用肺呼吸、體表有角質鱗片/骨板）。\n   - 其他常見非魚類：鯨魚/海豚（哺乳類）、墨魚/章魚/魷魚（軟體動物）、娃娃魚（兩生類/大鯢）。\n2. **名稱沒有「魚」或是特殊外型卻是魚類**：\n   - **彈塗魚**：硬骨魚綱（蝦虎魚科），用鰓呼吸。\n   - **海馬**：硬骨魚綱（海龍科），用鰓呼吸、有鰭。",
    "stem": "動物的俗名，往往無法真正表達動物真實的種類，例如 (甲) 山椒魚；(乙) 彈塗魚；(丙) 海馬；(丁) 鱷魚；是一些常見動物的俗名。試判斷哪些並非屬於魚類？\n\n○ (A) (甲)(丁)\n○ (B) (丙)(丁)\n○ (C) (甲)(乙)(丙)\n○ (D) (甲)(丙)(丁)",
    "answer": "(A) (甲)(丁)",
    "diagramUrl": "",
    "solution": "1. 個別動物分類與呼吸器官分析： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-06",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-10-05",
    "lastReviewedDate": "2026-10-12",
    "reviewedMondays": [
      "2026-10-05"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791793164817,
        "isMastered": false
      }
    ],
    "explanation": "1. 個別動物分類與呼吸器官分析： 故選 (A)。"
  },
  {
    "id": "q_math_sqrt_double_root_estimation_108",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "平方根與根號運算：雙重平方根觀念與根號數值估算",
    "uploadDate": "2026-10-05",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：雙重平方根陷阱與根號估算技巧！\n1. **字面陷阱：「√169 的正平方根」**：\n   - 先計算 √169 = 13。\n   - 題目問的是「13 的正平方根」，即 P = √13！\n   - 切勿誤把 P 當作 13（選 A）。\n2. **根號數值的連續整數估算**：\n   - 因為 9 < 13 < 16，同開根號得 √9 < √13 < √16，即 3 < √13 < 4。\n   - 因此 3 < P < 4。",
    "stem": "已知 P 是 √169 的正平方根，則下列關於 P 值的敘述何者正確？\n\n○ (A) P = 13\n○ (B) 13 < P < 14\n○ (C) 3 < P < 4\n○ (D) 168 < P < 170",
    "answer": "(C) 3 < P < 4",
    "diagramUrl": "",
    "solution": "1. 解題兩階段拆解： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 解題兩階段拆解： 故選 (C)。"
  },
  {
    "id": "q_eng_past_continuous_passive_museum_109",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文時態與被動語態：過去進行被動語態 (was/were + being + p.p.)",
    "uploadDate": "2026-10-05",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：過去進行被動語態 (Past Continuous Passive) 關鍵密碼！\n1. **時間子句判定**：「When I visited there...」表示「過去的某個特定時間點」。\n2. **動作狀態**：當時博物館正在被建造中，需結合「過去進行式 (was/were + V-ing)」與「被動語態 (be + p.p.)」。\n3. **公式組合**：was/were + being + p.p. → was being built。\n4. **常見干擾項排除**：\n   - (B) has been built 為現在完成被動，與過去特定時間點不吻合。\n   - (C) is being built 為現在進行被動，時態與 visited 不符。\n   - (D) is built 為現在簡單被動，時態不符。",
    "stem": "When I visited there, a new museum ________ by them.\n\n○ (A) was being built\n○ (B) has been built\n○ (C) is being built\n○ (D) is built",
    "answer": "(A) was being built",
    "diagramUrl": "",
    "solution": "was being built：過去進行被動語態，符合句意「當時正在被建造」。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "was being built：過去進行被動語態，符合句意「當時正在被建造」。 故選 (A)。"
  },
  {
    "id": "q_math_sqrt_reciprocal_rationalization_comparison_110",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "平方根與根號運算：倒數有理化比較根號差的大小",
    "uploadDate": "2026-10-05",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：根號減法比較大小技巧 —— 「倒數有理化法」！\n1. **觀察特徵**：\n   - A = √19 - √9（因為 3 = √9，平方差 19 - 9 = 10）\n   - B = √18 - √8（因為 2√2 = √8，平方差 18 - 8 = 10）\n   - C = √17 - √7（平方差 17 - 7 = 10）\n   - 發現三式取「平方差」後的分子都是 10！\n2. **取倒數（有理化）**：\n   - 1/A = (√19 + 3) / 10\n   - 1/B = (√18 + √8) / 10\n   - 1/C = (√17 + √7) / 10\n3. **比較分子與倒數性質**：\n   - 分母皆為 10，分子：(√19+3) > (√18+√8) > (√17+√7)\n   - 倒數大小：1/A > 1/B > 1/C\n   - 正數取倒數後大小關係反轉：A < B < C！",
    "stem": "若 A = √19 - 3，B = √18 - 2√2，C = √17 - √7，求 A、B、C 三數的大小關係何者正確？\n\n○ (A) A > B > C\n○ (B) B > C > A\n○ (C) C > A > B\n○ (D) A < B < C",
    "answer": "(D) A < B < C",
    "diagramUrl": "",
    "solution": "1. 化簡並觀察各項平方差特徵： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 化簡並觀察各項平方差特徵： 故選 (D)。"
  },
  {
    "id": "q_math_sqrt_cuboid_volume_height_111",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "平方根與根號運算：根號乘除運算與帶分數根號化簡（長方體體積與高）",
    "uploadDate": "2026-10-05",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：根號帶分數與除法運算四大陷阱！\n1. **帶分數根號化簡前務必先變假分數**：\n   - √(2又2/3) = √(8/3) = √8 / √3 = 2√2 / √3。\n   - 絕不可誤拆為 √2！\n2. **體積公式求高**：\n   - 高 = 體積 ÷ (長 × 寬)。\n3. **一步化簡法**：\n   - 體積 = 2√12 = 4√3。\n   - 長 × 寬 = 2√3 × (2√2 / √3) = 4√2。\n   - 高 = 4√3 / 4√2 = √3 / √2 = √6 / 2。",
    "stem": "有一個長方體的體積為 2√12 立方公分，且長為 2√3 公分，寬為 √(2又2/3) 公分，則高為多少公分？\n\n○ (A) (√6 / 2) 公分\n○ (B) (√3 / 2) 公分\n○ (C) √3 公分\n○ (D) (√3 / 3) 公分",
    "answer": "(A) (√6 / 2) 公分",
    "diagramUrl": "",
    "solution": "1. 幾何公式與化簡： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 幾何公式與化簡： 故選 (A)。"
  },
  {
    "id": "q_math_sqrt_mixed_fraction_algebraic_identity_112",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "乘法公式與平方根應用：帶分數結合平方差公式求平方根",
    "uploadDate": "2026-10-05",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：帶分數開平方根速算與「正負符號」雙重提醒！\n1. **莫硬算！巧用乘法公式化簡分子**：\n   - 123又(1/121) = (123 × 121 + 1) / 121。\n   - 觀察 123 = 122 + 1 與 121 = 122 - 1，利用平方差公式：\n     (122 + 1)(122 - 1) + 1 = 122² - 1² + 1 = 122²！\n   - 原式變為 122² / 121 = (122 / 11)²！\n2. **「平方根」必定有正有負**：\n   - 題目問的是「平方根」，包含正平方根與負平方根，因此一定要加 ± 號！\n   - 若問「正平方根」或「算術平方根」才是正數。",
    "stem": "123又1/121 的平方根為下列哪一選項？\n\n○ (A) 11又1/11\n○ (B) ± (122 / 11)\n○ (C) ± (√123 / 11)\n○ (D) √123 / 11",
    "answer": "(B) ± (122 / 11)",
    "diagramUrl": "",
    "solution": "1. 帶分數化為假分數並運用乘法公式速算： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 帶分數化為假分數並運用乘法公式速算： 故選 (B)。"
  },
  {
    "id": "q_chi_typo_correction_idiom_phrases_106",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "審題不清",
    "concept": "國文形音義：常見詞語錯別字辨析與正字修正",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：常見詞語與成語錯別字陷阱比對！\n1. **敷衍搪塞**：「搪」為手部，意為推託拒絕，不可寫成水部的「塘」！\n2. **蓬蓽生輝**：「蓽」為草字頭（蓬草與荊竹編成的門），不可誤寫為簡體/錯字「荜」！\n3. **貪婪成性**：「婪」為女部，不可誤寫為「梵」！\n4. **明燈萬盞**：「盞」為皿部（小杯/燈盞），不可誤寫為「棧」！\n5. **連蹦帶跳**：「蹦」為足部，不可寫成「繃」！\n6. **雀巢鳩占**：意指強佔他人處所，用字完全正確（鳩佔鵲巢）。",
    "stem": "下列詞語，何組用字完全正確？\n\n○ (A) 蓬荜生輝 / 敷衍塘塞\n○ (B) 貪梵成性 / 明燈萬棧\n○ (C) 雀巢鳩占 / 藕斷絲連\n○ (D) 蕩氣迴腸 / 連繃帶跳",
    "answer": "(C) 雀巢鳩占 / 藕斷絲連",
    "diagramUrl": "",
    "solution": "正確：「雀巢鳩占」與「藕斷絲連」用字完全正確無誤。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791361298120,
        "isMastered": true
      }
    ],
    "explanation": "正確：「雀巢鳩占」與「藕斷絲連」用字完全正確無誤。 故選 (C)。"
  },
  {
    "id": "q_chi_ancient_modern_terms_matching_107",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文文化常識：古今用語演變與古今稱謂對照",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：古今用語演變常考對照表！\n1. **茅房 → 廁所**：古代「茅房」專指廁所、洗手間，**並非草屋**！\n2. **仵作 → 法醫**：古代負責檢驗屍體的官吏。\n3. **捕快 → 刑警/警察**：古代負責緝拿罪犯的官差。\n4. **盤纏 → 旅費/路費**：古代出遠門隨身攜帶的金錢資金。\n5. **客棧 → 旅館/飯店**；**酒錢 → 小費**。",
    "stem": "語言文字常隨時代而演變，如古代的「酒錢」就是現代所稱的「小費」；「客棧」就是現代所稱的「旅館」。下列古今用語的配對，何者不正確？\n\n○ (A) 仵作 → 法醫\n○ (B) 茅房 → 草屋\n○ (C) 捕快 → 刑警\n○ (D) 盤纏 → 旅費",
    "answer": "(B) 茅房 → 草屋",
    "diagramUrl": "",
    "solution": "錯誤（應選此項）：「茅房」在古代是指「廁所、洗手間」，並非一般的草屋！故配對不正確。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791361317070,
        "isMastered": true
      }
    ],
    "explanation": "錯誤（應選此項）：「茅房」在古代是指「廁所、洗手間」，並非一般的草屋！故配對不正確。 故選 (B)。"
  },
  {
    "id": "q_soc_geo_china_heihe_tengchong_line_105",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國人文與區域地理：胡煥庸線（黑河—騰衝線）人口密度與農畜業分界",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：胡煥庸線（黑河—騰衝線）三大重要地理意義！\n1. **人口密度分界**：東南半壁面積佔約 36%，人口高達 94%；西北半壁面積佔約 64%，人口僅約 6%。\n2. **產業型態分界**：連線東南部為【農業區（定居農耕）】，西北部為【畜牧區（游牧/定居放牧）】！\n3. **常見干擾界線比對**：\n   - **少數民族自治區邊界**：依據行政區劃分界定，非黑河—騰衝線。\n   - **濕潤與乾燥分界**：以年降水量 **400 mm 等雨線**（乾旱半乾旱與半濕潤濕潤）為基準。\n   - **內流區與外流區分界**：延伸自大興安嶺—陰山—賀蘭山—巴顏喀拉山—岡底斯山脈。",
    "stem": "1935年，地理學家胡煥庸提出，以一條假想的線段（附圖中的連線），可將中國分為東南與西北兩部分。請問：下列哪項中國地理現象的界線，與圖中的連線較一致？\n\n○ (A) 少數民族自治區的邊界\n○ (B) 濕潤與乾燥地區的分界\n○ (C) 農業區與畜牧區的分界\n○ (D) 內流區與外流區的分界",
    "answer": "(C) 農業區與畜牧區的分界",
    "diagramUrl": "assets/questions/q_soc_geo_china_heihe_tengchong_line_105.png",
    "solution": "1. 核心地標觀念（胡煥庸線）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791009482626,
        "isMastered": true
      }
    ],
    "explanation": "1. 核心地標觀念（胡煥庸線）： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_china_coffee_varieties_table_104",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國農業與經濟作物：咖啡產區（熱帶/低緯高原）與全球氣候分布特徵",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：中國熱帶經濟作物分布與全球對照！\n1. **熱帶作物條件**：咖啡為熱帶作物（生長於南北緯 25°/30° 之間的「咖啡帶」）。中國主要栽培區位於緯度較低且濕熱之【雲南、海南島、廣東/廣西南部】。\n2. **表格關鍵比對**：\n   - **甲品種（阿拉比卡咖啡）**：原產於中高海拔熱帶高原（巴西、哥倫比亞），中國產區在雲南高原與嶺南南部。\n   - **乙品種（羅布斯塔咖啡）**：原產於低海拔熱帶區（東南亞、非洲），中國產區在海南島。\n3. **干擾作物分析**：玉米（溫帶/亞熱帶廣泛栽培）、棉花（喜光耐旱主要在華北/新疆）、葡萄（溫帶乾燥/地中海型氣候），皆不符表中熱帶氣候條件。",
    "stem": "附表是某一作物的品種，在中國分布的比較表。根據表中資訊判斷，該作物最可能為下列何者？\n\n| 品種分布 | 甲 | 乙 |\n| :--- | :--- | :--- |\n| **原產地** | 28°N~38°S 間的海拔 1300 至 1900 公尺地區，其中以巴西、哥倫比亞最多 | 10°N~10°S 間的低海拔地區，東南亞、印度及非洲中部和東部為主要栽培區 |\n| **中國產區** | 在雲南、廣西、福建、廣東的南部 | 主要在海南島 |\n\n○ (A) 玉米\n○ (B) 咖啡\n○ (C) 棉花\n○ (D) 葡萄",
    "answer": "(B) 咖啡",
    "diagramUrl": "",
    "solution": "咖啡（正確）：表中的甲代表阿拉比卡種（Arabica，適合熱帶高原），乙代表羅布斯塔種（Robusta，適合熱帶低地），完美符合作物條件。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791009585467,
        "isMastered": true
      }
    ],
    "explanation": "咖啡（正確）：表中的甲代表阿拉比卡種（Arabica，適合熱帶高原），乙代表羅布斯塔種（Robusta，適合熱帶低地），完美符合作物條件。 故選 (B)。"
  },
  {
    "id": "q_soc_geo_china_crop_conditions_table_103",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國農作物生長條件與地理空間分布：茶樹、小麥、棉花與甘蔗對照",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：中國四大重要作物地形與氣候條件考點梳理！\n1. **茶樹**：喜濕潤多雲霧，但根部忌積水，必須種植於【排水良好之丘陵坡地】（如東南丘陵），非平原地區！\n2. **小麥**：耐寒耐旱，主要分布於北方【旱田景觀】（如華北平原、東北平原），水田為水稻之特色！\n3. **棉花**：喜光耐旱，收成時忌雨（雨水會污染棉絨），適宜【華北平原與新疆灌溉區沙質土壤】（正確選項 C）！\n4. **甘蔗**：熱帶/亞熱帶高溫多雨作物，主要分布於【華南地區（廣西、廣東、海南、台灣）】，絕非緯度高凍土長的東北平原！",
    "stem": "附表為中國主要經濟作物的生長條件與空間分布。其中哪一項敘述正確？\n\n| 代號 | 作物 | 生長條件 | 例子 |\n| :--- | :--- | :--- | :--- |\n| (A) | 茶樹 | 適合多雲霧、排水良好的平原地 | 珠江三角洲平原 |\n| (B) | 小麥 | 耐寒耐乾，多為水田景觀 | 長江中下游平原 |\n| (C) | 棉花 | 耐乾旱，收成時忌雨，生長在沙質土壤 | 華北平原 |\n| (D) | 甘蔗 | 生長在氣候濕熱、平原廣大的地區 | 東北平原 |\n\n○ (A) (A)\n○ (B) (B)\n○ (C) (C)\n○ (D) (D)",
    "answer": "(C) (C)",
    "diagramUrl": "",
    "solution": "正確：棉花喜光耐旱，且採收期最忌降雨（降雨會導致棉花品質下降），華北平原秋季少雨、土壤透氣性好，為中國主要棉花產區之一。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791009599395,
        "isMastered": true
      }
    ],
    "explanation": "正確：棉花喜光耐旱，且採收期最忌降雨（降雨會導致棉花品質下降），華北平原秋季少雨、土壤透氣性好，為中國主要棉花產區之一。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_china_cotton_irrigation_xinjiang_102",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國西北乾旱區農業：新疆棉花產區與灌溉水利設施（坎兒井/綠洲農業）",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：新疆棉花農業發展關鍵因素！\n1. **氣候優勢**：氣候乾燥、日照時間長、晝夜溫差大、採收季少雨，品質極佳（優質長絨棉）。\n2. **氣候限制與突破關鍵**：乾燥少雨區作物最大瓶頸為【水資源】。新疆能成為棉花大產區的核心關鍵即為【灌溉系統進步】（利用高山融雪、坎兒井、現代高效節水滴灌技術工程提供穩定水源）。\n3. **迷思排除**：排水設施（用於多雨防澇）、交通改善（解決運輸非生產）、政府規劃（輔助而非水源決定條件）。",
    "stem": "附圖的灰色區塊代表中國某種經濟作物的主要產區，位於乾燥氣候區內的新疆為何能生產此種經濟作物？\n\n○ (A) 交通建設改善\n○ (B) 排水設施興建\n○ (C) 政府政策規劃\n○ (D) 灌溉系統進步",
    "answer": "(D) 灌溉系統進步",
    "diagramUrl": "assets/questions/q_soc_geo_china_cotton_irrigation_xinjiang_102.png",
    "solution": "1. 地圖作物識別： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791009763318,
        "isMastered": true
      }
    ],
    "explanation": "1. 地圖作物識別： 故選 (D)。"
  },
  {
    "id": "q_soc_geo_china_puer_coffee_yunnan_101",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國區域地理：雲南省（低緯高原/熱帶季風氣候/普洱茶與咖啡主要產地）定位",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：中國省分與特色地理定位解題關鍵！\n1. **地區特徵定位**：題幹提及【普洱地區】、【低緯高原】、【熱帶季風氣候】、【普洱茶與咖啡產地】，指位於中國西南邊陲之【雲南省】（圖中標示 **丁**）。\n2. **地圖代號標示省分對照**：\n   - **甲**：福建省（東南沿海丘陵，亞熱帶季風氣候）。\n   - **乙**：山東省（華北平原/山東丘陵，溫帶季風氣候）。\n   - **丙**：青海省（青藏高原東北部，高寒氣候）。\n   - **丁**：雲南省（西南低緯高原，熱帶/亞熱帶季風氣候，普洱茶與咖啡產量占全國九成以上）。",
    "stem": "中國普洱地區不僅產茶，咖啡豆產量更占了全國一半以上。這個咖啡產區四周群山蔥鬱，白雲繚繞，屬於低緯高原的熱帶季風氣候。昔日以普洱茶聞名，今因咖啡園與茶園相隔不遠，導致咖啡中帶有一點茶香的特殊風味，口感濃郁飽滿。請問：上述的咖啡產地最可能位於附圖中何處？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(D) 丁",
    "diagramUrl": "assets/questions/q_soc_geo_china_puer_coffee_yunnan_101.png",
    "solution": "丁——雲南省（正確）：位於中國西南邊疆，完全符合作物條件與題幹描述。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791009823593,
        "isMastered": false
      }
    ],
    "explanation": "丁——雲南省（正確）：位於中國西南邊疆，完全符合作物條件與題幹描述。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_china_heruo_railway_taklamakan_100",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國地理地形與氣候：塔里木盆地與塔克拉瑪干沙漠（和若鐵路環狀鐵路線）",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：中國地形、氣候與鐵路線連線解題關鍵！\n1. **地標與區域定位**：題幹明確提及【該國面積最大的盆地】，即中國最大的盆地——**塔里木盆地**（位於新疆南部）。\n2. **景觀特色對照**：\n   - 塔里木盆地中央為中國最大的沙漠【**塔克拉瑪干沙漠**】（氣候乾燥少雨，滿是浩瀚大漠與漫天滾滾風沙），故搭乘環繞該盆地（和若鐵路、南疆鐵路、格庫鐵路等）之列車最容易看見大漠風沙景觀！\n3. **其餘選項迷思拆解**：\n   - **(B) 黃河流經溝壑縱橫的高原**：指【黃土高原】（水土流失嚴重），非塔里木盆地。\n   - **(C) 高寒荒地與藏族牧民驅牛**：指【青藏高原】（高寒氣候區），非塔里木盆地。\n   - **(D) 成群馬匹在遼闊大草原奔跑**：指【內蒙古高原】（溫帶草原），非乾燥沙漠盆地。",
    "stem": "中國「和若鐵路」於2022年6月6日開通，將與營運中的「格庫鐵路」、「南疆鐵路」連接，構成一條總長2,712公里的環形鐵路，並環抱著該國面積最大的盆地，如附圖所示。\n\n請問：搭乘上述鐵路列車的旅客，最有機會看見以下何種景象？\n\n○ (A) 浩瀚大漠，揚起的漫天滾滾風沙\n○ (B) 黃河，流經溝壑縱橫的崎嶇高原\n○ (C) 高寒荒地，藏族牧民驅趕著牛群\n○ (D) 成群馬匹，在遼闊大草原中奔跑",
    "answer": "(A) 浩瀚大漠，揚起的漫天滾滾風沙",
    "diagramUrl": "assets/questions/q_soc_geo_china_heruo_railway_taklamakan_100.png",
    "solution": "浩瀚大漠，揚起的漫天滾滾風沙（正確）：塔里木盆地內部為中國廣袤的溫帶沙漠——塔克拉瑪干沙漠。故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-02",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791009951568,
        "isMastered": true
      }
    ],
    "explanation": "浩瀚大漠，揚起的漫天滾滾風沙（正確）：塔里木盆地內部為中國廣袤的溫帶沙漠——塔克拉瑪干沙漠。故選 (A)。"
  },
  {
    "id": "q_eng_vocab_appear_party_110",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文/字彙文法：動詞辨析（appear 出現、treat 招待、raise 撫養、lead 帶領）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- **appear**：動詞，表示「出現；顯露」。句中「suddenly appeared at the party」（突然出現在派對上）最符合語意。\n- **treat**：招待；治療。**raise**：舉起；撫養（需接受詞）。**lead**：帶領；引導（過去式為 led）。",
    "stem": "Everyone was surprised when he suddenly ______ at the party.",
    "options": [
      "(A) treated",
      "(B) raised",
      "(C) appeared",
      "(D) led"
    ],
    "answer": "(C) appeared",
    "diagramUrl": "",
    "solution": "appeared：出現；顯露（過去式） 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "appeared：出現；顯露（過去式） 故選 (C)。"
  },
  {
    "id": "q_eng_verb_find_cheating_exam_111",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "審題不清",
    "concept": "英文/句型文法：感官與發現動詞（find + 受詞 + V-ing）與考試作弊 cheat 詞彙",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n1. **find + 人 + V-ing**：表示「發現某人正在做某事」。\n2. **cheat in the exam**：在考試中作弊。生氣（angry）的原因是發現學生在考試中作弊（cheating）。",
    "stem": "The teacher was angry after she found some students ______ in the exam.",
    "options": [
      "(A) cheating",
      "(B) kicking",
      "(C) raising",
      "(D) leading"
    ],
    "answer": "(A) cheating",
    "diagramUrl": "",
    "solution": "1. 題目句意：「老師在發現有些學生在考試中______之後非常生氣。」 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 題目句意：「老師在發現有些學生在考試中______之後非常生氣。」 故選 (A)。"
  },
  {
    "id": "q_eng_adj_sick_weak_112",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文/字彙文法：形容詞辨析（weak 虛弱的、polite 禮貌的、wise 明智的、lovely 可愛的）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- **weak**：虛弱的；軟弱的。因生病（sick）多時導致體力不好，故用 weak 描述身體狀態。\n- **polite**：有禮貌的；**wise**：聰明明智的；**lovely**：可愛討喜的。",
    "stem": "Mr. Chang has been sick for a week, and he feels very ______ now.",
    "options": [
      "(A) polite",
      "(B) wise",
      "(C) lovely",
      "(D) weak"
    ],
    "answer": "(D) weak",
    "diagramUrl": "",
    "solution": "2. 前句提示「sick for a week」（生病一週），因此身體會感到「虛弱」，故選 (D) weak。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "2. 前句提示「sick for a week」（生病一週），因此身體會感到「虛弱」，故選 (D) weak。"
  },
  {
    "id": "q_eng_phrase_eve_chinese_new_year_113",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文/節慶字彙與片語：the eve of Chinese New Year (農曆除夕夜)",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- **eve**：名詞，指重大節日的前夕、前夜。\n- **the eve of Chinese New Year**：農曆除夕夜（全家聚在一起吃年夜飯 big meal 的時機）。",
    "stem": "We always have a big meal on the ______ of Chinese New Year.",
    "options": [
      "(A) truck",
      "(B) eve",
      "(C) boss",
      "(D) past"
    ],
    "answer": "(B) eve",
    "diagramUrl": "",
    "solution": "2. 專有名詞片語「the eve of Chinese New Year」指「除夕夜」。eve 專指節日前夕，故選 (B) eve。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "2. 專有名詞片語「the eve of Chinese New Year」指「除夕夜」。eve 專指節日前夕，故選 (B) eve。"
  },
  {
    "id": "q_eng_phrasal_verb_woke_up_loud_noise_114",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "審題不清",
    "concept": "英文/動詞片語：wake up (醒來，過去式為 woke up)",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- **wake up (過去式 woke up)**：醒來；甦醒。\n- **led to**：導致；引起（lead to 的過去式）。\n- 玻璃杯掉落發出大聲巨響（fell and made a loud noise），會使嬰兒「醒過來」（woke up）。",
    "stem": "The baby ______ when the glass fell and made a loud (大聲的) noise.",
    "options": [
      "(A) lied",
      "(B) led to",
      "(C) hated",
      "(D) woke up"
    ],
    "answer": "(D) woke up",
    "diagramUrl": "",
    "solution": "2. 受到巨大聲音驚嚇而醒來，動詞用 woke up（wake up 的過去式），故選 (D) woke up。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "2. 受到巨大聲音驚嚇而醒來，動詞用 woke up（wake up 的過去式），故選 (D) woke up。"
  },
  {
    "id": "q_eng_grammar_present_perfect_yet_115",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文/時態文法：現在完成式問句（Have/Has + 主詞 + p.p. ... yet?）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n1. 句尾有提示詞 **yet**（已經；還），且答句為 **Yes, I have.**，可知問句必定為現在完成式。\n2. **現在完成式疑問句句型**：Have / Has + 主詞 + 過去分詞 (p.p.) ... yet?\n3. 主詞為 you，故助動詞用 Have，動詞 watch 改為過去分詞 watched。",
    "stem": "James: ______ you ______ the movie yet?\nJulie: Yes, I have.",
    "options": [
      "(A) Have; watched",
      "(B) Do; watch",
      "(C) Are; watching",
      "(D) Did; watch"
    ],
    "answer": "(A) Have; watched",
    "diagramUrl": "",
    "solution": "3. 主詞為 you，助動詞使用 Have；watch 的過去分詞為 watched，故選 (A) Have; watched。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "3. 主詞為 you，助動詞使用 Have；watch 的過去分詞為 watched，故選 (A) Have; watched。"
  },
  {
    "id": "q_eng_grammar_present_perfect_short_answer_neg_116",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "審題不清",
    "concept": "英文/時態文法：現在完成式疑問句之否定簡答（No, I haven't.）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- 問句用助動詞 **Have** 開頭詢問（Have you finished...?），回答時必須「用什麼助動詞問，就用什麼助動詞答」！\n- 肯定回答：Yes, I have.\n- 否定回答：No, I haven't.",
    "stem": "Mom: Have you finished your homework yet?\nAndy: No, ______.",
    "options": [
      "(A) I don't",
      "(B) I can't",
      "(C) I haven't",
      "(D) I won't"
    ],
    "answer": "(C) I haven't",
    "diagramUrl": "",
    "solution": "3. 否定簡答格式為：No, I haven't.（完整句為 No, I haven't finished my homework yet.），故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "3. 否定簡答格式為：No, I haven't.（完整句為 No, I haven't finished my homework yet.），故選 (C)。"
  },
  {
    "id": "q_eng_grammar_present_perfect_has_mary_ever_117",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文/時態文法：第三人稱單數現在完成式簡答（Yes, she has. 不得縮寫為 she's）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n1. 問句 Has Mary ever been to the US? 主詞為第三人稱單數 Mary，助動詞用 **Has**。\n2. 肯定簡答：Yes, she has.\n3. **超級陷阱**：肯定簡答句中的代名詞與助動詞**絕對不能縮寫**！不能寫成 Yes, she's.（因會被誤認為 is），故 (A) 錯誤，必須選完整的 (B) she has。",
    "stem": "David: Has Mary ever been to the US?\nLaura: Yes, ______.",
    "options": [
      "(A) she's",
      "(B) she has",
      "(C) she does",
      "(D) she can"
    ],
    "answer": "(B) she has",
    "diagramUrl": "",
    "solution": "3. 易錯點：肯定簡答結尾的代名詞與助動詞不能縮寫（不可寫成 Yes, she's），故選 (B) she has。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "3. 易錯點：肯定簡答結尾的代名詞與助動詞不能縮寫（不可寫成 Yes, she's），故選 (B) she has。"
  },
  {
    "id": "q_eng_wh_question_how_long_duration_118",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文/疑問詞辨析：How long 詢問持續時間長短（搭配 for + 時間長度）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- **How long**：詢問「時間持續多久」，答句常搭配 For + 時間長度（如 For almost eight months）。\n- **How often**：詢問「頻率」（如 once a week）。\n- **When**：詢問「時間點」（如 yesterday, last night）。\n- **What time**：詢問「具體時刻點」（如 at 8:00）。",
    "stem": "Jill: ______ have you worked as a waiter here?\nPeter: For almost eight months.",
    "options": [
      "(A) How often",
      "(B) When",
      "(C) How long",
      "(D) What time"
    ],
    "answer": "(C) How long",
    "diagramUrl": "",
    "solution": "How long：詢問時間長短 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "How long：詢問時間長短 故選 (C)。"
  },
  {
    "id": "q_eng_grammar_since_past_point_ago_119",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文/時態文法：介詞 since 與 for 之區分（since + 時間 + ago vs for + 時間長度）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：現在完成式的關鍵介詞公式！\n1. **since + 過去時間點**：例如 since 1970 或 **since 50 years ago**（從五十年前的那一點算起直到現在）。\n2. **for + 一段時間長度**：例如 for 50 years（持續了五十年，後面**不可**加 ago）。\n- 題目句尾有 **ago**，因此只能選 **since**，絕不能選 for！",
    "stem": "My grandparents have been married ______ fifty years ago.",
    "options": [
      "(A) for",
      "(B) since",
      "(C) about",
      "(D) almost"
    ],
    "answer": "(B) since",
    "diagramUrl": "",
    "solution": "1. 本句時態為現在完成式（have been married）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 本句時態為現在完成式（have been married）。 故選 (B)。"
  },
  {
    "id": "q_eng_reading_billboard_kpop_happy_song_120",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "細心審題",
    "concept": "英文/閱讀測驗：Billboard K-pop 2025 排行榜細節檢索與曲風主題對應",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- 題目要求找出適合派對且充滿「快樂音樂（happy song）」的歌曲。\n- 查對表格：TOP 10 歌手 H1-KEY 的歌曲《Summer Was You》主題為「Happy summer energy」（歡樂夏天能量），完全符合需求。",
    "stem": "Amy will throw a potluck party in July, and she wants to choose a happy song to play on that day. Which song might she choose?",
    "options": [
      "(A) Hwasa-Good Goodbye",
      "(B) NMIXX-Blue Valentine",
      "(C) H1-KEY-Summer Was You",
      "(D) WOODZ-I'll Never Love Again"
    ],
    "answer": "(C) H1-KEY-Summer Was You",
    "diagramUrl": "assets/questions/q_eng_billboard_kpop_table_109.png",
    "solution": "H1-KEY《Summer Was You》：Happy summer energy（歡樂的夏天能量） 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "H1-KEY《Summer Was You》：Happy summer energy（歡樂的夏天能量） 故選 (C)。"
  },
  {
    "id": "q_eng_reading_billboard_kpop_jennie_confident_121",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "細心審題",
    "concept": "英文/閱讀測驗：同義字詞代換與主題比對（Be confident and be yourself -> feel confident and strong）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- JENNIE 的歌曲《like JENNIE》主題為「Be confident and be yourself」（展現自信，做你自己）。\n- 選項 (D) 中的「makes me feel confident and strong」（讓我感到自信與強大）精準對應歌詞與主題精神！",
    "stem": "John's class is sharing songs they listened to this week. Which student is talking about like JENNIE?",
    "options": [
      "(A) \"I like this sad song.\"",
      "(B) \"I like the song that was released in summer.\"",
      "(C) \"I like the song that says having a crush on someone.\"",
      "(D) \"I like the song that makes me feel confident and strong.\""
    ],
    "answer": "(D) \"I like the song that makes me feel confident and strong.\"",
    "diagramUrl": "assets/questions/q_eng_billboard_kpop_table_109.png",
    "solution": "喜歡讓我覺得自信且堅強的歌（精準符合 confident 關鍵字） 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "喜歡讓我覺得自信且堅強的歌（精準符合 confident 關鍵字） 故選 (D)。"
  },
  {
    "id": "q_eng_reading_billboard_kpop_true_statement_february_122",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "細心審題",
    "concept": "英文/閱讀測驗：綜合敘述真偽推論與發行月份（Release Date）檢索",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯筆記**：\n- 逐一核對選項：二月發行（February）的歌曲只有 TOP 8 歌手 Kiiikiii 的《I DO ME》（發行日期：2025.02.16），全表只有這一首！因此選項 (B)「There is only one song released in February.」完全正確！",
    "stem": "According to (根據) this reading, which is true?",
    "options": [
      "(A) Billboard is a magazine about history.",
      "(B) There is only one song released in February.",
      "(C) Both ATEEZ and H1-KEY's songs are sad songs.",
      "(D) Good Goodbye tells people to be afraid of love."
    ],
    "answer": "(B) There is only one song released in February.",
    "diagramUrl": "assets/questions/q_eng_billboard_kpop_table_109.png",
    "solution": "illboard 是歷史雜誌：錯誤。文章開頭第一句說明是音樂雜誌（famous American music magazine）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "illboard 是歷史雜誌：錯誤。文章開頭第一句說明是音樂雜誌（famous American music magazine）。 故選 (B)。"
  },
  {
    "id": "q_soc_civ_production_factors_natural_resource_rent_108",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民與社會/經濟學：四大生產要素分類（自然資源、勞力、資本、企業才能）與對應代價報酬（地租、工資、利息、利潤）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：四大生產要素與代價報酬對應必考口訣！\n1. **自然資源（Land）** $\\to$ **地租**（如租用土地、天然礦產、水資源）。\n2. **勞力（Labor）** $\\to$ **工資/薪水**（如招聘員工提供勞動）。\n3. **資本（Capital）** $\\to$ **利息**（如購買機器、電腦設備、廠房倉庫等工具）。\n4. **企業才能（Entrepreneurship）** $\\to$ **利潤**（如創業者整合要素經營風險）。",
    "stem": "(二) 精軒公司在上個月所添購的生產資源如右表所示，根據表中資訊回答下列問題：\n\n根據上表資源判斷，哪一個項目是屬於「自然資源」，精軒公司須支付的代價為何？",
    "answer": "甲項目（租用土地）屬於自然資源，精軒公司租用土地須支付地租。",
    "diagramUrl": "assets/questions/q_soc_civ_production_factors_natural_resource_rent_108.png",
    "solution": "1. 四大生產要素與對應報酬代價總整理：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791010342644,
        "isMastered": true
      }
    ],
    "explanation": "1. 四大生產要素與對應報酬代價總整理："
  },
  {
    "id": "q_soc_civ_law_of_demand_price_effect_115_107",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民與社會/經濟學：需求法則（價格降低導致需求量大增）與價格因素對消費者購買決策之影響",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：需求法則與商品熱銷/超賣現象解題關鍵！\n1. **需求法則（Law of Demand）**：在其他條件不變下，商品【價格降低】，消費者購買該商品付出的代價減少（機會成本降低），【需求量隨之增加】。\n2. **網站搶購暴增主因**：原網頁售價為 19,999 元、供貨量 99 臺。若網頁標錯價將【售價變更為 9,999 元】（降價達 10,000 元！），大幅增加消費者購買意願，才會在短時間內銷售一空且出現數百筆超賣候補訂單！\n3. **錯誤選項排除速記**：(A) 供貨量改 19 臺（只會更快售罄但不會增加數百筆候補）；(B) 供貨量改 999 臺（不會導致搶購爆單）；(D) 售價改 20,999 元（漲價會降低需求量，更賣不掉）。",
    "stem": "右圖是新奇科技購物網站更新前的網頁資訊，某日該網頁內容調整後，幾分鐘內商品突然銷售一空，甚至還多了數百筆的訂單等候補貨。下列何者最可能是造成上述情況的原因？【115 年會考】\n\n○ (A) 供貨量變更為 19 臺\n○ (B) 供貨量變更為 999 臺\n○ (C) 售價變更為 9,999 元\n○ (D) 售價變更為 20,999 元",
    "answer": "(C) 售價變更為 9,999 元",
    "diagramUrl": "assets/questions/q_soc_civ_law_of_demand_price_effect_115_107.png",
    "solution": "1. 經濟學觀念（需求法則）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791010357189,
        "isMastered": true
      }
    ],
    "explanation": "1. 經濟學觀念（需求法則）： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_eu_russia_energy_independence_115_103",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲區域地理與能源政策：擺脫俄羅斯化石燃料依賴之因應措施（減少消耗/開發替代能源/分散進口來源）判讀",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐盟能源安全與脫離俄依賴考點梳理！\n1. **擺脫能源依賴核心策略**：①【減少消耗】（如限制暖氣供應）、②【尋求替代來源】（如發展綠能）、③【分散進口風險】（如與第三國簽署天然氣協議）。\n2. **(B) 促使 OPEC 維持減產之陷阱**：若石油輸出國組織（OPEC）維持減產，會導致【全球國際油價上漲】與【化石燃料供應緊縮】，反而加劇歐盟面臨的能源危機，完全【無助於】擺脫能源依賴！",
    "stem": "報導指出：「在俄烏戰爭爆發之前的 3 年裡，歐盟成員國平均每月從俄羅斯進口約 1,520 萬噸原油和石油產品，到了 2023 年 3 月，該值已下降至 140 萬噸。歐盟預計 2027 年切斷從俄羅斯的化石燃料進口，擺脫對其能源依賴。」下列何項措施無助於達成上述目標？【115 年會考】\n\n○ (A) 制定公共場所更嚴格的暖氣供應標準\n○ (B) 促使石油輸出國家組織維持減產政策\n○ (C) 與其他第三國簽署天然氣的進口協議\n○ (D) 積極發展綠能以增加替代性能源產量",
    "answer": "(B) 促使石油輸出國家組織維持減產政策",
    "diagramUrl": "",
    "solution": "1. 能源轉型與擺脫依賴之核心邏輯： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791010901686,
        "isMastered": true
      }
    ],
    "explanation": "1. 能源轉型與擺脫依賴之核心邏輯： 故選 (B)。"
  },
  {
    "id": "q_soc_geo_russia_terrain_profile_west_to_east_104",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "俄羅斯區域地理與地形剖面：西高東低地勢、由西向東深居內陸氣候特徵（年降水量遞減、溫差加大）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：俄羅斯由西向東（歐俄至西伯利亞）氣候與景觀變化特徵！\n1. **年降水量與水氣來源**：俄羅斯的水氣主要來自西邊的大西洋，由西（甲區，歐俄平原）向東（乙區，西伯利亞高原山地）推進，距海越遠且受山脈阻擋，水氣遞減，【年降水量遞減】！\n2. **氣溫與人口分布**：由西向東，受海洋調節減少影響，1 月均溫越東越低（年溫差越大）；人口高度集中於西部的東歐平原（歐俄），向東人口密度劇降。",
    "stem": "附圖為俄羅斯的地形剖面圖，若芮恩從圖中甲區前往乙區，最可能觀察到下列何種氣候特徵或景觀變化？\n\n○ (A) 年降水量遞減\n○ (B) 人口密度漸增\n○ (C) 地勢高度漸低\n○ (D) 1月月均溫漸增",
    "answer": "(A) 年降水量遞減",
    "diagramUrl": "assets/questions/q_soc_geo_russia_terrain_profile_west_to_east_104.png",
    "solution": "正確（水氣與降水量）：俄羅斯主要的水氣來源為西邊的大西洋。由西（甲）向東（乙）行進，距離大西洋越遠，受西風帶水氣影響越弱，故年降水量呈現遞減趨勢。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791015021881,
        "isMastered": true
      }
    ],
    "explanation": "正確（水氣與降水量）：俄羅斯主要的水氣來源為西邊的大西洋。由西（甲）向東（乙）行進，距離大西洋越遠，受西風帶水氣影響越弱，故年降水量呈現遞減趨勢。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_russia_siberia_development_barriers_105",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "西伯利亞區域開發之限制因素：氣候嚴寒、人口稀少、土地廣袤運輸成本高與資源豐富特徵",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：西伯利亞開發障礙考題關鍵！\n1. **西伯利亞資源特徵**：西伯利亞擁有極其豐富的天然氣、石油、煤炭與森林礦產資源，【絕非自然資源匱乏】！\n2. **外商投資意願低之真實原因**：①【氣候極度嚴寒】（凍土層施工困難）、②【人口稀少】（勞動力極度缺乏）、③【面積遼闊】（交通基礎設施不足，運輸成本高昂）。",
    "stem": "俄羅斯總統普丁上任後即宣布「交通現代化」和「與亞洲結合」為發展西伯利亞地區的重要目標，但歐盟和其他國家的資本家對該區域的投資意願甚低，其原因最不可能為下列何者？\n\n○ (A) 氣候嚴寒，產業發展受限\n○ (B) 人口稀少，勞動力供不應求\n○ (C) 土地面積廣大，運輸成本過高\n○ (D) 自然資源匱乏，原料成本提高",
    "answer": "(D) 自然資源匱乏，原料成本提高",
    "diagramUrl": "",
    "solution": "最不可能（正確）：西伯利亞自然資源極其豐富（如秋明油田、庫斯巴斯煤田等），原料來源無虞，故「資源匱乏」最不可能為投資意願低之原因。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791013040738,
        "isMastered": true
      }
    ],
    "explanation": "最不可能（正確）：西伯利亞自然資源極其豐富（如秋明油田、庫斯巴斯煤田等），原料來源無虞，故「資源匱乏」最不可能為投資意願低之原因。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_eu_cooperation_competitiveness_106",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐盟區域合作與組織特徵：跨國產業合作提升國際競爭力、總部地點（布魯塞爾）、歐元區與申根區非全涵蓋判讀",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐盟四大常見混淆考點梳理！\n1. **歐盟總部**：設於【比利時布魯塞爾】（非義大利羅馬）。\n2. **申根公約（開放邊境）**：僅限【簽署申根公約】之會員國與部分非歐盟國，非所有歐盟國均開放！\n3. **歐元區（統一貨幣）**：僅限【加入歐元區】之國家使用歐元（如瑞典、丹麥等多國未採用歐元），非所有歐盟國通用！\n4. **核心價值**：透過跨國分工與資源共享（如空中巴士飛機跨國合作組裝），【提升整體國際競爭力】！",
    "stem": "歐盟會員國間緊密合作，期待能將歐洲結合展成一個整體。請問：下列關於歐盟的敘述，何者正確？\n\n○ (A) 總部設在義大利羅馬\n○ (B) 所有會員國皆對彼此開放邊境\n○ (C) 所有會員國皆使用統一貨幣歐元\n○ (D) 透過合作生產以提升國際競爭力",
    "answer": "(D) 透過合作生產以提升國際競爭力",
    "diagramUrl": "",
    "solution": "正確：透過區域經濟整合與合作生產，成功強化整體國際競爭力。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791013053572,
        "isMastered": true
      }
    ],
    "explanation": "正確：透過區域經濟整合與合作生產，成功強化整體國際競爭力。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_kaliningrad_nato_enclave_114_101",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "俄羅斯區域地理與飛地地緣政治：加里寧格勒（波羅的海不凍港/北大西洋公約組織包圍之軍事基地）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：加里寧格勒地緣政治與戰略地位分析！\n1. **飛地（Enclave）定義**：加里寧格勒為俄羅斯位於波羅的海沿岸的海外獨立領土（飛地），被立陶宛與波蘭兩 NATO 成員國所環繞。\n2. **戰略與軍事價值**：加里寧格勒是俄羅斯在波羅的海唯二的不凍港之一（波羅的海艦隊總部），在地緣政治上為俄羅斯威嚇與對抗北大西洋公約組織（NATO）的核心前哨軍事基地！\n3. **錯誤選項排除速記**：距東北亞極為遙遠（非東北亞前哨）；波羅的海通往大西洋（非太平洋）；不位居俄羅斯至芬蘭之最短路徑上。",
    "stem": "「俄烏戰爭以來，歐盟對俄羅斯採取大規模的制裁措施，其中立陶宛於 2022 年 6 月 18 日，對經其領土進出俄羅斯加里寧格勒的貨運火車實施限制，因而引發俄羅斯強烈不滿。此一事件也凸顯出加里寧格勒的重要性。」附圖顯示加里寧格勒的位置，根據上下文及圖中資訊判斷，其重要性可用下列何者來說明？【114 年會考】\n\n○ (A) 作為俄羅斯與東北亞國家間的貿易前哨站\n○ (B) 為俄羅斯貨物經波羅的海出太平洋的港口\n○ (C) 位處俄羅斯天然氣輸送至芬蘭的最短路徑上\n○ (D) 是俄羅斯對抗北大西洋公約組織的軍事基地",
    "answer": "(D) 是俄羅斯對抗北大西洋公約組織的軍事基地",
    "diagramUrl": "assets/questions/q_soc_geo_kaliningrad_nato_enclave_114_101.png",
    "solution": "正確：身為夾在 NATO 成員國之間的俄國飛地與不凍港，其最主要戰略功能為對抗 NATO 的前方軍事據點。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791013123110,
        "isMastered": true
      }
    ],
    "explanation": "正確：身為夾在 NATO 成員國之間的俄國飛地與不凍港，其最主要戰略功能為對抗 NATO 的前方軍事據點。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_murmansk_ice_free_port_ocean_current_102",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "洋流與氣候影響：北大西洋暖流使極圈高緯度莫曼斯克成為終年不凍港",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：莫曼斯克高緯不凍港解題關鍵！\n1. **北極圈內最大城市／不凍港**：莫曼斯克（Murmansk）位於北緯 68 度（北極圈內巴倫支海沿岸），雖緯度高但終年不結冰！\n2. **主因（北大西洋暖流增溫增濕）**：強大的【北大西洋暖流】沿西歐延伸至北極海沿岸，為該海域帶來高溫高鹽的海水，使其成為俄羅斯北極海沿岸唯一終年不封凍的優良軍港與商港！\n3. **其他洋流位置對比**：親潮（日本東岸/千島群島涼流）；本吉拉涼流（非洲西南部）；阿古拉斯暖流（非洲東南部）。",
    "stem": "附圖▲為俄羅斯莫曼斯克，不僅是俄羅斯重要的海港，更是北極圈內最大的城市，該國主要是受到下列哪股洋流影響，使其成為終年不結凍的不凍港？\n\n○ (A) 親潮\n○ (B) 本吉拉涼流\n○ (C) 阿古拉斯暖流\n○ (D) 北大西洋暖流",
    "answer": "(D) 北大西洋暖流",
    "diagramUrl": "assets/questions/q_soc_geo_murmansk_ice_free_port_ocean_current_102.png",
    "solution": "北大西洋暖流（正確）：流經歐洲西岸延伸至北極海，影響莫曼斯克港口增溫。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791013131864,
        "isMastered": true
      }
    ],
    "explanation": "北大西洋暖流（正確）：流經歐洲西岸延伸至北極海，影響莫曼斯克港口增溫。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_russia_moscow_industrial_area_100",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "俄羅斯區域地理與主要工業區：莫斯科工業區（人口密集、交通便利、市場導向）與礦產原料導向工業區之比較判讀",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：俄羅斯四大工業區區位導向對照！\n1. **莫斯科工業區**：【市場、人口勞動力、交通便利】（歐俄精華區，唯一以市場與人口交通為主的工業區）。\n2. **烏拉爾山工業區**：【鐵礦金屬】（礦產原料導向）。\n3. **庫斯內次工業區**：【煤礦】（庫斯巴斯煤田，燃料/原料導向）。\n4. **貝加爾湖工業區**：【水力發電與森林礦產】（能源/原料導向）。",
    "stem": "「重工業」是俄羅斯的重點發展產業，其境內哪個工業區是因人口密集、交通便利，且接近廣大市場而興起？\n\n○ (A) 莫斯科工業區\n○ (B) 烏拉爾山工業區\n○ (C) 庫斯內次工業區\n○ (D) 貝加爾湖工業區",
    "answer": "(A) 莫斯科工業區",
    "diagramUrl": "",
    "solution": "1. 俄羅斯工業區位條件特徵： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791013137506,
        "isMastered": true
      }
    ],
    "explanation": "1. 俄羅斯工業區位條件特徵： 故選 (A)。"
  },
  {
    "id": "q_soc_geo_eu_eastward_expansion_2004_099",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲區域地理與歐盟東擴：冷戰後政治經濟體制轉型及 2004 年加入歐盟之東歐國家分區判讀",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐盟發展與東擴考點梳理！\n1. **冷戰後體制轉型**：東歐國家原屬共產陣營，冷戰結束後轉型為市場經濟與民主政治，並積極加入歐盟以提振經濟。\n2. **2004 年歐盟東擴關鍵字**：波蘭、捷克、匈牙利、斯洛伐克（中東歐）、波羅的海三小國（愛沙尼亞、拉脫維亞、立陶宛）、羅馬尼亞與保加利亞等均位於【東歐】區域！",
    "stem": "歐洲共同體 12 國於 1993 年轉為歐洲聯盟，其後不斷納入新會員國。在 2004 年後，有波蘭、捷克、匈牙利、斯洛伐克、斯洛維尼亞、愛沙尼亞、拉脫維亞、立陶宛、羅馬尼亞及保加利亞等國加入。請問：2004 年後加入歐盟的會員國，大多位在歐洲哪個分區？\n\n○ (A) 北歐\n○ (B) 西歐\n○ (C) 南歐\n○ (D) 東歐",
    "answer": "(D) 東歐",
    "diagramUrl": "",
    "solution": "東歐（正確）：題幹所列舉之國家主要地理分區均屬於東歐。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791013228294,
        "isMastered": true
      }
    ],
    "explanation": "東歐（正確）：題幹所列舉之國家主要地理分區均屬於東歐。 故選 (D)。"
  },
  {
    "id": "q_math_similar_polygons_outward_extension_098",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "相似多邊形判定：對應角相等且對應邊長成比例（正多邊形/菱形向外等寬擴張之相似性驗證）",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：幾何圖形向外延伸相同寬度的【相似性判讀陷阱】！\n1. **相似多邊形雙重充要條件**：必須【對應角相等】且【對應邊長成比例】！缺一不可！\n2. **各幾何圖形外擴相同寬度 d 判定**：\n   - **(A) 正三角形**：外擴後仍為正三角形，內角皆為 60 度，三邊長皆增加相同長度，邊長比為定值！【相似】\n   - **(B) 長方形**：長 a、寬 b（a ≠ b）各自增加 2d 後，(a + 2d)/a ≠ (b + 2d)/b，對應邊不成比例！【不相似】\n   - **(C) 菱形**：四邊向外垂直擴展 d，對應內角完全相等，四邊長皆增加相同長度 Δs，邊長比 (s + Δs) : s 皆相等！【相似】\n   - **(D) 平行四邊形**：兩組鄰邊增加長度後，邊長比 (a + Δa) : (b + Δb) ≠ a : b，對應邊不成比例！【不相似】\n   - **(E) 等腰梯形**：上底、下底與腰長加上相同的擴張寬度後，長度增加比例不一致，對應邊不成比例！【不相似】",
    "stem": "下列圖形皆由內向外延長相等的寬度，請選出與原圖成為相似圖形的為何？（複選題）\n\n○ (A) 正三角形\n○ (B) 長方形\n○ (C) 菱形\n○ (D) 平行四邊形\n○ (E) 等腰梯形",
    "answer": "(A) 正三角形、(C) 菱形",
    "diagramUrl": "assets/questions/q_math_similar_polygons_outward_extension_098.png",
    "solution": "正三角形（相似）：向外延長相同寬度後，內角皆保持 60 度（對應角相等），且新圖形三邊長均變大相同長度，新舊邊長比恆定（對應邊成比例）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791024381859,
        "isMastered": true
      }
    ],
    "explanation": "正三角形（相似）：向外延長相同寬度後，內角皆保持 60 度（對應角相等），且新圖形三邊長均變大相同長度，新舊邊長比恆定（對應邊成比例）。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_china_migration_ningxia_108_097",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國區域發展與環境問題：農牧過渡帶（黃土高原/西海固生態移民）、氣候乾燥與水土流失判讀",
    "uploadDate": "2026-10-01",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：中國氣候與行政區解題關鍵！\n1. **關鍵特徵解碼**：題幹提及【農牧過渡地帶】、【氣候乾燥少雨】、【水土流失嚴重】與【2011 年生態搬遷（西海固移民）】，指出該區為黃土高原南部及內陸乾旱/半乾旱交界處之【寧夏回族自治區】（圖中標示 **乙**）。\n2. **各標示行政區定位對照**：\n   - **甲（黑龍江省）**：東北地區，屬溫帶季風氣候，氣候濕潤/半濕潤，森林與黑土資源豐富，非乾燥少雨區。\n   - **乙（寧夏回族自治區）**：西北內陸，氣候乾燥少雨、地處黃土高原水土流失區域（西海固地區曾被聯合國列為最不適宜居住區之一）。\n   - **丙（湖南省）**：華中地區，屬亞熱帶季風氣候，降雨豐沛。\n   - **丁（廣西壯族自治區）**：華南地區，屬亞熱帶/熱帶季風氣候，氣候潮濕多雨。",
    "stem": "中國某行政區的南部位於農牧過渡地帶，因氣候乾燥少雨、生態環境脆弱、水土流失嚴重及自然災害頻繁，被聯合國認為是最不適宜人類生存的地區之一，因此 2011 年當地政府對人民實施搬遷計畫。上述行政區應是附圖中何者？【108 年會考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(B) 乙",
    "diagramUrl": "assets/questions/q_soc_geo_china_migration_ningxia_108_097.png",
    "solution": "乙——寧夏回族自治區（正確）：位於西北內陸，南部位於農牧過渡帶與黃土高原水土流失區，氣候乾燥少雨，完全符合題意。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-01",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "乙——寧夏回族自治區（正確）：位於西北內陸，南部位於農牧過渡帶與黃土高原水土流失區，氣候乾燥少雨，完全符合題意。 故選 (B)。"
  },
  {
    "id": "q_earth_salt_lake_formation_climate_020",
    "examPeriod": "二段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "鹹水湖成因與環境條件：乾燥少雨 (蒸發量 > 降水量) 且 淡水只進不出 (內陸湖無流出口，鹽分累積)",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（鹹水湖形成雙重必要條件）**：\n• 條件一（氣候）：**乾燥少雨** ➜ 強烈蒸發作用（蒸發量遠大於降水量），水份不斷蒸發被抽走。\n• 條件二（水文）：**淡水只進不出** ➜ 屬於內陸封閉水體，河流把少許礦物質/鹽分帶入湖中後無流出口帶走，鹽分日積月累濃縮成鹹水湖（如死海、裏海）。",
    "stem": "鹹水湖通常出現的地區多是在下列何種氣候及環境下形成？\n\n○ (A) 潮溼多雨，淡水有進有出\n○ (B) 潮溼多雨，淡水只進不出\n○ (C) 乾燥少雨，淡水有進有出\n○ (D) 乾燥少雨，淡水只進不出",
    "answer": "(D)",
    "diagramUrl": "",
    "solution": "乾燥少雨，淡水只進不出：完全符合鹹水湖形成的地理環境（本題答案）。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-06",
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274776204,
        "isMastered": true
      }
    ],
    "explanation": "乾燥少雨，淡水只進不出：完全符合鹹水湖形成的地理環境（本題答案）。 故選 (D)。"
  },
  {
    "id": "q_earth_groundwater_profile_layer_profile_021",
    "examPeriod": "二段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地下水面與地下水剖面圖判定：地下水面為「未飽和帶(甲)」與「飽和帶(乙)」之分界面，非不含水層",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（地下水面定義陷阱）**：\n• 地下水面概念：地下水面（藍色虛線）並非介於兩個「不同岩層」之間，而是**同一個透水層中「未飽和帶（甲）」與「飽和帶（乙）」的分界面**！\n• 飽和帶（乙）：孔隙完全被水填滿的水體區域。\n• 湧泉（丙）：當地下水面高於地表或地表地形向下凹陷切穿地下水面時（丙處），地下水便會自然湧出形成泉水或補給河川。",
    "stem": "右圖為某地地層和地下水的剖面圖，根據此圖推論，下列敘述何者錯誤？\n\n○ (A) 地下水面位於不含水層甲與含水層乙之間\n○ (B) 旱季時，地下水可與河水互相調節\n○ (C) 泉水可能由丙處湧出\n○ (D) 地勢高低會影響地下水面高度",
    "answer": "(A)",
    "diagramUrl": "assets/questions/q_earth_groundwater_profile_021.png",
    "solution": "錯誤：甲為「未飽和帶（含水但不飽和）」，乙為「飽和帶（孔隙填滿地下水）」。地下水面是甲與乙的分界面，甲並非不含水層（本題選錯誤者，答案選 A）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-06",
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274869581,
        "isMastered": false
      }
    ],
    "explanation": "錯誤：甲為「未飽和帶（含水但不飽和）」，乙為「飽和帶（孔隙填滿地下水）」。地下水面是甲與乙的分界面，甲並非不含水層（本題選錯誤者，答案選 A）。"
  },
  {
    "id": "q_earth_freshwater_resources_underground_016",
    "examPeriod": "二段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "人類可直接利用之淡水資源：地下水占最多（冰川為固體、海水鹹度高）",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（淡水資源儲量 vs 可利用量）**：\n• 全球淡水總儲量最多的是「冰川」（約占淡水 68%），但固體冰川多分布於極地高山，極難直接利用！\n• 人類真正能「直接採集利用」的淡水資源中，以「地下水」占最多（約占淡水 30%）。",
    "stem": "人類實際上可直接利用的淡水資源，以下列何項占最多？\n\n○ (A) 海水\n○ (B) 冰川\n○ (C) 地下水\n○ (D) 海冰",
    "answer": "(C)",
    "diagramUrl": "",
    "solution": "地下水：占淡水總量約 30%，是人類實際上最主要且可直接開發利用的淡水資源（本題答案）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-07",
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791328617748,
        "isMastered": true
      }
    ],
    "explanation": "地下水：占淡水總量約 30%，是人類實際上最主要且可直接開發利用的淡水資源（本題答案）。 故選 (C)。"
  },
  {
    "id": "q_earth_seawater_salinity_subtropical_017",
    "examPeriod": "二段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "海水鹽度決定因素：蒸發量 > 降水量的副熱帶海域鹽度最高",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（影響海水鹽度的兩大推手）**：\n• 鹽度增加原因：蒸發量大於降水量（如副熱帶高壓帶，氣流下沉多晴朗乾燥天氣）。\n• 鹽度降低原因：降水多（如赤道多雨區）或淡水注入量大（如大河入海口/海陸交界）。",
    "stem": "各海域的鹽度，會受降水量、蒸發量和河水注入量的影響，因此在下列哪一個區域的鹽度會較高？\n\n○ (A) 赤道地區海域\n○ (B) 副熱帶地區海域\n○ (C) 熱帶多雨的海域\n○ (D) 海陸交界地區海域",
    "answer": "(B)",
    "diagramUrl": "",
    "solution": "副熱帶地區海域：受副熱帶高壓下沉氣流控制，天氣晴朗乾燥，蒸發量 > 降水量，海水蒸發旺盛致鹽度最高（本題答案）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-07",
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791329121397,
        "isMastered": false
      }
    ],
    "explanation": "副熱帶地區海域：受副熱帶高壓下沉氣流控制，天氣晴朗乾燥，蒸發量 > 降水量，海水蒸發旺盛致鹽度最高（本題答案）。 故選 (B)。"
  },
  {
    "id": "q_earth_water_distribution_atmosphere_018",
    "examPeriod": "二段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "地球水圈水體分布觀念：大氣中水氣占水圈總水量極稀少比例 (<0.001%)",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（地球水體分布觀念導正）**：\n• 陸地上也有「鹹水湖」（如死海、裏海），鹹水不只儲存在海洋！\n• 南北半球海洋面積不相等（南半球海洋面積遠大於北半球）。\n• 人類可直接利用淡水僅占全球總水量約 1%（非 5%）。\n• 大氣中水氣占水圈總水量極為微小（少於 0.001%）。",
    "stem": "有關水的分布，下列敘述何者正確？\n\n○ (A) 地表面有 71% 以上的面積被水覆蓋，且在南、北半球的海洋面積差不多\n○ (B) 全球的鹹水水體全部都儲存在海洋中\n○ (C) 可供人類直接使用的水資源，占全球總水量約 5%\n○ (D) 大氣中的水氣，在水圈中所占的含量非常稀少",
    "answer": "(D)",
    "diagramUrl": "",
    "solution": "正確：大氣中的水氣（雲、霧、水蒸氣）雖然對天氣變化至關重要，但占整個水圈總水量的比例非常稀少（少於 0.001%）（本題答案）。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-07",
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791360656391,
        "isMastered": true
      }
    ],
    "explanation": "正確：大氣中的水氣（雲、霧、水蒸氣）雖然對天氣變化至關重要，但占整個水圈總水量的比例非常稀少（少於 0.001%）（本題答案）。 故選 (D)。"
  },
  {
    "id": "q_earth_spheres_lithosphere_definition_019",
    "examPeriod": "二段",
    "subject": "自然",
    "errorReason": "審題不清",
    "concept": "地球圈層定義：岩石圈包含大陸地殼、海洋地殼及軟流圈以上的上部地幔（包含海底岩層）",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（岩石圈範圍定義）**：\n• 岩石圈（Lithosphere）包含：地殼（大陸地殼 + 海洋地殼）以及地幔最頂部的堅硬岩石（軟流圈之上）。\n• 錯誤陷阱：岩石圈**絕非**「專指陸地上」的岩層，海底下方同樣屬於岩石圈範疇！",
    "stem": "關於地球的描述，下列何者錯誤？\n\n○ (A) 水氣存在於大氣圈中\n○ (B) 水圈、岩石圈及大氣圈彼此會交互作用\n○ (C) 陸地上的湖泊屬於水圈的範圍\n○ (D) 岩石圈是專指分布在地表上陸地的岩層",
    "answer": "(D)",
    "diagramUrl": "",
    "solution": "錯誤：岩石圈範圍涵蓋「大陸地殼」與「海洋地殼」，以及地幔頂部的硬岩層，並非專指陸地上的岩層（本題選錯誤者，答案選 D）。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-07",
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791360741547,
        "isMastered": true
      }
    ],
    "explanation": "錯誤：岩石圈範圍涵蓋「大陸地殼」與「海洋地殼」，以及地幔頂部的硬岩層，並非專指陸地上的岩層（本題選錯誤者，答案選 D）。"
  },
  {
    "id": "q_eng_adv_a_lot_hotter_014",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "比較級程度修飾詞：a lot / much / even / a little + 比較級 (hotter)",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（比較級修飾語禁忌）**：\n• 核心規則：hotter 本身已經是形容詞比較級，前面**嚴禁**重複加 more（例如 ✕ more hotter）！\n• 比較級程度修飾詞：修飾「更熱許多/程度差異」時，可用 a lot, much, even, a little, far 等。",
    "stem": "It's ________ hotter today than yesterday.\n\n○ (A) ever\n○ (B) more\n○ (C) lots of\n○ (D) a lot",
    "answer": "(D)",
    "diagramUrl": "",
    "solution": "a lot：很、許多（副詞片語，可修飾比較級 a lot hotter，本題答案）。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006109694,
        "isMastered": true
      }
    ],
    "explanation": "a lot：很、許多（副詞片語，可修飾比較級 a lot hotter，本題答案）。 故選 (D)。"
  },
  {
    "id": "q_math_poly_horner_eval_d_015",
    "examPeriod": "二段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "多項式連續綜合除法（泰勒展式型態）：求常數項 d 可令 x + 2 = 0 (代入 x = -2)",
    "uploadDate": "2026-09-29",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（多項式連續綜合除法與特值代入）**：\n• 快速破題關鍵：要求的 d 為展開式最終常數項，最快解法是令 x + 2 = 0（即 x = -2 代入），此時前三項含有 (x+2) 的項目全數為 0，直接出 d！\n• 負數次方號變化：(-2)³ = -8 ➜ 3(-8) = -24；(-2)² = 4 ➜ 2(4) = 8；-3(-2) = 6。總和 -24 + 8 + 6 - 1 = -11。",
    "stem": "設 3x³ + 2x² - 3x - 1 = a(x + 2)³ + b(x + 2)² + c(x + 2) + d，求 d = ？\n\n○ (A) -11\n○ (B) -9\n○ (C) 1\n○ (D) 25",
    "answer": "(A)",
    "diagramUrl": "",
    "solution": "1. 破題關鍵（特值代入法）： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-29",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791024672569,
        "isMastered": false
      }
    ],
    "explanation": "1. 破題關鍵（特值代入法）： 故選 (A)。"
  },
  {
    "id": "q_eng_adv_almost_race_contrast_012",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "副詞詞義與轉折句型推論：almost (幾乎/差一點) 與 However 跌倒形成轉折對比",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（副詞詞義與轉折句型）**：\n• 轉折關鍵句：However, she fell at the last second and only came in third...（然而她在最後一刻跌倒，最終只得第三名）。\n• 前後語意邏輯：必須是「差一點/幾乎 (almost)」第一名抵達終點，才能與後半句「最後一刻跌倒只得第三名」構成此轉折關係！",
    "stem": "During the race yesterday, Julie ________ got to the finish line first. However, she fell at the last second and only came in third in the end.\n\n○ (A) almost\n○ (B) already\n○ (C) finally\n○ (D) quickly",
    "answer": "(A)",
    "diagramUrl": "",
    "solution": "almost：幾乎、差一點（符合語境「幾乎第一個衝線但最後跌倒」，答案）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006151828,
        "isMastered": true
      }
    ],
    "explanation": "almost：幾乎、差一點（符合語境「幾乎第一個衝線但最後跌倒」，答案）。 故選 (A)。"
  },
  {
    "id": "q_eng_adj_only_tennis_club_cap109_013",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "粗心大意",
    "concept": "形容詞詞義與上下文推論：the only N. (唯一的...) 與 too... to... 句型 (109年會考補考)",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（形容詞與上下文解題線索）**：\n• 關鍵說明句：He was too busy to join any other club.（他太忙了以致於無法參加任何其他社團）。\n• 邏輯推論：因為沒有空參加其他任何社團，代表網球社是他去年「唯一 (only)」參加的社團！",
    "stem": "Southwell Tennis Club was the ________ club that David joined last year. He was too busy to join any other club.【109年會考補考】\n\n○ (A) best\n○ (B) first\n○ (C) only\n○ (D) other",
    "answer": "(C)",
    "diagramUrl": "",
    "solution": "only：唯一的（the only + N. 指「唯一的……」，符合無參加其他社團之語境，答案）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006211165,
        "isMastered": false
      }
    ],
    "explanation": "only：唯一的（the only + N. 指「唯一的……」，符合無參加其他社團之語境，答案）。 故選 (C)。"
  },
  {
    "id": "q_eng_adv_lightly_cap106_011",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "副詞詞義與句意上下文推論：lightly (輕巧地/輕盈地) 修飾 walks (106年會考)",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（副詞詞義與關鍵上下文對照）**：\n• 關鍵線索句 1：you don't even know she's just passed by（你甚至沒發現她剛路過）\n• 關鍵線索句 2：You wonder if her feet ever touch the floor.（好奇她的腳到底有沒有碰到地板）\n• 語義比對：只有「輕巧地/輕盈地 (lightly)」走路才能達到幾乎悄無聲息、腳不著地般的輕盈效果！",
    "stem": "Sabine walks so ________ in the apartment that sometimes you don't even know she's just passed by. You wonder if her feet ever touch the floor.【106年會考】\n\n○ (A) freely\n○ (B) lightly\n○ (C) shyly\n○ (D) slowly",
    "answer": "(B)",
    "diagramUrl": "",
    "solution": "lightly：輕巧地、輕盈地（符合「悄無聲息、腳不著地」之意境，本題答案）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006223697,
        "isMastered": true
      }
    ],
    "explanation": "lightly：輕巧地、輕盈地（符合「悄無聲息、腳不著地」之意境，本題答案）。 故選 (B)。"
  },
  {
    "id": "q_eng_freq_adverb_elliptical_clause_010",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "頻率副詞位置與 be 動詞對比簡略句：省略句中頻率副詞放在主詞與 be 動詞之間 (never is)",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記（頻率副詞簡略句特例）**：\n• 一般完整句：頻率副詞習慣放在 be 動詞「之後」（如：He **is never** hungry.）。\n• **簡略句/省略句（本題考點特例）**：當 be 動詞後的形容詞或補充語被省略時（省略 hungry），頻率副詞須前移放在「主詞與 be 動詞之間」（如：...but her brother **never is** [hungry].）！",
    "stem": "Lily is always hungry after school, but her brother ________.\n\n○ (A) is never\n○ (B) does never\n○ (C) never is\n○ (D) never does",
    "answer": "(C)",
    "diagramUrl": "",
    "solution": "1. 動詞種類對齊： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006242491,
        "isMastered": true
      }
    ],
    "explanation": "1. 動詞種類對齊： 故選 (C)。"
  },
  {
    "id": "q_chi_phonetics_fang_pu_xue_011",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "粗心大意",
    "concept": "形近字與多音字讀音辨析：遊「舫」/明查暗「訪」均讀 ㄈㄤˇ",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：\n• (A) 「踅」了一趟 (ㄒㄩㄝˊ) ／ 空谷「跫」音 (ㄑㄩㄥˊ)\n• (B) 老「圃」黃花 (ㄆㄨˇ) ／ 山中小「鋪」 (ㄆㄨˋ)\n• (C) 遊「舫」如織 (ㄈㄤˇ) ／ 明查暗「訪」 (ㄈㄤˇ) ➜ 讀音兩兩相同，正確！\n• (D) 青的「靛」青 (ㄉㄧㄢˋ) ／ 花朵「綻」放 (ㄓㄢˋ)",
    "stem": "下列「 」中的字，何組讀音兩兩相同？\n\n○ (A) 「踅」了一趟／空谷「跫」音\n○ (B) 老「圃」黃花／山中小「鋪」\n○ (C) 遊「舫」如織／明查暗「訪」\n○ (D) 青的「靛」青／花朵「綻」放。",
    "answer": "(C)",
    "diagramUrl": "",
    "solution": "1. 各選項讀音標註與解析： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791003717940,
        "isMastered": true
      }
    ],
    "explanation": "1. 各選項讀音標註與解析： 故選 (C)。"
  },
  {
    "id": "q_chi_daming_lake_rhetoric_numbers_012",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "修辭數字虛實判讀：一城山色「半」城湖之「半」字表比例範圍廣大之虛數",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：\n• (A) 「四」面荷花「三」面柳 ➜ 實數（指東、西、北各方具體地理與荷柳圍繞方位）。\n• (B) 「一」城山色「半」城湖 ➜ 虛數！「半」字在此非精確算術的二分之一，而是形容大明湖佔據濟南城相當廣大的面積區域。\n• (C) 「一」盞寒泉 ➜ 實數（實指一杯、一盞寒泉水）。\n• (D) 「三」更畫舫 ➜ 實數（具體夜間三更，即夜間23點至01點）。",
    "stem": "下列「 」中的數字，何者是虛數？\n\n○ (A) 「四」面荷花三面柳\n○ (B) 「一」城山色「半」城湖\n○ (C) 「一」盞寒泉薦秋菊\n○ (D) 「三」更畫舫穿藕花。",
    "answer": "(B)",
    "diagramUrl": "",
    "solution": "虛數（本題答案）：對聯「一城山色半城湖」，句中的「半」字並非精確的二分之一面積算術，而是誇張形容大明湖浩瀚廣闊，幾乎佔了濟南城很大一部分。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791003728262,
        "isMastered": true
      }
    ],
    "explanation": "虛數（本題答案）：對聯「一城山色半城湖」，句中的「半」字並非精確的二分之一面積算術，而是誇張形容大明湖浩瀚廣闊，幾乎佔了濟南城很大一部分。 故選 (B)。"
  },
  {
    "id": "q_chi_rhetoric_emotion_in_scenery_013",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "寫作手法判讀：「寓情於景」vs 客觀寫實筆法（千佛山風景摹寫屬客觀寫實）",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：題目要求選出【沒有】使用「寓情於景」者！\n• (A) 楓橋夜泊藉江楓漁火映襯「愁眠」羈旅之情。\n• (B) 黃鶴樓送別藉「孤帆遠影」、「長江天際流」展現依依不捨。\n• (C) 記承天夜遊藉月光竹柏抒發超脫曠達之「閒人」情懷。\n• (D) 《老殘遊記》描寫千佛山上「梵宇僧樓與蒼松翠柏高下相間」為客觀視覺寫實摹寫，無主觀寓情於景！",
    "stem": "下列文句，何者沒有使用「寓情於景」的手法？\n\n○ (A) 月落烏啼霜滿天，江楓漁火對愁眠\n○ (B) 孤帆遠影碧山盡，唯見長江天際流\n○ (C) 何夜無月？何處無竹柏？但少閒人如吾兩人耳\n○ (D) 只見對面千佛山上，梵宇僧樓，與那蒼松翠柏，高下相間。",
    "answer": "(D)",
    "diagramUrl": "",
    "solution": "沒有使用（本題答案）：節錄自劉鶚《老殘遊記·大明湖》，僅運用視覺色彩與高低層次，客觀寫實地描繪千佛山上的寺廟建築與樹木景象，屬於純粹的客觀景物摹寫，未融入作者主觀情感。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791005585751,
        "isMastered": true
      }
    ],
    "explanation": "沒有使用（本題答案）：節錄自劉鶚《老殘遊記·大明湖》，僅運用視覺色彩與高低層次，客觀寫實地描繪千佛山上的寺廟建築與樹木景象，屬於純粹的客觀景物摹寫，未融入作者主觀情感。 故選 (D)。"
  },
  {
    "id": "q_chi_idiom_xu_ying_yi_gu_shi_014",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "成語詞義理解：「虛應一故事」指照例敷衍應付，做事態度同「虛與委蛇」",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：\n• 「虛應一故事」：指依照舊例（故事：舊有的規章慣例）假裝應付一下，形容做事態度表面敷衍、缺乏誠意。\n• (A) 鄭重其事：態度莊重認真。\n• (B) 虛與委蛇：假意殷勤、敷衍應付（與「虛應一故事」相同，正確！）。\n• (C) 墨守成規：固執守著舊規矩不肯變通。\n• (D) 吹毛求疵：故意挑剔毛病缺點。",
    "stem": "小強做事總是「虛應一故事」，這是形容他的做事態度如何？\n\n○ (A) 鄭重其事\n○ (B) 虛與委蛇\n○ (C) 墨守成規\n○ (D) 吹毛求疵。",
    "answer": "(B)",
    "diagramUrl": "",
    "solution": "虛與委蛇 (ㄒㄩ ㄩˇ ㄨㄟ ㄧˊ)：指對人對事表面上假意殷勤、順從應付，實際上缺乏誠意（同義詞，本題答案）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791005623315,
        "isMastered": true
      }
    ],
    "explanation": "虛與委蛇 (ㄒㄩ ㄩˇ ㄨㄟ ㄧˊ)：指對人對事表面上假意殷勤、順從應付，實際上缺乏誠意（同義詞，本題答案）。 故選 (B)。"
  },
  {
    "id": "q_chi_daming_lake_quotes_scenery_007",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "大明湖 (老殘遊記)：文句描繪對象判讀「家家泉水，戶戶垂楊」形容初至濟南城特色",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：\n• (A) 「家家泉水，戶戶垂楊」形容初至濟南城時所見的獨特城市水鄉風貌。\n• (B) 「紅的火紅，白的雪白，青的靛青，綠的碧綠」形容千佛山上梵宇僧樓與蒼松翠柏高下相間之景緻（非百花爭妍）。\n• (C) 「趙千里的大畫」喻千佛山景色之美；「數十里長的屏風」喻千佛山山勢（非湖面）。\n• (D) 「粉紅絨毯」形容被夕陽染紅的「蘆花」（非荷花倒影）。",
    "stem": "以下皆是大明湖中描寫景色的文句，何者說明正確？\n\n○ (A) 「家家泉水，戶戶垂楊」寫初至濟南城所見的特殊景觀\n○ (B) 「紅的火紅，白的雪白，青的靛青，綠的碧綠」形容百花爭妍，美不勝收的景色\n○ (C) 「彷彿宋人趙千里的一幅大畫，做了一架數十里長屏風」比喻湖面遼闊，風景如畫\n○ (D) 「一片白花映著帶水氣的斜陽，好似一條粉紅絨毯」指荷花在湖面的倒影，被夕陽染紅的景色。",
    "answer": "(A)",
    "diagramUrl": "",
    "solution": "正確：「家家泉水，戶戶垂楊」為老殘剛進濟南府城時，所見濟南「泉城」特色景觀的經典名句。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791005642986,
        "isMastered": true
      }
    ],
    "explanation": "正確：「家家泉水，戶戶垂楊」為老殘剛進濟南府城時，所見濟南「泉城」特色景觀的經典名句。 故選 (A)。"
  },
  {
    "id": "q_chi_daming_lake_narrative_style_008",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "粗心大意",
    "concept": "大明湖 (老殘遊記)：寫作手法與對聯穿插技巧判讀",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：\n• (A) 開頭僅「簡單交代」投宿濟南過程（非詳細敘述）。\n• (B) 全文採「順敘」手法（時間與遊歷路線先後），非倒敘。\n• (C) 文中穿插古人對聯（歷下亭、鐵公祠聯語），豐富遊記人文內涵，正確！\n• (D) 主力描繪千佛山與大明湖的「秋景」（秋山紅葉，老圃黃花），非春景。",
    "stem": "下列關於大明湖一文的敘述，何者正確？\n\n○ (A) 文章開頭對投宿濟南的過程敘述詳細\n○ (B) 全文以倒敘手法，記載旅途所見所聞\n○ (C) 文中穿插古人聯語，豐富遊記內容\n○ (D) 對千佛山、大明湖的春景描繪深刻。",
    "answer": "(C)",
    "diagramUrl": "",
    "solution": "正確：文中引用歷下亭「歷下此亭古，濟南名士多」與鐵公祠「四面荷花三面柳，一城山色半城湖」等古人對聯，增添濃厚之人文底蘊與采風特色。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791005774865,
        "isMastered": true
      }
    ],
    "explanation": "正確：文中引用歷下亭「歷下此亭古，濟南名士多」與鐵公祠「四面荷花三面柳，一城山色半城湖」等古人對聯，增添濃厚之人文底蘊與采風特色。 故選 (C)。"
  },
  {
    "id": "q_chi_daming_lake_narrative_perspective_009",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "大明湖 (老殘遊記)：小說敘事觀點判讀（第三人稱旁觀寫實）",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：《老殘遊記》雖以老殘（劉鶚化身）為主角，但敘述視角採用【第三人稱觀點】與【客觀寫實筆調】描繪，非第一人稱主觀視角！",
    "stem": "關於大明湖一文，下列何者敘述「不正確」？\n\n○ (A) 內容上是一篇遊記\n○ (B) 文中的主角老殘是指劉鶚自己\n○ (C) 採第一人稱觀點，筆調較主觀\n○ (D) 文筆清新，寫景多持摹寫筆法。",
    "answer": "(C)",
    "diagramUrl": "",
    "solution": "錯誤（本題答案）：全文採用「第三人稱觀點」與客觀描摹筆調呈現老殘所見所聞，而非第一人稱（我）主觀抒情。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791005836974,
        "isMastered": true
      }
    ],
    "explanation": "錯誤（本題答案）：全文採用「第三人稱觀點」與客觀描摹筆調呈現老殘所見所聞，而非第一人稱（我）主觀抒情。 故選 (C)。"
  },
  {
    "id": "q_chi_daming_lake_season_matching_010",
    "examPeriod": "二段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "古典詩詞季節判讀：老殘遊大明湖季節（秋季：紅葉、黃花、商意）",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (本週最新題)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：\n• 題幹「一路秋山紅葉，老圃黃花」：紅葉（楓葉）、黃花（菊花）均代表【秋季】。\n• (A) 「商意滿林薄」：「商意」對應五音中秋季之「商音」（即秋風秋意），屬【秋季】，與題幹相同！\n• (B) 「黃梅時節」為【夏季】。\n• (C) 「晝長」、「蟬鳴」為【夏季】。\n• (D) 「新竹」、「桑四圍」為【夏季】。",
    "stem": "由「一路秋山紅葉，老圃黃花」可知，老殘遊大明湖時的季節與下列何者相同？\n\n○ (A) 不覺商意滿林薄\n○ (B) 黃梅時節家家雨\n○ (C) 晝長吟罷蟬鳴樹\n○ (D) 新竹壓簷桑四圍。",
    "answer": "(A)",
    "diagramUrl": "",
    "solution": "正確：「商意」指古代五音（宮商角徵羽）中對應秋季的商音，象徵秋風與秋意充滿樹林薄霧，為【秋季】。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791005868781,
        "isMastered": false
      }
    ],
    "explanation": "正確：「商意」指古代五音（宮商角徵羽）中對應秋季的商音，象徵秋風與秋意充滿樹林薄霧，為【秋季】。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_north_sea_oil_field_uk_norway_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲資源與海域位置：北海（乙）油田開發使英國、挪威、丹麥獲得龐大原油收入與石化動力",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲海域與石油資源破題關鍵！1960年代在【(乙)北海】發現豐富油氣資源，使周邊鄰國如英國、挪威、丹麥獲得龐大原油收入與石化動力！附圖海域對照：【甲為大西洋】（英國以西）、【丙為波羅的海】（瑞典與芬蘭包圍）、【丁為北極海】（高緯極圈海域）。",
    "stem": "1960年代在附圖何處發掘到油田，帶來豐厚的原油收入，使周遭享有開採權的英國、丹麥、挪威等國經濟獲得幫助，同時也滿足工業所需動力、有利推動石化工業發展，成為重要能源供應地？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。",
    "answer": "(B) 乙",
    "diagramUrl": "assets/questions/soc_geo_north_sea_oil_map.png",
    "solution": "乙：北海（位於大不列顛島與斯堪地那維亞半島之間，為主要油田發掘地）。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791015057127,
        "isMastered": true
      }
    ],
    "explanation": "乙：北海（位於大不列顛島與斯堪地那維亞半島之間，為主要油田發掘地）。 故選 (B)。"
  },
  {
    "id": "q_soc_geo_nordic_coniferous_forest_ikea_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "北歐自然植被與產業發展：芬蘭與瑞典位居高緯度鄰近北極圈，分布廣大的針葉林（甲）提供木材原料",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：北歐特色產業與自然植被破題關鍵！芬蘭林業造紙與瑞典 IKEA 木製家具發達，主因兩國位於高緯度副極地區，蘊藏廣大的【(甲)針葉林】（泰加林 Taiga）資源！對照剖面圖：【甲為副極地針葉林】（苔原以南）、【乙/丙為溫帶落葉闊葉林/地中海灌木】、【丁為熱帶雨林】（靠近赤道）。",
    "stem": "芬蘭的林業、造紙業發達，瑞典的 IKEA 木製家具亦聞名全球，依照兩國的位置判斷，此區域的天然植物應是下列何種類型，為上述產業提供原料？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。",
    "answer": "(A) 甲",
    "diagramUrl": "assets/questions/soc_geo_latitude_vegetation_profile.png",
    "solution": "甲：副極地針葉林（位於苔原與冰帽南方高緯度區）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791273935341,
        "isMastered": true
      }
    ],
    "explanation": "甲：副極地針葉林（位於苔原與冰帽南方高緯度區）。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_iceland_geothermal_aluminum_smelting_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "北歐國家與能源特色：冰島（甲）位於中洋脊板塊交界帶，地熱資源極豐富，發展低成本煉鋁業",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：北歐國家地熱與高耗能煉鋁工業秒殺關鍵！【(甲)冰島】位於中洋脊板塊張裂交界帶，火山與【地熱資源】極為豐富，提供極低廉且潔淨的電力，因而吸引需要大量電力的高耗能「煉鋁工業」設廠！附圖北歐國家對照：【甲為冰島】、【乙為挪威】、【丙為瑞典】、【丁為芬蘭】。",
    "stem": "煉鋁工業需要消耗大量的能源，因此煉鋁廠多設在能源充足且動力低廉的地區，如北歐某國因擁有豐富的地熱能源，該國便利用此優勢發展煉鋁產業。請問：上述應為附圖中哪個國家？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。",
    "answer": "(A) 甲",
    "diagramUrl": "assets/questions/soc_geo_nordic_countries_map.png",
    "solution": "甲：冰島（大西洋西北部的火山地熱島國）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274146065,
        "isMastered": true
      }
    ],
    "explanation": "甲：冰島（大西洋西北部的火山地熱島國）。 故選 (A)。"
  },
  {
    "id": "q_soc_geo_scandinavian_peninsula_glacial_landforms_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲三大半島與北歐地形主體：斯堪地那維亞半島曾為大陸冰河中心，留有大量冰蝕湖與U型谷（峽灣）",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲重要半島與冰河地形破題關鍵！【斯堪地那維亞半島】為北歐面積最大的半島地形主體（挪威與瑞典所在地）。古紀第四紀冰期時為大陸冰河覆蓋中心，地表經冰河強烈刨蝕留下廣大的冰蝕湖與兩側深峻的【U型谷（峽灣）】。切記：伊比利半島（西歐/南歐）、義大利半島（南歐）、巴爾幹半島（東南歐）。",
    "stem": "「這個半島是北歐的地形主體，曾經是大陸冰河的中心，冰河消退以後在地表留下許多冰河地形，如冰蝕湖、U型谷等。」上文所述的半島最可能為下列何者？\n\n○ (A) 義大利半島\n○ (B) 伊比利半島\n○ (C) 巴爾幹半島\n○ (D) 斯堪地那維亞半島。",
    "answer": "(D) 斯堪地那維亞半島",
    "diagramUrl": "",
    "solution": "斯堪地那維亞半島：北歐地形主體（正解）。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274159925,
        "isMastered": true
      }
    ],
    "explanation": "斯堪地那維亞半島：北歐地形主體（正解）。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_europe_location_world_map_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲地理位置與環境特徵：位於歐亞大陸西北部、西臨大西洋，平原廣大氣候宜人，人口分布最為平均",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：各大洲位置與人口分布特徵破題關鍵！「位於歐亞大陸西北部、西臨大西洋、平原廣大且人口分布最平均」指的就是【(丁)歐洲】！附圖中：【甲為北美洲】（位於西半球北部）、【乙為中南美洲】（位於西半球南部）、【丙為非洲】（位於歐亞大陸南方、赤道橫貫）。",
    "stem": "「這個大洲位於歐亞大陸西北部，西臨大西洋。由於位居中、高緯度區，氣候較為舒適宜人，且平原廣大，因自然環境適宜人居，成為全球人口分布最為平均的一洲。」上文所述的大洲應為附圖中何者？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。",
    "answer": "(D) 丁",
    "diagramUrl": "assets/questions/soc_geo_world_continents_map.png",
    "solution": "丁：歐洲（位於歐亞大陸西北部、非洲以北）。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274284780,
        "isMastered": false
      }
    ],
    "explanation": "丁：歐洲（位於歐亞大陸西北部、非洲以北）。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_switzerland_alps_mountains_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲地形與重要山脈位置：瑞士位於高山內陸國，鄰近「歐洲屋脊」阿爾卑斯山脈（丙）",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲四大山脈位置快速秒殺口訣！瑞士為內陸山國，坐落於稱為「歐洲屋脊」的【(丙)阿爾卑斯山脈】。附圖其他山脈對照：【甲為斯堪地那維亞山脈】（北歐瑞典/挪威）、【乙為庇里牛斯山脈】（西歐法國與南歐西班牙的界山）、【丁為喀爾巴阡山脈】（中東歐弧形山脈）。",
    "stem": "今年寒假雅晴計畫報名參加瑞士滑雪學校的課程，瑞士是一個多山的內陸國，國境大部分位在「歐洲屋脊」之稱的高山區。請指出雅晴上課地點的滑雪場鄰近附圖哪一座山脈？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。",
    "answer": "(C) 丙",
    "diagramUrl": "assets/questions/soc_geo_europe_mountains_map.png",
    "solution": "丙：阿爾卑斯山脈（位於中南歐，為瑞士、義大利、法國、奧地利等國交界之歐洲屋脊）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274297068,
        "isMastered": true
      }
    ],
    "explanation": "丙：阿爾卑斯山脈（位於中南歐，為瑞士、義大利、法國、奧地利等國交界之歐洲屋脊）。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_europe_population_sparse_northern_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲人口分布例外區域：北歐因緯度高、氣候嚴寒寒冷，人口分布相對稀少",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲整體人口分布均勻，但【北歐】因位居高緯度、氣候嚴寒（極地/副極地氣候），自然環境較不適宜密集居住，是歐洲人口密度最稀少的區域。審題時留意：西歐平原廣且工業發達人口極為密集；東歐與南歐亦有人口分布，僅北歐受嚴寒氣候影響最顯著！",
    "stem": "歐洲大部分位於溫帶地區，由於氣候溫暖，平原廣大，為人口分布最均勻的一洲，但是觀察其人口分布點子圖，仍有例外，某區較歐洲其他地區相對而言，人口較為稀少。請問：歐洲人口分布相對稀少的是下列哪個地區？\n\n○ (A) 東歐，因薪資較低\n○ (B) 西歐，因沙漠廣布\n○ (C) 南歐，因地形崎嶇\n○ (D) 北歐，因氣候較冷。",
    "answer": "(D) 北歐，因氣候較冷",
    "diagramUrl": "assets/questions/soc_geo_europe_mountains_map.png",
    "solution": "1. 歐洲整體與區域人口分布： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274328284,
        "isMastered": true
      }
    ],
    "explanation": "1. 歐洲整體與區域人口分布： 故選 (D)。"
  },
  {
    "id": "q_soc_geo_finland_thousand_lakes_glacial_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "北歐冰河地形與湖泊成因：芬蘭高緯度受冰河侵蝕形成窪地，積水而成「冰蝕湖」",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：芬蘭「千湖國」湖泊成因秒殺關鍵！北歐芬蘭在第4次冰期時被大陸冰河全境覆蓋，巨大的冰河下挖刨蝕形成許多窪地，冰河消融退縮後窪地積水成湖，稱為【冰蝕湖】。切記：火山活動形成火口湖（如長白山天池）；沙洲封閉海灣形成潟湖；斷層下陷形成斷層湖（如日月潭、貝加爾湖）。",
    "stem": "據統計，北歐國家芬蘭內陸水域面積占國土總面積約 10%，境內湖泊約 18.8 萬個，此種特殊地理景觀令該國有「千湖國」稱號。若以成因分類，當地湖泊多屬於下列何種類型？\n\n○ (A) 潟湖\n○ (B) 火口湖\n○ (C) 冰蝕湖\n○ (D) 斷層湖。",
    "answer": "(C) 冰蝕湖",
    "diagramUrl": "",
    "solution": "1. 芬蘭地理環境與「千湖國」成因： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274375741,
        "isMastered": true
      }
    ],
    "explanation": "1. 芬蘭地理環境與「千湖國」成因： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_rotterdam_rhine_river_shipping_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲國際河流與港口：萊因河（丙）貫穿西歐工業區，出海口為鹿特丹港，航運價值最高",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：歐洲主要河流與門戶港口破題關鍵！歐洲航運價值最高、流經西歐精華區並注入北海的國際大河為【(丙)萊因河】，其出海口即為歐洲第一大港【荷蘭鹿特丹港】。附圖河流對照：【甲為聶伯河】（注入黑海）、【乙為多瑙河】（流經最多國家的國際河流，注入黑海）、【丁為塞納河】（流經法國巴黎注入英吉利海峽）。",
    "stem": "鹿特丹港是歐洲第一大港，位於附圖哪條國際大河的出海口，該河川航運價值高，又銜接北大西洋航線，使港口轉口貿易發達，成為全球重要的物流中心之一，也是遠洋貨運進入歐陸的門戶之一，年貨物吞吐量高？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。",
    "answer": "(C) 丙",
    "diagramUrl": "assets/questions/soc_geo_europe_rivers_map.png",
    "solution": "丙：萊因河（貫穿西歐工業心臟地帶，出海口為鹿特丹港）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274462908,
        "isMastered": true
      }
    ],
    "explanation": "丙：萊因河（貫穿西歐工業心臟地帶，出海口為鹿特丹港）。 故選 (C)。"
  },
  {
    "id": "q_soc_geo_chongqing_mountain_city_sichuan_basin_112",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "中國區域地理與地形特徵：重慶位於四川盆地東部（長江與嘉陵江交會），因多丘陵山地稱為山城",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：中國著名城市地形位置破題關鍵！重慶市位於【四川盆地】東部（長江與嘉陵江匯流之處）。因當地地形起伏劇烈、坡陡山多，自古有「山城」之稱，並發展出跨越長江纜車、高架立體公路與穿樓輕軌等特色交通。記住：橫斷山脈為高山深谷、內蒙古高原為坦蕩草原、珠江三角洲為平原水鄉。",
    "stem": "重慶是中國著名的「山城」，為了因應當地的地形環境，造就出奇特的交通建設。例如：立體的公路、超長的爬山扶手梯、穿越樓房的輕軌、跨越長江的纜車等。由此可知，重慶最可能在下列哪一地區？\n\n○ (A) 橫斷山脈\n○ (B) 四川盆地\n○ (C) 內蒙古高原\n○ (D) 珠江三角洲。",
    "answer": "(B) 四川盆地",
    "diagramUrl": "",
    "solution": "1. 重慶地理位置與地形特徵： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-06",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274563415,
        "isMastered": true
      },
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274574267,
        "isMastered": false
      }
    ],
    "explanation": "1. 重慶地理位置與地形特徵： 故選 (B)。"
  },
  {
    "id": "q_sci_bio_achondroplasia_genotype_112_cap_111",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "體染色體顯性遺傳與新發突變：單一突變基因(F)即致病，父母皆未患病（正常型 ff），阿佑個體精卵或胚胎突變(Ff)",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：顯性遺傳疾病與個體新發突變破題關鍵！「若親代僅一方患病子代即有 50% 以上罹病率」說明該病為【體染色體顯性遺傳】（只要有 1 個顯性突變基因 F 即患病，正常人基因型必為隱性同型合子 ff）。題目特別強調「阿佑父母皆未患病」，代表父母二人皆不帶致病基因 F，故父母基因型必皆為【父：ff、母：ff】！阿佑是生殖細胞或胚胎發育時「自行發生新發突變（New Mutation）」才患病（Ff）。",
    "stem": "軟骨發育不全症是體染色體中 FGFR3 基因發生突變所造成，患者具有身材矮小、四肢短小變形等特徵，若親代只有其中一方為患者，子代就會有 50% 以上的罹病率。已知阿佑因發生突變而患有軟骨發育不全症，但其父母皆未患病，若以 F 代表突變的 FGFR3 遺傳因子，f 代表正常的 FGFR3 遺傳因子，則關於阿佑父母基因型的推論，下列何者最合理？〔112.會考〕\n\n○ (A) 父：Ff、母：Ff\n○ (B) 父：Ff、母：ff\n○ (C) 父：FF、母：FF\n○ (D) 父：ff、母：ff。",
    "answer": "(D) 父：ff、母：ff。",
    "diagramUrl": "",
    "solution": "NA 新發突變（New Mutation）而帶有 F 基因（基因型變為 Ff），進而發病。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-10-12",
    "lastReviewedDate": "2026-10-12",
    "reviewedMondays": [
      "2026-10-12"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791792805447,
        "isMastered": true
      }
    ],
    "explanation": "NA 新發突變（New Mutation）而帶有 F 基因（基因型變為 Ff），進而發病。 故選 (D)。"
  },
  {
    "id": "q_sci_bio_rice_aroma_genotype_104_cap_110",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "孟德爾遺傳法則與顯隱性基因型推論：無香味(親代)生出有香味(子代)，有香味為隱性(aa)，親代必為異型合子(Aa)",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：遺傳顯隱性判斷經典破題口訣【無中生有為隱性】！無香味親代（甲、乙）交配，竟然生出有香味子代（丁），說明「有香味」性狀在親代被隱藏，故「有香味為隱性（基因型 aa）」，而「無香味為顯性（基因型包含 A）」。親代甲、乙各提供一個隱性基因 a 給丁，故甲與乙基因型必皆為異型合子 Aa！子代丙不具香味（顯性），其基因型可能為同型合子 AA 或異型合子 Aa，故【丙的基因型無法確定】！",
    "stem": "已知水稻中某種特殊香味的性狀是由一對等位基因所控制，包含具此香味和不具此香味兩種特徵。某研究人員將皆不具此香味的水稻甲和乙進行授粉，其子代水稻丙不具此香味，而子代水稻丁具有此香味。在不考慮突變的情況下，根據遺傳法則推測水稻甲、乙、丙及丁的基因型，下列何者無法確定？〔104.會考〕\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。",
    "answer": "(C) 丙",
    "diagramUrl": "",
    "solution": "1. 判斷顯隱性性狀（口訣：無中生有為隱性）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791361081934,
        "isMastered": true
      }
    ],
    "explanation": "1. 判斷顯隱性性狀（口訣：無中生有為隱性）： 故選 (C)。"
  },
  {
    "id": "q_sci_bio_water_cycle_residence_ocean_109",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "水循環與水資源留駐場所：全球 97.5% 水量儲存於海洋，大多數時間水留駐於海中",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：水循環水份滯留場所破題關鍵！全球總水資源中有高達約 97.5%（約 97%）儲存於海洋中。雖然水透過蒸發、降水在陸地、大氣間循環，但極大部分的水分大部分時間都滯留在海洋中（海洋是地球最大的水庫）！千萬不要誤選大氣或冰川。",
    "stem": "地球上的水約 97% 是海水，因此在水循環中，大多數時間水留駐在何處？\n\n○ (A) 地下\n○ (B) 空中\n○ (C) 海中\n○ (D) 南、北極冰川中。",
    "answer": "(C) 海中",
    "diagramUrl": "",
    "solution": "1. 地球水資源儲量分布： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791361101019,
        "isMastered": true
      }
    ],
    "explanation": "1. 地球水資源儲量分布： 故選 (C)。"
  },
  {
    "id": "q_sci_bio_inland_terminal_salt_lake_108",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "內陸水系與鹹水湖成因：內陸河終點因強烈蒸發與無外流出口使鹽分持續累積",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：內陸鹹水湖成因破題關鍵！河流攜帶陸地上微量的溶解鹽類注入內陸湖泊，由於該湖泊為內陸河的終點（無外流出口注入海洋），加上當地乾燥強烈蒸發，水分不斷蒸發帶走純水，而鹽分留在湖中持續累積，久而久之湖水鹽度極高，成為鹹水湖（如死海、青海湖、鹹海）！",
    "stem": "內陸湖泊若是內陸河流的終點大多是____湖。（填淡水或鹹水）",
    "answer": "鹹水",
    "diagramUrl": "",
    "solution": "1. 內陸河與終點湖泊水文特徵：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791361173711,
        "isMastered": true
      }
    ],
    "explanation": "1. 內陸河與終點湖泊水文特徵："
  },
  {
    "id": "q_sci_bio_glacier_characteristics_107",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "冰川特性與水資源：高山內陸主要水源、參與水循環、融化恐導致水患與水源匱乏",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：冰川水資源與全球暖化破題關鍵！冰川雖為固態冰雪，但夏季融化（融雪水）是高山與內陸地區最重要的淡水來源（(D) 正確）；冰川也是水循環（固態水）的一環；全球暖化導致冰川大量融化，短期內會引發海平面上升與洪水水患，長期更會因冰川枯竭消失而導致嚴重的水資源匱乏（非增加淡水資源）！",
    "stem": "關於冰川的敘述，下列何者正確？\n\n○ (A) 冰川是固體，人類無法利用\n○ (B) 冰川不會參與水循環\n○ (C) 全球暖化，冰川大量融化，大量增加淡水資源\n○ (D) 是內陸及高山地區的主要水源。",
    "answer": "(D) 是內陸及高山地區的主要水源。",
    "diagramUrl": "",
    "solution": "正確：高山與乾旱內陸地區降雨稀少，夏季高山冰川與積雪融化（融雪水）匯入河流或滲入地下，是當地人類與生態最主要的淡水來源。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791360810423,
        "isMastered": true
      }
    ],
    "explanation": "正確：高山與乾旱內陸地區降雨稀少，夏季高山冰川與積雪融化（融雪水）匯入河流或滲入地下，是當地人類與生態最主要的淡水來源。 故選 (D)。"
  },
  {
    "id": "q_sci_bio_sea_salinity_evaporation_precipitation_106",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "海水鹽度影響因素：蒸發量與降水量之比值（蒸發量 > 降水量 則鹽度偏高；降水量 > 蒸发量 則鹽度偏低）",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：海水鹽度高低判定關鍵！海水鹽度決定於「蒸發量」與「降水量（及淡水注入）」的相對大小！當【蒸發量 > 降水量】（如副熱帶海域、地中海、死海），純水蒸發帶走水分，鹽分留存，海水濃度與鹽度偏【高】；反之，當【降水量 > 蒸發量】（如赤道對流旺盛降雨區），淡水降雨稀釋海水，海水鹽度偏【低】！",
    "stem": "海水中所佔的鹽類會隨著各海域的蒸發量與降水量而改變：\n\n(1) 副熱帶海域、地中海、死海其海水蒸發量____於降水量（填大或小），鹽度較____。（填高或低）\n(2) 赤道海域之降水量____於海水蒸發量（填大或小），鹽度較____。（填高或低）",
    "answer": "(1) 大、高；(2) 大、低",
    "diagramUrl": "",
    "solution": "1. 副熱帶海域、地中海、死海：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791360898791,
        "isMastered": true
      }
    ],
    "explanation": "1. 副熱帶海域、地中海、死海："
  },
  {
    "id": "q_sci_bio_glacier_meltwater_source_105",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "冰川地區水源補充：夏季冰雪融化為補充河水與地下水之主要水源",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：高山與高緯度冰川地區水源補給關鍵！在氣溫極低的冰川地區，降水主要以降雪形態累積形成冰川。到了夏季氣溫回升時，冰雪大量融化（融雪水），成為下方河流、湖泊與滲入地底補充地下水的最主要水源！千萬別誤選雨水或海水。",
    "stem": "在冰川地區何者是補充河水、地下水的重要來源？\n\n○ (A) 雨水\n○ (B) 冰雪\n○ (C) 海水\n○ (D) 湖水。",
    "answer": "(B) 冰雪",
    "diagramUrl": "",
    "solution": "冰雪（正確）：冰雪融水為冰川地區補給地表水（河水）與地下水的主要來源。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791360933490,
        "isMastered": false
      }
    ],
    "explanation": "冰雪（正確）：冰雪融水為冰川地區補給地表水（河水）與地下水的主要來源。 故選 (B)。"
  },
  {
    "id": "q_sci_bio_earth_water_distribution_104",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "地球水資源分布與水循環：鹹水（海水）約佔 97.5%，淡水僅佔 2.5% 非平均分布",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：地球水資源分布破題關鍵！地球被稱為水球，但總水量中約有 97.5% 為鹹水（海水），淡水僅約佔 2.5%（且淡水中絕大部分為難以直接利用的冰川與深層地下水）。因此水資源絕非「平均分布於淡水及海水中」！人類常利用的淡水資源主要是地下水、河流與湖泊。",
    "stem": "關於地球上的水，下列敘述何者錯誤？\n\n○ (A) 地球上的水平均分布於淡水及海水中\n○ (B) 在自然界中，水可以氣態、液態或固態存在\n○ (C) 水資源藉由水循環而重新分配與再利用\n○ (D) 地下水是人類常利用的水資源。",
    "answer": "(A) 地球上的水平均分布於淡水及海水中",
    "diagramUrl": "",
    "solution": "1. 選項 (A) 錯誤（符合題意）：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-07",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-07",
        "monday": "2026-09-28",
        "timestamp": 1791361011796,
        "isMastered": true
      }
    ],
    "explanation": "1. 選項 (A) 錯誤（符合題意）："
  },
  {
    "id": "q_sci_phy_buoyancy_terminal_velocity_drag_103",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "浮力與等速度運動合力平衡：向下重力 = 向上浮力 + 向上阻力",
    "uploadDate": "2026-09-28",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：流體阻力與等速度運動破題關鍵！下沉物體達到「等速度」時，代表受到的「合力 = 0」！物體向下受到重力（60 公克重），向上受有水的浮力（20 公克重）。因向下力大於向上浮力，若沒有阻力物體會加速下沉；而「等速度下沉」說明必有方向向上的水阻力來抵消淨力，故：向下重力（60 公克重） = 向上浮力（20 公克重） + 向上阻力，解得阻力 = 40 公克重！切勿遺漏浮力的向上作用。",
    "stem": "若將一體積 20 立方公分，密度 3 公克／立方公分的物體丟入游泳池中，下沉的過程中，最後保持等速度下沉，試問在等速度下沉的過程中，該物體所受的阻力大小為何？\n\n○ (A) 10 公克重\n○ (B) 20 公克重\n○ (C) 40 公克重\n○ (D) 60 公克重",
    "answer": "(C) 40 公克重",
    "diagramUrl": "",
    "solution": "1. 計算物體總重量（向下力）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-28",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791037799250,
        "isMastered": true
      }
    ],
    "explanation": "1. 計算物體總重量（向下力）： 故選 (C)。"
  },
  {
    "id": "q_sci_phy_vertical_throw_vt_graph_options_101",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "鉛直上拋運動與 v-t 圖：向上為正則重力加速度 a = -9.8 m/s²（切線斜率為 -9.8）（110會考）",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：鉛直上拋 v-t 圖斜率破題關鍵！上拋運動中只受重力作用，加速度大小為 g = 9.8 m/s²。題目規定「向上為正、向下為負」，因重力向下，加速度必為 a = -9.8 m/s²。在 v-t 圖中斜率代表加速度，因此傾斜直線的斜率必須等於 -9.8！若初速 v₀ = 9.8 m/s，減速到最高點（v = 0）所需時間為 Δt = 0 - 9.8 / -9.8 = 1 秒！故選 (B)。",
    "stem": "將一顆球鉛直上拋，球上升一段高度後便向下墜落。已知此地的重力加速度為 9.8 m/s²，若不計空氣阻力的影響，速度方向以鉛直向上為正、鉛直向下為負。下列選項中，哪一個最可能是此球運動過程的速度（v）與時間（t）關係圖？〔110.會考-43.〕\n\n○ (A) 圖 (A)：初速 9.8 m/s 且 9.8 秒末速度減為 0 的直線\n○ (B) 圖 (B)：初速 9.8 m/s 且 1 秒末速度減為 0 的直線\n○ (C) 圖 (C)：初速 0 且前 2 秒速度增加至 9.8 m/s 的折線\n○ (D) 圖 (D)：開口朝下的二次拋物線",
    "answer": "(B) 圖 (B)：初速 9.8 m/s 且 1 秒末速度減為 0 的直線",
    "diagramUrl": "assets/questions/q_sci_phy_vertical_throw_vt_graph_options_101.png",
    "solution": "正確：圖中 t = 1 秒時 v = 0，斜率 Slope = (0 - 9.8) / 1 = -9.8 m/s²，完全符合重力加速度 a = -9.8 m/s² 的物理規律。故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-27",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-10",
    "reviewedMondays": [
      "2026-09-28",
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791037921418,
        "isMastered": true
      },
      {
        "date": "2026-10-10",
        "monday": "2026-09-21",
        "timestamp": 1791641914626,
        "isMastered": true
      }
    ],
    "explanation": "正確：圖中 t = 1 秒時 v = 0，斜率 Slope = (0 - 9.8) / 1 = -9.8 m/s²，完全符合重力加速度 a = -9.8 m/s² 的物理規律。故選 (B)。"
  },
  {
    "id": "q_sci_phy_cart_east_west_avg_acc_102",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "平均加速度計算與方向判定：a = (v₂ - v₁) / Δt，方向相反時初速末速正負號設定（109會考補）",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：平均加速度正負號與方向算術重點！平均加速度公式 a = (v_末 - v_初) / Δt。必須先定方向！若規定向東為正（+），向西為負（-）：初速 v_初 = +5 m/s，末速 v_末 = -10 m/s。計算得 a = (-10 - (+5)) / 5 = -15 / 5 = -3 m/s²！負號即代表方向向西！千萬不可誤算為 (-10 - 5) 漏看正負號。",
    "stem": "一滑車作直線運動，在時間 t = 0s 時的速度為 5m/s，方向向東；t = 5s 時的速度為 10m/s，方向向西，則此滑車在 t = 0～5s 期間的平均加速度為下列何者？〔109.會考（補）-40.〕\n\n○ (A) 1m/s²，方向向東\n○ (B) 1m/s²，方向向西\n○ (C) 3m/s²，方向向東\n○ (D) 3m/s²，方向向西",
    "answer": "(D) 3m/s²，方向向西",
    "diagramUrl": "",
    "solution": "1. 方向設定與數值表示： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-27",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-10",
    "reviewedMondays": [
      "2026-09-28",
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038191065,
        "isMastered": true
      },
      {
        "date": "2026-10-10",
        "monday": "2026-09-21",
        "timestamp": 1791641955939,
        "isMastered": true
      }
    ],
    "explanation": "1. 方向設定與數值表示： 故選 (D)。"
  },
  {
    "id": "q_sci_phy_tingting_vt_graph_avg_acc_west_100",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "速度時間圖（v-t 圖）與平均加速度判定：a = Δv / Δt，速度減少即平均加速度向西",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：平均加速度方向判讀關鍵！平均加速度公式 a = (v_末 - v_初) / (t_末 - t_初)。已知騎車方向向東（速度為正），若「平均加速度方向向西」（加速度為負），表示速度變化量 Δv < 0，即【末速小於初速（v_末 < v_初）】！檢視各時間區段：t = 20 分時速度為全圖最高點，t = 30 分時速度低於 t = 20 分，故 Δv < 0，平均加速度向西！",
    "stem": "婷婷騎車在筆直的道路上向東行駛，右圖為其速度（v）與時間（t）的關係圖。下列哪一段時間，婷婷的平均加速度方向向西？\n\n○ (A) t = 0～10 分\n○ (B) t = 10～20 分\n○ (C) t = 15～30 分\n○ (D) t = 20～30 分",
    "answer": "(D) t = 20～30 分",
    "diagramUrl": "assets/questions/q_sci_phy_tingting_vt_graph_avg_acc_west_100.png",
    "solution": "1. 觀念與公式說明： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-27",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-10",
    "reviewedMondays": [
      "2026-09-28",
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038294365,
        "isMastered": true
      },
      {
        "date": "2026-10-10",
        "monday": "2026-09-21",
        "timestamp": 1791642005449,
        "isMastered": true
      }
    ],
    "explanation": "1. 觀念與公式說明： 故選 (D)。"
  },
  {
    "id": "q_sci_phy_four_cars_vt_graph_097",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "速度時間圖（v-t 圖）運動方向與距離變化：位移即面積，速度差造成距離隨時間遞增（111會考）",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：v-t 圖車輛距離判讀破題關鍵！t = 0 時同位置，v-t 圖曲線下方面積代表「位移」。(A) 甲乙兩車速度不同（甲正速、乙靜止），兩者距離隨時間變大；(B) 丙丁兩車速度不同，距離變大；(C) 甲丙方向相反（甲往正、丙往負），距離越來越遠；(D) 乙靜止（v = 0），丁往負方向加速，兩車距離必越來越遠！",
    "stem": "在筆直的道路上有甲、乙、丙、丁四輛車，右圖為四車的速度（v）與時間（t）關係圖。若 t = 0 秒時，四車位於同一位置，則有關 t > 0 秒車輛間距離的敘述，下列何者正確？〔111.會考-25.〕\n\n○ (A) 甲、乙兩車的距離保持不變\n○ (B) 丙、丁兩車的距離保持不變\n○ (C) 甲、丙兩車的距離愈來愈近\n○ (D) 乙、丁兩車的距離愈來愈遠",
    "answer": "(D) 乙、丁兩車的距離愈來愈遠",
    "diagramUrl": "assets/questions/q_sci_phy_four_cars_vt_graph_097.png",
    "solution": "正確：乙車速度 v = 0（保持靜止於原點），丁車速度為負值且絕對值隨時間增加（往負方向作等加速度運動）。故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-27",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-10",
    "reviewedMondays": [
      "2026-09-28",
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038463015,
        "isMastered": true
      },
      {
        "date": "2026-10-10",
        "monday": "2026-09-21",
        "timestamp": 1791642020977,
        "isMastered": true
      }
    ],
    "explanation": "正確：乙車速度 v = 0（保持靜止於原點），丁車速度為負值且絕對值隨時間增加（往負方向作等加速度運動）。故選 (D)。"
  },
  {
    "id": "q_sci_phy_xt_graph_instant_vs_avg_speed_098",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "x-t 圖切線斜率（瞬間速度）與割線斜率（平均速度）：減速運動中 v₁ > v > v₂ 比較關係",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：x-t 圖瞬間速度與平均速度比較重點！x-t 圖切線斜率 = 瞬間速度；兩點連線割線斜率 = 平均速度。此 x-t 圖為「曲線漸平緩」（減速運動），切線斜率隨時間遞減（v₁ > v₂）。平均速度 v 為該時間區間內的整體平均，大小必定介於最大瞬間速度與最小瞬間速度之間（v₁ > v > v₂）！",
    "stem": "右圖是某物體沿直線運動的位置（x）與時間（t）關係圖，設 t₁ 時刻的速度為 v₁，t₂ 時刻的速度為 v₂，t₁～t₂ 間的平均速度為 v，則下列關係何者正確？\n\n○ (A) v₁ > v₂ > v\n○ (B) v > v₁ > v₂\n○ (C) v₁ > v > v₂\n○ (D) v₂ > v > v₁",
    "answer": "(C) v₁ > v > v₂",
    "diagramUrl": "assets/questions/q_sci_phy_xt_graph_instant_vs_avg_speed_098.png",
    "solution": "1. 切線斜率與瞬間速度：在 x-t 圖中，圖形切線斜率代表瞬間速度。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-27",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "lastReviewedMonday": null,
    "lastReviewedDate": null,
    "reviewedMondays": [],
    "explanation": "1. 切線斜率與瞬間速度：在 x-t 圖中，圖形切線斜率代表瞬間速度。 故選 (C)。"
  },
  {
    "id": "q_sci_phy_constant_acc_5s_10s_displacement_099",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "初速為零等加速度運動：v-t 圖面積代表位移、相似三角形面積比等於時間平方比（1:4）",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：初速為 0 等加速度運動公式與幾何圖解！位移公式 x = (1/2)a t²，位移與時間平方成正比（x ∝ t²）。時間由 5 秒增加為 10 秒（時間比 1:2），總位移比為 1² : 2² = 1 : 4！故 10 秒末距離出發點 = 25 × 4 = 100 公尺！注意題目問「再經過 5 秒後距離出發點」，即開車起算第 10 秒末之總位移。",
    "stem": "某一靜止的物體，受一定力作用後，作等加速度運動，已知在啟動後第 5 秒末的瞬間，物體已距出發點 25 公尺，則再經過 5 秒後，物體應距出發點多少距離？\n\n○ (A) 25 公尺\n○ (B) 50 公尺\n○ (C) 75 公尺\n○ (D) 100 公尺",
    "answer": "(D) 100 公尺",
    "diagramUrl": "assets/questions/q_sci_phy_constant_acc_5s_10s_displacement_099.png",
    "solution": "1. 觀念說明與公式比率： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-27",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-10",
    "reviewedMondays": [
      "2026-09-28",
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038566163,
        "isMastered": true
      },
      {
        "date": "2026-10-10",
        "monday": "2026-09-21",
        "timestamp": 1791642083905,
        "isMastered": true
      }
    ],
    "explanation": "1. 觀念說明與公式比率： 故選 (D)。"
  },
  {
    "id": "q_sci_phy_ming_hua_xt_graph_095",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "直線運動與位置時間圖（x-t 圖）：斜率即速度、斜直線代表等速度運動（加速度為零）",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：x-t 圖判讀關鍵！x-t 圖為「斜直線」代表物體作【等速度運動】（加速度必為 0）；斜率大小代表「速度大小」（越陡越快）。小明與小華在 x-t 圖上皆為斜直線，因此兩人的加速度皆為 0！小明斜率較陡（速度 2 m/s），小華斜率較緩（速度 0.5 m/s）。",
    "stem": "小明、小華兩人騎車直線前進，其位置與時間的關係如右圖，下列相關敘述何者正確？\n\n○ (A) 小華的加速度為零\n○ (B) 小明的加速度大小為 2 公尺／秒²\n○ (C) 第 1 秒末小華的速度較小明快\n○ (D) 小華 2 秒內的位移大小為 4 公尺",
    "answer": "(A) 小華的加速度為零",
    "diagramUrl": "assets/questions/q_sci_phy_ming_hua_xt_graph_095.png",
    "solution": "正確（加速度判斷）：在位置與時間關係圖（x-t 圖）中，斜直線代表物體作等速度運動。故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-27",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-10",
    "reviewedMondays": [
      "2026-09-28",
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038686662,
        "isMastered": true
      },
      {
        "date": "2026-10-10",
        "monday": "2026-09-21",
        "timestamp": 1791642100108,
        "isMastered": true
      }
    ],
    "explanation": "正確（加速度判斷）：在位置與時間關係圖（x-t 圖）中，斜直線代表物體作等速度運動。故選 (A)。"
  },
  {
    "id": "q_sci_phy_free_fall_101_xt_graph_096",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "自由落體與 x-t 關係圖：等加速度運動公式（x ∝ t²）、斜率隨著速度增加而逐漸變陡",
    "uploadDate": "2026-09-27",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：自由落體 x-t 圖判讀破題重點！自由落體為「等加速度運動」（初速 0，速度越來越快）。以樓頂為參考點（起始點 x = 0）且向下為正時，位置 x = (1/2)g t²，圖形為開口朝上的二次拋物線，其斜率（速度）必然隨時間 t 逐漸變陡！",
    "stem": "【素養題】在不計空氣阻力下，一玻璃珠由 101 樓頂靜止釋放，下列何者可以表示其位置（x）與時間（t）的關係圖？（以樓頂為參考點，向下為正）\n\n○ (A) 圖 (A)：過原點且斜率隨時間逐漸變陡的曲線\n○ (B) 圖 (B)：過原點但斜率隨時間逐漸變平緩的曲線\n○ (C) 圖 (C)：向下開口的拋物線\n○ (D) 圖 (D)：由高處隨時間向下遞減的曲線",
    "answer": "(A) 圖 (A)：過原點且斜率隨時間逐漸變陡的曲線",
    "diagramUrl": "assets/questions/q_sci_phy_free_fall_101_xt_graph_096.png",
    "solution": "正確：曲線過原點，且開口朝上、斜率隨時間遞增（變陡），符合 x = (1/2)gt² 的等加速度下落特徵。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-27",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-10",
    "reviewedMondays": [
      "2026-09-28",
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038752380,
        "isMastered": false
      },
      {
        "date": "2026-10-10",
        "monday": "2026-09-21",
        "timestamp": 1791642122026,
        "isMastered": false
      }
    ],
    "explanation": "正確：曲線過原點，且開口朝上、斜率隨時間遞增（變陡），符合 x = (1/2)gt² 的等加速度下落特徵。 故選 (A)。"
  },
  {
    "id": "q_chi_couplets_theatre_moral_education_005",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "戲臺對聯涵義判讀：戲曲之教化勸善（晨鐘暮鼓、善惡貞淫胥教誨）與人生幻化意境比較",
    "uploadDate": "2026-09-26",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：戲臺對聯主旨判讀關鍵！題幹「善惡貞淫胥教誨」強調戲劇具備【道德教化、勸善懲惡】之功；(C)「莫輕看過、晨鐘暮鼓」同樣強調看戲不可輕忽、劇中道德榜樣如晨鐘暮鼓警醒世人，兩者涵義最為切合！",
    "stem": "某戲臺有一副對聯：「此所謂現身說法，且看那善惡貞淫胥教誨；雖然是逢場作戲，難得他嬉笑怒罵皆文章。」這副對聯與下列何者的涵義最接近？\n\n○ (A) 傀儡登場，須知這臺上衣冠是假；痴人說夢，休認作眼前富貴為真\n○ (B) 君子小人，才子佳人，登場便見；歡天喜地，驚天動地，落幕即空\n○ (C) 假面登場有孝子忠臣，莫輕看過；新腔協律是晨鐘暮鼓，只管聽來\n○ (D) 戲愈好，人愈多，看他抒意表情；曲彌高，和彌寡，聽我長腔短調。",
    "answer": "(C) 假面登場有孝子忠臣，莫輕看過；新腔協律是晨鐘暮鼓，只管聽來",
    "diagramUrl": "",
    "solution": "正確（側重「道德教化與警世」）：「莫輕看過」（劇中有孝子忠臣等道德榜樣，不可輕忽看過）與「晨鐘暮鼓」（如警世鐘鼓發人深省），與題幹「教誨」涵義最接近。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-26",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-01",
        "monday": "2026-09-21",
        "timestamp": 1790810350809,
        "isMastered": true
      },
      {
        "date": "2026-10-01",
        "monday": "2026-09-21",
        "timestamp": 1790810369752,
        "isMastered": false
      },
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791005944258,
        "isMastered": false
      }
    ],
    "explanation": "正確（側重「道德教化與警世」）：「莫輕看過」（劇中有孝子忠臣等道德榜樣，不可輕忽看過）與「晨鐘暮鼓」（如警世鐘鼓發人深省），與題幹「教誨」涵義最接近。 故選 (C)。"
  },
  {
    "id": "q_chi_couplets_temple_figures_matching_006",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "廟宇楹聯與描述對象配對：孔廟、關帝廟、岳飛廟與城隍廟關鍵字判讀",
    "uploadDate": "2026-09-26",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：廟宇對聯人物配對速記！「祖述堯舜、憲章文武、道冠古今」 ➔ 孔子（孔廟）；「英雄三國無雙士」 ➔ 關羽（關帝廟）；「還我山河、一片忠心唯報國」 ➔ 岳飛（岳飛廟）；「舉念有神知善惡正邪」 ➔ 城隍爺（城隍廟）！",
    "stem": "下列各廟宇楹聯所描述的對象，何者配對正確？\n\n○ (A) 英雄三國無雙士，正氣千秋第一人：岳飛廟\n○ (B) 祖述堯舜，憲章文武；德參天地，道冠古今：孔廟\n○ (C) 還我山河，一片忠心唯報國；驅爾異族，百年奇恥不共天：關帝廟\n○ (D) 舉念有神知善惡正邪能立判；照人為鏡朗吉凶禍福總無私：媽祖廟。",
    "answer": "(B) 祖述堯舜，憲章文武；德參天地，道冠古今：孔廟",
    "diagramUrl": "",
    "solution": "正確：「祖述堯舜，憲章文武」（出自《中庸》讚頌孔子）與「德參天地，道冠古今」（形容萬世師表），描述對象為孔子，配對孔廟正確。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-26",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-01",
        "monday": "2026-09-21",
        "timestamp": 1790810451303,
        "isMastered": false
      },
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006066319,
        "isMastered": true
      }
    ],
    "explanation": "正確：「祖述堯舜，憲章文武」（出自《中庸》讚頌孔子）與「德參天地，道冠古今」（形容萬世師表），描述對象為孔子，配對孔廟正確。 故選 (B)。"
  },
  {
    "id": "q_chi_couplets_location_matching_004",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "行業對聯張貼地點辨識：樂器行、照相館（攝影）、圖書館（書店）與中藥房對聯特徵比較",
    "uploadDate": "2026-09-26",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：行業對聯張貼地點關鍵字辨識！高山流水/白雪陽春 ➔ 樂器行；鬚眉畢現/面目留真 ➔ 照相館；廣搜百代遺編/嘉惠後學 ➔ 圖書館/書店；杏林/橘井/當歸/何首烏 ➔ 中藥房！",
    "stem": "下列對聯，何者張貼的地點最正確？\n\n○ (A) 韻出高山流水，調追白雪陽春—樂器行\n○ (B) 秦鏡高懸鬚眉畢現，廬山在此面目留真—書店\n○ (C) 廣搜百代遺編，追蹤虎觀；嘉惠四方後學，載質龍門—動物園\n○ (D) 杏林春意暖，獨活靈芝草；橘井活人多，當歸何首烏—火鍋店。",
    "answer": "(A) 韻出高山流水，調追白雪陽春—樂器行",
    "diagramUrl": "",
    "solution": "正確：「高山流水」（伯牙鼓琴相知典故）與「白雪陽春」（高雅古曲《陽春白雪》），皆屬韻律樂曲，張貼於樂器行最正確。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-26",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-01",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-01",
        "monday": "2026-09-21",
        "timestamp": 1790809695780,
        "isMastered": true
      }
    ],
    "explanation": "正確：「高山流水」（伯牙鼓琴相知典故）與「白雪陽春」（高雅古曲《陽春白雪》），皆屬韻律樂曲，張貼於樂器行最正確。 故選 (A)。"
  },
  {
    "id": "q_chi_couplets_industry_matching_003",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "行業對聯辨識：餐廳、酒莊（酒吧）、學校（教育）與鐘錶行對聯特徵比較",
    "uploadDate": "2026-09-26",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：行業對聯特徵關鍵字對照！買醉/消愁 $\\to$ 酒莊；桃李/棟梁 $\\to$ 學校；十二時辰/手腕間 $\\to$ 鐘錶行；水陸佳餚/加餐 $\\to$ 餐廳！",
    "stem": "下列對聯與適用場合的配對，何者正確？\n\n○ (A) 水陸兼呈皆上味，賓朋盡興共加餐—餐廳\n○ (B) 問世人為何買醉，惟此物足以消愁—茶館\n○ (C) 今日栽遍桃李樹，他年盡作棟梁材—建築公司\n○ (D) 萬千星斗心胸裡，十二時辰手腕間—眼鏡行。",
    "answer": "(A) 水陸兼呈皆上味，賓朋盡興共加餐—餐廳",
    "diagramUrl": "",
    "solution": "正確：「水陸兼呈（水陸珍饈）」與「賓朋加餐」，描繪豐盛佳餚聚餐，為餐廳/飯館對聯。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-26",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-01",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-01",
        "monday": "2026-09-21",
        "timestamp": 1790809823257,
        "isMastered": true
      }
    ],
    "explanation": "正確：「水陸兼呈（水陸珍饈）」與「賓朋加餐」，描繪豐盛佳餚聚餐，為餐廳/飯館對聯。 故選 (A)。"
  },
  {
    "id": "q_chi_couplets_definition_rules_001",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "對聯的定義、名稱由來與格律特徵（對仗、字數相等與無須押韻之別）",
    "uploadDate": "2026-09-26",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：對聯講求「字數相等、詞性相對、平仄相諧（仄起平收）」，但**不需要押韻**！押韻是近體詩與詞曲之格律特徵，切勿與對聯混淆！",
    "stem": "關於對聯的說明，下列何者不正確？\n\n○ (A) 又稱聯語、對子\n○ (B) 與民俗上的桃符有關\n○ (C) 須對仗押韻，有字數限制\n○ (D) 必須字數相等、音韻相諧。",
    "answer": "(C) 須對仗押韻，有字數限制",
    "diagramUrl": "",
    "solution": "錯誤：對聯講究「對仗、平仄相諧、字數相等」，但無須押韻。詩歌才有押韻限制。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-26",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-01",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-01",
        "monday": "2026-09-21",
        "timestamp": 1790809837557,
        "isMastered": true
      }
    ],
    "explanation": "錯誤：對聯講究「對仗、平仄相諧、字數相等」，但無須押韻。詩歌才有押韻限制。 故選 (C)。"
  },
  {
    "id": "q_chi_couplets_industry_tea_house_002",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "審題不清",
    "concept": "行業對聯辨識：茶館與餐館（飯店）對聯關鍵字比較",
    "uploadDate": "2026-09-26",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": false,
    "mistakeNote": "💡 **易錯警示筆記**：行業對聯辨識須抓特徵關鍵字！茶館對聯常嵌有「龍井、武夷、香茗、陸羽、清甘」等茶名茶具；(A)(C)(D)皆含烹飪、肉食、麻辣燙等，屬餐館/飯店對聯！",
    "stem": "傅紅雪和明月心想找家茶店敘舊，下列哪一家店是他們的首選？\n\n○ (A) 聞香且止步，知味暫停車\n○ (B) 龍井泉多奇味，武夷茶發異香\n○ (C) 宰天下有如此肉，治大國若烹小鮮\n○ (D) 精法廉小餐特色，麻辣燙川味正宗。",
    "answer": "(B) 龍井泉多奇味，武夷茶發異香",
    "diagramUrl": "",
    "solution": "「龍井泉多奇味，武夷茶發異香」：嵌有「龍井」、「武夷茶」名茶茶名，屬標準茶店/茶館對聯。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-26",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-10-01",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "reviewHistory": [
      {
        "date": "2026-10-01",
        "monday": "2026-09-21",
        "timestamp": 1790809868000,
        "isMastered": true
      }
    ],
    "explanation": "「龍井泉多奇味，武夷茶發異香」：嵌有「龍井」、「武夷茶」名茶茶名，屬標準茶店/茶館對聯。 故選 (B)。"
  },
  {
    "id": "q_math_triangle_incenter_centroid_001",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形重心與內心之面積性質與比值計算",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "重心 $G$ 將三角形面積三等分：$\\triangle ABG = \\frac{1}{3} \\triangle ABC$；內心 $I$ 到三邊等距（垂直高為內切圓半徑 $r$），故各小三角形面積與底邊長成正比：$\\triangle ABI = \\frac{4}{15} \\triangle ABC$、$\\triangle BCI = \\frac{5}{15} \\triangle ABC$！本題題意選項對應 $\\triangle ABG : \\triangle ABI = 5 : 4$！",
    "stem": "$\\triangle ABC$ 中，$\\overline{AB} = 4$、$\\overline{BC} = 5$、$\\overline{AC} = 6$，$I$ 是內心，$G$ 是重心，則 $\\triangle ABG$ 與 $\\triangle BCI$ 的面積比為何？\n\n○ (A) 5 : 4\n○ (B) 4 : 5\n○ (C) 2 : 3\n○ (D) 1 : 1",
    "answer": "(A) 5 : 4",
    "diagramUrl": "",
    "solution": "BG = \\frac{1}{3} \\triangle ABC$。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "BG = \\frac{1}{3} \\triangle ABC$。 故選 (A)。"
  },
  {
    "id": "q_math_inequality_election_threshold_002",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "一元一次不等式應用：複數候選人確定當選之最低得票數門檻",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "多席次選舉「確定當選」最嚴苛門檻：應選名額為 $N$ 人，最不利情境為有 $N+1$ 人平分票數！門檻公式為：得票數 $x > \\frac{\\text{總有效票}}{N + 1}$。本題 $\\frac{12300}{2 + 1} = 4100$，票數為整數且須嚴格大於，故至少 4101 票！",
    "stem": "花田村要選村民代表，共有 5 位候選人，從中要選出 2 位，若開出有效票共 12300 張，則候選人至少應得多少票才可確定當選？\n\n○ (A) 4100\n○ (B) 4101\n○ (C) 4102\n○ (D) 4103",
    "answer": "(B) 4101",
    "diagramUrl": "",
    "solution": "1. 當選門檻公式：得票數 $x > \\frac{\\text{總有效票數}}{\\text{應選名額} + 1}$。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 當選門檻公式：得票數 $x > \\frac{\\text{總有效票數}}{\\text{應選名額} + 1}$。 故選 (B)。"
  },
  {
    "id": "q_math_arithmetic_mean_missing_num_003",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "等差級數求和與帶分數平均數反求未取數 (98基測I)",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "利用「全部總和 - 取出的 48 數總和 = 未取的數字」！計算帶分數乘法時善用乘法分配律：$48 \\times 49\\frac{5}{12} = 48 \\times 49 + 48 \\times \\frac{5}{12} = 2352 + 20 = 2372$，又快又準確！",
    "stem": "已知 $1 \\sim 99$ 中有 49 個偶數，從這 49 個偶數中取出 48 個數，其平均數為 $49\\frac{5}{12}$，則未取的數字為何？【98.基測 I】\n\n○ (A) 20\n○ (B) 28\n○ (C) 72\n○ (D) 78",
    "answer": "(D) 78",
    "diagramUrl": "",
    "solution": "1. 計算 49 個偶數的總和： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 計算 49 個偶數的總和： 故選 (D)。"
  },
  {
    "id": "q_math_ratio_reciprocal_simplification_004",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例式之倒數化簡與最簡整數比",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "若 $\\frac{1}{x} : \\frac{2}{y} : \\frac{3}{z} = 3 : 4 : 5$，取倒數時注意分子係數移項：$x : \\frac{y}{2} : \\frac{z}{3} = \\frac{1}{3} : \\frac{1}{4} : \\frac{1}{5}$，故 $x : y : z = \\frac{1}{3} : \\frac{2}{4} : \\frac{3}{5} = \\frac{1}{3} : \\frac{1}{2} : \\frac{3}{5}$！同乘最小公倍數 30 得 $10 : 15 : 18$！",
    "stem": "若 $\\frac{1}{x} : \\frac{2}{y} : \\frac{3}{z} = 3 : 4 : 5$，則 $x : y : z = ?$",
    "answer": "10 : 15 : 18",
    "diagramUrl": "",
    "solution": "1. 利用比例常數設式：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 利用比例常數設式："
  },
  {
    "id": "q_math_ratio_linear_substitution_005",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "連比例式之參數 r 假設法與三元一次式求值",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "連比例求值標準 SOP：令 $x+3=4r$、$y-2=2r$、$z=3r$，將 $x, y, z$ 均以 $r$ 表示後代入總和條件求得 $r=5$。注意目標為 $x - y = (4r-3) - (2r+2) = 2r - 5 = 10 - 5 = 5$！",
    "stem": "若 $(x + 3) : (y - 2) : z = 4 : 2 : 3$，且 $x + y + z = 44$，則 $x - y = ?$",
    "answer": "5",
    "diagramUrl": "",
    "solution": "1. 依比例設參數 $r$：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 依比例設參數 $r$："
  },
  {
    "id": "q_math_rect_area_ratio_perimeter_006",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "矩形面積分割連比例與二元一次不定方程式整數解之周長比",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "等高矩形面積比等於底邊長之比！乙與丙等寬同底，面積比 4:5 故 $DG:GC = 4:5$，總高為 $9y$；甲與 (乙+丙) 等高，故底邊 $AE:ED = 3:9 = 1:3$，總寬為 $4x$。周長 $2(4x+9y)=34$，限制長寬為整數只有 $x=2, y=1$ 一組正整數解！",
    "stem": "如圖，在長方形 $ABCD$ 中，$\\overline{EF}$、$\\overline{GH}$ 將長方形 $ABCD$ 分割成甲、乙、丙三個長方形區域，若甲、乙、丙的面積比為 $3 : 4 : 5$，且長方形 $ABCD$ 的周長為 34，甲、乙、丙的長、寬皆為整數，則甲、乙、丙的周長比為何？",
    "answer": "11 : 10 : 11",
    "diagramUrl": "assets/questions/q_math_rect_area_ratio_perimeter_006.png",
    "solution": "這題的核心概念就是利用「面積比」推「長寬比」，再湊出整數邊長：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "這題的核心概念就是利用「面積比」推「長寬比」，再湊出整數邊長："
  },
  {
    "id": "q_sci_bio_organism_hierarchy_001",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "生物體的個體組成層次差異（動物 vs. 植物）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-07",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "動植物個體組成層次對比：動物為「細胞 → 組織 → 器官 → 器官系統 → 個體」；植物為「細胞 → 組織 → 器官 → 個體」，植物缺少「器官系統」層次，因此植物的組成層次比動物少一個層級！",
    "stem": "關於章魚和松樹在個體組成層次的差異，下列何者正確？\n\n○ (A) 兩者沒有差異\n○ (B) 章魚沒有器官系統層次\n○ (C) 松樹僅有一種器官系統\n○ (D) 松樹的層次較少",
    "answer": "(D) 松樹的層次較少",
    "diagramUrl": "",
    "solution": "松樹缺少器官系統，層次較章魚少一個層級，為正解。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038793763,
        "isMastered": false
      }
    ],
    "explanation": "松樹缺少器官系統，層次較章魚少一個層級，為正解。 故選 (D)。"
  },
  {
    "id": "q_sci_phy_position_description_002",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "物體位置之精確描述三要素（參考點、方向、距離）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-07",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "物理學中描述位置必須完整具備「三要素」：基準點（參考點）、方向、距離，三者缺一不可！例如「小威在小東（基準點）右邊（方向）50公尺處（距離）」即為完整描述！",
    "stem": "下列何者對位置的描述最正確？\n\n○ (A) 小惠位於小強的東方\n○ (B) 小強距離小東 100 公尺處\n○ (C) 小東在北方 150 公尺\n○ (D) 小威在小東右邊 50 公尺處",
    "answer": "(D) 小威在小東右邊 50 公尺處",
    "diagramUrl": "",
    "solution": "「小威在小東右邊 50 公尺處」：包含參考點（小東）、方向（右邊）、距離（50 公尺），三要素最齊全完整。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791038822012,
        "isMastered": false
      }
    ],
    "explanation": "「小威在小東右邊 50 公尺處」：包含參考點（小東）、方向（右邊）、距離（50 公尺），三要素最齊全完整。 故選 (D)。"
  },
  {
    "id": "q_sci_phy_round_trip_average_speed_003",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算錯誤",
    "concept": "往返平均速率之計算（總路徑長除以總時間）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-07",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "平均速率絕對不是速度相加除以 2（10+30）/2 = 20 是大陷阱！平均速率定義是「總路徑長 / 總時間」！因為上山速度慢、花費時間較多，整體平均速率會被拉低為 15 公里/小時！",
    "stem": "小光騎自行車上山，若上山時平均速率為 10 公里／小時，下山時平均速率為 30 公里／小時，則往返一趟的平均速率為下列何者？\n\n○ (A) 0 公里／小時\n○ (B) 10 公里／小時\n○ (C) 15 公里／小時\n○ (D) 20 公里／小時",
    "answer": "(C) 15 公里／小時",
    "diagramUrl": "",
    "solution": "1. 核心定義： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790591010204,
        "isMastered": true
      }
    ],
    "explanation": "1. 核心定義： 故選 (C)。"
  },
  {
    "id": "q_sci_phy_car_vt_displacement_004",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "等加速度運動 v-t 圖與梯形面積求位移",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-07",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "v-t 圖之斜率代表「加速度 a」，曲線下方所圍面積代表「位移」！第 2 秒至第 4 秒之位移對應高為 2 秒的梯形面積：[(v₂ + v₄) × Δt] / 2 = [(6 + 12) × 2] / 2 = 18m！",
    "stem": "如圖為甲車的速度（$v$）與時間（$t$）關係圖，試問第 2 秒到第 4 秒間甲車移動的位移大小為下列何者？\n\n○ (A) 75m\n○ (B) 37.5m\n○ (C) 36m\n○ (D) 18m",
    "answer": "(D) 18m",
    "diagramUrl": "assets/questions/q_sci_phy_car_vt_displacement_007.png",
    "solution": "elta t = 4 - 2 = 2 \\text{ 秒}$ 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-10-12"
    ],
    "lastReviewedMonday": "2026-10-12",
    "lastReviewedDate": "2026-10-12",
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791792795676,
        "isMastered": true
      }
    ],
    "explanation": "elta t = 4 - 2 = 2 \\text{ 秒}$ 故選 (D)。"
  },
  {
    "id": "q_math_ratio_fraction_param_linear_007",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "連比例式之分數型參數 r 假設法與三元一次式求值",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "連比連等式令參數 $r$：設 $\\frac{x+3}{2} = \\frac{y-1}{4} = \\frac{z+1}{5} = r$，得 $x=2r-3, y=4r+1, z=5r-1$。代入 $2z-x-y=180$ 時去括號務必變號：$2(5r-1) - (2r-3) - (4r+1) = 4r = 180 \\implies r=45$！最後求 $x+y+z = 11r - 3 = 492$！",
    "stem": "若 $\\frac{x+3}{2} = \\frac{y-1}{4} = \\frac{z+1}{5}$，且 $2z - x - y = 180$，則 $x + y + z = ?$\n\n○ (A) 485\n○ (B) 490\n○ (C) 492\n○ (D) 495",
    "answer": "(C) 492",
    "diagramUrl": "",
    "solution": "這題用「設參數 $k$」來解最不容易出錯： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "這題用「設參數 $k$」來解最不容易出錯： 故選 (C)。"
  },
  {
    "id": "q_math_ratio_partnership_profit_weighted_008",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "正比與乘積連比例應用：合夥投資紅利按「金額 × 期間」加權分配",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "合夥紅利依「投資金額 × 投資期間」之乘積成正比分配！紅利比為 $(7 \\times 5) : 5x : (11 \\times 11) = 35 : 5x : 121$。由乙分得 50000 解得比值參數 $x=8$。注意題目最後問的是「乙的投資期間為多少個月」，總期間 2 年為 24 個月，乙的月份為 $24 \\times \\frac{8}{5+8+11} = 8$ 個月！",
    "stem": "若甲、乙、丙三人合夥投資，期末的紅利為 245000 元，投資期間為兩年，協議期末的紅利分配按投資金額和投資期間的乘積來分配，若甲、乙、丙在此期間的投資金額比為 $7 : 5 : 11$，投資期間比為 $5 : x : 11$，若乙在兩年後可分配紅利 50000 元，則乙的投資期間為多少個月？\n\n○ (A) 8\n○ (B) 4\n○ (C) 3\n○ (D) 2.5",
    "answer": "(A) 8",
    "diagramUrl": "",
    "solution": "1. 計算合夥紅利分配權重： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 計算合夥紅利分配權重： 故選 (A)。"
  },
  {
    "id": "q_chinese_applied_recruitment_notice_001",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "審題不清",
    "concept": "應用文閱讀理解：徵才啟事之條件篩選與關鍵詞義（親洽）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "審題關鍵詞：「親洽」！「親」為「親自」，「洽」為「接洽、商談」。「親洽」指有意應徵者必須本人親自前往面試或辦理，不能委託他人代為報名，故選 (B) 不可委託報名！注意「男生須役畢」並非限定只招男性，女性亦具應徵資格；「相關科系」指財經商管相關，非外文系；「需有經驗」為必備門檻！",
    "stem": "有關如圖的啟事，下列敘述何者正確？\n\n○ (A) 美麗是女性，不具應徵資格\n○ (B) 不可委託報名\n○ (C) 英文學系畢業者，有資格應徵\n○ (D) 不論有無經驗，只要符合條件，都可能錄用",
    "answer": "(B) 不可委託報名",
    "diagramUrl": "assets/questions/q_chinese_applied_recruitment_notice_001.png",
    "solution": "正確（正解）：啟事註明「意者請攜履歷及自傳親洽」。「親洽」指必須本人親自前往面試洽談，不可委託他人代為報名。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "正確（正解）：啟事註明「意者請攜履歷及自傳親洽」。「親洽」指必須本人親自前往面試洽談，不可委託他人代為報名。 故選 (B)。"
  },
  {
    "id": "q_chinese_compound_words_qian_mo_002",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "詞彙結構辨析：合義複詞（阡陌）vs. 聯綿詞（邂逅、蟋蟀、囫圇）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "「合義複詞」由兩個具獨立意義的單詞組合而成，拆開後各自成詞且意思不同！「阡」指東西向的田間小路，「陌」指南北向的小路，合稱「阡陌」指田間小路或田界！而 (乙)邂逅、(丙)蟋蟀、(丁)囫圇 均為「聯綿詞」，必須雙字合為一個語素，拆開後各字沒有個別獨立意義或意義與原詞無關，不可分割！",
    "stem": "「自從那天在(甲)阡陌交織的田中，偶然(乙)邂逅一群悠遊於朦朧夜色的美麗螢火蟲，及引吭高歌的(丙)蟋蟀。讀書一向(丁)囫圇吞棗的他，開始認真的閱讀相關資料，想要更了解那群提燈的小精靈與夜間音樂家。」\n上文中畫線處的詞，何者拆開後仍各自成詞，且意義不同？【91年第1次基測】\n\n○ (A) (甲)\n○ (B) (乙)\n○ (C) (丙)\n○ (D) (丁)",
    "answer": "(A) (甲)",
    "diagramUrl": "",
    "solution": "合義複詞（正解）：「阡」（南北田埂）＋「陌」（東西田埂），兩字皆有獨立意義，選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "合義複詞（正解）：「阡」（南北田埂）＋「陌」（東西田埂），兩字皆有獨立意義，選 (A)。"
  },
  {
    "id": "q_chinese_phonetic_loan_interchangeable_003",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "通假字與古今字義辨析（錯/措、襟/衿、蕃/繁 vs. 咨/茲）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意通假字與嘆詞的分辨！「咨」爾多士的「咨」（ㄗ）是「嘆詞」，相當於「啊、嗟」，用以呼告眾人；而「茲」（ㄗ）是「指示代詞」，意思是「此、這」（如念茲在茲），兩者詞性與字義截然不同，替換後意思完全改變！其餘三項皆為古文常見通假字：錯通「措」（安放）、襟通「衿」（衣服的胸襟領口）、蕃通「繁」（繁多）。",
    "stem": "下列文句「　」中的字，何者替換後意義改變？【92年第2次基測】\n\n○ (A) 民安所「錯」其手足——措\n○ (B) 「咨」爾多士，為民前鋒——茲\n○ (C) 夜夜夜半啼，聞者淚沾「襟」——衿\n○ (D) 水陸草木之花，可愛者甚「蕃」——繁",
    "answer": "(B) 「咨」爾多士，為民前鋒——茲",
    "diagramUrl": "",
    "solution": "「咨」爾多士，為民前鋒 ➔ 茲（意義改變，正解）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "「咨」爾多士，為民前鋒 ➔ 茲（意義改變，正解）： 故選 (B)。"
  },
  {
    "id": "q_chinese_rhetoric_pun_homophone_004",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "修辭手法辨析：諧音雙關（楓華萬千 ↔ 風華萬千）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "「諧音雙關」口訣：「借字取音，一語雙關」！題目例子「搖蓮」取「遙憐」之音，為著名樂府詩雙關手法。選項 (B) 的奧萬大以賞楓聞名，文案「楓華萬千」巧妙借用成語「風華萬千」的同音字「楓」，既指楓葉美景，又形容風采華麗，是極為標準的諧音雙關！(C)「氣蓋山河」原為成語「氣蓋山河」或「氣壯山河/氣蓋世」，並無音近轉字雙關。",
    "stem": "「諧音雙關」是一種利用「同音字或音近字造成雙重意義」的修辭，例如：「風吹荷葉動，何夜不搖蓮。」句中的「搖蓮」二字兼有「遙憐」的意思。下列四則新聞「　」中的詞語，何者也使用了相同的技巧？【109年會考補考】\n\n○ (A) 「日傳意外」！日本 鹿兒島發現八頭擱淺鯨魚\n○ (B) 時序入秋，旅行社推出奧萬大「楓華萬千」的賞楓專案\n○ (C) 棒球場上，為了幫球員打氣，球迷們搖旗吶喊，聲勢「氣蓋山河」\n○ (D) 網路發達，人們在家中就能和世界溝通，可謂：人在一方，「網連世界」。",
    "answer": "(B) 時序入秋，旅行社推出奧萬大「楓華萬千」的賞楓專案",
    "diagramUrl": "",
    "solution": "「楓華萬千」（正解）：奧萬大以賞楓聞名，旅行社巧妙借用成語「風華萬千」之音，改為「楓華萬千」，兼指楓紅美景與風采華麗，為標準的諧音雙關，故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "「楓華萬千」（正解）：奧萬大以賞楓聞名，旅行社巧妙借用成語「風華萬千」之音，改為「楓華萬千」，兼指楓紅美景與風采華麗，為標準的諧音雙關，故選 (B)。"
  },
  {
    "id": "q_chinese_literature_confucius_analects_005",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國學常識：孔子生平教育思想（有教無類 vs. 因材施教）與《論語》成書體例（作者非孔子自作、篇名由來、四書地位）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意孔子與《論語》的高頻辨析陷阱！\n1. 《論語》作者並非孔子親筆著作！而是由「孔子弟子及再傳弟子」輯錄編纂而成！(B) 錯誤在於作者不能寫「孔子」。\n2. 孟子（戰國中期）與荀子（戰國末期）皆生於孔子死後數百年，絕非孔子的親授學生！(C) 錯誤。\n3. 「不分貧富貴賤，人人皆有受教育權利」稱為「有教無類」；依學生資質個性給予不同指導才是「因材施教」！(D) 混淆觀念。",
    "stem": "下列四位學生對於孔子與《論語》的敘述及理解，何者正確？\n\n○ (A) 琪琪\n○ (B) 旻旻\n○ (C) 安安\n○ (D) 楚楚",
    "answer": "(A) 琪琪",
    "diagramUrl": "assets/questions/q_chinese_literature_confucius_analects_005.png",
    "solution": "檢視四位學生對孔子與《論語》的表格筆記： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "檢視四位學生對孔子與《論語》的表格筆記： 故選 (A)。"
  },
  {
    "id": "q_math_equilateral_triangle_linear_system_009",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "正三角形三邊長相等性質與二元一次聯立方程式求解",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "正三角形核心幾何性質：「三邊長皆相等」！由 $6x - 3y = 4x + y = 5x - 1$ 列出二元一次聯立方程式，整理得 $\\begin{cases} 2x - 4y = 0 \\implies x = 2y \\\\ 4x + y = 5x - 1 \\implies x - y = 1 \\end{cases}$，代入即可秒解 $y = 1, x = 2$！最後題目問的是 $x + y = 2 + 1 = 3$，切勿只算到 $x$ 或 $y$ 就急著選答案！",
    "stem": "如圖為一個正三角形，若 $6x - 3y$、$4x + y$、$5x - 1$ 分別表示三邊的長，則 $x + y = ?$\n\n○ (A) 2\n○ (B) 3\n○ (C) 4\n○ (D) 5",
    "answer": "(B) 3",
    "diagramUrl": "assets/questions/q_math_equilateral_triangle_linear_system_009.png",
    "solution": "1. 依正三角形「三邊等長」列聯立方程式： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 依正三角形「三邊等長」列聯立方程式： 故選 (B)。"
  },
  {
    "id": "q_math_line_chart_revenue_comparison_010",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "折線圖統計資料判讀、月平均計算與兩組數據總額比較",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意縱軸單位為「百萬元」！折線圖實線為「狠郝賺」、虛線圈為「泰匯賺」。下半年總營業額：泰匯賺 $41 + 43 + 59 + 45 + 40 + 58 = 286$ 百萬元；狠郝賺 $53 + 38 + 72 + 89 + 58 + 36 = 346$ 百萬元。兩家差額 $346 - 286 = 60$ 百萬元 $= 6000$ 萬元！故泰匯賺比狠郝賺少 6000 萬元，選 (C)！",
    "stem": "如圖為泰匯賺與狠郝賺兩家科技公司下半年來每個月的營業額分配折線圖，請問下列敘述何者正確？\n\n○ (A) 泰匯賺平均每月營業額超過 5000 萬元\n○ (B) 狠郝賺平均每月營業額超過 6000 萬元\n○ (C) 泰匯賺公司下半年的營業額比狠郝賺公司少 6000 萬元\n○ (D) 泰匯賺公司下半年的營業額比狠郝賺公司少 3000 萬元",
    "answer": "(C) 泰匯賺公司下半年的營業額比狠郝賺公司少 6000 萬元",
    "diagramUrl": "assets/questions/q_math_line_chart_revenue_comparison_010.png",
    "solution": "1. 讀取折線圖兩家公司各月營業額（單位：百萬元）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 讀取折線圖兩家公司各月營業額（單位：百萬元）： 故選 (C)。"
  },
  {
    "id": "q_math_discount_soap_lotion_linear_system_011",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "百分率調價應用題與二元一次聯立方程式建模求解",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "設特價時沐浴乳一瓶 $x$ 元、香皂一塊 $y$ 元。特價花費：$x + 2y = 156$；恢復原價多了 20% 即原價為 $1.2x$；此時為香皂的 8 倍：$1.2x = 8y \\implies x = \\frac{20}{3}y$。代入消去求得 $y = 18$ 元！注意特價與原價為 $(1 + 0.2)x = 1.2x$！",
    "stem": "志玲趁商店折扣時，買了一瓶沐浴乳和兩塊香皂共花了 156 元，後來沐浴乳恢復原價，價格較特價時多了 20%，而香皂價格不變，此時沐浴乳價格為香皂單價的 8 倍，則香皂一塊多少元？\n\n○ (A) 12\n○ (B) 16\n○ (C) 18\n○ (D) 20",
    "answer": "(C) 18",
    "diagramUrl": "",
    "solution": "香皂一塊為 18 元，正確答案選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "香皂一塊為 18 元，正確答案選 (C)。"
  },
  {
    "id": "q_math_fraction_simplest_coprime_012",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "質因數分解、最大公因數求法與最簡分數判定（分子分母互質）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "最簡分數定義：分子與分母的最大公因數為 1（互質）！注意質數倍數陷阱：62 與 93 有公因數 31；19 與 361 有公因數 19；111111 各位數字和為 6 可被 33 約分！(B) 81 = 3^4, 121 = 11^2，質因數 3 與 11 互質，為最簡分數！",
    "stem": "下列何者是最簡分數？\n\n○ (A) $-\\frac{62}{93}$\n○ (B) $\\frac{81}{121}$\n○ (C) $-\\frac{19}{361}$\n○ (D) $\\frac{33}{111111}$",
    "answer": "(B) $\\frac{81}{121}$",
    "diagramUrl": "",
    "solution": "$\\frac{81}{121}$（最簡分數，正確）： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "$\\frac{81}{121}$（最簡分數，正確）： 故選 (B)。"
  },
  {
    "id": "q_math_triangle_angle_bisector_af_013",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "直角三角形商高定理、斜邊上的高與內角平分線性質",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "直角三角形斜邊上的高 $\\overline{AD} = \\frac{\\text{兩股相乘}}{\\text{斜邊}} = \\frac{3 \\times 4}{5} = \\frac{12}{5}$；再由畢氏定理求得 $\\overline{BD} = \\frac{16}{5}$。接著在 $\\triangle ABD$ 中，$\\overline{BF}$ 為角平分線，利用內角平分線性質：$\\overline{AF} : \\overline{FD} = \\overline{AB} : \\overline{BD} = 4 : \\frac{16}{5} = 5 : 4$，得 $\\overline{AF} = \\overline{AD} \\times \\frac{5}{5+4} = \\frac{4}{3}$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\angle BAC = 90^\\circ$，$\\overline{AD} \\perp \\overline{BC}$，$\\overline{BE}$ 為 $\\angle ABC$ 的角平分線，且交 $\\overline{AC}$ 於 $E$ 點，$\\overline{AD}$ 和 $\\overline{BE}$ 的交點為 $F$。若 $\\overline{AB} = 4$，$\\overline{AC} = 3$，則 $\\overline{AF} = ?$",
    "answer": "$\\frac{4}{3}$",
    "diagramUrl": "assets/questions/q_math_triangle_angle_bisector_af_013.png",
    "solution": "1. 利用畢氏定理求斜邊 $\\overline{BC}$：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-09",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 利用畢氏定理求斜邊 $\\overline{BC}$："
  },
  {
    "id": "q_math_triangle_angle_bisector_ad_014",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形角平分線全等性質（SAS）與同高三角形面積比等於底邊比",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "連接 $\\overline{DE}$，利用 $\\overline{BE}$ 為角平分線及 $\\overline{BC} = \\overline{BD} = 6$，證出 $\\triangle BDE \\cong \\triangle BCE$ (SAS)，得 $\\angle BDE = \\angle C = 90^\\circ$ 且兩者面積相等！由 $\\triangle ABC$ 面積是 $\\triangle ADE$ 的 4 倍，推得 $\\triangle ADE$ 面積與 $\\triangle BDE$ 面積比為 $2 : 3$。因同高（$\\overline{DE}$），底邊比 $\\overline{AD} : \\overline{BD} = 2 : 3$，即可求出 $\\overline{AD} = 4$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\angle C = 90^\\circ$，$\\overline{BE}$ 平分 $\\angle ABC$，$D$ 為斜邊 $\\overline{AB}$ 上一點。若 $\\overline{BC} = \\overline{BD} = 6$，$\\triangle ABC$ 面積是 $\\triangle ADE$ 面積的 4 倍，則 $\\overline{AD} =$ ______。",
    "answer": "4",
    "diagramUrl": "assets/questions/q_math_triangle_angle_bisector_ad_014.png",
    "solution": "1. 連接 $\\overline{DE}$，證明 $\\triangle BDE \\cong \\triangle BCE$：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-09",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 連接 $\\overline{DE}$，證明 $\\triangle BDE \\cong \\triangle BCE$："
  },
  {
    "id": "q_math_parallel_ratio_proof_015",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段性質與兩組平行線比例傳遞證明",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "遇到兩組平行線時，尋找共同比例中間橋樑（$\\overline{AE} : \\overline{AC}$）！在 $\\triangle ABC$ 中，$\\overline{DE} // \\overline{BC} \\implies \\overline{AE} : \\overline{AC} = \\overline{AD} : \\overline{AB}$；在 $\\triangle ADC$ 中，$\\overline{EF} // \\overline{CD} \\implies \\overline{AE} : \\overline{AC} = \\overline{AF} : \\overline{AD}$。兩式相等得 $\\overline{AD} : \\overline{AB} = \\overline{AF} : \\overline{AD} \\implies \\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$F$ 兩點在 $\\overline{AB}$ 上，$E$ 點在 $\\overline{AC}$ 上。若 $\\overline{DE} // \\overline{BC}$，$\\overline{EF} // \\overline{CD}$，試說明 $\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$。",
    "answer": "見詳細說明（利用 $\\overline{AE} : \\overline{AC}$ 為橋樑推導得 $\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$）",
    "diagramUrl": "assets/questions/q_math_parallel_ratio_proof_015.png",
    "solution": "**【詳細證明步驟】**\n\n1. **第一組平行線（在 $\\triangle ABC$ 中）**：\n   - $\\because \\overline{DE} /",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-09",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "**【詳細證明步驟】**\n\n1. **第一組平行線（在 $\\triangle ABC$ 中）**：\n   - $\\because \\overline{DE} /"
  },
  {
    "id": "q_math_parallel_ratio_calc_016",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "平行線截比例線段性質、比例中項求長度與相似三角形對應邊比",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 由兩組平行線性質可知 $\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$，代入 $6^2 = \\overline{AF} \\times 9 \\implies \\overline{AF} = 4$！\n2. 求底邊 $\\overline{BC}$ 時需用「小三角形邊比大三角形邊」：$\\overline{AD} : \\overline{AB} = \\overline{DE} : \\overline{BC} \\implies 6 : 9 = 8 : \\overline{BC} \\implies \\overline{BC} = 12$！切勿誤用 $\\overline{BD}$ 作比！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$F$ 兩點在 $\\overline{AB}$ 上，$E$ 點在 $\\overline{AC}$ 上。若 $\\overline{DE} // \\overline{BC}$，$\\overline{EF} // \\overline{CD}$，其中 $\\overline{AD} = 6$，$\\overline{AB} = 9$，$\\overline{DE} = 8$，則 $\\overline{AF}$、$\\overline{BC}$ 的長分別為何？",
    "answer": "$\\overline{AF} = 4$、$\\overline{BC} = 12$",
    "diagramUrl": "assets/questions/q_math_parallel_ratio_calc_016.png",
    "solution": "1. 利用兩組平行線之比例性質求 $\\overline{AF}$：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-09",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 利用兩組平行線之比例性質求 $\\overline{AF}$："
  },
  {
    "id": "q_math_parallel_ext_bisector_df_017",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段性質、外角平分線與等腰三角形邊長轉換",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07",
      "2026-09-14"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "核心關鍵在於將 $\\overline{DF}$ 拆成 $\\overline{DE} + \\overline{EF}$！\n1. $\\overline{DE} // \\overline{BC} \\implies \\overline{DE} : \\overline{BC} = \\overline{AD} : \\overline{AB} = 1 : (1+3) = 1 : 4$，得 $\\overline{DE} = 16 \\times \\frac{1}{4} = 4$。\n2. 因 $\\overline{DF} // \\overline{BG}$，內錯角 $\\angle EFC = \\angle FCG$；又 $\\overline{CF}$ 為角平分線 $\\implies \\angle ECF = \\angle FCG$。兩底角相等故 $\\triangle ECF$ 為等腰三角形，$\\overline{EF} = \\overline{CE} = 10$！\n3. $\\overline{DF} = 4 + 10 = 14$！",
    "stem": "如右圖，$\\triangle ABC$ 中，$D$、$E$ 兩點分別在 $\\overline{AB}$、$\\overline{AC}$ 上，且 $\\overline{DE} // \\overline{BC}$，$\\overline{CF}$ 平分 $\\angle ACG$，交 $\\overline{DE}$ 延長線於 $F$ 點。若 $\\overline{AD} : \\overline{DB} = 1 : 3$，$\\overline{BC} = 16$，$\\overline{CE} = 10$，則 $\\overline{DF} =$ ______。",
    "answer": "14",
    "diagramUrl": "assets/questions/q_math_parallel_ext_bisector_df_017.png",
    "solution": "1. 利用平行線比例求 $\\overline{DE}$：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-09",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789896398589,
        "isMastered": true
      },
      {
        "date": "2026-09-21",
        "monday": "2026-09-14",
        "timestamp": 1790000990631,
        "isMastered": false
      }
    ],
    "explanation": "1. 利用平行線比例求 $\\overline{DE}$："
  },
  {
    "id": "q_math_triangle_cevian_area_ratio_018",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形同高面積比等於底邊比與共頂點分割三角形面積比例推導",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07",
      "2026-09-14"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "同高三角形面積比等於底邊比！\n1. 由 $\\overline{AO} : \\overline{OD} = 1 : 1$，得 $\\triangle AOB = \\triangle BOD = a$、$\\triangle AOC = \\triangle COD = b$。\n2. 底邊 $\\overline{BD} : \\overline{BC} = 3 : 7 \\implies \\overline{BD} : \\overline{CD} = 3 : (7-3) = 3 : 4$。\n3. $\\triangle ABD : \\triangle ADC = 2a : 2b = 3 : 4 \\implies a : b = 3 : 4$。\n4. 設 $a = 3r, b = 4r$，則 $\\triangle AOB : \\triangle BOC : \\triangle AOC = a : (a+b) : b = 3r : (3r+4r) : 4r = 3 : 7 : 4$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$E$、$F$ 分別為三邊上的一點，$O$ 為 $\\overline{AD}$、$\\overline{BE}$、$\\overline{CF}$ 的交點。若 $\\overline{AO} : \\overline{OD} = 1 : 1$，$BD : BC = 3 : 7$，則 $\\triangle AOB$、$\\triangle BOC$、$\\triangle AOC$ 的面積比為何？",
    "answer": "3 : 7 : 4",
    "diagramUrl": "assets/questions/q_math_triangle_cevian_area_ratio_018.png",
    "solution": "1. 利用 $\\overline{AO} : \\overline{OD} = 1 : 1$ 設未知數：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-09",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 利用 $\\overline{AO} : \\overline{OD} = 1 : 1$ 設未知數："
  },
  {
    "id": "q_math_rhombus_angle_bisector_be_019",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "菱形幾何性質（對角線平分內角）、三角形內角平分線性質與相似形邊長比",
    "uploadDate": "2026-09-10",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07",
      "2026-09-14"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "看到菱形內接於三角形，秒用兩大幾何利器！\n1.【秒殺法・內角平分線】：菱形對角線平分對角，故連接 $\\overline{AE}$ 即為 $\\angle BAC$ 之角平分線！由角平分線定理：$\\overline{BE} : \\overline{EC} = \\overline{AB} : \\overline{AC} = 14 : 10 = 7 : 5$，直接求得 $\\overline{BE} = 12 \\times \\frac{7}{7+5} = 7$！\n2.【相似形法】：設菱形邊長為 $x$，由 $\\overline{DE} // \\overline{AC}$ 知 $\\triangle BDE \\sim \\triangle BAC$，$\\frac{x}{10} = \\frac{14-x}{14} \\implies x = \\frac{35}{6}$，再由 $\\overline{BE} = 12 \\times \\frac{x}{10} = 7$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$E$、$F$ 分別為三邊上的一點，若四邊形 $ADEF$ 為菱形，$\\overline{AB} = 14$，$\\overline{BC} = 12$，$\\overline{AC} = 10$，則 $\\overline{BE} =$ ______。",
    "answer": "7",
    "diagramUrl": "assets/questions/q_math_rhombus_angle_bisector_be_019.png",
    "solution": "1. 方法一：利用菱形對角線為角平分線（秒殺技巧）：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-10",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. 方法一：利用菱形對角線為角平分線（秒殺技巧）："
  },
  {
    "id": "q_math_parallel_lines_trapezoid_ef_cf_020",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段性質、平行輔助線分割（平行四邊形＋相似三角形）與梯形比例求長",
    "uploadDate": "2026-09-10",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-07",
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "兩大考點重點歸納：\n1.【平行線截比例線段】：直線 $L_1 // L_2 // L_3$ 時，截線左右對應段成比例：$\\overline{AB} : \\overline{BC} = \\overline{DE} : \\overline{EF} \\implies 12 : 18 = 10 : \\overline{EF} \\implies \\overline{EF} = 15$！\n2.【梯形內部橫線求解（兩種方法）】：\n  - 方法一（作平行線分割）：作 $\\overline{AG} // \\overline{DF}$，右側成平行四邊形得 $\\overline{HE} = \\overline{GF} = 20$，左側三角形底邊 $\\overline{BH} = 30 - 20 = 10$。由 $\\triangle ABH \\sim \\triangle ACG$ 得 $\\frac{10}{\\overline{CG}} = \\frac{12}{12+18} = \\frac{2}{5} \\implies \\overline{CG} = 25$。總長 $\\overline{CF} = 25 + 20 = 45$！\n  - 方法二（秒殺分點公式）：中間線長 $\\overline{BE} = \\frac{18 \\times \\overline{AD} + 12 \\times \\overline{CF}}{12 + 18} \\implies 30 = \\frac{360 + 12\\overline{CF}}{30} \\implies \\overline{CF} = 45$！",
    "stem": "如右圖，直線 $L_1 // L_2 // L_3$，若 $\\overline{AB} = 12$，$\\overline{BC} = 18$，$\\overline{DE} = 10$，$\\overline{AD} = 20$，$\\overline{BE} = 30$，則：\n(1) $\\overline{EF} = ?$\n(2) $\\overline{CF} = ?$",
    "answer": "(1) 15；(2) 45",
    "diagramUrl": "assets/questions/q_math_parallel_lines_trapezoid_ef_cf_020.png",
    "solution": "1. 第 (1) 小題：利用「平行線截等比例線段性質」求 $\\overline{EF}$：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-10",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791024853699,
        "isMastered": true
      }
    ],
    "explanation": "1. 第 (1) 小題：利用「平行線截等比例線段性質」求 $\\overline{EF}$："
  },
  {
    "id": "q_chinese_part_of_speech_comparison_006",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "文法修辭：詞性辨析（形容詞、副詞、動詞、名詞之句中功能）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "判別詞性看修飾對象！修飾名詞為形容詞，修飾動詞為副詞。(C)「風流人物」之風流修飾名詞人物（形容詞）；「風流倜儻」之風流為形容詞，兩者皆為形容詞！(A)「蜿蜒」的小路（形）／「蜿蜒」的穿梭（副）。(B)「泛泛」論說（副）／「泛泛」之輩（形）。(D)極力「阿諛」（動）／臣子的「阿諛」（名）。",
    "stem": "以下「　」內詞語的詞性，何者兩兩相同？\n\n○ (A) 遠處的山腰上，有許多「蜿蜒」的小路／新店溪是一條靈蛇，「蜿蜒」的穿梭於谷壑\n○ (B) 目前媒體多半「泛泛」論說，不夠深入／看他相貌平凡，但有實力，非「泛泛」之輩\n○ (C) 諸葛亮是稱霸三國時的「風流」人物／他的性格「風流」倜儻，能言善道，交遊廣闊\n○ (D) 為了博得長官的好印象，他極力「阿諛」／唐太宗厭惡臣子的「阿諛」，大力重用魏徵",
    "answer": "(C) 諸葛亮是稱霸三國時的「風流」人物／他的性格「風流」倜儻，能言善道，交遊廣闊",
    "diagramUrl": "",
    "solution": "形／形（正解）：「風流」人物（形）／性格「風流」（形），詞性相同，選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "形／形（正解）：「風流」人物（形）／性格「風流」（形），詞性相同，選 (C)。"
  },
  {
    "id": "q_chinese_rhetoric_rhetorical_question_007",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "修辭手法：設問法三類辨析（疑問、提問／自問自答、激問／反問）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "設問修辭三大分類口訣：1.【疑問（懸問）】：心中有疑，答案不知（如「寒梅著花未？」）。2.【提問】：自問自答，答案在後（如「問君何能爾？心遠地自偏」、「飄飄何所似？天地一沙鷗」）。3.【激問（反問）】：明知故問，答案在問題反面，語氣強烈肯定（如「不亦君子乎？ ⇒ 當然是君子！」）。故 (C) 為標準反問！",
    "stem": "下列文句，何者使用了「反問」的語氣？\n\n○ (A) 來日綺窗前，寒梅著花未\n○ (B) 問君何能爾？心遠地自偏\n○ (C) 人不知而不慍，不亦君子乎\n○ (D) 飄飄何所似？天地一沙鷗",
    "answer": "(C) 人不知而不慍，不亦君子乎",
    "diagramUrl": "",
    "solution": "激問/反問（正解）：不亦君子乎？（答案在反面，強烈肯定「確實是君子」），選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-07",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "激問/反問（正解）：不亦君子乎？（答案在反面，強烈肯定「確實是君子」），選 (C)。"
  },
  {
    "id": "q_chinese_song_ci_famous_quotes_008",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "名句活用：南唐兩宋詞作情境辨析（秦觀〈鵲橋仙〉、馮延巳〈謁金門〉、辛棄疾〈醜奴兒〉）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意詞作名句典故與文意搭配！1.「兩情若是長久時」出自秦觀〈鵲橋仙〉（兩情若是久長時，又豈在朝朝暮暮），指真情不因短暫時空分離而褪色，用以安慰出國遠距男友完全正確（✔）。2.「吹皺一池春水」出自馮延巳〈謁金門〉（干卿底事之典），比喻「事不關己而好管閒事」，不能用在寫作無病呻吟！小說被退稿因閱歷不足強作感慨，宜改用辛棄疾〈醜奴兒〉「為賦新詞強說愁」。",
    "stem": "【今朝話名句】下列題目皆使用了南唐兩宋詞作中的經典名句，請依據各題文意，判斷何者使用「最恰當」？\n\n○ (A) 即將出國的洛詩安慰男友：「兩情若是長久時，何必在乎一時的分離？我們還能隨時視訊，別擔心。」\n○ (B) S君的小說被出版社退稿，主要是閱歷不夠、體悟不深，寫作常「吹皺一池春水」，以致作品不受青睞",
    "answer": "(A) 即將出國的洛詩安慰男友：「兩情若是長久時，何必在乎一時的分離？我們還能隨時視訊，別擔心。」",
    "diagramUrl": "",
    "solution": "恰當（正解）：秦觀〈鵲橋仙〉「兩情若是久長時，又豈在朝朝暮暮」，指真情經得起時空分離考驗，安慰出國男友語境貼切，選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-08",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "恰當（正解）：秦觀〈鵲橋仙〉「兩情若是久長時，又豈在朝朝暮暮」，指真情經得起時空分離考驗，安慰出國男友語境貼切，選 (A)。"
  },
  {
    "id": "q_chinese_homophone_que_que_characters_009",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國字注音與寫字測驗：辛棄疾名句與常考成語（兜鍪、悠然神往、休戚與共、一闋詞）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【國字注音常考陷阱筆記】：\n2. 兜【鍪】（矛＋攴＋金，古代頭盔）；\n8. 【悠】然神往（攸＋心，神思嚮往，非「幽」）；\n9. 【休】戚與共（休是喜慶，戚是憂患，非「修」）；\n10. 一【闋】詞（門＋癸，計算詞的單位，切勿誤寫為「闕」）！",
    "stem": "【國字注音寫字填空測驗】\n請依題幹注音在各題括號中寫出正確國字（可於框內鍵入，或點擊上方「草稿區」手寫練習）：\n\n2. 兜 ㄇㄡˊ 【　　】\n8. 一 ㄧㄡ 然神往 【　　】\n9. ㄒㄧㄡ 戚與共 【　　】\n10. 一 ㄑㄩㄝˋ 詞 【　　】",
    "answer": "2. 【鍪】（兜鍪）\n8. 【悠】（悠然神往）\n9. 【休】（休戚與共）\n10. 【闋】（一闋詞）",
    "diagramUrl": "assets/questions/q_chinese_fill_in_characters_009_test.png",
    "solution": "![考卷紅字答案照](assets/questions/q_chinese_fill_in_characters_009_answer.png)",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-08",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "![考卷紅字答案照](assets/questions/q_chinese_fill_in_characters_009_answer.png)"
  },
  {
    "id": "q_chinese_classical_verse_comparison_010",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "古典韻文體制大比較：古詩、樂府詩、近體詩（絕句與律詩）、詞之全面統整",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "國文會考韻文四大天王必背對照：1.【句數字數】：古詩（多五七言，不限句）、樂府（多雜言，不限句）、絕句（4句/20或28字）、律詩（8句/40或56字）、詞（長短句，依詞牌小令≤58字、中調59~90字、長調≥91字）。2.【對仗】：律詩「頷聯(第二聯)與頸聯(第三聯)」必對仗！其餘（古詩、樂府、絕句）皆不限。3.【押韻】：古詩、樂府可換韻；近體詩一韻到底絕不可換韻（偶數句必押平聲韻，首句可押可不押）；詞依詞牌而定。4.【朝代別名】：古詩（漢魏六朝/古風）、樂府（漢魏南北朝）、近體詩（唐代/今體詩）、詞（宋代成熟/詩餘、長短句、曲子詞、樂府）。故 (B) 正確！",
    "stem": "關於我國古典韻文「古詩、樂府詩、近體詩、詞」的體制特徵比較，下列敘述何者「完全正確」？\n\n○ (A) 句數與字數：古詩與樂府詩皆無句數限制；近體詩絕句四句、律詩八句；詞則字數固定為五言或七言\n○ (B) 押韻規定：古詩與樂府詩皆可換韻；近體詩偶數句押韻、一韻到底不可換韻；詞則須依各詞牌規定押韻\n○ (C) 對仗要求：近體詩之絕句與律詩皆規定必須嚴格對仗；古詩與樂府詩則完全不限\n○ (D) 發展與別名：古詩盛行於唐代，別名「長短句」；詞成熟於兩宋，別名「今體詩」或「古風」",
    "answer": "(B) 押韻規定：古詩與樂府詩皆可換韻；近體詩偶數句押韻、一韻到底不可換韻；詞則須依各詞牌規定押韻",
    "diagramUrl": "",
    "solution": "完全正確（正解）：古詩、樂府可換韻；近體詩一韻到底不可換韻；詞則依各詞牌規定押韻，選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-08",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "完全正確（正解）：古詩、樂府可換韻；近體詩一韻到底不可換韻；詞則依各詞牌規定押韻，選 (B)。"
  },
  {
    "id": "q_chinese_liyu_xinqiji_dialogue_011",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "詞人生平、風格與詞壇稱號辨析（李煜「詞中之聖／詞中之帝」vs 辛棄疾「愛國詞人」）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "詞家頭銜張冠李戴大陷阱！南唐後主李煜為亡國降臣，被王國維評為「詞中之帝」，後世尊為「詞中之聖」；南宋辛棄疾力主抗金北伐收復神州，為名震千古的「愛國詞人」！(B) 選項將兩人的稱號顛倒替換（張冠李戴），因此對話不適當！其餘(A)(C)(D)對兩人詞風、亡國/報國處境、名句引用完全吻合。",
    "stem": "在「古畫動起來」展覽中，透過AI技術讓李煜、辛棄疾進行跨時代對話。依據兩人生平及作品的特色，下列對話內容，何者「不適當」？\n\n○ (A) 李煜：「稼軒居士，您知道嗎？後人讀詞，常說我前期的詞婉約清麗，而您則是擅長創作豪情萬千、氣勢雄渾的詞作。」\n○ (B) 辛棄疾：「閣下說的沒錯，您曾為國君，詞作都是真情流露，被稱為「愛國詞人」。我的詞作多為憂國傷時之作，被稱為「詞中之聖」。」\n○ (C) 李煜：「我以「亡國之痛」成就婉約詞的極致，而您則以「報國無門」寫出豪放詞的高峰。」\n○ (D) 辛棄疾：「舉例來說，您的作品虞美人以「春花秋月何時了，往事知多少」，表達對故國的懷念；而我的南鄉子 登京口北固亭有懷 則以「何處望神州？滿眼風光北固樓」抒發山河變色的慨嘆。」",
    "answer": "(B) 辛棄疾：「閣下說的沒錯，您曾為國君，詞作都是真情流露，被稱為「愛國詞人」。我的詞作多為憂國傷時之作，被稱為「詞中之聖」。」",
    "diagramUrl": "",
    "solution": "不適當（正解）：稱號張冠李戴！李煜為五代國君，降宋後抒發亡國血淚，被尊為「詞中之帝／詞中之聖」；辛棄疾一生抗金北伐，被譽為「愛國詞人」。選項將兩人稱號顛倒，選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-08",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "不適當（正解）：稱號張冠李戴！李煜為五代國君，降宋後抒發亡國血淚，被尊為「詞中之帝／詞中之聖」；辛棄疾一生抗金北伐，被譽為「愛國詞人」。選項將兩人稱號顛倒，選 (B)。"
  },
  {
    "id": "q_chinese_xinqiji_doumou_rhetoric_012",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "修辭技巧辨析：辛棄疾〈南鄉子〉「兜鍪」借代 vs 譬喻",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "題幹「兜鍪」借代戰士。(A)五斗米借代官俸；(B)孤帆借代船隻；(C)「恰似」為譬喻（未用借代）；(D)桑梓借代家鄉。",
    "stem": "辛棄疾南鄉子這闋詞中，以「兜鍪」借代為戰士。以下何者未使用相同的修辭技巧？\n\n○ (A) 吾不能為五斗米折腰\n○ (B) 孤帆遠影碧山盡\n○ (C) 恰似一江春水向東流\n○ (D) 令我生心憶桑梓。",
    "answer": "(C) 恰似一江春水向東流",
    "diagramUrl": "",
    "solution": "譬喻（正解）：「恰似」為喻詞，將愁緒比作春水，為譬喻（未用借代），選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-08",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "譬喻（正解）：「恰似」為喻詞，將愁緒比作春水，為譬喻（未用借代），選 (C)。"
  },
  {
    "id": "q_chinese_youyou_polysemy_013",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "一詞多義辨析：辛棄疾名句「悠悠」與各文句涵義比較",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "「悠悠」多義：(A)憂思長久；(B)從容徐緩；(C)高遠、遙遠貌（正解）；(D)眾多凡俗（眾人之口）。",
    "stem": "下列各項「悠悠」，何者是表示遙遠的意思？\n\n○ (A)「悠悠」我心\n○ (B)「悠悠」南行\n○ (C)「悠悠」蒼天\n○ (D) 杜「悠悠」之口。",
    "answer": "(C)「悠悠」蒼天",
    "diagramUrl": "",
    "solution": "正解：高遠、遙遠貌（出自《詩經·黍離》「悠悠蒼天，此何人哉」），選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-08",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "正解：高遠、遙遠貌（出自《詩經·黍離》「悠悠蒼天，此何人哉」），選 (C)。"
  },
  {
    "id": "q_chinese_word_meaning_evolution_014",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "詞語古今義與時空演變辨析（滾滾、千古、了了、風光）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "(A)皆指翻湧紛擾貌（相同）；(B)流傳久遠／去世輓辭；(C)聰明／明白；(D)風景／榮耀。",
    "stem": "詞語的意思有時會因應時空的不同而有所改變，下列「　」中的詞語，何組意思相同？\n\n○ (A) 黃沙「滾滾」／遠離「滾滾」紅塵\n○ (B)「千古」流傳／恭弔陳老太太「千古」\n○ (C) 小時「了了」／他對此事不甚「了了」\n○ (D)「風光」明媚／她在運動會上獨占「風光」。",
    "answer": "(A) 黃沙「滾滾」／遠離「滾滾」紅塵",
    "diagramUrl": "",
    "solution": "意思相同（正解）：皆指翻湧、紛擾繁盛貌，選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-08",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "意思相同（正解）：皆指翻湧、紛擾繁盛貌，選 (A)。"
  },
  {
    "id": "q_chinese_syntax_inversion_007",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "古典詩詞倒裝句修辭判斷（辛棄疾《清平樂·村居》）",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "辛棄疾《清平樂·村居》中的「白髮誰家翁媼」，正常語序應為「誰家白髮翁媼」（定語修飾語前置倒裝），因詞牌格律平仄與押韻（好、媼、草、老）需求而倒裝！其他選項皆為自然常規語序。",
    "stem": "下列文句，何者使用「倒裝」句法？\n\n○ (A) 樓上晴天碧四垂，樓前芳草接天涯\n○ (B) 新筍已成堂下竹，落花都上燕巢泥\n○ (C) 醉裡吳音相媚好，白髮誰家翁媼\n○ (D) 最喜小兒亡賴，溪頭臥剝蓮蓬。",
    "answer": "(C) 醉裡吳音相媚好，白髮誰家翁媼",
    "diagramUrl": "",
    "solution": "3. 結論：正確答案選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-09",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "3. 結論：正確答案選 (C)。"
  },
  {
    "id": "q_chinese_homophone_shape_wu_015",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文會考核心字形辨析：形似同音成語（趨之若『鶩』vs. 好高『騖』遠、嘆『惋』、企『盼』）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 趨之若「鶩」是「鳥部」（像野鴨爭食搶翻天）！\n2. 好高「騖」遠是「馬部」（像野馬奔馳不知返，比喻不切實際）！\n3. 嘆「惋」是「忄心部」（心裡惋惜哀傷）。\n4. 企「盼」是「目部」（轉動眼睛踮起腳盼望）。",
    "stem": "下列文句「　」中的成語與詞語，何者字形【完全正確】？\n\n○ (A) 這項新推出的限量公仔引發搶購熱潮，各路收藏家趨之若「騖」\n○ (B) 做學問應當腳踏實地循序漸進，切忌好高「鶩」遠、不切實際\n○ (C) 面對英年早逝的抗疫英雄，全國民眾無不深感痛心嘆「惋」\n○ (D) 離鄉背井求學多年，他日夜企「叛」著能早日返鄉與家人團聚。",
    "answer": "(C) 面對英年早逝的抗疫英雄，全國民眾無不深感痛心嘆「惋」",
    "diagramUrl": "",
    "solution": "1. (C) 正確（正解）：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-11",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. (C) 正確（正解）："
  },
  {
    "id": "q_chinese_phonetics_stroke_you_que_016",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文會考核心字音辨析：成語與常考字音（生死『攸』關、付之『闕』如、『矢』口否認、『矇』混過關）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 生死「攸」關：音 ㄧㄡ（關係、所繫），非 ㄒㄧㄡ。\n2. 付之「闕」如：音 ㄑㄩㄝ（一聲陰平），通「缺」，非 ㄐㄩㄝˊ 也非 ㄑㄩㄝˋ！\n3. 「矢」口否認：音 ㄕˇ（三聲上聲），像發誓般堅決否定，非 ㄕˋ。\n4. 「矇」混過關：教育部標準音 ㄇㄥ（一聲陰平），欺瞞矇蔽之意，非 ㄇㄥˊ。",
    "stem": "下列文句「　」中字的讀音，何者標示【完全正確】？\n\n○ (A) 這次手術關係到病患的性命，可謂生死「攸」關／ㄧㄡ\n○ (B) 這份研究報告的核心實驗數據付之「闕」如，難以令人信服／ㄐㄩㄝˊ\n○ (C) 面對警方的鐵證與監視錄影，嫌犯依然「矢」口否認犯行／ㄕˋ\n○ (D) 他想靠小聰明在重要證照考場中「矇」混過關，當場被監考官識破／ㄇㄥˊ。",
    "answer": "(A) 這次手術關係到病患的性命，可謂生死「攸」關／ㄧㄡ",
    "diagramUrl": "",
    "solution": "1. (A) 正確（正解）：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-11",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. (A) 正確（正解）："
  },
  {
    "id": "q_chinese_character_spelling_kan_zhen_fu_017",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "記憶混淆",
    "concept": "國文會考核心字形辨析：同音字與部首精選（『勘』測、『斟』酌、『俘』虜、『幽』暗、『綿』薄之力）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 「勘」測是「力部」（查考校核用力測量），不是土部「堪」。\n2. 「斟」酌是「斗部」（衡量容量），斟酌損益、滿斟皆同字。\n3. 「俘」虜是「亻人部」（抓獲的戰俘），不是水部「浮」。\n4. 「幽」暗是「幺部」（幽閉昏暗深邃），與生死「攸」關（攸）不同！\n5. 「綿」薄之力多作「糹（綿）」，亦可通「木（棉）」，指微薄之力。",
    "stem": "下列各組文句「　」中的注音，寫成國字後何者字形【兩兩相同】？\n\n○ (A) 工程團隊實地「ㄎㄢ」測地形／連番受挫，情況「ㄎㄢ」慮\n○ (B) 凡事多加「ㄓㄣ」酌再作決定／為遠道而來的貴賓滿「ㄓㄣ」美酒\n○ (C) 兩軍交戰大獲全勝並生「ㄈㄨˊ」敵將／池塘水面上「ㄈㄨˊ」萍飄動\n○ (D) 此案事關重大、生死「ㄧㄡ」關／山間曲徑「ㄧㄡ」深、環境靜謐。",
    "answer": "(B) 凡事多加「ㄓㄣ」酌再作決定／為遠道而來的貴賓滿「ㄓㄣ」美酒",
    "diagramUrl": "",
    "solution": "1. (B) 字形完全相同（正解）：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-11",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. (B) 字形完全相同（正解）："
  },
  {
    "id": "q_chinese_idiom_comprehensive_13_018",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文一段段考常考字音字形：13大考點全景檢測（攸、幽、鶩、騖、矢、矇、惋、綿、闕、勘、斟、俘、盼）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "13大核心字音字形考點對照表：\n17. 企「盼」：目部\n32. 付之「闕」如：ㄑㄩㄝ\n33. 「勘」測：力部\n34. 「斟」酌：斗部\n37. 生死「攸」關：ㄧㄡ\n38. 「幽」暗：幺部\n40. 趨之若「鶩」：鳥部\n41. 好高「騖」遠：馬部\n43. 「矢」口否認：ㄕˇ\n45. 「矇」混過關：ㄇㄥ\n47. 嘆「惋」：心部\n48. 「綿（棉）」薄之力：ㄇㄧㄢˊ\n50. 「俘」虜：人部",
    "stem": "段考複習時，小麥整理了本次國文段考卷中的13大核心字音字形考點，下列哪一位同學的筆記【完全正確】？\n\n○ (A) 麥麥：「好高ㄠˋ遠」與「趨之若ㄠˋ」都是追求目標的意思，所以底下的部首都是「馬」部\n○ (B) 晨晨：企「ㄆㄢˋ」寫作「盼」（目部）；感嘆嘆「ㄨㄢˇ」寫作「惋」（心部），部首掌握得完全正確\n○ (C) 涵涵：「付之闕如」的「闕」讀作「ㄑㄩㄝˋ」，意思是指古代宮門外的觀樓\n○ (D) 欣欣：「矢口否認」的「矢」讀作「ㄕˋ」，意思是發誓說謊話。",
    "answer": "(B) 晨晨：企「ㄆㄢˋ」寫作「盼」（目部）；感嘆嘆「ㄨㄢˇ」寫作「惋」（心部），部首掌握得完全正確",
    "diagramUrl": "",
    "solution": "1. (B) 正確（正解）：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-11",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "explanation": "1. (B) 正確（正解）："
  },
  {
    "id": "q_math_parallel_reciprocal_sum_proof_021",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與相似形：梯形內平行線倒數和定理（Crossed Ladders Theorem）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-07",
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "梯形對角線交點之平行線倒數和證明：利用兩個三角形相似比截線，將兩式相加分母同為 BD，分子相加剛好等於 BD (=1)，最後同除以 EF 即得證！",
    "stem": "如右圖，$\\overline{AB} // \\overline{EF} // \\overline{CD}$，$\\overline{AD}$、$\\overline{BC}$ 相交於 $E$ 點，$F$ 點在 $\\overline{BD}$ 上，試說明：\n$$\\frac{1}{\\overline{AB}} + \\frac{1}{\\overline{CD}} = \\frac{1}{\\overline{EF}}$$",
    "answer": "依平行線截比例線段與相似三角形性質完成四步驟推導說明（詳見下方說明）",
    "diagramUrl": "assets/questions/q_math_parallel_reciprocal_sum_proof_021.png",
    "solution": "【四步驟完整推導說明】",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-11",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025113427,
        "isMastered": true
      }
    ],
    "explanation": "【四步驟完整推導說明】"
  },
  {
    "id": "q_math_polynomial_expansion_coeff_abs_023",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "乘法公式：多項式完全平方式展開、負號變號技巧與一次項係數對照求絕對值",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "兩大易錯陷阱：\n1.【提負號變號法】：$(-7x - a)^2 = [-(7x + a)]^2 = (7x + a)^2 = 49x^2 + 14ax + a^2$。\n2.【係數對照與雙解討論】：對照 $49x^2 - bx + 9$ 得 $a^2 = 9 \\implies a = \\pm 3$；一次項 $+14a = -b \\implies b = -14a$。\n  - 若 $a = 3 \\implies b = -42 \\implies a + b = -39 \\implies |a + b| = 39$\n  - 若 $a = -3 \\implies b = 42 \\implies a + b = 39 \\implies |a + b| = 39$\n無論哪一種情況，$|a + b|$ 恆為 39！",
    "stem": "若 $(-7x - a)^2 = 49x^2 - bx + 9$，則 $|a + b|$ 之值為何？\n\n○ (A) 18\n○ (B) 24\n○ (C) 39\n○ (D) 45",
    "answer": "(C) 39",
    "diagramUrl": "",
    "solution": "1. 步驟一：展開左式（善用提負號平方技巧）： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-14",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025276264,
        "isMastered": true
      }
    ],
    "explanation": "1. 步驟一：展開左式（善用提負號平方技巧）： 故選 (C)。"
  },
  {
    "id": "q_math_mixed_fraction_diff_squares_024",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "乘法公式：帶分數平方差公式速算、正純小數/真分數借位分離",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "兩大關鍵核心：\n1.【平均中心點基準數】：$24\\frac{9}{10} = 25 - \\frac{1}{10}$、$25\\frac{1}{10} = 25 + \\frac{1}{10}$，平方差得 $25^2 - (\\frac{1}{10})^2 = 625 - \\frac{1}{100}$。\n2.【⚠️ 最易扣分陷阱（向整數借 1）】：題目規定 $0 < b < 1$（$b$ 必須為正純小數/正真分數），不能寫 $a=625, b=-\\frac{1}{100}$！必須向 625 借 1：$625 - \\frac{1}{100} = 624 + (1 - \\frac{1}{100}) = 624 + \\frac{99}{100}$，故 $a = 624$！",
    "stem": "$24\\frac{9}{10} \\times 25\\frac{1}{10} = a + b$，若 $a$ 為正整數且 $0 < b < 1$，則 $a =$ ？",
    "answer": "624",
    "diagramUrl": "",
    "solution": "1. 尋找基準整數，套用平方差公式：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-14",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790588581447,
        "isMastered": true
      }
    ],
    "explanation": "1. 尋找基準整數，套用平方差公式："
  },
  {
    "id": "q_math_bittest_diff_squares_compare_025",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "解題技巧不足",
    "concept": "乘法公式：歷屆基測經典題——平方差公式展開與公因數基準比較法",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "秒殺思維：千萬不要硬乘出六位數！\n1. 套用平方差 $(A+B)(A-B)$。\n2. 統一基準數 804：\n  - (A) $750 \\times 804$\n  - (B) $900 \\times 804$\n  - (C) $1600 \\times 402 = 800 \\times 804$\n  - (D) $1610 \\times 402 = 805 \\times 804$\n大家都有 $\\times 804$，比較係數 $900 > 805 > 800 > 750$，一眼秒殺 (B)！",
    "stem": "下列四個式子，哪一個值最大？〔96.基測 II〕\n\n○ (A) $777^2 - 27^2$\n○ (B) $852^2 - 48^2$\n○ (C) $1001^2 - 599^2$\n○ (D) $1006^2 - 604^2$",
    "answer": "(B) $852^2 - 48^2$",
    "diagramUrl": "",
    "solution": "^2 = (A + B)(A - B)$ 展開各選項： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-14",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025551475,
        "isMastered": true
      }
    ],
    "explanation": "^2 = (A + B)(A - B)$ 展開各選項： 故選 (B)。"
  },
  {
    "id": "q_math_diff_squares_plus_minus_trap_026",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "乘法公式：平方差求未知數、負數平方正負雙解陷阱",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 超級大陷阱：\n題目只給 $2000^2 - a^2 = b$，完全沒有限制 $a > 0$！\n$a^2 = 36 \\implies a = \\pm 6$（正負 6 都要寫！）。\n求 $b$ 時用 $2000^2 - 36 = 4000000 - 36 = 3999964$ 秒殺，千萬不要硬筆算直式乘法！",
    "stem": "若 $1994 \\times 2006 = 2000^2 - a^2 = b$，則 $a =$ ？；$b =$ ？",
    "answer": "$a = \\pm 6$；$b = 3999964$",
    "diagramUrl": "",
    "solution": "1. 步驟一：以 2000 為中心套用平方差公式：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-14",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025677523,
        "isMastered": true
      }
    ],
    "explanation": "1. 步驟一：以 2000 為中心套用平方差公式："
  },
  {
    "id": "q_math_overlapping_squares_area_027",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "解題技巧不足",
    "concept": "乘法公式：重疊正方形面積求法、平方差公式消去分數技巧",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "極致美感平方差題：\n1. 面積公式：大正方形 + 小正方形 - 重疊部分 = $30^2 + (22\\frac{1}{2})^2 - (7\\frac{1}{2})^2$。\n2. 後兩項平方差分數全消：$(22\\frac{1}{2} + 7\\frac{1}{2})(22\\frac{1}{2} - 7\\frac{1}{2}) = 30 \\times 15$。\n3. 提公因數 30：$30(30 + 15) = 30 \\times 45 = 1350$（平方公分）！整題不需任何分數計算！",
    "stem": "如右圖，將兩張大小不同的正方形紙張重疊，如果重疊部分是一個邊長為 $7\\frac{1}{2}$ 公分的正方形，已知原來兩正方形的邊長分別是 $30$ 公分、$22\\frac{1}{2}$ 公分，則重疊後的圖形其面積為多少平方公分？\n\n○ (A) 1250\n○ (B) 1350\n○ (C) 1400\n○ (D) 1450",
    "answer": "(B) 1350",
    "diagramUrl": "assets/questions/q_math_overlapping_squares_area_022.png",
    "solution": "^2 = (A + B)(A - B)$： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-14",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025748704,
        "isMastered": true
      }
    ],
    "explanation": "^2 = (A + B)(A - B)$： 故選 (B)。"
  },
  {
    "id": "q_math_triangle_midpoint_trisect_df_028",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與相似形：三角形兩邊中點連線定理之雙重嵌套應用",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【關鍵破題思路 — 尋找隱藏的「中點連線」】：\n看到「三等分點」與「中點」，馬上聯想「中點連線平行且長度為底邊一半」！\n本題有兩個嵌套的三角形：\n1. 先看 $\\triangle AEC$：$D$ 為 $\\overline{AE}$ 中點、$F$ 為 $\\overline{AC}$ 中點 $\\implies \\overline{DF} \\parallel \\overline{CE}$ 且 $\\overline{DF} = \\frac{1}{2}\\overline{EC}$。\n2. 再看 $\\triangle BDF$：$E$ 為 $\\overline{BD}$ 中點，且 $\\overline{EP} \\parallel \\overline{DF} \\implies P$ 為 $\\overline{BF}$ 中點，$\\overline{EP} = \\frac{1}{2}\\overline{DF}$。\n3. 設未知數貫穿兩式：設 $\\overline{DF} = x \\implies \\overline{EP} = \\frac{1}{2}x$。\n   則整段 $\\overline{EC} = \\overline{EP} + \\overline{PC} = \\frac{1}{2}x + 3$。\n   由第一式 $x = \\frac{1}{2}(\\frac{1}{2}x + 3)$，輕鬆解出 $x = 2$！",
    "stem": "如圖，在 $\\triangle ABC$ 中，$D$、$E$ 將 $\\overline{AB}$ 三等分（即 $\\overline{AD} = \\overline{DE} = \\overline{EB}$），$F$ 為 $\\overline{AC}$ 中點。連接 $\\overline{DF}$ 與 $\\overline{EC}$，$\\overline{BF}$ 與 $\\overline{EC}$ 相交於 $P$ 點。若 $\\overline{CP} = 3$，則 $\\overline{DF} = $ ？",
    "answer": "2",
    "diagramUrl": "assets/questions/q_math_triangle_midpoint_trisect_df_028.png",
    "solution": "1. 步驟一：觀察 $\\triangle AEC$，找出第一組中點連線：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-14",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790588742507,
        "isMastered": true
      }
    ],
    "explanation": "1. 步驟一：觀察 $\\triangle AEC$，找出第一組中點連線："
  },
  {
    "id": "q_soc_persian_zoroastrianism_map_029",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "西亞古文明：波斯帝國之發源地（伊朗高原）與祆教（拜火教）善惡二元論信仰特色",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【地理位置與宗教速記關鍵】：\n1. 關鍵特徵識別：「崇拜光明、以火為尊、善惡對立」= 祆教（拜火教 / 瑣羅亞斯德教）。\n2. 附圖文明發源地對照：\n   - 甲（巴爾幹半島/希臘）：古希臘文明（多神信仰、宙斯、民主哲學）。\n   - 乙（尼羅河流域/埃及）：古埃及文明（太陽神拉、金字塔、木乃伊與來世觀）。\n   - 丙（兩河流域/美索不達米亞）：蘇美、巴比倫、亞述等（多神信仰、吉爾伽美什史詩）。\n   - 丁（伊朗高原/波斯）：波斯帝國發源核心，創立並盛行祆教！\n3. 趣味連結：金庸小說《倚天屠龍記》中張無忌統領的「明教（摩尼教）」，正是起源於波斯、承襲拜火與光明善惡對立觀念的宗教！",
    "stem": "無忌信仰的宗教其特色是崇拜光明、以火為尊，並講究善惡的對立。請問：無忌所信仰的宗教應該源自於附圖中何處？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(D) 丁",
    "diagramUrl": "assets/questions/q_soc_persian_zoroastrianism_map_029.png",
    "solution": "- 祆教盛行並發源於伊朗高原（丁），故正確答案選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-14",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790314939142,
        "isMastered": true
      }
    ],
    "explanation": "- 祆教盛行並發源於伊朗高原（丁），故正確答案選 (D)。"
  },
  {
    "id": "q_bio_cancer_cell_division_mitosis_030",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "細胞分裂（有絲分裂）之染色體行為與姐妹染色分體分離",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【體細胞增生 vs. 產生配子關鍵對比】：\n1. 癌細胞是大腸的「體細胞」異常增生，進行的是「細胞分裂（有絲分裂）」，絕非產生生殖細胞的「減數分裂」！\n2. 細胞分裂過程：染色體複製 1 次，分裂 1 次。後期是著絲點分開，「姐妹染色分體」分別移向兩端。\n3. 母細胞有 2 對（4 條，2長2短）染色體，故分裂時兩端各自分配到完整的 4 條（2長2短）單分體，子細胞染色體數目與母細胞完全相同（2n → 2n）！\n4. 選項陷阱：(A) 圖是減數分裂第一次分裂後期（同源染色體分離，每端僅 1長1短）；(B) 圖才是細胞分裂（姐妹染色分體分離，每端均有 2長2短）！",
    "stem": "癌細胞的特性是細胞的生長不受調節，進而不斷進行「細胞分裂」而增生。若大腸內之癌細胞的 2 對染色體如圖所示，則當此癌細胞增生時，會出現下列哪一種分裂形式？\n\n○ (A) 分裂時同源染色體分離，每側分配 1 長 1 短之二分體\n○ (B) 分裂時姐妹染色分體分離，每側分配 2 長 2 短共 4 條染色體",
    "answer": "(B)",
    "diagramUrl": "assets/questions/q_bio_cancer_cell_division_001.png",
    "solution": "兩端各有 2 長 2 短（共 4 條分開的染色體），正是細胞分裂（有絲分裂）後期姐妹染色分體分離的特徵，故為正解。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-15",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "兩端各有 2 長 2 短（共 4 條分開的染色體），正是細胞分裂（有絲分裂）後期姐妹染色分體分離的特徵，故為正解。 故選 (B)。"
  },
  {
    "id": "q_bio_sexual_reproduction_characteristics_031",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "有性生殖與無性生殖之特徵比較、受精方式與染色體套數變化",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【有性生殖 vs. 無性生殖核心判斷】：\n1. 配子產生方式：必須先經過「減數分裂」（2n → 1n）形成配子（精卵），非細胞分裂！\n2. 受精地點：分為「體內受精」（如鳥類、哺乳類）與「體外受精」（如魚類、兩生類），並非都在雌性體內！\n3. 遺傳變異（關鍵正解）：因精卵隨機結合，基因重新組合，故「子代遺傳特性與親代不同」，有利適應多變環境！\n4. 染色體套數：親代為雙套（2n），配子單套（1n），受精後子代又恢復雙套（2n），故親代與子代的染色體套數是「相同」的！",
    "stem": "關於有性生殖的敘述，下列何者正確？\n\n○ (A) 需先經細胞分裂產生配子\n○ (B) 雌雄配子的結合，都在雌性體內進行\n○ (C) 子代的遺傳特性與親代不同\n○ (D) 親代的染色體套數與子代不同",
    "answer": "(C) 子代的遺傳特性與親代不同",
    "diagramUrl": "",
    "solution": "正確：有性生殖結合了雙親的遺傳物質，且減數分裂與受精過程具有基因重組，使得子代的遺傳特性與親代不同（具有個別差異，利於演化與適應環境變異）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-15",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880323680,
        "isMastered": true
      }
    ],
    "explanation": "正確：有性生殖結合了雙親的遺傳物質，且減數分裂與受精過程具有基因重組，使得子代的遺傳特性與親代不同（具有個別差異，利於演化與適應環境變異）。 故選 (C)。"
  },
  {
    "id": "q_bio_meiosis_chimpanzee_chromosomes_032",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "審題不清",
    "concept": "減數分裂之複製次數、分裂次數與配子染色體數目（單套不成對）",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【減數分裂兩大最易失分盲點】：\n1.【複製次數陷阱】：減數分裂雖然「連續分裂 2 次」，但「染色體只複製 1 次」！絕不是分裂兩次就複製兩次！\n2.【「條」vs.「對」陷阱（必考！）】：配子（精子、卵子）為「單套（$1n$）」，裡面的染色體皆已分離獨立，沒有同源染色體成雙成對！黑猩猩體細胞 $2n = 48$ 條（24 對），減數分裂後精子含 $1n = 24$「條」，絕不能說成「12 對」！",
    "stem": "已知黑猩猩的體細胞有 48 條染色體，當雄性黑猩猩體內行減數分裂產生精子時，有關染色體的敘述，下列何者正確？\n\n○ (A) 染色體複製 1 次，精子內含 24 條染色體\n○ (B) 染色體複製 2 次，精子內含 48 條染色體\n○ (C) 染色體複製 1 次，精子內含 12 對染色體\n○ (D) 染色體複製 2 次，精子內含 24 對染色體",
    "answer": "(A) 染色體複製 1 次，精子內含 24 條染色體",
    "diagramUrl": "",
    "solution": "正確：染色體複製 1 次，形成的精子含有體細胞一半的染色體（$48 \\div 2 = 24$ 條）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-15",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880376381,
        "isMastered": true
      }
    ],
    "explanation": "正確：染色體複製 1 次，形成的精子含有體細胞一半的染色體（$48 \\div 2 = 24$ 條）。 故選 (A)。"
  },
  {
    "id": "q_math_triangle_midpoint_perimeter_area_033",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形中點連線段性質：相似比、周長比與面積比（4倍）",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【中點三角形兩大核心比例關係】：\n1.【周長比等於邊長比（2倍）】：中點連線段長度為第三邊的一半，故 $\\triangle ABC$ 各邊長皆為 $\\triangle DEF$ 的 2 倍，周長 $= 24 \\times 2 = 48$！\n2.【⚠️ 最易扣分盲點：面積比是邊長比的平方（4倍）】：相似形面積比為對應邊長比的平方（$2^2 = 4$ 倍）！三邊中點相連將大三角形分成 4 個面積相等的小三角形，故 $\\triangle ABC$ 面積 $= 24 \\times 4 = 96$，絕不能誤乘 2！",
    "stem": "若 $D$、$E$、$F$ 為 $\\triangle ABC$ 三邊中點，且 $\\triangle DEF$ 的三邊長分別為 $6$、$8$、$10$，則 $\\triangle ABC$ 的周長為何？$\\triangle ABC$ 的面積為何？",
    "answer": "周長為 48，面積為 96",
    "diagramUrl": "",
    "solution": "1. 步驟一：由中點連線段性質求邊長比與周長：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-15",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025755120,
        "isMastered": true
      }
    ],
    "explanation": "1. 步驟一：由中點連線段性質求邊長比與周長："
  },
  {
    "id": "q_math_triangle_midpoint_ratio_ae_ef_034",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "解題技巧不足",
    "concept": "三角形中點與平行線輔助線：中點連線段逆用與比例線段（求線段比 AE : EF）",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【解題關鍵：作平行線輔助線轉化中點比例】：\n1.【構造輔助線破題】：遇到交錯的兩條線段與中點，過已知中點 $D$ 作與截線平行的輔助線 $\\overline{DG} \\parallel \\overline{AF}$，交 $\\overline{BC}$ 於 $G$！\n2.【兩次利用中點連線性質轉化】：\n   - 在 $\\triangle AFC$ 中：$D$ 為 $\\overline{AC}$ 中點，$\\overline{DG} \\parallel \\overline{AF} \\implies \\overline{DG} = \\frac{1}{2} \\overline{AF}$。\n   - 在 $\\triangle BDG$ 中：$E$ 為 $\\overline{BD}$ 中點，$\\overline{EF} \\parallel \\overline{DG} \\implies \\overline{EF} = \\frac{1}{2} \\overline{DG} = \\frac{1}{4} \\overline{AF}$。\n3.【最後求比例】：$\\overline{AE} = \\overline{AF} - \\overline{EF} = \\frac{3}{4} \\overline{AF}$，故 $\\overline{AE} : \\overline{EF} = \\frac{3}{4} : \\frac{1}{4} = 3 : 1$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$E$ 分別為 $\\overline{AC}$、$\\overline{BD}$ 的中點，連接 $\\overline{AE}$，並延長 $\\overline{AE}$ 交 $\\overline{BC}$ 於 $F$ 點，則 $\\overline{AE} : \\overline{EF} = ?$ \n\n（點擊附圖可放大檢視幾何圖形與輔助線構造）",
    "answer": "3 : 1",
    "diagramUrl": "assets/questions/q_math_triangle_midpoint_ratio_ae_ef_034.png",
    "solution": "1. 步驟一：作輔助線（構造中點平行線）：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-15",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790589218576,
        "isMastered": true
      }
    ],
    "explanation": "1. 步驟一：作輔助線（構造中點平行線）："
  },
  {
    "id": "q_bio_fern_vegetative_reproduction_035",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "蕨類植物的地下莖營養器官繁殖與無性生殖特性",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【蕨類繁殖與無性生殖三大核心考點與盲點對照】：\n1.【乙構造是「地下莖」（營養器官）】：蕨類在地面上常見的是羽狀複葉，埋在土壤中的橫走部分為「地下莖」（營養器官），下方長出不定根。利用乙截段長出丙植株，屬於「營養器官繁殖（無性生殖）」。\n2.【無性生殖 vs 有性生殖機制對照】：\n   - 分裂方式：僅經過「細胞分裂（有絲分裂）」，絕不經過「減數分裂」與受精作用！\n   - 遺傳特性：不考慮突變下，丙植株的基因型與親代甲植株完全相同，無法增加「遺傳多樣性」（基因多樣性）！\n3.【⚠️ 陷阱選項 (C) 偷換概念】：蕨類植物是「孢子繁殖」的維管束植物，屬於「無花植物」（不開花、不結種子），根本沒有花朵！看到「花朵顏色基因型」直接排除！",
    "stem": "附圖是小林繁殖校園蕨類植物的過程示意圖，根據此圖，在不考慮突變的情況下，從圖中乙構造置入培養土中到丙植株成長的過程，下列敘述何者正確？\n\n（點擊附圖可放大檢視蕨類地下莖繁殖示意圖）\n\n○ (A) 此繁殖過程須經過減數分裂\n○ (B) 丙植株是由營養器官所形成\n○ (C) 丙植株的花朵顏色基因型與甲植株相同\n○ (D) 有利於增加此種蕨類植物的遺傳多樣性",
    "answer": "(B) 丙植株是由營養器官所形成",
    "diagramUrl": "assets/questions/q_bio_fern_vegetative_reproduction_035.png",
    "solution": "正確：乙構造為地下莖，屬於植物的營養器官，因此丙植株是由營養器官所繁殖形成。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-16",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880433968,
        "isMastered": true
      }
    ],
    "explanation": "正確：乙構造為地下莖，屬於植物的營養器官，因此丙植株是由營養器官所繁殖形成。 故選 (B)。"
  },
  {
    "id": "q_bio_platypus_oviparous_mammal_036",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "卵生哺乳類（鴨嘴獸、針鼴）之生殖發育、呼吸方式與卵黃養分比較",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【哺乳類三大類群生殖方式與卵大小核心考點】：\n1.【哺乳類生殖三大類群對照】：\n   -「單孔目（卵生）」：鴨嘴獸、針鼴。體內受精、體外卵生孵化，無胎盤、無乳頭（分泌乳汁供幼獸舔食）。受精卵在母體外發育，胚胎所需養分「完全由卵黃提供」，因此【卵較大、含大量卵黃】！\n   -「有袋類（胎生但無真正胎盤）」：袋鼠、無尾熊。幼獸早產，爬入育兒袋吸吮乳頭長大。\n   -「真獸類（胎盤類）」：人類、犬、鯨等。受精卵著床於子宮，藉由「胎盤與臍帶」由母體持續供應養分，因此【卵極小、幾乎不含卵黃】！\n2.【⚠️ 卵的大小本質比較】：卵生動物（如鴨嘴獸、鳥類、爬蟲類）的卵因必須自帶胚胎發育全程所需的全部養分，故卵大、卵黃極多；而胎生動物（如無尾熊、人）的胚胎由母體持續補給，故卵極小！\n3.【⚠️ 呼吸器官陷阱】：鴨嘴獸是「哺乳類」，終生皆用「肺」呼吸，絕非兩生類的變態發育（用鰓呼吸）！",
    "stem": "鴨嘴獸為澳洲產的一種特有的動物，關於此動物的敘述，下列何者正確？\n\n○ (A) 鴨嘴獸為一種有袋的哺乳類動物，胎盤發育不完全\n○ (B) 喜歡棲息在河川中，幼時用鰓呼吸，成體用肺呼吸\n○ (C) 鴨嘴獸受精卵發育時所需的養分由母親提供\n○ (D) 鴨嘴獸的卵較無尾熊大",
    "answer": "(D) 鴨嘴獸的卵較無尾熊大",
    "diagramUrl": "",
    "solution": "1. 鴨嘴獸的生物分類與生理特徵： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-16",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-14",
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880494188,
        "isMastered": false
      },
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790591302968,
        "isMastered": true
      }
    ],
    "explanation": "1. 鴨嘴獸的生物分類與生理特徵： 故選 (D)。"
  },
  {
    "id": "q_bio_animal_reproductive_behavior_seahorse_037",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "動物的求偶、生殖行為與育幼方式（海馬雄性育兒囊、蛙類鳴叫、鳥類飾羽與育幼）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【動物求偶、生殖行為與育幼關鍵易混淆盲點】：\n1.【⚠️ 海馬的「育兒囊」在雄海馬身上（極高頻考點）】：海馬是罕見由「雄性」負責懷孕育幼的動物！交配時雌海馬將卵產在「雄海馬」下腹部的育兒囊中，由雄海馬受精、孵化並產出小海馬，絕非雌海馬！\n2.【求偶行為對照】：\n   - 青蛙：由「雄蛙」鼓起鳴囊發出鳴叫聲，目的為吸引雌蛙前來假交配。\n   - 白鷺鷥（鳥類）：繁殖期雄鳥長出特殊的繁殖羽（如頭後飾羽、背部蓑羽），展現健康體態以吸引雌鳥。\n3.【育幼行為對照】：五色鳥、燕子等親鳥啄食昆蟲回巢餵食幼鳥，屬於親代撫育（育幼行為），可大幅提高幼體存活率。",
    "stem": "雷老師請四位同學觀察動物生殖行為後，發表所觀察到的有趣經驗，哪一位同學的敘述與真實的動物行為有異？\n\n○ (A) 奈特：夜間在草叢中看到小雨蛙鼓起鳴囊鳴叫，以吸引雌蛙\n○ (B) 筱菲：在春夏繁殖季到來時，用望遠鏡看到雄白鷺鷥頭部的後方有2～3根長飾羽，以吸引雌性\n○ (C) 宗史：看到五色鳥將小蟲啄回樹洞巢中餵食幼鳥\n○ (D) 美佳：雌海馬的下腹前方有個育兒囊，這是放卵、孵化及產子的地方",
    "answer": "(D) 美佳：雌海馬的下腹前方有個育兒囊，這是放卵、孵化及產子的地方",
    "diagramUrl": "",
    "solution": "敘述錯誤（與真實行為有異，為本題正解）： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-16",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-14",
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880558946,
        "isMastered": false
      },
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790591345953,
        "isMastered": true
      }
    ],
    "explanation": "敘述錯誤（與真實行為有異，為本題正解）： 故選 (D)。"
  },
  {
    "id": "q_bio_flower_structure_haploid_gametes_038",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "開花植物（被子植物）的花朵構造與減數分裂產生單套 (n) 生殖細胞部位（花藥與胚珠）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【花朵構造與染色體套數（單套 n vs 雙套 2n）超高頻考點】：\n1.【單套 (n) 生殖細胞的產生部位（僅兩處！）】：\n   -「甲（雄蕊花藥）」：內含花粉囊，經【減數分裂】產生單套 ($n$) 的花粉粒（內含精細胞）。\n   -「丙（雌蕊胚珠）」：位於子房內部，經【減數分裂】產生單套 ($n$) 的卵細胞（雌配子）。\n2.【其餘皆為母體雙套 (2n) 體細胞組織】：\n   - 乙（柱頭/花柱）：接收花粉並引導花粉管生長，為 $2n$。\n   - 丁（花瓣）：吸引昆蟲傳粉，為 $2n$。\n   - 戊（子房壁）：將來發育成果皮/果肉，為母體 $2n$ 組織！\n   - 己（花萼）：保護花蕾，為 $2n$。\n3.【⚠️ 常見易錯陷阱】：很多同學誤選「戊（子房）」，注意子房是母體組織（雙套 $2n$），只有子房裡面的「丙（胚珠）」才能產生單套卵細胞！",
    "stem": "阿民觀察花的構造，然後畫出一張如附圖示意圖，請問圖中哪兩個部位可產生單套染色體的細胞？\n\n（點擊附圖可放大檢視花朵剖面構造與各代號部位）\n\n○ (A) 乙己\n○ (B) 甲丁\n○ (C) 乙戊\n○ (D) 甲丙",
    "answer": "(D) 甲丙",
    "diagramUrl": "assets/questions/q_bio_flower_structure_haploid_gametes_038.png",
    "solution": "1. 圖中各代號構造精確判讀： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-16",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880626924,
        "isMastered": true
      }
    ],
    "explanation": "1. 圖中各代號構造精確判讀： 故選 (D)。"
  },
  {
    "id": "q_math_triangle_ratio_abe_abc_039",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "等高三角形之底邊比等於面積比：連續比例轉化（求 △ABE 與 △ABC 面積比）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【等高三角形「連乘比例」拆解心法】：\n1.【第一層大三角形切割】：由同高性質，底邊比即面積比。$\\overline{BD} : \\overline{CD} = 3 : 4 \\implies \\overline{BD} : \\overline{BC} = 3 : 7$，故 $\\triangle ABD$ 佔全部的 $\\frac{3}{7}$！\n2.【第二層小三角形切割】：在 $\\triangle ABD$ 內，頂點為 $B$，底邊為 $\\overline{AD}$。$\\overline{AE} : \\overline{DE} = 2 : 3 \\implies \\overline{AE} : \\overline{AD} = 2 : 5$，故 $\\triangle ABE$ 佔 $\\triangle ABD$ 的 $\\frac{2}{5}$！\n3.【兩層連乘得出答案】：$\\triangle ABE = \\frac{2}{5} \\times \\frac{3}{7} \\triangle ABC = \\frac{6}{35} \\triangle ABC$，比值即為 $6 : 35$！注意不要將分母誤加或比值顛倒！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$F$ 分別在 $\\overline{BC}$、$\\overline{AC}$ 上，$\\overline{AD}$、$\\overline{BF}$ 交於 $E$ 點，若 $\\overline{BD} : \\overline{CD} = 3 : 4$，$\\overline{AE} : \\overline{DE} = 2 : 3$，則 $\\triangle ABE$ 與 $\\triangle ABC$ 的面積比為何？\n\n（點擊附圖可放大檢視幾何圖形）\n\n○ (A) 5 : 12\n○ (B) 3 : 10\n○ (C) 6 : 35\n○ (D) 7 : 20",
    "answer": "(C) 6 : 35",
    "diagramUrl": "assets/questions/q_math_triangle_ratio_abe_abc_039.png",
    "solution": "$ 中，線段 $\\overline{AD}$ 將 $\\triangle ABC$ 分割為 $\\triangle ABD$ 與 $\\triangle ACD$。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-16",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025792819,
        "isMastered": true
      }
    ],
    "explanation": "$ 中，線段 $\\overline{AD}$ 將 $\\triangle ABC$ 分割為 $\\triangle ABD$ 與 $\\triangle ACD$。 故選 (C)。"
  },
  {
    "id": "q_math_parallel_segments_triangle_area_040",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與同高/同底三角形面積轉換（求 △BDE 面積）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【平行線截線段比例與面積方程解題關鍵】：\n1.【平行線兩大面積性質】：\n   - 性質一（平行線截比例）：$\\overline{DE} \\parallel \\overline{BC} \\implies \\frac{\\overline{AD}}{\\overline{DB}} = \\frac{\\overline{AE}}{\\overline{EC}}$。\n   - 性質二（同底等高面積相等）：$\\triangle BDE$ 與 $\\triangle CDE$ 底同為 $\\overline{DE}$ 且平行線間高相等，故面積相等！\n2.【設未知數列方程】：\n   設 $\\triangle BDE$ 面積 $= x$。\n   - 在 $\\triangle ABE$ 中（頂點 $E$）：$\\frac{\\overline{AD}}{\\overline{DB}} = \\frac{\\triangle ADE}{\\triangle BDE} = \\frac{9}{x}$。\n   - 在 $\\triangle ABC$ 中看底邊 $\\overline{AC}$（頂點 $B$）：$\\frac{\\triangle ABE}{\\triangle BCE} = \\frac{\\overline{AE}}{\\overline{EC}}$。\n   - 因為 $\\frac{\\overline{AE}}{\\overline{EC}} = \\frac{\\overline{AD}}{\\overline{DB}} = \\frac{9}{x}$，且 $\\triangle ABE = 9 + x$、$\\triangle BCE = 40$：\n     $$\\frac{9 + x}{40} = \\frac{9}{x} \\implies x^2 + 9x - 360 = 0 \\implies (x - 15)(x + 24) = 0$$\n   - 面積為正，故 $x = 15$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\overline{DE} \\parallel \\overline{BC}$，若 $\\triangle ADE$ 的面積為 $9$，$\\triangle BCE$ 的面積為 $40$，則 $\\triangle BDE$ 的面積為何？\n\n（點擊附圖可放大檢視幾何圖形）\n\n○ (A) 15\n○ (B) 20\n○ (C) 27\n○ (D) 35",
    "answer": "(A) 15",
    "diagramUrl": "assets/questions/q_math_parallel_segments_triangle_area_040.png",
    "solution": "DE$ 與 $\\triangle BDE$，兩者皆以點 $E$ 為頂點，底邊 $\\overline{AD}$ 與 $\\overline{BD}$ 在同一條直線上（高相等）： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790589601773,
        "isMastered": false
      }
    ],
    "explanation": "DE$ 與 $\\triangle BDE$，兩者皆以點 $E$ 為頂點，底邊 $\\overline{AD}$ 與 $\\overline{BD}$ 在同一條直線上（高相等）： 故選 (A)。"
  },
  {
    "id": "q_math_parallel_angle_bisector_perimeter_041",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截角平分線之等腰三角形性質與相似三角形邊長比例（求 △ADE 周長）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「平行線 + 角平分線 $\\to$ 必出等腰三角形」幾何秒殺模型】：\n1.【破題關鍵】：\n   - $\\overline{BD}$ 是角平分線：$\\angle 1 = \\angle 2$\n   - $\\overline{DE} \\parallel \\overline{BC}$（內錯角相等）：$\\angle 2 = \\angle 3$\n   - $\\implies \\angle 1 = \\angle 3 \\implies \\triangle EBD$ 為等腰三角形，$\\overline{EB} = \\overline{ED}$！\n2.【列比例求長度】：\n   設 $\\overline{EB} = \\overline{ED} = x$，則 $\\overline{AE} = 12 - x$。\n   由相似形 $\\frac{\\overline{AE}}{\\overline{AB}} = \\frac{\\overline{DE}}{\\overline{BC}} \\implies \\frac{12 - x}{12} = \\frac{x}{4} \\implies x = 3$！\n3.【求周長速算絕招】：\n   - 方法一（各邊相加）：$\\overline{AE} = 9$、$\\overline{AD} = 9$、$\\overline{DE} = 3$，周長 $= 9 + 9 + 3 = 21$！\n   - 方法二（相似比 $\\times$ 原周長）：相似比 $= \\frac{9}{12} = \\frac{3}{4}$，原周長 $= 12 + 12 + 4 = 28$，$\\triangle ADE$ 周長 $= 28 \\times \\frac{3}{4} = 21$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\overline{AB} = \\overline{AC} = 12$，$\\overline{BC} = 4$，$\\overline{BD}$ 為 $\\angle ABC$ 的角平分線，且 $\\overline{DE} \\parallel \\overline{BC}$，則 $\\triangle ADE$ 的周長為何？\n\n（點擊附圖可放大檢視幾何圖形）\n\n○ (A) 24\n○ (B) 21\n○ (C) 19\n○ (D) 18",
    "answer": "(B) 21",
    "diagramUrl": "assets/questions/q_math_parallel_angle_bisector_perimeter_041.png",
    "solution": "D}$ 平分 $\\angle ABC$，故 $\\angle EBD = \\angle DBC$。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-16",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789896316969,
        "isMastered": true
      }
    ],
    "explanation": "D}$ 平分 $\\angle ABC$，故 $\\angle EBD = \\angle DBC$。 故選 (B)。"
  },
  {
    "id": "q_bio_animal_reproduction_fertilization_042",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "動物生殖方式：受精環境（體內/體外受精）與卵生/胎生之辨析及特例",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【動物生殖觀念核心盲點陷阱——絕對詞「均/皆」破解指南】：\n1. 看到「水中動物均為體外受精」❌：水生哺乳類（鯨魚、海豚）以及鯊魚、部分魟魚都是【體內受精】！\n2. 看到「卵生動物均為體外受精」❌：爬蟲類（蛇、龜）、鳥類（雞、麻雀）、昆蟲以及鴨嘴獸都是【體內受精＋卵生】！\n3. 看到「可行有性生殖者均不進行無性生殖」❌：水螅平時行【出芽生殖（無性）】，逆境時會產生精卵進行【有性生殖】！\n4. 看到「有性生殖均需水為媒介」❌：只有【體外受精】需要水為媒介；體內受精動物靠母體生殖道分泌液體，不依賴外界水！\n5. 【唯一正確的全稱敘述】：適應陸地生活的動物為防止精子脫水，【均為體內受精】！",
    "stem": "小巍列出關於動物生殖方式的五個想法，下列哪些是正確的？\n(甲) 適應陸地生活的動物均為體內受精；\n(乙) 動物在進行有性生殖時，精、卵均需以水為媒介受精；\n(丙) 水中的動物均為體外受精；\n(丁) 可行有性生殖的動物均不會進行無性生殖；\n(戊) 卵生的動物可為體內受精或體外受精。\n\n○ (A) (甲)(戊)\n○ (B) (乙)(丁)\n○ (C) (甲)(丙)(戊)\n○ (D) (乙)(丙)(丁)(戊)",
    "answer": "(A) (甲)(戊)",
    "diagramUrl": "",
    "solution": "1. (甲) 敘述正確： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880680952,
        "isMastered": true
      }
    ],
    "explanation": "1. (甲) 敘述正確： 故選 (A)。"
  },
  {
    "id": "q_bio_egg_structure_043",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "鳥類卵生生殖：未受精蛋內部構造（胚盤、卵黃、繫帶、蛋白、蛋殼、氣室）與來源器官（卵巢 vs 輸卵管）辨析",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「一顆蛋到底是不是一個細胞？」生物常考大陷阱】：\n1.【真正屬於一個「卵細胞」的只有蛋黃部分（含胚盤）】：\n   - A（胚盤）：含有「細胞核」及少許細胞質，受精後胚胎發育的起點。\n   - B（卵黃／蛋黃）：屬於卵細胞的「細胞質」，儲存發育所需的主要營養。\n   - 卵黃表面薄膜：卵細胞的「細胞膜」。\n   👉 只有 A 與 B 是由【卵巢】製造產生的真正卵細胞！\n2.【輸卵管分泌包裹的保護／輔助構造】：\n   - 卵細胞受精（若有）後下移通過輸卵管時，由【輸卵管壁】依序分泌分泌物包裹上去：\n     - C（繫帶）：濃稠蛋白質扭結而成，將卵黃固定於中央，防止滾動震盪。\n     - D（蛋白）：提供水分、養分與緩衝保護。\n     - E（蛋殼）：碳酸鈣硬殼，保護防脫水，具氣孔以供氣體交換。\n     - F（氣室）：在蛋的「鈍端」，由內外兩層殼膜分離形成，供胚胎呼吸。\n3.【新鮮度判斷】：\n   - 蛋存放越久，蛋白水分經由蛋殼氣孔蒸發，氣室 F 就【越大】；因此「氣室越小＝蛋越新鮮」！",
    "stem": "如右圖為未受精蛋的內部構造，則下列敘述何者錯誤？\n\n（點擊附圖可放大檢視蛋的內部構造示意圖）\n\n○ (A) 細胞核位於 A\n○ (B) 要判斷蛋是否新鮮可由 F 處得之\n○ (C) C 部分可固定卵細胞的位置\n○ (D) 由卵巢所分泌的部位是 F、D",
    "answer": "(D) 由卵巢所分泌的部位是 F、D",
    "diagramUrl": "assets/questions/q_bio_egg_structure_043.png",
    "solution": "| 蛋白（卵白） | 輸卵管分泌 | 提供胚胎水分、養分，並具備緩衝與保護作用。 | 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880723983,
        "isMastered": false
      }
    ],
    "explanation": "| 蛋白（卵白） | 輸卵管分泌 | 提供胚胎水分、養分，並具備緩衝與保護作用。 | 故選 (D)。"
  },
  {
    "id": "q_bio_strawberry_fruit_reproduction_044",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "被子植物有性生殖：花朵構造與發育對應（子房發育為果實、胚珠發育為種子、草莓瘦果與假果特性）〔112會考〕",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「草莓到底吃的是果實還是花托？」生物常考生活陷阱】：\n1.【破題秒殺金律（定義永遠不變）】：\n   - 【子房】發育 $\\to$ 必為【果實】！\n   - 【胚珠】發育 $\\to$ 必為【種子】！\n   👉 題目開宗明義寫「$*$ 構造是由草莓的【子房】發育而成」，直接鎖定【果實】！\n2.【草莓的生物學真實結構（聚合果／假果）】：\n   - 我們平時吃下肚、紅潤酸甜多汁的部分：是由【花托】膨大發育而來的，稱為「假果」！\n   - 草莓表面上一粒粒像黑芝麻的小顆粒（$*$）：不是種子，而是由各個獨立雌蕊的【子房】發育而成的【瘦果（真正的果實）】！\n   - 剝開每一粒瘦果（小黑點）裡面包裹著的，才是由【胚珠】發育而成的【真正種子】！",
    "stem": "圖(一)為草莓花朵構造及其發育的示意圖，已知草莓是由花托處膨大而來，若圖(二)中的 $*$ 構造是由草莓的子房發育而成，則此 $*$ 構造應稱為下列何者？【112.會考】\n\n（點擊附圖可放大檢視草莓花朵構造及其發育示意圖）\n\n○ (A) 胚珠\n○ (B) 種子\n○ (C) 果實\n○ (D) 花粉",
    "answer": "(C) 果實",
    "diagramUrl": "assets/questions/q_bio_strawberry_fruit_reproduction_044.png",
    "solution": "○ 詳細解題觀念剖析： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789882443984,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念剖析： 故選 (C)。"
  },
  {
    "id": "q_bio_animal_classification_tree_045",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "脊椎動物門檢索分類：體溫調節（內溫vs外溫）、受精方式（體內vs體外）、呼吸器官與生殖方式（卵生vs胎生）〔110會考〕",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「生物分類檢索表」會考滿分破解口訣——先標「綱別與四大特徵」】：\n1.【五種臺灣特有生物特徵全剖析】：\n   - 臺灣鈍頭蛇（爬蟲綱）：外溫、體內受精、卵生、肺呼吸\n   - 臺北樹蛙（兩生綱）：外溫、體外受精、卵生、成體用肺與皮膚呼吸\n   - 臺灣馬口魚（硬骨魚綱）：外溫、體外受精、卵生、鰓呼吸\n   - 臺灣藍鵲（鳥綱）：內溫（恆溫）、體內受精、卵生、肺與氣囊呼吸\n   - 臺灣野兔（哺乳綱）：內溫（恆溫）、體內受精、胎生、肺呼吸\n2.【倒推檢索節點依據（非黑即白二分法）】：\n   - 甲節點：上組（蛇、蛙、魚）全為【外溫動物】；下組（藍鵲、野兔）全為【內溫動物】 $\\implies$ 甲是「體溫是否恆定（內溫／外溫）」！\n   - 乙節點：上支【臺灣鈍頭蛇（體內受精）】；下支【臺北樹蛙、臺灣馬口魚（體外受精）】 $\\implies$ 乙是「是否為體內受精」！（直接秒殺選 B）\n   - 丙節點：樹蛙與馬口魚全都是【卵生】，故丙不可能為「是否卵生」，而是「呼吸器官（肺vs鰓）」或「生活環境」！\n   - 丁節點：藍鵲與野兔全都是【體內受精】，故丁不可能為「是否體內受精」，而是「生殖方式（卵生vs胎生）」！",
    "stem": "小杰將五種臺灣特有種生物進行分類，如右圖所示，甲、乙、丙、丁分別代表不同的分類依據，關於甲、乙、丙、丁的敘述，下列何者最合理？【110.會考】（註：臺灣藍鵲為一種鳥類）\n\n（點擊附圖可放大檢視生物分類檢索樹狀圖）\n\n○ (A) 甲：是否為卵生動物\n○ (B) 乙：是否為體內受精\n○ (C) 丙：是否為卵生動物\n○ (D) 丁：是否為體內受精",
    "answer": "(B) 乙：是否為體內受精",
    "diagramUrl": "assets/questions/q_bio_animal_classification_tree_045.png",
    "solution": "○ 五種臺灣特有種動物所屬分類群與核心生理特徵對照表： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789883654171,
        "isMastered": true
      }
    ],
    "explanation": "○ 五種臺灣特有種動物所屬分類群與核心生理特徵對照表： 故選 (B)。"
  },
  {
    "id": "q_bio_fruitfly_gamete_combinations_046",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "細胞分裂與遺傳：減數分裂同源染色體分離與自由配合（配子染色體組合數計算 2^n）",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「配子最多具有幾種染色體組合？」秒殺公式與陷阱】：\n1.【破題公式】：配子染色體組合數 $= 2^n$（其中 $n$ 為「同源染色體的對數」或「配子中的染色體條數」）！\n   - 本題配子具有 4 條染色體（$n = 4$ 對同源染色體） $\\implies 2^4 = 16$ 種！\n2.【常犯陷阱】：\n   - ❌ 誤算成 $2 \\times 4 = 8$（混淆乘法與指數）。\n   - ❌ 誤算成 $4^2 = 16$（雖然本題數字湊巧相同，但若遇到人體 23 對染色體，公式是 $2^{23}$ 種高達 838 萬種，不可用底數錯誤的算式）！",
    "stem": "已知果蠅的配子內具有 4 條染色體，如附圖的甲細胞，而乙細胞為其一般體細胞。\n(1) 果蠅生殖母細胞進行減數分裂時，所產生的配子最多具有幾種染色體的組合？\n\n（點擊附圖可放大檢視甲、乙細胞之染色體型態示意圖）\n\n○ (A) 32\n○ (B) 16\n○ (C) 4\n○ (D) 1",
    "answer": "(B) 16",
    "diagramUrl": "assets/questions/q_bio_fruitfly_chromosome_set_046.png",
    "solution": "○ 詳細解題觀念與計算步驟： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789883722416,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與計算步驟： 故選 (B)。"
  },
  {
    "id": "q_bio_fruitfly_gamete_somatic_comparison_047",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "染色體套數與對數辨析：配子（單套/不成對/0對）與體細胞（雙套/成對）之觀念陷阱",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「套數」vs「對數」生物月考特級大陷阱】：\n1. 看到「乙的對數是甲的兩倍」立刻打 ❌！\n   - 配子（甲）只有單套，染色體【不成對】（0 對）！\n   - 只有【套數（2N 是 1N 的兩倍）】或【總條數（8 條是 4 條的兩倍）】才是兩倍！\n2. 只要配子出現「成對」或「對數」的描述，一律為重大觀念錯誤！",
    "stem": "已知果蠅的配子內具有 4 條染色體，如附圖的甲細胞，而乙細胞為其一般體細胞。\n(2) 有關甲、乙兩細胞的敘述，下列何者錯誤？\n\n（點擊附圖可放大檢視甲、乙細胞之染色體型態示意圖）\n\n○ (A) 甲細胞為 1N，乙細胞為 2N\n○ (B) 乙細胞形成的過程中，複製染色體會進行分離\n○ (C) 乙細胞染色體的對數是甲細胞的兩倍\n○ (D) 生殖母細胞減數分裂後會產生四個甲細胞",
    "answer": "(C) 乙細胞染色體的對數是甲細胞的兩倍",
    "diagramUrl": "assets/questions/q_bio_fruitfly_chromosome_set_046.png",
    "solution": "乙細胞染色體的對數是甲細胞的兩倍：錯誤（為本題所求）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789883777507,
        "isMastered": true
      }
    ],
    "explanation": "乙細胞染色體的對數是甲細胞的兩倍：錯誤（為本題所求）。 故選 (C)。"
  },
  {
    "id": "q_math_marathon_constant_speed_ratio_048",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "比與比例式應用：三人賽跑定速問題（相同時間所跑路程比等於速率比之同時間路程推求）",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「定速路跑差距」常見直覺致命錯誤】：\n1. ❌【超大陷阱】：直接相減 $4 - 2.5 = 1.5$ 公里！\n   - 錯因剖析：威利跑剩下 $2.5$ 公里到達終點需要花時間！在這段時間內妙麗「並不是停在原地」，她也在繼續往前跑！\n2. ✅【破題秒殺黃金準則】：\n   - 「定速運動中，相同時間內所跑的【距離比】＝【速率比】」！\n   - 當洛基跑完 10 公里時：\n     - 妙麗跑了 $10 - 4 = 6$ 公里\n     - 威利跑了 $10 - 2.5 = 7.5$ 公里\n     - 兩人速率比：$\\text{妙麗} : \\text{威利} = 6 : 7.5 = 4 : 5$！\n   - 當威利抵達終點跑完 10 公里時，妙麗跑了 $10 \\times \\frac{4}{5} = 8$ 公里。\n   - 故妙麗離終點還差 $10 - 8 = 2$ 公里！",
    "stem": "洛基、妙麗和威利三人參加 2024 年新北萬金石 10 公里馬拉松路跑，假設全程三人維持一定速率，當洛基抵達終點時，妙麗和威利離終點分別還差 4 公里及 2.5 公里，則當威利抵達終點時，妙麗離終點還差多少公里？\n\n○ (A) 1.5 公里\n○ (B) 2 公里\n○ (C) 2.5 公里\n○ (D) 3 公里",
    "answer": "(B) 2 公里",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與算式步驟： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789901193038,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與算式步驟： 故選 (B)。"
  },
  {
    "id": "q_math_rectangle_area_ratio_049",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例與面積分割應用：大長方形面積依比例分配秒殺求局部面積差",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「長方形切割面積比」秒殺破題法——別傻傻設邊長未知數】：\n1.【直觀秒殺大絕招（整體比例分配）】：\n   - 甲、乙、丙剛好完整拼成整個大長方形 $ABCD$！\n   - 大長方形總面積 $= \\overline{AB} \\times \\overline{AD} = 12 \\times 21 = 252$！\n   - 總份數 $= 3 + 1 + 5 = 9$ 份 $\\implies$ 每 $1$ 份面積 $= \\frac{252}{9} = 28$！\n   - 甲佔 3 份、丙佔 5 份，相差 $5 - 3 = 2$ 份！\n   - 所求面積差 $= 2 \\times 28 = 56$（心算 10 秒得出正解）！\n2.【常見徒勞彎路】：\n   - 設邊長未知數去解聯立方程，既費時又極容易計算錯誤。記住：「求面積差且已有各塊比例時，直接按總面積比例分配最快！」",
    "stem": "如右圖，$\\overline{EF}$、$\\overline{GH}$ 將長方形 $ABCD$ 分成面積比為 $3 : 1 : 5$ 的甲、乙、丙三個長方形。已知 $\\overline{AB} = 12$，$\\overline{AD} = 21$，則甲、丙兩個長方形的面積相差為何？\n\n（點擊附圖可放大檢視長方形分割圖形）\n\n○ (A) 56\n○ (B) 64\n○ (C) 48\n○ (D) 42",
    "answer": "(A) 56",
    "diagramUrl": "assets/questions/q_math_rectangle_area_ratio_049.png",
    "solution": "B} \\times \\overline{AD} = 12 \\times 21 = 252$$ 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789901523159,
        "isMastered": true
      }
    ],
    "explanation": "B} \\times \\overline{AD} = 12 \\times 21 = 252$$ 故選 (A)。"
  },
  {
    "id": "q_math_gear_turn_inverse_ratio_050",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例與反比應用：嚙合齒輪之齒數與轉動圈數成反比",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「齒輪嚙合圈數比」最常見致命盲點】：\n1. ❌【絕對不能寫正比】：誤寫為 $60 : 50 : 40 = 6 : 5 : 4$（大錯特錯）！\n2. ✅【核心物理機制】：齒輪相互接合時，轉過的【總齒數】一定完全相同！\n   $$\\text{總齒數} = \\text{齒數} \\times \\text{轉動圈數} = \\text{定值}$$ \n   故「齒數」與「圈數」成【反比】！齒數越多的齒輪轉得越慢、圈數越少！\n3.【反比化簡技巧】：\n   $60x = 50y = 40z \\implies 6x = 5y = 4z$。\n   $$x : y : z = \\frac{1}{6} : \\frac{1}{5} : \\frac{1}{4} = 10 : 12 : 15$$（同乘最小公倍數 60）！",
    "stem": "甲、乙、丙三個齒輪由左而右緊密接合，甲有 60 齒、乙有 50 齒、丙有 40 齒，若甲、乙、丙同時轉動，則三個齒輪同一時間轉動圈數比為何？\n\n○ (A) 10 : 12 : 15\n○ (B) 6 : 5 : 4\n○ (C) 15 : 12 : 10\n○ (D) 4 : 5 : 6",
    "answer": "(A) 10 : 12 : 15",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與算式步驟： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789901662925,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與算式步驟： 故選 (A)。"
  },
  {
    "id": "q_math_wire_squares_area_sum_051",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "連比例應用：鐵線剪段圍成正方形之周長比、邊長比與面積和計算",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「鐵線圍成正方形面積和」解題關鍵與易錯陷阱】：\n1.【周長與邊長轉換】：鐵線剪成的長度是「周長」，正方形周長要【除以 4】才是「邊長」！千萬別直接拿鐵線長度去平方！\n2.【一步步穩扎穩打】：\n   - 總份數 $= 3 + 4 + 5 = 12$ 份 $\\implies$ 每份長度 $= \\frac{96}{12} = 8$ 公分。\n   - 三段周長分別為：$24$、$32$、$40$ 公分。\n   - 三正方形邊長分別為：$6$、$8$、$10$ 公分（勾股數組，邊長比也是 $3:4:5$）！\n   - 面積和 $= 6^2 + 8^2 + 10^2 = 36 + 64 + 100 = 200$ 平方公分！\n3.【速算巧思】：邊長比 $= 3 : 4 : 5$，每份邊長 $= \\frac{8}{4} = 2$ 公分 $\\implies$ 面積和 $= (3^2 + 4^2 + 5^2) \\times 2^2 = 50 \\times 4 = 200$！",
    "stem": "有一鐵線全長 96 公分，若按 $3 : 4 : 5$ 的比例剪成 3 段，每段均圍成一個正方形，則此三個正方形的面積和為多少平方公分？\n\n○ (A) 200\n○ (B) 192\n○ (C) 216\n○ (D) 240",
    "answer": "(A) 200",
    "diagramUrl": "",
    "solution": "1. 步驟一：求出三段鐵線的長度（即三個正方形的周長）： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789901691757,
        "isMastered": true
      }
    ],
    "explanation": "1. 步驟一：求出三段鐵線的長度（即三個正方形的周長）： 故選 (A)。"
  },
  {
    "id": "q_math_clothing_production_ratio_workdays_052",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例與工作工時應用：利用工時比設比例常數計算每天總產能與訂單所需天數",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「連比例工程工時」破題秒殺大招】：\n1.【比例常數法（最穩健清晰）】：\n   看到「時間比為 1 : 2 : 3」，立刻設各別工時為 $r, 2r, 3r$（$r > 0$）！\n   - 每天固定產能總工時 $= 4(r) + 3(2r) + 2(3r) = 16r$。\n   - 新訂單各 8 件總工時 $= 8(r + 2r + 3r) = 48r$。\n   - 所需工作天數 $= \\frac{48r}{16r} = 3$ 個工作天！\n2.【特值速算法（令 r = 1 秒殺）】：\n   因為計算完工天數時比例常數 $r$ 必定於分子分母相約消去，可直接假設一件上衣耗時 1 小時、長褲 2 小時、外套 3 小時：\n   - 每天總工時 $= 4(1) + 3(2) + 2(3) = 16$ 小時。\n   - 訂單總工時 $= 8 \\times (1 + 2 + 3) = 48$ 小時。\n   - 天數 $= \\frac{48}{16} = 3$ 天！",
    "stem": "已知該店每天的總工作時間固定，製作 1 件上衣、1 件長褲與 1 件外套所需的時間比為 1 : 2 : 3，且每天的產能剛好可以完成 4 件上衣、3 件長褲與 2 件外套。若今天店家接到一張訂單，需要訂製上衣、長褲與外套各 8 件，在產能可自由調配的情況下，這張訂單至少需要多少個工作天才能全數完工？\n\n○ (A) 3 個工作天\n○ (B) 4 個工作天\n○ (C) 5 個工作天\n○ (D) 6 個工作天",
    "answer": "(A) 3 個工作天",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與算式步驟： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789901787674,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與算式步驟： 故選 (A)。"
  },
  {
    "id": "q_math_ice_shop_revenue_ratio_053",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例應用：固定成本相同時之各月營業額連比化簡",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「相同固定成本」求連比破題關鍵】：\n1.【核心等式】：固定成本皆相同，設為 $K$（或 $1$）：\n   $$\\frac{1}{4}a = \\frac{2}{5}b = \\frac{2}{3}c = K$$\n2.【求連比（倒數比）】：\n   $$a : b : c = \\frac{1}{\\frac{1}{4}} : \\frac{1}{\\frac{2}{5}} : \\frac{1}{\\frac{2}{3}} = 4 : \\frac{5}{2} : \\frac{3}{2}$$\n   同乘以 2 得最簡整數比：$8 : 5 : 3$！\n3.【常見陷阱】：\n   ❌ 誤把分數直接當成比值：寫成 $\\frac{1}{4} : \\frac{2}{5} : \\frac{2}{3} = 15 : 24 : 40$！\n   記住：所佔「比例越小」的月份（如 7 月只佔 $\\frac{1}{4}$），代表其「總營業額越大」！",
    "stem": "右圖為清涼冰店 7 月到 9 月的營業額長條圖，若每個月的固定成本皆相同，分別占當月總營業額的 $\\frac{1}{4}$、$\\frac{2}{5}$、$\\frac{2}{3}$。\n(1) 7 月到 9 月的營業額比為多少？\n\n（點擊附圖可放大檢視營業額長條圖）\n\n○ (A) 8 : 5 : 3\n○ (B) 4 : 5 : 3\n○ (C) 15 : 24 : 40\n○ (D) 3 : 5 : 8",
    "answer": "(A) 8 : 5 : 3",
    "diagramUrl": "assets/questions/q_math_ice_shop_bar_chart_053.png",
    "solution": "○ 詳細解題觀念與步驟： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789901873608,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與步驟： 故選 (A)。"
  },
  {
    "id": "q_math_ice_shop_fixed_cost_054",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例應用：由營業額總和與連比推求個別營業額及固定成本",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「求固定成本」計算步驟與單位陷阱】：\n1.【設比例常數 $r$ 求各月營業額】：\n   - 營業額比為 $8 : 5 : 3$，設為 $8r, 5r, 3r$。\n   - 總和 $8r + 5r + 3r = 16r = 64 \\implies r = 4$（萬元）。\n2.【求固定成本】：\n   - 7 月營業額 $= 8 \\times 4 = 32$ 萬元 $\\implies$ 固定成本 $= 32 \\times \\frac{1}{4} = 8$ 萬元！\n   - 驗算 8 月：$20 \\times \\frac{2}{5} = 8$ 萬元！\n   - 驗算 9 月：$12 \\times \\frac{2}{3} = 8$ 萬元！三個月完全一致！\n3.【注意題目問的是「固定成本」而不是「某月份營業額」】！",
    "stem": "右圖為清涼冰店 7 月到 9 月的營業額長條圖，若每個月的固定成本皆相同，分別占當月總營業額的 $\\frac{1}{4}$、$\\frac{2}{5}$、$\\frac{2}{3}$。\n(2) 承 (1)，若 7 月到 9 月的營業額總和為 64 萬元，則每個月的固定成本為多少元？\n\n（點擊附圖可放大檢視營業額長條圖）\n\n○ (A) 8 萬元（80,000 元）\n○ (B) 10 萬元（100,000 元）\n○ (C) 12 萬元（120,000 元）\n○ (D) 16 萬元（160,000 元）",
    "answer": "(A) 8 萬元（80,000 元）",
    "diagramUrl": "assets/questions/q_math_ice_shop_bar_chart_053.png",
    "solution": "○ 詳細解題觀念與步驟： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789905714257,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與步驟： 故選 (A)。"
  },
  {
    "id": "q_soc_geo_mediterranean_climate_italy_055",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "世界氣候分佈：溫帶地中海型氣候之特徵（夏乾冬雨、西風帶與副熱帶高壓交替）與威尼斯冬季水患應用",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「地中海型氣候」會考秒殺黃金口訣——「夏乾冬雨」】：\n1.【氣候成因與季節特徵】：\n   - 夏季（6～8 月）：行星風系北移，受【副熱帶高氣壓帶】籠罩下沉氣流影響 $\\to$ 炎熱、乾燥少雨（夏乾）。\n   - 冬季（11～2 月）：行星風系南移，受【盛行西風帶】由海洋吹向陸地及鋒面氣旋影響 $\\to$ 溫和多雨（冬雨）！\n2.【地理情境破題】：\n   - 義大利（威尼斯、羅馬等）位於南歐地中海沿岸，屬地中海型氣候。\n   - 題幹明確提示「威尼斯正值雨季，地勢低窪易積水」，必為【冬季】！\n   - 選項 (A) 5月（春末）、(B) 7月（盛夏乾季）、(C) 9月（初秋）、(D) 12月（冬季雨季），故秒選 (D)！",
    "stem": "猛虎旅行社在行程出發前告知團員：尊敬的旅客大家好：本次旅行團將前往義大利，進行 12 天的旅行。此時威尼斯正值雨季，由於地勢低窪容易積水，請做好準備。請問：該旅行團出發的日期最可能為下列何者？\n\n○ (A) 5月8日\n○ (B) 7月19日\n○ (C) 9月30日\n○ (D) 12月6日",
    "answer": "(D) 12月6日",
    "diagramUrl": "",
    "solution": "12月6日：北半球冬季，正值盛行西風帶籠罩之典型雨季，符合題幹所述。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790314961964,
        "isMastered": false
      },
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274639965,
        "isMastered": true
      }
    ],
    "explanation": "12月6日：北半球冬季，正值盛行西風帶籠罩之典型雨季，符合題幹所述。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_finland_lake_telecom_056",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲地理環境：北歐芬蘭「千湖國」冰蝕湖地形、地廣人稀特徵與無線通訊產業（Nokia）發展因果〔102試辦會考〕",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【北歐各國「冰河地形與產業特徵」會考經典對照】：\n1.【芬蘭 $\\to$ 千湖國（湖泊眾多、地廣人稀）】：\n   - 大陸冰河侵蝕造成境內擁有十幾萬個【冰蝕湖】。\n   - 因湖泊阻隔、聚落分散，拉實體電話線成本過高，促使芬蘭轉而發展【點狀無線通訊基地台】，造就諾基亞（Nokia）奇蹟！\n2.【挪威 $\\to$ 峽灣發達、海岸曲折】：\n   - 冰河槽谷遭海水淹沒形成「峽灣」，有利航運、漁業、水力發電與觀光（注意：峽灣是挪威，不是芬蘭）！\n3.【冰島 $\\to$ 冰火之島】：位於大西洋中洋脊，火山、地熱、溫泉與冰河共存。\n4.【丹麥 $\\to$ 歐洲農牧業模範生】：地勢平坦，風力發電與乳酪肉品發達。",
    "stem": "「……芬蘭在這種限制下，要架設多少電線桿、拉多少電話線，才能構成完整的通訊網？解決之道就是發展無線通訊網路（行動電話），只需成本低廉的『點狀』基地臺，不必高成本的『線狀』電話線。」根據芬蘭的地理條件，上文所提到的「限制」最有可能指下列何者？【102.試辦會考】\n\n○ (A) 土壤貧瘠、地質脆弱\n○ (B) 山勢陡峭、河短流急\n○ (C) 湖泊眾多、地廣人稀\n○ (D) 峽灣發達、海岸曲折",
    "answer": "(C) 湖泊眾多、地廣人稀",
    "diagramUrl": "",
    "solution": "○ 詳細地理觀念與背景剖析： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-17",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790314970875,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細地理觀念與背景剖析： 故選 (C)。"
  },
  {
    "id": "q_soc_geo_maritime_silk_road_monsoon_057",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "海上絲路與季風貿易：依貨物特產（中國紙墨絲瓷）判斷起點、依冬季東北季風（向西南航行）判斷出發時節〔102試辦會考〕",
    "uploadDate": "2026-09-18",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「海上絲路與季風貿易」秒殺解題兩大步驟】：\n1.【看貨物定起點】：\n   - 載運「紙張、墨、絲綢、瓷器」 $\\to$ 中國古代特產 $\\to$ 船隻必由【甲地（中國東南沿海）】出發前往西方，排除 (C)、(D)！\n2.【看季風定出發季節（古代帆船順風航行）】：\n   - 由甲地向西南航向波斯灣（乙地） $\\to$ 必須藉助**冬季【東北季風】**推動才能順風航行，故為【冬季由甲地出發】！\n   - 若是【夏季】，盛行**西南季風**（由西南吹向東北），則適合由波斯灣返航回中國！",
    "stem": "附圖為九世紀時往返於中國與波斯灣之間的海上絲路主要航線，此交通網配合盛行風的週期，讓東方和西方的商品可以互相交流。若在當時有一艘滿載紙張、墨、絲綢、瓷器的帆船，乘著盛行風出發至另一地進行貿易，則根據該船所載貨物來源及盛行風風向判斷，下列關於此船航行的描述何者正確？【102.試辦會考】\n\n（點擊附圖可放大檢視航線圖）\n\n○ (A) 於夏季由甲地出發\n○ (B) 於冬季由甲地出發\n○ (C) 於夏季由乙地出發\n○ (D) 於冬季由乙地出發",
    "answer": "(B) 於冬季由甲地出發",
    "diagramUrl": "assets/questions/q_soc_geo_maritime_silk_road_monsoon_057.png",
    "solution": "○ 詳細解題觀念與背景深度剖析： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-18",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790315008960,
        "isMastered": true
      },
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790315022041,
        "isMastered": false
      },
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274668195,
        "isMastered": false
      }
    ],
    "explanation": "○ 詳細解題觀念與背景深度剖析： 故選 (B)。"
  },
  {
    "id": "q_eng_voc_experience_engineer_shop_058",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文名詞字義辨析：工作資歷與實務經驗 (experience) 之情境應用〔會考精選字彙〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【國中英文核心名詞辨析（experience / knowledge / chance / hobby）】：\n1.【experience（經驗、歷練）】：\n   - 指「親身實踐、累積的工作或生活經歷」。\n   - 題幹提到 Edward「當了 10 年電腦工程師（worked as a computer engineer for ten years）」，這是一段具體的工作資歷，創業開店時這份「實務經驗（experience）」給予他極大幫助。\n2.【knowledge（知識、學識）】：\n   - 指書本所學或理論層面的認知。強調過去職涯累積的整體資歷與實作歷練時，英文最精確自然的是 experience！\n3.【chance（機會、機遇）】：\n   - 指碰巧遇到的機會或可能性（= opportunity）。十年工程師是已經發生且具體累積的歷程，不是「機會」。\n4.【hobby（嗜好、休閒愛好）】：\n   - 指正職以外的休閒娛樂活動（如聽音樂、打球），工程師為專業正職工作（profession），非 hobby。",
    "stem": "Edward had worked as a computer engineer for ten years. This ______ helped him a lot when he started his own computer shop.\n\n○ (A) chance\n○ (B) experience\n○ (C) hobby\n○ (D) knowledge",
    "answer": "(B) experience",
    "diagramUrl": "",
    "solution": "experience [ɪkˈspɪriəns] (n.) 經驗、歷練（正解）：指在職場或生活中親身累積的實作經驗（work experience）。故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880162323,
        "isMastered": true
      }
    ],
    "explanation": "experience [ɪkˈspɪriəns] (n.) 經驗、歷練（正解）：指在職場或生活中親身累積的實作經驗（work experience）。故選 (B)。"
  },
  {
    "id": "q_eng_adj_mean_boss_office_059",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文形容詞字義辨析：個性特徵 mean（刻薄／凶惡）與上下文語意判讀〔會考精選單字〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【國中英文核心形容詞辨析（mean / bitter / dirty / wise）】：\n1.【mean 作形容詞（刻薄的、不友善的）】：\n   - 常考句型：`be mean to sb`（對某人很刻薄、凶狠）。\n   - 題幹提到 `treats his workers badly`（惡劣對待員工），語意直接對應「刻薄的（mean）」。\n   - 注意：mean 作動詞時為「意指、意味著（mean - meant - meant）」，作名詞為「平均數」，作形容詞才是「刻薄的／吝嗇的」！\n2.【bitter（苦澀的、充滿怨恨的）】：\n   - 形容食物苦（bitter coffee）、酷寒天氣（bitter cold）或人感到痛苦委屈（feel bitter），不直接用來形容老闆對待員工苛刻的性格。\n3.【dirty（骯髒的、下流的）】：\n   - 指衛生不潔或卑鄙手段，與 badly 對待員工的性格語境不符。\n4.【wise（明智的、有智慧的）】：\n   - 正面褒義詞，與下文的 badly 完全相反。",
    "stem": "No one in our office wants to work for our boss, Mr. Lin. He is ______ and treats his workers badly.\n\n○ (A) dirty\n○ (B) mean\n○ (C) bitter\n○ (D) wise",
    "answer": "(B) mean",
    "diagramUrl": "",
    "solution": "mean [miːn] (adj.) 刻薄的、惡意的、小氣的（正解）：形容人的性格惡劣、不友善、愛刁難人。故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880206234,
        "isMastered": true
      }
    ],
    "explanation": "mean [miːn] (adj.) 刻薄的、惡意的、小氣的（正解）：形容人的性格惡劣、不友善、愛刁難人。故選 (B)。"
  },
  {
    "id": "q_eng_idiom_if_all_else_fails_tv_060",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文常用慣用語辨析：經典片語 if all else fails（若其他辦法都行不通／作為備案）與動詞單複數判讀〔會考精選常考片語〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【會考與生活英語高頻片語：「If all else fails」】：\n1.【if all else fails（如果其他計畫或辦法都行不通的話／退而求其次）】：\n   - `all else` 在此指「所有其他嘗試過或想到的備選方案（計劃 A、B、C……）」，視為單數主詞概念。\n   - `fail` 在此作不及物動詞，意為「失敗、行不通、無效」，依現在簡單式第三人稱單數加 `s` $\\to$ `fails`。\n   - 用於提出最後的備用保底方案（Plan B / backup plan）。例如：「如果所有的出遊行程都泡湯了，我們至少還能待在家裡看電視」。\n2.【其他選項常見語法與文意盲點】：\n   - (A) pass（通過、流逝）：`if all else passes` 語意不通（若其他都順利通過何必退而求其次待在家）。\n   - (B) allow（允許）：allow 通常為及物動詞需加受詞（例：if time allows 如果時間允許；if circumstances allow）。主詞是 all else 時不可直接用 allows 表被允許。\n   - (C) expect（期待、預期）：及物動詞需由人發出期待，事物名詞 all else 無法主動 expect。",
    "stem": "If all else ______, we can always stay at home and watch TV.\n\n○ (A) passes\n○ (B) allows\n○ (C) expects\n○ (D) fails",
    "answer": "(D) fails",
    "diagramUrl": "",
    "solution": "fails (v.) 失敗、行不通（正解）：不及物動詞，表示計畫或機器失效、泡湯，構成固定片語 `if all else fails`。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880243237,
        "isMastered": true
      }
    ],
    "explanation": "fails (v.) 失敗、行不通（正解）：不及物動詞，表示計畫或機器失效、泡湯，構成固定片語 `if all else fails`。 故選 (D)。"
  },
  {
    "id": "q_eng_verb_matter_taipei_trip_061",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文動詞字義辨析：經典口語句型 It doesn't matter（沒關係／不要緊）與情境判讀〔會考高頻單字〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【動詞 matter 的核心句型與「一字多義」辨析】：\n1.【matter 作不及物動詞（要緊、重要、有關係）】：\n   - 核心經典口語：`It doesn't matter.`（沒關係／無所謂／不要緊）。\n   - 題幹提到原本期待對方明天同行，但現在對方不能去，「沒關係了，我自己去就好（now it doesn't matter. I'll go by myself）」，語意極為自然流暢。\n   - 疑問句常用：`Does it matter?`（這重要嗎？／要緊嗎？）\n2.【matter 作名詞（事情、問題、物質）】：\n   - 常見片語：`What's the matter?`（怎麼了？／出了什麼事？）；`as a matter of fact`（事實上）。\n3.【其他選項深入診斷】：\n   - (B) define（定義、界定）：及物動詞，在此句缺少受詞且語意荒謬。\n   - (C) pass（通過、經過）：放在句中 it doesn't pass 意為「它沒有通過」，與「我自己去」毫無邏輯關聯。\n   - (D) win（贏得、獲勝）：指比賽獲勝，用在此處語意不通。",
    "stem": "I expected that you can go to Taipei with me tomorrow, but now it doesn't ______. I'll go by myself.\n\n○ (A) matter\n○ (B) define\n○ (C) pass\n○ (D) win",
    "answer": "(A) matter",
    "diagramUrl": "",
    "solution": "○ 詳細文法與字義深度剖析： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880263812,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細文法與字義深度剖析： 故選 (A)。"
  },
  {
    "id": "q_eng_prep_in_the_front_of_classroom_062",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "空間介系詞片語辨析：in the front of（在內部的前端） vs. in front of（在外部的前方）〔會考核心易混淆點〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【會考必考「內部 vs 外部」空間介系詞大對決】：\n1.【in the front of（在「內部」的前方）】：\n   - 有定冠詞「the」！表示主體身處於該空間的「內部前面部分」。\n   - 老師坐在教室內部講台前 $\\to$ 人在教室室內，必須用 in the front of the classroom！\n   - 司機坐在公車前座 $\\to$ The driver sits in the front of the bus.\n2.【in front of（在「外部」的前面）】：\n   - 沒有「the」！表示主體位於該建築物或空間的「外部前方（室外）」。\n   - 樹在教室外面正前方 $\\to$ A tree stands in front of the classroom.\n3.【秒記口訣】：\n   - 「有 the 在室內裡面，沒 the 在室外前方」！",
    "stem": "The teacher is sitting ______ the classroom.\n\n○ (A) in the front of\n○ (B) in front of\n○ (C) across from\n○ (D) next to",
    "answer": "(A) in the front of",
    "diagramUrl": "",
    "solution": "in the front of。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880275916,
        "isMastered": true
      }
    ],
    "explanation": "in the front of。 故選 (A)。"
  },
  {
    "id": "q_eng_prep_with_map_church_063",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "介系詞 with 表示「藉由／使用工具或媒介」之用法與關係子句語意判讀〔會考高頻文法〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【介系詞 with 的核心功能與陷阱排查】：\n1.【with 表示「藉由、使用工具／媒介」】：\n   - 當句意為「靠著某物／用某項工具達成目標」時，介系詞首選 **with**！\n   - 題幹意為「**靠著／用** Ryan 為我們畫的地圖（**With** the map...）」，我們才順利找到老教堂。\n2.【常見固定搭配快速對照】：\n   - *With your help, ...*（藉著你的幫忙……）\n   - *With this map, ...*（靠著這張地圖……）\n   - *write with a pen*（用筆書寫）\n   - *cut with a knife*（用刀切）\n3.【其他選項文意完全不符】：\n   - About（關於）：About the map 意為「關於這張地圖」，無法表達找到教堂的工具手段。\n   - Beside（在……旁邊）、Under（在……下方）：純屬物理空間位置，不能用來說明達成任務的憑藉。",
    "stem": "______ the map that Ryan had drawn for us, we were able to find this beautiful old church.\n\n○ (A) About\n○ (B) Beside\n○ (C) Under\n○ (D) With",
    "answer": "(D) With",
    "diagramUrl": "",
    "solution": "With（用、藉由、靠著）［正解］：精準表達「靠著／利用這張地圖」達成找到教堂的目標。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-19",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789880288940,
        "isMastered": true
      }
    ],
    "explanation": "With（用、藉由、靠著）［正解］：精準表達「靠著／利用這張地圖」達成找到教堂的目標。 故選 (D)。"
  },
  {
    "id": "q_soc_geo_eastern_europe_eu_fdi_064",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "歐洲區域發展：東歐民主化轉型後吸引外資設廠之區位優勢（廉價充沛勞工、加入歐盟免關稅）〔會考核心經典考點〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【會考東歐經濟轉型與歐盟產業分工必考核心】：\n1.【東歐吸引西歐外資設廠雙核心】=「工資便宜（甲）」+「加入歐盟免關稅（丙）」：\n   - 西歐跨國企業（如德國汽車工業福斯、BMW 等）面臨國內工資高昂，轉將組裝代工與製造產線移往東歐（如波蘭、捷克、斯洛伐克、匈牙利）。\n   - 東歐工資僅約西歐的 1/3 ~ 1/2，且加入歐盟後享有「單一市場零關稅」待遇，製成品銷往西歐暢行無阻！\n2.【常見選項陷阱逐一排除】：\n   - 看到「農礦產豐富（乙）」不要選：外資大舉湧入主要是投資「汽車、電子、機械製造代工業」，並非為了採礦或農業。\n   - 看到「政治穩定（丁）」不要選：東歐在轉型期政經劇變（如前南斯拉夫解體內戰），且地緣上長年面臨俄羅斯政治威脅，並非以政治穩定見長。",
    "stem": "自東歐廢除共產體制後，經濟改革開放，加入歐盟後，更吸引「外國企業」進行投資，2008年外資投資金額相當於東歐諸國GDP的36%。請問東歐諸國吸引外資進入最主要的因素有哪些？(甲)廉價勞工、(乙)農礦產豐富、(丙)減免關稅、(丁)政治穩定\n\n○ (A) (甲)(乙)\n○ (B) (丙)(丁)\n○ (C) (甲)(丙)\n○ (D) (乙)(丁)",
    "answer": "(C) (甲)(丙)",
    "diagramUrl": "",
    "solution": "○ 詳細地理觀念與經濟轉型深度剖析： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790315059341,
        "isMastered": false
      },
      {
        "date": "2026-10-06",
        "monday": "2026-09-28",
        "timestamp": 1791274730003,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細地理觀念與經濟轉型深度剖析： 故選 (C)。"
  },
  {
    "id": "q_sci_phy_car_east_west_acceleration_065",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "直線運動學：速度與加速度之正負號方向性（向量運算）",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【向量正負號超級大陷阱——速度是向量，非純量！】：\n1. 很多同學看到「初速 20，末速 20」，直接直覺相減 20 - 20 = 0，誤選 (A) 0！\n2. 速度具有「大小」與「方向」，方向相反必須賦予不同正負號！\n   - 若設向東為正（+）：初速度 v₁ = +20 m/s，向西末速度 v₂ = -20 m/s。\n   - 速度變化量 Δv = v₂ - v₁ = (-20) - (+20) = -40 m/s（負號代表向西）。\n3. 平均加速度 a = Δv / Δt = -40 / 5 = -8 m/s²。\n   題目問「平均加速度大小」，故取絕對值為 8 m/s²！",
    "stem": "某車開始時的初速度為向東 20m / s，經過 5 秒後，速度變成向西 20m / s，則在加速的過程中，該車的平均加速度大小為下列何者？\n\n○ (A) 0\n○ (B) 4m / s²\n○ (C) 5m / s²\n○ (D) 8m / s²",
    "answer": "(D) 8m / s²",
    "diagramUrl": "",
    "solution": "8m / s²：正確，|-20 - 20| / 5 = 8 m/s²。 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789883823391,
        "isMastered": true
      }
    ],
    "explanation": "8m / s²：正確，|-20 - 20| / 5 = 8 m/s²。 故選 (D)。"
  },
  {
    "id": "q_sci_phy_ticker_tape_bd_avg_vel_066",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "直線運動學：打點計時器（紙帶軌跡）之時間間隔與平均速度計算",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【打點計時器／紙帶軌跡四大破題核心重點】：\n1.【數「間隔」而非數「點數」】：\n   - 啟動點到 E 點共有 5 個時間間隔（啟動點~A、A~B、B~C、C~D、D~E）。\n   - 總時間 0.5 秒，故每個間隔的時間 Δt = 0.5 / 5 = 0.1 秒！\n2.【B、D 間的位移與時間計算】：\n   - B 到 D 包含兩個區間：BC 段（3.5 cm）與 CD 段（5.5 cm），合計位移 Δx = 3.5 + 5.5 = 9.0 cm。\n   - B 到 D 經歷 2 個時間間隔，時間 t = 2 × 0.1 = 0.2 秒。\n3.【平均速度公式帶入】：\n   - v̄ = Δx / Δt = 9.0 cm / 0.2 s = 45 cm/s！",
    "stem": "右圖為某物體在固定時間間隔下所捕捉到的運動軌跡點。已知啟動點至 E 點共歷時 0.5 秒，請問 B、D 兩點間的平均速度大小為何？\n\n○ (A) 20cm / s\n○ (B) 35cm / s\n○ (C) 40cm / s\n○ (D) 45cm / s",
    "answer": "(D) 45cm / s",
    "diagramUrl": "assets/questions/q_sci_phy_ticker_tape_bd_avg_vel_066.png",
    "solution": "= 3.5 + 5.5 = 9.0 cm 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789885492089,
        "isMastered": true
      }
    ],
    "explanation": "= 3.5 + 5.5 = 9.0 cm 故選 (D)。"
  },
  {
    "id": "q_sci_phy_train_brake_stopping_distance_067",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "等加速度直線運動：火車煞車滑行時間、加速度、v-t 圖面積與完全煞停距離計算",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【等加速度運動公式與 v-t 圖面積雙解法核心】：\n1.【第一階段（30 到 10 m/s 滑行 400 m）求時間與加速度】：\n   - 利用平均速度求時間：x = [(v₀ + v)/2] × t ⟹ 400 = [(30 + 10)/2] × t ⟹ t = 20 秒（選項 A 正確）。\n   - 加速度 a = (v - v₀) / t = (10 - 30) / 20 = -1 m/s²（選項 B 正確）。\n2.【第二階段：火車完全煞停（末速 v = 0）】：\n   - 總煞停時間：0 = 30 + (-1) × t_總 ⟹ t_總 = 30 秒（選項 C 正確）。\n   - 總煞停距離（v-t 圖三角形面積）：x_總 = (初速 × 總時間) / 2 = (30 × 30) / 2 = 450 m。\n3.【錯誤陷阱】：\n   - (D) 敘述「需在 600 m 前開始煞車」錯誤，正確只需在 **450 m** 前開始煞車即可！",
    "stem": "一列火車進站前車速為 30m / s，煞車到車速為 10m / s 時，滑行 400m 的距離，下列敘述何者錯誤？\n\n○ (A) 此段煞車時間為 20 秒\n○ (B) 煞車時的加速度為 -1m / s²\n○ (C) 歷時 30 秒，火車才能停靠月臺\n○ (D) 火車準確停靠月臺，需在 600m 前開始煞車",
    "answer": "(D) 火車準確停靠月臺，需在 600m 前開始煞車",
    "diagramUrl": "",
    "solution": "火車準確停靠月臺所需煞車總距離 S_總： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14",
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789885557931,
        "isMastered": true
      },
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790592850232,
        "isMastered": true
      }
    ],
    "explanation": "火車準確停靠月臺所需煞車總距離 S_總： 故選 (D)。"
  },
  {
    "id": "q_sci_phy_car_brake_vt_graph_acceleration_068",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "直線運動學：v-t 圖判讀、減速煞車加速度大小與向量方向（向北為正，負號即向南）",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【v-t 圖斜率與正負方向判讀陷阱】：\n1.【鎖定題目要求的時段】：「減速煞車時」是指圖中 t = 10 ～ 20 秒的這一段（速度由 20 m/s 降為 0 m/s）！\n2.【求加速度】：a = Δv / Δt = (0 - 20) / (20 - 10) = -20 / 10 = -2 m/s²。\n3.【方向轉換】：\n   - 題目規定「汽車向北行駛」（向北為正 +）。\n   - 算出的加速度為負值（-2 m/s²），負號就代表「向南」！\n   - 加速度量值為 2 m/s²，方向為「向南」。千萬別漏看方向！",
    "stem": "一汽車在直線公路上向北行駛，其速度（v）與時間（t）的關係圖，如圖所示，試問此汽車在減速煞車時加速度的量值及方向為何？\n\n○ (A) 2m / s²，向北\n○ (B) 2m / s²，向南\n○ (C) 1m / s²，向北\n○ (D) 1m / s²，向南",
    "answer": "(B) 2m / s²，向南",
    "diagramUrl": "assets/questions/q_sci_phy_car_brake_vt_graph_acceleration_068.png",
    "solution": "○ 詳細物理步驟與 v-t 圖深度解析： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789885697008,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細物理步驟與 v-t 圖深度解析： 故選 (B)。"
  },
  {
    "id": "q_sci_phy_four_motion_graphs_speed_comparison_069",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "運動圖表判讀與轉換：x-t 圖、v-t 圖、a-t 圖在特定時刻之瞬間速度比較",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【四種運動圖形瞬時速度判讀必勝心法】：\n1.【看清縱軸座標代表什麼物理量】：\n   - 甲（x-t 圖）：在第 3 秒末時位於水平線上（x 停在 20 m 不動），故瞬間速度 v_甲 = 0 m/s！\n   - 乙（x-t 圖）：整段為斜直線（等速度運動），速度為斜率 v_乙 = 20 / 5 = 4 m/s！第 3 秒末速度仍為 4 m/s。\n   - 丙（v-t 圖）：等加速度直線，加速度 a = 5 / 5 = 1 m/s²，第 3 秒末的瞬時速度直接看高度：v_丙(3) = 1 × 3 = 3 m/s。\n   - 丁（a-t 圖）：水平線代表等加速度 a = 1 m/s²，由靜止啟動（v₀ = 0），第 3 秒末速度為面積：v_丁(3) = 0 + 1 × 3 = 3 m/s。\n2.【比較大小】：\n   - 乙 (4) > 丙 (3) = 丁 (3) > 甲 (0)，故最大者為【乙】！",
    "stem": "已知甲、乙、丙、丁四個運動體均由靜止啟動，後續運動情形分別記錄如下各圖示，試問四者啟動後第 3 秒末瞬間的速度，以何者最大？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(B) 乙",
    "diagramUrl": "assets/questions/q_sci_phy_four_motion_graphs_speed_comparison_069.png",
    "solution": "○ 詳細圖表判讀與逐一運算深度解析： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789885722186,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細圖表判讀與逐一運算深度解析： 故選 (B)。"
  },
  {
    "id": "q_soc_his_egypt_memphis_pyramid_070",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "古埃及古王國時期文明特徵（金字塔時代、孟斐斯、法老王權與陵墓興建）與世界古文明辨析〔93基測II〕",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【世界古代歷史四大古文明考點速記口訣】：\n1.【古埃及（尼羅河下游孟斐斯／金字塔）】：\n   - 古王國時代（約西元前 27～22 世紀）定都尼羅河下游的「孟斐斯」，國王稱為「法老」，生前即大興土木徵召人民建造「金字塔（大型國王陵墓）」，故古王國時期又稱「金字塔時期」！\n2.【常見選項陷阱辨析】：\n   - ❌ 廣場民主政治公共討論：古希臘城邦（如西元前 6～5 世紀之雅典），非埃及！\n   - ❌ 楔形文字與泥版紀錄：兩河流域（美索不達米亞文明，如蘇美、巴比倫），埃及使用的是草紙與象形文字！\n   - ❌ 傳播《聖經》信上帝得永生：基督教文明（西元 1 世紀於羅馬帝國統治下的巴勒斯坦興起），西元前 2500 年尚未出現！",
    "stem": "西元前 2500 年左右，有一位商人旅行到埃及 尼羅河下游的孟斐斯，他在這個城市中最可能看到下列何種景象？【93年第2次基測】\n\n○ (A) 人們不時接獲官員徵召去興建大型國王陵墓\n○ (B) 許多男性公民趕赴廣場參與公共事務的討論\n○ (C) 人們將交易往來紀錄用楔形文字刻在泥版上\n○ (D) 有人熱忱傳播《聖經》，宣揚信上帝可得永生。",
    "answer": "(A) 人們不時接獲官員徵召去興建大型國王陵墓",
    "diagramUrl": "",
    "solution": "ge）」。在尼羅河氾濫的農閒期間，人民經常受官員徵召前往工廠與陵寢工地從事大型石造陵墓的建造工程。因此在孟斐斯最容易目睹的景象為 (A)。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790315098691,
        "isMastered": true
      }
    ],
    "explanation": "ge）」。在尼羅河氾濫的農閒期間，人民經常受官員徵召前往工廠與陵寢工地從事大型石造陵墓的建造工程。因此在孟斐斯最容易目睹的景象為 (A)。 故選 (A)。"
  },
  {
    "id": "q_soc_his_hammurabi_code_babylon_071",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "兩河流域古巴比倫文明：《漢摩拉比法典》之階級劃分、以牙還牙報復原則與楔形文字辨析",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【《漢摩拉比法典》必考三大核心特徵與常考陷阱】：\n1.【統治者與文明歸屬（陷阱重災區）】：\n   - 為「古巴比倫王國」國王「漢摩拉比（Hammurabi）」所頒布，屬於「兩河流域（美索不達米亞）」文明！\n   - ❌ 常見陷阱：誤植為「波斯國王」或「亞述國王」！波斯是後來的統一帝國，與巴比倫相隔千年以上。\n2.【文字與載體】：\n   - 全文使用「楔形文字」鐫刻於「玄武岩石碑」上（即著名的漢摩拉比法典石碑），非古埃及的象形文字！\n3.【法典兩大精神】：\n   - ①【階級概念鮮明（身分不平等）】：貴族、平民（自由民）、奴隸階級分明。同罪不同罰（如傷害貴族處以嚴刑重罰，打奴隸或平民則處罰輕微；奴隸打自由民割耳）。\n   - ②【以牙還牙、以眼還眼（同態復仇原則）】：在同階級之間強調同態報復（傷人眼者還傷其眼，折人手足者還折其手足）。",
    "stem": "下列為老師介紹的法典部分內容，由此法典的內容判斷，何者敘述正確？\n(甲) 由條文可見當時有階級概念\n(乙) 強調「以牙還牙」的報復原則\n(丙) 為波斯國王漢摩拉比下令編訂\n(丁) 法典的原文應是由象形文字寫成\n\n【法典內容節錄】：\n・196 條：如果一個人傷了貴族的眼睛，還傷其眼。\n・197 條：如果一個人折了貴族的手足，還折其手足。\n・203 條：如果貴族階層的人打了貴族出身的人，須罰銀一明納。\n・205 條：如果任何人的奴隸打了自由民出身的人，處割耳之刑。\n\n○ (A) 甲乙\n○ (B) 乙丙\n○ (C) 甲丙\n○ (D) 丙丁",
    "answer": "(A) 甲乙",
    "diagramUrl": "",
    "solution": "○ 詳細題意解析與法典條文深度剖析： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790315162607,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細題意解析與法典條文深度剖析： 故選 (A)。"
  },
  {
    "id": "q_math_parallel_segments_ratio_trapezoid_072",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與相似三角形：交叉平行線模型（EF//AB//CD）線段比例推導與經典公式",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「交叉平行線 / 雙三角模型」秒殺口訣與陷阱】：\n1.【破題關鍵三部曲】：\n   - ① 看 $\\triangle BCD$（利用 $\\overline{EF} // \\overline{CD}$）：\n     $$\\overline{BF} : \\overline{BC} = \\overline{EF} : \\overline{CD} = 2 : 5 \\implies \\overline{BF} : \\overline{CF} = 2 : 3$$\n   - ② 轉看 $\\triangle CAB$（利用 $\\overline{EF} // \\overline{AB}$）：\n     $$\\overline{EF} : \\overline{AB} = \\overline{CF} : \\overline{CB} = 3 : (2+3) = 3 : 5$$\n   - ③ 兩側比例轉換：\n     $\\overline{BE} : \\overline{ED} = \\overline{BF} : \\overline{FC} = 2 : 3$（頂點 $B$ 端佔 2 份、底端 $C$ 佔 3 份，千萬別顛倒寫成 $3:2$）！\n2.【經典倒數和公式（秒殺驗算神技）】：\n   $$\\frac{1}{\\overline{EF}} = \\frac{1}{\\overline{AB}} + \\frac{1}{\\overline{CD}}$$\n   中間平行線長度的倒數，等於兩側平行線長度的倒數和！",
    "stem": "如圖，$\\overline{AB} // \\overline{EF} // \\overline{CD}$，若 $\\overline{EF} : \\overline{CD} = 2 : 5$，則下列何者正確？\n\n（點擊附圖可放大檢視幾何圖形）\n\n○ (A) $\\overline{EF} : \\overline{AB} = 3 : 5$\n○ (B) $\\overline{BE} : \\overline{BD} = 3 : 5$\n○ (C) $\\overline{BE} : \\overline{DE} = 3 : 2$\n○ (D) $\\overline{AB} : \\overline{CD} = 1 : 1$",
    "answer": "(A) $\\overline{EF} : \\overline{AB} = 3 : 5$",
    "diagramUrl": "assets/questions/q_math_parallel_segments_ratio_trapezoid_072.png",
    "solution": "B$ 求 $\\overline{EF} : \\overline{AB}$ 的比值： 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 2,
    "isArchived": true,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14",
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789905888704,
        "isMastered": true
      },
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790589743603,
        "isMastered": true
      }
    ],
    "explanation": "B$ 求 $\\overline{EF} : \\overline{AB}$ 的比值： 故選 (A)。"
  },
  {
    "id": "q_sci_phy_free_fall_pisa_height_073",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "直線運動與自由落體：重力加速度（g = 9.8 m/s²）、v-t 圖面積求位移與下落高度計算",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【自由落體運動必背三大觀念與防錯口訣】：\n1.【核心物理條件】：\n   -「由靜止釋放」表示初速度 $v_0 = 0$ m/s！\n   - 只受重力作用，加速度為定值 $g = 9.8\\text{ m/s}^2$（等加速度運動）。\n2.【著地末速度】：\n   - 每秒速度增加 $9.8\\text{ m/s}$，經歷 $3$ 秒著地：\n     $$v = g \\times t = 9.8 \\times 3 = 29.4\\text{ m/s}$$\n3.【求下落高度（斜塔高度）兩種神技】：\n   - 方法一（v-t 圖面積法，最直觀）：\n     由靜止出發的 v-t 圖為過原點的三角形，面積代表位移（下落高度）：\n     $$\\text{高度 } h = \\frac{\\text{底 } t \\times \\text{高 } v}{2} = \\frac{3 \\times 29.4}{2} = 44.1\\text{ 公尺}$$\n   - 方法二（秒殺公式法）：\n     $$h = \\frac{1}{2}gt^2 = \\frac{1}{2} \\times 9.8 \\times 3^2 = 4.9 \\times 9 = 44.1\\text{ 公尺}$$\n4.【常見致命陷阱】：\n   - ❌ 粗心忘記「除以 2」算成 $29.4 \\times 3 = 88.2$（誤算成等速長方形面積）。\n   - ❌ 題目明訂 $g = 9.8$，切勿自行偷換成 $10$！",
    "stem": "阿翰在比薩斜塔上某處，將蘋果由靜止往下釋放，並測量時間，結果發現蘋果在 3 秒後落地，請問阿翰所在處的高度為多少公尺？（g = 9.8 m / s²）",
    "answer": "44.1 公尺（或 44.1 m）",
    "diagramUrl": "",
    "solution": "○ 詳細物理觀念與步驟解析：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789885823483,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細物理觀念與步驟解析："
  },
  {
    "id": "q_sci_phy_free_fall_tower_time_speed_074",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "自由落體運動：已知下落高度反求著地時間（h = 1/2 gt²）與著地瞬間末速度（v = gt）",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【自由落體「已知高度反求時間與末速」速算必勝技巧】：\n1.【小數除法巧算神招】：\n   - 代入公式 $h = \\frac{1}{2}gt^2 = 4.9t^2$\n   - $t^2 = \\frac{78.4}{4.9}$，分子分母同乘 10 變整數：$\\frac{784}{49}$！\n   - 觀察 $49 = 7^2$，$784 = 28^2$，故 $t^2 = \\left(\\frac{28}{7}\\right)^2 = 4^2 = 16 \\implies t = 4$ 秒（完全不用拿筆除得滿頭大汗）！\n2.【第二小題末速度秒殺】：\n   - 著地末速 $v = gt = 9.8 \\times 4 = 39.2\\text{ m/s}$（方向向下）。\n3.【常見致命陷阱】：\n   - ❌ 誤將 $g = 9.8$ 記成 $4.9$ 當作重力加速度（$4.9$ 是 $\\frac{1}{2}g$，算末速時請乘上真正的 $g = 9.8$）。\n   - ❌ (2) 題未標單位，速度單位是 $\\text{m/s}$（公尺/秒），切勿寫成 $\\text{m/s}^2$（加速度單位）！",
    "stem": "若一物體自 78.4 公尺的高塔自由掉落，則：（g = 9.8 m / s²）\n(1) 經幾秒後會著地？\n(2) 著地時的速度為何？",
    "answer": "(1) 4 秒（或 4s）；(2) 39.2 公尺/秒（或 39.2 m/s）",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與步驟解析：",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-14",
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789895425746,
        "isMastered": false
      },
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790592928306,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與步驟解析："
  },
  {
    "id": "q_sci_phy_free_fall_characteristics_075",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "自由落體運動之核心定義與特徵辨析（只受重力作用、等加速度運動、速度均勻增加、位移隨時間平方增加）",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【自由落體核心特徵常考四大概念辨析】：\n1.【全程只受重力作用】：不受外力或不計空氣阻力時的理想落體運動（選項 D 包括）。\n2.【等加速度運動】：地表附近重力加速度 $g = 9.8\\text{ m/s}^2$ 為定值（選項 B 包括）。\n3.【單位時間內「速度變化量」一定】：加速度定義為 $a = \\frac{\\Delta v}{\\Delta t}$，等加速度即每秒速度變化量相同（選項 C 包括）。\n4.【大陷阱（不包括的項目）】：\n   - ❌ 自由落體「越掉越快」，位移與時間平方成正比（$h = \\frac{1}{2}gt^2$），每 1 秒掉落的距離越來越長（第 1 秒 4.9m、第 2 秒 14.7m……），絕對不是「單位時間內位移量一定」！\n   - 「單位時間內位移量一定」是【等速度運動】的特徵，自由落體絕非等速度運動！",
    "stem": "有關自由落體運動的特徵，不包括下列哪一項？\n\n○ (A) 單位時間內的位移量一定\n○ (B) 等加速度運動\n○ (C) 單位時間內的速度變化量一定\n○ (D) 全程只受重力作用",
    "answer": "(A) 單位時間內的位移量一定",
    "diagramUrl": "",
    "solution": "「單位時間內的位移量一定」：不包括（為本題所求）。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789895453905,
        "isMastered": true
      }
    ],
    "explanation": "「單位時間內的位移量一定」：不包括（為本題所求）。 故選 (A)。"
  },
  {
    "id": "q_sci_phy_free_fall_vt_graph_options_076",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "自由落體運動之 v-t 圖形判讀（初速為零、等加速度、過原點斜向右上直線）",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【自由落體 v-t 圖秒殺兩大鐵律】：\n1.【過原點 (0, 0)】：「自由掉落」代表由靜止釋放，初速度 $v_0 = 0$！在 $t = 0$ 時 $v = 0$，圖形起點一定在原點！\n2.【斜直線（斜率為定值 g）】：只受重力作用，加速度 $a = g = 9.8\\text{ m/s}^2$ 為正的定值！v-t 圖的斜率就是加速度，因此必為一條過原點向右上延伸的傾斜直線！\n3.【其餘圖形代表的運動】：\n   - 圖 (B) 水平線：速度不變（等速度運動）。\n   - 圖 (C) 往右下斜直線：具有初速度的等減速度運動（如鉛直上拋上升過程）。\n   - 圖 (D) 曲線下彎：加速度隨時間變化的變加速度運動。",
    "stem": "一物體自高處自由落下，若不考慮空氣阻力，其掉落時速度（v）與時間（t）的關係圖為下列何者？\n\n（點擊附圖可放大檢視 (A)(B)(C)(D) 四個速度與時間關係圖）\n\n○ (A) 圖 (A)：通過原點向右上傾斜之斜直線（等加速度運動）\n○ (B) 圖 (B)：水平直線（等速度運動）\n○ (C) 圖 (C)：由某一正速度隨時間直線減速至 0\n○ (D) 圖 (D)：先等速後向下彎曲之曲線",
    "answer": "(A) 圖 (A)：通過原點向右上傾斜之斜直線（等加速度運動）",
    "diagramUrl": "assets/questions/q_sci_phy_free_fall_vt_graph_options_076.png",
    "solution": "通過原點向右上延伸之直線，表示初速為 0、加速度為定值的等加速度運動，完全符合自由落體，為正確答案。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789895480942,
        "isMastered": true
      }
    ],
    "explanation": "通過原點向右上延伸之直線，表示初速為 0、加速度為定值的等加速度運動，完全符合自由落體，為正確答案。 故選 (A)。"
  },
  {
    "id": "q_sci_phy_vertical_throw_gravity_acceleration_constant_077",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "鉛直上拋運動之受力與加速度分析：空中運動全程加速度恆等於重力加速度 g（大小與方向皆固定）",
    "uploadDate": "2026-09-19",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【鉛直上拋在空中「加速度」三大考試大陷阱】：\n1. ❌【陷阱一：誤以為「剛離手時手推力最大，所以加速度最大」】：\n   - 錯！球「離開手掌」的瞬間，手對球的作用力立刻變成 0！在空中球只受到地球向下的重力！\n2. ❌【陷阱二：誤以為「最高點瞬時速度為 0，所以加速度也是 0」】：\n   - 錯！最高點瞬間雖然「速度 $v = 0$」，但重力依然存在，加速度依然是 $g = 9.8\\text{ m/s}^2$ 向下！若加速度為 0，球就會停在半空中掉不下來了！\n3. ❌【陷阱三：誤以為「快墜地時速度最快，所以加速度最大」】：\n   - 錯！速度大不等於加速度大！加速度是「速度變化的快慢」，每秒速度都固定增加 $9.8\\text{ m/s}$！\n👉【破題秒殺口訣】：只要在空中且不計阻力，全程合力只有重力，加速度【全程皆相同】，永遠等於 $9.8\\text{ m/s}^2$ 向下！",
    "stem": "阿翰把一棒球拋向天空，試問在不計空氣阻力下，棒球在空中何時有最大的加速度？\n\n○ (A) 離開手後的那一剎那\n○ (B) 到最高點時\n○ (C) 墜地前\n○ (D) 全程皆相同",
    "answer": "(D) 全程皆相同",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與受力深度分析： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-19",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-14"
    ],
    "lastReviewedMonday": "2026-09-14",
    "lastReviewedDate": "2026-09-20",
    "reviewHistory": [
      {
        "date": "2026-09-20",
        "monday": "2026-09-14",
        "timestamp": 1789895502568,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與受力深度分析： 故選 (D)。"
  },
  {
    "id": "q_soc_civ_job_opportunity_cost_comparison_078",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "審題不清",
    "concept": "公民與社會：機會成本核心定義（放棄選項中價值最高者）與多重選擇機會成本比較排序",
    "uploadDate": "2026-09-21",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【機會成本三大常考陷阱與秒解心法】：\n1. ❌【陷阱一：誤把「薪資高低排序」當成「機會成本排序」】：\n   - 題目問的是「機會成本排序」，不是「薪資大小」！若選了 (B) 甲 > 丙 > 乙，就掉入看錯題目的陷阱！\n2. ❌【陷阱二：忽略「未被選上的選項，其機會成本皆為第一名薪資」】：\n   - 當大雄選甲時，放棄的最高價值是「丙的薪資」；\n   - 但若大雄改選乙，放棄的最高價值是「甲的薪資」；\n   - 若大雄改選丙，放棄的最高價值同樣是「甲的薪資」！\n   - 故乙和丙的機會成本【完全相等】，皆為甲的薪資！\n3. 👉【破題秒殺邏輯】：\n   - 薪資高低：甲 > 丙 > 乙。\n   - 機會成本比較：甲的機會成本（丙） < 乙的機會成本（甲） = 丙的機會成本（甲）。\n   - 答案必為：甲 < 丙 = 乙（或 甲 < 乙 = 丙）。",
    "stem": "大雄在社群網路中貼文分享自己最近的求職經歷：「我昨天獲得了甲乙兩個工作機會，我的最佳選擇為甲工作；今天我又收到丙工作機會，我再三考量後，甲工作仍是最佳選擇，但是我的機會成本增加了。」若大雄僅以薪資高低作為選擇依據，上述甲、乙、丙三個工作機會的機會成本排序應為下列何者？\n\n○ (A) 甲 < 乙 < 丙\n○ (B) 甲 > 丙 > 乙\n○ (C) 甲 > 乙 = 丙\n○ (D) 甲 < 丙 = 乙",
    "answer": "(D) 甲 < 丙 = 乙",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與深度剖析： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-21",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790315219603,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細解題觀念與深度剖析： 故選 (D)。"
  },
  {
    "id": "q_soc_civ_trip_opportunity_cost_explicit_implicit_079",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民與社會：機會成本計算（外顯成本＋隱藏成本）與非成本項目（利益贈品）辨析",
    "uploadDate": "2026-09-21",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-14",
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【機會成本計算兩大得分黃金法則】：\n1.【機會成本計算公式】：\n   - 機會成本 ＝ 外顯成本（實際掏錢支付的會計成本）＋ 隱藏成本（因選擇而放棄的潛在收益或薪資）。\n   - 本題外顯成本：團費 40,000 元 ＋ 名產 3,000 元 ＝ 43,000 元。\n   - 本題隱藏成本：請假 5 天少賺的薪資 8,800 元。\n   - 總機會成本 ＝ 43,000 ＋ 8,800 ＝ 51,800 元。\n2. ❌【超常見致命陷阱：好友送的 1,000 元公仔】：\n   - 好友贈送的生日禮物屬於旅遊過程中所「獲得的額外利益（贈品）」，並非小櫻為了參加旅遊而「付出的代價」或「放棄的選擇」！\n   - 機會成本只計算「付出的代價」，絕不能將贈品價值加進去（誤選 D 52,800 元），也不可當作折扣扣除！",
    "stem": "小櫻與好友相約參加旅行社的 5 天 4 夜日本賞櫻團，此次出遊的團費為 4 萬元，她還因此向公司請了 5 天假少賺 8,800 元，並在旅途中購買 3,000 元的名產要分享給同事，好友另送給她一個要價 1,000 元的公仔當生日禮物。根據上述內容判斷，小櫻此次旅遊的機會成本應為下列何者？\n\n○ (A) 40,000 元\n○ (B) 48,800 元\n○ (C) 51,800 元\n○ (D) 52,800 元",
    "answer": "(C) 51,800 元",
    "diagramUrl": "",
    "solution": "ost）＋ 隱藏成本（Implicit Cost）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-21",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-26",
    "reviewHistory": [
      {
        "date": "2026-09-26",
        "monday": "2026-09-21",
        "timestamp": 1790392474971,
        "isMastered": true
      }
    ],
    "explanation": "ost）＋ 隱藏成本（Implicit Cost）。 故選 (C)。"
  },
  {
    "id": "q_eng_present_perfect_visited_lake_080",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "現在完成式：去過/遊覽過某地 (have visited / have been to) 與主詞動詞一致性",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【現在完成式去過某地三大常考陷阱剖析】：\n1. 複數主詞配合助動詞：Jason and I 屬於「第一人稱複數 (we)」，助動詞必須使用 have，不可使用單數 has（排除 C、D）。\n2. 易混淆片語辨析：\n   - have gone to：表示「已經去了某地（目前人仍在當地，尚未返回）」，不符合句中 several times（去過好幾次並已返回）的經驗說明。\n   - have visited：表示「曾遊覽/造訪過某地」，後面直接接地點名詞，不需要介系詞 to（完全符合本題句型）。\n   - paid a visit：若選此片語，後面必須加上介系詞 to（即 have paid a visit to...），故 (D) 選項介系詞缺失。",
    "stem": "Jason and I ______ Sun Moon Lake several (許多的) times.\n\n○ (A) have gone to\n○ (B) have visited\n○ (C) has been to\n○ (D) has paid a visit",
    "answer": "(B) have visited",
    "diagramUrl": "",
    "solution": "`have visited`：意為「曾拜訪/遊覽過某地」，動詞 visit 後面直接接地點 `Sun Moon Lake`，不需加介系詞 to，文法與語意完全正確。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790314649711,
        "isMastered": false
      },
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006277563,
        "isMastered": false
      }
    ],
    "explanation": "`have visited`：意為「曾拜訪/遊覽過某地」，動詞 visit 後面直接接地點 `Sun Moon Lake`，不需加介系詞 to，文法與語意完全正確。 故選 (B)。"
  },
  {
    "id": "q_eng_present_perfect_short_answer_never_081",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "審題不清",
    "concept": "現在完成式簡答句中頻率副詞 (never/always) 的正確位置",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【現在完成式簡答句黃金考題陷阱】：\n1. 當回答 Have you ever p.p. ... ? 時，若答句為「簡答句（省略後方主要動詞 p.p.）」且加入頻率副詞 (never, always, often 等)，**頻率副詞必須放在助動詞 (have/has) 的前面**！\n2. 完整答句：No, I have never danced with my father.\n3. 簡答句：No, I **never have**.\n4. 易錯陷阱：國中英文考試中，若寫成 `No, I have never.` 屬於位置不完整之常考錯選項（排除 B）。",
    "stem": "Tina: Have you ever danced with your father? Mina: No, ______.\n\n○ (A) I never have\n○ (B) I have never\n○ (C) I have\n○ (D) I never",
    "answer": "(A) I never have",
    "diagramUrl": "",
    "solution": "`I never have`：位置正確，符合否定簡答文法規範。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-25",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790314669407,
        "isMastered": true
      }
    ],
    "explanation": "`I never have`：位置正確，符合否定簡答文法規範。 故選 (A)。"
  },
  {
    "id": "q_eng_present_perfect_passive_great_wall_082",
    "examPeriod": "二段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "現在完成被動態公式 (has / have + been + p.p.) 與持續時間 (for + 一段時間)",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【現在完成被動態雙重條件破題法】：\n1. **被動語態判定**：主詞 The Great Wall of China（萬里長城）與動詞 build（建造）為被動關係，長城是被建造的（需要被動語態 be + p.p.）。\n2. **完成式判定**：句尾有 `for + 一段時間`（for more than 2,000 years 表示持續超過兩千年至今），必須採用完成式 (has/have + p.p.)。\n3. **公式結合**：完成式 ＋ 被動語態 ＝ **現在完成被動態：has / have + been + p.p.**！\n   - 單數主詞配合 `has been built`，故精準選擇 (C)！",
    "stem": "The Great Wall of China ______ for more than 2,000 years.\n\n○ (A) has built\n○ (B) was built\n○ (C) has been built\n○ (D) will be built",
    "answer": "(C) has been built",
    "diagramUrl": "",
    "solution": "hina`（萬里長城），長城「被建造」，動詞需使用被動語態（be + p.p.）。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-09-25",
        "monday": "2026-09-21",
        "timestamp": 1790314736359,
        "isMastered": false
      },
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791006338626,
        "isMastered": false
      }
    ],
    "explanation": "hina`（萬里長城），長城「被建造」，動詞需使用被動語態（be + p.p.）。 故選 (C)。"
  },
  {
    "id": "q_math_triangle_midpoint_angle_ghf_080",
    "examPeriod": "二段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形中點連線段性質（平行且長度一半）與同位角、等腰三角形角度推導",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【幾何中點定理三大突破口】：\n1. **中點連線段性質**：三角形兩邊中點連線段平行於第三邊，且長度等於第三邊的一半！\n   - 在 $\\triangle DBE$ 中，F、G 為 $\\overline{DE}、\\overline{BE}$ 中點 $\\Rightarrow \\overline{FG} // \\overline{DB}$ 且 $\\overline{FG} = \\frac{1}{2} \\overline{BD}$。\n   - 在 $\\triangle BEC$ 中，G、H 為 $\\overline{BE}、\\overline{BC}$ 中點 $\\Rightarrow \\overline{GH} // \\overline{CE}$ 且 $\\overline{GH} = \\frac{1}{2} \\overline{CE}$。\n2. **等長條件轉移**：已知 $\\overline{BD} = \\overline{CE} \\Rightarrow \\overline{FG} = \\overline{GH}$，故 $\\triangle FGH$ 為**等腰三角形**！\n3. **角度推導**：平行線同位角 $\\angle FGE = \\angle DBE = 30^\\circ$，$\\angle BGH = \\angle BEC = 88^\\circ$。頂角 $\\angle FGH = 30^\\circ + (180^\\circ - 88^\\circ) = 122^\\circ$，底角 $\\angle GHF = (180^\\circ - 122^\\circ) \\div 2 = 29^\\circ$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$E$ 兩點分別在 $\\overline{AB}$、$\\overline{AC}$ 上，已知 $\\overline{BD} = \\overline{CE}$，$F$、$G$、$H$ 分別為 $\\overline{DE}$、$\\overline{BE}$、$\\overline{BC}$ 的中點，若 $\\angle BEC = 88^\\circ$，$\\angle DBE = 30^\\circ$，則 $\\angle GHF = ？$\n\n○ (A) 21°\n○ (B) 26°\n○ (C) 27°\n○ (D) 29°",
    "answer": "(D) 29°",
    "diagramUrl": "assets/questions/q_math_triangle_midpoint_angle_ghf_080.png",
    "solution": "BE$ 中，因為 $F$、$G$ 分別為 $\\overline{DE}$ 與 $\\overline{BE}$ 的中點： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790590162054,
        "isMastered": false
      },
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791025964719,
        "isMastered": true
      }
    ],
    "explanation": "BE$ 中，因為 $F$、$G$ 分別為 $\\overline{DE}$ 與 $\\overline{BE}$ 的中點： 故選 (D)。"
  },
  {
    "id": "q_math_triangle_angle_bisector_ef_cd_083",
    "examPeriod": "二段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形內角平分線分線段成比例定理與平行線截比例線段綜合應用",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【角平分線定理與平行截線兩大得分突破口】：\n1. **內角平分線定理**：三角形內角平分線分對邊成比例，等於兩鄰邊長之比！\n   - $\\overline{AD}$ 為 $\\angle BAC$ 平分線 $\\Rightarrow \\overline{BD} : \\overline{CD} = \\overline{AB} : \\overline{AC} = 8 : 6 = 4 : 3$。\n   - $\\overline{BF}$ 為 $\\angle ABC$ 平分線 $\\Rightarrow \\overline{AF} : \\overline{CF} = \\overline{AB} : \\overline{BC} = 8 : 7$。\n2. **平行線截比例線段**：已知 $\\overline{EF} // \\overline{CD} \\Rightarrow \\overline{EF} : \\overline{CD} = \\overline{AF} : \\overline{AC} = 8 : (8+7) = 8 : 15$。\n3. **線段與比例比值**：$\\overline{BD} = 7 \\times \\frac{4}{7} = 4$，$\\overline{EF} = \\frac{8}{15} \\overline{CD} = \\frac{8}{15} \\times 3 = \\frac{8}{5}$。最後計算 $\\overline{BD} : \\overline{EF} = 4 : \\frac{8}{5} = 5 : 2$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\overline{AD}$、$\\overline{BF}$ 分別為 $\\angle BAC$、$\\angle ABC$ 的角平分線，且 $\\overline{AD}$、$\\overline{BF}$ 相交於 $G$ 點，$\\overline{EF} // \\overline{CD}$，若 $\\overline{AB} = 8$，$\\overline{BC} = 7$，$\\overline{AC} = 6$，則 $\\overline{BD} : \\overline{EF} = ？$\n\n○ (A) 3 : 2\n○ (B) 4 : 3\n○ (C) 5 : 2\n○ (D) 7 : 5",
    "answer": "(C) 5 : 2",
    "diagramUrl": "assets/questions/q_math_triangle_angle_bisector_ef_cd_083.png",
    "solution": "$ 中，因為 $\\overline{AD}$ 為 $\\angle BAC$ 的角平分線： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28",
      "2026-10-05"
    ],
    "lastReviewedMonday": "2026-10-05",
    "lastReviewedDate": "2026-10-11",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790590541936,
        "isMastered": false
      },
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791032353155,
        "isMastered": false
      },
      {
        "date": "2026-10-11",
        "monday": "2026-10-05",
        "timestamp": 1791709816344,
        "isMastered": true
      }
    ],
    "explanation": "$ 中，因為 $\\overline{AD}$ 為 $\\angle BAC$ 的角平分線： 故選 (C)。"
  },
  {
    "id": "q_phy_galileo_inclined_plane_length_084",
    "examPeriod": "二段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "伽利略雙斜面實驗、力學能守恆與斜面幾何相似比",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【伽利略斜面實驗兩大關鍵得分突破口】：\n1. **力學能守恆與上升高度**：在忽略摩擦力與空氣阻力的理想狀況下，小鋼珠由左側高度 15 公分處靜止下滑，到達右側斜面時，所能上升的**垂直高度必定等於原出發高度**（即垂直高度 $h = 15$ 公分）！\n2. **斜面幾何相似比（斜長與高成正比）**：右側斜面的「斜面長度 : 垂直高度」比例固定！\n   - 已知右斜面全長 40 公分時，垂直高度為 24 公分。\n   - 設滑過長度為 $X$ 公分，此時垂直高度為 15 公分。\n   - 建立相似比：$\\frac{\\text{斜長}}{\\text{垂直高}} = \\frac{40}{24} = \\frac{X}{15} \\Rightarrow X = 25$ 公分！",
    "stem": "讓一個小鋼珠由圖中的斜面上 A 處向下滑，並滑到另一斜面，若摩擦力可忽略，則小鋼珠在右邊斜面上滑過的長度應為幾公分？\n\n○ (A) 15\n○ (B) 20\n○ (C) 25\n○ (D) 30",
    "answer": "(C) 25",
    "diagramUrl": "assets/questions/q_phy_galileo_inclined_plane_length_084.png",
    "solution": "○ 詳細物理觀念與幾何比例計算步驟： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790592967731,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細物理觀念與幾何比例計算步驟： 故選 (C)。"
  },
  {
    "id": "q_phy_newton_first_law_true_statements_085",
    "examPeriod": "二段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "牛頓第一運動定律（慣性定律）與合力為零之運動狀態分析",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【牛頓第一運動定律四大黃金迷思破除】：\n1. **合力為零時的運動狀態**：合力為零不代表靜止！物體若原本有速度，在合力為零時將保持『等速度直線運動』（速度不為零，排除 A、C）。\n2. **水平桌面靜止物體的受力**：靜止在桌面上的物體並非不受力，而是受到向下『重力』與向上『桌面支持力』相互抵銷，合力等於零（排除 B）。\n3. **伽利略斜面實驗的理想假設**：現實世界中摩擦力無法完全消除，因此伽利略係在『無摩擦力』的理想假設下，利用推論得出慣性概念（正解 D）！",
    "stem": "下列有關牛頓第一運動定律的敘述，何者正確？\n\n○ (A) 只有當物體所受合力不等於零時，速度才不為零\n○ (B) 靜置在水平桌面上的物體，不受任何外力作用\n○ (C) 當物體不受任何外力作用時，必為靜止狀態\n○ (D) 伽利略的實驗結果，必須是在沒有摩擦力的假設下進行才能得到",
    "answer": "(D) 伽利略的實驗結果，必須是在沒有摩擦力的假設下進行才能得到",
    "diagramUrl": "",
    "solution": "○ 詳細選項迷思剖析與診斷： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790592995751,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細選項迷思剖析與診斷： 故選 (D)。"
  },
  {
    "id": "q_phy_bus_brake_inertia_friction_086",
    "examPeriod": "二段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "公車煞車傾斜現象：慣性定律與腳底靜摩擦力之作用",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【公車煞車向前傾斜現象雙重機制】：\n1. **(甲) 慣性定律（上半身向前傾）**：公車煞車時，乘客上半身因慣性欲保持原本向前的運動狀態，因而相對於車廂向前傾斜。\n2. **(丙) 摩擦力的存在（雙腳平穩站立）**：乘客雙腳與公車地板間存在『靜摩擦力』，使雙腳隨車體一同減速靜止；若無摩擦力，乘客腳底將向前滑倒！\n3. ❌ **迷思警告 (乙)**：乘客並未受到任何『向前的外在推力』！向前傾斜純粹為上半身維持原速度之慣性表現。",
    "stem": "平穩站在前進中公車內的乘客，當煞車時，乘客上身會稍向車頭方向前傾，這是由於下列什麼原因造成？(甲)慣性定律；(乙)受到向前的推力；(丙)摩擦力的存在。\n\n○ (A) 甲乙\n○ (B) 甲丙\n○ (C) 甲乙丙\n○ (D) 以上皆非",
    "answer": "(B) 甲丙",
    "diagramUrl": "",
    "solution": "○ 詳細物理機制與原因解析： 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790593010021,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細物理機制與原因解析： 故選 (B)。"
  },
  {
    "id": "q_phy_constant_velocity_car_net_force_087",
    "examPeriod": "二段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "等速度運動之受力平衡（外力相互抵銷，合力等於零）",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【等速度運動受力三大黃金鐵則】：\n1. **等速度運動 ＝ 加速度 $a = 0$ ＝ 合力 $F_{\\text{合}} = 0$**！\n2. **有外力不代表合力不為零**：汽車在公路上行駛時受到引擎向前的動力、向後的空氣阻力與滾動摩擦力，外力確實存在，但方向相反大小相等，**外力相互抵銷使合力等於零**（選 C）！\n3. ❌ **常見陷阱 (A)**：『不受任何外力』僅存在於深空理想狀況，汽車在公路上必定受到重力、支持力、阻力等外力作用。",
    "stem": "一輛汽車在公路上等速度行駛，下列敘述何者正確？\n\n○ (A) 不受任何外力作用\n○ (B) 受外力作用，合力不為零\n○ (C) 受外力作用，合力等於零\n○ (D) 受外力作用，加速度不是零。",
    "answer": "(C) 受外力作用，合力等於零",
    "diagramUrl": "",
    "solution": "○ 詳細受力與運動狀態剖析： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790593033285,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細受力與運動狀態剖析： 故選 (C)。"
  },
  {
    "id": "q_phy_horse_rider_jump_trajectory_088",
    "examPeriod": "二段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "運動獨立性與慣性：等速馬背上垂直跳起的運動軌跡（對地觀察者為斜拋運動）",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【運動觀察者與運動獨立性雙重視角】：\n1. **對馬背上的騎師（相對視角）**：騎師與馬保持相同的水平速度，跳起後水平位移同步，故看自己僅為『鉛直上拋與下落』。\n2. **對地面靜止觀察者（絕對視角）**：\n   - 水平方向：因慣性保持與馬相同的『等速度運動』。\n   - 垂直方向：受跳起推力與重力作用，進行『鉛直上拋與自由落體』。\n   - 兩方向運動獨立合成：水平等速 ＋ 垂直上拋 ＝ **斜向拋射運動（拋物線軌跡）**（選 D）！",
    "stem": "騎師表演騎術時，自等速度運動的馬背上垂直跳起（相對於馬的位置），對地面的觀察者而言，騎師的運動狀態為下列何者？\n\n○ (A) 自由落體\n○ (B) 鉛直上拋\n○ (C) 水平等速\n○ (D) 向前斜向拋射。（補充題）",
    "answer": "(D) 向前斜向拋射。（補充題）",
    "diagramUrl": "",
    "solution": "○ 詳細運動獨立性與軌跡合成解析： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790593070436,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細運動獨立性與軌跡合成解析： 故選 (D)。"
  },
  {
    "id": "q_phy_xt_graph_cart_net_force_089",
    "examPeriod": "二段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "位置對時間圖 (x-t 圖) 的斜率代表速度與合力關係分析",
    "uploadDate": "2026-09-22",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【x-t 圖斜率與合力判定黃金法則】：\n1. **x-t 圖斜率 ＝ 速度 $v$**！\n   - $0 \\sim 2$ 秒：圖形為斜直線 $\\Rightarrow$ 速度常數 $v = 5 \\text{ m/s}$（等速度運動，加速度 $a = 0$）。\n   - $2 \\sim 4$ 秒：圖形為水平線 $\\Rightarrow$ 靜止狀態 $v = 0$（加速度 $a = 0$）。\n   - $4 \\sim 8$ 秒：圖形為斜直線 $\\Rightarrow$ 等速度反向運動 $v = -2.5 \\text{ m/s}$（加速度 $a = 0$）。\n2. **全區間合力判定**：在 $0 \\sim 8$ 秒內，每一段的加速度 $a$ 皆為零，依 $F_{\\text{合}} = ma$，滑車所受到的**合力全區間皆為零**（選 D）！",
    "stem": "一質量為 600 公克的滑車做直線運動，其位置 (x) 與時間 (t) 的關係如圖所示，則下列哪一段時間內，滑車受力最大？\n\n○ (A) 0～2 秒\n○ (B) 2～4 秒\n○ (C) 4～8 秒\n○ (D) 以上合力都是零",
    "answer": "(D) 以上合力都是零",
    "diagramUrl": "assets/questions/q_phy_xt_graph_cart_net_force_089.png",
    "solution": "○ 詳細 x-t 圖形解析與加速度判讀步驟： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-22",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21",
      "2026-09-28"
    ],
    "lastReviewedMonday": "2026-09-28",
    "lastReviewedDate": "2026-10-03",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790593236321,
        "isMastered": false
      },
      {
        "date": "2026-10-03",
        "monday": "2026-09-28",
        "timestamp": 1791037740084,
        "isMastered": true
      }
    ],
    "explanation": "○ 詳細 x-t 圖形解析與加速度判讀步驟： 故選 (D)。"
  },
  {
    "id": "q_bio_selective_breeding_sweet_pepper_090",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "人工選擇（育種）與有性生殖（雜交培育與種子繁殖）〔110.會考補考〕",
    "uploadDate": "2026-09-23",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【育種與基因改造概念辨析】：\n1. **人為篩選（育種）不等於基因改造**：傳統雜交培育是利用生物自身的遺傳變異進行人為選擇，並未轉移外源基因。\n2. **雜交與種子繁殖皆為「有性生殖」**：產生精細胞與卵細胞結合形成受精卵，並發育為種子，此過程必定經過「有性生殖」！",
    "stem": "農民從辣椒植株中挑選出果實含辣椒素較少的種子，經過多次的雜交培育篩選而得到不含辣椒素的彩色甜椒植株。關於彩色甜椒植株的敘述，下列何者最合理？〔110.會考補考〕\n\n○ (A) 是一種基因改造生物\n○ (B) 是經過大自然的篩選\n○ (C) 其培育過程中需經有性生殖\n○ (D) 比辣椒植株更能適應自然環境",
    "answer": "(C) 其培育過程中需經有性生殖",
    "diagramUrl": "",
    "solution": "正確：題目提及「雜交培育」與利用「種子」進行繁殖。雜交需要經過花粉（精細胞）與胚珠（卵細胞）的受精作用，產生種子發育為新植株，故培育過程必定需要經過有性生殖。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-23",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790593314870,
        "isMastered": true
      }
    ],
    "explanation": "正確：題目提及「雜交培育」與利用「種子」進行繁殖。雜交需要經過花粉（精細胞）與胚珠（卵細胞）的受精作用，產生種子發育為新植株，故培育過程必定需要經過有性生殖。 故選 (C)。"
  },
  {
    "id": "q_math_triangle_parallel_segment_ratio_091",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形過頂點輔助平行線與截線段比例計算",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-09-28",
    "mondayDates": [
      "2026-09-28"
    ],
    "weekLabel": "2026-09-28 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【破題關鍵輔助線】：當圖形中無直接平行線時，過點 B 作線段 BG 平行 DF，即可建立兩個相似三角形（△EBG 與 △ACD），利用比例傳遞連比求解！",
    "stem": "如圖，線段 AB : BC ＝ 線段 EF : BF ＝ 3 : 1，則線段 CD : DE ＝ ？\n\n○ (A) 2 : 7\n○ (B) 3 : 5\n○ (C) 3 : 7\n○ (D) 4 : 9",
    "answer": "(D) 4 : 9",
    "diagramUrl": "assets/questions/q_math_triangle_parallel_segment_ratio_091.png",
    "solution": "F 平行 BG，依平行線截比例線段定理： 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-23",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "F 平行 BG，依平行線截比例線段定理： 故選 (D)。"
  },
  {
    "id": "q_math_perpendicular_lines_ratio_092",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "多重垂直線段平行性質與雙相似三角形比值聯立",
    "uploadDate": "2026-09-23",
    "mondayDate": "2026-09-21",
    "mondayDates": [
      "2026-09-21"
    ],
    "weekLabel": "2026-09-21 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【同垂直於同直線則互相平行】：線段 AB、HD、GF 均垂直於底邊 BF，故三者互相平行！分別在 △ABE 與 △CGF 中利用相似三角形對應邊比例，列出代數方程式聯立求解！",
    "stem": "如圖，線段 AB 垂直 BF，線段 HD 垂直 BF，線段 GF 垂直 BF，線段 AE 與 CG 相交於 H 點。若線段 AB : HD : GF ＝ 2 : 1 : 3，線段 BC ＝ EF，則線段 CD : DE ＝ ？\n\n○ (A) 2 : 3\n○ (B) 3 : 2\n○ (C) 3 : 4\n○ (D) 4 : 3",
    "answer": "(A) 2 : 3",
    "diagramUrl": "assets/questions/q_math_perpendicular_lines_ratio_092.png",
    "solution": "B、HD、GF 均垂直於底邊 BF，故線段 AB // HD // GF。 故選 (A)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-09-23",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-09-21"
    ],
    "lastReviewedMonday": "2026-09-21",
    "lastReviewedDate": "2026-09-28",
    "reviewHistory": [
      {
        "date": "2026-09-28",
        "monday": "2026-09-21",
        "timestamp": 1790590859079,
        "isMastered": true
      }
    ],
    "explanation": "B、HD、GF 均垂直於底邊 BF，故線段 AB // HD // GF。 故選 (A)。"
  },
  {
    "id": "q_math_triangle_cevian_intersection_ratio_093",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形內分線交點比例與過頂點作平行輔助線",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【交點線段比經典輔助線】：過 D 點作線段 DG 平行 BE 交 AC 於 G 點，利用 △BCE 算出線段 DG 長度比例，再移至 △ADG 計算線段 AF 與 AD 之比！",
    "stem": "如圖，在 △ABC 中，線段 AD 與 BE 相交於 F 點。若線段 BD : CD ＝ 2 : 1，線段 BF : EF ＝ 6 : 1，則線段 AF : DF ＝ ？\n\n○ (A) 2 : 5\n○ (B) 3 : 4\n○ (C) 3 : 5\n○ (D) 4 : 5",
    "answer": "(B) 3 : 4",
    "diagramUrl": "assets/questions/q_math_triangle_cevian_intersection_ratio_093.png",
    "solution": "E，交線段 AC 於 G 點。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "E，交線段 AC 於 G 點。 故選 (B)。"
  },
  {
    "id": "q_math_trapezoid_parallel_lines_ratio_094",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "梯形/對角線三平行線比例性質與相似三角形判定",
    "uploadDate": "2026-10-02",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【沙漏型相似三角形對應邊比例】：平行線 CD // AB 形成 △OAB ～ △OCD。比例式為 OA : OC ＝ OB : OD，交叉交換內項即得 OA : OB ＝ OC : OD！",
    "stem": "如圖，若線段 CD // EF // AB，則下列何者正確？\n\n○ (A) 線段 OD : OC ＝ OE : OF\n○ (B) 線段 CE : DF ＝ EF : CD\n○ (C) 線段 OA : OB ＝ OC : OD\n○ (D) 線段 AB : CD ＝ OA : OD",
    "answer": "(C) 線段 OA : OB ＝ OC : OD",
    "diagramUrl": "assets/questions/q_math_trapezoid_parallel_lines_ratio_094.png",
    "solution": "D // AB，對頂角相等且內錯角相等，故 △OAB ～ △OCD。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "D // AB，對頂角相等且內錯角相等，故 △OAB ～ △OCD。 故選 (C)。"
  },
  {
    "id": "q_math_similar_rectangle_108",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "相似多邊形對應邊比例與多重情況討論",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：1. 漏考慮邊長對應方向：許多同學只考慮了「長對長、寬對寬」的第一種情況（算出 x ＝ 4），而忽略了「長對寬、寬對長」的第二種情況（算出 x ＝ 13），導致少寫一個答案。2. 相似矩形的對應邊判定：兩個矩形相似時，較長邊與較短邊的比值固定為 5 : 4，新矩形擴展後的兩邊均可能作為較長邊或較短邊討論！",
    "stem": "已知矩形的長為 15、寬為 12，若將長增加 5，則寬應增加多少才會與原矩形相似？",
    "answer": "4 或 13",
    "diagramUrl": "",
    "solution": "○ 詳細觀念與解題步驟：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "○ 詳細觀念與解題步驟："
  },
  {
    "id": "q_math_similar_trapezoid_109",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "相似梯形與中間平行線段與腰長比例",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：1. 相似梯形中間平行線段求法：若梯形被平行線分成兩個相似梯形，則中間平行線段 EF 為上下底長度的「幾何平均數」（EF 的平方 ＝ AD × BC ＝ 3 × 8 ＝ 24，故 EF ＝ √24 ＝ 2√6），非算術平均數！2. 對應腰長比等於對應底邊比：因為梯形 AEFD 相似於梯形 EBCF，其腰長比 AE : BE 正好等於上梯形與下梯形的對應底邊比 AD : EF ＝ 3 : 2√6！",
    "stem": "如圖，在梯形 ABCD 中，E、F 兩點分別在線段 AB、線段 CD 上，且線段 EF // 線段 BC。若梯形 AEFD 和梯形 EBCF 相似，線段 AD ＝ 3，線段 BC ＝ 8，則線段 AE : 線段 BE ＝ ________。",
    "answer": "3 : 2√6",
    "diagramUrl": "assets/questions/q_math_similar_trapezoid_109.png",
    "solution": "○ 詳細觀念與解題步驟：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "○ 詳細觀念與解題步驟："
  },
  {
    "id": "q_math_isosceles_triangle_golden_ratio_110",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "黃金等腰三角形與相似三角形判斷求底邊",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：1. 黃金三角形的角度特徵：底角平分後分出的 △BDC 與原 △ABC 相似（頂角 36°，底角 72°）。2. 相似對應邊成比例與一元二次方程式解：利用 AB : BD ＝ AC : BC ＝ BC : CD，設 BC ＝ x，導出 x² ＋ 2x － 4 ＝ 0，以公式解求得 x ＝ -1 ＋ √5（負值不合）！",
    "stem": "如圖，等腰 △ABC 中，線段 AB ＝ 線段 AC ＝ 2，若 ∠ABC 的角平分線 BD 交線段 AC 於 D 點，且線段 AD ＝ 線段 BD ＝ 線段 BC，則：\n(1) △ABC ～ ________。\n(2) 線段 BC ＝ ________。",
    "answer": "(1) △BDC   (2) -1 + √5",
    "diagramUrl": "assets/questions/q_math_isosceles_triangle_golden_ratio_110.png",
    "solution": "○ 詳細觀念與解題步驟：",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "○ 詳細觀念與解題步驟："
  },
  {
    "id": "q_sci_geo_landform_geological_activity_111",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "審題不清",
    "concept": "地貌景觀與地表地質作用對應（風蝕/風搬運沉積/冰蝕）",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：風吹砂是強風將海岸沙粒吹向陸地坡面堆積而成的「風力搬運與沉積現象」，並非侵蝕作用！常見的風蝕地貌為「風稜石」與「風蝕蕈狀岩」，切勿混淆搬運/沉積與侵蝕作用。",
    "stem": "有關地貌景觀與地表地質活動的對應，下列何者錯誤？\n\n○ (A) U 型谷——冰川的侵蝕作用\n○ (B) 屏東恆春的風吹砂——風的侵蝕與搬運現象\n○ (C) 新北市富貴角的風稜石（指稜角分明的岩石）——強風挾帶砂粒侵蝕\n○ (D) 沙洲——海流的沉積作用",
    "answer": "(B) 屏東恆春的風吹砂——風的侵蝕與搬運現象",
    "diagramUrl": "",
    "solution": "錯誤（選此項）：屏東恆春的「風吹砂」是強勁落山風將海岸沙粒吹向陸地坡面沉積，屬於風的搬運與沉積現象，而非風蝕現象。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-10-12"
    ],
    "lastReviewedMonday": "2026-10-12",
    "lastReviewedDate": "2026-10-12",
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791792834811,
        "isMastered": true
      }
    ],
    "explanation": "錯誤（選此項）：屏東恆春的「風吹砂」是強勁落山風將海岸沙粒吹向陸地坡面沉積，屬於風的搬運與沉積現象，而非風蝕現象。 故選 (B)。"
  },
  {
    "id": "q_sci_geo_frost_wedging_temp_range_112",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "凍融作用/結晶物理風化與氣溫冰點震盪條件",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：水結冰膨脹物理風化（凍融作用/楔裂作用）的必要條件是氣溫必須「跨越 0°C 冰點（高於 0°C 與低於 0°C 來回震盪）」！若氣溫全在 0°C 以下（如 -8°C ~ -5°C），水會一直保持固體冰塊，無法重複滲入岩縫融化與結晶膨脹。",
    "stem": "在高山或高緯度地區，若容易因為水結冰膨脹，而產生風化作用，則此地氣溫變化範圍最可能為下列何者？\n\n○ (A) -8°C ～ -5°C\n○ (B) 3°C ～ 10°C\n○ (C) -20°C ～ -10°C\n○ (D) -5°C ～ 5°C",
    "answer": "(D) -5°C ～ 5°C",
    "diagramUrl": "",
    "solution": "5°C ～ 5°C：氣溫在 0°C 上下震盪，白天融化滲入、夜晚結冰膨脹，最容易引發結晶風化與楔裂作用！ 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-10-12"
    ],
    "lastReviewedMonday": "2026-10-12",
    "lastReviewedDate": "2026-10-12",
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791792871326,
        "isMastered": true
      }
    ],
    "explanation": "5°C ～ 5°C：氣溫在 0°C 上下震盪，白天融化滲入、夜晚結冰膨脹，最容易引發結晶風化與楔裂作用！ 故選 (D)。"
  },
  {
    "id": "q_sci_geo_iron_mineral_oxidation_color_113",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "含鐵礦物化學風化（氧化作用）與岩石呈紅褐色特徵",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：含鐵礦物發生「化學風化（氧化作用）」會生成紅褐色的氧化鐵（三價鐵 Fe₂O₃），這是許多土壤（如紅土）與岩石表面呈現紅褐色的主要原因。",
    "stem": "岩石中含鐵礦物氧化會使岩石表面呈現何種顏色？\n\n○ (A) 黑色\n○ (B) 白色\n○ (C) 紅褐色\n○ (D) 藍色",
    "answer": "(C) 紅褐色",
    "diagramUrl": "",
    "solution": "○ 詳細觀念與選項剖析： 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "unmastered",
    "reviewedMondays": [
      "2026-10-05"
    ],
    "lastReviewedMonday": "2026-10-05",
    "lastReviewedDate": "2026-10-12",
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791793187114,
        "isMastered": false
      }
    ],
    "explanation": "○ 詳細觀念與選項剖析： 故選 (C)。"
  },
  {
    "id": "q_sci_geo_sedimentary_rock_grain_size_114",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "常見沉積岩碎屑顆粒粒徑大小比較（礫岩＞砂岩＞頁岩）",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：沉積岩碎屑顆粒粒徑由粗到細的標準順序為「礫岩（＞2mm）＞ 砂岩（0.0625~2mm）＞ 頁岩（＜0.0625mm）」！記憶口訣：「大礫、中砂、細頁泥」。",
    "stem": "下列常見的沉積岩中，依照沉積物的顆粒大小由粗至細依序為何？\n\n○ (A) 砂岩 ＞ 礫岩 ＞ 頁岩\n○ (B) 礫岩 ＞ 頁岩 ＞ 砂岩\n○ (C) 礫岩 ＞ 砂岩 ＞ 頁岩\n○ (D) 頁岩 ＞ 礫岩 ＞ 砂岩",
    "answer": "(C) 礫岩 ＞ 砂岩 ＞ 頁岩",
    "diagramUrl": "",
    "solution": "onglomerate）：碎屑顆粒最大，粒徑大於 2 mm。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 2,
    "consecutiveMastered": 1,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": true,
    "reviewStatus": "reviewed",
    "lastReviewDecision": "mastered",
    "reviewedMondays": [
      "2026-10-12"
    ],
    "lastReviewedMonday": "2026-10-12",
    "lastReviewedDate": "2026-10-12",
    "reviewHistory": [
      {
        "date": "2026-10-12",
        "monday": "2026-10-12",
        "timestamp": 1791793294016,
        "isMastered": true
      }
    ],
    "explanation": "onglomerate）：碎屑顆粒最大，粒徑大於 2 mm。 故選 (C)。"
  },
  {
    "id": "q_sci_geo_metamorphic_protolith_sources_115",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "變質岩母岩來源與高溫高壓變質作用機制",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：變質岩的母岩可以是「火成岩、沉積岩、或是原本的變質岩」！只要經歷地底深處的高溫高壓，三種岩石皆可再發生變質作用。",
    "stem": "變質岩是由下列哪些岩石經由高溫、高壓的作用而形成的？\n(甲) 火成岩 ； (乙) 沉積岩 ； (丙) 變質岩\n\n○ (A) 僅(甲)(乙)\n○ (B) 僅(乙)(丙)\n○ (C) 僅(甲)(丙)\n○ (D) (甲)(乙)(丙)",
    "answer": "(D) (甲)(乙)(丙)",
    "diagramUrl": "",
    "solution": "故(甲)(乙)(丙)三者皆可，正確答案選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "故(甲)(乙)(丙)三者皆可，正確答案選 (D)。"
  },
  {
    "id": "q_sci_geo_mineral_applications_amethyst_corundum_116",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "審題不清",
    "concept": "常見礦物特徵與工業/寶石應用（石英/長石/金剛石/剛玉）",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：紫色石英是「紫水晶」而非藍寶石！「藍寶石」與「紅寶石」的礦物成分均為「剛玉（莫氏硬度 9）」，切勿將石英與剛玉混淆。",
    "stem": "關於礦物的應用，下列敘述何者錯誤？\n\n○ (A) 由長石變成的黏土礦物，是燒製陶瓷的主要原料\n○ (B) 石英砂可用來製造玻璃\n○ (C) 鑽石（金剛石）硬度極大，是極佳的切割材料\n○ (D) 結晶良好的紫色石英即為藍寶石的材料",
    "answer": "(D) 結晶良好的紫色石英即為藍寶石的材料",
    "diagramUrl": "",
    "solution": "錯誤（選此項）：結晶良好的紫色石英是紫水晶；而藍寶石與紅寶石的礦物材料均為剛玉（硬度 9），非石英！ 故選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "錯誤（選此項）：結晶良好的紫色石英是紫水晶；而藍寶石與紅寶石的礦物材料均為剛玉（硬度 9），非石英！ 故選 (D)。"
  },
  {
    "id": "q_sci_geo_limestone_formation_biological_chemical_117",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "石灰岩（碳酸鈣）沉積形成機制（生物外骨骼堆積與化學沉澱）",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：石灰岩既可以是「生物骨骸碎屑堆積（珊瑚、貝殼）」形成的生物沉積岩，也可以是「水溶液中碳酸鈣沉澱析出（如鐘乳石）」形成的化學沉積岩，三者皆正確！",
    "stem": "石灰岩也是一種沉積岩，試問下列哪些是形成石灰岩的方式？\n(甲)珊瑚骨骼的遺骸堆積形成的 ； (乙)貝殼碎屑堆積形成的 ； (丙)溶解在水中的碳酸鈣沉澱形成的\n\n○ (A) 僅(甲)(乙)\n○ (B) 僅(乙)(丙)\n○ (C) 僅(甲)(丙)\n○ (D) (甲)(乙)(丙)",
    "answer": "(D) (甲)(乙)(丙)",
    "diagramUrl": "",
    "solution": "故(甲)(乙)(丙)三者皆為石灰岩形成方式，正確答案選 (D)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "故(甲)(乙)(丙)三者皆為石灰岩形成方式，正確答案選 (D)。"
  },
  {
    "id": "q_sci_geo_sandstone_thin_section_options_118",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "審題不清",
    "concept": "砂岩顯微鏡薄片碎屑粒徑（0.0625~2mm）與膠結物質辨識",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：砂岩碎屑粒徑介於 0.0625 ~ 2mm 之間，且碎屑顆粒之間充填著點狀膠結物質（如黏土或方解石）。若標尺為 5mm 且顆粒直徑達 3~4mm 則為礫岩；若無膠結物質且結晶嵌合則為火成岩/變質岩。",
    "stem": "小翰用地質鐵錘於野外敲下一岩石標本，製成薄片在顯微鏡下觀察及測量後，比對書上的描述，判斷其為砂岩。已知砂岩是由岩石碎屑沉積後，經過壓密、膠結等過程而形成。碎屑可以是其他岩石或礦物，而膠結這些碎屑的物質可能是方解石或黏土。砂岩的碎屑粒徑在 0.0625 至 2mm 之間，如果碎屑粒徑過小會形成頁岩，粒徑過大會形成礫岩。則小翰觀察到的岩石薄片最接近下列哪一個圖形？\n\n○ (A) 圖形 (A)\n○ (B) 圖形 (B)\n○ (C) 圖形 (C)\n○ (D) 圖形 (D)",
    "answer": "(B) 圖形 (B)",
    "diagramUrl": "assets/questions/q_sci_geo_sandstone_thin_section_options_118.png",
    "solution": "標尺為 1 mm，顆粒直徑約 0.2～0.5 mm（介於 0.0625～2 mm 之間），且顆粒間含有細微膠結物，符合砂岩特徵！ 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "標尺為 1 mm，顆粒直徑約 0.2～0.5 mm（介於 0.0625～2 mm 之間），且顆粒間含有細微膠結物，符合砂岩特徵！ 故選 (B)。"
  },
  {
    "id": "q_sci_geo_marble_granite_slate_house_building_119",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "大理岩（遇酸冒泡）與花崗岩（堅硬建材）特徵及石板屋建材（板岩）辨析",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-12",
    "mondayDates": [
      "2026-10-05",
      "2026-10-12"
    ],
    "weekLabel": "2026-10-12 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：原住民「石板屋」的主要建材是具有平整片理構造的「板岩（或頁岩）」，非花崗岩！花崗岩主要作為高堅硬度的大樓外牆與地板建材。",
    "stem": "常被用來當作裝飾建築的石材有：(甲)大理岩 ； (乙)花崗岩，則有關這兩者的敘述，下列何者錯誤？\n\n○ (A) (甲)屬於變質岩，(乙)屬於火成岩\n○ (B) (甲)遇酸會產生氣體，(乙)則不會\n○ (C) (甲)堅固耐磨，(乙)常作為石板屋的建材\n○ (D) (甲)常見於雕刻品，(乙)常用於建材",
    "answer": "(C) (甲)堅固耐磨，(乙)常作為石板屋的建材",
    "diagramUrl": "",
    "solution": "aCO₃），遇稀鹽酸會冒出二氧化碳氣泡；花崗岩遇酸不反應。 故選 (C)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "aCO₃），遇稀鹽酸會冒出二氧化碳氣泡；花崗岩遇酸不反應。 故選 (C)。"
  },
  {
    "id": "q_soc_civ_resource_scarcity_efficiency_120",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "資源稀少性與選擇目的：追求資源最高效率運用與分配",
    "uploadDate": "2026-10-04",
    "mondayDate": "2026-10-05",
    "mondayDates": [
      "2026-10-05"
    ],
    "weekLabel": "2026-10-05 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 審題陷阱與易錯觀念：學習選擇的主要目的「並非最有節制」或「用得最少」，而是為了「將有限資源做最高效率的運用與分配」，發揮最大效益與滿足感！",
    "stem": "當資源不能無止盡的提供人們使用時，就必須權衡考量做出選擇。根據上述判斷，下列何者是我們學習選擇課題的主要目的？\n\n○ (A) 如何將資源做最有節制的運用與分配\n○ (B) 如何將資源做最高效率的運用與分配\n○ (C) 如何將資源做最多的運用與分配\n○ (D) 如何將資源做最少的運用與分配",
    "answer": "(B) 如何將資源做最高效率的運用與分配",
    "diagramUrl": "",
    "solution": "正確：資源有限下，追求「最高效率」的分配與運用是選擇課題的最主要目的。 故選 (B)。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-10-05",
    "isReviewed": false,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": null,
    "reviewedMondays": [],
    "explanation": "正確：資源有限下，追求「最高效率」的分配與運用是選擇課題的最主要目的。 故選 (B)。"
  }
];


const DELETED_KEYS_STORAGE = 'miley_deleted_question_ids_v31';
const REMOVED_MONDAYS_STORAGE = 'miley_removed_mondays_map_v1';

class DataManager {
  constructor() {
    this.questions = [];
    this.deletedIds = [];
    this.removedMondaysMap = {};
    this.init();
  }

  loadDeletedIds() {
    try {
      const stored = localStorage.getItem(DELETED_KEYS_STORAGE);
      this.deletedIds = stored ? JSON.parse(stored) : [];
    } catch (e) {
      this.deletedIds = [];
    }
  }

  saveDeletedIds() {
    try {
      localStorage.setItem(DELETED_KEYS_STORAGE, JSON.stringify(this.deletedIds));
    } catch (e) {}
  }

  loadRemovedMondaysMap() {
    try {
      const stored = localStorage.getItem(REMOVED_MONDAYS_STORAGE);
      this.removedMondaysMap = stored ? JSON.parse(stored) : {};
    } catch (e) {
      this.removedMondaysMap = {};
    }
  }

  saveRemovedMondaysMap() {
    try {
      localStorage.setItem(REMOVED_MONDAYS_STORAGE, JSON.stringify(this.removedMondaysMap || {}));
    } catch (e) {}
  }

  recordRemovedMonday(id, mondayDate) {
    if (!id || !mondayDate) return;
    if (!this.removedMondaysMap) this.removedMondaysMap = {};
    if (!Array.isArray(this.removedMondaysMap[id])) this.removedMondaysMap[id] = [];
    if (!this.removedMondaysMap[id].includes(mondayDate)) {
      this.removedMondaysMap[id].push(mondayDate);
      this.saveRemovedMondaysMap();
    }
  }

  /**
   * 徹底清理 LocalStorage 中的歷史舊版題庫快取 (Purge Legacy Storage Keys)
   * 釋放 3MB ~ 4.5MB 瀏覽器空間，根除 QuotaExceededError 記憶體上限報錯！
   */
  purgeLegacyStorageKeys() {
    try {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('miley_wrong_questions_v') && k !== STORAGE_KEY) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach(k => {
        try {
          localStorage.removeItem(k);
        } catch (e) {}
      });
      if (keysToRemove.length > 0) {
        console.log(`[Storage] 🧹 成功清理 ${keysToRemove.length} 個歷史舊版題庫快取，已釋放 ${Math.round(keysToRemove.length * 0.72 * 10) / 10} MB 瀏覽器空間！`);
      }
    } catch (e) {
      console.warn('[Storage] 清理舊版快取時發生錯誤:', e);
    }
  }

  init() {
    this.loadDeletedIds();
    this.loadRemovedMondaysMap();

    let stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) {
      // 動態搜尋所有歷史版本 miley_wrong_questions_v*，取版本號最新的一版無縫繼承！
      const legacyKeys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('miley_wrong_questions_v') && k !== STORAGE_KEY) {
          const match = k.match(/_v(\d+)$/);
          if (match) {
            legacyKeys.push({ key: k, v: parseInt(match[1], 10) });
          }
        }
      }
      legacyKeys.sort((a, b) => b.v - a.v);
      for (const item of legacyKeys) {
        const val = localStorage.getItem(item.key);
        if (val) {
          stored = val;
          console.log(`[Storage] 成功自歷史舊版本繼承進度: ${item.key}`);
          break;
        }
      }
    }

    if (stored !== null) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.questions = parsed;
        // 確保所有載入之題目皆同時具備 explanation 與 solution，徹底杜絕上一題解析殘留！
        this.questions.forEach(q => {
          const t = (q.explanation || q.solution || '').trim();
          q.explanation = t;
          q.solution = t;
        });
        } else {
          this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
        }
      } catch (e) {
        console.error('Failed to parse localStorage questions, loading seeds', e);
        this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
      }
    } else {
      // First time user visit ONLY: Initialize with demo seeds
      this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
      this.save();
    }

    // 關鍵防爆：進度載入完成後，立即徹底清除所有舊版冗餘 Key，永遠只保留 1 份資料，徹底釋放 4+ MB 空間！
    this.purgeLegacyStorageKeys();

    // 1. Immediately purge any deleted questions from loaded storage array
    if (Array.isArray(this.questions) && Array.isArray(this.deletedIds) && this.deletedIds.length > 0) {
      this.questions = this.questions.filter(q => q && !this.deletedIds.includes(q.id));
    }

    // Comprehensive split-join cleaner to purge any legacy 569X or 20474 corruption
    const cleanCorruptText = (text) => {
      if (typeof text !== 'string') return text;
      let s = text;
      if (s.includes('569X')) {
        s = s.split('569X\\frac').join('$-\\frac')
             .split('569X').join('-$');
      }
      if (s.includes('20474')) {
        s = s.split('20474').join('$$');
      }
      return s;
    };

    if (Array.isArray(this.questions)) {
      this.questions.forEach(q => {
        if (!q) return;
        ['stem', 'solution', 'concept', 'mistakeNote', 'answer'].forEach(field => {
          if (q[field]) q[field] = cleanCorruptText(q[field]);
        });
      });
    }

    // Forced Migration Patch: Ensure all recent math questions requested by Miley belong to 2026-10-05 week
    const targetNextWeekMathIds = [
      'q_math_similar_rectangle_108',
      'q_math_similar_trapezoid_109',
      'q_math_isosceles_triangle_golden_ratio_110',
      'q_math_triangle_cevian_intersection_ratio_093',
      'q_math_trapezoid_parallel_lines_ratio_094'
    ];
    if (Array.isArray(this.questions)) {
      let modified = false;
      this.questions.forEach(q => {
        if (q && targetNextWeekMathIds.includes(q.id)) {
          if (q.mondayDate !== '2026-10-05' || !Array.isArray(q.mondayDates) || !q.mondayDates.includes('2026-10-05')) {
            q.mondayDate = '2026-10-05';
            q.mondayDates = ['2026-10-05'];
            q.weekLabel = '2026-10-05 (最新週次)';
            q.nextReviewDate = '2026-10-05';
            modified = true;
          }
        }
      });
      if (modified) {
        this.save();
      }
    }

    // Auto-sync any newly added system seed questions or seed content updates
    INITIAL_SEED_DATA.forEach(seed => {
      if (Array.isArray(this.deletedIds) && this.deletedIds.includes(seed.id)) return;
      const idx = this.questions.findIndex(q => q && (q.id === seed.id || (q.stem && seed.stem && q.stem.includes('下列何者是最簡分數') && seed.stem.includes('下列何者是最簡分數'))));
      if (idx === -1) {
        this.questions.push(JSON.parse(JSON.stringify(seed)));
      } else {
        // Sync latest text, solution & links from INITIAL_SEED_DATA while preserving user edits
        this.questions[idx].stem = seed.stem;
        this.questions[idx].solution = seed.solution;
        this.questions[idx].concept = seed.concept;
        this.questions[idx].mistakeNote = seed.mistakeNote;
        this.questions[idx].diagramUrl = seed.diagramUrl;
        this.questions[idx].answer = seed.answer;

        // 智慧跨裝置進度合併：若種子資料此題已掌握，且本地尚未掌握，自動繼承掌握與已複習進度！
        if ((seed.consecutiveMastered || 0) > (this.questions[idx].consecutiveMastered || 0)) {
          this.questions[idx].consecutiveMastered = seed.consecutiveMastered;
          this.questions[idx].ebbinghausStage = seed.ebbinghausStage || 2;
          this.questions[idx].isReviewed = true;
          this.questions[idx].reviewStatus = 'reviewed';
          this.questions[idx].lastReviewDecision = seed.lastReviewDecision || 'mastered';
          this.questions[idx].lastReviewedMonday = seed.lastReviewedMonday || '2026-09-14';
          this.questions[idx].lastReviewedDate = seed.lastReviewedDate || '2026-09-19';
          if (!Array.isArray(this.questions[idx].reviewedMondays)) {
            this.questions[idx].reviewedMondays = [];
          }
          if (Array.isArray(seed.reviewedMondays)) {
            seed.reviewedMondays.forEach(m => {
              if (!this.questions[idx].reviewedMondays.includes(m)) {
                this.questions[idx].reviewedMondays.push(m);
              }
            });
          }
        }

        // Preserve user's deleted weeks in mondayDates: only set if uninitialized/empty
        if (!Array.isArray(this.questions[idx].mondayDates) || this.questions[idx].mondayDates.length === 0) {
          this.questions[idx].mondayDates = Array.isArray(seed.mondayDates) ? [...seed.mondayDates] : [seed.mondayDate || '2026-09-07'];
        }
      }
    });

    // 同步 INITIAL_SEED_DATA 週次排程，並保留本地未擊敗題目滾動至新一週的排程
    INITIAL_SEED_DATA.forEach(seed => {
      const idx = this.questions.findIndex(q => q && q.id === seed.id);
      if (idx !== -1 && Array.isArray(seed.mondayDates)) {
        const localMds = Array.isArray(this.questions[idx].mondayDates) ? this.questions[idx].mondayDates : [];
        const combined = Array.from(new Set([...seed.mondayDates, ...localMds]));
        this.questions[idx].mondayDates = combined;
        this.questions[idx].mondayDate = combined[combined.length - 1];
        this.questions[idx].weekLabel = seed.weekLabel;
      }
    });

    // Strictly purge questions before 2026-09-07 as requested by user
    if (Array.isArray(this.questions)) {
      this.questions = this.questions.filter(q => q && (q.mondayDate >= '2026-09-07' || (Array.isArray(q.mondayDates) && q.mondayDates.some(m => m >= '2026-09-07'))));
    }

    // Sanitize & auto-repair legacy or corrupt date values without overriding user edits
    if (Array.isArray(this.questions)) {
      this.questions.forEach(q => {
        if (!q.uploadDate || typeof q.uploadDate !== 'string') {
          q.uploadDate = this.getTodayDateStr();
        }
        if (!q.mondayDate || typeof q.mondayDate !== 'string' || !q.mondayDate.includes('-')) {
          q.mondayDate = this.getMondayDate(q.uploadDate);
        }
        if (!Array.isArray(q.mondayDates) || q.mondayDates.length === 0 || q.mondayDates.some(m => !m || typeof m !== 'string' || !m.includes('-'))) {
          q.mondayDates = [q.mondayDate];
        }
        if (!Array.isArray(q.reviewedMondays)) {
          q.reviewedMondays = [];
        }
      });
    }

    // Final strict purge of deleted IDs before saving
    if (Array.isArray(this.deletedIds) && this.deletedIds.length > 0) {
      this.questions = this.questions.filter(q => q && !this.deletedIds.includes(q.id));
    }

    // Auto carryover unreviewed questions to current week queue
    this.carryOverUnreviewedQuestionsToCurrentWeek();

    this.save();
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.questions));
    } catch (e) {
      console.warn('LocalStorage save failed (QuotaExceededError), executing emergency cleanup...', e);
      // 1. 緊急動作：立即徹底清除所有歷史舊版快取
      this.purgeLegacyStorageKeys();

      // 2. 清理過大的 Base64 圖片
      this.questions.forEach(q => {
        if (q.diagramUrl && q.diagramUrl.length > 50000) {
          q.diagramUrl = ''; // fallback to pure text presentation to free storage
        }
      });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.questions));
        console.log('[Storage] Saved successfully to LocalStorage after emergency purge!');
      } catch (e2) {
        console.error('Critical: LocalStorage is full even after emergency purge.', e2);
      }
    }

    // 觸發 Supabase 雲端非同步秒級同步 (Debounced 600ms)
    if (window.SyncModule && typeof window.SyncModule.scheduleCloudPush === 'function') {
      window.SyncModule.scheduleCloudPush();
    }
  }

  resetToSeed() {
    this.deletedIds = [];
    this.saveDeletedIds();
    this.removedMondaysMap = {};
    this.saveRemovedMondaysMap();
    this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
    this.save();
  }

  getAll() {
    return this.questions;
  }

  getById(id) {
    return this.questions.find(q => q.id === id);
  }

  addQuestion(qData) {
    const id = 'q_' + Date.now();
    const uploadDate = qData.uploadDate || this.getTodayDateStr();
    const mondayDate = this.getMondayDate(uploadDate);
    const mondayDates = [mondayDate];
    const weekLabel = `${mondayDate} (上傳週期)`;

    const newQuestion = {
      id,
      examPeriod: qData.examPeriod || '二段',
      subject: qData.subject || '自然/理化',
      errorReason: qData.errorReason || '觀念不懂',
      concept: qData.concept || '通用觀念',
      uploadDate,
      mondayDate,
      mondayDates,
      weekLabel,
      isGuessedOrUnstable: qData.isGuessedOrUnstable || false,
      mistakeNote: qData.mistakeNote || '',
      stem: qData.stem || '',
      answer: qData.answer || '',
      solution: qData.solution || '',
      diagramUrl: qData.diagramUrl || '',
      errorCount: qData.isGuessedOrUnstable ? 2 : 1,
      ebbinghausStage: 1,
      consecutiveMastered: 0,
      isArchived: false,
      nextReviewDate: uploadDate
    };

    this.questions.unshift(newQuestion);
    this.save();
    return newQuestion;
  }

  deleteQuestion(id) {
    if (id && !this.deletedIds.includes(id)) {
      this.deletedIds.push(id);
      this.saveDeletedIds();
    }
    this.questions = this.questions.filter(q => q.id !== id);
    this.save();
  }

  removeQuestionFromWeek(id, targetMonday) {
    const q = this.getById(id);
    if (!q) return null;

    if (targetMonday && targetMonday !== 'ALL') {
      this.recordRemovedMonday(id, targetMonday);
    }

    let mondays = Array.isArray(q.mondayDates) && q.mondayDates.length > 0
      ? q.mondayDates
      : [q.mondayDate || this.getCurrentMondayDate()];

    if (targetMonday && targetMonday !== 'ALL') {
      mondays = mondays.filter(m => m !== targetMonday);
    } else {
      mondays = [];
    }

    if (mondays.length === 0) {
      this.deleteQuestion(id);
      return null;
    } else {
      q.mondayDates = mondays;
      q.mondayDate = mondays[mondays.length - 1];
      this.save();
      return q;
    }
  }

  // Check if a question belongs to a specific Monday date filter
  isQuestionInMonday(q, targetMonday) {
    if (!targetMonday || targetMonday === 'ALL') return true;
    if (!q) return false;
    const mondays = Array.isArray(q.mondayDates) && q.mondayDates.length > 0
      ? q.mondayDates
      : [q.mondayDate || this.getCurrentMondayDate()];
    return mondays.includes(targetMonday);
  }

  /**
   * 取得跨裝置 canonical 確定性排序鍵值 (Deterministic Sort Key)
   * 確保手機與電腦（跨裝置）之題目排列順序 100% 一致！
   * 麥麥最高規範：
   * 1. 第一個放進去的題目要排在第 1 題（第一頁/第一題）
   * 2. 越晚放進去的題目排在越後面（本週比較後面的題目/最後一頁/最後一題）
   */
  getQuestionSortKey(q) {
    if (!q) return '9_999999999999999_zzzz';
    
    // 依末尾題號（如 Q001 ~ Q160，依收錄先後自然遞增）做自然數序遞增排序
    let qNum = null;
    if (q.id) {
      const match = q.id.match(/_(\d+)$/);
      if (match) qNum = parseInt(match[1], 10);
    }
    if (qNum !== null && !isNaN(qNum)) {
      return `0_${String(qNum).padStart(15, '0')}_${q.id}`;
    }
    
    // 自訂上傳或時間戳記題目（如 q_1760000000000）
    let timestamp = 0;
    if (q.id) {
      const matchAny = q.id.match(/\d+/);
      if (matchAny) timestamp = parseInt(matchAny[0], 10);
    }
    const uploadDate = q.uploadDate || '2026-01-01';
    return `1_${uploadDate}_${String(timestamp).padStart(15, '0')}_${q.id}`;
  }

  /**
   * 自動跨週檢查與滾動：
   * 當跨週／新一週開始時，在手機與電腦完成同步後，自動整理上週（及過去週次）未複習的題目，
   * 將其自動編入最新一週 (currentMonday) 的複習隊列中！
   */
  carryOverUnreviewedQuestionsToCurrentWeek() {
    // 依麥麥指示：題目所屬歷史週次（mondayDates）必須保持純淨且固定，
    // 絕不自動修改歷史題目的 mondayDates，避免題目數量異常膨脹或忽多忽少！
    return 0;
  }

  isQuestionReviewed(q, mondayDate = null) {
    if (!q) return false;
    // 若在特定週次下檢視（例如 2026-10-12），檢查本題在該週是否已經被複習過
    if (mondayDate && mondayDate !== 'ALL') {
      if (Array.isArray(q.reviewedMondays) && q.reviewedMondays.includes(mondayDate)) {
        return true;
      }
      // 已連續掌握2次以上或歸檔題，視為全域已擊敗掌握
      if (q.isArchived === true || (q.consecutiveMastered || 0) >= 2) {
        return true;
      }
      // 跨週未擊敗題目滾動到新一週時，在該新一週應維持【待複習】，直到在該週被點擊作答！
      return false;
    }

    // 全站/歷史全域檢視
    if (q.isReviewed === true || q.reviewStatus === 'reviewed' || !!q.lastReviewDecision || (q.consecutiveMastered || 0) > 0) {
      return true;
    }
    if (Array.isArray(q.reviewedMondays) && q.reviewedMondays.length > 0) {
      return true;
    }
    if (Array.isArray(q.reviewHistory) && q.reviewHistory.length > 0) {
      return true;
    }
    return false;
  }

  updateQuestionMastery(id, isMastered, mondayDate = null) {
    const q = this.getById(id);
    if (!q) return null;

    const currentMonday = mondayDate || this.getCurrentMondayDate();

    // Record review decision trace for this week (作答痕跡與複習紀錄)
    if (!Array.isArray(q.reviewedMondays)) {
      q.reviewedMondays = [];
    }
    if (!q.reviewedMondays.includes(currentMonday)) {
      q.reviewedMondays.push(currentMonday);
    }
    q.lastReviewedMonday = currentMonday;
    q.lastReviewedDate = this.getTodayDateStr();
    q.lastReviewDecision = isMastered ? 'mastered' : 'unmastered';
    q.isReviewed = true;
    q.reviewStatus = 'reviewed';

    if (!Array.isArray(q.reviewHistory)) {
      q.reviewHistory = [];
    }
    q.reviewHistory.push({
      monday: currentMonday,
      date: this.getTodayDateStr(),
      isMastered: isMastered,
      timestamp: Date.now()
    });

    if (isMastered) {
      q.consecutiveMastered = (q.consecutiveMastered || 0) + 1;
      if (q.consecutiveMastered >= 2) {
        q.isArchived = true; // Formal archive after 2 consecutive mastered
      } else {
        // Increment Ebbinghaus stage
        q.ebbinghausStage = Math.min((q.ebbinghausStage || 1) * 2, 4);
      }
    } else {
      q.consecutiveMastered = 0;
      q.errorCount = (q.errorCount || 0) + 1;
      q.ebbinghausStage = 1; // Reset Ebbinghaus repetition cycle to 1st week
      
      const baseMonday = currentMonday || this.getCurrentMondayDate();
      const nextMonday = this.getNextMondayDate(baseMonday);
      if (!Array.isArray(q.mondayDates)) {
        q.mondayDates = [q.mondayDate || baseMonday];
      }
      if (!q.mondayDates.includes(nextMonday)) {
        q.mondayDates.push(nextMonday);
      }
      q.mondayDate = nextMonday;
    }

    this.save();
    return q;
  }

  // Get next Monday date string (YYYY-MM-DD) from current mondayDate (or today)
  getNextMondayDate(currentMondayDateStr) {
    let date;
    if (currentMondayDateStr && !isNaN(Date.parse(currentMondayDateStr))) {
      const parts = currentMondayDateStr.split('-');
      if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        date = new Date(year, month, day + 7);
      } else {
        date = new Date(currentMondayDateStr);
        date.setDate(date.getDate() + 7);
      }
    } else {
      date = new Date();
      const day = date.getDay();
      const diff = date.getDate() - day + (day === 0 ? -6 : 1) + 7;
      date.setDate(diff);
    }
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // Get local date string YYYY-MM-DD for today
  getTodayDateStr() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${da}`;
  }

  // Get Monday date string (YYYY-MM-DD) for any date string or Date object
  getMondayDate(dateInput) {
    let d;
    if (!dateInput) {
      d = new Date();
    } else if (typeof dateInput === 'string') {
      const parts = dateInput.split('T')[0].split('-');
      if (parts.length === 3) {
        d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      } else {
        d = new Date(dateInput);
      }
    } else if (dateInput instanceof Date) {
      d = new Date(dateInput.getTime());
    } else {
      d = new Date();
    }

    if (isNaN(d.getTime())) d = new Date();

    const day = d.getDay(); // 0 is Sunday, 1 is Monday...
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.getFullYear(), d.getMonth(), diff);

    const yyyy = monday.getFullYear();
    const mm = String(monday.getMonth() + 1).padStart(2, '0');
    const dd = String(monday.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  getCurrentMondayDate() {
    return this.getMondayDate(new Date());
  }

  // Get High Frequency Sprint Questions: errorCount >= 2 OR errorReason == '觀念不懂'
  getHighFrequencyQuestions(examPeriod = 'ALL') {
    return this.questions.filter(q => {
      const matchExam = examPeriod === 'ALL' || q.examPeriod === examPeriod;
      const isHighFreq = q.errorCount >= 2 || q.errorReason === '觀念不懂' || q.isGuessedOrUnstable;
      return matchExam && isHighFreq;
    });
  }

  // Check if a question is pending review in a specific week
  isQuestionPendingReview(q, targetMonday = null) {
    if (!q || q.isArchived) return false;
    const m = targetMonday || this.getCurrentMondayDate();
    if (!this.isQuestionInMonday(q, m)) return false;
    if (q.lastReviewedMonday === m) return false;
    if (Array.isArray(q.reviewedMondays) && q.reviewedMondays.includes(m)) return false;
    return true;
  }

  // Get Active Pending Review Questions (Not yet archived, and not yet reviewed in target week)
  getPendingReviewQuestions(targetMonday = null) {
    const m = targetMonday || this.getCurrentMondayDate();
    return this.questions.filter(q => this.isQuestionPendingReview(q, m));
  }

  // Get Tree Structure: Exam -> Monday Date (Includes current and next week folders)
  getTreeStructure() {
    const tree = {};
    const currentMonday = this.getCurrentMondayDate();
    const nextMonday = this.getNextMondayDate(currentMonday);

    tree['二段'] = {
      [currentMonday]: [],
      [nextMonday]: []
    };

    this.questions.forEach(q => {
      const exam = q.examPeriod || '二段';
      const fallbackM = q.mondayDate || this.getCurrentMondayDate();
      const mList = Array.isArray(q.mondayDates) && q.mondayDates.length > 0
        ? q.mondayDates
        : [fallbackM];
      
      if (!tree[exam]) tree[exam] = {};

      mList.forEach(monday => {
        if (!monday || typeof monday !== 'string' || !monday.includes('-')) return;
        if (!tree[exam][monday]) tree[exam][monday] = [];
        if (!tree[exam][monday].includes(q)) {
          tree[exam][monday].push(q);
        }
      });
    });
    return tree;
  }

  getAllMondayDates() {
    const mondays = new Set();
    const currentM = this.getCurrentMondayDate();
    const nextM = currentM ? this.getNextMondayDate(currentM) : null;

    if (currentM && typeof currentM === 'string' && currentM.includes('-')) mondays.add(currentM);
    if (nextM && typeof nextM === 'string' && nextM.includes('-')) mondays.add(nextM);

    this.questions.forEach(q => {
      if (q && q.mondayDate && typeof q.mondayDate === 'string' && q.mondayDate.includes('-')) {
        mondays.add(q.mondayDate);
      }
      if (q && Array.isArray(q.mondayDates)) {
        q.mondayDates.forEach(m => {
          if (m && typeof m === 'string' && m.includes('-')) {
            mondays.add(m);
          }
        });
      }
    });
    return Array.from(mondays).filter(m => m && typeof m === 'string' && m.includes('-')).sort();
  }

  // Get Concept Cloud
  getConceptCloud() {
    const conceptMap = {};
    this.questions.forEach(q => {
      if (q.concept) {
        conceptMap[q.concept] = (conceptMap[q.concept] || 0) + 1;
      }
    });
    return Object.entries(conceptMap).map(([concept, count]) => ({ concept, count }));
  }

  // ==================== CALENDAR EVENTS STORAGE ====================
  getCalendarEvents() {
    const CALENDAR_STORAGE_KEY = 'miley_study_calendar_events_v2';

    // Purge legacy v1 demo events if present
    if (localStorage.getItem('miley_study_calendar_events_v1')) {
      localStorage.removeItem('miley_study_calendar_events_v1');
    }

    const stored = localStorage.getItem(CALENDAR_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        return [];
      }
    }
    
    localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify([]));
    return [];
  }

  saveCalendarEvents(events) {
    const CALENDAR_STORAGE_KEY = 'miley_study_calendar_events_v2';
    localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(events));
  }

  addCalendarEvent(eventData) {
    const events = this.getCalendarEvents();
    const newEvent = {
      id: 'ce_' + Date.now(),
      date: eventData.date,
      type: eventData.type || 'plan',
      title: eventData.title || '學習事項'
    };
    events.push(newEvent);
    this.saveCalendarEvents(events);
    return newEvent;
  }

  deleteCalendarEvent(id) {
    let events = this.getCalendarEvents();
    events = events.filter(e => e.id !== id);
    this.saveCalendarEvents(events);
  }
}

// Global Singleton DataInstance
window.dataManager = new DataManager();
