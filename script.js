/**
 * ============================================================================
 * منشئ السيرة الذاتية الاحترافي (CV Builder Pro) - محرك التطبيق المتكامل
 * ============================================================================
 * 15 قالباً مختلفاً حقيقياً • 18 لغة عالمية • دعم كامل لـ RTL و LTR
 * نظام صفحات A4 ذكي يمنع قص النصوص أو تقسيم العناصر بشكل خاطئ
 * تخزين محلي 100% بدون أي خوادم أو تبعيات خارجية
 */

'use strict';

// ----------------------------------------------------------------------------
// 1. ثوابت التخزين واللغات المدعومة (18 Languages Definition)
// ----------------------------------------------------------------------------
const STORAGE_KEY = 'cv_builder_pro_v2_store';

const LANGUAGES_META = {
  ar: { name: 'العربية', native: 'العربية', dir: 'rtl', font: 'Cairo, sans-serif' },
  en: { name: 'English', native: 'English', dir: 'ltr', font: 'Inter, sans-serif' },
  fr: { name: 'French', native: 'Français', dir: 'ltr', font: 'Inter, sans-serif' },
  es: { name: 'Spanish', native: 'Español', dir: 'ltr', font: 'Inter, sans-serif' },
  de: { name: 'German', native: 'Deutsch', dir: 'ltr', font: 'Inter, sans-serif' },
  it: { name: 'Italian', native: 'Italiano', dir: 'ltr', font: 'Inter, sans-serif' },
  pt: { name: 'Portuguese', native: 'Português', dir: 'ltr', font: 'Inter, sans-serif' },
  tr: { name: 'Turkish', native: 'Türkçe', dir: 'ltr', font: 'Inter, sans-serif' },
  ru: { name: 'Russian', native: 'Русский', dir: 'ltr', font: 'Roboto, sans-serif' },
  zh: { name: 'Chinese', native: '中文 (简体)', dir: 'ltr', font: "'Noto Sans SC', sans-serif" },
  ja: { name: 'Japanese', native: '日本語', dir: 'ltr', font: "'Noto Sans JP', sans-serif" },
  ko: { name: 'Korean', native: '한국어', dir: 'ltr', font: "'Noto Sans KR', sans-serif" },
  hi: { name: 'Hindi', native: 'हिन्दी', dir: 'ltr', font: "'Noto Sans Devanagari', sans-serif" },
  ur: { name: 'Urdu', native: 'اردو', dir: 'rtl', font: "'Noto Sans Arabic', 'Cairo', sans-serif" },
  fa: { name: 'Persian', native: 'فارسی', dir: 'rtl', font: "'Cairo', 'Noto Sans Arabic', sans-serif" },
  id: { name: 'Indonesian', native: 'Bahasa Indonesia', dir: 'ltr', font: 'Inter, sans-serif' },
  nl: { name: 'Dutch', native: 'Nederlands', dir: 'ltr', font: 'Inter, sans-serif' },
  pl: { name: 'Polish', native: 'Polski', dir: 'ltr', font: 'Inter, sans-serif' }
};

// ----------------------------------------------------------------------------
// 2. قاموس ترجمة عناوين السيرة الذاتية (CV Section Translations in 18 Languages)
// ----------------------------------------------------------------------------
const CV_TRANSLATIONS = {
  ar: {
    summary: 'نبذة شخصية',
    experience: 'الخبرات المهنية',
    education: 'التعليم والمؤهلات',
    skills: 'المهارات والقدرات',
    languages: 'إتقان اللغات',
    courses: 'الدورات والشهادات',
    projects: 'المشاريع والإنجازات',
    additional: 'معلومات إضافية',
    contact: 'معلومات الاتصال',
    present: 'الآن',
    driving: 'رخصة القيادة',
    hobbies: 'الهوايات والاهتمامات',
    references: 'المراجع متاحة عند الطلب',
    custom: 'قسم إضافي'
  },
  en: {
    summary: 'Professional Summary',
    experience: 'Work Experience',
    education: 'Education',
    skills: 'Skills & Competencies',
    languages: 'Languages',
    courses: 'Certifications & Courses',
    projects: 'Projects & Achievements',
    additional: 'Additional Information',
    contact: 'Contact Info',
    present: 'Present',
    driving: 'Driver\'s License',
    hobbies: 'Interests & Hobbies',
    references: 'References available upon request',
    custom: 'Custom Section'
  },
  fr: {
    summary: 'Profil Professionnel',
    experience: 'Expérience Professionnelle',
    education: 'Formation et Diplômes',
    skills: 'Compétences',
    languages: 'Langues',
    courses: 'Certifications',
    projects: 'Projets et Réalisations',
    additional: 'Informations Complémentaires',
    contact: 'Coordonnées',
    present: 'Présent',
    driving: 'Permis de conduire',
    hobbies: 'Centres d\'intérêt',
    references: 'Références disponibles sur demande',
    custom: 'Section personnalisée'
  },
  es: {
    summary: 'Perfil Profesional',
    experience: 'Experiencia Laboral',
    education: 'Educación y Formación',
    skills: 'Habilidades',
    languages: 'Idiomas',
    courses: 'Certificaciones y Cursos',
    projects: 'Proyectos y Logros',
    additional: 'Información Adicional',
    contact: 'Contacto',
    present: 'Presente',
    driving: 'Licencia de conducir',
    hobbies: 'Intereses y aficiones',
    references: 'Referencias disponibles a petición',
    custom: 'Sección personalizada'
  },
  de: {
    summary: 'Berufliches Profil',
    experience: 'Berufserfahrung',
    education: 'Ausbildung',
    skills: 'Fähigkeiten & Kompetenzen',
    languages: 'Sprachen',
    courses: 'Zertifikate & Kurse',
    projects: 'Projekte & Erfolge',
    additional: 'Zusatzinformationen',
    contact: 'Kontaktdaten',
    present: 'Heute',
    driving: 'Führerschein',
    hobbies: 'Interessen & Hobbys',
    references: 'Referenzen auf Anfrage',
    custom: 'Benutzerdefinierter Bereich'
  },
  it: {
    summary: 'Profilo Professionale',
    experience: 'Esperienza Lavorativa',
    education: 'Istruzione e Formazione',
    skills: 'Competenze',
    languages: 'Lingue',
    courses: 'Certificazioni',
    projects: 'Progetti e Traguardi',
    additional: 'Informazioni Aggiuntive',
    contact: 'Contatti',
    present: 'Presente',
    driving: 'Patente di guida',
    hobbies: 'Interessi e hobby',
    references: 'Referenze disponibili su richiesta',
    custom: 'Sezione personalizzata'
  },
  pt: {
    summary: 'Resumo Profissional',
    experience: 'Experiência Profissional',
    education: 'Formação Acadêmica',
    skills: 'Habilidades',
    languages: 'Idiomas',
    courses: 'Certificações e Cursos',
    projects: 'Projetos e Conquistas',
    additional: 'Informações Adicionais',
    contact: 'Contato',
    present: 'Presente',
    driving: 'Carteira de motorista',
    hobbies: 'Interesses e hobbies',
    references: 'Referências disponíveis sob consulta',
    custom: 'Seção personalizada'
  },
  tr: {
    summary: 'Profesyonel Özet',
    experience: 'İş Deneyimi',
    education: 'Eğitim Bilgileri',
    skills: 'Beceriler ve Yetkinlikler',
    languages: 'Diller',
    courses: 'Sertifikalar ve Eğitimler',
    projects: 'Projeler ve Başarılar',
    additional: 'Ek Bilgiler',
    contact: 'İletişim',
    present: 'Günümüz',
    driving: 'Sürücü Belgesi',
    hobbies: 'İlgi Alanları ve Hobiler',
    references: 'Referanslar talep üzerine sunulur',
    custom: 'Özel Bölüm'
  },
  ru: {
    summary: 'О себе / Профиль',
    experience: 'Опыт работы',
    education: 'Образование',
    skills: 'Навыки и компетенции',
    languages: 'Знание языков',
    courses: 'Сертификаты и курсы',
    projects: 'Проекты и достижения',
    additional: 'Дополнительная информация',
    contact: 'Контакты',
    present: 'По настоящее время',
    driving: 'Водительские права',
    hobbies: 'Интересы и хобби',
    references: 'Рекомендации по запросу',
    custom: 'Дополнительный раздел'
  },
  zh: {
    summary: '个人简介',
    experience: '工作经历',
    education: '教育背景',
    skills: '专业技能',
    languages: '语言能力',
    courses: '荣誉与证书',
    projects: '项目经验',
    additional: '其他信息',
    contact: '联系方式',
    present: '至今',
    driving: '驾照',
    hobbies: '兴趣爱好',
    references: '如需推荐信可随时提供',
    custom: '自定义专区'
  },
  ja: {
    summary: '職務要約',
    experience: '職務経歴',
    education: '学歴',
    skills: '保有スキル',
    languages: '語学力',
    courses: '資格・免許',
    projects: 'プロジェクト実績',
    additional: '追加情報',
    contact: '連絡先',
    present: '現在',
    driving: '普通自動車免許',
    hobbies: '趣味・特技',
    references: '推薦人は要望に応じて提示可能',
    custom: 'その他'
  },
  ko: {
    summary: '자기소개 및 요약',
    experience: '경력 사항',
    education: '학력 사항',
    skills: '보유 기술 및 역량',
    languages: '어학 능력',
    courses: '자격증 및 수료 사항',
    projects: '프로젝트 및 주요 성과',
    additional: '기타 정보',
    contact: '연락처',
    present: '현재',
    driving: '운전면허',
    hobbies: '취미 및 특기',
    references: '요청 시 추천서 제공 가능',
    custom: '사용자 지정 항목'
  },
  hi: {
    summary: 'पेशेवर सारांश',
    experience: 'कार्य अनुभव',
    education: 'शिक्षा',
    skills: 'कौशल एवं क्षमताएं',
    languages: 'भाषाएं',
    courses: 'प्रमाणपत्र एवं पाठ्यक्रम',
    projects: 'परियोजनाएं एवं उपलब्धियां',
    additional: 'अतिरिक्त जानकारी',
    contact: 'संपर्क विवरण',
    present: 'वर्तमान',
    driving: 'ड्राइविंग लाइसेंस',
    hobbies: 'रुचियां और शौक',
    references: 'अनुरोध पर संदर्भ उपलब्ध हैं',
    custom: 'कस्टम अनुभाग'
  },
  ur: {
    summary: 'پیشہ ورانہ خلاصہ',
    experience: 'کام کا تجربہ',
    education: 'تعلیم اور اسناد',
    skills: 'مہارتیں اور قابلیتیں',
    languages: 'زبانیں',
    courses: 'سرٹیفکیٹس اور کورسز',
    projects: 'منصوبے اور کامیابیاں',
    additional: 'اضافی معلومات',
    contact: 'رابطے کی معلومات',
    present: 'حال',
    driving: 'ڈرائیونگ لائسنس',
    hobbies: 'مشاغل اور دلچسپیاں',
    references: 'حوالہ جات درخواست پر دستیاب ہیں',
    custom: 'اضافی سیکشن'
  },
  fa: {
    summary: 'خلاصه حرفه‌ای',
    experience: 'سوابق شغلی',
    education: 'سوابق تحصیلی',
    skills: 'مهارت‌ها و تخصص‌ها',
    languages: 'زبان‌ها',
    courses: 'دوره‌ها و گواهینامه‌ها',
    projects: 'پروژه‌ها و دستاوردها',
    additional: 'اطلاعات تکمیلی',
    contact: 'اطلاعات تماس',
    present: 'اکنون',
    driving: 'گواهینامه رانندگی',
    hobbies: 'علایق و سرگرمی‌ها',
    references: 'معرف‌ها در صورت درخواست ارائه می‌شوند',
    custom: 'بخش سفارشی'
  },
  id: {
    summary: 'Ringkasan Profesional',
    experience: 'Pengalaman Kerja',
    education: 'Pendidikan',
    skills: 'Keterampilan & Keahlian',
    languages: 'Bahasa',
    courses: 'Sertifikasi & Kursus',
    projects: 'Proyek & Prestasi',
    additional: 'Informasi Tambahan',
    contact: 'Kontak',
    present: 'Saat Ini',
    driving: 'Surat Izin Mengemudi (SIM)',
    hobbies: 'Minat & Hobi',
    references: 'Referensi tersedia berdasarkan permintaan',
    custom: 'Bagian Khusus'
  },
  nl: {
    summary: 'Professionele Samenvatting',
    experience: 'Werkervaring',
    education: 'Opleiding',
    skills: 'Vaardigheden',
    languages: 'Talenkennis',
    courses: 'Certificaten & Cursussen',
    projects: 'Projecten & Resultaten',
    additional: 'Aanvullende Informatie',
    contact: 'Contactgegevens',
    present: 'Heden',
    driving: 'Rijbewijs',
    hobbies: 'Interesses en hobby\'s',
    references: 'Referenties op aanvraag beschikbaar',
    custom: 'Aangepaste sectie'
  },
  pl: {
    summary: 'Podsumowanie Zawodowe',
    experience: 'Doświadczenie Zawodowe',
    education: 'Wykształcenie',
    skills: 'Umiejętności',
    languages: 'Języki',
    courses: 'Certyfikaty i Kursy',
    projects: 'Projekty i Osiągnięcia',
    additional: 'Informacje Dodatkowe',
    contact: 'Dane Kontaktowe',
    present: 'Obecnie',
    driving: 'Prawo jazdy',
    hobbies: 'Zainteresowania',
    references: 'Referencje dostępne na życzenie',
    custom: 'Sekcja własna'
  }
};

