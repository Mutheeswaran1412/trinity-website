// Serverless function for Hostinger or Vercel
const axios = require('axios');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const response = await axios.get('https://talenthire.ceipal.com/api/jobs', {
            headers: {
                'Authorization': 'Bearer YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09',
                'Content-Type': 'application/json'
            },
            params: {
                cpId: 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09',
                limit: 50
            }
        });

        res.json({
            success: true,
            jobs: response.data.jobs || [],
            total: response.data.total || 0
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch jobs'
        });
    }
};