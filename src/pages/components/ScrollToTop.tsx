// components/ScrollToTop.tsx
import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed right-3 bottom-3">
            {isVisible &&
                <div onClick={scrollToTop}>
                    <FaArrowCircleUp className="text-4xl text-blue-500 cursor-pointer" />
                </div>}
        </div>
    );
};

export default ScrollToTop;
