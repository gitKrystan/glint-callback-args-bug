import Component from '@glimmer/component';

interface InnerSignature {
  Args: {
    onFoo(arg: null | string): void;
    bar: string;
  }
}

export default class Inner extends Component<InnerSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Inner: typeof Inner;
  }
}
