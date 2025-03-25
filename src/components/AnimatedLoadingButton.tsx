import { cva } from "$/css";
import { styled } from "$/jsx";
import { Check, CircleX, LoaderCircle } from "lucide-react";
import { HTMLMotionProps, motion } from "motion/react";
const buttonStyle = cva({
  base: {
    outline: "none",
    bg: "slate.900",
    color: "slate.50",
    height: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        },
        open: {
          borderRadius: 8,
          width: "auto",
        },
        success: {
          scale: [1.1, 1],
          transition: {
            scale: {
              duration: 0.35,
              ease: "easeInOut",
            },
          },
        },
        error: {
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
