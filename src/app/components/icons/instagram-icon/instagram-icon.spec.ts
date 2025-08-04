import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramIcon } from './instagram-icon';

describe('InstagramIcon', () => {
  let component: InstagramIcon;
  let fixture: ComponentFixture<InstagramIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
