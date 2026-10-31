import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delete Your Account | Sourashtra Chef',
  description: 'Learn how to delete your Sourashtra Chef account and associated data.',
};

export default async function DeleteAccountPage({
  searchParams,
}: {
  searchParams: Promise<{ deleted?: string }>;
}) {
  const { deleted } = await searchParams;

  return (
    <article className="deletion-page">
      <header>
        <p className="deletion-eyebrow">SOURASHTRA CHEF</p>
        <h1 className="page-title">Delete your account</h1>
      </header>

      {deleted === '1' && (
        <p className="deletion-success" role="status">
          Your account and associated data have been deleted.
        </p>
      )}

      <p>
        You can permanently delete your Sourashtra Chef account and its
        associated household profiles and food inventory from the app.
      </p>

      <ol>
        <li>Sign in to Sourashtra Chef.</li>
        <li>Open your account from the top of the screen.</li>
        <li>Choose <strong>Delete account</strong> and confirm the deletion.</li>
      </ol>

      <p>
        Account deletion removes your account details, household profiles, and
        associated inventory from our database. Saved meal plans and profile
        selection stored on the device are also cleared from that browser or
        app installation. Deletion is permanent. Information may be retained
        only where required by law or to resolve legal claims.
      </p>

      <p>
        If you cannot sign in, you can request deletion by emailing{' '}
        <a href="mailto:kjlokeshkumar@gmail.com?subject=Sourashtra%20Chef%20account%20deletion">
          kjlokeshkumar@gmail.com
        </a>{' '}
        from the Google account email address associated with your Sourashtra
        Chef account. Include “Sourashtra Chef account deletion” in the subject.
      </p>

      <Link href="/privacy">Read our Privacy Policy</Link>
    </article>
  );
}
