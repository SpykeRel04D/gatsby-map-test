import { css } from "styled-components"
import styled from "styled-components"
import { BREAKPOINTS, FONT_BASE_SIZE, SPACE } from "./settings"

const getRatio = (
  originalWidth: number,
  originalHeight: number,
  expectedWidth: number = 0,
  expectedHeight: number = 0
) => {
  let height
  let width

  if (expectedWidth > 0) {
    height = Math.ceil((expectedWidth / originalWidth) * originalHeight)
    width = expectedWidth
  } else {
    height = expectedHeight
    width = Math.ceil((expectedHeight / originalHeight) * originalWidth)
  }
  return {
    height,
    width,
    styled: `
      height: ${height}px;
      width: ${width}px;
    `,
  }
}

/**
 * Rems
 * Transforms pixels into rems based in the base-font-size set in the theme
 * file
 *
 * @param {integer|string} n — Number to transform
 */
const rems = (n: any) => `${parseInt(n, 10) / FONT_BASE_SIZE}rem`

/**
 * Space
 * Vertical and Horizontal Rhythm generator based on the base-line-height set in
 * the theme file
 *
 * @param {float} n — Multiplier, can accept decimal numbers
 */
const space = (n: number = 1) => rems(SPACE * n)

const getSizeFromBreakpoint = (value: any, max: boolean = false) => {
  let mq
  if (BREAKPOINTS[value]) {
    mq = max ? BREAKPOINTS[value] - 1 : BREAKPOINTS[value]
    // tslint:disable-next-line:radix
  } else if (parseInt(value)) {
    mq = max ? value - 1 : value
  } else {
    // tslint:disable-next-line:no-console
    console.error(
      `${value} is not a valid breakpoint or size specified for media.`
    )
  }
  return mq ? `${mq / FONT_BASE_SIZE}em` : 0
}

const generateMedia = () => {
  const max = (breakpoint: any) => (...args: any[]) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `

  const min = (breakpoint: any) => (...args: any[]) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css.call(null, ...args)};
    }
  `

  const between = (firstBreakpoint: any, secondBreakpoint: any) => (
    ...args: any[]
  ) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint
      )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `

  return {
    between,
    max,
    min,
  }
}

const media = generateMedia()

const getAlternateLinks = (data: Array<any>) => {
  return data.filter(element => element.attributes.rel === "alternate")
}

const removableMetatags = ["alternate", "shortlink"]
const cleanMetatags = (data: Array<any>) =>
  data.filter(element => !removableMetatags.includes(element.attributes.rel))

const getSrcset = (data: any, selection?: string[]) => {
  let srcset: string = ""
  for (let key in data) {
    if (selection) {
      if (selection.includes(key))
        srcset += `${data[key].href} ${BREAKPOINTS[key]}w, `
    } else if (key in BREAKPOINTS)
      srcset += `${data[key].href} ${BREAKPOINTS[key]}w, `
  }
  return srcset.slice(0, srcset.length - 2)
}

const externalLink = (url: string) => {
  let link = /^((http|https):\/\/)/
  return link.test(url)
}

const cleanVideoUrl = (url: string) => {
  if (url.includes("youtube")) {
    return "https://www.youtube.com/embed/" + url.split("watch?v=").pop()
  } else return url
}

const deduplicateObject = (obj, term) => {
  const seen = new Set()
  return obj.filter(el => {
    const duplicate = seen.has(el[term])
    seen.add(el[term])
    return !duplicate
  })
}

const reduceCountries = data => {
  const nodes = data.filter(node => node.status)
  const countries = []
  const languages = []

  nodes.map(country => {
    countries.push({
      id: country.id,
      title: country.title,
      code: country.field_country_code.toLowerCase(),
      domain: country.field_domain.uri,
      langcode:
        country.relationships.field_default_language.drupal_internal__id,
      international: !!(country.field_country_code.toLowerCase() === "int"),
    })

    const defaultCountryLanguage =
      country.relationships.field_default_language.drupal_internal__id
    country.relationships.field_languages.map(language => {
      languages.push({
        id: language.drupal_id,
        title: language.label,
        code: language.drupal_internal__id.toLowerCase(),
        default: !!(language.drupal_internal__id === defaultCountryLanguage),
      })
    })
  })

  return {
    countries: deduplicateObject(countries, "code"),
    languages: deduplicateObject(languages, "code"),
  }
}

export {
  cleanMetatags,
  getAlternateLinks,
  getRatio,
  getSizeFromBreakpoint,
  media,
  reduceCountries,
  rems,
  getSrcset,
  externalLink,
  cleanVideoUrl,
  space,
}
