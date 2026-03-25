const productList = document.getElementById("product-list");

const products = [
  {
    name: "Mic Wireless",
    desc: "Cocok buat konten TikTok"
  },
  {
    name: "Kopi Arabica",
    desc: "Rasa fruity & smooth"
  }
];

products.forEach(data => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.desc}</p>
  `;

  productList.appendChild(card);
});
