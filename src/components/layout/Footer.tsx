import Button from '../ui/Button';

const Footer = () => {
	return (
		<footer className="">
			<div className="px-4 py-10 space-y-4">
				<p className="text-mobileBody">
					Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas...
					<br /> Reminds you 7 days before. No spam or sharing your address
				</p>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					id=""
					className="px-4 py-2 h-[48px] border border-gray-light bg-white placeholder:text-gray placeholder:text-sm w-full"
				/>
				<Button
					variant="primary"
					className="w-full justify-center"
				>
					REMIND
				</Button>
			</div>
			<div className=""></div>
			<div className=""></div>
			<div className=""></div>
		</footer>
	);
};
export default Footer;
