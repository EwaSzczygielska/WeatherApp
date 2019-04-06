
    //https: //a.sat.owm.io/sql/3/"+poludnik+"/"+rownoleznik+"/?appid=9de243494c0b295cca9337e1e96b00e2&overzoom=true&op=rgb&from=modis&select=b1,b4,b3&tabActive=2&order=last  
    
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([17.033, 51.1]),
            zoom: 7
        })
    });;
    
    function currentMap(x,y){
    map.getView().setCenter(ol.proj.transform([x, y], 'EPSG:4326', 'EPSG:3857'));
    }
