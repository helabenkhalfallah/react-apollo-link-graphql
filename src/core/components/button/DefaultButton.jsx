import styled from 'styled-components'
import ThemeProvider from '../theme/Theme'

// app button theme provider
const { ThemeDefaultButtonProvider } = ThemeProvider

// button props : hcolor, hbackground, halign
// hfont, hfamily, hsize, hstyle, hweight,
// hborder, hradius, hmargin, hpadding
// default button
const DefaultButton = styled.button.attrs({
  // get attribute from props
  // or define default
  hcolor: props => props.hcolor || ThemeDefaultButtonProvider.defaultTheme.btDefaultColor,
  hbackground: props => props.hbackground || ThemeDefaultButtonProvider.defaultTheme.btDefaultBackground,
  halign: props => props.halign || ThemeDefaultButtonProvider.defaultTheme.btDefaultAlign,
  hfont: props => props.hfont || ThemeDefaultButtonProvider.defaultTheme.btDefaultFont,
  hfamily: (props) => {
    let family = props.hfamily || ThemeDefaultButtonProvider.defaultTheme.btDefaultFamily
    if (props && props.hfont) {
      family = ''
    }
    return family
  },
  hsize: (props) => {
    let size = props.hsize || ThemeDefaultButtonProvider.defaultTheme.btDefaultSize
    if (props && props.hfont) {
      size = ''
    }
    return size
  },
  hstyle: (props) => {
    let style = props.hstyle || ThemeDefaultButtonProvider.defaultTheme.btDefaultStyle
    if (props && props.hfont) {
      style = ''
    }
    return style
  },
  hweight: (props) => {
    let weight = props.hweight || ThemeDefaultButtonProvider.defaultTheme.btDefaultWeight
    if (props && props.hfont) {
      weight = ''
    }
    return weight
  },
  hborder: props => props.hborder || ThemeDefaultButtonProvider.defaultTheme.btDefaultBorder,
  hradius: props => props.hradius || ThemeDefaultButtonProvider.defaultTheme.btDefaultRadius,
  hmargin: props => props.hmargin || ThemeDefaultButtonProvider.defaultTheme.btDefaultMargin,
  hpadding: props => props.hpadding || ThemeDefaultButtonProvider.defaultTheme.btDefaultPadding,
}) `
  color: ${props => props.hcolor};
  background: ${props => props.hbackground};
  text-align: ${props => props.halign};
  font: ${props => props.hfont};
  font-family: ${props => props.hfamily};
  font-size: ${props => props.hsize};
  font-style: ${props => props.hstyle};
  font-weight: ${props => props.hweight};
  border: ${props => props.hborder};
  border-radius: ${props => props.hradius};
  margin: ${props => props.hmargin};
  padding: ${props => props.hpadding};
  outline-width: 0;
  outline-style: none;
  outline-color: none;
  outline: none;
`


export default DefaultButton

