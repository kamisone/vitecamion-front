import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-2xl w-full mx-auto p-2 sm:p-4 text-secondary leading-6">
      <h1 className="text-2xl font-light sm:text-3xl tracking-wider">
        Mentions Légales
      </h1>
      <hr className="my-4" />
      <p className="font-thin text-sm sm:text-base">
        Conformément aux dispositions des articles 6-III et 19 de la Loi n°
        2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique
        (LCEN), nous informons les utilisateurs et visiteurs du site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        des informations légales suivantes :
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Informations Générales
      </h2>
      <p className="font-thin text-sm sm:text-base">
        <span>SARL VITE CAMION</span>
        <br />
        <span>17 rue du moulin Le châtelet-en-brie 77820</span>
        <br />
        <span>Au capital social de 1.000 Euros</span>

        <br />
        <span>0605971180</span>
        <br />
        <a
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid font-thin"
          href="mailto:vitecamion@gmail.com"
        >
          vitecamion@gmail.com
        </a>
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Hébergement
      </h2>
      <p className="font-thin text-sm sm:text-base">
        <Link
          href={"https://hostinger.com"}
          rel="nofollow"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          Hostinger
        </Link>

        <br />
        <span>61 Lordou Vironos Street, 6023 Larnaca, Chypre</span>
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Directeur de la publication
      </h2>
      <p className="text-sm sm:text-base">
        <span className="font-thin">Mohamed ben khouya</span>
        <br />
        <a
          href="mailto:vitecamion@gmail.com"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid font-thin"
        >
          vitecamion@gmail.com
        </a>
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Propriété Intellectuelle
      </h2>
      <p className="font-thin text-sm sm:text-base">
        L’ensemble des éléments présents sur le site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        , notamment les textes, images, graphismes, logos, icônes, sons,
        logiciels, et autres éléments, sont protégés par le droit de la
        propriété intellectuelle et appartiennent à VITE CAMION, sauf mention
        contraire.
        <br />
        Toute reproduction, distribution, modification, adaptation,
        retransmission, ou publication de ces éléments est strictement interdite
        sans l’autorisation écrite expresse de VITE CAMION. Pour toute demande
        de reproduction ou utilisation d’un quelconque élément du site, merci de
        nous contacter à l’adresse{" "}
        <a
          href="mailto:vitecamion@gmail.com"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion@gmail.com
        </a>
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Responsabilité
      </h2>
      <p className="font-thin text-sm sm:text-base">
        VITE CAMION met en œuvre tous les moyens à sa disposition pour assurer
        l’exactitude des informations diffusées sur son site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        . Toutefois, nous ne pouvons garantir l’exactitude, la complétude, ou
        l’actualité des informations présentes sur le site.
        <br />
        En conséquence, VITE CAMION ne saurait être tenu pour responsable des
        éventuelles erreurs ou omissions dans les informations diffusées, ni des
        dommages résultant de l’utilisation des informations ou du site.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Liens Hypertextes
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Le site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        peut contenir des liens hypertextes vers d'autres sites web. ViteCamion
        décline toute responsabilité quant aux contenus de ces sites externes,
        sur lesquels nous n’avons aucun contrôle.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Politique de Confidentialité et Protection des Données
      </h2>{" "}
      <p className="font-thin text-sm sm:text-base">
        Les informations personnelles collectées via le site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        sont traitées conformément à la réglementation en vigueur, notamment le
        Règlement Général sur la Protection des Données (RGPD).
        <br />
        Les données personnelles sont collectées à des fins de gestion des
        réservations et de contact. Nous ne partageons jamais vos données sans
        votre consentement, sauf obligation légale. Droits des utilisateurs :
        Vous avez un droit d’accès, de rectification, de suppression, et de
        portabilité des données vous concernant, conformément au RGPD. Pour
        exercer vos droits, vous pouvez nous contacter à l’adresse{" "}
        <a
          href="mailto:vitecamion@gmail.com"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion@gmail.com
        </a>
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Cookies
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Le site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        peut utiliser des cookies pour améliorer votre expérience utilisateur et
        effectuer des analyses de fréquentation. En continuant à naviguer sur le
        site, vous acceptez l’utilisation de cookies conformément à notre
        politique de gestion des cookies.
        <br />
        Vous pouvez paramétrer vos préférences en matière de cookies directement
        via les paramètres de votre navigateur.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Droit Applicable et Litiges
      </h2>
      <p className="font-thin text-sm sm:text-base">
        Les présentes mentions légales sont soumises au droit français. Tout
        litige en lien avec l’utilisation du site{" "}
        <Link
          href="/"
          className=" text-secondary no-underline pb-[2px] border-b border-0 border-b-secondary/45 border-solid"
        >
          vitecamion.com
        </Link>{" "}
        sera soumis aux tribunaux compétents en France.
      </p>
      <h2 className="text-base sm:text-lg mt-6 mb-1 sm:mt-8 sm:mb-2 text-primary font-light">
        Modification des Mentions Légales
      </h2>
      <p className="font-thin text-sm sm:text-base">
        VITE CAMION se réserve le droit de modifier les présentes mentions
        légales à tout moment et sans préavis. Nous invitons donc les
        utilisateurs à les consulter régulièrement.
      </p>
    </main>
  );
}
