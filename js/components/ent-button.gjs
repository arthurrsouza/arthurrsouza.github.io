import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import OdyButton from 'OdyButton'

export default class HelloWorld extends Component {
  @tracked count = 0;

  increment = () => this.count += 1;

  <template>
    <p>You have clicked the button {{this.count}} times.</p>

    <OdyButton @variant="primary" @onClick={{this.increment}}>Click</OdyButton>
  </template>
}