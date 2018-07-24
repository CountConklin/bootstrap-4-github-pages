import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordServerFormComponent } from './discord-server-form.component';

describe('DiscordServerFormComponent', () => {
  let component: DiscordServerFormComponent;
  let fixture: ComponentFixture<DiscordServerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordServerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordServerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
