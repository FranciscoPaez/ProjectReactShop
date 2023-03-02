const products = [
    {
        id: '1',
        name: 'JORDAN AIR 1 LOW SE',
        price: 34679,
        category: 'zapatilla',
        img: 'https://essential.vtexassets.com/arquivos/ids/726548-1200-auto?v=638125908456700000&width=1200&height=auto&aspect=true',
        stock: 10,
        description:'Zapatillas Jordan Air 1 Low Se De Moda Para Hombre.',
        coin:'ARS'
    },
    {
        id: '2',
        name: 'Nike Air Vapormax 2021 Flyknit',
        price: 95499,
        category: 'zapatilla',
        img: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2e6d446e/products/NI_DM0025-100/NI_DM0025-100-1.JPG',
        stock: 15,
        description:'Las Zapatillas Nike Air Vapormax 2021 Flyknit fueron fabricadas con al menos un 20 % de material reciclado en peso. Con una parte superior FlyKnit elástica con un cuello suave y sin costuras, tienen Swoosh y el clip de plástico reciclado en el talón que agrega un toque de intriga mientras flotás por las calles con la amortiguación VaporMax. Cómodas y con una unidad Air de una sola pieza que recorre toda la longitud de un zapato y permite transiciones más suaves.',
        coin:'ARS'
    },
    {
        id: '3',
        name: 'Nike Air More Uptempo "96',
        price: 77300,
        category: 'zapatilla',
        img: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd7930ea1/products/NI_DJ4400-001/NI_DJ4400-001-6.JPG',
        stock: 23,
        description:'Las Nike Air More Uptempo "96 te darán un look legendario. Desde el gran diseño A-I-R a cada lado, inspiradas en los grafitis de los 90; hasta la unidad Air en la planta del pie, que proporcionan amortiguación en cada pisada. Estas zapatillas se abrieron camino en las canchas de baloncesto de los años 90 para convertirse en parte de la historia de Nike. Confeccionas en piel sintética para una mayor durabilidad y sujeción. Además, la malla suave que añade ligereza.',
        coin:'ARS'
    },
    {
        id: '4',
        name: 'Zapatillas Nike Blazer Mid "77 Vintage',
        price: 48999,
        category: 'zapatilla',
        img: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwabcc968d/products/NI_BQ6806-100/NI_BQ6806-100-6.JPG',
        stock: 36,
        description:'Las zapatillas Nike Blazer Mid "77 Vintage traen al presente un histórico modelo de la marca en aquellas épocas donde se estaban testeando prototipos de calzados para el mundo del básquet. El nombre se mantiene, el diseño mejoró. Confeccionadas en su parte superior con cuero y sintético que mantiene el aspecto original, la suela de caucho macizo mantiene el patrón de espiga para una excelente tracción y durabilidad.',
        coin:'ARS'
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 10)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 10)
    })
}

