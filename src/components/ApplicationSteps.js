import React from "react";
import SideNavItem from "./SideNav/SideNavItem";

export default function ApplicationSteps() {
  return (
    <div className="w-1/3">
      <SideNavItem
        link="/dashboard/application/3/personal"
        title="Personal"
        svgIcon={null}
      />
      <SideNavItem
        link="/dashboard/application/3/education"
        title="Education"
        svgIcon={null}
      />
    </div>
  );
}
