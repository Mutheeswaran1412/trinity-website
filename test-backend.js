// Test script to verify CEIPAL backend connection
const axios = require('axios');

async function testBackend() {
    console.log('🔍 Testing CEIPAL Backend Connection...\n');
    
    try {
        // Test 1: Check if backend server is running
        console.log('1. Testing backend server connection...');
        const response = await axios.get('http://localhost:5000/api/jobs', { timeout: 5000 });
        
        console.log('✅ Backend server is running');
        console.log(`📊 Response status: ${response.status}`);
        console.log(`📈 Jobs found: ${response.data.jobs?.length || 0}`);
        
        if (response.data.jobs && response.data.jobs.length > 0) {
            console.log('\n📋 Sample job:');
            const sampleJob = response.data.jobs[0];
            console.log(`   Title: ${sampleJob.title}`);
            console.log(`   Location: ${sampleJob.location}`);
            console.log(`   ID: ${sampleJob.id}`);
            console.log(`   URL: ${sampleJob.url || 'Not provided'}`);
        }
        
    } catch (error) {
        console.log('❌ Backend connection failed');
        
        if (error.code === 'ECONNREFUSED') {
            console.log('🚨 Backend server is not running on port 5000');
            console.log('💡 Please start your backend server first');
        } else if (error.response) {
            console.log(`🚨 Server error: ${error.response.status} - ${error.response.statusText}`);
            console.log(`📝 Error details: ${JSON.stringify(error.response.data, null, 2)}`);
        } else {
            console.log(`🚨 Network error: ${error.message}`);
        }
    }
}

// Check environment variables
console.log('🔧 Environment Check:');
console.log(`CEIPAL_API_KEY: ${process.env.CEIPAL_API_KEY ? '✅ Set' : '❌ Missing'}`);
console.log(`CEIPAL_CP_ID: ${process.env.CEIPAL_CP_ID ? '✅ Set' : '❌ Missing'}`);
console.log(`CEIPAL_TALENTHIRE_HOST: ${process.env.CEIPAL_TALENTHIRE_HOST ? '✅ Set' : '❌ Missing'}`);
console.log('');

testBackend();