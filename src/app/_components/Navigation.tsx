import Link from "next/link";
export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="flex gap-4 uppercase font-bold p-1">
          <li className="p-3">
            <Link href="/login">login</Link>
          </li>
          <li className="bg-accent px-6 p-3 rounded-full">
            <Link href="/login">Signup</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
