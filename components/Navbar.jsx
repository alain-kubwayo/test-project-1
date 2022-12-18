import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav className="flex justify-between py-4 border-b-2 border-sky-500">
            <div className="logo">
                <Image src="/ninja-logo.svg" width={24} height={24} alt="Logo" />
            </div>
            <div className="flex gap-x-2">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">Ninjas</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;