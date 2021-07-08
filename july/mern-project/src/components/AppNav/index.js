import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink";
import { LABELS, PATHS } from "../../config";

const AppNav = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link
          to={PATHS.HOME}
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">{LABELS.home}</span>
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <HeaderLink to={PATHS.LOGIN} name={LABELS.login} />
          <HeaderLink to={PATHS.SIGNUP} name={LABELS.signup} />
          <HeaderLink to={PATHS.PROFILE} name={LABELS.profile} />
          <HeaderLink to={PATHS.LOGOUT} name={LABELS.logout} />
        </nav>
      </div>
    </header>
  );
};

export default AppNav;
