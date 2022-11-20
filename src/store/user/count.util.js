export const updateCounter = (type, value) => {
    if(type === "inc"){
        value++
    }
    else if(type === "dec"){
        value--
    }

    return value;
}

