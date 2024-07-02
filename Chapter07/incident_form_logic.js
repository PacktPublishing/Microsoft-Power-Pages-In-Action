
$(document).ready(function() { 
$("#imc_anyinjuries").change(AnyInjury); 
$("#imc_anyinjuries").change(); 
});
function AnyInjury(){ 

var typeVal = ($("#imc_anyinjuries_1").is(":checked")); 
if(typeVal){ 
$("#imc_injurydescription").parent(). parent().show(); 
$("#imc_injurydescription_label").show(); 
SetFieldAsRequired("imc_injurydescription", "Injury Description");
}
else{ 
$("#imc_injurydescription").parent().parent(). hide(); 
$("#imc_injurydescription_label").hide(); 
SetFieldAsNonRequired ("imc_injurydescription");
}}



<script type="text/javascript">
 function SetFieldAsRequired(fieldName, displayname)
 {
    if (typeof (Page_Validators) == 'undefined') 
return;
    if ($("#" + fieldName) != undefined && $("#" + fieldName + 
"_label") != undefined)
    {
 $("#" + fieldName).prop('required', true);
 $("#" + fieldName).closest(".control").prev().
 addClass("required");
        // Create a new validator object
        var Requiredvalidator = document.createElement('span');
        Requiredvalidator.style.display = "none";
        Requiredvalidator.id = fieldName + "Validator";
        Requiredvalidator.controltovalidate = fieldName;
        var errormessage = "<a href='#" + fieldName + "_label'>" +  displayName  + " is a          required field.</a>";
 Requiredvalidator.errormessage = errormessage;
        Requiredvalidator.initialvalue = "";
        Requiredvalidator.evaluationfunction = function ()
        {
            var fieldControl = $("#" + fieldName);
            if (fieldControl.is("span"))
            {
 var value0 = $("#" + fieldName + "_0").prop("checked");
 var value1 = $("#" + fieldName + "_1").prop("checked");
 if (value0 == false && value1 == false)
                {
                    return false;
                }
                else
                {
                   return true;
                }
            }
            else
            {
                var value = $("#" + fieldName).val();
                if (value == null || value == "")
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
        };
 //Add the new validator to the page validators array
        Page_Validators.push(Requiredvalidator);
    }
 }
 function SetFieldAsNonRequired(fieldName)
 {
    if (typeof (Page_Validators) == 'undefined') return;
    if ($("#" + fieldName) != undefined)
    {
        $("#" + fieldName).closest(".control").prev().removeClass("required");
        $("#" + fieldName).prop('required', false);
        for (i = 0; i < Page_Validators.length; i++)
        {
 if (Page_Validators[i].id == fieldName + "Validator")
            {
                Page_Validators.splice(i);
            }
        }
    }
 }
 </script>



$("#firstDropdown").change(function() {
    var selectedValue = $(this).val();
    $.ajax({
        url: "/path/to/api/endpoint",
        data: {
            selectedValue: selectedValue
        },
        success: function(response) {
            var secondDropdown = $("#secondDropdown");
            secondDropdown.empty();
            $.each(response, function(index, item) {                
                secondDropdown.append($("<option></option>").val(item.value).text(item.text));
            });
        }
    });
});

Using Chart.js in Power Pages
add a reference to it in the form like this to add the Chart library: 
<!-- Include Chart.js library -->
 <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

retrieve the incident data from Power Pages and it looks something like this:
 var incidentsData = [
 { 'status': 'Open', 'count': 10 },
 { 'status': 'Completed, 'count': 15 },
 { 'status': 'Cancelled, 'count': 2 }
 ];

 // Extract labels and data from incidentsData
 var labels = incidentsData.map(function(e) {
  return e.status;
 });
 var data = incidentsData.map(function(e) {
  return e.count;
 });

// Create a pie chart
 var ctx = document.getElementById('myChart').getContext('2d');
 new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 
162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 
0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 
1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
      borderWidth: 1
    }]
  }
 });
 
