import { Flex, styled } from "$/jsx";
import AnimatedLoadingButton from "@/components/AnimatedLoadingButton";
import Card from "@/components/Card";
import { RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Title = styled("h1", {
  base: {
    fontFamily: "Instrument Serif",
    fontWeight: "400",
    fontSize: "2rem",
    lineHeight: "1",
  },
});

const Paragraph = styled("p", {
  base: {
    color: "zinc.300",
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.2",
    mb: 2,
  },
});

const RestartIcon = styled(motion.button, {
  base: {
    color: "zinc.300",
    backgroundColor: "zinc.900",
    borderRadius: "100%",
    borderWidth: 0.5,
    borderStyle: "solid",
    padding: 2,
    height: 8,
    width: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "zinc.100/30",
    cursor: "pointer",
  },
});

const AnimatedLoadingButtonShowcase = () => {
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
    <Card>
      <Flex gap={2} alignItems="center" justifyContent="space-between">
        <Title>Animated Loading Button</Title>
        <RestartIcon
          onClick={() => setStatus("idle")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RotateCcw />
        </RestartIcon>
      </Flex>
      <Paragraph>
        Button shrinks into a spinning loader and changes to a check icon if
        success or cross icon if error. Click on the restart button to reset the
        state.
      </Paragraph>
      <AnimatedLoadingButton onClick={onButtonClick} status={status}>
        Click me
      </AnimatedLoadingButton>
    </Card>
  );
};

export default AnimatedLoadingButtonShowcase;
