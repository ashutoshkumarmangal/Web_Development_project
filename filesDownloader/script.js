const fileInput = document.querySelector("input");
downloadbtn = document.querySelector("button");

downloadbtn.addEventListener("click", e =>{
    e.preventDefault();
    downloadbtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);

});

function fetchFile(url){
    fetch(url).then(res =>res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file);//URL.createObjectURL(file) creates the url of the passed object
        let aTag = document.createElement("a");
        aTag.href = tempUrl;//passing tempUrl as href value of <a>tag
        aTag.download = url.replace(/^.*[\\\/]/, '');//passing file last name & extension as download value <a>
        document.body.appendChild(aTag);
        aTag.click();
       aTag.remove(); 
       URL.revokeObjectURL(tempUrl);
       downloadbtn.innerText = "Download File";
    }).catch(()=>{
        downloadbtn.innerText = "Download File";
        alert("Failed to download file");
    
    });
}