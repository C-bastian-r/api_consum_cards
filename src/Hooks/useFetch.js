import { useState, useEffect } from "react";
import axios from "axios";

/**
 * 
 * @param {str} url -> url de la api a consumir
 * @returns destructuracion de data
 */
export function useFetch(url){
  const[data, setData] = useState();

  useEffect(()=>{
    axios.get(url)
    .then(response => setData(response.data))
    .catch(err => console.error('Error fetching data:', err))
  }, [url]) //array de dependencia -> ejecuta useEffect cada vez que cambia la variable entre renderizados

  return { data }
}