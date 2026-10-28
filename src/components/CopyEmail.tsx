import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type CopyEmailProps = {
  email: string;
};

type CopyState = "idle" | "copied" | "selected";

const feedback: Record<CopyState, string> = {
  idle: "",
  copied: "Copiado! Agora é só colar.",
  selected: "Selecionado. Use Ctrl+C para copiar.",
};

export function CopyEmail({ email }: CopyEmailProps) {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const [state, setState] = useState<CopyState>("idle");

  function selectEmail() {
    const node = emailRef.current;
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      // No clipboard access (old browser, insecure context): select the text instead.
      selectEmail();
      setState("selected");
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
      <a
        ref={emailRef}
        href={`mailto:${email}`}
        className="font-mono text-lg break-all text-foreground hover:text-primary sm:text-xl"
      >
        {email}
      </a>
      <Button type="button" variant="outline" onClick={copyEmail}>
        {state === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        Copiar e-mail
      </Button>
      <span aria-live="polite" className="font-mono text-[0.8125rem] text-primary">
        {feedback[state]}
      </span>
    </div>
  );
}
