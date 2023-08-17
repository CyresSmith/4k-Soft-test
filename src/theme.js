const theme = {
  colors: {
    white: '#fff',
    black: '#222',
    text: '#222',
    background: '#FAFAFA',
    primary: {
      regular: '#215DF6',
      hover: '#5280F3',
      light: '#DCE6FF',
      bg: '#F1F8FF',
    },
    secondary: {
      regular: '#A1AABD',
      light: '#DBDFE9',
      dark: '#838A99',
      bg: '#FAFAFA',
    },
    progress: {
      trail: '#D2F4DD',
      path: '#14AE5C',
      trailInactive: '#E9EBF0',
      pathInactive: '#7996BD',
    },
    danger: '#D21312',
    success: '#14AE5C',
    warning: '#FF6000',
  },

  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
    monospace: 'Poppins, monospace',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '22px',
    xxxl: '24px',
  },

  fontWeights: {
    thin: 300,
    light: 400,
    regular: 500,
    bold: 600,
  },

  lineHeights: {
    s: 1.25,
    m: 1.5,
    l: 1.75,
  },

  space: ['3px', '6px', '12px', '24px', '48px', '96px', '192px', '384px'],

  mediaBreakpoints: {
    mobile: { media: '(max-width: 767px)', width: '320px' },
    tablet: {
      media: '(min-width: 768px) and (max-width: 1439px)',
      width: '768px',
    },
    desktop: { media: '(min-width: 1440px)', width: '1440px' },
  },

  borders: {
    normal: '1px solid',
  },

  radii: {
    s: '6px',
    m: '12px',
    l: '24px',
    xl: '36px',
    xxl: '48px',
    round: '50%',
  },

  transition: {
    primary: 'all 300ms cubic-bezier(0.47,0.01,0.61,0.99)',
  },

  shadow: {
    primary: `0px 4px 18px 0px rgba(0, 0, 0, 0.08);`,
  },
};

export default theme;

document.body.style.fontFamily = theme.fonts.body;
document.body.style.fontSize = theme.fontSizes.s;
document.body.style.color = theme.colors.text;
document.body.style.backgroundColor = theme.colors.background;
