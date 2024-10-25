"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import One from "../../assets/1.jpg";
import Two from "../../assets/2.jpg";
import Three from "../../assets/3.jpg";

const projectsData = [
	{
		id: 1,
		title: "Next Js Portfolio Website",
		description:
			"I built this portfolio using Next.js and Tailwind CSS. It features a responsive design that adapts seamlessly to various devices and utilizes server-side rendering for quick loading. The site has a clean, modern interface that effectively highlights my skills and projects.",
		image: One.src,
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "FBA",
		description:
			"FBA is a project showcasing an entrepreneur's journey in FBA. Strapi CMS is used for content and Stripe for payments. I have hands-on experience on implementing elegant UI showcasing proficiency in frontend development.",
		image: Two.src,
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "BSM",
		description:
			"An application that is designed to be the ultimate day to day booking tool for travel professionals. I have hands-on experience in designing and developing it’s user interface.",
		image: Three.src,
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 4,
		title: "React Firebase Template",
		description:
			"In this project, I implemented authentication using Firebase to enable seamless login through Facebook, Google, and Instagram. The integration provides a streamlined and secure way for users to access the application using their preferred social media accounts. This enhances user convenience and improves the overall user experience by simplifying the login process.",
		image: "/images/projects/4.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "Ejbni",
		description:
			"Ejbni is a full stack web and mobile application built in node.js and Next Js. This application is about food reviews in different restaurants. I have hands-on experience in designing and developing it’s user interface and integration in Next Js using Tailwind CSS and RTK Queries while using Redux Toolkit for state management.",
		image: "/images/projects/5.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
				My Projects
			</h2>
			<div className='text-white flex flex-row justify-center items-center gap-2 py-6'></div>
			<ul
				ref={ref}
				className='grid md:grid-cols-3 gap-8 md:gap-12'>
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
