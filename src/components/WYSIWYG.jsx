import React from 'react'

// Core
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'

// Plugins
import 'tinymce/plugins/paste/plugin'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/autoresize/plugin'
import 'tinymce/plugins/autolink/plugin'
import 'tinymce/plugins/image/plugin'
import 'tinymce/plugins/lists/plugin'
import 'tinymce/plugins/print/plugin'
import 'tinymce/plugins/preview/plugin'

// Skin
import 'tinymce/skins/lightgray/skin.min.css'

import ReactTinyMCE from 'react-tinymce';

export default function(props) {
  const handleEditorChange = (e) => {
    console.log(e.target.getContent());
  }

  return (
    <ReactTinyMCE
      content={props.content}
      config={{
        plugins: 'autolink link image lists print preview',
        skin: false,
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
      }}
      onChange={handleEditorChange}
    />
  );
}