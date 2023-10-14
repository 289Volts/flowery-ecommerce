import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Flower Delivery',
	description: 'Flower delivery service to help you speak to those who matter through mother nature'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Layout className={inter.className}>{children}</Layout>
			</body>
		</html>
	);
}
