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
            <div className="details-grid">
                <div>
                    <h2>{offerDetail.title}</h2>
                    <p><strong>Opis:</strong> {offerDetail.description}</p>
                </div>
                <div>
                    <p><strong>Kategoria:</strong> {offerDetail.category}</p>
                    <p><strong>Cena:</strong> {offerDetail.price} zł</p>
                </div>
            </div>
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
