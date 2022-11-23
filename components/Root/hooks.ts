import { useEffect, useState } from "react";

export const useScrollPercent = (scrollToFullyReduceHeader: number, scrollThreshord = 0) => {
    const [scrollPercent, setScrollPercent] = useState<number>(0);
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY - scrollThreshord;
                    if (scrollY >= scrollToFullyReduceHeader) {
                        setScrollPercent(1);
                    }
                    else if (scrollY <= 0) {
                        setScrollPercent(0);
                    }
                    else {
                        setScrollPercent(scrollY / scrollToFullyReduceHeader);
                    }
                    ticking = false;
                });
            }
        }
        window.addEventListener('scroll', onScroll, false);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll, false);
    }, []);
    return scrollPercent;
}