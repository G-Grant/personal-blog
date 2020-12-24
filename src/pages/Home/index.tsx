import { ReactElement, useEffect } from 'react';
import NProgress from 'nprogress';
import TimeLine from '../../components/TimeLine';

import Gitalk from 'gitalk';

import 'gitalk/dist/gitalk.css';
import './index.less';

function Home(): ReactElement {
    NProgress.start();

    useEffect(() => {
        NProgress.done();
    }, []);
    return (
        <div className='home-page'>
            <TimeLine />
        </div>
    );
}

export default Home;
