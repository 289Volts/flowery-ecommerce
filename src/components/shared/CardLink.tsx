import arrRight from '@/public/assets/icons/arrRight.svg';
import Image from 'next/image';
import Link from 'next/link';

interface CardLinkProps {
	textContent: string;
	href: string;
	linkText: string;
}
const CardLink = ({ textContent, href, linkText }: CardLinkProps) => {
	return (
		<Link
			href={href}
			className="text-primary text-center flex flex-col justify-center items-center min-h-[200px] p-3 md:p-6"
		>
			<span className="text-mobileHeading3 md:text-desktopHeading3 my-auto">{textContent}</span>
			<div className="flex items-center gap-1 text-sm md:text-base font-semibold leading-[120%]">
				<span className="">{linkText}</span>
				<Image
					src={arrRight as string}
					alt=""
					className=""
				/>
			</div>
		</Link>
	);
};

export default CardLink;
