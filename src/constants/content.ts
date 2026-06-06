export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HERO_CONTENT = {
  title: "Your PF issue deserves a clear answer",
  descriptionParagraphs: [
    "EPFGenie is a support platform built for individuals dealing with PF withdrawal issues, UAN errors, claim delays, and account-related confusion.",
    "Whether your claim is pending, your details are mismatched, or you simply don’t know what to do next - we help you understand the process better and guide you throughout it."
  ],
  buttons: {
    primary: "Get Started",
    secondary: "Chat on WhatsApp"
  }
};

export const INTRO_ABOUT_CONTENT = {
  title: "ABOUT US",
  heading: "Built to make PF-related processes easier to understand.",
  paragraphs: [
    "Many people struggle with PF issues not because the process is impossible, but because the system can feel difficult to navigate without proper guidance.",
    "EPFGenie focuses on helping individuals handle common EPF-related situations with better clarity, structured support, and practical assistance.",
    "From account-related issues to withdrawal guidance and correction support, we aim to simplify the experience and reduce unnecessary stress during the process."
  ]
};

export const ABOUT_CONTENT = {
  title: "Provident Fund Specialists Dedicated to Employee Support",
  paragraphs: [
    "EPF Genie is powered by a dedicated team of Provident Fund specialists focused exclusively on assisting employees with their EPF and pension-related requirements. Our team provides guidance and end-to-end support for PF withdrawals, pension claims, UAN activation, KYC updates, profile corrections, PF transfers, multiple UAN issues, claim rejections, service history corrections, exit date updates, and EPFO grievance matters. We are committed to simplifying EPFO procedures and helping employees access their benefits efficiently."
  ]
};

export const HISTORY_CONTENT = {
  title: "Our Journey",
  paragraphs: [
    "Founded in 2019, EPF Genie was established with a mission to simplify Provident Fund services for employees across India. We recognized that many EPF members face challenges while withdrawing PF accumulations, claiming pension benefits, updating KYC records, correcting EPFO data, transferring PF balances, and resolving long-pending EPFO issues.",
    "Since our inception, we have been dedicated exclusively to employee Provident Fund assistance, helping members navigate EPFO procedures and secure their rightful benefits. Through our specialized approach and practical guidance, we continue to support employees in resolving a wide range of PF and pension-related matters."
  ],
  yearEstablished: "2019"
};

export const JOURNEY_IN_BRIEF_CONTENT = {
  title: "Journey in Brief",
  content: "What started as an initiative to assist employees with basic PF withdrawal and UAN-related issues has evolved into a dedicated platform for employee EPF and pension assistance. Over the years, EPF Genie has helped employees resolve claim rejections, transfer delays, KYC discrepancies, pension-related concerns, profile correction issues, multiple UAN complications, and various other EPFO-related challenges. Our continued focus on employee welfare and benefit realization has enabled us to assist members across diverse industries and employment backgrounds."
};

