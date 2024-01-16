import cartIcon from '@/public/assets/icons/cart.svg';
import menu from '@/public/assets/icons/ham-menu.svg';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

const Header = () => {
	return (
		<header className="">
			<div className="desktop hidden lg:grid grid-cols-[1fr_1fr] border-y border-y-black">
				<div className="flex">
					<Link
						href=""
						className="w-max p-8"
					>
						Shop
					</Link>
					<Link
						href=""
						className="w-max p-8 border-x border-x-black"
					>
						Contact
					</Link>
				</div>
				<div className="flex col-end-4">
					<Link
						href=""
						className="w-max p-8 border-x border-x-black"
					>
						Sign in
					</Link>
					<Button
						className="w-max border-y-0 p-8 "
						variant="secondary"
					>
						Cart
					</Button>
				</div>
			</div>
			<div className="mobile grid grid-cols-[1fr_1fr] lg:hidden">
				<Button
					className="w-max border-y-0 p-3 md:p-4"
					variant="secondary"
				>
					<Image
						src={menu}
						alt=""
						className=""
					/>
				</Button>
				<Button
					className="w-max col-end-4 border-y-0 p-4"
					variant="secondary"
				>
					<Image
						src={cartIcon}
						alt=""
						className=""
					/>
				</Button>
			</div>
		</header>
	);
};
export default Header;
