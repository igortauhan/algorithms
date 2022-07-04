function compareTriplets(a: number[], b: number[]): number[] {
    let response: number[] = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            response[0]++;
        }

        if (b[i] > a[i]) {
            response[1]++;
        }
    }

    return response;
}

let a: number[] = [17, 28, 30];
let b: number[] = [99, 16, 8];

let response = compareTriplets(a, b);
response.forEach(item => {
    console.log(item);
});