export const SERVICES_CONTENT: ServiceItem[] = [
  // Category 1: PF Claims & Pension
  {
    id: "s1",
    title: "PF Final Settlement Claims (Form 19)",
    description: "Assistance with final EPF settlement claims for employees who have left service.",
    category: "PF Claims & Pension"
  },
  {
    id: "s2",
    title: "Pension Withdrawal Benefit Claims (Form 10C)",
    description: "Guidance for claiming EPS pension withdrawal benefits or scheme certificates.",
    category: "PF Claims & Pension"
  },
  {
    id: "s3",
    title: "Monthly Pension Claims (Form 10D)",
    description: "Support with filing and tracking monthly pension claims for eligible members.",
    category: "PF Claims & Pension"
  },
  {
    id: "s4",
    title: "Partial PF Withdrawal / Advance Claims",
    description: "Assistance in applying for advances due to medical, housing, or illness needs.",
    category: "PF Claims & Pension"
  },
  {
    id: "s5",
    title: "Online PF Claim Filing Assistance",
    description: "Step-by-step guidance to submit your online PF claims via the Unified Portal.",
    category: "PF Claims & Pension"
  },
  {
    id: "s6",
    title: "Rejected Claim Resolution",
    description: "Analysis of claim rejection reasons and assistance with corrective resubmissions.",
    category: "PF Claims & Pension"
  },
  {
    id: "s7",
    title: "Pending Claim Follow-up Assistance",
    description: "Tracking delayed claims and assistance with expediting pending approvals.",
    category: "PF Claims & Pension"
  },
  {
    id: "s8",
    title: "Death Claim Documentation Guidance",
    description: "Compassionate assistance for nominees in preparing and submitting death claims.",
    category: "PF Claims & Pension"
  },
  {
    id: "s9",
    title: "Nominee Claim Assistance",
    description: "Guidance for nominees to claim accumulated EPF balances and pension benefits.",
    category: "PF Claims & Pension"
  },

  // Category 2: UAN & KYC Updates
  {
    id: "s10",
    title: "UAN Activation and Login Support",
    description: "Help activating your Universal Account Number and setting up portal access.",
    category: "UAN & KYC Updates"
  },
  {
    id: "s11",
    title: "Aadhaar Linking with UAN",
    description: "Assistance resolving verification failures when linking Aadhaar to your UAN.",
    category: "UAN & KYC Updates"
  },
  {
    id: "s12",
    title: "PAN Linking with UAN",
    description: "Seeding and verifying PAN card information to reduce tax deductions on withdrawals.",
    category: "UAN & KYC Updates"
  },
  {
    id: "s13",
    title: "Bank Account Seeding and Verification",
    description: "Assistance updating correct bank account details for smooth claim credits.",
    category: "UAN & KYC Updates"
  },
  {
    id: "s14",
    title: "Mobile Number and Email Update Guidance",
    description: "Help updating contact info to receive OTPs and SMS alerts from EPFO.",
    category: "UAN & KYC Updates"
  },
  {
    id: "s15",
    title: "KYC Rectification Support",
    description: "Correcting pending or rejected KYC documents in your member profile.",
    category: "UAN & KYC Updates"
  },

  // Category 3: Profile Corrections
  {
    id: "s16",
    title: "Name Correction in EPFO Records",
    description: "Aligning your name in EPFO records with your Aadhaar and official documents.",
    category: "Profile Corrections"
  },
  {
    id: "s17",
    title: "Date of Birth Correction",
    description: "Correcting DOB discrepancies in EPFO database using valid proofs.",
    category: "Profile Corrections"
  },
  {
    id: "s18",
    title: "Father's / Husband's Name Correction",
    description: "Resolving mismatches in family detail records within the EPFO portal.",
    category: "Profile Corrections"
  },
  {
    id: "s19",
    title: "Gender Correction",
    description: "Correcting incorrect gender entries in your EPFO member profile.",
    category: "Profile Corrections"
  },
  {
    id: "s20",
    title: "Joint Declaration Assistance",
    description: "Drafting and verifying joint declaration forms for employer signatures.",
    category: "Profile Corrections"
  },
  {
    id: "s21",
    title: "Member Profile Corrections",
    description: "General profile details corrections to match Aadhaar verified records.",
    category: "Profile Corrections"
  },

  // Category 4: PF Transfers & History
  {
    id: "s22",
    title: "PF Transfer Claims",
    description: "Transferring balances from previous member IDs to your current active account.",
    category: "PF Transfers & History"
  },
  {
    id: "s23",
    title: "Transfer Claim Rejection Resolution",
    description: "Fixing rejection triggers during member ID transfer applications.",
    category: "PF Transfers & History"
  },
  {
    id: "s24",
    title: "Multiple UAN Merger Assistance",
    description: "Consolidating multiple UANs into a single active Universal Account Number.",
    category: "PF Transfers & History"
  },
  {
    id: "s25",
    title: "Service History Corrections",
    description: "Resolving employment overlaps, service breaks, or incorrect history records.",
    category: "PF Transfers & History"
  },
  {
    id: "s26",
    title: "Missing Employment Details Update",
    description: "Adding missing establishment or employment records to your UAN profile.",
    category: "PF Transfers & History"
  },
  {
    id: "s27",
    title: "Exit Date Corrections",
    description: "Updating or correcting the Date of Exit (DOE) on the EPFO portal.",
    category: "PF Transfers & History"
  },
  {
    id: "s28",
    title: "Date of Joining Corrections",
    description: "Updating or correcting the Date of Joining (DOJ) in EPFO member records.",
    category: "PF Transfers & History"
  },
  {
    id: "s29",
    title: "EPF Passbook Assistance",
    description: "Help viewing passbooks, verifying interest credits, and tracking balances.",
    category: "PF Transfers & History"
  },
  {
    id: "s30",
    title: "Pension Service Verification",
    description: "Verifying total pensionable service years for monthly pension eligibility.",
    category: "PF Transfers & History"
  },
  {
    id: "s31",
    title: "Dormant PF Account Assistance",
    description: "Tracking, identifying, and withdrawing funds from inoperative or dormant PF accounts.",
    category: "PF Transfers & History"
  },

  // Category 5: Grievances & Advisory
  {
    id: "s32",
    title: "EPFO Grievance Registration",
    description: "Filing official grievances on the EPFiGMS portal for pending issues.",
    category: "Grievances & Advisory"
  },
  {
    id: "s33",
    title: "Grievance Follow-up Assistance",
    description: "Escalating registered grievances and tracking responses from officers.",
    category: "Grievances & Advisory"
  },
  {
    id: "s34",
    title: "Long-Pending PF Matter Resolution Support",
    description: "Structured assistance to address disputes or blockages pending for years.",
    category: "Grievances & Advisory"
  },
  {
    id: "s35",
    title: "Employer Non-Update Related PF Issues",
    description: "Support for cases where the employer has closed or is refusing portal updates.",
    category: "Grievances & Advisory"
  },
  {
    id: "s36",
    title: "EPFO Record Mismatch Resolution",
    description: "Resolving mismatches between employer records and EPFO databases.",
    category: "Grievances & Advisory"
  },
  {
    id: "s37",
    title: "Assistance for Employees Working Abroad",
    description: "Advisory for International Workers regarding COC and withdrawal procedures.",
    category: "Grievances & Advisory"
  },
  {
    id: "s38",
    title: "General EPF & Pension Advisory Services",
    description: "Consultation and advisory regarding pension options, rules, and benefits.",
    category: "Grievances & Advisory"
  }
];

