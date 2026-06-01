/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrandProfile } from './types';

export interface MethodDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageKey: string; // matches vector visualization in STEMVisuals
  highlights: string[];
}

export interface CurricularClass {
  id: string;
  title: string;
  level: string;
  description: string;
  duration: string;
  syllabus: string[];
  imageKey: string;
}

export interface Milestone {
  period: string;
  role: string;
  institution: string;
  details: string;
}

export const BRAND_PROFILES: Record<'en' | 'my', BrandProfile> = {
  en: {
    name: "Sayar Moe Ko Tun",
    overview: "U Moe Ko Tun is a distinguished veteran educator specializing in advanced Mathematics and Physics for international curricula (IGCSE, A-Level, and Digital SAT). Renowned for his exceptional ability to teach complex mathematical concepts with crystal-clear clarity, he blends rigorous logical derivation with practical physical intuition to empower students for elite academic performance and engineering pathways.",
    websiteUrl: "https://moe-ko-tun-profile.pages.dev/",
    brandValues: [
      "Mathematical Precision",
      "Conceptual Physics Mastery",
      "Pedagogical Innovation",
      "Professional Excellence"
    ],
    visualAesthetics: [
      "Technical",
      "Clean",
      "Intellectual",
      "Disciplined"
    ],
    toneOfVoice: [
      "Professional",
      "Authoritative",
      "Educational",
      "Methodical"
    ]
  },
  my: {
    name: "ဆရာမိုးကိုထွန်း",
    overview: "ဆရာဦးမိုးကိုထွန်းသည် IGCSE, A-Level နှင့် Digital SAT စသည့် နိုင်ငံတကာသင်ရိုးညွှန်းတမ်းများအတွက် အဆင့်မြင့်သင်္ချာ (Mathematics) နှင့် ရူပဗေဒ (Physics) ဘာသာရပ်များကို အထူးပြုသင်ကြားပေးနေသော ကင်းဘရစ်ချ်အသိအမှတ်ပြု (Cambridge-certified) ဝါရင့် ပညာရေးလမ်းညွှန် ဆရာကြီးတစ်ဦး ဖြစ်ပါသည်။ အထူးသဖြင့် ဆန်းသစ်ပြီး နားလည်လွယ်သော သင်္ချာသင်ကြားပြသမှုပုံစံများကြောင့် အထူးထင်ရှားကျော်ကြားပြီး၊ ကျောင်းသားများ၏ ယုတ္တိဗေဒအတွေးအခေါ် ပိုင်နိုင်မှုနှင့် STEM ပေါင်းစပ်သင်ကြားမှုကို အဓိကထားကာ ထိပ်တန်းရလဒ်ကောင်းများ ရရှိစေရန် ၁၆ နှစ်ကျော်တိုင် အောင်မြင်စွာ ပြုစုပျိုးထောင်ပေးလျက်ရှိသည်။",
    websiteUrl: "https://moe-ko-tun-profile.pages.dev/",
    brandValues: [
      "သင်္ချာတိကျသေချာမှု",
      "သဘောတရားပိုင်း ကျွမ်းကျင်မှု",
      "ဆန်းသစ်သော သင်ကြားရေးနည်းလမ်း",
      "ပရော်ဖက်ရှင်နယ် ထူးချွန်ပြောင်မြောက်မှု"
    ],
    visualAesthetics: [
      "နည်းပညာဆန်သော",
      "သပ်ရပ်သန့်ရှင်းသော",
      "ဉာဏ်ပညာထက်မြက်မှု",
      "စည်းကမ်းစနစ်ကျသော"
    ],
    toneOfVoice: [
      "ပရော်ဖက်ရှင်နယ်ဆန်သော",
      "ခိုင်မာအားကိုးရသော",
      "ပညာရေးအနှစ်သာရရှိသော",
      "စနစ်တကျ လမ်းညွှန်ပြသသော"
    ]
  }
};