// ----------------------------------------------------------------------------
// 3. تعريف القوالب الـ 15 المتمايزة (15 Distinct Templates Registry)
// ----------------------------------------------------------------------------
const TEMPLATES_CATALOG = [
  {
    id: 'tpl-professional',
    name: '01 — Professional',
    nameAr: 'الرسمي الاحترافي',
    tag: 'corporate',
    badge: '01',
    desc: 'ترويسة رسمية عريضة، تنظيم كلاسيكي محكم، مناسب للشركات والجهات الحكومية'
  },
  {
    id: 'tpl-modern',
    name: '02 — Modern',
    nameAr: 'العصري الجانبي',
    tag: 'creative',
    badge: '02',
    desc: 'شريط جانبي مميز للمهارات والمعلومات، مساحة واسعة للخبرات'
  },
  {
    id: 'tpl-minimal',
    name: '03 — Minimal',
    nameAr: 'المينيمال الهادئ',
    tag: 'ats',
    badge: '03',
    desc: 'مساحات بيضاء نقية، خطوط ناعمة، مريح جداً للقراءة والفرز'
  },
  {
    id: 'tpl-executive',
    name: '04 — Executive',
    nameAr: 'الإداري التنفيذي',
    tag: 'corporate',
    badge: '04',
    desc: 'ترويسة داكنة بارزة ذات هيبة قيادية، مناسب للمدراء والتنفيذيين'
  },
  {
    id: 'tpl-creative',
    name: '05 — Creative',
    nameAr: 'الإبداعي المبتكر',
    tag: 'creative',
    badge: '05',
    desc: 'تدرجات لونية وشارات حيوية للمصممين ومبتكري المحتوى'
  },
  {
    id: 'tpl-elegant',
    name: '06 — Elegant',
    nameAr: 'الأنيق الراقي',
    tag: 'corporate',
    badge: '06',
    desc: 'خطوط رشيقة، محاذاة مركزية متوازنة وفواصل كلاسيكية ناعمة'
  },
  {
    id: 'tpl-corporate',
    name: '07 — Corporate',
    nameAr: 'المؤسسي الشبكي',
    tag: 'corporate',
    badge: '07',
    desc: 'عناوين مربعة بارزة وتنظيم شبكي صلب ملائم للمؤسسات الكبرى'
  },
  {
    id: 'tpl-ats',
    name: '08 — ATS Friendly',
    nameAr: 'أنظمة الفرز ATS',
    tag: 'ats',
    badge: '08',
    desc: 'تصميم أحادي العمود نقي 100% خالٍ من التداخلات لتمرير الفحص الآلي'
  },
  {
    id: 'tpl-designer',
    name: '09 — Designer',
    nameAr: 'المصمم التفاعلي',
    tag: 'creative',
    badge: '09',
    desc: 'شريط داكن عالي التباين وتركيز واضح على روابط الأعمال والمعارض'
  },
  {
    id: 'tpl-tech',
    name: '10 — Tech & Dev',
    nameAr: 'التقني والمطورين',
    tag: 'tech',
    badge: '10',
    desc: 'مستوحى من بيئات التطوير، يبرز التقنيات والمشاريع البرمجية'
  },
  {
    id: 'tpl-academic',
    name: '11 — Academic',
    nameAr: 'الأكاديمي والباحثين',
    tag: 'tech',
    badge: '11',
    desc: 'تركيز عميق على المؤهلات العلمية، الأبحاث، والنشر والشهادات'
  },
  {
    id: 'tpl-classic',
    name: '12 — Classic Standard',
    nameAr: 'الكلاسيكي الموثوق',
    tag: 'corporate',
    badge: '12',
    desc: 'التنسيق التقليدي الأصيل المتعارف عليه لدى جميع مسؤولي التوظيف'
  },
  {
    id: 'tpl-twocolumn',
    name: '13 — Two Column',
    nameAr: 'العمودين المتوازنين',
    tag: 'creative',
    badge: '13',
    desc: 'توزيع متكافئ للبيانات في عمودين لاستغلال المساحة بانسيابية'
  },
  {
    id: 'tpl-clean',
    name: '14 — Clean Slate',
    nameAr: 'النظيف الحاد',
    tag: 'ats',
    badge: '14',
    desc: 'خطوط حدية فائقة الوضوح مع مساحات تنفس ممتازة'
  },
  {
    id: 'tpl-premium',
    name: '15 — Premium Gold',
    nameAr: 'الملكي الفاخر',
    tag: 'corporate',
    badge: '15',
    desc: 'شريط ترويسة ملكي ولمسات أنيقة تعكس الخبرة الطويلة'
  }
];

// ----------------------------------------------------------------------------
// 4. حالة التطبيق المركزية (Application State)
// ----------------------------------------------------------------------------
const defaultState = {
  uiLanguage: 'ar',
  cvLanguage: 'ar',
  personal: {
    fullName: '',
    jobTitle: '',
    phone: '',
    email: '',
    location: '',
    website: '',
    linkedin: '',
    summary: '',
    photo: ''
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
  courses: [],
  projects: [],
  additional: {
    drivingLicense: '',
    hobbies: '',
    references: '',
    customTitle: '',
    customContent: ''
  },
  settings: {
    template: 'tpl-professional',
    primaryColor: '#1e3a8a',
    secondaryColor: '#0284c7',
    textColor: '#1e293b',
    bgColor: '#ffffff',
    fontFamily: 'Cairo',
    fontSize: 'normal',
    photoShape: 'circle',
    skillsStyle: 'tags', // tags, dots, bars, stars, levels, list
    showPageGuides: true,
    sectionOrder: [
      'summary',
      'experience',
      'education',
      'skills',
      'projects',
      'courses',
      'languages',
      'additional',
      'custom'
    ],
    visibility: {
      photo: true,
      summary: true,
      experience: true,
      education: true,
      skills: true,
      languages: true,
      courses: true,
      projects: true,
      additional: true,
      custom: true
    }
  }
};

// نموذج بيانات تجريبي احترافي باللغة العربية
const sampleArabicData = {
  uiLanguage: 'ar',
  cvLanguage: 'ar',
  personal: {
    fullName: 'أحمد بن عبد الرحمن الشهري',
    jobTitle: 'مهندس برمجيات ونظم سحابية أول | Senior Cloud & Software Engineer',
    phone: '+966 54 876 5432',
    email: 'ahmed.alshahri@example.com',
    location: 'الرياض، المملكة العربية السعودية',
    website: 'https://ahmed-engineer.sa',
    linkedin: 'linkedin.com/in/ahmed-alshahri',
    summary: 'مهندس برمجيات أول بخبرة تتجاوز 7 سنوات في هندسة النظم الموزعة والسحابية عالية التوافر ومطابقة المعايير الوطنية. امتلك سجلاً حافلاً في قيادة فرق التطوير وأتمتة دورات النشر (DevOps) وتحسين كفاءة البنية التحتية البرمجية وفقاً لمستهدفات التحول الرقمي.',
    photo: ''
  },
  experience: [
    {
      id: 'exp-1',
      company: 'شركة المنظومة الرقمية المتقدمة',
      jobTitle: 'مهندس برمجيات أول وقائد فريق (Lead Software Engineer)',
      startDate: '2021-02',
      endDate: '',
      isCurrent: true,
      description: '• قيادة فريق هندسي يضم 8 مطورين لبناء منصة دفع وحوالات فورية تخدم أكثر من 150,000 عميل يومياً.\n• تقليص زمن استجابة الـ APIs بنسبة 45% عبر تطبيق معمارية Microservices وتقنيات التخزين المؤقت الموزع.\n• إدارة خطوط النشر الآلي وتأمين تكامل واجهات الدفع المعتمدة (سداد ومدى).'
    },
    {
      id: 'exp-2',
      company: 'مؤسسة التقنيات الذكية للحلول السحابية',
      jobTitle: 'مطور برمجيات متكامل (Full-Stack Engineer)',
      startDate: '2018-06',
      endDate: '2021-01',
      isCurrent: false,
      description: '• تطوير وتصميم 12 منصة ويب تفاعلية متجاوبة وفق أعلى معايير الأمان وتجربة المستخدم.\n• تخفيض زمن تحميل الصفحات بنسبة 40% من خلال ضغط الموارد وإعادة هيكلة قواعد البيانات.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      school: 'جامعة الملك سعود - كلية علوم الحاسب والمعلومات',
      field: 'هندسة البرمجيات (Software Engineering)',
      degree: 'درجة البكالوريوس',
      startDate: '2014-09',
      endDate: '2018-05',
      description: 'التخرج بمرتبة الشرف الأولى مع نيل جائزة أفضل مشروع تخرج تطبيقي في حلول الذكاء الاصطناعي.'
    }
  ],
  skills: [
    { id: 'sk-1', name: 'JavaScript / TypeScript', level: '5' },
    { id: 'sk-2', name: 'Node.js & Express / NestJS', level: '5' },
    { id: 'sk-3', name: 'React.js & Next.js', level: '5' },
    { id: 'sk-4', name: 'الحوسبة السحابية AWS & Docker', level: '4' },
    { id: 'sk-5', name: 'قواعد البيانات PostgreSQL & Redis', level: '4' },
    { id: 'sk-6', name: 'إدارة الفرق ومنهجيات Agile/Scrum', level: '5' }
  ],
  languages: [
    { id: 'lang-1', name: 'العربية', level: 'اللغة الأم (متقن تماماً)' },
    { id: 'lang-2', name: 'الإنجليزية', level: 'طلاقة واحترافية كاملة (Fluent)' }
  ],
  courses: [
    { id: 'cr-1', name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: '2023' },
    { id: 'cr-2', name: 'Professional Scrum Master™ I (PSM I)', issuer: 'Scrum.org', date: '2022' }
  ],
  projects: [
    {
      id: 'pr-1',
      name: 'بوابة العقود الرقمية والتوقيع المعتمد',
      description: 'نظام متكامل لأتمتة إصدار وتوثيق العقود الإلكترونية مع التشفير الكامل والتحقق عبر النفاذ الوطني.',
      link: 'https://contracts-demo.sa'
    },
    {
      id: 'pr-2',
      name: 'محرك مطابقة السير الذاتية الذكي',
      description: 'أداة تعتمد على معالجة اللغات الطبيعية (NLP) لمطابقة مهارات المرشحين مع متطلبات الوظائف الشاغرة.',
      link: 'https://smart-match.sa'
    }
  ],
  additional: {
    drivingLicense: 'رخصة قيادة سارية المفعول',
    hobbies: 'المساهمة في البرمجيات مفتوحة المصدر، القراءة التقنية، الركض، الشطرنج',
    references: 'المراجع وشهادات التوصية المهنية متاحة فور الطلب',
    customTitle: 'الأعمال التطوعية والعضويات',
    customContent: 'عضو ناشط في الجمعية السعودية لهندسة الحاسب ومحاضر متطوع في ورش عمل تطوير الواجهات البرمجية.'
  },
  settings: {
    template: 'tpl-professional',
    primaryColor: '#1e3a8a',
    secondaryColor: '#0284c7',
    textColor: '#1e293b',
    bgColor: '#ffffff',
    fontFamily: 'Cairo',
    fontSize: 'normal',
    photoShape: 'circle',
    skillsStyle: 'tags',
    showPageGuides: true,
    sectionOrder: [
      'summary',
      'experience',
      'education',
      'skills',
      'projects',
      'courses',
      'languages',
      'additional',
      'custom'
    ],
    visibility: {
      photo: true,
      summary: true,
      experience: true,
      education: true,
      skills: true,
      languages: true,
      courses: true,
      projects: true,
      additional: true,
      custom: true
    }
  }
};

let cvState = JSON.parse(JSON.stringify(defaultState));
let currentZoom = 100;
let saveDebounceTimer = null;

// ----------------------------------------------------------------------------
// 5. دوال مساعدة أمنية وتنسيقية (Utilities & Security)
// ----------------------------------------------------------------------------

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateId(prefix = 'item') {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

// ----------------------------------------------------------------------------
// 6. إدارة التخزين المحلي (LocalStorage Operations)
// ----------------------------------------------------------------------------

function saveToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cvState));
    updateSaveIndicator(true);
  } catch (err) {
    console.error('خطأ في حفظ البيانات في localStorage:', err);
    updateSaveIndicator(false);
  }
}

