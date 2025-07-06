"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Offers, { Categories } from "../list";

export default function CreateOfferPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(Categories[0]);
    const [price, setPrice] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOffer = {
            id: Offers.length > 0 ? Math.max(...Offers.map(o => o.id)) + 1 : 1,
            title,
            description,
            category,
            price: Number(price),
        };
        Offers.push(newOffer);
        router.push("/");
    };

    return (
        <main className="offers">
            <h2 className="centered-heading">Dodaj ogłoszenie</h2>
            <form onSubmit={handleSubmit} className="centered-form">
                <label>Tytuł:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="rounded-input" />
                </label>
                <label>Opis:
                    <textarea value={description} onChange={e => setDescription(e.target.value)} required className="rounded-input" />
                </label>
                <label>Kategoria:
                    <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-input">
                        {Categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                </label>
                <label>Cena:
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} required min="0" className="rounded-input" />
                </label>
                <button type="submit" className="green-button">Dodaj ogłoszenie</button>
            </form>
        </main>
    );
}

