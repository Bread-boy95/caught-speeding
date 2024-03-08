// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById("d1-speed").value;
  let d1Limit = +document.getElementById("d1-limit").value;
  let d1Ticket = +document.getElementById("d2-ticket").value;
  let d2Speed = +document.getElementById("d2-speed").value;
  let d2Limit = +document.getElementById("d2-limit").value;
  let d2Ticket = +document.getElementById("d2-ticket").value;
  let d3Speed = +document.getElementById("d3-speed").value;
  let d3Limit = +document.getElementById("d3-limit").value;
  let d3Ticket = +document.getElementById("d2-ticket").value;

  // Calculate & Output Ticket Types
  document.getElementById("d1-ticket").innerHTML = calcTicket(
    d1Limit,
    d1Speed,
    d1Ticket
  );
  document.getElementById("d2-ticket").innerHTML = calcTicket(
    d2Limit,
    d2Speed,
    d2Ticket
  );
  document.getElementById("d3-ticket").innerHTML = calcTicket(
    d3Limit,
    d3Speed,
    d3Ticket
  );

  // Driver 1
  //   let d1Ticket;
  //   if (d1Speed > d1Limit + 40) {
  //     d1Ticket = "Really Big Ticket";
  //   } else if (d1Speed > d1Limit + 20) {
  //     d1Ticket = "Big Ticket";
  //   } else if (d1Speed > d1Limit) {
  //     d1Ticket = "Small Ticket";
  //   } else {
  //     d1Ticket = "No Ticket";
  //   }
  //   document.getElementById("d1-ticket").innerHTML = d1Ticket;

  //   // Driver 2
  //   let d2Ticket;
  //   if (d2Speed > d2Limit + 40) {
  //     d2Ticket = "Really Big Ticket";
  //   } else if (d2Speed > d2Limit + 20) {
  //     d2Ticket = "Big Ticket";
  //   } else if (d2Speed > d2Limit) {
  //     d2Ticket = "Small Ticket";
  //   } else {
  //     d2Ticket = "No Ticket";
  //   }

  //   // Driver 3
  //   let d3Ticket;
  //   if (d3Speed > d3Limit + 40) {
  //     d3Ticket = "Really Big Ticket";
  //   } else if (d3Speed > d3Limit + 20) {
  //     d3Ticket = "Big Ticket";
  //   } else if (d3Speed > d3Limit) {
  //     d3Ticket = "Small Ticket";
  //   } else {
  //     d3Ticket = "No Ticket";
  //   }
  //   document.getElementById("d3-ticket").innerHTML = d3Ticket;
}
function calcTicket(limit, speed, Ticket) {
  let sizeTicket;
  if (speed > limit + 40) {
    sizeTicket = "Really Big Ticket";
  } else if (speed > limit + 20) {
    sizeTicket = "Big Ticket";
  } else if (speed > limit) {
    sizeTicket = "Small Ticket";
  } else {
    sizeTicket = "No Ticket";
  }
  document.getElementById(Ticket).innerHTML = sizeTicket;
}
