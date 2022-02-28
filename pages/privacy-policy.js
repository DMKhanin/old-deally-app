import Head from 'next/head'
import ContentLayout from '@layouts/ContentLayout';

const ContentPage = () => {
  return (
    <>
      
          <p>Information we collect from you and your users.</p>
          <p>Privacy Policy</p>
          <p>Visitors</p>
          <p>When you access and use DEALLY, or any shops provided by our customers ("Shop Owners" or "Merchants"), we automatically log information such as user agents and IP addresses to help us mitigate denial of service attacks and track down network issues.</p>

          <p>Identifiable Information</p>
          <p>As a merchant:</p>
          <p>If you sign up to become a Shop Owner, we will ask you to provide us with an email address, as well as optionally, company information. This information will naturally be stored in our database for later use. Such as notifying you by email if your shop has run out of stock. Or for appending your company information to customer invoices.</p>

          <p>As a customer or visitor:</p>
          <p>As a customer of a user owned shop, you may be prompted to provide information such as an email address for issuing your purchased goods to. This information will be stored in our database for tracking your order and for reference should you have any inquires about your order. Additionally, if the Shop Owner uses Crisp for customer support, your email address and past orders will be sent over to Crisp. A profile of you and your basic information is then build up by Crisp so that Merchants can more easily assist you.</p>

          <h3>Cookies</h3>
          <p>We use cookies and your browser's local storage to keep track of your login session as well as preferences.</p>

          <p>Some third parties we work with such as Google and MaxMind also implement cookies on our site to anonymously track impressions, usage and activity.</p>

          <p>More about third parties</p>
          <p>Opt out of tracking</p>

          <h3>Payment Gateways</h3>
          <p>When you pay using one of our supported payment gateways, we store a copy of your payment information in our database for fraud prevention and order tracking purposes. Please see the third parties section for further information.</p>


          <h3>Third Parties</h3>
          <p>Some third parties we use may collect personally identifiable information. Below, we have composed a list of the third party services we use and links to their respective privacy policies.</p>
          <p>Crisp - Opt-In customer support feature for Shop Owners.</p>
          <p>View Crisp's Privacy Policy</p>
          <p>Google Analytics - User and visitor usage of our website is tracked using Google Analytics.</p>
          <p>View Google's Privacy Policy</p>
          <p>Intercom - Customer support software enabled for logged in users and visitors of DEALLY.IO - We send your username and email address over to Intercom so that we may better assist our Shop Owners.</p>
          <p>View Intercom's Privacy Policy</p>
          <p>PayPal - If you choose to pay using PayPal, we will store information according to our "Payment Gateways" section.</p>
          <p> View PayPal's Privacy Policy</p>
          <p>CoinPayments - If you choose to pay using CoinPayments, we will store information according to our "Payment Gateways" section.</p>
          <p>View CoinPayments' Privacy Policy</p>
          <p>G2APay - If you choose to pay using G2APay, we will store information according to our "Payment Gateways" section.</p>
          <p>View G2APay's Privacy Policy</p>
          <p>MaxMind - We send over payment information collected through our payment gateways over to MaxMind for fraud prevention. For additional accuracy in fraud detection, MaxMind uses cookies to track your device.</p>
          <p>View MaxMind's Privacy Policy</p>
          <p>Sentry - We use Sentry to track errors encountered by users. Information such as browser metadata might be sent over to them for further review by us.</p>
          <p>View Sentry's Privacy Policy</p>

          <h3>Contact Us</h3>
          <p>Should you have any further questions or concerns about our policy, feel free to contact us at privacy@deally.io.</p>
    </>

  )
};


const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Deally | Privacy policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentLayout title="Privacy policy">
        <ContentPage />
      </ContentLayout>
    </>
  )
}

export default PrivacyPolicy;