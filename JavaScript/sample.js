


const apiUrl = 'https://brototype.com/api/v1/aluminies';
const postData = {
    pageIndex: i,
    limit: 50
};

const jsonPostData = JSON.stringify(postData);


async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonPostData,
        });

        const data = await response.json();
        console.log('Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
