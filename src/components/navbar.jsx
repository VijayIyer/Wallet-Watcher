import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className='flex justify-center gap-5 mt-5 mb-5'>
      <Image
        src={require("../../public/wallet.png")}
        height={40}
        width={40}
        alt='wallet icon'
      />
      <Link href={"/"} className='text-3xl font-bold underline'>
        <button className='text-blue-600'>Wallet Watcher</button>
      </Link>
    </nav>
  );
};

export default Navbar;