export const TEACHING_METHODS: Record<'en' | 'my', MethodDetail[]> = {
  en: [
    {
      id: "method_1",
      title: "Conceptual Mastery Over Memory",
      subtitle: "The Core Philosophy",
      description: "Moving students away from rote memorization toward deep first-principles intuition. We analyze how equations represent real physical systems, making exam questions predictable.",
      imageKey: "formula",
      highlights: [
        "Interactive math derivations",
        "Physical model visualizing",
        "Diagnostic error tracking"
      ]
    },
    {
      id: "method_2",
      title: "Rigorous Vector Manipulation",
      subtitle: "Active Spatial Learning",
      description: "Physics is spatial. Students learn by constructing force triangles, decomposition vectors, and algebraic proofs, developing mechanical intuition that lasts.",
      imageKey: "physics_stylus",
      highlights: [
        "Free body diagram practice",
        "Component vector modeling",
        "Analytical calculus linkage"
      ]
    },
    {
      id: "method_3",
      title: "Summer Bridge Retention",
      subtitle: "Bridging Syllabus Gaps",
      description: "Preventing the 'summer slide'. We actively bridge the steep cognitive transition between IGCSE and A-Level Physics and Mathematics.",
      imageKey: "slide_chart",
      highlights: [
        "Pre-term curriculum mapping",
        "Logic retention exercises",
        "Weekly diagnostic monitoring"
      ]
    },
    {
      id: "method_4",
      title: "Predictive Exam Tactics",
      subtitle: "Specialized Exam Mechanics",
      description: "Systematically breaking down Cambridge and CollegeBoard question patterns, teaching students to identify examiner traps instantly.",
      imageKey: "diagnostics",
      highlights: [
        "Examiner rubric analysis",
        "Structured drafting proofing",
        "Time management drills"
      ]
    }
  ],
  my: [
    {
      id: "method_1",
      title: "အလွတ်ကျက်ခြင်းထက် သဘောတရားပိုင်နိုင်မှု",
      subtitle: "အဓိကသင်ကြားရေးဒဿန",
      description: "ကျောင်းသားများအား အလွတ်ကျက်ခြင်းမှ ရုန်းထွက်စေပြီး အခြေခံသဘောတရားများကို နက်နက်ရှိုင်းရှိုင်း နားလည်စေရန် လေ့ကျင့်ပေးသည်။ ညီမျှခြင်းများက ရုပ်ပိုင်းဆိုင်ရာစနစ်များကို မည်သို့ကိုယ်စားပြုပုံကို ဆန်းစစ်စေပြီး စာမေးပွဲမေးခွန်းများကို လွယ်ကူစွာဖြေရှင်းနိုင်အောင် ပြုလုပ်ပေးသည်။",
      imageKey: "formula",
      highlights: [
        "အပြန်အလှန်တုံ့ပြန် သင်္ချာဖော်ထုတ်မှုများ",
        "ရုပ်ပိုင်းဆိုင်ရာ စံနမူနာများ သရုပ်ဖော်ခြင်း",
        "မှားယွင်းမှုစနစ်များကို ရှာဖွေဆန်းစစ်ခြင်း"
      ]
    },
    {
      id: "method_2",
      title: "တိကျစနစ်ကျသော ဗက်တာဆန်းစစ်မှု",
      subtitle: "နက်ရှိုင်းသော အာရုံခံစားမှု လေ့လာရေး",
      description: "ရူပဗေဒသည် ပုံရိပ်ယောင် သဘောတရားဖြစ်သည်။ ကျောင်းသားများသည် အားသက်ရောက်မှု တြိဂံများ ဆွဲသားခြင်း၊ ဗက်တာခွဲခြမ်းခြင်းနှင့် အက္ခရာသင်္ချာစနစ် သက်သေပြချက်များကို ကိုယ်တိုင်ရေးဆွဲလေ့ကျင့်ခြင်းဖြင့် ရေရှည်တည်တံ့သော ရူပဗေဒအမြင်ကို ထူထောင်ရရှိမည်။",
      imageKey: "physics_stylus",
      highlights: [
        "Free-Body ပုံကြမ်းများ ရေးဆွဲစမ်းသပ်ခြင်း",
        "ဗက်တာခွဲအဖွဲ့စည်းများ တည်ဆောက်ပုံဖော်ခြင်း",
        "ကလကုလသင်္ချာနှင့် ပေါင်းစပ်ဆန်းစစ်ခြင်း"
      ]
    },
    {
      id: "method_3",
      title: "နွေရာသီ ပေါင်းကူးပညာရည်ထိန်းသိမ်းမှု",
      subtitle: "သင်ရိုးကွာဟချက် ဖြည့်ဆည်းခြင်း",
      description: "ကျောင်းပိတ်ရက်အတွင်း ပညာရည်လျော့ကျမှုကို ကာကွယ်ခြင်း။ IGCSE မှ ခက်ခဲပြီး နက်ရှိုင်းလှသော A-Level ရူပဗေဒနှင့် သင်္ချာဘာသာရပ် အကူးအပြောင်းအတွက် အသိဉာဏ်အခြေခံအုတ်မြစ်ကို ထိရောက်စွာ ပေါင်းကူးတည်ဆောက်ပေးသည်။",
      imageKey: "slide_chart",
      highlights: [
        "အတန်းမစတင်မီ သင်ရိုးညှိနှိုင်းမှုများ",
        "သင်္ချာနှင့်ရူပဗေဒ ယုတ္တိဗေဒ ထိန်းသိမ်းရေးလေ့ကျင့်ခန်းများ",
        "အပတ်စဉ် အကဲဖြတ်စောင့်ကြည့်မှုများ"
      ]
    },
    {
      id: "method_4",
      title: "စာမေးပွဲမေးခွန်းပုံစံများကို ကြိုတင်ဆန်းစစ်ခြင်း",
      subtitle: "အထူးပြု စာမေးပွဲဖြေနည်းစနစ်များ",
      description: "Cambridge နှင့် CollegeBoard တို့၏ မေးခွန်းပုံစံများကို စနစ်တကျ ခွဲခြမ်းစိတ်ဖြာပြီး၊ စာစစ်သူများ၏ အလွဲအမှားဖြစ်စေနိုင်သော ထောင်ချောက်များကို အလွယ်တကူ သိရှိဖော်ထုတ်နိုင်ရန် လေ့ကျင့်ပေးသည်။",
      imageKey: "diagnostics",
      highlights: [
        "စာစစ်သူများ၏ အကဲဖြတ်မှုစံနှုန်းများကို လေ့လာခြင်း",
        "စနစ်ကျသော အဆင့်ဆင့်တွက်ချက်မှု တည်ဆောက်ခြင်း",
        "အချိန်စီမံခန့်ခွဲမှု လေ့ကျင့်ခန်းများ"
      ]
    }
  ]
};

