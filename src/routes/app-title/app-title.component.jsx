import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const AppTitle = () => {
  return (
    <Fragment>
      <Link to="/">
        <h2 className="app-title">Monster Rolodex</h2>
      </Link>
      <Outlet />
    </Fragment>
  );
};

export default AppTitle;

