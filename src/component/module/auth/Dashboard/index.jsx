import style from "../../../../styles/components/dashboard.module.css";
import imageLogo from "../../../../assets/img/header-logo-white.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <aside className={`${style.dashboardClasses} ${style.dashboardImages}`}>
      <Link to={`/`}>
        <img
          className="w-[86px] h-6 relative top-[6%] left-[7%]"
          src={imageLogo}
          alt="logo-peworld"
        />
      </Link>
      <div className="w-[400px] lg:w-[360px] xl:w-[456px] h-[280px] relative top-[23%] left-[8%] xl:left-[9.5%]">
        <h1 className="text-hirejob-white text-[33px] xl:text-[44px] font-bold leading-14 xl:leading-[70px]">
          Find exceptional and highly skilled developers in a wide range of
          specialties.
        </h1>
      </div>
    </aside>
  );
};

export default Dashboard;
