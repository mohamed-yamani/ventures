import { useEffect, useRef, useState, type RefObject } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit): [RefObject<HTMLDivElement>, boolean] => {
    const containerRef = useRef<HTMLDivElement | null>(null); // More specific type
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry!.isIntersecting);
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [containerRef, options]);

    return [containerRef, isIntersecting];
};

export default useIntersectionObserver;