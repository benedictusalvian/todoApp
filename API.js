import React from 'react';

const API_URL = `https://jsonplaceholder.typicode.com/posts`;

export const getData = async() => {
    const results = await fetch(API_URL).then((x) => x.json()).then((json) => json.splice(0, 5));
    const data = results.map(
        ({
            id,
            title,
            body,
        }) => ({
            key: String(id),
            title: title,
            body: body,
        })
    );
    return data;
};