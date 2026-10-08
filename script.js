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
    "date": "2026-10-07",
    "readTime": "6 分鐘",
    "icon": "🌙",
    "excerpt": "探討晝夜節律失調、皮質醇異常與發炎反應，破解「週末補眠」的迷思並重建神經代謝平衡。",
    "toc": [
      "晝夜節律失調與內分泌紊亂",
      "皮質醇過高引發慢性發炎與代謝障礙",
      "免疫細胞功能受損與自律神經失調",
      "為什麼「週末一次補眠」無法修復神經與代謝損傷？",
      "社交時差（Social Jetlag）對胰島素敏感度的持續衝擊",
      "KT 專家建議：打造規律生理時鐘修復藍圖"
    ],
    "content": `
        <p>許多現代人習慣平日熬夜加班或追劇，寄望於週末一覺睡到中午來「補回睡眠」。然而，臨床神經學與內分泌學研究指出：睡眠並不是隨意儲存與提領的銀行帳戶。長期晚睡與晝夜節律失調會引發一連串深層的生理連鎖反應，從免疫系統崩解到內分泌紊亂，絕非單次長時間睡眠所能逆轉。</p>

        <h3>一、晝夜節律失調與內分泌紊亂</h3>
        <p>人體的生理時鐘受大腦視交叉上核（SCN）精密調控，根據光線變化調控褪黑激素與皮質醇的分泌頻率。當你經常過 midnight 才入睡，生理時鐘與外界光暗晝夜節律出現強烈脫節。</p>
        <p>這種失調會使大腦誤以為身體處於持續警備狀態，導致夜間原本該下降的交感神經活性居高不下，破壞內分泌器官的自我重置機制。</p>

        <h3>二、皮質醇過高引發慢性發炎與代謝障礙</h3>
        <p>長期晚睡最直接的危害是壓力荷爾蒙「皮質醇（Cortisol）」的分泌曲線異常。正常情況下，皮質醇應在早晨達到高峰以提供精力，夜間則降至最低水準以利細胞修復。</p>
        <p>晚睡會使皮質醇在夜間強行維持高位，這不僅會抑制免疫系統的修復反應，誘發全身性低度慢性發炎，更會大幅降低肌肉細胞對胰島素的敏感度，促使血液中的葡萄糖轉化為內臟脂肪堆積。</p>

        <h3>三、免疫細胞功能受損與自律神經失調</h3>
        <p>深層睡眠是體內自然殺手細胞（NK 細胞）與 T 細胞進行免疫記憶與病原體清除的核心時段。研究顯示，連續一週每晚睡眠少於 6 小時，體內 NK 細胞的活性可驟降高達 70%。</p>
        <p>此外，自律神經系統中的副交感神經無法在夜間取得主導權，會導致血管持續收縮、心率變異度（HRV）下降，長期下來顯著增加心血管疾病與腸道微生態失衡的風險。</p>

        <h3>四、為什麼「週末一次補眠」無法修復神經與代謝損傷？</h3>
        <p>許多上班族以為週末睡滿 10-12 小時就能抵銷平日的睡眠債。但實驗數據證實，週末補眠雖然能暫時緩解大腦主觀的疲勞感，卻無法修復已經受損的胰島素敏感度與慢性發炎指標。</p>
        <p>大腦的神經突觸塑性與深層慢波睡眠（Slow-wave Sleep）的修復作用需要穩定的每日週期，過度延長週末睡眠時間反而會干擾週日夜晚的入睡能力，引發更嚴重的失眠惡性循環。</p>

        <h3>五、社交時差（Social Jetlag）對胰島素敏感度的持續衝擊</h3>
        <p>平日 12 點睡 6 點起、週末 3 點睡 11 點起，這種作息時間的劇烈擺動在醫學上被定義為「社交時差（Social Jetlag）」。</p>
        <p>研究指出，每增加 1 小時的社交時差，代謝症候群與肥胖的發生機率便上升約 33%。這是因為消化器官（肝臟、胰腺）各自擁有外圍生理時鐘，突發的作息改變會造成中央大腦時鐘與外圍器官時鐘強烈脫節，引發嚴重代謝紊亂。</p>

        <h3>六、KT 專家建議：打造規律生理時鐘修復藍圖</h3>
        <p>要真正修復晚睡對身體造成的深層傷害，關鍵在於重新校準視交叉上核的晝夜節律：</p>

        <div class="article-highlight-card">
          <h4>KT 專家建議：規律作息修復藍圖</h4>
          <ul>
            <li><strong>固定每日起床時間：</strong>無論平日或週末，起床時間誤差控制在 30 分鐘以內。</li>
            <li><strong>晨間自然光照射：</strong>起床後 15 分鐘內接受戶外自然光照射 10-15 分鐘，直接抑制褪黑激素並設定大腦生理時鐘。</li>
            <li><strong>劃定睡前藍光禁區：</strong>入睡前 60 分鐘關閉電子螢幕，改用暖色低角度光源，保護內源性褪黑激素自然分泌。</li>
            <li><strong>穩定晚餐與睡眠間隔：</strong>睡前 3 小時停止進食，避免腸胃夜間消化負擔阻礙深層慢波睡眠啟動。</li>
          </ul>
        </div>
      `
  },
    {
    "id": "art-sleep-3",
    "image": "art-cover-3.jpg",
    "title": "晚睡與肥胖的隱形連結：缺乏睡眠如何讓飢餓素暴增、瘦素失靈？",
    "category": "sleep",
    "categoryName": "睡眠作息",
    "author": "官網出品",
    "date": "2026-10-08",
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
    "content": `
        <p>現代人常將減重視為純粹的「卡路里加減法」，認為只要少吃、多動就能甩掉脂肪。然而，許多嚴格控制飲食、規律運動的人，卻往往敗在夜復一夜的熬夜習慣。內分泌與代謝醫學研究已證實：睡眠並非被動的休息，而是身體調控荷爾蒙、重整食慾與代謝的關鍵週期。當睡眠時間被剝奪或晝夜節律紊亂，大腦會誤以為身體處於能量匱乏的生存危機，進而開啟一連串強烈的「渴望進食」訊號。</p>

        <h3>一、 睡眠、食慾與大腦的生理連結</h3>
        <p>人體下視丘負責維持能量平衡，透過神經內分泌系統精準調控飢餓感與飽足感。睡眠期間，大腦會清理代謝廢物、重置神經傳導物質，並校準荷爾蒙分泌節律。</p>
        <p>當睡眠不足（例如每晚少於 6 小時）時，下視丘接收到的不是休息訊號，而是壓力與威脅訊號。此時，掌管情緒、衝動與獎勵機制的大腦杏仁核（Amygdala）活躍度顯著上升，而負責理性判斷、抑制衝動的前額葉皮質（Prefrontal Cortex）功能則受到抑制。這解釋了為什麼熬夜時人們不僅食量增加，更會對高糖、高油脂的精緻加工食品產生無法抗拒的渴望。</p>

        <h3>二、 飢餓素（Ghrelin）：熬夜引爆食慾的引擎</h3>
        <p>飢餓素主要由胃黏膜細胞分泌，是人體內少數能直接刺激下視丘弓狀核、傳達「該吃東西了」的促食慾荷爾蒙。在正常作息下，飢餓素水平在進食前升高、進食後迅速下降。</p>
        <p>研究顯示，僅僅連續兩晚睡眠不足 5 小時，人體血液中的飢餓素濃度即可暴增 20% 至 30%。飢餓素除了發送胃部空虛訊號，還會直接作用於中樞神經的多巴胺獎勵系統，放大食物帶來的愉悅感。到了深夜，這股生理衝動會轉化為強烈的「夜食症候群（Night Eating Syndrome）」，驅使人在睡前翻找洋芋片、鹹酥雞或泡麵等高能量密度食物。</p>

        <h3>三、 瘦素（Leptin）：飽足訊號失靈的關鍵機制</h3>
        <p>與飢餓素相互制衡的另一端，是由脂肪細胞分泌的「瘦素」。瘦素的主要職責是向大腦回報體內儲存的能量狀況；當能量充足時，瘦素水平上升，促使大腦關閉飢餓感、提升能量消耗。</p>
        <p>長期熬夜與睡眠剝奪會使血液中的瘦素基礎濃度顯著下滑（平均下降 15% 至 20%）。更嚴重的是，睡眠不足誘發的全身性低度慢性發炎，會干擾下視丘的瘦素受體，產生「瘦素阻抗（Leptin Resistance）」。這意味著即使體內脂肪充足、晚餐已經吃飽，大腦依然無法接收到飽足訊號，將身體誤判為「極度饑荒」，持續發出進食指令並降低靜止代謝率。</p>

        <h3>四、 皮質醇與胰島素：脂肪囤積的雙重催化劑</h3>
        <p>晚睡對體重的破壞，並不僅止於食慾荷爾蒙的失衡，更深層的危害在於壓力荷爾蒙與血糖調節系統的崩潰。</p>
        <p><strong>皮質醇（Cortisol）持續飆高：</strong>正常情況下，皮質醇濃度在早晨達到高峰以喚醒身體，夜間則降至低點以利入眠。晚睡與睡眠不足會強行維持交感神經亢奮，導致皮質醇夜間維持高檔。高濃度的皮質醇會促使內臟脂肪細胞上的受體活化，將多餘熱量以最危險的型態堆積在腹部與肝臟。</p>
        <p><strong>急性胰島素敏感度下降：</strong>臨床試驗發現，單次睡眠少於 4 小時，人體的胰島素敏感度可能下降高達 25% 至 30%，其代謝狀態幾乎等同於早期糖尿病患者。進入體內的碳水化合物無法有效被肌肉細胞利用，反而在高胰島素水平的推動下加速轉化為三酸甘油酯囤積。</p>

        <h3>五、 打破惡性循環：重建代謝與睡眠的實踐方案</h3>
        <p>要修復失調的飢餓素與瘦素，單靠「用意志力忍耐飢餓」往往只會引發更劇烈的暴飲暴食。唯有從生理作息的源頭介入，才能徹底重啟正常的食慾調節機制。</p>
        <p><strong>鎖定穩定的起床時間：</strong>即使前一晚較晚入睡，也應在固定時間起床並接觸晨光 10 至 15 分鐘，透過視網膜光受體重置視交叉上核（SCN）的主時鐘，維持褪黑激素分泌節律。</p>
        <p><strong>設立「睡前 3 小時禁食」緩衝區：</strong>睡前進食會迫使消化系統加班運作、刺激胰島素分泌，阻礙夜間生長激素與深層睡眠的啟動。</p>
        <p><strong>優化晚餐宏量營養素配置：</strong>晚餐以優質蛋白質（如鮭魚、雞胸肉、豆腐）與複合碳水化合物為主，避免精緻高糖飲食造成睡前血糖驟降（Reactive Hypoglycemia），降低深夜誘發飢餓素激增的機率。</p>
        <p><strong>切斷睡前藍光刺激：</strong>睡前 60 分鐘關閉平板、電腦與手機螢幕，或改採暖色低光源，保護褪黑激素自然分泌，確保身體能順利進入深層慢波睡眠（Slow-wave Sleep），讓荷爾蒙重置程序完整執行。</p>
      `
  },
  {
    "id": "art-hydration-1",
    "image": "art-cover-4.jpg",
    "title": "不渴不代表水分充足！從尿液顏色看懂身體的缺水訊號",
    "category": "other",
    "categoryName": "其他",
    "author": "官網出品",
    "date": "2026-10-04",
    "readTime": "6 分鐘",
    "icon": "💧",
    "excerpt": "脫水對認知功能、血液黏稠度與運動表現的深遠衝擊，掌握每日飲水量黃金公式與評估指標。",
    "toc": [
      "「口渴」是身體細胞嚴重脫水後的末端警訊",
      "尿液顏色與比重觀察指南：從透亮黃到深琥珀色的生理訊號",
      "脫水對大腦專注力、認知功能與神經傳導的衝擊",
      "肌力與爆發力衰退：體水流失對重訓表現的物理破壞",
      "血液黏稠度上升與心臟泵血負擔加重的生理機制",
      "KT 專家建議：精準計算個人化每日黃金補水量與補水法則"
    ],
    "content": `
        <p>在日常健身與健康管理中，水常常是被最忽視卻也最關鍵的營養素。許多人習慣「等口渴了才喝水」，然而在運動生理學中，口渴並不是缺水的預警，而是身體細胞已經陷入嚴重脫水危機後的末端求救訊號。了解水分在體內的作用機制，是邁向科學化健康管理的第一步。</p>

        <h3>一、「口渴」是身體細胞嚴重脫水後的末端警訊</h3>
        <p>當你感到口渴時，體重已經流失了約 1% 至 2% 的水分。此時血液中的血漿容積（Plasma Volume）顯著下降，下視丘的滲透壓感應器（Osmoreceptors）被強烈刺激，促使垂體後葉釋放抗利尿激素（ADH）並發出口渴指令。</p>
        <p>對於需要高效專注與運動表現的人來說，等到口渴時再補水已經無法及時阻止細胞功能失調與神經傳導速度變慢的發生。因為水分從胃部吸收進入血液與肌肉組織需要 15 至 30 分鐘的生理延遲。</p>

        <h3>二、尿液顏色與比重觀察指南：從透亮黃到深琥珀色的生理訊號</h3>
        <p>評估體內水合狀態（Hydration Status）最簡單且客觀的方式，是觀察日間尿液的顏色與濃縮程度。腎臟會根據血液滲透壓精準調節尿液濃縮水準：</p>
        <p><strong>透明無色 / 淡檸檬黃：</strong> 代表細胞水合狀態極佳，體液平衡良好，腎臟負擔輕微。<br><strong>深黃色：</strong> 提示身體處於輕度脫水狀態，腎臟已啟動濃縮尿液機制，應立即補充 300-500ml 水分。<br><strong>琥珀色或濃茶色：</strong> 提示中度至重度脫水，血液黏稠度高，尿比重往往大於 1.025，需立即補充水分與適量電解質，防止腎臟受損與血液循環障礙。</p>

        <h3>三、脫水對大腦專注力、認知功能與神經傳導的衝擊</h3>
        <p>大腦組織約有 75% 由水分組成。臨床實驗表明，僅僅 1.5% 的輕微脫水，就會導致前額葉皮質的功能活動降低，引發注意力不集中、短期記憶力下降、工作效率低落以及情緒焦慮。</p>
        <p>這是因為脫水會使腦脊液循環受阻，神經細胞間的離子通道傳導速率變慢，造成神經訊號傳送延遲與腦部微血管灌流不足，令人出現持續性的腦霧（Brain Fog）感。</p>

        <h3>四、肌力與爆發力衰退：體水流失對重訓表現的物理破壞</h3>
        <p>肌肉組織含有高達 70-75% 的水分。肌細胞內的水合充盈度（Cell Swelling）直接決定了肌肉的張力、膨脹感與神經驅動效率，並調控蛋白質合成途徑。</p>
        <p>當體水流失達到體重的 2% 時，肌耐力與最大肌力（1RM）可下降高達 10% 至 15%；當流失達 3% 以上時，高強度的爆發力運動表現會出現全面性崩潰，且肌腱與關節囊因缺乏潤滑而大幅增加拉傷與磨損風險。</p>

        <h3>五、血液黏稠度上升與心臟泵血負擔加重的生理機制</h3>
        <p>水分流失會直接導致血漿水份減少，使血液黏稠度激增、血管阻力加大。為了維持全身組織與運動肌肉的氧氣供流量，心臟必須以更高的頻率跳動。</p>
        <p>臨床數據顯示，輕度脫水狀態下運動，心率每分鐘會額外增加 5-8 次（即 Cardiovascular Drift 心血管漂移現象），這會大幅提前中樞神經疲勞感，並增加心血管系統的負擔。</p>

        <h3>六、KT 專家建議：精準計算個人化每日黃金補水量與補水法則</h3>
        <p>每日補水量不能一概而論，必須根據個人體重與活動強度精準計算：</p>

        <div class="article-highlight-card">
          <h4>KT 專家建議：每日飲水量黃金公式</h4>
          <ul>
            <li><strong>日常基礎補水量：</strong> 體重 (kg) × 35 ml（例如：70 kg 個人每日需 2450 ml）。</li>
            <li><strong>高強度運動日：</strong> 體重 (kg) × 45 ml，並額外補充運動中流失汗水量的 1.2 至 1.5 倍水分。</li>
            <li><strong>分段少量多次：</strong> 每 30-45 分鐘補充 150-200ml，避免一次性暴飲大量純水導致低血鈉或腎臟快速排出。</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-hydration-2",
    "image": "art-cover-5.jpg",
    "title": "喝水喝對時間才有效：提升專注力、助消化與避免夜尿的「全日補水時刻表」",
    "category": "other",
    "categoryName": "其他",
    "author": "官網出品",
    "date": "2026-10-05",
    "readTime": "6 分鐘",
    "icon": "🥤",
    "excerpt": "飯前飯後喝水的生理時間差、運動電解質補充原則與避免夜尿干擾睡眠的全日補水攻略。",
    "toc": [
      "晨起第一杯水：喚醒消化道、稀釋血液與啟動基礎代謝",
      "飯前與飯後飲水的最佳時間間隔：保護胃酸與消化酵素",
      "運動前中後的高效電解質與水分分配原則",
      "辦公專注期與午後疲勞期的細胞補水機制",
      "睡前補水策略：如何維持夜間血流順暢並完全避免夜尿干擾",
      "KT 專家建議：全日 24 小時黃金補水時間表與執行策略"
    ],
    "content": `
        <p>知道了每日總喝水量還不夠，「什麼時間喝水」直接決定了身體對水分的吸收利用效率與消化系統的健康。盲目灌水不僅無法有效充盈細胞，還可能引發胃脹、消化不良甚至夜間頻尿中斷睡眠。</p>

        <h3>一、晨起第一杯水：喚醒消化道、稀釋血液與啟動基礎代謝</h3>
        <p>經過 7-8 小時夜間睡眠，人體經由呼吸與皮膚無感蒸散流失了約 400-500ml 水分，血液處於全天最黏稠的狀態，心血管負擔相對偏高。</p>
        <p>晨起空腹飲用 300-400ml 常溫水，能迅速降低血液黏稠度、刺激胃結腸反射（Gastrocolic Reflex）促進腸胃蠕動排毒，並使靜止基礎代謝率暫時提升約 10-12%。</p>

        <h3>二、飯前與飯後飲水的最佳時間間隔：保護胃酸與消化酵素</h3>
        <p>許多人在用餐期間邊吃邊大量飲用冰水或湯品，這會稀釋胃液中的鹽酸濃度（將 pH 值從 1.5 抬升至 3.0 以上）與胃蛋白酶活性，導致蛋白質與微量元素無法被充分分解吸收。</p>
        <p>建議在餐前 30 分鐘補充 200-250ml 水分，既能啟動胃黏膜保護層並提供適度飽足感，又能避免餐中大量飲水；餐後 45 分鐘內則應儘量控制飲水量，保護消化運作。</p>

        <h3>三、運動前中後的高效電解質與水分分配原則</h3>
        <p>運動時的補水應秉持「預防性補水」原則：運動前 2 小時補充 400-500ml 水分，使身體處於最佳水合狀態；運動中每 15-20 分鐘補充 150-200ml；高強度流汗超過 60 分鐘時，必須加入鈉、鉀等電解質。</p>
        <p>補充電解質能防止細胞外液滲透壓下降，避免因大量補充純水引發的低血鈉症（Hyponatremia）與全身肌肉無力症狀。</p>

        <h3>四、辦公專注期與午後疲勞期的細胞補水機制</h3>
        <p>下午 2 點至 4 點往往是上班族最容易出現昏昏欲睡、專注力下降的時間。這往往不是因為缺乏咖啡因，而是因為長時間坐在冷氣房造成的隱性脫水。</p>
        <p>此時及時補充 350-400ml 水分，能有效提升腦部微血管血流量，緩解神經疲勞並重置注意力，避免過度依賴含糖飲料或過量咖啡。</p>

        <h3>五、睡前補水策略：如何維持夜間血流順暢並完全避免夜尿干擾</h3>
        <p>夜間血液黏稠度上升是引發心血管風險的隱患之一，但睡前喝太多水又會因為夜尿起身而毀掉深層睡眠週期。</p>
        <p>正確做法是在睡前 1.5 至 2 小時補充約 150-200ml 常溫水，並在睡前 60 分鐘徹底排空膀胱，這樣既能維持夜間血流順暢，又能確保整夜連續深層睡眠。</p>

        <h3>六、KT 專家建議：全日 24 小時黃金補水時間表與執行策略</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：全日補水黃金時刻表</h4>
          <ul>
            <li><strong>07:00 晨起空腹：</strong> 350ml 常溫水（喚醒腸胃與血液）</li>
            <li><strong>10:00 晨間工作期：</strong> 400ml（維持神經傳導與專注）</li>
            <li><strong>12:00 午餐前 30 分鐘：</strong> 200ml（協助消化準備）</li>
            <li><strong>15:30 下午茶代謝期：</strong> 400ml（緩解隱性脫水疲勞）</li>
            <li><strong>19:00 晚餐前 30 分鐘：</strong> 200ml（控制進食速度）</li>
            <li><strong>21:30 睡前 1.5 小時：</strong> 150ml（維護夜間血液流動）</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-nutrition-1",
    "image": "art-cover-6.jpg",
    "title": "碳水化合物真的是減重敵人？低碳飲食與複合碳水的聰明吃法",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2026-10-05",
    "readTime": "6 分鐘",
    "icon": "🍚",
    "excerpt": "破解碳水妖魔化迷思，深入分析單醣與複合碳水對升糖指數、肌醣原與甲狀腺素的影響。",
    "toc": [
      "破解碳水污名化：單醣、精緻澱粉 vs 複合碳水化合物",
      "升糖指數（GI值）與升糖負荷（GL值）對脂肪合成的威脅",
      "肌肉與肝臟肌醣原（Glycogen）的儲存機制與能量代謝",
      "運動員與健身者為何絕對不能完全戒除碳水？",
      "長期極端無碳水飲食對甲狀腺素（T3）與基代的副作用",
      "KT 專家建議：低碳週期、碳水循環與複合碳水黃金補充時機"
    ],
    "content": `
        <p>在過去幾年的生酮飲食與極端低碳熱潮下，碳水化合物常被貼上「發胖元凶」的標籤。然而在運動營養學與內分泌學中，碳水化合物是肌肉大重量訓練與高強度能量輸出的首選燃料，盲目切斷碳水往往只會引發代謝下降、荷爾蒙失調與肌肉嚴重流失。</p>

        <h3>一、破解碳水污名化：單醣、精緻澱粉 vs 複合碳水化合物</h3>
        <p>評價碳水化合物不能一概而論，關鍵在於分清「精緻單醣」與「複合碳水」。含糖飲料、精緻糕點等單醣與雙醣分子結構簡單，進入腸道後吸收極快，會引發血糖暴漲與胰島素過度分泌。</p>
        <p>相反地，地瓜、燕麥、糙米與藜麥等富含膳食纖維的複合碳水化合物，需經過較長的消化拆解過程，能穩定釋放葡萄糖，並為腸道益生菌提供發酵原料，生成短鏈脂肪酸（SCFA）維護代謝健康。</p>

        <h3>二、升糖指數（GI值）與升糖負荷（GL值）對脂肪合成的威脅</h3>
        <p>高 GI 食物進入體內後會促使胰島素（Insulin）快速高壓分泌。胰島素是強效的合成荷爾蒙，當血液中胰島素濃度居高不下時，體內的脂肪分解（Lipolysis）過程會被全面鎖死，多餘的血糖會被強行轉化為三酸甘油酯儲存於脂肪細胞中。</p>
        <p>然而，透過搭配蛋白質與膳食纖維，或是選擇低 GI / 低 GL 食物，可以大幅平緩血糖曲線，使胰島素維持在低檔穩態，達成能量持續供應而不引發脂肪堆積。</p>

        <h3>三、肌肉與肝臟肌醣原（Glycogen）的儲存機制與能量代謝</h3>
        <p>人體攝取的碳水化合物會以「肌醣原」形式儲存在肌肉（約 300-500g）與肝臟（約 80-100g）中。當進行大重量重訓或中高強度運動時，肌肉會優先消耗肌醣原進行無氧糖解作用。</p>
        <p>充足的肌醣原儲存不僅能維持肌肉細胞的水合充盈感（Muscle Fullness），更能激發強大的神經傳導與肌力輸出。缺乏肌醣原會使肌肉看起來扁平無力，訓練泵感徹底消失。</p>

        <h3>四、運動員與健身者為何絕對不能完全戒除碳水？</h3>
        <p>完全切斷碳水化合物會強迫身體轉向無效的胺基酸糖質新生（Gluconeogenesis），這意味著身體會開始拆解寶貴的肌肉組織作為葡萄糖來源。</p>
        <p>此外，缺乏碳水還會導致訓練強度陡降、運動後肌肉超補償修復程序停滯，並使 Cortisol / Testosterone（皮質醇/睪固酮）比例惡化，引發過度訓練症候群。</p>

        <h3>五、長期極端無碳水飲食對甲狀腺素（T3）與基代的副作用</h3>
        <p>長期維持極端無碳水狀態，大腦會感應到能量底層危機，促使肝臟中負責將非活性甲狀腺素（T4）轉化為活性甲狀腺素（T3）的 5'-去碘酵素活性下降。</p>
        <p>這會導致血液中活性 T3 濃度顯著下滑，靜止基礎代謝率（BMR）隨之大幅下修，使人陷入「吃極少卻再也瘦不下來，一吃碳水就暴增體重」的停滯期陷阱。</p>

        <h3>六、KT 專家建議：低碳週期、碳水循環與複合碳水黃金補充時機</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：碳水化合物聰明吃法</h4>
          <ul>
            <li><strong>非訓練日：</strong> 降低碳水比例，以低 GI 複合碳水（如燕麥、地瓜、藜麥）為主，提供基礎能量。</li>
            <li><strong>大重量訓練日：</strong> 在訓練前 1.5 小時與訓練後 1 小時內集中補充複合碳水，促進肌醣原快速回補與肌肉合成。</li>
            <li><strong>碳水循環策略：</strong> 結合高碳日（高強度訓練）與低碳日（休息日），既能極大化增肌減脂效率，又能維護甲狀腺與代謝健康。</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-nutrition-2",
    "image": "art-cover-7.jpg",
    "title": "吃對蛋白質才長肌不長油：動物性 vs. 植物性蛋白質的吸收率與黃金補充時機",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2026-10-06",
    "readTime": "6 分鐘",
    "icon": "🥩",
    "excerpt": "評估 PDCAAS 評分、亮胺酸觸發門檻、每餐吸收上限與蛋白質熱效應（TEF）的完全指南。",
    "toc": [
      "蛋白質消化率校正胺基酸評分（PDCAAS與DIAAS）解析",
      "動物性蛋白質 vs 植物性蛋白質的必需胺基酸完整度比對",
      "驅動肌肉蛋白質合成（MPS）的核心：亮胺酸（Leucine）門檻",
      "單餐蛋白質吸收上限與多餐均勻分配的生理學優勢",
      "活用蛋白質熱效應（TEF）提升每日能量消耗與飽足感",
      "KT 專家建議：個人化蛋白質每日需求克數與黃金補充指南"
    ],
    "content": `
        <p>蛋白質是建造肌肉、修復組織與維持免疫器官功能不可或缺的核心大量營養素。然而「吃足蛋白質」並不等於「成功增肌」，蛋白質的來源品質、胺基酸完整度、單餐分配克數與腸道吸收率直接決定了補充的最終成效。</p>

        <h3>一、蛋白質消化率校正胺基酸評分（PDCAAS與DIAAS）解析</h3>
        <p>評價蛋白質不能僅看包裝上的總克數，必須考量其人體消化吸收率。醫學界採用的 PDCAAS 與最新 DIAAS（回腸末端可消化胺基酸評分）系統中，雞蛋、乳清蛋白與牛奶蛋白均取得頂級評分，能被腸道高度吸收利用。</p>
        <p>相比之下，未加工植物蛋白由於含有植物酸、纖維素與胰蛋白酶抑制劑，其真消化率往往比動物性蛋白低 10% 至 20%，需透過適當烹調或純化萃取來提升吸收率。</p>

        <h3>二、動物性蛋白質 vs 植物性蛋白質的必需胺基酸完整度比對</h3>
        <p>動物性蛋白質（牛肉、雞肉、魚類、蛋）包含人體無法自行合成的全套 9 種必需胺基酸（EAA）。而大部分植物性蛋白質（豆類、穀物）常缺乏甲硫胺酸或離胺酸，稱為限制胺基酸（Limiting Amino Acid）。</p>
        <p>素食者必須透過「穀豆互補」（例如米飯搭配黃豆）的飲食組合，才能在體內拼湊出完整的必需胺基酸譜，確保肌蛋白合成原料不匱乏。</p>

        <h3>三、驅動肌肉蛋白質合成（MPS）的核心：亮胺酸（Leucine）門檻</h3>
        <p>在所有胺基酸中，支鏈胺基酸中的「亮胺酸（Leucine）」是觸發大腦 mTOR 肌肉合成訊號通路的開關。大腦感應器 Sestrin2 必須結合足量的亮胺酸才會啟動合成。</p>
        <p>研究證實，單餐必須攝取包含至少 2.5 至 3.0 克的亮胺酸（相當於約 25-30g 優質乳清或雞胸肉），才能完全啟動肌肉蛋白質合成（MPS）的最大效益；若亮胺酸未達門檻，肌肉合成效率將大幅折扣。</p>

        <h3>四、單餐蛋白質吸收上限與多餐均勻分配的生理學優勢</h3>
        <p>許多人習慣早餐不吃蛋白，晚上一次暴飲暴食 80 克的肉類。然而臨床顯示，單餐刺激 MPS 的效益在 35-40 克左右便會達到邊際遞減（即 Muscle Full Effect 肌肉飽和效應）。</p>
        <p>將每日總蛋白質均勻分配於 3-4 餐中（每餐約 0.4g/kg 體重），能使全身肌蛋白全天處於正氮平衡狀態，極大化增肌並減少蛋白質被轉化為尿素排出的浪費。</p>

        <h3>五、活用蛋白質熱效應（TEF）提升每日能量消耗與飽足感</h3>
        <p>三大營養素中，蛋白質具有最高高達 20% 至 30% 的食物熱效應（TEF）。這意味著每吃下 100 大卡的蛋白質，體內就有 20-30 大卡在消化分解過程中以熱能形式被消耗。</p>
        <p>此外，蛋白質能強效刺激腸道分泌 CCK 與 PYY 等飽足荷爾蒙，大幅延長胃排空時間，對於減脂期的總熱量赤字控制與飢餓感抑制極具好處。</p>

        <h3>六、KT 專家建議：個人化蛋白質每日需求克數與黃金補充指南</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：蛋白質補充黃金指南</h4>
          <ul>
            <li><strong>重訓增肌/減脂族群：</strong> 每日建議攝取量為體重 (kg) × 1.6 至 2.2 克。</li>
            <li><strong>單餐分配：</strong> 每餐攝取 30-40 克優質蛋白質，間隔 3-5 小時補充一次。</li>
            <li><strong>黃金補充時間：</strong> 訓練後 45 分鐘內補充快速吸收的乳清蛋白，睡前可選擇慢速釋放的酪蛋白或雞蛋蛋白。</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-nutrition-3",
    "image": "art-cover-8.jpg",
    "title": "油脂不等於肥胖：Omega-3 與飽和脂肪酸的健康平衡術",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2026-10-07",
    "readTime": "6 分鐘",
    "icon": "🥑",
    "excerpt": "區分好油與壞油、油脂對性荷爾蒙合成的作用，以及矯正外食族高發炎 Omega-6 比例的實踐指南。",
    "toc": [
      "脂肪是合成睪固酮、雌激素與細胞膜的關鍵原料",
      "好油（Omega-3/9）抗發炎 vs 壞油（反式脂肪/高溫氧化油）的傷害",
      "外食族常見的高發炎 Omega-6 比例失衡危機",
      "飽和脂肪酸與膽固醇在體內的正確認知與攝取上限",
      "深海魚油（EPA/DHA）對心血管與肌肉修復的臨床效益",
      "KT 專家建議：廚房烹飪用油挑選與保健補充品劑量指南"
    ],
    "content": `
        <p>在健身與減重圈中，脂肪長期以來飽受誤解。許多人採取極端的無油飲食，結果導致皮膚乾裂、情緒暴躁甚至停經與睪固酮驟降。事實上，選擇優質脂肪不僅不會讓你發胖，更是維持內分泌與細胞健康不可或缺的關鍵。</p>

        <h3>一、脂肪是合成睪固酮、雌激素與細胞膜的關鍵原料</h3>
        <p>人體所有細胞膜的雙層磷脂結構、以及掌管增肌減脂的核心性荷爾蒙（睪固酮、雌激素、黃體酮），都是以膽固醇與脂肪酸為原料合成的。過度戒絕脂肪會直接破壞 Steroidogenesis（類固醇荷爾蒙合成 pathway），造成肌肉流失與新陳代謝停滯。</p>
        <p>研究顯示，當油脂攝取量低於總熱量的 15% 時，男性的游離睪固酮水準會出現顯著下降，導致訓練恢復力與肌肉力量同步滑落。</p>

        <h3>二、好油（Omega-3/9）抗發炎 vs 壞油（反式脂肪/高溫氧化油）的傷害</h3>
        <p>油脂的優劣取決於分子結構：單元不飽和脂肪酸（Omega-9，如初榨橄欖油、酪梨）與多元不飽和脂肪酸（Omega-3，如深海魚油）具備顯著的抗發炎與保護心血管作用。</p>
        <p>而人工反式脂肪（Trans Fats）與經過多次高溫重複煎炸的氧化油，其雙鍵結構被破壞生成大量過氧化物，會直接破壞血管內皮細胞，誘發全身性低度慢性發炎與胰島素阻抗。</p>

        <h3>三、外食族常見的高發炎 Omega-6 比例失衡危機</h3>
        <p>現代外食餐廳廣泛使用精緻大豆油、葵花油、玉米油等富含 Omega-6 脂肪酸的植物油。這導致一般人體內的 Omega-6 與 Omega-3 比例失衡達到 20:1 甚至 30:1（理想應為 4:1 以內）。</p>
        <p>過高的 Omega-6 會促使體內花生四烯酸（AA）大量合成前列腺素 E2（PGE2）與白三烯（LTB4）等發炎介質，增加關節炎、肌肉慢性酸痛與血管硬化的風險。</p>

        <h3>四、飽和脂肪酸與膽固醇在體內的正確認知與攝取上限</h3>
        <p>適量的飽和脂肪酸（如椰子油、草飼奶油、原型肉類油脂）對於維護睪固酮水準有其生理必要性，但不宜過量。</p>
        <p>過量攝取飽和脂肪酸會增加血液中小顆粒緻密低密度脂蛋白（sdLDL）的濃度。建議將飽和脂肪酸控制在每日總熱量的 10% 以內，並優先選擇原型食物來源而非加工油脂。</p>

        <h3>五、深海魚油（EPA/DHA）對心血管與肌肉修復的臨床效益</h3>
        <p>Omega-3 中的 EPA 與 DHA 被臨床證實能降低血中三酸甘油酯、舒緩重訓後的延遲性肌肉酸痛（DOMS），並促進發炎消退介質（Resolvins & Protectins）的生成。</p>
        <p>此外，DHA 與 EPA 還能嵌入肌細胞膜中，提升細胞膜的流動性（Membrane Fluidity），改善肌肉細胞對胺基酸與葡萄糖的吸收傳遞效率。</p>

        <h3>六、KT 專家建議：廚房烹飪用油挑選與保健補充品劑量指南</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：日常用油與補充指南</h4>
          <ul>
            <li><strong>中低溫烹調與涼拌：</strong> 特級初榨橄欖油（EVOO）、苦茶油、酪梨油。</li>
            <li><strong>高溫煎炒：</strong> 椰子油或高發煙點的原型油脂。</li>
            <li><strong>魚油補充：</strong> 每日補充 1000-2000mg 高純度 rTG 型態深海魚油（確保 EPA+DHA 濃度高於 80%），重塑抗發炎體質。</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-nutrition-4",
    "image": "art-cover-9.jpg",
    "title": "微量元素大功臣：常常抽筋、疲勞？你可能忽略了鎂、鉀、鈉的平衡",
    "category": "nutrition",
    "categoryName": "飲食營養",
    "author": "官網出品",
    "date": "2026-10-07",
    "readTime": "6 分鐘",
    "icon": "🍌",
    "excerpt": "離子幫浦生理學、鎂與鉀缺乏引發的慢性疲勞與抽筋，以及高強度訓練下的電解質精準補充。",
    "toc": [
      "鈉鉀幫浦（Na+/K+-ATPase）與神經肌肉傳導的生理學基石",
      "頻繁抽筋與慢性疲勞的隱形殺手：鎂（Magnesium）缺乏",
      "鉀（Potassium）離子對體液平衡、血壓與細胞水合的作用",
      "高強度訓練與低碳飲食者的鈉離子（Sodium）劇烈流失危機",
      "鈣鎂比例失衡如何引發血管痙攣與睡眠障礙",
      "KT 專家建議：原型食物攝取來源與高強度運動電解質補充法"
    ],
    "content": `
        <p>許多健身愛好者把所有的注意力都放在計算碳水化合物與蛋白質克數上，卻常常忽視了維持細胞正常運作的微量礦物質電解質。如果你經常感到莫名疲勞、夜間小腿抽筋或訓練時肌肉泵感微弱，問題極可能出在鈉、鉀、鎂的失衡。</p>

        <h3>一、鈉鉀幫浦（Na+/K+-ATPase）與神經肌肉傳導的生理學基石</h3>
        <p>人體每一個細胞膜上都布滿了「鈉鉀幫浦」，透過消耗 ATP 能量維持細胞內高鉀、細胞外高鈉的膜靜止電位（RMP）。這是神經衝動傳導、肌肉細胞強效收縮與心律穩定的生理學基石。</p>
        <p>當體液電解質濃度不平衡，神經動作電位（Action Potential）的觸發門檻會異常降低，導致神經末梢異常放電，引發肌肉不自主抽搐或麻木感。</p>

        <h3>二、頻繁抽筋與慢性疲勞的隱形殺手：鎂（Magnesium）缺乏</h3>
        <p>鎂參與體內超過 300 種酵素催化反應，更是 ATP 能量分子發揮活性的必須輔因子（Mg-ATP 複合物）。鎂還具備阻斷 NMDA 受體、舒緩緊繃神經與肌肉細胞的功能。</p>
        <p>現代人由於土壤礦物質流失與高壓力消耗，普遍存在鎂攝取不足。缺乏鎂會使肌質網無法順利回收鈣離子，導致肌肉纖維持續處於高張力收縮狀態，引發夜間抽筋與慢性疲勞。</p>

        <h3>三、鉀（Potassium）離子對體液平衡、血壓與細胞水合的作用</h3>
        <p>鉀離子主要存在於細胞內液，負責把水分拉入細胞內部促進肌肉細胞充盈。補充足夠的鉀能抵抗過量鈉造成的全身水腫與高血壓，並維持心肌電位穩定。</p>
        <p>然而外食族蔬果攝取量嚴重不足，導致體內鈉高鉀低的失衡現象非常普遍，這會直接削弱肌肉的膨脹適應能力與耐久度。</p>

        <h3>四、高強度訓練與低碳飲食者的鈉離子（Sodium）劇烈流失危機</h3>
        <p>高強度重訓流汗每公升汗液會排出大量的鈉離子；而進行低碳水飲食時，體內胰島素下降會促使腎臟加速排出鈉離子與水分。</p>
        <p>若此時只大量喝純水而不補充鈉，會引發低血鈉症，出現頭暈、無力、嘔吐甚至肌肉暴走等現象。適量補鈉是維持血漿容積與重訓爆發力的關鍵。</p>

        <h3>五、鈣鎂比例失衡如何引發血管痙攣與睡眠障礙</h3>
        <p>鈣負責刺激肌肉收縮與神經興奮，而鎂負責使肌肉鬆弛與神經鎮靜。理想的鈣鎂攝取比例應為 2:1 或 1:1。</p>
        <p>若體內鈣過高而鎂不足，會導致血管平滑肌與骨骼肌持續處於高張力痙攣狀態，並干擾大腦 GABA 受體，引發嚴重失眠與焦慮感。</p>

        <h3>六、KT 專家建議：原型食物攝取來源與高強度運動電解質補充法</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：微量元素補充指南</h4>
          <ul>
            <li><strong>鎂最佳來源：</strong> 深綠色蔬菜、黑巧克力、南瓜籽、甘胺酸鎂或螯合鎂補充品（每日 300-400mg）。</li>
            <li><strong>鉀最佳來源：</strong> 奇異果、香蕉、酪梨、菠菜、空心菜、蕃茄。</li>
            <li><strong>鈉補充法則：</strong> 高強度訓練前 45 分鐘，可在水中加入 1-2 克優質海鹽，大幅提升訓練中的肌肉充血感與爆發力。</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-workout-1",
    "image": "art-cover-11.jpg",
    "title": "肌肉是在睡覺時長出來的！睡眠深度如何決定生長激素釋放與力量恢復",
    "category": "workout",
    "categoryName": "訓練恢復",
    "author": "官網出品",
    "date": "2026-10-02",
    "readTime": "6 分鐘",
    "icon": "🏋️",
    "excerpt": "生長激素（HGH）夜間分泌機制、肌纖維超補償修復與中樞神經疲勞的恢復法則。",
    "toc": [
      "人體生長激素（HGH）在深層慢波睡眠的分泌高峰",
      "重訓造成的肌纖維微創修復與超補償（Supercompensation）機制",
      "睡眠剝奪導致臥推、硬舉力量下降與受傷率飆升的數據",
      "中樞神經系統（CNS）疲勞累積對神經驅動力的破壞",
      "睡前補充優質蛋白質（如酪蛋白）對夜間肌蛋白合成的效益",
      "KT 專家建議：將睡眠納入增肌減脂訓練菜單的關鍵法規"
    ],
    "content": `
        <p>健身界名言：「健身三分練、七分吃，還有十分靠睡。」重量訓練本質上是打破肌肉組織的過程，真正的肌肉體積增長與力量突破，完全發生在睡覺時的深層修復階段。忽略睡眠只顧猛練，只會讓你陷入過度訓練的死胡同。</p>

        <h3>一、人體生長激素（HGH）在深層慢波睡眠的分泌高峰</h3>
        <p>人體全天約有 70% 的人類生長激素（HGH）是在夜間深層慢波睡眠（N3 階段）期間以脈衝形式大量釋放的。生長激素能強效刺激肝臟合成 IGF-1（類胰島素生長因子），促進胺基酸進入肌細胞進行修復。</p>
        <p>若夜間深層睡眠被中斷或壓縮，生長激素的分泌高峰會直接被閠割，導致肌蛋白合成連鎖反應無法完全啟動。</p>

        <h3>二、重訓造成的肌纖維微創修復與超補償（Supercompensation）機制</h3>
        <p>大重量重訓會造成肌纖維 Z 盤（Z-disc）微小的撕裂與局部發炎。在深層睡眠時，體內血流量會優先流向骨骼肌組織，運送生長因子與副交感神經信號。</p>
        <p>此時肌細胞周圍的衛星細胞（Satellite Cells）被活化並與受損肌纖維融合，完成超越原本力量與體積水準的「超補償」適應。</p>

        <h3>三、睡眠剝奪導致臥推、硬舉力量下降與受傷率飆升的數據</h3>
        <p>運動科學研究統計，當運動員連續兩週每晚睡眠少於 6 小時，臥推與硬舉的最大力量（1RM）平均衰退 8-12%，且肌腱拉傷與關節受傷的風險陡增 1.7 倍。</p>
        <p>這是因為缺乏睡眠會使運動覺與關節本體感覺（Proprioception）反應變遲鈍，在大重量挑戰時無法精準維持關節排列，引發代償性受傷。</p>

        <h3>四、中樞神經系統（CNS）疲勞累積對神經驅動力的破壞</h3>
        <p>大重量訓練不僅疲勞肌肉，更會大量消耗中樞神經系統的神經傳導物質（如多巴胺、乙醯膽鹼）。深層睡眠是大腦徹底清理神經代謝廢物、恢復神經驅動力的唯一途徑。</p>
        <p>當 CNS 疲勞持續累積，大腦皮質運動區發射訊號的發射頻率（Firing Rate）會顯著下降，導致高門檻大肌群運動單位（Motor Units）無法被有效徵召。</p>

        <h3>五、睡前補充優質蛋白質（如酪蛋白）對夜間肌蛋白合成的效益</h3>
        <p>夜間睡眠長達 8 小時，身體會逐漸進入空腹禁食狀態。研究顯示，睡前 30 分鐘補充 30-40 克慢速釋放的酪蛋白（Casein），能在胃部形成膠凝狀延緩排空。</p>
        <p>酪蛋白能在夜間 6-8 小時內穩定釋放胺基酸進入血液，防止夜間肌肉分解並提升 nocturnal MPS（夜間肌蛋白合成）達 22%。</p>

        <h3>六、KT 專家建議：將睡眠納入增肌減脂訓練菜單的關鍵法規</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：恢復重於訓練黃金準則</h4>
          <ul>
            <li><strong>保證 7-9 小時連續睡眠：</strong> 將睡眠視為與重訓菜單同等重要的硬性指標。</li>
            <li><strong>安排完全休息日：</strong> 每週至少安排 1-2 天不進行大重量重訓，讓中樞神經全面復原。</li>
            <li><strong>優化睡眠環境：</strong> 保持臥室完全黑暗、安靜，並將室溫控制在舒適偏涼的 18-22°C，促進深層慢波睡眠。</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-workout-2",
    "image": "art-cover-12.jpg",
    "title": "晚上運動會失眠嗎？訓練強度與入睡時間的黃金間隔守則",
    "category": "workout",
    "categoryName": "訓練恢復",
    "author": "官網出品",
    "date": "2026-10-08",
    "readTime": "6 分鐘",
    "icon": "🌛",
    "excerpt": "交感神經亢奮、核心體溫散熱機制、晚間訓練強度分配與睡前降溫儀式。",
    "toc": [
      "高強度訓練引起的神經興奮與交感神經優位",
      "核心體溫與入睡臨界點的物理散熱關係",
      "運動後皮質醇與腎上腺素降解的時間生理學",
      "睡前 2-3 小時緩衝期的重要性與訓練強度分配",
      "晚間運動後的碳水化合物與蛋白質補充對睡眠的正面引導",
      "KT 專家建議：夜間訓練後的降溫放訟儀式與睡眠準備"
    ],
    "content": `
        <p>對於許多上班族來說，下班後的夜晚是唯一能抽空健身的時間。然而許多人在晚上完成一場高強度的重訓或 HIIT 後，躺在床上卻大腦異常興奮、輾轉反側無法入睡。如何平衡夜間訓練與高質量的睡眠，關鍵在於理解運動生理學的緩衝時間。</p>

        <h3>一、高強度訓練引起的神經興奮與交感神經優位</h3>
        <p>大重量重訓與高強度間歇訓練會刺激腎上腺分泌大量的腎上腺素與去甲腎上腺素，使自律神經系統中的交感神經處於極度活躍狀態，心率、血壓與神經敏銳度大幅提升。</p>
        <p>這種交感神經優位的狀態若未給予足夠的緩衝降溫時間，會使心率變異度（HRV）持續受抑制，無法立刻切換至副交感神經主導的安眠模式。</p>

        <h3>二、核心體溫與入睡臨界點的物理散熱關係</h3>
        <p>人體要順利啟動睡眠程序，核心體溫必須自然下降約 0.5 到 1.0°C。劇烈運動會使肌肉與內臟溫度顯著升高，發揮大量熱能。</p>
        <p>若在體溫處於高檔時嘗試入睡，大腦的視前區（Preoptic Area）會不斷接收到覺醒訊號，干擾褪黑激素的分泌從而引發失眠。</p>

        <h3>三、運動後皮質醇與腎上腺素降解的時間生理學</h3>
        <p>運動誘發的興奮荷爾蒙在血漿中的半衰期約需要 90 至 120 分鐘才能逐漸回落至基礎水準。這意味著訓練結束後的兩小時內，身體依然處於「戰鬥或逃跑」的應激生理狀態。</p>
        <p>夜間高濃度的皮質醇會競爭性地抑制松果腺合成褪黑激素，造成入睡潛伏期延長與夜間易醒。</p>

        <h3>四、睡前 2-3 小時緩衝期的重要性與訓練強度分配</h3>
        <p>運動生理學建議：高強度的 1RM 極限重訓或 HIIT 應盡量在預計入睡前至少 2.5 至 3 小時結束。給予神經與荷爾蒙充足的代謝回落時間。</p>
        <p>如果只能在睡前 1.5 小時內運動，應將訓練內容調整為中低強度的Zone 2有氧、瑜伽或肌耐力訓練，這反而有助於舒緩一日工作累積的心理壓力。</p>

        <h3>五、晚間運動後的碳水化合物與蛋白質補充對睡眠的正面引導</h3>
        <p>夜間運動後切忌空腹入睡。適量補充中高 GI 的複合碳水化合物（如香蕉、燕麥），能刺激胰島素適度分泌。</p>
        <p>胰島素能促進大部分支鏈胺基酸進入肌肉，同時提高血清素與褪黑激素的前驅物——色胺酸（Tryptophan）跨越血腦障壁進入大腦的比例，幫助誘發自然睡意。</p>

        <h3>六、KT 專家建議：夜間訓練後的降溫放鬆儀式與睡眠準備</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：夜間訓練降溫放鬆術</h4>
          <ul>
            <li><strong>訓練後 10 分鐘筋膜放鬆：</strong> 進行滾筒筋膜放鬆與慢速深呼吸，主動強迫交感神經切換至副交感神經。</li>
            <li><strong>40°C 溫水淋浴：</strong> 運動後 45 分鐘洗溫水澡，利用皮膚血管擴張散熱原理，加速核心體溫回降。</li>
            <li><strong>補充甘胺酸或鎂：</strong> 睡前補充 300mg 甘胺酸鎂，舒緩神經肌肉張力。</li>
          </ul>
        </div>
      `
  },
  {
    "id": "art-habits-2",
    "image": "art-cover-15.jpg",
    "title": "吃早餐到底重不重要？斷食法 vs. 規律早餐的荷爾蒙運作分析",
    "category": "other",
    "categoryName": "其他",
    "author": "官網出品",
    "date": "2026-10-08",
    "readTime": "6 分鐘",
    "icon": "🍳",
    "excerpt": "評估晨起皮質醇反應、16/8 間歇性斷食與規律早餐對甲狀腺、肌肉合成與食慾控制的差異。",
    "toc": [
      "晨起皮質醇甦醒反應（CAR）與血糖代謝調節",
      "16/8 間歇性斷食 vs 規律三餐的荷爾蒙與自噬作用運作差異",
      "跳過早餐對甲狀腺素（T3）與基礎代謝率的潛在風險",
      "早餐宏量營養素（高蛋白 vs 高碳水）對全天食慾的控制效果",
      "運動族群晨練前後的營養補充與肌肉合成保護",
      "KT 專家建議：如何評估自己適合斷食還是規律早餐？"
    ],
    "content": `
        <p>「吃早餐是健康之本」與「跳過早餐能加速減脂」這兩種說法在網路上各有支持者。究竟該不該吃早餐，不能只憑感覺，必須深入了解個人的生理作息、壓力水準、訓練時間以及荷爾蒙分泌特性。</p>

        <h3>一、晨起皮質醇甦醒反應（CAR）與血糖代謝調節</h3>
        <p>每天早晨起床後的 30-45 分鐘內，體內的皮質醇會出現自然的生理飆升，稱為「皮質醇甦醒反應（CAR）」。這能幫助喚醒精神並促使肝臟釋放血糖。</p>
        <p>對於高壓力、長期睡眠不足者，若晨起長時間禁食，可能引發皮質醇過度過高，導致焦慮、肌肉分解與全天血糖劇烈波動。</p>

        <h3>二、16/8 間歇性斷食 vs 規律三餐的荷爾蒙與自噬作用運作差異</h3>
        <p>16/8 間歇性斷食透過延長空腹時間（16 小時），能使全天胰島素基礎位準維持在低檔，促進脂肪氧化並啟動細胞自噬作用（Autophagy）清除廢物。</p>
        <p>而規律早餐與三餐則能隨時提供穩定胺基酸，對於追求極致肌肉合成與高強度重量訓練表現的健身族群更具生理優勢。</p>

        <h3>三、跳過早餐對甲狀腺素（T3）與基礎代謝率的潛在風險</h3>
        <p>臨床觀察發現，部分高運動量、高壓力的女性或體脂偏低者，若長期跳過早餐兼嚴格限制總熱量，大腦會感應到能量匱乏。</p>
        <p>這會導致肝臟 5'-去碘酵素活性下降，游離 T3 活性甲狀腺素濃度下滑，引發基礎代謝慢、手腳冰冷甚至月經紊亂等代謝保護性停滯現象。</p>

        <h3>四、早餐宏量營養素（高蛋白 vs 高碳水）對全天食慾的控制效果</h3>
        <p>如果你選擇吃早餐，「吃什麼」遠比「吃不吃」更重要。傳統高碳水早餐（如燒餅油條、果醬吐司）會引發血糖驟升暴跌，導致中午前便產生急性反應性低血糖與劇烈飢餓感。</p>
        <p>反之，包含 30g 蛋白質的高蛋白早餐（如雞蛋、無糖豆漿、雞胸肉）則能顯著提升 PYY 與 GLP-1 飽足荷爾蒙，大幅降低全天暴飲暴食的機率。</p>

        <h3>五、運動族群晨練前後的營養補充與肌肉合成保護</h3>
        <p>習慣在早晨進行大重量重訓或高強度跑步的人，空腹訓練會導致皮質醇大幅高於胰島素，引發嚴重的肌肉蛋白質分解（Muscle Protein Breakdown）。</p>
        <p>晨練前補充少量易消化的碳水與蛋白（如半根香蕉加半份乳清），能有效鎖住肌肉組織並提供爆發力燃料。</p>

        <h3>六、KT 專家建議：如何評估自己適合斷食還是規律早餐？</h3>

        <div class="article-highlight-card">
          <h4>KT 專家建議：個人化早餐選擇指南</h4>
          <ul>
            <li><strong>適合 16/8 間歇性斷食：</strong> 久坐辦公族、體脂率偏高者、早晨無食慾且無晨練者。</li>
            <li><strong>適合規律高蛋白早餐：</strong> 高強度重量訓練者、增肌期族群、高壓力睡眠不足者、晨練族群與女性朋友。</li>
            <li>無論選擇何種策略，確保全日總熱量控制與優質蛋白質達標才是決定體態轉變的根本。</li>
          </ul>
        </div>
      `
  }
];
  const productsData = [];

  // Initialize UI Features
  initNavigation();
  initThemeToggle();
  initCalculators();
  // Initial Articles Render (Limit to 6 on Home Page)
  const isHomePage = !window.location.pathname.includes('articles.html') && !window.location.pathname.includes('shop.html') && !window.location.pathname.includes('about.html') && !window.location.pathname.includes('contact.html');
  if (isHomePage) {
    renderArticles(articlesData.slice(0, 6));
  } else {
    renderArticles(articlesData);
  }
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

    // Auto-filter category on page load if URL param ?cat= is present
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
      categoryBtns.forEach(b => {
        if (b.getAttribute('data-category') === catParam) {
          b.click();
        }
      });
    }
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
    const overlayEl = document.getElementById('articleTransitionOverlay');

    if (article && pageSecEl) {
      const renderContent = () => {
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

        // Add Entrance Animation
        pageSecEl.classList.remove('animating-in');
        void pageSecEl.offsetWidth; // force reflow
        pageSecEl.classList.add('animating-in');

        // Update URL hash & scroll to top
        window.history.replaceState(null, null, '#' + article.id);
        window.scrollTo({ top: 0, behavior: 'instant' });
      };

      if (overlayEl) {
        // Activate overlay transition loader
        overlayEl.classList.add('active');
        setTimeout(() => {
          renderContent();
          setTimeout(() => {
            overlayEl.classList.remove('active');
          }, 180);
        }, 220);
      } else {
        renderContent();
      }
    }
  };

  window.closeArticlePage = function() {
    const heroEl = document.getElementById('articlesHero');
    const gridSecEl = document.getElementById('articlesGridSection');
    const pageSecEl = document.getElementById('articlePageSection');
    const overlayEl = document.getElementById('articleTransitionOverlay');

    const executeClose = () => {
      if (pageSecEl) pageSecEl.style.display = 'none';
      if (heroEl) heroEl.style.display = 'block';
      if (gridSecEl) gridSecEl.style.display = 'block';

      // Clear hash without jump
      window.history.replaceState(null, null, window.location.pathname);
      if (gridSecEl) {
        gridSecEl.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (overlayEl) {
      overlayEl.classList.add('active');
      setTimeout(() => {
        executeClose();
        setTimeout(() => {
          overlayEl.classList.remove('active');
        }, 150);
      }, 180);
    } else {
      executeClose();
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
        const name = document.getElementById('contactName')?.value || '';
        const email = document.getElementById('contactEmail')?.value || '';
        const age = document.getElementById('contactAge')?.value || '';
        const height = document.getElementById('contactHeight')?.value || '';
        const weight = document.getElementById('contactWeight')?.value || '';
        const activity = document.getElementById('contactActivity')?.value || '';
        const goal = document.getElementById('contactGoal')?.value || '';
        const note = document.getElementById('contactNote')?.value || '無';

        const subject = encodeURIComponent(`【KT Fitness 線上諮詢】${name} 的個人諮詢表單`);
        const body = encodeURIComponent(
          `您好，我是 ${name}，以下是我的線上諮詢資料：\n\n` +
          `• 姓名：${name}\n` +
          `• Gmail 信箱：${email}\n` +
          `• 年齡：${age} 歲\n` +
          `• 身高：${height} cm\n` +
          `• 體重：${weight} kg\n` +
          `• 日常運動與活動度：${activity}\n` +
          `• 諮詢目的：${goal}\n` +
          `• 備註需求說明：\n${note}\n\n` +
          `發送時間：${new Date().toLocaleString('zh-TW')}`
        );

        window.location.href = `mailto:kt_business@ktwithjz.work?subject=${subject}&body=${body}`;
        showToast('諮詢表單已成功填寫！正為您開啟郵件系統發送至 kt_business@ktwithjz.work');
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
     MOBILE NAVIGATION DRAWER MODAL
     ========================================================================== */
  function initMobileNav() {
    let overlay = document.getElementById('mobileNavOverlay');
    let drawer = document.getElementById('mobileNavDrawer');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mobileNavOverlay';
      overlay.className = 'mobile-nav-overlay';
      document.body.appendChild(overlay);
    }

    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'mobileNavDrawer';
      drawer.className = 'mobile-nav-drawer';

      // Detect current path to highlight active nav item
      let currentPath = window.location.pathname.split('/').pop() || 'index.html';
      if (!currentPath || currentPath === '/') currentPath = 'index.html';

      drawer.innerHTML = `
        <div class="mobile-drawer-header">
          <a href="index.html" class="mobile-drawer-logo">KT FITNESS</a>
          <button type="button" class="mobile-drawer-close" id="closeMobileNav" aria-label="關閉選單">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="mobile-drawer-body">
          <ul class="mobile-drawer-nav">
            <li class="mobile-drawer-item">
              <a href="index.html" class="mobile-drawer-link ${currentPath === 'index.html' ? 'active' : ''}">
                <span>首頁</span>
                <i class="fas fa-chevron-right" style="font-size: 0.8rem; opacity: 0.5;"></i>
              </a>
            </li>
            <li class="mobile-drawer-item">
              <a href="about.html" class="mobile-drawer-link ${currentPath === 'about.html' ? 'active' : ''}">
                <span>關於我們</span>
                <i class="fas fa-chevron-right" style="font-size: 0.8rem; opacity: 0.5;"></i>
              </a>
            </li>
            <li class="mobile-drawer-item">
              <a href="articles.html" class="mobile-drawer-link ${currentPath === 'articles.html' ? 'active' : ''}">
                <span>健身專欄</span>
                <i class="fas fa-chevron-right" style="font-size: 0.8rem; opacity: 0.5;"></i>
              </a>
            </li>
            <li class="mobile-drawer-item">
              <a href="shop.html" class="mobile-drawer-link ${currentPath === 'shop.html' ? 'active' : ''}">
                <span>線上商城</span>
                <i class="fas fa-chevron-right" style="font-size: 0.8rem; opacity: 0.5;"></i>
              </a>
            </li>
            <li class="mobile-drawer-item">
              <a href="contact.html" class="mobile-drawer-link ${currentPath === 'contact.html' ? 'active' : ''}">
                <span>聯絡我們</span>
                <i class="fas fa-chevron-right" style="font-size: 0.8rem; opacity: 0.5;"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="mobile-drawer-footer">
          <div class="mobile-drawer-socials">
            <a href="https://www.instagram.com/g_y_m777" target="_blank" rel="noopener noreferrer" class="mobile-drawer-social-btn" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.threads.net/@g_y_m777" target="_blank" rel="noopener noreferrer" class="mobile-drawer-social-btn" title="Threads">
              <i class="fas fa-at"></i>
            </a>
            <a href="https://www.tiktok.com/@kurtlai945" target="_blank" rel="noopener noreferrer" class="mobile-drawer-social-btn" title="TikTok">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
          <p class="mobile-drawer-copy">© 2026 KT FITNESS. All rights reserved.</p>
        </div>
      `;
      document.body.appendChild(drawer);
    }

    const mobileToggleBtns = document.querySelectorAll('.mobile-toggle, #mobileToggle');
    const closeBtn = document.getElementById('closeMobileNav');

    function openDrawer() {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    mobileToggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openDrawer();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });

    const drawerLinks = drawer.querySelectorAll('.mobile-drawer-link');
    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
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

  // Execute all initializations
  initModals();
  initBackToTop();
  initMobileNav();
});

