import { DashboardSC } from "../../components/Dashboard/style";
import TemplateCard from "../../components/TemplateCard";
import UserProfileStamp from "../../components/UserProfileStamp";

const MyPortfolio = () => {
  return (
    <DashboardSC>
      <UserProfileStamp />
      <TemplateCard />
    </DashboardSC>
  );
};

export default MyPortfolio;
