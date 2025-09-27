import axios from 'axios';
import { API } from '../constants';

export const companyList = async () => {
    try {
        const response = await axios.get(`${API}/list-companies`);
        return response.data;
    } catch (err) {
        return err;
    }
}

export const deleteCompany = async (companyId) => {
    try {
        const response = await axios.delete(`${API}/remove-company?companyId=${companyId}`);
        return response.data;
    } catch (err) {
        return err;
    }
}

export const updateCompany = async (updatedData) => {
    try {
        const response = await axios.put(`${API}/update-company`, updatedData);
        return response.data;
    } catch (err) {
        return err;
    }
}