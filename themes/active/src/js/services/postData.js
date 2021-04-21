const postData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    });

    if(!response.ok) {
        throw new Error('error request');
    }

    return await response.json();
}

export default postData;
