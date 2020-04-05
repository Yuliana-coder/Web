//при закгрузки содержимого на странице генерируем массив, создаем класс со студентами и отрисовываем каждую карточку
document.addEventListener("DOMContentLoaded", () => {
//генериация массива с данными студентов (статус, ФИО, фото, дата рождения, номер телефона, университет, список друзей)
const studentList = [
    {
        status: 'в сети',
        name: 'Джо Джонас',
        photo: 'img/ava_joe.jpg',
        birthDay: '09.09.1990',
        number: '89871111111',
        university: {
            name: 'УГАТУ',
            course: '2'
        },
        friendsList: [{
            name: 'Софи Тернер',
            photo: 'img/ava_sophi.jpg',
            src: '/aaaa'
        },
        {
            name: 'Ник Джонас',
            photo: 'img/ava_nick.jpg',
            src: '/aaaa'
        }]
    },
    {
        status: 'в сети',
        name: 'Софи Тернер',
        photo: 'img/ava_sophi.jpg',
        birthDay: '20.04.1995',
        number: '89871111111',
        university: {
            name: 'СурГУ',
            course: '3'
        },
        friendsList: [        {
            name: 'Ник Джонас',
            photo: 'img/ava_nick.jpg',
            src: '/aaaa'
        },
        {
            name: 'Приянка Чопра',
            photo: 'img/ava_praynka.jpg',
            src: '/aaaa'
        }]
    },
    {
        status: 'в сети',
        name: 'Ник Джонас',
        photo: 'img/ava_nick.jpg',
        birthDay: '08.10.1993',
        number: '89870808999',
        university: {
            name: 'БГУ',
            course: '4'
        },
        friendsList: [        {
            name: 'Кевин Джонас',
            photo: 'img/ava_kevin.jpg',
            src: '/aaaa'
        },
        {
            name: 'Приянка Чопра',
            photo: 'img/ava_praynka.jpg',
            src: '/aaaa'
        }]
    },
    {
        status: 'в сети',
        name: 'Дениэл Джонас',
        photo: 'img/ava_den.jpg',
        birthDay: '09.09.1992',
        number: '89872323444',
        university: {
            name: 'БГПУ',
            course: '1'
        },
        friendsList: [        {
            name: 'Кевин Джонас',
            photo: 'img/ava_kevin.jpg',
            src: '/aaaa'
        },
        {
            name: 'Приянка Чопра',
            photo: 'img/ava_praynka.jpg',
            src: '/aaaa'
        }]
    },
    {
        status: 'в сети',
        name: 'Кевин Джонас',
        photo: 'img/ava_kevin.jpg',
        birthDay: '19.02.1990',
        number: '89871124244',
        university: {
            name: 'МФТИ',
            course: '3'
        },
        friendsList: [        {
            name: 'Джо Джонас',
            photo: 'img/ava_joe.jpg',
            src: '/aaaa'
        },
        {
            name: 'Приянка Чопра',
            photo: 'img/ava_praynka.jpg',
            src: '/aaaa'
        }]
    },
    {
        status: 'в сети',
        name: 'Прянка Чопра',
        photo: 'img/ava_praynka.jpg',
        birthDay: '12.05.1987',
        number: '89870909777',
        university: {
            name: 'ИТМО',
            course: '4'
        },
        friendsList: [        {
            name: 'Джо Джонас',
            photo: 'img/ava_joe.jpg',
            src: '/aaaa'
        },
        {
            name: 'Дениэл Джонас',
            photo: 'img/ava_den.jpg',
            src: '/aaaa'
        }]
    },
    ];

    //количество миллисекунд в одном году
    const MILLISECONDS_PERYEAR = 365*24*60*60*1000; 

    let wind = document.querySelector(".hide-card"); // всплывающая карточка профиля
    // let hidden_bloc = document.querySelector(".hidden-off"); // фиктивный получпрозрачный блок-фон, при нажатии на него происходит выход из карточки
    let cards = document.querySelector(".cards");

    //класс, описывающий студента, в конструктор передается студент-объект из массива со студентами
    class Student {
        constructor(studentData)
        {
            // берем данные из заполненного массива со студентами 
            this.studentData = studentData;        
            // this.mouseHover = document.querySelectorAll(".card_profile"); 
            this._showCard = this._showCard.bind(this); 
            this._closeCard =  this._closeCard.bind(this); 
            this._clearBloc =  this._clearBloc.bind(this); 
            this.renderCard();       
        }

        get age(){
            let data_now = new Date();
            let arr_birth = this.studentData.birthDay.split('.');
            let age = (data_now - new Date((arr_birth.reverse()).join(' '))) / MILLISECONDS_PERYEAR;
            return parseInt(age);
        }
        
        _clearBloc(){
            wind.innerHTML = 
            `<button class="click-card__btn-exit"></button>`;
        }

        _showCard(event)
        {
            setTimeout(1000);
            this._clearBloc();
            wind.innerHTML += 
            `<div class = "info-card">
            <div class="info-card__status-wrapper">статус: <span class="info-card__status">${this.studentData.status}</span> </div>
            <div class="info-card__name">${this.studentData.name}</div>
            <div class="info-card__birthday-field" >День рождения: <span class="info-card__birthday">${this.studentData.birthDay}</span></div>
            <div class="info-card__number-field"> Телефон: <span class="info-card__number">${this.studentData.number}</span> </div>
        </div>
        <img src="${this.studentData.photo}" class = "click-card__photo" alt="photo"> `;
            wind.classList.remove("hide-card");
            wind.classList.add("click-card");
        }

        renderCard(){
            let last_child = `<div class="card card_profile" data-online="в сети" data-photo="${this.studentData.photo}" data-name="${this.studentData.name}" data-birthday="${this.studentData.birthDay}" data-number="${this.studentData.number}">
            <img src="${this.studentData.photo}" class = "card__img card__img_border" alt="photo" />
            <div class="card__title card__title_margin" >${this.studentData.name}</div>
            <div class="card__inscription card__inscription_light">${this.studentData.university.name}, ${this.studentData.university.course}</div>
            <div>            </div>`;
            cards.insertAdjacentHTML('beforeend',  last_child);
            cards.lastChild.addEventListener("mouseover", this._showCard);
            cards.lastChild.addEventListener("mouseout", this._closeCard);
        }

        _closeCard(event){
            wind.classList.remove("click-card");
            wind.classList.add("hide-card");
            this._clearBloc(); 
            cards.lastChild.removeEventListener("mouseover", this._showCard);
            cards.lastChild.removeEventListener("mouseout", this._closeCard);          
        }

    }
    
    for(let i = 0; i < studentList.length; i++)
    {
        new Student(studentList[i]);
    }

});
