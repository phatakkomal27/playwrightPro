export let BASE_URL = "https://app.vwo.com";
export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

export function formatLowerCaseString(sname) {
    return sname.toLowerCase();
}

export function formatTitleCaseString(sname) {
    return sname.charAt(0).toUpperCase() + sname.slice(1).toLowerCase();
}   

