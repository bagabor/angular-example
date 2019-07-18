import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { debounceTime } from 'rxjs/operators';
import { forbiddenNameValidator, identityRevealedValidator, validationMessages } from 'src/app/shared/validation.directive';

@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.scss']
})
export class ReactiveDrivenComponent implements OnInit {

  profileForm: FormGroup;
  firstNameMessage = '';
  lastNameMessage = '';
  streetMessage = '';
  cityMessage = '';
  stateMessage = '';
  zipMessage = '';

  constructor(private fb: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService, private router: Router) {
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/London/i)]],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    }, { validators: identityRevealedValidator });

    this.setupValidation();
  }

  onSubmit(): void {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Saved Hero' });
  }

  onCancel(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to leave this page?',
      accept: () => {
        this.router.navigateByUrl('');
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    (this.profileForm.get('aliases') as FormArray).push(this.fb.control(''));
  }

  //added validation on every input
  setupValidation(): void {
    const firstNameControl = this.profileForm.get('firstName');
    firstNameControl.valueChanges.pipe(
      debounceTime(1000) //waiting 1 sec with validation.. it improves the user experience 
    ).subscribe(() => {
      this.firstNameMessage = this.setMessage(firstNameControl) // set the error message if there is any error
    });

    const lastNameControl = this.profileForm.get('lastName');
    lastNameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.lastNameMessage = this.setMessage(lastNameControl)
    });

    const streetControl = this.profileForm.get('address.street');
    streetControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.streetMessage = this.setMessage(streetControl)
    });

    const cityControl = this.profileForm.get('address.city');
    cityControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.cityMessage = this.setMessage(cityControl)
    });

    const stateControl = this.profileForm.get('address.state');
    stateControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.stateMessage = this.setMessage(stateControl)
    });

    const zipControl = this.profileForm.get('address.zip');
    zipControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.zipMessage = this.setMessage(zipControl)
    });
  }

  setMessage(c: AbstractControl): string {
    let controlMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      controlMessage = Object.keys(c.errors).map(
        key => validationMessages[key]).join(' ');
    }
    return controlMessage;
  }
}