function debounceSave() {
  const statusText = document.getElementById('status-text');
  if (statusText) statusText.textContent = cvState.uiLanguage === 'ar' ? 'جاري الحفظ...' : 'Saving...';

  clearTimeout(saveDebounceTimer);
  saveDebounceTimer = setTimeout(() => {
    saveToLocalStorage();
  }, 400);
}

function updateSaveIndicator(isSuccess) {
  const statusText = document.getElementById('status-text');
  const indicator = document.querySelector('.status-indicator');
  if (!statusText || !indicator) return;

  const isAr = cvState.uiLanguage === 'ar';
  if (isSuccess) {
    statusText.textContent = isAr ? 'تم الحفظ تلقائياً في المتصفح' : 'Saved automatically in browser';
    indicator.style.backgroundColor = 'var(--color-success)';
  } else {
    statusText.textContent = isAr ? 'تعذر الحفظ (المساحة ممتلئة)' : 'Storage quota exceeded';
    indicator.style.backgroundColor = 'var(--color-danger)';
  }
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      cvState = {
        ...defaultState,
        ...parsed,
        personal: { ...defaultState.personal, ...(parsed.personal || {}) },
        additional: { ...defaultState.additional, ...(parsed.additional || {}) },
        settings: {
          ...defaultState.settings,
          ...(parsed.settings || {}),
          sectionOrder: parsed.settings?.sectionOrder || defaultState.settings.sectionOrder,
          visibility: { ...defaultState.settings.visibility, ...(parsed.settings?.visibility || {}) }
        }
      };
      return true;
    }
  } catch (e) {
    console.error('فشل قراءة البيانات المحفوظة:', e);
  }
  return false;
}

// ----------------------------------------------------------------------------
// 7. إدارة اللغات واتجاه الصفحات (Multilingual & RTL/LTR Engine)
// ----------------------------------------------------------------------------

function buildLanguageDropdowns() {
  const uiMenu = document.getElementById('ui-lang-menu');
  const cvLangSelect = document.getElementById('cv-content-lang-select');
  
  if (uiMenu) {
    uiMenu.innerHTML = '';
    Object.keys(LANGUAGES_META).forEach(langCode => {
      const item = LANGUAGES_META[langCode];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `lang-item-btn ${cvState.uiLanguage === langCode ? 'active' : ''}`;
      btn.innerHTML = `<span>${item.native}</span><small style="opacity:0.6">${item.dir.toUpperCase()}</small>`;
      btn.addEventListener('click', () => {
        setUiLanguage(langCode);
        document.getElementById('ui-lang-menu')?.parentElement?.classList.remove('open');
      });
      uiMenu.appendChild(btn);
    });
  }

  if (cvLangSelect) {
    cvLangSelect.innerHTML = '';
    Object.keys(LANGUAGES_META).forEach(langCode => {
      const item = LANGUAGES_META[langCode];
      const opt = document.createElement('option');
      opt.value = langCode;
      opt.textContent = `${item.native} (${item.name}) - [${item.dir.toUpperCase()}]`;
      if (cvState.cvLanguage === langCode) opt.selected = true;
      cvLangSelect.appendChild(opt);
    });
  }
}

