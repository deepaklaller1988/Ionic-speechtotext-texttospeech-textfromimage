import { Component } from '@angular/core';
import { TextToSpeech,TTSOptions } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  text;
  constructor(
    public tts: TextToSpeech,
  ) {}

  speak(){
    const option: TTSOptions = {
      text: this.text,
      locale: 'en-US',
      rate: 2,
    };
    this.tts.speak(option).then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

}
