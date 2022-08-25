import Component from '@glimmer/component';

export default class Outer extends Component {
  handleFoo(arg: string): void {
    // Uncaught TypeError: Cannot read properties of null
    arg.charAt(1);
  }

  bar: string | null = null;
}
