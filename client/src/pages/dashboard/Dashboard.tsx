import React from "react";
import { DashboardWrapper } from "./DashboardStyles";
import { MenuIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <header className="flex flex-col justify-start items-start w-full">
        <Link to="/home" className="p-2 rounded-full bg-black">
          <MenuIcon />
        </Link>
      </header>
      <Outlet />
      <Navbar />
    </DashboardWrapper>
  );
};

export default Dashboard;
