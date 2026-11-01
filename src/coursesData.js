// coursesData.js - Complete course and institute data structure
export const instituteData = {
  name: "Akbar's Academy",
  tagline: "Learn Today, Lead Tomorrow",
  subtitle: "Experience the power of knowledge",
  yearsOfExperience: 25,
  phone: "+91 97690 73820",
  whatsapp: "919769073820",
  location: "G/A-4/6, Cheeta Camp, Mumbai",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5894828947987!2d72.8314!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c9c9c9c9c9%3A0x0!2sAkbar's%20Academy!5e0!3m2!1sen!2sin!4v1234567890",
  valueProps: [
    { icon: "Award", text: "Quality Training" },
    { icon: "BookOpen", text: "Practical Knowledge" },
    { icon: "TrendingUp", text: "Better Career" }
  ]
};

export const productShowcase = {
  label: "Explore Our 5 Product Domains",
  url: "https://product.akbarsacademyit.online/#projects",
  blurb: "Explore our five product domains and discover seven practical products designed to build real-world skills and prepare you for your next career move."
};

export const bootcamp = {
  title: "10-Day Product Production Deployment Accelerator",
  tagline: "Real-World Projects for Your Next Career Move",
  price: "₹999",
  priceNote: "one-time fee for the full 10-day bootcamp",
  url: "https://product.akbarsacademyit.online/",
  highlights: [
    "5 real-world production project tracks: cloud, containers, multi-cloud, enterprise infrastructure and mobile release",
    "100% online, 2 hours a day, 20 learning hours",
    "Session recordings and a completion certificate"
  ]
};

