import Link from "next/link";

export default function PolitiqueDeConfidentialitePage() {
  return (
    <main className="max-w-2xl w-full mx-auto p-2 sm:p-4 text-secondary leading-6">
      <h1 className="text-2xl font-light sm:text-3xl tracking-wider">
        Politique de Confidentialité
      </h1>
      <hr className="my-4" />
      <p className="font-thin text-sm sm:text-base">
        Chez VITE CAMION, la confidentialité de vos données est une priorité.
        Cette politique de confidentialité explique comment nous collectons,
        utilisons, et protégeons vos informations personnelles lorsque vous
        utilisez notre site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        . Nous nous engageons à respecter la réglementation en vigueur,
        notamment le Règlement Général sur la Protection des Données (RGPD).
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Responsable du Traitement des Données
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Le responsable du traitement des données personnelles collectées sur le
        site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        est :
      </p>

      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Nom de l'entreprise : </strong> VITE
          CAMION
        </li>
        <li>
          <strong className="font-light">Adresse : </strong> 17 rue du moulin Le
          chêtelet-en-brie 77820
        </li>
        <li>
          <strong className="font-light">Téléphone : </strong> +33605971180
        </li>
        <li>
          <strong className="font-light">Email : </strong> vitecamion@gmail.com
        </li>
        <li>
          <strong className="font-light">
            Délégué à la protection des donnés :{" "}
          </strong>{" "}
          Mohamed ben khouya
        </li>
      </ul>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Données Collectées
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Lors de l'utilisation de notre site, nous collectons différentes
        catégories de données personnelles, notamment :
      </p>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Informations de contact : </strong>{" "}
          nom, prénom, adresse e-mail, numéro de téléphone.
        </li>
        <li>
          <strong className="font-light">Données de réservation : </strong>{" "}
          adresse de l’enlèvement, détails des encombrants.
        </li>
        <li>
          <strong className="font-light">Données techniques : </strong> adresse
          IP, type de navigateur, système d'exploitation, données de navigation
          (via les cookies)
        </li>
      </ul>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Finalités du Traitement
      </h2>

      <p className="font-thin text-sm sm:text-base">
        Les données collectées sont utilisées pour les finalités suivantes :
      </p>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Gestion des réservations : </strong>{" "}
          nous utilisons vos données pour organiser et gérer votre demande de
          débarras.
        </li>
        <li>
          <strong className="font-light">Amélioration du service : </strong>{" "}
          analyse de vos interactions avec le site pour améliorer nos services
          (envoi de formulaires de satisfaction, optimisation du site).
        </li>
        <li>
          <strong className="font-light">Communication : </strong> envoi
          d'informations sur vos réservations ou de communications relatives à
          nos services.
        </li>
        <li>
          <strong className="font-light">Conformité légale : </strong> respect
          des obligations légales, notamment fiscales et comptables.
        </li>
      </ul>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Base Légale du Traitement
      </h2>

      <p className="font-thin text-sm sm:text-base">
        Conformément au RGPD, le traitement de vos données personnelles repose
        sur les bases légales suivantes :
      </p>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Exécution d’un contrat : </strong> pour
          gérer vos réservations et fournir le service de débarras gratuit.
        </li>
        <li>
          <strong className="font-light">Consentement : </strong> pour l’envoi
          d’informations commerciales ou de newsletters (si vous avez donné
          votre accord explicite).
        </li>
        <li>
          <strong className="font-light">Obligations légales : </strong> pour
          répondre à nos obligations légales, notamment en matière fiscale.
        </li>
      </ul>

      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Partage des Données
      </h2>

      <p className="font-thin text-sm sm:text-base">
        Nous ne partageons pas vos données personnelles avec des tiers, sauf
        dans les cas suivants :
      </p>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Fournisseurs de services : </strong>{" "}
          nous pouvons partager vos données avec des prestataires de services
          (hébergeurs, développeurs de logiciels) pour le fonctionnement de
          notre site et de nos services.
        </li>
        <li>
          <strong className="font-light">Obligations légales : </strong> si la
          loi nous y oblige, nous pourrions être tenus de communiquer certaines
          données aux autorités compétentes.
        </li>
      </ul>

      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Durée de Conservation des Données
      </h2>

      <p className="font-thin text-sm sm:text-base">
        Vos données personnelles sont conservées uniquement pendant la durée
        nécessaire pour atteindre les finalités définies :
      </p>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Données de réservation : </strong>{" "}
          conservées jusqu'à la demande de désinscription ou suppression.
        </li>
        <li>
          <strong className="font-light">Données marketing : </strong> si la loi
          nous y oblige, nous pourrions être tenus de communiquer certaines
          données aux autorités compétentes.
        </li>
        <li>
          <strong className="font-light">Données légales : </strong> conservées
          selon les obligations légales (par exemple, les données comptables
          doivent être conservées pendant 10 ans).
        </li>
      </ul>

      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Vos Droits
      </h2>

      <p className="font-thin text-sm sm:text-base">
        Conformément au RGPD, vous disposez des droits suivants concernant vos
        données personnelles :
      </p>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Droit d'accès : </strong> vous pouvez
          demander l'accès aux données que nous détenons sur vous.
        </li>
        <li>
          <strong className="font-light">Droit de rectification : </strong> vous
          pouvez demander la correction de vos données si elles sont inexactes
          ou incomplètes.
        </li>
        <li>
          <strong className="font-light">Droit de suppression : </strong> vous
          pouvez demander la suppression de vos données personnelles.
        </li>
      </ul>

      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Sécurité des Données
      </h2>

      <p className="font-thin text-sm sm:text-base">
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées pour protéger vos données personnelles contre la perte,
        l'altération, l'accès non autorisé, ou la divulgation. Ces mesures
        incluent le cryptage des données et la sécurisation de notre
        infrastructure informatique.
      </p>

      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Modifications de la Politique de Confidentialité
      </h2>

      <p className="font-thin text-sm sm:text-base">
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Toute modification sera publiée sur cette
        page, et nous vous informerons de toute modification substantielle par
        e-mail ou via une notification sur le site.
      </p>
    </main>
  );
}
