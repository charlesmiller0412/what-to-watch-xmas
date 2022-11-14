import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        };
    }

    render() {
        return (
            <Html lang="en-us">
                <Head>
                    {/* FAVICON */}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="%PUBLIC_URL%/assets/favicon/apple-touch-icon.png"
                    />
                    {/* adobe fonts */}
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/jdh1cul.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
