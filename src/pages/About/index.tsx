import { ReactElement, useEffect } from 'react';
import NProgress from 'nprogress';

function About(): ReactElement {
    NProgress.start();

    useEffect(() => {
        NProgress.done();
    }, []);
    return <div>About</div>;
}

export default About;
