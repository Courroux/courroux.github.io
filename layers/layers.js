var wms_layers = [];

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    'type':'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});
var lyr_Photos5065 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
        attributions: ' ',
        params: {
        "LAYERS": "ORTHOIMAGERY.ORTHOPHOTOS.1950-1965",
        "TILED": "true",
        "VERSION": "1.3.0"},
    })),
    title: 'Photos 50-65',
    popuplayertitle: 'Photos 50-65',
    type: '',
    opacity: 1.000000,
});
wms_layers.push([lyr_Photos5065, 0]);
var lyr_Photosactu = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
        attributions: ' ',
        params: {
            "LAYERS": "ORTHOIMAGERY.ORTHOPHOTOS",
            "TILED": "true",
            "VERSION": "1.3.0"},
    })),
    title: 'Photos actu',
    popuplayertitle: 'Photos actu',
    type: '',
    opacity: 1.000000,
});
wms_layers.push([lyr_Photosactu, 0]);
var lyr_sectionE = new ol.layer.Image({
    opacity: 1,
    title: 'section E<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionE.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-31162.319472, 5933292.099029, -26877.641440, 5936845.189327]
    })
});
var lyr_sectionEB = new ol.layer.Image({
    opacity: 1,
    title: 'section EB<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionEB.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-30334.891505, 5934783.229006, -30071.876623, 5935050.607268]
    })
});
var lyr_sectionEA = new ol.layer.Image({
    opacity: 1,
    title: 'section EA<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionEA.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-30622.693414, 5934313.991263, -30073.444723, 5934890.984344]
    })
});
var lyr_sectionF2 = new ol.layer.Image({
    opacity: 1,
    title: 'section F2<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionF2.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-32236.997773, 5930713.866664, -30149.367272, 5933192.868441]
    })
});
var lyr_sectionF1 = new ol.layer.Image({
    opacity: 1,
    title: 'section F1<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionF1.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-30751.840908, 5931766.786633, -27775.924394, 5934508.600212]
    })
});
var lyr_sectionG1 = new ol.layer.Image({
    opacity: 1,
    title: 'section G1<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionG1.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-34743.782724, 5932066.539503, -30214.668853, 5936461.060006]
    })
});

var lyr_sectionG2 = new ol.layer.Image({
    opacity: 1,
    title: 'section G2<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionG2.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-35029.173632, 5931896.500733, -32285.515906, 5935798.999653]
    })
});

var lyr_sectionG3 = new ol.layer.Image({
        opacity: 1,

    title: 'section G3<br />' ,


        source: new ol.source.ImageStatic({
            url: "./layers/sectionG3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-37128.915087, 5932776.565673, -32589.436376, 5937251.316180]
        })
    });
var lyr_sectionF3 = new ol.layer.Image({
    opacity: 1,
    title: 'section F3<br />' ,
    source: new ol.source.ImageStatic({
        url: "./layers/sectionF3.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [-33535.080026, 5930978.920639, -29350.144317, 5935123.043725]
    })
});

var lyr_sectionH2 = new ol.layer.Image({
        opacity: 1,

    title: 'section H2<br />' ,


        source: new ol.source.ImageStatic({
            url: "./layers/sectionH2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-34576.643681, 5934770.985159, -30160.557710, 5938397.692816]
        })
    });
var lyr_sectionH2B = new ol.layer.Image({
        opacity: 1,

    title: 'section H2B<br />' ,


        source: new ol.source.ImageStatic({
            url: "./layers/sectionH2B.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-32405.024192, 5936949.791974, -32055.735969, 5937323.144871]
        })
    });
var lyr_sectionH1 = new ol.layer.Image({
        opacity: 1,

    title: 'section H1<br />' ,


        source: new ol.source.ImageStatic({
            url: "./layers/sectionH1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-32718.417032, 5934234.548494, -29389.301566, 5938515.650930]
        })
    });

var lyr_sectionI1 = new ol.layer.Image({
        opacity: 1,

    title: 'section I1<br />' ,


        source: new ol.source.ImageStatic({
            url: "./layers/sectionI1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-37480.405718, 5935270.296097, -33751.811071, 5939238.311270]
        })
    });

var group_Mauzcadastre1825 = new ol.layer.Group({
                                layers: [
                                    lyr_sectionI1,
                                    lyr_sectionH2,
                                    lyr_sectionH2B,
                                    lyr_sectionH1,
                                    lyr_sectionG3,
                                    lyr_sectionG2,
                                    lyr_sectionG1,
                                    lyr_sectionF3,
                                    lyr_sectionF2,
                                    lyr_sectionF1,
                                    lyr_sectionE,
                                    lyr_sectionEB,
                                    lyr_sectionEA,
                                ],
                                fold: 'open',
                                title: 'Mauzé cadastre 1825'});
var group_fondcarte = new ol.layer.Group({
                                layers: [
                                    lyr_OpenStreetMap_0,
                                    lyr_Photos5065,
                                    lyr_Photosactu
                                ],
                                fold: 'open',
                                title: 'fond carte'});

lyr_Photosactu.setVisible(false);
lyr_Photos5065.setVisible(false);
lyr_OpenStreetMap_0.setVisible(true);
lyr_sectionE.setVisible(true);
lyr_sectionEB.setVisible(true);
lyr_sectionEA.setVisible(true);
lyr_sectionF1.setVisible(true);
lyr_sectionF2.setVisible(true);
lyr_sectionF3.setVisible(true);
lyr_sectionG1.setVisible(true);
lyr_sectionG2.setVisible(true);
lyr_sectionG3.setVisible(true);
lyr_sectionH1.setVisible(true);
lyr_sectionH2.setVisible(true);
lyr_sectionH2B.setVisible(true);
lyr_sectionI1.setVisible(true);
var layersList = [group_fondcarte,group_Mauzcadastre1825];
