import { memo, ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
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
