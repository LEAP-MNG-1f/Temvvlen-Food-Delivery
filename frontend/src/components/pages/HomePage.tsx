import { Category, Foods, Footer, Header, Hero } from "../constant";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-[122px] z-[1]">
        <Hero />
        <Category />
        <Foods />
      </div>
      <Footer />
    </>
  );
};
