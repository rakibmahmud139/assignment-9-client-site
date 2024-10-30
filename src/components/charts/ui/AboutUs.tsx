import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import RecentFoundItemsCard from "./ResentFoundItemCard";

const AboutUs = () => {
  return (
    <div className="mt-12">
      <Heading title="Resent Found Item" />

      <div className="md:mx-16 mx-12">
        <RecentFoundItemsCard />
      </div>
    </div>
  );
};

export default AboutUs;
