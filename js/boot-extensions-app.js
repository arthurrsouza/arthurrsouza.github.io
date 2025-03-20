export default function run () {
    const app = new window.ExtensionApp(document.querySelector('[data-extension-ember-app]'), {});

    app.start();
}