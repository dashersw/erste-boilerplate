 class RootView extends erste.View {
     template() {
         return `
        <root-view>
            <h1>Hello world!</h1>
            <button>Click me!</button>
        </root-view>
        `;
     }

     onTapButton() {
         this.$('h1').innerText = 'Thanks for the click!';
     }

     get events() {
         return {
             'click': {
                 'button': this.onTapButton
             }
         }
     }
 }
