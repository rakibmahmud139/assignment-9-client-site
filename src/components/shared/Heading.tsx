const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-[32px] md:text-5xl leading-tight font-bold text-[#239FA4] text-center mb-12">
      {title}
    </h1>
  );
};

export default Heading;
