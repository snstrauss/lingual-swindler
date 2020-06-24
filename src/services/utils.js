
export function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

export function getHostFromUrl(url){

    const hostname = new URL(url).hostname.match(/(\w+)(?=.com)/)[0];

    return hostname.toLowerCase();
}

export default {
    capitalize,
    getHostFromUrl
}