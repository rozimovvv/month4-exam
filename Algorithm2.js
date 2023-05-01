// example 1:

input: obj = {
    value:1,
    children: [
        {
            value: 2
        },
        {
            value: 3
        },
        {
            value: 4,
            children: [
                value: 5,
                children: [
                    {
                        value: 6
                    }
                ]
            ]
        }
    ]
}

output: 21

function findValuesSum(word1, word2)