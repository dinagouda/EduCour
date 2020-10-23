import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  constructor() { }

  ngOnInit(): void {
    this.chartColor = "#FFFFFF";

    //   chart one code
      this.canvas = document.getElementById("myChart0");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'bar',

        data: {
          labels: ['Student', 'Teachers', 'Teacher Requests', 'Subjects'],
          datasets: [{
              label: 'data',
              data: [9, 52, 75, 163],
              backgroundColor: ['#337ab7', '#4CAF50', '#FFC107', '#FF5722'],
              borderWidth: 1
          }, {
              label: 'series', // Name the series
              data: [40, 90, 120, 220],
              type: 'line', // Specify the data values array
              fill: false,
              borderColor: '#2196f3', // Add custom color border (Line)
              backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
              borderWidth: 1,
              order: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      }
      });

   // chart two code
      this.canvas = document.getElementById("myChart1");
      this.ctx = this.canvas.getContext("2d");
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: ['Student', 'Teachers', 'Teacher Requests', 'Subjects'],
          datasets: [{
              label:  ['Student', 'Teachers', 'Teacher Requests', 'Subjects'],
              data: [9, 52, 75, 163],
              backgroundColor: [
                  '#337ab7',
                  '#4CAF50',
                  '#FFC107',
                  '#FF5722'
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  
              ],
              borderWidth: 1,
              borderAlign: 'inner'
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
      });

     

 

   
   

    }
    
    
  }
