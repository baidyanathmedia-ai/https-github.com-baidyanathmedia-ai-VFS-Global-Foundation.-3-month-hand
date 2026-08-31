import { Course, GalleryItem, Testimonial, Notice, FAQItem } from '../types';

// ============================================================================
// OFFICIAL CONTACT CONFIGURATION (Easily update official contact details here)
// ============================================================================
export const CONTACT_CONFIG = {
  // Placeholder variables - update with authorized official details when provided
  PHONE_NUMBER: "+91 94311 00000", // Update with official phone number (e.g. +91 9XXXXXXXXX)
  PHONE_DISPLAY: "+91 (STPI Deoghar Centre Desk)", 
  EMAIL_ADDRESS: "admissions.deoghar@vfsglobalacademy.org", // Update with official academy email
  WHATSAPP_NUMBER: "+919431100000", // Update with WhatsApp inquiry contact digits
  WHATSAPP_MESSAGE_PREFILL: "Hello VFS Global Academy STPI Deoghar, I would like to inquire about admission for the Certificate Courses.",
  GOOGLE_MAP_LOCATION: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.5749216012484!2d86.64724897536254!3d24.51739597815598!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x39f116503c202029%3A0x6b4f74d0e57ba5c4!2sSoftware%20Technology%20Parks%20of%20India%20(STPI)%20Deoghar!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin",
  GOOGLE_MAPS_LINK: "https://maps.google.com/?q=STPI+Deoghar+Jasidih+Jharkhand",
  
  // Official Centre Address
  ACADEMY_NAME: "VFS Global Academy",
  OPERATED_UNDER: "VFS Global Foundation",
  CENTRE_LOCATION: "STPI, Deoghar (Jasidih), Jharkhand, India",
  FULL_ADDRESS_LINES: [
    "STPI, Deoghar (Jasidih)",
    "Near Swagat Petrol Pump",
    "Manikpur Road, After Railway Over Bridge",
    "Jasidih, Deoghar, Jharkhand, PIN - 814142"
  ],
  OFFICE_TIMINGS: "10:00 AM – 01:00 PM (Monday to Sunday)",
  DOCUMENT_SUBMISSION_TIMING: "10:00 AM to 01:00 PM"
};

// ============================================================================
// LEADERSHIP DETAILS
// ============================================================================
export const LEADERSHIP_INFO = {
  name: "Ramsewak Gunjan",
  role: "Centre Head",
  organization: "VFS Global Foundation",
  location: "STPI, Deoghar (Jasidih)",
  quote: "Empowering young learners through skill development, professional training and communication education.",
  bio: "Committed to fostering vocational excellence and career readiness for students across Deoghar and Jharkhand, bridging theoretical learning with real-world travel, hospitality, and communication industry practices.",
  image: "/src/assets/images/classroom_smart_lecture_1788153752542.jpg"
};

