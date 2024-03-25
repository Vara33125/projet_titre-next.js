import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <div className='ms-5'>
    <div className='d-flex justify-content-center'>
    <Image src="/img/logo.png" alt="logo" width={150} height={150}  />   
    </div>
    <div>
      <h1 className='text-center text-black'>Politique de Confidentialité du Site Web</h1>
    <p className='text-center mb-5'>Type de site : E-commerce</p>
    <h3 className='text-black '>But de cette politique de confidentialité</h3>
     <p className='ps-3'>Le but de cette politique de confidentialité est d'informer les utilisateurs de notre site des données personnelles que nous recueillerons, ainsi que des informations suivantes, le cas échéant :
    
    Données personnelles que nous recueillerons:</p>
    <ul>
      <li>L'utilisation des données recueillies.</li>
      <li>Données personnelles que nous recueillerons.</li>
    </ul>
    
    <h3 className='text-black pt-4'>Données personnelles que nous recueillerons</h3>
   <p className='ps-2'>Lorsque vous utilisez notre site de e-commerce, nous pouvons collecter les types de données personnelles suivants :</p> 
    <ul>
      <li>Informations d'identification (nom, adresse e-mail, etc.).</li>
      <li>Informations de paiement (numéro de carte de crédit, etc.).</li>
      <li>Historique de navigation et d'achat.</li>
    </ul>
    
    <h3 className='text-black pt-4'>Utilisation des données recueillies</h3>
    <p className='ps-2'>Nous utilisons les données personnelles collectées pour les finalités suivantes :</p>
    <ul>
      <li>Traiter les commandes et les paiements.</li>
      <li>Améliorer nos services et produits.</li>
      <li>Répondre aux demandes des utilisateurs.</li>
      <li>Personnaliser l'expérience utilisateur</li>
      
    </ul>
    <h3 className='text-black pt-4'>Qui a accès aux données recueillies</h3>
    <p className='ps-2'>Les données personnelles sont accessibles uniquement aux employés et prestataires de services autorisés qui en ont besoin pour exécuter leurs fonctions.</p>
    
    <h3 className='text-black pt-4'>Droits des utilisateurs du site</h3>
    <p className='ps-2'>Les utilisateurs ont les droits suivants concernant leurs données personnelles :</p>
    <ul>
      <li>Accès aux données collectées.</li>
      <li>Effacement des données (dans certaines circonstances).</li>
      <li>Opposition au traitement des données.</li>
      <li>Rectification des données inexactes.</li>
    </ul>
    
    <h3 className='text-black pt-4'>Politique de cookies du site</h3>
    <p className='ps-2'>Nous utilisons des cookies pour améliorer l'expérience de navigation des utilisateurs. Consultez notre politique de cookies pour plus d'informations.</p>
    
    <h3 className='text-black pt-4'>Lois applicables</h3>
    <p className='ps-2'>Conformément au Règlement général sur la protection des données (RGPD), cette politique de confidentialité est conforme aux règlements suivants :</p>
    <ul>
      <li>Les données à caractère personnel doivent être traitées de manière licite, loyale et transparente.</li>
      <li>Elles doivent être collectées pour des finalités déterminées, explicites et légitimes.</li>
      <li>Le traitement doit être adéquat, pertinent et limité à ce qui est nécessaire.</li>
      <li>Les données doivent être exactes et tenues à jour.</li>
      <li>Elles doivent être conservées de manière sécurisée.</li>
    </ul>
    <div className='d-flex justify-content-center pt-4'>
      <Link href="/signup" className='btn-colorGreen text-center mb-5 px-4 py-1 '> Retour </Link>
    </div>
    </div>
    </div>
  )
}
