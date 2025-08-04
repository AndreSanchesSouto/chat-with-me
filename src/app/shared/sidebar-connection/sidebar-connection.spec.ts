import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConnection } from './sidebar-connection';

describe('SidebarConnection', () => {
  let component: SidebarConnection;
  let fixture: ComponentFixture<SidebarConnection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarConnection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarConnection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
