import { BsPlus, BsFillChatSquareTextFill, BsGearFill } from "react-icons/bs";
import { FaGithubAlt, FaBitcoin } from "react-icons/fa";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<FaGithubAlt size="28" />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text={"Add a Dog"} />
      <SideBarIcon
        icon={<BsFillChatSquareTextFill size="20" />}
        text={"Text"}
      />
      <SideBarIcon icon={<FaBitcoin size="20" />} text={"Crypto"} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text={"Settings"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "Hello :)" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
