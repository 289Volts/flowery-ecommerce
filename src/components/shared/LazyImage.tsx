import Image from "next/image";

type TLazyImageProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
};
const LazyImage = ({
  src,
  width,
  height,
  className = "w-full",
  alt = "",
}: TLazyImageProps) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority
      className={className}
    />
  );
};

export default LazyImage;
