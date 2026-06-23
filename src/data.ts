import { PathInfo, CourseDetail } from './types';

export const olData: Record<string, PathInfo> = {
  it: {
    emoji: "💻",
    title: "IT & Technology",
    desc: "Software, web development, networking, AI, graphics & gaming",
    tag: "tg",
    tagText: "High Demand",
    cause: "Best if you enjoy technology, logical thinking, and solving problems with code or digital art.",
    benefit: "High-demand jobs, freelancing, remote work worldwide & competitive global salaries."
  },
  languages: {
    emoji: "🌐",
    title: "Languages",
    desc: "English, Japanese, Korean, French",
    tag: "tb",
    tagText: "Global",
    cause: "Perfect if you enjoy communication, cultural exchange, and global opportunities.",
    benefit: "Work abroad, tourism, translation jobs & international business roles."
  },
  nvq: {
    emoji: "🔧",
    title: "NVQ Training",
    desc: "Vocational skill development programs",
    tag: "ta",
    tagText: "Practical",
    cause: "Great if you want hands-on practical education and a fast path to employment.",
    benefit: "Quick job entry, trade skills, entrepreneurship & government certification."
  },
  commerce: {
    emoji: "📊",
    title: "Commerce Stream",
    desc: "Accounting, Business & Economics",
    tag: "tp",
    tagText: "Business",
    cause: "Ideal if you're interested in business, finance, and management careers.",
    benefit: "Banking, accounting, management careers & a strong A/L foundation."
  },
  hotel: {
    emoji: "🏨",
    title: "Hotel & Hospitality",
    desc: "Accommodation, culinary arts, food & beverage & destination management",
    tag: "ta",
    tagText: "Practical & Global",
    cause: "Ideal if you enjoy customer service, culinary arts, bar services, event planning, and travel.",
    benefit: "Global career mobility, immediate job openings, fast-track practical skills, and hospitality business opportunities."
  }
};

export const alData: Record<string, PathInfo> = {
  uni: {
    emoji: "🏛️",
    title: "University Degrees",
    desc: "Local & foreign universities",
    tag: "tg",
    tagText: "Academic",
    cause: "Best for deep specialisation, professional qualifications & long-term prospects.",
    benefit: "Professional careers, high salary potential, research & global recognition."
  },
  jobs: {
    emoji: "💼",
    title: "Jobs & Careers",
    desc: "Government & private sector roles",
    tag: "ta",
    tagText: "Immediate",
    cause: "Great if you want to start earning and gaining real-world experience right away.",
    benefit: "Financial independence, career growth, networking & practical experience."
  },
  professional: {
    emoji: "📜",
    title: "Professional Courses",
    desc: "CIMA, ACCA, CIM, AAT & more",
    tag: "tb",
    tagText: "Certified",
    cause: "Ideal for globally recognised qualifications in finance, marketing or management.",
    benefit: "Internationally recognised credentials, high earning potential & flexible study."
  }
};

export const afData: CourseDetail[] = [
  { name: "AAT Sri Lanka", full: "Association of Accounting Technicians", origin: "Local Professional", focus: "Financial Accounting & Practical Bookkeeping", why: "Ultimate foundation; gives exemptions in CA, ACCA, CIMA. Builds strong accounting fundamentals and improves employability." },
  { name: "ACCA FIA", full: "Association of Chartered Certified Accountants – Foundation", origin: "Global (UK)", focus: "Financial & Management Accounting", why: "Fast-track entry to ACCA without A/Ls; ~6 months duration. Internationally recognised, allows quick progression into global job markets." },
  { name: "CIMA Certificate", full: "Chartered Institute of Management Accountants", origin: "Global (UK)", focus: "Management Accounting & Business Strategy", why: "Ideal for business strategy and management-focused careers. Develops analytical and decision-making skills for corporate management." },
  { name: "CMA Sri Lanka", full: "Institute of Certified Management Accountants Sri Lanka", origin: "Local Professional", focus: "Cost & Management Accounting", why: "Affordable local path focused on corporate and manufacturing accounting. Cost-effective pathway into management roles." },
  { name: "IBSL Diplomas", full: "Institute of Bankers of Sri Lanka", origin: "Local Professional", focus: "Banking, Finance & Risk", why: "Best for early entry into banking sector careers. Gives a strong foundation for financial services and helps students enter the industry." }
];

export const bizData: CourseDetail[] = [
  { name: "University Foundation in Business", full: "Academic / University Tier", category: "University Route", focus: "General Management & Academic Skills", why: "Bypasses school A/Ls entirely. A 1-year foundation gives you direct entry to Year 1 of a UK, Australian, or local Bachelor's degree." },
  { name: "ABE UK", full: "Association of Business Executives", category: "Global Professional", focus: "Corporate Strategy & Entrepreneurship", why: "Highly modular and practical. Completing up to Level 5 lets you skip directly into the final year (Top-up) of a Business degree." },
  { name: "CIM UK", full: "Chartered Institute of Marketing", category: "Global Chartered", focus: "Strategy, Branding & Digital Marketing", why: "The gold standard for marketing. You can start the foundational tier right after O/Ls to build an international marketing career early." },
  { name: "SLIM", full: "Sri Lanka Institute of Marketing", category: "Local Professional", focus: "Practical Sales & Marketing Strategy", why: "Very popular and budget-friendly in Sri Lanka. Starting with the Preliminary Certificate (PCM) progresses rapidly to a Postgraduate Diploma." },
  { name: "CIPM", full: "Chartered Institute of Personnel Management", category: "Local Chartered", focus: "Human Resource Management & Labor Law", why: "The definitive pathway if you want to become an HR professional in Sri Lanka. You can enter the Foundation course right after O/Ls." },
  { name: "NIBM Foundation & Diplomas", full: "National Institute of Business Management", category: "State-owned Institute", focus: "Business Admin & Operations", why: "Highly structured, stable local pathway that maps directly into final-year degrees with overseas partner universities like Coventry (UK)." }
];

export const itcData: CourseDetail[] = [
  { name: "UCSC FIT", full: "Foundation in Information Technology (UCSC)", category: "Local Government (UCSC)", focus: "ICT Applications, Math & English", why: "The most budget-friendly option. Passing FIT gives you direct admission into the prestigious Colombo University External BIT degree." },
  { name: "NIBM Foundation", full: "Foundation for Bachelor's Degree", category: "Local State-Owned", focus: "MIS, Digital Tech & Accounting", why: "Highly structured program bridging core bookkeeping, statistics, and business computing modules." },
  { name: "IIT Foundation", full: "Foundation Programme in Computing", category: "Private / UK Affiliated", focus: "Business Analytics & Computing", why: "Direct fast-track route into premium UK university degrees (University of Westminster) hosted in Sri Lanka." },
  { name: "SLIIT Foundation", full: "Foundation in IT / Business", category: "Private / UGC Approved", focus: "IT Systems & Business Data Analytics", why: "Provides a highly recognized, stable foundation that lets you specialize in corporate tech structures early." },
  { name: "BCAS Foundation", full: "Foundation in Business & IT", category: "Private / Pearson BTEC", focus: "Programming & Digital Marketing", why: "Features a distinct dual-semester layout allowing you to mix data analytics with global market concepts." }
];

export const boData: CourseDetail[] = [
  { name: "IBSL Foundations", full: "Institute of Bankers of Sri Lanka", category: "Local Statutory Body", focus: "Commercial Banking & Financial Systems", why: "The most recognized gateway to local retail banking. You can apply for executive trainee roles early." },
  { name: "AAP Secretarial Diploma", full: "Academy for Administrative Professionals", category: "Local Professional", focus: "Office Administration & Business English", why: "A highly practical 6-month course that equips you with executive secretary and workplace management skills." },
  { name: "ICCSSL Foundation", full: "Institute of Chartered Corporate Secretaries", category: "Professional Body", focus: "Company Secretarial Practices & Law", why: "A unique 6-month online path that lays the groundwork for becoming a certified corporate secretary." },
  { name: "NIBM Foundation in Business", full: "School of Business", category: "State-Owned Academy", focus: "Office Productivity & Management Fundamentals", why: "Seamlessly bridges O/L students into advanced diplomas in Digital Banking or Human Resources." },
  { name: "LCCI Executive Secretary Diploma", full: "Pearson / UK", category: "Global (UK-affiliated)", focus: "Business Correspondence & Practical ICT", why: "Globally recognized qualification combining advanced office IT skills with administrative management." }
];

export const seData: CourseDetail[] = [
  { 
    name: "Foundation Certificate in Higher Education (IT) – Informatics Institute of Technology (IIT)", 
    full: "Informatics Institute of Technology", 
    category: "UK Affiliated (University of Westminster)", 
    focus: "Programming fundamentals, software development, databases, mathematics for computing", 
    why: "A strong direct pathway into an internationally recognized Software Engineering degree. Good for students targeting foreign-affiliated qualifications after O/L." 
  },
  { 
    name: "Foundation Certificate in IT – SLIIT", 
    full: "Sri Lanka Institute of Information Technology", 
    category: "Local (UGC Approved)", 
    focus: "IT basics, programming, networking, academic English", 
    why: "One of the most popular and affordable local pathways into IT degrees in Sri Lanka. Suitable for students planning to continue up to a local or foreign IT degree." 
  },
  { 
    name: "Advanced Diploma in Software Engineering (ADSE) – National Institute of Business Management (NIBM)", 
    full: "National Institute of Business Management", 
    category: "Local Government / UK Affiliated", 
    focus: "Software engineering, application development, databases, system analysis", 
    why: "Highly recognized in Sri Lanka with both practical and academic value. Students can enter the IT industry early or continue toward a UK top-up degree." 
  },
  { 
    name: "Pearson BTEC Foundation / DiTEC – ESOFT Metro Campus", 
    full: "ESOFT Metro Campus", 
    category: "UK Affiliated (Pearson BTEC)", 
    focus: "Computing, web development, networking, practical IT skills", 
    why: "Flexible pathway leading to Pearson HND and foreign university degrees. Popular among students who prefer assignment-based learning instead of traditional exams." 
  }
];

