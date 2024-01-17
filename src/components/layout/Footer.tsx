import facebook from '@/public/assets/icons/facebook.svg';
import instagram from '@/public/assets/icons/instagram.svg';
import pinterest from '@/public/assets/icons/pinterest.svg';
import telegram from '@/public/assets/icons/telegram.svg';
import twitter from '@/public/assets/icons/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

const Footer = () => {
	return (
		<footer className="border-t border-t-black divide-y divide-black">
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
					className="w-full justify-center "
				>
					REMIND
				</Button>
			</div>
			<div className="px-4 py-10 space-y-4">
				<h2 className="text-mobileHeading5 text-gray">Contact Us</h2>
				<div className="space-y-2">
					<h3 className="text-mobileCaption text-gray">Address</h3>
					<p className="text-mobileLink">15/4 Khreshchatyk Street, Kyiv.</p>
				</div>
				<div className="space-y-2">
					<h3 className="text-mobileCaption text-gray">Phone</h3>
					<p className="text-mobileLink">+380980099777</p>
				</div>
				<div className="space-y-2">
					<h3 className="text-mobileCaption text-gray">General Enquiry</h3>
					<p className="text-mobileLink">Kiev.Florist.Studio@gmail.com</p>
				</div>
				<div className="space-y-4">
					<h3 className="text-mobileCaption text-gray">Follow Us</h3>
					<div className="flex items-center gap-8">
						<Image
							src={instagram}
							alt="instagram"
							className=""
						/>
						<Image
							src={pinterest}
							alt="pinterest"
							className=""
						/>
						<Image
							src={facebook}
							alt="facebook"
							className=""
						/>
						<Image
							src={twitter}
							alt="twitter"
							className=""
						/>
						<Image
							src={telegram}
							alt="telegram"
							className=""
						/>
					</div>
				</div>
			</div>

			<div className="px-4 py-10 space-y-4">
				<div className="space-y-4">
					<h2 className="text-mobileHeading5 text-gray">Shop</h2>
					<ul className="space-y-2 text-mobileLink">
						<li className="">All Products</li>
						<li className="">Fresh Flowers</li>
						<li className="">Dried Flowers</li>
						<li className="">Live Plants</li>
						<li className="">Designer Vases</li>
						<li className="">Aroma Candles</li>
						<li className="">Freshner Diffuser</li>
					</ul>
				</div>
				<div className="space-y-4">
					<h2 className="text-mobileHeading5 text-gray">Service</h2>
					<ul className="space-y-2 text-mobileLink">
						<li className="">Flower Subscription</li>
						<li className="">Wedding & Event Decor</li>
					</ul>
				</div>
			</div>
			<div className="px-4 py-10 space-y-4">
				<div className="space-y-4">
					<h2 className="text-mobileHeading5 text-gray">About Us</h2>
					<ul className="space-y-2 text-mobileLink">
						<li className="">Our Story</li>
						<li className="">
							<Link
								href=""
								className=""
							>
								Blog
							</Link>
						</li>
					</ul>
				</div>
				<div className="">
					<ul className="space-y-2 text-mobileLink">
						<li className="">Shipping & returns</li>
						<li className="">Terms & conditions</li>
						<li className="">Privacy policy</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
