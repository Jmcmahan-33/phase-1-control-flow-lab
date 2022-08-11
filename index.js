function scuberGreetingForFeet(chargeRide){
  if (chargeRide <= 400) {
    return 'This one is on me!'
  } else if (chargeRide > 400 && chargeRide < 2000) {
    return 'That will be twenty bucks.'
  } else if (chargeRide > 2000 && chargeRide < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else (chargeRide > 2500) 
    return 'No can do.'
}

function ternaryCheckCity(city){ 
  let isCity
  city === "NYC" ? isCity ='Ok, sounds good.' : isCity = 'No go.'
  return isCity
}

function switchOnCharmFromTip(tip){
  if (tip == "generous") {
    return 'Thank you so much.'
  } else if (tip == "not as generous") {
    return 'Thank you.'
  } else (tip == "anything else") 
    return 'Bye.'
}