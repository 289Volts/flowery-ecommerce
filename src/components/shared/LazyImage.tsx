import Image from "next/image";

type TLazyImageProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
  priority?: boolean;
};
const LazyImage = ({
  src,
  width,
  height,
  className = "w-full",
  alt = "",
  priority,
}: TLazyImageProps) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
      className={className}
    />
  );
};

export default LazyImage;
