const UrlDetect = process.env.REACT_APP_API_GOOGLE_DETECT
const UrlTranst = process.env.REACT_APP_API_GOOGLE_TRANSLATE
const Key = process.env.REACT_APP_GOOGLE_KEY

export const apiGoogleDetect = (body) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': `${Key}`,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: body,
    };
    return fetch(UrlDetect, options)
}

export const apiGoogleTranslate = (body) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': `${Key}`,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: body
    }
    return fetch(UrlTranst,options)
}