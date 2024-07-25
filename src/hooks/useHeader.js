import { useState, useEffect, useRef } from "react";

export const useHeader = () => {
    const [expanded, setExpanded] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [inputValues, setInputValues] = useState({
        destination: '',
        arrival: '',
        departure: '',
        guests: ''
    });
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 && !collapsed) {
                setCollapsed(true);
                setExpanded(false);
            } else if (window.scrollY <= 50 && collapsed) {
                setCollapsed(false);
            }
        };

        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target) && event.target.tagName !== 'INPUT') {
                setExpanded(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [collapsed, expanded, inputValues]);

    return { expanded, setExpanded, collapsed, setCollapsed, inputValues, setInputValues, headerRef };
};
