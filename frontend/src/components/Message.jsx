import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Message({ message }) {
    return (
        <>
            <Alert
                icon={<CheckIcon fontSize="inherit" />}
                severity="success">
                {message}
            </Alert>
        </>
    )
}