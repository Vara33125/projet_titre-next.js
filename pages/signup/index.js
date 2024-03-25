import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <main class="  d-flex align-items-center">
      <section class="container-fluid d-flex flex-column align-items-center ">
        <div id="logo" class="d-flex align-items-center justify-content-center bg-white bg-opacity-75 ">
            <Image src="/img/logo.png" alt="logo"width={150} height={150} />    
        </div>
        <div id="form" class=" bg-white bg-opacity-75 ">
          <div class="m-2 p-2 formView">
            <form action="/process_inscription" method="post">
              <div class="d-flex flex-lg-row smview columnView w-100">
                <div class="col-md-4 col-lg-4 row-cols-sm-1 pe-md-1 my-1 d-flex flex-column input">
                  <label for="firstName"> Prénom</label>
                  <input type="text" id="firstName" />
                </div>
                <div class="col-md-4 col-lg-4  row-cols-sm-1 my-1 px-md-1 d-flex flex-column input">
                  <label for="lastname"> Nom</label>
                  <input type="text" id="lastname" name="lastName" />
                </div>
                <div class="col-md-4 col-lg-4 row-cols-sm-1    ps-md-1 my-1 d-flex flex-column input">
                  <label for="phoneNumber"> Numéro de téléphone</label>
                  <input type="number" id="phoneNumber" name="phoneNumber" />
                </div>
              </div>
              <div class="d-flex flex-lg-row smview columnView  w-100">
                <div class=" col-md-6 row-cols-sm-1 pe-md-1 d-flex flex-column input">
                  <label for="email"> Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div class=" col-md-6 row-cols-sm-1 ps-md-1 d-flex flex-column input">
                  <label for="confirmPassword">Confirmation Email</label>
                  <input
                    type="email"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </div>
              </div>
              <div class="d-flex flex-lg-row smview columnView w-100">
                <div class=" col-lg-4 row-cols-sm-1 pe-md-1 my-1 d-flex flex-column input">
                  <label for="adress"> Adresse</label>
                  <input type="text" id="adress" />
                </div>
                <div class=" col-lg-4 row-cols-sm-1 my-1 px-md-1 d-flex flex-column input">
                  <label for="city"> Ville</label>
                  <input type="text" id="city" name="city" />
                </div>
                <div class=" col-lg-4 row-cols-sm-1  ps-md-1 my-1 d-flex flex-column input">
                  <label for="codePostal"> Code Postal</label>
                  <input type="number" id="codePostal" name="codePostal" />
                </div>
              </div>
              <div class=" w-100 ">
                <div class="d-flex flex-column  mt-2">
                    <div className="d-flex flex-row align-items-center columnView mb-2">

                    <label>
                    {" "}
                    Mot de passe{" "}
                    </label>
                    <p className="fs-6 mb-0">
                      (Min 8 caractères. Doit au moins contenir un symbole, une majuscule, une minuscule et
                      un chiffre)
                    </p>
                    </div>
                  <input type="current-password" id="password" name="password" autoComplete="off" />
                </div>
              </div>
              <div class=" w-100">
                <div class="d-flex flex-column">
                  <label for="ConfirmPassword">Confirmer Mot de Passe</label>
                  <input
                    type="ConfirmPassword"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                  />
                </div>
              </div>
              <div class="ms-3 mt-4 d-flex align-items-center">
                <input type="checkbox" name="politique" id="politique" />
                <label class="ms-3" >
                  {" "}
                  je déclare avoir lu et compris, la <Link href="/confidentialite">politique de confidentialité </Link>
                   conformément aux articles 13 et 14 du règlement (UE) 2016/679
                </label>
              </div>
              <div class="d-flex justify-content-center m-4">
                <button class="colorGreen rounded" type="submit">
                  {" "}
                  Créer mon compte
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
