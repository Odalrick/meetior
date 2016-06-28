import React from 'react'

import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill';

const defaultColors = [
	'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
	'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
	'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
	'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
	'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
	'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
	'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
	'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
	'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
	'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
	'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
	'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
	].map(function(color){ return { value: color } });

	const toolbarItems = [

		{ label:'Formats', type:'group', items: [			
			{ label:'Size', type:'size', items: [
				{ label:'Small',  value:'10px' },
				{ label:'Normal', value:'13px', selected:true },
				{ label:'Large',  value:'18px' },
				{ label:'Huge',   value:'32px' }
			]},
			{ type:'separator' },
			{ label:'Alignment', type:'align', items: [
				{ label:'', value:'left', selected:true },
				{ label:'', value:'center' },
				{ label:'', value:'right' },
				{ label:'', value:'justify' }
			]}
		]},

		{ label:'Text', type:'group', items: [
			{ type:'bold', label:'Bold' },
			{ type:'italic', label:'Italic' },
			{ type:'strike', label:'Strike' },
			{ type:'underline', label:'Underline' },
			{ type:'separator' },
			{ type:'color', label:'Color', items:defaultColors },
			{ type:'background', label:'Background color', items:defaultColors }
		]},

		{ label:'Blocks', type:'group', items: [
			{ type:'bullet', label:'Bullet' },
			{ type:'separator' },
			{ type:'list', label:'List' }
		]}
	];

export default function(props) {
  const {handleEditorChange, className} = props

  
  
  return (
    <ReactQuill theme="snow"
                value={props.text}
                onChange={handleEditorChange}
                pollInterval={1000}
                className={className}
				toolbar={toolbarItems} />
  )
}