// قاموس ترجمة نصوص واجهة الموقع
const UI_TRANSLATIONS = {
  ar: {
    brand_title: 'منشئ السيرة الذاتية',
    brand_badge: 'احترافي • 15+ قالباً • متعدد اللغات',
    nav_home: 'الرئيسية',
    nav_create: 'إنشاء CV',
    nav_templates: 'القوالب (15)',
    nav_preview: 'معاينة مباشرة',
    btn_sample: 'نموذج جاهز',
    btn_print_pdf: 'تحميل PDF / طباعة',
    hero_badge_text: 'طباعة متعددة الصفحات A4 • لا يوجد قص للنصوص • 15+ قالباً احترافياً • 18 لغة عالمية',
    hero_title: 'أنشئ سيرتك الذاتية باحترافية كاملة',
    hero_subtitle: 'أنشئ سيرة ذاتية منظمة وجاهزة للطباعة والتصدير بجودة A4 عالية، بدون أي قص للنصوص أو تقسيم خاطئ للعناصر، مع دعم كامل للغات المتعددة (RTL & LTR) وقوالب تناسب كل التخصصات.',
    hero_btn_start: 'إنشاء سيرتي الذاتية الآن',
    hero_btn_templates: 'استعراض الـ 15 قالباً',
    feature_pages: 'صفحات A4 متعددة متدفقة بلا قص',
    feature_templates: '15 قالباً مختلفاً حقيقياً',
    feature_languages: '18 لغة مع دعم كامل لـ RTL و LTR',
    feature_ats: 'قالب متوافق 100% مع أنظمة ATS',
    tab_editor: 'تعديل النموذج',
    tab_preview: 'المعاينة المباشرة',
    save_status_auto: 'تم الحفظ تلقائياً في المتصفح',
    btn_export: 'تصدير JSON',
    btn_import: 'استيراد JSON',
    btn_clear: 'مسح الكل',
    acc_templates_title: 'القوالب الـ 15 وتخصيص المظهر',
    lbl_cv_language: 'لغة محتوى وعناوين السيرة الذاتية:',
    cv_lang_hint: 'يتم ترجمة عناوين أقسام الـ CV تلقائياً وضبط اتجاه RTL/LTR بناءً على اختيارك!',
    lbl_choose_template: 'اختر من بين 15 قالباً احترافياً:',
    tpl_filter_all: 'الكل (15)',
    tpl_filter_corp: 'رسمي وإداري',
    tpl_filter_creative: 'عصري وإبداعي',
    tpl_filter_tech: 'تقني وأكاديمي',
    tpl_filter_ats: 'ATS ومينيمال',
    lbl_color_palette: 'نظام ألوان السيرة الذاتية:',
    lbl_color_primary: 'اللون الرئيسي:',
    lbl_color_secondary: 'اللون الثانوي:',
    lbl_color_text: 'لون النص:',
    lbl_color_bg: 'خلفية الورقة:',
    lbl_font_family: 'نوع الخط:',
    lbl_font_size: 'كثافة ومقاس الخط:',
    opt_size_compact: 'مدمج (لضغط البيانات وتلخيص صفحة واحدة)',
    opt_size_normal: 'عادي (متوازن ومثالي)',
    opt_size_large: 'كبير (مريح ومتباعد)',
    lbl_skills_style: 'طريقة عرض المهارات:',
    opt_skills_tags: 'شارات ووسوم ملونة (Tags)',
    opt_skills_dots: 'نقاط ومستويات (1-5 Dots)',
    opt_skills_bars: 'أشرطة تقدم ونسب مئوية (Progress Bars)',
    opt_skills_stars: 'نجوم التقييم (Stars ★)',
    opt_skills_levels: 'نصوص المستويات (مبتدئ / خبير)',
    opt_skills_list: 'قائمة بسيطة (ATS Friendly List)',
    lbl_photo_shape: 'شكل الصورة الشخصية:',
    opt_photo_circle: 'دائري كلاسيكي (Circle)',
    opt_photo_rounded: 'مربع بحواف مستديرة (Rounded)',
    opt_photo_square: 'مربع هندسي حاد (Square)',
    lbl_section_order: 'ترتيب الأقسام داخل السيرة الذاتية:',
    hint_section_order: 'استخدم أسهم الرفع والخفض لتغيير ترتيب ظهور الأقسام في السيرة الذاتية فورياً:',
    lbl_section_visibility: 'التحكم في إظهار وإخفاء الأقسام:',
    sec_personal: 'المعلومات الشخصية',
    btn_upload_photo: 'رفع صورة شخصية',
    btn_remove_photo: 'إزالة الصورة',
    photo_tip: 'الصيغ المدعومة: JPG, PNG, WebP (يتم الضغط تلقائياً للحفاظ على الأداء)',
    lbl_fullName: 'الاسم الكامل:',
    err_fullName: 'الاسم الكامل مطلوب',
    lbl_jobTitle: 'المسمى الوظيفي المستهدف:',
    lbl_phone: 'رقم الهاتف:',
    err_phone: 'يرجى إدخال رقم هاتف صحيح',
    lbl_email: 'البريد الإلكتروني:',
    err_email: 'يرجى إدخال بريد إلكتروني صالح',
    lbl_location: 'المدينة / الدولة:',
    lbl_website: 'الموقع الإلكتروني / Portfolio:',
    lbl_linkedin: 'حساب LinkedIn:',
    lbl_summary: 'نبذة شخصية احترافية (Professional Summary):',
    sec_experience: 'الخبرات المهنية',
    btn_add_experience: 'إضافة خبرة مهنية جديدة',
    sec_education: 'التعليم والمؤهلات',
    btn_add_education: 'إضافة مؤهل تعليمي جديد',
    sec_skills: 'المهارات',
    btn_add_skill: 'إضافة مهارة جديدة',
    sec_languages: 'اللغات',
    btn_add_language: 'إضافة لغة جديدة',
    sec_courses: 'الدورات والشهادات',
    btn_add_course: 'إضافة شهادة أو دورة',
    sec_projects: 'المشاريع والإنجازات',
    btn_add_project: 'إضافة مشروع جديد',
    sec_additional: 'معلومات إضافية (رخص، هوايات، مراجع)',
    lbl_driving: 'رخصة القيادة:',
    lbl_hobbies: 'الهوايات والاهتمامات:',
    lbl_references: 'المراجع (References):',
    sec_custom: 'قسم مخصص اختياري (Custom Section)',
    lbl_custom_title: 'عنوان القسم المخصص:',
    lbl_custom_content: 'محتوى القسم:',
    lbl_live_preview: 'المعاينة المباشرة المطبوعة',
    btn_page_guides: 'فواصل A4',
    print_tip_text: 'نظام صفحات A4 ذكي: يتدفق المحتوى لصفحة أو صفحتين أو أكثر تلقائياً بدون قص للعناصر أو العناوين.',
    footer_tagline: 'منصة مجانية ومستقلة 100% بدون أي خوادم أو تتبع',
    footer_note: 'جميع بياناتك محفوظة محلياً في متصفحك بأمان تام عبر تقنية localStorage بدون إرسال أي معلومة إلى أي جهة خارجية.',
    modal_clear_title: 'تأكيد مسح كافة البيانات',
    modal_clear_desc: 'هل أنت متأكد من رغبتك في مسح كافة البيانات المدخلة؟ يمكنك حفظ نسخة احتياطية كملف JSON قبل المسح لتتمكن من استعادتها لاحقاً.',
    modal_cancel: 'إلغاء',
    modal_confirm_clear: 'نعم، امسح كل البيانات',
    modal_print_title: 'إرشادات حفظ السيرة الذاتية بصيغة PDF كاملة بدون قص',
    step1_title: 'اختر الطابعة المناسبة:',
    step1_desc: 'في نافذة الطباعة المنبثقة، غير الوجهة (Destination) إلى "حفظ بتنسيق PDF" (Save as PDF).',
    step2_title: 'مقاس الورق والهوامش:',
    step2_desc: 'تأكد من اختيار مقاس الورق A4 والاتجاه عمودي (Portrait)، واضبط الهوامش (Margins) على "افتراضي" (Default) أو "بلا" (None).',
    step3_title: 'تفعيل رسومات الخلفية:',
    step3_desc: 'فَعِّل خيار "رسومات الخلفية" (Background Graphics) لتظهر جميع ألوان وتنسيقات القالب وأشرطة المهارات بشكل جذاب ومطابق للأصل.',
    btn_proceed_print: 'فتح نافذة الطباعة وحفظ PDF الآن'
  },
  en: {
    brand_title: 'CV Builder Pro',
    brand_badge: 'Professional • 15+ Templates • Multilingual',
    nav_home: 'Home',
    nav_create: 'Create CV',
    nav_templates: 'Templates (15)',
    nav_preview: 'Live Preview',
    btn_sample: 'Sample Data',
    btn_print_pdf: 'Download PDF / Print',
    hero_badge_text: 'A4 Multi-Page Printing • Zero Content Clipping • 15+ Pro Templates • 18 Languages',
    hero_title: 'Build Your Professional Resume & CV',
    hero_subtitle: 'Create a clean, ATS-compliant, print-ready resume formatted for A4. Natural page flow across 1, 2, 3, or more pages without clipping or awkward element splitting.',
    hero_btn_start: 'Build My CV Now',
    hero_btn_templates: 'Browse 15 Templates',
    feature_pages: 'Multi-Page A4 Natural Flow',
    feature_templates: '15 Truly Distinct Templates',
    feature_languages: '18 Languages with Full RTL & LTR',
    feature_ats: '100% ATS Compliant Template',
    tab_editor: 'Edit Form',
    tab_preview: 'Live Preview',
    save_status_auto: 'Saved automatically in browser',
    btn_export: 'Export JSON',
    btn_import: 'Import JSON',
    btn_clear: 'Clear All',
    acc_templates_title: '15 Templates & Theme Customization',
    lbl_cv_language: 'CV Content & Headings Language:',
    cv_lang_hint: 'Section titles automatically translate and switch between RTL and LTR based on your selection!',
    lbl_choose_template: 'Choose from 15 Professional Templates:',
    tpl_filter_all: 'All (15)',
    tpl_filter_corp: 'Corporate',
    tpl_filter_creative: 'Creative',
    tpl_filter_tech: 'Tech & Academic',
    tpl_filter_ats: 'ATS & Minimal',
    lbl_color_palette: 'CV Color System:',
    lbl_color_primary: 'Primary Color:',
    lbl_color_secondary: 'Secondary Color:',
    lbl_color_text: 'Text Color:',
    lbl_color_bg: 'Paper Background:',
    lbl_font_family: 'Font Family:',
    lbl_font_size: 'Font Density & Size:',
    opt_size_compact: 'Compact (1-Page Fit)',
    opt_size_normal: 'Normal (Balanced & Optimal)',
    opt_size_large: 'Large (Spacious)',
    lbl_skills_style: 'Skills Display Style:',
    opt_skills_tags: 'Badges & Tags',
    opt_skills_dots: 'Levels Dots (1-5)',
    opt_skills_bars: 'Progress Bars (%)',
    opt_skills_stars: 'Review Stars (★)',
    opt_skills_levels: 'Level Text Badges',
    opt_skills_list: 'Simple List (ATS Friendly)',
    lbl_photo_shape: 'Profile Photo Shape:',
    opt_photo_circle: 'Circle',
    opt_photo_rounded: 'Rounded Square',
    opt_photo_square: 'Geometric Square',
    lbl_section_order: 'CV Sections Order:',
    hint_section_order: 'Use the up/down arrows to reorder sections in your CV instantly:',
    lbl_section_visibility: 'Toggle Sections Visibility:',
    sec_personal: 'Personal Information',
    btn_upload_photo: 'Upload Photo',
    btn_remove_photo: 'Remove Photo',
    photo_tip: 'Supported: JPG, PNG, WebP (Automatically compressed for speed)',
    lbl_fullName: 'Full Name:',
    err_fullName: 'Full Name is required',
    lbl_jobTitle: 'Target Job Title:',
    lbl_phone: 'Phone Number:',
    err_phone: 'Please enter a valid phone number',
    lbl_email: 'Email Address:',
    err_email: 'Please enter a valid email address',
    lbl_location: 'City / Country:',
    lbl_website: 'Website / Portfolio:',
    lbl_linkedin: 'LinkedIn Profile:',
    lbl_summary: 'Professional Summary:',
    sec_experience: 'Work Experience',
    btn_add_experience: 'Add Work Experience',
    sec_education: 'Education & Qualifications',
    btn_add_education: 'Add Education Qualification',
    sec_skills: 'Skills',
    btn_add_skill: 'Add Skill',
    sec_languages: 'Languages',
    btn_add_language: 'Add Language',
    sec_courses: 'Certifications & Courses',
    btn_add_course: 'Add Certificate or Course',
    sec_projects: 'Projects & Achievements',
    btn_add_project: 'Add Project',
    sec_additional: 'Additional Information',
    lbl_driving: 'Driver\'s License:',
    lbl_hobbies: 'Interests & Hobbies:',
    lbl_references: 'References:',
    sec_custom: 'Custom Section (Optional)',
    lbl_custom_title: 'Custom Section Title:',
    lbl_custom_content: 'Custom Section Content:',
    lbl_live_preview: 'Live Printable Preview',
    btn_page_guides: 'A4 Page Breaks',
    print_tip_text: 'Smart A4 page flow: Content flows across 1, 2, or more pages without clipping elements or titles.',
    footer_tagline: '100% Free & Independent without server tracking',
    footer_note: 'All your data is stored locally in your browser via localStorage. Nothing is sent to external servers.',
    modal_clear_title: 'Confirm Resetting Data',
    modal_clear_desc: 'Are you sure you want to clear all entered data? You can export a JSON backup beforehand to restore it anytime.',
    modal_cancel: 'Cancel',
    modal_confirm_clear: 'Yes, Clear All Data',
    modal_print_title: 'Instructions to Save as Complete PDF Without Clipping',
    step1_title: 'Choose the destination printer:',
    step1_desc: 'In the print popup dialog, change Destination to "Save as PDF".',
    step2_title: 'Paper size and margins:',
    step2_desc: 'Select Paper Size A4 and Portrait orientation. Set Margins to "Default" or "None".',
    step3_title: 'Enable background graphics:',
    step3_desc: 'Check the "Background Graphics" option so colors, borders, and progress bars render perfectly.',
    btn_proceed_print: 'Open Print / Save PDF Window Now'
  }
};

function applyUiTranslations(langCode) {
  const dict = UI_TRANSLATIONS[langCode] || UI_TRANSLATIONS.en || UI_TRANSLATIONS.ar;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const pageTitle = document.getElementById('page-title');
  if (pageTitle && dict.brand_title) {
    pageTitle.textContent = `${dict.brand_title} | CV Builder Pro`;
  }
}

function setUiLanguage(langCode) {
  if (!LANGUAGES_META[langCode]) return;
  cvState.uiLanguage = langCode;

  const meta = LANGUAGES_META[langCode];
  document.documentElement.lang = langCode;
  document.documentElement.dir = meta.dir;
  document.body.className = meta.dir === 'rtl' ? 'dir-rtl' : 'dir-ltr';

  const currentLangLabel = document.getElementById('current-lang-name');
  if (currentLangLabel) currentLangLabel.textContent = meta.native;

  // تحديث الزر النشط في القائمة
  document.querySelectorAll('.lang-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(meta.native));
  });

  // تطبيق الترجمات على عناصر الواجهة
  applyUiTranslations(langCode);
  renderSectionOrderList();
  renderVisibilityToggles();

  debounceSave();
  showToast(meta.dir === 'rtl' ? `تم تغيير لغة الموقع إلى ${meta.native}` : `UI Language switched to ${meta.native}`);
}

function setCvLanguage(langCode) {
  if (!LANGUAGES_META[langCode]) return;
  cvState.cvLanguage = langCode;
  debounceSave();
  renderLivePreview();
  const meta = LANGUAGES_META[langCode];
  showToast(cvState.uiLanguage === 'ar' ? `تم ضبط لغة السيرة الذاتية: ${meta.native}` : `CV language set to: ${meta.native}`);
}

// ----------------------------------------------------------------------------
// 8. توليد بطاقات الـ 15 قالباً وتصفيتها (15 Templates Grid Engine)
// ----------------------------------------------------------------------------

function renderTemplatesGrid() {
  const container = document.getElementById('template-cards-grid');
  if (!container) return;

  container.innerHTML = '';
  TEMPLATES_CATALOG.forEach(tpl => {
    const label = document.createElement('label');
    label.className = `template-card-option tpl-filter-item-${tpl.tag}`;
    label.innerHTML = `
      <input type="radio" name="cv-template" value="${tpl.id}" ${cvState.settings.template === tpl.id ? 'checked' : ''}>
      <div class="template-card-box">
        <span class="template-badge">${tpl.badge}</span>
        <div class="template-preview-mini">
          <div style="height: 10px; background-color: var(--cv-primary); border-radius: 2px; margin-bottom: 4px;"></div>
          <div style="height: 3px; width: 75%; background-color: #cbd5e1; margin-bottom: 3px;"></div>
          <div style="height: 3px; width: 50%; background-color: #cbd5e1; margin-bottom: 5px;"></div>
          <div style="height: 2px; width: 90%; background-color: #e2e8f0; margin-bottom: 2px;"></div>
          <div style="height: 2px; width: 80%; background-color: #e2e8f0;"></div>
        </div>
        <span class="template-name">${tpl.name}</span>
        <span class="template-tag">${tpl.nameAr}</span>
      </div>
    `;

    label.querySelector('input').addEventListener('change', () => {
      cvState.settings.template = tpl.id;
      debounceSave();
      renderLivePreview();
      showToast(cvState.uiLanguage === 'ar' ? `تم تفعيل قالب: ${tpl.nameAr}` : `Activated template: ${tpl.name}`);
    });

    container.appendChild(label);
  });
}

