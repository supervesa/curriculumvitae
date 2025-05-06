import React from 'react';
import ExternalLink from './ExternalLink'; // Uusi tuonti!

const Publications = ({ publications }) => {
  const formatAuthors = (authors, isArticle = false) => {
    if (!authors || authors.length === 0) return '';

    if (isArticle) {
      return authors
        .map(author => author.trim().replace(/\.$/, ''))
        .join(' & ');
    }

    return authors
      .map(author => {
        const [lastName, ...firstNames] = author.replace(/,/g, '').split(' ').reverse();
        const initials = firstNames.reverse().map(n => `${n[0]}.`).join(' ');
        return `${lastName}, ${initials}`;
      })
      .join(', ')
      .replace(/,([^,]*)$/, ' &$1');
  };

  const groupedPublications = publications.reduce((acc, pub) => {
    const type = pub.type === 'Opinnäyte' ? 'theses' : 'articles';
    if (!acc[type]) acc[type] = [];
    acc[type].push(pub);
    return acc;
  }, {});

  return (
    <section className="education-section">
      {groupedPublications.theses?.length > 0 && (
        <div className="publication-group">
          <h2>Opinnäytteet</h2>
          {groupedPublications.theses
            .sort((a, b) => b.year - a.year)
            .map((pub, index) => (
              <div key={`thesis-${index}`} className="education-card">
                <div className="publication-item">
                  <p className="citation">
                    <em>{pub.title}</em>
                    {pub.year && ` (${pub.year}).`}
                    {pub.author?.length > 0 && (
                      <span className="authors">
                        {' '}{pub.author
                          .map(a => a.replace(/\.$/, ''))
                          .join(pub.author.length > 1 ? ' & ' : '')}.
                      </span>
                    )}
                    {pub.organization && (
                      <span className="organization">
                        {' '}{pub.organization.replace(/\.+$/, '')}.
                      </span>
                    )}
                    {pub['title-url'] && (
                      <ExternalLink
                        href={pub['title-url']}
                        className="external-link"
                        ariaLabel={`Avaa julkaisu: ${pub.title}`}
                      />
                    )}
                  </p>
                  {pub.description && (
                    <blockquote className="publication-description">
                      {pub.description}
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}

      {groupedPublications.articles?.length > 0 && (
        <div className="publication-group">
          <h2>Artikkelit</h2>
          {groupedPublications.articles
            .sort((a, b) => b.year - a.year)
            .map((pub, index) => (
              <div key={`article-${index}`} className="education-card">
                <div className="publication-item">
                  <p className="citation">
                    <span className="authors">
                      {formatAuthors(pub.author, true)} ({pub.year}).
                    </span>
                    <span className="article-title">
                      {' '}{pub.title}
                    </span>
                    {pub.article && (
                      <span className="article-info">
                        . {pub.article}
                      </span>
                    )}
                    {pub.organization && (
                      <span className="organization">
                        . {pub.organization.replace(/\.+$/, '')}.
                      </span>
                    )}
                    {pub['title-url'] && (
                      <ExternalLink
                        href={pub['title-url']}
                        className="external-link"
                        ariaLabel={`Avaa julkaisu: ${pub.title}`}
                      />
                    )}
                    {pub['article-url'] && (
                      <ExternalLink
                        href={pub['article-url']}
                        className="external-link"
                        ariaLabel={`Avaa artikkeli: ${pub.title}`}
                      />
                    )}
                  </p>
                  {pub.description && (
                    <blockquote className="publication-description">
                      {pub.description}
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default Publications;
