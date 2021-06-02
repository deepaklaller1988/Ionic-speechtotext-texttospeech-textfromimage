import { Component } from '@angular/core';
import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner/ngx';
import { OCR, OCRResult, OCRSourceType } from '@ionic-native/ocr/ngx';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  recTextimage;
  image = 'https://picsum.photos/500';
  constructor(
    public documentScanner: DocumentScanner,
    public ocr: OCR
  ) {}

  scanDoc(){
    const opts: DocumentScannerOptions = {
      sourceType:0
    };
    this.documentScanner.scanDoc(opts)
      .then((res: string) => {
        this.image = Capacitor.convertFileSrc(res);
        this.recTextimage = res;
        console.log(this.image);
      })
      .catch((error: any) => console.error(error));
  }

  recText(){
    console.log(this.ocr);
    this.ocr.recText(OCRSourceType.NORMFILEURL,this.recTextimage)
  .then((res: OCRResult) => console.log(res))
  .catch((error: any) => console.error(error));
  }

}
