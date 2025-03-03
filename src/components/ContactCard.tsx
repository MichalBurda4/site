import React from 'react';

interface ContactCardProps {
    name: string;
    phone: string;
    email: string;
    image: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, phone, email, image }) => {
    return (
        <aside className="contact-sidebar">
            <img src={image} alt={`Zdjęcie ${name}`} />
            <h3>{name}</h3>
            <p>Telefon: <a href={`tel:${phone}`}>{phone}</a></p>
            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        </aside>
    );
};

export default ContactCard;