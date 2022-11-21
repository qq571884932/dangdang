import goodStorage from "good-storage"
export class ImgUtil {
  static imgList: Record<string, string> = {}

  static storageLmgList() {
    this.imgList = goodStorage.get("imgList") || this.loadAllImg()
  }

  static loadAllImg() {
    const imgMap = import.meta.globEager("../assets/**/*.png")
    let absolutePath: string = ""
    let imgName: string = ""
    for (const key in imgMap) {
      absolutePath = imgMap[key].default
      imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1)
      this.imgList[imgName] = absolutePath
    }
    console.log("asdasd")

    goodStorage.set("imgList", this.imgList)
  }
}
