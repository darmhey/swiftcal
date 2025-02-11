import SignInButton from "../_components/SignInButton";

export default function Page() {
  return (
    <div className="border border-red-400 flex flex-col gap-10 justify-center items-center h-screen w-screen">
      <h2 className="text-3xl font-semibold">Sign in to access SwiftCal</h2>
      <SignInButton />
    </div>
  );
}
