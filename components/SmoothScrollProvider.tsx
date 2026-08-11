"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type LenisInstance = {
  on?: (event: "scroll", callback: () => void) => void | (() => void);
  raf: (time: number) => void;
  scrollTo?: (
    target: number,
    options?: { duration?: number; force?: boolean; lock?: boolean }
  ) => void;
  destroy: () => void;
};

type LenisConstructor = new (options?: {
  autoRaf?: boolean;
  lerp?: number;
  duration?: number;
  overscroll?: boolean;
  smoothWheel?: boolean;
  syncTouch?: boolean;
}) => LenisInstance;

type LenisModule = {
  default?: LenisConstructor;
  Lenis?: LenisConstructor;
};

const loadLenis = async (): Promise<LenisConstructor | null> => {
  try {
    const importLenis = new Function("return import('lenis')");
    const mod = (await importLenis()) as LenisModule;
    return mod.default ?? mod.Lenis ?? null;
  } catch {
    return null;
  }
};

export default function SmoothScrollProvider() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: LenisInstance | null = null;
    let isActive = true;
    let isSettlingAtEnd = false;
    let settleTimeout: number | null = null;
    let removeLenisScrollListener: (() => void) | null = null;

    gsap.registerPlugin(ScrollTrigger);

    const update = (time: number) => {
      lenis?.raf(time * 1000);
    };

    const destroyLenis = () => {
      gsap.ticker.remove(update);
      removeLenisScrollListener?.();
      removeLenisScrollListener = null;
      if (settleTimeout) {
        window.clearTimeout(settleTimeout);
        settleTimeout = null;
      }
      lenis?.destroy();
      lenis = null;
      isSettlingAtEnd = false;
    };

    const getMaxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const settleAtPageEnd = () => {
      if (!lenis?.scrollTo || isSettlingAtEnd) return;

      const footer = document.querySelector("footer");
      const maxScroll = getMaxScroll();
      const distanceFromEnd = maxScroll - window.scrollY;
      const footerIsVisible = footer
        ? footer.getBoundingClientRect().top <= window.innerHeight
        : false;

      if (!footerIsVisible || distanceFromEnd < 0 || distanceFromEnd > 140) {
        return;
      }

      isSettlingAtEnd = true;
      lenis.scrollTo(maxScroll, { duration: 0.45, force: true, lock: true });

      settleTimeout = window.setTimeout(() => {
        isSettlingAtEnd = false;
        settleTimeout = null;
      }, 500);
    };

    const initLenis = async () => {
      if (mediaQuery.matches || lenis) return;

      const Lenis = await loadLenis();
      if (!isActive || mediaQuery.matches || !Lenis) return;

      lenis = new Lenis({
        autoRaf: false,
        lerp: 0.1,
        duration: 1.2,
        overscroll: false,
        smoothWheel: true,
        syncTouch: false,
      });

      removeLenisScrollListener =
        lenis.on?.("scroll", () => {
          ScrollTrigger.update();
          settleAtPageEnd();
        }) ?? null;
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();
    };

    const handleMotionPreferenceChange = () => {
      if (mediaQuery.matches) {
        destroyLenis();
        return;
      }

      void initLenis();
    };

    void initLenis();
    mediaQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      isActive = false;
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      destroyLenis();
    };
  }, []);

  return null;
}