export const WHY_EPFGENIE_CONTENT: FeatureItem[] = [
  {
    id: "feature-1",
    title: "Simple Communication",
    description: "We avoid unnecessary technical language and explain things in a straightforward manner."
  },
  {
    id: "feature-2",
    title: "Individual Attention",
    description: "Each PF issue is different, which is why every case is handled based on the situation involved."
  },
  {
    id: "feature-3",
    title: "Practical Guidance",
    description: "We focus on helping people understand the process instead of creating unrealistic expectations."
  },
  {
    id: "feature-4",
    title: "Accessible Support",
    description: "Individuals can connect with us easily through WhatsApp, phone, or online communication."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    description: "Share your issue and available details with us."
  },
  {
    step: 2,
    description: "We review the situation and understand the possible cause of the issue."
  },
  {
    step: 3,
    description: "You receive guidance regarding documents, corrections, or next steps."
  },
  {
    step: 4,
    description: "We continue assisting wherever follow-up support is required."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need to visit your office?",
    answer: "Many situations can be discussed and handled remotely."
  },
  {
    question: "Can you help if my claim is already rejected?",
    answer: "Yes, depending on the reason involved and the available records."
  },
  {
    question: "Are you connected with EPFO?",
    answer: "No. EPFGenie operates independently as a support and assistance platform."
  },
  {
    question: "How long does the process take?",
    answer: "Processing timelines vary depending on the nature of the issue and EPFO procedures."
  },
  {
    question: "What documents may be required?",
    answer: "Requirements differ case-to-case but may include Aadhaar, PAN, UAN details, bank proof, or employment records."
  }
];

export const CONTACT_DETAILS = {
  address: "Saikrupa Mall, G-001, Opposite Dahisar Railway Station, Maratha Colony, Dahisar West, Mumbai, Maharashtra 400068",
  googleMaps: "https://share.google/15apdVubPuZAxR8c4",
  email: "support@epfgenie.com",
  phone: "+91 7977561870",
  whatsapp: "+917977561870", // format for API link
  whatsappDisplay: "+91 7977561870",
  workingHours: "Monday to Saturday: 9:00 AM to 7:00 PM",
  workingHoursSunday: "Sunday: Closed"
};

export const FOOTER_CONTENT = {
  brandName: "EPFGenie",
  subtitle: "PF Assistance & Support Platform",
  description: "Helping individuals navigate PF-related issues with better clarity and practical support.",
  disclaimer: "EPFGenie is an independent support platform and is not affiliated with EPFO or any government authority."
};

export const CITIES_WE_SERVE = [
  "Mumbai",
  "Pune",
  "Bangalore",
  "Delhi",
  "Uttar Pradesh",
  "Gujarat"
];

export const PRICING_CONTENT = {
  title: "Transparent Pricing",
  description: "We understand your case first and then provide a customized quotation based on the scope and complexity of the matter.",
  cardTitle: "No Consultation Fees",
  points: [
    "Free Initial Consultation",
    "Case Assessment by Experts",
    "Transparent & Customized Pricing",
    "No Hidden Charges"
  ],
  ctaText: "Get Help"
};
