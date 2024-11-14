import { Category, Footer, Header, Hero } from "../constant";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-[122px]">
        <Hero />
        <Category />
      </div>
      <Footer />
    </>
  );
};
