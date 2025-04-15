// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-country-detail',
//   imports: [],
//   templateUrl: './country-detail.component.html',
//   styleUrl: './country-detail.component.css'
// })
// export class CountryDetailComponent {

// }

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-country-detail',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './country-detail.component.html',
// })
// export class CountryDetailComponent implements OnInit {
//   country: any; // Replace with a proper interface if you have one

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     const code = this.route.snapshot.paramMap.get('code');
//     this.http.get(`https://restcountries.com/v3.1/alpha/${code}`).subscribe((data: any) => {
//       this.country = Array.isArray(data) ? data[0] : data;
//     });
//   }

//   goToNeighbor(code: string): void {
//     this.router.navigate(['/country', code]);
//   }
// }

// @Component({
//   selector: 'app-country-detail',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './country-detail.component.html',
//   styleUrls: ['./country-ranking.component.css'] 
// })
// export class CountryDetailComponent implements OnInit {
//   country: any;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     const code = this.route.snapshot.paramMap.get('code');
//     this.http.get(`https://restcountries.com/v3.1/alpha/${code}`).subscribe((data: any) => {
//       this.country = Array.isArray(data) ? data[0] : data;
//     });
//   }

//   goToNeighbor(code: string): void {
//     this.router.navigate(['/country', code]);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.http.get(`https://restcountries.com/v3.1/alpha/${code}`).subscribe((data: any) => {
        this.country = Array.isArray(data) ? data[0] : data;
      });
    }
  }

  goToNeighbor(code: string): void {
    this.router.navigate(['/country', code]);
  }
}