export const webData: CourseDetail[] = [
  {
    name: "Advanced Diploma in Web Engineering – NIBM",
    full: "National Institute of Business Management",
    category: "Local Government",
    focus: "Full-stack web development, databases, UI/UX, modern web technologies",
    why: "Ideal for students who want practical software and web development skills directly after O/Ls with pathways to jobs or degree top-ups."
  },
  {
    name: "Diploma in Web Application Development – ESOFT Metro Campus",
    full: "ESOFT Metro Campus",
    category: "Local / Pearson BTEC",
    focus: "Web application development, frontend & backend programming, responsive design",
    why: "Good starting point for students aiming for international IT qualifications and specialized web development careers."
  },
  {
    name: "Short Course in Web Application Development – Open University of Sri Lanka (OUSL)",
    full: "Open University of Sri Lanka",
    category: "Local Government",
    focus: "Basic web development, HTML/CSS, JavaScript fundamentals",
    why: "Affordable and flexible pathway for beginners who want to enter IT gradually after O/L while building freelance-ready skills."
  },
  {
    name: "Advanced Diploma in Web Development & UI Design – Wijeya Graphics",
    full: "Wijeya Graphics",
    category: "Local Private",
    focus: "Front-end development, UI/UX design, creative web design tools",
    why: "Excellent for creative students interested in both coding and visual design, with strong portfolio-building opportunities after O/Ls."
  }
];

export const graphicsData: CourseDetail[] = [
  {
    name: "Advanced Diploma / Foundation in Multimedia Design – AMDT Creative Dept.",
    full: "AMDT - Association of Multimedia Design & Technology",
    category: "UK Affiliated",
    focus: "Multimedia Design, Graphic Design, Animation, Creative Media",
    why: "Excellent for students interested in creative technology careers with opportunities to continue into international design degrees."
  },
  {
    name: "Foundation in Art & Design – Academy of Design (AOD)",
    full: "Academy of Design (AOD)",
    category: "UK Affiliated (Northumbria University)",
    focus: "Art & Design, Visual Communication, Branding, Creative Thinking",
    why: "Helps students build a strong design portfolio and creative foundation before entering professional graphic design or visual communication degrees."
  },
  {
    name: "Advanced Diploma in Graphic Design & Animation – Wijeya Graphics",
    full: "Wijeya Graphics",
    category: "Local Private",
    focus: "Graphic Design, Animation, Digital Illustration, Video Editing",
    why: "More industry-oriented and practical, making it suitable for students who want hands-on creative skills and quicker entry into the media industry."
  },
  {
    name: "Advanced Diploma in Multimedia Production – NIBM",
    full: "National Institute of Business Management",
    category: "Local Govt.",
    focus: "Multimedia Technology, Digital Content Creation, Video Production, Web Media",
    why: "Combines creative and technical multimedia skills while also offering a recognized pathway toward higher education in multimedia fields."
  }
];

export const networkData: CourseDetail[] = [
  {
    name: "Diploma in Computer Hardware Engineering & Networking",
    full: "Computer Hardware & Support Academy",
    category: "International Vendor Preparation",
    focus: "Computer hardware, PC assembling, networking, troubleshooting, technical support",
    why: "Best for students who enjoy hands-on technical work and want quick entry into IT support or system administration careers."
  },
  {
    name: "Advanced Diploma in Computer Networking & Server Administration",
    full: "CISCO & Network Systems Administration",
    category: "Local Institute / Cisco Partner",
    focus: "Networking, server management, Cisco technologies, cybersecurity basics",
    why: "Excellent pathway for becoming a Network Engineer while preparing for globally recognized certifications like Cisco CCNA."
  },
  {
    name: "Advanced Diploma in Computer Networks",
    full: "Pearson BTEC International Foundation",
    category: "UK Affiliated (Pearson BTEC)",
    focus: "Enterprise networking, IT infrastructure, communication systems",
    why: "Provides an internationally recognized academic pathway with opportunities to continue into HND or foreign-affiliated IT degrees."
  },
  {
    name: "Computer Hardware Technician (NVQ Level 3/4)",
    full: "National Vocational Skill Program",
    category: "Local Government NVQ Qualification",
    focus: "Hardware maintenance, repair, networking basics, technical operations",
    why: "Ideal for students seeking affordable practical training and stable technical careers in government or private sector institutions."
  }
];

export const cyberData: CourseDetail[] = [
  {
    name: "Executive Diploma in Cyber Security / Certified Ethical Hacker",
    full: "EC-Council Certified Partner Pathway",
    category: "Global / EC-Council Partner",
    focus: "Ethical Hacking, Penetration Testing, Network Security, Cyber Defense",
    why: "Gives early exposure to real-world cyber security tools and globally recognized certifications, making it ideal for students targeting international cyber security careers."
  },
  {
    name: "Foundation Certificate in IT (IIT)",
    full: "Informatics Institute of Technology",
    category: "UK Affiliated (University of Westminster)",
    focus: "IT Fundamentals, Networking, Cyber Security Basics, Digital Forensics",
    why: "Strong academic foundation with a direct pathway to a UK-affiliated Cyber Security & Digital Forensics degree after O/L."
  },
  {
    name: "Foundation Certificate in IT (SLIIT)",
    full: "Sri Lanka Institute of Information Technology",
    category: "Local (UGC Approved)",
    focus: "Programming, System Security, Networking, Cyber Security Concepts",
    why: "Good choice for students planning to continue into a recognized Sri Lankan IT degree specializing in cyber security."
  },
  {
    name: "Diploma in Cyber Security & Ethical Hacking",
    full: "Local Private Institute Security Course",
    category: "Local Private Institute",
    focus: "Ethical Hacking, Infrastructure Security, Server Protection, Security Operations",
    why: "Best suited for students who prefer practical training and want faster entry into junior cyber security or infrastructure security job roles."
  }
];

export const aiData: CourseDetail[] = [
  {
    name: "Foundation Certificate in Higher Education (IT) – IIT",
    full: "Informatics Institute of Technology",
    category: "UK Affiliated (University of Westminster)",
    focus: "Programming, Data Science basics, AI concepts, Mathematics for Computing",
    why: "Excellent pathway for students aiming for an international degree in Data Science & AI with strong academic foundations."
  },
  {
    name: "Foundation Certificate in IT – SLIIT",
    full: "Sri Lanka Institute of Information Technology",
    category: "Local (UGC Approved)",
    focus: "IT fundamentals, databases, software development, introductory analytics",
    why: "Ideal for students who want a recognized Sri Lankan degree pathway with practical IT and Data Science exposure."
  },
  {
    name: "Advanced Diploma in Data Science & AI – NIBM",
    full: "National Institute of Business Management",
    category: "Local Govt. / UK Affiliated",
    focus: "Artificial Intelligence, Machine Learning, Python, Data Analytics",
    why: "Great for students interested in modern AI technologies and industry-focused practical learning after O/Ls."
  }
];

export const marketingData: CourseDetail[] = [
  {
    name: "Preliminary Certificate in Digital Marketing (PCDM)",
    full: "Sri Lanka Institute of Marketing (SLIM)",
    category: "Local Professional Body",
    focus: "Social Media Marketing, Branding, Content Creation, Basic Advertising",
    why: "Good starting point for students interested in business, social media, and entrepreneurship after O/Ls."
  },
  {
    name: "Professional Diploma in Digital Marketing",
    full: "Asia Pacific Institute of Digital Marketing (APIDM)",
    category: "Asia Pacific Institute",
    focus: "SEO, Social Media Campaigns, Google Ads, Analytics, Online Branding",
    why: "Industry-focused qualification with practical skills for freelance work and digital marketing careers."
  },
  {
    name: "Advanced Diploma in Digital Marketing",
    full: "National Institute of Business Management (NIBM)",
    category: "Local Government Institute",
    focus: "Marketing Strategy, Digital Advertising, E-Commerce, Business Communication",
    why: "Strong pathway to management or marketing degrees while building modern business and online marketing skills."
  }
];

export const officeData: CourseDetail[] = [
  {
    name: "DiTEC (Diploma in Information Technology) / ICDL",
    full: "ESOFT Metro Campus",
    category: "Local / Global Standard",
    focus: "Basic IT skills, MS Office, Computer Literacy, Workplace Technology",
    why: "Excellent starting qualification for students after O/Ls who want office, clerical, or administrative careers with strong computer knowledge."
  },
  {
    name: "Certificate / Diploma in Computer Applications",
    full: "National Institute of Business Management (NIBM)",
    category: "Local Government Institute",
    focus: "Computer Applications, Data Handling, Office Software, IT Fundamentals",
    why: "Helps students build practical office and IT skills that can lead to admin assistant, data entry, or junior analyst roles."
  },
  {
    name: "Computer Application Assistant (NVQ Level 3)",
    full: "Vocational Training Authority (VTA)",
    category: "Local Government (NVQ Level)",
    focus: "Practical Computer Usage, Office Systems, Data Entry, Workplace Skills",
    why: "A job-oriented pathway with NVQ recognition, ideal for students looking for government or private-sector IT support and data-entry opportunities after O/Ls."
  }
];

export const gamedevData: CourseDetail[] = [
  { name: "AMDT Game Development Foundations", full: "Academy of Multimedia Design & Technology", category: "Private Academy", focus: "Interactive Mechanics, Interface logic & Visual Layouts", why: "Creative-focused syllabus exploring interactive elements, storyboarding, and custom game engines." },
  { name: "Unity Junior Programmer Path", full: "Unity Global Training Syllabus", category: "Global Certification", focus: "C# Game Scripting, Physics Simulation, Particle Structures", why: "The absolute industry standard engine certification preparing students to craft interactive mobile games." },
  { name: "NIBM Diploma in Game Design & Animation", full: "National Institute of Business Management", category: "Local State-Owned", focus: "Collision Mechanics, 2D/3D Asset Designs, Level Logic", why: "Solid structural state-approved diploma combining creative artwork rendering and visual math implementation." }
];

