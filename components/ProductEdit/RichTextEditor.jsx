// Import React dependencies.
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Element as SlateElement } from 'slate';
import { Slate, Editable, withReact } from 'slate-react'

import styles from './RichTextEditor.module.scss';

const RichTextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  // const renderElement = useCallback(props => <div className={`${styles["RichTextEditor"]}`} {...props}></div>)
  const [value, setValue] = useState([
    {
      children: [{ text: '' }],
      type: 'paragraph',
    },
  ])

  return (
    <Slate
      editor={editor}
      value={value}
      style={{background: 'red'}}
      onChange={newValue => setValue(newValue)}
    >
      <Editable
        className={`${styles["RichTextEditor"]}`}
        // renderElement={renderElement}
      />
    </Slate>
  )
}


export default RichTextEditor;