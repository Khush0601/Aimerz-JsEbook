// Write a function calculateDownloadSpeed that calculates the download speed in Mbps based on the file size and download time.


function calculateDownloadSpeed(fileSize, time) {
    return (fileSize / time) * 8; // Convert MBps to Mbps
}

// Function call example
console.log(calculateDownloadSpeed(50, 10)); // 40 Mbps
