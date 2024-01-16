import cartIcon from '@/public/assets/icons/cart.svg';
import menu from '@/public/assets/icons/ham-menu.svg';
import Image from 'next/image';
import Button from '../ui/Button';

const Header = () => {
	return (
		<header className="">
			<div className="desktop hidden lg:block">
				<Button variant="secondary">Shop</Button>
				<Button variant="secondary">Shop</Button>
				<Button variant="secondary">Sign in</Button>
				<Button variant="secondary">Cart</Button>
			</div>
			<div className="tablet hidden md:block lg:hidden">
				<Button variant="secondary">
					<Image
						src={menu}
						alt=""
						className=""
					/>
				</Button>
				<Button variant="secondary">
					<Image
						src={cartIcon}
						alt=""
						className=""
					/>
				</Button>
			</div>
			<div className="mobile grid grid-cols-[1fr_1fr] md:hidden border-y border-y-black">
				<Button
					className="w-max border-y-0"
					variant="secondary"
				>
					<Image
						src={menu}
						alt=""
						className=""
					/>
				</Button>
				<Button
					className="w-max col-end-4 border-y-0"
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
