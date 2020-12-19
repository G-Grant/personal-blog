import { ReactElement } from 'react';

interface IArticle {
    title: string;
    date: string;
    tag: string[];
    content: string;
}

const article: IArticle = {
    title: '2020年的第一场雪',
    date: '2020-08-20',
    tag: ['react'],
    content: '<h1>宝宝是猪</h1>',
};

function List(): ReactElement {
    return <div>List</div>;
}

export default List;
