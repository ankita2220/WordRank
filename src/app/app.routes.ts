// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { CountryRankingComponent } from './components/country-ranking/country-ranking.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';

export const routes: Routes = [
  { path: '', component: CountryRankingComponent },
  { path: 'country/:code', component: CountryDetailComponent }
];
