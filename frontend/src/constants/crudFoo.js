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
    console.log(wes);
    return []
}

