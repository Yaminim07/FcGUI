const dataplot = {
  chart: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'chart_paletteColors',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '20',
    min: '0',
    max: '100',
    value: '',
    id: 'chart_plotFillAlpha',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Round edge',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'chart_useRoundEdges',
    note: '',
    defaultActive: '1',
    location: 'chart'

  },{
    label: 'Shadow',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'chart_showShadow',
    note: '',
    defaultActive: '1',
    location: 'chart'
  },{
    label: 'Max Column Width',
    inputFieldType: 'number',
    placeholder: '10',
    value: '',
    id: 'chart_maxColWidth',
    note: '',
    defaultActive: '1',
    location: 'chart'

  },{
    label: 'Show Border',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'chart_showPlotBorder',
    note: '',
    defaultActive: '1',

    location: 'chart',

    }, {
      label: 'Border Color',
      inputFieldType: 'color',
      placeholder: '#0000ff',
      value: '',
      id: 'chart_plotBorderColor',
      note: '',
      defaultActive: '1',
      location: 'chart'

    },{
      label: 'Border Thickness',
      inputFieldType: 'number',
      placeholder: 'eg-4',
      value: '',
      id: 'chart_plotBorderThickness',
      note: '',
      defaultActive: '1',
      location: 'chart'
    },{
      label: 'Border opacity',
      inputFieldType: 'range',
      min: '0',
      max: '100',
      placeholder: '',
      value: '',
      id: 'chart_plotBorderAlpha',
      note: '',
      defaultActive: '1',
      location: 'chart'
    },{
      label: 'Border dashed',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_plotBorderDashed',
      note: 'Applicable when show border is checked',
      defaultActive: '1',

      location: 'chart',
      
    },
   {
      label: 'Border dashed gap',
      inputFieldType: 'number',
      placeholder: 'eg-3',
      value: '',
      id: 'chart_plotBorderDashGap',
      note: '',
      defaultActive: '1',
      location: 'chart',
  },{
      label: 'Show gradient',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_usePlotGradientColor',
      note: '',
      defaultActive: '1',

      location: 'chart',

  }, {
      label: 'Gradient Color',
      inputFieldType: 'color',
      placeholder: '#ffffff',
      value: '',
      id: 'chart_plotGradientColor',
      note: '',
      defaultActive: '1',
      location: 'chart',

    },{
      label: 'Gradient Color ratio',
      inputFieldType: 'text',
      placeholder: 'eg-40,60',
      value: '',
      id: 'chart_plotFillRatio',
      note: '',
      defaultActive: '1',
      location: 'chart',
    },{
      label: 'Color orientation',
      inputFieldType: 'range',
      placeholder: '',
      min: '0',
      max: '360',
      value: '',
      id: 'chart_plotFillAngle',
      note: '',
      defaultActive: '1',
      location: 'chart',
    },{
      label: 'Hover all elements',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_showHoverEffect',
      note: 'Remove theme to apply this',
      defaultActive: '1',

      location: 'chart',

    },{
      label: 'Hover data plots',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_plotHoverEffect',
      note: '',
      defaultActive: '1',

      location: 'chart',
  }, {
      label: 'Hover Color',
      inputFieldType: 'color',
      placeholder: '#0000ff',
      value: '',
      id: 'chart_plotFillHoverColor',
      note: '',
      defaultActive: '1',
      location: 'chart',
  },{
      label: 'Color opacity',
      inputFieldType: 'range',
      placeholder: '',
      min: '0',
      max: '100',
      value: '',
      id: 'chart_plotFillHoverAlpha',
      note: '',
      defaultActive: '1',
      location: 'chart',

    },{
      label: 'Hover Border color',
      inputFieldType: 'color',
      placeholder: '#0000ff',
      value: '',
      id: 'chart_plotBorderHoverColor',
      note: '',
      defaultActive: '1',
      location: 'chart',

    },{
      label: 'Hover Border opacity',
      inputFieldType: 'range',
      placeholder: '',
      min: '0',
      max: '100',
      value: '',
      id: 'chart_plotBorderHoverAlpha',
      note: '',
      defaultActive: '1',
      location: 'chart',
    },{
      label: 'Hover Border thickness',
      inputFieldType: 'number',
      placeholder: '5',
      value: '',
      id: 'chart_plotBorderHoverThickness',
      note: '',
      defaultActive: '1',
      location: 'chart',
  
    },{
      label: 'Hover Border dashed',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_plotBorderHoverDashed',
      note: '',
      defaultActive: '1',
  
      location: 'chart',
  
    },{
      label: 'Border dashed length',
      inputFieldType: 'number',
      placeholder: '5',
      value: '',
      id: 'chart_plotBorderHoverDashLen',
      note: '',
      defaultActive: '1',
      location: 'chart',
  
    },{
      label: 'Border dashed gap',
      inputFieldType: 'number',
      placeholder: '5',
      value: '',
      id: 'chart_plotBorderHoverDashGap',
      note: '',
      defaultActive: '1',
      location: 'chart',
  
    },{ //for cross-line
      label: 'Show background',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_drawCrossLine',
      note: '',
      defaultActive: '1',
  
      location: 'chart',
  
    },{
      label: 'Background Color',
      inputFieldType: 'color',
      placeholder: '#0000ff',
      value: '',
      id: 'chart_crossLineColor',
      note: '',
      defaultActive: '1',
      location: 'chart',
    },{
      label: 'Background Opacity',
      inputFieldType: 'range',
      placeholder: '',
      min: '0',
      max: '100',
      value: '',
      id: 'chart_crossLineAlpha',
      note: '',
      defaultActive: '1',
      location: 'chart',
    },{
      label: 'Animate Background',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_crossLineAnimation',
      note: '',
      defaultActive: '1',
      location: 'chart',
  
    },{
      label: 'Animation Duration',
      inputFieldType: 'number',
      placeholder: '2',
      value: '',
      id: 'chart_crossLineAnimationDuration',
      note: '',
      defaultActive: '1',
      location: 'chart',
  
    },{
      label: 'Overlap Background',
      inputFieldType: 'checkbox',
      placeholder: '',
      value: '',
      id: 'chart_drawCrossLineOnTop',
      note: '',
      defaultActive: '1',
      location: 'chart',
  
    }],

  series: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'series_color',
    note: '',
    defaultActive: '1',
    location: 'series'
  },{
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '20',
    min: '0',
    max: '100',
    value: '',
    id: 'series_alpha',
    note: '',
    defaultActive: '1',
    location: 'series'
  },{
    label: 'Series border dashed',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'series_dashed',
    note: 'Applicable when show border is checked',    
    defaultActive: '1',
    location: 'series',
  
    },{
    label: 'Series Color ratio',
    inputFieldType: 'text',
    placeholder: 'eg-40,60',
    value: '',
    id: 'series_ratio',
    note: '',
    defaultActive: '1',
    location: 'series',
  },{
    label: 'Hover Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'series_hoverColor',
    note: '',
    defaultActive: '1',
    location: 'series',

  },{
    label: 'Series Color opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'series_hoverAlpha',
    note: '',
    defaultActive: '1',
    location: 'series',

  },{
    label: 'Visible',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'series_visible',
    note: '',    
    defaultActive: '1',
    location: 'series',
  }],
  data: [{
    label: 'Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'data_color',
    note: '',
    defaultActive: '1',
    location: 'data'
  },{
    label: 'Opacity',
    inputFieldType: 'range',
    placeholder: '20',
    min: '0',
    max: '100',
    value: '',
    id: 'data_alpha',
    note: '',
    defaultActive: '1',
    location: 'data'
  },{
    label: 'Data border dashed',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'data_dashed',
    note: 'Applicable when show border is checked',
    defaultActive: '1',
    location: 'data',
  },{
    label: 'Data Color ratio',
    inputFieldType: 'text',
    placeholder: 'eg-40,60',
    value: '',
    id: 'data_ratio',
    note: '',
    defaultActive: '1',
    location: 'data',
  }, {
    label: 'Hover Color',
    inputFieldType: 'color',
    placeholder: '#0000ff',
    value: '',
    id: 'data_hoverColor',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Color opacity',
    inputFieldType: 'range',
    placeholder: '',
    min: '0',
    max: '100',
    value: '',
    id: 'data_hoverAlpha',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Display value',
    inputFieldType: 'text',
    placeholder: '',
    value: '',
    id: 'data_displayValue',
    note: 'If show value is checked',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Hover text',
    inputFieldType: 'text',
    placeholder: 'eg-data',
    value: '',
    id: 'data_toolText',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Data value',
    inputFieldType: 'number',
    placeholder: 'eg-200',
    value: '',
    id: 'data_value',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Link',
    inputFieldType: 'text',
    placeholder: '',
    value: '',
    id: 'data_link',
    note: '',
    defaultActive: '1',
    location: 'data',

  },{
    label: 'Show value',
    inputFieldType: 'checkbox',
    placeholder: '',
    value: '',
    id: 'data_showValue',
    note: '',
    defaultActive: '1',
    location: 'data',

  }],
}