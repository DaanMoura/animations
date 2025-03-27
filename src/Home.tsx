import { Flex, styled } from "$/jsx";
import Aurora from "./components/Aurora/Aurora";
import Noise from "./components/Noise/Noise";
import Magnet from "./components/Magnet/Magnet";
import { motion } from "motion/react";
import AnimatedLoadingButtonShowcase from "./components/showcase/AnimatedLoadingButtonShowcase";

const Title = styled("h1", {
  base: {
    fontFamily: "Instrument Serif",
    fontWeight: "400",
    fontSize: "5rem",
    lineHeight: "1",
    textAlign: "center",
  },
});

const AnimatedLink = styled("a", {
  base: {
    transition: "all 0.2s ease-in-out",
    color: "zinc.100",

    "&:hover": {
      color: "amber.200",
    },
  },
});

const Subtitle = styled(motion.h2, {
  base: {
    fontFamily: "Instrument Serif",
    fontWeight: "400",
    fontSize: "2rem",
    lineHeight: "1.2",
    mt: -3,
    ml: 4,
  },
});

const Home = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      backgroundColor="zinc.950"
      color="zinc.100"
    >
      <Aurora amplitude={1.0} blend={1} speed={0.2} />
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />

      <Flex
        direction="column"
        gap={4}
        width="100%"
        margin={16}
        zIndex={1}
        alignItems="center"
      >
        <Flex direction="column" alignItems="center">
          <Title>Experiments</Title>
          <Magnet magnetStrength={5}>
            <AnimatedLink href="https://github.com/daanmoura" target="_blank">
              <Subtitle whileHover={{ scale: 1.1 }}>by Daniel Moura</Subtitle>
            </AnimatedLink>
          </Magnet>
        </Flex>

        <Flex
          direction="column"
          gap={8}
          minWidth="250px"
          width="40vw"
          maxWidth="400px"
          margin={16}
          zIndex={1}
          alignItems="center"
        >
          <AnimatedLoadingButtonShowcase />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
