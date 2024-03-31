import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import MyButton from "./button/MyButton";
function Header({ setStep }) {
  return (
    <div
      style={{ backgroundColor: "transparent", position: "fixed" }}
      className="header"
    >
      <div
        className="col-sm-4"
        style={{
          width: "100%",
          height: "avto",
          padding: "1em 0",
          textAlign: "center",
          marginLeft: "50px",
        }}
      >
        <div
          className="col-sm"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <a href="">content</a>
          <a href="">support</a>
          <a href="">overview</a>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="continer">
      <div>
        <section>
          <h1
            className=""
            style={{
              fontSize: "100px",
              textAlign: "center",

              fontFamily: "monospace",
              textTransform: "uppercase",
              display: "grid",
              minHeight: "100vh",
              placeItems: "center",
              padding: "2rem",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundImage:
                "url(https://images.pexels.com/photos/105857/pexels-photo-105857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            Volodymyr
            <br />
            Siuryk
          </h1>{" "}
        </section>
      </div>
      <div
        className="text"
        style={{
          width: "100%",
          height: "100vh",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "cadetblue",
        }}
      >
        <p style={{ width: "30%" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          eos nisi alias et nemo enim iure, voluptatibus aliquid cum esse!
          Commodi consequuntur a reiciendis, quae quia totam officia. Similique
          tempora aliquam sed asperiores expedita maiores reiciendis ipsum illum
          dolor iusto hic fuga assumenda quia alias iste soluta natus, autem
          ipsam officia reprehenderit. Temporibus quidem tempore sequi quas nisi
          repellat, consequatur officia officiis, vero veniam porro cumque
          deserunt minima praesentium dolores, illum labore esse itaque dolorem
          necessitatibus ullam odit nulla delectus! Numquam aperiam, id ut natus
          consequatur quisquam, modi consequuntur totam laudantium provident
          fugit beatae, nesciunt iure culpa voluptates maiores? Ipsum, autem
          animi. Maxime, totam deserunt rerum quisquam, atque accusamus delectus
          odit, minus iusto laudantium ipsa asperiores debitis tempora sequi
          corrupti hic consequatur consectetur autem nemo eos aliquid.
          Consequuntur maiores ducimus provident dolor natus eos inventore eum
          accusamus nisi reprehenderit repellendus autem consectetur atque
          perspiciatis tenetur quo dolore, adipisci earum! Quam, explicabo, unde
          doloribus amet commodi dolore similique magni ullam reiciendis
        </p>
      </div>

      <div className="contni_sides" style={{ display: "flex" }}>
        <div
          className="rigth_side"
          style={{
            width: "30%",
            height: "50vh",
          }}
        ></div>
        <div
          className="left_side"
          style={{
            width: "70%",
            padding: "4em 4em",
            height: "50vh",
            backgroundColor: "gray",
          }}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
