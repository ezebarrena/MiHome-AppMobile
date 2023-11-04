const REsignin = async (name,email,password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "fantasyName":name,
      "logInEmail": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'cors'
    };
    
    let response = await fetch("http://192.168.1.6:8080/auths", requestOptions);
    let jsonData = await response.json();

    return jsonData;
}

export default REsignin;