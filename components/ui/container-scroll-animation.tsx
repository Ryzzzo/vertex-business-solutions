"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, useSpring, motion, MotionValue } from "framer-motion";

const springConfig = { stiffness: 100, damping: 30, mass: 1 };

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.85, 0.9] : [1.05, 1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -100]);

  const smoothRotate = useSpring(rotate, springConfig);
  const smoothScale = useSpring(scale, springConfig);
  const smoothTranslate = useSpring(translate, springConfig);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 pt-32 md:pt-48"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={smoothTranslate} titleComponent={titleComponent} />
        <Card rotate={smoothRotate} scale={smoothScale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full rounded-[20px] shadow-2xl overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
