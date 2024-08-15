export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
}

export function formatCurrency(amount: string): string {
    return `Rs. ${parseFloat(amount).toFixed(2)}`;
}