export const CLASS_MODULES: Record<'en' | 'my', CurricularClass[]> = {
  en: [
    {
      id: "class_1",
      title: "Cambridge IGCSE Physics & Math",
      level: "Secondary (Years 10 & 11)",
      description: "A foundational course focused on building standard algebra skills, circle theorems, force vectors, and thermodynamic laws. Essential preparation for advanced science tracks.",
      duration: "10 Months Program",
      syllabus: ["Newtonian Mechanics", "Electricity & Electromagnetism", "Pure Math Algebra & Trigonometry", "Standard Geometry Proofs"],
      imageKey: "geometry"
    },
    {
      id: "class_2",
      title: "Cambridge International A-Level Physics",
      level: "Advanced Level (Years 12 & 13)",
      description: "Rigorous mathematical formulation of fields (gravitational, electric, and magnetic), quantum mechanics, oscillation, and advanced thermodynamic models tailored for engineering prospects.",
      duration: "1 Year Standard",
      syllabus: ["Circular Motion & Oscillations", "Fundamental Fields", "Quantum & Particle Physics", "Advanced Thermal Mechanics"],
      imageKey: "equations_tablet"
    },
    {
      id: "class_3",
      title: "Cambridge International A-Level Mathematics",
      level: "Advanced Level (Years 12 & 13)",
      description: "Comprehensive pure mathematics study covering calculus (differentiation & integration), vector geometry, kinematics, mechanics, and binomial theorem expansion.",
      duration: "1 Year Standard",
      syllabus: ["Pure Mathematics (P1, P3)", "Mechanics (M1)", "Probability & Statistics (S1)", "Complex Integration Systems"],
      imageKey: "library"
    },
    {
      id: "class_4",
      title: "Digital SAT Mathematics Prep",
      level: "Standardized Admissions Prep",
      description: "Intense tactical program addressing the specific speed, logic, and question traps of the modern adaptive CollegeBoard Digital SAT. Optimized using dynamic desmos utilities.",
      duration: "12 Weeks Intensive",
      syllabus: ["Heart of Algebra Mastery", "Advanced Problem Solving", "Passport to Advanced Math", "Desmos Graphing Tactics"],
      imageKey: "library_student"
    }
  ],
  my: [
    {
      id: "class_1",
      title: "Cambridge IGCSE ရူပဗေဒနှင့် သင်္ချာ",
      level: "အထက်တန်းအဆင့် (Years 10 & 11)",
      description: "အခြေခံအက္ခရာသင်္ချာစွမ်းရည်၊ စက်ဝိုင်းသီအိုရီများ၊ အားသက်ရောက်မှုဗက်တာများနှင့် အပူစွမ်းအင်ဆိုင်ရာနိယာမများကို ထူထောင်ပေးသည့် အဓိကအခြေခံအုတ်မြစ်သင်တန်း။ အဆင့်မြင့်သိပ္ပံပညာရပ်များအတွက် မရှိမဖြစ်လိုအပ်သည်။",
      duration: "၁၀ လ တက်ရောက်ရမည့် ပရိုဂရမ်",
      syllabus: ["နယူတန်မက္ကင်းနစ်", "လျှပ်စစ်နှင့် လျှပ်စစ်သံလိုက်ဓာတ်", "အခြေခံအက္ခရာသင်္ချာနှင့် တြီဂိုနိုမေတြီ", "ဂျီသြမေတြီ သက်သေပြချက်များ"],
      imageKey: "geometry"
    },
    {
      id: "class_2",
      title: "Cambridge International A-Level ရူပဗေဒ",
      level: "အဆင့်မြင့်အဆင့် (Years 12 & 13)",
      description: "စက်ကွင်းများ (ဆွဲငင်အား၊ လျှပ်စစ်နှင့် သံလိုက်စက်ကွင်း)၊ ကွမ်တမ်မက္ကင်းနစ်၊ တုန်ခါမှုလှိုင်းများနှင့် အင်ဂျင်နီယာအလားအလာများအတွက် အဆင့်မြင့်အပူစွမ်းအင်ပုံစံများကို တိကျသောသင်္ချာတွက်ချက်မှုဖြင့် သင်ကြားပေးသည်။",
      duration: "၁ နှစ် ပုံမှန်တန်း",
      syllabus: ["စက်ဝိုင်းပုံရွေ့လျားမှုနှင့် တုန်ခါမှုများ", "အခြေခံစက်ကွင်းများ", "ကွမ်တမ်နှင့် အမှုန်ရူပဗေဒ", "အဆင့်မြင့် အပူစွမ်းအင်မက္ကင်းနစ်"],
      imageKey: "equations_tablet"
    },
    {
      id: "class_3",
      title: "Cambridge International A-Level သင်္ချာ",
      level: "အဆင့်မြင့်အဆင့် (Years 12 & 13)",
      description: "ကလကုလသင်္ချာ (ရှိတ်ခြင်းနှင့် အနုစိတ်စိတ်ခြင်း)၊ ဗက်တာဂျီသြမေတြီ၊ ရွေ့လျားမှုဗေဒ၊ မက္ကင်းနစ်သင်္ချာနှင့် binomial သီအိုရီဆင့်ပွားများ စသည့် သန့်စင်သင်္ချာဘာသာရပ်အားလုံးကို စနစ်တကျ သင်ကြားပေးသည်။",
      duration: "၁ နှစ် ပုံမှန်တန်း",
      syllabus: ["Pure Mathematics (P1, P3)", "Mechanics (M1)", "Probability & Statistics (S1)", "ပေါင်းစပ်အနုစိတ်တွက်နည်းစနစ်များ"],
      imageKey: "library"
    },
    {
      id: "class_4",
      title: "Digital SAT သင်္ချာပြင်ဆင်ရေးတန်း",
      level: "စံသတ်မှတ်ချက် တက္ကသိုလ်ဝင်ခွင့်ပြင်ဆင်ရေး",
      description: "ခေတ်မီ CollegeBoard Digital SAT ၏ အမြန်နှုန်း၊ ယုတ္တိဗေဒနှင့် မေးခွန်းထောင်ချောက်များကို ရင်ဆိုင်နိုင်ရန် စနစ်တကျလေ့ကျင့်ပေးသော အထူးသင်တန်း။ Desmos ဆော့ဖ်ဝဲအသုံးပြုနည်းများ ပါဝင်သည်။",
      duration: "၁၂ ပတ် အထူးအရှိန်မြှင့်သင်တန်း",
      syllabus: ["အက္學 ရာသင်္ချာ ပိုင်နိုင်ကျွမ်းကျင်မှု", "အဆင့်မြင့်ပြဿနာ ဖြေရှင်းနည်းစနစ်များ", "အဆင့်မြင့်သင်္ချာ သော့ချက်များ", "Desmos ဂရပ်အသုံးချနည်းစနစ်များ"],
      imageKey: "library_student"
    }
  ]
};

