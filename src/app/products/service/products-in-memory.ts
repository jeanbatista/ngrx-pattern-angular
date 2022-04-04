let DATA = [
    { id: 'f00525a0-24d1-4789-8b1b-b3d25579d8df', name: 'Apple' }
]

const setInMemory = (data: any) => {
    DATA = data;
}

const getAllInMemory = () => {
    return DATA;
}

export {
    setInMemory,
    getAllInMemory
}