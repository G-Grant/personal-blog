import { ReactElement, useEffect } from 'react';
import NProgress from 'nprogress';
import List from '../../components/List';

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
            Home
            <List />
        </div>
    );
}

export default Home;
