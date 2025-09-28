import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { companyList } from "../services/apiServices";
import Grid from "@mui/material/Grid";
import Message from "./Message";
import { Button } from "@mui/material";
import Dropdown from "./Dropdown";

export default function CompaniesList() {
    const [companies, setCompanies] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [location, setLocation] = useState([]);
    const [action, setAction] = useState(false);
    const [actionMessage, setActionMessage] = useState('');
    const [filterIndustry, setFilterIndustry] = useState('');
    const [filterLocation, setFilterLocation] = useState('');

    const handleAlertMessage = async (message) => {
        const list = await companyList();
        setCompanies(list.companiesList);
        setIndustries(list.industries);
        setLocation(list.location);
        setActionMessage(message);
        setAction(true);
        setTimeout(() => setAction(false), 2000);
    }

    const handleFilter = async (field, option) => {
        let fd = field.toLowerCase();
        if(fd === 'industries'){
            setFilterIndustry(option);
        }
        if(fd === 'location'){
            setFilterLocation(option);
        }
    }

    const updateCompanyListing = () => {
        console.log(filterIndustry, filterLocation);
    }

    useEffect(() => {
        async function listing() {
            const list = await companyList();
            setCompanies(list.companiesList);
            setIndustries(list.industries);
            setLocation(list.location);
        }
        listing();
    }, [])

    return (
        <>
            {action && <Message message={actionMessage} />}
            <Dropdown filterList={industries} field={'Industries'} applyFilter={handleFilter} />
            <Dropdown filterList={location} field={'Location'} applyFilter={handleFilter} />
            <Button variant="contained" sx={{ m: 1 }} onClick={updateCompanyListing}>Filter</Button>
            <Grid container spacing={4} sx={{ padding: 4 }}>
                {companies.map(company => (
                    <Grid item key={company._id} xs={12} sm={6} md={4}>
                        <CompanyCard company={company} performAction={handleAlertMessage} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}