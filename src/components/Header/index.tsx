import { memo, ReactElement, useEffect } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';

import './index.less';

interface INavItem {
    to: string;
    title: string;
    exact?: boolean;
}

const navOptions: INavItem[] = [
    {
        to: '/',
        title: '首页',
        exact: true,
    },
    {
        to: '/tag',
        title: '标签',
    },
    {
        to: '/about',
        title: '关于我',
    },
];

function Header(): ReactElement {
    const history = useHistory();
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const unListen = history.listen((location, action) => {
            // 监听路由改变
        });
        return () => unListen();
    }, [history]);
    return (
        <div className='header'>
            {navOptions.map((navItem) => {
                return <NavItem key={navItem.to} exact={navItem.to === '/'} {...navItem} />;
            })}
        </div>
    );
}

function NavItem({ to, title, exact }: INavItem): ReactElement {
    const isActive = useRouteMatch({ path: to, exact });
    return (
        <Link to={to} title={title} className={classnames({ active: isActive })}>
            {title}
        </Link>
    );
}

export default memo(Header);
