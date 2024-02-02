import Layouts from "../../../components/Layouts";

const menus = [
  { to: "", text: "home" },
  { to: "materi1", text: "materi1" },
];

const Page1_1Layout = () => {
  return <Layouts menus={menus} />;
};

export default Page1_1Layout;
