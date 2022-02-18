import breakpoints from './breakpoints'

//https://willmendesneto.com/posts/easy-and-reusable-media-query-breakpoints-for-your-css-in-js-components/

const mediaQueries = {
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
}

export default mediaQueries
