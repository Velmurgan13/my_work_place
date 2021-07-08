import { Link } from "react-router-dom";

const HeaderLink = (props) => {
  const { to, name } = props;
  return (
    <Link className="me-3 py-2 text-dark text-decoration-none" to={to}>
      {name}
    </Link>
  );
};

export default HeaderLink;
