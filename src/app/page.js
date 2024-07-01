import Header from "../components/layout/Header";
import HomeMenu from "../components/layout/HomeMenu";
import Hero from "../components/layout/Hero"
import SectionHeader from "../components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section id="about" className="text-center my-16">
        <SectionHeader
            subHeader={"Our story"}
            mainHeader={"About us"}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p className="">Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the 
            industrys standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled 
          </p>
          <p className="">Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the 
            industrys standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled 
          </p>
          <p className="">Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum has been the 
          </p>
        </div>
      </section>
      <div className="my-5">
      <section id="contact" className="text-center my-8">
        <SectionHeader subHeader={"Don't Hesistate"} mainHeader={"Contact Us"} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500">+46 768 688 8787</a>
        </div>
      </section>
     
      </div>
    </>
  );
}
