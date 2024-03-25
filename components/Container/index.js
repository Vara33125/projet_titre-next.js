import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Container({ children }) {
  return (
    <>
      <header className="d-flex   greenColor">
        <div className="d-flex align-items-center">
          <Image
            className="p-2 ms-3 mb-2"
            src="/img/logo.png"
            width={80}
            height={80}
            alt="logo"
          />
        </div>
        <h1 className="mc pt-3 champColor">
          Faites entrer l'artisanat français dans votre salon
        </h1>
      </header>
      <nav className="navbar  navbar-expand-lg champMenu">
        <div className=" btn-right container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item btnHover">
                <Link className="  nav-link " href="/">
                  Nos produits
                </Link>
              </li>
              <li className="nav-item btnHover">
                <Link className="nav-link " href="/store">
                  Nos magasins
                </Link>
              </li>
              <li className="nav-item btnHover">
                <Link className="nav-link" href="/about_us">
                  Qui sommes nous ?
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
              />
              <Link href={"/signup"} className=" btn boutonMenu">
                {" "}
                S'inscrire
              </Link>
              <Link href={"/login"} className=" btn boutonMenu ">
                {" "}
                Connexion
              </Link>
            </form>
          </div>
        </div>
      </nav>
      {children}
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"
      ></script>
    </>
  );
}
