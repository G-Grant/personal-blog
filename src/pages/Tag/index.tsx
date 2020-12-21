import { ReactElement, useEffect } from 'react';
import NProgress from 'nprogress';

function Tag(): ReactElement {
    NProgress.start();

    useEffect(() => {
        NProgress.done();
    }, []);
    return <div>Tag</div>;
}

export default Tag;
