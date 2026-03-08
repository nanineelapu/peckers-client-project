import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import product from './product'
import homepage from './homepage'
import location from './location'
import sliderCard from './sliderCard'
import homepagePersonDetails from './homepagePersonDetails'
import footer from './footer'
import menupage from './menupage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, homepage, location, sliderCard, homepagePersonDetails, footer, menupage],
}

