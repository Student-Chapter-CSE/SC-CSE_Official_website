import { useState, useEffect } from 'react';

export const useIntersection = (element, rootMargin) => {
    const [entry, setEntry] = useState();

    const updateEntry = ([entry]) => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = element?.current; // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || !node) return;

        const observer = new IntersectionObserver(updateEntry, { rootMargin });

        observer.observe(node);

        return () => observer.disconnect();
    }, [element?.current, rootMargin]);

    return !!entry?.isIntersecting;
};
