interface Popular {
    id: number,
    pais: string,
    visitantes: number,
    link:string
}

export default function mostPopular(): Popular[] {
    return [
    { id: 1, pais: "Francia", visitantes: 100, link:"/destinos/francia"},
    { id: 2, pais: "España", visitantes: 85.17, link:"/destinos/espana"},
    { id: 3, pais: "Estados Unidos", visitantes: 66.48, link:"/destinos/eeuu"},
    { id: 4, pais: "Italia" ,visitantes: 57.25 , link:"/destinos/italia"},
    { id: 5, pais: "Turquía", visitantes: 55.16, link:"/destinos/turquia"},
    { id: 6, pais: "México", visitantes: 41.95, link:"/destinos/mexico"},
    { id: 7, pais: "Reino Unido", visitantes: 37.22, link:"/destinos/reinounido"},
    { id: 8, pais: "Alemania", visitantes: 34.8, link:"/destinos/alemania"},
    { id: 9, pais: "Grecia", visitantes: 32.74, link:"/destinos/grecia"},
    { id: 10, pais: "Austria", visitantes: 30.91, link:"/destinos/austria"},
    { id: 11, pais: "Tailandia", visitantes: 28.15, link:"/destinos/tailandia"},
    { id: 12, pais: "Emiratos Árabes Unidos", visitantes: 28.15, link:"/destinos/emiratos"},
    { id: 13, pais: "Arabia Saudí", visitantes: 27.42, link:"/destinos/arabia"},
    { id: 14, pais: "Portugal", visitantes: 26.54, link:"/destinos/portugal"},
    { id: 15, pais: "Japón", visitantes: 25.07, link:"/destinos/japon"},
    { id: 16, pais: "Países Bajos", visitantes: 20.3, link:"/destinos/paisesbajos"},
    { id: 17, pais: "Malasia", visitantes: 20.14, link:"/destinos/malasia"},
    { id: 18, pais: "Polonia", visitantes: 18.99, link:"/destinos/polonia"},
    { id: 19, pais: "Canadá", visitantes: 18.34, link:"/destinos/canada"},
    { id: 20, pais: "Hong Kong (China)", visitantes: 17.16, link:"/destinos/china"},
    { id: 21, pais: "Egipto", visitantes: 14.91, link:"/destinos/egipto"},
    { id: 22, pais: "Marruecos", visitantes: 14.52, link:"/destinos/marruecos"},
    { id: 23, pais: "Macao (China)", visitantes: 14.23, link:"/destinos/macao"},
    { id: 24, pais: "Hungría", visitantes: 12.93, link:"/destinos/hungria"},
    { id: 25, pais: "Vietnam", visitantes: 12.6, link:"/destinos/vietnam"},
    { id: 26, pais: "Corea del Sur", visitantes: 11.03, link:"/destinos/corea"},
    { id: 27, pais: "Albania", visitantes: 9.67, link:"/destinos/albania"},
    { id: 28, pais: "Túnez", visitantes: 9.37, link:"/destinos/tunez"},
    { id: 29, pais: "Sudáfrica", visitantes: 8.48, link:"/destinos/sudafrica"},
    { id: 30, pais: "República Dominicana", visitantes: 8.06, link:"/destinos/dominicana" }
]
}

type p = Omit<Popular, 'visitantes'>

