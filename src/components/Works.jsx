import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
                onClick={() => window.open(source_code_link, "_blank")}
            >
                <div className="relative w-full h-[230px]">
                    {image !== "project_placeholder" ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    ) : (
                        /* Placeholder for project image */
                        <div className="w-full h-full object-cover rounded-2xl bg-black-200 flex items-center justify-center text-secondary">
                            {name} Image
                        </div>
                    )}

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            {/* Play Store Icon */}
                            <div className="text-white text-[16px]">▶</div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work"); // Note: "work" ID was also used in Experience. Depending on nav links, we might want unique IDs. 
// The navLink says "work", which usually points to Projects. Experience might need a different ID or be part of regular flow.
// Let's check constants: navLinks has "work". 
// Re-checking reference: "Work" usually scrolls to Projects or Experience.
// I'll leave it as "work" for Works (Projects) and maybe change Experience to not have an ID or use "experience" if I add it to nav.
// Actually, strict "Work" usually means Projects. I'll change Experience ID to "experience" in a fix if needed, but for now I'll just change Works to use empty ID or "projects" if I want "work" to point there. 
// Wait, the SectionWrapper adds the ID.
// Experience used "work" in my previous step.
// Works uses "work" here. Duplicate IDs are bad.
// I should change Experience ID to "experience".
