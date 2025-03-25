import { Flex } from "$/jsx";
import AnimatedLoadingButton from "./components/AnimatedLoadingButton";
import { useState } from "react";

const Home = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onButtonClick = () => {
    setStatus("loading");
    setTimeout(() => {
      if (Math.random() < 2 / 3) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 2000);
  };

  return (
    <Flex direction="column" gap={4} width="250px" margin={16}>
      <h1>Animated button</h1>
      <AnimatedLoadingButton onClick={onButtonClick} status={status}>
        Click me
      </AnimatedLoadingButton>
    </Flex>
  );
};

export default Home;
