import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = { 
  apiKey: "AIzaSyD4ILx6J36XQ86gY7tTSRhiwxv65IHHSCY",
  authDomain: "yogzzdb.firebaseapp.com",
  projectId: "yogzzdb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productList = document.getElementById("product-list");

async function loadProducts() {
  productList.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.desc}</p>
      <a href="${data.link}" target="_blank">Beli Sekarang</a>
    `;

    productList.appendChild(card);
  });
}

loadProducts();
