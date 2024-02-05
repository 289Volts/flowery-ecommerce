import facebook from "@/public/assets/icons/facebook.svg";
import instagram from "@/public/assets/icons/instagram.svg";
import pinterest from "@/public/assets/icons/pinterest.svg";
import telegram from "@/public/assets/icons/telegram.svg";
import twitter from "@/public/assets/icons/twitter.svg";
import contactImg from "@/public/assets/images/Home/contactImg.svg";
import Image from "next/image";
import Action from "../ui/Action";

const Contact = () => {
  return (
    <section className="grid lg:grid-cols-2 text-primary border-b border-b-primary">
      <div className="relative mb-10">
        <Image src={contactImg as string} alt="" className="w-full" />
        <div className="grid sm:grid-cols-2 sm:space-y-0 p-4 sm:p-0 space-y-3 absolute -bottom-10 sm:bottom-0 bg-white w-full border-b-primary border-b">
          <h3 className="text-mobileHeading3 sm:text-center sm:text-desktopHeading3 sm:py-4 sm:px-10 w-full">
            Follow us:
          </h3>
          <div className="sm:border-l sm:border-l-primary sm:px-10 flex items-center gap-7 sm:py-4 sm:justify-center w-full">
            <Image src={instagram as string} alt="instagram" className="" />
            <Image src={pinterest as string} alt="pinterest" className="" />
            <Image src={facebook as string} alt="facebook" className="" />
            <Image src={twitter as string} alt="twitter" className="" />
            <Image src={telegram as string} alt="telegram" className="" />
          </div>
        </div>
      </div>
      <div className="py-10 px-4">
        <div className="">
          <h2 className="">To Contact Us</h2>
          <p className="">We will call you back</p>
          <input
            type="tel"
            name="phone"
            placeholder="+380 XX XXX XX XX"
            id=""
            className="px-4 py-2 h-[48px] border border-gray-light bg-white placeholder:text-gray-dark placeholder:text-sm w-full md:mt-6"
          />
          <Action variant="primary" className="w-full justify-center ">
            BOOK A CALL
          </Action>
        </div>
        <div className="grid sm:grid-cols-2">
          <div className="">
            <h3 className="text-mobileHeading3">Phone</h3>
            <div className="">
              <span className=""></span>
              <span className=""></span>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
