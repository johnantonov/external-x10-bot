import axios from "axios";

export async function checkAuth(key: string) {
  try {
    const url = 'https://common-api.wildberries.ru/ping'
  
    const headers = {
      'Authorization': key, 
      'Content-Type': 'application/json',
    }
  
    const response = await axios.get(url, {
      headers: headers
    });

    console.log(response.data)

    if (response.data.Status === 'OK') {
      return true
    } else {
      return false
    }
  } catch (e) {
    console.log('Error auth ' + key)
    return false
  }
}