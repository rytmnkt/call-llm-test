/**
 * POST /api/submit
 */
export async function onRequest(context) {
    try {
        //   let input = await context.request.formData();

        let input = [1,2,3]
        let pretty = JSON.stringify([...input], null, 2);
        return new Response(pretty, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}