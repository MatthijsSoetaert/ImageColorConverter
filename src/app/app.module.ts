import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversionSelectorComponent } from './conversion-selector/conversion-selector.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ColorPickersComponent } from './color-pickers/color-pickers.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ConversionSelectorComponent,
    ImageViewerComponent,
    ColorPickersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
