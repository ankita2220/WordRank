// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-country-ranking',
//   imports: [],
//   templateUrl: './country-ranking.component.html',
//   styleUrl: './country-ranking.component.css'
// })
// export class CountryRankingComponent {

// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-country-ranking',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './country-ranking.component.html',
// })
// export class CountryRankingComponent implements OnInit {
//   countries: any[] = [];
//   filteredCountries: any[] = [];
//   searchText: string = '';
//   sortBy: string = 'population';

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
//       this.countries = data;
//       this.updateFilteredCountries();
//     });
//   }

//   updateFilteredCountries(): void {
//     this.filteredCountries = this.countries
//       .filter((country) =>
//         country.name.common.toLowerCase().includes(this.searchText.toLowerCase())
//       )
//       .sort((a, b) => b[this.sortBy] - a[this.sortBy]);
//   }

//   goToDetail(code: string): void {
//     this.router.navigate(['/country', code]);
//   }
// }

// @Component({
//   selector: 'app-country-ranking',
//   standalone: true,  // Make sure it's a standalone component
//   imports: [CommonModule, FormsModule],  // Include necessary modules here
//   templateUrl: './country-ranking.component.html',
// })
// export class CountryRankingComponent implements OnInit {
//   countries: any[] = [];
//   filteredCountries: any[] = [];
//   searchText: string = '';
//   sortBy: string = 'population';

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
//       this.countries = data;
//       this.updateFilteredCountries();
//     });
//   }

//   updateFilteredCountries(): void {
//     this.filteredCountries = this.countries
//       .filter((country) =>
//         country.name.common.toLowerCase().includes(this.searchText.toLowerCase())
//       )
//       .sort((a, b) => b[this.sortBy] - a[this.sortBy]);
//   }

//   goToDetail(code: string): void {
//     this.router.navigate(['/country', code]);
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; // Import HttpClient directly
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common'; // Import CommonModule to use common Angular features
// import { FormsModule } from '@angular/forms'; // Import FormsModule for forms
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to use HttpClient

// @Component({
//   selector: 'app-country-ranking',
//   standalone: true, // Mark it as standalone
//   imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule here
//   templateUrl: './country-ranking.component.html',
// })
// export class CountryRankingComponent implements OnInit {
//   countries: any[] = [];
//   filteredCountries: any[] = [];
//   searchText: string = '';
//   sortBy: string = 'population';

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
//       this.countries = data;
//       this.updateFilteredCountries();
//     });
//   }

//   updateFilteredCountries(): void {
//     this.filteredCountries = this.countries
//       .filter((country) =>
//         country.name.common.toLowerCase().includes(this.searchText.toLowerCase())
//       )
//       .sort((a, b) => b[this.sortBy] - a[this.sortBy]);
//   }

//   goToDetail(code: string): void {
//     this.router.navigate(['/country', code]);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; 
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common'; // For common Angular features
// import { FormsModule } from '@angular/forms'; // For ngModel binding in forms
// import { HttpClientModule } from '@angular/common/http'; // For HttpClientModule to make HTTP requests

// @Component({
//   selector: 'app-country-ranking',
//   standalone: true, // Mark as a standalone component
//   imports: [CommonModule, FormsModule, HttpClientModule], // Import necessary modules
//   templateUrl: './country-ranking.component.html',
//   styleUrls: ['./country-ranking.component.css']
// })
// export class CountryRankingComponent implements OnInit {
//   countries: any[] = [];          // Array to hold all countries
//   filteredCountries: any[] = [];  // Array to hold filtered countries
//   searchText: string = '';        // Search text bound to the input field
//   sortBy: string = 'population';  // Default sorting criteria

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     // Fetch countries data from the API
//     this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
//       this.countries = data;
//       this.updateFilteredCountries();  // Filter and sort countries on initial load
//     });
//   }

//   // Method to filter and sort countries based on search text and selected sorting criteria
//   updateFilteredCountries(): void {
//     this.filteredCountries = this.countries
//       .filter((country) =>
//         country.name.common.toLowerCase().includes(this.searchText.toLowerCase()) // Filter based on search text
//       )
//       .sort((a, b) => {
//         // Sort based on the selected criteria ('population', 'area', 'name')
//         if (this.sortBy === 'name') {
//           return a.name.common.localeCompare(b.name.common);
//         } else {
//           return b[this.sortBy] - a[this.sortBy];
//         }
//       });
//   }

//   // Method to handle search input changes
//   onSearchChange(): void {
//     this.updateFilteredCountries(); // Reapply filter and sorting when search text changes
//   }

//   // Method to handle sort option changes
//   onSortChange(): void {
//     this.updateFilteredCountries(); // Reapply sorting when sort option changes
//   }

//   // Navigate to the detailed country page on click
//   goToDetail(code: string): void {
//     this.router.navigate(['/country', code]); // Navigate to the detail page for the selected country
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-country-ranking',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './country-ranking.component.html',
  styleUrls: ['./country-ranking.component.css']
})
export class CountryRankingComponent implements OnInit {
  countries: any[] = [];          
  filteredCountries: any[] = [];  
  searchText: string = '';        
  sortBy: string = 'population';  
  isUNMember: boolean = false;   
  isIndependent: boolean = false; 
  selectedRegion: string = '';   

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
      this.countries = data;
      this.updateFilteredCountries();
    });
  }

  updateFilteredCountries(): void {
    this.filteredCountries = this.countries
      .filter(country => 
        country.name.common.toLowerCase().includes(this.searchText.toLowerCase())
      )
      .filter(country => 
        this.selectedRegion ? country.region === this.selectedRegion : true
      )
      .filter(country => 
        this.isUNMember ? country.unMember === true : true
      )
      .filter(country => 
        this.isIndependent ? country.independent === true : true
      )
      .sort((a, b) => {
        if (this.sortBy === 'name') {
          return a.name.common.localeCompare(b.name.common);
        } else {
          return b[this.sortBy] - a[this.sortBy];
        }
      });
  }

  onSearchChange(): void {
    this.updateFilteredCountries();
  }

  onSortChange(): void {
    this.updateFilteredCountries();
  }

  onStatusChange(): void {
    this.updateFilteredCountries();
  }

  goToDetail(code: string): void {
    this.router.navigate(['/country', code]);
  }
}
