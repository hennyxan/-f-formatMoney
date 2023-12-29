let num = 23423435.23;

//23,423,435.23

function formatMoney(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatMoney(23423435.23));


