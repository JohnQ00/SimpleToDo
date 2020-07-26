import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonePage } from './done.page';

describe('DonePage', () => {
  let component: DonePage;
  let fixture: ComponentFixture<DonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
