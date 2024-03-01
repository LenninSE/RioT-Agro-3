import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoTomatePage } from './info-tomate.page';

describe('InfoTomatePage', () => {
  let component: InfoTomatePage;
  let fixture: ComponentFixture<InfoTomatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoTomatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
