// Renaissance Project - Translations & i18n

const translations = {
  fr: {
    nav: { home: "Accueil", urgs: "URGS", litchi: "Litchi", demo: "Démo" },
    hero: {
      badge: "Construire le futur des relations Humain-IA",
      title1: "Intelligence Relationnelle",
      title2: "pour les systèmes IA",
      subtitle: "Renaissance développe un middleware qui donne à l'IA l'intelligence émotionnelle pour construire des relations significatives, sécuritaires et durables avec les utilisateurs.",
      cta1: "Essayer la démo URGS",
      cta2: "En savoir plus"
    },
    projects: {
      title: "Nos Projets",
      subtitle: "Deux technologies complémentaires qui apportent l'intelligence émotionnelle aux interactions IA",
      urgs: {
        tagline: "Universal Relational Governance System",
        description: "Middleware qui s'intercale entre les utilisateurs et les LLMs pour fournir une intelligence émotionnelle en temps réel, une gouvernance comportementale et une mémoire relationnelle.",
        f1: "Suivi émotionnel en temps réel",
        f2: "Gouvernance comportementale (UB3)",
        f3: "Architecture LLM-agnostique",
        link: "En savoir plus →"
      },
      litchi: {
        tagline: "Assistant Productivité propulsé par IA",
        description: "Contrôle tes outils de productivité en langage naturel. Email, calendrier, fichiers, musique, navigation — Google, Microsoft et plus, tout au même endroit.",
        f1: "Gmail, Outlook, Drive, OneDrive",
        f2: "Spotify, Google Maps, Météo",
        f3: "SMS, Google Home, Rappels",
        link: "En savoir plus →"
      }
    },
    why: {
      title: "Pourquoi l'Intelligence Relationnelle?",
      problem: { title: "Le Problème", text: "Les LLMs comprennent le langage mais pas la relation. Ils répondent de la même façon à un enfant heureux qu'à un client frustré." },
      solution: { title: "Notre Solution", text: "URS ajoute une couche relationnelle qui suit l'état émotionnel, maintient l'historique de la relation et gouverne le comportement de l'IA en temps réel." },
      result: { title: "Le Résultat", text: "Une IA qui adapte son ton, se souvient de tes patterns, respecte les limites et construit une vraie confiance au fil du temps." }
    },
    footer: { company: "Renaissance AI Systems", copyright: "© 2024 Renaissance Project. Construire l'intelligence relationnelle pour l'IA." },
    
    // URGS Page
    urgsPage: {
      badge: "Technologie de base",
      title: "Universal Relational Governance System",
      subtitle: "La couche middleware qui transforme n'importe quel LLM en un système IA émotionnellement intelligent et relationnellement conscient.",
      cta: "Essayer la démo interactive",
      architecture: "Architecture",
      components: {
        title: "Composants principaux",
        rve: { name: "RVE", title: "Relational Valence Engine", subtitle: "Suivi émotionnel en temps réel", f1: "Détection de frustration", f2: "Suivi du niveau de confiance", f3: "Évaluation du risque d'escalade", f4: "Monitoring de l'engagement" },
        ub3: { name: "UB3", title: "Unified Behavioral Brain", subtitle: "Système de gouvernance comportementale", f1: "Changement de mode", f2: "Contraintes de réponse", f3: "Limites de sécurité", f4: "Modulation du ton" },
        arp: { name: "ARP", title: "Adaptive Relational Platform", subtitle: "Mémoire relationnelle et contexte", f1: "Mémoire cross-session", f2: "Reconnaissance de patterns", f3: "Apprentissage des préférences", f4: "Historique relationnel" }
      },
      markets: {
        title: "Marchés cibles",
        ivr: { title: "IVR / Centres d'appels", text: "Détecter la frustration, désamorcer automatiquement, déclencher le transfert humain au bon moment." },
        os: { title: "Assistants OS", text: "Donner à Siri, Alexa et Google une personnalité qui s'adapte et se souvient." },
        robotics: { title: "Robotique", text: "Robots compagnons, robots de service, robots éducatifs avec une vraie intelligence émotionnelle." }
      }
    },
    
    // Litchi Page
    litchiPage: {
      badge: "Assistant Productivité",
      title1: "Litchi",
      title2: "Ton centre de commande IA",
      subtitle: "Contrôle tous tes outils de productivité en langage naturel. Email, calendrier, fichiers, musique, navigation — dis ce que tu veux, Litchi s'en occupe.",
      demoBtn: "Essayer la démo",
      features: {
        title: "Fonctionnalités",
        subtitle: "Dis ce que tu veux, Litchi s'occupe du reste",
        email: { title: "Email", desc: "Lire, envoyer, répondre, transférer, pièces jointes, recherche" },
        calendar: { title: "Calendrier", desc: "Voir événements, créer, modifier, supprimer" },
        contacts: { title: "Contacts", desc: "Rechercher, créer des contacts" },
        files: { title: "Fichiers", desc: "Lister, rechercher, télécharger, envoyer par email" },
        messages: { title: "Messages", desc: "Envoyer des SMS et iMessage" },
        music: { title: "Musique", desc: "Play, pause, skip, volume, recherche" },
        navigation: { title: "Navigation", desc: "Itinéraire, ETA, trafic, lieux à proximité" },
        reminders: { title: "Rappels", desc: "Timers et reminders" },
        weather: { title: "Météo", desc: "Conditions actuelles et prévisions" },
        news: { title: "Actualités", desc: "News et headlines" },
        home: { title: "Maison", desc: "Cast audio et text-to-speech" },
        memory: { title: "Mémoire", desc: "Recherche dans tes conversations passées" }
      },
      platforms: {
        title: "Plateformes supportées",
        google: "Gmail, Calendar, Drive, Contacts, Maps, Home",
        microsoft: "Outlook Mail, Outlook Calendar, OneDrive, Contacts",
        other: "Spotify, OpenWeather, NewsAPI, httpSMS, KDE Connect"
      },
      benefits: {
        title: "Conçu pour les gens actifs",
        natural: { title: "Langage naturel", text: "Parle comme à un assistant humain. Pas de commandes à apprendre." },
        multi: { title: "Multi-plateforme", text: "Google, Microsoft, Spotify — tout au même endroit." },
        instant: { title: "Action immédiate", text: "Litchi exécute instantanément. Plus de switch entre apps." },
        memory: { title: "Mémoire", text: "Se souvient de tes conversations et préférences." }
      },
      coming: { title: "À venir", tasks: "Tâches (Todoist, etc.)", appleCal: "Apple Calendar", appleRem: "Apple Reminders" }
    },
    
    // Demo Page
    demo: {
      title: "Démo Interactive URGS",
      subtitle: "Discute avec un assistant propulsé par URGS et observe le suivi relationnel en temps réel",
      conversation: "Conversation",
      welcome: "Salut! Je suis un assistant propulsé par URGS. Essaie de me parler — observe comment mon suivi émotionnel réagit à tes messages!",
      placeholder: "Écris un message...",
      send: "Envoyer",
      tests: { frustrated: "Frustré", sad: "Triste", happy: "Content", neutral: "Neutre" },
      testMessages: { frustrated: "C'est RIDICULE! J'ai appelé 3 fois déjà!", sad: "Je me sens vraiment seul aujourd'hui...", happy: "Merci beaucoup! Tu m'as vraiment aidé!", neutral: "Salut, j'ai une question sur mon compte." },
      state: { title: "État URS (RVE)", frustration: "Frustration", trust: "Confiance", engagement: "Engagement", escalation: "Risque d'escalade", mode: "MODE ACTIF", constraints: "CONTRAINTES UB3", warmth: "Chaleur", pace: "Rythme", offerEscalation: "Offrir escalade" },
      modes: { NEUTRAL: "NEUTRE", FRIENDLY: "AMICAL", EMPATHETIC: "EMPATHIQUE", "DE-ESCALATION": "DÉ-ESCALADE" },
      values: { high: "Élevé", normal: "Normal", slow: "Lent", yes: "Oui", no: "Non" },
      responses: {
        "DE-ESCALATION": "Je comprends que tu es vraiment frustré, et c'est tout à fait normal. Je m'excuse pour les difficultés. Comment puis-je t'aider maintenant?",
        "EMPATHETIC": "Je comprends que ça peut être difficile. Je suis là pour t'aider. Peux-tu m'en dire plus?",
        "FRIENDLY": "Bonjour! Ravi de t'entendre. Comment puis-je t'aider aujourd'hui?",
        "NEUTRAL": "Je t'écoute. Dis-m'en plus, je suis là pour aider."
      }
    }
  },
  
  en: {
    nav: { home: "Home", urgs: "URGS", litchi: "Litchi", demo: "Demo" },
    hero: {
      badge: "Building the future of Human-AI relationships",
      title1: "Relational Intelligence",
      title2: "for AI Systems",
      subtitle: "Renaissance develops middleware that gives AI the emotional intelligence to build meaningful, safe, and lasting relationships with users.",
      cta1: "Try URGS Demo",
      cta2: "Learn More"
    },
    projects: {
      title: "Our Projects",
      subtitle: "Two complementary technologies that bring emotional intelligence to AI interactions",
      urgs: {
        tagline: "Universal Relational Governance System",
        description: "Middleware that sits between users and LLMs to provide real-time emotional intelligence, behavioral governance, and relational memory.",
        f1: "Real-time emotional state tracking",
        f2: "Behavioral governance (UB3)",
        f3: "LLM-agnostic architecture",
        link: "Learn more →"
      },
      litchi: {
        tagline: "AI-Powered Productivity Assistant",
        description: "Control your productivity tools with natural language. Email, calendar, files, music, navigation — Google, Microsoft and more, all in one place.",
        f1: "Gmail, Outlook, Drive, OneDrive",
        f2: "Spotify, Google Maps, Weather",
        f3: "SMS, Google Home, Reminders",
        link: "Learn more →"
      }
    },
    why: {
      title: "Why Relational Intelligence?",
      problem: { title: "The Problem", text: "LLMs understand language but not the relationship. They respond the same way to a happy child and a frustrated customer." },
      solution: { title: "Our Solution", text: "URS adds a relational layer that tracks emotional state, maintains relationship history, and governs AI behavior in real-time." },
      result: { title: "The Result", text: "AI that adapts its tone, remembers your patterns, respects boundaries, and builds genuine trust over time." }
    },
    footer: { company: "Renaissance AI Systems", copyright: "© 2024 Renaissance Project. Building relational intelligence for AI." },
    
    urgsPage: {
      badge: "Core Technology",
      title: "Universal Relational Governance System",
      subtitle: "The middleware layer that transforms any LLM into an emotionally intelligent, relationally-aware AI system.",
      cta: "Try Interactive Demo",
      architecture: "Architecture",
      components: {
        title: "Core Components",
        rve: { name: "RVE", title: "Relational Valence Engine", subtitle: "Real-time emotional state tracking", f1: "Frustration detection", f2: "Trust level tracking", f3: "Escalation risk assessment", f4: "Engagement monitoring" },
        ub3: { name: "UB3", title: "Unified Behavioral Brain", subtitle: "Behavioral governance system", f1: "Mode switching", f2: "Response constraints", f3: "Safety boundaries", f4: "Tone modulation" },
        arp: { name: "ARP", title: "Adaptive Relational Platform", subtitle: "Relationship memory & context", f1: "Cross-session memory", f2: "Pattern recognition", f3: "Preference learning", f4: "Relationship history" }
      },
      markets: {
        title: "Target Markets",
        ivr: { title: "IVR / Contact Centers", text: "Detect frustration, de-escalate automatically, trigger human handoff at the right moment." },
        os: { title: "OS Assistants", text: "Give Siri, Alexa, and Google a personality that adapts and remembers." },
        robotics: { title: "Robotics", text: "Companion robots, service robots, educational robots with true emotional intelligence." }
      }
    },
    
    litchiPage: {
      badge: "Productivity Assistant",
      title1: "Litchi",
      title2: "Your AI Command Center",
      subtitle: "Control all your productivity tools with natural language. Email, calendar, files, music, navigation — just say what you need, Litchi handles the rest.",
      demoBtn: "Try the Demo",
      features: {
        title: "Features",
        subtitle: "Just tell Litchi what you need",
        email: { title: "Email", desc: "Read, send, reply, forward, attachments, search" },
        calendar: { title: "Calendar", desc: "View events, create, edit, delete" },
        contacts: { title: "Contacts", desc: "Search, create contacts" },
        files: { title: "Files", desc: "List, search, download, send by email" },
        messages: { title: "Messages", desc: "Send SMS and iMessage" },
        music: { title: "Music", desc: "Play, pause, skip, volume, search" },
        navigation: { title: "Navigation", desc: "Directions, ETA, traffic, nearby places" },
        reminders: { title: "Reminders", desc: "Timers and reminders" },
        weather: { title: "Weather", desc: "Current conditions and forecasts" },
        news: { title: "News", desc: "News and headlines" },
        home: { title: "Home", desc: "Audio cast and text-to-speech" },
        memory: { title: "Memory", desc: "Search through past conversations" }
      },
      platforms: {
        title: "Supported Platforms",
        google: "Gmail, Calendar, Drive, Contacts, Maps, Home",
        microsoft: "Outlook Mail, Outlook Calendar, OneDrive, Contacts",
        other: "Spotify, OpenWeather, NewsAPI, httpSMS, KDE Connect"
      },
      benefits: {
        title: "Built for Busy People",
        natural: { title: "Natural Language", text: "Talk like you would to a human assistant. No commands to learn." },
        multi: { title: "Multi-platform", text: "Google, Microsoft, Spotify — all in one place." },
        instant: { title: "Instant Action", text: "Litchi executes immediately. No more app switching." },
        memory: { title: "Memory", text: "Remembers your conversations and preferences." }
      },
      coming: { title: "Coming Soon", tasks: "Tasks (Todoist, etc.)", appleCal: "Apple Calendar", appleRem: "Apple Reminders" }
    },
    
    demo: {
      title: "URGS Interactive Demo",
      subtitle: "Chat with a URGS-powered assistant and watch the relational state tracking in real-time",
      conversation: "Conversation",
      welcome: "Hi! I'm a URGS-powered assistant. Try talking to me — watch how my emotional state tracking responds to your messages!",
      placeholder: "Type a message...",
      send: "Send",
      tests: { frustrated: "Frustrated", sad: "Sad", happy: "Happy", neutral: "Neutral" },
      testMessages: { frustrated: "This is RIDICULOUS! I've called 3 times already!", sad: "I'm feeling really lonely today...", happy: "Thanks so much! You've been really helpful!", neutral: "Hi, I have a question about my account." },
      state: { title: "URS State (RVE)", frustration: "Frustration", trust: "Trust", engagement: "Engagement", escalation: "Escalation Risk", mode: "ACTIVE MODE", constraints: "UB3 CONSTRAINTS", warmth: "Warmth", pace: "Pace", offerEscalation: "Offer escalation" },
      modes: { NEUTRAL: "NEUTRAL", FRIENDLY: "FRIENDLY", EMPATHETIC: "EMPATHETIC", "DE-ESCALATION": "DE-ESCALATION" },
      values: { high: "High", normal: "Normal", slow: "Slow", yes: "Yes", no: "No" },
      responses: {
        "DE-ESCALATION": "I can hear that you're really frustrated, and I completely understand. I apologize for any difficulty. How can I help you right now?",
        "EMPATHETIC": "I understand this might be frustrating. I'm here to help. Could you tell me more?",
        "FRIENDLY": "Hello! Great to hear from you. How can I help you today?",
        "NEUTRAL": "I hear you. Tell me more — I'm here to help."
      }
    }
  },
  
  zh: {
    nav: { home: "首页", urgs: "URGS", litchi: "荔枝", demo: "演示" },
    hero: {
      badge: "构建人机关系的未来",
      title1: "关系智能",
      title2: "AI系统",
      subtitle: "Renaissance开发中间件，赋予AI情感智能，与用户建立有意义、安全和持久的关系。",
      cta1: "试用URGS演示",
      cta2: "了解更多"
    },
    projects: {
      title: "我们的项目",
      subtitle: "两种互补技术，为AI交互带来情感智能",
      urgs: {
        tagline: "通用关系治理系统",
        description: "位于用户和LLM之间的中间件，提供实时情感智能、行为治理和关系记忆。",
        f1: "实时情感状态跟踪",
        f2: "行为治理（UB3）",
        f3: "LLM无关架构",
        link: "了解更多 →"
      },
      litchi: {
        tagline: "AI驱动的生产力助手",
        description: "用自然语言控制您的生产力工具。邮件、日历、文件、音乐、导航——Google、Microsoft等，一站式服务。",
        f1: "Gmail、Outlook、Drive、OneDrive",
        f2: "Spotify、Google地图、天气",
        f3: "短信、Google Home、提醒",
        link: "了解更多 →"
      }
    },
    why: {
      title: "为什么需要关系智能？",
      problem: { title: "问题", text: "LLM理解语言但不理解关系。它们对快乐的孩子和沮丧的客户做出相同的回应。" },
      solution: { title: "我们的解决方案", text: "URS添加关系层，跟踪情感状态，维护关系历史，并实时管理AI行为。" },
      result: { title: "结果", text: "AI能够调整语气，记住您的模式，尊重边界，并随着时间建立真正的信任。" }
    },
    footer: { company: "Renaissance AI系统", copyright: "© 2024 Renaissance项目。为AI构建关系智能。" },
    
    urgsPage: {
      badge: "核心技术",
      title: "通用关系治理系统",
      subtitle: "将任何LLM转变为情感智能、关系感知AI系统的中间件层。",
      cta: "试用交互演示",
      architecture: "架构",
      components: {
        title: "核心组件",
        rve: { name: "RVE", title: "关系效价引擎", subtitle: "实时情感状态跟踪", f1: "挫败感检测", f2: "信任级别跟踪", f3: "升级风险评估", f4: "参与度监控" },
        ub3: { name: "UB3", title: "统一行为大脑", subtitle: "行为治理系统", f1: "模式切换", f2: "响应约束", f3: "安全边界", f4: "语气调节" },
        arp: { name: "ARP", title: "自适应关系平台", subtitle: "关系记忆和上下文", f1: "跨会话记忆", f2: "模式识别", f3: "偏好学习", f4: "关系历史" }
      },
      markets: {
        title: "目标市场",
        ivr: { title: "IVR / 呼叫中心", text: "检测挫败感，自动降级，在适当时机触发人工转接。" },
        os: { title: "OS助手", text: "赋予Siri、Alexa和Google一个能够适应和记忆的个性。" },
        robotics: { title: "机器人", text: "陪伴机器人、服务机器人、教育机器人，具有真正的情感智能。" }
      }
    },
    
    litchiPage: {
      badge: "生产力助手",
      title1: "荔枝",
      title2: "您的AI指挥中心",
      subtitle: "用自然语言控制所有生产力工具。邮件、日历、文件、音乐、导航——说出您需要的，荔枝为您处理。",
      demoBtn: "试用演示",
      features: {
        title: "功能",
        subtitle: "告诉荔枝您需要什么",
        email: { title: "邮件", desc: "阅读、发送、回复、转发、附件、搜索" },
        calendar: { title: "日历", desc: "查看事件、创建、编辑、删除" },
        contacts: { title: "联系人", desc: "搜索、创建联系人" },
        files: { title: "文件", desc: "列出、搜索、下载、通过邮件发送" },
        messages: { title: "消息", desc: "发送短信和iMessage" },
        music: { title: "音乐", desc: "播放、暂停、跳过、音量、搜索" },
        navigation: { title: "导航", desc: "路线、预计到达时间、交通、附近地点" },
        reminders: { title: "提醒", desc: "定时器和提醒" },
        weather: { title: "天气", desc: "当前状况和预报" },
        news: { title: "新闻", desc: "新闻和头条" },
        home: { title: "智能家居", desc: "音频投射和文字转语音" },
        memory: { title: "记忆", desc: "搜索过往对话" }
      },
      platforms: {
        title: "支持的平台",
        google: "Gmail、日历、Drive、联系人、地图、Home",
        microsoft: "Outlook邮件、Outlook日历、OneDrive、联系人",
        other: "Spotify、OpenWeather、NewsAPI、httpSMS、KDE Connect"
      },
      benefits: {
        title: "为忙碌人士打造",
        natural: { title: "自然语言", text: "像对人类助手一样说话。无需学习命令。" },
        multi: { title: "多平台", text: "Google、Microsoft、Spotify——一站式服务。" },
        instant: { title: "即时执行", text: "荔枝立即执行。不再切换应用。" },
        memory: { title: "记忆", text: "记住您的对话和偏好。" }
      },
      coming: { title: "即将推出", tasks: "任务（Todoist等）", appleCal: "Apple日历", appleRem: "Apple提醒" }
    },
    
    demo: {
      title: "URGS交互演示",
      subtitle: "与URGS驱动的助手聊天，实时观察关系状态跟踪",
      conversation: "对话",
      welcome: "你好！我是URGS驱动的助手。试着和我说话——看看我的情感状态跟踪如何响应你的消息！",
      placeholder: "输入消息...",
      send: "发送",
      tests: { frustrated: "沮丧", sad: "悲伤", happy: "开心", neutral: "中性" },
      testMessages: { frustrated: "这太荒谬了！我已经打了3次电话了！", sad: "我今天感觉很孤独...", happy: "非常感谢！你真的很有帮助！", neutral: "你好，我有一个关于我账户的问题。" },
      state: { title: "URS状态（RVE）", frustration: "挫败感", trust: "信任", engagement: "参与度", escalation: "升级风险", mode: "活动模式", constraints: "UB3约束", warmth: "温暖度", pace: "节奏", offerEscalation: "提供升级" },
      modes: { NEUTRAL: "中性", FRIENDLY: "友好", EMPATHETIC: "同理心", "DE-ESCALATION": "降级" },
      values: { high: "高", normal: "正常", slow: "慢", yes: "是", no: "否" },
      responses: {
        "DE-ESCALATION": "我能感受到你真的很沮丧，我完全理解。我为任何困难道歉。我现在能怎么帮助你？",
        "EMPATHETIC": "我理解这可能令人沮丧。我在这里帮助你。你能告诉我更多吗？",
        "FRIENDLY": "你好！很高兴收到你的消息。今天我能帮你什么？",
        "NEUTRAL": "我在听。告诉我更多——我在这里帮助你。"
      }
    }
  }
};

// Current language
let currentLang = localStorage.getItem('renaissance-lang') || 'fr';

// Get translation
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

// Set language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('renaissance-lang', lang);
  updatePageContent();
  updateLangButtons();
}

// Update language buttons
function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// Initialize language selector
function initLangSelector() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  updateLangButtons();
}

// Update page content - called by each page
function updatePageContent() {
  // This will be overridden by each page
  if (typeof updateContent === 'function') {
    updateContent();
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initLangSelector();
  if (typeof updateContent === 'function') {
    updateContent();
  }
});
