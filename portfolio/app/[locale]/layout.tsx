import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import FillerImage from "./components/FillerImage";
import { MessageProvider } from "./components/MessageProvider";

const locales = ["en", "tr"] as const;

export function generateStaticParams() {
    return locales.map((locale) => ({
        locale,
    }));
}

type Props = {
    children: React.ReactNode,
    params: Promise<{locale: string}>
};
 
export default async function LocaleLayout({children, params} : Props) {
    const {locale} = await params;
    
    if (!hasLocale(locales, locale)) {
        return notFound();
    }
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <ThemeProvider>
            <Navbar t={messages.Navbar}/>
            <MessageProvider messages={messages}>
                <FillerImage>
                    {children}
                </FillerImage>
            </MessageProvider>
        </ThemeProvider>
    );
}