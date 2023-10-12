import '../styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
// import { Container } from '~/components/ui/Container';
import { Navbar } from '~/components/ui/Navbar';
import { withTRPC } from '@trpc/next';
import { AppRouter } from '~/server/routers';
import superjson from 'superjson';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { httpLink } from '@trpc/client/links/httpLink';
import Footer from '~/components/ui/Footer';
import ScrollButton from '~/components/ui/ScrollButton';
import Head from 'next/head';
import favicon from '../../public/favicon.ico';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel='shortcut icon' href={favicon.src} type='image/x-icon' />
        <title>Futures Mixed Martial Arts</title>
      </Head>
      <MantineProvider
        // emotionOptions={{ key: 'mantine', prepend: false }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Navbar />
        {/* <Container> */}
        <Component {...pageProps} />
        {/* </Container> */}
        <Footer />
        <ScrollButton />
      </MantineProvider>
    </SessionProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpLink({
          url: '/api/trpc',
        }),
      ],
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
