import InitThemeScript from '@/components/utils/InitThemeScript'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <InitThemeScript />
      <body className='bg-neutral-50 dark:bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
