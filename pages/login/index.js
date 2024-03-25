
import Link from 'next/link'
import React from 'react'



export default function index() {
  return (
    <main className="d-flex justify-content-center align-content-center p-5">
      <div
        id="bgForm"
        className="border-1 border-black bg-white bg-opacity-75 rounded centralForm"
        
      >
        <div className="d-flex justify-content-center">
          <div id="centraldiv" className="w-50 d-flex justify-content-center flex-column">
            <div>
              <h2 className="mt-5 mb-2 fw-bolder text-center ">
                Déjà client?
              </h2>
            </div>
            <form action="" method="post">
            <aside className="mt-4 mb-4 ">
              
              <input className='w-100 formInput' type="email" name="Email" id="Email" placeholder="Email" />
            </aside>
            <aside className="mb-3">
              
              <input
              className='w-100 formInput'
                type="current-password"
                name="password"
                id="Password"
                placeholder="Mot de Passe"
              />
            </aside>
            </form>
            <Link className="fst-italic mb-2" href="">
              Mot de passe oublié? </Link>
            <aside className="mt-2 flex-row d-flex">
              <input
                className="mt-2 me-3"
                type="checkbox"
                name="RemenberMe"
                id="RemenberMe"
              
              />
              <label className="fw-bold mt-2" >
                Se souvenir de moi</label
              >
              
            </aside>
            <div className="mt-4 d-flex justify-content-center">
              <div className="btn submitButton">
                Valider
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h4 className="mt-5  mb-4 fw-bolder h2"> Nouveau client? 
          </h4>
        </div>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-colorGreen mb-4 mt-3" href="/signup">
            Créer un compte</Link>
        </div>
      </div>
    </main>
  )
}
