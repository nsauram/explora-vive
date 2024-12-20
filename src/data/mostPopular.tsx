interface Popular {
    id: number,
    pais: string,
    visitantes: number,
    link:string
}

export default function mostPopular(): Popular[] {
    return [
    { id: 1, pais: "Francia", visitantes: 100, link:"/destinos/francia"},
    { id: 2, pais: "España", visitantes: 85.17, link:"/destinos/francia"},
    { id: 3, pais: "Estados Unidos", visitantes: 66.48, link:"/destinos/francia"},
    { id: 4, pais: "Italia" ,visitantes: 57.25 , link:"/destinos/francia"},
    { id: 5, pais: "Turquía", visitantes: 55.16, link:"/destinos/francia"},
    { id: 6, pais: "México", visitantes: 41.95, link:"/destinos/francia"},
    { id: 7, pais: "Reino Unido", visitantes: 37.22, link:"/destinos/francia"},
    { id: 8, pais: "Alemania", visitantes: 34.8, link:"/destinos/francia"},
    { id: 9, pais: "Grecia", visitantes: 32.74, link:"/destinos/francia"},
    { id: 10, pais: "Austria", visitantes: 30.91, link:"/destinos/francia"},
    { id: 11, pais: "Tailandia", visitantes: 28.15, link:"/destinos/francia"},
    { id: 12, pais: "Emiratos Árabes Unidos", visitantes: 28.15, link:"/destinos/francia"},
    { id: 13, pais: "Arabia Saudí", visitantes: 27.42, link:"/destinos/francia"},
    { id: 14, pais: "Portugal", visitantes: 26.54, link:"/destinos/francia"},
    { id: 15, pais: "Japón", visitantes: 25.07, link:"/destinos/francia"},
    { id: 16, pais: "Países Bajos", visitantes: 20.3, link:"/destinos/francia"},
    { id: 17, pais: "Malasia", visitantes: 20.14, link:"/destinos/francia"},
    { id: 18, pais: "Polonia", visitantes: 18.99, link:"/destinos/francia"},
    { id: 19, pais: "Canadá", visitantes: 18.34, link:"/destinos/francia"},
    { id: 20, pais: "Hong Kong (China)", visitantes: 17.16, link:"/destinos/francia"},
    { id: 21, pais: "Egipto", visitantes: 14.91, link:"/destinos/francia"},
    { id: 22, pais: "Marruecos", visitantes: 14.52, link:"/destinos/francia"},
    { id: 23, pais: "Macao (China)", visitantes: 14.23, link:"/destinos/francia"},
    { id: 24, pais: "Hungría", visitantes: 12.93, link:"/destinos/francia"},
    { id: 25, pais: "Vietnam", visitantes: 12.6, link:"/destinos/francia"},
    { id: 26, pais: "Corea del Sur", visitantes: 11.03, link:"/destinos/francia"},
    { id: 27, pais: "Albania", visitantes: 9.67, link:"/destinos/francia"},
    { id: 28, pais: "Túnez", visitantes: 9.37, link:"/destinos/francia"},
    { id: 29, pais: "Sudáfrica", visitantes: 8.48, link:"/destinos/francia"},
    { id: 30, pais: "República Dominicana", visitantes: 8.06, link:"/destinos/francia" }
]
}

type p = Omit<Popular, 'visitantes'>

