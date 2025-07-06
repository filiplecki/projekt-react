"use client";
import { useRouter, useParams } from 'next/navigation';
import Offers from "../../list";

export default function OfferDetailsPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const offerDetail = Offers.find((element) => element.id === Number(id));

    if (!offerDetail) {
        return <main className="offers"><h2>Ogłoszenie nie znalezione</h2></main>;
    }

    return (
        <main className="offers">
            <article>
                <h2 style={{ marginBottom: 16 }}>{offerDetail.title}</h2>
                <div style={{ display: 'flex', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
                    <span><strong>Cena:</strong> {offerDetail.price} zł</span>
                    <span><strong>Kategoria:</strong> {offerDetail.category}</span>
                </div>
                <div style={{ marginBottom: 32 }}>
                    <strong>Opis:</strong>
                    <div>{offerDetail.description}</div>
                </div>
            </article>
            <div className="centered-actions">
                <button
                    className="red-button"
                    onClick={() => {
                        const i = Offers.findIndex(o => o.id === Number(id));
                        if (i !== -1) Offers.splice(i, 1);
                        router.push("/");
                    }}
                >
                    Usuń ogłoszenie
                </button>
            </div>
        </main>
    );
} 