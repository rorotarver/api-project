import axios from "axios"


const get = async () =>  {
    const response = await axios.get<MovieExt>("https://www.omdbapi.com/?i=tt3896198&apikey=f5a04bf9");
    return response.data;
}

const x = document.getElementById('btnMovie');

get ();