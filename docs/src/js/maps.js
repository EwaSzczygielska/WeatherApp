
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
    
    var adres;

    function currentMap(x,y){

    console.log("To jest long" + x);
    console.log("To jest lat" + y);
    map.getView().setCenter(ol.proj.transform([x, y], 'EPSG:4326', 'EPSG:3857'));

    var long = Math.floor(((x + 180)/45));
    var lat;
if (y < -66)
    lat = 6;
    else if (y < -40)
        lat = 5;
        else if (y < 0)
                lat = 4;
                else if (y<40)
                    lat=3;
                    else if (y<66)
                        lat=2;
                        else if(y<80)
                            lat=1;
                            else
                                lat=0;

    console.log("To jest long"+long);
    console.log("To jest lat" +lat);

    adres = "https://a.sat.owm.io/sql/3/"+long+"/"+lat+"/?appid=9de243494c0b295cca9337e1e96b00e2&overzoom=true&op=rgb&from=modis&select=b1,b4,b3&tabActive=2&order=last";
    $("#my_image").attr("src", adres);
}
