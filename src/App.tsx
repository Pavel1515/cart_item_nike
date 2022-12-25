import { useState } from "react";
import style from "./style/app.module.scss";

// Выствил цвета в масивы так как данные обычно с express Js  в масиве json  получа
// можно конечно адаптировать верстку ну и разделить на несколько компонентов

const logo = require("./assets/img/Vector.png");
const cart = require("./assets/img/cart.png");
const contact = require("./assets/img/contact.png");
const facebook = require("./assets/img/facebook.png");
const instagram = require("./assets/img/instagram.png");
const twiter = require("./assets/img/twiter.png");
const sneakers = require("./assets/img/Air Edge 270.png");
const line = require("./assets/img/line.png");

const App = () => {
  const size = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
  const color = ["#B6A179", "#272425", "#6389CB", "#F2C758", "#FFFFFF"];
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const clickColor = (index: number) => {
    setActiveColor(index);
  };
  const clickSize = (index: number) => {
    setActiveSize(index);
  };
  type Fafa =
    | {
        colorItem: string | undefined;
        sizeItem: number | undefined;
      }
    | undefined;
  const [cartItem, setCartItem] = useState<Fafa[]>([]);
  const addClilItem = () => {
    setCartItem([
      ...cartItem,
      {
        colorItem: color[activeColor],
        sizeItem: size[activeSize],
      },
    ]);
    console.log(
      Array(...cartItem, {
        colorItem: color[activeColor],
        sizeItem: size[activeSize],
      })
    );
  };

  return (
    <>
      <div className={style.container}>
        <header>
          <img src={logo} alt="logo" />
          <ul>
            <li>New Releases</li>
            <li>MEN</li>
            <li>WoMEN</li>
            <li>KIDS</li>
            <li>CUSTOMIZE</li>
          </ul>
          <div className={style.cart_container}>
            <img src={contact} alt="" />
            <div className={style.cart}>
              <img src={cart} alt="" />
              <span>{cartItem.length}</span>
            </div>
          </div>
        </header>
        <main>
          <div className={style.options}>
            <p>Men's Shoe</p>
            <div className={style.h1}>
              <h1>Nike Air Edge 270</h1>
              <h2>
                The Nike Air Edge 270 takes the look of retro basketball and
                puts it through a modern lens.
              </h2>
              <span>Scroll down</span>
            </div>
          </div>
          <div className={style.selection}>
            <div className={style.size}>
              <p>Select Size (us)</p>
              <ul>
                {size.map((el, index) => (
                  <li onClick={() => clickSize(index)} key={el}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.color_wraper}>
              <p>Select Color</p>
              <div className={style.color_container}>
                {color.map((el, index) => (
                  <div
                    key={el}
                    className={style.color_item}
                    style={{ backgroundColor: `${el}` }}
                    onClick={() => clickColor(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className={style.href}>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="" />
              </a>
              <a href="https://twitter.com/">
                <img src={twiter} alt="" />
              </a>
              <a href="https://ru-ru.facebook.com/">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
          <img className={style.sneakers} src={sneakers} alt="sneakers" />
        </main>
        <section className={style.management_cart}>
          <div className={style.direction}>
            <div className={style.direction_flex}>
              <p>prew</p>
              <img src={line} className={style.prew} alt="prew" />
            </div>
            <div className={style.direction_flex}>
              <p>next</p>
              <img src={line} alt="next" />
            </div>
          </div>
          <div onClick={() => addClilItem()} className={style.add}>
            add to cart — $95.97
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
