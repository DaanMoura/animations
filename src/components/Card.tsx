import { styled } from "@/../styled-system/jsx";

const Card = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    borderRadius: 8,
    backgroundColor: "zinc.950/50",
    // boxShadow: "0 0 0 1px zinc.950",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "amber.100/12",
    color: "zinc.100",
    width: "100%",
    py: 3,
    px: 6,
  },
});

export default Card;
