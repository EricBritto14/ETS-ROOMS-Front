

export const formatDate = (_date: string) => {
    const date = new Date(_date);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getUTCDate()}`;
}