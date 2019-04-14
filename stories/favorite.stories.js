import { storiesOf } from '@storybook/vue'
import { boolean } from '@storybook/addon-knobs'
import rFavorite from '../components/Favorite'

storiesOf('Button', module)
  .add('as a component', () => ({
    components: { rFavorite },
    props: {
      status: {
        default: boolean('お気に入り状態', true)
      }
    },
    template: '<r-favorite :status="status" />'
  }))
