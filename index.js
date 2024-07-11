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
        console.log('French Selected');
    }
    else if (japaneseCode.checked){
        console.log('Japanese Selected');
    }

    document.getElementById('input2').value = originalText;
    



}

function reset()
{
    const front = document.getElementById("front");
    const back = document.getElementById("back");

    front.style.display = "block"
    back.style.display  = "none"
}



