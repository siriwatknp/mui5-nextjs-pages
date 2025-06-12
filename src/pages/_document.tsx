import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

import {
  DocumentHeadTags,
  documentGetInitialProps,
  createEmotionCache,
} from "@mui/material-nextjs/v15-pagesRouter";

export default function Document(
  props: DocumentProps & { emotionStyleTags: any }
) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx, {
    emotionCache: createEmotionCache({ key: "mui", enableCssLayer: true }),
  });
  return finalProps;
};
