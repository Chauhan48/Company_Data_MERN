import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function CompanyCard(){
    return (
        <>
            <Card>
                <CardActionArea>
                    <Typography>
                        TCS
                    </Typography>
                    <Typography>
                        Industry: Consulting
                    </Typography>
                    <Typography>
                        Location: Mohali
                    </Typography>
                    <Typography>
                        Founded: 2002
                    </Typography>
                    <Typography>
                        Employee count: 4500
                    </Typography>
                    <Typography>
                        Revenue: $4600
                    </Typography>
                </CardActionArea>
            </Card>
            <h1>Hello</h1>
        </>
    )
}