import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video.interface';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-create-video-course',
  templateUrl: './create-video-course.component.html',
  styleUrls: ['./create-video-course.component.css']
})
export class CreateVideoCourseComponent implements OnInit {
  @Input() currentVideoCourse: Video;

  videoCourseForm: FormGroup;

  vcTitleErrMsg: string;
  vcShortDescriptionErrMsg: string;
  vcFullDescriptionErrMsg: string;
  vcVideoUrlErrMsg: string;
  vcPosterUrlErrMsg: string;
  vcGithubUrlErrMsg: string;
  vcAuthorErrMsg: string;
  vcLevelErrMsg: string;
  vcLengthErrMsg: string;
  vcDatePublishedErrMsg: string;
  vcTagsErrMsg: string;

  private titleErrorMessages = {
    required: 'Må ikke være tomt',
    minlength: 'Angiv mindst 3 tegn'
  };
  private shortDescriptionErrorMessages = {
    required: 'Må ikke være tomt',
    minlength: 'Angiv mindst 128 tegn',
    maxlength: 'For lang - max 256 tegn'
  };
  private fullDescriptionErrorMessages = {
    minlength: 'Angiv mindst 256 tegn'
  };
  private videoUrlErrorMessages = {
    pattern: 'Ikke korrekt URL'
  };
  private posterUrlErrorMessages = {
    pattern: 'Ikke korrekt URL'
  };
  private githubUrlErrorMessages = {
    pattern: 'Ikke korrekt URL'
  };
  private authorErrorMessages = {
    required: 'Skal udfyldes',
    minlength: 'Mindst 3 tegn'
  };
  private levelErrorMessages = {
    required: 'Skal vælge en værdi'
  };
  private lengthErrorMessages = {
    required: 'Skal udfyldes',
    min: 'Kursets længde skal minimum være 1 minut'
  };
  private datePublishedErrorMessages = {
    validDate: 'Angiv en dato på formen dd-mm-yyyy'
  };
  private tagsErrorMessages = {
    minLength: 'Angiv mindst 3 tegn'
  };

  constructor(private fb: FormBuilder) { }

  isDisabled: boolean;

  ngOnInit() {

    this.videoCourseForm = this.fb.group({
      vcTitle: ['', [Validators.required, Validators.minLength(3)]],
      vcShortDescription: ['', [Validators.required, Validators.minLength(128), Validators.maxLength(256)]],
      vcFullDescription: ['', [Validators.minLength(256)]],
      vcVideoUrl: ['', [Validators.pattern('^((https?|http?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')]],
      vcPosterUrl: ['', [Validators.pattern('^((https?|http?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')]],
      vcGithubUrl: ['', [Validators.pattern('^((https?|http?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')]],
      vcAuthor: ['', [Validators.required, Validators.minLength(3)]],
      vcLevel: ['', [Validators.required]],
      vcLength: [0, [Validators.required, Validators.min(1)]],
      vcDatePublished: ['', [this.ValidateDate]],
      vcTags: ['', [Validators.minLength(3)]]
    });

    const vcTitleControl = this.videoCourseForm.get('vcTitle');
    const vcShortDescriptionControl = this.videoCourseForm.get('vcShortDescription');
    const vcFullDescriptionControl = this.videoCourseForm.get('vcFullDescription');
    const vcVideoUrlControl = this.videoCourseForm.get('vcVideoUrl');
    const vcPosterUrlControl = this.videoCourseForm.get('vcPosterUrl');
    const vcGithubUrlControl = this.videoCourseForm.get('vcGithubUrl');
    const vcAuthorControl = this.videoCourseForm.get('vcAuthor');
    const vcLevelControl = this.videoCourseForm.get('vcLevel');
    const vcLengthControl = this.videoCourseForm.get('vcLength');
    const vcDatePublishedControl = this.videoCourseForm.get('vcDatePublished');
    const vcTagsControl = this.videoCourseForm.get('vcTags');

     vcTitleControl.valueChanges.subscribe(() => this.vcTitleValidityCheck(vcTitleControl));
     vcShortDescriptionControl.valueChanges.subscribe(() => this.vcShortDescriptionValidityCheck(vcShortDescriptionControl));
     vcFullDescriptionControl.valueChanges.subscribe(() => this.vcFullDescriptionValidityCheck(vcFullDescriptionControl));
     vcVideoUrlControl.valueChanges.subscribe(() => this.vcVideoUrlValidityCheck(vcVideoUrlControl));
     vcPosterUrlControl.valueChanges.subscribe(() => this.vcPosterUrlValidityCheck(vcPosterUrlControl));
     vcGithubUrlControl.valueChanges.subscribe(() => this.vcGithubUrlValidityCheck(vcGithubUrlControl));
     vcAuthorControl.valueChanges.subscribe(() => this.vcAuthorValidityCheck(vcAuthorControl));
     vcLevelControl.valueChanges.subscribe(() => this.vcLevelValidityCheck(vcLevelControl));
     vcLengthControl.valueChanges.subscribe(() => this.vcLengthValidityCheck(vcLengthControl));
     vcDatePublishedControl.valueChanges.subscribe(() => this.vcDatePublishedValidityCheck(vcDatePublishedControl));
     vcTagsControl.valueChanges.subscribe(() => this.vcTagsValidityCheck(vcTagsControl));
    
  }

vcTitleValidityCheck(c: AbstractControl): void {
    this.vcTitleErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcTitleErrMsg = Object.keys(c.errors).map(key => this.titleErrorMessages[key]).toString();
    }
  }
