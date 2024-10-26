import { useQuery } from "react-query";
import { getAllStays } from "../../../services";

const LandingPage = () => {
  const { isLoading, error, data } = useQuery("qwerty", getAllStays);
  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <div>
      <h1>landing page</h1>
      {console.log(data)}
    </div>
  );
};

export default LandingPage;
