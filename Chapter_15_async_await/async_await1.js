//async and await
function getToken() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("secret_token_123"), 1000);
    });
}

function getUser(token) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Gemini", token: token }), 1000);
    });
}

getToken()
.then(function(token)
{
    return getUser(token);
})
.then(function(user)
{
    console.log(user);
});


async function run() {
    let token = await getToken();
    let user = await getUser("123");
}

run();