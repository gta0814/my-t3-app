import Link from "next/link";

// components/Header.tsx
const Header = () => (
    <header className="flex items-center justify-between px-5 py-3 bg-gray-800 text-white">
        <div className="flex items-center">
            <img src="/img/duang.jpg" alt="Company Logo" className="mr-3 w-9" />
            <Link href="/" className="mx-2">Home</Link>
            <Link href="/#services" className="mx-2">Services</Link>
            <Link href="/#projects" className="mx-2">Projects</Link>
            {/* 更多链接... */}
        </div>
        <Link href="/#quote" className="border border-blue-500 bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quote
        </Link>
        <div className="bg-white text-gray-800 px-3 py-1 rounded hover:bg-blue-300 transition-colors duration-200">
            <a href="tel:+17808856796">780-885-6796</a>
        </div>
    </header>
);

export default Header;
