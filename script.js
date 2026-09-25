/**
 * Professional CV Builder - Core Application Logic
 * Supports: Multi-language UI (i18n), World Languages, 5 Design Themes, Real-time A4 Engine
 */

// ==========================================================================
// 1. Internationalization (i18n) Translation Dictionaries
// ==========================================================================
const i18n = {
  ar: {
    appTitle: "صانع السيرة الذاتية الاحترافي",
    btnSample: "بيانات نموذجية",
    btnClear: "مسح",
    btnSaveDraft: "حفظ مسودة",
    btnImportDraft: "استيراد",
    btnPrint: "تصدير PDF / طباعة",
    themeTitle: "تخصيص الهوية البصرية والقالب",
    lblTemplate: "قالب التصميم:",
    lblCvLang: "لغة واتجاه السيرة الذاتية:",
    lblFont: "خط السيرة الذاتية:",
    lblColor: "لون السمة الرئيسي:",
    secPersonal: "المعلومات الشخصية",
    lblPhoto: "الصورة الشخصية (اختيارية):",
    btnUploadPhoto: "اختر صورة",
    btnRemovePhoto: "حذف الصورة",
    photoTip: "صيغة JPG أو PNG مربعة لمظهر مثالي",
    lblFullName: "الاسم الكامل",
    lblJobTitle: "المسمى الوظيفي المستهدف",
    lblEmail: "البريد الإلكتروني",
    lblPhone: "رقم الهاتف",
    lblLocation: "المدينة والدولة",
    lblWebsite: "رابط الموقع أو لينكد إن (LinkedIn)",
    lblSummary: "الملخص المهني (نبذة احترافية)",
    secExp: "الخبرات المهنية",
    btnAddExp: "إضافة خبرة",
    secEdu: "التعليم والمؤهلات الأكاديمية",
    btnAddEdu: "إضافة مؤهل",
    secSkills: "المهارات التقنية والشخصية",
    btnAddSkill: "إضافة مهارة",
    secLanguages: "اللغات ومستوى الإتقان",
    btnAddLang: "إضافة لغة",
    secCerts: "الشهادات الاحترافية والدورات",
    btnAddCert: "إضافة شهادة",
    livePreview: "معاينة تفاعلية (A4 القياسي)",
    btnFit: "ملاءمة",
    cvSummary: "الملخص المهني",
    cvExp: "الخبرات المهنية",
    cvEdu: "التعليم والمؤهلات",
    cvSkills: "المهارات",
    cvLang: "اللغات",
    cvCerts: "الشهادات والدورات",
    phDegree: "المؤهل / التخصص الدراسي",
    phSchool: "الجامعة أو الكلية",
    phGradYear: "سنة التخرج",
    phGrade: "التقدير / المعدل",
    phExpTitle: "المسمى الوظيفي",
    phCompany: "اسم الشركة / المؤسسة",
    phStartDate: "تاريخ البدء",
    phEndDate: "تاريخ الانتهاء",
    phExpDesc: "أبرز المهام والإنجازات...",
    phSkill: "اسم المهارة",
    phLevel: "مستوى الإتقان (خبير، متقدم...)",
    phLang: "اختر أو اكتب لغة...",
    phLangLevel: "المستوى (اللغة الأم، طليق...)",
    phCertName: "اسم الشهادة أو الدورة",
    phIssuer: "الجهة المانحة",
    phYear: "السنة"
  },
  en: {
    appTitle: "Pro CV & Resume Studio",
    btnSample: "Sample Data",
    btnClear: "Clear All",
    btnSaveDraft: "Save Draft",
    btnImportDraft: "Import",
    btnPrint: "Export PDF / Print",
    themeTitle: "Visual Identity & Layout",
    lblTemplate: "Design Template:",
    lblCvLang: "CV Content & Direction:",
    lblFont: "CV Font Family:",
    lblColor: "Accent Theme Color:",
    secPersonal: "Personal Details",
    lblPhoto: "Profile Photo (Optional):",
    btnUploadPhoto: "Upload Photo",
    btnRemovePhoto: "Remove",
    photoTip: "Square JPG/PNG for best display",
    lblFullName: "Full Name",
    lblJobTitle: "Target Job Title",
    lblEmail: "Email Address",
    lblPhone: "Phone Number",
    lblLocation: "City, Country",
    lblWebsite: "LinkedIn or Portfolio URL",
    lblSummary: "Professional Summary",
    secExp: "Work Experience",
    btnAddExp: "Add Experience",
    secEdu: "Education & Qualifications",
    btnAddEdu: "Add Education",
    secSkills: "Key Skills & Expertise",
    btnAddSkill: "Add Skill",
    secLanguages: "Languages & Fluency",
    btnAddLang: "Add Language",
    secCerts: "Certifications & Honors",
    btnAddCert: "Add Certificate",
    livePreview: "Live Canvas Preview (Standard A4)",
    btnFit: "Fit",
    cvSummary: "Professional Summary",
    cvExp: "Work Experience",
    cvEdu: "Education",
    cvSkills: "Skills",
    cvLang: "Languages",
    cvCerts: "Certifications & Training",
    phDegree: "Degree / Field of Study",
    phSchool: "Institution / University",
    phGradYear: "Graduation Year",
    phGrade: "Grade / Honors (Optional)",
    phExpTitle: "Job Title",
    phCompany: "Company / Organization",
    phStartDate: "Start Date",
    phEndDate: "End Date (or Present)",
    phExpDesc: "Key responsibilities and measurable achievements...",
    phSkill: "Skill name (e.g. JavaScript)",
    phLevel: "Proficiency (e.g. Advanced)",
    phLang: "Choose or type a language...",
    phLangLevel: "Fluency (Native, Fluent, C1...)",
    phCertName: "Certification Name",
    phIssuer: "Issuing Organization",
    phYear: "Year Issued"
  },
  fr: {
    appTitle: "Créateur de CV Professionnel",
    btnSample: "Données de test",
    btnClear: "Effacer tout",
    btnSaveDraft: "Sauvegarder",
    btnImportDraft: "Importer",
    btnPrint: "Exporter PDF / Imprimer",
    themeTitle: "Identité Visuelle & Modèle",
    lblTemplate: "Modèle de CV:",
    lblCvLang: "Langue & Direction:",
    lblFont: "Police d'écriture:",
    lblColor: "Couleur principale:",
    secPersonal: "Coordonnées Personnelles",
    lblPhoto: "Photo de profil (optionnelle):",
    btnUploadPhoto: "Télécharger",
    btnRemovePhoto: "Supprimer",
    photoTip: "Format carré JPG ou PNG recommandé",
    lblFullName: "Nom et Prénom",
    lblJobTitle: "Poste visé",
    lblEmail: "Adresse e-mail",
    lblPhone: "Téléphone",
    lblLocation: "Ville, Pays",
    lblWebsite: "LinkedIn ou Site web",
    lblSummary: "Profil Professionnel",
    secExp: "Expérience Professionnelle",
    btnAddExp: "Ajouter un poste",
    secEdu: "Formation & Diplômes",
    btnAddEdu: "Ajouter une formation",
    secSkills: "Compétences clés",
    btnAddSkill: "Ajouter",
    secLanguages: "Langues",
    btnAddLang: "Ajouter une langue",
    secCerts: "Certifications",
    btnAddCert: "Ajouter",
    livePreview: "Aperçu en Direct (A4)",
    btnFit: "Adapter",
    cvSummary: "Profil Professionnel",
    cvExp: "Expérience Professionnelle",
    cvEdu: "Formation",
    cvSkills: "Compétences",
    cvLang: "Langues",
    cvCerts: "Certifications",
    phDegree: "Diplôme / Spécialisation",
    phSchool: "Université / École",
    phGradYear: "Année d'obtention",
    phGrade: "Mention",
    phExpTitle: "Intitulé du poste",
    phCompany: "Entreprise",
    phStartDate: "Date de début",
    phEndDate: "Date de fin",
    phExpDesc: "Missions et réalisations clés...",
    phSkill: "Compétence",
    phLevel: "Niveau (Avancé, Expert...)",
    phLang: "Langue...",
    phLangLevel: "Niveau (Bilingue, B2...)",
    phCertName: "Nom du certificat",
    phIssuer: "Organisme",
    phYear: "Année"
  },
  es: {
    appTitle: "Generador de CV Profesional",
    btnSample: "Datos de ejemplo",
    btnClear: "Borrar todo",
    btnSaveDraft: "Guardar borrador",
    btnImportDraft: "Importar",
    btnPrint: "Exportar PDF / Imprimir",
    themeTitle: "Diseño y Estilo",
    lblTemplate: "Plantilla:",
    lblCvLang: "Idioma del CV:",
    lblFont: "Tipografía:",
    lblColor: "Color de acento:",
    secPersonal: "Datos Personales",
    lblPhoto: "Foto de perfil (opcional):",
    btnUploadPhoto: "Subir foto",
    btnRemovePhoto: "Eliminar",
    photoTip: "Formato cuadrado JPG/PNG",
    lblFullName: "Nombre completo",
    lblJobTitle: "Título profesional",
    lblEmail: "Correo electrónico",
    lblPhone: "Teléfono",
    lblLocation: "Ciudad, País",
    lblWebsite: "LinkedIn o Sitio Web",
    lblSummary: "Perfil Profesional",
    secExp: "Experiencia Laboral",
    btnAddExp: "Añadir experiencia",
    secEdu: "Educación y Formación",
    btnAddEdu: "Añadir formación",
    secSkills: "Habilidades",
    btnAddSkill: "Añadir habilidad",
    secLanguages: "Idiomas",
    btnAddLang: "Añadir idioma",
    secCerts: "Certificaciones",
    btnAddCert: "Añadir certificado",
    livePreview: "Vista Previa en Vivo (A4)",
    btnFit: "Ajustar",
    cvSummary: "Perfil Profesional",
    cvExp: "Experiencia Laboral",
    cvEdu: "Educación",
    cvSkills: "Habilidades",
    cvLang: "Idiomas",
    cvCerts: "Certificaciones",
    phDegree: "Título / Carrera",
    phSchool: "Universidad o Instituto",
    phGradYear: "Año de graduación",
    phGrade: "Calificación",
    phExpTitle: "Puesto de trabajo",
    phCompany: "Empresa",
    phStartDate: "Fecha de inicio",
    phEndDate: "Fecha de finalización",
    phExpDesc: "Responsabilidades y logros clave...",
    phSkill: "Habilidad",
    phLevel: "Nivel (Avanzado, Intermedio...)",
    phLang: "Idioma...",
    phLangLevel: "Nivel de dominio (Nativo, C1...)",
    phCertName: "Nombre del certificado",
    phIssuer: "Entidad emisora",
    phYear: "Año"
  },
  de: {
    appTitle: "Professioneller Lebenslauf-Editor",
    btnSample: "Beispieldaten",
    btnClear: "Alles löschen",
    btnSaveDraft: "Entwurf speichern",
    btnImportDraft: "Importieren",
    btnPrint: "PDF Exportieren / Drucken",
    themeTitle: "Design & Vorlagen",
    lblTemplate: "Lebenslauf-Vorlage:",
    lblCvLang: "Sprache & Ausrichtung:",
    lblFont: "Schriftart:",
    lblColor: "Akzentfarbe:",
    secPersonal: "Persönliche Angaben",
    lblPhoto: "Bewerbungsfoto (optional):",
    btnUploadPhoto: "Foto hochladen",
    btnRemovePhoto: "Entfernen",
    photoTip: "Quadratisches Format JPG/PNG",
    lblFullName: "Vollständiger Name",
    lblJobTitle: "Berufsbezeichnung",
    lblEmail: "E-Mail-Adresse",
    lblPhone: "Telefonnummer",
    lblLocation: "Wohnort, Land",
    lblWebsite: "LinkedIn oder Webseite",
    lblSummary: "Kurzprofil",
    secExp: "Berufserfahrung",
    btnAddExp: "Erfahrung hinzufügen",
    secEdu: "Ausbildung & Studium",
    btnAddEdu: "Ausbildung hinzufügen",
    secSkills: "Kenntnisse & Fähigkeiten",
    btnAddSkill: "Fähigkeit hinzufügen",
    secLanguages: "Sprachen",
    btnAddLang: "Sprache hinzufügen",
    secCerts: "Zertifikate & Weiterbildung",
    btnAddCert: "Zertifikat hinzufügen",
    livePreview: "Live-Vorschau (Standard A4)",
    btnFit: "Einpassen",
    cvSummary: "Kurzprofil",
    cvExp: "Berufserfahrung",
    cvEdu: "Ausbildung",
    cvSkills: "Kenntnisse",
    cvLang: "Sprachen",
    cvCerts: "Zertifikate",
    phDegree: "Abschluss / Studienfach",
    phSchool: "Universität / Schule",
    phGradYear: "Abschlussjahr",
    phGrade: "Note",
    phExpTitle: "Position / Rolle",
    phCompany: "Unternehmen",
    phStartDate: "Beginn",
    phEndDate: "Ende (oder aktuell)",
    phExpDesc: "Hauptaufgaben und Erfolge...",
    phSkill: "Fähigkeit",
    phLevel: "Niveau (Experte, Fortgeschritten...)",
    phLang: "Sprache...",
    phLangLevel: "Sprachniveau (Muttersprache, C1...)",
    phCertName: "Zertifikatsname",
    phIssuer: "Aussteller",
    phYear: "Jahr"
  },
  tr: {
    appTitle: "Profesyonel CV Oluşturucu",
    btnSample: "Örnek Bilgiler",
    btnClear: "Temizle",
    btnSaveDraft: "Taslağı Kaydet",
    btnImportDraft: "İçe Aktar",
    btnPrint: "PDF İndir / Yazdır",
    themeTitle: "Görsel Tasarım & Şablon",
    lblTemplate: "CV Şablonu:",
    lblCvLang: "CV Dili ve Yönü:",
    lblFont: "Yazı Tipi:",
    lblColor: "Vurgu Rengi:",
    secPersonal: "Kişisel Bilgiler",
    lblPhoto: "Profil Fotoğrafı (İsteğe bağlı):",
    btnUploadPhoto: "Fotoğraf Seç",
    btnRemovePhoto: "Kaldır",
    photoTip: "Kare JPG veya PNG formatı",
    lblFullName: "Ad Soyad",
    lblJobTitle: "Hedeflenen Ünvan",
    lblEmail: "E-posta Adresi",
    lblPhone: "Telefon Numarası",
    lblLocation: "Şehir, Ülke",
    lblWebsite: "LinkedIn veya Web Sitesi",
    lblSummary: "Profesyonel Özet",
    secExp: "İş Deneyimi",
    btnAddExp: "Deneyim Ekle",
    secEdu: "Eğitim Bilgileri",
    btnAddEdu: "Eğitim Ekle",
    secSkills: "Beceriler & Uzmanlıklar",
    btnAddSkill: "Beceri Ekle",
    secLanguages: "Diller",
    btnAddLang: "Dil Ekle",
    secCerts: "Sertifikalar & Kurslar",
    btnAddCert: "Sertifika Ekle",
    livePreview: "Canlı Önizleme (Standart A4)",
    btnFit: "Sığdır",
    cvSummary: "Profesyonel Özet",
    cvExp: "İş Deneyimi",
    cvEdu: "Eğitim",
    cvSkills: "Beceriler",
    cvLang: "Yabancı Diller",
    cvCerts: "Sertifikalar",
    phDegree: "Bölüm / Derece",
    phSchool: "Üniversite / Okul",
    phGradYear: "Mezuniyet Yılı",
    phGrade: "Not Ortalaması",
    phExpTitle: "Ünvan / Pozisyon",
    phCompany: "Şirket Adı",
    phStartDate: "Başlangıç Tarihi",
    phEndDate: "Bitiş Tarihi",
    phExpDesc: "Sorumluluklar ve başarılar...",
    phSkill: "Beceri",
    phLevel: "Seviye (İleri, Uzman...)",
    phLang: "Dil seçin veya yazın...",
    phLangLevel: "Seviye (Ana Dil, C1...)",
    phCertName: "Sertifika Adı",
    phIssuer: "Veren Kurum",
    phYear: "Yıl"
  }
};

