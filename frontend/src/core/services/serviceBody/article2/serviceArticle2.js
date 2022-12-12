const Url = process.env.REACT_APP_API_FACE_DETECTION_1
const Key = process.env.REACT_APP_FACE_DETECTION_1_KEY

export const apiFaceDetection1 = (body) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': `${Key}`,
            'X-RapidAPI-Host': 'face-detection6.p.rapidapi.com'
        },
        body: `${body}`
    };
    return fetch(Url, options)
}