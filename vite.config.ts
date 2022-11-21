import { defineConfig,CommonServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
import dotenv from 'dotenv';
export default defineConfig((env)=>{
  let server:CommonServerOptions = {};
  const envData = fs.readFileSync(`.env.${env.mode}`)
  const envMap = dotenv.parse(envData)
  if(env.mode === 'development'){
    console.log('开发者环境');
    console.log(envMap)
    server = {
      host:envMap.VITE_HOST,
      open:true,
      port:Number(envMap.VITE_PORT),
      proxy:{
        [envMap.VITE_BASE_URL]:{
          target: envMap.VITE_PROXY_DOMAIN
        }
      }
    }
  }else{
    console.log('生产环境',envMap);
    server = {
      port:Number(envMap.VITE_PORT),
      host:envMap.VITE_HOST
    }
  }
  return {
    plugins: [vue()],
    server
  }
})
