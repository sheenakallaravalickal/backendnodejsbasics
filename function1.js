function display(message) {
        console.log(message)
}

function result1(result,num)
{
    if (num<1){
        result(`negative`)
    }
    else {
        result(`positive`)
    }
}
result1(display,5)
