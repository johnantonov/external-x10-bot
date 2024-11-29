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

    if (response.data.status === 200) {
      return true
    } else {
      return false
    }
  } catch (e) {
    console.log('Error auth ' + key)
    return false
  }
}