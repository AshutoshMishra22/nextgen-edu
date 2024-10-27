import { FC } from "react";

const NavBar: FC = () => {
  return (
    <div className="flex sticky top-0 justify-between p-4">
      <span>ICON</span>
      <ul className="flex gap-4 flex-nowrap">
        <li>Home</li>
        <li>About</li>
        <li>Admission</li>
      </ul>
    </div>
  );
};
export default NavBar;
