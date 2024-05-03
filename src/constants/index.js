import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about-us", label: "Sobre nosotros" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contáctanos" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marcas' },
    { value: '500+', label: 'Tiendas' },
    { value: '250k+', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$199.990",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$209.990",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$219.990",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$229.990",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Envío gratis",
        subtext: "Disfruta de una experiencia de compra sin problemas con nuestro servicio de envío gratuito."
    },
    {
        imgURL: shieldTick,
        label: "Pagos 100% seguros",
        subtext: "Experimenta transacciones sin preocupaciones con nuestras opciones de pago seguras."
    },
    {
        imgURL: support,
        label: "Nos encanta ayudarte",
        subtext: "Nuestro equipo dedicado está aquí para ayudarte en cada paso del camino."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Juan Perez',
        rating: 4.5,
        feedback: "La atencion a los detalles y la calidad del producto excedieron mis expectativas, lo recomiendo totalmente."
    },
    {
        imgURL: customer2,
        customerName: 'Camila Soto',
        rating: 4.5,
        feedback: "El producto no solo cumplio mis expectativas sino que tambien las excedio, voy a volver a comprar muy pronto."
    }
];


export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Links",
        links: [
            { name: "Sobre nosotros", link: "/" },
            { name: "Preguntas frecuentes", link: "/" },
            { name: "Trabaja con nosotros", link: "/" },
            { name: "Política de privacidad", link: "/" },
            { name: "Política de pagos", link: "/" },
        ],
    },
    {
        title: "Habla con alguien",
        links: [
            { name: "clientes@nike.com", link: "mailto:customer@nike.com" },
            { name: "+56912345678", link: "tel:+56912345678" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];