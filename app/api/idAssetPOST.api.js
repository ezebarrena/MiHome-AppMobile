const postIdAsset = async (idPropiedad) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "_id": idPropiedad,
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        //redirect: 'follow',
        //mode: 'cors',
    };
    
    let response = await fetch("http://192.168.1.6:8080/idAssets", requestOptions)
    let jsonData = await response.json();
    return jsonData.asset;


}

export default postIdAsset;