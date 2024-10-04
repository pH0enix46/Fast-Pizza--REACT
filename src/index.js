// // //

// ⏺ index.js is used as the entry point to render the main App component into the DOM

// IMPORTED FILE ----------✅✅✅
import React from "react"; // ⏺ we import React to use JSX syntax
import ReactDOM from "react-dom/client"; // ⏺ we import ReactDOM to render components into the DOM
import "./index.css";
// ----------⛔️⛔️⛔️

// MAIN DATA ----------✅✅✅
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
// ----------⛔️⛔️⛔️

// MAIN/HEAD COMPONENT ----------✅✅✅
function App() {
  // ⏺ return JSX(JavaScript XML(eXtensible Markup Language)) combination of JS, HTML and CSS
  return (
    // ⏺ In JSX, we use 'className' instead of 'class' to define CSS classes
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// ----------⛔️⛔️⛔️

// HEADER COMPONENT ----------✅✅✅
function Header() {
  const color = { color: "#edc84b" };
  return (
    <header className="header">
      <h1 style={{ fontSize: "5.2rem", ...color }}>Fast React Pizza</h1>
    </header>
  );
}
// ----------⛔️⛔️⛔️

// MENU COMPONENT ----------✅✅✅
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are out of stock! Please come back later 😊</p>
      )}
    </main>
  );
}
// ----------⛔️⛔️⛔️

// PIZZA COMPONENT ----------✅✅✅
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
// ----------⛔️⛔️⛔️

// FOOTER COMPONENT ----------✅✅✅
function Footer() {
  const currentHour = new Date().getHours();
  const hour12 = currentHour % 12 || 12; // ⏺ 12-hour format
  const isAM = currentHour < 12; // ⏺ check if it's AM/PM
  const openHour = 8;
  const closeHour = 10;
  const isOpen =
    (isAM && hour12 >= openHour) ||
    (!isAM && hour12 <= closeHour && currentHour < 22);

  // ⏺ JSX  e js use korar jonno we have to use {}
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHour} closeHours={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00AM to {closeHour}:00PM
        </p>
      )}
    </footer>
  );
}
// ----------⛔️⛔️⛔️

// ORDER COMPONENT ----------✅✅✅
function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>
        We're open from {openHours}:00AM to {closeHours}:00PM. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// ----------⛔️⛔️⛔️

// RENDER TO THE DOM (React v18) ----------✅✅✅
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ----------⛔️⛔️⛔️
