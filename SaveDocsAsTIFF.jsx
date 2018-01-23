/**********************************************************************/
/*  Author: Michael J. Lehrke                                         */
/*  License: GNU GPLv3                                                */
/*  Copyright: 2017                                                   */
/*                                                                    */
/*  Description: saves all open Illustrator documents as TIFF files   */
/**********************************************************************/

try {
  if (app.documents.length > 0) {
    var destinationFolder = Folder(app.activeDocument.path).selectDlg();
    if (!destinationFolder || destinationFolder === null) {
      throw new Error('Destination folder was not set or does not exist.');
    }

    var confirmAction = confirm('This will overwrite TIFF files with the same file name, continue?');
    if (!confirmAction) {
      throw new Error('Operation cancelled');
    }

    var options = new ExportOptionsTIFF();
    options.resolution = 300.0;

    for (i = 0; i < app.documents.length; i++) {
      var newFile = createNewFile(app.documents[i].name, '.tif', destinationFolder);
      app.documents[i].exportFile(newFile, ExportType.TIFF, options);
    }

    alert('Successfully exported the TIFF files.');
  } else {
    throw new Error('No documents are open.');
  }
}
catch(e) {
  alert(e.message, "TIFF Script Error", true);
}

function createNewFile(fileName, fileExtension, fileDestination) {
  var fullName = "";

  if (fileName.indexOf('.') < 0) {
    fullName = fileName + fileExtension;
  } else {
    fullName = fileName.substring(0, fileName.lastIndexOf('.'));
    fullName += fileExtension;
  }

  var newFile = new File(fileDestination + '/' + fullName);
  if (newFile.open('w')) {
    newFile.close();
  } else {
    throw new Error('Access/permission denied.  Cannot save file in this location.');
  }

  return newFile;
}
