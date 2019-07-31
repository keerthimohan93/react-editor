import CKEditor from 'react-ckeditor-component';
import React, { Component } from 'react';

/* This is using CKEditor */

const config = {
  toolbarGroups: [
    { name: 'document', groups: ['mode', 'document', 'doctools'] },
    { name: 'clipboard', groups: ['clipboard', 'undo'] },
    {
      name: 'editing',
      groups: ['find', 'selection', 'spellchecker', 'editing']
    },
    { name: 'forms', groups: ['forms'] },
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    {
      name: 'paragraph',
      groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']
    },
    { name: 'links', groups: ['links'] },
    { name: 'insert', groups: ['insert'] },
    { name: 'styles', groups: ['styles'] },
    { name: 'colors', groups: ['colors'] },
    { name: 'tools', groups: ['tools'] },
    { name: 'others', groups: ['others'] },
    { name: 'about', groups: ['about'] },
    '/',
    '/'
  ],
  removeButtons:
    'Find,Replace,Scayt,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Language,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,FontSize,Font,About,Styles'
};

class Example extends Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {
      content: ''
    };
  }

  updateContent(newContent) {
    this.setState({
      content: newContent
    });
  }

  onChange(evt) {
    console.log('onChange fired with event info: ', evt);
    var newContent = evt.editor.getData();
    // this.setState({
    //   content: newContent
    // });
    console.log(newContent);
  }

  onBlur(evt) {
    console.log('onBlur event called with event info: ', evt);
  }

  afterPaste(evt) {
    console.log('afterPaste event called with event info: ', evt);
  }

  render() {
    return (
      <CKEditor
        activeClass="p10"
        config={config}
        content={this.state.content}
        events={{
          blur: this.onBlur,
          afterPaste: this.afterPaste,
          change: this.onChange
        }}
      />
    );
  }
}

export default Example;
