const complimentBtn = document.getElementById("complimentButton");
const shoesContainer = document.querySelector(`#shoes-container`);
const form = document.querySelector("form");
const baseURL = `http://localhost:4000/api/shoes`;

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const mornBtn = document.querySelector(`#morning`);
const eveBtn = document.querySelector(`#evening`);
const getTime = (e) => {
  console.log(e);
  axios.get(`http://localhost:4000/api/time/${e.target.id}`).then((res) => {
    const data = res.data;
    alert(`You will be taken to ${data}`);
    location.href = data;
  });
};
mornBtn.addEventListener("click", getTime);
eveBtn.addEventListener("click", getTime);

const fcBtn = document.querySelector(`#fc-btn`);
fcBtn.addEventListener("click", getFortune);

const shoeCallback = ({ data: shoes }) => displayShoes(shoes);
const errCallback = (err) => console.log(err);

const getAllShoes = () =>
  axios.get(baseURL).then(shoeCallback).catch(errCallback);
const createShoe = (body) =>
  axios.post(baseURL, body).then(shoeCallback).catch(errCallback);
const deleteShoe = (id) =>
  axios.delete(`${baseURL}/${id}`).then(shoeCallback).catch(errCallback);

function submitHandler(e) {
  e.preventDefault();

  let name = document.querySelector("#name");
  let price = document.querySelector("#price");
  let imageURL = document.querySelector("#img");

  let bodyObj = {
    name: name.value,
    price: price.value,
    imageURL: imageURL.value,
  };

  createShoe(bodyObj);

  name.value = "";
  price.value = "";
  imageURL.value = "";
}

function createShoeCard(shoe) {
  const shoeCard = document.createElement("div");
  shoeCard.classList.add("shoe-card");

  shoeCard.innerHTML = `<img alt='shoe cover image' src=${shoe.imageURL} class="shoe-cover-image"/>
    <p class="name">${shoe.name}</p>
    <div class="btns-container">
        <p class="shoe-price">$${shoe.price}</p>
    </div>
    <button class="delete" onclick="deleteShoe(${shoe.id})">DELETE</button>
    `;

  shoesContainer.appendChild(shoeCard);
}

function displayShoes(arr) {
  shoesContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createShoeCard(arr[i]);
  }
}

form.addEventListener("submit", submitHandler);

getAllShoes();
