import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer class='bg-white rounded-lg shadow m-4 dark:bg-gray-800'>
      <div class='w-full flex justify-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <div>
          <Link href='#'>
            <Image
              src={require("../../public/github-icon.png")}
              width={40}
              height={40}
              alt='Go to source'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
