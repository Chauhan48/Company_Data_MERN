import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { companyList } from "../services/apiServices";
import Grid from "@mui/material/Grid";

export default function CompaniesList() {
    const [companies, setCompanies] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [location, setLocation] = useState([]);

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
            <Grid container spacing={4} sx={{ padding: 4 }}>
                {companies.map(company => (
                    <Grid item key={company._id} xs={12} sm={6} md={4}>
                        <CompanyCard company={company} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}