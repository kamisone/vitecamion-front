import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 shadow-sm bg-[#fff]">
      <Link href={"/"}>
        <img className="w-[100px] sm:w-[200px]"  src="logo/vitecamion-logo.png" alt="vitecamion"/>
      </Link>
    </div>
  );
}
