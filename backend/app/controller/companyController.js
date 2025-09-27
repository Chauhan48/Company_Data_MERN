const companies = require("../models/companyModel");

const companyController = {};

companyController.addCompany = async (req, res) => {
    try{

        const companyData = req.body;
    
        const data = new companies(companyData);
    
        data.save();
    
        return res.status(200).json({ message: 'Company added successfully.' })
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = companyController;