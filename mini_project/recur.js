
let userId = new URL(location.href).searchParams.get('userId');
console.log(userId);
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response =>response.json())
    .then((user) => {
            let user1 = document.createElement('div');
        document.body.appendChild(user1);

        function recurBild(user) {
            if (typeof user === 'object') {
                for (const userKey in user) {
                    console.log(user[userKey])
                    let obg0 =user[userKey];
                    let p0 = document.createElement('p');
                    let toUp = userKey.toUpperCase()
                    p0.innerText = ` ${toUp} : ${user[userKey]}`;
                    user1.appendChild(p0);
                    document.body.appendChild(user1);
                    recurBild(obg0)
                }
            }
        }
        recurBild(user);

        let btnPost = document.createElement('button')
        btnPost.innerText ='post of current user ';
        btnPost.onclick = function (ev) {
            ev.preventDefault();
            fetch(`http://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let divTitlePost = document.createElement('div') ;
                    for (const post of posts) {
                        console.log(post);
                        let h3 = document.createElement('h3');
                        h3.innerText = ` ${post.title} ` ;
                        let btn_detalis = document.createElement('button');
                        btn_detalis.classList.add('btn_detalis_post');
                        btn_detalis.innerText ='post-details';
                        btn_detalis.onclick = function (ev) {
                            ev.preventDefault();
                            location.href = `index_detalis_post.html?postId=${post.id}`;
                        }
                        h3.appendChild(btn_detalis);
                        divTitlePost.appendChild(h3)
                    }
                    document.body.appendChild(divTitlePost);
                });
        }
        user1.appendChild(btnPost);

    });

