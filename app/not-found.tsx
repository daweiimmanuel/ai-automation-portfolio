import { Container } from '@/components/Container';
import { SafeLink } from '@/components/SafeLink';
import { site } from '@/content/site';

export default function NotFound() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-3xl">{site.notFound.message}</h1>
        <SafeLink href="/" className="mt-6 inline-block underline underline-offset-4">
          {site.notFound.homeLink}
        </SafeLink>
      </Container>
    </main>
  );
}
