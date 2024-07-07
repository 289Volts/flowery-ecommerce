"use client";

import cartIcon from "@/public/assets/icons/cart.svg";
import close from "@/public/assets/icons/close.svg";
import facebook from "@/public/assets/icons/facebook.svg";
import menu from "@/public/assets/icons/ham-menu.svg";
import instagram from "@/public/assets/icons/instagram.svg";
import pinterest from "@/public/assets/icons/pinterest.svg";
import telegram from "@/public/assets/icons/telegram.svg";
import twitter from "@/public/assets/icons/twitter.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../shared/Action";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="desktop hidden grid-cols-[1fr_1fr] border-b border-b-black lg:grid">
        <div className="flex">
          <Link
            href="/category"
            className="w-max p-7 text-center hover:transition-[background] hover:duration-300 active:bg-white active:text-primary lg:w-[150px] lg:hover:bg-primary lg:hover:text-white xl:w-[180px]"
          >
            Shop
          </Link>
          <Link
            href=""
            className="w-max border-x border-x-black p-7 text-center hover:transition-[background]  hover:duration-300 active:bg-white active:text-primary lg:w-[150px] lg:hover:bg-primary lg:hover:text-white xl:w-[180px]"
          >
            Contact
          </Link>
        </div>
        <div className="col-end-4 flex">
          <Link
            href=""
            className="w-max border-x border-x-black p-7 text-center hover:transition-[background]  hover:duration-300 active:bg-white active:text-primary lg:w-[150px] lg:hover:bg-primary lg:hover:text-white xl:w-[180px]"
          >
            Sign in
          </Link>
          <Button
            className="w-max justify-center border-y-0 border-l-0 p-7 !font-normal capitalize hover:transition-[background] hover:duration-300 active:bg-white active:text-primary lg:w-[150px] lg:hover:bg-primary lg:hover:text-white xl:w-[180px]"
            variant="secondary"
          >
            Cart
          </Button>
        </div>
      </div>
      <div className="mobile grid grid-cols-[1fr_1fr] border-y border-y-black lg:hidden ">
        <Button
          buttonProps={{
            onClick: handleOpenMenu,
            "aria-expanded": open ? "true" : "false",
            "aria-label": "open menu",
          }}
          className="w-max border-y-0 p-4"
          variant="secondary"
        >
          <Image src={menu as string} alt="" className="" />
        </Button>
        <Button className="col-end-4 w-max border-y-0 p-4" variant="secondary">
          <Image src={cartIcon as string} alt="" className="" />
        </Button>
        <div
          className={`drawer fixed inset-0 grid  transition-transform duration-500 sm:grid-cols-2 ${
            !open ? "-translate-x-[110%]" : "drawer-open z-10 translate-x-0"
          }`}
        >
          <div className="flex flex-col border border-black bg-white">
            <Button
              buttonProps={{
                onClick: handleOpenMenu,
                "aria-label": "close menu",
              }}
              className="col-end-4 w-max border-y-0 p-4"
            >
              <Image src={close as string} alt="" className="" />
            </Button>
            <nav className="">
              <ul className="flex flex-col">
                <li className="">
                  <Link
                    onClick={handleOpenMenu}
                    href=""
                    className="flex w-full border-t border-t-black p-5"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={handleOpenMenu}
                    href="/category"
                    className="flex w-full border-t border-t-black p-5"
                  >
                    Shop
                  </Link>
                </li>
                <li className="">
                  <span
                    onClick={handleOpenMenu}
                    className="flex w-full border-t border-t-black p-5"
                  >
                    Services
                  </span>
                </li>
                <li className="">
                  <Link
                    onClick={handleOpenMenu}
                    href=""
                    className="flex w-full border-t border-t-black p-5"
                  >
                    Contact
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={handleOpenMenu}
                    href="/about"
                    className="flex w-full border-y border-y-black p-5"
                  >
                    About us
                  </Link>
                </li>
                <li className="flex flex-col gap-4 p-5">
                  <span onClick={handleOpenMenu} className="w-full">
                    Shipping & returns
                  </span>
                  <span onClick={handleOpenMenu} className="w-full">
                    Terms & condition
                  </span>
                  <span onClick={handleOpenMenu} className="w-full">
                    Privacy policy
                  </span>
                </li>
              </ul>
            </nav>
            <div className="mt-auto flex items-center justify-between border-y border-y-black p-5">
              <Image
                onClick={handleOpenMenu}
                src={instagram as string}
                alt="instagram"
                className=""
              />
              <Image
                onClick={handleOpenMenu}
                src={pinterest as string}
                alt="pinterest"
                className=""
              />
              <Image
                onClick={handleOpenMenu}
                src={facebook as string}
                alt="facebook"
                className=""
              />
              <Image
                onClick={handleOpenMenu}
                src={twitter as string}
                alt="twitter"
                className=""
              />
              <Image
                onClick={handleOpenMenu}
                src={telegram as string}
                alt="telegram"
                className=""
              />
            </div>
          </div>
          <div
            onClick={handleOpenMenu}
            className={`bg-[rgba(210, 210, 215, 0.35)] hidden backdrop-blur-sm sm:block`}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
