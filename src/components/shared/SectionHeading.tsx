const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="py-10 px-4 sm:p-20 lg:p-10 xl:p-20">
      <h2 className="text-mobileHeading2 uppercase sm:text-desktopHeading2">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;
