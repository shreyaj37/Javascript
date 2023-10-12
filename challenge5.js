const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray];

    newDeskArr.pop()
    newDeskArr.sort()
    newDeskArr.unshift(newDeskArr.pop())
    const usbIndex = newDeskArr.indexOf("USB drive")
    newDeskArr.push(newDeskArr.splice(usbIndex, 1))
    const laptopIndex = newDeskArr.indexOf("laptop")
    newDeskArr.splice(laptopIndex, 1)

    return newDeskArr;
};

// Call the processArray function
const result = processArray(deskArray);

// Print the result to the console
console.log(result);
