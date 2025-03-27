import { cva } from "@/../styled-system/css";
import { styled } from "@/../styled-system/jsx";
import { Check, CircleX, LoaderCircle } from "lucide-react";
import { HTMLMotionProps, motion } from "motion/react";

const buttonStyle = cva({
  base: {
    outline: "none",
    bg: "zinc.100",
    color: "zinc.900",
    height: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
});

const SpinningLoaderCircle = styled(LoaderCircle, {
  base: {
    animation: "spin 1s linear infinite",
  },
});

interface AnimatedLoadingButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  status: "idle" | "loading" | "success" | "error";
}

const AnimatedLoadingButton = ({
  status,
  children,
  ...props
}: AnimatedLoadingButtonProps) => {
  return (
    <motion.button
      {...props}
      className={buttonStyle({ collapsed: status !== "idle" })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={status !== "idle" ? "collapsed" : "open"}
      transition={{
        type: "spring",
        bounce: 0.25,
        visualDuration: 0.25,
      }}
      animate={[status !== "idle" ? "collapsed" : "open", status]}
      variants={{
        collapsed: {
          borderRadius: 100,
          width: 32,
          paddingLeft: 0,
          paddingRight: 0,
        },
        open: {
          borderRadius: 8,
          width: 200,
        },
        success: {
          pointerEvents: "none",
          scale: [1.1, 1],
          transition: {
            scale: {
              duration: 0.35,
              ease: "easeInOut",
            },
          },
        },
        error: {
          pointerEvents: "none",
          scale: [1.2, 1, 1.2, 1],
          transition: {
            scale: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        },
      }}
    >
      {status === "idle" && children}
      {status === "loading" && <SpinningLoaderCircle />}
      {status === "success" && <Check />}
      {status === "error" && <CircleX />}
    </motion.button>
  );
};

export default AnimatedLoadingButton;
