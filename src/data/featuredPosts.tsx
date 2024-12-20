
interface Posts {
    id: number,
    image: string,
    pais: string,
    ciudad: string,
    description: string,
    places: string[]
}

export default function featurePosts(): Posts[] {
    return [
        {
            id: 1,
            image:'/images/tori.jpg',
            pais: 'Japón',
            ciudad: 'Kyoto',
            description: 'Un viaje a Kyoto es como retroceder en el tiempo. Sus templos centenarios, jardines zen y casas de té tradicionales crean un ambiente de paz y serenidad. No te pierdas:',
            places: [
                'El Pabellón Dorado (Kinkaku-ji).',
                'Los místicos bosques de bambú de Arashiyama.',
                'La experiencia de vestir un kimono y recorrer Gion, el barrio de las geishas.'
            ]
        },
        {
            id: 2,
            image:'/images/santorini-azul.jpg',
            pais: 'Grecia',
            ciudad: 'Santorini',
            description: 'Este icónico destino es conocido por sus casas blancas con cúpulas azules que contrastan con el brillante Mar Egeo. Perfecto para una escapada romántica o unas vacaciones de relax. Disfruta de:',
            places: [
                'Las vistas al atardecer desde Oía.',
                'Sus playas únicas como la Playa Roja.',
                'La cocina griega local, especialmente el fresco marisco.'
            ]
        },
        {
            id: 3,
            image:'/images/peru.jpg',
            pais: 'Perú',
            ciudad: 'Machu Picchu',
            description: 'Ubicado en lo alto de los Andes, este sitio arqueológico es un testimonio de la grandeza de la civilización incaica. Ideal para amantes de la historia y la naturaleza. Asegúrate de:',
            places: [
                'Hacer la caminata del Camino Inca.',
                'Explorar la ciudad de Cusco.',
                'Probar un plato de ceviche auténtico.'
            ]
        },
        {
            id: 4,
            image:'/images/savannah.jpg',
            pais: 'Sudáfrica',
            ciudad: 'Ciudad del Cabo',
            description: 'Con una mezcla de paisajes naturales, vida silvestre y cultura urbana vibrante, Ciudad del Cabo tiene algo para todos. No dejes de:',
            places: [
                'Subir a la cima de la Montaña de la Mesa.',
                'Visitar Robben Island, donde estuvo preso Nelson Mandela.',
                'Explorar los viñedos de Stellenbosch cercanos.'
            ]
        },
        {
            id: 5,
            image:'/images/husavik.jpg',
            pais: 'Islandia',
            ciudad: 'Reikiavik',
            description: 'La capital islandesa es la puerta de entrada a un país lleno de maravillas naturales. Desde glaciares hasta volcanes, este destino es un sueño para los aventureros. Vive experiencias como:',
            places: [
                'Observar las auroras boreales.',
                'Relajarte en la Laguna Azul.',
                'Hacer excursiones a las cascadas como Gullfoss.'
            ]
        },
        {
            id: 6,
            image:'/images/lagoon.jpg',
            pais: 'Indonesia',
            ciudad: 'Bali',
            description: 'Conocida como la "Isla de los Dioses", Bali combina playas paradisíacas, templos majestuosos y una cultura vibrante. Algunas actividades imperdibles incluyen:',
            places: [
                'Surfear en Uluwatu.',
                'Meditar en Ubud.',
                'Recorrer los campos de arroz de Tegallalang.'
            ]
        }
    ];
}
