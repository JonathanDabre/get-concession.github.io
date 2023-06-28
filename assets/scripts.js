
function getConcession(){
    var fees = document.getElementById("fees").value
    var percentage = document.getElementById("percentage").value
    var months = document.getElementById("paid-months").value

    // convert string to numbers
    fees = Number(fees)
    percentage = Number(percentage)
    months = Number(months)

    var m = Number(12 - months)

    var concession = Number(((fees * 12) *(percentage/100)) / m)

    // console.log(concession)
    document.getElementById("concession").value = concession
 
}

function clearAllEnteries(){
    document.getElementById("fees").value = ""
    document.getElementById("percentage").value = ""
    document.getElementById("paid-months").value = ""
    document.getElementById("concession").value = ""
    // console.log("Cleared")
}