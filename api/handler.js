
const APIKey = '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'
export default async function handler(request, response) {
   return fetch('https://api.openai.com/v1/completions',{
        method: 'post',
        body: JSON.stringify(request.query.message),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${APIKey}`
        }
    }).then(res => {
        console.log(res)
       response.status(200).json({
           body: res.data,
           query: res.data.choices[0].text
       })
   })


}
