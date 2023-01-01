import { useState } from "react";
import style from "./style/app.module.scss";

//  по серому шрифту не нашел именно нужный так как вроде он платный
// по поводу разрешения  webp  я бы  уже поставил все в етот формат закпускал 3 сайта уже и у всех для нормальной индексации лучше использовать webp

const shecers = require("./assets/img/AnyConv.com__Air Edge 270.webp");

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
  type Color =
    | {
        colorItem: string | undefined;
        sizeItem: number | undefined;
      }
    | undefined;
  const [cartItem, setCartItem] = useState<Color[]>([]);
  const addClilItem = () => {
    setCartItem([
      ...cartItem,
      {
        colorItem: color[activeColor],
        sizeItem: size[activeSize],
      },
    ]);
    console.log([
      ...cartItem,
      {
        colorItem: color[activeColor],
        sizeItem: size[activeSize],
      },
    ]);
  };

  return (
    <>
      <div className={style.container}>
        <header>
          <div className={style.logo}></div>
          <ul>
            <li>New Releases</li>
            <li>MEN</li>
            <li>WoMEN</li>
            <li>KIDS</li>
            <li>CUSTOMIZE</li>
          </ul>
          <div className={style.cart_container}>
            <div className={style.image}></div>
            <div className={style.cart}>
              <div className={style.image}></div>
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
                  <li
                    className={activeSize === index ? `${style.active}` : ""}
                    onClick={() => clickSize(index)}
                    key={el}
                  >
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
                    className={
                      activeColor === index
                        ? `${style.active}`
                        : `${style.color_item}`
                    }
                    style={{ backgroundColor: `${el}` }}
                    onClick={() => clickColor(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className={style.href}>
              <div className={style.svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.333313C15.1699 0.333313 15.5654 0.34498 16.809 0.403313C18.0515 0.461646 18.8974 0.65648 19.6417 0.945813C20.4117 1.24215 21.0604 1.64348 21.709 2.29098C22.3023 2.87419 22.7613 3.57967 23.0542 4.35831C23.3424 5.10148 23.5384 5.94848 23.5967 7.19098C23.6515 8.43465 23.6667 8.83015 23.6667 12C23.6667 15.1698 23.655 15.5653 23.5967 16.809C23.5384 18.0515 23.3424 18.8973 23.0542 19.6416C22.7622 20.4207 22.303 21.1264 21.709 21.709C21.1257 22.302 20.4202 22.761 19.6417 23.0541C18.8985 23.3423 18.0515 23.5383 16.809 23.5966C15.5654 23.6515 15.1699 23.6666 12 23.6666C8.83021 23.6666 8.43471 23.655 7.19104 23.5966C5.94854 23.5383 5.10271 23.3423 4.35837 23.0541C3.57942 22.7619 2.87382 22.3027 2.29104 21.709C1.69768 21.1259 1.23863 20.4204 0.945874 19.6416C0.656541 18.8985 0.461707 18.0515 0.403374 16.809C0.348541 15.5653 0.333374 15.1698 0.333374 12C0.333374 8.83015 0.345041 8.43465 0.403374 7.19098C0.461707 5.94731 0.656541 5.10265 0.945874 4.35831C1.23782 3.57919 1.69698 2.87352 2.29104 2.29098C2.87399 1.69742 3.57954 1.23833 4.35837 0.945813C5.10271 0.65648 5.94737 0.461646 7.19104 0.403313C8.43471 0.34848 8.83021 0.333313 12 0.333313ZM12 6.16665C10.4529 6.16665 8.96921 6.78123 7.87525 7.87519C6.78129 8.96915 6.16671 10.4529 6.16671 12C6.16671 13.5471 6.78129 15.0308 7.87525 16.1248C8.96921 17.2187 10.4529 17.8333 12 17.8333C13.5471 17.8333 15.0309 17.2187 16.1248 16.1248C17.2188 15.0308 17.8334 13.5471 17.8334 12C17.8334 10.4529 17.2188 8.96915 16.1248 7.87519C15.0309 6.78123 13.5471 6.16665 12 6.16665ZM19.5834 5.87498C19.5834 5.48821 19.4297 5.11727 19.1562 4.84378C18.8827 4.57029 18.5118 4.41665 18.125 4.41665C17.7383 4.41665 17.3673 4.57029 17.0938 4.84378C16.8204 5.11727 16.6667 5.48821 16.6667 5.87498C16.6667 6.26175 16.8204 6.63269 17.0938 6.90618C17.3673 7.17967 17.7383 7.33331 18.125 7.33331C18.5118 7.33331 18.8827 7.17967 19.1562 6.90618C19.4297 6.63269 19.5834 6.26175 19.5834 5.87498ZM12 8.49998C12.9283 8.49998 13.8185 8.86873 14.4749 9.52511C15.1313 10.1815 15.5 11.0717 15.5 12C15.5 12.9282 15.1313 13.8185 14.4749 14.4749C13.8185 15.1312 12.9283 15.5 12 15.5C11.0718 15.5 10.1815 15.1312 9.52517 14.4749C8.86879 13.8185 8.50004 12.9282 8.50004 12C8.50004 11.0717 8.86879 10.1815 9.52517 9.52511C10.1815 8.86873 11.0718 8.49998 12 8.49998Z"
                    fill="#131212"
                  />
                </svg>

                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8557 2.59864C22.965 2.99262 22.0205 3.25136 21.0534 3.36631C22.0728 2.75665 22.8357 1.79716 23.2001 0.666642C22.2434 1.23598 21.1946 1.63498 20.1014 1.85081C19.3671 1.06515 18.3938 0.544099 17.3328 0.368658C16.2719 0.193216 15.1827 0.373215 14.2345 0.880671C13.2864 1.38813 12.5325 2.19461 12.09 3.17473C11.6475 4.15486 11.5413 5.25372 11.7877 6.30048C9.84769 6.20324 7.94978 5.69909 6.21723 4.82075C4.48468 3.94241 2.95621 2.70953 1.73106 1.20214C1.2974 1.947 1.06951 2.79374 1.07073 3.65564C1.07073 5.34731 1.93173 6.84181 3.24073 7.71681C2.46607 7.69242 1.70847 7.48322 1.03106 7.10664V7.16731C1.0313 8.29396 1.42116 9.38586 2.13455 10.2579C2.84794 11.1299 3.84096 11.7284 4.94523 11.9518C4.22611 12.1467 3.47209 12.1754 2.74023 12.0358C3.05157 13.0056 3.6584 13.8537 4.47575 14.4614C5.2931 15.0692 6.28004 15.4061 7.29839 15.425C6.28629 16.2199 5.12743 16.8075 3.88809 17.1542C2.64874 17.5009 1.35321 17.5999 0.0755615 17.4456C2.30588 18.88 4.90217 19.6415 7.55389 19.639C16.5291 19.639 21.4372 12.2038 21.4372 5.75564C21.4372 5.54564 21.4314 5.33331 21.4221 5.12564C22.3774 4.43517 23.2019 3.57983 23.8569 2.59981L23.8557 2.59864Z"
                    fill="#131212"
                  />
                </svg>
                <svg
                  width="13"
                  height="24"
                  viewBox="0 0 13 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33329 13.75H11.25L12.4166 9.08331H8.33329V6.74998C8.33329 5.54831 8.33329 4.41665 10.6666 4.41665H12.4166V0.496646C12.0363 0.44648 10.6001 0.333313 9.08346 0.333313C5.91596 0.333313 3.66663 2.26648 3.66663 5.81665V9.08331H0.166626V13.75H3.66663V23.6666H8.33329V13.75Z"
                    fill="#131212"
                  />
                </svg>
              </div>
            </div>
          </div>
          <img className={style.sneakers} src={shecers} alt="shecers" />
        </main>
        <section className={style.management_cart}>
          <div className={style.direction}>
            <div className={style.direction_flex}>
              <p>prew</p>
              <div className={style.prew}></div>
            </div>
            <div className={style.direction_flex}>
              <p>next</p>
              <div className={style.next}></div>
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
