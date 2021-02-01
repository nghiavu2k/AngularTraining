import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  @Input() childData

  ngOnChanges(changes: SimpleChanges) {
    if(this.childData){
      this.formGroup.controls['id'].setValue(this.childData.id);
      this.formGroup.controls['name'].setValue(this.childData.name);
      this.formGroup.controls['age'].setValue(this.childData.age);
      this.formGroup.controls['address'].setValue(this.childData.address);
      this.formGroup.controls['email'].setValue(this.childData.email);
      this.formGroup.controls['career'].setValue(this.childData.career);
      this.formGroup.controls['hobby'].setValue(this.childData.hobby);
      };
  }

  formGroup = this.fb.group({
    id: new FormBuilder,
    name: ['', Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    age: ['', Validators.required, Validators.min(1), Validators.max(100)],
    address: ['', Validators.required, Validators.minLength(10)],
    email: ['', Validators.required, Validators.email],
    career: ['', Validators.required],
    hobby: ['', Validators.required]
  })

  careers = ['fresher', 'middle', 'cto']

  hobbies = ['soccer', 'football', 'basketball']

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem() {
    this.newItemEvent.emit(this.formGroup.value);
    this.formGroup.reset()
  }


  @Output() updateItem = new EventEmitter<any>()

  update() {
    this.updateItem.emit(this.formGroup.value)
    this.formGroup.reset()
  }



}