// ============================================================================
// COURSES OFFERED
// ============================================================================
export const COURSES_DATA: Course[] = [
  {
    id: "travel-hospitality",
    title: "Travel & Hospitality Management",
    subtitle: "Learn | Explore | Excel in the Global Travel & Hospitality Industry",
    duration: "3 Months",
    classesPerWeek: "3 Days Per Week",
    timings: "10:00 AM to 01:00 PM (Fri, Sat, Sun)",
    batchSize: 30,
    featured: true,
    description: "Develop comprehensive knowledge and professional skills related to the travel and hospitality industry. Designed to prepare students for career opportunities in hotels, airlines, travel agencies, tourism boards, and guest relationship management.",
    topics: [
      "Introduction to Travel Industry",
      "Hospitality Services & Front Office Operations",
      "Customer Service & Guest Relationship Management",
      "Tourism Basics & Destination Planning",
      "Professional Behaviour & Corporate Etiquette",
      "Career Development & Industry Readiness"
    ],
    careerOutcomes: [
      "Travel Consultant / Executive",
      "Hospitality Customer Service Associate",
      "Front Desk & Guest Relations Officer",
      "Airline / Airport Ground Support Associate",
      "Tour Coordinator & Operations Assistant"
    ],
    image: "/src/assets/images/travel_hospitality_course_1788152513964.jpg"
  },
  {
    id: "language-communication",
    title: "Language & Communication",
    subtitle: "Speak with Confidence | Communicate with Impact | Succeed in Career",
    duration: "3 Months",
    classesPerWeek: "3 Days Per Week",
    timings: "10:00 AM to 01:00 PM (Fri, Sat, Sun)",
    batchSize: 30,
    featured: true,
    description: "Improve professional communication and language skills essential for high-impact personal and career development. Build fluent spoken English, master corporate presentations, ace job interviews, and develop unshakeable professional confidence.",
    topics: [
      "Spoken Communication & Pronunciation Skills",
      "Professional & Business Correspondence",
      "Personality Development & Body Language",
      "Job Interview Preparation & Mock Interviews",
      "Workplace Communication & Team Collaboration",
      "Confidence Building & Stage Presence"
    ],
    careerOutcomes: [
      "Corporate Client Representative",
      "Public Relations & Communications Assistant",
      "Executive Support & Front-Facing Specialist",
      "Customer Experience Representative",
      "Professional Service Coordinator"
    ],
    image: "/src/assets/images/communication_skills_training_1788152527352.jpg"
  }
];

// ============================================================================
// SCHEDULE SPECIFICATIONS
// ============================================================================
export const SCHEDULE_DATA = {
  duration: "3 Months",
  classesPerWeek: "3 Days Per Week",
  timing: "10:00 AM to 01:00 PM",
  days: ["Friday", "Saturday", "Sunday"],
  dailyDuration: "3 Hours",
  totalWeeklyHours: "9 Hours",
  mode: "Offline Classroom Training & Practical Labs at STPI Deoghar"
};

// ============================================================================
// ADMISSION SPECIFICATIONS & REQUIRED DOCUMENTS
// ============================================================================
export const ADMISSION_DATA = {
  status: "Admissions Open for 2026 Batches",
  maxBatchSize: 30,
  currentBatchCapacityPercent: 78,
  seatsRemaining: 7,
  submissionTiming: "10:00 AM to 01:00 PM",
  requiredDocuments: [
    {
      title: "Class 10 Mark Sheet",
      description: "Xerox copy of Class 10 (Matriculation) mark sheet for age and academic verification.",
      mandatory: true
    },
    {
      title: "Class 12 Mark Sheet",
      description: "Xerox copy of Class 12 (Intermediate/Higher Secondary) mark sheet.",
      mandatory: true
    },
    {
      title: "Higher Qualification Mark Sheets",
      description: "Graduation / Diploma mark sheets (if applicable for advanced consideration).",
      mandatory: false
    },
    {
      title: "Aadhaar Card",
      description: "Clear xerox copy of Aadhaar Card for identity and address proof.",
      mandatory: true
    }
  ],
  importantNotice: "Maximum 30 students can be accommodated in one batch. Students beyond the batch capacity may be shifted to the next batch. Early document submission is strongly advised."
};

// ============================================================================
// WHY CHOOSE US
// ============================================================================
export const WHY_CHOOSE_CARDS = [
  {
    title: "Industry-Oriented Training",
    description: "Curriculum designed to align directly with real hospitality, travel operations, and corporate communication expectations.",
    icon: "Briefcase"
  },
  {
    title: "Certificate Courses",
    description: "Prestigious certificate awarded upon successful completion by VFS Global Foundation to validate your skill set.",
    icon: "Award"
  },
  {
    title: "Experienced Trainers",
    description: "Learn from seasoned educators and industry mentors providing personalized guidance and continuous feedback.",
    icon: "Users"
  },
  {
    title: "Practical Learning",
    description: "Hands-on roleplays, simulation exercises, presentations, and group discussions rather than purely theoretical lectures.",
    icon: "BookOpen"
  },
  {
    title: "Communication Skill Development",
    description: "Intensive focus on spoken English fluency, workplace etiquette, body language, and interview presentation skills.",
    icon: "MessageSquare"
  },
  {
    title: "Career-Focused Education",
    description: "Tailored preparation with resume building, mock interviews, and confidence enhancement for global career pathways.",
    icon: "TrendingUp"
  }
];

