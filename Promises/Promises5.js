// Write a function simulateFileUpload(fileName, size) that simulates uploading a file.
//  Return a promise that resolves after a delay based on the file size, logging the upload progress every second.


function simulateFileUpload(fileName, size) {
return new Promise((resolve,reject)=>{
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.ceil(100 / size);
      console.log(`Uploading ${fileName}: ${progress}%`);

      if (progress >= 100) {
        clearInterval(interval);
        resolve("File uploaded successfully!");
      }
    }, 1000);
  });

}

// Example Usage
simulateFileUpload("photo.jpg", 3).then(console.log);