export const BIOGRAPHY_MILESTONES: Record<'en' | 'my', Milestone[]> = {
  en: [
    {
      period: "2018 - Present",
      role: "Lead STEM Educator & Syllabus Director",
      institution: "Moe Ko Tun Academic Labs",
      details: "Directing specialized Cambridge Physics, Pure Math, and Digital SAT coaching courses. Enabled over 150+ students to achieve straight A and A* profiles in IGCSE/A-Level exams."
    },
    {
      period: "2014 - 2018",
      role: "Senior A-Level Physics Teacher",
      institution: "International Language & Business Centre (ILBC)",
      details: "Delivered standard Cambridge advanced Physics (AS & A2 Levels). Authored rigorous concept guides, led interactive sandbox experiment practices, and targeted high percentile achievement structures."
    },
    {
      period: "2010 - 2014",
      role: "IGCSE Mathematics & Science Lecturer",
      institution: "Elite Cambridge Examination Coaching Centres",
      details: "Taught fundamental coordinate geometry, Newtonian mechanics, and exam preparation habits for Myanmar international school candidates."
    }
  ],
  my: [
    {
      period: "၂၀၁၈ - လက်ရှိ",
      role: "အဓိက STEM ပညာရေးလမ်းညွှန်နှင့် သင်ရိုးညွှန်းတမ်းဒါရိုက်တာ",
      institution: "မိုးကိုထွန်း အကယ်ဒမစ် လက်တွေ့စမ်းသပ်ခန်း",
      details: "Cambridge Physics, Pure Math နှင့် Digital SAT အထူးသင်တန်းများကို တာဝန်ယူသင်ကြားပေးလျက်ရှိသည်။ ကျောင်းသားပေါင်း ၁၅၀ ကျော်အား IGCSE / A-Level စာမေးပွဲများတွင် A နှင့် A* (ထူးချွန်အမှတ်များ) ရရှိအောင် လမ်းညွှန်ပေးနိုင်ခဲ့သည်။"
    },
    {
      period: "၂၀၁၄ - ၂၀၁၈",
      role: "ဝါရင့် A-Level ရူပဗေဒ ဆရာကြီး",
      institution: "ILBC နိုင်ငံတကာကျောင်း (International Language & Business Centre)",
      details: "Cambridge အဆင့်မြင့်ရူပဗေဒ (AS & A2 Levels) ဘာသာရပ်ကို စနစ်တကျ သင်ကြားပြသခဲ့သည်။ နက်ရှိုင်းသော သင်ခန်းစာလေ့လာရေးလမ်းညွှန်များကို ကိုယ်တိုင်ရေးသားထုတ်ဝေခဲ့ပြီး အုပ်စုလိုက် သင်ယူမှုစနစ်များကို ဦးဆောင်ခဲ့သည်။"
    },
    {
      period: "၂၀၁၀ - ၂၀၁၄",
      role: "IGCSE သင်္ချာနှင့် သိပ္ပံကထိက",
      institution: "ထိပ်တန်း ကင်းဘရစ်ချ် စာမေးပွဲပြင်ဆင်ရေး အထူးသင်တန်းကျောင်းများ",
      details: "မြန်မာနိုင်ငံရှိ နိုင်ငံတကာကျောင်းတက်ရောက်နေသော ကျောင်းသားများအတွက် အခြေခံဂျီသြမေတြီ၊ နယူတန်စက်ကွင်းများနှင့် စာမေးပွဲဖြေဆိုမှုကျွမ်းကျင်မှု အလေ့အကျင့်ကောင်းများကို သင်ကြားပေးခဲ့သည်။"
    }
  ]
};

