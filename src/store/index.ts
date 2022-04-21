import { defineStore } from "pinia";
import {Names} from './store-name'
type User={
  name:string,
  age:number
}
let result:User={
  name:"飞机",
  age:12
}
const asyncChange=():Promise<User>=>{
  return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          FName:"sbwq",
          cbNumber:111
        })
      }, 1000);
  })
}
export const useTestStore=defineStore(Names.TEST,{
  state:()=>{
    return{
      user:<User>{},
      userChange: <User>{},
      current:1,
      name:"王强！！！！~~~~"
    }
  },
  // computed
  getters:{
      newName():string{
          return `啊啊啊啊！！！！-${this.name}---${this.getUserAge}`
      },
      getUserAge():number{
          return this.current
      }

  },
  actions:{
    // 同步方法
    setCurrent(value:any){
      this.current=value | 9999999 ;
      this.name= "撒比王强~~~！"
    },
  
    setUser(name:string="12321321"){
          this.user.name=name
    },
    async changeUsers(){
      const result = await asyncChange()
      this.userChange=result
      this.setUser("啊啊啊~~~！！！")
    }

  }
})