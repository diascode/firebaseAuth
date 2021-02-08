import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppStartComponent } from './app-start.component';

describe('AppStartComponent', () => {
  let component: AppStartComponent;
  let fixture: ComponentFixture<AppStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