// ==========================================================================
// 2. Application State Definition & Samples
// ==========================================================================
let currentAppLang = 'ar';
let currentZoom = 1;

const sampleArabicData = {
  template: 'modern',
  fontFamily: "'Cairo', sans-serif",
  primaryColor: '#1e3a8a',
  direction: 'rtl',
  personal: {
    fullName: 'م. أحمد خالد الشمري',
    jobTitle: 'مهندس برمجيات أول ومطور سحابي (Senior Cloud Engineer)',
    email: 'ahmed.alshammari@example.com',
    phone: '+966 55 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
    website: 'linkedin.com/in/ahmed-shammari',
    summary: 'مهندس برمجيات أول بخبرة تزيد عن 7 سنوات في هندسة الحلول السحابية، إدارة البنى التحتية المؤتمتة، وبناء الأنظمة عالية الموثوقية. أمتلك سجلاً حافلاً في قيادة الفرق التقنية وتحسين أداء التطبيقات بنسبة تزيد عن 40% وخفض التكاليف التشغيلية السحابية.',
    photo: ''
  },
  experiences: [
    {
      id: 'exp-1',
      title: 'مهندس برمجيات وسحابيات أول (Senior Software Engineer)',
      company: 'شركة التقنيات المتقدمة الرقمية - الرياض',
      startDate: '2022',
      endDate: 'حتى الآن',
      description: '• قيادة فريق من 8 مهندسين لتطوير منصة دفع إلكترونية تخدم أكثر من 500,000 مستخدم شهرياً.\n• إعادة تصميم البنية التحتية بالاعتماد على Kubernetes و Microservices وتقليل وقت التعطل بنسبة 99.98%.\n• أتمتة خطوط التكامل والنشر المستمر (CI/CD Pipelines) باستخدام GitLab و Terraform.'
    },
    {
      id: 'exp-2',
      title: 'مطور واجهات وخلفيات ويب (Full Stack Developer)',
      company: 'حلول الابتكار الرقمي - الرياض',
      startDate: '2019',
      endDate: '2022',
      description: '• تصميم وبرمجة أكثر من 15 موقع وتطبيق ويب عالي الأداء باستخدام React.js و Node.js.\n• الربط مع بوابات الدفع الوطنية (مدى، سداد) والامتثال لأنظمة هيئة الزكاة والضريبة والجمارك.'
    }
  ],
  educations: [
    {
      id: 'edu-1',
      degree: 'بكالوريوس علوم الحاسب والمعلومات',
      school: 'جامعة الملك سعود - كلية علوم الحاسب',
      graduationYear: '2019',
      grade: 'مرتبة الشرف الأولى (معدل 4.88 / 5)'
    }
  ],
  skills: [
    { id: 'sk-1', name: 'TypeScript & JavaScript', level: 'خبير' },
    { id: 'sk-2', name: 'Node.js, Express & NestJS', level: 'خبير' },
    { id: 'sk-3', name: 'React.js, Next.js & Tailwind', level: 'متقدم' },
    { id: 'sk-4', name: 'Docker & Kubernetes', level: 'متقدم' },
    { id: 'sk-5', name: 'PostgreSQL, Redis & MongoDB', level: 'متقدم' },
    { id: 'sk-6', name: 'Amazon Web Services (AWS)', level: 'متقدم' },
    { id: 'sk-7', name: 'قيادة الفرق والتفكير التحليلي', level: 'محترف' }
  ],
  languages: [
    { id: 'lang-1', name: 'العربية (Arabic)', level: 'اللغة الأم (Native)' },
    { id: 'lang-2', name: 'الإنجليزية (English)', level: 'طلاقة واحترافية كاملة (C2)' },
    { id: 'lang-3', name: 'الفرنسية (Français)', level: 'مستوى متوسط (B1)' }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'شهادة مهندس حلول معتمد من أمازون (AWS Certified Solutions Architect)',
      issuer: 'Amazon Web Services (AWS)',
      year: '2023'
    },
    {
      id: 'cert-2',
      name: 'محترف إدارة المشاريع المعتمد (PMP)®',
      issuer: 'Project Management Institute (PMI)',
      year: '2022'
    }
  ]
};

