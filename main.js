/**
 * ملف الجافاسكريبت الرئيسي لموقع نادي إثراء الإعلامي
 * جامعة الأمير سطام بن عبدالعزيز
 */

// انتظار تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة القائمة المتجاوبة
    initMobileMenu();
    
    // تهيئة نموذج البحث
    initSearchForm();
    
    // تهيئة علامات التبويب في صفحة المعرض
    initGalleryTabs();
    
    // تهيئة فلتر المعرض
    initGalleryFilter();
    
    // تهيئة فلتر الأنشطة
    initActivitiesFilter();
    
    // تهيئة الأسئلة الشائعة
    initFAQAccordion();
    
    // تهيئة Lightbox للصور
    initLightbox();
    
    // تهيئة التحقق من النماذج
    initFormValidation();
});

/**
 * تهيئة القائمة المتجاوبة للأجهزة المحمولة
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            
            // تغيير أيقونة القائمة
            const icon = this.querySelector('i');
            if (icon) {
                if (mainMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // إغلاق القائمة عند النقر على أي رابط
        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainMenu.classList.remove('active');
                
                // إعادة أيقونة القائمة
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

/**
 * تهيئة نموذج البحث
 */
function initSearchForm() {
    const searchToggle = document.getElementById('searchToggle');
    const searchForm = document.getElementById('searchForm');
    
    if (searchToggle && searchForm) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            searchForm.classList.toggle('active');
        });
        
        // إغلاق نموذج البحث عند النقر خارجه
        document.addEventListener('click', function(e) {
            if (!searchForm.contains(e.target) && e.target !== searchToggle) {
                searchForm.classList.remove('active');
            }
        });
    }
}

/**
 * تهيئة علامات التبويب في صفحة المعرض
 */
function initGalleryTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة الفئة النشطة من جميع الأزرار
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // إضافة الفئة النشطة للزر المنقور
                this.classList.add('active');
                
                // إخفاء جميع المحتويات
                tabContents.forEach(content => content.classList.remove('active'));
                
                // إظهار المحتوى المطلوب
                const tabId = this.getAttribute('data-tab');
                const targetTab = document.getElementById(tabId);
                if (targetTab) {
                    targetTab.classList.add('active');
                }
            });
        });
    }
}

/**
 * تهيئة فلتر المعرض
 */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة الفئة النشطة من جميع الأزرار
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // إضافة الفئة النشطة للزر المنقور
                this.classList.add('active');
                
                // الحصول على فئة الفلتر
                const filterValue = this.getAttribute('data-filter');
                
                // فلترة العناصر
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * تهيئة فلتر الأنشطة
 */
function initActivitiesFilter() {
    const filterButtons = document.querySelectorAll('.activities-filter .filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');
    
    if (filterButtons.length && activityCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة الفئة النشطة من جميع الأزرار
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // إضافة الفئة النشطة للزر المنقور
                this.classList.add('active');
                
                // الحصول على فئة الفلتر
                const filterValue = this.getAttribute('data-filter');
                
                // فلترة العناصر
                activityCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * تهيئة الأسئلة الشائعة (الأكورديون)
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', function() {
                    // إغلاق جميع العناصر الأخرى
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // تبديل حالة العنصر الحالي
                    item.classList.toggle('active');
                });
            }
        });
    }
}

/**
 * تهيئة Lightbox للصور
 */
function initLightbox() {
    // التحقق من وجود مكتبة Lightbox
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': "صورة %1 من %2",
            'fadeDuration': 300
        });
    }
}

/**
 * تهيئة التحقق من النماذج
 */
function initFormValidation() {
    // نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // التحقق من صحة البيانات
            if (validateForm(contactForm)) {
                // إظهار رسالة نجاح (في التطبيق الحقيقي سيتم إرسال البيانات للخادم)
                alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
                contactForm.reset();
            }
        });
    }
    
    // نموذج التسجيل
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // التحقق من صحة البيانات
            if (validateForm(registrationForm)) {
                // إظهار رسالة نجاح (في التطبيق الحقيقي سيتم إرسال البيانات للخادم)
                alert('تم تسجيل طلبك بنجاح! سنتواصل معك قريباً لإكمال إجراءات الانضمام.');
                registrationForm.reset();
            }
        });
    }
}

