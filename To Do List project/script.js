const new1 = document.createElement('div');
new1.className = 'writing';

const kaj1 = document.createElement('s');
kaj1.appendChild(document.createTextNode('Test use for the new tool'));

new1.appendChild(kaj1);

const test1 = document.createElement('div');
test1.className = 'test'
test1.appendChild(new1)

const i = document.createElement('i');
i.className = 'fa-regular fa-circle-check tik';
test1.appendChild(i);

const old = document.getElementsByClassName ('test');

const text = document.querySelector ('.text');

const btn = document.getElementsByClassName('fa-regular');

function run1() {
    text.replaceChild(test1, old[0]);

}
btn[0].addEventListener('click', run1);


const new2 = document.createElement('div');
new2.className = 'writing';

const kaj2 = document.createElement('s');
kaj2.appendChild(document.createTextNode('Send out emails'));

new2.appendChild(kaj2);
// console.log(new2)
const test2 = document.createElement('div');
test2.className = 'test'
test2.appendChild(new2);

const i2 = document.createElement('i');
i2.className = 'fa-regular fa-circle-check tik';
test2.appendChild(i2);

const old2 = document.getElementsByClassName ('test');
function run2() {
    text.replaceChild(test2, old[1]);

}
btn[1].addEventListener('click', run2);




const new3 = document.createElement('div');
new3.className = 'writing';

const kaj3 = document.createElement('s');
kaj3.appendChild(document.createTextNode('Daily UI practie'));

new3.appendChild(kaj3);
const test3 = document.createElement('div');
test3.className = 'test'
test3.appendChild(new3);

const i3 = document.createElement('i');
i3.className = 'fa-regular fa-circle-check tik';
test3.appendChild(i3);

const old3 = document.getElementsByClassName ('test');
function run3() {
    text.replaceChild(test3, old[2]);

}
btn[2].addEventListener('click', run3);




const new4 = document.createElement('div');
new4.className = 'writing';

const kaj4 = document.createElement('s');
kaj4.appendChild(document.createTextNode('Driving practice'));

new4.appendChild(kaj4);
const test4 = document.createElement('div');
test4.className = 'test'
test4.appendChild(new4);

const i4 = document.createElement('i');
i4.className = 'fa-regular fa-circle-check tik';
test4.appendChild(i4);

const old4 = document.getElementsByClassName ('test');
function run4() {
    text.replaceChild(test4, old[3]);

}
btn[3].addEventListener('click', run4);




const new5 = document.createElement('div');
new5.className = 'writing';

const kaj5 = document.createElement('s');
kaj5.appendChild(document.createTextNode('Water flowers'));

new5.appendChild(kaj5);
const test5 = document.createElement('div');
test5.className = 'test'
test5.appendChild(new5);

const i5 = document.createElement('i');
i5.className = 'fa-regular fa-circle-check tik';
test5.appendChild(i5);

const old5 = document.getElementsByClassName ('test');
function run5() {
    text.replaceChild(test5, old[4]);

}
btn[4].addEventListener('click', run5);




const new6 = document.createElement('div');
new6.className = 'writing';

const kaj6 = document.createElement('s');
kaj6.appendChild(document.createTextNode('Upload PSD files to Dropbox'));

new6.appendChild(kaj6);
const test6 = document.createElement('div');
test6.className = 'test'
test6.appendChild(new6);

const i6 = document.createElement('i');
i6.className = 'fa-regular fa-circle-check tik';
test6.appendChild(i6);

const old6 = document.getElementsByClassName ('test');
function run6() {
    text.replaceChild(test6, old[5]);

}
btn[5].addEventListener('click', run6);