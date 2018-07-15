import lodash from 'lodash';
import './style.css';
import MyImage from './blog.jpg';

import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    let myIcon = new Image();
    myIcon.src = MyImage;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());