let card = document.querySelectorAll(".item-card");
const button = document.querySelector(".click-card__btn-exit");
const wind = document.querySelector(".hide-card");
let wind_x = 0, wind_y = 0;

for (var i = 0; i < card.length; i++){
    card[i].addEventListener("click", showTargets);
}

function clear_bloc(){
    wind.querySelector(".info-card__status").innerHTML = '';
    wind.querySelector(".info-card__name").innerHTML = '';
    wind.querySelector(".info-card__birthday").innerHTML = '';
    wind.querySelector(".info-card__number").innerHTML = ' ';
    wind.querySelector(".click-card__photo").src = "";
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
  wind.querySelector(".info-card__status").innerHTML += status;
  wind.querySelector(".info-card__name").innerHTML += name_;
  wind.querySelector(".info-card__birthday").innerHTML += birthday;
  wind.querySelector(".info-card__number").innerHTML += number;
  wind.querySelector(".click-card__photo").src = photo;
  console.log(wind_x);
  console.log(wind_y);
  console.log(event.currentTarget);
}

button.addEventListener("click", closeCard);

function closeCard(event){
    wind.classList.remove("click-card");
    wind.classList.add("hide-card");
    clear_bloc();
}
