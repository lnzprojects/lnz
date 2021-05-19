let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

const loginElem = document.querySelector('.login');

const loginForm = document.querySelector('.login-form');

const emailInput = document.querySelector('.login-email');

const passwordInput = document.querySelector('.login-password');

const loginSignup = document.querySelector('.login-singup');

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const exitElem = document.querySelector('.exit');

const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');

const userAvatarElem = document.querySelector('.user-avatar');

const postsWrapper = document.querySelector('.posts');

const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post');

const menuRight = document.querySelector('.sidebar-nav');

const listUsers = [
  {
    id: '1',
    email: 'vlad.vas.ua@gmail.com',
    password: '12345',
    displayName: 'Datych',
    photo: 'https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg'
  },
  {
    id: '2',
    email: 'kate@gmail.com',
    password: '123456',
    displayName: 'Katrin',
    photo: 'https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg'
  }
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password){
      this.authorizedUser(user);
      handler();
    } else {
      alert('Користувач з такими данними не знайден');
    }
  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  signUp(email, password, photo, handler) {

    if (!email.trim() || !password.trim()){
      alert('Введіть дані');
      return;
    }
    if (!this.getUser(email) && email.trim() && password.trim()){
      const user = {id: listUsers.length+1, email, password, photo, displayName: email.substring(0, email.indexOf('@'))};
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert('Користувач з таким email вже зареєстрований');
    }
  },
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }
    handler();
    showAllPosts();
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user) {
    this.user = user;
  },
};

const setPosts = {
  allPosts: [
    {
      title: 'Дивіться що знайшов?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['новинка', 'шок'],
      author: {displayName: 'Viktor', photo: 'https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg'},
      date: '11.04.2021, 20:54:00',
      like: 15,
      comments: 20,
    },
    {
      title: 'День 54',
      text: 'Тільки повернулася з університету. Сил вже немає, коли там кінець навчання?',
      tags: ['муд', 'допоможіть', 'універ', 'хелп'],
      author: {displayName: 'Kate', photo: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/28/921641-fotojet-11.jpg'},
      date: '10.01.2021, 10:54:40',
      like: 45,
      comments: 12,
    }
  ],
  addPost(title, text, tags, handler) {
    this.allPosts.unshift({
      title,
      text,
      tags: tags.split(',').map(item => item.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo,
      },
      date: new Date().toLocaleString(),
      like: 0,
      comments: 0
    });
    if (handler) {
      handler();
    }
    showAllPosts();
  }
};


const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log(user);

  if(user){
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo;  
    buttonNewPost.classList.add('visible');
    menuRight.style.display = 'block';
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
    buttonNewPost.classList.remove('visible');
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
    menuRight.style.display = 'none';
  }
};

const showAddPost = () => {
  addPostElem.classList.add('visible');
  postsWrapper.classList.remove('visible');
}

const showAllPosts = () => {
  let postsHTML = '';

  console.log(setPosts.allPosts);

  setPosts.allPosts.forEach(({title, text, date, like, comments, tags, author}) => {
    postsHTML += `
    <section class="post">
    <div class="post-body">
      <h2 class="post-title">${title}</h2>
      <p class="post-text">${text}</p>
      <div class="tags"> ${tags.map(tag => `<a href="#" class="tag">#${tag}</a>`)}
      </div>
    </div>
    <div class="post-footer">
    <div class="post-buttons">
        <button class="post-button likes">
          <svg width="19" height="20" class="icon icon-like">
            <use xlink:href="img/icons.svg#like"></use>
          </svg>
          <span class="likes-counter">${like}</span>
        </button>
        <button class="post-button comments">
          <svg width="21" height="21" class="icon icon-comment">
            <use xlink:href="img/icons.svg#comment"></use>
          </svg>
          <span class="comments-counter">${comments}</span>
        </button>
        <button class="post-button save">
          <svg width="19" height="19" class="icon icon-save">
            <use xlink:href="img/icons.svg#save"></use>
          </svg>
        </button>
        <button class="post-button share">
          <svg width="17" height="19" class="icon icon-share">
            <use xlink:href="img/icons.svg#share"></use>
          </svg>
        </button>
      </div>
      <div class="post-author">
        <div class="author-about">
          <a href="#" class="author-username">${author.displayName}</a>
          <span class="post-time">${date}</span>
        </div>
        <a href="#" class="author-link"><img src=${author.photo} alt="avatar" class="author-avatar"></a>
      </div>
    </div>
  </section>
    `;
  });
  console.log(setPosts.allPosts);


  postsWrapper.innerHTML = postsHTML;

  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');
};



const init = () => {
  menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('visible');
  });
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });
  
  loginSignup.addEventListener('click', event => {
    event.preventDefault();
  
    setUsers.signUp(emailInput.value, passwordInput.value, "https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg", toggleAuthDom);
    loginSignup.reset();
  });
  
  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });
  
  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });
  
  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove('visible');
  });

  buttonNewPost.addEventListener('click', event => {
    event.preventDefault();
    showAddPost();
  });

  addPostElem.addEventListener('submit', event => {
    event.preventDefault();
    console.log(addPostElem.elements);
    const { title, text, tags } = addPostElem.elements;
    console.log(title, text, tags);
    if (title.value.length < 6) {
      alert('Занадто короткий заголовок');
      return;
    }
    if (text.value.length < 20) {
      alert('Занадто короткий пост');
      return;
    }

    setPosts.addPost(title.value, text.value, tags.value, showAllPosts());

    addPostElem.classList.remove('visible');
  });

  

  showAllPosts();
  toggleAuthDom();
};

document.addEventListener('DOMContentLoaded', init);
