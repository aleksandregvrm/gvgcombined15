export const landingPageEvent = async () => {
    await fbq?.("track", "PageViewHome");
}

export const vendingPageEvent = async () => {
    await fbq?.("track", "PageViewVending");
}