import React from "react";
import Logo from "../../assets/logo.png";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
			<div className='container p-12 flex justify-between'>
				<span>
					<Image
						width={50}
						height={50}
						src={Logo}
						alt='Logo'
					/>
				</span>
				<p className='text-slate-600'>All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
