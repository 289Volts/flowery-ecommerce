import { FC } from 'react';

type HeaderProp = { font: string };

const Header: FC<HeaderProp> = ({ font }) => {
	return <header className={`${font}`}>Hello</header>;
};
export default Header;