export const langEngData: CourseDetail[] = [
  { name: "British Council General English", full: "British Council Sri Lanka", category: "Global (UK)", focus: "Speech Clarity, Advanced Syntax & Written Composition", why: "Crucial framework to build baseline corporate communication confidence ahead of university entry." },
  { name: "Cambridge English: First (FCE)", full: "Cambridge University Press & Assessment", category: "Global (UK)", focus: "Academic Reading & International Articulation", why: "Provides a lifelong, globally validated certificate of fluid English proficiency." }
];

export const langEastData: CourseDetail[] = [
  { name: "Japanese JLPT N5/N4 Prep", full: "Japanese Language Proficiency Test Track", category: "Global (Japan)", focus: "Kanji Characters, Listening, and Cultural Context", why: "Crucial baseline qualification for students aiming to secure SSW technical worker visas or study in Japan." },
  { name: "Korean TOPIK I Blueprint", full: "Test of Proficiency in Korean", category: "Global (Korea)", focus: "Hangul Script, Core Conversational Fluency", why: "The essential state path required to participate in government-managed jobs in South Korea." }
];

export const langEuroData: CourseDetail[] = [
  { name: "DELF A1/A2 French", full: "Alliance Française de Kotte", category: "Global (France)", focus: "Conversational European Accents & Basic Syntax", why: "Highly valued asset in hospitality, global corporate trade, and diplomatic entry positions." },
  { name: "Goethe-Zertifikat A1 German", full: "Goethe-Institut Sri Lanka", category: "Global (Germany)", focus: "Structured Vocabulary & Core Dialogue Delivery", why: "Unlocks affordable higher education options directly within Germany's free university ecosystems." }
];

export const nvqEngData: CourseDetail[] = [
  { name: "Automobile Mechanic (NVQ 3/4)", full: "Vocational Training Authority (VTA) / German Tech", category: "Local State-Owned", focus: "Internal Combustion Systems & Electronic Diagnostics", why: "High practical industry integration; rapid track to foreign vehicle technician placement." },
  { name: "Industrial Electrician (NVQ 3/4)", full: "National Apprentice and Industrial Training Authority (NAITA)", category: "Local State-Owned", focus: "Commercial Wiring Blueprints & Phase Maintenance", why: "Immediate path to self-employment, building registry contracts, or corporate technician hiring." }
];

export const nvqHospData: CourseDetail[] = [
  { name: "Professional Cookery (NVQ 3/4)", full: "Sri Lanka Institute of Tourism & Hotel Management (SLITHM)", category: "Local State-Owned", focus: "Global Culinary Arts, Kitchen Hygiene & Menu Layouts", why: "The primary golden passport qualification used to access cruise ship placement and Western hospitality migration." }
];

export const nvqCreativeData: CourseDetail[] = [
  { name: "NVQ Hairdressing & Beauty Therapy", full: "VTA / National Youth Services Council (NYSC)", category: "Local State-Owned", focus: "Cosmetology Science, Salon Operations & Creative Styling", why: "Exceptional independent commercial path allowing O/L students to launch direct personal enterprises early." }
];

export const hotelAccomData: CourseDetail[] = [
  { name: "Certificate / Diploma in Accommodation Operations (SLITHM)", full: "Government / Hospitality", focus: "Accommodation Services, Room Division Operations, Guest Services, Hotel Operations", why: "Industry-recognized training with direct pathways into hotels, resorts, and serviced apartments." },
  { name: "National Certificate in Accommodation Operations (VTA)", full: "Government Vocational", focus: "Accommodation Services, Housekeeping Coordination, Guest Care", why: "Affordable NVQ qualification with strong practical training and employability." },
  { name: "Accommodation Operations Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Hotel Accommodation Services, Workplace Training, Guest Support", why: "Earn-and-learn pathway with real hospitality industry experience." },
  { name: "Diploma in Accommodation & Hospitality Operations (CIIHE)", full: "International Hospitality Education", focus: "Accommodation Management, Room Division Operations, Guest Experience", why: "Combines operational skills with hospitality management competencies." },
  { name: "Certificate / Diploma in Accommodation Operations (Australasian Academy)", full: "International Affiliated", focus: "Hotel Accommodation Services, Customer Service, Hospitality Operations", why: "Internationally aligned qualification suitable for hospitality careers worldwide." },
  { name: "Diploma in Accommodation Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Accommodation Operations, Guest Experience, Hotel Administration", why: "Internationally recognized pathway for hotel and resort careers." },
  { name: "Diploma in Accommodation Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Room Division Management, Guest Services, Accommodation Administration", why: "Practical hotel-focused training aligned with industry standards." },
  { name: "Diploma in Accommodation & Hospitality Service (Aquinas College)", full: "Private Higher Education", focus: "Accommodation Services, Hospitality Administration, Customer Care", why: "Combines accommodation operations with hospitality management knowledge." },
  { name: "Diploma in Accommodation Operations & Management (SLICCA)", full: "Private Hospitality Institute", focus: "Room Operations, Guest Services, Accommodation Coordination", why: "Suitable for students interested in hotel accommodation careers." },
  { name: "Accommodation Operations Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Accommodation Management, Tourism Operations", why: "Government-recognized training with practical industry exposure." },
  { name: "Professional Accommodation Operations Course (British Way Hospitality School)", full: "Private Vocational", focus: "Accommodation Services, Guest Relations, Room Management", why: "Fast-track route into hotel and tourism careers." },
  { name: "Diploma in Hospitality Accommodation Management (CSBM)", full: "Private Higher Education", focus: "Accommodation Administration, Service Quality, Hospitality Management", why: "Develops leadership and operational skills for hospitality careers." }
];

export const hotelBakeryData: CourseDetail[] = [
  { name: "Diploma in Bakery Management (SLITHM)", full: "Government / Hospitality", focus: "Bakery Operations, Production Planning, Quality Control, Bakery Business Management", why: "Ideal for students who want to move beyond baking into bakery supervision and management roles." },
  { name: "National Diploma in Bakery Management (VTA)", full: "Government Vocational", focus: "Bakery Production, Inventory Control, Food Safety, Staff Supervision", why: "Provides practical and managerial skills with nationally recognized qualifications." },
  { name: "Bakery Management Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Bakery Operations, Workplace Management, Production Coordination", why: "Earn-and-learn pathway with real industry experience." },
  { name: "Diploma in Bakery & Pastry Management (CIIHE)", full: "International Hospitality Education", focus: "Bakery Operations, Pastry Management, Cost Control, Food Production", why: "Combines bakery expertise with hospitality management skills." },
  { name: "Diploma in Bakery Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Commercial Bakery Operations, Production Management, Bakery Entrepreneurship", why: "Internationally recognized pathway for bakery leadership careers." },
  { name: "Diploma in Bakery & Pastry Management (Australasian Academy)", full: "International Affiliated", focus: "Bakery Supervision, Pastry Production, Hospitality Operations", why: "Provides internationally aligned training for bakery and hospitality sectors." },
  { name: "Diploma in Bakery Operations & Management (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Bakery Production, Quality Assurance, Team Management", why: "Strong industry-focused training for hotels, bakeries, and food service organizations." },
  { name: "Diploma in Bakery & Confectionery Management (Aquinas College)", full: "Private Higher Education", focus: "Bakery Production, Confectionery Operations, Food Service Management", why: "Combines technical bakery skills with business management knowledge." },
  { name: "Diploma in Bakery Management (SLICCA)", full: "Private Culinary Institute", focus: "Bakery Operations, Production Planning, Menu Development, Costing", why: "Designed for students aspiring to manage commercial bakery operations." },
  { name: "Diploma in Bakery Management (Remarko Institute of Culinary Arts – RICA)", full: "TVEC Approved / Private Vocational", focus: "Bakery Production Systems, Quality Management, Bakery Entrepreneurship", why: "Industry-oriented qualification with practical management training." },
  { name: "Bakery Management Programme (Ocean University)", full: "Government Higher Education", focus: "Food Production, Bakery Operations, Hospitality Services", why: "Government-recognized training with operational and management exposure." },
  { name: "Professional Bakery Management Course (British Way Hospitality School)", full: "Private Vocational", focus: "Bakery Supervision, Food Safety, Production Management", why: "Suitable for students aiming for supervisory and management roles in bakeries." }
];

export const hotelBarBeverageData: CourseDetail[] = [
  { name: "Certificate / Diploma in Bar & Beverage Operations (SLITHM)", full: "Government / Hospitality", focus: "Beverage Service, Bar Operations, Customer Service, Hospitality Standards", why: "Industry-recognized training for careers in hotels, resorts, restaurants, and hospitality establishments." },
  { name: "National Certificate in Beverage Service (VTA)", full: "Government Vocational", focus: "Beverage Preparation, Service Techniques, Customer Relations", why: "Practical NVQ-based qualification with strong hospitality employment opportunities." },
  { name: "Beverage Service Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Beverage Operations, Guest Service, Workplace Training", why: "Earn-and-learn pathway with hands-on hospitality industry experience." },
  { name: "Diploma in Beverage Operations & Hospitality Service (CIIHE)", full: "International Hospitality Education", focus: "Beverage Management, Service Excellence, Hospitality Operations", why: "Develops operational and supervisory skills required in hospitality environments." },
  { name: "Certificate / Diploma in Beverage Operations (Australasian Academy)", full: "International Affiliated", focus: "Beverage Service, Customer Care, Hospitality Operations", why: "Internationally aligned training suitable for global hospitality careers." },
  { name: "Diploma in Beverage Service Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Beverage Operations, Hospitality Management, Guest Experience", why: "Internationally recognized qualification with strong career progression opportunities." },
  { name: "Diploma in Beverage Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Beverage Service, Hospitality Operations, Customer Experience", why: "Industry-focused training designed for hotel and resort environments." },
  { name: "Diploma in Hospitality & Beverage Service (Aquinas College)", full: "Private Higher Education", focus: "Beverage Operations, Food & Beverage Service, Hospitality Management", why: "Combines service skills with hospitality management knowledge." },
  { name: "Diploma in Beverage Operations & Service (SLICCA)", full: "Private Hospitality Institute", focus: "Beverage Service, Customer Relations, Hospitality Skills", why: "Suitable for students seeking careers in hospitality service operations." },
  { name: "Beverage Operations Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Customer Service, Food & Beverage Operations", why: "Government-recognized training with practical exposure." },
  { name: "Professional Beverage Service Course (British Way Hospitality School)", full: "Private Vocational", focus: "Beverage Service, Guest Relations, Hospitality Communication", why: "Fast-track route into hospitality service careers." },
  { name: "Diploma in Food & Beverage Operations Management (CSBM)", full: "Private Higher Education", focus: "Beverage Operations, Hospitality Administration, Service Management", why: "Develops leadership and operational skills for hospitality careers." }
];

