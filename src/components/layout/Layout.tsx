import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProp = {
	className: string;
	children: ReactNode;
};
const Layout: FC<LayoutProp> = ({ children, className }) => {
	return (
		<>
			<Header font={className} />
			<main className={`className`}>{children}</main>
			<Footer font={className} />
		</>
	);
};
export default Layout;