// Course content below mirrors the official brochures in /public/brochures/.
// `featured: true` marks the four hit products that get top billing on the page.
export const courses = [
  {
    id: 1,
    index: "01",
    title: "Digital Marketing with AI",
    category: "Marketing",
    badge: "Beginner to job-ready",
    featured: true,
    skills: [
      { name: "SMM", icon: "Share2" },
      { name: "SEO", icon: "Search" },
      { name: "Google Ads", icon: "Megaphone" },
      { name: "AI Content", icon: "Sparkles" }
    ],
    description: "Promote businesses online, attract customers and create effective marketing campaigns using AI tools.",
    fee: "₹35,000",
    difficulty: "Beginner",
    color: "from-orange-500 to-orange-600",
    brochure: "/brochures/digital-marketing-with-ai.pdf",
    syllabus: [
      { title: "Fundamentals of digital marketing", description: "How online marketing works: channels, audiences, the customer journey and the key terms every marketer uses." },
      { title: "Social Media Marketing (SMM)", description: "Build, grow and engage a brand's audience through planned, consistent social media activity." },
      { title: "Instagram, Facebook, LinkedIn and other social platforms", description: "Platform by platform: content formats, audience behaviour and best practices for each network." },
      { title: "Google Business Profile and local SEO", description: "Help local businesses get discovered on Google Search and Maps by nearby customers." },
      { title: "Search Engine Optimization (SEO)", description: "Improve a website's organic visibility so the right people find it in search results." },
      { title: "Google Ads fundamentals", description: "Understand how paid search campaigns are set up on Google and how they reach customers." },
      { title: "Google Analytics and Search Console", description: "Read website traffic, user behaviour and search performance data to make better decisions." },
      { title: "AI-powered content creation and copywriting", description: "Use AI to research, draft and refine posts, ad copy and marketing content faster." },
      { title: "AI tools for images, captions, reels and marketing ideas", description: "Create visuals, captions, reel concepts and fresh campaign ideas with the help of AI tools." },
      { title: "Content calendars and social media strategy", description: "Plan what to post and when, and turn goals into a clear, repeatable social media strategy." },
      { title: "Lead generation and campaign reporting", description: "Turn attention into enquiries, and report campaign results in a clear, professional way." },
      { title: "Practical project", description: "Create a complete digital marketing strategy for a business, from start to finish." }
    ]
  },
  {
    id: 2,
    index: "02",
    title: "Full Stack Development with AI",
    category: "Web Development",
    badge: "Advanced development track",
    featured: true,
    skills: [
      { name: "HTML/CSS/JS", icon: "Code" },
      { name: "React.js", icon: "FastForward" },
      { name: "Node.js", icon: "Server" },
      { name: "MongoDB/SQL", icon: "Database" }
    ],
    description: "Build modern websites and web applications from the user interface to the backend, database and deployment.",
    fee: "₹60,000",
    difficulty: "Intermediate",
    color: "from-red-500 to-red-600",
    brochure: "/brochures/full-stack-development-with-ai.pdf",
    syllabus: [
      { title: "HTML5 and CSS3", description: "Structure web pages with HTML5 and style them with CSS3: the building blocks of every website." },
      { title: "JavaScript programming", description: "Add logic and interactivity to web pages with the language that runs the modern web." },
      { title: "Responsive website design", description: "Build layouts that look and work well on phones, tablets and desktops." },
      { title: "React.js for frontend development", description: "Create fast, component-based user interfaces with React.js." },
      { title: "Backend development using Node.js and Express.js", description: "Build server-side logic and web services with Node.js and the Express.js framework." },
      { title: "Database fundamentals using MongoDB or SQL", description: "Store, query and manage application data using MongoDB or SQL databases." },
      { title: "APIs and application integration", description: "Connect the frontend, backend and third-party services through APIs." },
      { title: "Git and GitHub", description: "Track code changes, collaborate with others and manage projects using Git and GitHub." },
      { title: "AI-assisted coding, debugging and code explanation", description: "Use AI tools to write code faster, find and fix bugs, and understand unfamiliar code." },
      { title: "Website security fundamentals", description: "Understand the basics of keeping websites, users and data safe." },
      { title: "Website hosting and deployment", description: "Put your websites and applications live on the internet for real users." },
      { title: "Practical project", description: "Build and deploy a complete full-stack web application." }
    ]
  },
  {
    id: 3,
    index: "03",
    title: "Desktop Support with AI",
    category: "IT Support",
    badge: "IT infrastructure foundation",
    skills: [
      { name: "Hardware", icon: "Cpu" },
      { name: "Windows", icon: "Monitor" },
      { name: "Networking", icon: "Network" },
      { name: "Remote Support", icon: "Headphones" }
    ],
    description: "Install, maintain and troubleshoot computers, software, networks and workplace IT systems using AI-assisted support tools.",
    fee: "₹35,000",
    difficulty: "Beginner",
    color: "from-green-500 to-green-600",
    brochure: "/brochures/desktop-support-with-ai.pdf",
    syllabus: [
      { title: "Computer hardware and components", description: "Learn what's inside a computer: processors, memory, storage, motherboards and power supplies." },
      { title: "PC assembly and troubleshooting", description: "Build a PC from its parts, and find and fix common hardware problems." },
      { title: "Windows installation and configuration", description: "Install Windows and set it up correctly for home and workplace use." },
      { title: "Drivers, software installation and updates", description: "Install and update drivers and software, and keep systems current." },
      { title: "User accounts, permissions and system settings", description: "Manage users, control who can access what, and configure system settings." },
      { title: "Basic networking, IP addresses and DNS", description: "Understand how computers connect, and work with IP addresses and DNS." },
      { title: "Printers, peripherals and connectivity troubleshooting", description: "Set up and fix printers, devices and connection problems." },
      { title: "Remote desktop support and ticketing fundamentals", description: "Help users remotely and manage support requests with ticketing systems." },
      { title: "Backup, recovery and basic data protection", description: "Back up important data, recover it when things go wrong and keep it protected." },
      { title: "AI-assisted troubleshooting and technical documentation", description: "Use AI tools to diagnose problems faster and write clear technical documentation." },
      { title: "Introduction to IT service management and help desks", description: "Learn how professional IT support teams and help desks are organised and run." },
      { title: "Practical project", description: "Diagnose and resolve common desktop support issues." }
    ]
  },
  {
    id: 4,
    index: "04",
    title: "Performance Marketing with AI",
    category: "Marketing",
    badge: "Specialized advertising track",
    featured: true,
    skills: [
      { name: "Meta Ads", icon: "Megaphone" },
      { name: "Google Ads", icon: "Search" },
      { name: "Conversions", icon: "Target" },
      { name: "ROAS", icon: "TrendingUp" }
    ],
    description: "Run measurable advertising campaigns focused on leads, sales, conversions and return on advertising spend (ROAS).",
    fee: "₹45,000",
    difficulty: "Intermediate",
    color: "from-pink-500 to-pink-600",
    brochure: "/brochures/performance-marketing-with-ai.pdf",
    syllabus: [
      { title: "Performance marketing fundamentals", description: "How paid marketing works when every campaign is measured by leads, sales and return." },
      { title: "Meta Ads: Facebook and Instagram advertising", description: "Plan, create and manage ad campaigns on Facebook and Instagram." },
      { title: "Google Search and Display advertising", description: "Reach customers through Google Search ads and the Display network." },
      { title: "Campaign objectives, targeting and audience research", description: "Choose the right campaign goal and reach the people most likely to act." },
      { title: "Ad copywriting and creative development with AI", description: "Write ad copy and develop ad creatives faster with the help of AI." },
      { title: "Landing pages and conversion optimization", description: "Build landing pages that turn visitors into leads and customers." },
      { title: "Lead generation and sales funnels", description: "Design funnels that move people from first click to enquiry to sale." },
      { title: "Conversion tracking and campaign measurement", description: "Set up tracking so you know exactly which ads bring results." },
      { title: "Google Analytics and campaign reporting", description: "Analyse campaign data and present results in clear reports." },
      { title: "A/B testing and budget optimization", description: "Test ad variations and move budget to what performs best." },
      { title: "AI-assisted audience insights and creative variations", description: "Use AI to understand audiences and generate creative variations to test." },
      { title: "ROAS, CPA, CPC, CTR and conversion-rate analysis", description: "Read the key performance numbers and use them to improve campaigns." },
      { title: "Practical project", description: "Plan, launch in a test environment, and evaluate an advertising campaign." }
    ]
  },
  {
    id: 5,
    index: "05",
    title: "Cloud Computing with AI",
    category: "Infrastructure",
    badge: "Cloud infrastructure specialization",
    featured: true,
    skills: [
      { name: "AWS / Azure / GCP", icon: "Cloud" },
      { name: "Virtual Machines", icon: "Server" },
      { name: "Deployment", icon: "Settings" },
      { name: "Security", icon: "Lock" }
    ],
    description: "Understand cloud infrastructure, deploy applications and manage cloud-based resources with AI-assisted monitoring and troubleshooting.",
    fee: "₹55,000",
    difficulty: "Intermediate",
    color: "from-blue-400 to-blue-600",
    brochure: "/brochures/cloud-computing-with-ai.pdf",
    syllabus: [
      { title: "Cloud computing fundamentals", description: "What the cloud is, how it works and why businesses rely on it." },
      { title: "IaaS, PaaS and SaaS", description: "Understand the three main cloud service models and when each is used." },
      { title: "Public, private and hybrid cloud concepts", description: "Compare public, private and hybrid clouds and how organisations combine them." },
      { title: "Introduction to AWS, Microsoft Azure or Google Cloud", description: "Get started with a leading cloud platform: AWS, Microsoft Azure or Google Cloud." },
      { title: "Virtual machines and cloud storage", description: "Create virtual machines and store data using cloud storage services." },
      { title: "Networking and identity management fundamentals", description: "Connect cloud resources and control who can access them." },
      { title: "Cloud security and access permissions", description: "Protect cloud resources with the right security settings and permissions." },
      { title: "Application deployment basics", description: "Deploy applications to the cloud so users can reach them." },
      { title: "Monitoring, logging and troubleshooting", description: "Watch cloud systems, read logs and fix problems when they appear." },
      { title: "AI-assisted cloud operations and documentation", description: "Use AI tools to support cloud operations and write clear documentation." },
      { title: "Cost management and resource optimization", description: "Keep cloud spending under control and use resources efficiently." },
      { title: "Practical project", description: "Deploy and monitor a basic application in a cloud environment." }
    ]
  },
  {
    id: 6,
    index: "06",
    title: "Cybersecurity with AI",
    category: "Security",
    badge: "Premium technical specialization",
    skills: [
      { name: "Network Security", icon: "Network" },
      { name: "SIEM", icon: "Shield" },
      { name: "Incident Response", icon: "AlertTriangle" },
      { name: "AI Threats", icon: "Sparkles" }
    ],
    description: "Protect systems, identify security risks and understand modern cyber threats using AI-assisted security analysis.",
    fee: "₹70,000",
    difficulty: "Advanced",
    color: "from-purple-500 to-purple-600",
    brochure: "/brochures/cybersecurity-with-ai.pdf",
    syllabus: [
      { title: "Cybersecurity fundamentals and security principles", description: "The core ideas of cybersecurity, and the principles used to keep systems and data safe." },
      { title: "Common cyberattacks, phishing and social engineering", description: "Recognise the most common attacks, and how phishing and social engineering trick people." },
      { title: "Network security and firewall fundamentals", description: "Protect networks and control traffic with firewalls." },
      { title: "Operating system and endpoint security", description: "Secure computers, operating systems and devices against threats." },
      { title: "Password security, MFA and access control", description: "Strong passwords, multi-factor authentication and controlling who has access." },
      { title: "Security monitoring and log analysis", description: "Watch systems for suspicious activity and investigate security logs." },
      { title: "Vulnerability assessment fundamentals", description: "Find and assess weaknesses in systems before attackers do." },
      { title: "Introduction to SIEM and incident response", description: "Use SIEM tools to spot incidents, and follow a clear process to respond." },
      { title: "AI-assisted threat detection and security reporting", description: "Use AI tools to help detect threats and write clear security reports." },
      { title: "Malware awareness and safe investigation practices", description: "Understand malware and investigate it safely in a controlled environment." },
      { title: "Data privacy, risk management and ethical responsibilities", description: "Protect personal data, manage risk and act ethically as a security professional." },
      { title: "Practical project", description: "Analyse sample security logs and prepare an incident report in a controlled lab." }
    ]
  }
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    course: "Full Stack Development with AI",
    rating: 5,
    text: "Excellent training with practical projects. Got a job within 3 months!"
  },
  {
    name: "Priya Sharma",
    course: "Digital Marketing with AI",
    rating: 5,
    text: "Best investment in my career. The instructors are incredibly knowledgeable."
  },
  {
    name: "Amit Patel",
    course: "Cloud Computing with AI",
    rating: 5,
    text: "Industry-relevant content with hands-on labs. Highly recommended!"
  }
];

export const faqs = [
  {
    question: "What are the prerequisites for Full Stack Developer course?",
    answer: "Basic knowledge of HTML, CSS, and JavaScript. No prior experience needed if you're willing to learn quickly."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes! We provide 100% job placement assistance with our partner companies."
  },
  {
    question: "What is the duration of each course?",
    answer: "Course duration ranges from 6-16 weeks depending on the program. Check individual course pages for details."
  },
  {
    question: "Are courses available online or offline?",
    answer: "We offer both online and offline classes with flexible scheduling options."
  },
  {
    question: "What payment options are available?",
    answer: "We accept cash, bank transfer, and installment plans. Contact us for more details."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course."
  }
];
