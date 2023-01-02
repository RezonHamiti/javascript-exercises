const removeFromArray = function(array, ...value) {
    let newArray = array.filter(function(item){
        return !value.includes(item);
    });
    return newArray;
};



// Do not edit below this line
module.exports = removeFromArray;