// ============================================================================
// GALLERY ITEMS (Representing authentic academy photographs across categories)
// ============================================================================
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "STPI Deoghar Grand Convocation & Batch Cohort",
    category: "Campus Life",
    description: "Graduating students and faculty holding official certificates outside the Software Technology Parks of India (STPI) facility in Jasidih, Deoghar.",
    image: "/src/assets/images/stpi_convocation_campus_1788153690739.jpg",
    location: "STPI Deoghar Campus",
    featured: true
  },
  {
    id: "gal-2",
    title: "Official Certificate Distribution Ceremony",
    category: "Certificate Distribution",
    description: "Distinguished guests and Centre Head awarding Certificate of Completion in Travel & Hospitality Management in front of VFS Global Foundation banner.",
    image: "/src/assets/images/vfs_certificate_award_1788153716243.jpg",
    location: "VFS Academy Hall",
    featured: true
  },
  {
    id: "gal-3",
    title: "Smart Classroom Lecture & Interactive Mentorship",
    category: "Training Sessions",
    description: "Students actively engaged during an interactive weekend training session focusing on hospitality management and communication modules with Centre Head.",
    image: "/src/assets/images/classroom_smart_lecture_1788153752542.jpg",
    location: "STPI Smart Training Room",
    featured: true
  },
  {
    id: "gal-4",
    title: "VFS Global Academy Front Reception Desk",
    category: "Campus Life",
    description: "Batch students, centre coordinators, and Centre Head gathered at the official VFS Global Academy front desk at STPI Deoghar.",
    image: "/src/assets/images/vfs_reception_batch_1788153734515.jpg",
    location: "VFS Academy Reception",
    featured: true
  },
  {
    id: "gal-5",
    title: "Student Practical Mock Presentation & Drills",
    category: "Student Activities",
    description: "Students practicing stage confidence, mock interviews, public presentation, and communication drills in front of smart display.",
    image: "/src/assets/images/practical_mock_presentation_1788153769787.jpg",
    location: "Interactive Training Hall",
    featured: true
  },
  {
    id: "gal-6",
    title: "Classroom Cohort & Active Study Session",
    category: "Training Sessions",
    description: "Dedicated weekend batch students in ergonomic chairs with notebooks engaged in communicative English and professional development.",
    image: "/src/assets/images/communication_skills_training_1788152527352.jpg",
    location: "Smart Training Room 2",
    featured: true
  },
  {
    id: "gal-7",
    title: "Travel & Hospitality Practical Workshop",
    category: "Training Sessions",
    description: "Hands-on customer service simulation and front desk guest interaction exercises conducted at the academy.",
    image: "/src/assets/images/travel_hospitality_course_1788152513964.jpg",
    location: "Hospitality Lab",
    featured: false
  },
  {
    id: "gal-8",
    title: "Outdoor Educational Field Study & Excursion",
    category: "Educational Visits",
    description: "Faculty mentor and student cohort on a field study and team-building educational visit in Deoghar.",
    image: "/src/assets/images/outdoor_study_visit_1788152575776.jpg",
    location: "Deoghar Nature Excursion",
    featured: false
  }
];

