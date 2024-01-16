import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProp = {
	className?: string;
	children: ReactNode;
};
const Layout: FC<LayoutProp> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="">{children}</main>
			<Footer />
		</>
	);
};
export default Layout;
