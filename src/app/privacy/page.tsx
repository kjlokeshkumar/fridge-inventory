import type { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fridge AI',
  description: 'How Fridge AI collects, uses, and protects information.',
};

export default function PrivacyPolicyPage() {
  return (
    <article className={`glass-pane ${styles.policy}`}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>FRIDGE AI</p>
        <h1 className="page-title">Privacy Policy</h1>
        <p className={styles.updated}>Effective date: October 29, 2026</p>
      </header>

      <p>
        This policy describes how Fridge AI handles information when you use
        the Fridge AI website or Android app. Fridge AI is published by Lokesh
        Kumar Kuttuva Jagadeesan (“we,” “us,” or “our”). For privacy questions
        or requests, contact{' '}
        <a href="mailto:kjlokeshkumar@gmail.com">kjlokeshkumar@gmail.com</a>.
      </p>

      <section>
        <h2>Information we handle</h2>
        <ul>
          <li>
            <strong>Account information:</strong> the username and passkey you
            choose. Passkeys are stored as salted, one-way hashes. Existing
            accounts created before this change are migrated to a hash when
            they next sign in successfully.
          </li>
          <li>
            <strong>Household profiles:</strong> profile names, avatars,
            dietary preferences, and allergy or food-exclusion information you
            choose to enter.
          </li>
          <li>
            <strong>Food inventory:</strong> food names, Sourashtra names,
            quantities, categories, and estimated expiration dates.
          </li>
          <li>
            <strong>Photos:</strong> if you scan a fridge, pantry, or receipt,
            the selected or captured image is sent to our app server and to
            Google Gemini for food analysis. The app stores the extracted
            inventory details; it does not save the uploaded image as an
            inventory photo.
          </li>
          <li>
            <strong>Device storage:</strong> language choice, account and
            profile identifiers, and your saved meal plan are stored in the
            browser or Android WebView on your device.
          </li>
        </ul>
      </section>

      <section>
        <h2>How information is used</h2>
        <p>
          We use this information to provide sign-in, maintain food inventory
          and household preferences, analyze submitted images, and generate
          recipe suggestions. We do not sell personal information or use it for
          targeted advertising.
        </p>
      </section>

      <section>
        <h2>Service providers</h2>
        <p>
          Fridge AI uses Vercel to host the app, Neon to store app records, and
          Google Gemini to analyze images. Information needed for those
          functions is processed by the relevant provider under its own terms
          and privacy practices. Review{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
            Vercel&apos;s privacy policy
          </a>
          ,{' '}
          <a href="https://neon.tech/privacy-policy" target="_blank" rel="noreferrer">
            Neon&apos;s privacy policy
          </a>
          , and{' '}
          <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noreferrer">
            Google&apos;s Gemini API terms
          </a>
          . The current app does not intentionally include an advertising or
          separate analytics SDK.
        </p>
      </section>

      <section>
        <h2>Retention and deletion</h2>
        <p>
          The app removes inventory records whose expiration date has passed,
          as well as records older than 14 days from when they were added, when
          you access inventory or the shopping list. This cleanup is triggered
          by app requests, not by a background job. Account and household
          profile records do not currently have an automatic expiration period.
          You can also remove inventory items in the app. To ask us to delete an account
          or other information, email{' '}
          <a href="mailto:kjlokeshkumar@gmail.com">kjlokeshkumar@gmail.com</a>{' '}
          from your account email address, if applicable, and include your
          Fridge AI username. We may retain information when required to
          resolve disputes, enforce our terms, or meet legal obligations.
        </p>
        <p>
          You can clear the app&apos;s local browser storage through your
          browser or device settings. This removes locally saved preferences
          and identifiers but does not delete database records.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We use HTTPS for the hosted app and store account passkeys as salted,
          one-way hashes. The app uses signed, HttpOnly sessions and scopes
          profile and inventory access to the signed-in account. No internet
          transmission or storage method is completely secure, and these
          controls have not undergone an independent security assessment. Do
          not use Fridge AI for highly sensitive information.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Fridge AI is a general-audience household utility and is not
          intentionally directed to children. Children should use it only with
          a parent or guardian.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update this policy as the app changes. The effective date
          above indicates when this version was last updated. Questions or
          privacy requests can be sent to{' '}
          <a href="mailto:kjlokeshkumar@gmail.com">kjlokeshkumar@gmail.com</a>.
        </p>
      </section>
    </article>
  );
}
