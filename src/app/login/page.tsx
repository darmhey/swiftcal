import SignInButton from "../_components/SignInButton";

export default function Page() {
  return (
    <div className="bg-main_accent flex flex-col gap-10 justify-center items-center h-screen w-screen">
      <h2 className="text-3xl font-semibold">Sign in to access SwiftCal</h2>
      <SignInButton />
    </div>
  );
}
