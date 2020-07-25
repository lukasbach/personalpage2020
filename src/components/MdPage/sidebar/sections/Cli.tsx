import * as React from 'react';
import { MdPageFrontmatter } from '../../MdPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

export const Cli: React.FC<MdPageFrontmatter> = props => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasCopied, setHasCopied] = useState(false);

  if (!props.cli) {
    return null;
  }

  return (
    <div className={`cli-input${hasCopied ? ' has-copied' : ''}`} onMouseDown={() => {
      inputRef.current?.select();
      document.execCommand('copy');
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 1000);
    }}>
      <FontAwesomeIcon icon={hasCopied ? 'check-circle' : 'terminal' as any} />
      <input value={props.cli} ref={inputRef} />
    </div>
  );
};
