/**
 * Renders a JSON-LD structured-data script. Server component — the JSON is
 * serialized at render time and embedded in the document head/body.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
