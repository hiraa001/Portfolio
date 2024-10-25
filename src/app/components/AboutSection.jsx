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
				<li>JavaScript ES6</li>
				<li>React.js, Next.js, Node.js, Express.js</li>
				<li>Tailwind CSS, Bootstrap</li>
				<li>Mongo Db, Firebase, PostgreSQL</li>
				<li>C++, Java, Python</li>
				<li>Git, Github</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className='list-none pl-2 '>
				<li>Bachelors of Science in Software Engineering</li>
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
						I&apos;m a skilled Frontend React and Next Js developer known for
						crafting dynamic and intuitive user interfaces. With expertise in
						modern web technologies, I excel in creating responsive layouts and
						optimizing performance. I collaborate closely with teams to deliver
						polished, scalable solutions that exceed expectations. Check out my
						portfolio for examples of my work and let&apos;s bring your ideas to
						life!
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
