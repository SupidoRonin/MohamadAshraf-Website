(function() {
    const lanBtn = document.querySelector('.lan-btn');
    
    const translations = {
        "en": {
            "web-title": "Onyx - Website",
            "logo": "Onyx <span>Pulse.</span>",
            "home-link": "Home",
            "about-link": "About Me",
            "skills-link": "Skills",
            "courses-link": "My Courses",
            "projects-link": "My Projects",
            "contact-link": "Contact Me",
            "title": "Hey, Here is ",
            "title_span": "Onyx",
            "typed_strings": ["Programmer", "Designer", "Trainer", "Fullstack Developer", "App Developer", "Game Developer"],
            "about-button": "More About Me",
            "contact-button": "Let's get in touch",
            "about-heading": "About <span>Me</span>",
            "about-details": "Details: ",
            "name": "Name: Mohamad Ashraf Ahmad.",
            "age-birth": "Age & Birth: 15, 2009 / September / 03.",
            "location": "Location: El Zahraa, Dokki, Giza, Egypt.",
            "skills-heading": "My <span>Skills</span>",
            "technical-skills-heading": "Technical Skills",
            "professional-skills-heading": "Professional Skills",
            "soft-skills-heading": "Soft Skills",
            "problem-solving-heading": "Problem Solving",
            "time-management-heading": "Time Management",
            "team-management-heading": "Team Management",
            "courses-heading": "My <span>Courses</span>",
            "web-development-heading": "Web Development",
            "web-development-description": "Involves creating, building, and maintaining websites and web applications.",
            "ai-development-heading": "Ai Development",
            "ai-development-description": "The process of creating, training, and deploying artificial intelligence systems.",
            "game-development-heading": "Game Development",
            "game-development-description": "the process of designing, creating, and releasing video games. It combines creativity, storytelling, programming, and design to build interactive experiences.",
            "design-heading": "Design",
            "design-description": " broad discipline focused on creating solutions that are both functional and aesthetically pleasing.",
            "training-heading": "Training",
            "training-description": "the process of transferring knowledge, skills, or attitudes from one person to others with the goal of helping them.",
            "hardware-development-heading": "Hardware Development",
            "hardware-development-description": "the process of designing, building, testing, and producing physical electronic components and systems.",
            "project-button": "Let's see",
            "projects-heading": "My <span>Projects</span>",
            "contact-heading": "Contact <span>Me</span>",
            "phone-number": "Phone Number",
            "email": "Email",
            "coming-soon": "Coming Soon",
            "contact-form-title": "Contact Me",
            "cancel": "Cancel",
            "send": "Send",
            "faq": "FAQ",
            "about-me": "About <span>Me</span>",
            "my-projects": "My <span>Projects</span>",
            "contact-me": "Contact <span>Me</span>",
            "copyright": "© Mohamad Ashraf | All Rights Reserved",
            
            // Form placeholders
            "placeholder-name": "Name",
            "placeholder-email": "Email",
            "placeholder-phone": "Phone Number",
            "placeholder-message": "Message"
        },

        "ar": {
            "web-title": "أونيكس - الموقع الإلكتروني",
            "logo": "أونيكس <span>بولس.</span>",
            "home-link": "الصفحة الرئيسية",
            "about-link": "عني",
            "skills-link": "مهاراتي",
            "courses-link": "دوراتي",
            "projects-link": "مشاريعي",
            "contact-link": "تواصل معي",
            "title": "مرحباً، هنا ",
            "title_span": "أونيكس",
            "typed_strings": ["مبرمج", "مصمم", "مدرب", "مطور فول ستاك", "مطور تطبيقات", "مطور ألعاب"],
            "about-button": "المزيد عني",
            "contact-button": "لنتواصل",
            "about-heading": "عني <span></span>",
            "about-details": "تفاصيل: ",
            "name": "الاسم: محمد أشرف أحمد.",
            "age-birth": "العمر وتاريخ الميلاد: 15، 2009 / سبتمبر / 03.",
            "location": "الموقع: الزهراء، الدقى، الجيزة، مصر.",
            "skills-heading": "مهاراتي <span></span>",
            "technical-skills-heading": "المهارات التقنية",
            "professional-skills-heading": "المهارات المهنية",
            "soft-skills-heading": "المهارات الشخصية",
            "problem-solving-heading": "حل المشكلات",
            "time-management-heading": "إدارة الوقت",
            "team-management-heading": "إدارة الفريق",
            "courses-heading": "دوراتي <span></span>",
            "web-development-heading": "تطوير المواقع",
            "web-development-description": "يتضمن إنشاء وبناء وصيانة المواقع والتطبيقات الإلكترونية.",
            "ai-development-heading": "تطوير الذكاء الاصطناعي",
            "ai-development-description": "عملية إنشاء وتدريب ونشر أنظمة الذكاء الاصطناعي.",
            "game-development-heading": "تطوير الألعاب",
            "game-development-description": "هي عملية تصميم وإنشاء وإصدار ألعاب الفيديو. إنها تجمع بين الإبداع، وسرد القصص، والبرمجة، والتصميم لبناء تجارب تفاعلية.",
            "design-heading": "التصميم",
            "design-description": "هي تخصص واسع يركز على خلق حلول تكون وظيفية وجذابة من الناحية الجمالية.",
            "training-heading": "التدريب",
            "training-description": "هي عملية نقل المعرفة أو المهارات أو المواقف من شخص إلى آخر بهدف مساعدتهم.",
            "hardware-development-heading": "تطوير الأجهزة",
            "hardware-development-description": "هي عملية تصميم وبناء واختبار وإنتاج المكونات والأنظمة الإلكترونية المادية.",
            "project-button": "لنرَ",
            "projects-heading": "مشاريعي <span></span>",
            "contact-heading": "تواصل معي <span></span>",
            "phone-number": "رقم الهاتف",
            "email": "البريد الإلكتروني",
            "coming-soon": "قريباً",
            "contact-form-title": "تواصل معي",
            "cancel": "إلغاء",
            "send": "إرسال",
            "faq": "الأسئلة الشائعة",
            "about-me": "عني <span></span>",
            "my-projects": "مشاريعي <span></span>",
            "contact-me": "تواصل معي <span></span>",
            "copyright": "© محمد أشرف | جميع الحقوق محفوظة",
            
            // Form placeholders
            "placeholder-name": "الاسم",
            "placeholder-email": "البريد الإلكتروني",
            "placeholder-phone": "رقم الهاتف",
            "placeholder-message": "الرسالة"
        }
    };
    
    // Elements that should use innerHTML to preserve HTML tags like <span>
    const htmlElements = [
        'logo', 'about-heading', 'skills-heading', 'courses-heading', 
        'projects-heading', 'contact-heading', 'about-me', 'my-projects', 'contact-me'
    ];
    
    let currentLang = localStorage.getItem('language') || 'en';
    let isAnimating = false; // Prevent multiple clicks during animation
    
    // Apply saved language on page load
    window.addEventListener('load', () => {
        if (currentLang === 'ar') {
            applyLanguage('ar', false); // No animation on page load
        }
    });
    
    // Toggle language on button click
    if (lanBtn) {
        lanBtn.addEventListener('click', () => {
            if (isAnimating) return; // Ignore clicks during animation
            
            lanBtn.classList.add('rotating'); // Add rotation to button
            
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            applyLanguage(newLang, true); // With animation
            currentLang = newLang;
            localStorage.setItem('language', currentLang);
            
            // Remove the rotating class after animation completes
            setTimeout(() => {
                lanBtn.classList.remove('rotating');
            }, 500);
        });
    }
    
    function applyLanguage(lang, withAnimation = false) {
        console.log('Applying language:', lang);
        
        if (withAnimation) {
            isAnimating = true;
            document.body.classList.add('language-transitioning');
            
            // Determine animation direction
            const slideOutClass = lang === 'ar' ? 'language-slide-out-ltr' : 'language-slide-out-rtl';
            const slideInClass = lang === 'ar' ? 'language-slide-in-rtl' : 'language-slide-in-ltr';
            
            // Slide out
            document.body.classList.add(slideOutClass);
            
            // After slide out completes, change content and slide in
            setTimeout(() => {
                document.body.classList.remove(slideOutClass);
                updateContent(lang);
                
                // Trigger reflow to ensure the animation restarts properly
                void document.body.offsetWidth;
                
                // Add slide in class
                document.body.classList.add(slideInClass);
                
                // Clean up after slide in completes
                setTimeout(() => {
                    document.body.classList.remove(slideInClass, 'language-transitioning');
                    isAnimating = false;
                }, 400);
            }, 400);
        } else {
            // No animation, just update
            updateContent(lang);
        }
    }
    
    function updateContent(lang) {
        console.log('Updating content to:', lang);
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            
            // Skip the description as Typed.js handles it
            if (key === 'description') return;
            
            // Special handling for title to preserve the span
            if (key === 'title') {
                if (translations[lang]) {
                    element.innerHTML = translations[lang]['title'] + '<span id="outline">' + translations[lang]['title_span'] + '</span>';
                    console.log('Updated title with span preserved');
                }
            } 
            // Use innerHTML for elements that contain HTML tags
            else if (htmlElements.includes(key)) {
                if (translations[lang] && translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                    console.log('Updated', key, 'with innerHTML to preserve HTML');
                }
            }
            // Use textContent for plain text elements
            else if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
                console.log('Updated', key, 'to', translations[lang][key]);
            }
        });
        
        // Update form input placeholders
        updatePlaceholders(lang);
        
        // Update Typed.js if strings are available
        if (translations[lang] && translations[lang]['typed_strings']) {
            // Destroy the existing Typed instance
            if (window.typed) {
                window.typed.destroy();
            }
            
            // Create new Typed instance with translated strings
            window.typed = new Typed(".multiple-text", {
                strings: translations[lang]['typed_strings'],
                typeSpeed: 150,
                backSpeed: 150,
                loop: true
            });
            console.log('Typed.js updated with:', translations[lang]['typed_strings']);
        }
        
        // Change HTML and BODY direction and lang attribute
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        console.log('Direction set to:', lang === 'ar' ? 'rtl' : 'ltr');
    }
    
    function updatePlaceholders(lang) {
        // Update input placeholders
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        
        if (nameInput && translations[lang]['placeholder-name']) {
            nameInput.placeholder = translations[lang]['placeholder-name'];
        }
        
        if (emailInput && translations[lang]['placeholder-email']) {
            emailInput.placeholder = translations[lang]['placeholder-email'];
        }
        
        if (phoneInput && translations[lang]['placeholder-phone']) {
            phoneInput.placeholder = translations[lang]['placeholder-phone'];
        }
        
        if (messageInput && translations[lang]['placeholder-message']) {
            messageInput.placeholder = translations[lang]['placeholder-message'];
        }
        
        console.log('Updated form placeholders to:', lang);
    }
})();