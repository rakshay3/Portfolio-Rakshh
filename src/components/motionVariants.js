export const fadeRightVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
export const fadeLeftVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export const zoomInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1 }
  }),
};
