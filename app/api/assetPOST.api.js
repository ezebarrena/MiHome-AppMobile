const postAsset = async (title,image,type,transaction,price,coin,bills,description,amenities,room,bath,bedroom,garage,mTotal,mIndoor,storage,antiquity,streetName,streetNumber,neighbourhood,locality,province,country,geoLocalization,frontBack,state,realEstateName) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "title": title,
        "image":image,
        "type": type,
        "transaction": transaction, //1 alquiler, 0 venta
        "price":price,
        "coin":coin,
        "bills":bills,
        "description":description,
        "amenities":amenities,
        "room":room,
        "floor":floor,
        "bath":bath,
        "bedroom":bedroom,
        "garage":garage,
        "mTotal":mTotal,
        "mIndoor":mIndoor,
        "storage":storage,
        "antiquity":antiquity,
        "streetName":streetName,
        "streetNumber":streetNumber,
        "neighbourhood":neighbourhood,
        "locality":locality,
        "province":province,
        "country":country,
        "geoLocalization":geoLocalization,
        "frontBack":frontBack,
        "state":state, //1 disponible, 0 no disponible
        "realEstateName":realEstateName,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        //redirect: 'follow',
        //mode: 'cors',
    };

    let response = await fetch("http://192.168.1.6:8080/assets", requestOptions)
    let jsonData = await response.json();
    //console.log(response.status);
    return jsonData.asset;


}

export default postAsset;