function setupTemplateFilters() {
  document.querySelectorAll('.t-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.t-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.template-card-option').forEach(card => {
        if (filter === 'all' || card.classList.contains(`tpl-filter-item-${filter}`)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ----------------------------------------------------------------------------
// 9. ترتيب الأقسام ومفاتيح الرؤية (Section Reordering & Visibility)
// ----------------------------------------------------------------------------

function renderSectionOrderList() {
  const container = document.getElementById('section-order-list');
  if (!container) return;

  const secTitles = CV_TRANSLATIONS[cvState.uiLanguage] || CV_TRANSLATIONS.ar;
  const order = cvState.settings.sectionOrder;

  container.innerHTML = '';
  order.forEach((secKey, index) => {
    const item = document.createElement('div');
    item.className = 'section-order-item';
    item.innerHTML = `
      <span>${secTitles[secKey] || secKey}</span>
      <div class="order-arrows">
        <button type="button" class="btn-order-arrow" title="تحريك لأعلى" ${index === 0 ? 'disabled' : ''} onclick="window.moveSectionOrder(${index}, -1)">▲</button>
        <button type="button" class="btn-order-arrow" title="تحريك لأسفل" ${index === order.length - 1 ? 'disabled' : ''} onclick="window.moveSectionOrder(${index}, 1)">▼</button>
      </div>
    `;
    container.appendChild(item);
  });
}

window.moveSectionOrder = function(index, delta) {
  const order = cvState.settings.sectionOrder;
  const newIndex = index + delta;
  if (newIndex < 0 || newIndex >= order.length) return;

  const temp = order[index];
  order[index] = order[newIndex];
  order[newIndex] = temp;

  renderSectionOrderList();
  debounceSave();
  renderLivePreview();
};

function renderVisibilityToggles() {
  const container = document.getElementById('visibility-toggles-grid');
  if (!container) return;

  const secTitles = CV_TRANSLATIONS[cvState.uiLanguage] || CV_TRANSLATIONS.ar;
  const vis = cvState.settings.visibility;

  container.innerHTML = '';
  const toggleKeys = [
    { key: 'photo', label: 'الصورة الشخصية' },
    { key: 'summary', label: secTitles.summary },
    { key: 'experience', label: secTitles.experience },
    { key: 'education', label: secTitles.education },
    { key: 'skills', label: secTitles.skills },
    { key: 'languages', label: secTitles.languages },
    { key: 'courses', label: secTitles.courses },
    { key: 'projects', label: secTitles.projects },
    { key: 'additional', label: secTitles.additional },
    { key: 'custom', label: secTitles.custom }
  ];

  toggleKeys.forEach(item => {
    const label = document.createElement('label');
    label.className = 'switch-control';
    label.innerHTML = `
      <input type="checkbox" ${vis[item.key] !== false ? 'checked' : ''}>
      <span class="switch-slider"></span>
      <span class="switch-label">${item.label}</span>
    `;

    label.querySelector('input').addEventListener('change', (e) => {
      cvState.settings.visibility[item.key] = e.target.checked;
      debounceSave();
      renderLivePreview();
    });

    container.appendChild(label);
  });
}

// ----------------------------------------------------------------------------
// 10. التحقق من المدخلات (Form Validation)
// ----------------------------------------------------------------------------

function validateInputs() {
  let isValid = true;

  const nameInput = document.getElementById('field-fullName');
  const nameError = document.getElementById('error-fullName');
  if (nameInput && nameError) {
    if (!nameInput.value.trim()) {
      nameInput.classList.add('is-invalid');
      nameError.classList.add('visible');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameError.classList.remove('visible');
    }
  }

  const emailInput = document.getElementById('field-email');
  const emailError = document.getElementById('error-email');
  if (emailInput && emailError) {
    const val = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val && !regex.test(val)) {
      emailInput.classList.add('is-invalid');
      emailError.classList.add('visible');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailError.classList.remove('visible');
    }
  }

  const phoneInput = document.getElementById('field-phone');
  const phoneError = document.getElementById('error-phone');
  if (phoneInput && phoneError) {
    const val = phoneInput.value.trim();
    const digits = val.replace(/\D/g, '');
    if (val && digits.length < 7) {
      phoneInput.classList.add('is-invalid');
      phoneError.classList.add('visible');
      isValid = false;
    } else {
      phoneInput.classList.remove('is-invalid');
      phoneError.classList.remove('visible');
    }
  }

  return isValid;
}

// ----------------------------------------------------------------------------
// 11. مزامنة النموذج مع كائن البيانات (Form Data Binding)
// ----------------------------------------------------------------------------

function populateFormFromState() {
  const p = cvState.personal || {};
  setVal('field-fullName', p.fullName);
  setVal('field-jobTitle', p.jobTitle);
  setVal('field-phone', p.phone);
  setVal('field-email', p.email);
  setVal('field-location', p.location);
  setVal('field-website', p.website);
  setVal('field-linkedin', p.linkedin);
  setVal('field-summary', p.summary);

  const photoImg = document.getElementById('profile-photo-preview');
  if (photoImg) photoImg.src = p.photo || 'assets/avatar-placeholder.svg';

  const a = cvState.additional || {};
  setVal('field-drivingLicense', a.drivingLicense);
  setVal('field-hobbies', a.hobbies);
  setVal('field-references', a.references);
  setVal('field-customTitle', a.customTitle);
  setVal('field-customContent', a.customContent);

  const s = cvState.settings || defaultState.settings;
  
  // الألوان
  setVal('primary-color-input', s.primaryColor);
  setVal('secondary-color-input', s.secondaryColor);
  setVal('text-color-input', s.textColor);
  setVal('bg-color-input', s.bgColor);
  setText('primary-color-code', s.primaryColor);
  setText('secondary-color-code', s.secondaryColor);
  setText('text-color-code', s.textColor);
  setText('bg-color-code', s.bgColor);

  updateColorPresetsActive(s.primaryColor);

  setVal('font-family-select', s.fontFamily);
  setVal('font-size-select', s.fontSize);
  setVal('skills-style-select', s.skillsStyle);
  setVal('photo-shape-select', s.photoShape);

  // تحديث لغة السيرة الذاتية ولغة الواجهة
  const cvLangSelect = document.getElementById('cv-content-lang-select');
  if (cvLangSelect) cvLangSelect.value = cvState.cvLanguage;

  renderTemplatesGrid();
  renderSectionOrderList();
  renderVisibilityToggles();
  renderAllRepeaters();
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text || '';
}

function updateColorPresetsActive(colorHex) {
  document.querySelectorAll('.color-circle').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.color.toLowerCase() === colorHex.toLowerCase());
  });
}

// ----------------------------------------------------------------------------
// 12. إدارة المكررات التفاعلية (Repeaters)
// ----------------------------------------------------------------------------

function renderAllRepeaters() {
  renderExperienceList();
  renderEducationList();
  renderSkillsList();
  renderLanguagesList();
  renderCoursesList();
  renderProjectsList();
  updateRepeaterBadges();
}

function updateRepeaterBadges() {
  setBadge('badge-experience-count', cvState.experience.length);
  setBadge('badge-education-count', cvState.education.length);
  setBadge('badge-skills-count', cvState.skills.length);
  setBadge('badge-languages-count', cvState.languages.length);
  setBadge('badge-courses-count', cvState.courses.length);
  setBadge('badge-projects-count', cvState.projects.length);
}

function setBadge(id, count) {
  const el = document.getElementById(id);
  if (el) el.textContent = count;
}

function renderExperienceList() {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = '';
  cvState.experience.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'repeater-card';
    card.dataset.id = item.id;
    card.innerHTML = `
      <div class="repeater-card-header">
        <div class="repeater-card-title">
          <span>💼</span>
          <span>#${index + 1}: ${escapeHtml(item.jobTitle || 'خبرة مهنية')}</span>
        </div>
        <div class="repeater-card-actions">
          <button type="button" class="btn-card-action text-danger" title="حذف" onclick="window.removeExperience('${item.id}')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">اسم الشركة / المؤسسة:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.company)}" placeholder="اسم الشركة" oninput="window.updateExperienceField('${item.id}', 'company', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">المسمى الوظيفي:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.jobTitle)}" placeholder="المسمى الوظيفي" oninput="window.updateExperienceField('${item.id}', 'jobTitle', this.value)">
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">تاريخ البداية:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.startDate)}" placeholder="مثال: 2021 أو 03/2021" oninput="window.updateExperienceField('${item.id}', 'startDate', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">تاريخ النهاية:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.endDate)}" placeholder="مثال: 2023" ${item.isCurrent ? 'disabled' : ''} oninput="window.updateExperienceField('${item.id}', 'endDate', this.value)">
          <label class="switch-control mt-3" style="font-size: 0.8rem;">
            <input type="checkbox" ${item.isCurrent ? 'checked' : ''} onchange="window.toggleExperienceCurrent('${item.id}', this.checked)">
            <span class="switch-slider"></span>
            <span class="switch-label">أعمل هنا حالياً</span>
          </label>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">وصف المهام والإنجازات:</label>
        <textarea class="form-textarea" rows="3" placeholder="أبرز المهام والإنجازات..." oninput="window.updateExperienceField('${item.id}', 'description', this.value)">${escapeHtml(item.description)}</textarea>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderEducationList() {
  const container = document.getElementById('education-list');
  if (!container) return;

  container.innerHTML = '';
  cvState.education.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'repeater-card';
    card.dataset.id = item.id;
    card.innerHTML = `
      <div class="repeater-card-header">
        <div class="repeater-card-title">
          <span>🎓</span>
          <span>#${index + 1}: ${escapeHtml(item.degree || 'مؤهل تعليمي')}</span>
        </div>
        <div class="repeater-card-actions">
          <button type="button" class="btn-card-action text-danger" title="حذف" onclick="window.removeEducation('${item.id}')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">الجامعة / المدرسة:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.school)}" placeholder="اسم الجامعة" oninput="window.updateEducationField('${item.id}', 'school', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">التخصص / المجال:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.field)}" placeholder="التخصص" oninput="window.updateEducationField('${item.id}', 'field', this.value)">
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">الدرجة العلمية:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.degree)}" placeholder="بكالوريوس / ماجستير" oninput="window.updateEducationField('${item.id}', 'degree', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">تاريخ التخرج:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.endDate)}" placeholder="مثال: 2018 - 2022" oninput="window.updateEducationField('${item.id}', 'endDate', this.value)">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">معلومات إضافية (معدل، مرتبة الشرف):</label>
        <textarea class="form-textarea" rows="2" placeholder="تفاصيل إضافية..." oninput="window.updateEducationField('${item.id}', 'description', this.value)">${escapeHtml(item.description)}</textarea>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderSkillsList() {
  const container = document.getElementById('skills-list');
  if (!container) return;

  container.innerHTML = '';
  cvState.skills.forEach(item => {
    const row = document.createElement('div');
    row.className = 'compact-repeater-row';
    row.innerHTML = `
      <input type="text" class="form-input" value="${escapeHtml(item.name)}" placeholder="اسم المهارة" oninput="window.updateSkillField('${item.id}', 'name', this.value)">
      <select class="form-select" onchange="window.updateSkillField('${item.id}', 'level', this.value)">
        <option value="5" ${item.level === '5' ? 'selected' : ''}>خبير (5/5)</option>
        <option value="4" ${item.level === '4' ? 'selected' : ''}>متقدم (4/5)</option>
        <option value="3" ${item.level === '3' ? 'selected' : ''}>متوسط (3/5)</option>
        <option value="2" ${item.level === '2' ? 'selected' : ''}>مبتدئ (2/5)</option>
        <option value="1" ${item.level === '1' ? 'selected' : ''}>أساسي (1/5)</option>
      </select>
      <button type="button" class="btn-card-action text-danger" title="حذف" onclick="window.removeSkill('${item.id}')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    container.appendChild(row);
  });
}

function renderLanguagesList() {
  const container = document.getElementById('languages-list');
  if (!container) return;

  container.innerHTML = '';
  cvState.languages.forEach(item => {
    const row = document.createElement('div');
    row.className = 'compact-repeater-row';
    row.innerHTML = `
      <input type="text" class="form-input" value="${escapeHtml(item.name)}" placeholder="اسم اللغة" oninput="window.updateLanguageField('${item.id}', 'name', this.value)">
      <input type="text" class="form-input" value="${escapeHtml(item.level)}" placeholder="المستوى (لغة أم / طليق)" oninput="window.updateLanguageField('${item.id}', 'level', this.value)">
      <button type="button" class="btn-card-action text-danger" title="حذف" onclick="window.removeLanguage('${item.id}')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    container.appendChild(row);
  });
}

