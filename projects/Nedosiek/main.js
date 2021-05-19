/*let nickname=prompt("Введите Ваш никнейм");*/

const dragList = document.getElementById('drag-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Orgeta',
    'Larry Ellison',
    'Mark Zurckerberg',
    'Michael Bloomberg',
    'Larry Page'
];
const listItems = [];
let dragStartIndex;

createList();
function createList() {
    [...richestPeople].map((el)=> ( { value: el, sort: Math.random() }))
    .sort((a, b)=> a.sort - b.sort)
    .map((a) => a.value)
        .forEach((person, index) => {
        console.log(person)
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
        <span class="number">${index+1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
        </div>
        `;
        listItems.push(listItem);
        dragList.appendChild(listItem);
    })
    addEventListeners();
}

function dragStart(){
    //console.log('event dragstart')
    dragStartIndex = this.closest('li').getAttribute('data-index');
    //console.log('this', this);
    //console.log('dragStartIndex', +dragStartIndex);
}
function dragEnter(){
    //console.log('event dragenter')
    this.classList.add('over')
}
function dragLeave(){
    //console.log('event dragleave')
    this.classList.remove('over')
}
function dragOver(e){
    //console.log('event dragover')
    e.preventDefault();
}
function dragDrop(){
   // console.log('event dragdrop')
   const dragEndIndex = +this.getAttribute('data-index');
   swapItems(dragStartIndex, dragEndIndex);
   this.classList.remove('over');
}

function swapItems(fromI, toI) {
    //console.log('test');
    const item1 = listItems[fromI].querySelector('.draggable');
    const item2 = listItems[toI].querySelector('.draggable');
   // console.log(item1, item2)
   listItems[fromI].appendChild(item2);
   listItems[toI].appendChild(item1);
}

function checkOrder() {
    listItems.forEach((listItem, i) => {
        const personName = listItem.querySelector('.draggable').innerText.trim();
        console.log(personName);
        if (personName !== richestPeople[i]) {
            listItem.classList.add('wrong')
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right')
        }
    })
}
function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.drag-list li');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    })
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}
check.addEventListener('click', checkOrder); 