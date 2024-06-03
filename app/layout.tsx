import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "NextJS Optimization",
	description: "JavaScript Resources",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-black-100 font-poppins">{children}</body>
		</html>
	);
}