let appState = JSON.parse(JSON.stringify(sampleArabicData));

// ==========================================================================
// 3. Application Lifecycle Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language or fallback
  const savedLang = localStorage.getItem('cv_builder_lang') || 'ar';
  currentAppLang = savedLang;
  document.getElementById('selectAppLang').value = currentAppLang;

  // Restore State
  const savedState = localStorage.getItem('cv_builder_autosave');
  if (savedState) {
    try {
      appState = JSON.parse(savedState);
    } catch (e) {
      appState = JSON.parse(JSON.stringify(sampleArabicData));
    }
  }

  applyI18n(currentAppLang);
  setupEvents();
  populateFormFields();
  applyVisualSettings();
  renderPreview();
});

function saveState() {
  localStorage.setItem('cv_builder_autosave', JSON.stringify(appState));
}

// ==========================================================================
// 4. Internationalization Engine (i18n)
// ==========================================================================
function applyI18n(langCode) {
  currentAppLang = langCode;
  const dict = i18n[langCode] || i18n['en'];

  // Set document dir for app interface (RTL for Arabic, LTR for others)
  const isRtl = (langCode === 'ar');
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', langCode);

  // Translate all tagged elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render dynamic form cards to refresh placeholder texts
  renderDynamicFormSections();
}

// ==========================================================================
// 5. Events Setup
// ==========================================================================
function setupEvents() {
  // App UI Language Selector
  document.getElementById('selectAppLang').addEventListener('change', (e) => {
    const newLang = e.target.value;
    localStorage.setItem('cv_builder_lang', newLang);
    applyI18n(newLang);
    renderPreview();
  });

  // Sample Data & Reset
  document.getElementById('btnSampleData').addEventListener('click', () => {
    if (confirm(currentAppLang === 'ar' ? 'هل تريد تحميل البيانات النموذجية؟' : 'Load sample data?')) {
      appState = JSON.parse(JSON.stringify(sampleArabicData));
      populateFormFields();
      applyVisualSettings();
      renderPreview();
      saveState();
    }
  });

  document.getElementById('btnClear').addEventListener('click', () => {
    if (confirm(currentAppLang === 'ar' ? 'هل أنت متأكد من مسح كافة الحقول؟' : 'Clear all fields?')) {
      appState = {
        template: 'modern',
        fontFamily: "'Cairo', sans-serif",
        primaryColor: '#1e3a8a',
        direction: (currentAppLang === 'ar' ? 'rtl' : 'ltr'),
        personal: { fullName: '', jobTitle: '', email: '', phone: '', location: '', website: '', summary: '', photo: '' },
        experiences: [], educations: [], skills: [], languages: [], certifications: []
      };
      populateFormFields();
      applyVisualSettings();
      renderPreview();
      saveState();
    }
  });

  // Print & JSON
  document.getElementById('btnPrint').addEventListener('click', () => window.print());
  document.getElementById('btnSaveDraft').addEventListener('click', exportDraftToJSON);
  document.getElementById('fileImport').addEventListener('change', importDraftFromJSON);

  // Template, Font & Direction Listeners
  document.getElementById('selectTemplate').addEventListener('change', (e) => {
    appState.template = e.target.value;
    saveState();
    renderPreview();
  });

  document.getElementById('selectCvDir').addEventListener('change', (e) => {
    appState.direction = e.target.value;
    document.getElementById('cvPaper').setAttribute('dir', appState.direction);
    saveState();
    renderPreview();
  });

  document.getElementById('selectCvFont').addEventListener('change', (e) => {
    appState.fontFamily = e.target.value;
    applyVisualSettings();
    saveState();
    renderPreview();
  });

  // Color Palette Dots
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const color = dot.getAttribute('data-color');
      appState.primaryColor = color;
      document.getElementById('customColorPicker').value = color;
      applyVisualSettings();
      saveState();
    });
  });

  document.getElementById('customColorPicker').addEventListener('input', (e) => {
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    appState.primaryColor = e.target.value;
    applyVisualSettings();
    saveState();
  });

  // Personal Info Form Binding
  const personalFields = ['fullName', 'jobTitle', 'email', 'phone', 'location', 'website', 'summary'];
  personalFields.forEach(field => {
    const inputId = 'inp' + field.charAt(0).toUpperCase() + field.slice(1);
    const element = document.getElementById(inputId);
    if (element) {
      element.addEventListener('input', (e) => {
        appState.personal[field] = e.target.value;
        saveState();
        renderPreview();
      });
    }
  });

  // Photo Uploader
  const inputPhoto = document.getElementById('inputPhoto');
  inputPhoto.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        appState.personal.photo = event.target.result;
        updatePhotoDisplay(event.target.result);
        saveState();
        renderPreview();
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('btnRemovePhoto').addEventListener('click', () => {
    appState.personal.photo = '';
    inputPhoto.value = '';
    updatePhotoDisplay('');
    saveState();
    renderPreview();
  });

  // Add Dynamic Items
  document.getElementById('btnAddExp').addEventListener('click', () => {
    appState.experiences.push({ id: 'exp-' + Date.now(), title: '', company: '', startDate: '', endDate: '', description: '' });
    renderDynamicFormSections();
    saveState();
    renderPreview();
  });

  document.getElementById('btnAddEdu').addEventListener('click', () => {
    appState.educations.push({ id: 'edu-' + Date.now(), degree: '', school: '', graduationYear: '', grade: '' });
    renderDynamicFormSections();
    saveState();
    renderPreview();
  });

  document.getElementById('btnAddSkill').addEventListener('click', () => {
    appState.skills.push({ id: 'sk-' + Date.now(), name: '', level: '' });
    renderDynamicFormSections();
    saveState();
    renderPreview();
  });

  document.getElementById('btnAddLang').addEventListener('click', () => {
    appState.languages.push({ id: 'lang-' + Date.now(), name: '', level: '' });
    renderDynamicFormSections();
    saveState();
    renderPreview();
  });

  document.getElementById('btnAddCert').addEventListener('click', () => {
    appState.certifications.push({ id: 'cert-' + Date.now(), name: '', issuer: '', year: '' });
    renderDynamicFormSections();
    saveState();
    renderPreview();
  });

  // Zoom Canvas Controls
  const canvas = document.getElementById('previewCanvasWrapper');
  const zoomText = document.getElementById('zoomLevelText');

  document.getElementById('btnZoomIn').addEventListener('click', () => {
    if (currentZoom < 1.4) {
      currentZoom += 0.1;
      applyZoom(canvas, zoomText);
    }
  });

  document.getElementById('btnZoomOut').addEventListener('click', () => {
    if (currentZoom > 0.45) {
      currentZoom -= 0.1;
      applyZoom(canvas, zoomText);
    }
  });

  document.getElementById('btnZoomReset').addEventListener('click', () => {
    currentZoom = 1;
    applyZoom(canvas, zoomText);
  });
}

