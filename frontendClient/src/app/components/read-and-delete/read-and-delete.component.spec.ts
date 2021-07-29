import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAndDeleteComponent } from './read-and-delete.component';

describe('ReadAndDeleteComponent', () => {
  let component: ReadAndDeleteComponent;
  let fixture: ComponentFixture<ReadAndDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAndDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAndDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
