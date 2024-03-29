import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Serif, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";


const roboto_slab = Roboto_Slab({
	weight: ['400', '200'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-slab',
})

const roboto_sans = Roboto_Flex({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-sans',
})

const roboto_serif = Roboto_Serif({
	weight: ['100'],
	subsets: ['latin'],
	display: 'swap',
	style: 'italic',
	variable: '--font-roboto-serif',
})

export const metadata: Metadata = {
	title: "JoinT - Corpo e Movimento",
	description: "Corpo e Movimento",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body className={`${roboto_sans.variable} ${roboto_slab.variable} ${roboto_serif.variable}`} data-theme="joinT">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
