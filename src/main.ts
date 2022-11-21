import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { ImgUtil } from "./utils/imgUtils"

ImgUtil.storageLmgList()

createApp(App).mount("#app")
