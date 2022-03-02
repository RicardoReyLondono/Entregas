var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoicmljYXJkb3JleWxvbmRvbm8iLCJhIjoiY2t5aXhhOXRuMmdrdTJvcGJsZG85bjRjZiJ9.66tsTtwDKEXy1_SJzbU8TA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Guía de Buceo en Colombia',
    subtitle: '',
    byline: 'Ricardo Rey Londono ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'SitioBuceo1',
            alignment: 'left',
            hidden: false,
            title: 'Caribe Colombiano',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-76.52831, 11.73099],
                zoom: 5.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'SitioBuceo2',
            alignment: 'left',
            hidden: false,
            title: 'Taganga, Santa Marta',
            image: 'https://st.depositphotos.com/1395980/1786/i/450/depositphotos_17861175-stock-photo-taganga-bay-colombia.jpg',
            description: '<strong>Taganga</strong> es un pueblo de pescadores muy cerca de Santa Marta. En el 2021 recibió un premio de <a href="https://travel.padi.com/"><strong>Padi Travel</strong></a> como mejor destino para bucear en Colombia. Sus aguas cristalinas con una gran diversidad de corales y peces acreditan a Taganga como uno de los mejores lugares para disfrutar del mundo submarino.',
            location: {
                center: [-74.20057, 11.276305],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'SitioBuceo3',
            alignment: 'left',
            hidden: false,
            title: 'Islas del Rosario, Cartagena',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [-75.78386, 10.16181],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'SitioBuceo4',
            alignment: 'right',
            hidden: false,
            title: 'Capurgana, Antioquia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [-77.34430, 8.63581],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'SitioBuceo5',
            alignment: 'left',
            hidden: false,
            title: 'Providencia, Archipielago de San Andrés',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [-81.39126, 13.36035],
                zoom: 12.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        ]  
};