function applyZoom(canvas, zoomText) {
  canvas.style.transform = `scale(${currentZoom.toFixed(2)})`;
  zoomText.textContent = `${Math.round(currentZoom * 100)}%`;
}

// ==========================================================================
// 6. Form Fields Sync & Styles
// ==========================================================================
function populateFormFields() {
  document.getElementById('selectTemplate').value = appState.template || 'modern';
  document.getElementById('selectCvDir').value = appState.direction || 'rtl';
  document.getElementById('selectCvFont').value = appState.fontFamily || "'Cairo', sans-serif";
  document.getElementById('cvPaper').setAttribute('dir', appState.direction || 'rtl');

  document.getElementById('inpFullName').value = appState.personal.fullName || '';
  document.getElementById('inpJobTitle').value = appState.personal.jobTitle || '';
  document.getElementById('inpEmail').value = appState.personal.email || '';
  document.getElementById('inpPhone').value = appState.personal.phone || '';
  document.getElementById('inpLocation').value = appState.personal.location || '';
  document.getElementById('inpWebsite').value = appState.personal.website || '';
  document.getElementById('inpSummary').value = appState.personal.summary || '';

  updatePhotoDisplay(appState.personal.photo);
  renderDynamicFormSections();
}

function updatePhotoDisplay(url) {
  const img = document.getElementById('imgPreview');
  const placeholder = document.getElementById('imgPlaceholder');
  const btnRemove = document.getElementById('btnRemovePhoto');

  if (url) {
    img.src = url;
    img.style.display = 'block';
    placeholder.style.display = 'none';
    btnRemove.style.display = 'inline-block';
  } else {
    img.src = '';
    img.style.display = 'none';
    placeholder.style.display = 'flex';
    btnRemove.style.display = 'none';
  }
}

