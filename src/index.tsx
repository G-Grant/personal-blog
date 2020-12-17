import { ReactElement } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Remarkable } from 'remarkable';
import hljs from 'highlight.js';

const remarkable: Remarkable = new Remarkable({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {
                //
            }
        }
        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {
            //
        }
        return ''; // use external default escaping
    },
});

function App(): ReactElement {
    return (
        <BrowserRouter>
            <Route exact path='/'>
                Hello
            </Route>
            <Route path='/tag'>标签页</Route>
            <Route path='/about'>关于</Route>
        </BrowserRouter>
    );
}

export default App;
