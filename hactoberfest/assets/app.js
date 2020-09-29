function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/1622/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function success(){
          document.getElementById('msg').innerHTML = "Submitted Successfully";
          document.getElementById("reset").disabled = true;
        },
        error: function error(){
          document.getElementById('msg').innerHTML = "hmmm sm sm wrong";
        }
    });
} 


