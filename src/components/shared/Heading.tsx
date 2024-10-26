const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-[36px] md:text-[40px] leading-tight font-bold text-[#32c2c7] text-center mb-12">
      {title}
    </h1>
  );
};

export default Heading;
