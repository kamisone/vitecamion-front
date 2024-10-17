import Link from "next/link";

export default function NosServicesPage() {
  return (
    <main className="max-w-2xl w-full mx-auto p-2 sm:p-4 text-secondary leading-6">
      <h1 className="text-2xl font-light sm:text-3xl tracking-wider">
        Nos Services
      </h1>
      <hr className="my-4" />
      <p className="font-thin text-sm sm:text-base">
        Chez VITE CAMION, nous offrons un service de débarras gratuit, simple et
        respectueux de l’environnement. Que vous souhaitiez libérer de l'espace
        chez vous ou vous débarrasser d’objets encombrants, notre équipe est là
        pour vous aider. Découvrez nos services en détail :
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Débarras Gratuit d’Encombrants
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Nous récupérons vos objets encombrants gratuitement, quel que soit leur
        état. Vous n'avez qu'à réserver en ligne, et notre équipe viendra à la
        date et à l'heure de votre choix pour récupérer vos articles volumineux.
        <br />
        <strong className="font-normal">
          Types d’encombrants que nous collectons :
        </strong>{" "}
        Meubles (canapés, armoires, tables, chaises, etc.) Électroménagers
        (réfrigérateurs, machines à laver, fours, etc.) Matériaux divers (bois,
        métal, plastique) Articles de jardinage (vieux outils, tondeuses)
        Équipements sportifs ou de loisirs Et tout autre objets...
        <br />
        Si vous avez des objets spécifiques, n'hésitez pas à nous contacter pour
        vérifier s'ils peuvent être pris en charge.
        <br />
        Notre engagement ne s’arrête pas à la simple collecte d’encombrants.
        Nous nous efforçons de donner une seconde vie aux objets récupérés.
        <br />
        <strong className="font-normal">Tri des objets : </strong> Après
        collecte, nous trions les articles pour identifier ceux qui peuvent être
        réutilisés.
        <br />
        <strong className="font-normal">Réparation et remise en état : </strong>
        Certains objets peuvent nécessiter de petites réparations ou une remise
        en état avant d’être réutilisés.
        <br />
        <strong className="font-normal">Revente ou don</strong> : Les objets en
        bon état sont revendus à des prix réduits ou donnés à des associations
        locales pour des projets sociaux ou caritatifs. Cette approche contribue
        à une réduction des déchets et à la promotion d’une économie circulaire,
        où les objets trouvent une nouvelle utilité au lieu d’être simplement
        jetés.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Transport à la Déchetterie
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Pour les objets qui ne peuvent pas être réutilisés ou recyclés, VITE
        CAMION s’engage à les acheminer vers des déchetteries ou centres de tri
        spécialisés.
      </p>
      <h3 className="font-normal text-sm sm:text-base">
        Pourquoi est-ce important ?
      </h3>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-light">Élimination responsable</strong> : Nous
          nous assurons que les objets non réutilisables sont éliminés de
          manière conforme aux normes environnementales locales.
        </li>
        <li>
          <strong className="font-light">Réduction des déchets</strong> : Notre
          objectif est de réduire au maximum la quantité d’encombrants envoyés à
          la décharge, en privilégiant toujours le recyclage.
        </li>
      </ul>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Service de Réservation Facile
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Nous avons simplifié le processus de réservation pour rendre le débarras
        aussi facile que possible pour vous.
      </p>
      <h3 className="font-normal text-sm sm:text-base">Comment ça marche :</h3>
      <p className="font-thin text-sm sm:text-base">
        <strong className="font-light">Réservation en ligne : </strong>{" "}
        Rendez-vous sur{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        et sélectionnez la date et l’heure qui vous conviennent pour le
        débarras.
        <br />
        <strong className="font-light">Nous nous occupons du reste</strong> : À
        la date choisie, notre équipe arrive chez vous, récupère les objets, et
        assure leur traitement (réutilisation, recyclage, ou transport à la
        déchetterie).
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Zones Couvertes
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Nous offrons actuellement nos services dans la région Île-de-France,
        avec une extension prévue à l'avenir.
      </p>
    </main>
  );
}
