const posts = [
    {id:1, description:'first post'},
    {id:2, description:'second post'},
    {id:3, description:'third post'}
]

const listPosts = () => {
    posts.map((post) => {
        console.log(post);
    });
};


const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        // reject('an error occurred!!!!');
    });
    return promise1;
};

addPost({ id:4, description:`new post ${++posts.length}`})
    .then(() => {
        console.log('new list');
        listPosts();
    })
    .catch((error) => {
        console.log(error);
    });

addPost({ id:5, description:`new post ${posts.length}`})
.then(() => {
    console.log('new list');
    listPosts();
})
.catch((error) => {
    console.log(error);
});

listPosts();