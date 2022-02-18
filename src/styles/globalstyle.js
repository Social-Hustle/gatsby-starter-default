import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
*,
*:before,
*:after{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box
}

html{
	overflow-x: hidden;
    scroll-behavior: smooth;
}

body,
html {
	margin: 0;
}

body{
	-webkit-font-smoothing: antialiased;
}

a{
	text-decoration: none;
	color: inherit;
}

ul,
ol,
li{
	margin: 0;
	padding: 0;
}

a, abbr, acronym, address, applet, b, big, blockquote, body, caption, center, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, i, iframe, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, u, ul, var {
    background: 0 0;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
}

button,
legend {
    border: 0;
    padding: 0
}

pre,
textarea {
    overflow: auto
}

button,
legend,
td,
th {
    padding: 0
}

blockquote,
q {
    quotes: none
}

blockquote:after,
blockquote:before,
q:after,
q:before {
    content: '';
    content: none
}

table {
    border-spacing: 0;
    border-collapse: collapse
}

audio,
canvas,
progress,
video {
    display: inline-block;
    vertical-align: baseline
}

audio:not([controls]) {
    display: none;
    height: 0
}

[hidden],
template {
    display: none
}

abbr[title] {
    border-bottom: 1px dotted
}

b,
optgroup,
strong {
    font-weight: 700
}

dfn,
em {
    font-style: italic
}

mark {
    color: #000;
    background: #ff0
}

small {
    font-size: 80%
}

sub,
sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

hr {
    height: 0;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
}

code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit
}

button {
    overflow: visible
}

button,
select {
    text-transform: none
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],
html input[disabled] {
    cursor: default
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    padding: 0;
    border: 0
}

input {
    line-height: normal
}

input[type=checkbox],
input[type=radio] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    width: auto
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    height: auto
}

input[type=search] {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-appearance: textfield
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

fieldset {
    padding: .35em .625em .75em;
    margin: 0 2px;
    border: 1px solid silver
}

textarea {
    padding: 5px 15px
}

ol,
ul {
    list-style: none inside
}

figure{
	margin: 0;
	padding: 0;
}
html{
    font-size: 16px;
}
`

export default Style
