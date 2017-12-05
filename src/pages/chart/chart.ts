import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import firebase from 'firebase';

/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  @ViewChild('lineCanvas') lineCanvas;

  public lineChart: any;

  public uid: string = firebase.auth().currentUser.uid;
  public chartData: Array<any> = [];
  public days: Array<any> = [];
  public chartType: string = 'line';


  public totalsRef: firebase.database.Reference = firebase.database().ref('userProfile/' + this.uid + '/totals');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let tempChart = new Chart(this.lineCanvas.nativeElement);

    console.log('ionViewDidLoad ChartPage');

    let dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let today = new Date();

    let day = new Date();

    let dd, mm, yyyy, curr;

    for(let i = 0; i < 7; i++) {
      let that = this;
      day = new Date( today.getTime() - ((6-i) * 24 * 60 * 60 * 1000) );

      dd = day.getDate();
      mm = day.getMonth()+1;
      yyyy = day.getFullYear();

      curr = mm+'/'+dd+'/'+yyyy;

      // console.log(curr);

      // Add day name to data
      this.days.push(dayNames[day.getDay()]);

      //console.log(day.getDay());

      // Add day amount to data
      this.totalsRef.orderByChild('date').equalTo(curr).once('value', snapshot => {
        //let temp = snapshot.val();

        if(snapshot.val()) {
          console.log('Here');

          snapshot.forEach( totalSnapshot => {
            this.chartData.unshift(totalSnapshot.val().amount);

            return false;
          })


        } else {
          this.chartData.unshift(0);
        }
        // console.log(this.chartData[0].data);

      }).then(function() {
        that.lineChart = new Chart(that.lineCanvas.nativeElement, {
          type: 'line',
          data: {
            labels: that.days,
            datasets: [{
              label: 'Reps this Week',
              data: that.chartData,
              fill: true
            }]
          }
        });

      });




    }

    console.log(this.chartData);




  }


  chartClicked() {
    console.log('Chart Clicked');
  }

  chartHovered() {
    console.log('Chart Hovered')
  }

}
