import Nav from "./nav"
import Footer from "./footer"
import Script from "next/script"

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Footer />
    </main>
  )
}

export default Layout