import axios from "axios"

const LoadData = () => {
    return axios.get("https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com/api/v1/app/todos");
}
const addData = (str)=>{
    return axios.post("https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com/api/v1/app/todos",{content:str});
} 

const deleteData = (id)=>{
    return axios.delete("https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com/api/v1/app/todos/" + id);
} 


export { LoadData, addData, deleteData };