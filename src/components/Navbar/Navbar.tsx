import React from "react";
import navbarBG from "../../assets/images/navbar/nabvar-bg.png";
import { NavbarActive, NavbarWrapper, NavItemWrapper } from "./NavbarStyle";
import {
  Grid,
  Home,
  //   MoreVertical,
  Package,
  ShoppingBag,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <img src={navbarBG} alt="navbg" />
      <NavItemWrapper>
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Grid size={20} />} label="Category" />
        <NavItem icon={<ShoppingBag size={20} />} label="Cart" />
        <NavItem icon={<Package size={20} />} label="Orders" />
        <NavItem icon={<User size={20} />} label="Profile" />
        {/* <NavItem icon={<MoreVertical size={20} />} label="Options" /> */}
      </NavItemWrapper>
    </NavbarWrapper>
  );
};

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const normalizedLabel = `/${label.toLowerCase()}`;
  return (
    <Link
      to={normalizedLabel}
      className={`flex flex-col items-center relative px-4 ${
        normalizedLabel === location.pathname ? "text-black" : "text-slate-700"
      }`}
    >
      {normalizedLabel === location.pathname && <NavbarActive />}
      {icon}
      <span className="text-[10px]">{label}</span>
    </Link>
  );
}

export default Navbar;
