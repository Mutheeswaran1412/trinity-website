// Test Ceipal API Connection
const axios = require('axios');

const CEIPAL_CONFIG = {
    apiKey: 'YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09',
    cpId: 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09'
};

async function testCeipalConnection() {
    console.log('🔍 Testing Ceipal API Connection...\n');
    
    const endpoints = [
        'https://talenthire.ceipal.com/api/jobs',
        'https://trinitetech.ceipal.com/api/jobs', 
        'https://jobsapi.ceipal.com/api/jobs',
        'https://api.ceipal.com/jobs'
    ];
    
    for (const endpoint of endpoints) {
        try {
            console.log(`📡 Testing: ${endpoint}`);
            
            const response = await axios.get(endpoint, {
                headers: {
                    'Authorization': `Bearer ${CEIPAL_CONFIG.apiKey}`,
                    'Content-Type': 'application/json',
                    'User-Agent': 'Trinity-Test/1.0'
                },
                params: {
                    cpId: CEIPAL_CONFIG.cpId,
                    limit: 5
                },
                timeout: 10000
            });
            
            console.log(`✅ SUCCESS: ${endpoint}`);
            console.log(`📊 Response Status: ${response.status}`);
            console.log(`📋 Jobs Found: ${response.data.jobs?.length || 0}`);
            console.log(`📄 Response Keys: ${Object.keys(response.data).join(', ')}\n`);
            
            if (response.data.jobs?.length > 0) {
                console.log('📝 Sample Job:');
                const job = response.data.jobs[0];
                console.log(`   Title: ${job.title || 'N/A'}`);
                console.log(`   Location: ${job.location || 'N/A'}`);
                console.log(`   ID: ${job.id || 'N/A'}\n`);
            }
            
            return true;
            
        } catch (error) {
            console.log(`❌ FAILED: ${endpoint}`);
            console.log(`   Error: ${error.message}`);
            if (error.response) {
                console.log(`   Status: ${error.response.status}`);
                console.log(`   Response: ${JSON.stringify(error.response.data).slice(0, 200)}...`);
            }
            console.log('');
        }
    }
    
    console.log('🚨 All endpoints failed. Check your Ceipal credentials.');
    return false;
}

// Test iframe URL
function testIframeUrl() {
    const iframeUrl = `https://jobsapi.ceipal.com/APISource/v3/index.html?api_key=${CEIPAL_CONFIG.apiKey}&cp_id=${CEIPAL_CONFIG.cpId}`;
    console.log('🖼️  Iframe URL for testing:');
    console.log(iframeUrl);
    console.log('\n📋 Copy this URL to your browser to test the iframe directly.\n');
}

// Run tests
async function runTests() {
    console.log('🚀 Trinity Ceipal Integration Test\n');
    console.log('📋 Configuration:');
    console.log(`   API Key: ${CEIPAL_CONFIG.apiKey.slice(0, 10)}...`);
    console.log(`   CP ID: ${CEIPAL_CONFIG.cpId.slice(0, 10)}...`);
    console.log('');
    
    testIframeUrl();
    await testCeipalConnection();
}

runTests().catch(console.error);