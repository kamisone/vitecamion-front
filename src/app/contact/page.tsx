import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="max-w-2xl w-full mx-auto p-2 sm:p-4 text-secondary leading-6">
      <h1 className="text-2xl font-light sm:text-3xl tracking-wider">
        Contactez-nous
      </h1>
      <hr className="my-4" />

      <p className="font-thin text-sm sm:text-base">
        Vous avez des questions ou souhaitez réserver un débarras ? L’équipe de
        VITE CAMION est à votre disposition pour répondre à toutes vos demandes.
        N’hésitez pas à nous contacter via les différents moyens ci-dessous.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Coordonnées de Contact
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Vous pouvez nous joindre rapidement par téléphone ou email.
      </p>
      <ul className="font-thin text-sm sm:text-base">
        <li>
          <strong className="font-normal">Téléphone : </strong>{" "}
          <a
            href="tel:+33605971180"
            className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
          >
            +33605971180
          </a>
        </li>
        <li>
          <strong className="font-normal">Email : </strong>{" "}
          <a
            href="mailto:vitecamion@gmail.com"
            className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
          >
            vitecamion@gmail.com
          </a>
        </li>
        <li>
          <strong className="font-normal">Adresse du siège social : </strong> 17
          rue du moulin Le châtelet-en-brie 77820
        </li>
      </ul>

      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        FAQ
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Vous avez peut-être déjà une réponse à votre question ! Consultez notre{" "}
        <Link
          href="/faq"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          FAQ
        </Link>{" "}
        pour en savoir plus sur nos services, les objets que nous collectons, et
        le processus de réservation.
      </p>

      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Service Clients
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Nous mettons un point d'honneur à offrir un service clients de qualité.
        Si vous rencontrez un problème ou si vous souhaitez faire part d'une
        suggestion, n’hésitez pas à nous écrire via le formulaire de contact ou
        par email. Nous traiterons votre demande avec attention et réactivité.
      </p>
    </main>
  );
}
