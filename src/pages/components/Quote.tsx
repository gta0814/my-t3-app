// components/QuoteSection.tsx
import { useState } from 'react';

const QuoteSection = () => {
    const [area, setArea] = useState(1);
    const [pricePerSqMeter, setPricePerSqMeter] = useState(35);
    const [materialCost, setMaterialCost] = useState(1);

    const calculateTotalCost = () => {
        return area * pricePerSqMeter * materialCost;
    }

    return (
        <section id="quote" className="bg-gray-200 text-gray-800 px-5 py-20 text-center">
            <h1 className="text-4xl mb-2">Estimate</h1>
            <label className="block text-center">Area:</label>
            <input
                type="number"
                value={area}
                onChange={e => setArea(Number(e.target.value))}
                placeholder="Area in sq meters"
                className="p-2 m-2"
            />
            x
            <label className="block text-center">Price/meter:</label>
            <input
                type="number"
                value={pricePerSqMeter}
                onChange={e => setPricePerSqMeter(Number(e.target.value))}
                placeholder="Price per sq meter"
                className="p-2 m-2"
            />
            x
            <label className="block text-center">Material cost:</label>
            <input
                type="number"
                value={materialCost}
                onChange={e => setMaterialCost(Number(e.target.value))}
                placeholder="Material cost"
                className="p-2 m-2"
            />
            =
            <p className="text-xl mt-4">Total Cost: {calculateTotalCost()}</p>
        </section>
    )
}

export default QuoteSection;
