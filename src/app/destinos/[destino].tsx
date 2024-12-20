import { useRouter } from 'next/router'


export default function Page () {
    const router = useRouter()
    const { destino } = router.query
    return (
        <>
            <h2>Imagen del pais</h2>
            <h1>{destino}</h1>
            <div>
                ciudad mas visitada
            </div>
            <div>
                ciudad mas visitada
            </div>
            <div>
                ciudad mas visitada
            </div>
            <div>
                Descripción del pais
            </div>
            <div>
                Cultura
            </div>
            <div>
                Comida
            </div>
            <div>
                Datos interesantes
            </div>
        </>
    )
}