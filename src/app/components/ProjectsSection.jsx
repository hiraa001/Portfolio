"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import One from "../../assets/1.jpg";
import Two from "../../assets/2.jpg";
import Three from "../../assets/3.jpg";
import Four from "../../assets/4.jpg";
import Five from "../../assets/5.jpg";

const projectsData = [
	{
		id: 1,
		title: "MagicAi Object Remover",
		description:
			"Magic AI Object Remover is an advanced object removal app that leverages EfficientDet for precise object detection and a REST API for seamless object removal. It also includes manual removal tools like brush, lasso, and rectangle for greater control. Integrated with Firebase, it offers real-time analytics, crash reporting via Crashlytics, and Remote Config to enhance user experience and app stability.",
		image: One.src,
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl:
			"https://play.google.com/store/apps/details?id=com.photo.object.remover.magic.ai.remove.objects&hl=en_US&gl=US",
	},
	{
		id: 2,
		title: "Backify",
		description:
			"Backify is an AI-powered background remover app that utilizes ML Kit's segmenter to effortlessly remove backgrounds from images with precision. Integrated with Firebase for enhanced performance, it includes features like analytics, crash reporting via Crashlytics, and Remote Config for real-time updates, ensuring a smooth and reliable user experience.",
		image: Two.src,
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl:
			"https://play.google.com/store/apps/details?id=com.photo.background.remover.eraser&hl=en_US&gl=US",
	},
	{
		id: 3,
		title: "Quran for Life",
		description:
			"The Quran App provides a comprehensive experience of the Holy Quran, accessible offline and online, delivering high-quality recitations, multiple translations, tafsir, automatic prayer times, a Qibla finder, a Tasbeeh counter, and customizable font sizes and themes—all in one user-friendly interface. Advanced search options allow easy verse lookup, enhancing the spiritual connection.",
		image: Three.src,
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl:
			"https://play.google.com/store/apps/details?id=com.Holy.Quranmajeed.Qiblafinder.Islamic.prayer.times",
	},
	{
		id: 4,
		title: "Enhancer",
		description:
			"Photo Enhancer is a powerful tool for improving image quality, providing users with enhanced clarity and vibrant details. Leveraging Firebase integration, the app includes analytics, crash reporting via Crashlytics, and Remote Config for optimized performance and real-time updates. It’s designed to elevate your photos with ease and precision.",
		image: Four.src,
		tag: ["All", "Mob"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "AR based Footwear Purchase Application (Final Year Project)",
		description:
			"This mobile application uses Augmented Reality (AR) to enhance the shopping experience by allowing users to view shoes and place them on their feet through their mobile camera. Machine learning algorithms predict foot size, helping to reduce return rates and improve overall fit accuracy.",
		image: Five.src,
		tag: ["All", "Mob"],
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