// ============================================================================
// TESTIMONIALS (Easily editable student feedback)
// ============================================================================
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Nitish Kumar",
    role: "Certified Graduate",
    course: "Travel & Hospitality Management",
    batch: "2025-26 Batch",
    quote: "This training helped me improve my communication and professional confidence. The mentors at STPI Deoghar gave practical insights into tourism and hospitality that gave me the courage to apply for top service roles.",
    rating: 5,
    avatarBg: "bg-blue-600 text-white"
  },
  {
    id: "test-2",
    name: "Megha Kumari",
    role: "Certified Graduate",
    course: "Language & Communication",
    batch: "2025-26 Batch",
    quote: "The course provided valuable knowledge about professional communication and interview readiness. Earlier I was hesitant to speak publicly, but the weekend presentations and mock interviews transformed my fluency.",
    rating: 5,
    avatarBg: "bg-emerald-600 text-white"
  },
  {
    id: "test-3",
    name: "Babli Kumari",
    role: "Certificate Recipient",
    course: "Travel & Hospitality Management",
    batch: "2025-26 Batch",
    quote: "The 3-month weekend schedule was very convenient and the training environment at STPI Jasidih is state-of-the-art. I learned how customer service, front office etiquette, and guest handling work in real companies.",
    rating: 5,
    avatarBg: "bg-indigo-600 text-white"
  },
  {
    id: "test-4",
    name: "Abhimanyu Kumar",
    role: "Certified Graduate",
    course: "Language & Communication",
    batch: "2025-26 Batch",
    quote: "Under the leadership of Centre Head Ramsewak Sir, every student receives personal attention. The practical activities and educational visit made learning engaging and highly memorable.",
    rating: 5,
    avatarBg: "bg-sky-600 text-white"
  }
];

// ============================================================================
// NOTICE BOARD ANNOUNCEMENTS
// ============================================================================
export const NOTICES_DATA: Notice[] = [
  {
    id: "not-1",
    title: "Admissions Open for Certificate Courses (Batch 2026)",
    date: "Current Session",
    category: "Admission",
    isNew: true,
    isUrgent: true,
    summary: "Admissions are currently underway for Travel & Hospitality Management and Language & Communication courses at STPI Deoghar.",
    details: [
      "Seats are strictly limited to 30 candidates per batch to ensure personalized guidance.",
      "Eligible candidates should submit Xerox copies of Class 10, Class 12, Aadhaar card, and higher qualification certificates.",
      "Document submission timing: 10:00 AM to 01:00 PM at the academy centre."
    ]
  },
  {
    id: "not-2",
    title: "Class Schedule & Weekend Timings Notice",
    date: "Updated Weekly",
    category: "Schedule",
    isNew: true,
    isUrgent: false,
    summary: "Regular weekend batches are conducted on Friday, Saturday, and Sunday from 10:00 AM to 01:00 PM.",
    details: [
      "Total daily training duration: 3 Hours (10:00 AM - 01:00 PM).",
      "Punctuality is mandatory. Students must carry their academy notebooks and identity tags.",
      "Practical workshops and mock presentations are scheduled during Sunday sessions."
    ]
  },
  {
    id: "not-3",
    title: "Batch Capacity Limit & Overflow Policy",
    date: "Important Advisory",
    category: "General",
    isNew: false,
    isUrgent: false,
    summary: "A maximum of 30 students can be accommodated in one batch. Students beyond batch capacity will be allotted the upcoming batch.",
    details: [
      "Early document submission guarantees enrollment in the current active batch.",
      "Verification is conducted on a first-come, first-served basis during morning desk hours."
    ]
  }
];

// ============================================================================
// FAQS (All 6 official questions + answers)
// ============================================================================
export const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: "What is the course duration?",
    answer: "The course duration is 3 months for both the Certificate Course in Travel & Hospitality Management and Language & Communication."
  },
  {
    id: 2,
    question: "How many days are classes conducted?",
    answer: "Classes are conducted 3 days per week."
  },
  {
    id: 3,
    question: "What are the general class days?",
    answer: "Generally classes are conducted on Friday, Saturday and Sunday."
  },
  {
    id: 4,
    question: "What is the class timing?",
    answer: "Class timing is 10:00 AM to 01:00 PM (3 hours per training day)."
  },
  {
    id: 5,
    question: "What documents are required for admission?",
    answer: "Required documents include Xerox Copy of Class 10 Mark Sheet, Xerox Copy of Class 12 Mark Sheet, Higher Qualification Mark Sheets (if applicable), and Xerox Copy of Aadhaar Card."
  },
  {
    id: 6,
    question: "How many students can join a batch?",
    answer: "A maximum of 30 students can generally be accommodated in one batch. Students beyond the batch capacity may be shifted to the next batch."
  }
];
