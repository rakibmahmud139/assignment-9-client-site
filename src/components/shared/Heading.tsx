const Heading = ({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) => {
  return (
    <h1 className="text-[25px] pl-40 md:text-[25px] font-quicksand leading-tight font-bold text-[#3d4750] text-start mb-12">
      {title} <span className="text-[#6c7fd8]">{highlight}</span>
    </h1>
  );
};

export default Heading;
