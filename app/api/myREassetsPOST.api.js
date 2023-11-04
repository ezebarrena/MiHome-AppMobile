const postmyREAssets = async (realEstateName, estado, transaction) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "realEstateName": realEstateName,
        "state": estado,
        "transaction": transaction
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        //redirect: 'follow',
        //mode: 'cors',
    };

    let response = await fetch("http://192.168.1.6:8080/myREassets", requestOptions)
    let jsonData = await response.json();
    //console.log(response.status);
    return jsonData.asset;


}

export default postmyREAssets;