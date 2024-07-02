import errorImage from "../../../public/Images/errorImage.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="error-page">
      <img src={errorImage} alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
