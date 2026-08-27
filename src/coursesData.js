// coursesData.js - Complete course and institute data structure
export const instituteData = {
  name: "Akbar's Academy",
  tagline: "Learn Today, Lead Tomorrow",
  subtitle: "Experience the power of knowledge",
  yearsOfExperience: 25,
  phone: "+91 9769073820",
  whatsapp: "919769073820",
  location: "G/A-4/6, Cheeta Camp, Mumbai",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5894828947987!2d72.8314!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c9c9c9c9c9%3A0x0!2sAkbar's%20Academy!5e0!3m2!1sen!2sin!4v1234567890",
  valueProps: [
    { icon: "Award", text: "Quality Training" },
    { icon: "BookOpen", text: "Practical Knowledge" },
    { icon: "TrendingUp", text: "Better Career" }
  ]
};

export const courses = [
  {
    id: 1,
    index: "01",
    title: "Full Stack Developer",
    category: "Web Development",
    badge: "Professional Course",
    skills: [
      { name: "HTML5", icon: "Code" },
      { name: "CSS3", icon: "Palette" },
      { name: "JavaScript", icon: "Zap" },
      { name: "React", icon: "FastForward" },
      { name: "Node.js", icon: "Database" }
    ],
    description: "Master front-end and back-end technologies. Build real-world web projects.",
    duration: "12 Weeks",
    difficulty: "Intermediate",
    color: "from-red-500 to-red-600"
  },
  {
    id: 2,
    index: "02",
    title: "Cloud Computing",
    category: "Infrastructure",
    badge: "Professional Course",
    skills: [
      { name: "AWS", icon: "Cloud" },
      { name: "Azure", icon: "Globe" },
      { name: "DevOps", icon: "Settings" },
      { name: "Networking", icon: "Network" }
    ],
    description: "Learn cloud storage, server deployment, and cloud architecture fundamentals.",
    duration: "8 Weeks",
    difficulty: "Intermediate",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 3,
    index: "03",
    title: "MSCIT",
    category: "Office Suite",
    badge: "Certification",
    skills: [
      { name: "MS Word", icon: "FileText" },
      { name: "MS Excel", icon: "Grid3x3" },
      { name: "PowerPoint", icon: "Presentation" },
      { name: "Outlook", icon: "Mail" }
    ],
    description: "Master office computing skills with MKCL certification.",
    duration: "6 Weeks",
    difficulty: "Beginner",
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    index: "04",
    title: "IT Infra Pro",
    category: "Infrastructure",
    badge: "Professional Course",
    skills: [
      { name: "Networking", icon: "Network" },
      { name: "Servers", icon: "Server" },
      { name: "Security", icon: "Lock" },
      { name: "Maintenance", icon: "Settings" }
    ],
    description: "Network hardware, server maintenance, IT security, and infrastructure management.",
    duration: "10 Weeks",
    difficulty: "Advanced",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 5,
    index: "05",
    title: "Digital Business Growth",
    category: "Marketing",
    badge: "Professional Course",
    skills: [
      { name: "Social Media", icon: "Share2" },
      { name: "Marketing", icon: "Megaphone" },
      { name: "Analytics", icon: "BarChart3" },
      { name: "Funnel Building", icon: "Funnel" }
    ],
    description: "Social media strategy, funnel building, and performance marketing.",
    duration: "8 Weeks",
    difficulty: "Intermediate",
    color: "from-orange-500 to-orange-600"
  }
];

export const aiMasteryCourse = {
  id: 0,
  title: "AI Mastery Course",
  subtitle: "Master the Tools. Build the Future.",
  badge: "FLAGSHIP PROGRAM",
  tagline: "Celebrating 25 Years of Teaching Excellence in AI Innovation",
  description: "Comprehensive AI training covering ChatGPT, Claude, Midjourney, automation tools, and AI-powered development.",
  categories: [
    {
      title: "AI Intelligence",
      color: "from-green-600 to-green-700",
      icon: "Brain",
      tools: [
        { name: "ChatGPT", logo: "🤖" },
        { name: "Claude", logo: "🔬" },
        { name: "Gemini", logo: "✨" },
        { name: "Perplexity", logo: "🧩" },
        { name: "Relevance AI", logo: "🎯" }
      ]
    },
    {
      title: "Creative AI",
      color: "from-purple-600 to-purple-700",
      icon: "Palette",
      tools: [
        { name: "Midjourney", logo: "🎨" },
        { name: "Krea AI", logo: "🖼️" },
        { name: "Higgsfield", logo: "✏️" },
        { name: "Kling AI", logo: "🎬" }
      ]
    },
    {
      title: "Video & Motion AI",
      color: "from-blue-600 to-blue-700",
      icon: "Video",
      tools: [
        { name: "HeyGen", logo: "🎥" },
        { name: "Runway ML", logo: "🎞️" }
      ]
    },
    {
      title: "Automation & Productivity",
      color: "from-orange-600 to-orange-700",
      icon: "Zap",
      tools: [
        { name: "n8n", logo: "⚙️" },
        { name: "Zapier", logo: "🔗" },
        { name: "Slack", logo: "💬" },
        { name: "Feedly", logo: "📰" }
      ]
    },
    {
      title: "AI Coding & Development",
      color: "from-slate-700 to-slate-800",
      icon: "Code",
      tools: [
        { name: "Cursor", logo: "💻" },
        { name: "GitHub", logo: "🐙" },
        { name: "Codex", logo: "⚡" }
      ]
    }
  ],
  keyFeatures: [
    "Hands-on training with industry-leading AI tools",
    "Expert instructors with 25+ years experience",
    "Real-world project-based learning",
    "Certification upon completion",
    "Job placement assistance"
  ],
  duration: "16 Weeks",
  difficulty: "Intermediate to Advanced",
  price: "₹29,999"
};

export const testimonials = [
  {
    name: "Rajesh Kumar",
    course: "Full Stack Developer",
    rating: 5,
    text: "Excellent training with practical projects. Got a job within 3 months!"
  },
  {
    name: "Priya Sharma",
    course: "AI Mastery",
    rating: 5,
    text: "Best investment in my career. The instructors are incredibly knowledgeable."
  },
  {
    name: "Amit Patel",
    course: "Cloud Computing",
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
