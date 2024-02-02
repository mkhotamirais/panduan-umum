import Layouts from "../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "page1_1", text: "page1_1" },
];

const Page1Layout = () => {
  return <Layouts menus={menus} />;
};

export default Page1Layout;
