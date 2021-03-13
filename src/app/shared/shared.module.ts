import { NgModule } from '@angular/core';
import * as proxies from './service-proxies/service-proxies'
import { forEach } from 'underscore';

let _proxies = [] 
forEach(proxies, (ele, k) => {  
  if(ele.toString().includes('ServiceProxy')) _proxies.push(ele);
});

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: _proxies,
})
export class SharedModule {}