export const FAQ_SAMPLES: Record<'en' | 'my', { question: string; category: string }[]> = {
  en: [
    { question: "How do you help students transition from IGCSE to A-Level?", category: "Pedagogy" },
    { question: "Why is 'Mastery over Memorization' critical for advanced Physics?", category: "Methodology" },
    { question: "Can a student struggling in algebra succeed in A-Level Math?", category: "Support" },
    { question: "What is your schedule for the Digital SAT intensive class?", category: "Schedules" }
  ],
  my: [
    { question: "IGCSE ကနေ A-Level အကူးအပြောင်းကို ဆရာက ဘယ်လိုပျိုးထောင်ပေးပါသလဲ။", category: "သင်ကြားရေးနည်းလမ်း" },
    { question: "အဆင့်မြင့်ရူပဗေဒမှာ 'အလွတ်ကျက်ခြင်းထက် သဘောတရားပိုင်နိုင်မှု' က ဘာကြောင့် အရေးကြီးသလဲ။", category: "အတွေးအခေါ်ဗျူဟာ" },
    { question: "အက္ခရာသင်္ချာအားနည်းတဲ့ ကျောင်းသားတစ်ယောက် A-Level Math မှာ အောင်မြင်အောင် လုပ်နိုင်ပါသလား။", category: "ကျောင်းသားပံ့ပိုးမှု" },
    { question: "Digital SAT အထူးအရှိန်မြှင့်သင်တန်းရဲ့ အချိန်ဇယားနဲ့ အစီအစဉ်က ဘယ်လိုရှိပါသလဲ။", category: "သင်တန်းအချိန်ဇယား" }
  ]
};

