import OpenAI from "openai"

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

    const openai = new OpenAI({
        dangerouslyAllowBrowser: true, 
        apiKey: import.meta.env.VITE_OPENAI_API_KEY
    })

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

        const response = await openai.chat.completions.create({
            model: 'gpt-4o', 
            messages: messages
        })

        outPutText.value = response.choices[0].message.content
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

        const response = await openai.chat.completions.create({
            model: 'gpt-4o', 
            messages: messages
        })

        outPutText.value = response.choices[0].message.content
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

        const response = await openai.chat.completions.create({
            model: 'gpt-4o', 
            messages: messages
        })

        outPutText.value = response.choices[0].message.content
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



