module.exports = async function (context, req) {
    try {
        const { expression } = req.body;

        if (!expression) {
            context.res = {
                status: 400,
                body: { error: "No expression provided" }
            };
            return;
        }

        // Evaluate expression safely
        const result = Function(`'use strict'; return (${expression})`)();

        context.res = {
            body: { result }
        };
    } catch (error) {
        context.res = {
            status: 400,
            body: { error: "Invalid expression" }
        };
    }
};
