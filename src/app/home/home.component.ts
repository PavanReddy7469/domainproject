import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    Chart.register(...registerables);
    this.createAttendanceChart();
  }

  createAttendanceChart() {
    const ctx = document.getElementById('attendanceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Present', 'Absent'], // Removed 'Late'
        datasets: [{
          data: [75, 25], // Adjusted data accordingly
          backgroundColor: ['#007bff', '#dc3545'], // Colors for Present and Absent
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      }
    });
  }
}
