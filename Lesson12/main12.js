// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//         вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let div = document.createElement('div');
        let ul = document.createElement('ul');
        for (const user of users) {
            console.log(user);
            let li = document.createElement('li');
            li.innerText =  `${user.id} - ${user.name}`;
            ul.appendChild(li);
            let a = document.createElement('a');
            a.href = ` index12_1.html?id=${user.id}`;
            a.innerText = '    перейти до поста';
            li.appendChild(a);
        }
        div.appendChild(ul);
        document.body.appendChild(div);
    });