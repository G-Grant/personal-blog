import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Remarkable } from 'remarkable';
// import hljs from 'highlight.js';

import Header from './components/Header';
import Home from './pages/Home';

import './style/reset.css';

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
                <Route path='/tag'>标签页</Route>
                <Route path='/about'>关于</Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
