import OpenAI from "openai";

const corsHeaders = {
	'Access-Control-Allow-Origin': '*', 
	'Access-Control-Allow-Methods': 'POST, OPTIONS', 
	'Access-Control-Allow-Headers': 'Content-Type'
}

export default {
	async fetch(request, env, ctx) {
		//Handle CORS preflight requests
		if(request.method === 'OPTIONS'){
			return new Response(null, {headers: corsHeaders});
		}

		//Only Process POST requests. 
		if(request.method != 'POST')
		{
			return new Response(JSON.stringify({error: `${request.method} method not allowed`}), {
				status: 405, headers: corsHeaders})
		}


		const openai = new OpenAI({
			apiKey: env.OPENAI_API_KEY,
			baseURL: 'https://gateway.ai.cloudflare.com/v1/c7af162a0e1c690f74e06c078fc5acfc/pollyglot/openai'
		})
		try{
			const messages = await request.json()
			const response = await openai.chat.completions.create({
				model: 'gpt-4o', 
				messages: messages
			})

			const finalresponse = response.choices[0].message.content
			
			return new Response(JSON.stringify(finalresponse), {headers: corsHeaders})
		}catch(e){
			return new Response(JSON.stringify({error: e.message}), {status: 500, headers, corsHeaders});
			
		}

	},
};
