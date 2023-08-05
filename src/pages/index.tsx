import { SignInButton } from "@clerk/nextjs";
import Header from './components/Header';
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1>Home Page</h1>
        {/* 这个是带有标题和子标题的背景图部分 */}
        <section>
          <h1>Welcome to Invicta Construction</h1>
          <p>Building the future. Restoring the past.</p>
        </section>

        {/* 这个是表示公司业务的图标和文本部分 */}
        <section>
          <h2>Our Services</h2>
          <div>
            <h3>Residential</h3>
            <p>We build and remodel residential properties.</p>
          </div>
          <div>
            <h3>Commercial</h3>
            <p>We provide services for commercial properties.</p>
          </div>
          {/* Add more services here */}
        </section>

        {/* 这个是关于公司的描述部分 */}
        <section>
          <h2>About Us</h2>
          <p>Invicta Construction is a leading construction company with over 10 years of experience. We specialize in residential and commercial properties.</p>
        </section>

        {/* Add more sections as needed */}
      </main>
    </>
  );
}
