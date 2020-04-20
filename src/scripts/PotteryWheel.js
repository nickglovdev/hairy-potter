const pottery = {"id": 1}

export const makePottery = (shape, weight, height) => {
    for(let i=0; i < 5; i++){
        pottery.id = i++
    }
        pottery.height = height
        pottery.weight = weight
        pottery.shape = shape
    
    return pottery
}

