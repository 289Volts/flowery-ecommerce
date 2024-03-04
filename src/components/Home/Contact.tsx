import facebook from "@/public/assets/icons/facebook.svg";
import instagram from "@/public/assets/icons/instagram.svg";
import location from "@/public/assets/icons/location.svg";
import phone from "@/public/assets/icons/phone.svg";
import pinterest from "@/public/assets/icons/pinterest.svg";
import telegram from "@/public/assets/icons/telegram.svg";
import twitter from "@/public/assets/icons/twitter.svg";
import contactImg from "@/public/assets/images/Home/contactImg.svg";
import Image from "next/image";
import Action from "../shared/Action";

const Contact = () => {
  return (
    <section className="grid lg:grid-cols-2 text-primary border-b border-b-primary mb-6">
      <div className="relative mb-10 sm:mb-0 lg:col-[2] lg:row-[1] max-h-[900px]">
        <Image
          src={contactImg as string}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="grid sm:grid-cols-2 sm:space-y-0 p-4 sm:p-0 space-y-3 absolute -bottom-10 sm:bottom-0 bg-white w-full lg:border-l lg:border-l-primary border-b border-b-primary lg:border-b-0">
          <h3 className="text-mobileHeading3 sm:text-center sm:text-desktopHeading3 lg:text-mobileHeading3 sm:py-4 sm:px-10 w-full xl:text-desktopHeading3">
            Follow us:
          </h3>
          <div className="sm:border-l sm:border-l-primary sm:px-10 lg:px-4 flex items-center gap-7 lg:gap-2 lg:justify-between xl:justify-center sm:py-4 sm:justify-center w-full">
            <Image src={instagram as string} alt="instagram" className="" />
            <Image src={pinterest as string} alt="pinterest" className="" />
            <Image src={facebook as string} alt="facebook" className="" />
            <Image src={twitter as string} alt="twitter" className="" />
            <Image src={telegram as string} alt="telegram" className="" />
          </div>
        </div>
      </div>
      <div className=" lg:col-[1] lg:row-[1] lg:flex lg:flex-col">
        <div className="py-10 px-4 md:p-20 lg:px-8 lg:py-10 xl:p-20">
          <h2 className="text-mobileHeading2">To Contact Us</h2>
          <p className="text-mobileSubtitle mt-6 mb-4">We will call you back</p>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-x-4">
            <input
              type="tel"
              name="phone"
              placeholder="+380 XX XXX XX XX"
              id=""
              className="px-4 py-2 h-[48px] sm:h-[56px] border border-gray-light bg-white placeholder:text-gray-dark placeholder:text-sm w-full"
            />
            <Action variant="primary" className="w-full justify-center">
              BOOK A CALL
            </Action>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:justify-center lg:h-full">
          <div className="sm:flex sm:flex-col">
            <h3 className="text-mobileHeading3 p-4 border-y border-y-primary md:text-center">
              Phone
            </h3>
            <div className="space-y-2 py-10 px-4 md:flex md:items-center md:justify-center md:flex-col md:py-29 md:px-12 lg:py-20 xl:py-29 lg:px-4 xl:px-12 lg:h-full">
              <Action variant="textIcon">
                <Image src={phone as string} alt="" />
                <span className="">+380980099777</span>
              </Action>
              <Action variant="textIcon">
                <Image src={phone as string} alt="" />
                <span className="">+380980099111</span>
              </Action>
            </div>
          </div>
          <div className="sm:border-l sm:border-l-primary sm:flex sm:flex-col">
            <h3 className="text-mobileHeading3 p-4 border-y border-y-primary md:text-center">
              Address
            </h3>
            <div className="space-y-2 py-10 px-4 md:flex md:items-center md:justify-center md:flex-col md:py-29 md:px-12 lg:py-20 xl:py-29 lg:px-4 xl:px-12 lg:flex-1">
              <p className="text-mobileOverline uppercase">
                Opening hours: 8 to 11 p.m.
              </p>
              <Action variant="textIcon">
                <Image src={location as string} alt="" />
                <span className="text-mobileLink">
                  15/4 Khreshchatyk Street, Kyiv{" "}
                </span>
              </Action>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
