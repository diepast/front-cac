export const getEvents = async() => {
    try{
        const request = await fetch("http://localhost:5000/api/events")
        const data = await request.json()
        return data.events
    }catch(err){
        return []
    }
}

