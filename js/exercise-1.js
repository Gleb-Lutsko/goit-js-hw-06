console.log('Number of categories:', document.querySelectorAll("li.item").length);
const listItems = document.querySelectorAll('.item');
listItems.forEach(listItem => {
    const listTitle = listItem.querySelector('h2');
    const listElements = listItem.querySelectorAll('li');
    console.log('Category:', listTitle.textContent);
    console.log('Elements:', listElements.length)
})