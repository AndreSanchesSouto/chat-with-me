import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreePointsIcon } from './three-points-icon';


describe('ThreePoints', () => {
  let component: ThreePointsIcon;
  let fixture: ComponentFixture<ThreePointsIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreePointsIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreePointsIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
