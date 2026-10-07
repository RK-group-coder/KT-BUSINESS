/* ==========================================================================
   KT FITNESS & NUTRITION - INTERACTIVE SCRIPT
   Calculators, Dynamic Filtering, Theme Toggle & Modals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // State Management
  let cartCount = 0;
  let currentGender = 'male';
  let activeCategory = 'all';

  // Articles & Products Data (Cleared)
  const articlesData = [
  {
    "id": "art-sleep-1",
    "image": "art-cover-1.jpg",
    "title": "熬夜不是補眠就能解決：長期晚睡如何悄悄破壞免疫力與代謝平衡？",
    "category": "sleep",
    "categoryName": "睡眠作息",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "5 分鐘",
    "icon": "🌙",
    "excerpt": "探討晝夜節律失調、皮質醇異常與發炎反應，破解「週末補眠」的迷思。",
    "toc": [
      "晝夜節律失調與內分泌紊亂",
      "皮質醇過高引發慢性發炎與代謝障礙",
      "為什麼「週末一次補眠」無法修復損傷？",
      "KT 專家建議：打造規律生理時鐘修復藍圖"
    ],
    "content": "\n        <h3>一、晝夜節律失調與內分泌紊亂</h3>\n        <p>人體的生理時鐘受大腦視交叉上核（SCN）調控，根據光線變化分泌褪黑激素與皮質醇。當你經常熬夜過夜，生理時鐘與外界晝夜節律出現嚴重脫節，這會直接導致內分泌系統全面紊亂。</p>\n        \n        <h3>二、皮質醇過高引發慢性發炎與代謝障礙</h3>\n        <p>長期晚睡會使壓力荷爾蒙「皮質醇」在夜間持續高檔運作，無法順利下降。這不僅會抑制免疫系統中的 T 細胞功能、增加身體慢性發炎風險，更會降低胰島素敏感度，使血糖無法有效進入肌肉利用，進而轉化為內臟脂肪。</p>\n\n        <h3>三、為什麼「週末一次補眠」無法修復損傷？</h3>\n        <p>許多上班族習慣平日熬夜、週末睡到中午補眠。研究指出，這種「社交時差（Social Jetlag）」反而會進一步破壞晝夜節律，無法補回平日損失的深層睡眠時間，代謝損傷與神經疲勞依然存在。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：規律睡眠修復藍圖</h4>\n          <ul>\n            <li>每日固定起床時間（誤差不超過 30 分鐘）</li>\n            <li>起床後 10 分鐘內接受自然陽光照射，抑制褪黑激素並校正生理時鐘</li>\n            <li>睡前 1 小時遠離手機與高光螢幕，啟動褪黑激素自然分泌</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-sleep-3",
    "image": "art-cover-3.jpg",
    "title": "晚睡與肥胖的隱形連結：缺乏睡眠如何讓飢餓素暴增、瘦素失靈？",
    "category": "sleep",
    "categoryName": "睡眠作息",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "5 分鐘",
    "icon": "🍔",
    "excerpt": "現代人常將減重視為純粹的「卡路里加減法」，認為只要少吃、多動就能甩掉脂肪。然而內分泌研究證實：睡眠並非被動休息，而是身體調控荷爾蒙、重整食慾與代謝的關鍵週期。",
    "toc": [
      "睡眠、食慾與大腦的生理連結",
      "飢餓素（Ghrelin）：熬夜引爆食慾的引擎",
      "瘦素（Leptin）：飽足訊號失靈的關鍵機制",
      "皮質醇與胰島素：脂肪囤積的雙重催化劑",
      "打破惡性循環：重建代謝與睡眠的實踐方案"
    ],
    "content": "\n        <p>現代人常將減重視為純粹的「卡路里加減法」，認為只要少吃、多動就能甩掉脂肪。然而，許多嚴格控制飲食、規律運動的人，卻往往敗在夜復一夜的熬夜習慣。內分泌與代謝醫學研究已證實：睡眠並非被動的休息，而是身體調控荷爾蒙、重整食慾與代謝的關鍵週期。當睡眠時間被剝奪或晝夜節律紊亂，大腦會誤以為身體處於能量匱乏的生存危機，進而開啟一連串強烈的「渴望進食」訊號。</p>\n\n        <h3>一、 睡眠、食慾與大腦的生理連結</h3>\n        <p>人體下視丘負責維持能量平衡，透過神經內分泌系統精準調控飢餓感與飽足感。睡眠期間，大腦會清理代謝廢物、重置神經傳導物質，並校準荷爾蒙分泌節律。</p>\n        <p>當睡眠不足（例如每晚少於 6 小時）時，下視丘接收到的不是休息訊號，而是壓力與威脅訊號。此時，掌管情緒、衝動與獎勵機制的大腦杏仁核（Amygdala）活躍度顯著上升，而負責理性判斷、抑制衝動的前額葉皮質（Prefrontal Cortex）功能則受到抑制。這解釋了為什麼熬夜時人們不僅食量增加，更會對高糖、高油脂的精緻加工食品產生無法抗拒的渴望。</p>\n\n        <h3>二、 飢餓素（Ghrelin）：熬夜引爆食慾的引擎</h3>\n        <p>飢餓素主要由胃黏膜細胞分泌，是人體內少數能直接刺激下視丘弓狀核、傳達「該吃東西了」的促食慾荷爾蒙。在正常作息下，飢餓素水平在進食前升高、進食後迅速下降。</p>\n        <p>研究顯示，僅僅連續兩晚睡眠不足 5 小時，人體血液中的飢餓素濃度即可暴增 20% 至 30%。飢餓素除了發送胃部空虛訊號，還會直接作用於中樞神經的多巴胺獎勵系統，放大食物帶來的愉悅感。到了深夜，這股生理衝動會轉化為強烈的「夜食症候群（Night Eating Syndrome）」，驅使人在睡前翻找洋芋片、鹹酥雞或泡麵等高能量密度食物。</p>\n\n        <h3>三、 瘦素（Leptin）：飽足訊號失靈的關鍵機制</h3>\n        <p>與飢餓素相互制衡的另一端，是由脂肪細胞分泌的「瘦素」。瘦素的主要職責是向大腦回報體內儲存的能量狀況；當能量充足時，瘦素水平上升，促使大腦關閉飢餓感、提升能量消耗。</p>\n        <p>長期熬夜與睡眠剝奪會使血液中的瘦素基礎濃度顯著下滑（平均下降 15% 至 20%）。更嚴重的是，睡眠不足誘發的全身性低度慢性發炎，會干擾下視丘的瘦素受體，產生「瘦素阻抗（Leptin Resistance）」。這意味著即使體內脂肪充足、晚餐已經吃飽，大腦依然無法接收到飽足訊號，將身體誤判為「極度饑荒」，持續發出進食指令並降低靜止代謝率。</p>\n\n        <h3>四、 皮質醇與胰島素：脂肪囤積的雙重催化劑</h3>\n        <p>晚睡對體重的破壞，並不僅止於食慾荷爾蒙的失衡，更深層的危害在於壓力荷爾蒙與血糖調節系統的崩潰。</p>\n        <p><strong>皮質醇（Cortisol）持續飆高：</strong>正常情況下，皮質醇濃度在早晨達到高峰以喚醒身體，夜間則降至低點以利入眠。晚睡與睡眠不足會強行維持交感神經亢奮，導致皮質醇夜間維持高檔。高濃度的皮質醇會促使內臟脂肪細胞上的受體活化，將多餘熱量以最危險的型態堆積在腹部與肝臟。</p>\n        <p><strong>急性胰島素敏感度下降：</strong>臨床試驗發現，單次睡眠少於 4 小時，人體的胰島素敏感度可能下降高達 25% 至 30%，其代謝狀態幾乎等同於早期糖尿病患者。進入體內的碳水化合物無法有效被肌肉細胞利用，反而在高胰島素水平的推動下加速轉化為三酸甘油酯囤積。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 打破惡性循環：重建代謝與睡眠的實踐方案</h4>\n          <ul>\n            <li><strong>鎖定穩定的起床時間：</strong>即使前一晚較晚入睡，也應在固定時間起床並接觸晨光 10 至 15 分鐘，透過視網膜光受體重置視交叉上核（SCN）的主時鐘，維持褪黑激素分泌節律。</li>\n            <li><strong>設立「睡前 3 小時禁食」緩衝區：</strong>睡前進食會迫使消化系統加班運作、刺激胰島素分泌，阻礙夜間生長激素與深層睡眠的啟動。</li>\n            <li><strong>優化晚餐宏量營養素配置：</strong>晚餐以優質蛋白質（如鮭魚、雞胸肉、豆腐）與複合碳水化合物為主，避免精緻高糖飲食造成睡前血糖驟降，降低深夜誘發飢餓素激增的機率。</li>\n            <li><strong>切斷睡前藍光刺激：</strong>睡前 60 分鐘關閉平板、電腦與手機螢幕，或改採暖色低光源，保護褪黑激素自然分泌，確保身體能順利進入深層慢波睡眠。</li>\n          </ul>\n        </div>\n"
  },
  {
    "id": "art-hydration-1",
    "image": "art-cover-4.jpg",
    "title": "不渴不代表水分充足！從尿液顏色看懂身體的缺水訊號",
    "category": "other",
    "categoryName": "其他",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "5 分鐘",
    "icon": "💧",
    "excerpt": "脫水對認知功能與能量水平的影響、每日飲水量公式（體重 × 30~40ml）。",
    "toc": [
      "「口渴」是身體嚴重脫水後的最後警訊",
      "尿液顏色觀察指南：從淺黃到琥珀色的身體訊號",
      "脫水如何降低大腦專注力與重訓爆發力",
      "KT 專家建議：精準計算個人化每日黃金補水量"
    ],
    "content": "\n        <h3>一、「口渴」是身體嚴重脫水後的最後警訊</h3>\n        <p>當你感到口渴時，身體已經失去了約 1-2% 的水分。此時血漿滲透壓上升，血液黏稠度增加，心律與心臟負擔隨之提升，不能等到感到口渴時才補充水分。</p>\n\n        <h3>二、尿液顏色觀察指南：從淺黃到琥珀色的身體訊號</h3>\n        <p>檢視體液平衡最直觀的方式是觀察晨起與白天的尿液顏色：<br>\n        • <strong>透明無色 / 淡檸檬黃：</strong> 水分補充極佳狀態。<br>\n        • <strong>深黃色：</strong> 輕度脫水，應立即補充 300-500ml 水分。<br>\n        • <strong>琥珀色 / 茶色：</strong> 嚴重脫水，需大量補充水份與電解質。</p>\n\n        <h3>三、脫水如何降低大腦專注力與重訓爆發力</h3>\n        <p>體重 2% 的水分流失即可導致神經傳導速度變慢，專注力與短期記憶下降；而在重訓與爆發性運動中，脫水會導致最大力量下降 10-15%，且肌肉更容易抽筋疲勞。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：每日飲水量黃金公式</h4>\n          <ul>\n            <li><strong>日常基礎水量：</strong> 體重 (kg) × 30 ~ 35 ml (例: 70kg × 35 = 2450 ml)</li>\n            <li><strong>高強度運動日：</strong> 體重 (kg) × 40 ~ 45 ml</li>\n            <li>分次小口慢飲，避免一次暴飲導致水中毒或快速排出</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-hydration-2",
    "image": "art-cover-5.jpg",
    "title": "喝水喝對時間才有效：提升專注力、助消化與避免夜尿的「全日補水時刻表」",
    "category": "other",
    "categoryName": "其他",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "6 分鐘",
    "icon": "🥤",
    "excerpt": "飯前飯後喝水的適當間隔、運動前後補水策略、睡前補水如何避免頻尿中斷睡眠。",
    "toc": [
      "晨起第一杯水：喚醒消化道與基礎代謝",
      "飯前與飯後飲水的最佳時間間隔",
      "運動前中後的高效電解質補水原則",
      "KT 專家建議：全日補水黃金時刻表與避免夜尿策略"
    ],
    "content": "\n        <h3>一、晨起第一杯水：喚醒消化道與基礎代謝</h3>\n        <p>經歷 7-8 小時夜間睡眠，人體經由呼吸與排汗流失約 400-500ml 水分。晨起空腹飲用 300-400ml 常溫水，能迅速降低血液黏稠度、促進腸胃蠕動並啟動新陳代謝。</p>\n\n        <h3>二、飯前與飯後飲水的最佳時間間隔</h3>\n        <p>吃飯時若大量飲水，可能稀釋胃酸與消化酵素，影響蛋白質與營養素的消化吸收。建議在用餐前 30 分鐘飲水 200ml 增加飽足感，餐後 45 分鐘內則避免大量飲水。</p>\n\n        <h3>三、運動前中後的高效電解質補水原則</h3>\n        <p>運動前 2 小時補充 500ml 水分；運動中每 15-20 分鐘補充 150-200ml；運動後根據體重流失量，每少 0.5kg 補充 500-750ml 水分與適量電解質（鈉、鉀）。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：全日補水黃金時刻表</h4>\n          <ul>\n            <li>07:00 晨起空腹：350ml 常溫水</li>\n            <li>10:00 辦公專注期：400ml</li>\n            <li>12:00 午餐前 30 分鐘：250ml</li>\n            <li>15:30 下午茶代謝期：400ml</li>\n            <li>19:00 晚餐前 30 分鐘：250ml</li>\n            <li>21:30 睡前 1.5 小時：150ml (避免睡前 1 小時過量飲水引起夜尿)</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-nutrition-1",
    "image": "art-cover-6.jpg",
    "title": "碳水化合物真的是減重敵人？低碳飲食與複合碳水的聰明吃法",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "6 分鐘",
    "icon": "🍚",
    "excerpt": "單醣、精緻澱粉 vs. 複合碳水化合物；升糖指數（GI 值）對血糖與脂肪合成的影響。",
    "toc": [
      "破解碳水污名化：單醣 vs 複合碳水化合物",
      "升糖指數（GI值）與升糖負荷（GL值）對脂肪合成的威脅",
      "運動員與健身者為何絕對不能完全戒除碳水？",
      "KT 專家建議：低碳週期與複合碳水黃金攝取時機"
    ],
    "content": "\n        <h3>一、破解碳水污名化：單醣 vs 複合碳水化合物</h3>\n        <p>許多減重者談碳水色變，但關鍵在於「碳水品質」。精緻單醣（如手搖飲料、白麵包）吸收迅速，會引起血糖劇烈波動；而富含膳食纖維的複合碳水（如地瓜、燕麥、糙米）則能穩定釋放能量，維持腸道健康。</p>\n\n        <h3>二、升糖指數（GI值）對血糖與脂肪合成的威脅</h3>\n        <p>高 GI 食物會促使胰島素快速大量分泌，胰島素是人體的合成荷爾蒙，高濃度胰島素會暫停脂肪分解（脂肪氧化），並將多餘血糖優先轉化為脂肪儲存。</p>\n\n        <h3>三、運動員與健身者為何絕對不能完全戒除碳水？</h3>\n        <p>肌肉充血與高強度重訓主要依賴肌醣原（Glycogen）作為能量來源。完全切斷碳水會導致訓練強度大幅下降、肌肉分解率增加，並引發甲狀腺素下降與基代降低。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：複合碳水聰明吃法</h4>\n          <ul>\n            <li>非訓練日或靜態工作日採用低 GI 複合碳水（燕麥、糙米、黑米）</li>\n            <li>訓練後 1 小時內可補充中高 GI 碳水（如香蕉、白飯），加速肌醣原修復</li>\n            <li>控制每日總碳水比例，維持總熱量赤字才是減脂核心</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-nutrition-2",
    "image": "art-cover-7.jpg",
    "title": "吃對蛋白質才長肌不長油：動物性 vs. 植物性蛋白質的吸收率與黃金補充時機",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "6 分鐘",
    "icon": "🥩",
    "excerpt": "胺基酸完整性（PDCAAS）、每餐蛋白質合成上限（20-40g）、蛋白質熱效應。",
    "toc": [
      "蛋白質消化率校正胺基酸評分（PDCAAS）解析",
      "動物性蛋白質 vs 植物性蛋白質的胺基酸完整度比對",
      "每餐肌肉蛋白質合成（MPS）上限與分配原則",
      "KT 專家建議：活用蛋白質熱效應（TEF）發揮最大增肌效益"
    ],
    "content": "\n        <h3>一、蛋白質消化率校正胺基酸評分（PDCAAS）解析</h3>\n        <p>評價蛋白質優劣不能只看蛋白質克數，還要看胺基酸完整度與人體吸收率。雞蛋、乳清蛋白與雞胸肉的 PDCAAS 評分為滿分 1.0，擁有極高的生物利用率。</p>\n\n        <h3>二、動物性蛋白質 vs 植物性蛋白質的胺基酸完整度比對</h3>\n        <p>動物性蛋白質含有完整的 9 種必需胺基酸（EAA），特別是驅動肌肉合成關鍵的「支鏈胺基酸（Leucine 亮胺酸）」。植物性蛋白質（如豆類、穀物）往往缺乏特定必需胺基酸，蔬食者建議多元搭配補充。</p>\n\n        <h3>三、每餐肌肉蛋白質合成（MPS）上限與分配原則</h3>\n        <p>單餐攝取蛋白質超過 40-50g 後，刺激肌肉蛋白合成（MPS）的邊際效益會遞減。將每日所需的蛋白質平均分配在 3~4 餐中補充，比集中在一餐吃完效果更好。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：蛋白質黃金補充指南</h4>\n          <ul>\n            <li>重訓族群每日建議攝取量：體重 (kg) × 1.6 ~ 2.2 克</li>\n            <li>每餐攝取 25~35g 優質蛋白，並確保包含至少 2.5g 亮胺酸</li>\n            <li>利用蛋白質高熱效應（攝取熱量的 20~30% 用於消化消化）提升減脂效率</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-nutrition-3",
    "image": "art-cover-8.jpg",
    "title": "油脂不等於肥胖：Omega-3 與飽和脂肪酸的健康平衡術",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "5 分鐘",
    "icon": "🥑",
    "excerpt": "好油（抗發炎、荷爾蒙原料）與壞油（反式脂肪、過量氧化油）的分辨、日常用油挑選指南。",
    "toc": [
      "脂肪是合成睪固酮與雌激素的關鍵原料",
      "好油（Omega-3/9）抗發炎 vs 壞油（反式脂肪/氧化油）的傷害",
      "外食族常見的高發炎 Omega-6 比例失衡危機",
      "KT 專家建議：廚房烹飪用油與保健補充品的聰明選擇"
    ],
    "content": "\n        <h3>一、脂肪是合成睪固酮與雌激素的關鍵原料</h3>\n        <p>長期極端低脂飲食會直接導致體內膽固醇過低，進而影響睪固酮與雌激素的正常合成，引發情緒低落、性慾減退與肌肉流失。</p>\n\n        <h3>二、好油抗發炎 vs 壞油的傷害</h3>\n        <p>單元不飽和脂肪酸（Omega-9，如橄欖油、酪梨）與多元不飽和脂肪酸（Omega-3，如深海魚油、堅果）能有效降低低密度膽固醇（LDL）並促進抗發炎；反之，人工反式脂肪與反复高溫加熱氧化油則會引發血管內皮發炎。</p>\n\n        <h3>三、外食族常見的高發炎 Omega-6 比例失衡危機</h3>\n        <p>現代外食廣泛使用大豆油、葵花油等富含 Omega-6 的植物油，使體內 Omega-6 與 Omega-3 的比例高達 20:1（理想為 4:1 以內），這大幅增加了慢性發炎風險。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：日常用油挑選指南</h4>\n          <ul>\n            <li>涼拌與中低溫炒菜：特級初榨橄欖油、苦茶油</li>\n            <li>高溫煎炸：椰子油或高發煙點油脂</li>\n            <li>每日補充 1000-2000mg 高純度 rTG 深海魚油，矯正 Omega 比例</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-nutrition-4",
    "image": "art-cover-9.jpg",
    "title": "微量元素大功臣：常常抽筋、疲勞？你可能忽略了鎂、鉀、鈉的平衡",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "5 分鐘",
    "icon": "🍌",
    "excerpt": "電解質在神經傳導與肌肉收縮中的角色、常見缺乏族群與原型食物攝取來源。",
    "toc": [
      "電解質泵與肌肉神經傳導的生理學依賴",
      "頻繁抽筋與慢性疲勞的隱形殺手：鎂與鉀缺乏",
      "高強度訓練與低碳飲食者的鈉離子流失危機",
      "KT 專家建議：常見缺乏族群與原型食物補充指南"
    ],
    "content": "\n        <h3>一、電解質泵與肌肉神經傳導的生理學依賴</h3>\n        <p>細胞膜上的鈉鉀幫浦（Na+/K+-ATPase）與鈣鎂調控是肌肉收縮、神經衝動傳導與心律穩定的生理學基石。任何微量電解質的失衡都會直接引發生理不適。</p>\n\n        <h3>二、頻繁抽筋與慢性疲勞的隱形殺手：鎂與鉀缺乏</h3>\n        <p>鎂（Magnesium）參與體內超過 300 種酵素反應，能舒緩神經與肌肉緊繃；鉀（Potassium）則負責平衡體內水分與血壓。現代人蔬果攝取不足，極易出現夜間小腿抽筋與莫名疲勞。</p>\n\n        <h3>三、高強度訓練與低碳飲食者的鈉離子流失危機</h3>\n        <p>運動大汗淋漓或進行低碳水飲食時，胰島素下降會促使腎臟大量排出鈉離子。若此時只大量補充純水而不補充鈉，易引發低血鈉症（頭暈、無力、噁心）。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：微量元素原型食物補充來源</h4>\n          <ul>\n            <li><strong>鎂來源：</strong> 深綠色蔬菜、黑巧克力、南瓜籽、甘胺酸鎂補充品</li>\n            <li><strong>鉀來源：</strong> 香蕉、酪梨、菠菜、蕃茄、奇異果</li>\n            <li>高強度訓練日運動後補充適量含有微量礦物質的海鹽水或電解質飲</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-workout-1",
    "image": "art-cover-11.jpg",
    "title": "肌肉是在睡覺時長出來的！睡眠深度如何決定生長激素釋放與力量恢復",
    "category": "workout",
    "categoryName": "訓練恢復",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "6 分鐘",
    "icon": "🏋️",
    "excerpt": "生長激素（HGH）在深層睡眠的分泌高峰、肌纖維修復機轉、睡眠不足對重訓表現的衰退數據。",
    "toc": [
      "人體生長激素（HGH）在深層慢波睡眠的分泌高峰",
      "重訓造成的肌纖維微創修復與蛋白質合成機制",
      "睡眠剝奪導致卧推、硬舉力量下降的實驗數據",
      "KT 專家建議：將睡眠納入增肌減脂訓練菜單的關鍵法規"
    ],
    "content": "\n        <h3>一、人體生長激素（HGH）在深層慢波睡眠的分泌高峰</h3>\n        <p>重訓刺激只是提供肌肉生長的分訊號，真正的修復與生長發生在休息與睡眠期間。人體每日約 70% 的人類生長激素（HGH）是在夜間深層慢波睡眠期間分泌的。</p>\n\n        <h3>二、重訓造成的肌纖維微創修復與蛋白質合成機制</h3>\n        <p>重量訓練造成肌纖維微小的撕裂與發炎反應。在深層睡眠時，血液會大量流向肌肉組織，運送胺基酸與修復因子，完成超補償（Supercompensation）增肌進程。</p>\n\n        <h3>三、睡眠剝奪導致力量下降的實驗數據</h3>\n        <p>體育科學研究指出，當運動員連續數日睡眠不足 6 小時，卧推、硬舉與深蹲的最大力量（1RM）平均下降 8~12%，且受傷機率陡增 1.7 倍。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：恢復重於訓練黃金準則</h4>\n          <ul>\n            <li>每週安排 1~2 天完全休息日，讓中樞神經與肌肉全面修復</li>\n            <li>高強度訓練日夜間確保睡眠達 8 小時以上</li>\n            <li>配合適量谷氨醯胺（Glutamine）與蛋白質補充，降低肌纖維發炎痛感</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-workout-2",
    "image": "art-cover-12.jpg",
    "title": "晚上運動會失眠嗎？訓練強度與入睡時間的黃金間隔守則",
    "category": "workout",
    "categoryName": "訓練恢復",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "5 分鐘",
    "icon": "🌛",
    "excerpt": "劇烈運動引起的中樞神經興奮、核心體溫升高與交感神經活躍度，建議的睡前運動緩衝期。",
    "toc": [
      "高強度訓練引起的神經興奮與交感神經優位",
      "核心體溫與入睡臨界點的物理關係",
      "睡前 2-3 小時緩衝期的重要性",
      "KT 專家建議：晚間訓練後的放鬆收操與降溫儀式"
    ],
    "content": "\n        <h3>一、高強度訓練引起的神經興奮與交感神經優位</h3>\n        <p>大重量重訓與高強度間歇（HIIT）會顯著提高腎上腺素與去甲腎上腺素，使交感神經處於極度興奮狀態，心率與血壓上升，難以立刻切換至副交感神經放鬆模式。</p>\n\n        <h3>二、核心體溫與入睡臨界點的物理關係</h3>\n        <p>人體入睡需要核心體溫下降約 0.5~1°C。劇烈運動會使深層體溫上升，若在體溫高檔時嘗試入睡，大腦會不斷發出覺醒訊號。</p>\n\n        <h3>三、睡前 2-3 小時緩衝期的重要性</h3>\n        <p>運動生理學建議，高強度訓練應在計畫入睡前至少 2.5 至 3 小時結束，給予體溫、心率與荷爾蒙足夠的回降緩衝期。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：夜間訓練降溫放術</h4>\n          <ul>\n            <li>若只能晚間運動，盡量避免在睡前 2 小時內進行 1RM 極限大重量或 HIIT</li>\n            <li>訓練結束後進行 10 分鐘深呼吸滾筒放鬆與拉筋</li>\n            <li>運動後 30 分鐘洗溫水澡（40°C左右），利用血管擴張原理加速身體散熱與降溫</li>\n          </ul>\n        </div>\n      "
  },
  {
    "id": "art-habits-2",
    "image": "art-cover-15.jpg",
    "title": "吃早餐到底重不重要？斷食法 vs. 規律早餐的荷爾蒙運作分析",
    "category": "other",
    "categoryName": "其他",
    "author": "官網出品",
    "date": "2024-12-03",
    "readTime": "6 分鐘",
    "icon": "🍳",
    "excerpt": "跳過早餐對皮質醇與甲狀腺的潛在影響、適合進行間歇性斷食的族群評估。",
    "toc": [
      "晨起皮質醇甦醒反應（CAR）與血糖調節",
      "16/8 間歇性斷食 vs 規律三餐的荷爾蒙運作差異",
      "跳過早餐對甲狀腺素與基礎代謝率的潛在風險",
      "KT 專家建議：如何評估自己適合斷食還是規律早餐？"
    ],
    "content": "\n        <h3>一、晨起皮質醇甦醒反應（CAR）與血糖調節</h3>\n        <p>早晨起床後 30-45 分鐘內，體內的皮質醇會自然上升（Cortisol Awakening Response），幫助啟動身體精力並釋放肝醣。若此時長期不攝取營養，部分高壓力族群可能會引發皮質醇過度飆升。</p>\n\n        <h3>二、16/8 間歇性斷食 vs 規律三餐的荷爾蒙運作差異</h3>\n        <p>間歇性斷食（如 16/8）能有效降低全天胰島素位準、促進自噬作用（Autophagy）與控制總熱量；而規律早餐則有助於肌肉合成率（MPS）的穩定分配與運動表現維持。</p>\n\n        <h3>三、跳過早餐對甲狀腺素與基礎代謝率的潛在風險</h3>\n        <p>對於高運動量、高壓力或女性族群，長期跳過早餐兼極端低熱量，可能導致 T3 甲狀腺素分泌下降，引起基礎代謝率變慢與月經週期不規律。</p>\n\n        <div class=\"article-highlight-card\">\n          <h4>💡 KT 專家建議：族群評估與選擇指南</h4>\n          <ul>\n            <li><strong>適合 16/8 斷食者：</strong> 久坐辦公族、體脂偏高者、早晨無食慾且無晨練習慣者</li>\n            <li><strong>適合規律早餐者：</strong> 高強度重訓族、增肌者、早晨高強度訓練者、高壓力睡眠不足者</li>\n            <li>無論選擇哪種策略，每日總熱量與優質蛋白質達標才是成功關鍵</li>\n          </ul>\n        </div>\n      "
  }
];
  const productsData = [];

  // Initialize UI Features
  initNavigation();
  initThemeToggle();
  initCalculators();
  renderArticles(articlesData);
  renderProducts(productsData);
  initModals();
  initBackToTop();

  /* ==========================================================================
     NAVIGATION & TAB SWITCHING
     ========================================================================== */
  function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[data-target]');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-target');
        
        if (targetId && document.getElementById(targetId)) {
          e.preventDefault();
          
          // Update Active Nav Link
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          // Scroll to section smoothly
          const targetSection = document.getElementById(targetId);
          const headerOffset = 80;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Category Filter Pills
    const categoryBtns = document.querySelectorAll('.pill-btn');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');
        if (cat === 'all') {
          renderArticles(articlesData);
        } else {
          const filtered = articlesData.filter(a => a.category === cat);
          renderArticles(filtered);
        }
      });
    });
  }

  /* ==========================================================================
     THEME TOGGLE (Light/Dark Mode)
     ========================================================================== */
  function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;

    // Dark mode is default, icon shows sun to switch to light mode
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      themeBtn.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
  }

  /* ==========================================================================
     CALCULATOR LOGIC (TDEE / BMR & FFMI)
     ========================================================================== */
  function initCalculators() {
    if (!document.getElementById('calculators')) return;

    // Calculator Sub-tabs
    const calcTabs = document.querySelectorAll('.calc-tab');
    const calcPanels = document.querySelectorAll('.calc-panel');

    calcTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        calcTabs.forEach(t => t.classList.remove('active'));
        calcPanels.forEach(p => p.style.display = 'none');

        tab.classList.add('active');
        const targetPanel = document.getElementById(tab.getAttribute('data-tab'));
        if (targetPanel) {
          targetPanel.style.display = 'grid';
        }
      });
    });

    // Gender Buttons
    const genderBtns = document.querySelectorAll('.gender-btn');
    genderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        genderBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGender = btn.getAttribute('data-gender');
        calculateTDEE();
      });
    });

    // Live Input Listeners for TDEE
    const tdeeInputs = ['calcAge', 'calcHeight', 'calcWeight', 'calcActivity', 'calcGoal'];
    tdeeInputs.forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', calculateTDEE);
        input.addEventListener('change', calculateTDEE);
      }
    });

    // Initial TDEE Calculation
    calculateTDEE();

    // FFMI Calculator Listeners
    const ffmiInputs = ['ffmiHeight', 'ffmiWeight', 'ffmiFat'];
    ffmiInputs.forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', calculateFFMI);
      }
    });

    calculateFFMI();
  }

  function calculateTDEE() {
    const age = parseFloat(document.getElementById('calcAge')?.value) || 28;
    const height = parseFloat(document.getElementById('calcHeight')?.value) || 175;
    const weight = parseFloat(document.getElementById('calcWeight')?.value) || 70;
    const activityMult = parseFloat(document.getElementById('calcActivity')?.value) || 1.375;
    const goal = document.getElementById('calcGoal')?.value || 'fatloss';

    // BMR Calculation (Mifflin-St Jeor Equation)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    if (currentGender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // TDEE Calculation
    const tdee = Math.round(bmr * activityMult);
    bmr = Math.round(bmr);

    // Target Calorie Calculation based on goal
    let targetCalories = tdee;
    let goalLabel = '維持體重熱量';

    if (goal === 'fatloss') {
      targetCalories = Math.round(tdee * 0.82); // 18% Deficit
      goalLabel = '減脂推薦熱量 (每日熱量赤字)';
    } else if (goal === 'muscle') {
      targetCalories = Math.round(tdee * 1.12); // 12% Surplus
      goalLabel = '增肌推薦熱量 (每日熱量盈餘)';
    }

    // Macronutrients Estimation (g)
    // Protein: ~2.0g per kg
    const proteinGrams = Math.round(weight * 2.0);
    const proteinCals = proteinGrams * 4;

    // Fat: ~25% of target calories
    const fatCals = Math.round(targetCalories * 0.25);
    const fatGrams = Math.round(fatCals / 9);

    // Carbs: Remaining calories
    const carbCals = Math.max(0, targetCalories - proteinCals - fatCals);
    const carbGrams = Math.round(carbCals / 4);

    // Update DOM
    document.getElementById('resBmr').textContent = bmr.toLocaleString();
    document.getElementById('resTdee').textContent = tdee.toLocaleString();
    document.getElementById('resTarget').textContent = targetCalories.toLocaleString();
    document.getElementById('resGoalLabel').textContent = goalLabel;

    document.getElementById('resProtein').textContent = `${proteinGrams}g`;
    document.getElementById('resCarb').textContent = `${carbGrams}g`;
    document.getElementById('resFat').textContent = `${fatGrams}g`;
  }

  function calculateFFMI() {
    const heightCm = parseFloat(document.getElementById('ffmiHeight')?.value) || 175;
    const weight = parseFloat(document.getElementById('ffmiWeight')?.value) || 75;
    const bodyFat = parseFloat(document.getElementById('ffmiFat')?.value) || 15;

    const heightM = heightCm / 100;
    const fatMass = weight * (bodyFat / 100);
    const leanMass = weight - fatMass;

    // FFMI = Lean Mass (kg) / (Height in m)^2
    let ffmi = leanMass / (heightM * heightM);
    // Adjusted FFMI for height standardisation (to 1.8m)
    let normalizedFFMI = ffmi + 6.1 * (1.8 - heightM);

    normalizedFFMI = Math.round(normalizedFFMI * 10) / 10;

    let status = '普通肌肉量';
    if (normalizedFFMI < 18) status = '偏瘦體型';
    else if (normalizedFFMI >= 18 && normalizedFFMI < 20) status = '平均體型';
    else if (normalizedFFMI >= 20 && normalizedFFMI < 22) status = '良好的運動員體型';
    else if (normalizedFFMI >= 22 && normalizedFFMI < 25) status = '極佳健身訓練者體型';
    else if (normalizedFFMI >= 25) status = '頂尖自然健身上限 / 專業選手';

    const resFfmi = document.getElementById('resFfmi');
    const resFfmiStatus = document.getElementById('resFfmiStatus');

    if (resFfmi) resFfmi.textContent = normalizedFFMI;
    if (resFfmiStatus) resFfmiStatus.textContent = `評估結果：${status}`;
  }

  /* ==========================================================================
     ARTICLES RENDERER
     ========================================================================== */
  function renderArticles(list) {
    const container = document.getElementById('articlesGrid');
    if (!container) return;

    if (!list || list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fas fa-newspaper" style="font-size: 3rem; margin-bottom: 1rem; color: #475569; display: block;"></i>
          <p style="font-size: 1.25rem; font-weight: 500; color: #cbd5e1;">尚無文章</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(art => `
      <div class="article-card" onclick="openArticlePage('${art.id}')">
        <div class="article-img-wrap" style="background-image: url('${art.image}');">
          <div class="article-img-overlay"></div>
          <span class="article-category-badge">${art.categoryName}</span>
          <h3 class="article-cover-title">${art.title}</h3>
        </div>
        <div class="article-body">
          <div class="article-meta">
            <span><i class="far fa-user"></i> ${art.author}</span>
            <span><i class="far fa-calendar"></i> ${art.date}</span>
            <span><i class="far fa-clock"></i> ${art.readTime}</span>
          </div>
          <p class="article-excerpt">${art.excerpt}</p>
          <div class="article-footer">
            <span class="read-more-link">
              閱讀全文 <i class="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     PRODUCTS RENDERER & CART LOGIC
     ========================================================================== */
  function renderProducts(products) {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    if (!products || products.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fas fa-box-open" style="font-size: 3rem; margin-bottom: 1rem; color: #475569; display: block;"></i>
          <p style="font-size: 1.25rem; font-weight: 500; color: #cbd5e1;">尚無商品</p>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map(prod => `
      <div class="product-card">
        <span class="product-badge">${prod.badge}</span>
        <div class="product-visual">${prod.icon}</div>
        <h4 class="product-title">${prod.title}</h4>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-price-row">
          <span class="product-price">NT$ ${prod.price}</span>
          <button class="btn-add-cart" onclick="addToCart('${prod.title}')">
            <i class="fas fa-shopping-cart"></i> 加入購物車
          </button>
        </div>
      </div>
    `).join('');
  }

  window.addToCart = function(title) {
    cartCount++;
    const badge = document.getElementById('cartBadge');
    if (badge) {
      badge.textContent = cartCount;
    }
    showToast(`已將「${title}」加入購物車！`);
  };

    window.openArticlePage = function(identifier) {
    const article = articlesData.find(a => a.id === identifier || a.title === identifier);
    
    // Check if on articles.html page
    const isArticlesPage = window.location.pathname.includes('articles.html');
    if (!isArticlesPage && article) {
      window.location.href = 'articles.html#' + article.id;
      return;
    }

    const heroEl = document.getElementById('articlesHero');
    const gridSecEl = document.getElementById('articlesGridSection');
    const pageSecEl = document.getElementById('articlePageSection');

    if (article && pageSecEl) {
      // Update Title & Banner
      const titleEl = document.getElementById('artPageTitle');
      const bannerTextEl = document.getElementById('artPageBannerText');
      const coverImgEl = document.getElementById('artPageCoverImg');
      
      if (titleEl) titleEl.textContent = article.title;
      if (bannerTextEl) bannerTextEl.textContent = article.title;
      if (coverImgEl) coverImgEl.src = article.image;

      // Update Meta
      const metaEl = document.getElementById('artPageMeta');
      if (metaEl) {
        metaEl.innerHTML = `
          <span><i class="far fa-user" style="color: var(--primary);"></i> 作者：<strong>${article.author}</strong></span>
          <span><i class="far fa-calendar"></i> ${article.date}</span>
          <span><i class="far fa-clock"></i> ${article.readTime}</span>
        `;
      }

      // Update Tags
      const tagsEl = document.getElementById('artPageTags');
      if (tagsEl) {
        tagsEl.innerHTML = `
          <span class="badge-tag">${article.categoryName}</span>
          <span class="badge-tag">官網出品</span>
          <span class="badge-tag">科學化知識</span>
        `;
      }

      // Update Table of Contents (目錄)
      const tocEl = document.getElementById('artPageToc');
      if (tocEl) {
        tocEl.innerHTML = `
          <div class="article-toc-title">
            <i class="fas fa-list-ul"></i> 目錄 (Table of Contents)
          </div>
          <ul class="article-toc-list">
            ${article.toc.map((item, idx) => `<li><i class="fas fa-chevron-right"></i> ${idx + 1}. ${item}</li>`).join('')}
          </ul>
        `;
      }

      // Update Main Body
      const bodyEl = document.getElementById('artPageBody');
      if (bodyEl) {
        bodyEl.innerHTML = article.content;
      }

      // Update Sidebar Recent Articles List (近期文章)
      const recentListEl = document.getElementById('artPageRecentList');
      if (recentListEl) {
        const otherArticles = articlesData.filter(a => a.id !== article.id).slice(0, 4);
        recentListEl.innerHTML = otherArticles.map(a => `
          <div class="sidebar-article-item" onclick="openArticlePage('${a.id}')">
            <img src="${a.image}" alt="${a.title}" class="sidebar-art-thumb">
            <div class="sidebar-art-info">
              <span class="sidebar-art-cat">${a.categoryName}</span>
              <h4 class="sidebar-art-title">${a.title}</h4>
            </div>
          </div>
        `).join('');
      }

      // Toggle Section Views
      if (heroEl) heroEl.style.display = 'none';
      if (gridSecEl) gridSecEl.style.display = 'none';
      pageSecEl.style.display = 'block';

      // Update URL hash & scroll to top smoothly
      window.history.replaceState(null, null, '#' + article.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  window.closeArticlePage = function() {
    const heroEl = document.getElementById('articlesHero');
    const gridSecEl = document.getElementById('articlesGridSection');
    const pageSecEl = document.getElementById('articlePageSection');

    if (pageSecEl) pageSecEl.style.display = 'none';
    if (heroEl) heroEl.style.display = 'block';
    if (gridSecEl) gridSecEl.style.display = 'block';

    // Clear hash without jump
    window.history.replaceState(null, null, window.location.pathname);
    if (gridSecEl) {
      gridSecEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Backwards compatibility for openArticleModal -> openArticlePage
  window.openArticleModal = window.openArticlePage;

  // Auto-route on load if hash exists
  if (window.location.hash && window.location.hash.startsWith('#art-')) {
    const hashId = window.location.hash.replace('#', '');
    setTimeout(() => {
      openArticlePage(hashId);
    }, 100);
  }
/* ==========================================================================
     MODALS & SEARCH
     ========================================================================== */
  function initModals() {
    // Search Modal
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchBtn && searchModal) {
      searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        if (searchInput) searchInput.focus();
      });
    }

    if (closeSearch && searchModal) {
      closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
      });
    }

    if (searchInput && searchResults) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
          searchResults.innerHTML = '<p style="color: var(--text-muted); text-align: center;">輸入關鍵字搜尋文章或工具...</p>';
          return;
        }

        const matched = articlesData.filter(a => 
          a.title.toLowerCase().includes(query) || 
          a.excerpt.toLowerCase().includes(query)
        );

        if (matched.length === 0) {
          searchResults.innerHTML = `<p style="color: var(--text-muted); text-align: center;">找不到與「${query}」相關的文章。</p>`;
        } else {
          searchResults.innerHTML = matched.map(m => `
            <div style="padding: 0.75rem; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="openArticleModal('${m.id}'); document.getElementById('searchModal').classList.remove('active');">
              <strong style="color: var(--text-main); display: block;">${m.title}</strong>
              <small style="color: var(--text-muted);">${m.categoryName} • ${m.date}</small>
            </div>
          `).join('');
        }
      });
    }

    // Article Modal Close
    const articleModal = document.getElementById('articleModal');
    const closeArticle = document.getElementById('closeArticle');
    if (closeArticle && articleModal) {
      closeArticle.addEventListener('click', () => {
        articleModal.classList.remove('active');
      });
    }

    // Close Modals on Overlay Click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('諮詢表單已成功送出！我們的專業團隊將於 24 小時內與您聯繫。');
        contactForm.reset();
      });
    }

    // FAQ Accordion Handler
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
      });
    });
  }

  /* ==========================================================================
     BACK TO TOP BUTTON
     ========================================================================== */
  function initBackToTop() {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });

    backBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     TOAST NOTIFICATIONS
     ========================================================================== */
  function showToast(message) {
    let toast = document.getElementById('customToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'customToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: #0f172a;
        color: #ffffff;
        padding: 0.85rem 1.75rem;
        border-radius: 9999px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        font-weight: 700;
        font-size: 0.9rem;
        z-index: 3000;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(255,255,255,0.1);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--primary);"></i> ${message}`;
    toast.style.transform = 'translateX(-50%) translateY(0)';

    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3500);
  }
});
