import { ChangeDetectorRef, Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  matches: any = [];
  constructor(
    public speechRecognition: SpeechRecognition,
    public ref: ChangeDetectorRef,
  ) {}

  hasPermission(){
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => console.log(hasPermission));
  }

  requestPermission(){
    this.speechRecognition.requestPermission()
  .then(
    () => console.log('Granted'),
    () => console.log('Denied')
  );
  }

  getSupportedLanguages(){
    this.speechRecognition.getSupportedLanguages().then(
    (languages: string[]) => console.log(languages),
    (error) => console.log(error)
  );
  }

  stopListening(){
    this.speechRecognition.stopListening();
  }

  startListening(){
    this.speechRecognition.startListening().subscribe(
    (matches: string[]) => {
      this.matches = matches;
      this.ref.detectChanges();
      console.log(matches);
    },
    (onerror) => console.log('error:', onerror)
  );
  }

  isRecognitionAvailable(){
    this.speechRecognition.isRecognitionAvailable()
    .then((available: boolean) => console.log(available));
  }


}
