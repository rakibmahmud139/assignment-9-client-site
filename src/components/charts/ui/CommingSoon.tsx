import { Car, Dog, Wallet, Watch } from "lucide-react";

// Data for the category cards for easy management
const categoryData = [
  {
    icon: <Car size={32} className="text-red-400" />,
    title: "Car",
    items: "485 items",
    bgColor: "bg-red-50",
  },
  {
    icon: <Dog size={32} className="text-green-400" />,
    title: "Dog",
    items: "251 items",
    bgColor: "bg-green-50",
  },
  {
    icon: <Wallet size={32} className="text-purple-400" />,
    title: "Wallet",
    items: "49 items",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Watch size={32} className="text-yellow-400" />,
    title: "Watch",
    items: "8 items",
    bgColor: "bg-yellow-50",
  },
];

// Reusable Card Component
const CategoryCard = ({
  icon,
  title,
  items,
  bgColor,
}: {
  icon: any;
  title: string;
  items?: string;
  bgColor: string;
}) => (
  <div
    className={`flex flex-col items-center justify-center p-6 rounded-2xl w-36 h-36 transition-transform hover:scale-105 ${bgColor}`}
  >
    <div className="mb-3">{icon}</div>
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500">{items}</p>
  </div>
);

// Main Section Component
const ExploreSection = () => {
  return (
    <div className="py-12 px-40 mt-20">
      <div className="lg:flex items-center gap-6">
        {/* Left Side: Image */}
        <div className="relative overflow-hidden rounded-[30px] ">
          <img
            src="/lost.jpg" // Make sure this image is in your /public folder
            alt="Woman shopping for groceries"
            className=" object-cover rounded-[30px] h-[526px] w-[526px]"
          />
          <div className="absolute top-5 right-10 bg-opacity-60 bg-[#6c7fd8] text-white text-sm font-bold font-quicksand px-4 py-2 rounded-[30px]">
            Lost
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-center lg:items-start h-[526px] w-[526px]">
          <h2 className="text-[124px] font-bold leading-[1.2] text-white opacity-15 [text-shadow:1px_1px_#111a24,_-1px_1px_#111a24,_1px_-1px_#111a24,_-1px_-1px_#111a24]">
            Explore Categories
          </h2>
          <div
            className="flex flex-wrap justify-center mt-[56px] lg:justify-start gap-4
                   ml-[-150px] pt-[30px] pl-[30px] bg-white relative rounded-tl-[30px]
                   max-w-4xl mx-auto"
            style={{ width: "calc(100% + 150px)" }}
          >
            {categoryData.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                bgColor={category.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
