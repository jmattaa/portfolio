export function jmFormatDateStr(dateString: string): string {
    // you see this? this is genious from sqlite and stuff ts js and all deez
    const date = new Date(dateString); 

    return date.toLocaleString(undefined, {
        localeMatcher: "best fit",
        weekday: "short", 
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}
