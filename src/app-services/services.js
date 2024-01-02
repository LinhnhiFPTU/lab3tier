import axios from "axios"

const LoadData = () => {
    return axios.get("https://659379ecbb1297071990a049.mockapi.io/api/v1/app/todos/task");
}
const addData = (str1, str2)=>{
    return axios.post("https://659379ecbb1297071990a049.mockapi.io/api/v1/app/todos/task",{name:str1, description:str2});
} 

const deleteData = (id)=>{
    return axios.delete("https://659379ecbb1297071990a049.mockapi.io/api/v1/app/todos/task/" + id);
} 


export { LoadData, addData, deleteData };