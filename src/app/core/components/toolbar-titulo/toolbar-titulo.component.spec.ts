import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTituloComponent } from './toolbar-titulo.component';

describe('ToolbarTituloComponent', () => {
  let component: ToolbarTituloComponent;
  let fixture: ComponentFixture<ToolbarTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
