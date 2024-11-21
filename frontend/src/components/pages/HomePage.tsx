import { Category, Foods, Footer, Header, Hero } from "../constant";

export const HomePage = () => {
  return (
    <>
      <Header home="active" menu="" location="" />
      <div className="flex flex-col gap-[122px] z-10 mb-[86px]">
        <Hero />
        <Category />
        <Foods />
      </div>
      <Footer />
    </>
  );
};
