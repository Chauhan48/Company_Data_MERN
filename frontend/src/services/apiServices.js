import axios from 'axios';
import { API } from '../constants';

export const companyList = async () => {
    try{
        const response = await axios.get(`${API}/list-companies`);
        return response.data;
    }catch(err){
        return err;
    }
}