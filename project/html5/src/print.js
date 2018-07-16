import {
    join as lodashJoin
} from 'lodash';
console.log(
    lodashJoin(['Another', 'module', 'loaded!'], ' ')
);

export default function printMe(e) {
    console.log('I get called from print.js!', e);
}