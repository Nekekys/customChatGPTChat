
const APIKey = process.env.API_KEY
export default async function handler(request, response) {
    const APIBody = {
        "model": "text-davinci-003",
        "prompt": request.query.message,
        "temperature": 0.9,
        "max_tokens": 600,
        "top_p": 1,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.6,
        "stop": [" Human:", " AI:"]
    }
    try{
        const data = await fetch('https://api.openai.com/v1/completions',{
            method: 'post',
            body: JSON.stringify(APIBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${APIKey}`
            }
        })
        const dataJSON = await data.json()
        return response.send(dataJSON)
    }catch (e) {
        return response.send("error")
    }




    // then(res => {
    //     console.log(res)
    //     response.status(200).json({
    //         body: res,
    //         query: res
    //     })
    // })


}
