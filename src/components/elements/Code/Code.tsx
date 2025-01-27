import { PropsMayBeVoid } from '../../../models.ts';

interface CodeProps extends PropsMayBeVoid {
  codeLines?: string[];
}

function Code({ children, className = '', codeLines }: CodeProps) {
  return (
    <pre className={`${className} code-block`}>
      <code>{codeLines?.join('\n') || children}</code>
    </pre>
  );
}

export default Code;
