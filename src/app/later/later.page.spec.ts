import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaterPage } from './later.page';

describe('LaterPage', () => {
  let component: LaterPage;
  let fixture: ComponentFixture<LaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
