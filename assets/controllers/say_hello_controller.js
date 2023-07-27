import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['name', 'output']

    connect() {
      console.log('la');
    }
    greet() {
      this.outputTarget.textContent = `Hellow, ${this.nameTarget.value}!`
    }
}