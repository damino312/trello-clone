import NavBar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-screen bg-slate-200">
      <NavBar />
      <main>{children}</main>
      {/* footer */}
    </div>
  );
};

export default MarketingLayout;
