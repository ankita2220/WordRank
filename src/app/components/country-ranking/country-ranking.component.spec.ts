import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRankingComponent } from './country-ranking.component';

describe('CountryRankingComponent', () => {
  let component: CountryRankingComponent;
  let fixture: ComponentFixture<CountryRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryRankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
