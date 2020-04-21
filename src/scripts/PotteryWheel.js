const pottery = {"id": 1}

export const makePottery = (shape, weight, height, id) => {
    for(let i=1; i <= 5; i++){
      console.log(i)
        pottery.id + i
    
        pottery.height = height
        pottery.weight = weight
        pottery.shape = shape
    }
    return pottery
}

