import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full h-30 bg-slate-600">
            <ul className="w-half h-30 flex flex-row justify-evenly	">
                <li>
                    <Link href="/">
                        DistanZer
                    </Link>
                </li>
                <li>
                    <Link href="/new-goal">
                        Set new goal
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
