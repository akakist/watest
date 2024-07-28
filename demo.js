function instance()
{
    return document.getElementById('IdInstance').value;
}
function apiTokenInstance()
{
    return document.getElementById('apiTokenInstance').value;
}

async function getSettings()
{
    let url = "https://1103.api.green-api.com/waInstance"+instance()+"/getSettings/"+apiTokenInstance();
    let response=await fetch(url);
    if(response.ok)
    {
        let json = await response.json();
        document.getElementById('response').value=JSON.stringify(json, null, 4);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

async function getStateInstance()
{
    //
    let url = "https://1103.api.green-api.com/waInstance"+instance()+"/getStateInstance/"+apiTokenInstance();
    let response=await fetch(url);
    if(response.ok)
    {
        let json = await response.json();
        document.getElementById('response').value=JSON.stringify(json, null, 4);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

}

async function sendMessage()
{
    payload = {
	"chatId":
	        document.getElementById('to_phone').value+"@c.us",
	"message":
	        document.getElementById('msg').value
    }
    let url = "https://1103.api.green-api.com/waInstance"+instance()+"/sendMessage/"+apiTokenInstance();
    let response=await fetch(url, {
	method: 'POST',
	headers: {
	    'Content-Type': 'application/json;charset=utf-8'
        },
	body: JSON.stringify(payload)

    });
    if(response.ok)
    {
        let json = await response.json();
        document.getElementById('response').value=JSON.stringify(json, null, 4);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}


async function sendFileByUrl()
{
    payload = {
	"chatId":
	        document.getElementById('to_phone1').value+"@c.us",
	"urlFile":
	        document.getElementById('url').value,
	"fileName": 'file.jpg',
	"caption": 'The File'

    }
    let url = "https://1103.api.green-api.com/waInstance"+instance()+"/sendFileByUrl/"+apiTokenInstance();

    let response=await fetch(url, {
	method: 'POST',
	headers: {
	    'Content-Type': 'application/json;charset=utf-8'
        },
	body: JSON.stringify(payload)

    });
    if(response.ok)
    {
        let json = await response.json();
        document.getElementById('response').value=JSON.stringify(json, null, 4);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}


