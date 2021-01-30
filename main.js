/*
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

 */

document.getElementById("firstClass-increase").addEventListener("click", function(){
   ticketHandle("firstClass",true);
 });
 document.getElementById("firstClass-decrease").addEventListener("click", function(){
   ticketHandle("firstClass",false);
 });

 
document.getElementById("economyClass-increase").addEventListener("click", function(){
   ticketHandle("economy",true);
 });
 document.getElementById("economyClass-decrease").addEventListener("click", function(){
   ticketHandle("economy",false);
 });


 function ticketHandle(product, isIncrease){
   const ticketInput = document.getElementById(product +"Input");
   const ticketNewInput = parseInt(ticketInput.value);
   let ticketLastInput = ticketNewInput;

   if(isIncrease == true){
      ticketLastInput = ticketNewInput + 1;
   }
   if(isIncrease == false && ticketNewInput > 0){
      ticketLastInput = ticketNewInput - 1;
   }
   ticketInput.value = ticketLastInput;
   let ticketNewPrice = 0;

   if(product == "firstClass"){
      ticketNewPrice = ticketLastInput * 150;
   }
   if(product == "economy"){
      ticketNewPrice = ticketLastInput * 100;
   }
   subTotal();
}

function subTotal(){
   const firstClassTicketCount = ticketInput("firstClass");
   const economyTicketCount = ticketInput("economy");

   const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
   document.getElementById("subTotal").innerText = subTotal;

   const tax = Math.round(subTotal * 0.1);
   document.getElementById("tax").innerText = tax;

   const grandTotal = subTotal + tax;
   document.getElementById("total").innerText = grandTotal;
   
}

function ticketInput(product){
   const ticketInput = document.getElementById(product + "Input");
   const ticketCount = parseInt(ticketInput.value);
   return ticketCount;
}