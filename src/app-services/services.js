import axios from "axios"

const LoadData = () => {
    return axios.get("lab3tier-alb-app-2-745997772.us-east-1.elb.amazonaws.com:4200/api/v1/app/todos");
}
const addData = (str)=>{
    return axios.post("lab3tier-alb-app-2-745997772.us-east-1.elb.amazonaws.com:4200/api/v1/app/todos",{content:str});
} 

const deleteData = (id)=>{
    return axios.delete("lab3tier-alb-app-2-745997772.us-east-1.elb.amazonaws.com:4200/api/v1/app/todos" + id);
} 


export { LoadData, addData, deleteData };