import printNumbers, { multipleNumbers } from './numbers';

const partEl = document.getElementById('part-list');

let numberArray = [2, 6];

printNumbers(...numberArray);

const strList = multipleNumbers(...numberArray);

partEl.innerHTML = strList;

/*

build => npm run build

build and watch => npm run watch


build, watch and start webpack-dev-server  => npm run start
*/