import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export const LegalPage = ({ page }) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `${page.title} - Akbar's Academy`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, [page]);

  return (
    <main className="bg-paper py-12 md:py-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2 text-brand hover:text-brand-600 font-semibold mb-10 underline underline-offset-4">
          <ArrowLeft size={18} />
          Back to home
        </a>

        <header className="mb-10 pb-8 border-b-2 border-ink">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{page.title}</h1>
          <p className="text-sm text-gray-500">Last updated {page.lastUpdated}</p>
        </header>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">{page.intro}</p>

        <div className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
              {section.paragraphs?.map((text, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-2">{text}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed marker:text-brand">
                  {section.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.after && <p className="text-gray-700 leading-relaxed mt-3">{section.after}</p>}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};
