import lodashJoin from 'lodash/join';

console.log(
    lodashJoin(['Another', 'module', 'loaded!'], ' ')
);

export function printMe(e) {
    console.log('I get called from print.js!', e);
}