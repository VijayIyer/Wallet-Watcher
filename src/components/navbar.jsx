import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex justify-center'>
      <Link href={"/"} className='text-3xl font-bold underline'>
        <button className='text-blue-600'>Wallet Watcher</button>
      </Link>
    </nav>
  );
};

export default Navbar;
