import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProp {
	className?: string;
	children: ReactNode;
}
const Layout: FC<LayoutProp> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</>
	);
};
export default Layout;
