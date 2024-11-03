import { Result } from "antd";

const Error500 = () => {
  return (
    <Result
      status="500"
      title="Something went wrong"
      subTitle="Sorry, the server is currently unavailable. Please try again later."
    />
  );
};

export default Error500;
