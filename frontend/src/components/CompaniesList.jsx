import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { companyList, filterCompany } from "../services/apiServices";
import Grid from "@mui/material/Grid";
import Message from "./Message";
import { Button, Typography } from "@mui/material";
import Dropdown from "./Dropdown";
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import ClearIcon from '@mui/icons-material/Clear';
import BusinessIcon from '@mui/icons-material/Business';
import AddCompany from './AddCompany';

export default function CompaniesList() {
    const [companies, setCompanies] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [location, setLocation] = useState([]);
    const [action, setAction] = useState(false);
    const [actionMessage, setActionMessage] = useState('');
    const [filterIndustry, setFilterIndustry] = useState('');
    const [filterLocation, setFilterLocation] = useState('');
    const [addCompanyPopup, setAddCompanyPopup] = useState(false);
    const [insertCompany, setInsertCompany] = useState({
        name: '',
        location: '',
        industry: '',
        employeeCount: '',
        revenue: ''
    })

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
        if (fd === 'industries') {
            setFilterIndustry(option);
        }
        if (fd === 'location') {
            setFilterLocation(option);
        }
    }

    const updateCompanyListing = async () => {
        const filterData = {};
        if (filterIndustry) {
            filterData.industry = filterIndustry
        }
        if (filterLocation) {
            filterData.location = filterLocation
        }
        const listing = await filterCompany(filterData);
        setCompanies(listing.companyListing);
    }

    const removeFilterListing = () => {
        window.location.reload();

    }

    const handleAddCompany = () => {
        setAddCompanyPopup(true);
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
            {addCompanyPopup && <AddCompany
                open={addCompanyPopup}
                closePopup={() => setAddCompanyPopup(false)}
                newCompanyData={insertCompany}
                displayMessage={(message) => {setAction(true); setActionMessage(message)}}
            />}
            <Typography variant="h4" sx={{fontWeightMedium: 500, color: '#979797', marginLeft: '50%', marginRight: '28%'}}>Explore Companies</Typography>
            <Button variant="contained" color="secondary" align="end" size="large" sx={{p: 1, m: 1, justifyContent: 'end', borderRadius: '40px'}} startIcon={<BusinessIcon />} onClick={handleAddCompany}>Add Company</Button>
            <Grid container spacing={2}>
                <Grid size={2} sx={{borderRight: '1px solid'}}>

                    <Dropdown filterList={industries} field={'Industries'} applyFilter={handleFilter} />
                    <Dropdown filterList={location} field={'Location'} applyFilter={handleFilter} />
                    <Button variant="contained" sx={{ m: 1 }} startIcon={<FilterListAltIcon />} onClick={updateCompanyListing}>Filter</Button>
                    <Button variant="outlined" color="warning" sx={{ m: 1 }} startIcon={<ClearIcon />} onClick={removeFilterListing}>Reset Filters</Button>
                </Grid>

                <Grid container size={10} spacing={4} sx={{ padding: 4 }}>
                    {companies.map(company => (
                        <Grid item key={company._id} xs={12} sm={6} md={4}>
                            <CompanyCard company={company} performAction={handleAlertMessage} />
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </>
    )
}