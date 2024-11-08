import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  email: string = '';  // Bind email model to input field

  constructor(
    private translateService: TranslateService,
    private translationService: TranslationService
  ) { }

  ngOnInit() {
    const language = 'en';  // Default to 'en'
    this.loadTranslations(language);
  }

  loadTranslations(language: string) {
    this.translationService.getTranslations(language).subscribe(langJson => {
      const formattedTranslations: any = {};
      // Iterate through each translation object
      langJson.forEach((translation: any) => {
        formattedTranslations[translation.text] = translation[language];
      });

      this.translateService.use(language);
      this.translateService.setTranslation(language, formattedTranslations, true); 
    });
  }

  switchLanguage(language: string) {
    this.loadTranslations(language);
  }

  onSubmit() {
    // Handle form submission logic
    console.log('Form submitted with email:', this.email);
  }
}