function renderCoursesList() {
  const container = document.getElementById('courses-list');
  if (!container) return;

  container.innerHTML = '';
  cvState.courses.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'repeater-card';
    card.innerHTML = `
      <div class="repeater-card-header">
        <div class="repeater-card-title">
          <span>📜</span>
          <span>#${index + 1}: ${escapeHtml(item.name || 'دورة / شهادة')}</span>
        </div>
        <div class="repeater-card-actions">
          <button type="button" class="btn-card-action text-danger" title="حذف" onclick="window.removeCourse('${item.id}')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">اسم الشهادة / الدورة:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.name)}" placeholder="اسم الشهادة" oninput="window.updateCourseField('${item.id}', 'name', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">الجهة المانحة:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.issuer)}" placeholder="الجهة" oninput="window.updateCourseField('${item.id}', 'issuer', this.value)">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">سنة الحصول عليها:</label>
        <input type="text" class="form-input" value="${escapeHtml(item.date)}" placeholder="مثال: 2023" oninput="window.updateCourseField('${item.id}', 'date', this.value)">
      </div>
    `;
    container.appendChild(card);
  });
}

function renderProjectsList() {
  const container = document.getElementById('projects-list');
  if (!container) return;

  container.innerHTML = '';
  cvState.projects.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'repeater-card';
    card.innerHTML = `
      <div class="repeater-card-header">
        <div class="repeater-card-title">
          <span>🚀</span>
          <span>#${index + 1}: ${escapeHtml(item.name || 'مشروع جديد')}</span>
        </div>
        <div class="repeater-card-actions">
          <button type="button" class="btn-card-action text-danger" title="حذف" onclick="window.removeProject('${item.id}')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="form-row-2">
        <div class="form-group">
          <label class="form-label">اسم المشروع:</label>
          <input type="text" class="form-input" value="${escapeHtml(item.name)}" placeholder="اسم المشروع" oninput="window.updateProjectField('${item.id}', 'name', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">رابط المشروع (اختياري):</label>
          <input type="url" class="form-input text-ltr" value="${escapeHtml(item.link)}" placeholder="https://..." oninput="window.updateProjectField('${item.id}', 'link', this.value)">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">وصف المشروع:</label>
        <textarea class="form-textarea" rows="2" placeholder="وصف موجز للمشروع ودورك فيه..." oninput="window.updateProjectField('${item.id}', 'description', this.value)">${escapeHtml(item.description)}</textarea>
      </div>
    `;
    container.appendChild(card);
  });
}

// معالجات المكررات العامة
window.updateExperienceField = (id, field, val) => {
  const item = cvState.experience.find(x => x.id === id);
  if (item) { item[field] = val; debounceSave(); renderLivePreview(); }
};
window.toggleExperienceCurrent = (id, isCur) => {
  const item = cvState.experience.find(x => x.id === id);
  if (item) { item.isCurrent = isCur; if (isCur) item.endDate = ''; renderExperienceList(); debounceSave(); renderLivePreview(); }
};
window.removeExperience = (id) => {
  cvState.experience = cvState.experience.filter(x => x.id !== id);
  renderExperienceList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
};

window.updateEducationField = (id, field, val) => {
  const item = cvState.education.find(x => x.id === id);
  if (item) { item[field] = val; debounceSave(); renderLivePreview(); }
};
window.removeEducation = (id) => {
  cvState.education = cvState.education.filter(x => x.id !== id);
  renderEducationList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
};

window.updateSkillField = (id, field, val) => {
  const item = cvState.skills.find(x => x.id === id);
  if (item) { item[field] = val; debounceSave(); renderLivePreview(); }
};
window.removeSkill = (id) => {
  cvState.skills = cvState.skills.filter(x => x.id !== id);
  renderSkillsList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
};

window.updateLanguageField = (id, field, val) => {
  const item = cvState.languages.find(x => x.id === id);
  if (item) { item[field] = val; debounceSave(); renderLivePreview(); }
};
window.removeLanguage = (id) => {
  cvState.languages = cvState.languages.filter(x => x.id !== id);
  renderLanguagesList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
};

window.updateCourseField = (id, field, val) => {
  const item = cvState.courses.find(x => x.id === id);
  if (item) { item[field] = val; debounceSave(); renderLivePreview(); }
};
window.removeCourse = (id) => {
  cvState.courses = cvState.courses.filter(x => x.id !== id);
  renderCoursesList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
};

window.updateProjectField = (id, field, val) => {
  const item = cvState.projects.find(x => x.id === id);
  if (item) { item[field] = val; debounceSave(); renderLivePreview(); }
};
window.removeProject = (id) => {
  cvState.projects = cvState.projects.filter(x => x.id !== id);
  renderProjectsList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
};

// ----------------------------------------------------------------------------
// 13. محرك الرندرة الفوري للسيرة الذاتية (Live Multi-Page Preview Engine)
// ----------------------------------------------------------------------------

