// fetcher.js
const getDriveService = require("./service");
require('dotenv').config()

const fetchLatestNewsletter = async () => {
  const folderId = process.env.FOLDER_ID;
  const driveService = getDriveService();
  console.log("Fetching latest newsletter...");
  const res = await driveService.files.list({
    includeItemsFromAllDrives: true,
    supportsAllDrives: true,
    q: `'${folderId}' in parents and trashed = false`,
    fields: "nextPageToken, files(*)",
    orderBy: "createdTime desc",
    pageSize: 1,
  });
  if (res.data.files) {
    const fileFound = res.data.files[0];
    console.log("file found", fileFound.name);
    const fileId = fileFound.id;
    const title = fileFound.name.replace(".pdf", "").replace(/_/g, " ");
    return {
      url: `https://drive.google.com/file/d/${fileId}/preview`,
      fileFound: true,
      fileId: fileId,
      title,
    };
  } else {
    return {
      url: "",
      fileFound: false,
      fileId: "",
      title: "",
    };
  }
};

module.exports = fetchLatestNewsletter;
