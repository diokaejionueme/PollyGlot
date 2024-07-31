
const translate = document.getElementById('translate-btn')
const startover = document.getElementById('startover-btn')
translate.onclick = flip;
startover.onclick = reset;


async function flip() {
    const front = document.getElementById("front");
    const back = document.getElementById("back");
    front.style.display = "none";
    back.style.display = "block";

    /*Retrieve Value of Text Input */
    const originalText = document.getElementById('input').value;

   
    const spanishCode  = document.getElementById('spanish')
    const frenchCode   = document.getElementById('french')
    const japaneseCode = document.getElementById('japanese')
    const outPutText   = document.getElementById('output')
    const textToTranslate = document.getElementById('input2')


    if(spanishCode.checked){
        const messages = [
            {
                role: 'system',
                content: `You're a proficient language translator. You are to take the incoming text and translate it to spanish`
            },
            {
                role: 'user',
                content: `${originalText}`
            }
        ]

        try {
            const url = "https://polyglot-worker.diokajr.workers.dev"
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messages)
            })
            const data = await response.json()
            outPutText.value = data
        }catch(err){
            console.error(err.message)
            outPutText.value= 'Unable to access AI. Please refresh and try again'
        }
        //outPutText.value = response.choices[0].message.content
    }
    else if (frenchCode.checked){

        const messages = [
            {
                role: 'system',
                content: `You're a proficient language translator. You are to take the incoming text and translate it to french`
            },
            {
                role: 'user',
                content: `${originalText}`
            }
        ]
        try {
                const url = "https://polyglot-worker.diokajr.workers.dev"
                const response = await fetch(url, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(messages)
                })
                const data = await response.json()
                outPutText.value = data
        }catch(err){
                console.error(err.message)
                outPutText.value= 'Unable to access AI. Please refresh and try again'
        }
      

        //outPutText.value = response.choices[0].message.content
    }
    else if (japaneseCode.checked){
        const messages = [
            {
                role: 'system',
                content: `You're a proficient language translator. You are to take the incoming text and translate it to japanese`
            },
            {
                role: 'user',
                content: `${originalText}`
            }
        ]
        try {
            const url = "https://polyglot-worker.diokajr.workers.dev"
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messages)
            })
            const data = await response.json()
            if(!response.ok){
                throw new Error (`Worker Error: ${data.error}`)
            }
            outPutText.value = data
        }catch(err){
            console.error(err.message)
            outPutText.value= 'Unable to access AI. Please refresh and try again'
        }


        //outPutText.value = response.choices[0].message.content
    }

    document.getElementById('input2').value = originalText;
    



}

function reset()
{
    const front = document.getElementById("front");
    const back = document.getElementById("back");

    front.style.display = "block"
     document.getElementById('input').value = "";

    back.style.display  = "none"
} 



