import lodashJoin from 'lodash/join';

import {
    cube
} from './math'


import './style.scss';
import './style2.css';
import MyImage from './blog.jpg';

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);


let printMe;


function component() {
    let eleDiv = document.createElement('div');
    let elePre = document.createElement('pre');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    eleDiv.innerHTML = lodashJoin(['Hello', 'eleDiv'], ' ');
    elePre.innerHTML = ['Hello elePre!', '5 cubed is equal to ', cube(5)].join('\n\n');
    elePre.classList.add('hello');

    let myIcon = new Image();
    myIcon.src = MyImage;
    elePre.appendChild(myIcon);

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';

    btn.onclick = (event) => {
        console.time("getPrintMe");
        return import ( /* webpackChunkName: "print" */ './print').then(module => {
            // console.log(Object.prototype.toString.call(module)); //[object Module]
            module.printMe(event);
            console.timeEnd("getPrintMe");
        }).catch(error => 'An error occurred while loading the component');
    };

    elePre.appendChild(btn);
    eleDiv.appendChild(elePre);

    return eleDiv;
}

document.getElementsByTagName('main')[0].appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}