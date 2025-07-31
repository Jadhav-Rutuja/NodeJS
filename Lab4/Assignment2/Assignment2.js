function fetchData(url, callback) {
    console.log("Fetching data from: ${url}");

    setTimeout(() => {
        
        const success = true; 
        if (success) {
            const response = { data: "Sample Data" };
            callback(null, response); 
        } else {
            callback(new Error("Failed to fetch data"), null); 
        }
    }, 2000);
}

fetchData("https://example.com/api", (err, result) => {
    if (err) {
        console.error("Error:", err.message);
    } else {
        console.log("Success:", result);
    }
});