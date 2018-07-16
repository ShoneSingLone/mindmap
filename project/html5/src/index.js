// import lodash from 'lodash';
import {
    cube
} from './math'
import './style.scss';
import './style2.css';
import MyImage from './blog.jpg';
import printMe from './print';

function component() {

    // let element = document.createElement('div');
    let element = document.createElement('pre');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
    element.innerHTML = ['Hello webpack!', '5 cubed is equal to ', cube(5)].join('\n\n');
    element.classList.add('hello');
    let myIcon = new Image();
    myIcon.src = MyImage;
    element.appendChild(myIcon);

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn)

    return element;
}

document.getElementsByTagName('main')[0].appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}