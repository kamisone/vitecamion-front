import Link from "next/link";

export default function AProposDeNousPage() {
  return (
    <main className="max-w-2xl w-full mx-auto p-2 sm:p-4 text-secondary leading-6">
      <h1 className="text-2xl font-light sm:text-3xl tracking-wider">
        À Propos de VITE CAMION
      </h1>
      <hr className="my-4" />
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Notre Histoire
      </h2>
      <p className="font-thin text-sm sm:text-base">
        VITE CAMION est né de la volonté de simplifier la vie des particuliers
        en leur offrant un service de débarras gratuit, tout en adoptant une
        approche respectueuse de l’environnement. Conscients des difficultés que
        rencontrent beaucoup de gens lorsqu'ils veulent se débarrasser d'objets
        encombrants, nous avons créé VITE CAMION pour offrir une solution
        rapide, simple, et écoresponsable.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Notre Mission
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Chez VITE CAMION, notre mission est double :
        <br />
        <strong className="font-normal">
          Offrir un service de débarras gratuit et sans tracas
        </strong>{" "}
        pour les particuliers et professionnels, afin qu'ils puissent libérer de
        l’espace sans frais ni efforts.
        <strong className="font-normal">
          <br />
          Promouvoir la réutilisation et le recyclage des objets encombrants
        </strong>
        , en donnant une seconde vie à ce qui peut être encore utile. Lorsque
        cela n’est pas possible, nous nous assurons que les objets non
        réutilisables soient correctement transportés à la déchetterie pour un
        traitement conforme aux normes environnementales.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Comment Ça Marche ?
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Le processus est simple :
        <br />
        <strong className="font-normal">
          Réservez un créneau en ligne
        </strong>{" "}
        via notre site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        <br />
        <strong className="font-normal">Notre équipe vient chez vous</strong>,
        récupère vos encombrants à la date et à l'heure convenues.
        <br />
        <strong className="font-normal">Tri et réutilisation</strong> : Nous
        évaluons les objets collectés. Ceux qui peuvent être réutilisés sont
        remis en état pour être revendus à petit prix ou donnés. Les objets
        restants sont transportés à la déchetterie.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Notre Engagement Écologique
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Nous croyons en une économie circulaire où les objets ont une seconde
        vie. C'est pourquoi nous mettons un point d'honneur à maximiser la
        réutilisation des articles collectés. Que ce soit pour les particuliers
        ou les entreprises, nous cherchons à limiter l’impact des déchets sur
        l'environnement en offrant une solution gratuite et durable. Chaque
        objet récupéré est soigneusement évalué pour être réutilisé ou recyclé.
        Pour ceux qui ne peuvent pas l’être, nous nous engageons à les
        transporter dans les centres de tri et déchetteries appropriés.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Pourquoi Choisir VITE CAMION ?
      </h2>
      <p className="font-thin text-sm sm:text-base">
        <strong className="font-normal">Service 100% gratuit</strong> : Aucun
        frais caché, le service est entièrement gratuit.
        <br />
        <strong className="font-normal">Réactivité et simplicité</strong> :
        Réservez en quelques clics, et nous nous occupons du reste.
        <br />
        <strong className="font-normal">Impact environnemental positif </strong>
        : En donnant une nouvelle vie aux objets, nous réduisons la quantité de
        déchets envoyés à la déchetterie.
        <br />
        <strong className="font-normal">Professionnalisme</strong> : Notre
        équipe est formée pour assurer un service rapide, efficace, et
        respectueux de votre espace.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Notre Vision d’Avenir
      </h2>
      <p className="font-thin text-sm sm:text-base">
        VITE CAMION ne cesse d’innover pour répondre aux besoins des
        particuliers et professionnels tout en protégeant notre planète. Nous
        prévoyons d'étendre nos services à d'autres régions, d'offrir encore
        plus de solutions pour la gestion des encombrants, et d'accroître nos
        efforts en matière de réutilisation et de recyclage.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Rejoignez-nous dans notre Mission
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Vous aussi, vous pouvez contribuer à réduire les déchets et faire partie
        d'une initiative écoresponsable. En utilisant VITE CAMION, vous
        participez à une solution innovante et durable pour un futur plus propre
        et plus respectueux de l’environnement.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Contactez-nous
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Si vous avez des questions ou souhaitez en savoir plus, n’hésitez pas à
        nous contacter par téléphone au{" "}
        <a
          href="tel:+33605971180"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          +33605971180
        </a>
        , ou par email à{" "}
        <a
          href="mailto:vitecamion@gmail.com"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
