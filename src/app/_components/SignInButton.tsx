import Link from "next/link";
import Image from "next/image";
function SignInButton() {
  return (
    <form>
      <Link href="/http://127.0.0.1:3002/api/v1/auth/google">
        <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
          <Image
            src="google.svg"
            alt="Arrow"
            width={18}
            height={18}
            className="ml-2"
          />
          <span>Continue with Google</span>
        </button>
      </Link>
    </form>
  );
}

export default SignInButton;