const ICONS = {
  phone: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  email: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  location: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  website: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  graduation: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
  star: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  globe: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  award: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  rocket: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>`,
  info: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
};

function renderLivePreview() {
  const doc = document.getElementById('cv-document');
  if (!doc) return;

  const s = cvState.settings;
  const p = cvState.personal;
  const vis = s.visibility;
  const cvLang = cvState.cvLanguage;
  const cvMeta = LANGUAGES_META[cvLang] || LANGUAGES_META.ar;
  const t = CV_TRANSLATIONS[cvLang] || CV_TRANSLATIONS.ar;

  // تطبيق اتجاه ورقة الـ CV ولغتها وخطها وألوانها
  doc.setAttribute('dir', cvMeta.dir);
  doc.setAttribute('lang', cvLang);
  doc.className = `cv-document ${s.template} font-size-${s.fontSize} skills-style-${s.skillsStyle} ${s.showPageGuides ? 'show-page-guides' : ''}`;
  
  doc.style.setProperty('--cv-primary', s.primaryColor);
  doc.style.setProperty('--cv-secondary', s.secondaryColor);
  doc.style.setProperty('--cv-text', s.textColor);
  doc.style.setProperty('--cv-bg', s.bgColor);

  const fontStack = s.fontFamily === 'System' ? 'system-ui, sans-serif' : `${s.fontFamily}, ${cvMeta.font}`;
  doc.style.setProperty('--cv-font-family', fontStack);

  // توليد المحتوى
  if (s.template === 'tpl-modern' || s.template === 'tpl-designer') {
    doc.innerHTML = buildSidebarTemplate(p, vis, s, t);
  } else if (s.template === 'tpl-executive') {
    doc.innerHTML = buildExecutiveTemplate(p, vis, s, t);
  } else if (s.template === 'tpl-twocolumn') {
    doc.innerHTML = buildTwoColumnTemplate(p, vis, s, t);
  } else {
    doc.innerHTML = buildStandardTemplate(p, vis, s, t);
  }

  // تقدير عدد صفحات A4 وتحديث الشارة
  updatePageCountEstimate();
}

function updatePageCountEstimate() {
  const doc = document.getElementById('cv-document');
  const badge = document.getElementById('page-count-badge');
  if (!doc || !badge) return;

  setTimeout(() => {
    // 1122px تقريباً تعادل 297mm بمقياس 96 DPI
    const height = doc.scrollHeight;
    const pageEstimate = Math.max(1, Math.ceil(height / 1120));
    const isAr = cvState.uiLanguage === 'ar';
    badge.textContent = isAr 
      ? `${pageEstimate} ${pageEstimate === 1 ? 'صفحة A4' : 'صفحات A4'}`
      : `${pageEstimate} ${pageEstimate === 1 ? 'A4 Page' : 'A4 Pages'}`;
  }, 100);
}

// ----------------------------------------------------------------------------
// 14. دوال توليد محتوى الأقسام المشتركة
// ----------------------------------------------------------------------------

function renderCvPhoto(p, s, vis) {
  if (!vis.photo || !p.photo) return '';
  return `
    <div class="cv-photo-wrapper cv-photo-${s.photoShape}">
      <img src="${p.photo}" alt="${escapeHtml(p.fullName)}">
    </div>
  `;
}

function renderCvContacts(p) {
  let contacts = [];
  if (p.phone) contacts.push(`<span class="cv-contact-item">${ICONS.phone} <span dir="ltr">${escapeHtml(p.phone)}</span></span>`);
  if (p.email) contacts.push(`<span class="cv-contact-item">${ICONS.email} <span dir="ltr">${escapeHtml(p.email)}</span></span>`);
  if (p.location) contacts.push(`<span class="cv-contact-item">${ICONS.location} <span>${escapeHtml(p.location)}</span></span>`);
  if (p.linkedin) contacts.push(`<span class="cv-contact-item">${ICONS.linkedin} <span dir="ltr">${escapeHtml(p.linkedin)}</span></span>`);
  if (p.website) contacts.push(`<span class="cv-contact-item">${ICONS.website} <span dir="ltr">${escapeHtml(p.website)}</span></span>`);
  return contacts.join('');
}

function renderCvSkills(skills, style, t) {
  if (!skills.length) return '';
  
  if (style === 'bars') {
    return `<div class="cv-skills-container">${skills.map(sk => {
      const pct = (parseInt(sk.level, 10) || 5) * 20;
      return `
        <div class="cv-skill-item">
          <div class="skill-bar-header"><span>${escapeHtml(sk.name)}</span><span>${pct}%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width: ${pct}%;"></div></div>
        </div>
      `;
    }).join('')}</div>`;
  }

  if (style === 'dots') {
    return `<div class="cv-skills-container">${skills.map(sk => {
      const lvl = parseInt(sk.level, 10) || 5;
      let dots = '';
      for (let i = 1; i <= 5; i++) dots += `<span class="skill-dot ${i <= lvl ? 'filled' : ''}"></span>`;
      return `
        <div class="cv-skill-item">
          <span>${escapeHtml(sk.name)}</span>
          <span class="skill-dots">${dots}</span>
        </div>
      `;
    }).join('')}</div>`;
  }

  if (style === 'stars') {
    return `<div class="cv-skills-container">${skills.map(sk => {
      const lvl = parseInt(sk.level, 10) || 5;
      const stars = '★'.repeat(lvl) + '☆'.repeat(5 - lvl);
      return `
        <div class="cv-skill-item">
          <span>${escapeHtml(sk.name)}</span>
          <span class="skill-stars-text">${stars}</span>
        </div>
      `;
    }).join('')}</div>`;
  }

  if (style === 'levels') {
    const levelNames = { '5': 'خبير / Expert', '4': 'متقدم / Adv.', '3': 'متوسط / Mid', '2': 'مبتدئ / Jr.', '1': 'أساسي' };
    return `<div class="cv-skills-container">${skills.map(sk => `
      <div class="cv-skill-item">
        <span>${escapeHtml(sk.name)}</span>
        <span class="skill-level-badge">${levelNames[sk.level] || ''}</span>
      </div>
    `).join('')}</div>`;
  }

  if (style === 'list') {
    return `<div class="cv-skills-container">${skills.map(sk => `
      <div class="cv-skill-list-item">• <strong>${escapeHtml(sk.name)}</strong></div>
    `).join('')}</div>`;
  }

  // Default: Tags
  return `<div class="cv-skills-container">${skills.map(sk => `
    <span class="cv-skill-tag">${escapeHtml(sk.name)}</span>
  `).join('')}</div>`;
}

function renderSectionByKey(key, p, vis, s, t) {
  if (vis[key] === false) return '';

  if (key === 'summary' && p.summary) {
    return `
      <section class="cv-section cv-sec-summary">
        <h2 class="cv-section-title">${ICONS.info} ${t.summary}</h2>
        <div class="cv-item-desc">${escapeHtml(p.summary)}</div>
      </section>
    `;
  }

  if (key === 'experience' && cvState.experience.length) {
    return `
      <section class="cv-section cv-sec-experience">
        <h2 class="cv-section-title">${ICONS.briefcase} ${t.experience}</h2>
        ${cvState.experience.map(exp => `
          <div class="cv-block-item">
            <div class="cv-block-header">
              <div>
                <span class="cv-item-title">${escapeHtml(exp.jobTitle || '')}</span>
                ${exp.company ? `<span class="cv-item-subtitle"> | ${escapeHtml(exp.company)}</span>` : ''}
              </div>
              ${exp.startDate || exp.endDate ? `<span class="cv-item-date">${escapeHtml(exp.startDate)} - ${exp.isCurrent ? t.present : escapeHtml(exp.endDate)}</span>` : ''}
            </div>
            ${exp.description ? `<div class="cv-item-desc">${escapeHtml(exp.description)}</div>` : ''}
          </div>
        `).join('')}
      </section>
    `;
  }

  if (key === 'education' && cvState.education.length) {
    return `
      <section class="cv-section cv-sec-education">
        <h2 class="cv-section-title">${ICONS.graduation} ${t.education}</h2>
        ${cvState.education.map(edu => `
          <div class="cv-block-item">
            <div class="cv-block-header">
              <div>
                <span class="cv-item-title">${escapeHtml(edu.degree || '')}</span>
                ${edu.field ? ` - <span>${escapeHtml(edu.field)}</span>` : ''}
                ${edu.school ? `<span class="cv-item-subtitle"> | ${escapeHtml(edu.school)}</span>` : ''}
              </div>
              ${edu.endDate ? `<span class="cv-item-date">${escapeHtml(edu.endDate)}</span>` : ''}
            </div>
            ${edu.description ? `<div class="cv-item-desc">${escapeHtml(edu.description)}</div>` : ''}
          </div>
        `).join('')}
      </section>
    `;
  }

  if (key === 'skills' && cvState.skills.length) {
    return `
      <section class="cv-section cv-sec-skills">
        <h2 class="cv-section-title">${ICONS.star} ${t.skills}</h2>
        ${renderCvSkills(cvState.skills, s.skillsStyle, t)}
      </section>
    `;
  }

  if (key === 'languages' && cvState.languages.length) {
    return `
      <section class="cv-section cv-sec-languages">
        <h2 class="cv-section-title">${ICONS.globe} ${t.languages}</h2>
        <div class="cv-languages-grid">
          ${cvState.languages.map(l => `
            <div class="cv-lang-item">
              <span class="cv-lang-name">${escapeHtml(l.name)}</span>
              <span class="cv-lang-level">${escapeHtml(l.level)}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (key === 'courses' && cvState.courses.length) {
    return `
      <section class="cv-section cv-sec-courses">
        <h2 class="cv-section-title">${ICONS.award} ${t.courses}</h2>
        ${cvState.courses.map(c => `
          <div class="cv-block-item">
            <div class="cv-block-header">
              <div>
                <span class="cv-item-title">${escapeHtml(c.name)}</span>
                ${c.issuer ? `<span class="cv-item-subtitle"> | ${escapeHtml(c.issuer)}</span>` : ''}
              </div>
              ${c.date ? `<span class="cv-item-date">${escapeHtml(c.date)}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </section>
    `;
  }

  if (key === 'projects' && cvState.projects.length) {
    return `
      <section class="cv-section cv-sec-projects">
        <h2 class="cv-section-title">${ICONS.rocket} ${t.projects}</h2>
        ${cvState.projects.map(pr => `
          <div class="cv-block-item">
            <div class="cv-block-header">
              <span class="cv-item-title">${escapeHtml(pr.name)}</span>
              ${pr.link ? `<a href="${escapeHtml(pr.link)}" target="_blank" class="cv-item-date" dir="ltr">${escapeHtml(pr.link)}</a>` : ''}
            </div>
            ${pr.description ? `<div class="cv-item-desc">${escapeHtml(pr.description)}</div>` : ''}
          </div>
        `).join('')}
      </section>
    `;
  }

  if (key === 'additional') {
    const a = cvState.additional || {};
    let details = [];
    if (a.drivingLicense) details.push(`<div><strong>${t.driving}:</strong> ${escapeHtml(a.drivingLicense)}</div>`);
    if (a.hobbies) details.push(`<div><strong>${t.hobbies}:</strong> ${escapeHtml(a.hobbies)}</div>`);
    if (a.references) details.push(`<div><strong>${t.references}:</strong> ${escapeHtml(a.references)}</div>`);
    
    if (details.length) {
      return `
        <section class="cv-section cv-sec-additional">
          <h2 class="cv-section-title">${ICONS.info} ${t.additional}</h2>
          <div class="cv-item-desc" style="display:flex; flex-direction:column; gap:0.35rem;">
            ${details.join('')}
          </div>
        </section>
      `;
    }
  }

  if (key === 'custom') {
    const a = cvState.additional || {};
    if (a.customTitle && a.customContent) {
      return `
        <section class="cv-section cv-sec-custom">
          <h2 class="cv-section-title">${ICONS.info} ${escapeHtml(a.customTitle)}</h2>
          <div class="cv-item-desc">${escapeHtml(a.customContent)}</div>
        </section>
      `;
    }
  }

  return '';
}

// ----------------------------------------------------------------------------
// 15. هياكل القوالب المختلفة (Templates Builders)
// ----------------------------------------------------------------------------

function buildStandardTemplate(p, vis, s, t) {
  const photoHtml = renderCvPhoto(p, s, vis);
  const contactsHtml = renderCvContacts(p);
  const order = s.sectionOrder || defaultState.settings.sectionOrder;

  return `
    <header class="cv-header">
      <div class="cv-header-info">
        <h1 class="cv-name">${escapeHtml(p.fullName || 'الاسم الكامل')}</h1>
        ${p.jobTitle ? `<div class="cv-title">${escapeHtml(p.jobTitle)}</div>` : ''}
        <div class="cv-contacts-wrap">${contactsHtml}</div>
      </div>
      ${photoHtml}
    </header>
    <main class="cv-main-body">
      ${order.map(key => renderSectionByKey(key, p, vis, s, t)).join('')}
    </main>
  `;
}

function buildSidebarTemplate(p, vis, s, t) {
  const photoHtml = renderCvPhoto(p, s, vis);
  const contactsHtml = renderCvContacts(p);
  const order = s.sectionOrder || defaultState.settings.sectionOrder;
  const sidebarKeys = ['skills', 'languages', 'additional'];
  const mainKeys = order.filter(k => !sidebarKeys.includes(k));

  return `
    <aside class="cv-sidebar">
      ${photoHtml ? `<div style="display:flex; justify-content:center;">${photoHtml}</div>` : ''}
      <div class="cv-sidebar-section">
        <h3 class="cv-section-title">${ICONS.phone} ${t.contact}</h3>
        <div class="cv-contacts-wrap" style="display:flex; flex-direction:column; gap:0.55rem;">${contactsHtml}</div>
      </div>
      ${sidebarKeys.map(k => renderSectionByKey(k, p, vis, s, t)).join('')}
    </aside>
    <main class="cv-main-content">
      <header class="cv-main-header" style="margin-bottom: 1.25rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.85rem;">
        <h1 class="cv-name">${escapeHtml(p.fullName || 'الاسم الكامل')}</h1>
        ${p.jobTitle ? `<div class="cv-title">${escapeHtml(p.jobTitle)}</div>` : ''}
      </header>
      ${mainKeys.map(k => renderSectionByKey(k, p, vis, s, t)).join('')}
    </main>
  `;
}

function buildExecutiveTemplate(p, vis, s, t) {
  const photoHtml = renderCvPhoto(p, s, vis);
  const contactsHtml = renderCvContacts(p);
  const order = s.sectionOrder || defaultState.settings.sectionOrder;

  return `
    <div class="cv-top-banner">
      <div>
        <h1 class="cv-name">${escapeHtml(p.fullName || 'الاسم الكامل')}</h1>
        ${p.jobTitle ? `<div class="cv-title">${escapeHtml(p.jobTitle)}</div>` : ''}
        <div class="cv-contacts-wrap" style="margin-top: 0.65rem; display:flex; flex-wrap:wrap; gap:0.5rem 1.25rem;">${contactsHtml}</div>
      </div>
      ${photoHtml}
    </div>
    <div class="cv-body-content">
      ${order.map(key => renderSectionByKey(key, p, vis, s, t)).join('')}
    </div>
  `;
}

function buildTwoColumnTemplate(p, vis, s, t) {
  const photoHtml = renderCvPhoto(p, s, vis);
  const contactsHtml = renderCvContacts(p);
  const order = s.sectionOrder || defaultState.settings.sectionOrder;

  const col1Keys = ['summary', 'experience', 'projects'];
  const col2Keys = order.filter(k => !col1Keys.includes(k));

  return `
    <header class="cv-header" style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h1 class="cv-name">${escapeHtml(p.fullName || 'الاسم الكامل')}</h1>
        ${p.jobTitle ? `<div class="cv-title">${escapeHtml(p.jobTitle)}</div>` : ''}
        <div class="cv-contacts-wrap" style="margin-top:0.4rem; display:flex; flex-wrap:wrap; gap:0.5rem 1.25rem;">${contactsHtml}</div>
      </div>
      ${photoHtml}
    </header>
    <div class="cv-columns-container">
      <div class="cv-column-main">
        ${col1Keys.map(k => renderSectionByKey(k, p, vis, s, t)).join('')}
      </div>
      <div class="cv-column-side">
        ${col2Keys.map(k => renderSectionByKey(k, p, vis, s, t)).join('')}
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 16. إعداد وتفعيل مستمعي الأحداث (Event Listeners Setup)
// ----------------------------------------------------------------------------

function setupEventListeners() {
  // الحقول الشخصية
  const personalFields = ['fullName', 'jobTitle', 'phone', 'email', 'location', 'website', 'linkedin', 'summary'];
  personalFields.forEach(key => {
    const el = document.getElementById(`field-${key}`);
    if (el) {
      el.addEventListener('input', () => {
        cvState.personal[key] = el.value;
        validateInputs();
        debounceSave();
        renderLivePreview();
      });
    }
  });

  // الحقول الإضافية
  ['drivingLicense', 'hobbies', 'references', 'customTitle', 'customContent'].forEach(key => {
    const el = document.getElementById(`field-${key}`);
    if (el) {
      el.addEventListener('input', () => {
        cvState.additional[key] = el.value;
        debounceSave();
        renderLivePreview();
      });
    }
  });

  // معالجة الصور
  document.getElementById('profile-photo-input')?.addEventListener('change', handlePhotoUpload);
  document.getElementById('btn-remove-photo')?.addEventListener('click', () => {
    cvState.personal.photo = '';
    const img = document.getElementById('profile-photo-preview');
    if (img) img.src = 'assets/avatar-placeholder.svg';
    debounceSave();
    renderLivePreview();
    showToast('تمت إزالة الصورة');
  });

  // لغة السيرة الذاتية
  document.getElementById('cv-content-lang-select')?.addEventListener('change', (e) => {
    setCvLanguage(e.target.value);
  });

  // قائمة لغات الموقع في الهيدر
  const langTrigger = document.getElementById('btn-ui-lang-trigger');
  if (langTrigger) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langTrigger.parentElement?.classList.toggle('open');
    });
  }
  document.addEventListener('click', () => {
    document.getElementById('ui-lang-menu')?.parentElement?.classList.remove('open');
  });

  // عناصر التخصيص
  setupColorListeners();
  setupSettingsSelects();

  // أزرار المكررات
  setupRepeaterAddButtons();

  // أزرار الحفظ والنماذج والتصدير
  setupActionButtons();

  // التحكم بالتكبير
  document.getElementById('btn-zoom-in')?.addEventListener('click', () => setZoom(currentZoom + 10));
  document.getElementById('btn-zoom-out')?.addEventListener('click', () => setZoom(currentZoom - 10));
  document.getElementById('btn-zoom-reset')?.addEventListener('click', () => setZoom(100));

  // زر إظهار/إخفاء فواصل الصفحات A4
  const btnToggleGuides = document.getElementById('btn-toggle-page-guides');
  if (btnToggleGuides) {
    btnToggleGuides.addEventListener('click', () => {
      cvState.settings.showPageGuides = !cvState.settings.showPageGuides;
      btnToggleGuides.classList.toggle('active', cvState.settings.showPageGuides);
      debounceSave();
      renderLivePreview();
    });
  }

  // الأكورديون
  document.querySelectorAll('.accordion-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const item = hdr.closest('.accordion-item');
      if (item) {
        const isExp = item.classList.contains('expanded');
        item.classList.toggle('expanded', !isExp);
        hdr.setAttribute('aria-expanded', !isExp);
      }
    });
  });

  // تبويبات الموبايل
  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mobile-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.target;
      const editor = document.getElementById('editor-panel');
      const preview = document.getElementById('preview-panel');

      if (target === 'preview-panel') {
        editor?.classList.add('mobile-hidden');
        preview?.classList.remove('mobile-hidden');
      } else {
        editor?.classList.remove('mobile-hidden');
        preview?.classList.add('mobile-hidden');
      }
    });
  });

  document.getElementById('nav-preview-link')?.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      document.querySelector('.mobile-tab-btn[data-target="preview-panel"]')?.click();
    }
  });

  document.getElementById('hero-cta-btn')?.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      document.querySelector('.mobile-tab-btn[data-target="editor-panel"]')?.click();
    }
  });
}