export const UI_TRANSLATIONS = {
  en: {
    aboutTitle: "Biography & Professional Board",
    experienceTitle: "16+ Years Verified STEM Track Record",
    experienceDesc: "An overview of Sayar Moe Ko Tun's career delivering high-percentile results in premier international schools and specialized science academies.",
    methodTitle: "Pedagogical Philosophy & Teaching Methods",
    methodDesc: "Designed to help students build the core spatial and logical models necessary for advanced STEM disciplines.",
    classesTitle: "Active Classes & Curricular Modules",
    classesDesc: "Specially formulated programs offering continuous assessment, targeted worksheets, and personalized mentorship.",
    interactiveLabOnline: "Live Lab Portal Active",
    cambridgeHonors: "Cambridge Certified Specialist in Physics & Advanced Mathematics",
    adaptiveBrandTitle: "U Moe Ko Tun's ",
    interactiveStemLab: "Specialist Academic Portfolio",
    heroDesc: "The official academic portfolio of Sayar Moe Ko Tun, highlighting his professional teaching credentials, elite pedagogical strategies in advanced Mathematics and Physics, and a physical simulation laboratory showcasing conceptual mechanics.",
    heroQuickCTA: "Review Biography & Classes",
    heroPlaygroundCTA: "Interact with Newtonian Physics Lab",
    newtonianSimulatorTitle: "Newtonian Vector Inclined Plane Simulator",
    newtonianSimulatorDesc: "Demonstrating active spatial physical learning. Adjust the angle, slide friction, and mass parameters to observe physics calculations and acceleration vectors recalculate live.",
    modelStatus: "SIMULATION COMPILATION STATE:",
    statusAccelerating: "MOTION ACCELERATING down incline",
    statusEquilibrium: "STATIC COEFFICIENT IN EQUILIBRIUM",
    inclinationDegrees: "INCLINATION DEGREES (θ)",
    coefficientFriction: "COEFFICIENT OF ROUGHNESS (μ)",
    massKg: "BLOCK MASS (m)",
    mathSolutions: "Active Physics Resolution Formulas",
    parallelGravity: "SLIDING GRAVITY (F_parallel):",
    resistiveFriction: "MAX FRICTION LIMIT (f_max):",
    acceleration: "RESULTING ACCELERATION (a):",
    slidingEquation: "MECHANICAL EQUATION:",
    premiumHub: "Sayar Moe Ko Tun's Specialist Academic Portfolio",
    footerDesc: "Cambridge AS/A-Level Mathematics & Physics specialist mentorship. Cultivating mathematical precision, spatial intuition, and academic excellence since 2010.",
    emailLabel: "Email: komoe.work@gmail.com",
    officialProfile: "Official Page Profile",
    poweredBy: "Authorized Academic Portfolio of Sayar Moe Ko Tun.",
    contactTitle: "Contact & Online Admissions",
    contactDesc: "Reach U Moe Ko Tun directly for admissions schedules, student seat reserves, or lesson consultation details.",
    learnMoreBtn: "Explore Syllabus Key",
    closeBtn: "Close Details",
    askEducatorTitle: "Interactive Parent-Student Consultation",
    askEducatorDesc: "Have a specific curriculum question? Ask Sayar Moe Ko Tun's AI Representative to get immediate insights on study guides, transition plans, and admission eligibility.",
    askPlaceholder: "E.g., Does my son need high math skills for A-level Physics?",
    askBtnLoading: "Consulting Sayar...",
    askBtn: "Consult Representative",
    chatWarning: "Response synthesized natively with Gemini AI, demonstrating Academic Core alignment.",
    syllabusOutline: "Syllabus Focus Modules",
    durationLabel: "Standard Study Term:",
    levelLabel: "Student Target Level:",
    experienceMilestone: "Milestone Professional Experience",
    methodsBriefcase: "Conceptual Teaching Methodology",
    webProfile: "Moe Ko Tun Profile Official"
  },
  my: {
    aboutTitle: "ကိုယ်ရေးရာဇဝင်နှင့် လုပ်ငန်းကျွမ်းကျင်မှုအဖွဲ့",
    experienceTitle: "၁၆ နှစ်ကျော် သက်သေပြပြီးသား STEM စာသင်ပြမှုအတွေ့အကြုံ",
    experienceDesc: "နိုင်ငံတကာထိပ်တန်းကျောင်းများနှင့် သိပ္ပံအထူးပြုသင်တန်းများတွင် ထူးချွန်ကျောင်းသားကောင်းများစွာ ပျိုးထောင်ပေးခဲ့သည့် ပြက္ခဒိန်ဆန်းစစ်ချက်။",
    methodTitle: "သင်ကြားရေးခံယူချက်နှင့် နည်းစနစ်များ",
    methodDesc: "အဆင့်မြင့် STEM ဘာသာရပ်များကို လေ့လာရာတွင် မရှိမဖြစ်လိုအပ်သည့် ကိုယ်ပိုင်စဉ်းစားတွေးခေါ်မှုနှင့် ယုတ္တိဗေဒစနစ်များကို ဖော်ဆောင်ပေးရန် စနစ်တကျရေးဆွဲထားသည်။",
    classesTitle: "လက်ရှိ ဖွင့်လှစ်ထားသော အထူးသင်တန်းအမျိုးအစားများ",
    classesDesc: "အပတ်စဉ် အကဲဖြတ်မှုစနစ်၊ တိကျသောမေးခွန်းတွက်ချက်မှုများနှင့် တစ်ဦးချင်းလမ်းညွှန်မှုများပါဝင်သော အစီအစဉ်များ။",
    interactiveLabOnline: "လက်တွေ့စမ်းသပ်မှု တိုက်ရိုက်လုပ်ဆောင်နိုင်သည်",
    cambridgeHonors: "ကင်းဘရစ်ချ်အသိအမှတ်ပြု ရူပဗေဒနှင့် အဆင့်မြင့်သင်္ချာအထူးပြု ပညာရှင်",
    adaptiveBrandTitle: "ဆရာမိုးကိုထွန်း၏ ",
    interactiveStemLab: "အဆင့်မြင့် သင်္ချာနှင့် ရူပဗေဒ ပညာရေးအစုစု (Portfolio)",
    heroDesc: "ဆရာဦးမိုးကိုထွန်း၏ ဆယ်စုနှစ်တစ်ခုကျော် ပညာရေးအောင်မြင်မှုမှတ်တိုင်များ၊ ထူးချွန်ထက်မြက်လှသော သင်္ချာနှင့် ရူပဗေဒ သင်ကြားရေးနည်းဗျူဟာများကို လေ့လာနိုင်မည့်အပြင်၊ အသုံးချစက်မှုဗေဒသဘောတရားများကို ကိုယ်တိုင်ဦးနှောက်ချင်းဆက် ချိန်ညှိတွက်ချက်နိုင်သော တိုက်ရိုက်ရုပ်ပိုင်းဆိုင်ရာ စမ်းသပ်ခန်း ပါဝင်သော တရားဝင် ပညာရေးအစုစု (Portfolio) ဖြစ်ပါသည်။",
    heroQuickCTA: "ကိုယ်ရေးအကျဉ်းနှင့် သင်တန်းများ လေ့လာရန်",
    heroPlaygroundCTA: "ရူပဗေဒ တိုက်ရိုက်လက်တွေ့စမ်းသပ်ခန်းသို့ သွားရန်",
    newtonianSimulatorTitle: "နယူတန်၏ လျှောစောင်းမျက်နှာပြင် ဗက်တာစမ်းသပ်စနစ်",
    newtonianSimulatorDesc: "သရုပ်ပြလေ့ကျင့်သင်ကြားရေး၏ သက်သေပြချက်။ လျှောစောင်းထောင့်၊ ပွတ်တိုက်မှုအားနှင့် ဒြပ်ထုများကို ချိန်ညှိကြည့်ပြီး ရူပဗေဒတွက်ချက်မှုများနှင့် အရှိန်ဗက်တာများ တိုက်ရိုက်ပြောင်းလဲပုံကို လေ့လာပါ။",
    modelStatus: "စမ်းသပ်ခန်း၏ လက်ရှိအနေအထား -",
    statusAccelerating: "အောက်သို့ လျှောကျနေသည် (Motion)",
    statusEquilibrium: "ငြိမ်နေပြီး ဟန်ချက်ညီနေသည် (Equilibrium)",
    inclinationDegrees: "လျှောစောင်းထောင့်ဒီဂရီ (θ)",
    coefficientFriction: "မျက်နှာပြင်ပွတ်တိုက်မှုကိန်း (μ)",
    massKg: "ဒြပ်ထုအတိုင်းအတာ (m)",
    mathSolutions: "ရူပဗေဒ လက်တွေ့ညီမျှခြင်း မရလဒ်များ",
    parallelGravity: "ဆွဲအား (F_parallel):",
    resistiveFriction: "ခုခံအားအကန့်အသတ် (f_max):",
    acceleration: "ရရှိလာသည့် အရှိန်နှုန်း (a):",
    slidingEquation: "စက်မှုဗေဒ ညီမျှခြင်း -",
    premiumHub: "ဆရာဦးမိုးကိုထွန်း၏ အထူးပြုသင်္ချာနှင့် ရူပဗေဒ ပညာရေးအစုစု (Specialist Portfolio)",
    footerDesc: "ကင်းဘရစ်ချ် AS/A-Level အဆင့်မြင့်သင်္ချာနှင့် ရူပဗေဒ အထူးပြုလမ်းညွှန်မှု။ ၂၀၁၀ ခုနှစ်မှ စတင်၍ သင်္ချာစွမ်းရည် တိကျထက်မြက်မှု၊ Spatial နားလည်မှုနှင့် စာမေးပွဲထိပ်တန်းရလဒ်များကို အောင်မြင်စွာ ပျိုးထောင်ပေးလျက်ရှိသည်။",
    emailLabel: "အီးမေးလ် - komoe.work@gmail.com",
    officialProfile: "တရားဝင် ဆိုက်ပရိုဖိုင်",
    poweredBy: "ဆရာမိုးကိုထွန်း၏ တရားဝင် ပညာရေးပြသခန်းစနစ်။",
    contactTitle: "ဆက်သွယ်ရန်နှင့် အွန်လိုင်းအပ်နှံမှုများ",
    contactDesc: "သင်တန်းအချိန်ဇယားများ၊ နေရာဦးစားပေးစာရင်းနှင့် သင်ခန်းစာဆွေးနွေးမှုများအတွက် ဆရာဦးမိုးကိုထွန်းထံသို့ တိုက်ရိုက်ဆက်သွယ် မေးမြန်းနိုင်ပါသည်။",
    learnMoreBtn: "သင်ရိုးအနှစ်သာရ လေ့လာရန်",
    closeBtn: "အချက်အလက် ပိတ်ရမည့်ခလုတ်",
    askEducatorTitle: "အပြန်အလှန်တုံ့ပြန်ဆွေးနွေးမှု (Instant consultation)",
    askEducatorDesc: "သင်ရိုးညွှန်းတမ်းနှင့်ပတ်သက်ပြီး သိလိုသည်များ ရှိပါသလား။ သင်ကြားရေးစနစ်၊ ပညာရေးအကူးအပြောင်းနှင့် တက်ရောက်နိုင်မှု အခြေအနေများကို ဆရာဦးမိုးကိုထွန်း၏ AI ကိုယ်စားလှယ်ကို တိုက်ရိုက်မေးမြန်းဆွေးနွေးနိုင်ပါသည်။",
    askPlaceholder: "ဥပမာ- ရူပဗေဒသင်တန်းတက်ဖို့ အဆင့်မြင့်သင်္ချာ ကျွမ်းကျင်စရာလိုပါသလား။",
    askBtnLoading: "ဆရာ့ထံမှ အဖြေရယူနေသည်...",
    askBtn: "ကိုယ်စားလှယ်နှင့် ဆွေးနွေးမည်",
    chatWarning: "ဤစနစ်သည် ဆရာမိုးကိုထွန်း၏ အနှစ်သာရကို အခြေခံပြီး Gemini AI ဖြင့် တိုက်ရိုက်ဆန်းစစ်ဖြေကြားပေးခြင်း ဖြစ်သည်။",
    syllabusOutline: "သင်ရိုးအသေးစိတ် မော်ဂျူးများ",
    durationLabel: "သင်တန်းကာလ -",
    levelLabel: "ကျောင်းသားအဆင့်အတန်း -",
    experienceMilestone: "လုပ်ငန်းအတွေ့အကြုံ မှတ်တိုင်များ",
    methodsBriefcase: "အဓိကသင်ကြားရေး ဗျူဟာများ",
    webProfile: "ဆရာမိုးကိုထွန်း၏ တရားဝင်ဆိုက်"
  }
};
