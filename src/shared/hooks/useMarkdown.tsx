import { useEffect, useState } from "react";

export function useMarkdown(url?: string) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(!!url);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw new Error(`Erro ao carregar markdown: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setContent(text);
      })
      .catch((err) => {
        if (!cancelled) setError(err as Error);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { content, loading, error };
}
