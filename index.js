const WRONG_TYPE = "Wrong types in array!";
module.exports = (array) => {
    try {
        if (!Array.isArray(array) || array.length === 0) {
            return null;
        }
        // const sortedArray = array.sort();
        // sortedArray.map((element) => {
        //     if (typeof element !== 'number') {
        //         throw new Error(WRONG_TYPE);
        //     }
        // });
        const sortedArray = array.sort((a, b) => {
            if (typeof a !== 'number') {
                throw new Error(WRONG_TYPE);
            }
            return a - b;
        });
        if (sortedArray.length % 2 === 0) {
            const index1 = (sortedArray.length / 2);
            const index2 = (sortedArray.length / 2) - 1;
            return (sortedArray[index1] + sortedArray[index2]) / 2;
        } else {
            return sortedArray[Math.floor(sortedArray.length / 2)];
        }
    } catch (err) {
        if(err.message === WRONG_TYPE){
            return null;
        } else {
            throw err;
        }
    }
}