const intial_state = {
    Catagery: [
        {
            main: 'Mobile',
            sub: [
                'Tablet',
                'Accessories',
                'Mobile Phone'
    ]
        },
        {
            main: 'Vehicles',
            sub: ['Cars',
                'Cars on Installments',
                'Cars Accessories',
                'Spare Parts',
                'Buses, Vans & Trucks',
                'Rickshaw & Chingchi',
                'Other Vehicles',
                'Boats',
                'Tractors & Trailers']
        },
        {
            main: 'property For Sale',
            sub: []
        },
        {
            main: 'propert for Rent',
            sub: []
        },
        {
            main: 'Eectronics and Home Appliences',
            sub: []
        },
        {
            main: 'Bikes',
            sub: []
        },
        {
            main: 'Business, Industerial & Agriculture',
            sub: []
        },
        {
            main: 'Service',
            sub: []
        },
        {
            main: 'Jobs',
            sub: []
        },
        {
            main: 'Animals',
            sub: []
        },

    ]
}

export default (state = intial_state, action) => {

    return state
}