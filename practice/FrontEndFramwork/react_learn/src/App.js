import {
  createElement as CTag
} from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return CTag('div', {
      className: "App"
    },
    CTag(
      'header', {
        key: "App-header",
        className: "App-header"
      },
      [
        CTag('img', {
          key: 'img',
          src: logo,
          className: "App-logo",
          onClick: (e) => {
            console.log(e, this)
          },
          alt: "logo"
        }),
        CTag('p', {
            key: 'img>p',
          },
          ['Edit ', CTag('code', {
            key: "App-header",
          }, 'src/App.js'), ' and save to reload.']),
        CTag('a', {
            key: 'img>a',
            className: "App-link",
            href: "https://reactjs.org",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          [1, 2, 3].map(i => CTag('h' + i, {
            key: i
          }, i))),
        ...[1, 2, 3].map(i => CTag('h' + i, {
          key: 'out' + i
        }, i))
      ]
    )
  );
}

export default App;