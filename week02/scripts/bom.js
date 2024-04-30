document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('favchap');
    const addButton = document.getElementById('addChapterBtn');
    const list = document.getElementById('list');

    addButton.addEventListener('click', function () {
        const inputValue = input.value.trim();
        if (inputValue !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = inputValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';

            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            list.appendChild(listItem);

            input.value = '';
        } else {
            alert('Please enter a chapter!');
        }
    });
});

