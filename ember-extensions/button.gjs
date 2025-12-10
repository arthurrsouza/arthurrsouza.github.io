import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import OdyButton from '@peek-ui/ember-odyssey/components/ody/button';

export default class ButtonComponent extends Component {
  @tracked count = 0;

  increment = () => (this.count += 1);
  decrement = () => (this.count -= 1);

  <template>
    <OdyButton
      type="button"
      @onClick={{this.increment}}
      data-test-extension-increment
    >Increment</OdyButton>
    <OdyButton
      type="button"
      @onClick={{this.decrement}}
      data-test-extension-decrement
    >Decrement</OdyButton>
    <p data-test-extension-total>You have clicked the button
      {{this.count}}
      times.</p>
  </template>
}
