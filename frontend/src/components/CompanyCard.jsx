import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import { deleteCompany } from '../services/apiServices';
import Popup from './Popup';
import { useState } from 'react';

export default function CompanyCard({ company, performAction }) {
    const [openPopup, setOpenPopup] = useState(false);

    const handleUpdate = () => {
        setOpenPopup(true);
    }

    const handleClosePopup = () => {
        setOpenPopup(false);
    }

    const handleDelete = async () => {
        const response = await deleteCompany(company._id);
        performAction(response.message);
    }

    const handleUpdateMessage = (message) => {
        performAction(message);
    }

    return (
        <>
            {openPopup && <Popup
                open={openPopup}
                closePopup={handleClosePopup}
                updatedData={company}
                displayMessage={handleUpdateMessage}
            />}
            <Card sx={{ maxWidth: 345, margin: 'auto', m: 2, boxShadow: 4 }}>
                <CardActionArea sx={{ p: 4, height: '100%' }}>
                    <Typography variant="h5" component="div" gutterBottom>
                        {company.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Industry: {company.industry}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Location: {company.location}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Founded: {company.founded}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Employee count: {company.employeeCount}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Revenue: ${company.revenue}
                    </Typography>
                </CardActionArea>
                <Button
                    variant='outlined'
                    fullWidth sx={{ mb: 1, borderRadius: 1, textTransform: 'none', fontWeight: '500' }}
                    onClick={handleUpdate}
                >Update</Button>
                <Button
                    variant='outlined'
                    color="error"
                    startIcon={<DeleteIcon />}
                    fullWidth sx={{ borderRadius: 1, textTransform: 'none', fontWeight: '500' }}
                    onClick={handleDelete}
                >Delete</Button>
            </Card>
        </>
    )
}