import Link from "next/link";

export default function Header(props) {
  return (
    <header className="header">
      <nav
        className="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/">
          <h1>{props.siteTitle}</h1>
        </Link>
        <div>
          <Link href={`${typeof window !== "undefined" &&
          window.location.pathname == "/info" ?
          "/" : "/info"}`}>
            <h1>{`${typeof window !== "undefined" &&
          window.location.pathname == "/info" ?
          "close" : "info"}`}</h1>
          </Link>
        </div>
      </nav>
     
    </header>
  );
}

