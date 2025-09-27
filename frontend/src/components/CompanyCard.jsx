import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

export default function CompanyCard({ company }){
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: 'auto', m: 2, boxShadow: 3, borderRadius: 2 }}>
                <CardActionArea sx={{ p: 4, height: '100%' }}>
                    <Typography variant="h5" component="div" gutterBottom>
                        {company.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Industry: {company.industry}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Location: {company.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Founded: {company.founded}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Employee count: {company.employeeCount}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Revenue: ${company.revenue}
                    </Typography>
                </CardActionArea>
                    <Button variant='outlined' fullWidth sx={{ mb: 1, borderRadius: 2, textTransform: 'none', fontWeight: '500' }} >Update</Button>
                    <Button variant='outlined' color="error" startIcon={<DeleteIcon />} fullWidth sx={{ borderRadius: 2, textTransform: 'none', fontWeight: '500' }} >Delete</Button>
            </Card>
        </>
    )
}