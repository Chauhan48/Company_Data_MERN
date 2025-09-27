const companies = require("../models/companyModel");

const companyController = {};

companyController.addCompany = async (req, res) => {
    try {

        const companyData = req.body;

        const data = new companies(companyData);

        data.save();

        return res.status(200).json({ message: 'Company added successfully.' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

companyController.listCompanies = async (req, res) => {
    try {
        const companiesList = await companies.find({}, {__v: 0});
        const industries = await companies.distinct('industry');
        const location = await companies.distinct('location');
        return res.status(200).json({ companiesList, industries, location });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

companyController.deleteCompany = async (req, res) => {
    try {
        const { companyId } = req.query;
        const company = await companies.findByIdAndDelete(companyId);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        return res.status(200).json({ message: 'Company removed successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

companyController.updateCompany = async (req, res) => {
    try{
        const companyData = req.body;
        const updatedData = await companies.findByIdAndUpdate(companyData._id, 
            {
                name: companyData.name,
                industry: companyData.industry,
                location: companyData.location,
                founded: companyData.founded,
                employeeCount: companyData.employeeCount,
                revenue: companyData.revenue
            }
        )

        if(!updatedData){
            return res.status(404).json({ message: 'Company not found' });
        }
        return res.status(200).json({ message: 'Data updated successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = companyController;