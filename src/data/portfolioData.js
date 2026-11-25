import profileImage from '../assets/profile.jpg';

export const portfolioData = {
  brand: 'Kumkum',
  firstName: 'Kumkum',
  lastName: 'Kumari',
  role: 'Web Developer | Frontend Developer | CSE Student',
  tagline: 'Creating modern, responsive websites with clean design and smooth UI.',
  resumeUrl: 'https://drive.google.com/file/d/1MLF79ZdwUjKeONb1jeM37qXNjuY1_1HQ/view?usp=drive_link',
  profileImage,

  about: {
    summary:
      'I am Kumkum Kumari, a passionate Computer Science Engineering (B.Tech) student and Web Developer with a Diploma in CSE (8.38 CGPA). I enjoy building modern, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React, and Python.',
    highlights: [
      {
        title: 'B.Tech in CSE',
        subtitle: 'Katihar Engineering College (Pursuing)',
        icon: 'graduation',
      },
      {
        title: 'Diploma in CSE',
        subtitle: 'NGP, Patna 13 • 8.38 CGPA',
        icon: 'award',
      },
      {
        title: 'NIELIT Buxar',
        subtitle: '2-Week Technical Internship',
        icon: 'briefcase',
      },
    ],
  },

  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) — CSE',
      institution: 'Katihar Engineering College, Katihar',
      period: 'Pursuing',
      score: 'Computer Science Engineering',
      details:
        'Developing strong foundations in software engineering, web technologies, data structures, and modern application development.',
    },
    {
      degree: 'Diploma — Computer Science Engineering (CSE)',
      institution: 'New Government Polytechnic (NGP), Patna 13',
      period: '2022 – 2025',
      score: 'CGPA: 8.38',
      details:
        'Completed 3-year engineering diploma with strong academic performance and hands-on coding in web development and Python.',
    },
    {
      degree: '10th (Matriculation)',
      institution: 'Mahadeva High School, Khusrupur, Patna',
      period: '2022',
      score: 'Completed',
      details:
        'Built an early foundation in mathematics, science, and computer fundamentals.',
    },
  ],

  skills: [
    { name: 'HTML', level: 90, color: '#E34F26', code: 'HTML5' },
    { name: 'CSS', level: 85, color: '#1572B6', code: 'CSS3' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E', code: 'JS' },
    { name: 'Python', level: 80, color: '#3776AB', code: 'PY' },
    { name: 'React', level: 75, color: '#61DAFB', code: 'JSX' },
  ],

  experience: [
    {
      role: 'Summer / Winter Technical Intern',
      company: 'NIELIT Buxar',
      duration: '22 Dec 2025 – 4 Jan 2026 (2 Weeks)',
      points: [
        'Completed a 2-week intensive technical internship at NIELIT Buxar.',
        'Gained practical exposure to software development concepts, structured coding workflows, and problem-solving.',
        'Worked on hands-on exercises strengthening core web and programming skills.',
      ],
    },
  ],

  projects: [
    {
      title: 'Pocket Campus',
      description:
        'A smart campus assistant application designed to streamline campus activities, class updates, and student notifications in a clean, accessible experience.',
      tech: ['Java', 'Firebase', 'Android Studio', 'XML'],
      github: 'https://github.com/ayush97710/PocketCampus',
      live: null,
    },
  ],

  contact: {
    heading: "Let's work together!",
    description:
      "I'm open to internships, web development collaborations, and exciting frontend projects. Feel free to reach out through the form below!",
    location: 'Patna / Katihar, Bihar, India',
    // Update these with your own details anytime:
    email: '',
    github: 'https://github.com/ayush97710/PocketCampus',
    linkedin: '',
    // Optional: Add a Web3Forms access key to receive contact messages directly in your inbox
    web3FormsKey: '',
  },
};
