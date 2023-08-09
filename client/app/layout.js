import { LayoutProvider } from '../component/LayoutProvider';

export const metadata = {
    title: "Students' Chapter CSE",
    description: "The ofiicial website of IEI Students' Chapter CSE",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    );
}
