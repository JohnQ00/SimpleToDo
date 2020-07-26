import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TosPage } from './tos.page';

describe('TosPage', () => {
  let component: TosPage;
  let fixture: ComponentFixture<TosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