vcShortDescriptionValidityCheck(c: AbstractControl): void {
    this.vcShortDescriptionErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcShortDescriptionErrMsg = Object.keys(c.errors).map(key => this.shortDescriptionErrorMessages[key]).toString();
    }
  }
vcFullDescriptionValidityCheck(c: AbstractControl): void {
    this.vcFullDescriptionErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcFullDescriptionErrMsg = Object.keys(c.errors).map(key => this.fullDescriptionErrorMessages[key]).toString();
    }
  }
vcVideoUrlValidityCheck(c: AbstractControl): void {
    this.vcVideoUrlErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcVideoUrlErrMsg = Object.keys(c.errors).map(key => this.videoUrlErrorMessages[key]).toString();
    }
  }
vcPosterUrlValidityCheck(c: AbstractControl): void {
    this.vcPosterUrlErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcPosterUrlErrMsg = Object.keys(c.errors).map(key => this.posterUrlErrorMessages[key]).toString();
    }
  }
vcGithubUrlValidityCheck(c: AbstractControl): void {
    this.vcGithubUrlErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcGithubUrlErrMsg = Object.keys(c.errors).map(key => this.githubUrlErrorMessages[key]).toString();
    }
  }
  vcAuthorValidityCheck(c: AbstractControl): void {
    this.vcAuthorErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcAuthorErrMsg = Object.keys(c.errors).map(key => this.authorErrorMessages[key]).toString();
    }
  }
  vcLevelValidityCheck(c: AbstractControl): void {
    this.vcLevelErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcLevelErrMsg = Object.keys(c.errors).map(key => this.levelErrorMessages[key]).toString();
    }
  }
  vcLengthValidityCheck(c: AbstractControl): void {
    this.vcLengthErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcLengthErrMsg = Object.keys(c.errors).map(key => this.lengthErrorMessages[key]).toString();
    }
  }
  vcDatePublishedValidityCheck(c: AbstractControl): void {
    this.vcDatePublishedErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcDatePublishedErrMsg = Object.keys(c.errors).map(key => this.datePublishedErrorMessages[key]).toString();
      console.log('error: ', c.errors);
    }
  }
  vcTagsValidityCheck(c: AbstractControl): void {
    this.vcTagsErrMsg = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.vcTagsErrMsg = Object.keys(c.errors).map(key => this.tagsErrorMessages[key]).toString();
    }
  }

  private ValidateDate(c: AbstractControl) {
    console.log('Do i get here at all?');
    if (!(c.value instanceof Date) && isNaN(c.value.valueOf())) {
      console.log('error', c.errors);
      return {validDate: false};
    }
    console.log('no error');
    return null;
  }



  save() {
    console.log('Save Clicked');
    return false;
  }

}
