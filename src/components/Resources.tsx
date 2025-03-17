// @ts-ignore
import ressurser from '../data/ressurser.js';


type Props = {
  category: string;
};

export default function Resources({ category }: Props) {
  const resourceData = ressurser.find(
    (resource: { category: string; text: string; sources: Array<{ title: string; url: string }> }) =>
      resource.category.toLowerCase() === category.toLowerCase()
  );

  if (!resourceData) {
    return <p>Ingen ressurser funnet for denne kategorien.</p>;
  }

  return (
    <section>
      <h2>{resourceData.category}</h2>
      <p>{resourceData.text}</p>
      <ul>
        {resourceData.sources.map((source: { title: string; url: string }, index: number) => (
          <li key={index}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
