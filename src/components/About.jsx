import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const highlightKeywords = (text) => {
    if (typeof text !== "string") return text;

    const keywords = [
        { regex: /Redux/g, className: "blue-text-gradient" },
        { regex: /Firebase/g, className: "green-text-gradient" },
    ];

    let parts = [{ text, isKeyword: false }];

    keywords.forEach(({ regex, className }) => {
        const newParts = [];
        parts.forEach((part) => {
            if (part.isKeyword) {
                newParts.push(part);
                return;
            }

            const split = part.text.split(regex);
            const matches = part.text.match(regex);

            split.forEach((str, i) => {
                if (str) newParts.push({ text: str, isKeyword: false });
                if (matches && matches[i]) {
                    newParts.push({ text: matches[i], isKeyword: true, className });
                }
            });
        });
        parts = newParts;
    });

    return parts.map((part, i) =>
        part.isKeyword ? (
            <span key={i} className={part.className}>
                {part.text}
            </span>
        ) : (
            part.text
        )
    );
};

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 aspect-square flex justify-evenly items-center flex-col h-full"
            >
                {/* Conditionally render image if icon is a path, otherwise text placeholder */}
                {(typeof icon === 'string' && (icon.includes('/') || icon.includes('.'))) ? (
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                ) : (
                    <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center text-black font-bold">
                        {title[0]}
                    </div>
                )}

                <h3 className="text-white text-[20px] font-bold text-center">
                    {highlightKeywords(title)}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>Overview.</h2>
                </motion.div>

                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    {highlightKeywords(
                        "I am a Software Development Engineer with strong expertise in React Native, React.js, JavaScript, TypeScript, and Redux Toolkit/RTK Query. I have proven experience in building scalable mobile apps with features like real-time chat, push notifications (Firebase), payments (Razorpay), and deep linking (AppsFlyer). Let's work together to create efficient, user-friendly solutions!"
                    )}
                </motion.p>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
