"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className='list-disc pl-2'>
				<li>Flutter</li>
				<li>Java</li>
				<li>Kotlin, Jetpack Compose</li>
				<li>Rest API's</li>
				<li>Firebase, Mongo Db</li>
				<li>C++, Python</li>
				<li>Git, Github</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className='list-none pl-2 '>
				<li>Bachelors of Science in Computer Science</li>
				<li>National University of Modern Languages</li>
				<li>Rawalpindi, Pakistan</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section
			className='text-white'
			id='about'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about-image.png'
					alt='image'
					width={500}
					height={500}
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base lg:text-lg'>
						I am a mobile app developer with a strong passion for crafting
						high-quality, user-focused applications. With experience across both
						cross-platform and native technologies, I thrive on transforming
						ideas into seamless digital experiences that make an impact. I’m
						always eager to explore new advancements in tech, constantly
						learning and adapting to build innovative, efficient solutions.
						Whether collaborating within a team or leading a project, I bring
						dedication, creativity, and a commitment to excellence in every app
						I develop.
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}>
							{" "}
							Education{" "}
						</TabButton>
					</div>
					<div className='mt-8'>
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
