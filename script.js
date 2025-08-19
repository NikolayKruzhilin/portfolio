// === Translations ===
const translations = {
    ru: {
        nav_home: "Главная",
        nav_cv: "Резюме",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        chat_title: "Чат с nikol.AI",
        online_status: "В сети",
        welcome_message: "Привет! Я nikol.AI, ваш виртуальный ассистент. Как дела? Чем могу помочь?",
        input_placeholder: "Введите сообщение...",
        cv_title: "Резюме",
        cv_name: "Николай Кружилин",
        cv_position: "Продуктовый менеджер / Маркетинг-менеджер / IT-специалист",
        cv_description: "Многопрофильный специалист с международным опытом в сфере образования, управления продуктами, маркетинга и операционной деятельности. Обладает навыками в области технологий, дизайна, управления проектами и интеграции API. Эффективно работает с мультикультурными командами, управляет сложными проектами и добивается результатов в корпоративной и креативной среде.",
        cv_skills: "Технические навыки",
        cv_experience: "Опыт работы",
        cv_exp_desc: "<p><strong>Продуктовый менеджер, Zhejiang Hongji New Energy Technology Company (май 2023 – июнь 2025)</strong><br> Руководил разработкой и запуском продукта AIC thermal coating. Проводил маркетинговые исследования, формировал стратегию продукта, координировал работу с международными партнёрами.</p> <p><strong>Академический менеджер, i2 International Education Center, Guangxi (октябрь 2021 – март 2023)</strong><br> Разработал и внедрил академические программы для 88 кампусов в 17 городах. Обучал более 40 иностранных преподавателей, создавал PBL-активности, сотрудничал с Trinity College London.</p> <p><strong>Маркетинг-менеджер, Shenzhen Yangcai Information Consulting Co., Ltd. (сентябрь 2018 – май 2021)</strong><br> Управлял цифровыми маркетинговыми кампаниями, стратегиями Amazon и рекламными проектами. Руководил межфункциональными командами по копирайтингу, переводу и мультимедийному производству.</p> <p><strong>Менеджер по снабжению, Мескаль (2014 – 2018)</strong><br> Вёл переговоры с поставщиками, осуществлял контроль качества, обработку заказов и логистику поставок. Организовывал визиты на фабрики и поддерживал связи с поставщиками в России и за рубежом.</p> <p><strong>Фриланс‑проекты</strong>: Маркетинг и фотография для BMW, Tracy’s Dog, Donner.</p>",
        cv_education: "Образование",
        cv_edu_desc: "<p><strong>Специалист</strong> — Перевод и переводоведение (английский и китайский языки), Томский Государственный Университет (с отличием), 2013.</p> <p>Годичный курс, Ляонинский Педагогический Университет (2013–2014).</p>",
        projects_title: "Проекты",
        project1_title: "nikol.AI Assistant",
        project1_desc: "Интеллектуальный чат-бот с поддержкой множества языков и современным пользовательским интерфейсом.",
        project1_details: "Подробное описание проекта nikol.AI Assistant. Это прототип, добавьте реальные детали позже.",
        project1_media: [
            { type: 'image', src: 'img/nikol.AI Assistant/image01.png', alt: 'Placeholder Image 1' },
            { type: 'image', src: 'img/nikol.AI Assistant/image02.png', alt: 'Placeholder Image 2' },
            { type: 'video', src: 'https://vimeo.com/placeholder-video-id', thumbnail: 'img/nikol.AI Assistant/video-thumbnail.png' }
        ],
        project2_title: "Веб-платформа",
        project2_desc: "Современная веб-платформа с адаптивным дизайном и высокой производительностью.",
        project2_details: "Подробное описание проекта Веб-платформа. Это прототип, добавьте реальные детали позже.",
        project2_media: [
            { type: 'image', src: 'img/Web-platforma/image01.png', alt: 'Placeholder Image 1' }
        ],
        project3_title: "API микросервис",
        project3_desc: "Масштабируемый API сервис с микросервисной архитектурой и современными технологиями.",
        project3_details: "Подробное описание проекта API микросервис. Это прототип, добавьте реальные детали позже.",
        project3_media: [
            { type: 'video', src: 'https://vimeo.com/placeholder-video-id', thumbnail: 'img/API mikroservis/video-thumbnail.png' }
        ],
        contact_title: "Контактная информация",
        contact_email: "Электронная почта",
        contact_phone: "Телефон",
        bot_responses: [
            "Понимаю, интересный вопрос. Расскажите подробнее.",
            "Это действительно важная тема. Что вас больше всего беспокоит?",
            "Хороший вопрос! Позвольте подумать над этим.",
            "Звучит интересно. Какие у вас планы на этот счет?",
            "Я готов помочь. Есть ли еще что-то, что вас интересует?"
        ],
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "Кибербезопасность",
        cv_skill_6: "UX‑дизайн",
        cv_skill_7: "Управление проектами",
        cv_skill_8: "Интеграция API",
        cv_skill_9: "Администрирование домашних серверов",
        cv_skill_10: "n8n автоматизация",
        cv_skill_11: "Контекстное проектирование",
        cv_skill_12: "Цифровой маркетинг",
        cv_skill_13: "Фотография"
    ,
        "nav_about": "Обо мне"
    ,
        "about_title": "Обо мне"
    ,
        "about_paragraph": "В прошлом я был профессиональным спортсменом, обладаю 2-м даном по карате и титулом чемпиона мира по версии IMGKA. Увлекаюсь уличной фотографией и преподаю фотографию и кинематографию. Активно занимаюсь волонтерством в приютах для животных и помогаю бездомным животным. Кроме того, я являюсь создателем проекта #createtodonate."
    ,
        "about_card_1_title": "Карате"
    ,
        "about_card_1_desc": "Мой путь в карате начался в раннем возрасте. Я достиг 2-го дана, звание КМС и стал чемпионом мира по версии IMGKA. <br><a href=\"http://goju.tomsk.ru/%d0%b0%d1%80%d1%85%d0%b8%d0%b2/2009-2013/\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на сайт</a>"
    ,
        "about_card_2_title": "Уличная фотография"
    ,
        "about_card_2_desc": "Увлечение уличной фотографией позволяет мне захватывать моменты повседневной жизни. Вот некоторые из моих лучших работ."
    ,
        "about_card_3_title": "Преподавание"
    ,
        "about_card_3_desc": "Провожу курсы по фотографии и кинематографии, помогая другим развивать свои творческие навыки. <br><a href=\"https://drive.google.com/file/d/1nT3mK1JcWLR3qKYz8srBitZair1Zzmep/view\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на видео</a>"
    ,
        "about_card_4_title": "Волонтерство"
    ,
        "about_card_4_desc": "Я регулярно помогаю в приютах для животных и ухаживаю за бездомными животными. <br><a href=\"https://www.youtube.com/watch?v=xkOxdTTbjfg\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на видео</a>"
    ,
        "about_card_5_title": "#createtodonate"
    ,
        "about_card_5_desc": "#createtodonate - проект, где творчество используется для сбора средств на благотворительность."
    ,
        "cv_skill_sql": "SQL"
    ,
        "cv_skill_linux": "Linux"
    ,
        "cv_skill_jira": "Jira"
    ,
        "project1_title": "BMW x BOLT"
    ,
        "project1_desc": "Кампейн с BOLT studio — поддержка возвращения BMW на китайский рынок после локдауна: позитивный визуальный рассказ и кинематографичный ролик."
    ,
        "project1_details": "Работа над рекламной кампанией с BOLT production: концепция, съёмки и монтаж, фокус на позитивной истории и возрождении бренда на рынке."
    ,
        "project1_media": [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ]
    ,
        "project2_title": "Tracy's Dog"
    ,
        "project2_desc": "Продуктовая фотосъёмка, бренд‑стратегия и контент для соцсетей с фокусом на любви и интимности."
    ,
        "project2_details": "Разработка визуального стиля, фотосессии для e-commerce и создание контент-стратегии для Instagram и сайта. <a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Перейти на сайт</a>"
    ,
        "project2_media": [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy\'s Dog" } ]
    ,
        "project3_title": "Donner"
    ,
        "project3_desc": "Фотография и видео для музыкальных инструментов — маркетинговые материалы и продуктовые видео."
    ,
        "project3_details": "Съёмки продуктов, пост‑продакшн видеороликов и создание ассетов для онлайн‑маркетинга."
    ,
        "project3_media": [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ]
    ,
        "project4_title": "Kwan Yee Gor"
    ,
        "project4_desc": "Кампейн для бренда геля для волос — концепция видео, режиссура и продакшн."
    ,
        "project4_details": "Режиссура и постановка рекламного видео, продакшн‑сопровождение; продуктовая фотосъёмка для listings."
    ,
        "project4_media": [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ]
    ,
        "project5_title": "AIC Thermal Coating"
    ,
        "project5_desc": "Продуктовый менеджмент и маркетинг для AIC — упаковка, сайт и координация команд."
    ,
        "project5_details": "Организация межкомандной работы, дизайн упаковки, материалы для продаж и веб‑презентация продукта."
    ,
        "project5_media": [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ]
    ,
        "project6_title": "Zen & Zany"
    ,
        "project6_desc": "Фриланс‑работы по фото и видео для различных брендов и кампаний."
    ,
        "project6_details": "Креативный контент, видеомонтаж и фотография для рекламных проектов."
    ,
        "project6_media": [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ]
    ,
        "project7_title": "Cybersecurity"
    ,
        "project7_desc": "Хобби: домашние серверы, SBC, автоматизация и инструментирование для мониторинга сети."
    ,
        "project7_details": "Эксперименты с ESP32 и Chameleon, развёртывание homelab и разработка инструментов для тестирования безопасности."
    ,
        "project7_media": [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ]
    ,
        "project8_title": "EdTech Web App"
    ,
        "project8_desc": "Рабочее веб-приложение, используемое преподавателями для подготовки к занятиям и практики студентов."
    ,
        "project8_details": "Рабочее веб‑приложение, помогающее преподавателям оптимизировать подготовку уроков и планирование практических занятий. <a href=\"https://nikdracula.github.io/Education-Web-App/\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на приложение</a>"
    ,
        "project8_media": []
    ,
        "project1_video_url": "https://vimeo.com/410880058"
    ,
        "project3_video_url": "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4"
    ,
        "project4_video_url": "https://www.youtube.com/watch?v=fdaAh7LNa6U"
    ,
        "project6_video_url": "https://www.youtube.com/watch?v=efzwt1-cEug"
    ,
        "project_video_link": "Ссылка на видео"
    },
    en: {
        nav_home: "Home",
        nav_cv: "Resume",
        nav_projects: "Projects",
        nav_contact: "Contact",
        chat_title: "Chat with nikol.AI",
        online_status: "Online",
        welcome_message: "Hello! I'm nikol.AI, your virtual assistant. How are you? How can I help?",
        input_placeholder: "Type a message...",
        cv_title: "Resume",
        cv_name: "Nikolay Kruzhilin",
        cv_position: "Product Manager / Marketing Manager / IT Specialist",
        cv_description: "Multidisciplinary professional with international experience in education, product management, marketing, and operations. Skilled in technology, design, project management, and API integration. Adept at leading multicultural teams, managing complex projects, and delivering results in both corporate and creative environments.",
        cv_skills: "Technical Skills",
        cv_experience: "Work Experience",
        cv_exp_desc: "<p><strong>Product Manager, Zhejiang Hongji New Energy Technology Company (May 2023 – June 2025)</strong><br> Directed the development and launch of AIC thermal coating. Led market research, product strategy, and international partner coordination. Enhanced brand presence in global markets.</p> <p><strong>Academic Manager, i2 International Education Center, Guangxi (Oct 2021 – Mar 2023)</strong><br> Developed academic programs for 88 campuses in 17 cities. Trained 40+ foreign teachers, created phenomenon-based learning activities, and established partnerships with Trinity College London.</p> <p><strong>Marketing Manager, Shenzhen Yangcai Information Consulting Co., Ltd. (Sep 2018 – May 2021)</strong><br> Managed digital marketing campaigns, Amazon strategies, and advertising projects. Led cross-functional teams in copywriting, translation, and multimedia production.</p> <p><strong>Supply Manager, Meskal “Мескаль” (2014 – 2018)</strong><br> Oversaw supplier negotiations, quality control, order processing, and shipping logistics. Coordinated factory visits and maintained relationships with domestic and international suppliers.</p> <p><strong>Freelance Projects</strong>: Marketing and photography work for BMW, Tracy’s Dog, and Donner.</p>",
        cv_education: "Education",
        cv_edu_desc: "<p><strong>Master’s Degree in Linguistics and Translation</strong> (English & Chinese), Tomsk State University — with honors (2013).</p> <p>One-year course, Liaoning Pedagogical University (2013–2014).</p>",
        projects_title: "Projects",
        project1_title: "nikol.AI Assistant",
        project1_desc: "Intelligent chatbot with multilingual support and modern user interface.",
        project1_details: "Detailed description of nikol.AI Assistant project. This is a prototype, add real details later.",
        project1_media: [
            { type: 'image', src: 'img/nikol.AI Assistant/image01.png', alt: 'Placeholder Image 1' },
            { type: 'image', src: 'img/nikol.AI Assistant/image02.png', alt: 'Placeholder Image 2' },
            { type: 'video', src: 'https://vimeo.com/placeholder-video-id', thumbnail: 'img/nikol.AI Assistant/video-thumbnail.png' }
        ],
        project2_title: "Web Platform",
        project2_desc: "Modern web platform with responsive design and high performance.",
        project2_details: "Detailed description of Web Platform project. This is a prototype, add real details later.",
        project2_media: [
            { type: 'image', src: 'img/Web-platforma/image01.png', alt: 'Placeholder Image 1' }
        ],
        project3_title: "API Microservice",
        project3_desc: "Scalable API service with microservice architecture and modern technologies.",
        project3_details: "Detailed description of API Microservice project. This is a prototype, add real details later.",
        project3_media: [
            { type: 'video', src: 'https://vimeo.com/placeholder-video-id', thumbnail: 'img/API mikroservis/video-thumbnail.png' }
        ],
        contact_title: "Contact Information",
        contact_email: "Email",
        contact_phone: "Phone",
        bot_responses: [
            "I understand, interesting question. Tell me more.",
            "This is indeed an important topic. What's most concerning to you?",
            "Good question! Let me think about it.",
            "Sounds interesting. What are your plans regarding this?",
            "I'm ready to help. Is there anything else you're interested in?"
        ],
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "Cybersecurity",
        cv_skill_6: "UX Design",
        cv_skill_7: "Project Management",
        cv_skill_8: "API Integration",
        cv_skill_9: "Homelab Server Administration",
        cv_skill_10: "n8n Automation",
        cv_skill_11: "Context Engineering",
        cv_skill_12: "Digital Marketing",
        cv_skill_13: "Photography"
    ,
        "nav_about": "About"
    ,
        "about_title": "About me"
    ,
        "about_paragraph": "In the past I was a professional athlete; I hold a 2nd dan in karate and the IMGKA world champion title. I enjoy street photography and teach photography and cinematography. I actively volunteer in animal shelters and help homeless animals. I am also the creator of the #createtodonate project."
    ,
        "about_card_1_title": "Karate"
    ,
        "about_card_1_desc": "My karate journey started at an early age. I reached 2nd dan, the Candidate for Master of Sport (KMS) rank, and became IMGKA world champion. <br><a href=\"http://goju.tomsk.ru/%d0%b0%d1%80%d1%85%d0%b8%d0%b2/2009-2013/\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the website</a>"
    ,
        "about_card_2_title": "Street Photography"
    ,
        "about_card_2_desc": "Street photography allows me to capture everyday life moments. Here are some of my best works."
    ,
        "about_card_3_title": "Teaching"
    ,
        "about_card_3_desc": "I run courses on photography and cinematography, helping others develop creative skills. <br><a href=\"https://drive.google.com/file/d/1nT3mK1JcWLR3qKYz8srBitZair1Zzmep/view\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the video</a>"
    ,
        "about_card_4_title": "Volunteering"
    ,
        "about_card_4_desc": "I regularly help at animal shelters and care for homeless animals. <br><a href=\"https://www.youtube.com/watch?v=xkOxdTTbjfg\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the video</a>"
    ,
        "about_card_5_title": "#createtodonate"
    ,
        "about_card_5_desc": "#createtodonate — a project where creativity is used to raise funds for charity."
    ,
        "cv_skill_sql": "SQL"
    ,
        "cv_skill_linux": "Linux"
    ,
        "cv_skill_jira": "Jira"
    ,
        "project1_title": "BMW x BOLT"
    ,
        "project1_desc": "An uplifting campaign with BOLT studio supporting BMW’s return to the Chinese market after COVID; cinematic visuals and optimistic storytelling."
    ,
        "project1_details": "Produced creative direction, filming and post‑production with BOLT — a campaign celebrating renewal and positivity for BMW’s market reentry."
    ,
        "project1_media": [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ]
    ,
        "project2_title": "Tracy's Dog"
    ,
        "project2_desc": "Product photography and brand development emphasizing love and intimacy in place of crude imagery."
    ,
        "project2_details": "Photography for e-commerce, visual identity and social content strategy for Tracy’s Dog. <a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Visit website</a>"
    ,
        "project2_media": [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy\'s Dog" } ]
    ,
        "project3_title": "Donner"
    ,
        "project3_desc": "Photography and videography for Donner instruments; marketing assets and product videos."
    ,
        "project3_details": "Shot product visuals and produced video content to enhance Donner's online presence."
    ,
        "project3_media": [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ]
    ,
        "project4_title": "Kwan Yee Gor"
    ,
        "project4_desc": "Concept and direction for a hair pomade campaign — video direction and product photography."
    ,
        "project4_details": "Directed and produced campaign films, oversaw on‑set direction and delivered product photography for listings."
    ,
        "project4_media": [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ]
    ,
        "project5_title": "AIC Thermal Coating"
    ,
        "project5_desc": "Product management and marketing for AIC: packaging, website and cross‑team coordination."
    ,
        "project5_details": "Managed multi‑team execution, packaging design, web materials and marketing collateral to bring AIC to market."
    ,
        "project5_media": [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ]
    ,
        "project6_title": "Zen & Zany"
    ,
        "project6_desc": "Freelance creative work: photography, videography and editing for brand campaigns."
    ,
        "project6_details": "Produced creative content, edited video, and supported campaign rollouts for multiple clients."
    ,
        "project6_media": [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ]
    ,
        "project7_title": "Cybersecurity"
    ,
        "project7_desc": "Homelab experiments, SBC tinkering, automation and tools for network monitoring and testing."
    ,
        "project7_details": "Building tools on ESP32 and Chameleon boards, running homelab services and testing security tooling."
    ,
        "project7_media": [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ]
    ,
        "project8_title": "EdTech Web App"
    ,
        "project8_desc": "A working web application used by teachers for class prep and student practice."
    ,
        "project8_details": "A working web application used by teachers to streamline lesson prep and student practice scheduling. <a href=\"https://nikdracula.github.io/Education-Web-App/\" target=\"_blank\" rel=\"noopener noreferrer\">View the app</a>"
    ,
        "project8_media": []
    ,
        "project1_video_url": "https://vimeo.com/410880058"
    ,
        "project3_video_url": "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4"
    ,
        "project4_video_url": "https://www.youtube.com/watch?v=fdaAh7LNa6U"
    ,
        "project6_video_url": "https://www.youtube.com/watch?v=efzwt1-cEug"
    ,
        "project_video_link": "See the video here"
    },
    zh: {
        nav_home: "首页",
        nav_cv: "简历",
        nav_projects: "项目",
        nav_contact: "联系方式",
        chat_title: "与nikol.AI聊天",
        online_status: "在线",
        welcome_message: "你好！我是nikol.AI，你的虚拟助手。你好吗？我能帮什么？",
        input_placeholder: "输入消息...",
        cv_title: "简历",
        cv_name: "Nikolay Kruzhilin",
        cv_position: "产品经理 / 市场经理 / IT专家",
        cv_description: "具备教育管理、产品开发、市场营销和运营方面的国际化经验。熟悉技术、设计、项目管理和API集成。擅长带领跨文化团队、管理复杂项目，并在企业与创意领域中取得实质成果。",
        cv_skills: "技术技能",
        cv_experience: "工作经验",
        cv_exp_desc: "<p><strong>产品经理, 浙江宏基新能源科技有限公司 (2023年5月 – 2025年6月)</strong><br> 主导AIC隔热涂层的开发与发布。进行市场调研、制定产品战略，并与国际合作伙伴协调合作。</p> <p><strong>学术经理, i2国际教育中心（广西） (2021年10月 – 2023年3月)</strong><br> 为17个城市的88个校区设计并实施新的学术项目。培训40多名外籍教师，开发基于现象的学习活动，并与伦敦三一学院建立合作关系。</p> <p><strong>市场经理, 深圳洋彩信息咨询有限公司 (2018年9月 – 2021年5月)</strong><br> 管理数字营销活动、亚马逊产品策略及广告项目。领导跨部门团队从事文案撰写、翻译及多媒体制作。</p> <p><strong>供应经理, Мескаль (2014年 – 2018年)</strong><br> 负责供应商谈判、质量控制、订单处理及运输物流。组织工厂考察并维护国内外供应商关系。</p> <p><strong>自由职业项目</strong>: 为BMW、Tracy’s Dog和Donner提供市场营销和摄影服务。</p>",
        cv_education: "教育背景",
        cv_edu_desc: "<p><strong>语言学与翻译硕士</strong>（英语和汉语），托木斯克国立大学，2013年（优等毕业）。</p> <p>一年制课程，辽宁师范大学（2013–2014）。</p>",
        projects_title: "项目",
        project1_title: "nikol.AI Assistant",
        project1_desc: "智能聊天机器人，支持多语言和现代用户界面。",
        project1_details: "Detailed description of nikol.AI Assistant project. This is a prototype, add real details later.",
        project1_media: [
            { type: 'image', src: 'img/nikol.AI Assistant/image01.png', alt: 'Placeholder Image 1' },
            { type: 'image', src: 'img/nikol.AI Assistant/image02.png', alt: 'Placeholder Image 2' },
            { type: 'video', src: 'https://vimeo.com/placeholder-video-id', thumbnail: 'img/nikol.AI Assistant/video-thumbnail.png' }
        ],
        project2_title: "Web Platform",
        project2_desc: "具有响应式设计和高性能的现代网络平台。",
        project2_details: "Detailed description of Web Platform project. This is a prototype, add real details later.",
        project2_media: [
            { type: 'image', src: 'img/Web-platforma/image01.png', alt: 'Placeholder Image 1' }
        ],
        project3_title: "API Microservice",
        project3_desc: "具有微服务架构和现代技术的可扩展API服务。",
        project3_details: "Detailed description of API Microservice project. This is a prototype, add real details later.",
        project3_media: [
            { type: 'video', src: 'https://vimeo.com/placeholder-video-id', thumbnail: 'img/API mikroservis/video-thumbnail.png' }
        ],
        contact_title: "联系信息",
        contact_email: "电子邮件",
        contact_phone: "电话",
        bot_responses: [
            "我理解，很有趣的问题。告诉我更多相关信息。",
            "这确实是一个重要话题。什么最让你担心？",
            "好问题！让我想想。",
            "听起来很有趣。你对此有什么计划？",
            "我准备好帮助你。还有其他感兴趣的事情吗？"
        ],
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "网络安全",
        cv_skill_6: "用户体验设计",
        cv_skill_7: "项目管理",
        cv_skill_8: "API集成",
        cv_skill_9: "家庭实验室服务器管理",
        cv_skill_10: "n8n自动化",
        cv_skill_11: "上下文工程",
        cv_skill_12: "数字营销",
        cv_skill_13: "摄影"
    ,
        "nav_about": "关于我"
    ,
        "about_title": "关于我"
    ,
        "about_paragraph": "过去我是职业运动员，拥有空手道二段并获得 IMGKA 世界冠军头衔。我喜欢街头摄影并教授摄影与电影学。积极参与动物收容所的志愿工作，帮助无家可归的动物。此外，我还是 #createtodonate 项目的创建者。"
    ,
        "about_card_1_title": "空手道"
    ,
        "about_card_1_desc": "我的空手道之路始于年幼时。我达到二段，获得候补运动员称号（KMS），并成为 IMGKA 世界冠军。"
    ,
        "about_card_2_title": "街头摄影"
    ,
        "about_card_2_desc": "街头摄影让我捕捉日常生活的瞬间。以下是我的一些代表作品。"
    ,
        "about_card_3_title": "教学"
    ,
        "about_card_3_desc": "我开设摄影和电影学课程，帮助他人发展创作技能。"
    ,
        "about_card_4_title": "志愿服务"
    ,
        "about_card_4_desc": "我定期在动物收容所提供帮助并照顾无家动物。"
    ,
        "about_card_5_title": "#createtodonate"
    ,
        "about_card_5_desc": "#createtodonate — 一个通过创意为慈善筹款的项目。"
    ,
        "cv_skill_sql": "SQL"
    ,
        "cv_skill_linux": "Linux"
    ,
        "cv_skill_jira": "Jira"
    ,
        "project1_title": "BMW x BOLT"
    ,
        "project1_desc": "与BOLT工作室合作的振奋人心的活动，支持BMW在疫情后重返中国市场，展现乐观叙事与电影化影像。"
    ,
        "project1_details": "与BOLT制作团队合作：创意方向、拍摄与后期，打造庆祝品牌复苏的活动。"
    ,
        "project1_media": [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ]
    ,
        "project2_title": "Tracy's Dog"
    ,
        "project2_desc": "产品摄影与品牌建设，强调爱与亲密而非粗俗感。"
    ,
        "project2_details": "为电商拍摄产品图，建立视觉风格并制定社交内容策略。<a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">访问网站</a>"
    ,
        "project2_media": [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy\'s Dog" } ]
    ,
        "project3_title": "Donner"
    ,
        "project3_desc": "为Donner乐器提供摄影与视频制作，生成营销素材与产品视频。"
    ,
        "project3_details": "拍摄产品视觉并制作视频内容以提升在线展示效果。"
    ,
        "project3_media": [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ]
    ,
        "project4_title": "Kwan Yee Gor"
    ,
        "project4_desc": "为发蜡品牌提供概念与导演服务：视频制作与产品摄影。"
    ,
        "project4_details": "导演并制作广告片，现场指导并完成产品摄影以供电商与宣传使用。"
    ,
        "project4_media": [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ]
    ,
        "project5_title": "AIC Thermal Coating"
    ,
        "project5_desc": "为AIC提供产品管理与市场支持：包装、网站与跨团队协调。"
    ,
        "project5_details": "管理多团队执行、包装设计与营销资料，推动AIC产品上市。"
    ,
        "project5_media": [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ]
    ,
        "project6_title": "Zen & Zany"
    ,
        "project6_desc": "为多个品牌项目提供摄影、视频与剪辑等自由职业服务。"
    ,
        "project6_details": "制作创意内容、视频编辑并支持活动发布。"
    ,
        "project6_media": [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ]
    ,
        "project7_title": "网络安全（爱好）"
    ,
        "project7_desc": "家庭实验室、SBC实验、自动化以及用于网络监控和测试的工具开发。"
    ,
        "project7_details": "在ESP32和Chameleon板上开发工具，搭建homelab服务并进行安全测试。"
    ,
        "project7_media": [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ]
    ,
        "project8_title": "教育科技 Web 应用"
    ,
        "project8_desc": "A working web application used by teachers for class prep and student practice."
    ,
        "project8_details": "一个供教师使用的工作型网络应用，用于简化课程准备和学生练习安排。 <a href=\"https://nikdracula.github.io/Education-Web-App/\" target=\"_blank\" rel=\"noopener noreferrer\">应用链接</a>"
    ,
        "project8_media": []
    ,
        "project1_video_url": "https://vimeo.com/410880058"
    ,
        "project3_video_url": "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4"
    ,
        "project4_video_url": "https://www.youtube.com/watch?v=fdaAh7LNa6U"
    ,
        "project6_video_url": "https://www.youtube.com/watch?v=efzwt1-cEug"
    ,
        "project_video_link": "在此查看视频"
    }
};

let currentLang = 'ru';

// Apply translations to current page
function switchLanguage(lang) {
    currentLang = lang;
    const htmlKeys = new Set(['cv_exp_desc', 'cv_edu_desc']);
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        const dict = translations[lang];
        if (dict && dict[key] !== undefined) {
            if (el.tagName === 'INPUT') {
                el.placeholder = dict[key];
            } else if (htmlKeys.has(key) || el.dataset.format === 'html') {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
}

// Set active link based on URL
function setActiveNavLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === path);
    });
}

// Chat helpers (only if elements exist on page)
function addMessage(content, isUser = false) {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'message' + (isUser ? ' user' : '');
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? 'YOU' : 'AI';
    const bubble = document.createElement('div');
    bubble.className = 'message-content';
    bubble.textContent = content;
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
}

function simulateBotResponse() {
    const dict = translations[currentLang];
    if (!dict || !dict.bot_responses) return;
    const responses = dict.bot_responses;
    const msg = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => addMessage(msg), 900);
}

