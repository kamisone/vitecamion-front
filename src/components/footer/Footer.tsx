import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-2 px-1 bg-[#fff] shadow-[0_-2px_5px_#00000020] sm:py-4 sm:px-4">
      <nav>
        <ul className="mx-auto w-max text-xs list-none columns-2 sm:flex sm:gap-4 sm:items-center">
          <li>
            <Link
              className="no-underline text-[#0d47a1]"
              href={"/a-propos-de-nous"}
            >
              À Propos de Nous
            </Link>
          </li>
          <li>
            <Link className="no-underline text-[#0d47a1]" href={"/nos-services"}>
              Nos Services
            </Link>
          </li>
          <li>
            <Link className="no-underline text-[#0d47a1]" href={"/faq"}>
              FAQ
            </Link>
          </li>
          <li>
            <Link className="no-underline text-[#0d47a1]" href={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-[#0d47a1]"
              href={"/mentions-legales"}
            >
              Mentions Légales
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-[#0d47a1]"
              href={"/politique-de-confidentialite"}
            >
              Politique de Confidentialité
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