/**
 * التحقق من صحة بيانات النموذج
 * @param {HTMLFormElement} form - النموذج المراد التحقق منه
 * @returns {boolean} - نتيجة التحقق
 */
function validateForm(form) {
    let isValid = true;
    
    // الحصول على جميع الحقول المطلوبة
    const requiredFields = form.querySelectorAll('[required]');
    
    // التحقق من كل حقل
    requiredFields.forEach(field => {
        // إزالة رسائل الخطأ السابقة
        removeErrorMessage(field);
        
        // التحقق من نوع الحقل
        if (field.type === 'email') {
            // التحقق من صحة البريد الإلكتروني
            if (!validateEmail(field.value)) {
                showErrorMessage(field, 'يرجى إدخال بريد إلكتروني صحيح');
                isValid = false;
            }
        } else if (field.type === 'tel') {
            // التحقق من صحة رقم الهاتف
            if (!validatePhone(field.value)) {
                showErrorMessage(field, 'يرجى إدخال رقم هاتف صحيح');
                isValid = false;
            }
        } else {
            // التحقق من أن الحقل غير فارغ
            if (field.value.trim() === '') {
                showErrorMessage(field, 'هذا الحقل مطلوب');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

/**
 * التحقق من صحة البريد الإلكتروني
 * @param {string} email - البريد الإلكتروني المراد التحقق منه
 * @returns {boolean} - نتيجة التحقق
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * التحقق من صحة رقم الهاتف
 * @param {string} phone - رقم الهاتف المراد التحقق منه
 * @returns {boolean} - نتيجة التحقق
 */
function validatePhone(phone) {
    // تحقق بسيط من أن الرقم يحتوي على أرقام فقط ولا يقل عن 10 أرقام
    const re = /^\d{10,}$/;
    return phone === '' || re.test(phone.replace(/\s+/g, ''));
}

/**
 * إظهار رسالة خطأ للحقل
 * @param {HTMLElement} field - الحقل المراد إظهار رسالة الخطأ له
 * @param {string} message - نص رسالة الخطأ
 */
function showErrorMessage(field, message) {
    // إضافة فئة الخطأ للحقل
    field.classList.add('error');
    
    // إنشاء عنصر رسالة الخطأ
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    // إضافة رسالة الخطأ بعد الحقل
    field.parentNode.appendChild(errorElement);
}

/**
 * إزالة رسالة الخطأ من الحقل
 * @param {HTMLElement} field - الحقل المراد إزالة رسالة الخطأ منه
 */
function removeErrorMessage(field) {
    // إزالة فئة الخطأ من الحقل
    field.classList.remove('error');
    
    // البحث عن رسالة الخطأ وإزالتها
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

/**
 * تهيئة عداد تنازلي للفعاليات القادمة
 * يمكن استخدامه لإظهار العد التنازلي للفعاليات القادمة
 * @param {string} targetDate - التاريخ المستهدف بتنسيق "YYYY-MM-DD HH:MM:SS"
 * @param {string} elementId - معرف العنصر الذي سيعرض العد التنازلي
 */
function initCountdown(targetDate, elementId) {
    const countdownElement = document.getElementById(elementId);
    
    if (countdownElement) {
        // تحويل التاريخ المستهدف إلى كائن Date
        const targetTime = new Date(targetDate).getTime();
        
        // تحديث العد التنازلي كل ثانية
        const countdownInterval = setInterval(function() {
            // الحصول على الوقت الحالي
            const now = new Date().getTime();
            
            // حساب الفرق بين الوقت الحالي والوقت المستهدف
            const distance = targetTime - now;
            
            // حساب الأيام والساعات والدقائق والثواني
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // عرض العد التنازلي
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">يوم</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">ساعة</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">دقيقة</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">ثانية</span>
                </div>
            `;
            
            // إيقاف العد التنازلي عند انتهاء الوقت
            if (distance < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = '<div class="event-started">بدأت الفعالية!</div>';
            }
        }, 1000);
    }
}

/**
 * تمرير سلس إلى القسم المحدد
 * @param {string} targetId - معرف القسم المستهدف
 */
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 100, // إضافة هامش علوي
            behavior: 'smooth'
        });
    }
}

// إضافة أحداث التمرير السلس لجميع الروابط الداخلية
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
});
