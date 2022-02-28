import Head from 'next/head'
import ContentLayout from '@layouts/ContentLayout';

const ContentPage = () => {
  return (
    <>
          <h3>Refund Policy</h3>
          <p>We do try to be lenient when it comes to refunds. If you forgot to cancel your subscription or you've changed your mind about your purchase, we'll be happy to issue a refund for your most recent charge.</p>

          <h3>Example</h3>
          <p>If you've signed up for our Business plan ($59/month) and you've used it for 50 days, you will likely have been charged twice. Once when you signed up, and another time at the 30 day mark, totaling $118. We can clear your most recent charge, meaning we'll issue a refund of $59.</p>

          <h3>Frequency</h3>
          <p>To prevent abuse of our policy, we only issue refunds once per shop. Naturally, exceptions are made to this in instances where you've been billed due to misinformation on our site or issues with our systems.</p>

          <h3>Contact</h3>
          <p>You can contact us either through our on-site support widget, or just email us at Support@deally.io</p>
    </>

  )
};


const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Deally | Refund policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentLayout title="Refund policy">
        <ContentPage />
      </ContentLayout>
    </>
  )
}

export default PrivacyPolicy;