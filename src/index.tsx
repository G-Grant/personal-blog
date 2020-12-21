import { memo, ReactElement, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Remarkable } from 'remarkable';
// import hljs from 'highlight.js';

import Header from './components/Header';
import Home from './pages/Home';

import 'nprogress/nprogress.css';
import './style/reset.css';
import Tag from './pages/Tag';
import About from './pages/About';

// const remarkable: Remarkable = new Remarkable({
//     highlight: function (str, lang) {
//         if (lang && hljs.getLanguage(lang)) {
//             try {
//                 return hljs.highlight(lang, str).value;
//             } catch (err) {
//                 //
//             }
//         }
//         try {
//             return hljs.highlightAuto(str).value;
//         } catch (err) {
//             //
//         }
//         return ''; // use external default escaping
//     },
// });

function App(): ReactElement {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/tag' component={Tag} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    );
}

export default memo(App);
