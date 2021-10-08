import { FC } from "react";
import Error from "next/error";

const NotFound: FC = () => {
  // Opinionated: do not record an exception in Sentry for 404
  return <Error statusCode={404} />;
};

export default NotFound;
