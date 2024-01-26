'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProp {
	className?: string;
	children: ReactNode;
}

const queryClient = new QueryClient();
const Layout: FC<LayoutProp> = ({ children }) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};
export default Layout;
