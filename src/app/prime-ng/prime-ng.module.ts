import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [],
  exports: [
    MessagesModule,
    MessageModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ],
  imports: [
  ]
})
export class PrimeNgModule { }
