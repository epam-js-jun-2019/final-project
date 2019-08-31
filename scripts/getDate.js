export function getDate(date){
    if(date===null || date===undefined) return date;
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      };
    return newDate.toLocaleString("ru", options);
}