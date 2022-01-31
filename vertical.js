function showVerticalMessage(str) {
    const MAX_LENGHT = 10;

    if (str[0] === 'м') {
        str = str[0].toUpperCase() + str.slice(1);
    }

    if(str.length >= MAX_LENGHT) {
        str = str.slice(0, MAX_LENGHT);
    }

    for (let i of str) {
        console.log(i);
    }
}

showVerticalMessage('марафон');
showVerticalMessage('немарафон');
showVerticalMessage('очень длинный марафон');