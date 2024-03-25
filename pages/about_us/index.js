import React from 'react'
import Image from 'next/image'

export default function index() {
  return (
    <>
    <section className="container-fluid d-flex justify-content-center">
            <div className="w-75 mt-5">
                <div id="pres" className="d-flex justify-content-center container-fluid p-0 ">
                    <h2 className="text-center "> QUI SOMMES-NOUS ? </h2>
                </div>
            </div>
        </section>
        <section className=" container-fluid d-flex justify-content-center mt-5">
            <div id="grille" className=" w-75 d-flex flex-column align-items-center container-fluid">
            <section id="section1" className="d-flex">
                <div className="col-md-7 border border-black border-opacity-25 m-1 d-flex flex-column align-items-center justify-content-center px-5">
                     <p className="fw-bold h3 mb-4 ">
                    Introduction
                    </p>
                    <p className="h5 fw-normal texte">
                Bienvenue chez Canap'Plus, votre destination ultime pour le confort et l'élégance. En tant que spécialistes des canapés haut de gamme, nous nous engageons à offrir à nos clients une expérience unique et luxueuse. Découvrez notre histoire, notre gamme de produits et notre engagement envers la satisfaction de nos clients. 
                    </p>
                </div>
                <div className="col-md-5 border border-black border-opacity-25 m-1">
                     <Image className="img-fluid" src={"/img/presentation/collection-outils-charpentier.jpg"} height = {100} width={600} alt="outils-cordonnier" / ></div>
            </section>
            <section id="section2" className="d-flex">
                <div className="order-md-2 col-md-7 border border-black border-opacity-25 m-1 d-flex flex-column align-items-center justify-content-center px-5">
                     <p className="fw-bold h3 mb-4 ">
                        Notre histoire
                    </p>
                    <p className="h5 fw-normal texte">
                        Fondée en 2015 par le visionnaire du design intérieur, Alexandre Dupont, Canap'Plus est née de la passion pour le mobilier de qualité. Notre entreprise a commencé modestement dans un petit atelier, mais elle a rapidement gagné en réputation grâce à son savoir-faire artisanal et à son attention aux détails. Aujourd'hui, nous sommes fiers d'être l'un des principaux fabricants de canapés sur mesure en France. 
                    </p>
                </div>
                <div className=" order-md-1 col-md-5 border border-black border-opacity-25 m-1">
                     <Image className="img-fluid" src="/img/presentation/gros-plan-cordonnier-coupe-cuir.jpg" width={600} height={100} alt="main-cordonnier"  /></div>
            </section>
            <section id="section3" className="d-flex">
                <div className="order-md-1 col-md-7 border border-black border-opacity-25 m-1 d-flex flex-column align-items-center justify-content-center px-5">
                     <p className="fw-bold h3 mb-4 ">
                        Notre engagement
                    </p>
                    <p className="h5 fw-normal texte">
                        Chez Canap'Plus, nous croyons que le confort ne devrait jamais être compromis. C'est pourquoi nous utilisons des matériaux de haute qualité, des techniques de fabrication de pointe et un service client exceptionnel. Chaque canapé est conçu avec soin et précision pour répondre aux attentes les plus élevées de nos clients
                    </p>
                </div>
                <div className=" order-md-2 col-md-5 border border-black border-opacity-25 m-1"> 
                <Image className="img-fluid" src="/img/presentation/homme-dans-studio-cree-articles-cuir.jpg" width={600} height={100}  alt="cordonnier" /></div>
            </section>
            </div>
        </section>
        </>
  )
}
