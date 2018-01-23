# SaveDocsAsTIFF
This script exports all open Illustrator documents as TIFF files in a user-specified folder.  

## Usage instructions
There are two methods for using this script.  For Method 1 the script is installed so it can be selected directly from the scripts menu.  Method 2 involves loading the script each time you want to use it.

### Method 1 (install script)
1.  Install the script in the Adobe Illustrator Scripts folder (you may have to restart Illustrator after installing).  The location of the scripts folder is dependent on the system and version of Illustrator installed:   
   PC example: <pre>C:\Program Files\Adobe\Adobe Illustrator CC 2018\Presets\en_US\Scripts</pre>
   Mac example:<pre>Applications/Adobe Illustrator CC/Presets/en_US/Scripts</pre>
2.  Open each document you wish to save as a TIFF file
3.  In Illustrator, go to File > Scripts and select the script titled "SaveDocsAsTIFF"
4.  Complete the prompt asking where you would like to save the TIFF files
5.  Complete the prompt confirming you wish to overwrite any TIFF files with the same file names

### Method 2 (load script)
1.  Place the script in a folder of your choice
2.  Open each document you wish to save as a TIFF file
3.  In Illustrator, go to Files > Scripts > Other Scripts and browse to the location of the script and open it
4.  Complete the prompt asking where you would like to save the TIFF files
5.  Complete the prompt confirming you wish to overwrite any TIFF files with the same file names


## Advanced

By default, this script saves the TIFF files with a dpi of 300.0.  This can be modified by adjusting the <code>options.resolution</code> parameter in the script.  [Allowed range](http://www.adobescript.com/vendor/doc_illustrator/ExportOptionsTIFF.html) is 72.0 to 2400.0.
