// service.js
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const keyFilePath = path.join('/tmp', 'keyfile.json');

fs.writeFileSync(keyFilePath, JSON.stringify(config));
const getDriveService = () => {
  const SCOPES = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.readonly'];

  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: SCOPES,
  });
  const driveService = google.drive({ version: 'v3', auth });
  return driveService;
};

module.exports = getDriveService;