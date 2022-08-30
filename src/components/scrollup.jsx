// scroll back up to the top of the page when moving to new route

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollUp = (props) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollUp;
