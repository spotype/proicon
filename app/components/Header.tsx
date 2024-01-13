import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className=" py-3 bg-white shadow-xl">
      <div className="flex w-3/4 mx-auto">
        <Link href={"/"}>
          <Image src={Logo} width={30} height={30} alt="logo" />
        </Link>
      </div>
    </div>
  );
}
