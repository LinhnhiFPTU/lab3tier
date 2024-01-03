import axios from "axios"

const LoadData = () => {
    return axios.get("internal-lab3tier-alb-app-180975476.us-east-1.elb.amazonaws.com:4200/api/v1/app/todos");
}
const addData = (str)=>{
    return axios.post("internal-lab3tier-alb-app-180975476.us-east-1.elb.amazonaws.com:4200/api/v1/app/todos",{content:str});
} 

const deleteData = (id)=>{
    return axios.delete("internal-lab3tier-alb-app-180975476.us-east-1.elb.amazonaws.com:4200/api/v1/app/todos" + id);
} 


export { LoadData, addData, deleteData };