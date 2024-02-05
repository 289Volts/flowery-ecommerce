import facebook from "@/public/assets/icons/facebook.svg";
import instagram from "@/public/assets/icons/instagram.svg";
import pinterest from "@/public/assets/icons/pinterest.svg";
import telegram from "@/public/assets/icons/telegram.svg";
import twitter from "@/public/assets/icons/twitter.svg";
import Image from "next/image";
import Link from "next/link";
import Action from "../ui/Action";

const Footer = () => {
  return (
    <footer className="border-t border-t-primary divide-x divide-x-primary divide-y divide-primary md:grid grid-cols-2 xl:grid-cols-4">
      <div className="px-4 py-10 md:px-10 space-y-4 text-pretty">
        <p className="text-mobileBody">
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas...
          <br /> Reminds you 7 days before. No spam or sharing your address
        </p>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          id=""
          className="px-4 py-2 h-[48px] border border-gray-light bg-white placeholder:text-gray-dark placeholder:text-sm w-full md:mt-6"
        />
        <Action variant="primary" className="w-full justify-center ">
          REMIND
        </Action>
      </div>
      <div className="px-4 py-10 md:px-10 space-y-4 md:space-y-6 md:!border-t-0">
        <h2 className="text-mobileHeading5 text-gray-dark md:text-desktopSubtitle">
          Contact Us
        </h2>
        <div className="space-y-2">
          <h3 className="text-mobileCaption text-gray-dark md:text-desktopCaption">
            Address
          </h3>
          <p className="text-mobileLink md:text-desktopLink">
            15/4 Khreshchatyk Street, Kyiv.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-mobileCaption text-gray-dark md:text-desktopCaption">
            Phone
          </h3>
          <p className="text-mobileLink md:text-desktopLink">+380980099777</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-mobileCaption text-gray-dark md:text-desktopCaption">
            General Enquiry
          </h3>
          <p className="text-mobileLink md:text-desktopLink break-all">
            Kiev.Florist.Studio@gmail.com
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-mobileCaption text-gray-dark">Follow Us</h3>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Image src={instagram as string} alt="instagram" className="" />
            <Image src={pinterest as string} alt="pinterest" className="" />
            <Image src={facebook as string} alt="facebook" className="" />
            <Image src={twitter as string} alt="twitter" className="" />
            <Image src={telegram as string} alt="telegram" className="" />
          </div>
        </div>
      </div>
      <div className="px-4 py-10 md:px-10 space-y-4 md:space-y-6 xl:!border-t-0">
        <div className="space-y-4">
          <h2 className="text-mobileHeading5 text-gray-dark">Shop</h2>
          <ul className="space-y-2 text-mobileLink md:text-desktopLink">
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
          <h2 className="text-mobileHeading5 text-gray-dark">Service</h2>
          <ul className="space-y-2 text-mobileLink md:text-desktopLink">
            <li className="">Flower Subscription</li>
            <li className="">Wedding & Event Decor</li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-10 md:px-10 space-y-4 md:space-y-6 xl:!border-t-0">
        <div className="space-y-4">
          <h2 className="text-mobileHeading5 text-gray-dark">About Us</h2>
          <ul className="space-y-2 text-mobileLink md:text-desktopLink">
            <li className="">Our Story</li>
            <li className="">
              <Link href="" className="">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="space-y-2 text-mobileLink md:text-desktopLink">
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
