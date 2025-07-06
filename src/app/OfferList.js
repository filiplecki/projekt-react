import Offers, { Categories } from "./list";
import Link from 'next/link';
import { useState } from "react";

export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState('Wszystkie');

    const filteredOffers = selectedCategory === 'Wszystkie'
        ? Offers
        : Offers.filter(offer => offer.category === selectedCategory);

    return (
        <main className="offers">
            <h2>Wszystkie ogłoszenia ({filteredOffers.length})</h2>
            <div className="category-btn-group">
                {['Wszystkie', ...Categories].map(cat => (
                    <button
                        key={cat}
                        className={`category-btn${selectedCategory === cat ? ' active' : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                        type="button"
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {filteredOffers.length === 0 ? (
                <p>Nie ma żadnych ogłoszeń.</p>
            ) : (
                <div className="offers-grid">
                    {filteredOffers.map((value) => (
                        <div className="offer" key={value.id}>
                            <h3>{value.title}</h3>
                            <p><strong>Cena:</strong> {value.price} zł</p>
                            <Link href={`/offer-details/${value.id}`}>
                                <button className="more-details green-button">Szczegóły →</button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
