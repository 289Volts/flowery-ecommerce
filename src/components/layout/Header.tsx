import cartIcon from '@/public/assets/icons/cart.svg';
import close from '@/public/assets/icons/close.svg';
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
			<div className="mobile grid grid-cols-[1fr_1fr] lg:hidden border-y border-y-black ">
				<Button
					className="w-max border-y-0 p-4"
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
				<div className="absolute inset-0 h-full bg-white border border-black">
					<Button className="w-max col-end-4 border-y-0 p-4">
						<Image
							src={close}
							alt=""
							className=""
						/>
					</Button>
					<nav className="">
						<ul className="flex flex-col">
							<li className="">
								<Link
									href=""
									className="p-5 border-t border-t-black flex w-full"
								>
									Sign in
								</Link>
							</li>
							<li className="">
								<Link
									href=""
									className="p-5 border-t border-t-black flex w-full"
								>
									Shop
								</Link>
							</li>
							<li className="">
								<Link
									href=""
									className="p-5 border-t border-t-black flex w-full"
								>
									Services
								</Link>
							</li>
							<li className="">
								<Link
									href=""
									className="p-5 border-t border-t-black flex w-full"
								>
									Contact
								</Link>
							</li>
							<li className="">
								<Link
									href=""
									className="p-5 border-y border-y-black flex w-full"
								>
									About us
								</Link>
							</li>
							<li className="">
								<Link
									href=""
									className="w-max p-8"
								>
									Shipping & returns
								</Link>
								<Link
									href=""
									className="w-max p-8"
								>
									Terms & condition
								</Link>
								<Link
									href=""
									className="w-max p-8"
								>
									Privacy policy
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Header;
