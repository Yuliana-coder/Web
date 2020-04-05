let card = document.querySelectorAll(".card_profile"); // карточка, при нажатии (наведении) на которую появляется всплывшее (модальное) окно
let button = document.querySelector(".click-card__btn-exit"); // кнопка в всплывшей карточке для выхода их нее
let wind = document.querySelector(".hide-card"); // всплывающая карточка профиля
let hidden_bloc = document.querySelector(".hidden-off"); // фиктивный получпрозрачный блок-фон, при нажатии на него происходит выход из карточки

//подписка профилей на событие "клик" по ним
for (var i = 0; i < card.length; i++){
    card[i].addEventListener("click", showTargets);
}

//очищение данных в всплывшей карточке
function clearBloc(){
    wind.innerHTML = 
    `<button class="click-card__btn-exit"></button>`;
}

//открытие всплывающей карточке
function showTargets(event) {
  clearBloc(); 
  //данные о профиле "дата-атрибуты" из датасета 
  const studentData = event.currentTarget.dataset;
  const status = studentData.online;
  const photo = studentData.photo;
  const name_ = studentData.name;
  const birthday = studentData.birthday;
  const number = studentData.number;
  renderCard(status, photo, name_, birthday, number);
  wind.classList.remove("hide-card");
  wind.classList.add("click-card");
  hidden_bloc.classList.remove("hidden-off");
  hidden_bloc.classList.add("hidden-on");
  button = document.querySelector(".click-card__btn-exit");
  button.addEventListener("click", closeCard);
  hidden_bloc.addEventListener("click", closeCard);
}

//заполнение всплывшей карточки данными
function renderCard(status, photo, name_, birthday, number){
    wind.innerHTML +=                  
    `<div class = "info-card">
        <div class="info-card__status-wrapper">статус: <span class="info-card__status">${status}</span> </div>
        <div class="info-card__name">${name_}</div>
        <div class="info-card__birthday-field" >День рождения: <span class="info-card__birthday">${birthday}</span></div>
        <div class="info-card__number-field"> Телефон: <span class="info-card__number">${number}</span> </div>
    </div>
    <img src="${photo}" class = "click-card__photo" alt="photo"> `;
}

//закрытие карточки, отписка от события клика кнопки выхода 
function closeCard(event){
    wind.classList.remove("click-card");
    wind.classList.add("hide-card");
    hidden_bloc.classList.remove("hidden-on");
    hidden_bloc.classList.add("hidden-off");
    clearBloc();
    button.removeEventListener("click", closeCard);
    hidden_bloc.removeEventListener("click", closeCard);   
}
