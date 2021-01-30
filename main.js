document.getElementById("firstClass-increase").addEventListener("click", function(){
    handleFirstClassTicket(true);
 });
 document.getElementById("firstClass-decrease").addEventListener("click", function(){
    handleFirstClassTicket(false);
 });

 function handleFirstClassTicket(isIncrease){
    const firstClassTicketInput = document.getElementById("firstClassTicket");
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);
    let firstClassTicketNewCount = firstClassTicketCount;
    if(isIncrease == true){
        firstClassTicketNewCount = firstClassTicketCount + 1;
    }
    if(isIncrease == false && firstClassTicketCount > 0){
        firstClassTicketNewCount = firstClassTicketCount - 1;
    }
    firstClassTicketInput.value = firstClassTicketNewCount;
    const firstClassTotalTicket = firstClassTicketNewCount * 150;
    document.getElementById("ticket-total").innerText = "$"+ firstClassTotalTicket;
 }


document.getElementById("econmyClass-increase").addEventListener("click", function(){
    handleEconmyClassTicket(true);
 });
 document.getElementById("econmyClass-decrease").addEventListener("click", function(){
    handleEconmyClassTicket(false);
 });

 function handleEconmyClassTicket(isIncrease){
    const econmyClassTicketInput = document.getElementById("econmyClassTicket");
    const econmyClassTicketCount = parseInt(econmyClassTicketInput.value);
    let econmyClassTicketNewCount = econmyClassTicketCount;
    if(isIncrease == true){
        econmyClassTicketNewCount = econmyClassTicketCount + 1;
    }
    if(isIncrease == false && econmyClassTicketCount > 0){
        econmyClassTicketNewCount = econmyClassTicketCount - 1;
    }
    econmyClassTicketInput.value = econmyClassTicketNewCount;
    const econmyClassTicketTotal = econmyClassTicketNewCount * 100;
    document.getElementById("ticket-total").innerText = "$"+ econmyClassTicketTotal;
 }

 