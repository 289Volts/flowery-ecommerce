import { FC } from 'react';

type FooterProps = {
	font: string;
};

const Footer: FC<FooterProps> = ({ font }) => {
	return <footer className={`${font}`}>World</footer>;
};
export default Footer;
