import axios from "axios";

/**
 * Funcion que gestiona el POST
 * @param {str} url -> url hacia la que se direcciona el metodo POST
 * @param {Cards[]} data -> array de selectedCards
 */
export async function doPostArray(url,data){
  try{
    //config de metodo POST
    const postOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: data
    }
    const response = await axios(url, postOptions);
    console.log(response.data);
  
  }catch(err){
    console.error('Error en la solicitud POST:', err);
  }
}