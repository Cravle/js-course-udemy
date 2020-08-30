/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';


/* (film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
} */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list ');
adv.forEach(item => {
    item.remove();
});
promoGenre.textContent = 'драма';

promoBg.style.backgroundImage = "url('img/bg.jpg')";



movieDB.movies.sort();

function showFilms() {
    movieList.innerHTML = "";
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
    });
}

showFilms();



//? input favorite movie
const favoriteMovie = document.querySelector('.adding__input'),
    favoriteCB = document.querySelector('[data-check]'),
    favoriteBtn = document.querySelector('.add').querySelector('button');

favoriteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(favoriteMovie.value);
    if (favoriteCB.checked) {
        console.log("Добавляем любимый фильм");
    }



    movieDB.movies.push(favoriteMovie.value);
    movieDB.movies.sort();
    showFilms();


});

//? delete element
const bucket = document.querySelectorAll('.delete');
bucket.forEach(element => {
    element.addEventListener('click', (event) => {

        console.log(element.parentElement.innerText);

    });


});