document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    let lang = 'ru';
    try { lang = localStorage.getItem('siteLang') || 'ru'; } catch (e) { lang = 'ru'; }
    switchLanguage(lang);

    // Bind language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    // Chat init only if present
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    if (chatInput && sendBtn) {
        const send = () => {
            const value = chatInput.value.trim();
            if (!value) return;
            addMessage(value, true);
            chatInput.value = '';
            simulateBotResponse();
        };
        sendBtn.addEventListener('click', send);
        chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') send(); });
    }

    // Projects page functionality
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalMedia = document.getElementById('modalMedia');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
            lightboxImg.onerror = () => { lightboxImg.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg' + '" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="#ddd"/><polygon points="320,150 320,300 480,225" fill="#777"/></svg>'); };
    const closeLightbox = document.getElementById('closeLightbox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentImages = [];
    let currentIndex = 0;

    if (projectCards.length > 0) {
        projectCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const projectKey = `project${index + 1}`;
                const dict = translations[currentLang];
                modalTitle.textContent = dict[`${projectKey}_title`];
                modalDescription.innerHTML = dict[`${projectKey}_details`];
                // If there is a video URL provided, append a clickable link (opens in new tab)
                try {
                    const videoUrl = dict[`${projectKey}_video_url`];
                    if (videoUrl) {
                        const p = document.createElement('p');
                        p.style.marginTop = '0.5rem';
                        const a = document.createElement('a');
                        a.href = videoUrl;
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                        a.textContent = dict['project_video_link'] || 'See the video here';
                        p.appendChild(a);
                        modalDescription.appendChild(p);
                    }
                } catch (e) { /* ignore if key missing */ }
    
                modalMedia.innerHTML = '';

                const mediaItems = dict[`${projectKey}_media`] || [];
                mediaItems.forEach(item => {
                    if (projectKey === "project8") { return; }
                    if (item.type === 'image') {
                        const thumb = document.createElement('img');
                        thumb.src = item.src;
                        thumb.alt = item.alt || '';
                        thumb.style.width = '100px';
                        thumb.style.height = '100px';
                        thumb.style.objectFit = 'cover';
                        thumb.style.cursor = 'pointer';
                        thumb.onerror = () => {
                            thumb.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" viewBox="0 0 160 100"><rect width="160" height="100" fill="#f3f3f3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="12">Image</text></svg>');
                        };
                        thumb.onclick = () => openLightbox(mediaItems.filter(m => m.type === 'image').map(m => m.src), mediaItems.filter(m => m.type === 'image').findIndex(m => m.src === item.src));
                        modalMedia.appendChild(thumb);
                    } else if (item.type === 'video') {
                        const thumb = document.createElement('img');
                        // Use provided thumbnail when available; if missing use a data-uri placeholder
                        thumb.src = item.thumbnail || '';
                        thumb.alt = item.alt || 'Video Thumbnail';
                        thumb.style.width = '100px';
                        thumb.style.height = '100px';
                        thumb.style.objectFit = 'cover';
                        thumb.style.cursor = 'pointer';
                        // Fallback placeholder if thumbnail fails to load
                        thumb.onerror = () => {
                            // simple gray SVG data URI with play triangle
                            thumb.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" viewBox="0 0 160 100"><rect width="160" height="100" fill="#ddd"/><polygon points="60,30 60,70 95,50" fill="#777"/></svg>');
                        };
                        thumb.onclick = () => {
                            // Clear previous players
                            modalMedia.querySelectorAll('iframe, video').forEach(el => el.remove());
                            const src = item.src || '';
                            if (src.endsWith('.mp4')) {
                                const vid = document.createElement('video');
                                vid.src = src;
                                vid.controls = true;
                                vid.autoplay = true;
                                vid.style.width = '100%';
                                modalMedia.appendChild(vid);
                            } else if (src.includes('youtube.com') || src.includes('youtu.be')) {
                                // extract youtube id
                                let id = '';
                                if (src.includes('watch?v=')) {
                                    id = src.split('watch?v=')[1].split('&')[0];
                                } else {
                                    id = src.split('/').pop();
                                }
                                const iframe = document.createElement('iframe');
                                iframe.src = 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1';
                                iframe.width = '100%';
                                iframe.height = '360';
                                iframe.frameBorder = '0';
                                iframe.allow = 'autoplay; fullscreen; picture-in-picture';
                                modalMedia.appendChild(iframe);
                            } else if (src.includes('vimeo.com')) {
                                const id = src.split('/').pop();
                                const iframe = document.createElement('iframe');
                                iframe.src = 'https://player.vimeo.com/video/' + id + '?autoplay=1';
                                iframe.width = '100%';
                                iframe.height = '360';
                                iframe.frameBorder = '0';
                                iframe.allow = 'autoplay; fullscreen; picture-in-picture';
                                modalMedia.appendChild(iframe);
                            } else {
                                // unknown video source - try to open in new tab
                                window.open(src, '_blank');
                            }
                        };
                        modalMedia.appendChild(thumb);
                    }
                });

                modal.style.display = 'flex';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        function openLightbox(images, index) {
            currentImages = images;
            currentIndex = index;
            lightboxImg.src = images[index];
            lightbox.style.display = 'flex';
        }

        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
            lightboxImg.src = currentImages[currentIndex];
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
            lightboxImg.src = currentImages[currentIndex];
        });
    }
});