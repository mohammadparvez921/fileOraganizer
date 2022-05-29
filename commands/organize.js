const fs=require("fs");//fs module
const path=require("path"); //path module

let types={
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    //1.to check if srcPath is present
    if(srcPath==undefined){
        //The process.cwd() method returns the current working directory of the Node.js process.
        srcPath=process.cwd();
    }

//2-to create a directory ->organized_files
let organizedFiles=path.join(srcPath,"organized_files");
console.log(organizedFiles);
if(fs.existsSync(organizedFiles)==false){
fs.mkdirSync(organizedFiles);
}else console.log("file already exists");


//3.scan the entire srcPath(downloads folder in this case)
//Reads the contents of the directory.
let allFiles=fs.readFileSync(srcPath);
console.log(allFiles);

//4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)

for(let i=0;i<allFiles.length;i++){
    let ext=path.extname(allFiles[i]);
    console.log(ext);
}
}
let srcPath="C:/Users/Md Parvez/OneDrive/Desktop/fjp5 dev/NodeJs/fileOrganizer/downloads";
organize(srcPath);
