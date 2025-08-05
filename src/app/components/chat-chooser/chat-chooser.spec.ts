import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatChooser } from './chat-chooser';

describe('ChatChooser', () => {
  let component: ChatChooser;
  let fixture: ComponentFixture<ChatChooser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatChooser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatChooser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
