export default function log(message) {
    console.log(message);
}

export function logWithTimestamp(message) {

    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}
