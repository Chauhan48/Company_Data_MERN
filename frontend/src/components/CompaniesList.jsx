import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { companyList } from "../services/apiServices";
import Grid from "@mui/material/Grid";
import Message from "./Message";

export default function CompaniesList() {
    const [companies, setCompanies] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [location, setLocation] = useState([]);
    const [action, setAction] = useState(false);
    const [actionMessage, setActionMessage] = useState('');

    const handleAlertMessage = (message) => {
        setActionMessage(message);
        setAction(true);
        setTimeout(() => setAction(false), 1050);
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