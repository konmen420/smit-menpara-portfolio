import { cubicBezier } from "framer-motion";

// Shared easing curves for the portfolio.
export const easeOut = cubicBezier(0.22, 1, 0.36, 1);
export const easeIn = cubicBezier(0.65, 0, 0.35, 1);

// Staggered-reveal variant helper. The `i` parameter is passed via `custom`.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: easeOut },
  }),
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: easeOut },
  }),
};

// Shallow reveal used by card grids and section headings.
export const fadeUpShallow = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: easeOut },
  }),
};