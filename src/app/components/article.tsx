export default function Article({ content }: { content: string }) {
  return (
    <article
      className="px-8"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
