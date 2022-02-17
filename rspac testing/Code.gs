function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('index');
  htmlOutput.message = '';
  return htmlOutput.evaluate();
}


function doPost(e) {
  
  Logger.log(JSON.stringify(e));
  
  var destination_id = '1CzfDrP3gPq79F0QGuOKGEUpXZojrzm_L';  // ID OF GOOGLE DRIVE DIRECTORY;
  var destination = DriveApp.getFolderById(destination_id);
  
  var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination.createFile(blob);
  
  listRecord(e.parameter.Name, e.parameter.Roll_Number, e.parameter.Email_Id, e.parameter.Contact_Number, e.parameter.Year, e.parameter.Branch, e.parameter.IEEE_Member, e.parameter.Membership_Id, e.parameter.Payment_Mode, e.parameter.Payment_Image); 
  
  var htmlOutput =  HtmlService.createTemplateFromFile('index');
  htmlOutput.message = 'File Uploaded';
  return htmlOutput.evaluate();
  
}

function listRecord(Name, Roll_Number, Email_Id, Contact_Number, Year, Branch, IEEE_Member, Membership_Id, Payment_Mode, Payment_Image)
{
  var url = 'https://docs.google.com/spreadsheets/d/1tcuj79yctJmJsXQ3hSYS1z-nD5-OOITxpkaMOAbxmHU/edit#gid=0';  //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var recordsSheet = ss.getSheetByName("Sheet");
  recordsSheet.appendRow([Name, Roll_Number, Email_Id, Contact_Number, Year, Branch, IEEE_Member, Membership_Id, Payment_Mode, Payment_Image, new Date()]);
}

function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}