export const hotelCakeDecData: CourseDetail[] = [
  { name: "Certificate in Cake Decoration (SLITHM)", full: "Government / Hospitality", focus: "Cake Decorating, Sugar Craft, Fondant Work, Cake Finishing", why: "Provides practical cake decorating skills with industry-recognized hospitality training." },
  { name: "Certificate in Cake Decoration & Sugar Craft (VTA)", full: "Government Vocational", focus: "Cake Decoration, Sugar Flowers, Royal Icing, Fondant Techniques", why: "Affordable vocational qualification with strong practical focus." },
  { name: "Cake Decoration Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Professional Cake Decoration, Bakery Workplace Skills", why: "Earn-and-learn pathway with hands-on industry exposure." },
  { name: "Certificate / Diploma in Cake Decoration (SLICCA)", full: "Private Culinary Institute", focus: "Fondant Art, Wedding Cakes, Sugar Craft, Cake Design", why: "Ideal for students interested in becoming professional cake artists." },
  { name: "Diploma in Cake Decoration & Sugar Craft (Menaka Culinary Art Academy)", full: "Private Culinary Education", focus: "Cake Design, Gum Paste Flowers, Fondant Modelling, Royal Icing", why: "Specialized training for creative cake decorating careers." },
  { name: "Certificate in Cake Decoration (Remarko Institute of Culinary Arts – RICA)", full: "TVEC Approved / Private Vocational", focus: "Cake Decorating, Bakery Arts, Pastry Presentation", why: "Industry-focused practical training suitable for bakery careers." },
  { name: "Certificate in Cake Decoration (CIIHE)", full: "International Hospitality Education", focus: "Cake Design, Dessert Presentation, Sugar Craft", why: "Enhances creative and professional bakery skills with hospitality exposure." },
  { name: "Certificate in Cake Decoration & Pastry Arts (Australasian Academy)", full: "International Affiliated", focus: "Cake Decoration, Pastry Presentation, Fondant Techniques", why: "Internationally aligned training for bakery and pastry careers." },
  { name: "Certificate in Cake Decorating (Aquinas College)", full: "Private Higher Education", focus: "Cake Finishing, Decorative Techniques, Sugar Art", why: "Provides a foundation for bakery and cake design entrepreneurship." },
  { name: "Professional Cake Decoration Course (British Way Hospitality School)", full: "Private Vocational", focus: "Cake Decoration, Wedding Cake Design, Cake Business Skills", why: "Suitable for students seeking quick entry into the cake decorating industry." },
  { name: "Cake Decoration & Sugar Craft Programme (Ocean University)", full: "Government Higher Education", focus: "Cake Design, Food Presentation, Bakery Skills", why: "Government-recognized training with practical application." },
  { name: "Professional Cake Art & Decoration Course (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Cake Artistry, Sugar Craft, Fondant Decoration", why: "Hospitality-oriented training for bakery and pastry sectors." }
];

