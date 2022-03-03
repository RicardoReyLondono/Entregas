var config = {
    style: 'mapbox://styles/ricardoreylondono/cl09t7scm000f14mff19ddscm',
    accessToken: 'pk.eyJ1IjoicmljYXJkb3JleWxvbmRvbm8iLCJhIjoiY2t5aXhhOXRuMmdrdTJvcGJsZG85bjRjZiJ9.66tsTtwDKEXy1_SJzbU8TA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    byline: '',
    title: 'Guía de Buceo en Colombia',
    subtitle: 'Colombia es un país nutrido por el Mar Caribe en el norte y el Oceáno Pacífico en el occidente. Esta posición geografíca, le permite tener un gran diversidad de peces, maniferos marinos y corales única en Sur América. En este Storymap exploraremos los mejores lugares para bucear en el Caribe y Pacífico.',
    footer: 'Source: <a href="https://travel.padi.com/">Padi Travel</a>',
    chapters: [
        {
            id: 'Fotopresentacion',
            alignment: 'center',
            hidden: false,
            title: '',
            description: '',
            image: 'https://media.istockphoto.com/photos/underwater-scuba-diver-explore-and-enjoy-coral-reef-sea-life-picture-id498283106?k=20&m=498283106&s=612x612&w=0&h=0WIjdFxhCA-xCU6kDcMk0FeQPOXEK8nnJzQPVDk2Yac=',
            location: {
                center: [-74.64239, 10.46354],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'CaribeColombiano',
            alignment: 'right',
            hidden: false,
            title: 'Caribe Colombiano',
            description: 'El <strong>Caribe Colombiano</strong> es una región única que se caracteriza por la enorme diversidad de corales y peces que tiene. Los mejores lugares para bucear en esta región de acuerdo con <a href="https://travel.padi.com/">Padi Travel</a> son: el <strong>Parque Tayrona</strong> en Santa Marta, <strong>Islas del Rosario</strong> en Cartagena, <strong>Capurgana</strong> en el caribe Antioqueño, y el <strong>Archipielago de San Andrés y Providencia</strong>.',
            location: {
                center: [-74.64239, 10.46354],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'PresentacionParqueTayrona',
            alignment: 'center',
            hidden: false,
            title: 'Parque Tayrona - Santa Marta',
            image: 'https://i0.wp.com/revistadiners.com.co/wp-content/uploads/2019/11/portada_tayrina_1200x800.jpg?fit=1024%2C683&ssl=1',
            description: '',
            location: {
                center: [-74.64239, 10.46354],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'ParqueTayrona',
            alignment: 'left',
            showMarkers: true,
            hidden: false,
            title: 'Parque Tayrona - Santa Marta',
            image: '',
            description: '<iframe width="350" height="260" src="https://www.youtube.com/embed/jMZAHRnKq68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> El <strong>Parque Tayrona</strong> fue catalogado por <a href="https://colombia.travel/es">Colombia Travel</a> como el mejor Parque para visitar en Colombia. Sus bahías e islas ofrecen lugares increíbles para bucear y ver enormes corales y gran variedad de peces. <strong>Las siguientes son las mejores empresas para bucear en el Tayrona</strong>:',
            text: '<a href="https://oceanoscuba.com.co/">Oceano Scuba</a>',
            text2: '<a href="https://poseidondivecenter.com/">Poseidon Dive Center</a>',
            text3: '<a href="https://www.atlantidabucea.com/">Atlantida Dive Center</a>',
            location: {
                center: [-74.17557, 11.32006],
                zoom: 12.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'PresentacionIslasdelRosario',
            alignment: 'center',
            hidden: false,
            title: 'Islas del Rosario - Cartagena',
            image: 'https://t4.ftcdn.net/jpg/01/84/05/65/240_F_184056516_CoHzrNCDpb9cFlqLQC5JhNnU1IkIs24u.jpg',
            description: '',
            location: {
                center: [-74.64239, 10.46354],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Islas del Rosario',
            alignment: 'left',
            hidden: false,
            title: 'Islas del Rosario',
            image: '',
            description: '<iframe width="350" height="260" src="https://www.youtube.com/embed/HH6RPJnBNNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Las <strong>Islas del Rosario</strong> son un archipielago muy cerca de <strong>Cartagena</strong> con aguas muy tranquilas y gran variedad de corales. <a href="https://travel.padi.com/">Padi Travel</a> la describió como un lugar ideal para aprender a bucear o para viajar con la familia. <strong>Las siguientes tres son las mejores empresas para bucear en las Islas del Rosario</strong>:',
            text: '<a href="https://divingplanet.org/">Diving Planet</a>',
            text2: '<a href="https://es.paraisodive.org/">Paraiso Dive Cartagena</a>',
            location: {
                center: [-75.76951, 10.16857],
                zoom: 11.5,
                pitch: 20,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'PresentacionCapurgana',
            alignment: 'center',
            hidden: false,
            title: 'Capurgana - Antioquía',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/73/56/sapzurro.jpg?w=500&h=300&s=1',
            description: '',
            location: {
                center: [-74.64239, 10.46354],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Capurgana',
            alignment: 'right',
            hidden: false,
            title: 'Capurgana',
            image: '',
            description: '<iframe width="350" height="260" src="https://www.youtube.com/embed/_ADQx_S8-l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <strong>Capurgana</strong> es un destino nuevo en el mundo del buceo en Colombia. No obstante, en los últimos años ha atraido a muchos personas tanto nacionales como extranjeras principalmente por los avistamientos de <strong>tiburones</strong> y <strong>arrecifes</strong> en buen estado de conservación. Actualmente <a href="https://www.instagram.com/caribediveandgreen/?hl=es">Dive Green Capurgana</a> es la única empresa de buceo operando en la zona, sin embargo, cada año empresas de otras ciudades planean múltiples viajes para dar a conocer esta aguas poco exploradas.',
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
            id: 'PresentacionSanAndres',
            alignment: 'center',
            hidden: false,
            title: 'Isla San Andrés',
            image: 'https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/San-andres-RTVC.jpg',
            description: '',
            location: {
                center: [-74.64239, 10.46354],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'San Andrés',
            alignment: 'right',
            hidden: false,
            title: 'San Andrés',
            image: '',
            description: '<iframe width="350" height="260" src="https://www.youtube.com/embed/9HxvNVJXakk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <strong>San Andrés</strong> históricamente ha sido el destino más popular para bucear en Colombia. Sus aguas cristalinas junto con su gran variedad de peces y corales lo convierten en un lugar único para bucear en Colombia y Sur Ámerica. <strong>Las siguientes tres son las mejores empresas para bucear en las Islas de Andrés:</strong>: ',
            text: '<a href="https://www.sanandrescolombia.com.co/tours/blue-life-centro-de-buceo/">Blue Life San Andrés</a>',
            text2: '<a href="https://www.scubasanandres.com.co/">Scuba San Andrés</a>',
            text3: '<a href="https://www.diversteam.net/">Divers Team San Andrés</a>',
            location: {
                center: [-81.66876, 12.54530],
                zoom: 12,
                pitch: 20,
                bearing: -23.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'PresentacionProvidencia',
            alignment: 'center',
            hidden: false,
            title: 'Isla Providencia - Arhipielago de San Andrés',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/1d/a3/c0/el-lugar-es-hermoso-100.jpg?w=700&h=500&s=1',
            description: '',
            location: {
                center: [-74.64239, 10.46354],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Providencia',
            alignment: 'left',
            hidden: false,
            title: 'Providencia',
            image: '',
            description: '<iframe width="350" height="260" src="https://www.youtube.com/embed/aV6szZ7E9PA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <strong>Providencia</strong>, denominado por <a href="https://travel.padi.com/">Padi Travel</a>, <a href="https://www.scubamagazine.co.uk/">Scuba Magazine</a> y <a href="https://divermag.com/">Diver Mag</a> como uno en el Top 5 de los mejores lugares para bucear en el Caribe. <strong>Las siguientes tres son las mejores empresas para bucear en las Islas del Rosario</strong>:',
            text: '<a href="https://dive.site/es/explore/dive-centers/felipe-diving-center-9r43">Felipe Dive Center</a>',
            text2: '<a href="https://sonnydiveshop.com/">Sony Dive Shop</a>',
            text3: '<a href="https://www.sanandrescolombia.com.co/tours/blue-life-centro-de-buceo/">Blue Life San Andrés</a>',
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
        },{
            id: 'OcéanoPacífico',
            alignment: 'left',
            hidden: false,
            title: 'Océano Pacífico',
            description: 'Las aguas del <strong>Océano Pacífico</strong> son muy diferentes a las del Mar Caribe, se caracterizan por tener corrientes frías que transportan nutrientes y con migraciones de <strong>ballenas</strong>, y <strong>tiburones martillo</strong>. Los mejores lugares para bucear en el Pacífico son la <strong>Isla de Malpelo</strong> y la <strong>Isla de Gorgona.</strong>',
            location: {
                center: [-81.33839, 4.01407],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'MalpeloPresentación',
            alignment: 'center',
            hidden: false,
            title: 'Malpelo',
            image: 'https://i.ytimg.com/vi/IOY8K63iLc0/maxresdefault.jpg',
            description: '',
            location: {
                center: [-81.33839, 4.01407],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Malpelo',
            alignment: 'right',
            hidden: false,
            title: 'Isla de Malpelo',
            image: '',
            description: '<iframe width="350" height="260" src="https://www.youtube.com/embed/yy6xQq1F58I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> La <strong>Isla de Malpelo</strong> es un lugar apto solo para buzos con muchos de experiencia. Sus corrientes fuertes y agua fría covierten a esta pequeña isla rocosa en un lugar desafíante para bucear. Sin embargo, es conocido mundialmente por la enorme presencia de <strong>tiburones martillo</strong>, <strong>tiburones ballenas</strong> y <strong>gran variedad de rayas.</strong> Para conocer Malpelo es requerido ir en <strong>Crucero de Buceo solo con empresas autorizadas como:</strong>',
            text: '<a href="https://www.colombiadiveadventures.com/">Colombia Dive Adventures</a>',
            text2: '<a href="http://www.malpelotours.com/inicio/">Malpelo Tours</a>',
            location: {
                center: [-81.60288, 4.00236],
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
            id: 'PresentacionGorgona',
            alignment: 'center',
            hidden: false,
            title: 'Isla de Gorgona',
            image: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/F6ML3LCHRRA3PA3W5CAEYYSRZM.jpg',
            description: '',
            location: {
                center: [-81.33839, 4.01407],
                zoom: 5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Gorgona',
            alignment: 'right',
            hidden: false,
            title: 'Isla de Gorgona',
            image: '',
            description: '<iframe width="350" height="260" src="https://www.youtube.com/embed/xjzKVw_mIV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> La <strong>Isla de Gorgona</strong> es conocida en Sur América por ser un lugar donde es posible el <strong>avistamiento y buceo con Ballenas</strong>. Cada año entre julio y octubre estos animales llegan en patrones de migración desde la Antártica buscando aguas calídas. Al igual que en Malpelo, a este destino solo se puede ir en <strong>Crucero de Buceo</strong> de dos empresas:',
            text: '<a href="https://www.colombiadiveadventures.com/">Colombia Dive Adventures</a>',
            text2: '<a href="https://arrecifesdelpacifico.com/buceo/">Arrecifes del Pacífico</a>',
            location: {
                center: [-78.17078, 2.96526],
                zoom: 12.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Presentacion',
            alignment: 'left',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [-76.21426, 8.14861],
                zoom: 4,
                pitch: 5,
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
            id: 'Presentacion',
            alignment: 'left',
            hidden: true,
            image: 'https://i0.wp.com/mochilerosdelujo.com/wp-content/uploads/2021/10/Vista-aerea-Isla-Aguja.jpeg?fit=1200%2C812&ssl=1',
            location: {
                center: [-76.21426, 8.14861],
                zoom: 4,
                pitch: 5,
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
        }, 
        ]  
};
