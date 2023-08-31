// import styles from '../edit/edit.module.css'
//     const Blogpost =
//         [
//             {
//               "img":"Rectangle (1).png",
//               "title": "10 secret tips for managing a team remotely",
//               "description": "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Bessie Cooper",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (2).png",
//               "title": "What Ever Happened to Steampunk?",
//               "description": "How the iPhone popularized steampunk… and how the iPhone killed it off",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Courtney Henry",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (3).png",
//               "title": "10 secret tips for managing a team remotely",
//               "description": "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Bessie Cooper",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (4).png",
//               "title": "What Ever Happened to Steampunk?",
//               "description": "How the iPhone popularized steampunk… and how the iPhone killed it off",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Courtney Henry",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (5).png",
//               "title": "10 secret tips for managing a team remotely",
//               "description": "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Bessie Cooper",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (6).png",
//               "title": "What Ever Happened to Steampunk?",
//               "description": "How the iPhone popularized steampunk… and how the iPhone killed it off",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Courtney Henry",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (7).png",
//               "title": "10 secret tips for managing a team remotely",
//               "description": "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Bessie Cooper",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (8).png",
//               "title": "What Ever Happened to Steampunk?",
//               "description": "How the iPhone popularized steampunk… and how the iPhone killed it off",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Courtney Henry",
//                 "2nd January,2022"
//               ]
//             },
//             {
//               "img": "Rectangle (9).png",
//               "title": "What Ever Happened to Steampunk?",
//               "description": "How the iPhone popularized steampunk… and how the iPhone killed it off",
//               "bottom": [
//                 "../assets/icon/Userprofile.svg",
//                 "Courtney Henry",
//                 "2nd January,2022"
//               ]
//             }

//           ]

//           export default function Carts() {

//             const list = []
//             let i = 0;
//             for (let i = 0; i < Blogpost.length; i++) {
//             list.push(<div className={styles.art} > {

//             <div className='part2-img1'>
//             <div>
//             <img src={Blogpost[i].img}></img>
//             <h3 className='part2-h3'>{Blogpost[i].title}</h3>
//             <p className='part2-p'>{Blogpost[i].description}</p>
//             </div>
//             <div className='flex-2'>
//             <img src={Blogpost[i].bottom[0]}></img>
//             <h5>{Blogpost[i].bottom[1]}</h5>
//             <h5>{Blogpost[i].bottom[2]}</h5>
//             </div>
//             </div>
//             }</div>)
//             }
//             return (
//             <div className='blog'>
//             {list}
//             </div>

//             )

//             }
"use client";
// import Image from "next/image";
import styles from "../edit/edit.module.css";
// import Header from "./header/page";
// import { ColorSwitcher, CharacterCounter } from "./component/page";
import { useEffect, useState } from "react";
export default function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=9")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <div className={styles.container}>
      {products?.products?.map(
        ({ thumbnail, title, description, brand, price }) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #E8E8EA",
              gap: "16px",
              margin: "10px",
              width: "380px",
              height: "400px",
            }}
          >
            <div className={styles.text}>
              <div>
                <img src={thumbnail} className={styles.image} />
              </div>
              <div>
                <h1>{title}</h1>
              </div>
              <div>
                <span className={styles.description}>{description}</span>
              </div>
              <div className={styles.brandPrice}>
                <span>{brand}</span>
                <span> ${price}</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
