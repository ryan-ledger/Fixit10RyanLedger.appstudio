deleteCustomer.onshow=function(){
    let stateQuery = "SELECT DISTINCT name FROM customer;" 
   req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rle54222&pass=Plye4544&database=rle54222&query=" + stateQuery)

    if (req1.status == 200) { 
        let results = JSON.parse(req1.responseText)
        console.log(results)
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        

        console.log("the parsed JSON is " + results)
        let message = ""
        for (i=0; i<= results.length - 1; i++){
            message = (message + (results[i][0]) + "\n");
          }
        console.log(message)
        taCustomers.value = message;
      } 

  } else
        NSB.MsgBox("Error code: " + req1.status)
      
}

btnSubmit1.onclick=function(){
  
   check = inptState1.value
   let query = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rle54222&pass=Plye4544&database=rle54222&query=" + query)

    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)
      if (results.length == 0)
        NSB.MsgBox("There are no customers of that name.")
      else { 
        query = "DELETE FROM customer WHERE name =  " + '"' + check + '"'  ;
        req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rle54222&pass=Plye45448&database=rle54222&query=" + query)
        query2 = "SELECT * FROM customer";
        req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rle54222&pass=Plye4544&database=rle54222&query=" + query2)
        results = JSON.parse(req3.responseText)
        
        console.log("the parsed JSON is " + results)
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        taUpdatedCustomer.value = message
      } 

  } else
        NSB.MsgBox("Error code: " + req1.status)
}

