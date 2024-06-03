import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer
			className="text-white-800 flex-between body-text w-full gap-y-10 border-t
		 border-black-400 bg-black-100 px-20 py-1 max-md:flex-col"
		>
			<p>Copyright ©️ 2024 Chey Rose Designs | All Rights Reserved</p>
			<div className="flex gap-x-9">
				<Link href="/terms-of-use">Terms Of Use</Link>
				<Link href="/privacy-policy">Privacy Policy</Link>
			</div>
		</footer>
	);
};

export default Footer;