export const hotelCommCookeryData: CourseDetail[] = [
  { name: "Certificate III in Commercial Cookery (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Commercial Cookery, Food Preparation, Kitchen Operations, International Cuisine", why: "Internationally recognized qualification that prepares students for professional chef careers locally and overseas." },
  { name: "Certificate III in Commercial Cookery (Don Sherman Institute)", full: "Australian Qualification (AQF)", focus: "Professional Cooking, Commercial Kitchen Skills, Food Safety", why: "Provides industry-standard culinary training with practical workplace exposure." },
  { name: "Certificate IV in Commercial Cookery (Don Sherman Institute)", full: "Australian Qualification (AQF)", focus: "Advanced Cookery, Kitchen Supervision, Menu Planning", why: "Ideal for students aiming for supervisory roles in professional kitchens." },
  { name: "Diploma of Hospitality Management – Commercial Cookery Pathway (Australasian Academy)", full: "International Affiliated", focus: "Commercial Cookery, Hospitality Operations, Kitchen Management", why: "Combines culinary expertise with hospitality management skills." },
  { name: "Diploma in Commercial Cookery (CIIHE)", full: "International Hospitality Education", focus: "Commercial Food Production, Kitchen Operations, Culinary Arts", why: "Offers practical culinary training with pathways to international hospitality careers." },
  { name: "Commercial Cookery Programme (SLITHM)", full: "Government / Hospitality", focus: "Professional Cookery, Food Production, Culinary Techniques", why: "Industry-recognized training with strong hotel sector connections." },
  { name: "National Certificate in Cookery (VTA)", full: "Government Vocational", focus: "Commercial Food Preparation, Kitchen Skills, Food Hygiene", why: "Affordable NVQ-based qualification with strong employability." },
  { name: "NVQ Level 4 Professional Cookery (NAITA)", full: "Government Vocational", focus: "Professional Kitchen Operations, Commercial Cooking Skills", why: "Earn-and-learn pathway with industry-based training opportunities." },
  { name: "Diploma in Commercial Cookery (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "International Cuisine, Food Production, Kitchen Management", why: "Practical culinary training aligned with hotel industry standards." },
  { name: "Diploma in Commercial Cookery (British Way Hospitality School)", full: "Private Vocational", focus: "Commercial Cooking, Bakery & Pastry, Food Safety", why: "Suitable for school leavers seeking quick entry into the hospitality sector." },
  { name: "Diploma in Commercial Cookery (William Angliss Pathway Programmes)", full: "Australian Qualification", focus: "International Cuisine, Commercial Kitchen Operations, Culinary Arts", why: "Globally recognized pathway for careers in hotels, restaurants, resorts, and cruise ships." },
  { name: "Professional Cookery & Commercial Kitchen Operations (Ocean University)", full: "Government Higher Education", focus: "Food Production, Commercial Kitchen Skills, Hospitality Services", why: "Government-recognized training with practical and technical skill development." }
];

export const hotelProfCookeryData: CourseDetail[] = [
  { name: "Professional Cookery (SLITHM)", full: "Government / Hospitality", focus: "Culinary Arts, Food Production, Kitchen Operations, Bakery & Pastry", why: "Industry-recognized training with strong hotel industry connections and internships." },
  { name: "National Certificate in Cookery (VTA)", full: "Government Vocational", focus: "Food Preparation, Cookery Skills, Food Safety", why: "Affordable, practical training with NVQ qualifications and good employability." },
  { name: "Apprenticeship & Cookery Training Programs (NAITA)", full: "Government Vocational", focus: "Professional Kitchen Skills, Workplace Training", why: "Earn while learning through industry placements and apprenticeships." },
  { name: "Diploma / Advanced Diploma in Professional Cookery (CIIHE)", full: "International Hospitality Education", focus: "Culinary Arts, Kitchen Management, Hospitality", why: "International-standard hospitality education with pathways to global careers." },
  { name: "Certificate / Diploma in Professional Cookery (Australasian Academy)", full: "International Affiliated", focus: "Professional Cooking, Bakery & Pastry", why: "Globally recognized qualifications and practical culinary training." },
  { name: "Certificate / Diploma in Commercial Cookery (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Commercial Cookery, International Cuisine, Hospitality", why: "Direct pathway to internationally recognized hospitality careers." },
  { name: "Diploma in Professional Cookery (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Culinary Arts, Food Production, Hotel Operations", why: "Strong focus on hotel industry requirements and practical experience." },
  { name: "Diploma in Culinary Arts & Hospitality (CSBM)", full: "Private Higher Education", focus: "Culinary Arts, Hospitality Management", why: "Combines cooking skills with hospitality management knowledge." },
  { name: "Certificate / Diploma in Cookery (British Way Hospitality School)", full: "Private Vocational", focus: "Cookery, Bakery, Food Safety", why: "Suitable for school leavers seeking quick entry into hospitality careers." },
  { name: "Hospitality & Cookery Programs (Aquinas College)", full: "Private Higher Education", focus: "Food Service, Culinary Skills, Hospitality", why: "Affordable pathway to hospitality sector careers." },
  { name: "Hospitality & Food Service Related Programs (Ocean University)", full: "Government Higher Education", focus: "Food Production, Hospitality Services", why: "Government-recognized qualifications with practical training opportunities." },
  { name: "NVQ Diploma in Cookery (University College Ratmalana)", full: "Government Vocational Higher Education", focus: "Professional Cookery, Food Production", why: "Offers nationally recognized NVQ qualifications with strong industry relevance." }
];

export const hotelCulinaryCookeryData: CourseDetail[] = [
  { name: "Diploma in Cookery & Culinary Art (Aquinas College)", full: "Private Higher Education", focus: "International Cookery, Culinary Arts, Hotel Management, Food Service", why: "Ideal for students seeking comprehensive culinary and hospitality training." },
  { name: "Diploma in Professional Cookery (SLICCA)", full: "Private Culinary Institute", focus: "Professional Cookery, International Cuisine, Kitchen Management, Food Safety", why: "Hands-on culinary training with exposure to modern kitchen operations." },
  { name: "Diploma in Culinary Arts & Hospitality (CIIHE)", full: "International Hospitality Education", focus: "Culinary Arts, Hospitality Management, Kitchen Operations", why: "International-standard education with pathways to global careers." },
  { name: "Diploma in Culinary Arts (Remarko Institute of Culinary Arts – RICA)", full: "TVEC Approved / Private Vocational", focus: "Culinary Arts, Professional Cookery, Pastry & Bakery", why: "Industry-focused practical training aligned with employer needs." },
  { name: "Diploma in International Cookery – Western (Menaka Culinary Art Academy)", full: "Private Culinary Education", focus: "Western Cuisine, Culinary Techniques, Food Presentation", why: "Specialized training in international culinary practices." },
  { name: "Diploma in Asian & Chinese Cookery (Menaka Culinary Art Academy)", full: "Private Culinary Education", focus: "Asian Cuisine, Chinese Cuisine, Professional Cooking Skills", why: "Provides specialization in high-demand Asian culinary sectors." },
  { name: "Certificate III in Commercial Cookery (Don Sherman Institute)", full: "Australian Qualification (AQF)", focus: "Commercial Cookery, Professional Kitchen Skills, Food Production", why: "Internationally aligned curriculum with internship opportunities." },
  { name: "Diploma in Culinary Arts (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Commercial Cookery, International Cuisine, Hospitality Operations", why: "Globally recognized qualification with strong overseas opportunities." },
  { name: "Diploma in Culinary Arts (SLITHM)", full: "Government / Hospitality", focus: "Culinary Arts, Food Production, Kitchen Operations, Bakery & Pastry", why: "Well-recognized qualification with excellent industry links." },
  { name: "National Diploma in Culinary Arts (VTA)", full: "Government Vocational", focus: "Professional Cooking, Food Preparation, Kitchen Operations", why: "Affordable NVQ pathway leading to employment opportunities." },
  { name: "Diploma in Culinary Arts (Australasian Academy)", full: "International Affiliated", focus: "Culinary Arts, Bakery & Pastry, Professional Kitchen Skills", why: "Provides globally recognized culinary education." },
  { name: "Diploma in Food Preparation & Culinary Arts (City & Guilds)", full: "UK Qualification", focus: "Food Preparation, Culinary Techniques, Kitchen Operations", why: "Internally recognized qualification suitable for local and overseas careers." }
];

export const hotelFnBServiceData: CourseDetail[] = [
  { name: "Certificate / Diploma in Food & Beverage Service (SLITHM)", full: "Government / Hospitality", focus: "Restaurant Service, Banquet Service, Guest Relations, Food & Beverage Operations", why: "Industry-recognized training with direct pathways into hotels, restaurants, and resorts." },
  { name: "National Certificate in Food & Beverage Service (VTA)", full: "Government Vocational", focus: "Customer Service, Restaurant Operations, Food Service Techniques", why: "Affordable NVQ-based qualification with strong employment prospects." },
  { name: "Food & Beverage Service Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Restaurant Service, Workplace Training, Hospitality Skills", why: "Earn-and-learn pathway with hands-on industry experience." },
  { name: "Diploma in Food & Beverage Service Management (CIIHE)", full: "International Hospitality Education", focus: "Restaurant Management, Beverage Service, Hospitality Operations", why: "Combines practical service skills with management competencies." },
  { name: "Certificate / Diploma in Food & Beverage Operations (Australasian Academy)", full: "International Affiliated", focus: "Food Service, Guest Handling, Restaurant Operations", why: "Internationally aligned training for hospitality careers." },
  { name: "Diploma in Food & Beverage Service (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Restaurant Service, Beverage Knowledge, Hospitality Operations", why: "Internationally recognized qualification with strong global career opportunities." },
  { name: "Diploma in Food & Beverage Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Restaurant Operations, Banquet Service, Customer Experience", why: "Practical hotel-focused training with strong industry relevance." },
  { name: "Diploma in Food & Beverage Management (Aquinas College)", full: "Private Higher Education", focus: "Food Service Operations, Hospitality Management, Customer Service", why: "Develops operational and managerial skills for hospitality careers." },
  { name: "Diploma in Food & Beverage Service (SLICCA)", full: "Private Hospitality & Culinary Institute", focus: "Food Service, Beverage Service, Restaurant Operations", why: "Suitable for students seeking careers in hotels and restaurants." },
  { name: "Food & Beverage Service Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Restaurant Operations, Food Service Management", why: "Government-recognized training with practical exposure." },
  { name: "Professional Food & Beverage Service Course (British Way Hospitality School)", full: "Private Vocational", focus: "Table Service, Guest Relations, Beverage Service", why: "Fast-track pathway into the hospitality industry." },
  { name: "Diploma in Restaurant & Food Service Management (CSBM)", full: "Private Higher Education", focus: "Restaurant Management, Customer Service, Food Operations", why: "Combines hospitality operations with business management skills." }
];

export const hotelFrontOfficeData: CourseDetail[] = [
  { name: "Certificate / Diploma in Front Office Operations (SLITHM)", full: "Government / Hospitality", focus: "Hotel Reception, Guest Relations, Reservation Systems, Front Desk Operations", why: "Industry-recognized training with direct pathways into hotels, resorts, and hospitality establishments." },
  { name: "National Certificate in Front Office Operations (VTA)", full: "Government Vocational", focus: "Reception Skills, Customer Service, Hotel Operations", why: "Affordable NVQ-based qualification with strong employment opportunities in hospitality." },
  { name: "Front Office Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Front Desk Operations, Guest Handling, Workplace Training", why: "Earn-and-learn pathway with practical hotel industry experience." },
  { name: "Diploma in Front Office & Hospitality Operations (CIIHE)", full: "International Hospitality Education", focus: "Front Office Management, Guest Services, Reservation Systems", why: "Combines practical front office skills with hospitality management knowledge." },
  { name: "Certificate / Diploma in Front Office Operations (Australasian Academy)", full: "International Affiliated", focus: "Reception Management, Customer Care, Hotel Administration", why: "Internationally aligned qualification suitable for hospitality careers worldwide." },
  { name: "Diploma in Front Office Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Front Office Supervision, Guest Experience, Hospitality Operations", why: "Internationally recognized pathway for careers in hotels and resorts." },
  { name: "Diploma in Front Office Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Reception Operations, Reservation Management, Guest Relations", why: "Practical hotel-focused training aligned with industry standards." },
  { name: "Diploma in Front Office & Hospitality Service (Aquinas College)", full: "Private Higher Education", focus: "Hotel Administration, Guest Services, Front Desk Operations", why: "Combines hospitality operations with customer service skills." },
  { name: "Diploma in Front Office Operations & Management (SLICCA)", full: "Private Hospitality Institute", focus: "Front Desk Operations, Customer Relations, Hotel Services", why: "Suitable for students interested in hotel guest service careers." },
  { name: "Front Office Operations Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Reception Management, Guest Communication", why: "Government-recognized training with practical industry exposure." },
  { name: "Professional Front Office Course (British Way Hospitality School)", full: "Private Vocational", focus: "Reception Skills, Guest Relations, Reservation Handling", why: "Fast-track route into hotel and hospitality careers." },
  { name: "Diploma in Hospitality & Front Office Management (CSBM)", full: "Private Higher Education", focus: "Front Office Administration, Customer Experience, Hospitality Management", why: "Develops leadership and operational skills for hospitality careers." }
];

export const hotelGuestRelationsData: CourseDetail[] = [
  { name: "Certificate / Diploma in Guest Relations Management (SLITHM)", full: "Government / Hospitality", focus: "Guest Relations, Customer Service, Hospitality Communication, Complaint Handling", why: "Industry-recognized training that prepares students for guest-facing roles in hotels and resorts." },
  { name: "National Certificate in Hospitality & Guest Service (VTA)", full: "Government Vocational", focus: "Customer Care, Guest Interaction, Service Excellence", why: "Affordable NVQ-based qualification with strong employment opportunities in hospitality and tourism." },
  { name: "Guest Relations Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Guest Services, Hospitality Operations, Workplace Training", why: "Earn-and-learn pathway with hands-on industry experience." },
  { name: "Diploma in Guest Relations & Hospitality Management (CIIHE)", full: "International Hospitality Education", focus: "Guest Experience Management, Customer Satisfaction, Hospitality Operations", why: "Combines service excellence with hospitality management skills." },
  { name: "Certificate / Diploma in Guest Relations (Australasian Academy)", full: "International Affiliated", focus: "Guest Communication, Service Quality, Hospitality Operations", why: "Internationally aligned qualification suitable for hospitality careers worldwide." },
  { name: "Diploma in Guest Experience Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Guest Relations, Customer Experience, Hospitality Management", why: "Internationally recognized pathway for careers in hotels, resorts, and tourism establishments." },
  { name: "Diploma in Guest Relations Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Guest Handling, Customer Experience, Hospitality Service", why: "Practical training focused on hotel industry requirements." },
  { name: "Diploma in Hospitality & Guest Relations (Aquinas College)", full: "Private Higher Education", focus: "Customer Care, Guest Service Operations, Hospitality Management", why: "Develops communication and hospitality management competencies." },
  { name: "Diploma in Guest Relations Management (SLICCA)", full: "Private Hospitality Institute", focus: "Guest Services, Communication Skills, Customer Satisfaction", why: "Suitable for students interested in guest-facing hospitality careers." },
  { name: "Guest Relations Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Customer Relations, Service Operations", why: "Government-recognized training with practical hospitality exposure." },
  { name: "Professional Guest Relations Course (British Way Hospitality School)", full: "Private Vocational", focus: "Guest Communication, Service Recovery, Customer Care", why: "Fast-track route into hospitality and tourism service careers." },
  { name: "Diploma in Hospitality Customer Experience Management (CSBM)", full: "Private Higher Education", focus: "Customer Experience, Guest Satisfaction, Hospitality Administration", why: "Develops leadership and customer service management skills." }
];

export const hotelLeadershipData: CourseDetail[] = [
  { name: "Diploma in Hospitality Leadership & Administration (SLITHM)", full: "Government / Hospitality", focus: "Hospitality Leadership, Hotel Administration, Service Management, Operations Coordination", why: "Industry-recognized qualification that prepares students for supervisory and management roles in hospitality." },
  { name: "National Diploma in Hospitality Administration (VTA)", full: "Government Vocational", focus: "Hospitality Operations, Administrative Management, Customer Service", why: "Affordable NVQ pathway with practical management-focused training." },
  { name: "Hospitality Leadership Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Hospitality Administration, Workplace Leadership, Operations Support", why: "Earn-and-learn pathway with real hospitality industry experience." },
  { name: "Diploma in Hospitality Leadership & Management (CIIHE)", full: "International Hospitality Education", focus: "Hospitality Leadership, Organizational Management, Service Excellence", why: "Combines hospitality knowledge with modern leadership and management practices." },
  { name: "Diploma in Hospitality Leadership & Administration (Australasian Academy)", full: "International Affiliated", focus: "Hospitality Operations, Team Leadership, Customer Experience Management", why: "Internationally aligned qualification suitable for global hospitality careers." },
  { name: "Diploma in Hospitality Leadership (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Hospitality Management, Leadership Development, Service Operations", why: "Internationally recognized qualification with strong international career prospects." },
  { name: "Diploma in Hospitality Administration & Leadership (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Hotel Administration, Hospitality Operations, Team Management", why: "Practical industry-focused training aligned with hotel sector requirements." },
  { name: "Diploma in Hospitality Leadership & Administration (Aquinas College)", full: "Private Higher Education", focus: "Hospitality Administration, Business Management, Service Leadership", why: "Combines hospitality studies with business and administrative skills." },
  { name: "Diploma in Hospitality Leadership & Operations (SLICCA)", full: "Private Hospitality Institute", focus: "Hospitality Management, Leadership Skills, Customer Relations", why: "Suitable for students aiming for supervisory and management positions." },
  { name: "Hospitality Leadership Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Administrative Operations, Leadership Skills", why: "Government-recognized qualification with practical industry exposure." },
  { name: "Professional Diploma in Hospitality Leadership (British Way Hospitality School)", full: "Private Vocational", focus: "Leadership Skills, Hospitality Administration, Customer Service Management", why: "Fast-track pathway into hospitality leadership careers." },
  { name: "Diploma in Hospitality Administration & Leadership (CSBM)", full: "Private Higher Education", focus: "Hospitality Management, Business Administration, Service Operations", why: "Develops leadership and operational skills required in hospitality organizations." }
];

export const hotelMgmtData: CourseDetail[] = [
  { name: "Diploma in Hotel Management (SLITHM)", full: "Government / Hospitality", focus: "Hotel Operations, Front Office, Food & Beverage, Housekeeping, Hospitality Management", why: "One of the most recognized hospitality qualifications in Sri Lanka with strong industry connections." },
  { name: "Diploma in Hospitality Management (SLITHM)", full: "Government / Hospitality", focus: "Hospitality Operations, Customer Service, Hotel Administration, Tourism Services", why: "Provides a comprehensive understanding of the hospitality industry and management practices." },
  { name: "Diploma in Hotel & Hospitality Management (CIIHE)", full: "International Hospitality Education", focus: "Hotel Operations, Hospitality Leadership, Service Management", why: "International-standard qualification with pathways to global hospitality careers." },
  { name: "Diploma in Hotel Management (Australasian Academy)", full: "International Affiliated", focus: "Hotel Administration, Hospitality Operations, Customer Experience", why: "Internationally aligned education suitable for careers in hotels and resorts worldwide." },
  { name: "Diploma in Hospitality Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Hospitality Operations, Hotel Management, Food & Beverage Management", why: "Internationally recognized qualification with excellent overseas opportunities." },
  { name: "Diploma in Hotel Management (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Hotel Operations, Guest Services, Hospitality Administration", why: "Practical industry-focused training aligned with hotel sector requirements." },
  { name: "Diploma in Hotel & Hospitality Management (Aquinas College)", full: "Private Higher Education", focus: "Hospitality Management, Hotel Administration, Service Operations", why: "Combines hospitality knowledge with business and management skills." },
  { name: "Diploma in Hospitality Management (SLICCA)", full: "Private Hospitality Institute", focus: "Hotel Operations, Customer Relations, Hospitality Leadership", why: "Suitable for students seeking management careers in hospitality." },
  { name: "Hotel & Hospitality Management Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Tourism Support, Hotel Operations", why: "Government-recognized qualification with practical exposure." },
  { name: "Professional Diploma in Hotel Management (British Way Hospitality School)", full: "Private Vocational", focus: "Hotel Operations, Hospitality Service, Customer Care", why: "Fast-track route into hotel and hospitality careers." },
  { name: "Diploma in Hotel & Hospitality Management (CSBM)", full: "Private Higher Education", focus: "Hotel Administration, Hospitality Leadership, Service Management", why: "Develops managerial and operational skills required in hospitality organizations." },
  { name: "National Diploma in Hotel & Hospitality Management (VTA)", full: "Government Vocational", focus: "Hotel Operations, Food & Beverage Service, Front Office Management", why: "Affordable NVQ pathway with strong employment prospects." },
  { name: "Hotel Management Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Hotel Operations, Workplace Training, Hospitality Services", why: "Earn-and-learn pathway with direct industry experience." }
];

export const hotelHousekeepingData: CourseDetail[] = [
  { name: "Certificate / Diploma in Housekeeping Operations (SLITHM)", full: "Government / Hospitality", focus: "Housekeeping Procedures, Room Maintenance, Cleaning Standards, Guest Room Operations", why: "Industry-recognized training with direct pathways into hotels, resorts, and hospitality establishments." },
  { name: "National Certificate in Housekeeping Operations (VTA)", full: "Government Vocational", focus: "Housekeeping Skills, Hygiene Standards, Room Preparation", why: "Affordable NVQ qualification with strong practical training and employment opportunities." },
  { name: "Housekeeping Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Room Operations, Workplace Training, Hospitality Services", why: "Earn-and-learn pathway with hands-on hotel industry experience." },
  { name: "Diploma in Housekeeping & Hospitality Operations (CIIHE)", full: "International Hospitality Education", focus: "Housekeeping Management, Guest Room Operations, Hospitality Standards", why: "Combines operational housekeeping skills with management competencies." },
  { name: "Certificate / Diploma in Housekeeping Operations (Australasian Academy)", full: "International Affiliated", focus: "Room Management, Cleaning Operations, Hospitality Services", why: "Internationally aligned qualification suitable for global hospitality careers." },
  { name: "Diploma in Housekeeping Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Housekeeping Supervision, Quality Standards, Hotel Operations", why: "Internationally recognized pathway for careers in hotels and resorts." },
  { name: "Diploma in Housekeeping Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Room Division Operations, Housekeeping Procedures, Guest Services", why: "Practical hotel-focused training aligned with industry standards." },
  { name: "Diploma in Housekeeping & Hospitality Service (Aquinas College)", full: "Private Higher Education", focus: "Housekeeping Administration, Hospitality Services, Quality Control", why: "Combines housekeeping skills with hospitality management knowledge." },
  { name: "Diploma in Housekeeping Operations & Management (SLICCA)", full: "Private Hospitality Institute", focus: "Housekeeping Supervision, Cleaning Management, Guest Room Services", why: "Suitable for students interested in hotel operations careers." },
  { name: "Housekeeping Operations Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Housekeeping Management, Facility Maintenance", why: "Government-recognized training with practical industry exposure." },
  { name: "Professional Housekeeping Course (British Way Hospitality School)", full: "Private Vocational", focus: "Housekeeping Techniques, Cleaning Standards, Room Care", why: "Fast-track route into hotel and hospitality careers." },
  { name: "Diploma in Hospitality Housekeeping Management (CSBM)", full: "Private Higher Education", focus: "Housekeeping Administration, Service Quality, Hospitality Operations", why: "Develops supervisory and operational skills for hospitality careers." }
];

export const hotelKitchenMgmtData: CourseDetail[] = [
  { name: "Diploma in Kitchen Management (SLITHM)", full: "Government / Hospitality", focus: "Kitchen Operations, Food Production Management, Cost Control, Staff Supervision", why: "Ideal for students who want to progress beyond cooking into kitchen leadership and management roles." },
  { name: "Diploma in Culinary Arts & Kitchen Management (CIIHE)", full: "International Hospitality Education", focus: "Culinary Arts, Kitchen Administration, Menu Planning, Food Costing", why: "Combines culinary skills with managerial competencies required in modern hospitality establishments." },
  { name: "Diploma in Hospitality & Kitchen Management (Australasian Academy)", full: "International Affiliated", focus: "Hospitality Operations, Kitchen Supervision, Food Service Management", why: "Internationally recognized pathway leading to hospitality and kitchen management careers." },
  { name: "Diploma in Professional Cookery & Kitchen Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Commercial Cookery, Kitchen Leadership, Food Production Systems", why: "Develops both culinary expertise and operational management skills." },
  { name: "Diploma in Hospitality & Kitchen Operations Management (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Kitchen Operations, Staff Management, Quality Control", why: "Strong practical training aligned with hotel and restaurant industry standards." },
  { name: "Diploma in Food Service & Kitchen Management (Aquinas College)", full: "Private Higher Education", focus: "Food Service Operations, Kitchen Administration, Hospitality Management", why: "Suitable for students seeking a balance between culinary and management education." },
  { name: "Hospitality Operations & Kitchen Management Program (Ocean University)", full: "Government Higher Education", focus: "Food Production, Kitchen Operations, Hospitality Services", why: "Government-recognized qualification with practical industry exposure." },
  { name: "NVQ Level 5/6 Hospitality Management – Kitchen Operations Stream (VTA)", full: "Government Vocational", focus: "Kitchen Supervision, Food Cost Control, Hospitality Operations", why: "Provides nationally recognized qualifications and management-focused training." },
  { name: "Professional Kitchen Management Programme (NAITA)", full: "Government Vocational", focus: "Commercial Kitchen Operations, Staff Coordination, Workplace Training", why: "Earn-and-learn pathway with hands-on industry experience." },
  { name: "Diploma in Kitchen & Hospitality Management (CSBM)", full: "Private Higher Education", focus: "Kitchen Management, Hospitality Administration, Food Service Operations", why: "Develops management and leadership skills for hospitality careers." },
  { name: "Diploma in Kitchen Operations Management (British Way Hospitality School)", full: "Private Vocational", focus: "Kitchen Supervision, Food Safety, Food Production Management", why: "Practical pathway for students aiming for supervisory roles in hospitality." },
  { name: "Diploma in Culinary Management (SLICCA)", full: "Private Culinary Institute", focus: "Culinary Operations, Kitchen Leadership, Menu Development", why: "Prepares students for management positions in professional kitchens." }
];

export const hotelPastryBakeryData: CourseDetail[] = [
  { name: "Certificate / Diploma in Pastry & Bakery (SLITHM)", full: "Government / Hospitality", focus: "Baking Techniques, Pastry Production, Cake Decoration, Bakery Operations", why: "Industry-recognized training with strong pathways into hotels, bakeries, and pastry kitchens." },
  { name: "National Certificate in Bakery & Pastry (VTA)", full: "Government Vocational", focus: "Bread Making, Pastry Production, Bakery Hygiene, Food Safety", why: "Affordable NVQ-based qualification with strong practical training and employment opportunities." },
  { name: "Bakery & Pastry Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Bakery Operations, Pastry Production, Workplace Training", why: "Earn while learning through industry placements and hands-on bakery experience." },
  { name: "Diploma in Pastry & Bakery Arts (CIIHE)", full: "International Hospitality Education", focus: "Pastry Arts, Baking Science, Dessert Production, Bakery Management", why: "International-standard culinary education with pathways to local and overseas careers." },
  { name: "Certificate / Diploma in Pastry & Bakery (Australasian Academy)", full: "International Affiliated", focus: "Pastry Production, Cake Decorating, Artisan Baking", why: "Globally aligned curriculum with practical training and industry relevance." },
  { name: "Certificate / Diploma in Bakery & Pastry (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Commercial Baking, Pastry Arts, Dessert Preparation", why: "Internationally recognized qualification with strong hospitality career prospects." },
  { name: "Diploma in Pastry & Bakery (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Baking, Confectionery, Dessert Production, Bakery Operations", why: "Practical training focused on hotel and restaurant industry requirements." },
  { name: "Diploma in Pastry & Bakery Arts (SLICCA)", full: "Private Culinary Institute", focus: "Pastry Arts, Artisan Baking, Cake Decoration, Chocolate Work", why: "Specialized pastry training designed for aspiring pastry chefs and bakery entrepreneurs." },
  { name: "Diploma in Pastry & Bakery (Remarko Institute of Culinary Arts – RICA)", full: "TVEC Approved / Private Vocational", focus: "Baking Technology, Pastry Production, Bakery Management", why: "Industry-focused qualification with practical bakery training." },
  { name: "Certificate / Diploma in Pastry & Bakery (Menaka Culinary Art Academy)", full: "Private Culinary Education", focus: "Cake Making, Dessert Production, Bakery Skills", why: "Excellent foundation for careers in bakeries, hotels, and home-based baking businesses." },
  { name: "Diploma in Bakery & Confectionery (Aquinas College)", full: "Private Higher Education", focus: "Bakery Production, Confectionery, Food Service Skills", why: "Combines practical baking skills with hospitality knowledge." },
  { name: "Pastry & Bakery Programme (Ocean University)", full: "Government Higher Education", focus: "Bakery Operations, Food Production, Hospitality Services", why: "Government-recognized training with practical industry exposure." }
];

export const hotelResortMgmtData: CourseDetail[] = [
  { name: "Diploma in Resort & Hotel Operations Management (SLITHM)", full: "Government / Hospitality", focus: "Resort Operations, Hotel Management, Guest Services, Hospitality Administration", why: "Industry-recognized qualification with strong links to Sri Lanka's hotel and resort sector." },
  { name: "National Diploma in Hotel Operations Management (VTA)", full: "Government Vocational", focus: "Hotel Operations, Customer Service, Front Office, Housekeeping Coordination", why: "Affordable NVQ pathway with practical hospitality training and strong employability." },
  { name: "Resort & Hotel Operations Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Resort Services, Hotel Operations, Workplace Training", why: "Earn-and-learn pathway with direct industry exposure in hotels and resorts." },
  { name: "Diploma in Resort & Hotel Operations Management (CIIHE)", full: "International Hospitality Education", focus: "Resort Management, Hotel Operations, Hospitality Leadership", why: "Combines operational expertise with management skills for hospitality careers." },
  { name: "Diploma in Hotel & Resort Management (Australasian Academy)", full: "International Affiliated", focus: "Resort Operations, Guest Experience, Hospitality Services", why: "Internationally aligned qualification suitable for global hospitality careers." },
  { name: "Diploma in Resort & Hotel Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Resort Administration, Hotel Operations, Service Management", why: "Internationally recognized qualification with strong overseas career opportunities." },
  { name: "Diploma in Resort Operations & Hospitality Management (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Resort Services, Hotel Operations, Guest Relations", why: "Practical hotel-focused training aligned with industry requirements." },
  { name: "Diploma in Resort & Hospitality Management (Aquinas College)", full: "Private Higher Education", focus: "Hospitality Administration, Resort Operations, Tourism Services", why: "Combines hospitality knowledge with business and management competencies." },
  { name: "Diploma in Resort & Hotel Operations Management (SLICCA)", full: "Private Hospitality Institute", focus: "Resort Operations, Hotel Services, Customer Experience", why: "Suitable for students seeking careers in resort and hotel management." },
  { name: "Resort & Hotel Operations Programme (Ocean University)", full: "Government Higher Education", focus: "Hospitality Services, Resort Management, Tourism Operations", why: "Government-recognized qualification with practical industry exposure." },
  { name: "Professional Diploma in Resort & Hotel Management (British Way Hospitality School)", full: "Private Vocational", focus: "Hotel Operations, Resort Services, Hospitality Communication", why: "Fast-track pathway into hospitality careers." },
  { name: "Diploma in Resort & Hotel Management (CSBM)", full: "Private Higher Education", focus: "Hotel Administration, Resort Leadership, Service Management", why: "Develops leadership and operational skills for hospitality careers." }
];

export const hotelRestaurantBanquetData: CourseDetail[] = [
  { name: "Certificate / Diploma in Restaurant & Banquet Service (SLITHM)", full: "Government / Hospitality", focus: "Restaurant Service, Banquet Operations, Guest Relations, Table Service", why: "Industry-recognized training with direct access to hotel and hospitality careers." },
  { name: "National Certificate in Restaurant & Banquet Service (VTA)", full: "Government Vocational", focus: "Food Service Techniques, Banquet Service, Customer Care", why: "Affordable NVQ qualification with strong practical training and employability." },
  { name: "Restaurant Service Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Restaurant Operations, Guest Service, Workplace Training", why: "Earn-and-learn pathway with real hotel and restaurant industry experience." },
  { name: "Diploma in Restaurant & Banquet Management (CIIHE)", full: "International Hospitality Education", focus: "Banquet Operations, Restaurant Management, Hospitality Service", why: "Develops both operational and management skills required in hospitality establishments." },
  { name: "Certificate / Diploma in Restaurant Operations (Australasian Academy)", full: "International Affiliated", focus: "Restaurant Service, Banquet Coordination, Guest Experience", why: "Internationally aligned training with global hospitality standards." },
  { name: "Diploma in Restaurant & Banquet Service (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Restaurant Operations, Food Service, Banquet Management", why: "Internationally recognized qualification with strong career prospects worldwide." },
  { name: "Diploma in Restaurant Operations Management (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Restaurant Supervision, Banquet Service, Customer Experience", why: "Hotel industry-focused training with practical exposure." },
  { name: "Diploma in Restaurant & Hospitality Service (Aquinas College)", full: "Private Higher Education", focus: "Food Service, Restaurant Operations, Hospitality Management", why: "Combines service skills with hospitality management knowledge." },
  { name: "Diploma in Restaurant Service & Management (SLICCA)", full: "Private Hospitality Institute", focus: "Restaurant Service, Guest Handling, Banquet Coordination", why: "Suitable for students aiming for careers in restaurants and hotels." },
  { name: "Restaurant & Banquet Service Programme (Ocean University)", full: "Government Higher Education", focus: "Food Service Operations, Hospitality Services, Event Service", why: "Government-recognized training with practical industry exposure." },
  { name: "Professional Restaurant & Banquet Service Course (British Way Hospitality School)", full: "Private Vocational", focus: "Table Service, Banquet Setup, Customer Service", why: "Fast-track route into hospitality and event service careers." },
  { name: "Diploma in Restaurant & Food Service Management (CSBM)", full: "Private Higher Education", focus: "Restaurant Management, Food Service Operations, Customer Relations", why: "Provides management and leadership skills for hospitality careers." }
];

export const hotelTourGuidingData: CourseDetail[] = [
  { name: "Certificate / Diploma in Tour Guiding & Destination Management (SLITHM)", full: "Government / Tourism & Hospitality", focus: "Tour Guiding, Destination Management, Visitor Services, Cultural Interpretation", why: "Industry-recognized qualification with direct pathways into the tourism sector." },
  { name: "National Certificate in Tour Guiding (VTA)", full: "Government Vocational", focus: "Tour Guiding, Visitor Communication, Tourism Services", why: "Affordable NVQ qualification with strong practical tourism training." },
  { name: "Tour Guide Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Tour Operations, Visitor Handling, Workplace Training", why: "Earn-and-learn pathway with real-world tourism industry experience." },
  { name: "Diploma in Tour Guiding & Destination Management (CIIHE)", full: "International Hospitality Education", focus: "Destination Management, Tour Planning, Tourism Operations", why: "Combines tourism knowledge with management and customer service skills." },
  { name: "Diploma in Tour Guiding & Tourism Management (Australasian Academy)", full: "International Affiliated", focus: "Destination Services, Tourism Marketing, Visitor Experience", why: "Internationally aligned qualification suitable for global tourism careers." },
  { name: "Diploma in Destination Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Destination Planning, Tourism Development, Visitor Experience Management", why: "Internationally recognized qualification with strong career prospects." },
  { name: "Diploma in Tour Operations & Destination Management (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Tour Coordination, Destination Services, Tourism Operations", why: "Practical industry-focused training aligned with tourism sector requirements." },
  { name: "Diploma in Tour Guiding & Tourism Services (Aquinas College)", full: "Private Higher Education", focus: "Tour Guiding, Tourism Administration, Visitor Relations", why: "Combines tourism studies with communication and management skills." },
  { name: "Diploma in Tour Guiding & Destination Management (SLICCA)", full: "Private Hospitality & Tourism Institute", focus: "Tour Operations, Destination Services, Customer Relations", why: "Suitable for students seeking careers in tourism and travel industries." },
  { name: "Tour Guiding & Destination Management Programme (Ocean University)", full: "Government Higher Education", focus: "Tourism Services, Coastal Tourism, Destination Operations", why: "Government-recognized qualification with practical exposure." },
  { name: "Professional Tour Guiding Course (British Way Hospitality School)", full: "Private Vocational", focus: "Tour Guiding, Customer Service, Tourism Communication", why: "Fast-track route into tourism careers." },
  { name: "Diploma in Destination Management & Tourism Operations (CSBM)", full: "Private Higher Education", focus: "Tourism Administration, Destination Marketing, Service Management", why: "Develops leadership and operational skills for tourism careers." }
];

export const hotelTourismMgmtData: CourseDetail[] = [
  { name: "Diploma in Tourism Management (SLITHM)", full: "Government / Tourism & Hospitality", focus: "Tourism Operations, Destination Management, Hospitality Services, Tourism Development", why: "Industry-recognized qualification with strong links to Sri Lanka's tourism sector." },
  { name: "National Diploma in Tourism Management (VTA)", full: "Government Vocational", focus: "Tourism Services, Tour Coordination, Travel Operations, Customer Service", why: "Affordable NVQ pathway with practical tourism industry training." },
  { name: "Tourism Management Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Tourism Operations, Workplace Training, Visitor Services", why: "Earn-and-learn pathway with hands-on industry exposure." },
  { name: "Diploma in Tourism Management (CIIHE)", full: "International Hospitality Education", focus: "Tourism Management, Destination Marketing, Hospitality Operations", why: "Combines tourism knowledge with management and leadership skills." },
  { name: "Diploma in Tourism Management (Australasian Academy)", full: "International Affiliated", focus: "Tourism Operations, Tourism Marketing, Customer Experience", why: "Internationally aligned qualification suitable for global tourism careers." },
  { name: "Diploma in Tourism Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Destination Management, Tourism Planning, Visitor Experience", why: "Internationally recognized qualification with excellent overseas opportunities." },
  { name: "Diploma in Tourism Management (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Tourism Services, Travel Operations, Hospitality Management", why: "Practical industry-focused training aligned with tourism sector requirements." },
  { name: "Diploma in Tourism Management (Aquinas College)", full: "Private Higher Education", focus: "Tourism Administration, Tourism Planning, Hospitality Services", why: "Combines tourism studies with business and management knowledge." },
  { name: "Diploma in Tourism Management (SLICCA)", full: "Private Hospitality & Tourism Institute", focus: "Tourism Operations, Visitor Services, Tourism Communication", why: "Suitable for students seeking careers in tourism and hospitality industries." },
  { name: "Tourism Management Programme (Ocean University)", full: "Government Higher Education", focus: "Tourism Services, Coastal Tourism, Hospitality Support", why: "Government-recognized qualification with practical exposure." },
  { name: "Professional Diploma in Tourism Management (British Way Hospitality School)", full: "Private Vocational", focus: "Tourism Operations, Customer Relations, Tourism Marketing", why: "Fast-track pathway into tourism sector careers." },
  { name: "Diploma in Tourism Management (CSBM)", full: "Private Higher Education", focus: "Tourism Administration, Tourism Marketing, Service Management", why: "Develops leadership and operational skills for tourism careers." }
];

export const hotelTourismTravelData: CourseDetail[] = [
  { name: "Certificate / Diploma in Tourism & Travel Management (SLITHM)", full: "Government / Tourism & Hospitality", focus: "Tourism Operations, Travel Services, Tour Planning, Customer Service", why: "Industry-recognized qualification with direct pathways into the tourism and travel industry." },
  { name: "National Certificate in Tourism & Travel Management (VTA)", full: "Government Vocational", focus: "Travel Operations, Tourism Services, Tour Coordination", why: "Affordable NVQ qualification with strong practical training and employability." },
  { name: "Tourism & Travel Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Travel Services, Tourism Operations, Workplace Training", why: "Earn-and-learn pathway with hands-on industry experience." },
  { name: "Diploma in Tourism & Travel Management (CIIHE)", full: "International Hospitality Education", focus: "Tourism Management, Travel Operations, Hospitality Services", why: "Combines tourism knowledge with management and customer service skills." },
  { name: "Diploma in Tourism & Travel Management (Australasian Academy)", full: "International Affiliated", focus: "Travel Industry Operations, Tourism Marketing, Tour Management", why: "Internationally aligned qualification suitable for global tourism careers." },
  { name: "Diploma in Tourism & Travel Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Tourism Operations, Travel Services, Destination Management", why: "Internationally recognized pathway with strong global career opportunities." },
  { name: "Diploma in Tourism & Travel Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Travel Planning, Tourism Services, Customer Experience", why: "Practical industry-focused training aligned with tourism sector needs." },
  { name: "Diploma in Tourism & Travel Management (Aquinas College)", full: "Private Higher Education", focus: "Tourism Administration, Travel Operations, Hospitality Management", why: "Combines tourism studies with management competencies." },
  { name: "Diploma in Tourism & Travel Management (SLICCA)", full: "Private Hospitality & Tourism Institute", focus: "Travel Services, Tour Operations, Tourism Communication", why: "Suitable for students seeking careers in tourism and travel sectors." },
  { name: "Tourism & Travel Management Programme (Ocean University)", full: "Government Higher Education", focus: "Tourism Services, Travel Operations, Hospitality Support", why: "Government-recognized training with practical exposure." },
  { name: "Professional Tourism & Travel Management Course (British Way Hospitality School)", full: "Private Vocational", focus: "Travel Services, Tour Planning, Customer Relations", why: "Fast-track route into tourism and travel careers." },
  { name: "Diploma in Tourism & Travel Management (CSBM)", full: "Private Higher Education", focus: "Tourism Management, Travel Administration, Service Operations", why: "Develops leadership and operational skills for tourism careers." }
];

export const hotelTravelTourismData: CourseDetail[] = [
  { name: "Diploma in Travel & Tourism Management (SLITHM)", full: "Government / Tourism & Hospitality", focus: "Travel Operations, Tourism Management, Tour Planning, Destination Services", why: "Industry-recognized qualification with strong pathways into Sri Lanka's tourism and travel sectors." },
  { name: "National Diploma in Travel & Tourism Management (VTA)", full: "Government Vocational", focus: "Travel Services, Tourism Operations, Customer Service, Tour Coordination", why: "Affordable NVQ pathway with practical industry-focused training." },
  { name: "Travel & Tourism Apprenticeship Programme (NAITA)", full: "Government Vocational", focus: "Tourism Services, Travel Operations, Workplace Training", why: "Earn-and-learn pathway with hands-on experience in the tourism industry." },
  { name: "Diploma in Travel & Tourism Management (CIIHE)", full: "International Hospitality Education", focus: "Tourism Management, Travel Planning, Destination Marketing", why: "Combines tourism knowledge with management and customer service skills." },
  { name: "Diploma in Travel & Tourism Management (Australasian Academy)", full: "International Affiliated", focus: "Travel Industry Operations, Tourism Marketing, Customer Experience", why: "Internationally aligned qualification suitable for global tourism careers." },
  { name: "Diploma in Travel & Tourism Management (William Angliss Institute Sri Lanka)", full: "Australian Qualification", focus: "Travel Services, Tourism Planning, Visitor Experience Management", why: "Internationally recognized qualification with strong overseas career prospects." },
  { name: "Diploma in Travel & Tourism Operations (International Hotel School Sri Lanka)", full: "Private Hospitality Education", focus: "Travel Planning, Tourism Services, Hospitality Operations", why: "Practical industry-focused training aligned with tourism sector needs." },
  { name: "Diploma in Travel & Tourism Management (Aquinas College)", full: "Private Higher Education", focus: "Tourism Administration, Travel Operations, Hospitality Management", why: "Combines tourism studies with business and management knowledge." },
  { name: "Diploma in Travel & Tourism Management (SLICCA)", full: "Private Hospitality & Tourism Institute", focus: "Travel Services, Tourism Operations, Customer Relations", why: "Suitable for students seeking careers in tourism and travel industries." },
  { name: "Travel & Tourism Management Programme (Ocean University)", full: "Government Higher Education", focus: "Tourism Services, Coastal Tourism, Travel Operations", why: "Government-recognized qualification with practical exposure." },
  { name: "Professional Diploma in Travel & Tourism Management (British Way Hospitality School)", full: "Private Vocational", focus: "Travel Planning, Tourism Marketing, Customer Relations", why: "Fast-track route into travel and tourism careers." },
  { name: "Diploma in Travel & Tourism Management (CSBM)", full: "Private Higher Education", focus: "Travel Administration, Tourism Marketing, Service Management", why: "Develops leadership and operational skills for tourism careers." }
];
