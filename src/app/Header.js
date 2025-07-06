import Link from 'next/link';

export default function Header() {
    return <header>
        <h1>Ogłoszenia</h1>
        <nav>
            <Link href="/">
                <div className="nav-button">Strona główna</div>
            </Link>
            <Link href="/create">
                <div className="add-offer nav-button"><strong>+</strong> Dodaj ogłoszenie</div>
            </Link>
            
        </nav>
    </header>
}