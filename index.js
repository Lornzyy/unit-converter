/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberInputEL = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const group1El = document.getElementById("group1");
const group2El = document.getElementById("group2")
const group3El = document.getElementById("group3")


convertBtn.addEventListener("click", function(){
    lengthConvertor()
    volumeConvertor()
    massConvertor()

})

function lengthConvertor(){
    let lengthbaseline = "Length (Meter/Feet)"
    let meterValue = (Number(numberInputEL.value) / 3.2808).toFixed(3);
    let feetValue = (Number(numberInputEL.value) * 3.2808).toFixed(3);

    let group1DOM = `${lengthbaseline}`;
    group1DOM +=  
    `<p>
        ${numberInputEL.value} metres = ${feetValue} feet | 
        ${numberInputEL.value} feet = ${meterValue} metres
    </p>`;
    group1El.innerHTML = group1DOM;
}


function volumeConvertor(){
    let volumeBaseline = "Volume (Litres/Gallons)"

    let meterValue = (Number(numberInputEL.value) * 0.264172).toFixed(3);
    let feetValue = (Number(numberInputEL.value) / 0.264172).toFixed(3);

    
    let group2DOM = `${volumeBaseline}`

    group2DOM += 
    `<p> 
        ${numberInputEL.value} litres = ${feetValue} gallons |
        ${numberInputEL.value} gallons = ${meterValue} litres
    </p>`;
    group2El.innerHTML = group2DOM;
}


function massConvertor(){
    let massBaseline = "Mass (Kilograms/Pounds)"
    let meterValue = (Number(numberInputEL.value) * 2.20462).toFixed(3);
    let feetValue = (Number(numberInputEL.value) / 2.20462).toFixed(3);

    let group3DOM = `${massBaseline}`
    group3DOM += 
    `<p> 
        ${numberInputEL.value} kilos = ${feetValue} pounds | 
        ${numberInputEL.value} pounds = ${meterValue} kilos
    </p>`;
    group3El.innerHTML = group3DOM;

}