function applyVisualSettings() {
  const color = appState.primaryColor || '#1e3a8a';
  document.documentElement.style.setProperty('--primary', color);
  document.documentElement.style.setProperty('--cv-font', appState.fontFamily || "'Cairo', sans-serif");
  document.getElementById('customColorPicker').value = color;

  document.querySelectorAll('.color-dot').forEach(dot => {
    if (dot.getAttribute('data-color') === color) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// ==========================================================================
// 7. Dynamic Form Lists Rendering
// ==========================================================================
function renderDynamicFormSections() {
  const dict = i18n[currentAppLang] || i18n['en'];

  // 1. Experiences
  const expContainer = document.getElementById('experienceList');
  expContainer.innerHTML = '';
  appState.experiences.forEach((exp, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-badge">#${idx + 1}</span>
        <button type="button" class="btn-remove-item" data-action="del-exp" data-id="${exp.id}">🗑️</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <input type="text" class="form-input" data-bind="exp.title" data-id="${exp.id}" value="${escapeHtml(exp.title)}" placeholder="${dict.phExpTitle}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="exp.company" data-id="${exp.id}" value="${escapeHtml(exp.company)}" placeholder="${dict.phCompany}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="exp.startDate" data-id="${exp.id}" value="${escapeHtml(exp.startDate)}" placeholder="${dict.phStartDate}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="exp.endDate" data-id="${exp.id}" value="${escapeHtml(exp.endDate)}" placeholder="${dict.phEndDate}">
        </div>
        <div class="form-group full-width">
          <textarea class="form-input" rows="3" data-bind="exp.description" data-id="${exp.id}" placeholder="${dict.phExpDesc}">${escapeHtml(exp.description)}</textarea>
        </div>
      </div>
    `;
    expContainer.appendChild(card);
  });

  // 2. Education
  const eduContainer = document.getElementById('educationList');
  eduContainer.innerHTML = '';
  appState.educations.forEach((edu, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-badge">#${idx + 1}</span>
        <button type="button" class="btn-remove-item" data-action="del-edu" data-id="${edu.id}">🗑️</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <input type="text" class="form-input" data-bind="edu.degree" data-id="${edu.id}" value="${escapeHtml(edu.degree)}" placeholder="${dict.phDegree}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="edu.school" data-id="${edu.id}" value="${escapeHtml(edu.school)}" placeholder="${dict.phSchool}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="edu.graduationYear" data-id="${edu.id}" value="${escapeHtml(edu.graduationYear)}" placeholder="${dict.phGradYear}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="edu.grade" data-id="${edu.id}" value="${escapeHtml(edu.grade)}" placeholder="${dict.phGrade}">
        </div>
      </div>
    `;
    eduContainer.appendChild(card);
  });

  // 3. Skills
  const skillsContainer = document.getElementById('skillsList');
  skillsContainer.innerHTML = '';
  appState.skills.forEach(sk => {
    const row = document.createElement('div');
    row.className = 'skill-row';
    row.innerHTML = `
      <input type="text" class="form-input" data-bind="sk.name" data-id="${sk.id}" value="${escapeHtml(sk.name)}" placeholder="${dict.phSkill}">
      <input type="text" class="form-input" data-bind="sk.level" data-id="${sk.id}" value="${escapeHtml(sk.level)}" placeholder="${dict.phLevel}">
      <button type="button" class="btn-icon-danger" data-action="del-sk" data-id="${sk.id}">✕</button>
    `;
    skillsContainer.appendChild(row);
  });

  // 4. Languages (with World Languages Datalist)
  const langContainer = document.getElementById('languagesList');
  langContainer.innerHTML = '';
  appState.languages.forEach(lang => {
    const row = document.createElement('div');
    row.className = 'skill-row';
    row.innerHTML = `
      <input type="text" list="worldLanguagesList" class="form-input" data-bind="lang.name" data-id="${lang.id}" value="${escapeHtml(lang.name)}" placeholder="${dict.phLang}">
      <input type="text" class="form-input" data-bind="lang.level" data-id="${lang.id}" value="${escapeHtml(lang.level)}" placeholder="${dict.phLangLevel}">
      <button type="button" class="btn-icon-danger" data-action="del-lang" data-id="${lang.id}">✕</button>
    `;
    langContainer.appendChild(row);
  });

  // 5. Certifications
  const certContainer = document.getElementById('certificationsList');
  certContainer.innerHTML = '';
  appState.certifications.forEach((cert, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-badge">#${idx + 1}</span>
        <button type="button" class="btn-remove-item" data-action="del-cert" data-id="${cert.id}">🗑️</button>
      </div>
      <div class="form-grid">
        <div class="form-group full-width">
          <input type="text" class="form-input" data-bind="cert.name" data-id="${cert.id}" value="${escapeHtml(cert.name)}" placeholder="${dict.phCertName}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="cert.issuer" data-id="${cert.id}" value="${escapeHtml(cert.issuer)}" placeholder="${dict.phIssuer}">
        </div>
        <div class="form-group">
          <input type="text" class="form-input" data-bind="cert.year" data-id="${cert.id}" value="${escapeHtml(cert.year)}" placeholder="${dict.phYear}">
        </div>
      </div>
    `;
    certContainer.appendChild(card);
  });

  attachDynamicCardEvents();
}

function attachDynamicCardEvents() {
  document.querySelectorAll('[data-bind]').forEach(input => {
    input.addEventListener('input', (e) => {
      const bind = e.target.getAttribute('data-bind');
      const id = e.target.getAttribute('data-id');
      const val = e.target.value;

      if (bind.startsWith('exp.')) {
        const item = appState.experiences.find(x => x.id === id);
        if (item) item[bind.split('.')[1]] = val;
      } else if (bind.startsWith('edu.')) {
        const item = appState.educations.find(x => x.id === id);
        if (item) item[bind.split('.')[1]] = val;
      } else if (bind.startsWith('sk.')) {
        const item = appState.skills.find(x => x.id === id);
        if (item) item[bind.split('.')[1]] = val;
      } else if (bind.startsWith('lang.')) {
        const item = appState.languages.find(x => x.id === id);
        if (item) item[bind.split('.')[1]] = val;
      } else if (bind.startsWith('cert.')) {
        const item = appState.certifications.find(x => x.id === id);
        if (item) item[bind.split('.')[1]] = val;
      }

      saveState();
      renderPreview();
    });
  });

  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = e.currentTarget.getAttribute('data-action');
      const id = e.currentTarget.getAttribute('data-id');

      if (action === 'del-exp') appState.experiences = appState.experiences.filter(x => x.id !== id);
      else if (action === 'del-edu') appState.educations = appState.educations.filter(x => x.id !== id);
      else if (action === 'del-sk') appState.skills = appState.skills.filter(x => x.id !== id);
      else if (action === 'del-lang') appState.languages = appState.languages.filter(x => x.id !== id);
      else if (action === 'del-cert') appState.certifications = appState.certifications.filter(x => x.id !== id);

      renderDynamicFormSections();
      saveState();
      renderPreview();
    });
  });
}

// ==========================================================================
// 8. Live A4 CV Preview Rendering Engine
// ==========================================================================
function renderPreview() {
  const paper = document.getElementById('cvPaper');
  const template = appState.template || 'modern';
  const isRtl = (appState.direction || 'rtl') === 'rtl';
  const dict = i18n[currentAppLang] || i18n['en'];

  paper.className = `cv-sheet template-${template}`;

  if (template === 'executive') {
    paper.innerHTML = renderExecutiveLayout(dict, isRtl);
  } else if (template === 'creative') {
    paper.innerHTML = renderCreativeLayout(dict, isRtl);
  } else {
    paper.innerHTML = renderStandardLayout(dict, isRtl, template);
  }
}

// Standard Layout (Modern, Classic, Minimal)
function renderStandardLayout(dict, isRtl, template) {
  const p = appState.personal;

  const contactItems = [];
  if (p.phone) contactItems.push(`<span class="cv-contact-item">📞 ${escapeHtml(p.phone)}</span>`);
  if (p.email) contactItems.push(`<span class="cv-contact-item">✉️ ${escapeHtml(p.email)}</span>`);
  if (p.location) contactItems.push(`<span class="cv-contact-item">📍 ${escapeHtml(p.location)}</span>`);
  if (p.website) contactItems.push(`<span class="cv-contact-item">🌐 ${escapeHtml(p.website)}</span>`);

  const contactHtml = contactItems.length ? `<div class="cv-contact-bar">${contactItems.join('')}</div>` : '';
  const photoHtml = p.photo ? `<img src="${p.photo}" class="cv-header-photo" alt="Photo">` : '';

  const summaryHtml = p.summary ? `
    <section class="cv-section">
      <div class="cv-section-title">${dict.cvSummary}</div>
      <p class="cv-summary-text">${escapeHtml(p.summary)}</p>
    </section>
  ` : '';

  let expHtml = '';
  if (appState.experiences.length > 0) {
    const list = appState.experiences.map(exp => `
      <div class="cv-entry">
        <div class="cv-entry-header">
          <div class="cv-entry-title">${escapeHtml(exp.title || '')}</div>
          <div class="cv-entry-date">${escapeHtml(exp.startDate || '')} ${exp.endDate ? '- ' + escapeHtml(exp.endDate) : ''}</div>
        </div>
        <div class="cv-entry-subtitle">${escapeHtml(exp.company || '')}</div>
        ${exp.description ? `<div class="cv-entry-desc">${escapeHtml(exp.description)}</div>` : ''}
      </div>
    `).join('');

    expHtml = `
      <section class="cv-section">
        <div class="cv-section-title">${dict.cvExp}</div>
        ${list}
      </section>
    `;
  }

  let eduHtml = '';
  if (appState.educations.length > 0) {
    const list = appState.educations.map(edu => `
      <div class="cv-entry">
        <div class="cv-entry-header">
          <div class="cv-entry-title">${escapeHtml(edu.degree || '')}</div>
          <div class="cv-entry-date">${escapeHtml(edu.graduationYear || '')}</div>
        </div>
        <div class="cv-entry-subtitle">${escapeHtml(edu.school || '')} ${edu.grade ? '• ' + escapeHtml(edu.grade) : ''}</div>
      </div>
    `).join('');

    eduHtml = `
      <section class="cv-section">
        <div class="cv-section-title">${dict.cvEdu}</div>
        ${list}
      </section>
    `;
  }

  let skillsHtml = '';
  if (appState.skills.length > 0) {
    const list = appState.skills.map(sk => `
      <span class="cv-skill-badge">${escapeHtml(sk.name)}${sk.level ? ' (' + escapeHtml(sk.level) + ')' : ''}</span>
    `).join('');

    skillsHtml = `
      <section class="cv-section">
        <div class="cv-section-title">${dict.cvSkills}</div>
        <div class="cv-skills-container">${list}</div>
      </section>
    `;
  }

  let langHtml = '';
  if (appState.languages.length > 0) {
    const list = appState.languages.map(lg => `
      <div class="cv-lang-item">
        <strong>${escapeHtml(lg.name)}</strong>
        <span class="cv-lang-level">${escapeHtml(lg.level || '')}</span>
      </div>
    `).join('');

    langHtml = `
      <section class="cv-section">
        <div class="cv-section-title">${dict.cvLang}</div>
        <div class="cv-languages-container">${list}</div>
      </section>
    `;
  }

  let certHtml = '';
  if (appState.certifications.length > 0) {
    const list = appState.certifications.map(cert => `
      <div class="cv-entry">
        <div class="cv-entry-header">
          <div class="cv-entry-title">${escapeHtml(cert.name)}</div>
          <div class="cv-entry-date">${escapeHtml(cert.year || '')}</div>
        </div>
        <div class="cv-entry-subtitle">${escapeHtml(cert.issuer || '')}</div>
      </div>
    `).join('');

    certHtml = `
      <section class="cv-section">
        <div class="cv-section-title">${dict.cvCerts}</div>
        ${list}
      </section>
    `;
  }

  return `
    <header class="cv-header">
      <div class="cv-header-content">
        <h1 class="cv-name">${escapeHtml(p.fullName || (isRtl ? 'الاسم واللقب' : 'Full Name'))}</h1>
        <div class="cv-job-title">${escapeHtml(p.jobTitle || (isRtl ? 'المسمى الوظيفي' : 'Job Title'))}</div>
        ${contactHtml}
      </div>
      ${photoHtml}
    </header>

    ${summaryHtml}
    ${expHtml}
    ${eduHtml}
    ${skillsHtml}
    ${certHtml}
    ${langHtml}
  `;
}

// Executive Layout (Dual Column)
function renderExecutiveLayout(dict, isRtl) {
  const p = appState.personal;
  const photoHtml = p.photo ? `<img src="${p.photo}" class="cv-header-photo" alt="Photo">` : '';

  const contactList = [];
  if (p.phone) contactList.push(`<div class="cv-contact-item">📞 ${escapeHtml(p.phone)}</div>`);
  if (p.email) contactList.push(`<div class="cv-contact-item">✉️ ${escapeHtml(p.email)}</div>`);
  if (p.location) contactList.push(`<div class="cv-contact-item">📍 ${escapeHtml(p.location)}</div>`);
  if (p.website) contactList.push(`<div class="cv-contact-item">🌐 ${escapeHtml(p.website)}</div>`);

  let skillsHtml = '';
  if (appState.skills.length > 0) {
    const badges = appState.skills.map(sk => `<span class="cv-skill-badge">${escapeHtml(sk.name)}</span>`).join('');
    skillsHtml = `
      <div>
        <div class="cv-section-title">${dict.cvSkills}</div>
        <div class="cv-skills-container">${badges}</div>
      </div>
    `;
  }

  let langHtml = '';
  if (appState.languages.length > 0) {
    const list = appState.languages.map(lg => `
      <div class="cv-lang-item">
        <span>${escapeHtml(lg.name)}</span>
        <span class="cv-lang-level">${escapeHtml(lg.level || '')}</span>
      </div>
    `).join('');
    langHtml = `
      <div>
        <div class="cv-section-title">${dict.cvLang}</div>
        <div class="cv-languages-container" style="grid-template-columns:1fr;">${list}</div>
      </div>
    `;
  }

  const summaryHtml = p.summary ? `
    <section class="cv-section">
      <div class="cv-section-title">${dict.cvSummary}</div>
      <p class="cv-summary-text">${escapeHtml(p.summary)}</p>
    </section>
  ` : '';

  let expHtml = '';
  if (appState.experiences.length > 0) {
    const list = appState.experiences.map(exp => `
      <div class="cv-entry">
        <div class="cv-entry-header">
          <div class="cv-entry-title">${escapeHtml(exp.title || '')}</div>
          <div class="cv-entry-date">${escapeHtml(exp.startDate || '')} ${exp.endDate ? '- ' + escapeHtml(exp.endDate) : ''}</div>
        </div>
        <div class="cv-entry-subtitle">${escapeHtml(exp.company || '')}</div>
        ${exp.description ? `<div class="cv-entry-desc">${escapeHtml(exp.description)}</div>` : ''}
      </div>
    `).join('');
    expHtml = `<section class="cv-section"><div class="cv-section-title">${dict.cvExp}</div>${list}</section>`;
  }

  let eduHtml = '';
  if (appState.educations.length > 0) {
    const list = appState.educations.map(edu => `
      <div class="cv-entry">
        <div class="cv-entry-header">
          <div class="cv-entry-title">${escapeHtml(edu.degree || '')}</div>
          <div class="cv-entry-date">${escapeHtml(edu.graduationYear || '')}</div>
        </div>
        <div class="cv-entry-subtitle">${escapeHtml(edu.school || '')} ${edu.grade ? '• ' + escapeHtml(edu.grade) : ''}</div>
      </div>
    `).join('');
    eduHtml = `<section class="cv-section"><div class="cv-section-title">${dict.cvEdu}</div>${list}</section>`;
  }

  let certHtml = '';
  if (appState.certifications.length > 0) {
    const list = appState.certifications.map(cert => `
      <div class="cv-entry">
        <div class="cv-entry-header">
          <div class="cv-entry-title">${escapeHtml(cert.name)}</div>
          <div class="cv-entry-date">${escapeHtml(cert.year || '')}</div>
        </div>
        <div class="cv-entry-subtitle">${escapeHtml(cert.issuer || '')}</div>
      </div>
    `).join('');
    certHtml = `<section class="cv-section"><div class="cv-section-title">${dict.cvCerts}</div>${list}</section>`;
  }

  return `
    <aside class="exec-sidebar">
      ${photoHtml}
      <div>
        <div class="cv-section-title">${isRtl ? 'بيانات التواصل' : 'Contact'}</div>
        <div class="cv-contact-bar">${contactList.join('')}</div>
      </div>
      ${skillsHtml}
      ${langHtml}
    </aside>

    <div class="exec-main">
      <header>
        <h1 class="cv-name">${escapeHtml(p.fullName || (isRtl ? 'الاسم واللقب' : 'Full Name'))}</h1>
        <div class="cv-job-title">${escapeHtml(p.jobTitle || (isRtl ? 'المسمى الوظيفي' : 'Job Title'))}</div>
      </header>
      ${summaryHtml}
      ${expHtml}
      ${eduHtml}
      ${certHtml}
    </div>
  `;
}

// Creative Studio Layout (Gradient Top Banner)
function renderCreativeLayout(dict, isRtl) {
  const p = appState.personal;
  const photoHtml = p.photo ? `<img src="${p.photo}" class="cv-header-photo" alt="Photo">` : '';

  const contactItems = [];
  if (p.phone) contactItems.push(`<span class="cv-contact-item">📞 ${escapeHtml(p.phone)}</span>`);
  if (p.email) contactItems.push(`<span class="cv-contact-item">✉️ ${escapeHtml(p.email)}</span>`);
  if (p.location) contactItems.push(`<span class="cv-contact-item">📍 ${escapeHtml(p.location)}</span>`);
  if (p.website) contactItems.push(`<span class="cv-contact-item">🌐 ${escapeHtml(p.website)}</span>`);

  const standardContent = renderStandardLayout(dict, isRtl, 'creative');
  // Strip default header to inject creative gradient banner
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${standardContent}</div>`, 'text/html');
  const header = doc.querySelector('.cv-header');
  if (header) header.remove();

  return `
    <div class="creative-banner">
      <div>
        <h1 class="cv-name">${escapeHtml(p.fullName || (isRtl ? 'الاسم الكامل' : 'Full Name'))}</h1>
        <div class="cv-job-title">${escapeHtml(p.jobTitle || (isRtl ? 'المسمى الوظيفي' : 'Job Title'))}</div>
        <div class="cv-contact-bar" style="margin-top:0.6rem;">${contactItems.join('')}</div>
      </div>
      ${photoHtml}
    </div>
    <div class="creative-body">
      ${doc.body.firstChild.innerHTML}
    </div>
  `;
}

// ==========================================================================
// 9. Backup & Restore Functions
// ==========================================================================
function exportDraftToJSON() {
  const jsonString = JSON.stringify(appState, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `resume-${(appState.personal.fullName || 'draft').replace(/\s+/g, '_')}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importDraftFromJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data && data.personal) {
        appState = data;
        populateFormFields();
        applyVisualSettings();
        renderPreview();
        saveState();
        alert(currentAppLang === 'ar' ? 'تم استيراد بيانات السيرة الذاتية بنجاح!' : 'Resume imported successfully!');
      } else {
        alert(currentAppLang === 'ar' ? 'ملف غير صالح!' : 'Invalid JSON draft file!');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
