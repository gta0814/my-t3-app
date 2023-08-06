// pages/index.tsx
import Footer from './components/Footer';
import Header from './components/Header';
import QuoteSection from './components/Quote';
import ScrollToTop from './components/ScrollToTop';
import Image from 'next/image';

const HomePage = () => (
  <div>
    <Header />
    <main>
      <section className="bg-gray-200 text-gray-800 px-5 py-40 text-center bg-custom-image bg-cover bg-center">
        <h1 className="text-4xl mb-2">Building the future</h1>
        <p className="text-xl">什么都不告诉我，我怎么知道咋做，写啥。就像我说我让你按照三个房子的样子给我装修一下你知道咋装？！我日。设计单加钱啊！！！！！！</p>
      </section>
      <section id="services" className="px-5 py-10">
        <h2 className="text-3xl mb-5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="border border-gray-200 p-5">
            <h3 className="text-2xl mb-2">Industry Experience</h3>
            <p className="text-gray-600">Our Edmonton management team has over 40 years of combined experience in the commercial construction industry. This expertise allows us to plan, construct, and deliver high-quality commercial building and renovation projects.</p>
          </div>
          <div className="border border-gray-200 p-5">
            <h3 className="text-2xl mb-2">Commercial Building and Renovation Services</h3>
            <p className="text-gray-600">Invicta Construction Edmonton offers full project management, from design, through construction, to completion.</p>
          </div>
          <div className="border border-gray-200 p-5">
            <h3 className="text-2xl mb-2">Commercial Building and Renovation Services</h3>
            <p className="text-gray-600">Invicta Construction Edmonton offers full project management, from design, through construction, to completion.</p>
          </div>
        </div>
      </section>
      <section id="projects" className="px-5 py-10">
        <h2 className="text-3xl mb-5">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="border border-gray-200">
            <Image src="/img/OIP.jpg" alt="Project 1" width={50} height={50} />
            <div className="p-5">
              <h3 className="text-2xl mb-2">Project 1</h3>
              <p className="text-gray-600">Description of project 1</p>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src="/img/OIP.jpg" alt="Project 2" width={50} height={50} />
            <div className="p-5">
              <h3 className="text-2xl mb-2">Project 2</h3>
              <p className="text-gray-600">Description of project 2</p>
            </div>
          </div>
          <div className="border border-gray-200">
            <Image src="/img/OIP.jpg" alt="Project 2" width={50} height={50} />
            <div className="p-5">
              <h3 className="text-2xl mb-2">Project 2</h3>
              <p className="text-gray-600">Description of project 2</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-10">
        <h2 className="text-3xl mb-5">About Us</h2>
        <p className="text-gray-600">We have over 40 years of combined experience in major renovations and commercial construction in Edmonton. We’ve worked on many projects and have obtained a wealth of practical knowledge along the way. Our team has a comprehensive understanding of building code requirements and good relationships with experienced and reputable architects, trades, and other professionals to bring your project to successful completion. Our experience allows us to troubleshoot challenges quickly, provide guidance to our clients, and create beautiful, functional, and efficient spaces.</p>
      </section>
      <QuoteSection />
      {/* <section className="px-5 py-10">
        <h2 className="text-3xl mb-5">Contact Us</h2>
        <p className="text-gray-600 mb-5">Here is our contact information...</p>
        <form>
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-800 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-200 p-2" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-200 p-2" />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block text-gray-800 mb-2">Message</label>
            <textarea id="message" name="message" className="w-full border border-gray-200 p-2" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-5 py-2">Submit</button>
        </form>
      </section> */}
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default HomePage;
