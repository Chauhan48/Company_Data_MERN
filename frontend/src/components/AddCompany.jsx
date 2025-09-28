import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { addCompany } from "../services/apiServices";

export default function AddCompany({ open, closePopup, newCompanyData, displayMessage }) {
  const [companyData, setCompanyData] = useState(newCompanyData);

  const handleUpdate = async () => {
    const response = await addCompany(companyData);
    displayMessage(response.message);
    closePopup();
    setTimeout(() => {window.location.reload()}, 2000);
  };

  return (
    <Modal open={open} onClose={closePopup}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
          minWidth: 400,
        }}
      >
        <Typography variant="h6" mb={2} fontWeight="bold" textAlign="center">
          Add Company
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Name"
            value={companyData.name}
            onChange={(e) =>
              setCompanyData((prev) => ({ ...prev, name: e.target.value }))
            }
            fullWidth
          />
          <TextField
            label="Industry"
            value={companyData.industry}
            onChange={(e) =>
              setCompanyData((prev) => ({ ...prev, industry: e.target.value }))
            }
            fullWidth
          />
          <TextField
            label="Location"
            value={companyData.location}
            onChange={(e) =>
              setCompanyData((prev) => ({ ...prev, location: e.target.value }))
            }
            fullWidth
          />
          <TextField
            label="Founded"
            type="number"
            value={companyData.founded}
            onChange={(e) =>
              setCompanyData((prev) => ({ ...prev, founded: e.target.value }))
            }
            fullWidth
          />
          <TextField
            label="Employee Count"
            type="number"
            value={companyData.employeeCount}
            onChange={(e) =>
              setCompanyData((prev) => ({
                ...prev,
                employeeCount: e.target.value,
              }))
            }
            fullWidth
          />
          <TextField
            label="Revenue"
            type="number"
            value={companyData.revenue}
            onChange={(e) =>
              setCompanyData((prev) => ({ ...prev, revenue: e.target.value }))
            }
            fullWidth
          />

          <Button
            sx={{ mt: 1 }}
            variant="contained"
            color="primary"
            onClick={handleUpdate}
          >
            Add Company
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
