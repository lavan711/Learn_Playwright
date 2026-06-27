let responseCodes: number[] = [200, 201, 404, 302, 500, 401];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    })
}

console.log("All Codes:", responseCodes);
console.log("Failed Codes:", getFailedCodes(responseCodes));