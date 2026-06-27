interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;

}

let response1: APIResponse = {
    body: 'Hi',
};

console.log(response1.body);

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};

console.log("Body:"+ response2.body + "Headers" + response2.headers + "ResponseTime:" + response2.responseTime);