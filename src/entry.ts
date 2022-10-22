import { App } from 'vue'

import MyButton from './button/Button'

import SFCButton from './button/SFCButton.vue'

import JSXButton from './button/JSXButton'

// 导出单独组件
export { MyButton, SFCButton, JSXButton }

// 编写一个实现install的插件

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  },
}
