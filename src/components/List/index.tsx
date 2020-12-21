import { Fragment, ReactElement } from 'react';

import { For } from 'tsx-control-statements/components';

interface IArticle {
    title: string;
    date: string;
    tag: string[];
    content: string;
}

const articles: IArticle[] = [
    {
        title: '2020年的第一场雪',
        date: '2020-08-20',
        tag: ['react'],
        content: '<h1></h1>',
    },
    {
        title: '2021年的第一场雪',
        date: '2020-08-20',
        tag: ['react'],
        content: '<h1></h1>',
    },
];

function List(): ReactElement {
    return (
        <div>
            <For
                of={articles}
                body={(item) => {
                    return <div key={item.title}>123</div>;
                }}
            ></For>
        </div>
    );
}

export default List;
