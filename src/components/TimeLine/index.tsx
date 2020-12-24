import { Fragment, ReactElement } from 'react';
import { For } from 'tsx-control-statements/components';
import _ from 'lodash';
import Chance from 'chance';
import classnames from 'classnames';

const chance = new Chance();

import './index.less';

interface IYearArticles {
    year: number;
    articles: IArticle[];
}

interface IArticle {
    id: string;
    title: string;
    date: string | Date;
    content: string;
}

const years = [2019, 2020];

const allArticles: IYearArticles[] = _.map(years, (year) => {
    return {
        year,
        articles: _.map(_.range(_.random(1, 5)), () => {
            return {
                id: chance.guid(),
                title: chance.sentence({ words: 3 }),
                date: chance.date({ string: true }),
                content: chance.paragraph(),
            };
        }),
    };
});

function TimeLine(): ReactElement {
    return (
        <div className='time-line'>
            <For
                of={allArticles}
                body={(yearArticles, index) => {
                    const isOdd: number = index % 2;
                    return (
                        <Fragment key={yearArticles.year}>
                            <For
                                of={yearArticles.articles}
                                body={(article, index) => {
                                    return (
                                        <TimeLineItem
                                            key={article.id}
                                            isOdd={!!isOdd}
                                            isYearLastArticle={!index}
                                            {...article}
                                        />
                                    );
                                }}
                            />
                        </Fragment>
                    );
                }}
            />
        </div>
    );
}

interface IProps {
    isOdd: boolean;
    /** 是否为年度最后一篇文章 */
    isYearLastArticle: boolean;
}

function TimeLineItem({ content, isOdd, isYearLastArticle, date }: IArticle & IProps) {
    return (
        <div className={classnames('time-line-item', { odd: isOdd, 'year-point': isYearLastArticle })}>
            <span className='line' />
            <div className='time-line-content'>
                <div className='content'>{content}</div>
                <div>{date}</div>
            </div>
        </div>
    );
}

export default TimeLine;
