import { PropsMayBeVoid } from '../../../models.ts';

export interface CodeProps extends PropsMayBeVoid {
  codeLines?: string[];
}

// TODO: Add support for language highlighting
// TODO: Add support for comments
// TODO: Add support for line numbers
// TODO: Add support for copy to clipboard
function Code({
  children = '// Supply code',
  className = '',
  codeLines,
}: CodeProps) {
  return (
    <pre className={`${className} code-block`}>
      <code>{codeLines?.join('\n') || children}</code>
    </pre>
  );
}

export default Code;
