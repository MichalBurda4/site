import React from "react";

const Contact: React.FC = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg p-6 flex flex-col items-center">
            <img
                src="/images/owner.jpg"
                alt="Owner"
                className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">Jan Kowalski</h2>
            <p className="text-sm text-gray-300">Kierownik Budowy</p>
            <div className="mt-4 space-y-2 text-center">
                <p><strong>📍 Adres:</strong> Warszawa, Polska</p>
                <p><strong>📞 Telefon:</strong> <a href="tel:+48123456789" className="text-orange-400 hover:underline">+48 123 456 789</a></p>
                <p><strong>📧 Email:</strong> <a href="mailto:kontakt@example.com" className="text-orange-400 hover:underline">kontakt@example.com</a></p>
            </div>
        </aside>
    );
};

export default Contact;
