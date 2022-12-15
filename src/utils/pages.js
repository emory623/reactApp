export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit );
}

export const getPagesArray = (totalPages) => {
    let res = [];
    for (let index = 0; index < totalPages; index++) {
        res.push(index+1)
    }
    return res;
}