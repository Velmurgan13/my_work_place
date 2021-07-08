import { Link } from "react-router-dom";
import { PATHS } from "../../config";

const Footer = () => {
  return (
    <footer className="mt-2">
      <div className="text-center">
        Copyright&copy; All Rights Reserved
        <p>
          Powered By{" "}
          <Link to={PATHS.HOME} className="text-black">
            Subramanyam Batch
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
