
const APIKey = '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'
export default async function handler(request, response) {
    try{
        const data = await fetch('https://api.openai.com/v1/completions',{
            method: 'post',
            body: JSON.stringify(request.query.message),
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
