const data = {
    name: "Deepthansh M",
    title: "Software Developer | Backend Engineer | AI Enthusiast",
    location: "India",
    github: "https://github.com/deepthansh-m",
    linkedin: "https://www.linkedin.com/in/deepthansh-m-9b1b13260/",
    email: "deepthanshm@gmail.com",
    about:
        "Enthusiastic Software Developer skilled in Java, Python, and Ruby on Rails, with a strong foundation in software development and backend engineering. Passionate about building scalable applications, optimizing performance, and leveraging AI-driven solutions to solve real-world problems.",

    skills: {
        programming: ["Java", "Python", "Ruby on Rails", "C", "C++"],
        web: ["HTML", "CSS", "JavaScript", "React", "Django", "Flask"],
        databases: ["PostgreSQL", "MySQL", "SQLite"],
        tools: ["Git", "GitHub", "Docker"],
        cloud: ["AWS", "Vultr (deployment)"],
        other: ["Machine Learning", "AI/ML Security", "Data Structures & Algorithms"]
    },

    projects:[
        {
            "name": "Plant Disease Detection",
            "description": "Machine learning-based system to detect plant diseases using leaf photos and recommend pesticides.",
            "tech": ["Python (Programming Language)", "HTML", "Cascading Style Sheets (CSS)", "JavaScript"],
            "link": "https://github.com/deepthansh-m/PlantDiseaseDetection",
            "date": "Sep 2024 - Nov 2024",
            "association": "Associated with New Horizon College of Engineering"
        },
        {
            "name": "Signature Decadence Tracker",
            "description": "Tracks signature changes over time using Siamese Networks for authentication.",
            "tech": ["Python", "Deep Learning"],
            "link": "https://github.com/your-repo",
            "date": null,
            "association": null
        },
        {
            "name": "Disaster Management System",
            "description": "Disaster prediction & resource management with location-based analysis and supply chain tracking.",
            "tech": ["Python (Programming Language)", "JavaScript", "Cascading Style Sheets (CSS)", "HTML", "PostgreSQL"],
            "link": "https://github.com/deepthansh-m/Disaster-management-system",
            "date": "Oct 2024 - Jan 2025",
            "association": "Associated with New Horizon College of Engineering"
        },
        {
            "name": "Whisper Net",
            "description": "Hyper-ephemeral local thoughts-sharing Android app with posts disappearing in 1 hour.",
            "tech": ["Kotlin", "Firebase", "SQLite"],
            "link": "https://github.com/your-repo",
            "date": null,
            "association": null
        },
        {
            "name": "AI-Powered Code Editor",
            "description": "JavaFX/Swing-based code editor with real-time syntax checking, Git integration, and AI-powered snippets.",
            "tech": ["Java", "NLP", "JGit"],
            "link": "https://github.com/your-repo",
            "date": null,
            "association": null
        },
        {
            "name": "Friends list",
            "description": "Ruby on Rails application for managing friends list with CRUD operations and user authentication.",
            "tech": ["Ruby", "Ruby on Rails", "RubyMine", "Web Development"],
            "link": "https://github.com/deepthansh-m/First_rails",
            "date": "Oct 2024 - Oct 2024",
            "association": null
        },
        {
            "name": "Green Credit Program",
            "description": "Java-based environmental credit management system with JavaFX UI and database integration.",
            "tech": ["Java", "JavaFX", "SQL", "Java Database Connectivity (JDBC)"],
            "link": "https://github.com/your-repo",
            "date": "May 2024 - Aug 2024",
            "association": "Associated with New Horizon College of Engineering"
        },
        {
            "name": "Calculator App",
            "description": "Android calculator application with basic arithmetic operations.",
            "tech": ["Kotlin", "Android Studio", "Mobile Application Development", "Android Development"],
            "link": "https://github.com/deepthansh-m/PRODIGY_AD_01",
            "date": "Apr 2024 - Apr 2024",
            "association": null
        },
        {
            "name": "QR Scanner App",
            "description": "Android application for scanning and processing QR codes.",
            "tech": ["Kotlin", "Android Studio", "Mobile Application Development", "Android Development"],
            "link": "https://github.com/deepthansh-m/PRODIGY_AD_05",
            "date": "Apr 2024 - Apr 2024",
            "association": null
        },
        {
            "name": "Stop Watch App",
            "description": "Android stopwatch application with lap timing functionality.",
            "tech": ["Kotlin", "Android Studio", "Mobile Application Development", "Android Development"],
            "link": "https://github.com/deepthansh-m/PRODIGY_AD_03",
            "date": "Apr 2024 - Apr 2024",
            "association": null
        },
        {
            "name": "Tic Tac Toe",
            "description": "Android implementation of classic Tic Tac Toe game.",
            "tech": ["Kotlin", "Android Studio", "Mobile Application Development", "Android Development"],
            "link": "https://github.com/deepthansh-m/PRODIGY_AD_04",
            "date": "Apr 2024 - Apr 2024",
            "association": null
        },
        {
            "name": "To Do List App",
            "description": "Task management Android application for creating and organizing todo lists.",
            "tech": ["Kotlin", "Android Studio", "Mobile Application Development", "Android Development"],
            "link": "https://github.com/deepthansh-m/PRODIGY_AD_02",
            "date": "Apr 2024 - Apr 2024",
            "association": null
        },
        {
            "name": "Quixil Gaming website",
            "description": "Gaming platform website with login system, download sections, and responsive UI.",
            "tech": ["Cascading Style Sheets (CSS)", "HTML", "JavaScript", "Front-End Development"],
            "link": "https://github.com/deepthansh-m/web-development-miniproject-1",
            "date": "Dec 2023 - Jan 2024",
            "association": "Associated with New Horizon College of Engineering"
        },
        {
            "name": "Obstacle Avoiding Robot",
            "description": "Autonomous robot that navigates by detecting and avoiding obstacles using sensors.",
            "tech": ["Arudino", "Embedded C", "Robotics", "Robot Programming"],
            "link": "https://github.com/your-repo",
            "date": "Feb 2023 - Mar 2023",
            "association": "Associated with New Horizon College of Engineering"
        },
        {
            "name": "Sumo Robot",
            "description": "Autonomous combat robot designed for sumo robotics competitions.",
            "tech": ["Arudino", "Embedded C", "Robotics", "Robot Design"],
            "link": "https://github.com/your-repo",
            "date": "Feb 2023 - Mar 2023",
            "association": "Associated with New Horizon College of Engineering"
        }
    ],

    experience: [
        {
            company: "Getgro.io",
            role: "Backend Developer Intern",
            duration: "2024 - 2025",
            details: "Contributed to the development of an application using Ruby, Ruby on Rails, and PostgreSQL, implementing full CRUD functionality and user authentication.\n" +
                "Designed and implemented a chatbot application using Django, developing backend logic to process user queries and generate dynamic responses. Optimized system performance to enhance response accuracy and user experience."
        }
    ],

    education: [
        {
            "school": "New Horizon College of Engineering",
            "degree": "Bachelor of Engineering (B.E.), Computer Science",
            "dates": "Dec 2022 – Present",
            "grade": "CGPA: 9.32",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "C",
                "Embedded C",
                "Java",
                "Data Structures & Algorithms",
                "Linux",
                "Algorithms",
                "Front-End Development"
            ]
        },
        {
            "school": "Vidhya Jyothi PU College",
            "degree": "Karnataka PU Board (2nd PUC), PCMB",
            "dates": "Aug 2020 – Apr 2022",
            "grade": "81%"
        },
        {
            "school": "Christ International School",
            "degree": "ICSE (10th Grade)",
            "dates": "Jun 2009 – Mar 2020",
            "grade": "80%",
            "skills": ["Java"]
        }
    ],

    certifications: [
        {
            "title": "Python for Data Science",
            "issuer": "Coursera",
            "date": "Jul 2024",
            "link": "https://coursera.org/example"
        },
        {
            "title": "NPTEL Course",
            "issuer": "NPTEL",
            "date": "Oct 2024",
            "link": ""
        },
        {
            "title": "Unreal Engine 5: The Complete Beginner's Course",
            "issuer": "Udemy",
            "date": "Sep 2024",
            "link": ""
        },
        {
            "title": "networking in java",
            "issuer": "Great Learning",
            "date": "Sep 2024",
            "link": ""
        },
        {
            "title": "Cybersecurity Essentials",
            "issuer": "Cisco",
            "date": "Aug 2024",
            "link": ""
        },
        {
            "title": "J.P. Morgan - Software Engineering Job Simulation",
            "issuer": "Forage",
            "date": "Aug 2024",
            "link": ""
        },
        {
            "title": "Nvidia GeForceDay",
            "issuer": "NVIDIA",
            "date": "Jul 2024",
            "link": ""
        },
        {
            "title": "Android Development",
            "issuer": "Prodigy InfoTech",
            "date": "Apr 2024",
            "link": ""
        },
        {
            "title": "NPTEL Course",
            "issuer": "NPTEL",
            "date": "Apr 2024",
            "link": ""
        },
        {
            "title": "Hackathon Partcipation",
            "issuer": "New Horizon College of Engineering",
            "date": "Jan 2024",
            "link": ""
        },
        {
            "title": "Introduction to data science",
            "issuer": "Simplilearn",
            "date": "Nov 2023",
            "link": ""
        },
        {
            "title": "Rinex Certificate:Cybersecurity and ethical hacking",
            "issuer": "RineX",
            "date": "Feb 2023",
            "link": ""
        }
    ],

    languages: ["English", "Kannada", "Hindi"]
};

export default data;