function setupColorListeners() {
  document.querySelectorAll('.color-circle').forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.dataset.color;
      cvState.settings.primaryColor = color;
      setVal('primary-color-input', color);
      setText('primary-color-code', color);
      updateColorPresetsActive(color);
      debounceSave();
      renderLivePreview();
    });
  });

  const bindColorInput = (id, stateKey, codeId) => {
    document.getElementById(id)?.addEventListener('input', (e) => {
      cvState.settings[stateKey] = e.target.value;
      setText(codeId, e.target.value);
      if (stateKey === 'primaryColor') updateColorPresetsActive(e.target.value);
      debounceSave();
      renderLivePreview();
    });
  };

  bindColorInput('primary-color-input', 'primaryColor', 'primary-color-code');
  bindColorInput('secondary-color-input', 'secondaryColor', 'secondary-color-code');
  bindColorInput('text-color-input', 'textColor', 'text-color-code');
  bindColorInput('bg-color-input', 'bgColor', 'bg-color-code');
}

function setupSettingsSelects() {
  const bindSelect = (id, key) => {
    document.getElementById(id)?.addEventListener('change', (e) => {
      cvState.settings[key] = e.target.value;
      debounceSave();
      renderLivePreview();
    });
  };

  bindSelect('font-family-select', 'fontFamily');
  bindSelect('font-size-select', 'fontSize');
  bindSelect('skills-style-select', 'skillsStyle');
  bindSelect('photo-shape-select', 'photoShape');
}

function setupRepeaterAddButtons() {
  document.getElementById('btn-add-experience')?.addEventListener('click', () => {
    cvState.experience.push({ id: generateId('exp'), company: '', jobTitle: '', startDate: '', endDate: '', isCurrent: false, description: '' });
    renderExperienceList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
  });
  document.getElementById('btn-add-education')?.addEventListener('click', () => {
    cvState.education.push({ id: generateId('edu'), school: '', field: '', degree: '', startDate: '', endDate: '', description: '' });
    renderEducationList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
  });
  document.getElementById('btn-add-skill')?.addEventListener('click', () => {
    cvState.skills.push({ id: generateId('sk'), name: '', level: '5' });
    renderSkillsList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
  });
  document.getElementById('btn-add-language')?.addEventListener('click', () => {
    cvState.languages.push({ id: generateId('lang'), name: '', level: 'متوسط' });
    renderLanguagesList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
  });
  document.getElementById('btn-add-course')?.addEventListener('click', () => {
    cvState.courses.push({ id: generateId('cr'), name: '', issuer: '', date: '' });
    renderCoursesList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
  });
  document.getElementById('btn-add-project')?.addEventListener('click', () => {
    cvState.projects.push({ id: generateId('pr'), name: '', description: '', link: '' });
    renderProjectsList(); updateRepeaterBadges(); debounceSave(); renderLivePreview();
  });
}

function setupActionButtons() {
  // نموذج جاهز
  document.getElementById('btn-load-sample')?.addEventListener('click', () => {
    cvState = JSON.parse(JSON.stringify(sampleArabicData));
    populateFormFromState();
    saveToLocalStorage();
    renderLivePreview();
    validateInputs();
    showToast('تم تحميل النموذج التجريبي الجاهز');
  });

  // مسح الكل ومودال التأكيد
  const clearModal = document.getElementById('clear-confirm-modal');
  const openClear = () => clearModal?.removeAttribute('hidden');
  document.getElementById('btn-clear-all')?.addEventListener('click', openClear);
  document.getElementById('footer-clear-btn')?.addEventListener('click', openClear);
  document.getElementById('btn-cancel-clear')?.addEventListener('click', () => clearModal?.setAttribute('hidden', ''));
  document.getElementById('btn-confirm-clear')?.addEventListener('click', () => {
    cvState = JSON.parse(JSON.stringify(defaultState));
    populateFormFromState();
    localStorage.removeItem(STORAGE_KEY);
    renderLivePreview();
    validateInputs();
    clearModal?.setAttribute('hidden', '');
    showToast('تم مسح البيانات بنجاح', 'danger');
  });

  // التصدير والاستيراد
  document.getElementById('btn-export-json')?.addEventListener('click', exportJsonFile);
  const importTrigger = document.getElementById('btn-import-trigger');
  const fileInput = document.getElementById('import-file-input');
  if (importTrigger && fileInput) {
    importTrigger.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileImport);
  }

  // الطباعة والـ PDF ومودال النصائح
  const printModal = document.getElementById('print-guide-modal');
  const openPrint = () => {
    validateInputs();
    printModal?.removeAttribute('hidden');
  };
  document.getElementById('btn-header-print')?.addEventListener('click', openPrint);
  document.getElementById('btn-panel-print')?.addEventListener('click', openPrint);
  document.getElementById('btn-close-print-guide')?.addEventListener('click', () => printModal?.setAttribute('hidden', ''));
  document.getElementById('btn-proceed-print')?.addEventListener('click', () => {
    printModal?.setAttribute('hidden', '');
    setTimeout(() => {
      window.print();
    }, 250);
  });
}

// ----------------------------------------------------------------------------
// 17. معالجة الصور والتكبير والتصدير والاستيراد
// ----------------------------------------------------------------------------

function handlePhotoUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('يرجى اختيار ملف صورة صالح', 'danger');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      const maxDim = 350;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressed = canvas.toDataURL('image/jpeg', 0.85);
      cvState.personal.photo = compressed;

      const pImg = document.getElementById('profile-photo-preview');
      if (pImg) pImg.src = compressed;

      debounceSave();
      renderLivePreview();
      showToast('تم تحديث الصورة بنجاح');
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function setZoom(val) {
  val = Math.max(50, Math.min(150, val));
  currentZoom = val;
  const container = document.getElementById('cv-paper-container');
  const display = document.getElementById('zoom-level-display');
  if (container) container.style.transform = `scale(${currentZoom / 100})`;
  if (display) display.textContent = `${currentZoom}%`;
}

function exportJsonFile() {
  try {
    const str = JSON.stringify(cvState, null, 2);
    const blob = new Blob([str], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeName = (cvState.personal.fullName || 'resume').trim().replace(/\s+/g, '_');
    a.href = url;
    a.download = `CV_${safeName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('تم تصدير ملف JSON بنجاح');
  } catch (err) {
    showToast('خطأ أثناء تصدير الملف', 'danger');
  }
}

function handleFileImport(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (typeof parsed !== 'object' || !parsed.personal) {
        throw new Error('ملف سيرة ذاتية غير صالح');
      }

      cvState = {
        ...defaultState,
        ...parsed,
        personal: { ...defaultState.personal, ...(parsed.personal || {}) },
        additional: { ...defaultState.additional, ...(parsed.additional || {}) },
        settings: {
          ...defaultState.settings,
          ...(parsed.settings || {}),
          sectionOrder: parsed.settings?.sectionOrder || defaultState.settings.sectionOrder,
          visibility: { ...defaultState.settings.visibility, ...(parsed.settings?.visibility || {}) }
        }
      };

      populateFormFromState();
      saveToLocalStorage();
      renderLivePreview();
      validateInputs();
      showToast('تم استيراد بيانات السيرة بنجاح!');
    } catch (err) {
      showToast('ملف JSON غير صالح أو تالف', 'danger');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

// ----------------------------------------------------------------------------
// 18. تشغيل التطبيق عند تحميل الصفحة (Application Initialization)
// ----------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const hasData = loadFromLocalStorage();
  if (!hasData) {
    cvState = JSON.parse(JSON.stringify(sampleArabicData));
  }

  buildLanguageDropdowns();
  setUiLanguage(cvState.uiLanguage);
  setupTemplateFilters();
  populateFormFromState();
  setupEventListeners();
  renderLivePreview();
  validateInputs();
});
