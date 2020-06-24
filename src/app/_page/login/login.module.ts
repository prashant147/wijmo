import { NgModule } from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';
wjcCore.setLicenseKey('Xeeva Inc.,rfx-prod.xeeva.com|rfx-np.xeeva.com|rfx-stag.xeeva.com|rfx.xeeva.com|procurepack-qc.xeeva.com,562993195327346#B0tYYNiojIklkIs4nIzYXOxAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zZ5dkYkFzRMl6Z0JDU8Q5KrtCRVBjVtlmVktEbNZmYlVlNv2UYwoWcENkey2yM8YXb6hjVKZ4RiJGdZdERtRUb8dHWwZWOCFlSTVHRyoWSERUcyQmT4VlMxRFb636T8hnZ8cVZ6JGcxMWaZVFa4MEWXl6VzNVRwVXN4FzR6NVQsl6UKp5cRR7QTBzUxQEMmV4Sn3GZBV7QZdkWvY4K9hHcBVzT4JWcrQUUrEldXpFZZJmUzlWZtBlcmhVbldUeyZlajxWSQNkcoVkbz3UQntUSxdkVwUVehF5VnhkbXRFbQFWZtBle8AnewIGeXNnbip5RkdnWtJmVVJ7U6EUU6h7b8NXNrs6aVZ4UyQkQElXWYJVW9c4dWdlS9cEckt6aNJzL8lzVTBHSqplYy5WNTJlTNJHbhRzVVNmQKhTeIdFdoZ7cxAndRBTYvkDb9l6L7UkN0pGRLplI0IyUiwiIwYUN9gDNFZjI0ICSiwSO8gTOyETNzgTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsISM5YTMxADI9ETOwkTMwIjI0ICdyNkIsISbvNmLhZXZlhnLjFXLrNWYwVmc5N6byBHLt36YuEmdlVGeugnZyxSbvNmLhZXZlhnLnFGdz5CemJHLt36YuEmdlVGeuAnbtgnZyxSbvNmLhZXZlhnLk3mcw5CemJnI0IyctRkIsIiLj9WSgEmdlVGWiojIh94QiwiI6QzM7IzM5kTMtkZO');
 
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService} from '../../service/user.service';
import { CommanModule} from '../../_components/comman.module';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart'; 
import { WjChartAnimationModule } from 'wijmo/wijmo.angular2.chart.animation';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    WjChartModule,WjChartAnimationModule,
    SharedModule,CommanModule, 
    CommonModule,
    LoginRoutingModule
  ],providers:[UserService]
})
export class LoginModule { }
