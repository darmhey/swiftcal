import SideNavigation from "../_components/SideNavigation";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" w-screen bg-main_accent flex flex-row">
        <SideNavigation />
        {children}
      </div>
    </>
  );
}
