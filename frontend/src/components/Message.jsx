import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';

export default function Message({ message }) {
    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: 20,
                    zIndex: 1400,
                }}
            >
                <Alert
                    icon={<CheckIcon fontSize="inherit" />}
                    severity="success"
                    sx={{
                        minWidth: 300,
                        maxWidth: '80%',
                        textAlign: 'center'
                    }}
                >
                    {message}
                </Alert>
            </Box>

        </>
    )
}