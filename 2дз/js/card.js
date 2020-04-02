const card = document.querySelectorAll(".item-card");
const button = document.querySelector(".btn-exit");
let wind = document.querySelector(".click-card");

for (var i = 0; i < card.length; i++){
    card[i].addEventListener("click", showTargets);
}

function showTargets( event ) {
clear_bloc();   
  wind.classList.remove("hide-card");
  wind.classList.add("click-card");
  const status = event.currentTarget.dataset.online;
  const photo = event.currentTarget.dataset.photo;
  const name_ = event.currentTarget.dataset.name;
  const birthday = event.currentTarget.dataset.birthday;
  const number = event.currentTarget.dataset.number;
  wind.querySelector(".click-card__status").innerHTML += status;
  wind.querySelector(".click-card__name").innerHTML += name_;
  wind.querySelector(".click-card__birthday").innerHTML += birthday;
  wind.querySelector(".click-card__number").innerHTML += number;
  wind.querySelector(".click-card__photo").src = photo;
}

button.addEventListener("click", closeCard);

function clear_bloc(){
    wind.querySelector(".click-card__status").innerHTML = 'статус: ';
    wind.querySelector(".click-card__name").innerHTML = 'Имя: ';
    wind.querySelector(".click-card__birthday").innerHTML = 'День рождения: ';
    wind.querySelector(".click-card__number").innerHTML = 'Телефон: ';
    wind.querySelector(".click-card__photo").src = "";
}

function closeCard(event){
    wind.classList.remove("click-card");
    wind.classList.add("hide-card");
    clear_bloc();
}
