import reactNativeIcon from "../assets/ReactNative.png";
import homies from "../assets/homies.png";
import homiesLandlord from "../assets/homieslandlord.png";
import meetndate from "../assets/Meetndate.png";
import wholesome from "../assets/wholesome.png";
import gro from "../assets/arch.png";
import iline from "../assets/iline.png";
import bytelinkup from "../assets/b.avif";
import teamcomputers from "../assets/t.jpeg";
import rkgit from "../assets/R.png";
import archIcon from "../assets/ooo.png";
import dataIcon from "../assets/data.png";
import github from "../assets/github.png";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const services = [
    {
        title: "React Native Developer",
        icon: reactNativeIcon,
    },
    {
        title: "React.js Developer",
        icon: reactNativeIcon,
    },
    {
        title: "Mobile App Architecture",
        icon: archIcon,
    },
    {
        title: "Real-Time Systems",
        icon: dataIcon,
    },
];

export const technologies = [
    {
        name: "React Native",
        icon: "reactnative",
    },
    {
        name: "React JS",
        icon: "reactjs",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "TypeScript",
        icon: "typescript",
    },
    {
        name: "Redux Toolkit",
        icon: "redux",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
    },
    {
        name: "Firebase",
        icon: "firebase",
    },
    {
        name: "Git",
        icon: "git",
    },
    {
        name: "Figma",
        icon: "figma",
    },
    {
        name: "HTML 5",
        icon: "html",
    },
    {
        name: "CSS 3",
        icon: "css",
    },
    {
        name: "Node JS",
        icon: "nodejs",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
    },
    {
        name: "GitHub",
        icon: github,
    },
];

export const experiences = [
    {
        title: "SDE-1 (React Native)",
        company_name: "BYTELINKUP IT SOLUTION",
        icon: bytelinkup,
        iconBg: "#383E56",
        date: "Feb 2024 – Present",
        points: [
            "Built 4+ React Native apps with custom themes, dark mode, and intuitive UI.",
            "Integrated 20+ APIs via Redux Toolkit, AppsFlyer & Razorpay, reducing complexity by 40%.",
            "Added FCM push notifications & WebSocket chat, boosting retention by 40%.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "TEAM COMPUTERS",
        icon: teamcomputers,
        iconBg: "#E6DEDD",
        date: "Feb 2023 – Dec 2023",
        points: [
            "Trained in React Native fundamentals like UI development and component structuring.",
            "Contributed to minor features, UI updates, and improved through code reviews and self-learning.",
        ],
    },
    {
        title: "Bachelor of Technology - CSE",
        company_name: "RAJ KUMAR GEOL INSTITUTE OF TECHNOLOGY",
        icon: rkgit,
        iconBg: "#383E56",
        date: "July 2019 - July 2023",
        points: [
            "Studied Computer Science and Engineering.",
        ],
    },
];

export const projects = [
    {
        name: "HOMIES4U",
        description:
            "Seamless UI in React Native for property management. Features real-time chat, push notifications, and Razorpay payments.",
        tags: [
            {
                name: "react-native",
                color: "red-text-gradient",
            },
            {
                name: "redux",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
        ],
        image: homies,
        source_code_link: "https://play.google.com/store/apps/details?id=com.homiesUserapp&hl=en_IN",
    },
    {
        name: "WHOLESOME",
        description:
            "Health news app with REST API integration reducing load time by 40%. Implemented AppsFlyer for deep linking.",
        tags: [
            {
                name: "react-native",
                color: "red-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "appsflyer",
                color: "pink-text-gradient",
            },
        ],
        image: wholesome,
        source_code_link: "https://play.google.com/store/apps/details?id=com.wholesome.wellness&hl=en_IN",
    },
    {
        name: "HOMIES4ULANDLORD",
        description:
            "Improved landlord workflows by 30%. Features real-time chat, FCM push notifications, and Razorpay.",
        tags: [
            {
                name: "react-native",
                color: "red-text-gradient",
            },
            {
                name: "razorpay",
                color: "green-text-gradient",
            },
            {
                name: "fcm",
                color: "pink-text-gradient",
            },
        ],
        image: homiesLandlord,
        source_code_link: "https://play.google.com/store/apps/details?id=com.homieslandlordapp&hl=en_IN",
    },
    {
        name: "GOINGOUT",
        description:
            "Boosted engagement by 40% using Socket.IO chat, Firebase/Notifee notifications, and calendars. Improved scalability with Redux Toolkit.",
        tags: [
            {
                name: "react-native",
                color: "red-text-gradient",
            },
            {
                name: "socket.io",
                color: "green-text-gradient",
            },
            {
                name: "redux-toolkit",
                color: "blue-text-gradient",
            },
        ],
        image: meetndate,
        source_code_link: "https://play.google.com/store/apps/details?id=com.meetndate",
    },
    {
        name: "GroceryApp",
        description:
            "Real-time driver tracking application with live status updates. Features location tracking, order management, and delivery status in real-time.",
        tags: [
            {
                name: "react-native",
                color: "red-text-gradient",
            },
            {
                name: "google-maps",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "blue-text-gradient",
            },
        ],
        image: gro,
        source_code_link: "https://github.com/",
    },
    {
        name: "iLine",
        description:
            "A Porter-like logistics and delivery app with real-time ride listening using Firestore. Features live tracking, ride matching, and instant updates.",
        tags: [
            {
                name: "react-native",
                color: "red-text-gradient",
            },
            {
                name: "firestore",
                color: "green-text-gradient",
            },
            {
                name: "real-time",
                color: "pink-text-gradient",
            },
        ],
        image: iline,
        source_code_link: "https://play.google.com/store/apps/details?id=com.iline.user&hl=en_IN",
    },
];
