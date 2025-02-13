import SideNavigation from "../_components/SideNavigation";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" w-screen bg-main_accent flex flex-row">
        <div className=" w-1/6 ">
          <SideNavigation />
        </div>
        <div className=" w-5/6 "> {children}</div>
      </div>
    </>
  );
}
