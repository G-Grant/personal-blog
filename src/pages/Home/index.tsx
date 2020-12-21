import { ReactElement } from 'react';
import List from '../../components/List';

import Gitalk from 'gitalk';

import 'gitalk/dist/gitalk.css';
import './index.less';

function Home(): ReactElement {
    return (
        <div className='home-page'>
            Home
            <List />
        </div>
    );
}

export default Home;
