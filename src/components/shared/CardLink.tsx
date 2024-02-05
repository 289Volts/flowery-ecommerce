import arrRight from "@/public/assets/icons/arrRight.svg";
import { cn } from "@/utils/cnUtil";
import Image from "next/image";
import Link from "next/link";

interface CardLinkProps {
  textContent: string;
  href: string;
  linkText: string;
  className?: string;
}
const CardLink = ({
  textContent,
  href,
  linkText,
  className,
}: CardLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex min-h-[200px] flex-col items-center justify-center p-3 text-center text-primary md:p-6 group",
        className,
      )}
    >
      <span className="my-auto text-mobileHeading3 capitalize md:text-desktopHeading3 lg:text-mobileHeading3 xl:text-desktopHeading3">
        {textContent}
      </span>
      <div
        className="h-6 flex items-start gap-1 text-sm font-semibold leading-[120%] md:text-base relative before:w-0 before:block before:absolute before:bg-primary before:h-0.5 -z-[1] before:bottom-0 lg:group-focus-visible:before:w-full lg:group-hover:before:w-full before:transition-dimension before:duration-400 origin-left
      "
      >
        <span className=" ">{linkText}</span>
        <Image src={arrRight as string} alt="" className="" />
      </div>
    </Link>
  );
};

export default CardLink;
