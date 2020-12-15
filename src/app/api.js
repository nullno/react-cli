/**
 * 接口管理 api
 */

import axios from 'axios'


//创建实例时设置默认配置
let option={};
let testPath ='/test';

if(ENV_PRODUCTION == 'beta' || ENV_PRODUCTION == 'pro'){
   option.baseURL='https://musicapi.nullno.com';
   testPath = ''
}

const Axios = axios.create(option);




export const GetMusicName = (params)=>{

	 return new Promise((relolve,reject)=>{
            
            Axios.get(testPath+'/search',{params:params})
				  .then(function (response) {
				  	  relolve(response.data.result.songs)
				  })
				  .catch(function (error) {
				     reject(error)
				  });

	 })
}


