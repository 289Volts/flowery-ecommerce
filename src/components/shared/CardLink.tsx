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
        "flex min-h-[200px] flex-col items-center justify-center p-3 text-center text-primary md:p-6",
        className,
      )}
    >
      <span className="my-auto text-mobileHeading3 capitalize md:text-desktopHeading3">
        {textContent}
      </span>
      <div className="flex items-center gap-1 text-sm font-semibold leading-[120%] md:text-base">
        <span className="">{linkText}</span>
        <Image src={arrRight as string} alt="" className="" />
      </div>
    </Link>
  );
};

export default CardLink;
