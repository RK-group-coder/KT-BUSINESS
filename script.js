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
  const articlesData = [];
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
      <div class="article-card">
        <div class="article-img-wrap">
          <span class="article-category-badge">${art.categoryName}</span>
          <div style="font-size: 3.5rem; text-shadow: 0 4px 10px rgba(0,0,0,0.3);">${art.icon}</div>
        </div>
        <div class="article-body">
          <div class="article-meta">
            <span><i class="far fa-user"></i> ${art.author}</span>
            <span><i class="far fa-calendar"></i> ${art.date}</span>
            <span><i class="far fa-clock"></i> ${art.readTime}</span>
          </div>
          <h3 class="article-title">${art.title}</h3>
          <p class="article-excerpt">${art.excerpt}</p>
          <div class="article-footer">
            <a href="#" class="read-more-link" onclick="openArticleModal('${art.title}', '${art.categoryName}')">
              閱讀全文 <i class="fas fa-arrow-right"></i>
            </a>
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

  window.openArticleModal = function(title, category) {
    const modal = document.getElementById('articleModal');
    const titleEl = document.getElementById('modalArticleTitle');
    const bodyEl = document.getElementById('modalArticleBody');

    if (modal && titleEl && bodyEl) {
      titleEl.textContent = title;
      bodyEl.innerHTML = `
        <div style="margin-bottom: 1rem;"><span class="badge-new">${category}</span></div>
        <p style="margin-bottom: 1rem;">感謝您閱讀 KT Fitness 健身與營養專欄！這是一篇關於<strong>${title}</strong>的專業衛教與訓練指導文章。</p>
        <p style="margin-bottom: 1rem;">在健身這條路上，最關鍵的就是掌握正確的科學理論與持續的紀律執行。不論你是想尋求高效減脂、極限增肌或是優化身體健康數據，KT 團隊都隨時準備提供你最完整的協助。</p>
        <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--primary); margin-top: 1.5rem;">
          <h4 style="margin-bottom: 0.5rem; color: var(--text-main);">💡 專家重點整理：</h4>
          <ul style="padding-left: 1.2rem; color: var(--text-muted);">
            <li>控制總熱量攝取（遵守熱量赤字或盈餘原則）</li>
            <li>確保充足的優質蛋白質與深層睡眠修復</li>
            <li>循序漸進增加重訓負荷（Progressive Overload）</li>
          </ul>
        </div>
      `;
      modal.classList.add('active');
    }
  };

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
            <div style="padding: 0.75rem; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="openArticleModal('${m.title}', '${m.categoryName}'); document.getElementById('searchModal').classList.remove('active');">
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
