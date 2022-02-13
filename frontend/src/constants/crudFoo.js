import axios from "axios";

const url ='http://localhost:8080/api/v1/establecimiento'
const options = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export async function goo(setFoo) {

    const wes = await axios.get(url).then(
        res => setFoo(res.data)
    );
    return []
}

export async function create(establecimiento){
    const wes = await axios.post(url, establecimiento, options);
    return wes.data;
}


export async function deletee(id){
    const wes = await axios.delete(`${url}/${id}`);
    return wes.data;
}

export async function edit(establecimiento, id){
    const wes = await axios.put(`${url}/${id}`, establecimiento,options);
    return wes.data;
}