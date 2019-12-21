import Link from "next/link";

export default function Header(props) {


    return (
        <header className="header">
            <nav className="nav" role="navigation" aria-label="main navigation">
                <Link href="/">
                    <a>
                        <h1 className="parent-category lengthen">{'</>'}</h1>
                    </a>
                </Link>

                <Link
                    href={`${typeof window !== "undefined" && window.location.pathname == "/info"
                    ? "/"
                    : "/info"}`}>
                    <a>
                        <h1 className="parent-category lengthen">{`${typeof window !== "undefined" && window.location.pathname == "/info"
                                ? "Exit"
                                : "Info"}`}</h1>
                    </a>
                </Link>

                   
            </nav>

        </header>
    );
}
