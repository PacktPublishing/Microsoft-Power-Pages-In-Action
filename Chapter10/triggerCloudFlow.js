<script>
function triggerCloudFlow(webSiteRoot) {
    var companyNumber = $("accountnumber").val().trim(); // Retrieve and trim the company number input value
    var _url = webSiteRoot + "/_api/cloudflow/v1.0/trigger/1b169a46-deff-c905-fe3d-d0bba208d4a1"; // Define the URL for the Cloud Flow trigger endpoint

    var data = {}; // Create an empty object to store data
    data["company number"] = companyNumber; // Set the company number in the data object

    var payload = {}; // Create an empty object for the payload
    payload.eventData = JSON.stringify(data); // Convert the data object to a JSON string and set it as the eventData property of the payload object

    shell.ajaxSafePost({ // Make a POST request using the shell.ajaxSafePost method
        type: "POST", // Specify the HTTP method as POST
        contentType: "application/json", // Set the content type of the request
        url: _url, // Set the URL for the request
        data: JSON.stringify(payload), // Convert the payload object to a JSON string and send it as the request body
        processData: false, // Prevent jQuery from automatically processing the data
        global: false, // Disable global AJAX event handlers
    })
    .done(function(response) { // Handle the successful response
        const result = JSON.parse(response); // Parse the JSON response into an object
        $("address1_line1").val(result["AddressLine1"]); // Set the value of the address line 1 input field
        $("address1_line2").val(result["AddressLine2"]); // Set the value of the address line 2 input field
        $("address1_city").val(result["City"]); // Set the value of the city input field
        $("address1_postalcode").val(result["Zip/PostCode"]); // Set the value of the postal code input field
    })
    .fail(function() { // Handle the failure of the request
        alert("failed"); // Show an alert indicating failure
    });
}
</script>
