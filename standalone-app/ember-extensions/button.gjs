import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

export default class ButtonComponent extends Component {
  @tracked count = 0;

  increment = () => (this.count += 1);
  decrement = () => (this.count -= 1);

  <template>
    <button
      type="button"
      data-test-extension-increment
      {{on "click" this.increment}}
    >Increment</button>
    <button
      type="button"
      data-test-extension-decrement
      {{on "click" this.decrement}}
    >Decrement</button>
    <p data-test-extension-total>You have clicked the button
      {{this.count}}
      times.</p>
  </template>
}
