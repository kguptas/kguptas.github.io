export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'AI-Powered AR Lab Tour',
        desc: 'An immersive AR platform designed for robotics labs, enhancing visitor and sponsor engagement. ' +
            'It provides a unique way for visitors to lean about the lab by showcasing how the equipment works through ' +
            '3D animations. Users can also interact with the virtual avatar that guides them through the lab and ask questions about the lab and equipment.',
        subdesc:
            'Powered by a Flask API integrated with Azure Speech Services and Gemini LLM, the system features a conversational virtual avatar fine-tuned with ' +
            'lab-specific data to provide accurate, context-aware responses in real-time. The platform was build using Unity and Magic Leap.',
        href: 'https://www.youtube.com/watch?v=95QAw3Thvxo',
        texture: '/textures/project/LabTour.mp4',
        logo: '/assets/robot_logo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity.png',
            },
            {
                id: 2,
                name: 'MagicLeap',
                path: '/assets/MagicLeap.png',
            },
            {
                id: 3,
                name: 'Azure',
                path: '/assets/Azure.png',
            },
            {
                id: 4,
                name: 'Gemini',
                path: '/assets/gemini.png',
            },
        ],
    },
    {
        title: 'VR Sign Language Learning Game',
        desc: 'An educational VR experience built with Unity and the Meta Interaction SDK that teaches American Sign Language (ASL) through immersive gameplay.' +
            'Players perform ASL gestures to cast spells and defeat dragons, blending learning with entertainment.',
        subdesc:
            'Featuring real-time gesture recognition and interactive VR mechanics, the game transforms ASL practice into an engaging learning experience, reinforcing language skills by having players sign in ASL to play.',
        href: 'https://www.youtube.com/watch?v=0puEk6n5GO0',
        texture: '/textures/project/ArcASL.mp4',
        logo: '/assets/vr.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity.png',
            },
            {
                id: 2,
                name: 'Meta',
                path: '/assets/meta.png',
            },
            {
                id: 3,
                name: 'Figma',
                path: '/assets/figma.png',
            },
        ],
    },
    {
        title: 'Questopia - AI Learning Platform',
        desc: 'Questopia is an interactive learning game that motivates students to study by prompting kids to ask questions about class content, which is represented as a graphic for them to explore. ' +
            'Players can earn points and unlock new worlds by asking questions to their favorite characters. The questions and answers ' +
            'are recorded and turned into a quiz for students to test themselves with afterwards. ',
        subdesc:
            'Built during a hackathon with Python, Flask, HTML, CSS, and the Gemini API, Questopia blends a playful design with educational strategy. By encouraging students to ask questions about class content, ' +
            'it encourages them to discover weak points in their knowledge.' +
            'The Gemini LLM is used to generate answers to student questions, and it answers in the voice of a chosen favorite character.',
        href: 'https://devpost.com/software/questopia',
        texture: '/textures/project/Questopia.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Gemini',
                path: '/assets/gemini.png',
            },
            {
                id: 2,
                name: 'Figma',
                path: '/assets/figma.png',
            },
        ],
    },
    {
        title: 'AR Tour Platform for Visit Detroit',
        desc: 'Led a 10 person development team to create an AR-powered tourism platform prototype for Visit Detroit. The app featured location-based AR experiences' +
            'where a virtual tour guide introduces users to historical sites across Detroit, driving cultural exploration and engagement.',
        subdesc:
            'Build with Unity, Niantic Lightship, Google Maps API, and Firebase, the mobile app allowed users to discover significant landmarks and navigate directly via Google Maps.' +
            'Firebase was used so that Visit Detroit could have analytics on which landmarks were most popular.',
        href: '',
        texture: '/textures/project/VisitDetroit.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity.png',
            },
            {
                id: 2,
                name: 'Niantic',
                path: 'assets/niantic.png',
            },
            {
                id: 3,
                name: 'Firebase',
                path: '/assets/firebase.png',
            },
        ],
    },
    {
        title: 'AR Interface for Astronauts (NASA SUITS Challenge)',
        desc: 'An AR interface to assist astronauts on spacewalks by providing real-time mission assistance, guidance, and communication with critical information. ' +
            'Led a team of 4 to integrate an AI chatbot to enable voice commands for hands-free control of the interface. Our platform was selected as one of ten teams to demo at the Johnson Space Center Rock Yard.',
        subdesc:
            'Built using Microsoft MRTK and Unity. Used Azure Cognitive Services to enable voice commands and fine-tuned an AI model hosted on Azure to translate ' +
            'natural language to commands. This allowed for natural interaction with the AR interface during mission-critical moments.',
        href: 'https://www.youtube.com/watch?v=aLqUng8fB_o',
        texture: '/textures/project/VEGA.mp4',
        logo: '/assets/astronaut.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity.png',
            },
            {
                id: 2,
                name: 'Azure',
                path: 'assets/Azure.png',
            },
            {
                id: 3,
                name: 'Microsoft MRTK',
                path: '/assets/mrtk.png',
            },
        ],
    },
    {
        title: 'NeuroScent',
        desc: 'An award-winning XR biofeedback system that integrates vision, scent, and biosensing to promote mental well-being. ' +
            'NeuroScent responds to real-time EEF, heart rate, and muscle activity to deliver adaptive olfactory experiences alongside an immersive VR environment.',
        subdesc:
            'Built for MIT Reality Hack 2025, winner of the Smart Sensing track in the hardware category, this system was made for the Varjo headset and used' +
            'OpenBCI Galea sensors to measure EEF, heart rate, and muscle activity. A custom olfactory display controlled via ESP32 was built using parts from a diffuser from CVS. ' +
            'The platform was build using Unity to and trigger scent diffusion and VR environment changes based on biofeedback. Scents were set to be released when stress was detected.',
        href: 'https://devpost.com/software/neuroscent',
        texture: '/textures/project/Neuroscent.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity.png',
            },
            {
                id: 2,
                name: 'OpenBCI',
                path: '/assets/openbci.png',
            },
            {
                id: 3,
                name: 'Varjo',
                path: '/assets/varjo.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [6, -4, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [7, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-14, 10, 0] : [-25, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -10, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Independent Project: AI Regression Test Generator',
        pos: 'Software Engineer',
        duration: 'May 2025 - Present',
        title: "Developing an AI-driven regression testing platform that automates software validation. The system uses LangGraoh to " +
            "orchestrate stateful agents, generate dicerse function inputs, and verify behavior across code updates. This system is meant to reduce manual QA effort and increase developer productivity.",
        icon: '/assets/person.svg',
        animation: 'victory',
        scale: 0.038,
    },
    {
        id: 2,
        name: 'MAVRIC Lab: AI-Powered AR Tour Platform',
        pos: 'Software Engineer Research Intern',
        duration: 'May 2024 - July 2024',
        title: "Developed an AI-driven AR tour platform for a robotics lab that automates sponsor and visitor experiences to increase engagement and reduce staff workload." +
            "Built a Flask API with Azure Speech Services and Gemini LLm to power a conversational virtual avatar that guides users through the lab and answers questions.",
        icon: '/assets/mavric.svg',
        animation: 'clapping',
        scale: 0.037,
    },
    {
        id: 3,
        name: 'Uniphore',
        pos: 'Software Engineer Intern',
        duration: 'June 2023 - August 2023',
        title: "Fine-tuned machine learning model to detect empathy in Zoom calls, providing feedback to sales teams and improving communication effectiveness with clients. " +
            "Leveraged Scikit-learn for performance analysis and hyperparameter tuning. Evaluated performance of open-source LLMs to find potential for improvements to the system.",
        icon: '/assets/uniphore.png',
        animation: 'salute',
        scale: 0.036,
    },
    {
        id: 4,
        name: 'Alternate Reality Initiative',
        pos: 'Tech Lead and Co-President',
        duration: 'Jan 2022 - Dec 2024',
        title: "Led a team of 10 to build a prototype AR tourism platform for Visit Detroit using Unity, Niantic Lightship, Google Maps API, and Firebase, enabling location-based AR experiences with analytics tracking for engagement. " +
        "Additionally, raised money for and organized the first XR hackathon in the midwest at the University of Michigan, hosting 40 participants.",
        icon: '/assets/ari.svg',
        animation: 'salute',
        scale: 0.035,
    },
];